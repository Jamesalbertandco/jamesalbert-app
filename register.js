// "Become a member" – student registration form inside the app (screen "register").
// Mirrors the website form (jamesalbert.it/registration-form). Students 18+ give their own Codice Fiscale;
// for under-18s the parent/guardian's name, Codice Fiscale, email and phone are required, and the
// signatory must be that parent/guardian.
// Each registration is emailed to info@jamesalbert.it through Web3Forms (same key as the level test).
(() => {
  const B = (en, it) => ({en, it});
  const L = {
    brand:   B("ENGLISH INSTITUTE", "ENGLISH INSTITUTE"),
    h1:      B("Student Registration", "Iscrizione Studente"),
    sub:     B("Fill in the form and our team will reply with your class password.", "Compila il modulo e il nostro team ti risponderà con la password della tua classe."),
    s1:      B("Student Details", "Dati Studente"),
    name:    B("Full name", "Nome e cognome"),
    dob:     B("Date of birth", "Data di nascita"),
    pob:     B("Place of birth", "Luogo di nascita"),
    addr:    B("Address", "Indirizzo"),
    city:    B("City", "Città"),
    cap:     B("Postcode (CAP)", "CAP"),
    prov:    B("Province", "Provincia"),
    email:   B("Email", "Email"),
    phone:   B("Phone", "Telefono"),
    emerg:   B("Emergency contact (name & phone)", "Contatto d'emergenza (nome e telefono)"),
    s2:      B("Course Details", "Dati del Corso"),
    course:  B("Course", "Corso"),
    pick:    B("Select…", "Seleziona…"),
    level:   B("Level", "Livello"),
    start:   B("Start date", "Data di inizio"),
    s3:      B("Parent / Guardian", "Genitore o Tutore"),
    s3it:    B("if the student is under 18", "se lo studente è minorenne"),
    pName:   B("Full name", "Nome e cognome"),
    sCf:     B("Student's Codice Fiscale (students aged 18+)", "Codice Fiscale dello studente (studenti maggiorenni)"),
    sCfHelp: B("Required for students aged 18 or over. For children, leave this blank and enter the parent's below.",
               "Obbligatorio per gli studenti maggiorenni. Per i minorenni, lasciare vuoto e inserire quello del genitore qui sotto."),
    cf:      B("Parent/Guardian's Codice Fiscale", "Codice Fiscale del genitore/tutore"),
    cfHelp:  B("If registering a child, enter the parent's or guardian's Codice Fiscale, NOT the child's.",
               "Se si iscrive un minorenne, inserire il codice fiscale del genitore o tutore, NON quello del bambino/a."),
    minorNote: B("For students under 18, parent or guardian details are required.", "Per gli studenti minorenni, i dati del genitore o tutore sono obbligatori."),
    s4:      B("Privacy & Consent", "Privacy e Consensi"),
    priv:    B("I confirm that I have read the Privacy Policy (GDPR, Art. 13).", "Confermo di aver letto l'Informativa sulla Privacy (GDPR, Art. 13)."),
    privL:   B("Read the Privacy Policy", "Leggi l'Informativa"),
    mkt:     B("I agree to receive news, updates and information about courses and events (optional).", "Acconsento a ricevere notizie e aggiornamenti su corsi ed eventi (facoltativo)."),
    photo:   B("I consent to the use of photos and videos for institute communications (optional).", "Acconsento all'utilizzo di foto e video per le comunicazioni dell'istituto (facoltativo)."),
    s5:      B("Declaration & Signature", "Dichiarazione e Firma"),
    signed:  B("Student or parent/guardian name", "Nome del firmatario"),
    place:   B("Place", "Luogo"),
    confirm: B("I confirm that the information provided is accurate and that I intend this electronic declaration to serve as my signature.",
               "Confermo la correttezza dei dati forniti e la volontà di sottoscrivere la presente dichiarazione in forma elettronica."),
    send:    B("Send registration", "Invia iscrizione"),
    sending: B("Sending…", "Invio in corso…"),
    need:    B("Please fill in the fields marked * and tick the two required boxes.", "Compila i campi con * e spunta le due caselle obbligatorie."),
    badMail: B("Please check the email address.", "Controlla l'indirizzo email."),
    badDob:  B("Please check the date of birth.", "Controlla la data di nascita."),
    badCF:   B("The Codice Fiscale must be 16 letters and numbers.", "Il Codice Fiscale deve avere 16 lettere e numeri."),
    needSCf: B("The student is 18 or over: please add the student's own Codice Fiscale.", "Lo studente è maggiorenne: inserisci il suo Codice Fiscale."),
    needPar: B("The student is under 18: please add the parent/guardian's name, Codice Fiscale, email and phone.", "Lo studente è minorenne: inserisci nome, Codice Fiscale, email e telefono del genitore/tutore."),
    badSign: B("For students under 18, the signatory must be the parent or guardian listed above.", "Per i minorenni, il firmatario deve essere il genitore o tutore indicato sopra."),
    doneH:   B("Thank you!", "Grazie!"),
    doneP:   B("Your registration has been sent. We'll be in touch soon with your class password.", "La tua iscrizione è stata inviata. Ti contatteremo a breve con la password della tua classe."),
    failH:   B("Not sent yet", "Non ancora inviata"),
    failed:  B("Sorry, it didn't send. Tap below to send it by email instead.", "Spiacenti, l'invio non è riuscito. Tocca qui sotto per inviarla via email."),
    mail:    B("Send by email", "Invia via email"),
    home:    B("Back to home", "Torna alla home"),
    foot:    B("Learn naturally, speak naturally.", "Learn naturally, speak naturally."),
    courses: B(["Class 1 (ages 3–5)", "Class 2 (ages 6–8)", "Class 3 (ages 9–11)", "Class 4 (advanced)", "Teen English", "Adult English", "Private English", "German", "Spanish", "Other"],
               ["Class 1 (3–5 anni)", "Class 2 (6–8 anni)", "Class 3 (9–11 anni)", "Class 4 (avanzato)", "Teen English", "Adult English", "Private English", "Tedesco", "Spagnolo", "Altro"])
  };
  const t = k => T(L[k]);
  let VIEW = 'form', DATA = {}, FAILED = false;
  const body = () => document.getElementById('regBody');
  const v = id => ((document.getElementById(id) || {}).value || '').trim();
  const c = id => !!(document.getElementById(id) || {}).checked;
  const today = () => { const n = new Date(); return [n.getFullYear(), String(n.getMonth()+1).padStart(2,'0'), String(n.getDate()).padStart(2,'0')].join('-'); };
  const ageOf = s => { if (!s) return 99; const [y,m,d] = s.split('-').map(Number), n = new Date(); let a = n.getFullYear() - y; if (n.getMonth()+1 < m || (n.getMonth()+1 === m && n.getDate() < d)) a--; return a; };

  function render(){
    if (!body()) return;
    if (VIEW === 'done') return done();
    form();
  }

  const fld = (id, k, type, req, extra) => `<label>${esc(t(k))}${req ? ' <span class="rg-req">*</span>' : ''}<input id="${id}" type="${type || 'text'}" ${extra || ''} value="${esc(DATA[id] || '')}"></label>`;
  const chk = (id, k, req, more) => `<label class="rg-chk"><input type="checkbox" id="${id}" ${DATA[id] ? 'checked' : ''}><span>${esc(t(k))}${req ? ' <span class="rg-req">*</span>' : ''}${more || ''}</span></label>`;
  const sec = (n, k, sub) => `<div class="rg-sec"><span class="rg-num">0${n}</span><h3>${esc(t(k))}${sub ? `<small>${esc(t(sub))}</small>` : ''}</h3></div>`;

  function form(){
    const cs = T(L.courses), minor = ageOf(DATA.rgDob) < 18;
    body().innerHTML = `
      <div class="rg-head"><div class="rg-brand">jamesalbert<sup>®</sup></div><div class="rg-inst">${esc(t('brand'))}</div><div class="rg-gold"></div>
        <h1>${esc(t('h1'))}</h1><p class="sub">${esc(t('sub'))}</p></div>
      <div class="rg-form">
        ${sec(1, 's1')}
        ${fld('rgName', 'name', 'text', 1, 'autocomplete="name" autocapitalize="words"')}
        ${fld('rgDob', 'dob', 'date', 1, `max="${today()}"`)}
        ${fld('rgPob', 'pob')}
        ${fld('rgSCF', 'sCf', 'text', DATA.rgDob && !minor, 'maxlength="16" autocapitalize="characters" autocomplete="off" style="text-transform:uppercase"')}
        <p class="rg-help">${esc(t('sCfHelp'))}</p>
        ${fld('rgAddr', 'addr', 'text', 1, 'autocomplete="street-address"')}
        ${fld('rgCity', 'city', 'text', 1, 'autocomplete="address-level2"')}
        <div class="rg-two">${fld('rgCap', 'cap', 'text', 0, 'maxlength="5" inputmode="numeric" autocomplete="postal-code"')}${fld('rgProv', 'prov', 'text', 0, 'maxlength="2" autocapitalize="characters" style="text-transform:uppercase"')}</div>
        ${fld('rgEmail', 'email', 'email', 1, 'inputmode="email" autocomplete="email" autocapitalize="off"')}
        ${fld('rgPhone', 'phone', 'tel', 1, 'inputmode="tel" autocomplete="tel"')}
        ${fld('rgEmerg', 'emerg')}

        ${sec(2, 's2')}
        <label>${esc(t('course'))} <span class="rg-req">*</span><select id="rgCourse"><option value="">${esc(t('pick'))}</option>${cs.map((o, i) => `<option value="${i}" ${String(DATA.rgCourse) === String(i) ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select></label>
        ${fld('rgLevel', 'level', 'text', 0, 'placeholder="e.g. A1, A2, B1"')}
        ${fld('rgStart', 'start', 'date')}

        ${sec(3, 's3', 's3it')}
        ${fld('rgPName', 'pName', 'text', minor, 'autocapitalize="words"')}
        ${fld('rgCF', 'cf', 'text', minor, 'maxlength="16" autocapitalize="characters" autocomplete="off" style="text-transform:uppercase"')}
        <p class="rg-help">${esc(t('cfHelp'))}</p>
        ${fld('rgPEmail', 'email', 'email', minor, 'inputmode="email" autocapitalize="off"')}
        ${fld('rgPPhone', 'phone', 'tel', minor, 'inputmode="tel"')}
        <p class="rg-note">${esc(t('minorNote'))}</p>

        ${sec(4, 's4')}
        ${chk('rgPriv', 'priv', 1, ` <a href="privacy.html" target="_blank" rel="noopener">${esc(t('privL'))}</a>`)}
        ${chk('rgMkt', 'mkt')}
        ${chk('rgPhoto', 'photo')}

        ${sec(5, 's5')}
        ${fld('rgSigned', 'signed', 'text', 1, 'autocapitalize="words"')}
        ${fld('rgPlace', 'place', 'text', 1)}
        ${chk('rgConfirm', 'confirm', 1)}
      </div>
      <p class="rg-err" id="rgErr" hidden></p>
      <button class="btn navy block" id="rgSend" type="button">${esc(t('send'))}</button>
      <p class="rg-foot">${esc(t('foot'))}</p>`;
    document.getElementById('rgSend').onclick = submit;
    // When the date of birth shows a child, redraw so the parent fields get their * marks.
    document.getElementById('rgDob').addEventListener('change', () => {
      const was = minor, hadDob = !!DATA.rgDob; keep();
      if ((ageOf(DATA.rgDob) < 18) !== was || hadDob !== !!DATA.rgDob) { const m = document.getElementById('main'), s = m && m.scrollTop; form(); if (m) m.scrollTop = s; }
    });
  }

  function keep(){
    if (!document.getElementById('rgName')) return;
    ['rgName','rgDob','rgPob','rgSCF','rgAddr','rgCity','rgCap','rgProv','rgEmail','rgPhone','rgEmerg','rgCourse','rgLevel','rgStart','rgPName','rgCF','rgPEmail','rgPPhone','rgSigned','rgPlace']
      .forEach(id => DATA[id] = v(id));
    ['rgPriv','rgMkt','rgPhoto','rgConfirm'].forEach(id => DATA[id] = c(id));
  }

  function report(){
    const d = DATA, yn = b => b ? 'YES' : 'NO', o = x => x || '—', minor = ageOf(d.rgDob) < 18;
    return {
      subject: `New Student Registration - jamesalbert®: ${d.rgName}${minor ? ' (under 18)' : ''}`,
      student_full_name: d.rgName, date_of_birth: d.rgDob, under_18: yn(minor), place_of_birth: o(d.rgPob),
      address: d.rgAddr, city: d.rgCity, postcode: o(d.rgCap), province: o(d.rgProv.toUpperCase()),
      email: d.rgEmail, phone: d.rgPhone, emergency_contact: o(d.rgEmerg),
      course: L.courses.en[d.rgCourse], level: o(d.rgLevel), start_date: o(d.rgStart),
      student_codice_fiscale: o(d.rgSCF.toUpperCase()),
      parent_guardian_name: o(d.rgPName), parent_guardian_codice_fiscale: o(d.rgCF.toUpperCase()),
      parent_guardian_email: o(d.rgPEmail), parent_guardian_phone: o(d.rgPPhone),
      privacy_policy_acknowledged: yn(d.rgPriv), marketing_consent: yn(d.rgMkt), photo_video_consent: yn(d.rgPhoto),
      signed_by: d.rgSigned, signed_at: d.rgPlace, declaration_confirmed: yn(d.rgConfirm),
      app_language: LANG === 'it' ? 'Italian' : 'English', submitted_on: new Date().toLocaleString('it-IT')
    };
  }

  async function submit(){
    keep();
    const d = DATA, err = document.getElementById('rgErr'), fail = k => { err.textContent = t(k); err.hidden = false; };
    const mailOk = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    const req = ['rgName','rgDob','rgAddr','rgCity','rgEmail','rgPhone','rgCourse','rgSigned','rgPlace'];
    if (req.some(id => !d[id]) || !d.rgPriv || !d.rgConfirm) return fail('need');
    if (d.rgDob > today()) return fail('badDob');
    if (!mailOk(d.rgEmail) || (d.rgPEmail && !mailOk(d.rgPEmail))) return fail('badMail');
    const cfOk = x => /^[A-Za-z0-9]{16}$/.test(x);
    if (ageOf(d.rgDob) >= 18 && !d.rgSCF) return fail('needSCf');
    if ((d.rgSCF && !cfOk(d.rgSCF)) || (d.rgCF && !cfOk(d.rgCF))) return fail('badCF');
    if (ageOf(d.rgDob) < 18) {
      if (!d.rgPName || !d.rgCF || !d.rgPEmail || !d.rgPPhone) return fail('needPar');
      if (d.rgSigned.toLocaleLowerCase() !== d.rgPName.toLocaleLowerCase()) return fail('badSign');
    }
    err.hidden = true;
    const b = document.getElementById('rgSend'); b.disabled = true; b.textContent = t('sending');
    const key = (window.LEVEL_TEST || {}).accessKey;
    FAILED = true;
    if (key) try {
      const res = await fetch('https://api.web3forms.com/submit', {method:'POST', headers:{'Content-Type':'application/json', Accept:'application/json'},
        body: JSON.stringify(Object.assign({access_key:key, from_name:'jamesalbert app – New member', replyto:d.rgPEmail || d.rgEmail}, report()))});
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
    #register .rg-head{text-align:center;margin:6px 0 20px}
    #register .rg-brand{font-family:Georgia,serif;font-size:34px;letter-spacing:-1.4px;color:var(--navy);line-height:1.1}
    #register .rg-brand sup{font:12px Arial,sans-serif;color:var(--gold-d);letter-spacing:0}
    #register .rg-inst{font-size:10px;letter-spacing:3px;color:#777;margin-top:4px}
    #register .rg-gold{width:48px;height:2px;background:var(--gold);margin:16px auto}
    #register h1{font:400 26px Georgia,serif;color:var(--navy);margin:0 0 6px}
    #register .sub{font-size:14px;line-height:1.6;color:#4a5060}
    #register .rg-form{background:#fff;border-radius:16px;padding:16px;box-shadow:var(--shadow);margin-bottom:14px}
    #register .rg-sec{display:flex;align-items:center;gap:10px;margin:22px 0 14px;padding-bottom:10px;border-bottom:1px solid #e3e6ee}
    #register .rg-sec:first-child{margin-top:2px}
    #register .rg-num{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;flex:none;border-radius:50%;background:var(--navy);color:#fff;font-size:11px}
    #register .rg-sec h3{font:400 18px Georgia,serif;color:var(--navy);margin:0}
    #register .rg-sec h3 small{display:block;font:12px Poppins,sans-serif;color:#777;margin-top:2px}
    #register .rg-form label{display:block;font-size:13px;font-weight:600;color:var(--navy);margin-bottom:12px}
    #register .rg-form input:not([type=checkbox]),#register .rg-form select{display:block;width:100%;box-sizing:border-box;margin-top:5px;padding:12px;border:1px solid #cfd5e2;border-radius:10px;font:16px Poppins,sans-serif;background:#fcfbf9;color:var(--ink);min-height:46px}
    #register .rg-form input:focus,#register .rg-form select:focus{outline:none;border-color:var(--gold)}
    #register .rg-two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    #register .rg-req{color:#a3121f}
    #register .rg-help{font-size:12px;color:#777;line-height:1.55;margin:-6px 0 12px}
    #register .rg-note{background:#f8f7f3;border-left:2px solid var(--gold);padding:12px;font-size:12.5px;color:#666;line-height:1.55;margin:4px 0 6px}
    #register .rg-chk{display:flex!important;gap:10px;align-items:flex-start;font-weight:500!important;color:var(--ink)!important;line-height:1.45}
    #register .rg-chk input{width:20px;height:20px;flex:none;margin-top:1px;accent-color:var(--navy)}
    #register .rg-chk a{color:var(--navy);font-weight:600}
    #register .rg-err{color:#a3121f;font-size:13px;margin-bottom:10px}
    #register .rg-foot{text-align:center;font:italic 14px Georgia,serif;color:var(--navy);margin:20px 0 6px}
    #register .btn.block{display:flex;width:100%;box-sizing:border-box}
    #register .btn.ghost{background:#fff;color:var(--navy);border:1.5px solid var(--navy)}
    #register .rg-done{text-align:center;padding:30px 4px}
    #register .rg-done p{font-size:15px;line-height:1.6;color:#4a5060;margin-bottom:18px}`;
  document.head.appendChild(css);
})();
