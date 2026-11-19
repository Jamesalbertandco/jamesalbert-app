// THE TOWER – climb 10 floors and ring Big Ben.
// Opened from the Practice foyer (4th tile). Shown inside the Practice screen (#prBody).
//
// RULES
//  - 10 floors, 10 questions each. Floors 1–3 = A1–A2, 4–7 = B1–B2, 8–10 = C1.
//  - After a floor:  CLIMB if you scored at least your previous floor's score AND the floor's minimum;
//                    FALL one floor if you scored less than your previous floor's score;
//                    otherwise HOLD (play the same floor again).
//  - Timer from floor 4. One 50:50 lifeline per floor. Progress is saved on the phone (no login).
//  - Pass floor 10 → ring Big Ben (chimes are made by the app itself, so they work offline).
//
// TO EDIT: the question pools are built from practice.js (all levels) plus EXTRA_B / EXTRA_C below.
(() => {
  const FLOORS = 10, PER_FLOOR = 10;
  const MIN   = [0, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8];          // minimum score to climb, floor 1–10
  const TIMER = [0, 0, 0, 0, 20, 18, 17, 16, 15, 13, 12];   // seconds per question (0 = no timer)
  const BAND  = f => f <= 3 ? 'a' : f <= 7 ? 'b' : 'c';

  const EXTRA_B = [
    {q:"She ___ English for three years before she moved to London.", o:["had studied","has studied","studies"], a:0, x:"An action before another past action → past perfect."},
    {q:"You ___ wear a seatbelt. It's the law.", o:["must","might","could"], a:0, x:"must = it's an obligation."},
    {q:"You ___ bring food – there's plenty here.", o:["mustn't","don't have to","can't"], a:1, x:"don't have to = it isn't necessary. mustn't = it isn't allowed."},
    {q:"This is the ___ film I've ever seen!", o:["best","better","most good"], a:0, x:"good → better → the best."},
    {q:"He's ___ than his brother.", o:["tall","taller","tallest"], a:1, x:"Comparing two people → taller than."},
    {q:"I've ___ finished my homework – look!", o:["just","yet","ever"], a:0, x:"just = a very short time ago."},
    {q:"Have you finished your homework ___?", o:["already","yet","just"], a:1, x:"'yet' in questions and negatives, at the end of the sentence."},
    {q:"The book ___ by millions of people.", o:["has read","has been read","is reading"], a:1, x:"Passive: has been + past participle."},
    {q:"I'm used to ___ up early.", o:["get","getting","got"], a:1, x:"be used to + -ing."},
    {q:"She asked me where I ___.", o:["live","lived","do live"], a:1, x:"Reported speech: the tense moves back (live → lived)."},
    {q:"There isn't ___ milk left.", o:["some","any","many"], a:1, x:"'any' in negatives. Milk is uncountable, so not 'many'."},
    {q:"How ___ sugar do you take?", o:["many","much","lot"], a:1, x:"'much' with uncountable nouns."},
    {q:"I'd rather ___ at home tonight.", o:["stay","to stay","staying"], a:0, x:"would rather + verb without 'to'."},
    {q:"The man ___ lives next door is a doctor.", o:["who","which","whose"], a:0, x:"'who' for people."},
    {q:"Unless you hurry, you ___ the bus.", o:["miss","will miss","would miss"], a:1, x:"unless = if not → first conditional."},
    {q:"I wish I ___ speak Chinese.", o:["can","could","will"], a:1, x:"wish + past for a present wish."}
  ];
  const EXTRA_C = [
    {q:"Hardly ___ arrived when the phone rang.", o:["had I","I had","did I"], a:0, x:"After 'Hardly' at the start, the verb comes first (inversion)."},
    {q:"Not only ___ late, but he also forgot the tickets.", o:["he was","was he","he is"], a:1, x:"Inversion after 'Not only'."},
    {q:"If I ___ known, I would have helped.", o:["have","had","would have"], a:1, x:"Third conditional: if + past perfect, would have + past participle."},
    {q:"She must ___ the train – she isn't here.", o:["miss","have missed","be missing"], a:1, x:"must have + past participle = a deduction about the past."},
    {q:"It's high time we ___.", o:["leave","left","will leave"], a:1, x:"It's (high) time + past simple."},
    {q:"No sooner had we sat down ___ the film started.", o:["when","than","then"], a:1, x:"No sooner … than."},
    {q:"Despite ___ tired, she finished the race.", o:["being","she was","to be"], a:0, x:"despite + -ing or a noun."},
    {q:"I'd rather you ___ smoke in here.", o:["don't","didn't","won't"], a:1, x:"would rather + someone + past simple."},
    {q:"He denied ___ the window.", o:["to break","breaking","break"], a:1, x:"deny + -ing."},
    {q:"Which word means 'very tired'?", o:["exhausted","exhausting","exhaustive"], a:0, x:"exhausted = very tired (how you feel)."},
    {q:"'He's a bit of a wet blanket' means he…", o:["spoils the fun","cries a lot","loves swimming"], a:0, x:"A wet blanket spoils other people's fun."},
    {q:"'To be on cloud nine' means to be…", o:["extremely happy","very confused","half asleep"], a:0, x:"on cloud nine = extremely happy."},
    {q:"Choose the right word: ___ a conclusion", o:["reach","arrive","get"], a:0, x:"We say 'reach a conclusion'."},
    {q:"Choose the right word: ___ rain", o:["heavy","strong","big"], a:0, x:"heavy rain (but strong wind)."},
    {q:"A formal word for 'enough':", o:["sufficient","plenty","loads"], a:0, x:"sufficient = enough (formal)."},
    {q:"'I'll take it with a pinch of salt' means I…", o:["won't completely believe it","will add flavour","will be careful with money"], a:0, x:"take something with a pinch of salt = not believe it completely."}
  ];

  const TX = {
    title:{en:"The Tower", it:"La Torre"},
    sub:{en:"Climb 10 floors and ring Big Ben", it:"Sali 10 piani e suona il Big Ben"},
    floor:{en:"Floor", it:"Piano"},
    youAre:{en:"You're on floor", it:"Sei al piano"},
    best:{en:"Highest floor", it:"Piano più alto"},
    rings:{en:"Bell rings", it:"Rintocchi"},
    rules:{en:"How it works", it:"Come funziona"},
    r1:{en:"10 questions per floor. Floors get harder as you climb: A1–A2, then B1–B2, then C1.", it:"10 domande per piano. Più sali, più è difficile: A1–A2, poi B1–B2, poi C1."},
    r2:{en:"Climb: score at least as much as on the floor below, and reach the floor's minimum.", it:"Sali: fai almeno lo stesso punteggio del piano sotto e raggiungi il minimo del piano."},
    r3:{en:"Fall: score less than on the floor below and you drop a floor!", it:"Scendi: se fai meno del piano sotto, torni giù di un piano!"},
    r4:{en:"From floor 4 there's a timer. One 50:50 lifeline per floor.", it:"Dal piano 4 c'è il timer. Un aiuto 50:50 per piano."},
    r5:{en:"Reach the top and ring Big Ben!", it:"Arriva in cima e suona il Big Ben!"},
    play:{en:"Play floor", it:"Gioca il piano"},
    need:{en:"To climb you need", it:"Per salire ti serve"},
    lastWas:{en:"your last score", it:"il tuo ultimo punteggio"},
    q:{en:"Question", it:"Domanda"}, of:{en:"of", it:"di"},
    score:{en:"Score", it:"Punti"},
    whatIs:{en:"What is this?", it:"Che cos'è?"},
    howSay:{en:"How do you say this in English?", it:"Come si dice in inglese?"},
    means:{en:"Which one means…", it:"Quale significa…"},
    timeUp:{en:"Time's up!", it:"Tempo scaduto!"},
    right:{en:"Correct!", it:"Giusto!"}, wrong:{en:"The answer is", it:"La risposta è"},
    next:{en:"Next", it:"Avanti"},
    climb:{en:"You climbed!", it:"Sei salito!"}, climbS:{en:"On to floor", it:"Avanti al piano"},
    fall:{en:"You fell a floor!", it:"Sei sceso di un piano!"}, fallS:{en:"Back down to floor", it:"Di nuovo al piano"},
    hold:{en:"Hold on!", it:"Resisti!"}, holdS:{en:"Try floor {f} again – you need {n}.", it:"Riprova il piano {f}: ti servono {n}."},
    cont:{en:"Continue", it:"Continua"},
    back:{en:"Back", it:"Indietro"},
    summit:{en:"You've reached the top of the Tower!", it:"Sei arrivato in cima alla Torre!"},
    tap:{en:"Tap the bell to ring Big Ben", it:"Tocca la campana per suonare il Big Ben"},
    ringer:{en:"Bell Ringer", it:"Campanaro"},
    rungTimes:{en:"You've rung Big Ben {n} times", it:"Hai suonato il Big Ben {n} volte"},
    rungOnce:{en:"You've rung Big Ben for the first time!", it:"Hai suonato il Big Ben per la prima volta!"},
    again:{en:"Climb again", it:"Sali di nuovo"},
    reset:{en:"Start again from floor 1", it:"Ricomincia dal piano 1"},
    sure:{en:"Start again from floor 1?", it:"Ricominciare dal piano 1?"},
    lifeline:{en:"50:50", it:"50:50"}
  };
  const t = k => T(TX[k]);
  const body = () => document.getElementById('prBody');
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);

  // ---------- saved progress (on this phone only) ----------
  const KEY = 'ja-tower';
  const load = () => { try { return Object.assign({floor:1, last:0, best:1, rings:0}, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch(e){ return {floor:1, last:0, best:1, rings:0}; } };
  const save = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch(e){} };

  // ---------- questions ----------
  // Every question becomes {kind, prompt, pic?, o:[...], a, x?}
  function pools(){
    const P = window.PRACTICE || {}, topics = (P.TOPICS || []).concat(P.LEVEL_TOPICS || []);
    const A = [], B = [], C = [];
    topics.forEach(tp => {
      const into = tp.lvl === 'c' ? C : tp.lvl === 'b' ? B : A;
      const words = tp.words || [];
      if (tp.type === 'quiz') words.forEach(w => into.push({kind:'gq', prompt:w.q, o:w.o, a:w.a, x:w.x}));
      else if (tp.type === 'phrases') words.forEach(w => {
        const wrong = pick(words.filter(z => z !== w), 2).map(z => z.w);
        const o = shuffle([w.w, ...wrong]);
        into.push({kind:'mean', prompt:w.m, o, a:o.indexOf(w.w), x:`${w.w} – ${w.it}`, say:w.w});
      });
      else if ((tp.lvl || 'a') === 'a') words.forEach(w => {
        if (!w.w || words.length < 3) return;
        const wrong = pick(words.filter(z => z !== w), 2).map(z => z.w);
        const o = shuffle([w.w, ...wrong]);
        if (w.e || w.i) into.push({kind:'pic', pic:w, o, a:o.indexOf(w.w), say:w.w, sayA:w.a});
        if (w.it) { const o2 = shuffle([w.w, ...wrong]); into.push({kind:'it', prompt:w.it, o:o2, a:o2.indexOf(w.w), say:w.w, sayA:w.a}); }
      });
    });
    EXTRA_B.forEach(w => B.push({kind:'gq', prompt:w.q, o:w.o, a:w.a, x:w.x}));
    EXTRA_C.forEach(w => C.push({kind:'gq', prompt:w.q, o:w.o, a:w.a, x:w.x}));
    return {a:A, b:B, c:C};
  }
  function floorQuestions(f){
    const pl = pools(), band = BAND(f);
    let pool = pl[band];
    // Floor 3 starts mixing in some easy B1 questions; floor 7 some C1 questions.
    if (f === 3) pool = pick(pl.a, 8).concat(pick(pl.b.filter(q => q.kind === 'mean'), 2));
    if (f === 7) pool = pick(pl.b, 8).concat(pick(pl.c, 2));
    return pick(pool, PER_FLOOR);
  }

  // ---------- sound: the bell and the Westminster chimes, made by the app ----------
  let AC = null;
  const ctx = () => { try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume(); } catch(e){} return AC; };
  function bell(freq, when, dur, vol){
    const c = ctx(); if (!c) return;
    const out = c.createGain(); out.connect(c.destination);
    out.gain.setValueAtTime(0, when); out.gain.linearRampToValueAtTime(vol, when + 0.01); out.gain.exponentialRampToValueAtTime(0.0008, when + dur);
    [[0.5, .5], [1, 1], [1.19, .45], [1.5, .35], [2, .3], [2.51, .2], [3.01, .12]].forEach(([m, g]) => {
      const o = c.createOscillator(), gg = c.createGain();
      o.type = 'sine'; o.frequency.value = freq * m; gg.gain.value = g;
      o.connect(gg); gg.connect(out); o.start(when); o.stop(when + dur);
    });
  }
  function chimes(withBong){
    const c = ctx(); if (!c) return 0;
    const N = {G:415.3, F:370.0, E:329.6, B:246.9};
    const seq = ['EGFB', 'EFGE', 'GEFB', 'BFGE']; // the four phrases of the Westminster hour chime
    let tm = c.currentTime + 0.05;
    seq.forEach((ph, i) => { [...ph].forEach((n, j) => { bell(N[n], tm, j === 3 ? 2.2 : 1.6, .22); tm += j === 3 ? 1.1 : 0.55; }); tm += 0.35; });
    if (withBong) { tm += 0.6; bell(82.4, tm, 6, .55); tm += 1; }
    return tm - c.currentTime;
  }
  const blip = ok => { const c = ctx(); if (!c) return; bell(ok ? 880 : 220, c.currentTime, ok ? .5 : .35, ok ? .08 : .06); };
  function sayWord(w, a){ try { if (window.prSay) window.prSay(w, a); } catch(e){} }

  // ---------- screens ----------
  let G = null, TIMER_ID = null;
  const stopTimer = () => { if (TIMER_ID) { clearInterval(TIMER_ID); TIMER_ID = null; } };
  const head = (title, backFn) => `<div class="pr-top"><button class="pr-back" id="twBack">‹ ${esc(t('back'))}</button><b>🔔 ${esc(title)}</b></div>`;
  const wireBack = fn => { const b = document.getElementById('twBack'); if (b) b.onclick = () => { stopTimer(); G = null; fn(); }; };
  const top0 = () => { const m = document.getElementById('main'); if (m) m.scrollTop = 0; };

  function towerHTML(s){
    let h = '<div class="tw-tower"><div class="tw-spire"></div><div class="tw-clock">🕰️</div>';
    for (let f = FLOORS; f >= 1; f--) {
      const here = f === s.floor, done = f < s.floor, band = BAND(f);
      h += `<div class="tw-fl ${here ? 'here' : ''} ${done ? 'done' : ''} b-${band}"><span>${f}</span>${here ? '<i>⭐</i>' : done ? '<i>✓</i>' : ''}</div>`;
    }
    return h + '<div class="tw-base"></div></div>';
  }

  window.openTower = function home(){
    stopTimer(); G = null; const s = load(), need = Math.max(MIN[s.floor], s.last);
    body().innerHTML = `
      <div class="pr-top"><button class="pr-back" id="twHome">‹ ${esc(T({en:'Levels', it:'Livelli'}))}</button><b>🔔 ${esc(t('title'))}</b></div>
      <div class="tw-wrap">
        ${towerHTML(s)}
        <div class="tw-side">
          <div class="tw-stat"><small>${esc(t('youAre'))}</small><b>${s.floor}</b></div>
          <div class="tw-stat"><small>${esc(t('best'))}</small><b>${s.best}</b></div>
          <div class="tw-stat"><small>${esc(t('rings'))}</small><b>🔔 ${s.rings}</b></div>
        </div>
      </div>
      <p class="tw-need">${esc(t('need'))} <b>${need} / ${PER_FLOOR}</b>${s.last && s.last >= MIN[s.floor] ? ` <small>(${esc(t('lastWas'))})</small>` : ''}${TIMER[s.floor] ? ` · ⏱ ${TIMER[s.floor]}s` : ''}</p>
      <button class="btn navy tw-go" id="twPlay">${esc(t('play'))} ${s.floor} ›</button>
      <details class="tw-rules"><summary>${esc(t('rules'))}</summary>
        <p>📚 ${esc(t('r1'))}</p><p>⬆️ ${esc(t('r2'))}</p><p>⬇️ ${esc(t('r3'))}</p><p>⏱ ${esc(t('r4'))}</p><p>🔔 ${esc(t('r5'))}</p></details>
      ${s.floor > 1 || s.rings ? `<p class="center"><button class="pr-back" id="twReset">${esc(t('reset'))}</button></p>` : ''}`;
    document.getElementById('twHome').onclick = () => { if (window.renderPractice) renderPractice(); };
    document.getElementById('twPlay').onclick = () => play(s.floor);
    const r = document.getElementById('twReset');
    if (r) r.onclick = () => { if (confirmReset()) { const n = load(); n.floor = 1; n.last = 0; save(n); home(); } };
    top0();
  };
  // A simple in-page confirm (browser pop-ups are avoided in the app).
  function confirmReset(){ const b = document.getElementById('twReset'); if (b.dataset.sure) return true; b.dataset.sure = 1; b.textContent = t('sure') + ' ✓'; return false; }

  function play(f){
    G = {f, list: floorQuestions(f), i:0, score:0, lifeline:true};
    question();
  }

  function question(){
    stopTimer();
    if (G.i >= G.list.length) return result();
    const x = G.list[G.i], secs = TIMER[G.f];
    const prompt =
      x.kind === 'pic'  ? `<small>${esc(t('whatIs'))}</small><div class="tw-pic">${x.pic.i ? `<img src="${esc(x.pic.i)}" alt="">` : `<span>${x.pic.e}</span>`}</div>` :
      x.kind === 'it'   ? `<small>${esc(t('howSay'))}</small><div class="pr-m big">“${esc(x.prompt)}”</div>` :
      x.kind === 'mean' ? `<small>${esc(t('means'))}</small><div class="pr-m big">“${esc(x.prompt)}”</div>` :
                          `<div class="pr-gq">${esc(x.prompt).replace(/___/g, '<span class="pr-gap">_____</span>')}</div>`;
    body().innerHTML = head(`${t('floor')} ${G.f}`) + `
      <div class="tw-bar"><span>${esc(t('q'))} ${G.i + 1} ${esc(t('of'))} ${PER_FLOOR}</span><span>${esc(t('score'))}: <b>${G.score}</b></span>
        ${G.lifeline && x.o.length > 2 ? `<button class="tw-life" id="twLife">${esc(t('lifeline'))}</button>` : `<span class="tw-life used"${G.lifeline ? ' style="text-decoration:none;opacity:.5"' : ''}>50:50</span>`}</div>
      ${secs ? `<div class="tw-timer"><i id="twT" style="width:100%"></i></div>` : ''}
      <div class="pr-card">${prompt}</div>
      <div class="pr-opts">${x.o.map((o, n) => `<button class="pr-opt" data-n="${n}">${esc(o)}</button>`).join('')}</div>
      <div class="pr-fb" id="twFb"></div>`;
    wireBack(window.openTower);
    let answered = false;
    const finish = (n) => {
      if (answered) return; answered = true; stopTimer();
      const ok = n === x.a; if (ok) G.score++;
      blip(ok);
      body().querySelectorAll('.pr-opt').forEach(o => { if (+o.dataset.n === x.a) o.classList.add('ok'); else if (+o.dataset.n === n) o.classList.add('no'); });
      if (x.say) sayWord(x.say, x.sayA);
      document.getElementById('twFb').innerHTML =
        `<p class="${ok ? 'good' : 'bad'}">${n === -1 ? '⏱ ' + esc(t('timeUp')) + ' ' : ''}${ok ? '✅ ' + esc(t('right')) : esc(t('wrong')) + ' <b>' + esc(x.o[x.a]) + '</b>'}</p>
         ${x.x && !ok ? `<p class="pr-why">💡 ${esc(x.x)}</p>` : ''}
         <button class="btn navy" id="twN">${esc(t('next'))} ›</button>`;
      document.getElementById('twN').onclick = () => { G.i++; question(); };
      const l = document.getElementById('twLife'); if (l) l.disabled = true;
    };
    body().querySelectorAll('.pr-opt').forEach(b => b.onclick = () => finish(+b.dataset.n));
    const life = document.getElementById('twLife');
    if (life) life.onclick = () => {
      if (answered) return; G.lifeline = false; life.outerHTML = '<span class="tw-life used">50:50</span>';
      const wrong = shuffle(x.o.map((o, n) => n).filter(n => n !== x.a)); const hide = wrong.slice(0, x.o.length - 2);
      hide.forEach(n => { const b = body().querySelector(`.pr-opt[data-n="${n}"]`); if (b) { b.disabled = true; b.style.opacity = .3; } });
    };
    if (secs) {
      const end = Date.now() + secs * 1000, bar = document.getElementById('twT');
      TIMER_ID = setInterval(() => {
        const left = end - Date.now();
        if (!document.getElementById('twT')) { stopTimer(); return; }
        bar.style.width = Math.max(0, left / (secs * 10)) + '%';
        if (left < 5000) bar.classList.add('low');
        if (left <= 0) finish(-1);
      }, 100);
    }
    top0();
  }

  function result(){
    stopTimer();
    const s = load(), f = G.f, sc = G.score, need = Math.max(MIN[f], s.last);
    let kind, nextF = f;
    if (sc >= need) { kind = 'climb'; nextF = f + 1; }
    else if (sc < s.last) { kind = 'fall'; nextF = Math.max(1, f - 1); }
    else kind = 'hold';
    if (kind !== 'hold') s.last = sc;
    if (kind === 'climb' && f === FLOORS) return summit(s);
    s.floor = nextF; s.best = Math.max(s.best, s.floor); save(s);
    const icon = kind === 'climb' ? '⬆️' : kind === 'fall' ? '⬇️' : '🔁';
    const head2 = t(kind), sub = kind === 'hold' ? t('holdS').replace('{f}', f).replace('{n}', need) : `${t(kind + 'S')} ${nextF}`;
    if (kind === 'climb') blip(true);
    body().innerHTML = head(`${t('floor')} ${f}`) + `
      <div class="pr-done tw-res ${kind}">
        <div class="tw-big">${icon}</div>
        <p class="tw-sc">${esc(t('score'))}: <b>${sc} / ${PER_FLOOR}</b></p>
        <h2>${esc(head2)}</h2><p>${esc(sub)}</p>
        <button class="btn navy" id="twC">${esc(t('cont'))} ›</button>
      </div>`;
    wireBack(window.openTower);
    document.getElementById('twC').onclick = () => window.openTower();
    top0();
  }

  function summit(s){
    s.floor = 1; s.last = 0; s.best = FLOORS; save(s);
    const date = new Date().toLocaleDateString(typeof LANG !== 'undefined' && LANG === 'it' ? 'it-IT' : 'en-GB', {day:'numeric', month:'long', year:'numeric'});
    body().innerHTML = `
      <div class="tw-summit">
        <h1>${esc(t('summit'))}</h1>
        <button class="tw-bell" id="twBell" aria-label="Ring the bell">🔔</button>
        <p class="tw-tap" id="twTap">${esc(t('tap'))}</p>
        <div class="tw-badge" id="twBadge" style="display:none">
          <div class="tw-crest">🏆</div>
          <b>${esc(t('ringer'))}</b>
          <span>The Tower · jamesalbert®</span>
          <small>${esc(date)}</small>
          <em id="twRings"></em>
        </div>
        <button class="btn navy" id="twAgain" style="display:none">${esc(t('again'))} ›</button>
        <div class="tw-conf" id="twConf"></div>
      </div>`;
    let rung = false;
    document.getElementById('twBell').onclick = () => {
      const b = document.getElementById('twBell'); b.classList.remove('swing'); void b.offsetWidth; b.classList.add('swing');
      const dur = chimes(!rung);
      if (!rung) {
        rung = true; const n = load(); n.rings = (n.rings || 0) + 1; save(n);
        confetti();
        setTimeout(() => {
          document.getElementById('twTap').style.display = 'none';
          document.getElementById('twRings').textContent = n.rings === 1 ? t('rungOnce') : t('rungTimes').replace('{n}', n.rings);
          document.getElementById('twBadge').style.display = 'block';
          document.getElementById('twAgain').style.display = 'inline-block';
        }, Math.min(dur * 1000, 9000));
      }
    };
    document.getElementById('twAgain').onclick = () => window.openTower();
    top0();
  }

  function confetti(){
    const box = document.getElementById('twConf'); if (!box) return;
    const cols = ['#c9a24a', '#0f1f3d', '#c8102e', '#ffffff', '#012169'];
    for (let i = 0; i < 70; i++) {
      const p = document.createElement('i');
      p.style.left = Math.random() * 100 + '%'; p.style.background = cols[i % cols.length];
      p.style.animationDelay = (Math.random() * 1.2) + 's'; p.style.transform = `rotate(${Math.random() * 360}deg)`;
      box.appendChild(p);
    }
    setTimeout(() => { if (box) box.innerHTML = ''; }, 6000);
  }

  // Leaving the Practice screen stops the timer.
  window.towerStop = () => { stopTimer(); G = null; };
  window.__towerGame = () => G; // used by automated tests

  // ---------- styles ----------
  const css = document.createElement('style');
  css.textContent = `
    .tw-wrap{display:flex;gap:18px;align-items:flex-end;justify-content:center;margin:8px 0 4px}
    .tw-tower{width:150px;display:flex;flex-direction:column;align-items:center}
    .tw-spire{width:0;height:0;border-left:30px solid transparent;border-right:30px solid transparent;border-bottom:44px solid var(--navy)}
    .tw-clock{width:74px;height:62px;background:var(--navy);display:grid;place-items:center;font-size:34px;border-bottom:3px solid var(--gold)}
    .tw-fl{position:relative;width:100px;height:30px;margin-top:3px;border-radius:4px;display:flex;align-items:center;justify-content:center;gap:6px;
      background:#e9e2cf;color:var(--navy);font:600 13px Poppins,sans-serif;border:1.5px solid transparent}
    .tw-fl.b-b{background:#e2d7b8}.tw-fl.b-c{background:#d6c79d}
    .tw-fl.done{background:var(--navy);color:#fff}
    .tw-fl.here{background:var(--gold);color:var(--navy);border-color:var(--navy);transform:scale(1.08);box-shadow:0 4px 12px rgba(15,31,61,.25)}
    .tw-fl i{font-style:normal;font-size:14px}
    .tw-base{width:130px;height:10px;background:var(--navy);border-radius:3px;margin-top:3px}
    .tw-side{display:flex;flex-direction:column;gap:10px;padding-bottom:12px}
    .tw-stat{background:#fff;border:1.5px solid var(--cream-2);border-radius:14px;padding:8px 14px;min-width:96px;box-shadow:var(--shadow)}
    .tw-stat small{display:block;font-size:11px;color:var(--muted)}
    .tw-stat b{font-family:'Playfair Display',serif;font-size:26px;color:var(--navy)}
    .tw-need{text-align:center;margin:14px 0 8px}
    .tw-go{display:block;margin:0 auto 10px;font-size:16px;padding:14px 28px}
    .tw-rules{background:#fbf4e2;border-radius:14px;padding:10px 14px;margin:8px 0}
    .tw-rules summary{font-weight:600;color:var(--navy);cursor:pointer}
    .tw-rules p{font-size:13.5px;margin:8px 0;line-height:1.45}
    .tw-bar{display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:13px;margin-bottom:8px}
    .tw-life{background:var(--gold);color:var(--navy);border:0;border-radius:999px;padding:5px 12px;font:600 12px Poppins,sans-serif;cursor:pointer}
    .tw-life.used{background:#eee;color:#aaa;text-decoration:line-through}
    .tw-timer{height:8px;background:#eee;border-radius:9px;overflow:hidden;margin-bottom:10px}
    .tw-timer i{display:block;height:100%;background:var(--navy);transition:width .1s linear}
    .tw-timer i.low{background:#c8102e}
    .tw-pic{font-size:84px;line-height:1.1;margin:6px 0}
    .tw-pic img{max-width:180px;max-height:180px;border-radius:12px}
    .tw-res .tw-big{font-size:64px}
    .tw-res.climb h2{color:#1b7f3b}.tw-res.fall h2{color:#c8102e}
    .tw-sc{font-size:18px}
    .tw-summit{position:relative;text-align:center;padding:18px 6px 30px;overflow:hidden;min-height:70vh;
      background:radial-gradient(circle at 50% 28%,#1c3466 0%,#0f1f3d 70%);color:#fff;border-radius:22px}
    .tw-summit h1{color:#fff;font-size:24px;margin:6px 10px 10px}
    .tw-bell{font-size:120px;background:none;border:0;cursor:pointer;transform-origin:50% 8%;filter:drop-shadow(0 8px 24px rgba(201,162,74,.6))}
    .tw-bell.swing{animation:twSwing 2.4s ease-in-out}
    @keyframes twSwing{0%{transform:rotate(0)}15%{transform:rotate(22deg)}35%{transform:rotate(-18deg)}55%{transform:rotate(12deg)}75%{transform:rotate(-6deg)}100%{transform:rotate(0)}}
    .tw-tap{color:var(--gold);font-weight:600;animation:twPulse 1.6s infinite}
    @keyframes twPulse{50%{opacity:.45}}
    .tw-badge{background:#fff;color:var(--navy);border:3px solid var(--gold);border-radius:18px;padding:16px 20px;margin:14px auto;max-width:260px;box-shadow:0 10px 30px rgba(0,0,0,.3)}
    .tw-badge .tw-crest{font-size:40px}
    .tw-badge b{display:block;font-family:'Playfair Display',serif;font-size:26px}
    .tw-badge span{display:block;font-size:12px;letter-spacing:1px;color:var(--gold-d);text-transform:uppercase;margin:2px 0 6px}
    .tw-badge small{display:block;color:var(--muted)}
    .tw-badge em{display:block;font-style:normal;font-size:13px;margin-top:8px}
    .tw-conf{position:absolute;inset:0;pointer-events:none}
    .tw-conf i{position:absolute;top:-12px;width:8px;height:14px;border-radius:2px;animation:twFall 3.6s ease-in forwards}
    @keyframes twFall{to{top:105%;transform:rotate(720deg)}}`;
  document.head.appendChild(css);
})();
