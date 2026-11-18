// Push notifications (OneSignal)
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// Offline support.
//  - CACHE: the app itself (pages, scripts, our own images). Saved on install, refreshed in the background.
//  - MEDIA: pictures, fonts and practice audio that live on other sites (Squarespace, Google Fonts,
//    jamesalbert.it/s/...). Saved the first time they're seen, so they also work with no internet.
// Bump the version number after big changes so phones pick up the new files.
const CACHE = 'ja-app-v94';
const MEDIA = 'ja-media-v1';
const MEDIA_MAX = 400; // most items kept in MEDIA; the oldest are removed first

const FILES = [
  '/', '/index.html', '/manifest.json',
  '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png',
  '/articles.js', '/dispatch.js', '/homework.js', '/team.js', '/hub.js', '/library.js', '/videos.js',
  '/leveltest.js', '/club.js', '/register.js', '/practice.js', '/rsvp.js', '/chat-nudge.js',
  '/images/crest-176.png', '/images/crest-640.png', '/images/wordmark-cream.png', '/images/union-flag.svg',
  '/images/flag-fabric.jpg', '/images/kids-banner.jpg', '/images/parlo-inglese.jpg', '/images/social-group.jpg'
];

// Hosts whose pictures/fonts/audio we keep for offline use.
const MEDIA_HOSTS = ['images.squarespace-cdn.com', 'fonts.googleapis.com', 'fonts.gstatic.com', 'www.jamesalbert.it'];
const isMedia = (u) => MEDIA_HOSTS.includes(u.hostname) &&
  (u.hostname !== 'www.jamesalbert.it' || /^\/s\/.+\.(mp3|m4a|png|jpe?g|webp|gif|svg)$/i.test(u.pathname));

self.addEventListener('install', e => {
  // Each file is saved separately, so one missing file can't stop the rest.
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => {})))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== MEDIA).map(k => caches.delete(k)))));
  self.clients.claim();
});

async function trimMedia() {
  const c = await caches.open(MEDIA); const keys = await c.keys();
  for (let i = 0; i < keys.length - MEDIA_MAX; i++) await c.delete(keys[i]);
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);

  // 1. The app itself: show the saved copy straight away, refresh it in the background.
  if (u.origin === location.origin) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(e.request, { ignoreSearch: e.request.mode === 'navigate' });
      const net = fetch(e.request).then(r => { if (r.ok && r.status === 200) c.put(e.request, r.clone()); return r; })
        .catch(() => hit || (e.request.mode === 'navigate' ? c.match('/index.html') : undefined));
      return hit || net;
    }));
    return;
  }

  // 2. Pictures, fonts and audio from our other sites.
  if (!isMedia(u)) return; // everything else (booking, forms, chat, videos) goes straight to the internet
  const isAudio = /\.(mp3|m4a)$/i.test(u.pathname);
  const key = u.href;

  if (isAudio) {
    // Audio: use the internet when there is one (players ask for parts of the file),
    // keep a full copy for offline use.
    e.respondWith(fetch(e.request).then(r => {
      e.waitUntil(caches.open(MEDIA).then(async c => {
        if (!(await c.match(key))) {
          try { const full = await fetch(key, { mode: 'no-cors' }); await c.put(key, full); await trimMedia(); } catch (err) {}
        }
      }));
      return r;
    }).catch(async () => (await caches.match(key)) || Response.error()));
    return;
  }

  // Pictures and fonts: saved copy first, refreshed in the background.
  e.respondWith(caches.open(MEDIA).then(async c => {
    const hit = await c.match(e.request);
    const net = fetch(e.request).then(r => {
      if (r.ok || r.type === 'opaque') { c.put(e.request, r.clone()).then(trimMedia).catch(() => {}); }
      return r;
    }).catch(() => hit || Response.error());
    if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
    return net;
  }));
});
