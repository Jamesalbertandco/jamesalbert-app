// The jamesalbert Travel Club – information page + application form (screen "club").
// Applications are emailed to info@jamesalbert.it through Web3Forms (same key as the level test).
// The WhatsApp group link is NOT shown here: send it only to members you accept.
(() => {
  const FEE = "€20";
  const D = 'images/club/';
  const L = {
    eyebrow: {en:"Travel Club", it:"Travel Club"},
    h1:      {en:"Travel together. <em>Speak</em> together.", it:"Viaggiare insieme. <em>Parlare</em> insieme."},
    lede:    {en:"The jamesalbert Travel Club is a small, English-speaking community that becomes a family on weekends — walking beaches, sharing picnics, and exploring new places together.",
              it:"Il jamesalbert Travel Club è una piccola comunità che parla inglese e che nel fine settimana diventa una famiglia: passeggiate sulla spiaggia, picnic condivisi e nuovi posti da scoprire insieme."},
    aboutK:  {en:"About the Club", it:"Il Club"},
    aboutH:  {en:"A Community First, A Trip Second", it:"Prima la comunità, poi il viaggio"},
    about:   {en:[
      "The jamesalbert Travel Club began as a simple idea: the best way to practise a language is to live inside it for a weekend. What started as a handful of students taking a walk together has grown into a small, English-speaking community that meets throughout the year.",
      "We organise excursions on a weekly, monthly and annual basis — from a Sunday walk on the coast to a long-haul trip abroad. Every outing is planned and led directly by jamesalbert, and the Club operates on a non-profit basis: it exists to add real value to the language-learning experience, not to turn a profit.",
      "Our founder and Managing Director, James Maposa, is a certified, licensed tour guide for Southern Africa — which means the Club has access to discounted rates most travel groups simply don't. The result is small, boutique trips where the focus stays exactly where it should: good company, good scenery, and English as the language that ties it all together."],
              it:[
      "Il jamesalbert Travel Club nasce da un'idea semplice: il modo migliore per praticare una lingua è viverla per un intero fine settimana. Quella che era una passeggiata tra pochi studenti è diventata una piccola comunità che parla inglese e che si ritrova durante tutto l'anno.",
      "Organizziamo uscite settimanali, mensili e annuali: da una passeggiata domenicale sulla costa a un viaggio a lungo raggio all'estero. Ogni uscita è pianificata e guidata direttamente da jamesalbert, e il Club è senza scopo di lucro: esiste per dare valore reale all'apprendimento della lingua, non per guadagnare.",
      "Il nostro fondatore e Direttore Generale, James Maposa, è guida turistica certificata e abilitata per l'Africa australe: per questo il Club ha accesso a tariffe agevolate che la maggior parte dei gruppi non ha. Il risultato sono viaggi piccoli e su misura, dove contano davvero la buona compagnia, i bei paesaggi e l'inglese come lingua che ci unisce."]},
    calK:    {en:"The Calendar", it:"Il calendario"},
    calH:    {en:"Weekly, Monthly & Annual", it:"Settimanale, mensile e annuale"},
    cards: [
      {img:"weekend.jpg", t:{en:"Weekend Excursions", it:"Uscite del weekend"},
       p:{en:"Regular outings close to home — beach walks, picnics and barbecues with the Travel Club community. Simple time together, entirely in English.",
          it:"Uscite regolari vicino a casa: passeggiate in spiaggia, picnic e grigliate con la comunità del Travel Club. Tempo semplice insieme, tutto in inglese."}},
      {img:"monthly.jpg", pos:"center 12%", t:{en:"Monthly Excursions", it:"Gite mensili"},
       p:{en:"Once a month, we take the group further afield — afternoon trips to nearby towns like Trieste and Venice, exploring landmarks and local life along the way.",
          it:"Una volta al mese andiamo un po' più lontano: pomeriggi in città vicine come Trieste e Venezia, alla scoperta di monumenti e vita locale."}},
      {img:"annual.jpg", t:{en:"Annual Long-Haul Trip", it:"Il grande viaggio annuale"},
       p:{en:"Once a year, the Club travels further still — a long-haul trip to an English-speaking country such as the United Kingdom or South Africa, led personally by our founder, a certified, licensed tour guide for Southern Africa.",
          it:"Una volta all'anno il Club va ancora più lontano: un viaggio in un paese di lingua inglese, come il Regno Unito o il Sudafrica, guidato personalmente dal nostro fondatore, guida turistica certificata e abilitata per l'Africa australe."}}
    ],
    guideK:  {en:"Your Guide", it:"La vostra guida"},
    guideH:  {en:"Led by James Maposa", it:"Guidato da James Maposa"},
    guide:   {en:"Every jamesalbert excursion is organised and, for our long-haul trips, personally guided by James Maposa, founder and Managing Director of jamesalbert. James is a certified, licensed tour guide for Southern Africa — and it's that professional guiding background, paired with a genuine love of bringing people together, that shapes how the Travel Club runs: carefully planned, personally led, and always with an eye for a good story along the way.",
              it:"Ogni uscita jamesalbert è organizzata e, per i viaggi a lungo raggio, guidata personalmente da James Maposa, fondatore e Direttore Generale di jamesalbert. James è guida turistica certificata e abilitata per l'Africa australe: è questa esperienza professionale, unita alla passione per far incontrare le persone, a definire il Travel Club. Viaggi pianificati con cura, guidati di persona e sempre con una bella storia da raccontare."},
    pillars: [
      [{en:"Small, boutique groups", it:"Gruppi piccoli e su misura"}, {en:"Never a big, anonymous tour bus — you travel with people you actually get to know.", it:"Mai un grande pullman anonimo: viaggi con persone che impari davvero a conoscere."}],
      [{en:"English as the common language", it:"L'inglese come lingua comune"}, {en:"Every excursion doubles as immersion practice, without ever feeling like a lesson.", it:"Ogni uscita è anche pratica di immersione, senza mai sembrare una lezione."}],
      [{en:"Run as a non-profit", it:"Senza scopo di lucro"}, {en:"The Club exists to add value to your learning, not to generate a margin.", it:"Il Club esiste per arricchire il tuo apprendimento, non per guadagnare."}]
    ],
    galK:    {en:"Moments from past excursions", it:"Momenti dalle uscite passate"},
    howK:    {en:"Membership", it:"Iscrizione"},
    howH:    {en:"How to join", it:"Come entrare nel Club"},
    howP:    {en:"The Travel Club is a small, committed group, so membership is by application.", it:"Il Travel Club è un gruppo piccolo e affiatato: per questo si entra su candidatura."},
    steps:   {en:["Send us a short application below.", "We review it and get in touch with you personally.", "If there's a place for you, we send you a formal invitation.", "Membership is " + FEE + " a year. Once it's paid, we welcome you into the members' group."],
              it:["Inviaci una breve candidatura qui sotto.", "La valutiamo e ti contattiamo personalmente.", "Se c'è un posto per te, ti inviamo un invito formale.", "L'iscrizione costa " + FEE + " all'anno. Una volta pagata, ti accogliamo nel gruppo dei soci."]},
    apply:   {en:"Apply to join", it:"Candidati"},
    formH:   {en:"Application", it:"Candidatura"},
    formP:   {en:"Tell us a little about yourself. It only takes a minute.", it:"Raccontaci qualcosa di te. Basta un minuto."},
    first:   {en:"First name", it:"Nome"}, last: {en:"Last name", it:"Cognome"},
    email:   {en:"Email", it:"Email"}, phone: {en:"Phone (WhatsApp)", it:"Telefono (WhatsApp)"},
    town:    {en:"Where do you live?", it:"Dove abiti?"},
    student: {en:"Are you connected to jamesalbert?", it:"Hai già un legame con jamesalbert?"},
    studOpt: {en:["Current student","Parent of a student","Former student","Not yet"], it:["Studente attuale","Genitore di uno studente","Ex studente","Non ancora"]},
    level:   {en:"Your English level", it:"Il tuo livello di inglese"},
    levOpt:  {en:["Beginner","Elementary","Intermediate","Upper-intermediate","Advanced","Native speaker","I'm not sure"], it:["Principiante","Elementare","Intermedio","Intermedio superiore","Avanzato","Madrelingua","Non lo so"]},
    interest:{en:"What interests you most?", it:"Cosa ti interessa di più?"},
    intOpt:  {en:["Weekend excursions","Monthly trips","The annual trip abroad"], it:["Uscite del weekend","Gite mensili","Il viaggio annuale all'estero"]},
    why:     {en:"Why would you like to join the Club?", it:"Perché vorresti entrare nel Club?"},
    agree:   {en:"I am 18 or over, and I agree that jamesalbert may contact me about my application.", it:"Ho almeno 18 anni e accetto di essere contattato da jamesalbert in merito alla mia candidatura."},
    need:    {en:"Please fill in your name, email, phone, and tick the box at the bottom.", it:"Compila nome, cognome, email, telefono e spunta la casella in fondo."},
    send:    {en:"Send my application", it:"Invia la candidatura"},
    sending: {en:"Sending…", it:"Invio in corso…"},
    back:    {en:"‹ Back to the Club", it:"‹ Torna al Club"},
    doneH:   {en:"Thank you!", it:"Grazie!"},
    doneP:   {en:"We've received your application. We'll review it and get in touch with you personally. If there's a place for you, we'll send you a formal invitation with the details of the " + FEE + " annual membership.",
              it:"Abbiamo ricevuto la tua candidatura. La valuteremo e ti contatteremo personalmente. Se c'è un posto per te, ti invieremo un invito formale con i dettagli dell'iscrizione annuale di " + FEE + "."},
    failed:  {en:"We couldn't send your application automatically. Please tap below to send it by email.", it:"Non siamo riusciti a inviare la candidatura automaticamente. Tocca qui sotto per inviarla via email."},
    mail:    {en:"Send by email", it:"Invia via email"},
    home:    {en:"Back to home", it:"Torna alla home"}
  };
  const t = k => T(L[k]);
  let VIEW = 'info', DATA = {}, FAILED = false;
  const body = () => document.getElementById('clubBody');

  function render(){
    if (!body()) return;
    ({info, form, done})[VIEW]();
  }

  function info(){
    body().innerHTML = `
      <div class="cl-hero">
        <span class="cl-eye">${esc(t('eyebrow'))}</span>
        <img class="cl-logo" src="${D}logo.png" alt="jamesalbert Travel Club">
        <h1>${t('h1')}</h1>
        <p class="cl-lede">${esc(t('lede'))}</p>
      </div>
      <img class="cl-banner" src="${D}banner.jpg" alt="">
      <div class="cl-sec">
        <span class="cl-k">${esc(t('aboutK'))}</span><h2>${esc(t('aboutH'))}</h2>
        ${T(L.about).map(p => `<p>${esc(p)}</p>`).join('')}
      </div>
      <div class="cl-sec">
        <span class="cl-k">${esc(t('calK'))}</span><h2>${esc(t('calH'))}</h2>
        ${L.cards.map((c, i) => `<div class="cl-card"><img src="${D}${c.img}" alt="" style="object-position:${c.pos || 'center'}"><div><span class="cl-num">0${i + 1}</span><h3>${esc(T(c.t))}</h3><p>${esc(T(c.p))}</p></div></div>`).join('')}
      </div>
      <div class="cl-sec cl-guide">
        <img src="${D}founder.jpg" alt="James Maposa">
        <span class="cl-k">${esc(t('guideK'))}</span><h2>${esc(t('guideH'))}</h2><p>${esc(t('guide'))}</p>
      </div>
      <div class="cl-pillars">${L.pillars.map(p => `<div><h3>${esc(T(p[0]))}</h3><p>${esc(T(p[1]))}</p></div>`).join('')}</div>
      <div class="cl-sec">
        <span class="cl-k">${esc(t('galK'))}</span>
        <div class="cl-gal"><img src="${D}gallery-1.jpg" alt=""><img src="${D}gallery-2.jpg" alt=""></div>
      </div>
      <div class="cl-join">
        <span class="cl-k">${esc(t('howK'))}</span><h2>${esc(t('howH'))}</h2><p>${esc(t('howP'))}</p>
        <ol>${T(L.steps).map(s => `<li>${esc(s)}</li>`).join('')}</ol>
        <button class="btn block" id="clApply">${esc(t('apply'))}</button>
      </div>`;
    document.getElementById('clApply').onclick = () => { VIEW = 'form'; render(); top(); };
  }

  const opts = (k, cur) => T(L[k]).map((o, i) => `<option value="${i}" ${String(cur) === String(i) ? 'selected' : ''}>${esc(o)}</option>`).join('');
  function form(){
    const d = DATA, ints = d.ints || [];
    body().innerHTML = `
      <button class="cl-back" id="clBack">${esc(t('back'))}</button>
      <h1>${esc(t('formH'))}</h1><p class="sub">${esc(t('formP'))}</p>
      <div class="cl-form">
        <label>${esc(t('first'))}<input id="cfFirst" autocomplete="given-name" value="${esc(d.first||'')}"></label>
        <label>${esc(t('last'))}<input id="cfLast" autocomplete="family-name" value="${esc(d.last||'')}"></label>
        <label>${esc(t('email'))}<input id="cfEmail" type="email" inputmode="email" autocomplete="email" value="${esc(d.email||'')}"></label>
        <label>${esc(t('phone'))}<input id="cfPhone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(d.phone||'')}"></label>
        <label>${esc(t('town'))}<input id="cfTown" autocomplete="address-level2" value="${esc(d.town||'')}"></label>
        <label>${esc(t('student'))}<select id="cfStudent">${opts('studOpt', d.student ?? 0)}</select></label>
        <label>${esc(t('level'))}<select id="cfLevel">${opts('levOpt', d.level ?? 2)}</select></label>
        <fieldset><legend>${esc(t('interest'))}</legend>
          ${T(L.intOpt).map((o, i) => `<label class="cl-chk"><input type="checkbox" value="${i}" ${ints.includes(i) ? 'checked' : ''}> ${esc(o)}</label>`).join('')}</fieldset>
        <label>${esc(t('why'))}<textarea id="cfWhy" rows="4">${esc(d.why||'')}</textarea></label>
        <label class="cl-chk"><input type="checkbox" id="cfAgree" ${d.agree ? 'checked' : ''}> ${esc(t('agree'))}</label>
      </div>
      <p class="cl-err" id="cfErr" hidden>${esc(t('need'))}</p>
      <button class="btn navy block" id="cfSend">${esc(t('send'))}</button>`;
    document.getElementById('clBack').onclick = () => { keep(); VIEW = 'info'; render(); top(); };
    document.getElementById('cfSend').onclick = submit;
  }

  function keep(){
    const v = id => (document.getElementById(id) || {}).value || '';
    if (!document.getElementById('cfFirst')) return;
    DATA = { first:v('cfFirst').trim(), last:v('cfLast').trim(), email:v('cfEmail').trim(), phone:v('cfPhone').trim(), town:v('cfTown').trim(),
      student:+v('cfStudent'), level:+v('cfLevel'), why:v('cfWhy').trim(), agree:document.getElementById('cfAgree').checked,
      ints:[...body().querySelectorAll('fieldset input:checked')].map(i => +i.value) };
  }

  function report(){
    const d = DATA, en = k => L[k].en;
    return {
      subject: `Travel Club application: ${d.first} ${d.last}`,
      name: `${d.first} ${d.last}`, email: d.email, phone: d.phone, lives_in: d.town || '—',
      connection: en('studOpt')[d.student], english_level: en('levOpt')[d.level],
      interested_in: d.ints.map(i => en('intOpt')[i]).join(', ') || '—',
      why_join: d.why || '—', over_18_and_consents: 'Yes',
      app_language: LANG === 'it' ? 'Italian' : 'English', sent: new Date().toLocaleString('en-GB')
    };
  }

  async function submit(){
    keep();
    const d = DATA, ok = d.first && d.last && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) && d.phone.replace(/\D/g, '').length >= 6 && d.agree;
    if (!ok) { document.getElementById('cfErr').hidden = false; return; }
    const b = document.getElementById('cfSend'); b.disabled = true; b.textContent = t('sending');
    const key = (window.LEVEL_TEST || {}).accessKey;
    FAILED = true;
    if (key) try {
      const res = await fetch('https://api.web3forms.com/submit', {method:'POST', headers:{'Content-Type':'application/json', Accept:'application/json'},
        body: JSON.stringify(Object.assign({access_key:key, from_name:'jamesalbert app – Travel Club', replyto:d.email}, report()))});
      FAILED = !(await res.json()).success;
    } catch(e) {}
    VIEW = 'done'; render(); top();
  }

  function done(){
    const r = report();
    const mail = 'mailto:info@jamesalbert.it?subject=' + encodeURIComponent(r.subject) + '&body=' + encodeURIComponent(
      Object.entries(r).filter(([k]) => k !== 'subject').map(([k, v]) => k.replace(/_/g, ' ') + ': ' + v).join('\n'));
    body().innerHTML = `
      <div class="cl-done"><img class="cl-logo" src="${D}logo.png" alt="">
        <h1>${esc(t('doneH'))}</h1>
        ${FAILED ? `<p>${esc(t('failed'))}</p><a class="btn navy block" href="${mail}">✉ ${esc(t('mail'))}</a>` : `<p>${esc(t('doneP'))}</p>`}
        <button class="btn ghost block" style="margin-top:12px" onclick="go('home')">${esc(t('home'))}</button></div>`;
  }

  const top = () => { const m = document.getElementById('main'); if (m) m.scrollTop = 0; };
  window.openClub = () => { if (VIEW === 'done') VIEW = 'info'; go('club'); };

  const css = document.createElement('style');
  css.textContent = `
    #club h1{font-family:'Playfair Display',serif;color:var(--navy)}
    #club h1 em{color:var(--gold-d);font-weight:600}
    #club h2{font-family:'Playfair Display',serif;color:var(--navy);font-size:23px;line-height:1.2;margin:4px 0 12px}
    #club h3{font-family:'Playfair Display',serif;color:var(--navy);font-size:18px;margin-bottom:6px}
    #club p{font-size:14px;line-height:1.7;color:#4a5060;margin-bottom:12px}
    #club .cl-k,#club .cl-eye{display:block;font:600 10.5px Poppins,sans-serif;letter-spacing:2.2px;text-transform:uppercase;color:var(--gold-d)}
    #club .cl-hero{text-align:center;padding:6px 4px 18px}
    #club .cl-logo{display:block;width:170px;max-width:60%;margin:12px auto 14px}
    #club .cl-hero h1{font-size:29px;line-height:1.25;margin-bottom:12px}
    #club .cl-lede{font-size:15px}
    #club .cl-banner{display:block;width:calc(100% + 36px);margin:0 -18px 6px;height:230px;object-fit:cover;object-position:center 30%}
    #club .cl-sec{padding:24px 0 6px;border-top:1px solid #ddd5c3;margin-top:14px}
    #club .cl-card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:var(--shadow);margin-bottom:16px}
    #club .cl-card img{display:block;width:100%;height:220px;object-fit:cover}
    #club .cl-card>div{padding:14px 16px 4px}
    #club .cl-num{font:600 12px Poppins,sans-serif;color:var(--gold-d);letter-spacing:1px}
    #club .cl-guide img{display:block;width:100%;border-radius:16px;margin-bottom:16px}
    #club .cl-pillars{background:var(--navy);border-radius:18px;padding:8px 20px;margin:18px 0}
    #club .cl-pillars div{padding:16px 0;border-bottom:1px solid rgba(255,255,255,.15)}
    #club .cl-pillars div:last-child{border:0}
    #club .cl-pillars h3{color:#fff}
    #club .cl-pillars p{color:#cfd4e2;margin:0}
    #club .cl-gal{display:grid;grid-template-columns:1.4fr 1fr;gap:10px;margin-top:12px}
    #club .cl-gal img{width:100%;height:260px;object-fit:cover;border-radius:14px}
    #club .cl-join{background:#fff;border:1.5px solid var(--gold);border-radius:18px;padding:22px 20px;margin:20px 0 10px}
    #club .cl-join ol{padding-left:20px;margin:4px 0 18px;font-size:14px;line-height:1.6;color:var(--ink)}
    #club .cl-join li{margin-bottom:6px}
    #club .btn.block{display:flex;width:100%}
    #club .btn.ghost{background:#fff;color:var(--navy);border:1.5px solid var(--navy)}
    #club .cl-back{border:0;background:none;color:var(--navy);font:600 13px Poppins,sans-serif;padding:4px 0 12px;cursor:pointer}
    #club .cl-form{background:#fff;border-radius:16px;padding:16px;box-shadow:var(--shadow);margin-bottom:14px}
    #club .cl-form label{display:block;font-size:13px;font-weight:600;color:var(--navy);margin-bottom:12px}
    #club .cl-form input:not([type=checkbox]),#club .cl-form select,#club .cl-form textarea{display:block;width:100%;margin-top:5px;padding:12px;border:1px solid #cfd5e2;border-radius:10px;font:16px Poppins,sans-serif;background:#fff;color:var(--ink)}
    #club .cl-form fieldset{border:0;margin:0 0 12px}
    #club .cl-form legend{font-size:13px;font-weight:600;color:var(--navy);margin-bottom:6px}
    #club .cl-chk{display:flex!important;gap:10px;align-items:flex-start;font-weight:500!important;color:var(--ink)!important;margin-bottom:8px!important;line-height:1.4}
    #club .cl-chk input{width:20px;height:20px;flex:none;margin-top:1px;accent-color:var(--navy)}
    #club .cl-err{color:#a3121f;font-size:13px}
    #club .cl-done{text-align:center;padding:20px 4px}
    #club .cl-done h1{font-size:30px;margin-bottom:12px}`;
  document.head.appendChild(css);

  window.renderClub = render;
})();
