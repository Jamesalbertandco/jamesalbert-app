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
    // ---------- LEVELS ----------
    // The foyer shows these three. Add a fourth here later and it appears automatically.
    LEVELS: [
      {id:"a", name:"A1–A2", tag:{en:"Beginner", it:"Principiante"}, sub:{en:"Words & pictures, listening, matching", it:"Parole e immagini, ascolto, abbinamenti"}, icon:"🌱"},
      {id:"b", name:"B1–B2", tag:{en:"Intermediate", it:"Intermedio"}, sub:{en:"Tenses, prepositions, phrasal verbs, false friends", it:"Tempi verbali, preposizioni, phrasal verbs, falsi amici"}, icon:"🌿"},
      {id:"c", name:"C1", tag:{en:"Advanced", it:"Avanzato"}, sub:{en:"Idioms, formal English, word building, tricky sounds", it:"Modi di dire, inglese formale, formazione delle parole, pronuncia difficile"}, icon:"🌳"}
    ],
    // Topics for B1–B2 and C1. type: "phrases" (cards: w, m = meaning, it, e, ex) or "quiz" (q, o = options, a = right option number from 0, x = explanation).
    LEVEL_TOPICS: [
      {id:"phrasal", lvl:"b", type:"phrases", name:{en:"Phrasal verbs", it:"Phrasal verbs"}, icon:"🔗", words:[
        {w:"Look after", m:"take care of", it:"prendersi cura di", e:"🧸", ex:"Can you look after my cat this weekend?"},
        {w:"Give up", m:"stop doing something", it:"smettere, rinunciare", e:"🚭", ex:"He gave up smoking last year."},
        {w:"Find out", m:"discover information", it:"scoprire", e:"🔎", ex:"I need to find out what time the train leaves."},
        {w:"Put off", m:"delay, postpone", it:"rimandare", e:"📆", ex:"Don't put off your homework until Sunday!"},
        {w:"Get on with", m:"have a good relationship with", it:"andare d'accordo con", e:"🤝", ex:"I get on well with my sister."},
        {w:"Run out of", m:"have none left", it:"rimanere senza", e:"🥛", ex:"We've run out of milk."},
        {w:"Turn down", m:"refuse an offer", it:"rifiutare", e:"🙅", ex:"She turned down the job offer."},
        {w:"Look forward to", m:"feel happy about something in the future", it:"non vedere l'ora di", e:"🎉", ex:"I'm looking forward to the holidays."},
        {w:"Bring up", m:"raise a child", it:"crescere, allevare", e:"👶", ex:"She was brought up in London."},
        {w:"Set off", m:"start a journey", it:"partire, mettersi in viaggio", e:"🚗", ex:"We set off early to avoid the traffic."},
        {w:"Carry on", m:"continue", it:"continuare", e:"➡️", ex:"Carry on reading, please."},
        {w:"Come across", m:"find by chance", it:"imbattersi in", e:"📜", ex:"I came across an old photo in a drawer."},
        {w:"Pick up", m:"collect someone in a car", it:"andare a prendere", e:"🚙", ex:"I'll pick you up at eight."},
        {w:"Work out", m:"find the answer to a problem", it:"capire, risolvere", e:"🧮", ex:"I can't work out this maths problem."}
      ]},
      {id:"falsefriends", lvl:"b", type:"phrases", name:{en:"False friends", it:"Falsi amici"}, icon:"⚠️", words:[
        {w:"Actually", m:"in fact, really", it:"in realtà – not 'attualmente' (currently)", e:"💡", ex:"Actually, I prefer tea."},
        {w:"Sensible", m:"practical, reasonable", it:"sensato – not 'sensibile' (sensitive)", e:"🧠", ex:"That's a sensible idea."},
        {w:"Library", m:"a place where you borrow books", it:"biblioteca – not 'libreria' (bookshop)", e:"📚", ex:"I study at the library."},
        {w:"Eventually", m:"in the end, finally", it:"alla fine – not 'eventualmente' (possibly)", e:"🏁", ex:"Eventually, we found the hotel."},
        {w:"Pretend", m:"act as if something is true", it:"fingere – not 'pretendere' (to demand)", e:"🎭", ex:"The children pretended to be pirates."},
        {w:"Argument", m:"an angry disagreement", it:"litigio – not 'argomento' (topic)", e:"😤", ex:"They had an argument about money."},
        {w:"Camera", m:"a device for taking photos", it:"macchina fotografica – not 'camera' (room)", e:"📷", ex:"I left my camera at the hotel."},
        {w:"Parents", m:"your mother and father", it:"genitori – not 'parenti' (relatives)", e:"👨‍👩‍👧", ex:"My parents live in Venice."},
        {w:"Fabric", m:"cloth, material", it:"tessuto – not 'fabbrica' (factory)", e:"🧵", ex:"This fabric is very soft."},
        {w:"Educated", m:"well schooled", it:"istruito – not 'educato' (polite)", e:"🎓", ex:"She is a highly educated woman."},
        {w:"Annoyed", m:"a little angry, irritated", it:"infastidito – not 'annoiato' (bored)", e:"😒", ex:"I was annoyed because the bus was late."},
        {w:"Rumour", m:"a story that may not be true", it:"voce, diceria – not 'rumore' (noise)", e:"🗣️", ex:"There's a rumour that the shop is closing."}
      ]},
      {id:"tenses", lvl:"b", type:"quiz", name:{en:"Tenses", it:"Tempi verbali"}, icon:"⏳", words:[
        {q:"I ___ in Venice since 2015.", o:["live","have lived","am living"], a:1, x:"'Since' + a starting point → present perfect."},
        {q:"Yesterday we ___ to the cinema.", o:["went","have gone","go"], a:0, x:"'Yesterday' is finished time → past simple."},
        {q:"Look! It ___.", o:["rains","is raining","rained"], a:1, x:"Happening right now → present continuous."},
        {q:"When I arrived, the film ___ already ___.", o:["has … started","had … started","was … starting"], a:1, x:"One past action before another past action → past perfect."},
        {q:"I ___ TV when the phone rang.", o:["watched","was watching","have watched"], a:1, x:"A longer action interrupted by a shorter one → past continuous."},
        {q:"She usually ___ to work by train.", o:["goes","is going","has gone"], a:0, x:"Habits and routines → present simple."},
        {q:"If it rains tomorrow, we ___ at home.", o:["stay","will stay","would stay"], a:1, x:"First conditional: if + present, will + verb."},
        {q:"If I ___ rich, I would travel the world.", o:["am","were","will be"], a:1, x:"Second conditional (imaginary): if + past, would + verb."},
        {q:"I ___ him for ten years.", o:["know","have known","am knowing"], a:1, x:"'For' + a period → present perfect. 'Know' is never used with -ing."},
        {q:"By next June, I ___ my course.", o:["will finish","will have finished","finish"], a:1, x:"Finished before a time in the future → future perfect."},
        {q:"Have you ever ___ to London?", o:["been","gone","went"], a:0, x:"'Been' = went and came back. 'Gone' = went and is still there."},
        {q:"This time tomorrow I ___ on a beach.", o:["lie","will be lying","have lain"], a:1, x:"In progress at a moment in the future → future continuous."}
      ]},
      {id:"prepositions", lvl:"b", type:"quiz", name:{en:"Prepositions", it:"Preposizioni"}, icon:"📍", words:[
        {q:"I'll see you ___ Monday.", o:["in","on","at"], a:1, x:"Days → on."},
        {q:"My birthday is ___ July.", o:["in","on","at"], a:0, x:"Months, years and seasons → in."},
        {q:"The lesson starts ___ six o'clock.", o:["in","on","at"], a:2, x:"Clock times → at."},
        {q:"She's very good ___ maths.", o:["in","at","on"], a:1, x:"good at something."},
        {q:"It depends ___ the weather.", o:["of","from","on"], a:2, x:"depend on – never 'depend from'."},
        {q:"I'm interested ___ history.", o:["in","for","at"], a:0, x:"interested in."},
        {q:"We arrived ___ London at midnight.", o:["to","in","at"], a:1, x:"arrive in a city or country, arrive at a building. Never 'arrive to'."},
        {q:"He's married ___ an Italian woman.", o:["with","to","at"], a:1, x:"married to – not 'married with'."},
        {q:"I'm afraid ___ spiders.", o:["of","from","by"], a:0, x:"afraid of."},
        {q:"Thank you ___ your help.", o:["for","of","to"], a:0, x:"thank you for."},
        {q:"Let's meet ___ the weekend.", o:["at","on","in"], a:0, x:"British English says 'at the weekend'."},
        {q:"I've been waiting ___ two hours!", o:["since","for","from"], a:1, x:"for + a period of time; since + a starting point."}
      ]},
      {id:"makedo", lvl:"b", type:"quiz", name:{en:"Make or do?", it:"Make o do?"}, icon:"🛠️", words:[
        {q:"___ your homework", o:["make","do"], a:1, x:"do = tasks and work: do homework, do housework."},
        {q:"___ a mistake", o:["make","do"], a:0, x:"make a mistake – never 'do a mistake'."},
        {q:"___ a decision", o:["make","do"], a:0, x:"make a decision."},
        {q:"___ the shopping", o:["make","do"], a:1, x:"do the shopping, do the washing-up."},
        {q:"___ a phone call", o:["make","do"], a:0, x:"make a phone call."},
        {q:"___ friends", o:["make","do"], a:0, x:"make friends."},
        {q:"___ your best", o:["make","do"], a:1, x:"do your best."},
        {q:"___ a noise", o:["make","do"], a:0, x:"make a noise."},
        {q:"___ business with someone", o:["make","do"], a:1, x:"do business."},
        {q:"___ an effort", o:["make","do"], a:0, x:"make an effort."},
        {q:"___ someone a favour", o:["make","do"], a:1, x:"do someone a favour."},
        {q:"___ the washing-up", o:["make","do"], a:1, x:"do the washing-up (wash the dishes)."}
      ]},
      {id:"idioms", lvl:"c", type:"phrases", name:{en:"Idioms", it:"Modi di dire"}, icon:"💬", words:[
        {w:"Break the ice", m:"start a conversation in an awkward situation", it:"rompere il ghiaccio", e:"🧊", ex:"He told a joke to break the ice."},
        {w:"A piece of cake", m:"very easy", it:"un gioco da ragazzi", e:"🍰", ex:"The exam was a piece of cake."},
        {w:"Under the weather", m:"slightly unwell", it:"un po' giù, indisposto", e:"🤒", ex:"I'm feeling a bit under the weather today."},
        {w:"Hit the nail on the head", m:"say exactly the right thing", it:"colpire nel segno", e:"🔨", ex:"You've hit the nail on the head."},
        {w:"Cost an arm and a leg", m:"be very expensive", it:"costare un occhio della testa", e:"💸", ex:"That car cost an arm and a leg."},
        {w:"Let the cat out of the bag", m:"reveal a secret by mistake", it:"lasciarsi sfuggire un segreto", e:"🐈", ex:"Who let the cat out of the bag about the party?"},
        {w:"Once in a blue moon", m:"very rarely", it:"una volta ogni morte di papa", e:"🌙", ex:"We eat out once in a blue moon."},
        {w:"Bite off more than you can chew", m:"try to do too much", it:"fare il passo più lungo della gamba", e:"🍔", ex:"With three jobs, he's bitten off more than he can chew."},
        {w:"The ball is in your court", m:"it's your turn to decide or act", it:"la palla passa a te", e:"🎾", ex:"I've made my offer – the ball is in your court."},
        {w:"Sit on the fence", m:"avoid choosing a side", it:"non prendere posizione", e:"🚧", ex:"Stop sitting on the fence and tell me what you think."},
        {w:"Call it a day", m:"stop working for now", it:"finirla qui per oggi", e:"🌇", ex:"It's six o'clock – let's call it a day."},
        {w:"Beat around the bush", m:"avoid saying something directly", it:"menare il can per l'aia", e:"🌳", ex:"Don't beat around the bush – just tell me."},
        {w:"Get the hang of", m:"learn how to do something", it:"prenderci la mano", e:"🎯", ex:"Driving is hard at first, but you'll get the hang of it."},
        {w:"Spill the beans", m:"tell a secret", it:"vuotare il sacco", e:"🫘", ex:"Come on, spill the beans – who is it?"}
      ]},
      {id:"formal", lvl:"c", type:"quiz", name:{en:"Formal English", it:"Inglese formale"}, icon:"🎩", words:[
        {q:"Which is the most formal way to ask for help?", o:["Give me a hand, will you?","Could you possibly assist me?","Help me out?"], a:1, x:"'Could you possibly…' and 'assist' are polite and formal."},
        {q:"In a formal email: 'Sorry for the delay' becomes…", o:["My bad for the delay.","Sorry I'm late with this!","Please accept my apologies for the delay."], a:2, x:"'Please accept my apologies' is the formal choice."},
        {q:"A formal word for 'get' (e.g. get a visa):", o:["grab","obtain","pick up"], a:1, x:"obtain = get, in formal writing."},
        {q:"A formal word for 'find out':", o:["ascertain","suss out","dig up"], a:0, x:"ascertain = find out (very formal)."},
        {q:"You started a letter with 'Dear Sir or Madam'. How do you end it?", o:["Cheers,","Yours faithfully,","See you soon,"], a:1, x:"'Yours faithfully' after 'Dear Sir or Madam'; 'Yours sincerely' when you used the person's name."},
        {q:"A formal word for 'ask for':", o:["request","fish for","be after"], a:0, x:"request = ask for."},
        {q:"A formal word for 'start':", o:["kick off","commence","get going"], a:1, x:"commence = start (formal)."},
        {q:"The formal way to say 'I want to…':", o:["I wanna…","I'm dying to…","I would like to…"], a:2, x:"'I would like to…' is polite and formal."},
        {q:"A formal word for 'need':", o:["require","gotta have","be after"], a:0, x:"require = need."},
        {q:"A formal word for 'help' (verb):", o:["chip in","assist","pitch in"], a:1, x:"assist = help."},
        {q:"A formal word for 'about' (= roughly):", o:["approximately","like","-ish"], a:0, x:"approximately = about, roughly."},
        {q:"A formal word for 'tell' (e.g. tell the customer):", o:["inform","fill in","let slip"], a:0, x:"inform = tell. ('Fill someone in' is informal.)"}
      ]},
      {id:"wordform", lvl:"c", type:"quiz", name:{en:"Word building", it:"Formazione delle parole"}, icon:"🧱", words:[
        {q:"She has a lot of ___. (CONFIDENT)", o:["confidence","confidently","confident"], a:0, x:"After 'a lot of' we need a noun: confidence."},
        {q:"The ___ of the new bridge took three years. (CONSTRUCT)", o:["construction","constructive","constructor"], a:0, x:"Noun: construction."},
        {q:"He drove ___ and caused an accident. (CARE)", o:["careful","carelessly","careless"], a:1, x:"An adverb describes how he drove: carelessly."},
        {q:"There is a ___ of nurses in many hospitals. (SHORT)", o:["shortness","shortage","shortly"], a:1, x:"shortage = not enough of something."},
        {q:"She gave a very ___ speech. (PERSUADE)", o:["persuasion","persuasive","persuasively"], a:1, x:"Adjective before a noun: persuasive."},
        {q:"The ___ of the city has grown quickly. (POPULATE)", o:["population","popularity","populous"], a:0, x:"population = the number of people living there."},
        {q:"His ___ to the team was enormous. (CONTRIBUTE)", o:["contributor","contribution","contributing"], a:1, x:"Noun: contribution."},
        {q:"I'm afraid I ___ with you. (AGREE)", o:["disagree","disagreement","agreeable"], a:0, x:"A verb with a negative prefix: disagree."},
        {q:"Please arrive ___. (PUNCTUAL)", o:["punctuality","punctually","punctual"], a:1, x:"An adverb describes how to arrive: punctually."},
        {q:"The results were very ___. (DISAPPOINT)", o:["disappointment","disappointed","disappointing"], a:2, x:"-ing describes the thing; -ed describes how people feel."},
        {q:"We need to ___ our website. (MODERN)", o:["modernise","modernity","modernly"], a:0, x:"Verb: modernise (British spelling -ise)."},
        {q:"The story was completely ___. (BELIEVE)", o:["unbelievable","disbelief","believer"], a:0, x:"Adjective with a negative prefix: unbelievable."}
      ]},
      {id:"sounds", lvl:"c", type:"words", name:{en:"Tricky sounds", it:"Pronuncia difficile"}, icon:"👂", words:[
        {w:"Colonel", it:"say: KER-nul", e:"🎖️"},
        {w:"Thorough", it:"say: THUH-ruh", e:"🔍"},
        {w:"Wednesday", it:"say: WENZ-day", e:"📅"},
        {w:"Island", it:"say: EYE-lund", e:"🏝️"},
        {w:"Recipe", it:"say: RESS-i-pee", e:"📖"},
        {w:"Comfortable", it:"say: KUMF-tuh-bul", e:"🛋️"},
        {w:"Clothes", it:"say: klohz", e:"👕"},
        {w:"Debt", it:"say: det", e:"💳"},
        {w:"Receipt", it:"say: ri-SEET", e:"🧾"},
        {w:"Leicester", it:"say: LESS-ter", e:"🏙️"},
        {w:"Choir", it:"say: KWY-er", e:"🎶"},
        {w:"Worcestershire", it:"say: WUSS-ter-sher", e:"🍶"}
      ]}
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
    g_sy:{en:"Say it!", it:"Dillo tu!"}, g_syS:{en:"Listen, record yourself, compare", it:"Ascolta, registrati, confronta"},
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
    rec:{en:"Record me", it:"Registrami"}, stop:{en:"Stop", it:"Stop"},
    recording:{en:"Recording… say the word now", it:"Sto registrando… di' la parola ora"},
    myVoice:{en:"My voice", it:"La mia voce"}, compare:{en:"Compare", it:"Confronta"},
    compareHint:{en:"Listen: first the model, then you. Sound the same? Try again until you do!", it:"Ascolta: prima il modello, poi tu. Suona uguale? Riprova finché non ci riesci!"},
    check:{en:"Check my word ✓", it:"Controlla la parola ✓"},
    micBlocked:{en:"The microphone is switched off for this app. You can allow it in your phone's settings.", it:"Il microfono è disattivato per questa app. Puoi attivarlo nelle impostazioni del telefono."},
    levels:{en:"Choose your level", it:"Scegli il tuo livello"},
    allLevels:{en:"Levels", it:"Livelli"},
    lastUsed:{en:"Last time", it:"L'ultima volta"},
    g_fcP:{en:"Phrase, meaning and example", it:"Frase, significato ed esempio"},
    g_qzP:{en:"5 questions – match the meaning", it:"5 domande: trova il significato"},
    g_mtP:{en:"A memory game – phrases and meanings", it:"Gioco di memoria: frasi e significati"},
    g_syP:{en:"Listen, record yourself, compare", it:"Ascolta, registrati, confronta"},
    g_gq:{en:"Choose the answer", it:"Scegli la risposta"}, g_gqS:{en:"8 questions with explanations", it:"8 domande con spiegazioni"},
    meaning:{en:"Which one means…", it:"Quale significa…"},
    why:{en:"Why?", it:"Perché?"},
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
  // Play the model, then call done() when it has finished.
  function sayThen(x, done){
    let fired = false; const fin = () => { if (!fired) { fired = true; done(); } };
    const viaVoice = () => { try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(x.w); u.lang = 'en-GB'; if (VOICE) u.voice = VOICE; u.rate = .9; u.onend = fin; u.onerror = fin; speechSynthesis.speak(u); setTimeout(fin, 4000); } catch(e){ fin(); } };
    try { AU.pause(); } catch(e){}
    if (x.a) { try { AU.src = x.a; AU.currentTime = 0; AU.onended = () => { AU.onended = null; fin(); }; const p = AU.play(); if (p && p.catch) p.catch(viaVoice); } catch(e){ viaVoice(); } }
    else viaVoice();
  }

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
  // Level foyer → level page (topics + games) → game.
  PRACTICE.TOPICS.forEach(x => { x.lvl = x.lvl || 'a'; x.type = x.type || 'words'; });
  const ALL = () => PRACTICE.TOPICS.concat(PRACTICE.LEVEL_TOPICS || []);
  const lvTopics = (lv) => ALL().filter(x => x.lvl === lv);
  const GAMES = { words:[['fc','🃏'],['qz','❓'],['li','👂'],['mt','🧩'],['sy','🎤']],
                  phrases:[['fc','🃏'],['qz','❓'],['mt','🧩'],['sy','🎤']],
                  quiz:[['gq','✏️']] };
  let LEVEL = null, TOPIC = null, G = null;
  const lastLevel = () => { try { return localStorage.getItem('ja-practice-level'); } catch(e){ return null; } };
  const topic = () => {
    if (TOPIC && TOPIC.lvl === LEVEL) return TOPIC;
    if (LEVEL === 'a' || !LEVEL) return weekTopic();
    return lvTopics(LEVEL)[0];
  };

  function menu(){
    G = null;
    if (!LEVEL) return foyer();
    const lv = PRACTICE.LEVELS.find(x => x.id === LEVEL), tp = topic();
    body().innerHTML = `
      <div class="pr-top"><button class="pr-back" id="prLv">‹ ${esc(t('allLevels'))}</button><b>${lv.icon} ${esc(lv.name)} · ${esc(T(lv.tag))}</b></div>
      <h2 style="margin-top:6px">${esc(t('pick'))}</h2>
      <div class="pr-topics">${lvTopics(LEVEL).map(x => `<button data-t="${x.id}" class="${x.id === tp.id ? 'on' : ''}">${x.icon} ${esc(T(x.name))}</button>`).join('')}</div>
      <h2>${esc(t('games'))}</h2>
      <div class="list">${GAMES[tp.type].map(([k, ic]) => `<a class="row" href="#" data-g="${k}"><div class="ic">${ic}</div><div class="t"><b>${esc(t('g_' + k))}</b><span>${esc(t('g_' + k + (tp.type === 'phrases' ? 'P' : 'S')))}</span></div><span class="chev">›</span></a>`).join('')}</div>
      <p class="pr-mem">${esc(t('member'))} <a href="#" onclick="openReg();return false">${esc(T(TEXT.memTitle))} ›</a></p>`;
    document.getElementById('prLv').onclick = () => { LEVEL = null; menu(); document.getElementById('main').scrollTop = 0; };
    body().querySelectorAll('.pr-topics button').forEach(b => b.onclick = () => { TOPIC = ALL().find(x => x.id === b.dataset.t); menu(); });
    body().querySelectorAll('[data-g]').forEach(a => a.onclick = e => { e.preventDefault(); start(a.dataset.g); });
  }

  function foyer(){
    const wt = weekTopic(), ws = weekState(), n = Math.min(ws.words.length, 5), last = lastLevel();
    body().innerHTML = `
      <h1>${esc(t('title'))}</h1><p class="sub">${esc(t('sub'))}</p>
      ${wotdCard()}
      <h2>${esc(t('levels'))}</h2>
      <div class="pr-levels">${PRACTICE.LEVELS.map(l => `<button class="pr-lv" data-l="${l.id}">
          <span class="pr-lvi">${l.icon}</span>
          <span class="pr-lvt"><b>${esc(l.name)}</b><em>${esc(T(l.tag))}</em><small>${esc(T(l.sub))}</small></span>
          ${l.id === last ? `<span class="pr-lvl">${esc(t('lastUsed'))}</span>` : '<span class="chev">›</span>'}
        </button>`).join('')}
        ${window.openTower ? `<button class="pr-lv pr-tower" id="prTower">
          <span class="pr-lvi">🔔</span>
          <span class="pr-lvt"><b>${esc(T({en:'The Tower', it:'La Torre'}))}</b><em>Big Ben</em><small>${esc(T({en:'Climb 10 floors – all levels – and ring Big Ben!', it:'Sali 10 piani – tutti i livelli – e suona il Big Ben!'}))}</small></span>
          <span class="chev">›</span></button>` : ''}</div>
      <div class="pr-ch">
        <div class="pr-k">🏆 ${esc(t('challenge'))} · A1–A2</div>
        <p>${esc(n >= 5 ? t('chDone') : t('chText').replace('{t}', T(wt.name)))}</p>
        <div class="pr-bar"><i style="width:${n * 20}%"></i></div><small>${n} / 5</small>
        ${n < 5 ? `<button class="btn" id="prCh">${esc(t('start'))} – ${wt.icon} ${esc(T(wt.name))}</button>` : ''}
      </div>
      <p class="pr-mem">${esc(t('member'))} <a href="#" onclick="openReg();return false">${esc(T(TEXT.memTitle))} ›</a></p>`;
    body().querySelectorAll('.pr-lv').forEach(b => b.onclick = () => {
      LEVEL = b.dataset.l; TOPIC = null;
      try { localStorage.setItem('ja-practice-level', LEVEL); } catch(e){}
      menu(); document.getElementById('main').scrollTop = 0;
    });
    const tw = document.getElementById('prTower'); if (tw) tw.onclick = () => window.openTower();
    const ch = document.getElementById('prCh'); if (ch) ch.onclick = () => { LEVEL = 'a'; TOPIC = wt; start('qz'); };
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
    if (k === 'gq') G.list = shuffle(W).slice(0, 8);
    if (k === 'fc' || k === 'sy') G.list = W;
    if (k === 'mt') { const six = shuffle(W).slice(0, 6); G.cards = shuffle([...six.map((x, n) => ({n, x, pic:1})), ...six.map((x, n) => ({n, x, pic:0}))]); G.open = []; G.done = []; G.moves = 0; }
    ({fc, qz, li, mt, sy, gq})[k]();
    document.getElementById('main').scrollTop = 0;
  }

  // Flashcards
  function fc(){
    const x = G.list[G.i];
    body().innerHTML = top(t('g_fc')) + `
      <div class="pr-card">${pic(x, 'big')}<div class="pr-w">${esc(x.w)}</div>${x.m ? `<div class="pr-m">${esc(x.m)}</div>` : ''}<div class="pr-it">${esc(x.it)}</div>
        ${x.ex ? `<p class="pr-ex">“${esc(x.ex)}”</p>` : ''}
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
      : `${x.m ? `<div class="pr-card"><small>${esc(t('meaning'))}</small><div class="pr-m big">“${esc(x.m)}”</div></div>` : `<div class="pr-card">${pic(x, 'big')}</div>`}
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
        return `<button class="pr-tile${up ? ' up' : ''}${G.done.includes(k) ? ' done' : ''}" data-k="${k}">${up ? (c.pic ? (c.x.m ? `<span class="pr-tw pr-tm">${esc(c.x.m)}</span>` : pic(c.x)) : `<span class="pr-tw">${esc(c.x.w)}</span>`) : '<span class="pr-q">?</span>'}</button>`;
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
        else { const g = G; G.busy = true; setTimeout(() => { if (G !== g) return; G.open = []; G.busy = false; mt(); }, 900); }
      }
      mt();
    });
  }

  // Choose the answer (grammar / vocabulary questions with an explanation)
  function gq(){
    if (G.i >= G.list.length) {
      body().innerHTML = top(t('g_gq')) + finishBox(`${G.score === G.list.length ? '🌟' : '👏'}<br>${esc(t('score'))} <b>${G.score} / ${G.list.length}</b>`);
      wireBack(); wireEnd('gq'); return;
    }
    const x = G.list[G.i], order = shuffle(x.o.map((o, n) => n));
    body().innerHTML = top(t('g_gq')) + `
      <div class="pr-prog">${esc(t('q'))} ${G.i + 1} ${esc(t('of'))} ${G.list.length}</div>
      <div class="pr-card"><div class="pr-gq">${esc(x.q).replace(/___/g, '<span class="pr-gap">_____</span>')}</div></div>
      <div class="pr-opts">${order.map(n => `<button class="pr-opt" data-n="${n}">${esc(x.o[n])}</button>`).join('')}</div>
      <div class="pr-fb" id="prFb"></div>`;
    wireBack();
    let answered = false;
    body().querySelectorAll('.pr-opt').forEach(b => b.onclick = () => {
      if (answered) return; answered = true;
      const ok = +b.dataset.n === x.a;
      body().querySelectorAll('.pr-opt').forEach(o => { if (+o.dataset.n === x.a) o.classList.add('ok'); });
      if (!ok) b.classList.add('no'); else G.score++;
      document.getElementById('prFb').innerHTML = `<p class="${ok ? 'good' : 'bad'}">${ok ? '✅ ' + esc(t('right')) : esc(t('wrong')) + ' <b>' + esc(x.o[x.a]) + '</b>'}</p>
        <p class="pr-why">💡 ${esc(x.x)}</p>
        <button class="btn navy" id="prN">${esc(t('next'))} ›</button>`;
      document.getElementById('prN').onclick = () => { G.i++; gq(); };
    });
  }

  // Say it! – listen, record yourself, compare (recording stays on the phone; nothing is uploaded).
  // "Check my word" uses the phone's speech recognition where available (usually needs internet).
  let REC = null, MREC = null, STREAM = null, MYURL = null; const ME = new Audio();
  const stopMic = () => {
    try { if (REC) REC.abort(); } catch(e){} REC = null;
    try { if (MREC && MREC.state !== 'inactive') MREC.stop(); } catch(e){} MREC = null;
    try { if (STREAM) STREAM.getTracks().forEach(tr => tr.stop()); } catch(e){} STREAM = null;
    try { ME.pause(); } catch(e){}
  };
  const canRecord = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  function sy(){
    const x = G.list[G.i], SR = window.SpeechRecognition || window.webkitSpeechRecognition, REC_OK = canRecord();
    if (MYURL) { try { URL.revokeObjectURL(MYURL); } catch(e){} MYURL = null; }
    body().innerHTML = top(t('g_sy')) + `
      <div class="pr-card">${pic(x, 'big')}<div class="pr-w">${esc(x.w)}</div>${x.m ? `<div class="pr-m">${esc(x.m)}</div>` : ''}<div class="pr-it">${esc(x.it)}</div>
        <small>${esc(t('card'))} ${G.i + 1} / ${G.list.length}</small></div>
      <div class="pr-ctl"><button class="btn ghost" id="prS">🔊 ${esc(t('listen'))}</button>${REC_OK ? `<button class="btn navy" id="prR">🎤 ${esc(t('rec'))}</button>` : ''}</div>
      <div class="pr-ctl" id="prPB" style="display:none"><button class="btn ghost" id="prMe">▶ ${esc(t('myVoice'))}</button><button class="btn navy" id="prCmp">🔁 ${esc(t('compare'))}</button></div>
      <div class="pr-fb" id="prFb">${REC_OK ? '' : `<p>${esc(t('noMic'))}</p>`}</div>
      ${SR ? `<div class="center" style="margin-top:4px"><button class="pr-back" id="prM">${esc(t('check'))}</button></div>` : ''}
      <div class="pr-ctl"><button class="btn ghost" id="prP">←</button><button class="btn ghost" id="prN">${esc(t('next'))} →</button></div>`;
    wireBack(); say(x);
    const fb = document.getElementById('prFb');
    document.getElementById('prS').onclick = () => say(x);
    document.getElementById('prP').onclick = () => { stopMic(); G.i = (G.i - 1 + G.list.length) % G.list.length; sy(); };
    document.getElementById('prN').onclick = () => { stopMic(); G.i = (G.i + 1) % G.list.length; sy(); };

    const playMe = () => { if (!MYURL) return; try { AU.pause(); speechSynthesis.cancel(); } catch(e){} ME.src = MYURL; ME.currentTime = 0; ME.play().catch(() => {}); };
    const compare = () => sayThen(x, () => setTimeout(playMe, 250));

    const r = document.getElementById('prR');
    if (r) r.onclick = async () => {
      if (MREC && MREC.state === 'recording') { MREC.stop(); return; }
      stopMic();
      try { AU.pause(); speechSynthesis.cancel(); } catch(e){}
      try {
        STREAM = await navigator.mediaDevices.getUserMedia({audio: true});
        const chunks = []; MREC = new MediaRecorder(STREAM);
        MREC.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
        MREC.onstop = () => {
          try { STREAM.getTracks().forEach(tr => tr.stop()); } catch(e){} STREAM = null;
          r.innerHTML = `🎤 ${esc(t('rec'))}`;
          if (!chunks.length) return;
          if (MYURL) { try { URL.revokeObjectURL(MYURL); } catch(e){} }
          MYURL = URL.createObjectURL(new Blob(chunks, {type: chunks[0].type || 'audio/webm'}));
          document.getElementById('prPB').style.display = 'flex';
          fb.innerHTML = `<p>${esc(t('compareHint'))}</p>`;
          compare();
        };
        MREC.start();
        r.innerHTML = `⏹ ${esc(t('stop'))}`;
        fb.innerHTML = `<p class="good">🔴 ${esc(t('recording'))}</p>`;
        const me = MREC; setTimeout(() => { try { if (me.state === 'recording') me.stop(); } catch(e){} }, 3500);
      } catch(e) {
        stopMic(); r.innerHTML = `🎤 ${esc(t('rec'))}`;
        fb.innerHTML = `<p>${esc(t('micBlocked'))}</p>`;
      }
    };
    document.getElementById('prMe').onclick = playMe;
    document.getElementById('prCmp').onclick = compare;

    const m = document.getElementById('prM'); if (!m) return;
    m.onclick = () => {
      stopMic();
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

  window.renderPractice = () => { if (!body()) return; stopMic(); if (window.towerStop) towerStop(); LEVEL = null; menu(); };

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
    .pr-big small{font-size:14px;color:var(--muted)}
    .pr-levels{display:grid;gap:12px}
    .pr-lv.pr-tower{background:linear-gradient(135deg,#0f1f3d,#1c3466);border-color:var(--gold)}
    .pr-tower .pr-lvi{background:var(--gold)}
    .pr-lv.pr-tower .pr-lvt b{color:#fff}.pr-tower .pr-lvt small{color:#d9dce4}.pr-tower .chev{color:var(--gold)}
    .pr-lv{display:flex;align-items:center;gap:14px;width:100%;text-align:left;background:#fff;border:1.5px solid var(--cream-2);border-radius:18px;padding:16px;box-shadow:var(--shadow);cursor:pointer;font:inherit;color:inherit}
    .pr-lvi{width:54px;height:54px;border-radius:50%;background:var(--navy);display:grid;place-items:center;font-size:26px;flex:none}
    .pr-lvt{flex:1;min-width:0}
    .pr-lvt b{display:block;font-family:'Playfair Display',serif;font-size:22px;color:var(--navy);line-height:1.1}
    .pr-lvt em{display:block;font-style:normal;font:600 11px Poppins,sans-serif;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold-d);margin:3px 0 4px}
    .pr-lvt small{display:block;font-size:12.5px;color:var(--muted);line-height:1.4}
    .pr-lvl{font:600 10.5px Poppins,sans-serif;color:var(--navy);background:var(--cream-2);border-radius:999px;padding:4px 8px;white-space:nowrap}
    .pr-m{font-size:15px;color:var(--navy);font-weight:500}
    .pr-m.big{font-family:'Source Serif 4',Georgia,serif;font-style:italic;font-size:20px;line-height:1.4;padding:6px 4px}
    .pr-card .pr-ex{font-size:15px;margin:6px 0 2px}
    .pr-tw.pr-tm{font-size:12px;font-weight:500;line-height:1.25}
    .pr-gq{font-family:'Source Serif 4',Georgia,serif;font-size:21px;line-height:1.45;color:var(--ink)}
    .pr-gap{color:var(--gold-d);font-weight:700;letter-spacing:1px}
    .pr-why{font-size:14px!important;color:var(--ink);background:#fbf4e2;border-radius:12px;padding:10px 12px;text-align:left;line-height:1.45}`;
  document.head.appendChild(css);
})();
