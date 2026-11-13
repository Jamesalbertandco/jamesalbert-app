// General English Level Test – shown in the app on the "levelTest" screen.
// To change the time limit, level bands, questions or answers, edit LEVEL_TEST below.
// ans = the correct option, counting from 0 (a=0, b=1, c=2, d=3).
//
// RESULTS BY EMAIL: get a free access key at https://web3forms.com using info@jamesalbert.it,
// then paste it into accessKey below. Every finished test is then emailed to that address.
// While accessKey is empty, students get a "Send my results" button that opens an email instead.
window.LEVEL_TEST = {
  accessKey: "",
  minutes: 35,
  bands: [ // [lowest score, level]
    [0,  "A1", {en:"Beginner", it:"Principiante"}],
    [11, "A2", {en:"Elementary", it:"Elementare"}],
    [21, "B1", {en:"Intermediate", it:"Intermedio"}],
    [31, "B2", {en:"Upper-intermediate", it:"Intermedio superiore"}],
    [41, "C1", {en:"Advanced", it:"Avanzato"}]
  ],
  questions: [
    ["\"I come ....... Italy.\"", ["on","at","in","from"], 3],
    ["Which alternative is correct?", ["I has cold","I have cold","I am cold","I is cold"], 2],
    ["'Ann, how are you?'", ["I'm fine thanks, and you?","I'm working.","Good.","I am a nurse."], 0],
    ["Whose key is that?", ["It's Cate","It's Cate's","It's Cate's to","It's of Cate"], 1],
    ["His office is on the first ...", ["Level","Stage","Floor","Ground"], 2],
    ["I speak Hebrew and French but Ann ...", ["Speaks","Doesn't speaks","Don't","Doesn't"], 3],
    ["I can't find my glasses. Can you look for ... please?", ["Them","It","They","Their"], 0],
    ["..... there any cars on the street?", ["Are","Am","There","Isn't"], 0],
    ["(On the phone) \"Hello, Juliet ......\"", ["Speak","Speaking","Talking","Talk"], 1],
    ["... do you go to the gym? – Twice a week.", ["Where?","How often?","How many kinds?","Why?"], 1],
    ["I like ... in my spare time.", ["Readed","To reading","Read","Reading"], 3],
    ["Chopin ... music when he was three.", ["Can read","Can't read","Can to read","Could read"], 3],
    ["I ... born in 1992.", ["Is","Am","Was","Were"], 2],
    ["Where ... Ann and Mary at 6 pm yesterday?", ["Have been","Was","Were","Are"], 2],
    ["I went to the bookshop ..... \"Harry Potter\".", ["For to buy","To buying","To buy","For buy"], 2],
    ["He is interested ...... learning Romanian.", ["For","To","In","On"], 2],
    ["Would you like ......., sir?", ["Went","Go","To go","Going"], 2],
    ["The doctor gave me a ... for some medicine last week.", ["Receipt","Recipe","Prescription","Note"], 2],
    ["What ... next weekend?", ["Do you do?","Will you doing?","Did you do?","Are you doing?"], 3],
    ["\"Why are you so hungry?\" \"Oh, I ... breakfast this morning.\"", ["Haven't","Hadn't","Didn't have","Don't have"], 2],
    ["Look! The bus ...", ["Are coming","Is coming","Come","Comes"], 1],
    ["\"I have never been to Africa.\" – \"... have I.\"", ["No","Neither","So","Either"], 1],
    ["\"Have you visited Birmingham?\" \"...\"", ["Not","Ever","Not yet","Already"], 2],
    ["My mother ... the carpet when I got home yesterday afternoon.", ["Is hoovering","Has been hoovering","Were hoovering","Was hoovering"], 3],
    ["My aunt ... come to our wedding reception next month.", ["Will to","Aren't going to","Isn't going to","Isn't"], 2],
    ["I promise I ... study harder.", ["Am going to","Must","Will","May"], 2],
    ["Is Emma ... Carla?", ["Taller that","As tall as","Tall as","More tall"], 1],
    ["Where is ... chemist's, please?", ["More near","The nearest","The most near","Nearer"], 1],
    ["Is that purse ...?", ["To you","Yours","Your","You"], 1],
    ["I ... my mobile phone since 2009.", ["Had","Have","Have had","Am having"], 2],
    ["How long ... English?", ["You learn","Are you learning","Do you learn","Have you been learning"], 3],
    ["We ... the flight tickets yet.", ["Don't book","Have booked","Haven't booked","Didn't book"], 2],
    ["When Simon ... back tonight, he'll do the washing up.", ["Will come","Shall come","Comes","Come"], 2],
    ["Would you mind ... the gate, please?", ["Closing","To close","Closed","Close"], 0],
    ["I ... smoke when I was 20.", ["Use to","Used to","Couldn't","Wouldn't"], 1],
    ["You should ... your own business.", ["Make","Do","Mind","Think"], 2],
    ["Could you tell me when ...?", ["The train leaves","Leaves the train","Does leave the train","Does the train leave"], 0],
    ["... did you travel with?", ["Who","How","What","Whose"], 0],
    ["If I had seen you earlier ...", ["We could have a drink","We may have a drink","We could have had a drink","We will have a drink"], 2],
    ["You ... see a doctor.", ["Had","Should","Did","Would"], 1],
    ["My mobile phone ...", ["Has been stolen","Have been stolen","Has stolen","Stole"], 0],
    ["Carla ... me to go home.", ["Said","Told","Made","Spoke"], 1],
    ["I've spoken to a boy ... father died last week.", ["Who","Whose","That","Which"], 1],
    ["If I were a prince, I ... a palace.", ["'d have had","'ll have","Have","'d have"], 3],
    ["Drive ..., otherwise you'll have an accident.", ["Much more careful","Less carefully","More carefully","More careful"], 2],
    ["If they ... next to each other on the plane, they wouldn't have got married.", ["Sat","Had sat","Hadn't sat","Didn't sit"], 2],
    ["When I got home, someone ... the window.", ["Hadn't broken","Brokes","Broke","Had broken"], 3],
    ["... the better team, we lost the match.", ["Despite the fact","Although","Despite of being","Despite being"], 3],
    ["If only I ... richer.", ["Have been","Is","Were","Am"], 2],
    ["I am fed up ... this exercise.", ["For doing","To do","With doing","To doing"], 2],
    ["By this time next year, I ... all my exams.", ["Will have taken","Will take","Take","Have taken"], 0]
  ]
};

(() => {
  const C = window.LEVEL_TEST, Q = C.questions, KEY = 'ja-leveltest';
  const L = {
    title:   {en:"English Level Test", it:"Test di livello di inglese"},
    intro:   {en:"51 multiple-choice questions, from beginner to advanced. Choose one answer for each question.",
              it:"51 domande a scelta multipla, dal livello principiante all'avanzato. Scegli una risposta per ogni domanda."},
    note:    {en:"This is not a Cambridge English exam. Results are approximate and not a formal qualification.",
              it:"Non è un esame Cambridge English. I risultati sono indicativi e non costituiscono una qualifica ufficiale."},
    first:   {en:"First name", it:"Nome"}, last: {en:"Last name", it:"Cognome"}, email: {en:"Email", it:"Email"},
    need:    {en:"Please enter your name and a valid email address.", it:"Inserisci nome, cognome e un indirizzo email valido."},
    rulesT:  {en:"Rules for the online test", it:"Regole del test online"},
    rules:   {en:[
      "Read all instructions carefully before you begin.",
      "Make sure you have a stable internet connection.",
      "Complete the test on your own – no help from other people or online sources.",
      "Use a quiet place without distractions.",
      "Answer all the questions: unanswered questions count as wrong.",
      "Check your answers carefully – you can submit the test only once.",
      "The test is timed (" + C.minutes + " minutes). When time runs out, your answers are submitted automatically."],
              it:[
      "Leggi attentamente tutte le istruzioni prima di iniziare.",
      "Assicurati di avere una connessione internet stabile.",
      "Svolgi il test da solo – senza l'aiuto di altre persone o di fonti online.",
      "Scegli un luogo tranquillo e senza distrazioni.",
      "Rispondi a tutte le domande: quelle senza risposta contano come errate.",
      "Controlla bene le risposte – puoi inviare il test una sola volta.",
      "Il test è a tempo (" + C.minutes + " minuti). Allo scadere del tempo le risposte vengono inviate automaticamente."]},
    luck:    {en:"Good luck!", it:"Buona fortuna!"},
    start:   {en:"Start the test", it:"Inizia il test"},
    q:       {en:"Question", it:"Domanda"}, of: {en:"of", it:"di"},
    back:    {en:"Back", it:"Indietro"}, next: {en:"Next", it:"Avanti"}, finish: {en:"Finish", it:"Termina"},
    left:    {en:"left", it:"rimasti"},
    sureT:   {en:"Submit your test?", it:"Inviare il test?"},
    unans:   {en:"Unanswered questions:", it:"Domande senza risposta:"},
    allDone: {en:"You have answered every question.", it:"Hai risposto a tutte le domande."},
    once:    {en:"You can submit only once.", it:"Puoi inviare il test una sola volta."},
    submit:  {en:"Submit", it:"Invia"}, review: {en:"Keep checking", it:"Continua a controllare"},
    timeUp:  {en:"Time is up – your answers have been submitted.", it:"Tempo scaduto – le tue risposte sono state inviate."},
    yourRes: {en:"Your result", it:"Il tuo risultato"},
    level:   {en:"Your level", it:"Il tuo livello"},
    score:   {en:"Score", it:"Punteggio"},
    sent:    {en:"Your results have been sent to jamesalbert. We'll be in touch soon to talk about the right course for you.",
              it:"I tuoi risultati sono stati inviati a jamesalbert. Ti contatteremo presto per parlare del corso più adatto a te."},
    sending: {en:"Sending your results…", it:"Invio dei risultati…"},
    failed:  {en:"We couldn't send your results automatically. Please tap the button below to email them to us.",
              it:"Non siamo riusciti a inviare i risultati automaticamente. Tocca il pulsante qui sotto per inviarceli via email."},
    mail:    {en:"Send my results to jamesalbert", it:"Invia i miei risultati a jamesalbert"},
    book:    {en:"Book a lesson", it:"Prenota una lezione"},
    again:   {en:"New test (another person)", it:"Nuovo test (un'altra persona)"},
    home:    {en:"Back to home", it:"Torna alla home"}
  };
  const t = k => T(L[k]);
  let S = load(), tick = null;

  function load(){ try { return JSON.parse(localStorage.getItem(KEY)) || {step:'intro'}; } catch(e){ return {step:'intro'}; } }
  function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e){} }
  const body = () => document.getElementById('ltBody');
  const remaining = () => Math.max(0, S.start + C.minutes * 60000 - Date.now());
  const mmss = ms => { const s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  const levelFor = n => { let b = C.bands[0]; C.bands.forEach(x => { if (n >= x[0]) b = x; }); return b; };

  function render(){
    if (!body()) return;
    clearInterval(tick);
    if (S.step === 'test' && remaining() <= 0) return finish(true);
    ({intro, test, done})[S.step]();
  }

  function intro(){
    const r = T(L.rules).map(x => `<li>${esc(x)}</li>`).join('');
    body().innerHTML = `
      <h1>${esc(t('title'))}</h1><p class="sub">${esc(t('intro'))}</p>
      <div class="lt-card">
        <label>${esc(t('first'))}<input id="ltFirst" autocomplete="given-name" value="${esc(S.first||'')}"></label>
        <label>${esc(t('last'))}<input id="ltLast" autocomplete="family-name" value="${esc(S.last||'')}"></label>
        <label>${esc(t('email'))}<input id="ltEmail" type="email" autocomplete="email" inputmode="email" value="${esc(S.email||'')}"></label>
      </div>
      <div class="lt-card"><h3>${esc(t('rulesT'))}</h3><ol class="lt-rules">${r}</ol><p><b>${esc(t('luck'))}</b></p>
        <p class="lt-note">${esc(t('note'))}</p></div>
      <p class="lt-err" id="ltErr" hidden>${esc(t('need'))}</p>
      <button class="btn navy block" id="ltStart">${esc(t('start'))} · ${C.minutes} min</button>`;
    document.getElementById('ltStart').onclick = () => {
      const f = ltVal('ltFirst'), l = ltVal('ltLast'), e = ltVal('ltEmail');
      S.first = f; S.last = l; S.email = e;
      if (!f || !l || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) { document.getElementById('ltErr').hidden = false; return; }
      Object.assign(S, {step:'test', start:Date.now(), i:0, a:Array(Q.length).fill(null), confirm:false});
      save(); render();
    };
  }
  const ltVal = id => document.getElementById(id).value.trim();

  function test(){
    const i = S.i, q = Q[i], left = S.a.filter(x => x === null).length;
    const opts = q[1].map((o, k) => `<button class="lt-opt${S.a[i] === k ? ' on' : ''}" data-k="${k}"><span>${'abcd'[k]}</span>${esc(o)}</button>`).join('');
    body().innerHTML = `
      <div class="lt-top"><span>${esc(t('q'))} ${i + 1} ${esc(t('of'))} ${Q.length}</span><span class="lt-time" id="ltTime">⏱ ${mmss(remaining())}</span></div>
      <div class="lt-bar"><i style="width:${(Q.length - left) / Q.length * 100}%"></i></div>
      ${S.confirm ? `
        <div class="lt-card lt-confirm"><h3>${esc(t('sureT'))}</h3>
          <p>${left ? esc(t('unans')) + ' <b>' + left + '</b>' : esc(t('allDone'))}</p>
          ${left ? `<div class="lt-dots">${S.a.map((x, k) => x === null ? `<button data-go="${k}">${k + 1}</button>` : '').join('')}</div>` : ''}
          <p class="lt-note">${esc(t('once'))}</p>
          <button class="btn navy block" id="ltSubmit">${esc(t('submit'))}</button>
          <button class="btn ghost block" id="ltReview" style="margin-top:10px">${esc(t('review'))}</button></div>` : `
        <p class="lt-q">${i + 1}. ${esc(q[0])}</p>
        <div class="lt-opts">${opts}</div>
        <div class="lt-nav">
          <button class="btn ghost" id="ltBack" ${i ? '' : 'disabled'}>‹ ${esc(t('back'))}</button>
          <button class="btn navy" id="ltNext">${i === Q.length - 1 ? esc(t('finish')) : esc(t('next')) + ' ›'}</button>
        </div>`}`;
    body().querySelectorAll('.lt-opt').forEach(b => b.onclick = () => { S.a[i] = +b.dataset.k; save(); test(); });
    body().querySelectorAll('[data-go]').forEach(b => b.onclick = () => { S.i = +b.dataset.go; S.confirm = false; save(); test(); });
    const on = (id, f) => { const el = document.getElementById(id); if (el) el.onclick = f; };
    on('ltBack', () => { S.i--; save(); test(); });
    on('ltNext', () => { if (i === Q.length - 1) S.confirm = true; else S.i++; save(); test(); document.getElementById('main').scrollTop = 0; });
    on('ltSubmit', () => finish(false));
    on('ltReview', () => { S.confirm = false; save(); test(); });
    clearInterval(tick);
    tick = setInterval(() => {
      const el = document.getElementById('ltTime');
      if (!el || S.step !== 'test') return clearInterval(tick);
      const r = remaining(); el.textContent = '⏱ ' + mmss(r); el.classList.toggle('low', r < 5 * 60000);
      if (r <= 0) finish(true);
    }, 1000);
  }

  function finish(timeUp){
    clearInterval(tick);
    const score = S.a.reduce((n, x, k) => n + (x === Q[k][2] ? 1 : 0), 0);
    Object.assign(S, {step:'done', score, timeUp, taken:Math.min(Date.now() - S.start, C.minutes * 60000), sent:'pending'});
    save(); render(); send();
  }

  function report(){
    const b = levelFor(S.score);
    const lines = Q.map((q, k) => {
      const a = S.a[k], ok = a === q[2];
      return `${k + 1}. ${ok ? '✓' : '✗'} ${a === null ? '(no answer)' : q[1][a]}${ok ? '' : '  → correct: ' + q[1][q[2]]}`;
    }).join('\n');
    return {
      subject: `Level test: ${S.first} ${S.last} – ${b[1]} (${S.score}/${Q.length})`,
      name: `${S.first} ${S.last}`, email: S.email,
      score: `${S.score} / ${Q.length}`, level: `${b[1]} – ${b[2].en}`,
      time_taken: mmss(S.taken) + (S.timeUp ? ' (time ran out)' : ''),
      app_language: LANG === 'it' ? 'Italian' : 'English',
      completed: new Date().toLocaleString('en-GB'),
      answers: lines
    };
  }

  async function send(){
    if (!C.accessKey) { S.sent = 'manual'; save(); return render(); }
    const r = report();
    try {
      const res = await fetch('https://api.web3forms.com/submit', {method:'POST', headers:{'Content-Type':'application/json', Accept:'application/json'},
        body: JSON.stringify(Object.assign({access_key:C.accessKey, from_name:'jamesalbert app – Level test', replyto:S.email}, r))});
      S.sent = (await res.json()).success ? 'ok' : 'manual';
    } catch(e) { S.sent = 'manual'; }
    save(); render();
  }

  function done(){
    const b = levelFor(S.score), r = report();
    const mail = 'mailto:info@jamesalbert.it?subject=' + encodeURIComponent(r.subject) + '&body=' + encodeURIComponent(
      `Name: ${r.name}\nEmail: ${r.email}\nScore: ${r.score}\nLevel: ${r.level}\nTime taken: ${r.time_taken}\nCompleted: ${r.completed}\n\n${r.answers}`);
    const status = S.sent === 'ok' ? `<p>${esc(t('sent'))}</p>`
      : S.sent === 'pending' ? `<p class="lt-note">${esc(t('sending'))}</p>`
      : `<p>${esc(C.accessKey ? t('failed') : '')}</p><a class="btn navy block" href="${mail}">✉ ${esc(t('mail'))}</a>`;
    body().innerHTML = `
      <h1>${esc(t('yourRes'))}</h1>
      ${S.timeUp ? `<p class="sub">${esc(t('timeUp'))}</p>` : `<p class="sub">${esc(S.first)} ${esc(S.last)}</p>`}
      <div class="lt-result"><span>${esc(t('level'))}</span><b>${b[1]}</b><em>${esc(T(b[2]))}</em>
        <div>${esc(t('score'))}: <b>${S.score} / ${Q.length}</b></div></div>
      <div class="lt-card">${status}</div>
      <p class="lt-note" style="margin:0 4px 14px">${esc(t('note'))}</p>
      <button class="btn block" onclick="go('book')">${esc(t('book'))}</button>
      <button class="btn ghost block" style="margin-top:10px" onclick="go('home')">${esc(t('home'))}</button>
      <button class="lt-link" id="ltAgain">${esc(t('again'))}</button>`;
    document.getElementById('ltAgain').onclick = () => { S = {step:'intro'}; save(); render(); };
  }

  const css = document.createElement('style');
  css.textContent = `
    #levelTest .lt-card{background:#fff;border:1px solid var(--cream-2);border-radius:16px;padding:16px;margin-bottom:14px;box-shadow:var(--shadow)}
    #levelTest .lt-card h3{font-family:'Playfair Display',serif;color:var(--navy);font-size:19px;margin-bottom:8px}
    #levelTest label{display:block;font-size:13px;font-weight:600;color:var(--navy);margin-bottom:10px}
    #levelTest input{display:block;width:100%;margin-top:5px;padding:12px;border:1px solid #cfd5e2;border-radius:10px;font:16px Poppins,sans-serif}
    #levelTest .lt-rules{padding-left:20px;font-size:13.5px;line-height:1.5;margin-bottom:10px}
    #levelTest .lt-rules li{margin-bottom:5px}
    #levelTest .lt-note{font-size:12px;color:var(--muted)}
    #levelTest .lt-err{color:#a3121f;font-size:13px;margin-bottom:10px}
    #levelTest .btn.block{display:flex;width:100%}
    #levelTest .btn.ghost{background:#fff;color:var(--navy);border:1.5px solid var(--navy)}
    #levelTest .btn[disabled]{opacity:.35}
    #levelTest .lt-top{display:flex;justify-content:space-between;align-items:center;font-size:13px;font-weight:600;color:var(--navy);margin-bottom:8px}
    #levelTest .lt-time{background:var(--navy);color:#fff;border-radius:999px;padding:5px 12px;font-variant-numeric:tabular-nums}
    #levelTest .lt-time.low{background:#a3121f}
    #levelTest .lt-bar{height:6px;background:var(--cream-2);border-radius:9px;overflow:hidden;margin-bottom:22px}
    #levelTest .lt-bar i{display:block;height:100%;background:var(--navy);transition:width .2s}
    #levelTest .lt-q{font-family:'Source Serif 4',Georgia,serif;font-size:21px;line-height:1.4;color:var(--ink);margin-bottom:18px}
    #levelTest .lt-opts{display:flex;flex-direction:column;gap:10px;margin-bottom:22px}
    #levelTest .lt-opt{display:flex;align-items:center;gap:12px;text-align:left;background:#fff;border:1.5px solid #d6dbe6;border-radius:14px;padding:14px;font:500 15.5px Poppins,sans-serif;color:var(--ink);cursor:pointer}
    #levelTest .lt-opt span{flex:none;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:var(--cream-2);color:var(--navy);font-weight:700;font-size:13px}
    #levelTest .lt-opt.on{border-color:var(--navy);background:#eef2fa}
    #levelTest .lt-opt.on span{background:var(--navy);color:#fff}
    #levelTest .lt-nav{display:flex;gap:10px}
    #levelTest .lt-nav .btn{flex:1}
    #levelTest .lt-dots{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 12px}
    #levelTest .lt-dots button{width:38px;height:38px;border-radius:10px;border:1.5px solid var(--navy);background:#fff;color:var(--navy);font:600 13px Poppins,sans-serif}
    #levelTest .lt-confirm p{font-size:14px;margin-bottom:8px}
    #levelTest .lt-result{background:var(--navy);color:#fff;border-radius:18px;padding:24px;text-align:center;margin-bottom:14px}
    #levelTest .lt-result span{font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.8}
    #levelTest .lt-result>b{display:block;font-family:'Playfair Display',serif;font-size:64px;line-height:1.1}
    #levelTest .lt-result em{display:block;font-style:normal;margin-bottom:12px}
    #levelTest .lt-result div{border-top:1px solid rgba(255,255,255,.25);padding-top:12px;font-size:15px}
    #levelTest .lt-card p{font-size:14px;line-height:1.5;margin-bottom:10px}
    #levelTest .lt-link{display:block;margin:18px auto 0;border:0;background:none;color:var(--muted);font:500 12.5px Poppins,sans-serif;text-decoration:underline;cursor:pointer}`;
  document.head.appendChild(css);

  window.renderLevelTest = render;
})();
