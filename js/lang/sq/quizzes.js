var QUIZ_DATA = {
    intro: [
        {
            id: 'Q-001',
            type: 'mcq',
            question: 'Cili është qëllimi kryesor i alfabetizmit AI sipas këtij udhëzuesi?',
            options: [
                'Gjithësecili të bëhet programues',
                'Kuptimi i asaj se si funksionon AI dhe mendimi kritik',
                'Zëvendësimi i plotë i punës njerëzore me AI',
                'Përdorimi i AI vetëm për argëtim'
            ],
            answer: 1
        },
        {
            id: 'Q-002',
            type: 'open',
            question: 'Pse është e rëndësishme etika gjatë përdorimit të inteligjencës artificiale në shkollë?'
        },
        {
            id: 'Q-015',
            type: 'mcq',
            question: 'Çfarë do të thotë shkurtesa "AI"?',
            options: [
                'Instruksion i Avancuar',
                'Inteligjencë Aktuale',
                'Inteligjencë Artificiale',
                'Interfaqe e Automatizuar'
            ],
            answer: 2
        },
        {
            id: 'Q-016',
            type: 'mcq',
            question: 'Cili lloj i të mësuarit është baza për sistemet moderne të AI?',
            options: [
                'Të mësuarit mekanik',
                'Të mësuarit makinë (Machine Learning)',
                'Të mësuarit biologjik',
                'Leximi matematik'
            ],
            answer: 1
        },
        {
            id: 'Q-017',
            type: 'open',
            question: 'Jepni një shembull të përdorimit të përditshëm të AI që përdorni personalisht.'
        }
    ],
    literacy: [
        {
            id: 'Q-003',
            type: 'mcq',
            question: 'Cili është një nga rreziqet më të mëdha për të rinjtë gjatë përdorimit të AI pa udhëzim?',
            options: [
                'Mësimi i shpejtë i aftësive të reja',
                'Pranimi i "halucinacioneve" të AI si fakte të sakta',
                'Zvogëlimi i kohës para ekranit',
                'Socializimi i tepërt me bashkëmoshatarët'
            ],
            answer: 1
        },
        {
            id: 'Q-004',
            type: 'mcq',
            question: 'Çfarë do të thotë vlerësimi kritik i përgjigjeve nga AI?',
            options: [
                'Besimi i verbër në çdo tekst të gjeneruar',
                'Kontrollimi i fakteve dhe njohja e paragjykimeve',
                'Kopjimi i përgjigjeve direkt në një raport',
                'Injorimi i AI si mjet'
            ],
            answer: 1
        },
        {
            id: 'Q-018',
            type: 'mcq',
            question: 'Çfarë përfaqëson "Flluska e filtrit" (Filter Bubble)?',
            options: [
                'Program për pastrimin e viruseve',
                'Izolimi i përdoruesit në besimet e veta përmes algoritmeve',
                'Efekt special në video lojëra',
                'Metodë për kërkim më të shpejtë të imazheve'
            ],
            answer: 1
        },
        {
            id: 'Q-019',
            type: 'mcq',
            question: 'Pse është e rrezikshme të jepni të dhëna personale në chatbot-e?',
            options: [
                'Të dhënat mund të përdoren për trajnim ose të bëhen publike',
                'AI do të ndalojë së punuari',
                'Kompjuteri do të riniset (restart)',
                'Nuk është e rrezikshme, të dhënat janë gjithmonë 100% private'
            ],
            answer: 0
        },
        {
            id: 'Q-020',
            type: 'open',
            question: 'Shkruani 3 pyetje që duhet t\'i bëni vetes para se t\'i besoni një përgjigjeje nga AI.'
        }
    ],
    definition: [
        {
            id: 'Q-005',
            type: 'mcq',
            question: 'Si ndryshon AI fundamentalisht nga mendja njerëzore?',
            options: [
                'Ajo ka emocione dhe intuitë',
                'Përdor llogaritje masive matematike dhe modele',
                'Ajo është një sistem biologjik',
                'Nuk ka asnjë ndryshim'
            ],
            answer: 1
        },
        {
            id: 'Q-006',
            type: 'mcq',
            question: 'Çfarë përfaqëson "Testi i Turing-ut"?',
            options: [
                'Test për shpejtësinë e procesorit të kompjuterit',
                'Metodë për të kontrolluar nëse një makinë shfaq sjellje inteligjente',
                'Test për kapacitetin e baterisë së robotëve',
                'Program mbrojtës nga viruset'
            ],
            answer: 1
        },
        {
            id: 'Q-021',
            type: 'mcq',
            question: 'Çfarë është një "Rrjetë neurale" në kontekst të AI?',
            options: [
                'Trur biologjik në një vazo',
                'Sistem kompjuterik i frymëzuar nga struktura e trurit',
                'Lidhje interneti midis dy kompjuterëve',
                'Lloj i kabllit optik'
            ],
            answer: 1
        },
        {
            id: 'Q-022',
            type: 'mcq',
            question: 'Çfarë do të thotë termi "Deep Learning"?',
            options: [
                'Të mësuarit në ujë të thellë',
                'Rrjeta neurale komplekse me shumë shtresa',
                'Leximi i librave në bibliotekë',
                'Ruajtja automatike e skedarëve'
            ],
            answer: 1
        },
        {
            id: 'Q-023',
            type: 'open',
            question: 'Shpjegoni dallimin midis një algoritmi dhe inteligjencës artificiale.'
        }
    ],
    functionality: [
        {
            id: 'Q-007',
            type: 'mcq',
            question: 'Çfarë është "AI e Ngushtë" (Narrow AI)?',
            options: [
                'AI që mund të kryejë çdo detyrë njerëzore',
                'AI e specializuar për një detyrë specifike (p.sh. shah)',
                'AI që është e vetëdijshme për veten',
                'AI që nuk përdor internetin'
            ],
            answer: 1
        },
        {
            id: 'Q-008',
            type: 'mcq',
            question: 'Çfarë është "AI Gjenerative"?',
            options: [
                'AI që mbledh vetëm të dhëna',
                'AI që mund të krijojë përmbajtje të re (tekst, imazhe, kod)',
                'Një version i vjetër i makinës llogaritëse',
                'Një sistem për fikjen automatike të kompjuterëve'
            ],
            answer: 1
        },
        {
            id: 'Q-024',
            type: 'mcq',
            question: 'Çfarë janë "Large Language Models" (LLM)?',
            options: [
                'Modele për parashikimin e motit',
                'Modele AI të trajnuara në sasi masive teksti',
                'Altoparlantë të mëdhenj për koncert',
                'Përkthyes për gjuhë të huaja'
            ],
            answer: 1
        },
        {
            id: 'Q-025',
            type: 'mcq',
            question: 'Çfarë është "Trajnimi i të dhënave" (Data Training)?',
            options: [
                'Proces ushtrimi në palestër',
                'Proces ku AI mëson nga shembujt e dhënë',
                'Renditja e dosjeve në kompjuter',
                'Fshirja e skedarëve të vjetër'
            ],
            answer: 1
        },
        {
            id: 'Q-026',
            type: 'open',
            question: 'Pse modelet e AI ndonjëherë bëjnë gabime me matematikë të thjeshtë?'
        }
    ],
    history: [
        {
            id: 'Q-009',
            type: 'mcq',
            question: 'Cili vit konsiderohet si lindja e inteligjencës artificiale (konferenca në Dartmouth)?',
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
            type: 'mcq',
            question: 'Çfarë përfaqësojnë "Dimrat e AI"?',
            options: [
                'Periudha kur AI përdorej për klimatologji',
                'Periudha të reduktimit të financimit dhe interesit për kërkimin e AI',
                'Sezone kur sistemet AI punonin më ngadalë',
                'Turne speciale në programim'
            ],
            answer: 1
        },
        {
            id: 'Q-027',
            type: 'mcq',
            question: 'Cili kompjuter mposhti Garry Kasparov në shah në vitin 1997?',
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
            type: 'mcq',
            question: 'Kush konsiderohet babai i AI dhe i informatikës moderne?',
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
            type: 'open',
            question: 'Shkruani një ngjarje historike që ndryshoi perceptimin për AI.'
        }
    ],
    prompts: [
        {
            id: 'Q-011',
            type: 'mcq',
            question: 'Çfarë do të thotë shkurtesa CPTC në inxhinierinë e prompteve?',
            options: [
                'Context, Persona, Task, Constraints',
                'Computer, Programming, Testing, Coding',
                'Creativity, Power, Technical, Clear',
                'Communication, Protocol, Technology, Center'
            ],
            answer: 0
        },
        {
            id: 'Q-012',
            type: 'open',
            question: 'Shpjegoni pse është e rëndësishme të përcaktoni një "Personë" (Persona) në prompt.'
        },
        {
            id: 'Q-030',
            type: 'mcq',
            question: 'Çfarë arrihet duke shtuar "Kontekst" në prompt?',
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
            type: 'mcq',
            question: 'Çfarë do të thotë "Few-Shot Prompting"?',
            options: [
                'Shkrimi i një prompti me shumë pak fjalë',
                'Dhënia e disa shembujve AI-së para se të kërkojmë detyrën përfundimtare',
                'Shtypja e shpejtë e tastit Enter',
                'Fshirja e promptit pas shkrimit të tij'
            ],
            answer: 1
        },
        {
            id: 'Q-032',
            type: 'open',
            question: 'Krijoni një prompt duke përdorur strukturën CPTC për një temë sipas dëshirës suaj.'
        }
    ],
    agents: [
        {
            id: 'Q-013',
            type: 'mcq',
            question: 'Cili është ndryshimi kryesor midis një Chatbot-i dhe një Agjenti AI?',
            options: [
                'Agjenti vetëm u përgjigjet pyetjeve',
                'Agjenti mund të përdorë mjete dhe të ekzekutojë detyra në mënyrë autonome',
                'Chatbot-i është shumë më i zgjuar se agjenti',
                'Nuk ka asnjë ndryshim'
            ],
            answer: 1
        },
        {
            id: 'Q-014',
            type: 'mcq',
            question: 'Çfarë do të thotë "Memory" (Memoria) për Agjentët AI?',
            options: [
                'Sa peshon fajlli i aplikacionit',
                'Aftësia për të mbajtur mend interaksionet e kaluara dhe kontekstin',
                'Memoria RAM e instaluar në server',
                'Aftësia për të fshirë të gjitha të dhënat pas 5 minutave'
            ],
            answer: 1
        },
        {
            id: 'Q-033',
            type: 'mcq',
            question: 'Çfarë është "Arsyetimi" (Reasoning) për agjentët AI?',
            options: [
                'Aftësia për të përdorur logjikën për të zgjidhur probleme komplekse në hapa',
                'Aftësia e agjentit për t\'u zemëruar',
                'Kërkimi i të dhënave në Wikipedia',
                'Korrigjimi automatik i gabimeve gramatikore'
            ],
            answer: 0
        },
        {
            id: 'Q-034',
            type: 'mcq',
            question: 'Çfarë përfaqëson "Planifikimi" (Planning) për Agjentët AI?',
            options: [
                'Dizajnimi i mobiljeve',
                'Ndarja e një qëllimi të madh në hapa më të vegjël të ekzekutueshëm',
                'Ruajtja e dokumenteve në cloud',
                'Dërgimi i e-maileve'
            ],
            answer: 1
        },
        {
            id: 'Q-035',
            type: 'open',
            question: 'Përshkruani një situatë ku një Agjent AI do të ishte më i dobishëm se një motor kërkimi i zakonshëm.'
        }
    ],
    glossary: [
        {
            id: 'Q-036',
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
            type: 'mcq',
            question: 'Çfarë përfaqëson "Backpropagation"?',
            options: [
                'Kthimi i skedarëve nga koshi i plehrave',
                'Një metodë për trajnimin e rrjetave neurale duke korrigjuar gabimet',
                'Një lloj lidhjeje interneti',
                'Bërja e kopjeve të diskut'
            ],
            answer: 1
        },
        {
            id: 'Q-038',
            type: 'open',
            question: 'Përcaktoni termin "Bias" (Anshmëria) në të dhënat e AI.'
        }
    ],
    roadmap: [
        {
            id: 'Q-039',
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
            type: 'open',
            question: 'Si mendoni se do ta ndryshojë AI arsimin në 10 vitet e ardhshme?'
        }
    ]
};
