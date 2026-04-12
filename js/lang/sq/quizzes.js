var QUIZ_DATA = {
    intro: [
        {
            id: 'Q-001',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Cili është qëllimi kryesor i alfabetizimit AI sipas këtij udhëzuesi?',
            options: [
                'Që të gjithë të bëhen programues',
                'Kuptimi i asaj se si funksionon AI dhe mendimi kritik',
                'Zëvendësimi i plotë i punës njerëzore me AI',
                'Përdorimi i AI vetë për argëtim'
            ],
            answer: 1
        },
        {
            id: 'Q-002',
            grade: 'secondary',
            type: 'open',
            question: 'Pse është e rëndësishme etika gjatë përdorimit të inteligjencës artificiale në shkollë?'
        },
        {
            id: 'Q-015',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Çfarë do të thotë akronimi "AI"?',
            options: [
                'Udhëzimi i Avancuar (Advanced Instruction)',
                'Inteligjenca Aktuale (Actual Intelligence)',
                'Inteligjenca Artificiale (Artificial Intelligence)',
                'Ndërfaqja e Automatizuar (Automated Interface)'
            ],
            answer: 2
        },
        {
            id: 'Q-016',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Cili lloj i të mësuarit është baza për sistemet moderne të AI?',
            options: [
                'Mësimi Mekanik',
                'Mësimi i Makinerisë (Machine Learning)',
                'Mësimi Biologjik',
                'Leximi Matematikor'
            ],
            answer: 1
        },
        {
            id: 'Q-017',
            grade: 'primary_lower',
            type: 'open',
            question: 'Jepni një shembull të një rasti të përdorimit të përditshëm të AI që ju e përdorni personalisht.'
        },
        {
            id: 'Q-053',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Një chatbot i ngjan më së shumti:',
            options: [
                'Një truri biologjik',
                'Një asistenti dixhital që ndjek udhëzimet',
                'Një topi magjik kristal',
                'Një personi të vërtetë që fshihet brenda kompjuterit'
            ],
            answer: 1
        },
        {
            id: 'Q-054',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Sipas udhëzuesit, AI përshkruhet si:',
            options: [
                'Teknologji e së ardhmes së largët',
                'Realiteti i tanishëm që ne e përdorim çdo ditë',
                'Një mit që nuk ekziston ende',
                'Vetëm për shkencëtarët'
            ],
            answer: 1
        },
        {
            id: 'Q-055',
            grade: 'secondary',
            type: 'open',
            question: 'Si i ndihmon alfabetizimi AI nxënësit të përgatiten për tregun e ardhshëm të punës?'
        }
    ],
    literacy: [
        {
            id: 'Q-003',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Cili është një nga rreziqet më të mëdha për të rinjtë që përdorin AI pa udhëzim?',
            options: [
                'Mësimi i aftësive të reja shumë shpejt',
                'Pranimi i "halucinacioneve" të AI si fakte të sakta',
                'Reduktimi i kohës para ekranit',
                'Socializimi i tepërt me bashkëmoshatarët'
            ],
            answer: 1
        },
        {
            id: 'Q-004',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë nënkupton vlerësimi kritik i përgjigjeve të AI?',
            options: [
                'Besimi i verbër në çdo tekst të gjeneruar',
                'Verifikimi i fakteve dhe njohja e paragjykimeve',
                'Kopjimi i përgjigjeve direkt në një raport',
                'Injorimi i AI si një mjet'
            ],
            answer: 1
        },
        {
            id: 'Q-018',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë është një "Dritare e Kontekstit" (Filter Bubble)?',
            options: [
                'Një program pastrimi kundër viruseve',
                'Izolimi i përdoruesit në besimet e veta përmes algoritmeve',
                'Një efekt special në video lojëra',
                'Një metodë për kërkim më të shpejtë të imazheve'
            ],
            answer: 1
        },
        {
            id: 'Q-019',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Pse është e rrezikshme futja e të dhënave personale në chatbot?',
            options: [
                'Të dhënat mund të përdoren për trajnim ose të bëhen publike',
                'AI do të ndalojë së punuari',
                'Kompjuteri do të riniset',
                'Nuk është e rrezikshme, të dhënat janë gjithmonë 100% private'
            ],
            answer: 0
        },
        {
            id: 'Q-020',
            grade: 'secondary',
            type: 'open',
            question: 'Shkruani 3 pyetje që duhet t\'i bëni vetes para se të besoni një përgjigje të AI.'
        },
        {
            id: 'Q-056',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Kur një AI bën një gabim me vetëbesim, kjo quhet:',
            options: [
                'Ëndërrim',
                'Halucinacion',
                'Supozim i zgjuar',
                'Mashtrim dixhital'
            ],
            answer: 1
        },
        {
            id: 'Q-057',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Të jesh një "Vendas Dixhital" do të thotë:',
            options: [
                'Keni lindur në një qytet kompjuterik',
                'Jeni rritur duke përdorur teknologjinë dixhitale natyrshëm',
                'Ju flisni vetëm me robotë',
                'Nuk dini si të përdorni letrën'
            ],
            answer: 1
        },
        {
            id: 'Q-058',
            grade: 'secondary',
            type: 'open',
            question: 'Diskutoni pse alfabetizimi AI konsiderohet një "prioritet arsimor" dhe jo thjesht një luks.'
        }
    ],
    definition: [
        {
            id: 'Q-005',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Si ndryshon AI rrënjësisht nga mendja njerëzore?',
            options: [
                'Ka emocione dhe intuitë',
                'Përdor llogaritje matematikorë masive dhe modele',
                'Është një sistem biologjik',
                'Nuk ka asnjë ndryshim'
            ],
            answer: 1
        },
        {
            id: 'Q-006',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Çfarë përfaqëson "Testi Turing"?',
            options: [
                'Një test për shpejtësinë e procesorit të kompjuterit',
                'Një metodë për të kontrolluar nëse një makinë tregon sjellje inteligjente',
                'Një test për kapacitetin e baterisë së robotit',
                'Një program mbrojtës kundër viruseve'
            ],
            answer: 1
        },
        {
            id: 'Q-021',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë është një "Rrjet Neural" në kontekstin e AI?',
            options: [
                'Një tru biologjik në një vazo',
                'Një sistem kompjuterik i frymëzuar nga struktura e trurit',
                'Një lidhje interneti midis dy kompjuterëve',
                'Një lloj kablloje me fibra optike'
            ],
            answer: 1
        },
        {
            id: 'Q-022',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë nënkupton termi "Deep Learning"?',
            options: [
                'Mësimi në ujë të thellë',
                'Rrjetet neurale komplekse me shumë shtresa',
                'Leximi i librave në një bibliotekë',
                'Ruajtja automatike e skedarëve'
            ],
            answer: 1
        },
        {
            id: 'Q-023',
            grade: 'secondary',
            type: 'open',
            question: 'Shpjegoni ndryshimin midis një algoritmi dhe inteligjencës artificiale.'
        },
        {
            id: 'Q-059',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Në analogjinë e udhëzuesit, AI është si një:',
            options: [
                'Artist me ndjenja',
                'Asistent Analitik i Avancuar',
                'Jashtëtokësor nga hapësira',
                'Enciklopedi e vjetër'
            ],
            answer: 1
        },
        {
            id: 'Q-060',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Cili është kufizimi kryesor i "Artificial Intelligence Narrow" (AI e Ngushtë)?',
            options: [
                'Është shumë e ngadaltë',
                'Nuk mund t\'i përdorë njohuritë e saj në një fushë tjetër',
                'Nuk ka ekran',
                'Kushton shumë'
            ],
            answer: 1
        },
        {
            id: 'Q-061',
            grade: 'secondary',
            type: 'open',
            question: 'Përshkruani ndryshimin teorik midis AI të Përgjithshme (AGI) dhe Super AI.'
        }
    ],
    functionality: [
        {
            id: 'Q-007',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Çfarë është "Narrow AI"?',
            options: [
                'AI që mund të kryejë çdo detyrë njerëzore',
                'AI e specializuar për një detyrë specifike (p.sh. shah)',
                'AI që është e vetëdijshme për veten',
                'AI që nuk përdor internet'
            ],
            answer: 1
        },
        {
            id: 'Q-008',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Çfarë është "AI Gjeneruese"?',
            options: [
                'AI që mbledh vetëm të dhëna',
                'AI që mund të krijojë përmbajtje të re (tekst, imazhe, kod)',
                'Një version i vjetër i një kalkulatori',
                'Një sistem për fikjen automatike të kompjuterit'
            ],
            answer: 1
        },
        {
            id: 'Q-024',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë janë "Modelet e Mëdha të Gjuhës" (LLM)?',
            options: [
                'Modele të parashikimit të motit',
                'Modele të AI të trajnuara në sasi masive teksti',
                'Altropollantë të mëdhenj për një koncert',
                'Përkthyes për gjuhët e huaja'
            ],
            answer: 1
        },
        {
            id: 'Q-025',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Çfarë është "Trajnimi i të Dhënave"?',
            options: [
                'Një proces stërvitjeje në palestër',
                'Një proces ku AI mëson nga shembujt e dhënë',
                'Renditja e dosjeve në kompjuter',
                'Fshirja e skedarëve të vjetër'
            ],
            answer: 1
        },
        {
            id: 'Q-026',
            grade: 'secondary',
            type: 'open',
            question: 'Pse modelet e AI ndonjëherë bëjnë gabime me matematikën e thjeshtë?'
        },
        {
            id: 'Q-062',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Një kalkulator i thjeshtë është një shembull i cilit lloj sistemi AI?',
            options: [
                'I vetëdijshëm (Self-aware)',
                'Makineri Reaktive',
                'Teoria e Mendjes',
                'Humanoid'
            ],
            answer: 1
        },
        {
            id: 'Q-063',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Makinat që vetë-drejtohen kryesisht i përkasin cilës kategori?',
            options: [
                'Makineri Reaktive',
                'AI me Memorje të Kufizuar',
                'Superinteligjenca',
                'Teknologji e Lashtë'
            ],
            answer: 1
        },
        {
            id: 'Q-064',
            grade: 'secondary',
            type: 'open',
            question: 'Shpjegoni konceptin "Teoria e Mendjes" në kërkimin futuristik të AI.'
        }
    ],
    history: [
        {
            id: 'Q-009',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Cili vit konsiderohet lindja e AI (konferenca e Dartmouth)?',
            options: [
                '1945',
                '1956',
                '1997',
                '2010'
            ],
            answer: 1
        },
        {
            id: 'Q-010',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Çfarë përfaqësojnë "Dimrat e AI"?',
            options: [
                'Periudhat kur AI u përdor për klimatologjinë',
                'Periudhat e reduktimit të financimit dhe interesit për kërkimin e AI',
                'Stinet kur sistemet e AI punonin më ngadalë',
                'Turne speciale programimi'
            ],
            answer: 1
        },
        {
            id: 'Q-027',
            grade: 'secondary',
            type: 'mcq',
            question: 'Cili kompjuter mposhti Garry Kasparovin në shah në vitin 1997?',
            options: [
                'AlphaGo',
                'Deep Blue',
                'ChatGPT',
                'Siri'
            ],
            answer: 1
        },
        {
            id: 'Q-028',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Kush konsiderohet babai i AI dhe llogaritjes moderne?',
            options: [
                'Steve Jobs',
                'Alan Turing',
                'Bill Gates',
                'Mark Zuckerberg'
            ],
            answer: 1
        },
        {
            id: 'Q-029',
            grade: 'secondary',
            type: 'open',
            question: 'Shkruani një ngjarje historike që ndryshoi perceptimin e AI.'
        },
        {
            id: 'Q-065',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Kush e bëri pyetjen e famshme "A mund të mendojnë makinat?" në vitin 1950?',
            options: [
                'Albert Einstein',
                'Alan Turing',
                'Isaac Newton',
                'Elon Musk'
            ],
            answer: 1
        },
        {
            id: 'Q-066',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Ku u krijua zyrtarisht termi "Inteligjencë Artificiale"?',
            options: [
                'Në një studio filmi',
                'Në Konferencën e Dartmouth',
                'Në një bankë',
                'Në mediat sociale'
            ],
            answer: 1
        },
        {
            id: 'Q-067',
            grade: 'secondary',
            type: 'open',
            question: 'Si e ndryshoi fushën e AI "arkitektura Transformer" në vitin 2017?'
        }
    ],
    prompts: [
        {
            id: 'Q-011',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Çfarë do të thotë akronimi CPTC në inxhinierinë e prompteve?',
            options: [
                'Karakteri, Konteksti, Detyra, Konstraintat',
                'Kompjuteri, Programimi, Testimi, Kodimi',
                'Kreativiteti, Fuqia, Teknike, Qartësia',
                'Komunikimi, Protokolli, Teknologjia, Qendra'
            ],
            answer: 0
        },
        {
            id: 'Q-012',
            grade: 'secondary',
            type: 'open',
            question: 'Shpjegoni pse është e rëndësishme të përcaktohet një "Personazh" (Persona) në një prompt.'
        },
        {
            id: 'Q-030',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Çfarë arrihet duke i shtuar "Kontekst" një prompt-i?',
            options: [
                'AI bëhet më e shpejtë',
                'AI merr më shumë informacion për të dhënë një përgjigje më relevante',
                'AI fiket më shpejt',
                'Kursen trafikun e internetit'
            ],
            answer: 1
        },
        {
            id: 'Q-031',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë do të thotë "Few-Shot Prompting"?',
            options: [
                'Shkrimi i një prompt-i me shumë pak fjalë',
                'Dhënia e disa shembujve AI përpara se të kërkoni detyrën përfundimtare',
                'Shtypja e shpejtë e tastit Enter',
                'Fshirja e prompt-it pas shkrimit të tij'
            ],
            answer: 1
        },
        {
            id: 'Q-032',
            grade: 'secondary',
            type: 'open',
            question: 'Krijoni një prompt duke përdorur strukturën CPTC për një temë sipas zgjedhjes suaj.'
        },
        {
            id: 'Q-068',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Në analogjinë e restorantit, një porosi e detajuar është si:',
            options: [
                'Një prompt i keq',
                'Një prompt i mirë',
                'Një recetë sekrete',
                'Fatura'
            ],
            answer: 1
        },
        {
            id: 'Q-069',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Pjesa "Rregullat" (Constraints) e një prompt-i i tregon AI-së:',
            options: [
                'Të punojë më shpejt',
                'Cilat rregulla dhe kufizime duhet të ndjekë (si numërimi i fjalëve)',
                'Të përdorë më shumë ngjyra',
                'Të mbyllet'
            ],
            answer: 1
        },
        {
            id: 'Q-070',
            grade: 'secondary',
            type: 'open',
            question: 'Çfarë ndodh kur kaloni kufijtë e "Dritares së Kontekstit" të një modeli AI?'
        }
    ],
    agents: [
        {
            id: 'Q-013',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Cili është ndryshimi kryesor midis një Chatbot të rregullt dhe një Agjenti AI?',
            options: [
                'Agjenti vetëm u përgjigjet pyetjeve',
                'Agjenti mund të përdorë mjetet dhe të ekzekutojë në mënyrë autonome detyrat',
                'Chatbot-i është shumë më i zgjuar se agjenti',
                'Nuk ka asnjë ndryshim'
            ],
            answer: 1
        },
        {
            id: 'Q-014',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Çfarë do të thotë "Kujtesë" (Memory) për Agjentët AI?',
            options: [
                'Sa peshon fili i aplikacionit',
                'Aftësia për të mbajtur mend ndërveprimet dhe kontekstin e kaluar',
                'RAM-i i instaluar në server',
                'Aftësia për të fshirë të gjitha të dhënat pas 5 minutash'
            ],
            answer: 1
        },
        {
            id: 'Q-033',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë është "Arsyetimi" (Reasoning) për agjentët AI?',
            options: [
                'Aftësia për të përdorur logjikën për të zgjidhur probleme komplekse në hapa',
                'Aftësia e agjentit për t\'u zemëruar',
                'Kërkimi i të dhënave në Wikipedia',
                'Korrigjimi automatik i gramatikës'
            ],
            answer: 0
        },
        {
            id: 'Q-034',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë përfaqëson "Planifikimi" për Agjentët AI?',
            options: [
                'Dizajnimi i mobiljeve',
                'Ndarja e një qëllimi të madh në hapa më të vegjël të ekzekutueshëm',
                'Ruajtja e dokumenteve në cloud',
                'Dërgimi i e-mailave'
            ],
            answer: 1
        },
        {
            id: 'Q-035',
            grade: 'secondary',
            type: 'open',
            question: 'Përshkruani një situatë ku një Agjent AI do të ishte më i dobishëm se një motor kërkimi i rregullt.'
        },
        {
            id: 'Q-071',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Në analogjinë e agjentit, një AI standard është një enciklopedi, por një Agjent është një:',
            options: [
                'Libër i vjetër',
                'Praktikant që mund ta bëjë vërtet punën',
                'Telefon',
                'Mësues'
            ],
            answer: 1
        },
        {
            id: 'Q-072',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Kur një agjent zbulon gabimin e tij dhe provon përsëri, kjo quhet:',
            options: [
                'Rinisje',
                'Një cikël reagimi ose vëzhgimi (Feedback loop)',
                'Pajisje e dëmtuar',
                'Fshirja e të dhënave'
            ],
            answer: 1
        },
        {
            id: 'Q-073',
            grade: 'secondary',
            type: 'open',
            question: 'Shpjegoni se si agjentët përdorin "Mjetet" (API) për të ndërvepruar me botën reale.'
        }
    ],
    glossary: [
        {
            id: 'Q-036',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Çfarë është një "Algoritëm"?',
            options: [
                'Një lloj virusi kompjuterik',
                'Një grup specifik udhëzimesh për zgjidhjen e një problemi',
                'Emri i kompjuterit të parë',
                'Një njësi procesori'
            ],
            answer: 1
        },
        {
            id: 'Q-037',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë përfaqëson "Backpropagation"?',
            options: [
                'Rivendosja e skedarëve nga Koshi i plehrave',
                'Një metodë për trajnimin e rrjeteve neurale duke korrigjuar gabimet',
                'Një lloj lidhjeje interneti',
                'Bërja e kopjeve të diskut'
            ],
            answer: 1
        },
        {
            id: 'Q-038',
            grade: 'secondary',
            type: 'open',
            question: 'Përcaktoni termin "Paragjykim" (Bias) në të dhënat e AI.'
        },
        {
            id: 'Q-074',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Çfarë do të thotë LLM?',
            options: [
                'Makinë e Vogël Llogjike (Little Logic Machine)',
                'Model i Madh i Gjuhës (Large Language Model)',
                'Nivele të Ulëta të Matematikës',
                'Kujtesë Jetëgjatë'
            ],
            answer: 1
        },
        {
            id: 'Q-075',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Teknologjia RAG ndihmon kryesisht për:',
            options: [
                'Bërjen e AI më kreativ',
                'Parandalimin e gënjeshtrave (halucinacioneve) duke përdorur dokumente të sigurta',
                'Fshirjen e të dhënave të nxënësve',
                'Shpejtimin e internetit'
            ],
            answer: 1
        },
        {
            id: 'Q-076',
            grade: 'secondary',
            type: 'open',
            question: 'Çfarë është një "Token" në kontekstin e një LLM?'
        }
    ],
    roadmap: [
        {
            id: 'Q-039',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë është "AGI" (Artificial General Intelligence)?',
            options: [
                'AI që barazon ose tejkalon inteligjencën njerëzore në të gjitha fushat',
                'Një kartë grafike speciale',
                'Një aplikacion për celular',
                'Lloj i vjetër i tastierës'
            ],
            answer: 0
        },
        {
            id: 'Q-040',
            grade: 'secondary',
            type: 'open',
            question: 'Si mendoni se do ta ndryshojë AI arsimin në 10 vitet e ardhshme?'
        },
        {
            id: 'Q-077',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Analogjia e udhëzuesit për mësimin e integrimit të AI është:',
            options: [
                'Ngasja e një makine',
                'Të mësosh të notosh',
                'Pilotimi i një avioni',
                'Ndërtimi i një shtëpie'
            ],
            answer: 1
        },
        {
            id: 'Q-078',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Hapi 2 i planit të zbatimit të AI në klasë është:',
            options: [
                'Të nhidhesh menjëherë në pjesën e thellë',
                'Eksperimentimi dhe testimi personal',
                'Blerja e kompjuterëve të rinj',
                'Injorimi i teknologjisë'
            ],
            answer: 1
        },
        {
            id: 'Q-079',
            grade: 'secondary',
            type: 'open',
            question: 'Përshkruani metodën "Bashkë-pilot" të integrimit të mbikëqyrur të AI në klasa.'
        }
    ],
    applications: [
        {
            id: 'Q-041',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Cili sektor përdor AI për mirëmbajtjen parashikuese dhe optimizimin e rendimentit të sjetës?',
            options: [
                'Bujqësia',
                'Shëndetësia',
                'Financa',
                'Argëtimi'
            ],
            answer: 0
        },
        {
            id: 'Q-042',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Si i përdorin algoritmet e mediave sociale kryesisht inteligjencën artificiale?',
            options: [
                'Për të përzier në mënyrë të rastësishme postimet',
                'Përzgjedhja e përmbajtjes bazuar në modelet e vëmendjes',
                'Për të fshirë llogaritë e përdoruesve automatikisht',
                'Për kontrollin bazë të drejtshkrimit'
            ],
            answer: 1
        },
        {
            id: 'Q-043',
            grade: 'primary_lower',
            type: 'open',
            question: 'Jepni një shembull se si përdoret AI në transportin personal.'
        },
        {
            id: 'Q-080',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Dronët AI në bujqësi ndihmojnë në zbulimin e:',
            options: [
                'Thesarit të fshehur',
                'Bari i keq dhe tokës së thatë',
                'Formave të reve',
                'Kafshëve të humbura'
            ],
            answer: 1
        },
        {
            id: 'Q-081',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Në bankë, AI ndihmon bllokimin e "transaksioneve të dyshimta" në:',
            options: [
                'Pak ditë',
                'Milisikonda',
                'Një muaj',
                'Vetëm në fundjavë'
            ],
            answer: 1
        },
        {
            id: 'Q-100',
            grade: 'secondary',
            type: 'open',
            question: 'Diskutoni se si AI përmirëson imazherinë mjekësore dhe kirurgjinë.'
        }
    ],
    architecture: [
        {
            id: 'Q-044',
            grade: 'secondary',
            type: 'mcq',
            question: 'Çfarë kontrollon "temperatura" në një model AI?',
            options: [
                'Nxehtësinë fizike të serverit',
                'Rastësinë dhe kreativitetin e rezultatit',
                'Shpejtësinë e lidhjes së internetit',
                'Përdorimin e baterisë së pajisjes'
            ],
            answer: 1
        },
        {
            id: 'Q-045',
            grade: 'secondary',
            type: 'mcq',
            question: 'Cili lloj i modelit AI përpunon tekstin dhe imazhet njëkohësisht?',
            options: [
                'Modeli njëgjuhësh',
                'Modeli vetëm audio',
                'Model multimodal',
                'Model binar'
            ],
            answer: 2
        },
        {
            id: 'Q-046',
            grade: 'secondary',
            type: 'open',
            question: 'Shpjegoni pse kufijtë e kontekstit kanë rëndësi në bisedat e AI.'
        },
        {
            id: 'Q-083',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Analogjia e "Bibliotekarit" për arkitekturën e AI thotë se bibliotekari është:',
            options: [
                'I keq dhe i zhurmshëm',
                'Gjenial por i verbër',
                'Shumë i ngadaltë',
                'Një person biologjik'
            ],
            answer: 1
        },
        {
            id: 'Q-084',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Modelet e AI "mendojnë" duke llogaritur:',
            options: [
                'Mendimet e vërteta njerëzore',
                'Fjalën vijuese statistikisht më të mundshme',
                'Parashikimin e motit',
                'Numrat e rastësishëm'
            ],
            answer: 1
        },
        {
            id: 'Q-085',
            grade: 'secondary',
            type: 'open',
            question: 'Krahasoni temperaturën e ulët (0.1) kundrejt cilësimeve të temperaturës së lartë (0.9).'
        }
    ],
    'agent-advanced': [
        {
            id: 'Q-047',
            grade: 'secondary',
            type: 'mcq',
            question: 'Cila nga e mëposhtmet është pjesë e ciklit kognitiv të agjentit?',
            options: [
                'Shkarkimi i një shfletuesi',
                'Vëzhgimi dhe ekzekutimi i mjeteve',
                'Shtypja e faqeve bosh',
                'Rinisja e kompjuterit në mënyrë të rastësishme'
            ],
            answer: 1
        },
        {
            id: 'Q-048',
            grade: 'secondary',
            type: 'mcq',
            question: 'Pse JSON mund të jetë një format i preferuar rezultati për një agjent?',
            options: [
                'Sepse është me format imazhi',
                'Sepse është strukturuar për makinat dhe integrimin e API',
                'Është më e lehtë për njerëzit për t\'u lexuar sesa teksti',
                'Është me format audio'
            ],
            answer: 1
        },
        {
            id: 'Q-049',
            grade: 'secondary',
            type: 'open',
            question: 'Përshkruani ndryshimin midis gjenerimit të tekstit dhe ekzekutimit të një komande.'
        },
        {
            id: 'Q-086',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'Një agjent autonom është si një Shef Kuzhine sepse ai:',
            options: [
                'Ha vetëm ushqim',
                'E ndan një qëllim në hapa dhe përdor mjete për të përfunduar pjatën',
                'Punon në një restorant',
                'Vesh një kapelë të bardhë'
            ],
            answer: 1
        },
        {
            id: 'Q-087',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Në ciklin kognitiv të agjentit, hapi "Vëzhgimi" e ndihmon agjentin:',
            options: [
                'Të shikojë përmes një kamere',
                'Të identifikojë nëse ka bërë një gabim dhe ta rregullojë atë',
                'Të flasë me një njeri',
                'Të kursejë energjinë elektrike'
            ],
            answer: 1
        },
        {
            id: 'Q-088',
            grade: 'secondary',
            type: 'open',
            question: 'Shpjegoni rolin e "Intent Parsing" (Analizimi i qëllimit) në ekzekutimin e agjentit.'
        }
    ],
    'future-principles': [
        {
            id: 'Q-050',
            grade: 'secondary',
            type: 'mcq',
            question: 'Cili është një avantazh i madh i "modeleve lokale të AI"?',
            options: [
                'Ato kërkojnë një lidhje të vazhdueshme interneti',
                '100% privatësi pasi ekzekutohet në pajisje',
                'Ato janë modelet më të shtrenjta',
                'Ato nuk zënë hapësirë ruajtjeje'
            ],
            answer: 1
        },
        {
            id: 'Q-051',
            grade: 'secondary',
            type: 'mcq',
            question: 'Pse agjentët autonomë duhet të deklarojnë shprehimisht "nuk e di" në vend që të hamendësojnë?',
            options: [
                'Për të parandaluar halucinacionet dhe për të ruajtur besueshmërinë',
                'Sepse janë programuar të jenë dembelë',
                'Për të kursyer energjinë elektrike',
                'Për ta bërë përdoruesin të kërkojë në Google'
            ],
            answer: 0
        },
        {
            id: 'Q-052',
            grade: 'secondary',
            type: 'open',
            question: 'Si mund t\'i integrojnë sistemet operative të ardhshme AI ndryshe nga sot?'
        },
        {
            id: 'Q-089',
            grade: 'primary_lower',
            type: 'mcq',
            question: 'AI e së ardhmes ka të ngjarë të sillet si një:',
            options: [
                'Mjet i veçantë',
                'Sistem Operativ i unifikuar i fshehur në gjithçka',
                'Telekomandë TV',
                'Kalkulator'
            ],
            answer: 1
        },
        {
            id: 'Q-090',
            grade: 'primary_upper',
            type: 'mcq',
            question: 'Rregulli "Asnjëherë mos hamendësoni të dhënat që mungojnë" do të thotë që agjenti duhet:',
            options: [
                'Të hamendësojë përgjigjen',
                'Të ndalojë dhe t\'i kërkojë përdoruesit sqarim',
                'Të presë përgjithmonë',
                'Të fshijë detyrën'
            ],
            answer: 1
        },
        {
            id: 'Q-091',
            grade: 'secondary',
            type: 'open',
            question: 'Çfarë është dizajni "AGI-Native" dhe pse është i rëndësishëm?'
        }
    ]
};
