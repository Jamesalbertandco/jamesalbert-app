/* jamesalbert – gentle chat invitation.
   Shows "Talk to us · Parla con noi" next to the tawk.to chat button after 30 seconds,
   once per visit. Tapping it opens the chat; × closes it. Needs the tawk.to script on the page.
   (tawk.to's own "Attention Grabber" is switched off, because it has no delay setting.) */
(function(){
  var DELAY = 30000;                       // 30 seconds
  var RIGHT = window.JA_NUDGE_RIGHT || 16;   // px from the right edge (match the chat button)
  var BOTTOM = window.JA_NUDGE_BOTTOM || 96; // px from the bottom (just above the chat button)
  var KEY = 'jaChatNudgeSeen';
  try { if (sessionStorage.getItem(KEY)) return; } catch(e) {}

  var css = document.createElement('style');
  css.textContent =
    '#jaNudge{position:fixed;z-index:2147483646;right:'+RIGHT+'px;bottom:'+BOTTOM+'px;max-width:230px;' +
    'background:#1b2a4a;color:#fff;border-radius:12px;padding:14px 34px 14px 16px;' +
    'font:italic 15px/1.35 Helvetica,Arial,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.18);cursor:pointer;' +
    'opacity:0;transform:translateY(8px);transition:opacity .35s,transform .35s}' +
    '#jaNudge.on{opacity:1;transform:none}' +
    '#jaNudge:after{content:"";position:absolute;right:26px;bottom:-7px;width:14px;height:14px;background:#1b2a4a;transform:rotate(45deg);border-radius:2px}' +
    '#jaNudge button{position:absolute;top:6px;right:6px;width:22px;height:22px;border:0;border-radius:50%;' +
    'background:rgba(255,255,255,.15);color:#fff;font:bold 13px/22px Arial,sans-serif;cursor:pointer;padding:0}';
  document.head.appendChild(css);

  function seen(){ try { sessionStorage.setItem(KEY, '1'); } catch(e) {} }
  function hide(){ var n = document.getElementById('jaNudge'); if (n) { n.classList.remove('on'); setTimeout(function(){ n.remove(); }, 400); } }

  function show(){
    var T = window.Tawk_API;
    if (!T || !T.maximize) return;                                 // chat not loaded – skip
    if (T.isChatMaximized && T.isChatMaximized()) return;          // already chatting
    if (T.isChatHidden && T.isChatHidden()) return;                // button hidden on this page
    seen();
    var n = document.createElement('div');
    n.id = 'jaNudge'; n.setAttribute('role', 'button'); n.setAttribute('aria-label', 'Open chat');
    n.innerHTML = 'Talk to us · Parla con noi<button type="button" aria-label="Close">✕</button>';
    n.onclick = function(e){
      if (e.target.tagName === 'BUTTON') { hide(); return; }
      hide(); if (T.showWidget) T.showWidget(); T.maximize();
    };
    document.body.appendChild(n);
    requestAnimationFrame(function(){ n.classList.add('on'); });
    var prev = T.onChatMaximized;
    T.onChatMaximized = function(){ hide(); if (typeof prev === 'function') prev.apply(this, arguments); };
  }

  setTimeout(show, DELAY);
})();
