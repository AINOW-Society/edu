(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['locales/locales-sq'] = AINOW['locales/locales-sq'] || {};
const data = {
    "platform": {
        "education": "AINOW Arsim — shkrim-lexim i IA falas për mësimdhënës",
        "business": "AINOW Biznes",
        "back_to_education": "Shko te Arsimi",
        "home": "AINOW — kryefaqja"
    },
    "language_note": {
        "title": "Pse agjentët janë në anglisht?",
        "body": "Udhëzimet e agjentëve mbahen në anglisht sepse modelet e sotme të IA-së janë trajnuar kryesisht me tekst në anglisht dhe i ndjekin udhëzimet në anglisht më saktë dhe më qëndrueshëm sesa ato të përkthyera. Dallimi është më i madh pikërisht te udhëzimet e gjata dhe të strukturuara si këto.",
        "tip": "Prapëseprapë mund të punoni në gjuhën tuaj: ngjiteni agjentin ashtu siç është, pastaj shkruajini në shqip, maqedonisht ose në çdo gjuhë tjetër. Do t'ju përgjigjet në gjuhën që përdorni."
    },
    "nav": {
        "prompts": "Prompte",
        "agents": "Agjentë",
        "playbooks": "Udhëzues",
        "situations": "Situata",
        "builder": "Ndërtuesi i agjentëve",
        "about": "Rreth nesh",
        "resources": "Burime",
        "settings": "Cilësimet"
    },
    "common": {
        "search_prompts": "Kërko prompte... (/)",
        "surprise_me": "Më befaso",
        "sort": "Rendit",
        "sort_newest": "Rendit: Më të rejat",
        "sort_az": "Rendit: Titulli (A-Z)",
        "view_grid": "Pamje rrjete",
        "view_list": "Pamje liste",
        "copied": "U kopjua!",
        "copied_success": "U kopjua në kujtesë!",
        "added_success": "U shtua në bllokun e shënimeve!",
        "customize": "Përshtat",
        "try_ai": "Provo me IA",
        "favorites": "Shto te të preferuarat",
        "copy": "Kopjo",
        "share": "Ndaj",
        "zen_mode": "Modaliteti Zen",
        "settings": "Cilësimet dhe të dhënat",
        "no_results": "Nuk gjetëm asnjë artikull që përputhet me kërkimin tuaj.",
        "showing": "Duke shfaqur",
        "of": "nga",
        "cancel": "Anulo",
        "copy_prompt": "Kopjo Promptin",
        "table_favorite": "Statusi i Preferuar",
        "table_title": "Titulli",
        "table_name": "Emri",
        "table_category": "Kategoria",
        "table_tags": "Etiketat",
        "table_date": "Data",
        "table_actions": "Veprimet",
        "categories_label": "Kategoritë",
        "filtered_by": "Filtruar sipas"
    },
    "settings": {
        "title": "Cilësimet",
        "general": "Të përgjithshme",
        "data": "Menaxhimi i të dhënave",
        "export_title": "Eksporto rezervën",
        "export_text": "Shkarkoni të gjitha të preferuarat dhe agjentët tuaj të personalizuar si një skedar JSON.",
        "export_btn": "Shkarko rezervën",
        "import_title": "Importo rezervën",
        "import_text": "Rivendosni të dhënat tuaja nga një skedar rezerve. Kjo do të bashkohet me të dhënat ekzistuese.",
        "import_btn": "Zgjidh skedarin",
        "reset_title": "Rivendosje fabrikore",
        "reset_text": "Fshini të gjitha të dhënat lokale dhe rivendosni aplikacionin në gjendjen e paracaktuar.",
        "reset_btn": "Rivendos gjithçka",
        "reset_confirm": "Jeni të sigurt? Kjo nuk mund të kthehet pas.",
        "imported_success": "Të dhënat u rivendosën me sukses! Po ringarkohet..."
    },
    "agent_categories": {
        "all": "Të gjithë agjentët",
        "favorites": "Të preferuarat",
        "gov": "Qeveri",
        "sales": "Shitje",
        "research": "Kërkim dhe Akademik",
        "writing": "Shkrim dhe Përmbajtje",
        "dev": "Programim",
        "product": "Produkt dhe UX",
        "ai": "Inteligjencë Artificiale",
        "data": "Analizë të Dhënash",
        "hr": "Burime Njerëzore",
        "log": "Logjistikë",
        "cyber": "Siguri Kibernetike",
        "realestate": "Pasuri të Paluajtshme",
        "science": "Shkencë dhe STEM",
        "psych": "Psikologji",
        "eco": "Klima dhe Eko",
        "files": "Skedarë dhe Dokumente",
        "utility": "Media dhe Vegla",
        "ngo": "OJQ dhe Jofitimprurëse",
        "business": "Biznes",
        "marketing": "Marketing",
        "edu": "Edukim",
        "pmo": "PMO dhe Operacione",
        "health": "Shëndet dhe Mirëqenie",
        "creative": "Kreative"
    },
    "agents_ui": {
        "title": "Qendra e agjentëve",
        "subtitle": "asete inteligjente",
        "search_placeholder": "Kërko agjentë IA... (/)",
        "customizable": "I personalizueshëm",
        "copy": "Kopjo konfigurimin",
        "copied": "U kopjua",
        "interactive_config": "Konfigurim interaktiv",
        "static_config": "Konfigurim statik",
        "customize_title": "Personalizo agjentin",
        "tip": "Këshillë: Shtimi i kontekstit specifik ndihmon agjentin të adoptojë kufizimet tuaja unike menjëherë pa pasur nevojë për prompte vijuese.",
        "preview_title": "Shiko udhëzimet e sistemit",
        "cancel": "Anulo",
        "no_results": "Nuk u gjetën agjentë që përputhen me kriteret tuaja.",
        "copy_config": "Kopjo konfigurimin"
    },
    "help": {
        "badge": "Udhëzues praktik",
        "title": "Të kuptuarit e Inteligjencës Artificiale",
        "subtitle": "IA është një mjet i fuqishëm, por kërkon drejtim njerëzor. Ky udhëzues shpjegon se si funksionon teknologjia, pse etika ka rëndësi, dhe si ta përdorni këtë platformë për të rritur aftësitë tuaja, jo për t'i zëvendësuar ato.",
        "tech": {
            "title": "Teknologjia themelore: Motori i parashikimit",
            "desc": "Inteligjenca artificiale nuk është magji. Ajo është matematikë dhe probabilitet in një shkallë masive.",
            "engine_title": "Modelet e mëdha gjuhësore (LLM)",
            "engine_text": "Mendoni për një LLM si një plotësues automatik tepër të avancuar. Ai ka lexuar miliarda faqe teksti. Kur i bëni një pyetje, ai nuk 'mendon' si një njeri; ai po llogarit fjalën tjetër më të mundshme bazuar në modelet që ka mësuar gjatë trajnimit.",
            "prediction_title": "Njohja e modeleve",
            "prediction_text": "IA nuk e kupton të vërtetën; ajo kupton modelet. Nëse kërkoni një poezi, ajo ndjek modelin e poezisë. Nëse kërkoni kod, ajo ndjek sintaksën e programimit. Ajo pasqyron cilësinë e hyrjes suaj."
        },
        "prompting_101": {
            "title": "Prompting 101: 4 Shtyllat",
            "desc": "Për të marrë rezultate profesionale, strukturoni promptet tuaja duke përdorur këto katër komponentë kryesorë.",
            "pillar_1_title": "1. Persona",
            "pillar_1_text": "Kush është IA? Jepini një rol (p.sh., 'Vepro si një menaxher i lartë projektesh'). Kjo filtron njohuritë e saj në atë fushë specifike.",
            "pillar_2_title": "2. Detyra",
            "pillar_2_text": "Çfarë duhet të bëjë? Jini specifik dhe përdorni folje të forta (p.sh., 'Harto një përmbledhje ekzekutive prej 300 fjalësh').",
            "pillar_3_title": "3. Konteksti",
            "pillar_3_text": "Pse dhe si? Jepni kufizime të sfondit (p.sh., 'Për një audiencë jo-teknike' ose 'Përqendrohu në kursimin e kostove').",
            "pillar_4_title": "4. Formati",
            "pillar_4_text": "Si duhet të duket rezultati? Përcaktoni strukturën (p.sh., 'Një listë me pika', 'Tabelë Markdown', ose 'Kod JSON').",
            "iteration_title": "Cikli i përsëritjes",
            "iteration_text": "Trajtojeni IA-në si një koleg i ri. Nëse rezultati nuk është i përsosur, përsosni udhëzimet tuaja. Shtoin kufizime, qartësoni qëllimin dhe kërkojini të provojë përsëri.",
            "shot_title": "Zero-Shot vs. Few-Shot",
            "shot_text": "Mos tregoni vetëm; demonstroni. 'Zero-Shot' është kërkesa pa shembuj. 'Few-Shot' është ofrimi i 1-2 shembujve të rezultatit të dëshiruar. Ofrimi i shembujvel përmirëson ndjeshëm cilësinë."
        },
        "agents": {
            "title": "Konceptet e avancuara: Agjentët e IA",
            "desc": "Agjentët are specializuar konfigurime të dizajnuara për të simuluar ekspertizë specifike.",
            "persona_title": "Simulimi i rolit",
            "persona_text": "Një 'Agjent' ishte një prompt që udhëzon IA-në të adoptojë një persona specifike profesionale (p.sh., 'Studiues i lartë akademik'). Kjo filtron bazën e saj të gjerë të njohurive për t'i dhënë përparësi informacionit relevant për atë fushë.",
            "constraints_title": "Masat mbrojtëse dhe kufizimet",
            "constraints_text": "Agjentët përdorin kufizime negative (p.sh., 'Mos përdor gjuhë të lulëzuar') për të parandaluar zakonet e këqija të zakonshme të IA-së si halucinacionet ose fjalët e tepërta. Kjo siguron që rezultati të jetë i përdorshëm dhe profesional."
        },
        "ethics": {
            "title": "Etika dhe përgjegjësia",
            "desc": "IA duhet të jetë bashkë-piloti juaj, kurrë autopiloti. Ju jeni përgjegjës për rezultatin përfundimtar.",
            "copilot_title": "Shtim, jo zëvendësim",
            "copilot_text": "Qëllimi i IA-sës është të trajtojë detyrat e përsëritura, të strukturojë idetë dhe të analizojë të dhënat në mënyrë që të mund të përqendroheni në krijimtari dhe strategji. Është një mjet për t'ju ndihmuar të mendoni më shpejt, jo për të menduar për ju.",
            "verify_title": "Njeriu në proces",
            "verify_text": "IA mund të 'halucinojë'—to deklarojë med vetëbesim fakte që janë të gabuara. Duhet gjithmonë të verifikoni datat, faktet dhe kodin. Kurrë mos dorëzoni punë të gjeneruar nga IA pa e rishikuar, redaktuar dhe kuptuar atë."
        },
        "guide": {
            "title": "Si ta përdorni këtë bibliotekë",
            "desc": "Ky aplikacion është kutia juaj e veglave. Ai përmban prompte dhe agjentë të testuar paraprakisht për të shpejtuar rrjedhën tuaj të punës.",
            "search_title": "Gjej dhe zbulo",
            "search_text": "Përdorni shiritin e kërkimit për të gjetur prompte për detyra specifike (p.sh., 'Programim', 'Shkrim'). Përdorni 'Më befaso' për të zbuluar mënyra të reja se si IA mund t'ju ndihmojë, të cilat nuk i kishit menduar.",
            "customize_title": "Përshtat dhe vendos",
            "customize_text": "Promptet med tekst në kllapa si [Tema] are interaktive. Klikoni mbi to për të plotësuar detajet tuaja specifike para se t'i kopjoni. Kjo siguron që prompti të jetë i përshtatur për nevojat tuaja të sakta."
        },
        "intro": {
            "badge": "Dokumentacion",
            "version": "v3.2.0",
            "title_prefix": "Manuali i Përdoruesit &",
            "title_suffix": "Udhëzuesi i Platformës",
            "subtitle": "Mirësevini në AINOW Prompt Library. Ky dokumentacion do t'ju udhëzojë në përdorimin e kësaj qendre komanduese offline të IA për të rritur produktivitetin tuaj."
        },
        "toc": {
            "intro": "Hyrje",
            "getting_started": "Fillimi",
            "features": "Veçoritë Kryesore",
            "interface": "Udhëzuesi i Ndërfaqes",
            "shortcuts": "Shkurtoret",
            "tools": "Drejtoria e Mjeteve IA",
            "faq": "Pyetjet e Shpeshta"
        },
        "sections": {
            "getting_started": {
                "title": "Si të filloni",
                "text": "AINOW është <strong>qendra juaj komanduese AI offline</strong> — një toolkit i zgjuar që i kthen ndërveprimet komplekse AI në flukse pune të thjeshta. Pa llogari, pa çelësa API, pa internet të nevojshëm.",
                "note_bold": "Offline së pari:",
                "note_text": "Gjithçka funksionon në shfletuesin tuaj. Asnjë e dhënë nuk dërgohet në asnjë server. Puna juaj mbetet plotësisht private.",
                "fill_in_title": "Motori \"Plotësoni Boshllëqet\"",
                "fill_in_text_1": "Do të hasni prompte që përmbajnë <strong>Variabla</strong> në kllapa të thepisura, si <code className=\"bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-indigo-600 font-mono text-xs\">[Tema]</code>.",
                "fill_in_text_2": "Kur klikoni mbi një prompt të tillë, aplikacioni gjeneron automatikisht një formë. Thjesht plotësoni fushat, dhe motori do të ndërtojë promptin përfundimtar për ju."
            },
            "features": {
                "title": "Veçoritë Kryesore",
                "library": {
                    "title": "Biblioteka e Prompteve",
                    "text": "Mbi 3.000 prompte të kuruar në 33 kategori profesionale — kodim, shkrim, marketing, juridike, mjekësi, burime njerëzore, financa dhe më shumë. Kërkoni me (<code>/</code>) ose filtroni sipas kategorisë. Shënoni të preferuarat me ♥."
                },
                "agents": {
                    "title": "Agjentët IA",
                    "text": "Agjentët janë <strong>Udhëzime Sistemi</strong> që përcaktojnë personën profesionale të IA para fillimit të bisedës.",
                    "list_1": "<strong>Shfletoni</strong> agjentë sipas kategorisë (Dev, Juridike, HR, Shitje dhe më shumë).",
                    "list_2": "<strong>Kopjoni</strong> konfigurimin e plotë.",
                    "list_3": "<strong>Ngjisni</strong> në Custom Instructions të ChatGPT ose System Prompt të Claude."
                },
                "playbooks": {
                    "title": "Udhëzuesit",
                    "text_1": "20 flukse pune të udhëhequra — Ristrukturim Kodi, Auditim UX, Strategji Shitjesh, Draft Ligjor, Rekrutim HR dhe më shumë.",
                    "text_2": "Përgjigjuni 3 pyetjeve dhe merrni tre formate promptesh:",
                    "step_1": "Prompt i Shpejtë — një prompt i fuqishëm për rezultate të shpejta.",
                    "step_2": "Brief i Plotë — një informim gjithëpërfshirës ekspertësh.",
                    "step_3": "Zinxhir Promptesh — tre prompte progresive për punë të thellë.",
                    "step_4": "Kopjoni dhe ekzekutoni çdo format në çdo asistent IA."
                },
                "situations": {
                    "title": "Këshilltari i Situatave",
                    "text_1": "8 skenarë profesionalë të jetës reale — Bisedë e vështirë, Aplikim për punë, Prezantim klienti, Negociatë, Konflikt ekipi dhe më shumë.",
                    "text_2": "Përgjigjuni pyetjeve kontekstuale dhe merrni paketë promptesh të personalizuar:",
                    "step_1": "Zgjidhni skenarin tuaj nga 8 situata reale.",
                    "step_2": "Përgjigjuni pyetjeve të udhëhequra për kontekstin tuaj.",
                    "step_3": "Merrni Prompt të Shpejtë, Brief të Plotë dhe Zinxhir Promptesh.",
                    "step_4": "Kopjoni dhe përdorni drejtpërdrejt në çdo asistent IA."
                },
                "builder": {
                    "title": "Ndërtues i Agjentëve",
                    "text": "Krijoni agjentë IA të personalizuar pa shkruar kod. Definoni personën, vendosni kufizimet e sjelljes dhe gjeneroni udhëzime sistemi gati për t'u përdorur.",
                    "tip": "I shkëlqyer për asistentë specifik të kompanisë ose role ekspertësh që nuk janë në bibliotekën standarde."
                }
},
            "interface": {
                "title": "Udhëzuesi i Ndërfaqes",
                "desc": "Udhëzues për butonat e përdoruesit në të gjithë aplikacionin.",
                "try": {
                    "title": "Provo me IA",
                    "desc": "Hap një menu për të hapur menjëherë promptin në ChatGPT, Claude ose Gemini në një skedë të re."
                },
                "copy": {
                    "title": "Kopjo",
                    "desc": "Kopjon tekstin përfundimtar të përpunuar në kujtesën tuaj."
                },
                "scratchpad": {
                    "title": "Blloku i Shënimeve",
                    "desc": "Shton tekstin në Bllokun Global të Shënimeve (Cmd+K) për redaktim."
                },
                "share": {
                    "title": "Ndaj",
                    "desc": "Krijon një link për ndarje që funksionon edhe offline."
                }
            },
            "tools": {
                "title": "Drejtoria e Mjeteve IA",
                "desc": "Listë e kuruar e aplikacioneve më të mira të IA në kategori të ndryshme. Këto janë mjete të palëve të treta dhe kërkojnë internet.",
                "categories": {
                    "general": "Asistentë të Përgjithshëm IA",
                    "writing": "Tekst dhe Shkrim",
                    "presentations": "Prezantime dhe Dokumente",
                    "images": "Imazhe dhe Dizajn",
                    "video": "Video dhe Multimedia",
                    "audio": "Audio dhe Zë",
                    "music": "Muzikë",
                    "research": "Kërkim dhe Njohuri",
                    "search": "Kërkim dhe Verifikim",
                    "math": "Matematikë, Të dhëna dhe Shkencë",
                    "programming": "Programim dhe Teknikë",
                    "assessment": "Vlerësim dhe Kuize",
                    "collaboration": "Bashkëpunim dhe Produktivitet",
                    "translation": "Gjuhë dhe Përkthim",
                    "multifunction": "Multifunksionale dhe Eksperimentale",
                    "privacy": "Të Fokusuara në Privatësi"
                }
            }
        },
        "faq": {
            "q1": {
                "question": "Për çfarë shërben ky aplikacion?",
                "answer_1": "<strong>AINOW është \"Kokpiti juaj i IA\".</strong> Ai mbyll hendekun midis jush dhe modeleve të fuqishme të IA si ChatGPT ose Claude.",
                "answer_2": "Në vend që të mundoheni të shkruani promptin e përsosur nga e para, ky aplikacion ju jep një bibliotekë të <strong>shablloneve të dizajnuara profesionalisht</strong>. Ju thjesht plotësoni boshllëqet (si një lojë Mad Libs), dhe ne gjenerojmë kodin kompleks që e bën IA të bëjë saktësisht atë që dëshironi."
            },
            "q2": {
                "question": "A më duhet një çelës API?",
                "answer": "<strong>Jo!</strong> Ky aplikacion nuk lidhet drejtpërdrejt me API-të e OpenAI ose Google. Ai gjeneron tekst që ju ta <em>kopjoni dhe ngjisni</em> në ndërfaqen e bisedës së IA që përdorni tashmë (si versioni falas i ChatGPT). Kjo është arsyeja pse është plotësisht falas dhe nuk kërkon konfigurim."
            },
            "q3": {
                "question": "A mund ta përdor pa internet?",
                "answer": "<strong>Po, 100%.</strong> Pasi të keni ngarkuar këtë faqe (ose të hapni skedarin lokal), mund ta shkëputni internetin. E gjithë logjika, kërkimi dhe gjenerimi i prompteve ndodhin brenda vetë shfletuesit tuaj. Kjo e bën atë të përsosur për mjedise të sigurta ose udhëtime."
            },
            "q4": {
                "question": "Ku ruhen të dhënat e mia?",
                "answer": "Gjithçka ruhet në <strong>Local Storage</strong> të shfletuesit tuaj. Ne nuk kemi bazë të dhënash. Ne nuk ju gjurmojmë. Nëse pastroni cache-in e shfletuesit, \"Të Preferuarat\" dhe \"Blloku i Shënimeve\" do të rivendosen."
            },
            "q5": {
                "question": "Cilin model IA duhet të përdor?",
                "answer": "Promptet tona janë <strong>Agnostike ndaj Modelit</strong> — shkruar në gjuhë të qartë, strukturuar që funksionon me çdo IA të aftë. Peizazhi ndryshon shpejt: modeli i sotëm kryesor mund të tejkalohet muajin tjetër. Përdorni çfarë keni qasje. Si rregull e përgjithshme: modelet e mëdha frontier (Claude, GPT, Gemini) trajtojnë arsyetimin kompleks më mirë, ndërsa modelet e vogla/lokale (Llama, Mistral, DeepSeek) janë të shkëlqyeshme për detyra të shpejta dhe flukse pune me privatësi."
            },
            "q6": {
                "question": "Si të shtoj promptet e mia?",
                "answer": "Aktualisht, mund të përdorni <strong>Bllokun e Shënimeve (Cmd+K)</strong> për ruajtje të përkohshme. Për shtesa të përhershme, meqenëse ky është një projekt me kod të hapur, do t'i shtonit ato në dosjen <code>src/data</code> në kodin burimor."
            },
            "q7": {
                "question": "Çfarë është një \"Prompt\"?",
                "answer": "Një prompt është thjesht <strong>udhëzimi</strong> që i jepni IA-së. Mendojeni si një linjë komande për një njeri. Sa më i mirë të jetë prompti juaj (më shumë kontekst, kufizime specifike, qëllime të qarta), aq më i mirë është rezultati."
            },
            "q8": {
                "question": "Çfarë është një \"Agjent\"?",
                "answer": "Një agjent është një <strong>Persona për Luajtje Rolesh</strong>. Në vend që thjesht të bëni një pyetje, i thoni IA-së <em>kush është ajo</em> (p.sh., \"Vepro si Arkitekt i Lartë Python\"). Kjo përmirëson ndjeshëm cilësinë e këshillave pasi IA adopton mendësinë dhe ekspertizën e atij roli specifik."
            },
            "q9": {
                "question": "Çfarë është \"Halucinacioni\"?",
                "answer": "Ndonjëherë IA shpik gjëra me vetëbesim. Kjo quhet halucinacion. Ndodh kur IA përpiqet t'ju kënaqë por në fakt nuk e di përgjigjen. <strong>Gjithmonë verifikoni faktet e rëndësishme</strong>, veçanërisht informacionet ligjore ose mjekësore."
            },
            "q10": {
                "question": "Çfarë janë \"Tokenet\"?",
                "answer": "IA nuk lexon fjalë si ne; ajo lexon \"tokene\". Një token është afërsisht 4 karaktere (ose 0.75 fjalë). Nëse një IA ka një \"kufi konteksti\" prej 128k tokenesh, kjo do të thotë se mund të mbajë mend një libër prej rreth 300 faqesh në një bisedë të vetme."
            },
            "q11": {
                "question": "Çfarë është Këshilltari i Situatave?",
                "answer": "Këshilltari i Situatave është një gjenerator i zgjuar promptesh për momente profesionale të jetës reale — përgatitje për bisedë të vështirë, shkrim aplikimi për punë ose planifikim negociatash. Përgjigjuni disa pyetjeve dhe platforma ndërton një paketë promptesh të personalizuar (të Shpejtë, Brief të Plotë dhe Zinxhir) gati për t'u përdorur."
            },
            "q12": {
                "question": "Çfarë është Ndërtuesit i Agjentëve?",
                "answer": "Ndërtues i Agjentëve ju lejon të krijoni agjentin tuaj IA pa njohuri teknike. Përshkruani personën, vendosni tonin dhe kufizimet, definoni formatin e pritur të daljes dhe merrni udhëzime të plota sistemi gati për t'u përdorur."
            }
}
    },

    "scratchpad": {
        "title": "Blloku i shënimeve",
        "placeholder": "Ngjitni promptet këtu për t'i lidhur, ose mbani shënime...",
        "footer": "Përmbajtja ruhet automatikisht në nivel lokal.",
        "added": "U shtua në bllokun e shënimeve"
    },
    "categories": {
        "all": "Të gjithë Promptet",
        "favorites": "Të preferuarat",
        "agriculture": "Bujqësi",
        "aiengineering": "Inxhinieria e IA",
        "business": "Biznes",
        "career": "Karriera",
        "climate": "Klimë",
        "coding": "Kodim",
        "creative": "Kreative",
        "creativevisual": "Arte Vizuale",
        "cybersecurity": "Siguria Kibernetike",
        "dataanalysis": "Analiza e të Dhënave",
        "finance": "Financë",
        "gov": "Qeveria",
        "hospitality": "Mikpritja",
        "health": "Shëndeti & Mirëqenia",
        "hr": "Burime Njerëzore",
        "humanities": "Humanitete",
        "journalism": "Gazetaria",
        "legal": "Ligjore",
        "logistics": "Logjistikë",
        "marketing": "Marketing",
        "medicine": "Mjekësi",
        "ngo": "OJQ",
        "product": "Produkt",
        "productivity": "Produktiviteti",
        "psychology": "Psikologjia",
        "publichealth": "Shëndeti Publik",
        "realestate": "Pasuri të Paluajtshme",
        "sales": "Shitje",
        "science": "Shkencë",
        "sustainability": "Qëndrueshmëria",
        "writing": "Shkrim",
        "macedonian": "Maqedonisht",
        "albanian": "Shqip"
    },
    "playbook_categories": {
        "all": "Të gjithë Udhëzuesit",
        "coding": "Programim",
        "marketing": "Marketing",
        "ngo": "OJQ",
        "education": "Edukim",
        "creative": "Kreative",
        "business": "Biznes",
        "productivity": "Produktiviteti",
        "communication": "Komunikim",
        "sales": "Shitje",
        "hr": "Burime Njerëzore",
        "finance": "Financë",
        "psychology": "Psikologji",
        "data": "Të dhëna",
        "product": "Produkt",
        "cybersecurity": "Siguri Kibernetike",
        "legal": "Ligjore",
        "climate": "Klimë",
        "logistics": "Logjistikë",
        "research": "Hulumtim",
        "writing": "Shkrim",
        "government": "Qeveria"
    },
    "playbooks": {
        "hero": {
            "badge": "Motori i punës",
            "title_start": "Jo vetëm një prompt.",
            "title_end": "Ndërtoni.",
            "subtitle": "Detyrat komplekse kërkojnë më shumë se një hap. Playbooks lidhin promptet, duke ushqyer automatikisht rezultatin e një hapi në kontekstin e tjetrit.",
            "step1": "Vendos Kontekstin Fillestar",
            "step2": "Ekzekuto Prompt-in e IA",
            "step3": "Kthe Përgjigjen si Feedback",
            "step_label": "Hapi"
        },
        "list": {
            "categories": "Kategoritë",
            "all": "Të gjithë Udhëzuesit",
            "search": "Kërko rrjedhat e punës... (/)",
            "available": "Rrjedhat e punës në dispozicion",
            "table_steps": "Hapat",
            "found": "udhëzues u gjetën",
            "no_results": "Nuk u gjet asnjë udhëzues. Provoni të përshtatni kërkimin tuaj."
        },
        "items_label": "shabllone & skenarë",
        "ql": {
            "cr_code_l": "Ngjitni kodin me të cilin dëshironi të punoni:",
            "cr_code_ph": "Ngjitni kodin tuaj këtu...",
            "cr_goal_l": "Cili është qëllimi kryesor i përmirësimit?",
            "cr_context_l": "Cilat kuadre ose konventa ekipi duhen marrë parasysh?",
            "cr_context_ph": "p.sh. React 18, modaliteti strikt i TypeScript, udhëzuesi i stilit të kompanisë",
            "ux_screen_l": "Përshkruani UI-n ose ekranet që dëshironi të auditoni:",
            "ux_screen_ph": "Përshkruani ndërfaqen, rrjedhat dhe ndërveprimet kryesore...",
            "ux_user_type_l": "Kush është përdoruesi kryesor?",
            "ux_user_type_ph": "p.sh. Blerës për herë të parë, administratorë ndërmarrjesh, studentë 18–25",
            "ux_top_issue_l": "Cili është problemi më i madh UX ose pika e braktisjes?",
            "ce_topic_l": "Cila është tema ose subjekti i këtij përmbajtjeje?",
            "ce_topic_ph": "p.sh. Mjete IA për bizneset e vogla, udhëheqja në ekipe në distancë",
            "ce_audience_l": "Kush është audienca e synuar?",
            "ce_audience_ph": "p.sh. Themelues startup-esh 25–40, të aftë teknikisht por jo programues",
            "ce_goal_l": "Cili është qëllimi i përmbajtjes?",
            "ir_alerts_l": "Përshkruani incidentin ose ngjitni detaje të regjistrit / alarmit:",
            "ir_alerts_ph": "Ngjitni regjistrat e gabimeve, detajet e alarmit ose përshkruani incidentin...",
            "ir_system_l": "Cili sistem ose mjedis është i prekur?",
            "ir_system_ph": "p.sh. Grup prodhimi AWS, domen Windows, portë API e brendshme",
            "ir_severity_l": "Cila është ashpërsia e vlerësuar dhe gjendja aktuale?",
            "ds_data_l": "Përshkruani grupin tuaj të të dhënave (tabela, kolona, madhësi, burim):",
            "ds_data_ph": "p.sh. Transaksione klientësh: user_id, data, shuma — 2 milionë rreshta, PostgreSQL",
            "ds_objective_l": "Cili është qëllimi analitik ose parashikues?",
            "ds_tools_l": "Cilat mjete ose stek po përdorni?",
            "ds_tools_ph": "p.sh. Python / Pandas / Scikit-learn / Jupyter",
            "hr_role_l": "Për çfarë roli ose pozicioni po punësoni?",
            "hr_role_ph": "p.sh. Menaxher i lartë produkti, Inxhinier DevOps, Drejtor shitjesh",
            "hr_company_l": "Përshkruani shkurtimisht kompaninë dhe kulturën tuaj:",
            "hr_company_ph": "p.sh. Startup SaaS në Series B, 80 persona, remote-first, ritëm i shpejtë",
            "hr_priority_l": "Cili është cilësia #1 që keni nevojë në këtë punësim?",
            "gp_issue_l": "Çfarë çështjeje publike ose politike po adresoni?",
            "gp_issue_ph": "p.sh. Bllokimi i trafikut urban, papunësia e të rinjve, privatësia dixhitale",
            "gp_jurisdiction_l": "Cila është juridiksioni ose shtrirja?",
            "gp_constraint_l": "Cilat janë kufizimet kryesore ose konsideratat politike?",
            "gp_constraint_ph": "p.sh. Buxhet i kufizuar, vit zgjedhor, kundërshtim i fortë nga industria",
            "ld_contract_l": "Çfarë lloji dokumenti ligjor keni nevojë?",
            "ld_parties_l": "Kush janë palët e përfshira?",
            "ld_parties_ph": "p.sh. Kompani softuerike (ofrues) dhe klient ndërmarrje (porositës)",
            "ld_key_terms_l": "Cilat janë kushtet, termat ose shqetësimet kryesore?",
            "ld_key_terms_ph": "p.sh. 5.000 USD në muaj, afat 12-mujor, pronësia intelektuale mbetet te ofruesi, privatësia e të dhënave kritike",
            "ss_account_l": "Kush është kompania ose llogaria e synuar?",
            "ss_account_ph": "p.sh. Shitës me pakicë nga Fortune 500, kompani SaaS e tregut të mesëm, qeverisje lokale",
            "ss_product_l": "Çfarë po shitni?",
            "ss_product_ph": "p.sh. Platformë sigurie kibernetike për ndërmarrje, 80.000 USD në vit",
            "ss_stage_l": "Në çfarë faze është cikli i shitjeve?",
            "cp_org_l": "Përshkruani organizatën ose operacionin tuaj:",
            "cp_org_ph": "p.sh. Njësi prodhuese e mesme, 500 punonjës, prodhon ambalazh",
            "cp_baseline_l": "Cili është baza ose objektivi juaj aktual i qëndrueshmërisë?",
            "cp_baseline_ph": "p.sh. Ende pa politikë ESG, ose: synim zero neto deri në 2030",
            "cp_constraint_l": "Cilat janë kufizimet kryesore?",
            "pm_goal_l": "Cili është qëllimi i projektit ose produkti kryesor?",
            "pm_goal_ph": "p.sh. Nisja e faqes së re të tregtisë elektronike, migrimi drejt infrastrukturës cloud",
            "pm_scope_l": "Përshkruani qëllimin, ekipin dhe burimet e projektit:",
            "pm_scope_ph": "p.sh. Ekip me 6 persona, afat 3-mujor, buxhet 50.000 USD, palët: marketing + inxhinieri",
            "pm_risk_l": "Cili është rreziku ose sfida më e madhe?",
            "hc_size_l": "Cila është madhësia dhe struktura e ekipit ose organizatës?",
            "hc_size_ph": "p.sh. Startup me 45 persona, plotësisht në distancë, 3 ekipe inxhinierie + shitje + operacione",
            "hc_problem_l": "Cili është sfida ose qëllimi aktual kulturor?",
            "hc_values_l": "Cilat vlera ose parime duhet të përcaktojnë këtë kulturë?",
            "hc_values_ph": "p.sh. Përgjegjësi, transparencë, përkushtim ndaj klientit, mësim i vazhdueshëm",
            "fn_revenue_l": "Cila është situata aktuale e të ardhurave ose financiare?",
            "fn_revenue_ph": "p.sh. 2,5 milionë USD të ardhura vjetore me rritje 30% në vit, ose startup pa të ardhura me 500.000 USD kapital fillestar",
            "fn_goal_l": "Cili është qëllimi ose sfida financiare?",
            "fn_context_l": "Përshkruani modelin e biznesit dhe strukturën e kostove:",
            "fn_context_ph": "p.sh. SaaS, 120 USD CAC, LTV 18-mujor, 70% marzh bruto, ekip prej 15",
            "cc_topic_l": "Çfarë lënde ose aftësi do të mësojë ky kurs?",
            "cc_topic_ph": "p.sh. Analizë të dhënash me Python, Komunikim biznesi, Dizajn grafik",
            "cc_learner_l": "Kush është nxënësi i synuar?",
            "cc_format_l": "Cili është formati dhe kohëzgjatja e kursit?",
            "cc_format_ph": "p.sh. Kurs online 6-javor, 10 module video, me ritëm të lirë dhe sesione javore live",
            "rs_domain_l": "Cili është fusha juaj e kërkimit ose tema?",
            "rs_domain_ph": "p.sh. Drejtësia në mësimin e makinës, Politika e shëndetit publik, Ekonomia e sjelljes",
            "rs_question_l": "Cila është pyetja juaj e kërkimit ose hipoteza?",
            "rs_question_ph": "Përshkruani çfarë doni të zbuloni ose testoni...",
            "rs_stage_l": "Në çfarë faze është hulumtimi juaj?",
            "sw_hook_l": "Përshkruani konceptin e historisë suaj ose idenë e hapjes:",
            "sw_hook_ph": "p.sh. Një astronaute e turpëruar merr një shans të fundit të shlyhet në një mision solo drejt Marsit",
            "sw_genre_l": "Cili është zhanri dhe toni?",
            "sw_audience_l": "Kush është lexuesi i synuar?",
            "sw_audience_ph": "p.sh. Të rritur 30–50 që pëlqejnë fantashkencën letrare, lexues të rinj 14–18",
            "bm_idea_l": "Përshkruani idenë ose konceptin tuaj të biznesit:",
            "bm_idea_ph": "p.sh. Aplikacion IA për planifikimin e vakteve që mëson preferencat e familjes dhe krijon lista pazari",
            "bm_market_l": "Kush është klienti dhe tregu juaj i synuar?",
            "bm_market_ph": "p.sh. Prindër të zënë me punë në SHBA, treg prej 50 miliardë USD për kite ushqimore",
            "bm_stage_l": "Në çfarë faze është ky biznes?",
            "so_system_l": "Me çfarë sistemi teknologjik ose infrastrukture po punoni?",
            "so_system_ph": "p.sh. Grup Kubernetes në AWS, Windows Active Directory, PostgreSQL",
            "so_process_l": "Çfarë procesi ose operacioni ka nevojë për SOP?",
            "so_process_ph": "p.sh. Vendosja e shërbimit të ri, rikuperimi nga fatkeqësitë, pranimi / largimi i përdoruesve",
            "so_audience_l": "Kush do të ndjekë këtë SOP?",
            "la_route_l": "Përshkruani zinxhirin tuaj të furnizimit ose rrugën tregtare:",
            "la_route_ph": "p.sh. Prodhim në Vietnam → depo në Holandë → shitje me pakicë në Mbretërinë e Bashkuar",
            "la_product_l": "Çfarë produkti ose mallrash po lëvizni?",
            "la_product_ph": "p.sh. Elektronikë konsumatore, ushqime që prishen, komponentë industrialë",
            "la_challenge_l": "Cili është sfida kryesore ose qëllimi i optimizimit?",
            "pc_pattern_l": "Çfarë sjelljeje ose modeli mendor dëshironi të ndryshoni?",
            "pc_pattern_ph": "p.sh. Shtyrje kronike, kënaqja e të tjerëve, sindroma e mashtruesit, ankthi i performancës",
            "pc_context_l": "Në çfarë konteksti shfaqet ky model më shpesh?",
            "pc_goal_l": "Si duket suksesi për ju?",
            "pc_goal_ph": "p.sh. Dorëzimi i punës në kohë pa panik në minutën e fundit, të thuash jo pa faj",
        },
        "modal": {
            "title": "Inicializoni Udhëzuesin",
            "subtitle": "Jepni kontekstin fillestar për:",
            "info": "Këto të dhëna do të injektohen në promptin e parë. IA do t'i përdorë ato për të kuptuar qëllimin tuaj specifik.",
            "cancel": "Anulo",
            "start": "Fillo Rrjedhën"
        },
        "active": {
            "exit": "Dil",
            "active_badge": "Aktiv",
            "step_goal": "Qëllimi i Hapit",
            "copy_prompt": "Kopjo këtë Prompt në IA",
            "paste_response": "Ngjit Përgjigjen e IA Këtu",
            "finish": "Përfundo Rrjedhën",
            "next": "Gjenero Hapin Tjetër",
            "memory": "Kujtesa e Kontekstit",
            "why": "Pse ka rëndësi kjo:",
            "why_text": "Të dhënat e shfaqura më sipër janë \"kujtuar\" nga aplikacioni. Ne i injektojmë ato automatikisht në hapat e ardhshëm që të mos keni nevojë t'ia shpjegoni manualisht kontekstin IA përsëri."
        }
    },
    "resources": {
        "sidebar": {
            "title": "Baza e Njohurive",
            "guide_section": "Udhëzues",
            "platform_section": "Platforma"
        },
        "nav": {
            "getting_started": "Udhëzues për Zhvillues",
            "ethical_ai": "IA Etike",
            "partners": "Partnerët",
            "models": "Modelet e IA",
            "about": "Rreth AINOW",
            "privacy": "Privatësia dhe Kushtet",
            "accessibility": "Aksesueshmëria"
        },
        "help": {
            "title": "Keni nevojë për ndihmë?",
            "text": "Shikoni udhëzuesit tanë të komunitetit ose na kontaktoni në forum."
        }
    },
    "pages": {
        "about": {
            "title": "Rreth Shoqatës AINOW",
            "story_title": "Historia Jonë",
            "story_text": "Çdo transformim fillon me një ide. Historia jonë filloi në një hapësirë të vogël, por me një vizion të madh – të sjellim inovacion dhe përgjegjësi në IA. Përmes pasionit dhe përkushtimit, ajo është bërë një lëvizje që frymëzon.",
            "mission_title": "Misioni Jonë",
            "mission_text": "Misioni ynë është të nxisim kërkimin, zhvillimin dhe edukimin në fushën e inteligjencës artificiale (IA) në Maqedoni. Ne synojmë të nxisim aplikimet etike të IA dhe të mbështesim talentet e reja dhe startup-et në këtë fushë.",
            "values_title": "Vlerat Tona",
            "values_text": "Vlerat tona ndërtohen mbi bashkëpunimin, inovacionin, etikën dhe përgjegjësinë sociale. Ne besojmë në fuqizimin e njerëzve, nxitjen e një kulture të mësimit dhe përparimin e IA-së për të mirën e madhe të shoqërisë.",
            "creator_name": "Suad Seferi",
            "creator_role": "Themelues & President",
            "creator_bio": "Me mbi 20 vjet përvojë në TI, siguri kibernetike dhe IA, Suad Seferi sjell një ekspertizë tëllë në peizazhin teknologjik që po evoluon me shpejtësi. Ai është autori i librave \"Udhëtimi i IA-së\" dhe \"Magjia e IA-së - Një botë pa pushim\", libra të dedikuar për thjeshtimin e koncepteve komplekse dhe sigurimin që teknologjia të mbetet e aksesueshme për të gjithë.",
            "creator_quote": "\"Magjia e vërtetë e IA-së është ta bëjmë atë të punojë për njerëzit.\"",
            "creator_quote_2": "\"E krijova këtë projekt si një nismë e dedikuar për mirëqenien digjitale dhe për të rritur ndërgjegjësimin rreth etikës së IA. Është krijuar për të qenë plotësisht falas, me burim të hapur dhe i aksesueshëm për të gjithë — qoftë duke u ekzekutuar lokalisht në makinën tuaj ose në internet.\"",
            "bio_link": "Lexoni biografinë dhe punën e plotë",
            "team": {
                "title": "Ekipi Ynë",
                "sead": {
                    "name": "Sead Dzigal",
                    "role": "Themelues & Anëtar i Bordit",
                    "bio": "Sead Dzigal është doktor i shkencave politike dhe profesor universitar. Ai e mori doktoratën në Fakultetin Juridik „Justiniani I\" në Shkup, me një disertacion në fushën e komunikimeve politike me titull „Sfera publike politike në epokën e mediave online\"."
                },
                "bojan": {
                    "name": "Bojan Stojkovski",
                    "role": "Themelues & Anëtar i Bordit",
                    "bio": "Me mbi një dekadë përvojë si gazetar i shpërblyer, Bojan sjell ekspertizë të thellë në teknologji, inovacion dhe biznes, veçanërisht në Ballkan. Raportimi i tij ka përfshirë fusha si IA, teknologji mbrojtëse dhe fintech, dhe puna e tij është publikuar në Foreign Policy, WSJ, Haaretz, ZDNet dhe Balkan Insight. Si Kryeredaktor në IT Logs, Bojan vazhdon të drejtojë biseda rreth teknologjive në zhvillim."
                },
                "biljana": {
                    "name": "Biljana Dimovska",
                    "role": "Themelues & Anëtar i Bordit",
                    "bio": "Me 17 vjet përvojë në SEO dhe marketing dixhital, Biljana është e përkushtuar për të ndihmuar bizneset të rriten përmes strategjive të personalizuara. Si eksperte e certifikuar e Google Ads, ajo specializohet në krijimin e planeve efektive SEO dhe drejtimin e promovimeve të suksesshme online. Puna e saj pasurohet nga integrimi i IA-së, duke optimizuar vendimmarrjen dhe automatizimin."
                },
                "aleksandra": {
                    "name": "Aleksandra Todorovikj",
                    "role": "Themelues & Anëtar i Bordit",
                    "bio": "Me mbi 20 vjet përvojë në shitje, komunikim, gazetari dhe organizim eventesh, Aleksandra shquhet në punën me njerëz dhe krijimin e lidhjeve kuptimplota. Jashtë punës profesionale, Aleksandra është e apasionuar pas shkrimit të librave për fëmijë, duke besuar se librat dhe fëmijët janë dy gjërat më të mëdha që i kanë ndodhur."
                },
                "maja": {
                    "name": "Maja Mirkovic",
                    "role": "Eksperte Rajonale & Partnere",
                    "bio": "Maja Mirkovic është profesioniste juridike shumëgjuhëshe dhe e organizuar mirë, me përvojë të gjerë në sektorin gjyqësor të Bosnjës dhe Hercegovinës. Ajo mban tri diploma Master në Drejtësi nga Fakulteti Juridik i Universitetit të Sarajevës. Aktualisht po ndjek studimet master në E Drejtë Dixhitale, IA dhe Blockchain në EBIS Business TechSchool."
                }
            },
            "contact_title": "Na Kontaktoni",
            "contact_text": "Për pyetje, sugjerime ose kërkesa për bashkëpunim, ju lutemi na kontaktoni në",
            "project_title": "Projekti i Bibliotekës së Prompteve",
            "project_text": "Kjo bibliotekë është një nga projektet tona kryesore me kod të hapur, i lindur direkt nga misioni ynë për të demokratizuar edukimin e IA-së. Shërben si një qendër e centralizuar, e drejtuar nga komuniteti, për prompte dhe konfigurime agjentësh të cilësisë së lartë.",
            "project_text_2": "Duke ofruar këto mjete falas, ne ndihmojmë studentët, bizneset dhe entuziastët të mbyllin hendekun midis kërkimit kompleks të IA dhe zbatimit praktik e etik. Ajo vepro si një shoqërues digjital i punëtorive dhe iniciativave tona arsimore, duke fuqizuar përdoruesit të shfrytëzojnë potencialin e plotë të IA Gjenerative."
        },
        "partners": {
            "title": "Partnerët Tanë",
            "intro": "Ne bashkëpunojmë me liderë të industrisë, institucione akademike dhe komunitete teknologjike për të nxisim adoptimin e IA-së dhe standardet etike në të gjithë Ballkanin.",
            "academic": "Institucionet Akademike",
            "academic_text": "Bashkëpunim me universitetet lokale për kërkime dhe zhvillimin e kurrikulës së IA-së.",
            "tech": "Komunitetet e Teknologjisë",
            "tech_text": "Partneritet me qendrat e zhvilluesve për të organizuar punëtori dhe hakatone.",
            "industry": "Liderët e Industrisë",
            "industry_text": "Puna me firmat lokale të teknologjisë për të zbatuar zgjidhje të përgjegjshme të IA-së.",
            "ngo": "OJQ-të Globale",
            "ngo_text": "Bashkëpunimi në projekte me ndikim social të fuqizuar nga IA gjenerative.",
            "become": "Bëhuni Partner",
            "become_text": "Të interesuar për bashkëpunim? Na kontaktoni në"
        },
        "legal": {
            "title": "Ligjore dhe Privatësia",
            "open_source_title": "Iniciativa Open Source",
            "open_source_text": "Biblioteka e Prompteve AINOW është një projekt falas, me kod të hapur, i mirëmbajtur nga Shoqëria AINOW (OJQ AI NOW Shkup). Është dizajnuar për t'i shërbyer komunitetit pa kosto. Ne besojmë në demokratizimin e aksesit në mjetet e inteligjencës artificiale.",
            "notice_title": "Njoftim Ligjor",
            "notice_1_title": "1. Natyra e Shërbimit",
            "notice_1_text": "Ky aplikacion ofrohet \"siç është\" për qëllime edukative dhe produktiviteti. Ndërsa ne përpiqemi për cilësi, Shoqëria AINOW nuk jep asnjë lloj garancie për plotësinë, saktësinë ose besueshmërinë e prompteve.",
            "notice_2_title": "2. Mohimi i Përgjegjësisë",
            "notice_2_text": "Ju pranoni që Shoqëria AINOW nuk është përgjegjëse për rezultatet e gjeneruara nga modelet e IA të palëve të treta (si ChatGPT, Claude ose Gemini) duke përdorur promptet tona.",
            "notice_3_title": "3. Informacioni i Operatorit",
            "privacy_title": "Politika e Privatësisë",
            "no_tracking_title": "1. Nuk ka Ndjekje Serveri",
            "no_tracking_text": "Ne respektojmë privatësinë tuaj sipas dizajnit. Ky aplikacion funksionon tërësisht në anën e klientit (në shfletuesin tuaj). Ne nuk përdorim server për të mbledhur të dhënat tuaja personale.",
            "local_storage_title": "2. Ruajtja Lokale",
            "local_storage_text": "Për të përmirësuar përvojën tuaj, ne përdorim Ruajtjen Lokale të shfletuesit tuaj për të ruajtur preferencat. Këto të dhëna mbeten në pajisjen tuaj.",
            "third_party_title": "3. Shërbimet e Palëve të Treta",
            "third_party_text": "Ky sajt mund të jetë i hostuar në platforma si GitHub Pages që mund to mbledhin log-e standarde anonime për siguri.",
            "terms_title": "Kushtet dhe Licencimi",
            "license_software": "1. Licenca Open Source (Softuer)",
            "license_content": "2. Licenca e Përmbajtjes (Prompte)",
            "user_resp_title": "3. Përgjegjësitë e Përdoruesit",
            "user_resp_text": "Duke përdorur këtë sajt, ju pranoni të përdorni përmbajtjen në mënyrë të ligjshme. Ju mbeteni përgjegjës për mënyrën se si përdorni rezultatet e gjeneruara nga modelet e IA."
        },

        "ethical": {
            "title": "Udhëzimet Etike të IA",
            "intro": "Ne besojmë se IA duhet të fuqizojë njerëzimin, jo ta zëvendësojë atë. Promptet tona janë dizajnuar me fokus te drejtësia dhe siguria.",
            "pillars": {
                "human": {
                    "title": "Në Qendër Njeriu",
                    "text": "IA është një mjet për rritje. Ne prioritizojmë sistemet ku teknologjia i shërben mirëqenies njerëzore dhe kreativitetit."
                },
                "privacy": {
                    "title": "Privatësia sipas Dizajnit",
                    "text": "Ne respektojmë sovranitetin e të dhënave. Kjo bibliotekë ekzekutohet lokalisht në shfletuesin tuaj."
                },
                "fairness": {
                    "title": "Drejtësia dhe Anshmëria",
                    "text": "Ne përpiqemi të kurojmë prompte që zbutin stereotipet e dëmshme. Përdoruesit duhet të vlerësojnë kritikish rezultatet."
                },
                "transparency": {
                    "title": "Transparenca",
                    "text": "Ne besojmë në kodin e hapur. Përdoruesit duhet të tregojnë gjithmonë kur përmbajtja gjenerohet nga IA."
                }
            },
            "philosophy": {
                "title": "Filozofia pas Kodit",
                "text": "Zgjedhja jonë për ta ndërtuar këtë si një aplikacion vetëm për anën e klientit është një qëndrim etik mbi Sovranitetin e të Dhënave. Ne besojmë se mjetet edukative nuk duhet të vijnë me koston e privatësisë së përdoruesit."
            },
            "literacy": {
                "title": "Alfabetizmi i IA-së",
                "text": "Ne e shohim alfabetizmin e IA-së si një aftësi themelore të shekullit 21. Kjo bibliotekë është një shoqërues mësimi, jo një kuti magjike."
            },
            "community": {
                "title": "Standardet e Komunitetit",
                "intro": "Si një projekt open-source, ne zbatojmë standarde të rrepta:",
                "items": [
                    "Asnjë përmbajtje e dëmshme: Ne refuzojmë prompte që gjenerojnë gjuhë urrejtjeje ose dhunë.",
                    "Asnjë mjet për sulme kibernetike: Ne nuk hostojmë prompte për haking ose phishing.",
                    "Cilësia mbi sasinë: Kontributet duhet të demonstrojnë dobi të qartë."
                ]
            },
            "accessibility": {
                "title": "Deklarata e Aksesueshmërisë",
                "text": "Ne përpiqemi t'i bëjmë mjetet e IA të aksesueshme për të gjithë, pavarësisht aftësive apo harduerit."
            },
            "user_resp": {
                "title": "Përgjegjësitë e Përdoruesit",
                "items": [
                    "Verifikoni Faktet: IA gjenerative mund të halucinojë.",
                    "Rishikoni për Anshmëri: Modelet mund të prodhojnë përmbajtje të anshme pa dashje.",
                    "Respektoni të Drejtat e Autorit: Mos përdorni IA për të shkelur pronësinë intelektuale.",
                    "Gjykimi Profesional: IA është një asistent, jo një ekspert."
                ]
            },
            "risk": {
                "title": "Zbutja e Riskut",
                "text": "Ne moderojmë në mënyrë aktive bibliotekën tonë. Nëse hasni një prompt të dëmshëm, ju lutemi raportojeni në"
            },
            "stand": {
                "title": "Qëndrimi ynë Etik",
                "text": "Ne ndërtojmë mjete të IA-së për të rritur kreativitetin njerëzor."
            }
        },
        "accessibility": {
            "title": "Aksesueshmëria",
            "intro": "AINOW duhet të funksionojë për të gjithë, pavarësisht aftësive, pajisjes apo lidhjes. Faqet janë ndërtuar mbi HTML semantik, lexuesit e ekranit nuk hasin pengesa dhe gjithçka punon edhe offline.",
            "keyboard_title": "Shkurtoret e Tastierës",
            "global": {
                "title": "Komandat Globale",
                "show": "Shfaq këtë menu ndihmëse",
                "theme": "Ndërro modalitetin Dritë/Errësirë",
                "sidebar": "Ndërro shiritin anësor"
            },
            "jump": {
                "title": "Shko te Faqja",
                "prompts": "Biblioteka e Prompteve",
                "agents": "Qendra e Agjentëve",
                "builder": "Ndërtuesi i Agjentit",
                "resources": "Burimet",
                "then": "pastaj"
            },
            "actions": {
                "title": "Veprimet",
                "search": "Fokuso Kërkimin",
                "close": "Mbyll Modalin",
                "copy": "Kopjo Rezultatin"
            },
            "commitment": {
                "title": "Angazhimi për Aksesueshmërinë",
                "text": "Ne jemi të përkushtuar t'i bëjmë mjetet tona digjitale të aksesueshme për të gjithë përdoruesit.",
                "items": [
                    "Lexuesit e Ekranit: Të gjitha elementet kanë struktura semantike HTML.",
                    "Kontrasti: Ne përdorim modalitete me kontrast të lartë.",
                    "Lëvizja e Reduktuar: Ne respektojmë preferencat e sistemit tuaj."
                ]
            }
        }
    },
    "footer": {
        "tagline": "Prompt Different.",
        "rights": "Një Nismë me Kod të Hapur • Privatësia në Radhë të Parë",
        "forum": "Forumi"
    },
    "situations": {
        "badge": "Këshilltar Situatash",
        "page_title": "Cila është situata juaj?",
        "page_subtitle": "Zgjidhni një skenar real. Përgjigjuni disa pyetjeve të zgjuara. Merrni prompte AI të nivelit ekspert — menjëherë.",
        "start_btn": "Fillo",
        "next_btn": "Tjetër",
        "back_btn": "Prapa",
        "generate_btn": "Gjenero Promptet e Mia",
        "restart_btn": "Provo Tjetër",
        "step_label": "Hapi",
        "of_label": "nga",
        "questions_label": "pyetje",
        "output_title": "Paketa Juaj e Prompteve Eksperte",
        "output_subtitle": "Tre nivele fuqie — zgjidhni atë që i përshtatet.",
        "your_context": "Konteksti Juaj",
        "quick_label": "Prompt i Shpejtë",
        "full_label": "Brifing i Plotë",
        "chain_label": "Zinxhir Promptesh",
        "quick_desc": "Një prompt i fuqishëm për rezultate të shpejta. Kopjo dhe shko.",
        "full_desc": "Brifing gjithëpërfshirës ekspert. Më i miri për detyra komplekse.",
        "chain_desc": "Tre prompte progresive — përdorini me radhë për rezultate më të thella.",
        "chain_step": "Hapi",
        "copy_prompt": "Kopjo",
        "copied": "U kopjua!",
        "cats": {
            "all": "Të gjitha situatat",
            "leadership": "Udhëheqje",
            "business": "Biznes",
            "communication": "Komunikim",
            "career": "Karrierë",
            "productivity": "Produktivitet"
        },
        "sidebar_topics": "Temat e Këshilluesit",
        "sidebar_all_topics": "Të gjitha Temat",
        "guide": {
            "step1_title": "Zgjidh Situatën",
            "step1_desc": "453 skenarë të botës reale nga çdo fushë profesionale.",
            "step2_title": "Përgjigju Pyetjeve",
            "step2_desc": "Disa pyetje të synuara e formojnë rezultatin sipas kontekstit tënd.",
            "step3_title": "Kopjo Promptin",
            "step3_desc": "Shpejtë, i plotë ose zinxhir — gati për çdo AI menjëherë."
        },
        "difficult_conversation": {
            "title": "Navigoni një Bisedë të Vështirë",
            "desc": "Merrni udhëzime eksperte për të trajtuar një diskutim delikat ose sfidues",
            "who_label": "Me kë po flisni?",
            "who_direct_report": "Vartës i Drejtpërdrejtë",
            "who_peer": "Koleg / Bashkëpunëtor",
            "who_manager": "Menaxher / Shef",
            "who_client": "Klient / Blerës",
            "issue_label": "Cili është problemi që duhet të adresoni?",
            "issue_ph": "p.sh. Performanca ka rënë, afate të humbura, problem sjelljeje...",
            "goal_label": "Cili është rezultati i dëshiruar nga kjo bisedë?",
            "goal_ph": "p.sh. Të bien dakord për plan 30-ditor, të ruhet marrëdhënia...",
            "style_label": "Cili stil komunikimi është më i përshtatshmi?",
            "style_direct": "Direkt",
            "style_empathetic": "Empatik",
            "style_diplomatic": "Diplomatik",
            "style_assertive": "Asertiv",
            "history_label": "Cila është gjendja aktuale e marrëdhënies suaj?",
            "history_positive": "Përgjithësisht Pozitive",
            "history_neutral": "Neutrale / Distancë Profesionale",
            "history_strained": "Kohët e fundit Tensionuar",
            "history_long_standing": "Tension Afatgjatë",
            "template_quick": "Kam nevojë të zhvilloj një bisedë të vështirë me {{who}} tim/time për: {{issue}}. Qëllimi im është: {{goal}}. Ju lutem ndihmoni ta strukturoj këtë bisedë duke përdorur qasjen {{style}}. Siguroni: 1) Deklaratë hapëse natyrale, 2) Pikat kryesore për t'u adresuar qartë, 3) Si të trajtoni rezistencën emocionale, 4) Mbyllje që ruan marrëdhënien.",
            "template_full": "Vepro si trajner ekzekutiv i lartë i specializuar në komunikimin në vendin e punës dhe zgjidhjen e konflikteve.\n\nDuhet të navigoj një bisedë sfiduese me {{who}} tim/time.\n\nSituata: {{issue}}\nRezultati i dëshiruar: {{goal}}\nQasja komunikuese: {{style}}\n\nKrijoji një kornizë gjithëpërfshirëse bisede:\n\n1. **Përgatitja Para Bisedës** — Çfarë të kërkoni, reflektoni dhe përgatitni emocionalisht\n2. **Deklarata Hapëse** — Saktësisht 2-3 fjalitë për të filluar\n3. **Struktura e Mesazhit Kryesor** — Si të artikuloni çështjen pa shkaktuar mbrojtje\n4. **Lëvizjet e Dëgjimit Aktiv** — Pyetje që tregojnë respekt\n5. **Playbook Rezistence** — 3 skenarë ndërhyrje me përgjigje\n6. **Pika Marrëveshje** — Pika për të arritur zgjidhjen\n7. **Deklarata Mbyllëse** — Si të mbaroni me dinjitet\n8. **Veprimet Pas Bisedës** — Çfarë të dokumentoni\n\nTon: profesional, empatik, i fokusuar në zgjidhje.",
            "chain_1": "Po përgatitem për një bisedë të vështirë me {{who}} tim/time për: {{issue}}. Para se të them një fjalë, cilat janë 5 gjërat më kritike që duhet të kuptoj? Merrni parasysh: gjendjen e tyre emocionale, dinamikat e pushtetit, shkaktarët e mundshëm dhe çfarë mund të shkojë keq.",
            "chain_2": "Do të flas me {{who}} tim/time duke përdorur qasjen {{style}}. Qëllimi im: {{goal}}. Shkruajini 3 fjalitë hapëse për këtë bisedë. Duhet të tingëllojnë plotësisht natyrale — jo të korporatës, jo konfrontuese. Qëllimi është të hapni derën, jo ta mbyllni.",
            "chain_3": "{{who}} im/ime ka reaguar mbrojtshëm ndaj çështjes. Duke përdorur qasjen {{style}} dhe duke pasur parasysh qëllimin tim ({{goal}}), jepni 5 përgjigje fleksibël që mund të përdor për të reduktuar tensionin pa u tërhequr nga çështja. Etiketojini sipas tonit emocional."
        },
        "write_proposal": {
            "title": "Shkruani një Propozim Fitues",
            "desc": "Krijoni një propozim profesional bindës që merr \"po\"",
            "client_type_label": "Për kë është ky propozim?",
            "client_type_internal_team": "Ekip i Brendshëm / Drejtues",
            "client_type_external_client": "Klient i Jashtëm",
            "client_type_government": "Qeveria / Sektori Publik",
            "client_type_nonprofit": "Jofitimprurëse / OJQ",
            "relationship_label": "Cila është marrëdhënia juaj ekzistuese me këtë klient?",
            "relationship_new_client": "I Ri — Pa Marrëdhënie Paraprake",
            "relationship_existing_client": "Klient Ekzistues — Bashkëpunim i Vazhdueshëm",
            "relationship_returning_client": "Kthehet — Kemi Bashkëpunuar Më Parë",
            "relationship_competitive_bid": "Ofertë Konkurruese — Kundër Ofruesve të Tjerë",
            "problem_label": "Çfarë problemi zgjidh propozimi juaj?",
            "problem_ph": "p.sh. Klienti ynë shpenzon 10 orë në javë për raportim manual...",
            "solution_label": "Cila është zgjidhja juaj e propozuar?",
            "solution_ph": "p.sh. Një panel automatik që tërheq të dhëna nga 3 sisteme...",
            "budget_label": "Cili është konteksti i buxhetit?",
            "budget_ph": "p.sh. €15,000 gjithsej, afat 3 mujor, ose \"buxheti ende nuk është i përcaktuar\"",
            "decision_timeline_label": "Sa urgjente është vendimi?",
            "decision_timeline_urgent": "Urgjente — Vendim këtë javë",
            "decision_timeline_standard": "Standard — Brenda një muaji",
            "decision_timeline_exploratory": "Eksplorues — Pa afat të caktuar",
            "decision_timeline_competitive": "Ofertë Konkurruese — Shumë ofrues",
            "template_quick": "Shkruaj një propozim profesional për {{client_type}}.\n\nProblemi: {{problem}}\nZgjidhja: {{solution}}\nKonteksti i buxhetit: {{budget}}\n\nPërfshini: rezyme ekzekutive, deklaratë problemi, zgjidhja e propozuar me rezultate kryesore, metrika suksesi, afat kohor dhe thirrje për veprim.",
            "template_full": "Vepro si konsulent i lartë biznesi dhe shkrues propozimesh me 15 vjet përvojë.\n\nShkruaj një propozim tërheqës për: {{client_type}}\n\nProblemi i zgjidhur: {{problem}}\nZgjidhja e propozuar: {{solution}}\nKonteksti i buxhetit: {{budget}}\n\nStrukturoji propozimin si vijon:\n\n1. **Rezymeja Ekzekutive** (3-4 fjali)\n2. **Deklarata e Problemit** — Dhimbja në gjuhën e tyre\n3. **Zgjidhja Jonë** — Çfarë saktësisht do të bëjmë\n4. **Rezultatet Kryesore** — Specifike dhe të matshme\n5. **Afati Kohor** — Faza me faza\n6. **Investimi** — Buxheti si histori ROI\n7. **Pse Ne** — 3 arsye konkrete\n8. **Hapat e Ardhshëm** — Thirrje e vetme për veprim\n\nTon: i sigurt, specifik, i orientuar drejt klientit.",
            "chain_1": "Po shkruaj një propozim për {{client_type}} për të zgjidhur: {{problem}}. Para se të shkruaj, ndihmoni të ndërtoj bazën strategjike. Cilat janë 3 frikërat ose kundërshtimet më të mëdha të këtij vendimmarrësi? Cili gjuhë do të rezonojë më shumë?",
            "chain_2": "Ndihmoni të shkruaj deklaratën e problemit. Klienti është {{client_type}}, çështja është: {{problem}}. Shkruaj 150 fjalë që i bëjnë të ndjejnë: \"Po, kjo është saktësisht ajo me çfarë kemi të bëjmë.\"",
            "chain_3": "Zgjidhja ime e propozuar është: {{solution}}, me kontekst buxheti: {{budget}}. Shkruaj seksionin \"Investimi\" që e paraqet koston si histori ROI. Përfshi skenar para/pas dhe paragraf rreth riskut të mosveprimit."
        },
        "client_pitch": {
            "title": "Fitoni Prezantimin e Klientit",
            "desc": "Strukturoni një prezantim bindës që konverton perspektivat në klientë",
            "service_label": "Çfarë po prezantoni / ofroni?",
            "service_ph": "p.sh. Zhvillim software me porosi, strategji marketingu, konsulencë HR...",
            "prospect_label": "Çfarë lloj klienti është ky?",
            "prospect_startup": "Startup",
            "prospect_sme": "Ndërmarrje e Vogël dhe Mesme",
            "prospect_enterprise": "Korporatë / Ndërmarrje e Madhe",
            "prospect_government": "Qeveria / Sektori Publik",
            "prospect_nonprofit": "Jofitimprurëse / OJQ",
            "pitch_stage_label": "Në çfarë faze është kjo marrëdhënie?",
            "pitch_stage_cold": "E Ftohtë — Kontakti i Parë",
            "pitch_stage_warm": "E Ngrohtë — Tashmë të Angazhuar",
            "pitch_stage_follow_up": "Ndjekje — Kishim Takim Paraprak",
            "pitch_stage_final": "Faza Finale — Po Vendosin Tani",
            "benefit_label": "Cili është përfitimi i vetëm më i madh që ofroni?",
            "benefit_ph": "p.sh. Reduktoni kostot operative me 30%, lansimi më i shpejtë...",
            "objection_label": "Çfarë kundërshtimi prisni?",
            "objection_ph": "p.sh. \"Është shumë e shtrenjtë\", \"Tashmë kemi një zgjidhje\"...",
            "template_quick": "Duhet të prezantoj {{service}} tek klienti {{prospect}}. Propozimi im kryesor i vlerës: {{main_benefit}}. Kundërshtimi i pritshëm: {{objection}}. Strukturoni prezantim verbal 5-minutësh që i tërheq brenda 30 sekondave, komunikon vlerën qartë, trajton kundërshtimin në mënyrë proaktive dhe mbyllet me hap konkret.",
            "template_full": "Vepro si strateg i lartë shitjesh dhe trajner prezantimesh.\n\nPo prezantoj: {{service}}\nLloji i klientit: {{prospect}}\nPropozimi kryesor i vlerës: {{main_benefit}}\nKundërshtimi i pritshëm: {{objection}}\n\nKrijoji librin e plotë të prezantimit:\n\n1. **Grepa** (30 sekonda e para) — Pyetje provokuese\n2. **Formulimi i Problemit** — Dhimbja specifike e {{prospect}}\n3. **Historia e Zgjidhjes** — {{service}} si përgjigje natyrale\n4. **Pikë Prove** — Shembull apo statistikë relevante\n5. **Ura e Vlerës** — {{main_benefit}} në gjuhën e tyre\n6. **Neutralizuesi i Kundërshtimit** — Parandalo \"{{objection}}\"\n7. **Kërkesa** — Hap specifik\n8. **Pyetjet Rezervë** — 3 pyetje ndjekëse\n\nTon: i sigurt, ndër-koleg, i fokusuar në botën e tyre.",
            "chain_1": "Po prezantoj {{service}} tek {{prospect}}. Para se të hyj, duhet të mendoj si ata. Cilat janë 3 presionet kryesore të biznesit me të cilat përballet ky lloj organizate? Çfarë do të thotë \"sukses\" për personin tek i cili po prezantoj?",
            "chain_2": "Shkruajini 45 sekondat hapëse të prezantimit tim për {{service}} tek {{prospect}}. Duhet: të fillojë me njohuri problemi, të vendosë besueshmëri shpejt dhe të mbarojë me pyetje që i fton ata. Bëjeni bisedor, jo korporativ.",
            "chain_3": "Perspektiva ime ({{prospect}}) sapo tha: \"{{objection}}\". Duke ditur që po prezantoj {{service}} me vlerën e {{main_benefit}}, shkruajini një përgjigje 3-hapi: pranimi i shqetësimit, riciklimi, ridrejtimi drejt vlerës."
        },
        "handle_complaint": {
            "title": "Trajtoni një Ankesë në Mënyrë Profesionale",
            "desc": "Kthejeni një person të frustruar në një avokat besnik",
            "complainer_label": "Kush bën ankesën?",
            "complainer_customer": "Klient / Blerës",
            "complainer_employee": "Punonjës / Anëtar i Ekipit",
            "complainer_partner": "Partner / Shitës",
            "complainer_colleague": "Koleg / Palë e Brendshme",
            "complaint_label": "Për çfarë është ankesa?",
            "complaint_ph": "p.sh. Dërgim i vonuar, sjellje joprofesionale, defekt produkti...",
            "what_happened_label": "Çfarë ndodhi nga këndvështrimi juaj?",
            "what_happened_ph": "p.sh. Gabim sistemi shkaktoi vonesë, punonjësi ishte i stresuar...",
            "resolution_power_label": "Çfarë niveli zgjidhje mund të ofroni?",
            "resolution_power_full": "Zgjidhje e plotë (mund ta zgjidh plotësisht)",
            "resolution_power_partial": "Zgjidhje e pjesshme (mund të ofroj diçka)",
            "resolution_power_none": "Pa fuqi zgjidhje (duhet të eskaloj)",
            "channel_label": "Si do të përgjigjeni?",
            "channel_in_person": "Personalisht / Ballë për Ballë",
            "channel_email": "Email / Mesazh i Shkruar",
            "channel_phone": "Telefon / Video Thirrje",
            "channel_formal_letter": "Njoftim Zyrtar i Shkruar",
            "template_quick": "Duhet të trajtoj profesionalisht një ankesë nga {{complainer}}. Ankesa: {{complaint}}. Çfarë ndodhi: {{what_happened}}. Kapaciteti im i zgjidhjes: {{resolution_power}}. Shkruajini një përgjigje profesionale që: pranon frustrimin e tyre, merr përgjegjësi ku është e përshtatshme, shpjegon qartë dhe paraqet rrugën drejt zgjidhjes.",
            "template_full": "Vepro si drejtor i lartë i përvojës së klientit dhe specialist zgjidhje konfliktesh.\n\nDuhet të trajtoj profesionalisht ankesën.\n\nKush: {{complainer}}\nAnkesa e tyre: {{complaint}}\nÇfarë ndodhi brendësisht: {{what_happened}}\nKapaciteti i zgjidhjes: {{resolution_power}}\n\nSiguro kornizë trajtimi ankesash:\n\n1. **Përgjigja e Parë Emocionale** — Deklarata hapëse që pranon ndjenjën\n2. **Gjuha e Llogaridhënies** — Si të marrësh përgjegjësi pa përgjegjësi ligjore\n3. **Shpjegimi** — Transparencë, jo justifikime\n4. **Oferta e Zgjidhjes** — {{resolution_power}}\n5. **Hapi i Rimëkëmbjes** — Gjest i papritur\n6. **Premtimi i Parandalimit** — Çfarë do të bëhet ndryshe\n7. **Shënima e Dokumentimit** — Çfarë të regjistrohet\n\nTon: i ngrohtë, llogaridhënës, i fokusuar në zgjidhje.",
            "chain_1": "{{complainer}} ka ankesë për: {{complaint}}. Para se të përgjigjem, ndihmoni të kuptoj gjendjen e tyre emocionale. Çfarë ndiejnë nën ankesë? Çfarë duan VËRTET? Cila përgjigje do t'i bënte të ndihen të dëgjuar?",
            "chain_2": "Duhet të shkruaj një përgjigje ndaj ankesës së {{complainer}} për {{complaint}}. Çfarë ndodhi: {{what_happened}}. Shkruajini 3 fjalitë hapëse. Duhet: të udhëhiqen nga empati, të vërtetojnë përvojën e tyre dhe të sinjalizojnë seriozitet. Pa gjuhë korporative.",
            "chain_3": "Ankesa e {{complainer}} është për {{complaint}} dhe kapaciteti im i zgjidhjes është: {{resolution_power}}. Ndihmoni ta formuloj ofertën e zgjidhjes në mënyrë që duket bujare dhe e kujdesshme, jo mbrojtëse ose minimale. Përfshini gjest të papritur që mund ta ndryshojë situatën."
        },
        "job_application": {
            "title": "Aplikoni për Punë si Profesionist",
            "desc": "Krijoni materiale që ju çojnë në fazën e intervistës",
            "role_label": "Për çfarë pozicioni po aplikoni?",
            "role_ph": "p.sh. Menaxher i Lartë Produkti, Drejtor Marketingu, Analist të Dhënash...",
            "company_label": "Çfarë kompanie është kjo?",
            "company_ph": "p.sh. Google, startup fintech, OJQ lokale, agjenci qeveritare...",
            "application_stage_label": "Ku jeni në procesin e aplikimit?",
            "application_stage_cv_resume": "Duke Shkruar CV / Rezymenë",
            "application_stage_cover_letter": "Duke Shkruar Letrën e Motivimit",
            "application_stage_interview_prep": "Duke u Përgatitur për Intervistë",
            "application_stage_salary_nego": "Duke Negociuar Pagën",
            "background_label": "Përshkruani shkurtimisht sfondin tuaj relevant",
            "background_ph": "p.sh. 5 vjet në marketing B2B SaaS, drejtuam 3 lansime produktesh, MBA...",
            "highlight_label": "Çfarë aspekti dëshironi të theksoni më shumë?",
            "highlight_achievements": "Arritjet dhe Rezultatet e Kaluara",
            "highlight_skills": "Aftësitë Teknike dhe Ekspertiza",
            "highlight_culture_fit": "Përshtatja Kulturore dhe Aftësitë Ndërvepruese",
            "highlight_growth": "Potenciali i Rritjes dhe Mësimit",
            "highlight_salary": "Negocimi i Pagës",
            "concern_label": "Çfarë ju shqetëson më shumë për këtë aplikim?",
            "concern_ph": "p.sh. Kam një boshllëk 2-vjeçar, po ndryshoj industri, nuk kam diplomë...",
            "template_quick": "Ndihmoni të aplikoj për pozicionin {{role}} në {{company}}. Sfondi im: {{background}}. Dua të theksoj: {{highlight}}. Shkruaj hapje tërheqëse letrës motivuese (3 paragrafe) dhe sugjeroni 5 pika CV-je që do të dallohen.",
            "template_full": "Vepro si trajner i lartë karriere dhe rekrutues ekzekutiv.\n\nPo aplikoj për: {{role}} në {{company}}\nSfondi im: {{background}}\nTheksimi kryesor: {{highlight}}\n\nKrijoji strategji të plotë aplikimi:\n\n1. **Këndi i Aplikimit** — Narrativa unike që më diferencon\n2. **Letra Motivuese** — E plotë, 3 paragrafe\n3. **Titujt e CV-së** — 5-7 pika bazuar në arritje\n4. **Matrica e Aftësive** — Si të paraqes {{highlight}}\n5. **Lista Kërkimore** — 5 gjëra për të mësuar rreth {{company}}\n6. **Optimizimi ATS** — Termat kyç\n7. **Pikat e Dobëta** — Boshllëqet e mundshme dhe si t'i adresoj\n8. **Vizioni i Javës së Parë** — Plan 30-60-90 ditë\n\nTon: ambicioz, specifik, i sigurt pa qenë arrogant.",
            "chain_1": "Po aplikoj për {{role}} në {{company}}. Sfondi im: {{background}}. Para se të shkruaj, ndihmoni të gjej këndin konkurrues. Cilat 3 aspekte të sfondit tim duhet të nxjerr në pah? Çfarë duhet të zvogëloj?",
            "chain_2": "Shkruaj letër motivuese 3-paragrafe për {{role}} në {{company}}. Paragrafi 1: Grepa. Paragrafi 2: Dëshmi nga sfondi im ({{background}}). Paragrafi 3: Mbyllje me interes të vërtetë në {{company}}. Nën 300 fjalë.",
            "chain_3": "Jam në fazën finale të aplikimit për {{role}} në {{company}}. Dua të theksoj {{highlight}}. Ndihmoni të përgatitem 5 pika bisede të fuqishme për intervistën, bazuar në sfondin tim ({{background}})."
        },
        "team_conflict": {
            "title": "Zgjidhni Konfliktin e Ekipit",
            "desc": "Ndërmjetësoni mosmarrëveshjet dhe rindërtoni marrëdhënie productive pune",
            "conflict_type_label": "Çfarë lloj konflikti është ky?",
            "conflict_type_values": "Përplasje Vlerash / Etike",
            "conflict_type_workstyle": "Ndryshim Stili Pune",
            "conflict_type_resources": "Mosmarrëveshje Burimesh / Pronësie",
            "conflict_type_personality": "Fërkime Personaliteti",
            "conflict_type_performance": "Shqetësim Performancë",
            "conflict_duration_label": "Sa kohë ka zgjatur ky konflikt?",
            "conflict_duration_just_started": "Sapo Filloi — Ditë",
            "conflict_duration_few_weeks": "Disa Javë",
            "conflict_duration_months": "Disa Muaj",
            "conflict_duration_long_standing": "Afatgjatë — Mbi një Vit",
            "parties_label": "Kush janë palët e përfshira?",
            "parties_ph": "p.sh. Dy zhvillues të lartë, menaxher projekti dhe dizajner...",
            "core_issue_label": "Cila është çështja kryesore që krijon konfliktin?",
            "core_issue_ph": "p.sh. Njëri anashkalon vendimet e tjetrit vazhdimisht...",
            "your_role_label": "Cila është roli juaj në këtë situatë?",
            "your_role_manager": "Menaxher / Lider Ekipi (kam autoritet)",
            "your_role_peer": "Koleg (i të njëjtit nivel)",
            "your_role_stakeholder": "Palë e Interesuar (jam i/e prekur)",
            "your_role_hr": "HR / Operacionet e Njerëzve",
            "template_quick": "Ndihmoni të zgjidh konfliktin {{conflict_type}} mes {{parties}}. Çështja kryesore: {{core_issue}}. Roli im: {{your_role}}. Siguroni: 1) Si t'i afrohem të dyja palëve para takimit, 2) Axhendë strukturuar ndërmjetësimi, 3) Gjuhë neutrale, 4) Kornizë e qartë zgjidhje.",
            "template_full": "Vepro si psikolog organizacional dhe ndërmjetës i lartë HR me ekspertizë në zgjidhjen e konflikteve.\n\nLloji i konfliktit: {{conflict_type}}\nPalët: {{parties}}\nÇështja kryesore: {{core_issue}}\nRoli im: {{your_role}}\n\nSiguro librin e plotë të zgjidhjes:\n\n1. **Analiza e Shkakut Rrënjësor** — Çfarë e nxit këtë konflikt?\n2. **Seancat e Përgatitjes Individuale** — Pyetje për secilën palë\n3. **Struktura e Takimit** — Axhendë hap pas hapi\n4. **Udhëzuesi i Gjuhës Neutrale** — Frazat qetësuese\n5. **Harta e Terrenit të Përbashkët** — Interesa të ndara\n6. **Korniza e Marrëveshjes** — Zgjidhje e qëndrueshme\n7. **Plani i Monitorimit** — 30 ditë ndjekje\n8. **Kriteret e Eskalimit** — Kur të përfshihet drejtuesit\n\nMerre parasysh autoritetin tim si {{your_role}}.",
            "chain_1": "Ka konflikts {{conflict_type}} mes {{parties}} rreth: {{core_issue}}. Para ndërhyrjes si {{your_role}}, ndihmoni ta hartoj konfliktin. Cilat janë nevojat themelore të secilës palë? Cilat janë rreziqet e mia si {{your_role}}?",
            "chain_2": "Duhet të zhvilloj biseda të veçanta me secilën palë. Si {{your_role}}, shkruajini 5 pyetje për secilin person. Duhet: të ndjehen si kuriozitet i vërtetë, të nxjerrin shqetësimet reale, dhe të ndihmojnë të kuptoj çfarë do të thotë \"zgjidhje\" për ta personalisht.",
            "chain_3": "Tani po drejtoj takimin e zgjidhjes mes {{parties}}. Çështja kryesore: {{core_issue}}. Si {{your_role}}, shkruajini deklaratën hapëse. Duhet: ton neutral e i sigurt, qëllimet të jenë të qarta, rregullat të vendosen, dhe sinjal se jemi këtu të ndërtojmë — jo të ri-debatojmë."
        },
        "negotiation": {
            "title": "Përgatituni për Negociata",
            "desc": "Hyni në çdo negociatë me strategji, besim dhe rrugë drejt fitimit të ndërsjellë",
            "neg_type_label": "Çfarë lloj negociate është kjo?",
            "neg_type_salary": "Paga / Kompensimi",
            "neg_type_contract": "Kushtet e Kontratës",
            "neg_type_partnership": "Marrëveshje Partneriteti",
            "neg_type_resources": "Burime të Brendshme / Buxhet",
            "neg_type_vendor": "Negociata me Furnizues",
            "relationship_label": "Cila është marrëdhënia juaj me palën tjetër?",
            "relationship_new_contact": "Marrëdhënie e Re — Negociata e Para",
            "relationship_ongoing": "Partner / Furnizues i Vazhdueshëm",
            "relationship_internal": "Koleg i Brendshëm / E njëjta Organizatë",
            "relationship_difficult": "Histori e Vështirë — Konflikte të Mëparshme",
            "want_label": "Cili është rezultati juaj ideal?",
            "want_ph": "p.sh. €5,000 më shumë në vit, 60 ditë afat pagese...",
            "leverage_label": "Çfarë avantazhi ose pikash të forta keni?",
            "leverage_ph": "p.sh. Ofertë konkurruese, histori të fortë, aftësi unike...",
            "bottom_line_label": "Cili është minimumi juaj i pranueshëm?",
            "bottom_line_ph": "p.sh. Minimum €3,000, neto 45 ditë, të paktën 2 anëtarë...",
            "their_goal_label": "Çfarë mendoni se dëshiron më shumë pala tjetër?",
            "their_goal_ph": "p.sh. Kontratë afatgjatë, ulje të kostos, shmangje të riskut...",
            "deadline_label": "A ka afat kohor ose presion kohor në këtë negociatë?",
            "deadline_ph": "p.sh. Kontrata skadon në fund të muajit, buxheti mbyllet të premten...",
            "template_quick": "Përgatitini për negociatë {{neg_type}}. Çfarë dua: {{what_you_want}}. Avantazhi im: {{leverage}}. Minimumi im: {{bottom_line}}. Jepini: 1) Pozicioni fillestar, 2) Strategji ankorimi, 3) Si të trajtoj kundëroferën, 4) Kur dhe si të bëj lëshime, 5) Gjuhë mbyllëse.",
            "template_full": "Vepro si negociator mjeshtër me përvojë në negociata {{neg_type}} me rrezik të lartë.\n\nLloji: {{neg_type}}\nRezultati i synuar: {{what_you_want}}\nAvantazhet: {{leverage}}\nMinimumi: {{bottom_line}}\n\nNdërtoni strategji të plotë:\n\n1. **Analiza BATNA** — Alternativa ime më e mirë nëse dështojnë\n2. **Zona Marrëveshjes** — Gamë realiste\n3. **Lëvizja Hapëse** — Ankorimi në favor tim\n4. **Aktivizimi i Avantazhit** — Momenti i duhur për {{leverage}}\n5. **Strategjia e Lëshimeve** — Çfarë të jap, kur dhe për çfarë\n6. **Mbrojtja nga Taktikat** — 3 taktikat presioni dhe si t'u kundërvihesh\n7. **Korniza Fito-Fito** — Gjuhë që i bën ata të ndihen fitimtarë\n8. **Sekuenca Mbyllëse** — Si të njohësh momentin\n\nI informuar psikologjikisht. Praktik. Specifik për {{neg_type}}.",
            "chain_1": "Po hyj në negociatë {{neg_type}}. Qëllimi im: {{what_you_want}}. Para se të flas, ndihmoni me mbledhje informacioni. Çfarë duhet të di rreth palës tjetër? Cilat janë kufizimet, presionet e tyre? Si krahasohet avantazhi im ({{leverage}}) me tyre?",
            "chain_2": "Synimi im është {{what_you_want}} dhe minimumi {{bottom_line}}. Avantazhi: {{leverage}}. Shkruajini deklaratën hapëse të negociatës {{neg_type}} — 2-3 fjalitë e para. Duhet të ankorojë lart, të duket besues jo i dëshpëruar, dhe të ftojë ton bashkëpunues.",
            "chain_3": "Pala tjetër ka kundërofertuar shumë nën synimet {{what_you_want}}, afër minimumit {{bottom_line}}. Avantazhi im: {{leverage}}. Kjo është negociatë {{neg_type}}. Jepini sekuencë strategjike: 1) Reagimi në moment, 2) Kundëroferta, 3) Gjuha, 4) Si të përdor avantazhin pa qenë agresiv."
        },
        "daily_planning": {
            "title": "Ndërtoni Planin Tuaj të Ditës",
            "desc": "Kthejeni listën tuaj të detyrave në plan ditor strategjik dhe të ekzekutueshëm",
            "top_goal_label": "Cili është qëllimi juaj i vetëm më i rëndësishëm sot?",
            "top_goal_ph": "p.sh. Finalizoni prezantimin e klientit, mbyllni 2 marrëveshje...",
            "constraints_label": "Çfarë kufizimesh kohe ose energjie keni?",
            "constraints_ph": "p.sh. 3 takime të planifikuara, energji e ulët në mëngjes...",
            "blockers_label": "Çfarë pengesa të njohura mund të çrregullojnë ditën tuaj?",
            "blockers_ph": "p.sh. Duke pritur miratimin, anëtar i ekipit i padisponueshëm...",
            "tasks_label": "Listoni 3–5 detyrat tuaja kryesore sot (përtej qëllimit kryesor)",
            "tasks_ph": "p.sh. Përgjigju emaileve të klientit, shiko buxhetin, takim ekipi në 10...",
            "role_label": "Cili është roli juaj ose konteksti profesional?",
            "role_ph": "p.sh. Menaxher marketingu, i pavarur, student, themelues startup...",
            "work_style_label": "Çfarë lloj dite është kjo?",
            "work_style_deep_work": "Ditë Pune Intensive (fokus dhe krijim)",
            "work_style_meetings_heavy": "Shumë Takime (shumë thirrje)",
            "work_style_mixed": "E Përzier (fokus dhe takime)",
            "work_style_crisis_mode": "Mënyra e Krizës (reaktive dhe urgjente)",
            "energy_level_label": "Si është energjia dhe fokusi juaj tani?",
            "energy_level_high": "E Lartë — I Mprehtë dhe Gati",
            "energy_level_medium": "E Mesme — Duke u Ngrohur",
            "energy_level_low": "E Ulët — Vështirë të Fokusohemi",
            "energy_level_variable": "E Ndryshueshme — E Paparashikueshme sot",
            "template_quick": "Ndihmoni të ndërtoj plan optimal ditor. Qëllimi #1: {{top_goal}}. Kufizimet: {{constraints}}. Pengesat e njohura: {{blockers}}. Lloji i ditës: {{work_style}}. Krijoni orar me bllokim kohor që jep prioritet qëllimit kryesor, llogarit kufizimet dhe përfshin kohë bufer.",
            "template_full": "Vepro si trajner ekzekutiv produktiviteti i klasit botëror.\n\nNdihmoni të dizajnoj planin optimal sot.\n\nQëllimi kryesor: {{top_goal}}\nLloji i ditës: {{work_style}}\nKufizimet: {{constraints}}\nPengesat: {{blockers}}\n\nNdërtoni plan operacional të plotë ditor:\n\n1. **Arkitektura e Ditës** — Strukturë optimale për ditë {{work_style}}\n2. **Mbrojtja e Prioritetit** — Siguro {{top_goal}} pavarësisht\n3. **Navigimi i Kufizimeve** — Strategji për {{constraints}}\n4. **Plani Largimit Pengesave** — Veprim parandalues për {{blockers}}\n5. **Menaxhimi i Energjisë** — Kur punë intensive vs. komunikim\n6. **Filtri i Vendimeve** — Pyetje e thjeshtë për ndërhyrje\n7. **Rishikimi i Fundit të Ditës** — Ritual 10 minutësh\n8. **Plani Kontigjent** — Fitorja minimale e vlefshme\n\nSpecifik dhe realist për {{work_style}}.",
            "chain_1": "Sot duhet: {{top_goal}}. Dita ime është {{work_style}} me kufizimet: {{constraints}}. Para se të hap ndonjë aplikacion, ndihmoni me ushtrim 5-minutësh qartësi mendore. Cilat janë 3 pyetjet më të rëndësishme për t'iu përgjigjur tani për të siguruar punën e duhur?",
            "chain_2": "Duhet të mbroj kohën për qëllimin #1: {{top_goal}} në ditë {{work_style}}. Kufizimet: {{constraints}}. Dizajnoni sistem specifik bllokimi kohor. Jepini blloqet e sakta, tranzicionet, dhe rregullin kur diçka tenton të marrë blloqin kryesor.",
            "chain_3": "Tani është ora 15:00. Qëllimi ishte {{top_goal}} dhe kam pengesa: {{blockers}}. Dita nuk shkoi si planifikuar. Jepini plan realist kontrolli dëmesh për mbetjen e ditës. Çfarë mund të arrij realisht? Çfarë është e vetme gjëja më e rëndësishme në 2 orët e ardhshme?"
        }
    },
};

Object.assign(data.resources.nav, { services: 'Shërbime IA' });
Object.assign(data.pages, {
    services: {
        title: 'Shërbime IA',
        intro: 'Biblioteka është falas dhe do të mbetet e tillë. Kur një organizatë ka nevojë ta zbatojë këtë në punën e vet — dokumentet, sistemet dhe njerëzit e saj — kjo është zbatim, dhe me të merret partneri ynë teknologjik CTRLab, në Mbretërinë e Bashkuar, BE dhe Ballkanin Perëndimor.',
        delivered_by: 'Ofruar me ',
        for_label: 'Për',
        time_label: 'Zakonisht',
        consultancy: 'Konsulencë IA',
        consultancy_tag: 'Filloni këtu',
        consultancy_for: 'Ekipe drejtuese',
        consultancy_time: '2–3 javë deri te plani',
        consultancy_text: 'Vlerësim, plan, zbatim. Pika e hyrjes kur ende nuk e dini nga të filloni dhe çfarë ia vlen vërtet të ndiqet.',
        training: 'Trajnim për IA',
        training_tag: 'Trajnim që mbetet',
        training_for: 'Ekipe të tëra',
        training_time: 'Gjysmë dite për ekip',
        training_text: 'Punon me dokumentet, sistemet dhe detyrat tuaja reale, që njërezit të largohen pasi kanë automatizuar një detyrë të vërtetë nga puna e tyre, jo një demonstrim.',
        copilot: 'Microsoft 365 dhe Copilot',
        copilot_tag: 'Licencë që vlen',
        copilot_for: 'Ekipe me licenca',
        copilot_time: 'Javë',
        copilot_text: 'I blëtë licencat dhe përdorimi ngeci. Kjo u mëson ekipeve për cilat detyra konkrete Copilot është vërtet i mirë dhe për cilat jo.',
        readiness: 'Gatishmëri dhe adoptim',
        readiness_tag: 'Adoptim që zgjat',
        readiness_for: 'Operacione dhe IT',
        readiness_time: '2 javë, pastaj 3–12 muaj',
        readiness_text: 'Pse ngecën projektet pilot dhe cilat tri gjëra ia vlen të bëhen më pas. Qeverisje, rrezik nga përdorimi i pakontrolluar dhe dizajn me njeriun në cikkel.',
        agents: 'Orkestrim agjentësh',
        agents_tag: 'Sipas biznesit tuaj',
        agents_for: 'Ekipe operacionale',
        agents_time: 'Javë deri në muaj',
        agents_text: 'Niset nga mënyra si rrjedhin vërtet proceset tuaja, pastaj ndërton agjentë brenda platformave tuaja ekzistuese ose të vetëstrehuara, me dorëzime të qarta mes automatikes dhe njerëzores.',
        custom: 'Zhvillim softueri',
        custom_tag: 'Softuer që përshtatet',
        custom_for: 'Organizata të tëra',
        custom_time: 'Muaj',
        custom_text: 'Aplikacione të brendshme, panele dhe integrim IA për punën që mjetet e gatshme e kryejnë dobët, të ndërtuara sipas mënyrës si punon tashmë ekipi juaj.',
        seo: 'SEO dhe GEO',
        seo_tag: 'Të gjetur dhe të cituar',
        seo_for: 'Marketing dhe rritje',
        seo_time: 'Muaj, me efekt kumulativ',
        seo_text: 'Blerësit sot pyesin fillimisht një asistent, pastaj një motor kërkimi. Të gjetur nga Google, të cituar nga IA.',
        governance: 'Qeverisje dhe pajtueshmëri',
        governance_text: 'Çdo angazhim zbatohet sipas kuadrove që vlejnë vërtet për përdorimin e IA-së në Evropë, që ajo që ndërtoni të mbetet e mbrojtshme kur dikush pyet.',
        cta: 'Filloni me vlerësimin',
        cta_text: 'Na tregoni çfarë doni të zgjidhni. Nëse IA është mjeti i gabuar për të, do t’ju themi.',
        cta_primary: 'Rezervoni një bisedë 30-minutëshe'
    }
});
Object.assign(data.pages.partners, {
    current: 'Partnerët tanë',
    areas: 'Fushat e partneritetit',
    ctrlab_text: 'Partner teknologjik. CTRLab ndërton inxhinierinë pas produkteve të AINOW dhe bashkëpunon në punë të aplikuar me IA në rajon.',
});

data.builder = {
    title: "Ndërtuesi i agjentëve",
    subtitle: "Projektoni asete inteligjence të personalizuara",
    autosaved: "Ruajtur automatikisht",
    export: "Eksporto JSON",
    reset: "Rivendos formularin",
    framework: "Korniza e arsyetimit",
    identity: "Identiteti bazë",
    name: "Emri i agjentit",
    role: "Roli",
    domain: "Fusha",
    behavior: "Sjellja dhe toni",
    tone_style: "Toni dhe stili",
    focus: "Fokusi kryesor",
    methodology: "Metodologjia",
    constraints: "Kufizime negative",
    task: "Detyra dhe udhëzimet",
    instructions: "Udhëzime dhe rregulla",
    input_format: "Çfarë do t'i ngjitni agjentit?",
    examples: "Mësojeni IA-në me shembuj",
    capabilities: "Aftësi (shtoni shkathtësi)",
    quality: "Cilësia e promptit",
    preview: "Pamje e drejtpërdrejtë",
    copy: "Kopjo udhëzimet e sistemit",
    copied_clip: "U kopjua në kujtesë",
    tooltip: "Puna juaj ruhet lokalisht në shfletuesin tuaj. Asnjë e dhënë nuk dërgohet në serverët tanë.",
    presets: {
        professional: "Profesional",
        empathetic: "Empatik",
        academic: "Akademik",
        eli5: "Shpjegim i thjeshtë",
        sarcastic: "Sarkastik",
        executive: "Drejtues"
    },
    quality_checks: {
        identity_ok: "Identiteti bazë është përcaktuar",
        identity_bad: "Mungon emri, roli ose fusha",
        context_ok: "Konteksti është i detajuar",
        context_mid: "Konteksti është disi i shkurtër",
        context_bad: "Konteksti është bosh",
        examples_ok: "Shembujt janë dhënë",
        examples_bad: "U zgjodh Few-Shot, por nuk ka shembuj",
        guardrails_ok: "Masat mbrojtëse janë aktive",
        guardrails_bad: "Nuk ka kufizime negative",
        input_ok: "Formati i hyrjes është përcaktuar"
    }
};

Object.assign(data.pages.about, {
    visit: 'Vizitoni faqen e AINOW Society',
    beyond_title: 'Ku mbaron biblioteka',
    beyond_free: 'Gjithçka këtu është falas dhe mbetet falas — promptet, agjentët, skenarët, në tri gjuhë, pa llogari dhe pa gjurmim. AINOW Society është organizatë jofitimprurëse dhe kjo bibliotekë është pjesë e asaj pune.',
    beyond_work: 'Disa gjëra nuk zënë vend në një bibliotekë. Futja e IA-së në tërë ekipin, vendimi se çfarë duhet dhe çfarë nuk duhet automatizuar, shkrimi i një politike që qëndron para një auditimi, ndërtimi i diçkaje që përshtatet me mënyrën si punon tashmë organizata juaj. Kjo është zbatim, dhe me të merret partneri ynë teknologjik CTRLab — për ekipe me pesë veta dhe për organizata me disa qindra, në Mbretërinë e Bashkuar, BE dhe Ballkanin Perëndimor.',
    beyond_close: 'Nëse biblioteka ju përgjigjet pyetjes, merrni atë që ju duhet. Nëse ju hap një pyetje të re, ia vlen një bisedë.',
    beyond_services: 'Çfarë bëjmë për organizatat'
});
  __exports.data = data;
})();
