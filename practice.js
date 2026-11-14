// Practice your English – Fun & Games (open to everyone, no login).
// Shown on the "practice" screen, plus the Word of the Day card on the home page.
//
// TO EDIT:
//  - WORDS_OF_THE_DAY: one word per day, in order (it loops). Add as many as you like.
//  - TOPICS: the word sets used by the games. Each word: w = English, it = Italian,
//    e = emoji picture (or i = image link), a = audio link (optional – without it the phone reads the word aloud).
//  - The weekly challenge picks a different topic each week automatically.
(() => {
  const FOOD_IT = {Banana:"banana",Cereals:"cereali",Butter:"burro",Chicken:"pollo",Sandwich:"panino",Eggs:"uova",Flour:"farina",Apple:"mela",
    Bread:"pane",Potatoes:"patate",Pizza:"pizza",Orange:"arancia",Milk:"latte",Pasta:"pasta",Fish:"pesce",Strawberry:"fragola",Cheese:"formaggio",
    Soup:"zuppa",Rice:"riso",Yoghurt:"yogurt"};
  const food = (((window.HUB || {}).C2 || {}).flash || []).map(f => ({w:f.w, it:FOOD_IT[f.w] || '', i:f.i, a:f.a}));

  const L = (s) => s.split('|').map(x => { const [w, it, e] = x.split(':'); return {w, it, e}; });
  window.PRACTICE = {
    TOPICS: [
      {id:"food",     name:{en:"Food", it:"Cibo"},              icon:"🍎", words: food},
      {id:"animals",  name:{en:"Animals", it:"Animali"},        icon:"🐶", words: L("Dog:cane:🐶|Cat:gatto:🐱|Horse:cavallo:🐴|Cow:mucca:🐮|Pig:maiale:🐷|Sheep:pecora:🐑|Duck:anatra:🦆|Rabbit:coniglio:🐰|Lion:leone:🦁|Elephant:elefante:🐘|Monkey:scimmia:🐵|Bird:uccello:🐦")},
      {id:"colours",  name:{en:"Colours", it:"Colori"},         icon:"🎨", words: L("Red:rosso:🔴|Orange:arancione:🟠|Yellow:giallo:🟡|Green:verde:🟢|Blue:blu:🔵|Purple:viola:🟣|Brown:marrone:🟤|Black:nero:⚫|White:bianco:⚪")},
      {id:"weather",  name:{en:"Weather", it:"Tempo"},          icon:"⛅", words: L("Sunny:soleggiato:☀️|Rainy:piovoso:🌧️|Cloudy:nuvoloso:☁️|Windy:ventoso:💨|Snowy:nevoso:❄️|Stormy:tempestoso:⛈️|Foggy:nebbioso:🌫️|Rainbow:arcobaleno:🌈")},
      {id:"clothes",  name:{en:"Clothes", it:"Vestiti"},        icon:"👕", words: L("T-shirt:maglietta:👕|Trousers:pantaloni:👖|Dress:vestito:👗|Shoes:scarpe:👟|Cap:cappellino:🧢|Coat:cappotto:🧥|Socks:calzini:🧦|Scarf:sciarpa:🧣|Gloves:guanti:🧤")},
      {id:"feelings", name:{en:"Feelings", it:"Emozioni"},      icon:"😀", words: L("Happy:felice:😀|Sad:triste:😢|Angry:arrabbiato:😠|Tired:stanco:🥱|Scared:spaventato:😨|Surprised:sorpreso:😮|Sleepy:assonnato:😴|Excited:emozionato:🤩")},
      {id:"home",     name:{en:"At home", it:"A casa"},         icon:"🏠", words: L("House:casa:🏠|Bed:letto:🛏️|Chair:sedia:🪑|Door:porta:🚪|Sofa:divano:🛋️|Bath:vasca:🛁|Key:chiave:🔑|Clock:orologio:🕰️|Lamp:lampada:💡")}
    ],
    WORDS_OF_THE_DAY: [
      {w:"Breakfast", it:"colazione", e:"🥣", ex:"I have breakfast at seven o'clock."},
      {w:"Umbrella", it:"ombrello", e:"☂️", ex:"Take an umbrella – it's raining!"},
      {w:"Library", it:"biblioteca", e:"📚", ex:"I borrow books from the library.", note:{en:"Careful: an Italian 'libreria' is a 'bookshop' in English.", it:"Attenzione: non è la libreria! La libreria si dice 'bookshop'."}},
      {w:"Friendly", it:"cordiale, simpatico", e:"😊", ex:"Our neighbours are very friendly."},
      {w:"Holiday", it:"vacanza", e:"🏖️", ex:"We're going on holiday to London."},
      {w:"Busy", it:"impegnato", e:"📅", ex:"I'm busy today – let's meet tomorrow."},
      {w:"Delicious", it:"delizioso", e:"😋", ex:"This pizza is delicious!"},
      {w:"Queue", it:"fila, coda", e:"🚶", ex:"Please wait in the queue."},
      {w:"Actually", it:"in realtà", e:"💡", ex:"Actually, I prefer tea.", note:{en:"False friend: it doesn't mean 'attualmente' (currently).", it:"Falso amico: non significa 'attualmente' (che si dice 'currently')."}},
      {w:"Brave", it:"coraggioso", e:"🦁", ex:"You were very brave at the dentist!"},
      {w:"Journey", it:"viaggio", e:"🚆", ex:"The journey to Venice takes one hour."},
      {w:"Lovely", it:"bellissimo, delizioso", e:"🌷", ex:"What a lovely day!"},
      {w:"Homework", it:"compiti", e:"📝", ex:"Have you finished your homework?"},
      {w:"Birthday", it:"compleanno", e:"🎂", ex:"When is your birthday?"},
      {w:"Cheap", it:"economico", e:"🏷️", ex:"These shoes were very cheap."},
      {w:"Expensive", it:"costoso", e:"💰", ex:"London is an expensive city."},
      {w:"Early", it:"presto", e:"⏰", ex:"I get up early on Mondays."},
      {w:"Late", it:"tardi, in ritardo", e:"🕙", ex:"Sorry I'm late!"},
      {w:"Neighbour", it:"vicino di casa", e:"🏡", ex:"My neighbour has a big dog."},
      {w:"Bill", it:"il conto", e:"🧾", ex:"Can we have the bill, please?"},
      {w:"Sensible", it:"sensato, assennato", e:"🧠", ex:"That's a sensible idea.", note:{en:"False friend: 'sensibile' is 'sensitive' in English.", it:"Falso amico: 'sensibile' si dice 'sensitive'."}},
      {w:"Cosy", it:"accogliente", e:"🛋️", ex:"This café is warm and cosy."},
      {w:"Snack", it:"spuntino, merenda", e:"🍎", ex:"Let's have a snack after school."},
      {w:"Smile", it:"sorriso, sorridere", e:"😀", ex:"Smile for the photo!"},
      {w:"Kitchen", it:"cucina", e:"🍳", ex:"Mum is cooking in the kitchen."},
      {w:"Weekend", it:"fine settimana", e:"🎉", ex:"What are you doing this weekend?"},
      {w:"Cupboard", it:"armadietto, credenza", e:"🗄️", ex:"The cups are in the cupboard."},
      {w:"Chemist's", it:"farmacia", e:"💊", ex:"The chemist's is next to the bank."},
      {w:"Tired", it:"stanco", e:"🥱", ex:"I'm tired after a long day."},
      {w:"Christmas", it:"Natale", e:"🎄", ex:"We sing carols at Christmas."},
      {w:"Thank you", it:"grazie", e:"🙏", ex:"Thank you for your help!"}
    ]
  };

  const TX = {
    title:{en:"Practice your English", it:"Esercitati in inglese"},
    sub:{en:"Fun & games for all ages. Five minutes a day makes a difference!", it:"Giochi per tutte le età. Bastano cinque minuti al giorno!"},
    wotd:{en:"Word of the day", it:"La parola del giorno"},
    more:{en:"Play more games", it:"Altri giochi"},
    listen:{en:"Listen", it:"Ascolta"},
    challenge:{en:"This week's challenge", it:"La sfida della settimana"},
    chText:{en:"Get 5 different words right from the “{t}” topic in any game.", it:"Indovina 5 parole diverse del tema «{t}» in qualsiasi gioco."},
    chDone:{en:"Challenge complete – well done! A new one starts on Monday.", it:"Sfida completata, bravissimo! La prossima inizia lunedì."},
    start:{en:"Start", it:"Inizia"},
    pick:{en:"Choose a topic", it:"Scegli un tema"},
    games:{en:"Games", it:"Giochi"},
    g_fc:{en:"Flashcards", it:"Flashcard"}, g_fcS:{en:"Picture, word and sound", it:"Immagine, parola e suono"},
    g_qz:{en:"Quick quiz", it:"Quiz veloce"}, g_qzS:{en:"5 questions – what's in the picture?", it:"5 domande: cosa c'è nell'immagine?"},
    g_li:{en:"Listen & choose", it:"Ascolta e scegli"}, g_liS:{en:"Hear the word, tap the picture", it:"Ascolta la parola, tocca l'immagine"},
    g_mt:{en:"Match the pairs", it:"Trova le coppie"}, g_mtS:{en:"A memory game – pictures and words", it:"Gioco di memoria: immagini e parole"},
    g_sy:{en:"Say it!", it:"Dillo tu!"}, g_syS:{en:"Listen, then say it out loud", it:"Ascolta, poi ripeti ad alta voce"},
    back:{en:"Back", it:"Indietro"}, next:{en:"Next", it:"Avanti"},
    card:{en:"Card", it:"Carta"}, q:{en:"Question", it:"Domanda"}, of:{en:"of", it:"di"},
    right:{en:"Well done!", it:"Bravo!"}, wrong:{en:"Not quite – it's", it:"Quasi! È"},
    score:{en:"You scored", it:"Hai totalizzato"}, again:{en:"Play again", it:"Gioca ancora"},
    otherGame:{en:"Choose another game", it:"Scegli un altro gioco"},
    play:{en:"Play the word", it:"Ascolta la parola"},
    moves:{en:"Moves", it:"Mosse"}, matched:{en:"All pairs found!", it:"Tutte le coppie trovate!"},
    yourTurn:{en:"Your turn – tap and speak", it:"Tocca a te: tocca e parla"},
    listening:{en:"Listening…", it:"Ti ascolto…"},
    heard:{en:"I heard:", it:"Ho sentito:"},
    great:{en:"Great pronunciation!", it:"Ottima pronuncia!"},
    tryAgain:{en:"Nearly! Listen and try again.", it:"Quasi! Ascolta e riprova."},
    noMic:{en:"Say the word out loud, then tap Next.", it:"Ripeti la parola ad alta voce, poi tocca Avanti."},
    member:{en:"Want more? Members get class flashcards, videos and homework.", it:"Vuoi di più? I soci hanno flashcard, video e compiti della propria classe."}
  };
  const t = k => T(TX[k]);
  const body = () => document.getElementById('prBody');
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pic = (x, cls = '') => x.i ? `<img class="pr-img ${cls}" src="${esc(x.i)}" alt="">` : `<span class="pr-emo ${cls}">${x.e}</span>`;

  // ---------- sound: real recordings where we have them, otherwise the phone's English voice ----------
  const AU = new Audio(); let VOICE = null;
  const pickVoice = () => { try { const v = speechSynthesis.getVoices(); VOICE = v.find(x => x.lang === 'en-GB') || v.find(x => /^en/.test(x.lang)) || null; } catch(e){} };
  try { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; } catch(e){}
  function say(x){
    try { AU.pause(); if (window.speechSynthesis) speechSynthesis.cancel(); } catch(e){}
    if (x.a) { try { AU.src = x.a; AU.currentTime = 0; const p = AU.play(); if (p && p.catch) p.catch(() => speak(x.w)); } catch(e){ speak(x.w); } }
    else speak(x.w);
  }
  function speak(text){
    try { const u = new SpeechSynthesisUtterance(text); u.lang = 'en-GB'; if (VOICE) u.voice = VOICE; u.rate = .9; speechSynthesis.speak(u); } catch(e){}
  }
  window.prSay = (w, a) => say({w, a});

  // ---------- word of the day + weekly challenge ----------
  const dayNo = () => { const d = new Date(); return Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())) / 864e5); };
  const wotd = () => { const W = PRACTICE.WORDS_OF_THE_DAY; return W[dayNo() % W.length]; };
  const weekNo = () => Math.floor((dayNo() + 3) / 7); // weeks start on Monday
  const weekTopic = () => { const ts = PRACTICE.TOPICS.filter(x => x.words.length >= 6); return ts[weekNo() % ts.length]; };
  function weekState(){
    let s = null; try { s = JSON.parse(localStorage.getItem('ja-practice-week')); } catch(e){}
    if (!s || s.week !== weekNo()) s = {week: weekNo(), words: []};
    return s;
  }
  function gotRight(topic, w){
    if (topic.id !== weekTopic().id) return;
    const s = weekState(); if (!s.words.includes(w)) s.words.push(w);
    try { localStorage.setItem('ja-practice-week', JSON.stringify(s)); } catch(e){}
  }

  function wotdCard(){
    const x = wotd();
    return `<div class="pr-wotd">
      <div class="pr-k">${esc(t('wotd'))}</div>
      <div class="pr-wrow">${pic(x)}<div><b>${esc(x.w)}</b><span>${esc(x.it)}</span></div>
        <button class="pr-say" onclick="prSay('${esc(x.w).replace(/'/g, "\\'")}')" aria-label="${esc(t('listen'))}">🔊</button></div>
      <p class="pr-ex">“${esc(x.ex)}”</p>
      ${x.note ? `<p class="pr-note">⚠️ ${esc(T(x.note))}</p>` : ''}
    </div>`;
  }
  window.renderPracticeHome = () => {
    const el = document.getElementById('wotdHome'); if (!el) return;
    el.innerHTML = wotdCard() + `<div class="center" style="margin-top:14px"><button class="btn navy" onclick="go('practice')">🎲 ${esc(t('more'))}</button></div>`;
  };

  // ---------- practice screen ----------
  let TOPIC = null, G = null;
  const topic = () => TOPIC || weekTopic();

  function menu(){
    G = null;
    const wt = weekTopic(), ws = weekState(), n = Math.min(ws.words.length, 5);
    const games = [['fc','🃏'],['qz','❓'],['li','👂'],['mt','🧩'],['sy','🎤']];
    body().innerHTML = `
      <h1>${esc(t('title'))}</h1><p class="sub">${esc(t('sub'))}</p>
      ${wotdCard()}
      <div class="pr-ch">
        <div class="pr-k">🏆 ${esc(t('challenge'))}</div>
        <p>${esc(n >= 5 ? t('chDone') : t('chText').replace('{t}', T(wt.name)))}</p>
        <div class="pr-bar"><i style="width:${n * 20}%"></i></div><small>${n} / 5</small>
        ${n < 5 ? `<button class="btn" id="prCh">${esc(t('start'))} – ${wt.icon} ${esc(T(wt.name))}</button>` : ''}
      </div>
      <h2>${esc(t('pick'))}</h2>
      <div class="pr-topics">${PRACTICE.TOPICS.map(x => `<button data-t="${x.id}" class="${x.id === topic().id ? 'on' : ''}">${x.icon} ${esc(T(x.name))}</button>`).join('')}</div>
      <h2>${esc(t('games'))}</h2>
      <div class="list">${games.map(([k, ic]) => `<a class="row" href="#" data-g="${k}"><div class="ic">${ic}</div><div class="t"><b>${esc(t('g_' + k))}</b><span>${esc(t('g_' + k + 'S'))}</span></div><span class="chev">›</span></a>`).join('')}</div>
      <p class="pr-mem">${esc(t('member'))} <a href="#" onclick="openReg();return false">${esc(T(TEXT.memTitle))} ›</a></p>`;
    body().querySelectorAll('.pr-topics button').forEach(b => b.onclick = () => { TOPIC = PRACTICE.TOPICS.find(x => x.id === b.dataset.t); menu(); });
    body().querySelectorAll('[data-g]').forEach(a => a.onclick = e => { e.preventDefault(); start(a.dataset.g); });
    const ch = document.getElementById('prCh'); if (ch) ch.onclick = () => { TOPIC = wt; start('qz'); };
  }

  const top = (title) => `<div class="pr-top"><button class="pr-back" id="prBack">‹ ${esc(t('back'))}</button><b>${esc(title)} · ${topic().icon} ${esc(T(topic().name))}</b></div>`;
  const wireBack = () => { document.getElementById('prBack').onclick = () => { stopMic(); menu(); document.getElementById('main').scrollTop = 0; }; };
  const finishBox = (msg) => `<div class="pr-end"><div class="pr-big">${msg}</div>
      <button class="btn navy" id="prAgain">${esc(t('again'))}</button>
      <button class="btn ghost" id="prMenu">${esc(t('otherGame'))}</button></div>`;
  const wireEnd = (k) => { document.getElementById('prAgain').onclick = () => start(k); document.getElementById('prMenu').onclick = () => menu(); };

  function start(k){
    const W = topic().words; if (!W.length) return;
    G = {k, i:0, score:0};
    if (k === 'qz' || k === 'li') G.list = shuffle(W).slice(0, 5);
    if (k === 'fc' || k === 'sy') G.list = W;
    if (k === 'mt') { const six = shuffle(W).slice(0, 6); G.cards = shuffle([...six.map((x, n) => ({n, x, pic:1})), ...six.map((x, n) => ({n, x, pic:0}))]); G.open = []; G.done = []; G.moves = 0; }
    ({fc, qz, li, mt, sy})[k]();
    document.getElementById('main').scrollTop = 0;
  }

  // Flashcards
  function fc(){
    const x = G.list[G.i];
    body().innerHTML = top(t('g_fc')) + `
      <div class="pr-card">${pic(x, 'big')}<div class="pr-w">${esc(x.w)}</div><div class="pr-it">${esc(x.it)}</div>
        <small>${esc(t('card'))} ${G.i + 1} / ${G.list.length}</small></div>
      <div class="pr-ctl"><button class="btn ghost" id="prP">←</button><button class="btn navy" id="prS">🔊 ${esc(t('listen'))}</button><button class="btn ghost" id="prN">→</button></div>`;
    wireBack(); say(x);
    document.getElementById('prS').onclick = () => say(x);
    document.getElementById('prP').onclick = () => { G.i = (G.i - 1 + G.list.length) % G.list.length; fc(); };
    document.getElementById('prN').onclick = () => { G.i = (G.i + 1) % G.list.length; fc(); };
  }

  // Quick quiz (picture -> word) and Listen & choose (sound -> picture)
  function options(x){ return shuffle([x, ...shuffle(topic().words.filter(y => y.w !== x.w)).slice(0, G.k === 'li' ? 3 : 2)]); }
  function qz(){ ask(); }
  function li(){ ask(); }
  function ask(){
    if (G.i >= G.list.length) {
      body().innerHTML = top(t('g_' + G.k)) + finishBox(`${G.score === G.list.length ? '🌟' : '👏'}<br>${esc(t('score'))} <b>${G.score} / ${G.list.length}</b>`);
      wireBack(); wireEnd(G.k); return;
    }
    const x = G.list[G.i], opts = options(x), isLi = G.k === 'li';
    body().innerHTML = top(t('g_' + G.k)) + `
      <div class="pr-prog">${esc(t('q'))} ${G.i + 1} ${esc(t('of'))} ${G.list.length}</div>
      ${isLi ? `<div class="pr-card"><button class="pr-play" id="prS">🔊</button><small>${esc(t('play'))}</small></div>
        <div class="pr-grid">${opts.map(o => `<button class="pr-opt pic" data-w="${esc(o.w)}">${pic(o)}</button>`).join('')}</div>`
      : `<div class="pr-card">${pic(x, 'big')}</div>
        <div class="pr-opts">${opts.map(o => `<button class="pr-opt" data-w="${esc(o.w)}">${esc(o.w)}</button>`).join('')}</div>`}
      <div class="pr-fb" id="prFb"></div>`;
    wireBack();
    if (isLi) { document.getElementById('prS').onclick = () => say(x); say(x); }
    let answered = false;
    body().querySelectorAll('.pr-opt').forEach(b => b.onclick = () => {
      if (answered) return; answered = true;
      const ok = b.dataset.w === x.w;
      body().querySelectorAll('.pr-opt').forEach(o => { if (o.dataset.w === x.w) o.classList.add('ok'); });
      if (!ok) b.classList.add('no'); else { G.score++; gotRight(topic(), x.w); }
      if (!isLi) say(x);
      document.getElementById('prFb').innerHTML = `<p class="${ok ? 'good' : 'bad'}">${ok ? '✅ ' + esc(t('right')) : esc(t('wrong')) + ' <b>' + esc(x.w) + '</b>'}</p>
        <button class="btn navy" id="prN">${esc(t('next'))} ›</button>`;
      document.getElementById('prN').onclick = () => { G.i++; ask(); };
    });
  }

  // Match the pairs
  function mt(){
    const all = G.done.length === G.cards.length;
    body().innerHTML = top(t('g_mt')) + `
      <div class="pr-prog">${esc(t('moves'))}: ${G.moves}</div>
      <div class="pr-mem-grid">${G.cards.map((c, k) => {
        const up = G.open.includes(k) || G.done.includes(k);
        return `<button class="pr-tile${up ? ' up' : ''}${G.done.includes(k) ? ' done' : ''}" data-k="${k}">${up ? (c.pic ? pic(c.x) : `<span class="pr-tw">${esc(c.x.w)}</span>`) : '<span class="pr-q">?</span>'}</button>`;
      }).join('')}</div>
      ${all ? finishBox(`🎉<br>${esc(t('matched'))}<br><small>${esc(t('moves'))}: ${G.moves}</small>`) : ''}`;
    wireBack(); if (all) wireEnd('mt');
    body().querySelectorAll('.pr-tile').forEach(b => b.onclick = () => {
      const k = +b.dataset.k;
      if (G.busy || G.open.includes(k) || G.done.includes(k)) return;
      G.open.push(k);
      if (G.open.length === 2) {
        G.moves++;
        const [a, c] = G.open.map(n => G.cards[n]);
        if (a.n === c.n && a.pic !== c.pic) { G.done.push(...G.open); G.open = []; say(a.x); gotRight(topic(), a.x.w); }
        else { G.busy = true; setTimeout(() => { G.open = []; G.busy = false; mt(); }, 900); }
      }
      mt();
    });
  }

  // Say it! (speech check where the phone supports it)
  let REC = null;
  const stopMic = () => { try { if (REC) REC.abort(); } catch(e){} REC = null; };
  function sy(){
    const x = G.list[G.i], SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    body().innerHTML = top(t('g_sy')) + `
      <div class="pr-card">${pic(x, 'big')}<div class="pr-w">${esc(x.w)}</div><div class="pr-it">${esc(x.it)}</div>
        <small>${esc(t('card'))} ${G.i + 1} / ${G.list.length}</small></div>
      <div class="pr-ctl"><button class="btn ghost" id="prS">🔊 ${esc(t('listen'))}</button>${SR ? `<button class="btn navy" id="prM">🎤 ${esc(t('yourTurn'))}</button>` : ''}</div>
      <div class="pr-fb" id="prFb">${SR ? '' : `<p>${esc(t('noMic'))}</p>`}</div>
      <div class="pr-ctl"><button class="btn ghost" id="prP">←</button><button class="btn ghost" id="prN">${esc(t('next'))} →</button></div>`;
    wireBack(); say(x);
    document.getElementById('prS').onclick = () => say(x);
    document.getElementById('prP').onclick = () => { stopMic(); G.i = (G.i - 1 + G.list.length) % G.list.length; sy(); };
    document.getElementById('prN').onclick = () => { stopMic(); G.i = (G.i + 1) % G.list.length; sy(); };
    const m = document.getElementById('prM'); if (!m) return;
    m.onclick = () => {
      stopMic();
      const fb = document.getElementById('prFb');
      try {
        REC = new SR(); REC.lang = 'en-GB'; REC.maxAlternatives = 5; REC.interimResults = false;
        fb.innerHTML = `<p>${esc(t('listening'))}</p>`;
        REC.onresult = e => {
          const heard = Array.from(e.results[0]).map(r => r.transcript.trim());
          const norm = s => s.toLowerCase().replace(/[^a-z]/g, '');
          const target = norm(x.w), ok = heard.some(h => norm(h).includes(target) || target.includes(norm(h)) && norm(h).length > 2);
          if (ok) gotRight(topic(), x.w);
          fb.innerHTML = `<p class="${ok ? 'good' : 'bad'}">${ok ? '✅ ' + esc(t('great')) : esc(t('tryAgain'))}</p><small>${esc(t('heard'))} “${esc(heard[0] || '…')}”</small>`;
        };
        REC.onerror = () => { fb.innerHTML = `<p>${esc(t('noMic'))}</p>`; };
        REC.start();
      } catch(e) { fb.innerHTML = `<p>${esc(t('noMic'))}</p>`; }
    };
  }

  window.renderPractice = () => { if (!body()) return; stopMic(); menu(); };

  const css = document.createElement('style');
  css.textContent = `
    .pr-k{font:600 11px Poppins,sans-serif;letter-spacing:2px;text-transform:uppercase;color:var(--gold-d);margin-bottom:10px}
    .pr-wotd{background:#fff;border:1px solid var(--cream-2);border-radius:18px;padding:18px;box-shadow:var(--shadow)}
    .pr-wrow{display:flex;align-items:center;gap:14px}
    .pr-wrow>div{flex:1}
    .pr-wrow b{display:block;font-family:'Playfair Display',serif;font-size:28px;color:var(--navy);line-height:1.1}
    .pr-wrow span{font-size:14px;color:var(--muted)}
    .pr-say{width:48px;height:48px;border-radius:50%;border:0;background:var(--navy);color:#fff;font-size:20px;cursor:pointer;flex:none}
    .pr-ex{font-family:'Source Serif 4',Georgia,serif;font-style:italic;font-size:17px;color:var(--ink);margin:14px 0 0}
    .pr-note{font-size:12.5px;color:#7a5a12;background:#fbf4e2;border-radius:10px;padding:8px 10px;margin:10px 0 0}
    .pr-emo{font-size:44px;line-height:1;display:inline-block}
    .pr-img{width:64px;height:64px;object-fit:contain;border-radius:12px;background:#fff}
    .pr-emo.big{font-size:110px}
    .pr-img.big{width:220px;height:220px}
    #practice h2{margin-top:22px}
    .pr-ch{background:var(--navy);color:#fff;border-radius:18px;padding:18px;margin-top:16px}
    .pr-ch .pr-k{color:var(--gold)}
    .pr-ch p{font-size:14px;line-height:1.5;margin-bottom:10px}
    .pr-bar{height:8px;background:rgba(255,255,255,.2);border-radius:9px;overflow:hidden}
    .pr-bar i{display:block;height:100%;background:var(--gold);transition:width .3s}
    .pr-ch small{display:block;font-size:12px;opacity:.8;margin:6px 0 12px}
    .pr-topics{display:flex;flex-wrap:wrap;gap:8px}
    .pr-topics button{border:1.5px solid var(--cream-2);background:#fff;border-radius:999px;padding:8px 14px;font:500 14px Poppins,sans-serif;color:var(--navy);cursor:pointer}
    .pr-topics button.on{background:var(--navy);border-color:var(--navy);color:#fff}
    .pr-mem{font-size:13px;color:var(--muted);text-align:center;margin:20px 6px 0;line-height:1.5}
    .pr-mem a{color:var(--navy);font-weight:600}
    .pr-top{display:flex;align-items:center;gap:10px;margin-bottom:14px}
    .pr-top b{font-size:14px;color:var(--navy)}
    .pr-back{border:1.5px solid var(--navy);background:#fff;color:var(--navy);border-radius:999px;padding:6px 12px;font:600 13px Poppins,sans-serif;cursor:pointer}
    .pr-card{background:#fff;border-radius:20px;box-shadow:var(--shadow);padding:22px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:6px}
    .pr-card small{color:var(--muted);font-size:12px}
    .pr-w{font-family:'Playfair Display',serif;font-size:34px;color:var(--navy);font-weight:700}
    .pr-it{color:var(--muted);font-size:15px}
    .pr-ctl{display:flex;gap:10px;justify-content:center;margin-top:16px}
    .pr-ctl .btn{flex:1}
    .btn.ghost{background:#fff;color:var(--navy);border:1.5px solid var(--navy)}
    .pr-prog{font-size:13px;font-weight:600;color:var(--navy);margin-bottom:10px}
    .pr-opts{display:flex;flex-direction:column;gap:10px;margin-top:16px}
    .pr-opt{background:#fff;border:2px solid #d6dbe6;border-radius:14px;padding:14px;font:600 17px Poppins,sans-serif;color:var(--ink);cursor:pointer}
    .pr-opt.ok{border-color:#1e8a4c;background:#e6f6ec}
    .pr-opt.no{border-color:#a3121f;background:#fbe9ea}
    .pr-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}
    .pr-opt.pic{padding:16px;display:grid;place-items:center;min-height:120px}
    .pr-opt.pic .pr-emo{font-size:64px}
    .pr-opt.pic .pr-img{width:96px;height:96px}
    .pr-play{width:96px;height:96px;border-radius:50%;border:0;background:var(--navy);color:#fff;font-size:40px;cursor:pointer}
    .pr-fb{text-align:center;margin-top:14px}
    .pr-fb p{font-size:16px;margin-bottom:10px}
    .pr-fb .good{color:#1e8a4c;font-weight:600}
    .pr-fb .bad{color:#a3121f}
    .pr-fb small{color:var(--muted)}
    .pr-mem-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
    .pr-tile{aspect-ratio:1;border-radius:14px;border:0;background:var(--navy);color:#fff;display:grid;place-items:center;cursor:pointer;padding:4px}
    .pr-tile.up{background:#fff;border:2px solid var(--cream-2)}
    .pr-tile.done{border-color:#1e8a4c;background:#e6f6ec}
    .pr-tile .pr-emo{font-size:40px}
    .pr-tile .pr-img{width:70px;height:70px}
    .pr-q{font:700 30px 'Playfair Display',serif;color:var(--gold)}
    .pr-tw{font:600 14px Poppins,sans-serif;color:var(--navy);word-break:break-word}
    .pr-end{text-align:center;padding:20px 0;display:flex;flex-direction:column;gap:10px;align-items:center}
    .pr-end .btn{width:100%}
    .pr-big{font-size:22px;color:var(--navy);line-height:1.5;margin-bottom:8px}
    .pr-big small{font-size:14px;color:var(--muted)}`;
  document.head.appendChild(css);
})();
