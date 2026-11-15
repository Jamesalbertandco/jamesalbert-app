// RSVP for Upcoming events (home page).
// Tapping RSVP on an event card opens a small form (name & surname, phone, email, number of people).
// Each reply is emailed to info@jamesalbert.it via Web3Forms (same access key as the level test),
// with the event name and date in the subject. If sending fails, the person can send it by email instead.
(function(){
  const L = {
    title:   {en:"RSVP", it:"Conferma la presenza"},
    intro:   {en:"Let us know you're coming. Fill in a phone number or an email address (or both).", it:"Facci sapere che ci sarai. Inserisci un numero di telefono o un indirizzo email (o entrambi)."},
    name:    {en:"Name and surname", it:"Nome e cognome"},
    phone:   {en:"Phone number", it:"Numero di telefono"},
    email:   {en:"Email address", it:"Indirizzo email"},
    people:  {en:"How many people are coming?", it:"Quante persone parteciperanno?"},
    send:    {en:"Send RSVP", it:"Invia"},
    cancel:  {en:"Cancel", it:"Annulla"},
    sending: {en:"Sending…", it:"Invio in corso…"},
    errName: {en:"Please write your name and surname.", it:"Scrivi il tuo nome e cognome."},
    errCont: {en:"Please add a phone number or an email address.", it:"Aggiungi un numero di telefono o un indirizzo email."},
    errMail: {en:"Please check the email address.", it:"Controlla l'indirizzo email."},
    doneH:   {en:"Thank you!", it:"Grazie!"},
    doneP:   {en:"We've received your RSVP for", it:"Abbiamo ricevuto la tua conferma per"},
    failed:  {en:"Sorry, it didn't send. Tap below to send it by email instead.", it:"Spiacenti, l'invio non è riuscito. Tocca qui sotto per inviarla via email."},
    mail:    {en:"Send by email", it:"Invia via email"},
    close:   {en:"Close", it:"Chiudi"}
  };
  const t = k => T(L[k]);
  let EV = null;

  function box(){
    let b = document.getElementById('rsvpBox');
    if (!b) {
      b = document.createElement('div');
      b.id = 'rsvpBox'; b.className = 'codebox rsvpbox hide';
      b.addEventListener('click', e => { if (e.target === b) closeR(); });
      const anchor = document.getElementById('codeBox');
      (anchor ? anchor.parentNode : document.body).appendChild(b);
    }
    return b;
  }
  function closeR(){ box().classList.add('hide'); }

  function form(){
    const e = EV, opts = [1,2,3,4,5,6,7,8].map(n => `<option value="${n}">${n}${n === 8 ? '+' : ''}</option>`).join('');
    box().innerHTML = `<div class="sh" role="dialog" aria-modal="true" aria-labelledby="rsvpH">
      <h3 id="rsvpH">${esc(t('title'))}: ${esc(T(e.title))}</h3>
      <p>${esc(T(e.when))}</p>
      <p class="rs-intro">${esc(t('intro'))}</p>
      <label class="rs-f"><span>${esc(t('name'))}</span><input id="rsName" autocomplete="name" autocapitalize="words"></label>
      <label class="rs-f"><span>${esc(t('phone'))}</span><input id="rsPhone" type="tel" inputmode="tel" autocomplete="tel"></label>
      <label class="rs-f"><span>${esc(t('email'))}</span><input id="rsEmail" type="email" inputmode="email" autocomplete="email" autocapitalize="off"></label>
      <label class="rs-f"><span>${esc(t('people'))}</span><select id="rsPeople">${opts}</select></label>
      <div class="err" id="rsErr"></div>
      <div class="row2"><button class="btn ghost" type="button" onclick="rsvpClose()">${esc(t('cancel'))}</button><button class="btn navy" type="button" id="rsSend" onclick="rsvpSend()">${esc(t('send'))}</button></div>
    </div>`;
    box().classList.remove('hide');
  }

  function data(){
    const v = id => document.getElementById(id).value.trim();
    return { name: v('rsName'), phone: v('rsPhone'), email: v('rsEmail'), people: v('rsPeople') };
  }
  function report(d){
    const e = EV, ev = e.title.en || T(e.title);
    return {
      subject: `RSVP: ${ev} – ${d.name} (${d.people} ${d.people === '1' ? 'person' : 'people'})`,
      event: ev, event_date: (e.when && e.when.en) || T(e.when),
      name: d.name, phone: d.phone || '—', email: d.email || '—', number_of_people: d.people,
      app_language: LANG === 'it' ? 'Italian' : 'English', sent: new Date().toLocaleString('en-GB')
    };
  }

  async function send(){
    const d = data(), err = document.getElementById('rsErr');
    if (d.name.length < 3) { err.textContent = t('errName'); return; }
    if (!d.phone && !d.email) { err.textContent = t('errCont'); return; }
    if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) { err.textContent = t('errMail'); return; }
    err.textContent = '';
    const b = document.getElementById('rsSend'); b.disabled = true; b.textContent = t('sending');
    const r = report(d), key = (window.LEVEL_TEST || {}).accessKey;
    let ok = false;
    if (key) try {
      const payload = Object.assign({access_key:key, from_name:'jamesalbert app – Event RSVP'}, d.email ? {replyto:d.email} : {}, r);
      const res = await fetch('https://api.web3forms.com/submit', {method:'POST', headers:{'Content-Type':'application/json', Accept:'application/json'}, body: JSON.stringify(payload)});
      ok = !!(await res.json()).success;
    } catch(x) {}
    done(ok, r);
  }

  function done(ok, r){
    const mail = 'mailto:info@jamesalbert.it?subject=' + encodeURIComponent(r.subject) + '&body=' + encodeURIComponent(
      Object.entries(r).filter(([k]) => k !== 'subject').map(([k, v]) => k.replace(/_/g, ' ') + ': ' + v).join('\n'));
    box().innerHTML = `<div class="sh rs-done" role="dialog" aria-modal="true">
      <h3>${esc(ok ? t('doneH') : t('title'))}</h3>
      ${ok ? `<p>${esc(t('doneP'))} <b>${esc(T(EV.title))}</b>.</p>` : `<p>${esc(t('failed'))}</p><a class="btn navy block" href="${mail}">${esc(t('mail'))}</a>`}
      <button class="btn ghost block" type="button" style="margin-top:12px" onclick="rsvpClose()">${esc(t('close'))}</button>
    </div>`;
  }

  window.rsvpOpen = i => { EV = CONFIG.events[i]; if (EV) form(); };
  window.rsvpClose = closeR;
  window.rsvpSend = send;

  const css = document.createElement('style');
  css.textContent = `
    .rsvpbox .sh{max-height:92%;overflow-y:auto}
    .rsvpbox .rs-intro{margin-top:-6px}
    .rsvpbox .rs-f{display:block;margin-bottom:12px}
    .rsvpbox .rs-f span{display:block;font-size:13px;font-weight:500;color:var(--navy);margin-bottom:5px}
    .rsvpbox .rs-f input,.rsvpbox .rs-f select{width:100%;box-sizing:border-box;font:400 16px Poppins,sans-serif;letter-spacing:0;text-align:left;padding:11px 13px;border:1.5px solid #cfd5e0;border-radius:12px;outline:none;background:#fff;color:var(--ink)}
    .rsvpbox .rs-f input:focus,.rsvpbox .rs-f select:focus{border-color:var(--navy)}
    .rsvpbox .err{text-align:left}
    .rsvpbox .btn.block{display:block;width:100%;text-align:center;box-sizing:border-box}
  `;
  document.head.appendChild(css);
})();
