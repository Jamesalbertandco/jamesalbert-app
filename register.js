// "Become a member" – student registration form inside the app (screen "register").
// Same fields as the website form (jamesalbert.it/registration-form). Each registration is
// emailed to info@jamesalbert.it through Web3Forms (same access key as the level test).
// If sending fails, the person can send it by email instead.
(() => {
  const B = (en, it) => ({en, it});
  const L = {
    eyebrow: B("Become a member", "Diventa socio"),
    h1:      B("Student Registration", "Iscrizione Studente"),
    sub:     B("Fill in the form and our team will reply with your class password.", "Compila il modulo e il nostro team ti risponderà con la password della tua classe."),
    sStud:   B("Student details", "Dati studente"),
    name:    B("Full name", "Nome e cognome"),
    cf:      B("Codice Fiscale", "Codice Fiscale"),
    dob:     B("Date of birth", "Data di nascita"),
    pob:     B("Place of birth", "Luogo di nascita"),
    addr:    B("Address", "Indirizzo"),
    city:    B("City", "Città"),
    cap:     B("Postcode (CAP)", "CAP"),
    prov:    B("Province", "Provincia"),
    email:   B("Email", "Email"),
    phone:   B("Phone", "Telefono"),
    emerg:   B("Emergency contact (name & phone)", "Contatto d'emergenza (nome e telefono)"),
    sCourse: B("Course details", "Dati del corso"),
    course:  B("Course", "Corso"),
    pick:    B("Choose…", "Scegli…"),
    level:   B("Level (if known)", "Livello (se noto)"),
    start:   B("Start date", "Data di inizio"),
    sPar:    B("Parent/guardian (if the student is under 18)", "Genitore/tutore (se lo studente è minorenne)"),
    pName:   B("Full name", "Nome e cognome"),
    sPriv:   B("Privacy & consent", "Privacy e consensi"),
    priv:    B("I have read and accept the Privacy Policy (GDPR, Art. 13).", "Ho letto e accetto l'Informativa sulla Privacy (GDPR, Art. 13)."),
    privL:   B("Read the Privacy Policy", "Leggi l'Informativa"),
    mkt:     B("I'd like to receive updates about courses and events (optional).", "Desidero ricevere aggiornamenti su corsi ed eventi (opzionale)."),
    photo:   B("I consent to the use of photos/videos for school communication (optional).", "Acconsento all'uso di foto/video per le comunicazioni della scuola (opzionale)."),
    sSign:   B("Signature", "Firma"),
    signed:  B("Full name of student or parent/guardian", "Nome dello studente o del genitore/tutore"),
    place:   B("Place", "Luogo"),
    confirm: B("I confirm the information above is correct. Ticking this box counts as my signature.", "Confermo la correttezza dei dati forniti. Questa spunta vale come mia firma."),
    opt:     B("optional", "opzionale"),
    send:    B("Send registration", "Invia iscrizione"),
    sending: B("Sending…", "Invio in corso…"),
    need:    B("Please fill in the fields marked * and tick the two required boxes.", "Compila i campi con * e spunta le due caselle obbligatorie."),
    badMail: B("Please check the email address.", "Controlla l'indirizzo email."),
    doneH:   B("Thank you!", "Grazie!"),
    doneP:   B("Your registration has been sent. We'll be in touch soon with your class password.", "L'iscrizione è stata inviata. Ti contatteremo a breve con la password della tua classe."),
    failH:   B("Not sent yet", "Non ancora inviata"),
    failed:  B("Sorry, it didn't send. Tap below to send it by email instead.", "Spiacenti, l'invio non è riuscito. Tocca qui sotto per inviarla via email."),
    mail:    B("Send by email", "Invia via email"),
    home:    B("Back to home", "Torna alla home"),
    courses: B(["Trial lesson (free)", "Class 1 (ages 3–5)", "Class 2 (ages 6–8)", "Class 3 (ages 9–11)", "Class 4 (ages 11–13)", "Teen English group", "Adult conversation group", "Private English", "Online private English", "French / German / Spanish", "Other / not sure"],
               ["Lezione di prova (gratuita)", "Class 1 (3–5 anni)", "Class 2 (6–8 anni)", "Class 3 (9–11 anni)", "Class 4 (11–13 anni)", "Gruppo Teen English", "Gruppo conversazione adulti", "Lezioni private di inglese", "Lezioni private online", "Francese / Tedesco / Spagnolo", "Altro / non so"])
  };
  const t = k => T(L[k]);
  let VIEW = 'form', DATA = {}, FAILED = false;
  const body = () => document.getElementById('regBody');
  const v = id => ((document.getElementById(id) || {}).value || '').trim();
  const c = id => !!(document.getElementById(id) || {}).checked;

  function render(){
    if (!body()) return;
    if (VIEW === 'done') return done();
    form();
  }

  const fld = (id, k, type, req, extra) => `<label>${esc(t(k))}${req ? ' <span class="rg-req">*</span>' : ''}<input id="${id}" type="${type || 'text'}" ${extra || ''} value="${esc(DATA[id] || '')}"></label>`;
  const chk = (id, k, req, more) => `<label class="rg-chk"><input type="checkbox" id="${id}" ${DATA[id] ? 'checked' : ''}><span>${esc(t(k))}${req ? ' <span class="rg-req">*</span>' : ''}${more || ''}</span></label>`;

  function form(){
    const cs = T(L.courses);
    body().innerHTML = `
      <span class="rg-eye">${esc(t('eyebrow'))}</span>
      <h1>${esc(t('h1'))}</h1><p class="sub">${esc(t('sub'))}</p>
      <div class="rg-form">
        <h3>${esc(t('sStud'))}</h3>
        ${fld('rgName', 'name', 'text', 1, 'autocomplete="name" autocapitalize="words"')}
        ${fld('rgCF', 'cf', 'text', 1, 'maxlength="16" autocapitalize="characters" style="text-transform:uppercase"')}
        ${fld('rgDob', 'dob', 'date', 1)}
        ${fld('rgPob', 'pob')}
        ${fld('rgAddr', 'addr', 'text', 1, 'autocomplete="street-address"')}
        ${fld('rgCity', 'city', 'text', 1, 'autocomplete="address-level2"')}
        <div class="rg-two">${fld('rgCap', 'cap', 'text', 0, 'maxlength="5" inputmode="numeric" autocomplete="postal-code"')}${fld('rgProv', 'prov', 'text', 0, 'maxlength="2" autocapitalize="characters" style="text-transform:uppercase"')}</div>
        ${fld('rgEmail', 'email', 'email', 1, 'inputmode="email" autocomplete="email" autocapitalize="off"')}
        ${fld('rgPhone', 'phone', 'tel', 1, 'inputmode="tel" autocomplete="tel"')}
        ${fld('rgEmerg', 'emerg')}

        <h3>${esc(t('sCourse'))}</h3>
        <label>${esc(t('course'))} <span class="rg-req">*</span><select id="rgCourse"><option value="">${esc(t('pick'))}</option>${cs.map((o, i) => `<option value="${i}" ${String(DATA.rgCourse) === String(i) ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select></label>
        ${fld('rgLevel', 'level')}
        ${fld('rgStart', 'start', 'date')}

        <h3>${esc(t('sPar'))}</h3>
        ${fld('rgPName', 'pName', 'text', 0, 'autocapitalize="words"')}
        ${fld('rgPEmail', 'email', 'email', 0, 'inputmode="email" autocapitalize="off"')}
        ${fld('rgPPhone', 'phone', 'tel', 0, 'inputmode="tel"')}

        <h3>${esc(t('sPriv'))}</h3>
        ${chk('rgPriv', 'priv', 1, ` <a href="privacy.html" target="_blank" rel="noopener">${esc(t('privL'))}</a>`)}
        ${chk('rgMkt', 'mkt')}
        ${chk('rgPhoto', 'photo')}

        <h3>${esc(t('sSign'))}</h3>
        ${fld('rgSigned', 'signed', 'text', 1, 'autocapitalize="words"')}
        ${fld('rgPlace', 'place', 'text', 1)}
        ${chk('rgConfirm', 'confirm', 1)}
      </div>
      <p class="rg-err" id="rgErr" hidden></p>
      <button class="btn navy block" id="rgSend" type="button">${esc(t('send'))}</button>`;
    document.getElementById('rgSend').onclick = submit;
  }

  function keep(){
    if (!document.getElementById('rgName')) return;
    ['rgName','rgCF','rgDob','rgPob','rgAddr','rgCity','rgCap','rgProv','rgEmail','rgPhone','rgEmerg','rgCourse','rgLevel','rgStart','rgPName','rgPEmail','rgPPhone','rgSigned','rgPlace']
      .forEach(id => DATA[id] = v(id));
    ['rgPriv','rgMkt','rgPhoto','rgConfirm'].forEach(id => DATA[id] = c(id));
  }

  function report(){
    const d = DATA, yn = b => b ? 'YES' : 'no', o = x => x || '—';
    return {
      subject: `New member registration: ${d.rgName}`,
      student_name: d.rgName, codice_fiscale: d.rgCF.toUpperCase(), date_of_birth: d.rgDob, place_of_birth: o(d.rgPob),
      address: d.rgAddr, city: d.rgCity, postcode: o(d.rgCap), province: o(d.rgProv.toUpperCase()),
      email: d.rgEmail, phone: d.rgPhone, emergency_contact: o(d.rgEmerg),
      course: L.courses.en[d.rgCourse], level: o(d.rgLevel), start_date: o(d.rgStart),
      parent_guardian_name: o(d.rgPName), parent_guardian_email: o(d.rgPEmail), parent_guardian_phone: o(d.rgPPhone),
      privacy_policy_accepted: yn(d.rgPriv), marketing_consent: yn(d.rgMkt), photo_video_consent: yn(d.rgPhoto),
      signed_by: d.rgSigned, signed_at: d.rgPlace, declaration_confirmed: yn(d.rgConfirm),
      app_language: LANG === 'it' ? 'Italian' : 'English', sent: new Date().toLocaleString('en-GB')
    };
  }

  async function submit(){
    keep();
    const d = DATA, err = document.getElementById('rgErr');
    const req = ['rgName','rgCF','rgDob','rgAddr','rgCity','rgEmail','rgPhone','rgCourse','rgSigned','rgPlace'];
    if (req.some(id => !d[id]) || !d.rgPriv || !d.rgConfirm) { err.textContent = t('need'); err.hidden = false; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.rgEmail)) { err.textContent = t('badMail'); err.hidden = false; return; }
    err.hidden = true;
    const b = document.getElementById('rgSend'); b.disabled = true; b.textContent = t('sending');
    const key = (window.LEVEL_TEST || {}).accessKey;
    FAILED = true;
    if (key) try {
      const res = await fetch('https://api.web3forms.com/submit', {method:'POST', headers:{'Content-Type':'application/json', Accept:'application/json'},
        body: JSON.stringify(Object.assign({access_key:key, from_name:'jamesalbert app – New member', replyto:d.rgEmail}, report()))});
      FAILED = !(await res.json()).success;
    } catch(e) {}
    VIEW = 'done'; render(); top();
  }

  function done(){
    const r = report();
    const mail = 'mailto:info@jamesalbert.it?subject=' + encodeURIComponent(r.subject) + '&body=' + encodeURIComponent(
      Object.entries(r).filter(([k]) => k !== 'subject').map(([k, x]) => k.replace(/_/g, ' ') + ': ' + x).join('\n'));
    body().innerHTML = `
      <div class="rg-done">
        <h1>${esc(t(FAILED ? 'failH' : 'doneH'))}</h1>
        ${FAILED ? `<p>${esc(t('failed'))}</p><a class="btn navy block" href="${mail}">✉ ${esc(t('mail'))}</a>` : `<p>${esc(t('doneP'))}</p>`}
        <button class="btn ghost block" style="margin-top:12px" onclick="go('home')">${esc(t('home'))}</button></div>`;
    if (!FAILED) DATA = {};
  }

  const top = () => { const m = document.getElementById('main'); if (m) m.scrollTop = 0; };
  window.openReg = () => { if (VIEW === 'done') VIEW = 'form'; go('register'); };
  window.renderReg = () => { keep(); render(); };

  const css = document.createElement('style');
  css.textContent = `
    #register h1{font-family:'Playfair Display',serif;color:var(--navy);font-size:28px;line-height:1.2;margin:4px 0 8px}
    #register .sub{font-size:14px;line-height:1.6;color:#4a5060;margin-bottom:16px}
    #register .rg-eye{display:block;font:600 10.5px Poppins,sans-serif;letter-spacing:2.2px;text-transform:uppercase;color:var(--gold-d)}
    #register .rg-form{background:#fff;border-radius:16px;padding:16px;box-shadow:var(--shadow);margin-bottom:14px}
    #register .rg-form h3{font-family:'Playfair Display',serif;color:var(--navy);font-size:18px;margin:14px 0 10px;padding-bottom:6px;border-bottom:1px solid #e3e6ee}
    #register .rg-form h3:first-child{margin-top:0}
    #register .rg-form label{display:block;font-size:13px;font-weight:600;color:var(--navy);margin-bottom:12px}
    #register .rg-form input:not([type=checkbox]),#register .rg-form select{display:block;width:100%;box-sizing:border-box;margin-top:5px;padding:12px;border:1px solid #cfd5e2;border-radius:10px;font:16px Poppins,sans-serif;background:#fff;color:var(--ink);min-height:46px}
    #register .rg-two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    #register .rg-req{color:#a3121f}
    #register .rg-chk{display:flex!important;gap:10px;align-items:flex-start;font-weight:500!important;color:var(--ink)!important;line-height:1.45}
    #register .rg-chk input{width:20px;height:20px;flex:none;margin-top:1px;accent-color:var(--navy)}
    #register .rg-chk a{color:var(--navy);font-weight:600}
    #register .rg-err{color:#a3121f;font-size:13px;margin-bottom:10px}
    #register .btn.block{display:flex;width:100%;box-sizing:border-box}
    #register .btn.ghost{background:#fff;color:var(--navy);border:1.5px solid var(--navy)}
    #register .rg-done{text-align:center;padding:30px 4px}
    #register .rg-done p{font-size:15px;line-height:1.6;color:#4a5060;margin-bottom:18px}`;
  document.head.appendChild(css);
})();
