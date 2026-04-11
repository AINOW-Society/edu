var embeddedPromptsData = {
  teachers: [
    {
      subcategory: "primary_lower",
      subject: "Gjuhë Shqipe",
      title: "Lojë me fjalë për fillestarë",
      prompt: "Vepro si një mësues kreativ i shkollës fillore. Krijo një lojë interaktive me fjalë për nxënësit e klasës së dytë për t'i ndihmuar ata të mësojnë sinonimet dhe antonimet. Përfshi 5 shembuj të thjeshtë dhe udhëzime se si ta luajmë këtë lojë në klasë për 10 minuta.",
      tags: ["gjuhë", "lojëra", "krijimtari"]
    },
    {
      subcategory: "primary_upper",
      subject: "Histori",
      title: "Udhëtim në kohë - Rilindja",
      prompt: "Dua të krijoj një skenar zhytës për nxënësit e klasës së 8-të. Shkruaj një hyrje leksioni ku nxënësit 'udhëtojnë në kohë' në periudhën e Rilindjes Kombëtare Shqiptare. Përshkruaj atmosferën dhe kërkoju atyre të marrin rolin e një gazetari të asaj kohe duke përgatitur 3 pyetje për figurat historike.",
      tags: ["histori", "skenar", "ndërveprim"]
    },
    {
      subcategory: "secondary",
      subject: "Matematikë",
      title: "Zgjidhje problemesh nga bota reale",
      prompt: "Krijo 3 probleme matematikore të avancuara (nivel i shkollës së mesme) që përdorin algjebrën dhe gjeometrinë për të llogaritur koston e ndërtimit të një parku të vogël lojërash. Problemet duhet të përfshijnë koston e materialeve, sipërfaqen dhe volumin. Jepni zgjidhjet hap pas hapi veçmas për mësuesin.",
      tags: ["matematikë", "aplikim", "zgjidhje"]
    },
    {
      subcategory: "all",
      subject: "Gjithëpërfshirja",
      title: "Përshtatja e materialit (IOP)",
      prompt: "Vepro si një ekspert i edukimit special. Më ndihmo të përshtat një tekst të gjatë leximi nga lënda e gjeografisë në 3 nivele të ndryshme vështirësie për nxënësit me Plan Individual të Arsimit (IOP). Nivel 1: Përmbledhje me pika. Nivel 2: Tekst i thjeshtuar me fjalor të theksuar. Nivel 3: Teksti origjinal me pyetje drejtuese.",
      tags: ["IOP", "gjithëpërfshirje", "përshtatje"]
    },
    {
      subcategory: "secondary",
      subject: "Vlerësimi",
      title: "Krijimi i testit me zgjedhje të shumëfishtë",
      prompt: "Gjenero një test me 10 pyetje me zgjedhje të shumëfishtë rreth bazave të biologjisë qelizore për gjimnazin. Çdo pyetje duhet të ketë 4 opsione, vetëm një të saktë. Pas testit, gjenero një çelës përgjigjesh ku shpjegohet shkurtimisht pse opsioni i saktë është i vërtetë.",
      tags: ["vlerësim", "test", "biologji"]
    },
    {
      subcategory: "primary_lower",
      subject: "Dituri Natyre",
      title: "Eksperiment i thjeshtë me ujë",
      prompt: "Vepro si një mësues i shkencave për fëmijë. Përshkruaj një eksperiment shumë të thjeshtë dhe të sigurt për nxënësit e klasës së 3-të duke përdorur vetëm ujë, kripë dhe një vezë për të shpjeguar densitetin. Shpjegoje procesin si një histori magjike në gjuhën shqipe, në mënyrë që fëmijët të mbeten të fokusuar.",
      tags: ["dituri natyre", "eksperiment", "argëtim"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukim Qytetar",
      title: "Rregullat e klasës",
      prompt: "Ndihmo në hartimin e një liste me 5 rregulla të arta të klasës për nxënësit e klasës së parë. Rregullat nuk duhet të fillojnë me fjalën 'Mos' (psh. Mos bërtit), por duhet të formulohen në mënyrë pozitive dhe inkurajuese (psh. Ne flasim me zë të ulët). Përfshi një ide për një lojë të shkurtër se si t'i praktikojmë këto rregulla ditën e parë të shkollës.",
      tags: ["rregulla", "edukim qytetar", "menaxhim"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjeografi",
      title: "Udhërrëfyes turistik për qytetin",
      prompt: "Krijo një detyrë projektuese për klasën e 6-të ku nxënësit duhet të veprojnë si udhërrëfyes turistikë për qytetin e tyre (ose një qytet shqiptar sipas zgjedhjes). Harta e projektit duhet të përfshijë 3 pika historike, 1 traditë lokale dhe një prezantim gojor prej 2 minutash. Krijo një rubrikë të thjeshtë vlerësimi për këtë detyrë.",
      tags: ["gjeografi", "projekt", "prezantim"]
    },
    {
      subcategory: "primary_lower",
      subject: "Matematikë",
      title: "Lojëra matematikore me thyesa",
      prompt: "Vepro si një mësues i dashur matematike për klasën e 4-të. Më krijo 3 lojëra interaktive në klasë për të shpjeguar thyesat e thjeshta (si 1/2, 1/4) duke përdorur objekte të përditshme (si çokollata ose pica). Përfshi pyetje kontrolli në fund të çdo loje.",
      tags: ["matematikë", "thyesa", "lojëra"]
    },
    {
      subcategory: "secondary",
      subject: "Fizikë",
      title: "Shpjegimi i ligjeve të Njutonit",
      prompt: "Unë jam mësues fizike në gjimnaz. Më shkruaj një shpjegim prej 500 fjalësh të 3 Ligjeve të Njutonit duke përdorur ekskluzivisht shembuj nga sporti i futbollit dhe basketbollit. Teksti duhet të jetë tërheqës për adoleshentët dhe të përfshijë një detyrë të shkurtër praktike.",
      tags: ["fizikë", "njutoni", "sport"]
    },
    {
      subcategory: "all",
      subject: "Art Figurativ",
      title: "Analiza e ngjyrave",
      prompt: "Gjenero një plan mësimor prej 45 minutash mbi 'Psikologjinë e Ngjyrave' në art. Detyra kryesore duhet t'u kërkojë nxënësve të analizojnë pikturën 'Nata me Yje' të Van Gogh-ut dhe se si ngjyrat ndikojnë në emocionet tona. Përfshi edhe një rubrikë vlerësimi.",
      tags: ["art", "ngjyrat", "emocione"]
    },
    {
      subcategory: "primary_upper",
      subject: "Biologji",
      title: "Qeliza Bimore vs Shtazore",
      prompt: "Krijo një tabelë krahasuese detajuara mes qelizës bimore dhe asaj shtazore për nxënësit e klasës së 7-të. Pas tabelës, shkruaj një analogji të thjeshtë (p.sh. qeliza si një qytet i vogël) për të shpjeguar funksionin e mitokondrisë, bërthamës dhe membranës.",
      tags: ["biologji", "qeliza", "krahasim"]
    },
    {
      subcategory: "secondary",
      subject: "Histori",
      title: "Lufta e Dytë Botërore - Roli Lokal",
      prompt: "Vepro si një historian objektiv. Përgatit një material leximi prej një faqeje për nxënësit e shkollës së mesme rreth rezistencës antifashiste në Ballkan gjatë Luftës së Dytë Botërore. Më pas formulo 4 pyetje për diskutim në klasë që nxisin mendimin kritik mbi pasojat e luftës.",
      tags: ["histori", "lufta e dytë", "lexim"]
    },
    {
      subcategory: "secondary",
      subject: "Kimi",
      title: "Eksperiment i Sigurt Acid-Bazë",
      prompt: "Dua të realizoj një eksperiment kimik argëtues dhe 100% të sigurt në klasë me nxënësit e vitit të parë, për të demonstruar reaksionet acid-bazë. Më përshkruaj procedurën duke përdorur vetëm materiale që gjenden në shtëpi (si soda e bukës dhe uthulla) dhe shpjego fenomenin shkencor pas tij.",
      tags: ["kimi", "eksperiment", "siguri"]
    },
    {
      subcategory: "primary_lower",
      subject: "Muzikë",
      title: "Mësimi i Ritmit",
      prompt: "Krijo një aktivitet ritmik prej 15 minutash për fëmijët e klasës së dytë ku ata përdorin vetëm trupin e tyre (përplasje duarsh, këmbësh) për të kuptuar ritmet e thjeshta 4/4. Udhëzimet duhet të jenë shumë të qarta për mësuesin që do të drejtojë lojën.",
      tags: ["muzikë", "ritëm", "aktivitet"]
    },
    {
      subcategory: "all",
      subject: "Edukimi Fizik",
      title: "Lojëra ekipore për bashkëpunim",
      prompt: "Jam një mësues i edukimit fizik. Më sugjero 3 lojëra dinamike ekipore që nuk kërkojnë top ose pajisje të veçanta sportive, dhe që kanë si qëllim kryesor zhvillimin e aftësive të komunikimit dhe bashkëpunimit mes nxënësve.",
      tags: ["sport", "bashkëpunim", "ekip"]
    },
    {
      subcategory: "secondary",
      subject: "Letërsi",
      title: "Analiza e poezisë së Naim Frashërit",
      prompt: "Përgatit një plan detyre për nxënësit e gjimnazit ku ata duhet të bëjnë një analizë të thellë të figurave letrare (metaforë, krahasim, hiperbolë) në një poezi të Naim Frashërit. Përfshi një shembull të vogël se si duhet të duket analiza e tyre përfundimtare.",
      tags: ["letërsi", "poezi", "analizë"]
    },
    {
      subcategory: "primary_upper",
      subject: "Informatikë",
      title: "Siguria në Internet",
      prompt: "Vepro si një ekspert i sigurisë kibernetike. Shkruaj një udhëzues të thjeshtë me 5 pika për nxënësit e klasës së 6-të se si të mbrojnë fjalëkalimet e tyre dhe pse nuk duhet të flasin me të panjohur në rrjetet sociale. Gjuha duhet të jetë jo-frikësuese por edukative.",
      tags: ["informatikë", "siguri", "internet"]
    },
    {
      subcategory: "all",
      subject: "Edukim Special",
      title: "Detyra për nxënës me ADHD",
      prompt: "Vepro si një psikolog edukimi. Më ofro 5 strategji praktike dhe përshtatje që mund të bëj në klasë për një nxënës që vuan nga ADHD (Çrregullimi i vëmendjes dhe hiperaktivitetit). Fokusohem te menaxhimi i kohës gjatë testeve dhe shmangia e shpërqendrimeve vizuale.",
      tags: ["adhd", "edukim special", "strategji"]
    },
    {
      subcategory: "primary_upper",
      subject: "Ekologji",
      title: "Projekti i Riciklimit",
      prompt: "Harto një projekt një-mujor për klasën e 8-të me temë 'Riciklimi në Shkollën Tonë'. Ndaje projektin në 4 faza javore (Kërkimi, Planifikimi, Veprimi, Prezantimi) dhe përcakto se çfarë pritet si rezultat përfundimtar nga secili grup nxënësish.",
      tags: ["ekologji", "projekt", "natyra"]
    },
    {
      subcategory: "secondary",
      subject: "Edukimi Qytetar",
      title: "Simulim i zgjedhjeve demokratike",
      prompt: "Më ndihmo të organizoj një simulim të zgjedhjeve parlamentare brenda orës së edukimit qytetar. Shkruaj rolet për nxënësit (Kandidatë, Komisionerë, Votues, Gazetarë) dhe përshkruaj procedurën e votimit hap pas hapi.",
      tags: ["qytetari", "zgjedhje", "simulim"]
    },
    {
      subcategory: "primary_upper",
      subject: "Fizikë",
      title: "Eksperiment me Magnete",
      prompt: "Krijo një fletë pune (worksheet) për eksperimentin me fushën magnetike. Fleta duhet të ketë një hapësirë për hipotezën e nxënësit, udhëzimet se si të përdorin pluhurin e hekurit rreth magnetit, dhe 3 pyetje konkluzionesh.",
      tags: ["fizikë", "magnete", "fletë pune"]
    },
    {
      subcategory: "secondary",
      subject: "Gjuhë e Huaj (Anglisht)",
      title: "Përgatitje për Debat Letrar",
      prompt: "Gjenero 5 argumente 'Pro' dhe 5 argumente 'Kundër' në gjuhën angleze (niveli B2) për temën e debatit: 'A duhet të zëvendësohen librat fizikë plotësisht nga tabletat në shkolla?'.",
      tags: ["anglisht", "debat", "argumente"]
    },
    {
      subcategory: "secondary",
      subject: "Gjuhë Shqipe dhe Letërsi",
      title: "Ese argumentuese: Kadare",
      prompt: "Vepro si një mësues i gjuhës shqipe në gjimnaz. Më ndihmo të formuloj 3 tema për ese argumentuese bazuar në romanin 'Gjenerali i ushtrisë së vdekur' të Ismail Kadaresë. Temat duhet të nxisin mendimin kritik tek nxënësit për pasojat e luftës.",
      tags: ["letërsi", "ese", "kadare"]
    },
    {
      subcategory: "all",
      subject: "Kujdestaria e Klasës",
      title: "Fjalimi për mbledhjen me prindërit",
      prompt: "Vepro si një kujdestar klase. Shkruaj një fjalim hyrës 2-minutësh për mbledhjen e parë me prindërit në fillim të gjysmëvjetorit të dytë. Thekso rëndësinë e bashkëpunimit mes shkollës dhe familjes për suksesin e nxënësve, si dhe rregullat për mungesat e paarsyetuara.",
      tags: ["kujdestar", "prindër", "mbledhje"]
    },
    {
      subcategory: "primary_upper",
      subject: "Matematikë",
      title: "Probleme me përqindje - Jeta reale",
      prompt: "Krijo 4 probleme matematikore me përqindje për nxënësit e klasës së 7-të. Problemet le të jenë nga jeta e përditshme, si për shembull llogaritja e zbritjes në një dyqan rrobash ose llogaritja e TVSH-së. Ofro edhe zgjidhjet hap pas hapi.",
      tags: ["matematikë", "përqindje", "ushtrime"]
    },
    {
      subcategory: "primary_lower",
      subject: "Gjuhë Angleze",
      title: "Lojë me role: Në Restorant",
      prompt: "Si mësues i gjuhës angleze për fëmijët e klasës së 4-të, krijo një dialog të shkurtër (lojë me role) me temë 'Në restorant'. Dialogu duhet të jetë i thjeshtë, duke përfshirë fjalorin e ushqimeve dhe shprehjet bazë të mirësjelljes ('May I have...', 'Thank you').",
      tags: ["anglisht", "dialog", "fjalor"]
    },
    {
      subcategory: "secondary",
      subject: "Informatikë",
      title: "Siguria në Rrjetet Sociale",
      prompt: "Harto një plan mësimor prej 40 minutash për nxënësit e shkollës së mesme mbi rreziqet e ndarjes së informacioneve personale në TikTok dhe Instagram. Përfshi një diskutim të hapur prej 10 minutash me 3 pyetje provokuese rreth gjurmës digjitale (digital footprint).",
      tags: ["informatikë", "siguri", "internet"]
    },
    {
      subcategory: "primary_upper",
      subject: "Histori",
      title: "Kuizi për Ilirët",
      prompt: "Krijo një kuiz të shpejtë me 8 pyetje (e vërtetë/e gabuar) rreth fiseve ilire, mënyrës së tyre të jetesës dhe qyteteve kryesore, për klasën e 6-të. Më jep edhe një shpjegim të shkurtër me nga 1 fjali për secilën përgjigje të saktë.",
      tags: ["histori", "ilirët", "kuiz"]
    },
    {
      subcategory: "secondary",
      subject: "Kimi",
      title: "Mnemoteknika për Tabelën Periodike",
      prompt: "Jam mësues i kimisë. Më sugjero 5 teknika të kujtesës (mnemoteknika) zbavitëse ose fjali qesharake në gjuhën shqipe që do t'i ndihmojnë nxënësit e mi të mësojnë përmendësh elementet e grupit të parë dhe të dytë të tabelës periodike.",
      tags: ["kimi", "mbajtja mend", "tabela periodike"]
    },
    {
      subcategory: "primary_upper",
      subject: "Biologji",
      title: "Eksplorimi i Sistemit të Frymëmarrjes",
      prompt: "Përshkruaj rrugën që bën një molekulë oksigjeni nga hunda deri tek qelizat e gjakut, në formën e një tregimi tërheqës për një nxënës të klasës së 8-të. Përdor terma shkencorë (trakea, bronket, alveolat) por shpjegoja në mënyrë figurative.",
      tags: ["biologji", "frymëmarrja", "tregim"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukimi Muzikor",
      title: "Njohja e Instrumenteve Popullore",
      prompt: "Përgatit një aktivitet dëgjimi për nxënësit e klasës së 3-të. Shkruaj një përshkrim të thjeshtë dhe interesant për çiftelinë dhe tupanin (lodrën). Shto 2 pyetje që unë duhet t'ua bëj fëmijëve pasi ata të dëgjojnë tingullin e tyre në klasë.",
      tags: ["muzikë", "instrumente", "tradita"]
    },
    {
      subcategory: "all",
      subject: "Art Figurativ",
      title: "Projekti i Stinës së Vjeshtës",
      prompt: "Dua të bëj një orë kreative arti me temë 'Ngjyrat e Vjeshtës'. Shkruaj një udhëzim hap pas hapi për një punim dore ku nxënësit përdorin gjethe të thata të mbledhura në oborrin e shkollës, letër dhe ngjyra uji (akuarel). Cila është porosia që duhet t'u jap në fund?",
      tags: ["art", "vjeshta", "kreativitet"]
    },
    {
      subcategory: "secondary",
      subject: "Fizikë",
      title: "Zbatimi i Ligjit të Arkimedit",
      prompt: "Krijo një fletë pune (worksheet) për gjimnazistët lidhur me Forcën e Arkimedit. Fleta e punës duhet të ketë 2 shembuj të llogaritur plotësisht (p.sh., një anije në det dhe një tullumbace në ajër) dhe 2 detyra që nxënësit t'i zgjidhin vetë gjatë orës.",
      tags: ["fizikë", "arkimedi", "ushtrime"]
    },
    {
      subcategory: "primary_upper",
      subject: "Edukim Qytetar",
      title: "Debat: Të Drejtat dhe Detyrimet",
      prompt: "Vepro si një moderator debatesh. Ndihmo nxënësit e klasës së 8-të të zhvillojnë një debat mbi temën: 'A duhet të kenë nxënësit të drejtë të zgjedhin lëndët e tyre që në shkollë fillore?'. Ndaje klasën në dy grupe dhe jepu nga 3 argumente kryesore pro dhe kundër për t'i nisur.",
      tags: ["qytetari", "debat", "të drejtat"]
    },
    {
      subcategory: "secondary",
      subject: "Gjeografi",
      title: "Ndryshimet Klimatike - Projekt",
      prompt: "Përgatit një detyrë për projekt grupor rreth Ndryshimeve Klimatike dhe ndikimit të tyre në rajonin e Ballkanit. Specifiko 4 pika që çdo grup duhet të përfshijë në prezantimin e tyre në PowerPoint (Shkaqet, Pasojat lokale, Masat parandaluese, Detyra jonë qytetare).",
      tags: ["gjeografi", "klima", "projekt"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukatë Fizike",
      title: "Lojëra Lëvizore Tradicionale",
      prompt: "Si mësues i edukimit fizik për ciklin e ulët, sugjero 2 lojëra lëvizore tradicionale (si p.sh. Rrjeta e merimangës ose E kapura) që ndihmojnë në zhvillimin e shkathtësive motorike dhe punës në grup. Përshkruaj rregullat shkurt dhe qartë.",
      tags: ["sport", "lojëra", "zhvillim"]
    },
    {
      subcategory: "primary_lower",
      subject: "Matematikë",
      title: "Gjuetia e Formave Gjeometrike",
      prompt: "Roli: Mësues matematike krijues. Konteksti: Nxënësit e klasës së 2-të po mësojnë format gjeometrike 2D dhe 3D. Detyra: Krijo një lojë 'Gjuetia e Formave' (Scavenger Hunt) për në klasë. Kufizimet: Përdor vetëm objekte të zakonshme që gjenden në një klasë shkollore (psh. dërrasa, goma, ora). Sigurohu që gjuha të jetë entuziaste.",
      tags: ["matematikë", "lojë", "gjeometri"]
    },
    {
      subcategory: "primary_lower",
      subject: "Gjuhë Shqipe",
      title: "Praktikë: Shkrimi i një letre",
      prompt: "Roli: Mësues i gjuhës shqipe. Konteksti: Klasa e 3-të po mëson strukturën e një letre personale. Detyra: Shkruaj një shembull të një letre të shkurtër drejtuar gjyshes, nga këndvështrimi i një fëmije. Kufizimet: Përdor fjalor të thjeshtë, thekso elementet kryesore (data, përshëndetja, trupi, mbyllja) me shkronja të zeza.",
      tags: ["gjuhë", "shkrim", "letër"]
    },
    {
      subcategory: "primary_upper",
      subject: "Dituri Natyre",
      title: "Ditari i një Shisheje Plastike",
      prompt: "Roli: Shkrimtar për fëmijë / Ambientalist. Konteksti: Klasa e 4-të po mëson për riciklimin dhe ndotjen. Detyra: Trego një histori të shkurtër nga këndvështrimi i një shisheje plastike të hedhur në oqean, e cila ëndërron të riciklohet. Kufizimet: Maksimumi 200 fjalë. Përdor gjuhë emocionale për të nxitur ndjeshmërinë ekologjike.",
      tags: ["natyra", "riciklimi", "ekologji"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukim Qytetar",
      title: "Rregullat e Trafikut me Ngjyra",
      prompt: "Roli: Polic i trafikut miqësor. Konteksti: Nxënësit e klasës së 1-rë. Detyra: Shpjego rregullat bazë të kalimit të rrugës dhe kuptimin e semaforit. Kufizimet: Përdor ngjyrat e semaforit si pikënisje për rregullat (E Kuqe = Ndalo dhe Numëro deri në 3). Formuloje si një lojë 'E vërtetë apo e Gabuar'.",
      tags: ["qytetari", "rregulla", "siguria"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukimi Muzikor",
      title: "Kënga e Stinëve",
      prompt: "Roli: Kompozitor vjershash për fëmijë. Konteksti: Klasa e 2-të, mësimi i stinëve të vitit. Detyra: Krijo një këngë ritmike me rima (AABB) për të katër stinët. Kufizimet: Saktësisht 4 strofa (nga një për çdo stinë). Fjalët duhet të jenë shumë të lehta për t'u mësuar përmendësh.",
      tags: ["muzikë", "këngë", "stinët"]
    },
    {
      subcategory: "primary_upper",
      subject: "Histori",
      title: "Ditari i një Ushtari Romak",
      prompt: "Korniza CPTC. Persona: Ushtar Romak i lashtësisë. Konteksti: Ora e historisë për klasën e 6-të, Perandoria Romake. Detyra: Shkruaj një faqe ditari për jetën tënde të përditshme në një kamp ushtarak. Kufizimet: Përdor të paktën 3 terma historikë (psh. legjion, gladius, centurion) dhe shpjegoji natyrshëm brenda tekstit.",
      tags: ["histori", "romakët", "ditar"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjeografi",
      title: "Ekspedita në Sahara",
      prompt: "Roli: Eksplorues i famshëm gjeografik. Konteksti: Nxënësit e klasës së 7-të po mësojnë për kontinentin e Afrikës. Detyra: Përshkruaj një udhëtim imagjinar 2-ditor nëpër shkretëtirën e Saharasë. Kufizimet: Përfshi detaje reale gjeografike si klima e thatë, oazet dhe dunat e rërës. Ndaje tekstin me nëntituj të vegjël.",
      tags: ["gjeografi", "afrika", "ekspeditë"]
    },
    {
      subcategory: "primary_upper",
      subject: "Fizikë",
      title: "Graviteti i shpjeguar thjesht",
      prompt: "Roli: Isak Njutoni. Konteksti: Hyrje në fizikë për klasën e 8-të. Detyra: Shpjego se si funksionon forca e gravitetit duke përdorur shembullin klasik të mollës që bie nga pema. Kufizimet: Përdor një gjuhë bisedore dhe miqësore. Mos përdor asnjë formulë matematike të komplikuar, vetëm logjikën prapa fenomenit.",
      tags: ["fizikë", "graviteti", "njutoni"]
    },
    {
      subcategory: "secondary",
      subject: "Biologji",
      title: "Mbrojtja Imunitare (Histori Aksioni)",
      prompt: "Roli: Rruazë e Bardhë e Gjakut (Komandant ushtrie). Konteksti: Gjimnaz, mësimi i Sistemit Imunitar. Detyra: Përshkruaj procesin se si trupi njeriut lufton një virus (infeksion) në formën e një tregimi aksioni epik. Kufizimet: Përfshi termat: antigjen, antitrup, makrofag. Mbaje tonin dramatik por shkencërisht të saktë.",
      tags: ["biologji", "imuniteti", "tregim"]
    },
    {
      subcategory: "secondary",
      subject: "Informatikë",
      title: "Siguria e Fjalëkalimeve (Analizë)",
      prompt: "Roli: Haker Etik (White Hat). Konteksti: Gjimnazistët shpesh përdorin fjalëkalime të dobëta. Detyra: Shpjego në mënyrë teknike por të kuptueshme pse fjalëkalimi '123456' ose 'emri123' thyhet në pak sekonda nga programet kompjuterike. Kufizimet: Ofro një metodë me 3 hapa (në formë liste) për të krijuar një fjalëkalim të pathyeshëm.",
      tags: ["informatikë", "siguri", "haker"]
    },
    {
      subcategory: "secondary",
      subject: "Letërsi",
      title: "Analizë Letrare: Migjeni",
      prompt: "Roli: Kritik Letrar Akademik. Konteksti: Nxënësit e gjimnazit po analizojnë letërsinë shqipe të viteve 30. Detyra: Bëj një analizë të shkurtër por të thellë të poemës 'Të lindet njeriu' nga Migjeni. Kufizimet: Fokusohesh te motivi i mjerimit social dhe inovacioni i vargut të lirë. Përdor një gjuhë të pasur letrare.",
      tags: ["letërsi", "migjeni", "ese"]
    },
    {
      subcategory: "secondary",
      subject: "Kimi",
      title: "Monologu i Atomit të Karbonit",
      prompt: "Roli: Atomi i Karbonit. Konteksti: Gjimnaz, hyrje në Kiminë Organike. Detyra: Mbaj një fjalim/monolog para nxënësve duke u mburrur pse je elementi më i rëndësishëm në univers për krijimin e jetës. Kufizimet: Përmend vetinë e krijimit të 4 lidhjeve kovalente dhe zinxhirëve të gjatë. Përdor humor shkencor.",
      tags: ["kimi", "karboni", "organike"]
    },
    {
      subcategory: "secondary",
      subject: "Matematikë",
      title: "Zbatimi i Trigonometrisë",
      prompt: "Roli: Inxhinier Civil / Arkitekt. Konteksti: Gjimnaz, kapitulli i Trigonometrisë dhe Teoremës së Pitagorës. Detyra: Shpjego një situatë reale se si e përdor matematikën për të llogaritur pjerrësinë e një çatie ose lartësinë e një ndërtese. Kufizimet: Ofro një problem me numra konkretë (psh. trekëndëshi 3, 4, 5) dhe zgjidhjen e tij.",
      tags: ["matematikë", "trigonometri", "inxhinieri"]
    },
    {
      subcategory: "secondary",
      subject: "Ekonomi",
      title: "Buxheti Personal 50/30/20",
      prompt: "Roli: Këshilltar Financiar. Konteksti: Maturantët që përgatiten për jetën studentore. Detyra: Krijo një shembull konkret të një buxheti mujor për një student që ka të ardhura/xhepaxhi prej 15,000 denarësh. Kufizimet: Zbato rregullin 50/30/20 (Nevojat, Dëshirat, Kursimet). Përdor një tabelë për të ndarë shpenzimet vizualisht.",
      tags: ["ekonomi", "buxheti", "financa"]
    },
    {
      subcategory: "secondary",
      subject: "Sociologji",
      title: "Pabarazia Sociale - Pyetje Debati",
      prompt: "Roli: Profesor i Sociologjisë. Konteksti: Gjimnaz, tema e pabarazisë sociale. Detyra: Gjenero 3 pyetje debati provokuese dhe të thella rreth ndikimit të pasurisë në shanset për arsimim të lartë. Kufizimet: Pyetjet duhet të jenë të hapura, mos përfshi përgjigjet e sakta. Shto një skenar rasti (case study) të shkurtër si hyrje.",
      tags: ["sociologji", "debat", "shoqëri"]
    },
    {
      subcategory: "all",
      subject: "Edukim Special",
      title: "Përshtatja për Nxënësit e Verbër",
      prompt: "Korniza CPTC. Persona: Ekspert i Inkluzionit dhe Defektolog. Konteksti: Kam një nxënës të verbër/me dëmtime të rënda në shikim në klasën time të historisë. Detyra: Më sugjero 5 strategji se si ta bëj orën e mësimit më auditive dhe të prekshme (tactile). Kufizimet: Jep vetëm strategji praktike që nuk kërkojnë buxhet financiar nga shkolla.",
      tags: ["inkluzion", "verbëri", "strategji"]
    },
    {
      subcategory: "all",
      subject: "Menaxhimi i Klasës",
      title: "Teknika Jo-Verbale për Vëmendje",
      prompt: "Roli: Mësues Mentor me 30 vite përvojë. Konteksti: Klasa është ekstremisht e zhurmshme sapo kthehet nga pushimi i madh. Detyra: Më ofro 3 teknika efektive JO-verbale për të rikthyer qetësinë dhe vëmendjen e nxënësve brenda 60 sekondave. Kufizimet: Ndalohet rreptësisht përdorimi i ngritjes së zërit ose bërtitjes.",
      tags: ["menaxhim", "disiplina", "këshilla"]
    },
    {
      subcategory: "all",
      subject: "Vlerësimi",
      title: "Rubrika e Origjinalitetit në Art",
      prompt: "Roli: Specialist i Vlerësimit të Kurrikulës. Konteksti: Mësues i artit që vlerëson një projekt pikture të lirë. Detyra: Krijo një rubrikë vlerësimi të fokusuar KRYESISHT tek origjinaliteti, përpjekja dhe shprehja e emocioneve, jo vetëm te talenti teknik. Kufizimet: Paraqite si një Tabelë Markdown me 4 nivele (Shkëlqyeshëm, Mirë, Bazik, Për t'u përmirësuar).",
      tags: ["vlerësim", "art", "rubrikë"]
    },
    {
      subcategory: "secondary",
      subject: "Gjenetikë",
      title: "Rrjeta e Punetit (Punnett Square)",
      prompt: "Roli: Biolog/Gjenetist. Konteksti: Gjimnaz, trashëgimia gjenetike. Detyra: Krijo 3 ushtrime praktike me Rrjetën e Punetit (Punnett Square) për ngjyrën e syve (kombinime alelesh dominante dhe recesive). Kufizimet: Jep fillimisht vetëm problemet. Shpjego zgjidhjet dhe përqindjet në një seksion të ndarë 'Çelësi i Përgjigjeve'.",
      tags: ["biologji", "gjenetikë", "ushtrime"]
    },
    {
      subcategory: "secondary",
      subject: "Histori",
      title: "Rënia e Murit të Berlinit",
      prompt: "Roli: Qytetar gjerman që dëshmoi Rënien e Murit të Berlinit. Konteksti: Gjimnaz, Lufta e Ftohtë. Detyra: Përshkruaj emocionet, atmosferën dhe zhurmat e asaj nate historike në nëntor 1989 si një përjetim i dorës së parë. Kufizimet: Mbaje tonin personal dhe empatik. Gjuha të jetë frymëzuese mbi konceptin e lirisë.",
      tags: ["histori", "berlini", "dëshmi"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjuhë Angleze",
      title: "Dialogu i Drejtimeve rrugore",
      prompt: "Roli: Turist anglez i humbur në Tiranë/Shkup. Konteksti: Klasa e 6-të, tema e drejtimeve rrugore (Giving directions). Detyra: Krijo një dialog interaktiv ku unë (nxënësi) duhet të të ndihmoj të gjesh rrugën për në Muzeun Kombëtar. Kufizimet: Fjalori duhet të jetë në nivelin A2 (Go straight, turn left, next to).",
      tags: ["anglisht", "dialog", "turist"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukatë Fizike",
      title: "Lojë Koordinimi (Karriget Muzikore)",
      prompt: "Roli: Trajner argëtues. Konteksti: Klasa 3, zhvillimi i koordinimit dhe reflekseve. Detyra: Shpjego lojën klasike 'Karriget Muzikore' por shto një rregull të ri sportiv (psh. kur muzika ndalet, duhet të qëndrojnë në një këmbë para se të ulen). Kufizimet: Përdor fjali të shkurtra inkurajuese (Suksese! Jeni kampionë!).",
      tags: ["sport", "lojë", "koordinim"]
    },
    {
      subcategory: "secondary",
      subject: "Filozofi",
      title: "Koncepti i Mbinjeriut (Niçe)",
      prompt: "Roli: Filozofi Friedrich Nietzsche. Konteksti: Ora e filozofisë në gjimnaz. Detyra: U shpjego adoleshentëve konceptin tënd të 'Mbinjeriut' (Übermensch) si një ftesë për të tejkaluar vetveten dhe për të krijuar vlera të reja, larg turmës. Kufizimet: Mos përdor gjuhë tepër të rëndë akademike; lidhe atë me dëshirën e tyre për pavarësi.",
      tags: ["filozofi", "niçe", "ide"]
    },
    {
      subcategory: "secondary",
      subject: "Fizikë",
      title: "Teoria e Relativitetit (E=mc2)",
      prompt: "Roli: Albert Ajnshtajn. Konteksti: Gjimnaz. Detyra: U shpjego nxënësve Teorinë Speciale të Relativitetit dhe formulën E=mc2 duke përdorur analogjinë tënde të famshme të një treni në lëvizje ose një udhëtimi me shpejtësinë e dritës. Kufizimet: Maksimumi 3 paragrafë. Duhet të ngjallësh ndjenjën e mrekullisë shkencore.",
      tags: ["fizikë", "ajnshtajn", "relativiteti"]
    },
    {
      subcategory: "all",
      subject: "Muzikë",
      title: "Rregullat e Orkestrës / Korit",
      prompt: "Roli: Dirigjent i Korit të Shkollës. Konteksti: Fillimi i vitit shkollor. Detyra: Shkruaj 5 rregulla të arta për sjelljen e nxënësve gjatë provave muzikore (dëgjimi i njëri-tjetrit, harmonia, vëmendja te dirigjenti). Kufizimet: Formulo rregullat me doza të lehta humori muzikor, që nxënësit t'i mbajnë mend me dëshirë.",
      tags: ["muzikë", "rregulla", "kori"]
    },
    {
      subcategory: "primary_lower",
      subject: "Dituri Natyre",
      title: "Pjalmimi përmes Bletëve",
      prompt: "Roli: Një bletë punëtore e quajtur Mjalta. Konteksti: Klasa e 2-të, procesi i pjalmimit. Detyra: Tregoju fëmijëve se si e grumbullon nektarin nga lulet, si bëhet mjalti dhe si i ndihmon lulet të shumohen duke mbartur pjalmin. Kufizimet: Fjalor tejet i ëmbël, edukativ dhe i dashur për fëmijët e vegjël.",
      tags: ["natyra", "bletët", "tregim"]
    },
    {
      subcategory: "secondary",
      subject: "Gjeografi",
      title: "Tektonika e Pllakave",
      prompt: "Roli: Vullkanolog/Gjeolog. Konteksti: Gjimnaz, lëvizjet tektonike. Detyra: Shpjego dallimin thelbësor mes magmës (në brendësi të tokës) dhe llavës (kur del në sipërfaqe) duke përdorur shpërthimin historik të Vezuvit në Pompei si rast studimi. Kufizimet: Format shkencor me fakte të sakta gjeologjike.",
      tags: ["gjeografi", "vullkane", "tektonika"]
    },
    {
      subcategory: "secondary",
      subject: "Informatikë",
      title: "Dizajni UX/UI",
      prompt: "Roli: Dizajner i lartë UX/UI. Konteksti: Nxënësit e gjimnazit po mësojnë bazat e krijimit të uebfaqeve. Detyra: Shpjego 3 parimet bazë të një dizajni miqësor për përdoruesin (User Experience). Kufizimet: Përdor analogjinë e 'organizimit të një dhome gjumi' për të shpjeguar se si navigimi në ueb duhet të jetë intuitiv.",
      tags: ["informatikë", "ux", "dizajn"]
    },
    {
      subcategory: "primary_upper",
      subject: "Histori",
      title: "Ndërtimi i Piramidave",
      prompt: "Roli: Faraon i Egjiptit të Lashtë (Keopsi). Konteksti: Klasa e 6-të. Detyra: Përshkruaj me madhështi procesin inxhinierik të ndërtimit të piramidës tënde, duke folur për rëndësinë e lumit Nil dhe sfidat e punëtorëve. Kufizimet: Tregoje si një rrëfim gojor i pasur me mistere të lashtësisë.",
      tags: ["histori", "egjipti", "piramidat"]
    },
    {
      subcategory: "all",
      subject: "Art Figurativ",
      title: "Ngjyrat e Ftohta dhe Emocionet",
      prompt: "Roli: Piktor Abstrakt. Konteksti: Klasa 5, teoria e ngjyrave. Detyra: Udhëzo nxënësit se si të pikturojnë një peizazh dimëror fantastik duke përdorur vetëm 'ngjyra të ftohta' (blu, vjollcë dhe të bardhë). Kufizimet: Përshkruaj thellësisht emocionet (qetësinë, të ftohtin, magjinë) që ngjallin këto ngjyra te shikuesi.",
      tags: ["art", "ngjyrat", "pikturë"]
    }
    , {
      subcategory: "primary_lower",
      subject: "Matematikë",
      title: "Mbledhja me kalim të dhjetëshes",
      prompt: "Roli: Mësues i ciklit të ulët. Konteksti: Nxënësit e klasës së 2-të po mësojnë mbledhjen e numrave dyshifrorë me kalim. Detyra: Shpjego procesin e 'kalimit të dhjetëshes' duke përdorur analogjinë e një shporte me mollë që mbushet dhe kalon në shportën tjetër. Kufizimet: Përdor fjali shumë të shkurtra dhe shto 3 ushtrime të thjeshta në fund.",
      tags: ["matematikë", "mbledhja", "analogji"]
    },
    {
      subcategory: "primary_lower",
      subject: "Gjuhë Shqipe",
      title: "Zanoret dhe Bashkëtingëlloret",
      prompt: "Roli: Mësues i gjuhës. Konteksti: Klasa e 1-rë. Fëmijët e kanë të vështirë të bëjnë dallimin mes zanoreve dhe bashkëtingëlloreve. Detyra: Krijo një lojë imagjinare ku zanoret janë 'këngëtarë' (ngase tingëllojnë gjatë) dhe bashkëtingëlloret janë 'instrumentistë'. Kufizimet: Shkruaj një tekst të shkurtër motivues për t'ua lexuar klasës.",
      tags: ["gjuhë_shqipe", "alfabeti", "tingujt"]
    },
    {
      subcategory: "primary_lower",
      subject: "Dituri Natyre",
      title: "Stinët e Vitit",
      prompt: "Roli: Tregimtar për fëmijë. Konteksti: Klasa e 2-të. Mësimi rreth 4 stinëve. Detyra: Shkruaj një tregim të shkurtër ku çdo stinë është një 'vëlla/motër' me fuqi magjike të ndryshme (psh. Dimri ngrin liqenet, Pranvera çel lulet). Kufizimet: Maksimumi 150 fjalë. Përdor gjuhë thellësisht vizuale.",
      tags: ["natyra", "stinët", "tregim"]
    },
    {
      subcategory: "primary_lower",
      subject: "Dituri Natyre",
      title: "Kafshët e Pyllit",
      prompt: "Korniza CPTC. Roli: Zoolog miqësor. Konteksti: Klasa 3, njohja me faunën e Ballkanit. Detyra: Gjenero 4 gjëegjëza (riddles) të shkurtra me rima për ariun, ujkun, dhelprën dhe iriqin. Kufizimet: Gjëegjëzat duhet të kenë karakteristika reale shkencore (psh. gjumi letargjik). Lëri përgjigjet në fund.",
      tags: ["natyra", "kafshët", "gjëegjëza"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukim Qytetar",
      title: "Higjiena në Klasë",
      prompt: "Roli: Infermier i shkollës. Konteksti: Mbrojtja nga viruset sezonale për klasën e 1-rë. Detyra: Krijo një 'Pakt të Higjienës' me 5 rregulla të thjeshta që fëmijët t'i përsërisin si betim çdo mëngjes (psh. 'Lajmë duart pas çdo loje'). Kufizimet: Fjalitë duhet të rimohen dhe të jenë ritmike.",
      tags: ["higjiena", "shëndeti", "rregulla"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukimi Muzikor",
      title: "Ritmi me Trupin",
      prompt: "Roli: Mësues muzike. Konteksti: Fëmijët e klasës së 2-të janë tepër energjikë dhe nuk përqendrohen. Detyra: Krijo një aktivitet fizik muzikor (Body Percussion) 5-minutësh ku përdorin duart dhe këmbët për të krijuar një ritëm 4/4. Kufizimet: Jep udhëzime të sakta (Psh. 1. Përplas duart, 2. Përplas këmbën).",
      tags: ["muzikë", "ritmi", "aktivitet"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukim Fizik",
      title: "Lojëra Ngrohëse",
      prompt: "Roli: Trajner sportiv. Konteksti: Ora e fizkulturës, klasa 3. Detyra: Sugjero 3 lojëra argëtuese për ngrohjen e muskujve që nuk kërkojnë pajisje (topa apo rrjeta), por vetëm vrapim dhe koordinim në oborrin e shkollës. Kufizimet: Përshkruaj rregullat e secilës lojë në vetëm 2 fjali.",
      tags: ["sport", "ngrohja", "lojëra"]
    },
    {
      subcategory: "primary_lower",
      subject: "Gjuhë Angleze",
      title: "Ngjyrat dhe Numrat",
      prompt: "Roli: Mësues i anglishtes. Konteksti: Fëmijët e klasës së 2-të. Detyra: Krijo një tekst kënge (Chant) shumë të thjeshtë në anglisht që i ndihmon të mësojnë numrat 1-5 dhe ngjyrat bazë (Red, Blue, Green, Yellow, Pink). Kufizimet: Përfshi udhëzime se çfarë gjestesh duhet të bëjnë mësuesit teksa këndojnë.",
      tags: ["anglisht", "fjalori", "këngë"]
    },
    {
      subcategory: "primary_lower",
      subject: "Gjuhë Shqipe",
      title: "Poezi për Nënën",
      prompt: "Roli: Poet / Mësues. Konteksti: Po afron festa e 8 Marsit, klasa 4. Detyra: Udhëzo nxënësit se si të shkruajnë një poezi akrostike (Akrostik) me fjalën 'NËNA'. Kufizimet: Krijo një shembull të plotë të poezisë akrostike për t'ua treguar si model.",
      tags: ["gjuhë_shqipe", "poezi", "festa"]
    },
    {
      subcategory: "primary_upper",
      subject: "Matematikë",
      title: "Thyesat dhe Numrat Dhjetorë",
      prompt: "Roli: Tutor matematike. Konteksti: Klasa e 6-të. Nxënësit e kanë të vështirë të kuptojnë lidhjen mes thyesave dhe numrave dhjetorë (psh. 1/2 dhe 0.5). Detyra: Shpjego këtë lidhje duke përdorur paratë (monedhat dhe kartëmonedhat) si analogji. Kufizimet: Përfshi 4 shembuj llogaritjeje.",
      tags: ["matematikë", "thyesat", "dhjetorët"]
    },
    {
      subcategory: "primary_upper",
      subject: "Matematikë",
      title: "Këndet në Gjeometri",
      prompt: "Korniza CPTC. Roli: Arkitekt / Mësues matematike. Konteksti: Klasa e 7-të, llojet e këndeve (i ngushtë, i drejtë, i gjerë, i shtrirë). Detyra: Më jep 5 shembuj nga objektet në jetën reale (psh. akrepat e orës, hapja e derës) për secilin lloj këndi. Kufizimet: Gjuha të jetë vizuale dhe konkrete.",
      tags: ["matematikë", "gjeometri", "këndet"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjuhë Shqipe",
      title: "Fjalitë e Përbëra",
      prompt: "Roli: Gjuhëtar. Konteksti: Klasa e 8-të, sintaksa. Detyra: Shpjego dallimin mes fjalive të përbëra me bashkërenditje dhe atyre me nënrenditje. Kufizimet: Përdor konceptin e 'vagonëve të trenit' (të pavarur vs të varur) për ta ilustruar. Shto 3 ushtrime identifikimi.",
      tags: ["gjuhë_shqipe", "sintaksa", "gramatikë"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjuhë Shqipe",
      title: "Ese Përshkruese",
      prompt: "Roli: Shkrimtar. Konteksti: Klasa e 7-të, shkrimi krijues. Detyra: Harto një plan (Outline) për një ese përshkruese me temë 'Një mëngjes në tregun e qytetit'. Kufizimet: Ndaje planin në paragrafë dhe për çdo paragraf sugjero cilat shqisa (të parit, të dëgjuarit, të nuhaturit) duhen përdorur.",
      tags: ["gjuhë_shqipe", "ese", "shkrim"]
    },
    {
      subcategory: "primary_upper",
      subject: "Histori",
      title: "Perandoria Romake",
      prompt: "Roli: Drejtues i një dokumentari historik. Konteksti: Klasa e 6-të, Roma e Lashtë. Detyra: Përshkruaj jetën në një Koloseum nga këndvështrimi i një gladiatori të ri, pak çaste para se të dalë në arenë. Kufizimet: Përfshi fakte reale rreth armatimit dhe publikut. Teksti të jetë dramatik.",
      tags: ["histori", "roma", "dokumentar"]
    },
    {
      subcategory: "primary_upper",
      subject: "Histori",
      title: "Lidhja e Prizrenit",
      prompt: "Roli: Historian Shqiptar. Konteksti: Klasa e 9-të. Detyra: Përmblidh rëndësinë e Lidhjes Shqiptare të Prizrenit (1878) në vetëm 4 pika kyçe (bullet points), duke theksuar programin politik dhe mbrojtjen e territoreve. Kufizimet: Çdo pikë nuk duhet të kalojë 2 fjali.",
      tags: ["histori", "lidhja_prizrenit", "fakte"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjeografi",
      title: "Kontinentet e Botës",
      prompt: "Roli: Kapiten Anijeje. Konteksti: Klasa e 6-të, oqeanet dhe kontinentet. Detyra: Krijo një udhëtim rreth botës ku përshkruan kalimin nga një oqean në tjetrin duke përmendur kontinentet që preken. Kufizimet: Shkruaje si faqe nga ditari i kapitenit (Logbook).",
      tags: ["gjeografi", "kontinentet", "udhëtim"]
    },
    {
      subcategory: "primary_upper",
      subject: "Biologji",
      title: "Qarkullimi i Gjakut",
      prompt: "Korniza CPTC. Roli: Kardiolog. Konteksti: Klasa e 8-të, sistemi i qarkullimit. Detyra: Shpjego ndryshimin mes qarkullimit të madh dhe të vogël të gjakut. Kufizimet: Përdor analogjinë e një 'sistemi transporti postar' ku zemra është qendra dhe mushkëritë janë fabrika e oksigjenit.",
      tags: ["biologji", "trupi", "zemra"]
    },
    {
      subcategory: "primary_upper",
      subject: "Kimi",
      title: "Reaksionet e Thjeshta Kimike",
      prompt: "Roli: Mësues kimie i apasionuar. Konteksti: Klasa e 8-të. Detyra: Shpjego konceptin e 'Reaktantëve' dhe 'Produkteve' duke e krahasuar me pjekjen e një torte në furrë. Kufizimet: Përfshi dhekuacionin e thjeshtuar të djegies si shembull të dytë.",
      tags: ["kimi", "reaksione", "shembuj"]
    },
    {
      subcategory: "primary_upper",
      subject: "Fizikë",
      title: "Shtypja dhe Trysnia",
      prompt: "Roli: Fizikan praktik. Konteksti: Klasa e 8-të. Detyra: Pse një thikë e mprehtë e pret mollën lehtë, ndërsa një thikë e topitur e ka të vështirë? Shpjego konceptin e Shtypjes (P = F/S) bazuar në këtë shembull. Kufizimet: Ofroni një gjuhë të thjeshtë matematikore.",
      tags: ["fizikë", "shtypja", "shembull"]
    },
    {
      subcategory: "secondary",
      subject: "Letërsi",
      title: "Romantizmi Europian",
      prompt: "Roli: Profesor Universiteti. Konteksti: Maturantët po përgatiten për provimin e letërsisë. Detyra: Bëj një përmbledhje të 3 karakteristikave kryesore të Romantizmit Europian (Kulti i ndjenjës, Natyra, Heroi i vetmuar) duke marrë si shembull Viktor Hygoin. Kufizimet: Toni të jetë akademik dhe të ndahet me nëntituj.",
      tags: ["letërsi", "romantizmi", "analizë"]
    },
    {
      subcategory: "secondary",
      subject: "Letërsi",
      title: "Makbethi i Shekspirit",
      prompt: "Roli: Regjisor Teatri. Konteksti: Klasa 11, studimi i tragjedisë 'Makbethi'. Detyra: Shpjego zhvillimin e ambicies së verbër te karakteri i Makbethit nga fillimi i veprës deri në rënien e tij. Kufizimet: Shto 3 pyetje thelbësore për ese në lidhje me fajin dhe ndërgjegjen.",
      tags: ["letërsi", "shekspiri", "teatër"]
    },
    {
      subcategory: "secondary",
      subject: "Matematikë",
      title: "Funksionet Kuadratike",
      prompt: "Roli: Mësues matematike. Konteksti: Gjimnaz, funksionet dhe grafiku i parabolës. Detyra: Shpjego si ndikon koeficienti 'a' (a > 0, a < 0) tek forma e parabolës, duke përdorur shembullin e hedhjes së një topi basketbolli ose një fytyre të qeshur/mërzitur. Kufizimet: Formatoje si një mini-leksion tekstual.",
      tags: ["matematikë", "funksionet", "parabola"]
    },
    {
      subcategory: "secondary",
      subject: "Matematikë",
      title: "Gjeometria Analitike",
      prompt: "Korniza CPTC. Roli: Inxhinier. Konteksti: Gjimnaz, Gjeometria Analitike. Detyra: Krijo 4 ushtrime ku nxënësit duhet të gjejnë distancën mes dy pikave dhe ekuacionin e drejtëzës kaluese nëpër to. Kufizimet: Jep fillimisht ushtrimet. Pastaj vizato një vijë ndarëse '---' dhe ofro zgjidhjet e sakta.",
      tags: ["matematikë", "gjeometri", "ushtrime"]
    },
    {
      subcategory: "secondary",
      subject: "Fizikë",
      title: "Ligjet e Termodinamikës",
      prompt: "Roli: Fizikan Teorik. Konteksti: Klasa 11, Termodinamika. Detyra: Shpjego Ligjin e Dytë të Termodinamikës (Entropinë) duke e krahasuar me procesin e shkrirjes së një akulloreje në diell—pse nuk mund të rikthehet procesi mbrapsht pa energji të jashtme? Kufizimet: Qasje logjike, pa përdorur ekuacione komplekse.",
      tags: ["fizikë", "termodinamika", "entropia"]
    },
    {
      subcategory: "secondary",
      subject: "Kimi",
      title: "Kimia Organike - Alkanet",
      prompt: "Roli: Kimiant Organik. Konteksti: Gjimnaz. Detyra: Krijo një udhëzues të shpejtë studimi rreth Alkaneve (Nomenklatura, Formula e përgjithshme, dhe 3 reagimet kryesore). Kufizimet: Përdor tabela Markdown për të rreshtuar 5 alkanet e para (Metan, Etan, etj.) bashkë me formulën e tyre kimike.",
      tags: ["kimi", "organike", "alkanet"]
    },
    {
      subcategory: "secondary",
      subject: "Biologji",
      title: "Sistemi Nervor Qendror",
      prompt: "Roli: Neurobiolog. Konteksti: Klasa 11. Detyra: Përshkruaj funksionin e trurit të madh, trurit të vogël dhe palcës kurrizore. Kufizimet: Përdor analogjinë e një 'qendre kontrolli / serveri' kompjuteri për të shpjeguar se si udhëtojnë sinjalet nervore.",
      tags: ["biologji", "sistemi_nervor", "truri"]
    },
    {
      subcategory: "secondary",
      subject: "Histori",
      title: "Lufta e Ftohtë (Debat)",
      prompt: "Roli: Moderator Debati Politik. Konteksti: Maturantët po studiojnë periudhën e Luftës së Ftohtë. Detyra: Formulo 4 argumente të forta ideologjike për secilin bllok (Blloku Lindor vs Blloku Perëndimor) që nxënësit t'i përdorin në një debat simulues në klasë. Kufizimet: Sigurohu që argumentet të mbështeten në fakte historike reale.",
      tags: ["histori", "lufta_e_ftohtë", "debat"]
    },
    {
      subcategory: "secondary",
      subject: "Sociologji",
      title: "Struktura Sociale",
      prompt: "Roli: Sociolog. Konteksti: Gjimnaz, ora e Sociologjisë. Detyra: Përgatit një analizë të shkurtër se si 'Shtresimi Social' (Stratifikimi) reflektohet në shoqëritë moderne përmes qasjes në edukim dhe teknologji. Kufizimet: Përfshi 2 pyetje për diskutim në fund që i detyrojnë nxënësit të reflektojnë mbi mundësitë e tyre.",
      tags: ["sociologji", "shoqëria", "analizë"]
    },
    {
      subcategory: "secondary",
      subject: "Informatikë",
      title: "Algoritmet me Python",
      prompt: "Roli: Inxhinier Softueri. Konteksti: Gjimnazistët po mësojnë bazat e Python. Detyra: Më shkruaj një kod të thjeshtë në Python që llogarit shumën e numrave çift nga 1 deri në 50 duke përdorur një cikël 'for'. Kufizimet: Shtoni komente (në gjuhën shqipe) në çdo rresht logjik të kodit për ta shpjeguar funksionin.",
      tags: ["informatikë", "python", "kodim"]
    },
    {
      subcategory: "secondary",
      subject: "Gjuhë Angleze",
      title: "Ese Argumentuese",
      prompt: "Roli: Instruktor i IELTS/TOEFL. Konteksti: Gjimnazistët po mësojnë të shkruajnë ese argumentuese në anglisht. Detyra: Jepni 10 shprehje lidhëse (Linking words) të avancuara në anglisht (psh. Furthermore, Nevertheless) dhe një shembull se si përdoren saktë në fjali. Kufizimet: Shto përkthimin e tyre në shqip.",
      tags: ["anglisht", "ese", "fjalori"]
    },
    {
      subcategory: "secondary",
      subject: "Ekonomi",
      title: "Kërkesa dhe Oferta",
      prompt: "Roli: Ekonomist i tregut. Konteksti: Klasa 12, Bazat e Ekonomisë. Detyra: Shpjego ligjin e Kërkesës dhe Ofertës duke marrë si shembull çmimin e biletave për një koncert të një këngëtari shumë të famshëm. Kufizimet: Shpjego qartë se çfarë ndodh kur oferta është e kufizuar dhe kërkesa është e lartë.",
      tags: ["ekonomi", "tregu", "oferta"]
    },
    {
      subcategory: "all",
      subject: "Edukim Special",
      title: "Menaxhimi i krizave (Autizmi)",
      prompt: "Korniza CPTC. Roli: Psikolog Klinik Shkollor. Konteksti: Mësuesi ka në klasë një nxënës me Autizëm i cili po kalon një 'Meltdown' (kolaps emocional) për shkak të zhurmës. Detyra: Ofro 4 hapa të menjëhershëm emergjence për të menaxhuar situatën me qetësi dhe për të mbrojtur dinjitetin e nxënësit. Kufizimet: Toni të jetë strikt profesional dhe mbështetës.",
      tags: ["inkluzion", "autizmi", "kriza"]
    },
    {
      subcategory: "all",
      subject: "Edukim Special",
      title: "Disleksia dhe Formatimi i Tekstit",
      prompt: "Roli: Defektolog. Konteksti: Mësuesi po përgatit një test leximi për klasën, por dëshiron ta përshtatë atë për 2 nxënës me disleksi. Detyra: Sugjero 5 udhëzime teknike për formatimin e tekstit (lloji i fontit, ngjyra e letrës, hapësirat mes rreshtave, shtrirja). Kufizimet: Këshillat duhet të jenë plotësisht të zbatueshme në Microsoft Word.",
      tags: ["inkluzion", "disleksia", "formatimi"]
    },
    {
      subcategory: "all",
      subject: "Metodologji",
      title: "Mësimi i Bazuar në Projekte (PBL)",
      prompt: "Roli: Ekspert i Kurrikulës. Konteksti: Një mësues dëshiron të ndryshojë mënyrën e mësimdhënies nga leksione tradicionale në PBL (Project-Based Learning). Detyra: Shkruaj një udhëzues hap pas hapi se si të planifikohet një projekt PBL 3-javor për lëndët shkencore. Kufizimet: Përfshi rolin e nxënësit, rolin e mësuesit dhe formatin e prezantimit final.",
      tags: ["metodologji", "projekte", "pbl"]
    },
    {
      subcategory: "all",
      subject: "Vlerësimi",
      title: "Rubrika për Prezantime me Gojë",
      prompt: "Roli: Pedagog i shkollës. Konteksti: Nxënësit po vlerësohen për prezantimet e tyre përfundimtare me gojë para klasës. Detyra: Krijo një rubrikë vlerësimi (Grading Rubric) në formë tabele Markdown. Kriteret: Kontakti me sy, Qartësia e zërit, Struktura e përmbajtjes, dhe Përgjigja ndaj pyetjeve. Kufizimet: Kolonat të jenë: Shkëlqyeshëm, Mirë, Kënaqshëm, Dobët.",
      tags: ["vlerësimi", "rubrikë", "prezantim"]
    },
    {
      subcategory: "all",
      subject: "Menaxhimi i Klasës",
      title: "Rregullat e Arta për Heshtjen",
      prompt: "Roli: Mësues Mentor. Konteksti: Mësuesit e rinj e kanë të vështirë të vendosin qetësi në klasa masive pa bërtitur. Detyra: Ofroni 4 strategji alternative psikologjike (psh. teknika e pritjes, ndryshimi i tonit të zërit, sinjalet vizuale) për të tërhequr vëmendjen. Kufizimet: Gjuha të jetë motivuese, jo gjykuese.",
      tags: ["menaxhim", "disiplina", "këshilla"]
    },
    {
      subcategory: "all",
      subject: "Këshillim",
      title: "Motivimi i Nxënësve Apatikë",
      prompt: "Roli: Këshilltar i Karrierës / Psikolog. Konteksti: Disa nxënës të shkollës së mesme mendojnë se 'shkolla nuk u duhet për asgjë në jetë'. Detyra: Krijo një fjalim ose skenar të shkurtër bisede 1-me-1 për t'i ndihmuar ata të shohin lidhjen e të mësuarit me aftësitë praktike për të ardhmen (edhe nëse duan të bëhen sipërmarrës ose YouTuber). Kufizimet: Evito moralizimin.",
      tags: ["këshillim", "motivimi", "psikologji"]
    },
    {
      subcategory: "all",
      subject: "Planifikimi",
      title: "Gjenerator i Planprogramit Vjetor",
      prompt: "Roli: Ekspert i kurrikulës arsimore. Konteksti: Jam mësues dhe më duhet të krijoj një planprogram për lëndën e [FUT LËNDËN], klasa e [FUT KLASËN]. Detyra: Më ofro një strukturë tabelare me 4 kolona (Muaji, Tema, Nën-temat, Aktivitetet praktike). Kufizimet: Ndaje vitin në dy gjysmëvjetorë dhe lër javë bosh për përsëritje dhe testime.",
      tags: ["planifikim", "kurrikula", "organizim"]
    },
    {
      subcategory: "all",
      subject: "Vlerësimi",
      title: "Komente Përmbledhëse për Dëftesat",
      prompt: "Roli: Kujdestar i vëmendshëm dhe pedagog. Konteksti: Fundi i vitit. Duhet të shkruaj komente vlerësuese për dëftesat. Detyra: Më gjenero 5 shabllone të ndryshme komentesh (2 për nxënës të shkëlqyer, 2 për nxënës me vështirësi por që përpiqen, 1 për nxënës me probleme përqendrimi). Kufizimet: Përdor teknikën 'Sanduiç' (Pozitive-Këshillë-Pozitive).",
      tags: ["vlerësimi", "prindërit", "komente"]
    },
    {
      subcategory: "all",
      subject: "Mësimdhënie",
      title: "Tutor Sokratik (Bot Interaktiv)",
      prompt: "Roli: Tutor Sokratik. Konteksti: Unë jam nxënësi yt dhe po përpiqem të kuptoj [FUT KONCEPTIN KËTU]. Detyra: Mos më jep përgjigjen e gatshme në asnjë mënyrë. Më bëj një pyetje udhëzuese, prit përgjigjen time, pastaj më bëj pyetjen tjetër. Kufizimet: Bëj vetëm nga një pyetje në të njëjtën kohë. Fillojmë tani: Më bëj pyetjen e parë.",
      tags: ["metodologji", "sokrati", "bashkëbisedim"]
    },
    {
      subcategory: "all",
      subject: "Metodologji",
      title: "Krijues i Kartave të Debatit",
      prompt: "Roli: Trajner i Klubit të Debatit. Konteksti: Po organizoj një debat në klasë mbi temën: [FUT TEMËN]. Detyra: Më krijo 4 karta me argumente 'PRO' dhe 4 karta me argumente 'KUNDËR'. Për çdo kartë, ofro argumentin kryesor dhe 2 fakte mbështetëse. Kufizimet: Argumentet duhet të jenë të balancuara mirë dhe të formuluara qartë.",
      tags: ["debat", "argumentim", "aktivitete"]
    },
    {
      subcategory: "all",
      subject: "Edukim Special",
      title: "Thjeshtëzues Tekstesh (Për Disleksi/ADHD)",
      prompt: "Roli: Defektolog dhe specialist i qartësisë. Konteksti: Kam një tekst sfidues shkollor që nxënësit me vështirësi në lexim nuk e kuptojnë. Detyra: Do të të jap tekstin më poshtë. Rishkruaje atë duke përdorur fjali shumë të shkurtra. Kufizimet: Zëvendëso fjalët e vështira me sinonime. Ndaje në paragrafë me nga 2 fjali dhe shto pika (bullet points). Teksti: [FUT TEKSTIN]",
      tags: ["inkluzion", "përshtatje", "tekst"]
    },
    {
      subcategory: "all",
      subject: "Vlerësimi",
      title: "Asistent për Kontrollin e Eseve",
      prompt: "Roli: Asistent i vlerësimit. Konteksti: Kam 30 ese për të kontrolluar. Detyra: Unë do të ngjis një ese të një nxënësi. Vlerësoje atë bazuar në 3 kritere: 1. Struktura, 2. Fjalori dhe 3. Argumentimi. Kufizimet: Më ofro 2 gjëra që nxënësi i ka bërë mirë dhe 2 sugjerime konkrete për përmirësim. Mos e rishkruaj esenë, vetëm jep komente.",
      tags: ["vlerësim", "ese", "asistent"]
    },
    {
      subcategory: "all",
      subject: "Testimi",
      title: "Gjenerator i Kuizeve MCQ",
      prompt: "Roli: Përpilues testesh. Konteksti: Përgatitja e një testi të shkurtër (Pop Quiz) për [FUT TEMËN]. Detyra: Gjenero 10 pyetje me zgjedhje të shumëfishtë (A, B, C, D). Kufizimet: Vetëm një përgjigje duhet të jetë e saktë. Përgjigjet e gabuara (distraktorët) duhet të duken shumë të besueshme. Ofro çelësin e përgjigjeve në fund.",
      tags: ["testim", "kuiz", "mcq"]
    },
    {
      subcategory: "all",
      subject: "Mësimdhënie",
      title: "Shpjegim me Analogji Komplekse",
      prompt: "Roli: Komunikues Shkencor i nivelit të lartë. Konteksti: Nxënësit e mi nuk po e kuptojnë konceptin e [FUT KONCEPTIN]. Detyra: Më krijo 3 analogji të ndryshme nga jeta e përditshme për ta shpjeguar këtë koncept. Kufizimet: Analogjia e parë të jetë për fëmijë 10 vjeç, e dyta për adoleshentë 15 vjeç, dhe e treta për të rritur.",
      tags: ["analogji", "shpjegim", "koncepte"]
    },
    {
      subcategory: "all",
      subject: "Diferencimi",
      title: "Detyra në 3 Nivele Vështirësie",
      prompt: "Roli: Ekspert i Mësimdhënies së Diferencuar. Konteksti: Po jap mësim mbi temën [FUT TEMËN]. Detyra: Krijo 3 detyra të ndryshme për të njëjtën temë. Nivel 1: Për nxënësit që kanë nevojë për ndihmë (mbështetje vizuale). Nivel 2: Për nxënësit mesatarë (zbatim standard). Nivel 3: Për nxënësit e avancuar (sfidë që kërkon mendim kritik). Kufizimet: Detyrat të zgjasin 15 minuta.",
      tags: ["diferencim", "detyra", "nivele"]
    },
    {
      subcategory: "all",
      subject: "Metodologji",
      title: "Taksonomia e Bloom-it (Pyetjet)",
      prompt: "Roli: Ekspert Pedagogjie. Konteksti: Po hartoj pyetje për diskutimin e temës [FUT TEMËN]. Detyra: Gjenero 6 pyetje për nxënësit, nga një për çdo nivel të Taksonomisë së Bloom-it (Njohja, Kuptimi, Zbatimi, Analiza, Sintéza, Vlerësimi). Kufizimet: Pyetjet e niveleve të larta nuk duhet të kenë përgjigje me 'Po' ose 'Jo'.",
      tags: ["bloom", "pyetje", "taksonomia"]
    },
    {
      subcategory: "all",
      subject: "Komunikimi",
      title: "Emaile Pozitive për Prindërit",
      prompt: "Roli: Kujdestar empatik. Konteksti: Mësuesit zakonisht u shkruajnë prindërve vetëm kur ka probleme. Unë dua t'u shkruaj për t'i lavdëruar. Detyra: Shkruaj 3 shabllone të shkurtra emailesh për të lavdëruar një nxënës për: 1. Ndihmën që i dha një shoku, 2. Përmirësimin e theksuar në nota, 3. Sjelljen e shkëlqyer në një ekskursion. Kufizimet: Toni të jetë i ngrohtë dhe i sinqertë.",
      tags: ["prindër", "email", "pozitivitet"]
    },
    {
      subcategory: "all",
      subject: "Organizim",
      title: "Gjenerator i Udhëzuesve të Studimit",
      prompt: "Roli: Asistent Studimi. Konteksti: Nxënësit kanë një provim të madh javën tjetër për [FUT TEMËN E PROVIMIT]. Detyra: Krijo një 'Udhëzues Studimi' (Study Guide) një-faqësh. Kufizimet: Përfshi: 10 fjalët kyçe më të rëndësishme (me përkufizime), 3 konceptet kryesore që duhet t'i dinë patjetër, dhe 2 këshilla si ta memorizojnë materialin.",
      tags: ["studim", "provim", "udhëzues"]
    },
    {
      subcategory: "all",
      subject: "Praktikë",
      title: "Raste Studimore (Case Studies)",
      prompt: "Roli: Hartues i rasteve studimore. Konteksti: Për ta bërë lëndën e [FUT LËNDËN] më praktike, dua që nxënësit të zgjidhin probleme reale. Detyra: Krijo një Skenar / Rast Studimor të shkurtër ku një personazh imagjinar përballet me një problem që lidhet me lëndën tonë. Kufizimet: Shto 3 pyetje në fund që nxënësit duhet t'i zgjidhin në grupe për ta ndihmuar personazhin.",
      tags: ["raste_studimore", "praktikë", "skenar"]
    },
    {
      subcategory: "all",
      subject: "Psikologji",
      title: "Lojëra Akullthyese (Icebreakers)",
      prompt: "Roli: Animator / Pedagog. Konteksti: Dita e parë e shkollës ose fillimi i një projekti të ri grupor. Detyra: Më sugjero 4 lojëra të shpejta (Icebreakers) për t'i bërë nxënësit të ndihen rehat dhe të qeshin me njëri-tjetrin. Kufizimet: Lojërat të mos zgjasin më shumë se 5 minuta secila dhe të mos kërkojnë materiale fizike.",
      tags: ["lojëra", "akullthyese", "socializim"]
    },
    {
      subcategory: "all",
      subject: "Mësimdhënie",
      title: "Zbulimi i Keqkuptimeve",
      prompt: "Roli: Analist i edukimit. Konteksti: Para se të filloj të shpjegoj temën e [FUT TEMËN], dua të di se ku gabojnë zakonisht nxënësit. Detyra: Më listo 5 keqkuptimet më të zakonshme (Common Misconceptions) që nxënësit e kësaj moshe kanë rreth kësaj teme. Kufizimet: Për çdo keqkuptim, ofro një fjali se si mund ta korrigjoj këtë qasje gjatë shpjegimit tim.",
      tags: ["metodologji", "gabime", "analizë"]
    },
    {
      subcategory: "all",
      subject: "Projekte",
      title: "Strukturues i Mësimit me Projekte (PBL)",
      prompt: "Roli: Menaxher i Projekteve Arsimore. Konteksti: Dua të nis një projekt 2-javor ku nxënësit do të punojnë bashkë për të zgjidhur një problem lokal rreth [FUT TEMËN]. Detyra: Më harto një kalendar projekti. Kufizimet: Çfarë duhet të bëjnë nxënësit në Javën 1 (Hulumtimi)? Çfarë në Javën 2 (Krijimi dhe Prezantimi)? Cili do jetë produkti final?",
      tags: ["pbl", "projekte", "planifikim"]
    },
    {
      subcategory: "all",
      subject: "Vlerësimi",
      title: "Gjenerator i Biletave të Daljes (Exit Tickets)",
      prompt: "Roli: Ekspert i Vlerësimit Formues. Konteksti: Në fund të orës për [FUT TEMËN], dua të kontrolloj shpejt nëse nxënësit e kuptuan thelbin. Detyra: Më krijo 5 ide për 'Bileta Daljeje' (Exit Tickets) që ata mund t'i shkruajnë në një copë letër në 2 minutat e fundit. Kufizimet: Përfshi formate të ndryshme (psh. një vizatim, një fjali përmbledhëse, një pyetje që u ka mbetur e paqartë).",
      tags: ["vlerësim", "biletat", "kontroll"]
    },
    {
      subcategory: "all",
      subject: "Mësimdhënie",
      title: "Detyra Interaktive për në Shtëpi",
      prompt: "Roli: Mësues Inovativ. Konteksti: Nuk dua t'u jap nxënësve detyra shtëpie të mërzitshme ku thjesht plotësojnë fletore pune për temën [FUT TEMËN]. Detyra: Më sugjero 3 detyra shtëpie jokonvencionale. Kufizimet: Detyrat duhet t'i detyrojnë ata të pyesin prindërit e tyre, të vëzhgojnë diçka në shtëpi, ose të krijojnë diçka me duar.",
      tags: ["detyra", "shtëpie", "inovacion"]
    },
    {
      subcategory: "all",
      subject: "Bashkëpunim",
      title: "Rregullat e Punës në Grup",
      prompt: "Roli: Mentor i Menaxhimit të Ekipeve. Konteksti: Klasa ime shpesh zihet kur i ndaj në grupe sepse disa punojnë shumë, e disa aspak. Detyra: Harto një 'Kontratë të Punës në Grup' me 5 pika që secili grup duhet ta nënshkruajë para se të fillojë punën. Kufizimet: Cakto 4 role të qarta brenda grupit (psh. Lideri, Matësi i kohës, Raportuesi) dhe përshkruaj detyrën e secilit.",
      tags: ["grupi", "rregulla", "bashkëpunim"]
    },
    {
      subcategory: "all",
      subject: "Gjuhë e Huaj",
      title: "Skenar për Lojë me Role (Roleplay)",
      prompt: "Roli: Mësues i Gjuhëve të Huaja. Konteksti: Nxënësit e mi po mësojnë fjalorin rreth [FUT TEMËN, psh. Aeroportit / Spitalit]. Detyra: Shkruaj një skenar loje me role (Roleplay) për 2 persona. Kufizimet: Skenari duhet të ketë një problem/konflikt të vogël që duhet zgjidhur (psh. bagazhi ka humbur). Ofro 5 fraza kyçe në gjuhën e huaj që duhet të përdorin patjetër.",
      tags: ["gjuhë", "roleplay", "skenar"]
    },

    {
      subcategory: "all",
      subject: "Pedagogji Moderne",
      title: "Klasa e Përmbysur (Flipped Classroom)",
      prompt: "Roli: Dizajnues i Mësimdhënies. Konteksti: Dua ta 'përmbys' klasën time për temën [FUT TEMËN] në [FUT KLASËN]. Detyra: Harto një model të plotë të Klasës së Përmbysur. Kufizimet: Përfshi: (1) skicë të skriptit për video 10-minutësh që nxënësit e shohin në shtëpi, (2) 3 pyetje kontrolli pasi shohin videon, (3) aktivitet aktiv në klasë që supozon se videoja është parë, (4) metodë për të mbajtur nxënësit përgjegjës. Aktiviteti në klasë duhet të jetë bashkëpunues, jo ligjëratë.",
      tags: ["flipped_classroom", "pedagogji", "metodologji"]
    },
    {
      subcategory: "all",
      subject: "Pedagogji Moderne",
      title: "Gamifikimi i Klasës",
      prompt: "Roli: Dizajnues i Lojërave Edukative. Konteksti: Dua ta gamifikoj orën time të [FUT LËNDËS] për [FUT KLASËN] për të rritur motivimin. Detyra: Krijo një sistem gamifikimi për një semestër. Kufizimet: Përfshi: sistem pikësh (XP) të lidhur me detyra akademike, 5 badge kuptimplotë, tabelë rezultatesh jo poshtëruese për nxënësit e dobët, dhe 3 power-up që nxënësit mund t'i zhbllokojnë (psh. kalon një test, zgjedh vendin). Çdo element loge duhet të lidhet me rezultate mësimore.",
      tags: ["gamifikim", "motivim", "angazhim"]
    },
    {
      subcategory: "all",
      subject: "Pedagogji Moderne",
      title: "Të Menduarit me Dizajn (Design Thinking)",
      prompt: "Roli: Trajner i Inovacionit. Konteksti: Dua të zbatoj një projekt Design Thinking me [FUT KLASËN] për problemin lokal [FUT PROBLEMIN]. Detyra: Krijo një plan 5-fazor (Empatizo, Përkufizzo, Idearo, Prototipo, Testo) i përshtatur për klasë. Kufizimet: Përfshi: ndarjen e kohës për secilën fazë, aktivitete konkrete për nxënës, materialet e nevojshme dhe formatin e prezantimit final. Faza e prototipimit duhet të përdorë materiale me kosto të ulët.",
      tags: ["design_thinking", "inovacion", "projekte"]
    },
    {
      subcategory: "all",
      subject: "STEM",
      title: "Sfida STEM",
      prompt: "Roli: Specialist i Kurrikulës STEM. Konteksti: Më duhet një sfidë STEM praktike për [FUT KLASËN] lidhur me konceptin [FUT KONCEPTIN]. Detyra: Dizajno një Sfidë STEM të plotë. Kufizimet: Përfshi: briefin e sfidës inxhinierike (çfarë duhet të ndërtojnë/zgjidhin nxënësit), kufizimet dhe materialet, fletën e kritereve të testimit, një promptë për ditar reflektimi, dhe lidhjet me standardet kurrikulare. E gjithë sfida duhet të përmbyllet brenda 45 minutave.",
      tags: ["stem", "inxhinieri", "sfidë"]
    },
    {
      subcategory: "all",
      subject: "Teknologji",
      title: "Integrimi i Inteligjencës Artificiale në Mësimdhënie",
      prompt: "Roli: Specialist i EdTech. Konteksti: Jam mësues i [FUT LËNDËS] dhe dua të integroj mjetet e IA me përgjegjësi në mësimet për [FUT KLASËN]. Detyra: Dizajno 3 aktivitete të ndryshme ku nxënësit përdorin IA si partner mësimor, jo për të shmangur të menduarit. Kufizimet: Për seciling aktivitet: përshkruaj rolin e IA, detyrën e të menduarit kritik të nxënësit, dhe si e vlerësoj nëse nxënësi ka shtuar analizën e vet. Përfshi një aktivitet ku nxënësit duhet të kontrollojnë saktësinë e IA.",
      tags: ["ia", "teknologji", "të_menduar_kritik"]
    },
    {
      subcategory: "all",
      subject: "Vlerësimi",
      title: "Portofoli Dixhital",
      prompt: "Roli: Ekspert i Vlerësimit me Portofol. Konteksti: Dua të zëvendësoj testet me portofol dixhital për [FUT LËNDËN] në [FUT KLASËN]. Detyra: Dizajno një sistem të plotë vlerësimi me portofol. Kufizimet: Përfshi: çfarë artefakte mbledhin nxënësit (4-6 lloje), promptë reflektimi për secilin artefakt, rubrikë vetëvlerësimi para dorëzimit, dhe rubrikën time finale (5 kritere). Portofoli duhet të tregojë rritje me kalimin e kohës, jo vetëm performancë finale.",
      tags: ["portofol", "vlerësim", "reflektim"]
    },
    {
      subcategory: "all",
      subject: "Bashkëpunim",
      title: "Metoda e Lëmit (Jigsaw)",
      prompt: "Roli: Ekspert i Mësimit Kooperativ. Konteksti: Po mësoj temën komplekse [FUT TEMËN] në [FUT KLASËN] dhe dua të përdor metodën Jigsaw. Detyra: Dizajno një orë të plotë Jigsaw. Kufizimet: Përfshi: ndarjen e përmbajtjes në 4 pjesë 'eksperte' të barabarta, fletën e detyrave të grupit ekspert, udhëzuesin për mësimdhënie në grupin shtëpiak, formulën e përgjegjësisë gjatë dëgjimit dhe pyetjen individuale finale. Çdo pjesë eksperte duhet të jetë e vetëmjaftueshme.",
      tags: ["jigsaw", "bashkëpunim", "metodologji"]
    },
    {
      subcategory: "all",
      subject: "Pedagogji Moderne",
      title: "Njësia e Mësimit Bazuar në Pyetje (IBL)",
      prompt: "Roli: Lehtësues i Mësimit Hulumtues. Konteksti: Dua që nxënësit e mi të [FUT KLASËS] të eksplorojnë pyetjen nxitëse: [FUT PYETJEN]. Detyra: Dizajno një njësi 2-javore të Mësimit Hulumtues. Kufizimet: Përfshi: aktivitetin e fillimit (grepin) për të ngjallur kureshtjen, udhëzuesin strukturor të hulumtimit, 3 pika mini-kontrolle, gjurmuesin E di-Dua të di-Mësova, dhe formatin e ngjarjes finale të ndarjes. Nxënësit duhet të gjenerojnë të paktën një nënpyetje vetë.",
      tags: ["hulumtim", "mësim_i_drejtuar_nga_nxënësi", "pyetje"]
    },
    {
      subcategory: "all",
      subject: "Mirëqenia",
      title: "Integrimi i Mindfulness dhe SEL",
      prompt: "Roli: Specialist i Mësimit Social-Emocional (SEL). Konteksti: Dua të thurr praktika 5-minutëshe SEL dhe mindfulness në orët e mia ditore të [FUT LËNDËS] për [FUT KLASËN]. Detyra: Krijo një plan 4-javor me një aktivitet të shkurtër SEL çdo ditë (Hën-Pre). Kufizimet: Përziej lloje të ndryshme: ushtrime frymëmarrjeje, momente mirënjohjeje, kontrolle emocionale, reflektime mësuese. Secili aktivitet duhet të zgjasë nën 5 minuta dhe të mos kërkojë asnjë material. Përfshi lidhjen me fokusun akademik.",
      tags: ["sel", "mindfulness", "mirëqenia"]
    },
    {
      subcategory: "all",
      subject: "Përfshirje",
      title: "Dizajni Universal për Mësim (UDL)",
      prompt: "Roli: Specialist i UDL. Konteksti: Po dizajnoj një orë mbi [FUT TEMËN] për një klasë [FUT KLASËN] me aftësi të ndryshme: nxënës me disleksi, nxënës EAL, dhe nxënës të talentuar. Detyra: Zbato 3 parimet e UDL (Mënyra të Shumta të Reprezentimit, Angazhimit, dhe Veprimit/Shprehjes). Kufizimet: Për secilen parim jep 2 strategji konkrete. Të gjitha përshtatjet duhet të jenë të pranishme në të njëjtën klasë.",
      tags: ["udl", "përfshirje", "diferencim"]
    },
    {
      subcategory: "all",
      subject: "Vlerësimi",
      title: "Paketë Veglash të Vlerësimit Formues",
      prompt: "Roli: Ekspert i Vlerësimit për Mësim. Konteksti: Mbështetem shumë në teste shuma dhe më duhet të kontrolloj kuptimin gjatë orës. Detyra: Më jep 7 teknika të ndryshme vlerësimi formues që mund t'i përdor këtë javë. Kufizimet: Për secilën teknikë: emrin, përshkrimin 2-fjali, kohëzgjatjen dhe çfarë mësimi zbulon. Përfshi të paktën 2 opsione dixhitale dhe 2 fizike. Asnjë nuk duhet të marrë më shumë se 5 minuta nga koha e mësimdhënies.",
      tags: ["vlerësim_formues", "feedback", "mësim"]
    },
    {
      subcategory: "all",
      subject: "Fuqizimi i Nxënësve",
      title: "Konferenca të Drejtuara nga Nxënësi",
      prompt: "Roli: Avokate e Fuqizimit të Nxënësve. Konteksti: Dua të zëvendësoj takimet tradicionale prind-mësues me Konferenca të Drejtuara nga Nxënësi për [FUT KLASËN]. Detyra: Dizajno sistemin e plotë. Kufizimet: Përfshi: udhëzuesin e përgatitjes para konferencës (portofol, vetëvlerësim, vendosje qëllimesh), axhendën 15-minutësh që nxënësi e drejton, dhe 3 fillesa fjalie për nxënës nervozë. Nxënësi duhet të flasë 80% të kohës.",
      tags: ["konferenca", "nxënësi_si_drejtues", "prindër"]
    },
    {
      subcategory: "all",
      subject: "Motivimi",
      title: "Ora e Gjenisë — Projektet e Pasionit",
      prompt: "Roli: Trajner i Mësimit Bazuar në Pasion. Konteksti: Dua t'i dedikojë 1 orë javore Orës së Gjenisë për klasën time [FUT KLASËN]. Detyra: Krijo një kornizë të plotë për një semestër (15 javë). Kufizimet: Përfshi: si zgjedhin nxënësit temat, ciklin javor të punës, strukturën e ditarit të reflektimit, pikat kryesore të projektit në javët 5, 10 dhe 15, dhe formatin e festimit final. Projektet duhet të përfshijnë një komponente mësimore.",
      tags: ["projekte_pasioni", "motivim", "zgjedhja_e_nxënësit"]
    },
    {
      subcategory: "all",
      subject: "Metodologji",
      title: "Mendo-Çifto-Ndaj në Nivele të Larta Njohëse",
      prompt: "Roli: Dizajnues i Mësimit Aktiv. Konteksti: Dua të kaloj përtej rikujtimit bazë në diskutimet Mendo-Çifto-Ndaj për [FUT TEMËN] në [FUT KLASËN]. Detyra: Dizajno 5 promptë të cilësisë së lartë që synojnë nivele të ndryshme njohëse (rikujtim, analizë, vlerësim, zbatim, krijimtari). Kufizimet: Për secilin prompt: shkruaj pyetjen, koha e 'Mendimit' (30s-2min), dhe si duket një 'Ndarje' e fortë. Të paktën 2 pyetje nuk duhet të kenë një përgjigje të vetme të saktë.",
      tags: ["mendo_çifto_ndaj", "diskutim", "mësim_aktiv"]
    },
    {
      subcategory: "all",
      subject: "Komunitet",
      title: "Projekti i Mësimit në Shërbim të Komunitetit",
      prompt: "Roli: Koordinator i Angazhimit Komunitar. Konteksti: Dua ta lidhë kurrikulën time të [FUT LËNDËS] me një nevojë reale të komunitetit për nxënësit e [FUT KLASËS]. Detyra: Dizajno një projekt semestral të Mësimit në Shërbim. Kufizimet: Përfshi: identifikimin e nevojës (javët 1-2), fazën e veprimit (javët 3-10), ciklin e reflektimit, dhe ngjarjen e ekspozitës publike. Shërbimi duhet të jetë autentikisht i dobishëm për komunitetin.",
      tags: ["shërbim_komunitar", "reale", "projekte"]
    },

    {
      subcategory: "primary_lower",
      subject: "Drama",
      title: "Integrimi i Dramës në Mësimdhënie",
      prompt: "Roli: Specialist i Dramës në Edukim. Konteksti: Jam mësues fillori (klasa 2-4) që dëshiron të përdorë teknika dramatike për të mësuar [FUT LËNDËN] më shumë. Detyra: Më jep 4 teknika dramatike pa eksperiencë teatrale: Ngrirja, Karrigia e Nxehtë, Rruga e Ndërgjegjes, dhe Mësuesi në Rol. Kufizimet: Për secilën: definicion, shembull i zbatuar në lëndën time, instruksione hap-pas-hapi, dhe pyetje debriefingu. Nuk kërkohen kostume apo rekuizita.",
      tags: ["dramë", "integrimi_artit", "metodologji"]
    },
    {
      subcategory: "all",
      subject: "Arte Pamore",
      title: "Analiza e Veprës Artistike si Të Menduar Kritik",
      prompt: "Roli: Edukator i Muzeut të Artit. Konteksti: Dua të përdor një vepër të famshme arti si ushtrim të të menduarit kritik në [FUT KLASËN] (jo vetëm mësim arti). Detyra: Dizajno një aktivitet 20-minutësh analize rreth [FUT VEPRËS] nga [FUT ARTISTI]. Kufizimet: Përfshi: protokollin Shih-Mendo-Pyet, 3 fakte kontekstuale për artistin, 2 pyetje diskutimi që lidhin temat me jetën e sotme, dhe një përgjigje kreative 5-minutëshe. Nuk kërkohen materiale speciale.",
      tags: ["historia_artit", "arti", "të_menduar_kritik"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukim Muzikor",
      title: "Shënimi Muzikor për Fillestarët",
      prompt: "Roli: Mësues i Muzikës. Konteksti: Po prezantoj shënimin bazë muzikor tek nxënës të klasës 3 që kurrë nuk kanë lexuar nota. Detyra: Dizajno sekuencën e 3 orëve. Ora 1: Porta, çelësi violinë, emrat e notave (EGBDF, FACE). Ora 2: Vlerat e notave (e tërë, gjysëm, e çerekut). Ora 3: Ushtrim i thjeshtë leximi. Kufizimet: Përfshi mnemonikë për secilën orë dhe një lojë argëtuese. Nuk kërkohen instrumente — vetëm rrahje me trup.",
      tags: ["muzikë", "nota", "fillore"]
    },
    {
      subcategory: "all",
      subject: "Arsim Financiar",
      title: "Arsimi Financiar për Shkollën e Mesme",
      prompt: "Roli: Edukator Financiar. Konteksti: Dua të prezantoj koncepte bazë financiare tek nxënësit e klasave 6-8 mënyrë praktike. Detyra: Dizajno një mini-njësi 4-orëshe. Ora 1: Nevoja kundër Dëshirave dhe buxhetimi. Ora 2: Si funksionojnë bankat (kursim, interes). Ora 3: Koncepti i borxhit. Ora 4: Simulim — nxënësit menaxhojnë buxhet mujor. Kufizimet: Përfshi fjalor, studim rasti, dhe 2 pyetje diskutimi. Përdor skenare të lidhura me adoleshentët.",
      tags: ["arsim_financiar", "aftësi_jetësore", "klasa_e_mesme"]
    },
    {
      subcategory: "primary_upper",
      subject: "Orientimi në Karrierë",
      title: "Eksplorimi i Karrierës për Klasat 7-9",
      prompt: "Roli: Këshilltar Karriere. Konteksti: Nxënësit e klasave 7-9 duhet të fillojnë të mendojnë për të ardhmen. Detyra: Dizajno një njësi 3-sesi. Sesi 1: Vetënjohja (inventar interesash, anash, vlerash). Sesi 2: Hulumtimi i karrierave (nxënësit hulumtojnë 2 karriera). Sesi 3: Përgatitja dhe debriefimi i folësit mysafir. Kufizimet: Përfshi: vegla vetëinventari, shablonin e hulumtimit dhe 5 pyetje për mysafirin. Fokusi: karriera të reja të shekullit 21.",
      tags: ["karrierë", "aftësi_jetësore", "planifikim_i_ardhmes"]
    },
    {
      subcategory: "all",
      subject: "Etikë",
      title: "Diskutimi Etik — Dilema Morale",
      prompt: "Roli: Edukator i Etikës dhe Vlerave. Konteksti: Dua të drejtoj një diskutim etik të strukturuar për [FUT KLASËN] rreth një dileme morale reale. Detyra: Dizajno një orë të plotë arsyetimi moral. Kufizimet: Përfshi: skenar të shkurtër dileme morale lidhur me [FUT TEMËN], 5 pyetje sokratike, matricë vendimmarrjeje, dhe deklaratë finale pozicioni (3 fjali). Mësuesi duhet të mbetet neutral.",
      tags: ["etikë", "vlera", "të_menduar_kritik"]
    },
    {
      subcategory: "all",
      subject: "Edukim Mjedisor",
      title: "Projekti Shkolla e Gjelbër",
      prompt: "Roli: Lehtësues i Edukimit Mjedisor. Konteksti: Dua që klasa ime [FUT KLASA] të hetojë gjurmën mjedisore të shkollës sonë. Detyra: Dizajno një projekt 6-javor Shkolla e Gjelbër. Java 1: Auditim mjedisor (energji, ujë, mbetje). Javët 2-4: Hulumtimi dhe dizajnimi i zgjidhjeve. Java 5: Shkrim propozimi. Java 6: Prezantim para drejtuesve. Kufizimet: Propozimet duhet të jenë realiste dhe me kosto të ulët.",
      tags: ["mjedis", "qëndrueshmëri", "projektet"]
    },
    {
      subcategory: "primary_upper",
      subject: "Informatikë",
      title: "Programim me Blloqe (Scratch) — Klasa 4-6",
      prompt: "Roli: Edukator i Kodimit. Konteksti: Dua të prezantoj programimin me blloqe Scratch tek nxënësit e klasave 4-6 që kurrë nuk kanë koduar. Detyra: Dizajno kurrikul 5-orësh. Ora 1: Ndërfaqja e Scratch dhe sprites. Ora 2: Sekuencat dhe laçkat. Ora 3: Ngjarjet dhe kushtet. Ora 4: Variablat dhe lojë e thjeshtë. Ora 5: Miniprojekt — animim i tregimit. Kufizimet: Duhet të funksionojë offline në kompjuterët e shkollës.",
      tags: ["kodim", "scratch", "informatikë", "fillore"]
    },
    {
      subcategory: "all",
      subject: "Edukim Shëndetësor",
      title: "Ndërgjegjësimi për Shëndetin Mendor",
      prompt: "Roli: Edukator i Shëndetit Mendor të të Rinjve. Konteksti: Dua të zhvilloj një orë mbi shëndetin mendor dhe mirëqenien emocionale të përshtatshme për moshën e [FUT KLASËS]. Detyra: Dizajno orën 45-minutëshe. Kufizimet: Përfshi: aktivitet tokëzues (5 min), diskutim mbi çfarë do të thotë shëndeti mendor dhe 2 mite të rrëzuara (10 min), hartëzim i faktorëve stresues dhe strategjive (15 min), si dhe kur të kërkosh ndihmë (10 min), dhe ushtrim mbyllës (5 min). Toni duhet të jetë normalizues, jo klinik.",
      tags: ["shëndeti_mendor", "mirëqenia", "edukim_shëndetësor"]
    },
    {
      subcategory: "all",
      subject: "Astronomi",
      title: "Hyrje në Shkencat Hapësinore",
      prompt: "Roli: Edukator i Astronomisë. Konteksti: Dua të prezantoj Sistemin Diellor për [FUT KLASËN] mënyrë të paharrueshme dhe mahnitëse. Detyra: Dizajno sekuencën e 2 orëve. Ora 1: Shkalla dhe distanca — model me letër higjienike të Sistemit Diellor. Ora 2: Cikli jetësor i yjeve dhe origjina e elementeve. Kufizimet: Përfshi: të gjitha materialet, skriptin e aktivitetit, 5 fakte mahnitëse, dhe udhëzuesin e vëzhgimit të qiellit të natës. Gjithçka pa teleskop.",
      tags: ["astronomi", "shkencë", "stem"]
    },
    {
      subcategory: "all",
      subject: "Gazetari",
      title: "Projekti i Gazetës Shkollore",
      prompt: "Roli: Edukator i Gazetarisë. Konteksti: Dua të nis një projekt gazetarie për [FUT KLASËN] që do të prodhojë një numër të gazetës apo blogut shkollor. Detyra: Dizajno projektin 4-javor. Java 1: Bazat e gazetarisë (5 Pk, llojet, etika). Java 2: Hulumtimi dhe intervistat. Java 3: Shkrimi dhe redaktimi mes shokësh. Java 4: Botimi. Kufizimet: Përfshi shablonin e propozimit, listën e redaktimit mes shokësh dhe opsionet e formatit. Duhet të arrihet pa specialist gazetarie.",
      tags: ["gazetari", "shkrim", "arsim_mediatik"]
    },
    {
      subcategory: "all",
      subject: "Arsim Mediatik",
      title: "Punëtori për Zbulimin e Lajmeve të Rreme",
      prompt: "Roli: Edukator i Arsimit Mediatik. Konteksti: Nxënësit e mi të [FUT KLASËS] rregullisht ndajnë lajme të paverifikuara. Detyra: Dizajno punëtorinë 45-minutëshe. Kufizimet: Përfshi: metodën SIFT (Ndalo, Heto burimin, Gjej mbulim më të mirë, Gjurmo pretendimin origjinal), aktivitet praktike ku nxënësit kontrollojnë 3 tituj (i vërtetë, mashtrues, i rremë), dhe mjetet specifike (kërkim i kundërt i imazheve, faqet e fakteve). Shembujt duhet të jenë të përshtatshëm për moshën.",
      tags: ["arsim_mediatik", "lajme_rreme", "të_menduar_kritik"]
    },
    {
      subcategory: "all",
      subject: "Ndërlëndore",
      title: "Leximi në Klasat e Lëndëve",
      prompt: "Roli: Specialist i Arsimit mbi Leximin Ndërlëndor. Konteksti: Nxënësit e [FUT LËNDËS] në [FUT KLASËN] vështirësohen të lexojnë tekste informative komplekse. Detyra: Mësmë 5 strategji leximi para, gjatë dhe pas leximit. Kufizimet: Përfshi: 1 strategji Para-leximi (aktivizim i njohurive), 2 strategji Gjatë leximit dhe 2 strategji Pas leximit. Për secilën: skript mësuesi, dhe shablonin nxënësi. Strategjitë duhet të funksionojnë me çfarëdo teksti informativ.",
      tags: ["lexim", "arsim", "ndërlëndore"]
    },
    {
      subcategory: "all",
      subject: "Matematikë",
      title: "Matematika e Konsumatorit — Zbatim Praktik",
      prompt: "Roli: Edukator i Matematikës së Aplikuar. Konteksti: Nxënësit e [FUT KLASËS] pyesin gjithmonë kur do ta përdorin matematikën. Detyra: Krijo njësinë e Matematikës Konsumatore (1-2 javë): llogaritje zbritjesh dhe TVSH, lexim faturë utiliteti, kuptim tabele pagesash të thjeshta kredie, planifikim buxheti mujor. Kufizimet: Për secilën temë: dokument apo skenar real, 5 detyra llogaritjeje, fillese diskutimi. Përdor çmime dhe monedhë lokale.",
      tags: ["matematikë_konsumatore", "reale", "aftësi_jetësore"]
    },
    {
      subcategory: "all",
      subject: "Edukim Fizik",
      title: "Planifikimi i Njësisë në Edukim Fizik",
      prompt: "Roli: Dizajnues i Kurrikulës EF. Konteksti: Duhet të shkruaj planin e njësisë 6-javore në [FUT SPORTIN/AFTËSINË] për [FUT KLASËN] me synime të matshme. Detyra: Dizajno njësinë e plotë. Kufizimet: Përfshi: 3 synime psikomotore, 2 synime njohëse, 1 synime afektive (punë ekipore), sekuencën e progresit të aftësive javore, rubrikën e thjeshtë, dhe testin e shkruar. Duhet të jetë adaptues për nxënës me nivele të ndryshme.",
      tags: ["edukim_fizik", "planifikim", "njësi"]
    },
    {
      subcategory: "all",
      subject: "Statistikë",
      title: "Shkenca e Të Dhënave në Klasë",
      prompt: "Roli: Edukator i Arsimit mbi Të Dhënat. Konteksti: Dua që nxënësit e [FUT KLASËS] të kuptojnë se të dhënat janë kudo. Detyra: Dizajno projekt analize të dhënash reale. Nxënësit mbledhin të dhëna personale për 1 javë (kohë ekrani, hapa, ushqim), pastaj krijojnë: tabelë frekuence, 2 lloje grafikësh, llogaritjnë mesatare/median/modalitet dhe shkruajnë 3 përfundime. Kufizimet: Nuk kërkohet softuer special.",
      tags: ["statistikë", "të_dhëna", "reale"]
    },

    {
      subcategory: "primary_lower",
      subject: "Metodologji",
      title: "Mësimi Nëpërmjet Lojës (Klasat 1-2)",
      prompt: "Roli: Specialist i Edukimit të Fëmijërisë së Hershme. Konteksti: Jap mësim në klasa 1-2 dhe duhet të balancoj kërkesat kurrikulare me mësimin nëpërmjet lojës. Detyra: Dizajno 5 aktivitete loje të strukturuara që njëkohësisht mësojnë koncepte specifike të [FUT LËNDËS]. Kufizimet: Për secilën: formati i lojës, koncepti i saktë kurrikular, instruksionet e konfigurimit, si dokumentoj mësimin, dhe pyetja kalimtare. Aktivitetet duhet të duken si lojë por të kenë rezultate kurrikulare.",
      tags: ["mësim_nëpërmjet_lojës", "fëmijëria_e_hershme", "klasa_1"]
    },
    {
      subcategory: "primary_lower",
      subject: "Arsim",
      title: "Strategjitë e Rrëfimit (Klasat 2-3)",
      prompt: "Roli: Specialist i Arsimit Fillor. Konteksti: Nxënësit e klasave 2-3 mund të lexojnë por nuk mund ta ritregojnë me strukturë dhe detaje. Detyra: Dizajno ndërhyrjen 3-javore. Java 1: Hartat e tregimeve dhe sekuencimi (fillim-mes-fund). Java 2: Kornizat — personazh, vendndodhje, problem, zgjidhje. Java 3: Ritregim gojor me 'së pari, pastaj, tjetër, në fund'. Kufizimet: Strategjitë duhet të funksionojnë për fiksion dhe jofiksion.",
      tags: ["arsim", "ritregjim", "kuptimi", "fillore"]
    },
    {
      subcategory: "primary_lower",
      subject: "Matematikë",
      title: "Thellimi i Ndjenjës për Numrat (Klasat 3-4)",
      prompt: "Roli: Trajner Instruksional i Matematikës. Konteksti: Nxënësit e klasave 3-4 mund të llogariten por u mungon ndjenja e thellë për numrat. Detyra: Dizajno intensivin 4-javor. Java 1: Vlerësimi. Java 2: Zbërthimi dhe vendvlera. Java 3: Strategjitë e matematikës mendore. Java 4: Modelet e numrave. Kufizimet: Përfshi: rutinë ngrohjeje 10-minutëshe, 3 detyra, dhe vlerësim gojor javor. Pa kalkulator.",
      tags: ["ndjenja_numrave", "matematikë", "fillore", "matematikë_mendore"]
    },
    {
      subcategory: "primary_lower",
      subject: "Aftësi Hulumtuese",
      title: "Hyrja në Aftësi Hulumtuese (Klasat 4-5)",
      prompt: "Roli: Mësues i Arsimit Informacional. Konteksti: Kjo është hera e parë që nxënësit e klasave 4-5 po bëjnë projekt hulumtues. Detyra: Dizajno njësinë 5-orëshe PARA projektit real. Ora 1: Zgjedhja dhe ngushtimi i temës. Ora 2: Gjetja e burimeve të besueshme. Ora 3: Shënime pa kopjuar. Ora 4: Organizimi sipas kategorive. Ora 5: Citim i thjeshtë dhe shmangja e plagjiaturës. Kufizimet: Në nivel të përshtatshëm për moshën.",
      tags: ["aftësi_hulumtuese", "arsimi_informacional", "klasa_4-5"]
    },
    {
      subcategory: "primary_upper",
      subject: "Teknika Studimi",
      title: "Punëtori e Teknikave të Studimit (Klasat 5-6)",
      prompt: "Roli: Trajner Akademik. Konteksti: Nxënësit e klasave 5-6 marrin detyra dhe teste të shumta por kurrë nuk i janë mësuar teknikat efektive të studimit. Detyra: Dizajno punëtorinë 3-sesionale. Sesi 1: Memoria dhe kurba e harresës. Sesi 2: Kujtimi aktiv kundër rileximit pasiv (kartat, testimi). Sesi 3: Menaxhimi i kohës dhe plani javor studimi. Kufizimet: Vetëm strategji të bazuara në evidence.",
      tags: ["teknikat_studimit", "metakognicioni", "klasa_5-6"]
    },
    {
      subcategory: "primary_upper",
      subject: "Matematikë",
      title: "Reduktimi i Ankthit nga Matematika",
      prompt: "Roli: Mësues Matematike dhe Psikolog Edukativ. Konteksti: Disa nxënës të klasave 6-8 ngrihen gjatë testeve dhe thonë 'thjesht nuk jam për matematikë'. Detyra: Siguro: (1) listë kontrolli diagnostikuese, (2) 4 strategji mjedisi klase, (3) 3 qasje pedagogjike ndërtimi besimi, (4) skript bisede 1-me-1. Kufizimet: Fokus mbi mendësinë dhe mjedisin, jo vetëm rimësimdhënieje.",
      tags: ["ankthi_matematikës", "mendësia", "mirëqenia", "matematikë"]
    },
    {
      subcategory: "primary_upper",
      subject: "Arsim",
      title: "Mbështetja e Shkruajsve Ngurrues",
      prompt: "Roli: Specialist i Shkrimit. Konteksti: Disa nxënës të klasave 6-7 refuzojnë të shkruajnë pavarësisht aftësisë — kanë bllok shkrimi. Detyra: Më jep 6 strategji: (1) shkrim i lirë pa notim, (2) përgjigje vizuale-deri-të-shkruar, (3) provë gojore para shkrimit, (4) shkrim bashkëpunues, (5) zgjedhje teme dhe formati, (6) ndarje e gjenerimit nga redaktimi. Kufizimet: Asnjë strategji nuk duhet të kërkojë materiale shtesë.",
      tags: ["shkrim", "shkruajsit_ngurrues", "arsim", "motivim"]
    },
    {
      subcategory: "primary_upper",
      subject: "Tranzicion",
      title: "Mbështetja e Tranzicionit Fillore-Mesme",
      prompt: "Roli: Këshilltar i Tranzicionit Shkollor. Konteksti: Nxënësit e klasës 5 janë nervozë për kalimin në shkollën e mesme. Detyra: Dizajno programin 4-sesional të Përgatitjes para Tranzicionit (1 sesion në muaj). Sesi 1: Çfarë ndryshon — hartëzimi i frikave dhe ngacmimit. Sesi 2: Aftësitë organizative. Sesi 3: Aftësi shoqërore për mjedis të madh. Sesi 4: Përgatitja e ditës së vizitës. Kufizimet: Duhet të përfshijë prindërit në të paktën 1 aktivitet.",
      tags: ["tranzicion", "gatishmëria_shkollore", "klasa_5"]
    },
    {
      subcategory: "secondary",
      subject: "Metodologji",
      title: "Seminari Sokratik — Dizajn për Shkollën e Mesme",
      prompt: "Roli: Lehtësues i Diskutimit Kritik. Konteksti: Dua të drejtoj një Seminar Sokratik mbi [FUT TEKSTIN/TEMËN] ku nxënësit drejtojnë 90% të diskutimit. Detyra: Dizajno Seminarin e plotë Sokratik. Kufizimet: Përfshi: detyrën para seminarit (2 pyetje të gatshme), konfigurimin fizik rrethi të brendshëm/të jashtëm, rolin e mësuesit (vetëm pyetje sqaruese), protokollet e diskutimit, dhe kriteret e dyfishta të vlerësimit (të folurit DHE dëgjimit). Përfshi mekanizëm për nxënësit e qetë.",
      tags: ["seminari_sokratik", "diskutim", "shkolla_e_mesme"]
    },
    {
      subcategory: "secondary",
      subject: "Hulumtim",
      title: "Projekti i Pavarur i Hulumtimit (Shkolla e Mesme)",
      prompt: "Roli: Mbikëqyrës Hulumtimi Akademik. Konteksti: Dua t'u caktoj nxënësve të klasave 11-12 referat hulumtimi të pavarur brenda [FUT LËNDËS]. Detyra: Dizajno skeletin e plotë 8-javor me piketa javore. Kufizimet: Përfshi: udhëzuesin e formulimit të pyetjes hulumtuese, formatin e bibliografisë shënuese, protokollin e rishikimit mes shokësh, dhe rubrikën finale. Duhet të kërkojë të paktën 3 burime primare ose me rishikim.",
      tags: ["hulumtim", "shkrim_akademik", "shkolla_e_mesme", "klasa_11-12"]
    },
    {
      subcategory: "secondary",
      subject: "Metodologji",
      title: "Projekti Ndërlëndor — Shkolla e Mesme",
      prompt: "Roli: Dizajnues i Kurrikulës Ndërlëndore. Konteksti: Po bashkëpunoj me mësuesin e [FUT LËNDËS 2] për të krijuar projekt të përbashkët. Detyra: Dizajno strukturën ndërlëndore. Kufizimet: Përfshi: pyetjen nxitëse të bashkuar, kontributin e secilës lëndë, afatin e përbashkët dhe piketa, ndarjen e vlerësimit, dhe formatin e prezantimit final. Nxënësit duhet të shpjegojnë lidhjen e qartë.",
      tags: ["ndërlëndore", "bashkëpunim", "shkolla_e_mesme"]
    },
    {
      subcategory: "secondary",
      subject: "Karrierë",
      title: "Projekti Kapston (Senior Capstone)",
      prompt: "Roli: Dizajnues i Mësimit Kapston. Konteksti: Dua të prezantoj një eksperiencë Projekti Kapston për nxënësit e klasës 12. Detyra: Dizajno strukturën semestrale. Kufizimet: Përfshi: fazën e propozimit (nxënësi identifikon problem real dhe mentor jashtë shkollës), fazën B&D (javët 3-12), përgatitjen e mbrojtjes (javët 13-15), dhe ngjarjen e prezantimit publik. Nxënësit duhet të përfshijnë partner të jashtëm real.",
      tags: ["kapston", "klasa_12", "projekt"]
    },
    {
      subcategory: "all",
      subject: "Përfshirje",
      title: "Mbështetja e Nxënësve të Talentuar",
      prompt: "Roli: Specialist i Edukimit të Talentuar. Konteksti: Kam 3-4 nxënës që e mbarojnë gjithçka shpejt dhe mërziten. Detyra: Dizajno sistemin praktik 'Çfarë ka më Pas' brenda klasës sime regullt. Kufizimet: Përfshi: 5 lloje aktivitetesh zgjerimi (thellësi, kompleksitet, kreativitet, përshpejtim, mentorimi) me shembuj konkretë, kontratë vetë-drejtimi nxënësi, dhe sistem menaxhimi klase. Zgjerime duhet të jenë sfidues realisht.",
      tags: ["të_talentuar", "zgjerim", "përfshirje", "diferencim"]
    },
    {
      subcategory: "primary_lower",
      subject: "Arsim",
      title: "Ndërhyrja e Hershme e Leximit (Klasa 1-2)",
      prompt: "Roli: Specialist i Ndërhyrjes në Arsim. Konteksti: Kam 4 nxënës të klasave 1-2 prapa ndjeshëm në rrjedhshmërinë e leximit. Detyra: Dizajno ndërhyrjen 6-javore për grup të vogël (4 nxënës) me sesione ditore 20-minutëshe. Kufizimet: Përfshi: strukturën e rutinës ditore (5 min secila), 3 modele fonetike specifike, monitor progresi javor, dhe shablonin e komunikimit me prindërit. Mund ta drejtojë mësuesi i klasës.",
      tags: ["ndërhyrja_leximit", "arsim_i_hershëm", "klasa_1"]
    },
    {
      subcategory: "all",
      subject: "Mësimdhënie",
      title: "Detyrat Shtëpie që Funksionojnë Realisht",
      prompt: "Roli: Hulumtues i Shkencave Mësimore. Konteksti: Dua t'i rimodeloj detyrat shtëpie. Detyra: Më jep kornizën e plotë të rimodelimit. Kufizimet: Përfshi: 3 llojet me evidence (praktikë, përgatitje, zgjerim), 3 llojet pa evidence (punë e zënë, koncepte të reja, kopjim), shablonin 20-minutësh miqësor me familjen, dhe politikën dhembshurit për detyra me vonesë. Asnjë detyrë nuk duhet të kërkojë prindërit të mësojnë koncepte të reja.",
      tags: ["detyra_shtëpie", "dizajn_mësimor", "bazuar_në_evidence"]
    },
    {
      subcategory: "all",
      subject: "Mësimdhënie",
      title: "Dizajni Edukativ i Ekskursionit",
      prompt: "Roli: Dizajnues i Edukimit Eksperiencial. Konteksti: Po planifikoj ekskursion në [FUT VENDODHJEN] për [FUT KLASËN]. Detyra: Dizajno kornizën e plotë. Kufizimet: Përfshi: (1) orë para vizitës me 3 pyetje, (2) ditar vëzhgimi (udhëzues të strukturuar, faqe vizatimi, tracker fjalori), (3) aktivitet sinteze pas vizitës, dhe (4) si e vlerësoj mësimin. Nxënësit duhet të vëzhgojnë me strukturë, jo të bëjnë turne pasive.",
      tags: ["ekskursion", "mësim_eksperiencial", "reale"]
    },
    {
      subcategory: "all",
      subject: "Teknologji",
      title: "Krijimi i Ekskursionit Virtual",
      prompt: "Roli: Inovator i EdTech. Konteksti: Nuk mund t'i çoj nxënësit e [FUT KLASËS] fizikisht në [FUT VENDODHJEN]. Detyra: Dizajno orën 45-minutëshe të Ekskursionit Virtual. Kufizimet: Përfshi: 3 ndalesa të kurruuara Google Maps ose YouTube 360-video me promtë vëzhgimi, udhëzues virtual për plotësim (5 vëzhgime, 2 çudi, 1 lidhje), pyetje-dhe-përgjigje të simuluara, dhe detyrë kreative pas ekskursionit. Të gjitha burimet duhet të jenë falas online.",
      tags: ["ekskursion_virtual", "teknologji", "eksperiencial"]
    },
    {
      subcategory: "all",
      subject: "Komunitet",
      title: "Aktiviteti i Integrimit të Folësit Mysafir",
      prompt: "Roli: Koordinator i Partneritetit Komunitar. Konteksti: Po sjell folës mysafir nga [FUT PROFESIONIN] për [FUT KLASËN]. Detyra: Dizajno eksperiencën e plotë. Kufizimet: Përfshi: (1) aktivitet hulumtues para vizitës ku nxënësit dorëzojnë 3 pyetje, (2) votim klase për 10 pyetjet më të mira, (3) udhëzues marrje shënimesh, dhe (4) reflektim pas vizitës. Vizita duhet të përfshijë të paktën 1 moment ndëraktiv.",
      tags: ["folësi_mysafir", "komunitet", "orientimi_karieres"]
    },

    {
      subcategory: "all",
      subject: "Zhvillim Profesional",
      title: "Shablloni i Reflektimit pas Orës",
      prompt: "Roli: Trajner i Praktikës Refleksive. Konteksti: Dua të ndërtoj zakon të qëndrueshëm reflektimi pas çdo ore, por kam vetëm 10 minuta. Detyra: Krijo protokollin 10-minutësh të reflektimit pas orës. Kufizimet: Përfshi: 5 promptë të fuqishëm (kuptimi nxënësit, vendimet e mia, kontrolla barazia, dikë bëj ndryshe, diçka festoj), seksion rishikimi javor për të Premte, dhe pyetje mujore rritjeje. Reflektimi ditor duhet të përmbyllet me ndershmëri nën 10 minuta.",
      tags: ["reflektim", "zhvillim_profesional", "praktika_mësimdhënies"]
    },
    {
      subcategory: "all",
      subject: "Zhvillim Profesional",
      title: "Partneriteti i Vëzhgimit mes Kolegëve",
      prompt: "Roli: Trajner Instruksional. Konteksti: Dua të nis partneritet vëzhgimi jo-vlerësuese me koleg të besuar. Detyra: Dizajno kornizën e Partneritetit të Vëzhgimit. Kufizimet: Përfshi: si vendosim fokusin e përbashkët, protokollin 3-pjesësh (para-konferencë, vëzhgim, debrief), udhëzuesin e bisedës debriefimit, dhe orarin rotimi 6-javor. Fokusi duhet të jetë mbi dëshminë e mësimit të nxënësve.",
      tags: ["vëzhgim_mes_kolegëve", "zhvillim_profesional", "mësimdhënie"]
    },
    {
      subcategory: "all",
      subject: "Zhvillim Profesional",
      title: "Miniprojekti i Hulumtimit të Veprimit",
      prompt: "Roli: Hulumtues Mësues. Konteksti: Dua të hetoj sistematikisht një pyetje mbi praktikën time këtë semestër pa qenë hulumtues akademik. Detyra: Më udhëzo nëpërmjet dizajnimit të miniprojektit të Hulumtimit të Veprimit. Kufizimet: Përfshi: si formuloj pyetjen, 3 metoda të thjeshta mbledhje të dhënash, orarin 4-javor, si analizoj modelet, dhe si ndaj me kolegët. Duhet të përmbyllet krahas mësimdhënies normale — max 1 orë shtesë javore.",
      tags: ["hulumtimi_i_veprimit", "zhvillim_profesional", "hulumtim"]
    },
    {
      subcategory: "all",
      subject: "Mirëqenia",
      title: "Plani i Parandalimit të Djegies Profesionale",
      prompt: "Roli: Trajner i Mirëqenies së Edukatorit. Konteksti: Jam mes semestrit dhe ndihem i rraskapitur, i mërzishëm dhe filloj të dyshoj nëse po bëj ndryshim. Detyra: Më jep Plan të Parandalimit të Djegies që mund ta zbatoj menjëherë. Kufizimet: Përfshi: (1) kornizë triage, (2) 3 kufij të fortë profesionale kjo javë, (3) 2 zakone mikro-rikuperimi nën 10 minuta, dhe (4) skript për të kërkuar mbështetje. Strategjitë duhet të jenë realiste për mësuesin punëtor.",
      tags: ["djegia_profesionale", "mirëqenia", "shëndeti_mësuesit"]
    },
    {
      subcategory: "all",
      subject: "Organizim",
      title: "Menaxhimi i Ngarkesës së Mësuesit",
      prompt: "Roli: Ekspert i Produktivitetit të Mësuesit. Konteksti: Jam i mbingarkuar nga vëllimi i notimit, planifikimit, komunikimit dhe takimeve javore. Detyra: Dizajno sistemin e Menaxhimit të Ngarkesës. Kufizimet: Përfshi: shablonin e auditimit javor të kohës, 5 strategji kursimi kohe, kornizën Bëj-Delego-Shtyj-Fshi, sistemin e organizimit të burimeve dixhitale, dhe rutinën e rivendosjes 30-minutësh. Pa aplikacione shtesë — puno me mjetet ekzistuese shkollore.",
      tags: ["organizim", "ngarkesa", "produktiviteti", "mësuesi"]
    },
    {
      subcategory: "all",
      subject: "Zhvillim Profesional",
      title: "Udhëheqja e Komunitetit të Mësimit Profesional (KMP)",
      prompt: "Roli: Lehtësues i KMP. Konteksti: Jam i lutur të drejtoj ekipin e nivelit tonë prej 5 mësuesish. Takimet tona tani janë jofokusuese. Detyra: Dizajno modelin e ri strukturuar KMP qde e bën takimin 60-minutësh vërtet produktiv. Kufizimet: Përfshi: kornizën me 4 pyetje KMP, shablonin e axhendës 60-minutëshe, aktivitetin e normave, dhe protokollin e analizës së punës nxënësi. Çdo takim duhet të mbyllet me veprim të caktuar.",
      tags: ["kmp", "zhvillim_profesional", "bashkëpunim", "lidershipi"]
    },
    {
      subcategory: "all",
      subject: "Komunikim",
      title: "Përgatitja e Takimit Prind-Mësues",
      prompt: "Roli: Specialist i Komunikimit dhe Partneritetit. Konteksti: Kam 20 takime prind-mësues dhe dua që secilit të jetë bisedë partneriteti kuptimplotë. Detyra: Dizajno sistemin e përgatitjes. Kufizimet: Përfshi: fletën e përmbledhjes para-takimit (anët e forta, zonat e rritjes, 1 qëllim, 1 histori/shembull), formatin e axhendës 15-minutëshe, 5 pyetje të fuqishme për prindër, dhe shablonin e ndjekjes pas takimit. Duhet ta përgatit çdo takim nën 15 minuta.",
      tags: ["takimi_prind_mësues", "komunikim", "partneritet"]
    },
    {
      subcategory: "all",
      subject: "Komunikim",
      title: "Biseda e Vështirë me Prindërin",
      prompt: "Roli: Trajner i Zgjidhjes së Konfliktit. Konteksti: Duhet të kem bisedë të vështirë me prind të zemëruar rreth problemeve serioze. Detyra: Më jep kornizën e plotë. Kufizimet: Përfshi: (1) përgatitja me të dhëna specifike, (2) deklaratë hapëse de-eskalatuese, (3) si të përdor prova pa fajësim, (4) çfarë bëj nëse prindi bëhet agresiv, (5) mbyllja me plan veprimi, (6) dokumentimi. Qasja nga kujdesi autentik ndaj nxënësit.",
      tags: ["komunikim_me_prindërit", "biseda_e_vështirë", "zgjidhja_konfliktit"]
    },
    {
      subcategory: "all",
      subject: "Kultura e Klasës",
      title: "Ndërtimi i Komunitetit në Klasë",
      prompt: "Roli: Ndërtues i Komunitetit të Klasës. Konteksti: Është fillimi i vitit dhe dua të ndërtoj komunitet të fortë ku nxënësit ndihen psikologjikisht të sigurt. Detyra: Dizajno 3 javët e para të ndërtimit komunitar njëkohësisht me kurrikulën. Java 1: Identiteti dhe njohja (3 aktivitete). Java 2: Marrëveshjet e komunitetit bashkë-krijuara. Java 3: Siguria akademike dhe normat e rrezikut. Kufizimet: Duhet të funksionojë për [FUT KLASËN].",
      tags: ["komuniteti_i_klasës", "kultura", "përkatësia"]
    },
    {
      subcategory: "all",
      subject: "Menaxhimi i Klasës",
      title: "Takimi i Mëngjesit — Rrethi Komunitar",
      prompt: "Roli: Specialist i Klasës Responsive. Konteksti: Dua të nis rutinën e Takimit të Mëngjesit në klasën [FUT KLASA] për ndërtim komuniteti. Detyra: Dizajno kornizën 15-minutëshe. Kufizimet: Përfshi: 4 komponentet (Përshëndetja, Ndarja, Aktiviteti, Mesazhi i Mëngjesit) me shembuj konkretë, sekuencën 4-javore, dhe udhëzuesin për nxënësit rezistentë. Duhet të bëhet 15 minuta pa u nxituar. Adaptime për nivelet fillore dhe të mesme.",
      tags: ["takimi_mëngjesit", "rrethi", "komuniteti", "rutina"]
    },
    {
      subcategory: "all",
      subject: "Motivimi",
      title: "Festimi i Progresit të Nxënësve",
      prompt: "Roli: Edukator Bazuar në Pika Të Forta. Konteksti: Jap nota por rrallë festoj publikisht progresin. Dua të ndryshoj kulturën. Detyra: Dizajno sistemin e Festimit të Progresit. Kufizimet: Përfshi: 5 mënyra të festimit publik rritjeje (jo vetëm noter të lartë), shablonin e Letrës së Arritjes, formatin javor të tabelës lavdëruese, festimin kolektiv, dhe si shkruaj komente raportuese. Duhet të jetë i aksesueshëm për të gjithë nxënësit.",
      tags: ["festim", "mendësia_rritëse", "motivim"]
    },
    {
      subcategory: "all",
      subject: "Planifikim",
      title: "Planet e Emergjencës për Mësuesin Zëvendës",
      prompt: "Roli: Mentor i Mësuesit me Eksperiencë. Konteksti: Duhet të përgatit një paketë për mësuesin zëvendës. Detyra: Dizajno Paketën e Plotë Zëvendës. Kufizimet: Përfshi: pasqyrën e klasës, 3 plane orësh 45-minutëshe pa njohuri paraprake, udhëzuesin e menaxhimit specifik, procedurat e emergjencës, dhe udhëzuesin çfarë bëjnë nxënësit nëse mbarojnë herët. Çdo aktivitet duhet të jetë i mundur pa shpjegim kompleks.",
      tags: ["mësuesi_zëvendës", "planifikim", "planet_emergjencës"]
    },
    {
      subcategory: "all",
      subject: "Bashkëpunim",
      title: "Planifimi Bashkëpunues i Njësisë me Kolegë",
      prompt: "Roli: Lehtësues i Bashkëpunimit Kurrikular. Konteksti: Unë dhe kolegu im mësojmë të njëjtën njësi por planifikojmë veçmas. Detyra: Dizajno procesin e planifikimit bashkëpunues. Kufizimet: Përfshi: (1) axhendën e sesionit fillestar 90-minutësh, (2) ndarjen e punës, (3) strukturën e hapësirës dixhitale, (4) trajtimin e mospajtimeve, dhe (5) procesin e debriefimit pas njësisë. Të dy mësuesit duhet të mund ta personalizojnë planin.",
      tags: ["bashkëpunim", "planifikim_bashkëpunues", "kolegë"]
    },
    {
      subcategory: "all",
      subject: "Zhvillim Profesional",
      title: "Vendosja e Qëllimeve Vjetore Mësuese",
      prompt: "Roli: Trajner i Rritjes Profesionale. Konteksti: Është fillimi i vitit shkollor dhe dua të vendos qëllime rritjeje profesionale që do të punoj vërtet. Detyra: Më udhëzo nëpërmjet vendosjes 2 qëllimeve SMART profesionale. Kufizimet: Përfshi: procesin reflektiv për identifikimin e skajit tim real të rritjes, shablonin e formulimit SMART, strukturën e progresit mujor, protokollin e debriefimit mes-vjetor, dhe vetëvlerësimin fundvjetor. Qëllimet duhet të lidhen me përmirësimin e rezultateve nxënës.",
      tags: ["qëllimet_profesionale", "vendosja_qëllimeve", "rritja_mësuesit"]
    },
    {
      subcategory: "all",
      subject: "Mjedisi i Të Nxënit",
      title: "Konfigurimi i Klasës për Mësim",
      prompt: "Roli: Dizajnues i Mjedisit të Të Nxënit. Konteksti: Dua ta rregulloj me qëllim klasën time. Detyra: Dizajno planin dhe mjedisin e klasës për [FUT KLASËN] dhe [FUT LËNDËN]. Kufizimet: Përfshi: 3 konfigurime ndenjëse, si shfaq punën nxënësi kuptimplotë, çfarë vendos mbi mure, zonën pronësore nxënësi, dhe zonë qetësuese fokusi. Duhet të funksionojë brenda kufizimeve fizike të klasës standarde.",
      tags: ["mjedisi_klasës", "hapësira_mësimit", "dizajn"]
    },
    {
      subcategory: "all",
      subject: "Mësimdhënie",
      title: "Motivimi i Nxënësve Kronikisht të Angazhuar Jo",
      prompt: "Roli: Specialist i Angazhimit Nxënësi. Konteksti: Kam 3-5 nxënës të vërtetë të shkëputur — nuk bëjnë detyra, nuk marrin pjesë, rezistojnë. Detyra: Më jep qasje të bazuar në hulumtim. Kufizimet: Përfshi: (1) 3 shkaqe rrënjë dhe diagnostikën, (2) qasjen e ndërtimit marrëdhëniesh 1-me-1, (3) 5 rregullime instruksionale, (4) si përfshi familjen pa fajësim, dhe (5) kur referoni për mbështetje shtesë. Shmang turpërimin, disiplinën shtrënguese.",
      tags: ["angazhimi", "nxënësit_e_shkëputur", "motivim", "marrëdhëniet"]
    }
  ],
  administration: [
    {
      subcategory: "director",
      subject: "Menaxhimi",
      title: "Fjalimi i fillimit të vitit shkollor",
      prompt: "Shkruaj një fjalim motivues 3-minutësh për Drejtorin e shkollës që do t'u drejtohet mësuesve në mbledhjen e parë të shtatorit. Fjalimi duhet të fokusohet në rëndësinë e bashkëpunimit, shëndetin mendor të nxënësve dhe përdorimin e teknologjisë (si AI) si një mjet mbështetës, jo si rrezik.",
      tags: ["fjalim", "lidership", "drejtori"]
    },
    {
      subcategory: "pedagogue",
      subject: "Këshillimi",
      title: "Zgjidhja e konflikteve mes nxënësve",
      prompt: "Vepro si një pedagog shkolle. Përgatit një skript ose udhëzues të shkurtër mediacioni që unë mund ta përdor kur dy nxënës vijnë në zyrën time pas një konflikti verbal. Përfshi pyetje të hapura që nxisin ndjeshmërinë dhe një marrëveshje të thjeshtë paqeje në fund.",
      tags: ["pedagogji", "konflikt", "mediacion"]
    },
    {
      subcategory: "psychologist",
      subject: "Komunikimi me Prindërit",
      title: "Ftesë për takim psikologjik",
      prompt: "Harto një email të sjellshëm, profesional dhe jo-kërcënues drejtuar një prindi, duke e ftuar për një takim me psikologun e shkollës për të diskutuar rënien e papritur të përqendrimit të fëmijës së tyre. Toni duhet të jetë tepër mbështetës.",
      tags: ["komunikim", "psikolog", "prindër"]
    },
    {
      subcategory: "pedagogue",
      subject: "Lojëra Edukative",
      title: "Aktivitet për thyerjen e akullit",
      prompt: "Si pedagog i shkollës, sugjero 3 lojëra të shkurtra (icebreakers) për të zhvilluar shpirtin e skuadrës tek nxënësit që sapo kanë kaluar në klasën e 6-të dhe vijnë nga klasa të ndryshme. Lojërat nuk duhet të kërkojnë materiale fizike dhe duhet të zgjasin maksimumi 10 minuta.",
      tags: ["lojëra", "pedagog", "bashkëpunim"]
    },
    {
      subcategory: "secretary",
      subject: "Administrata",
      title: "Njoftim për prindërit (Mbledhje)",
      prompt: "Shkruaj një njoftim zyrtar dhe të qartë në gjuhën shqipe nga sekretaria e shkollës për prindërit. Njoftimi duhet t'i ftojë ata në mbledhjen e parë të prindërve ku do të diskutohet plani i ri vjetor dhe rregullorja e re për përdorimin e celularëve në shkollë. Lër hapësira për datën, orën dhe klasën.",
      tags: ["njoftim", "sekretari", "prindër"]
    },
    {
      subcategory: "director",
      subject: "Motivimi i Stafit",
      title: "Mesazh në fund të semestrit",
      prompt: "Shkruaj një letër të ngrohtë dhe frymëzuese nga Drejtori i Shkollës për të gjithë mësuesit në fund të semestrit të parë. Letra duhet të vlerësojë lodhjen e tyre, të festojë sukseset e arritura dhe t'u urojë pushime të mbara.",
      tags: ["drejtori", "motivim", "falënderim"]
    },
    {
      subcategory: "pedagogue",
      subject: "Vlerësimi",
      title: "Formular i sjelljes në klasë",
      prompt: "Vepro si një pedagog shkolle. Krijo një shabllon (rubrikë) të thjeshtë vlerësimi që mësuesit mund ta përdorin për të mbajtur shënime mbi sjelljen, pjesëmarrjen dhe bashkëpunimin e nxënësve gjatë punës në grup. Përdor kritere nga 1 në 5.",
      tags: ["pedagog", "vlerësim", "sjellja"]
    },
    {
      subcategory: "psychologist",
      subject: "Mirëqenia",
      title: "Teknika frymëmarrjeje për ankthin",
      prompt: "Përgatit një material të shkurtër me udhëzime (si një fletëpalosje) për nxënësit që vuajnë nga ankthi i lartë para provimeve. Përshkruaj teknikën e frymëmarrjes 4-7-8 në një gjuhë shumë qetësuese dhe ofro dy këshilla praktike për t'u fokusuar.",
      tags: ["psikolog", "ankthi", "këshilla"]
    },
    {
      subcategory: "secretary",
      subject: "Administrata",
      title: "Njoftim për Festat Kombëtare",
      prompt: "Përgatit një njoftim zyrtar dhe konciz nga sekretaria drejtuar stafit dhe prindërve lidhur me pushimet e ardhshme për Festat e Nëntorit. Përfshi datën kur mbyllet shkolla dhe datën e saktë të rikthimit në mësim.",
      tags: ["sekretari", "njoftim", "festat"]
    },
    {
      subcategory: "department_head",
      subject: "Planifikimi",
      title: "Agjenda e takimit të shkencave",
      prompt: "Si Drejtues i Departamentit të Shkencave (Kimi, Biologji, Fizikë), harto një agjendë profesionale për takimin e radhës mujor. Agjenda duhet të mbulojë: rishikimin e planit mësimor, nevojat për materiale laboratorike dhe organizimin e panairit të shkencës.",
      tags: ["departamenti", "agjenda", "shkencat"]
    },
    {
      subcategory: "secondary",
      subject: "Informatikë",
      title: "Hyrje në Algoritme",
      prompt: "Vepro si mësues i informatikës për shkollën e mesme. Shpjego konceptin e 'algoritmit' duke përdorur një shembull nga jeta e përditshme (psh. receta për gatim). Përfshi një detyrë të vogël për nxënësit.",
      tags: ["informatikë", "algoritme", "kodim"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjeografi",
      title: "Sistemi Diellor",
      prompt: "Krijo një udhëtim imagjinar nëpër Sistemin Diellor për nxënësit e klasës së 6-të. Përshkruaj shkurtimisht çdo planet me nga një fakt interesant që do t'i mbajë fëmijët të fokusuar.",
      tags: ["gjeografi", "hapësira", "planetet"]
    },
    {
      subcategory: "secondary",
      subject: "Biologji",
      title: "Gjenetika dhe ADN",
      prompt: "Ndihmo të shpjegoj konceptin e ADN-së dhe trashëgimisë gjenetike për maturantët. Përdor analogjinë e 'librit të recetave' për të bërë materialin të kuptueshëm, dhe harto 3 pyetje testuese.",
      tags: ["biologji", "gjenetika", "adn"]
    },
    {
      subcategory: "primary_lower",
      subject: "Matematikë",
      title: "Mbledhja me mend",
      prompt: "Krijo një lojë me pyetje të shpejta matematikore (mbledhje dhe zbritje deri në 20) për klasën e dytë. Loja duhet të ketë një tematikë me superheronj për t'i motivuar fëmijët.",
      tags: ["matematikë", "lojë", "fillore"]
    },
    {
      subcategory: "secondary",
      subject: "Kimi",
      title: "Reaksionet Ekzotermike",
      prompt: "Shkruaj një shpjegim tërheqës për reaksionet ekzotermike dhe endotermike. Jep dy shembuj nga jeta reale që nxënësit mund t'i shohin në shtëpitë e tyre, si ndezja e zjarrit ose pakoja e ftohtë (cold pack).",
      tags: ["kimi", "reaksione", "eksperimente"]
    },
    {
      subcategory: "all",
      subject: "Edukim Fizik",
      title: "Rregullat e Volejbollit",
      prompt: "Përmblidh rregullat bazë të volejbollit në 5 pika të thjeshta dhe të qarta për nxënësit e shkollës fillore, duke u fokusuar te rrotullimi dhe pasimi i topit.",
      tags: ["sport", "volejboll", "rregulla"]
    },
    {
      subcategory: "primary_upper",
      subject: "Histori",
      title: "Epoka e Skënderbeut",
      prompt: "Përgatit një skenar të shkurtër (role-play) me 3 personazhe rreth një beteje të Skënderbeut, i përshtatshëm për t'u luajtur nga nxënësit e klasës së 7-të gjatë orës së historisë.",
      tags: ["histori", "skënderbeu", "skenar"]
    },
    {
      subcategory: "secondary",
      subject: "Gjuhë Shqipe",
      title: "Llojet e Fjalive",
      prompt: "Krijo një test të shpejtë me 10 pyetje ku nxënësit duhet të dallojnë llojet e fjalive (dëftore, pyetëse, nxitëse, thirrmore). Përfshi një çelës përgjigjesh në fund.",
      tags: ["gjuhë", "gramatikë", "test"]
    },
    {
      subcategory: "all",
      subject: "Edukimi Special",
      title: "Aktivitet për Autizmin",
      prompt: "Vepro si defektolog. Më sugjero 3 aktivitete të qeta dhe miqësore për shqisat, të përshtatshme për nxënës në spektrin e autizmit gjatë momenteve të mbingarkesës në klasë.",
      tags: ["autizmi", "gjithëpërfshirje", "aktivitet"]
    },
    {
      subcategory: "secondary",
      subject: "Fizikë",
      title: "Optika dhe Drita",
      prompt: "Si të shpjegoj fenomenin e thyerjes së dritës (refraksionit) përmes një eksperimenti të thjeshtë me një gotë ujë dhe një laps? Përshkruaj hapat dhe pyetjet për nxënësit.",
      tags: ["fizikë", "optika", "eksperiment"]
    },
    {
      subcategory: "primary_lower",
      subject: "Gjuhë Angleze",
      title: "Kafshët dhe Ngjyrat",
      prompt: "Krijo një vjershë të shkurtër dhe ritmike në anglisht për fëmijët e klasës së parë që t'i ndihmojë të mësojnë emrat e 5 kafshëve dhe ngjyrave të tyre.",
      tags: ["anglisht", "kafshët", "vjershë"]
    },
    {
      subcategory: "primary_upper",
      subject: "Edukim Qytetar",
      title: "Të Drejtat e Fëmijëve",
      prompt: "Harto një plan mësimi 40-minutësh mbi Konventën për të Drejtat e Fëmijëve. Përfshi një lojë grupi ku nxënësit duhet të zgjedhin cilat të drejta janë më thelbësore për një ishull të shkretë.",
      tags: ["qytetari", "të drejtat", "plan mësimi"]
    },
    {
      subcategory: "secondary",
      subject: "Art Figurativ",
      title: "Rilindja Italiane",
      prompt: "Përgatit një detyrë kërkimore për gjimnazistët ku duhet të krahasojnë stilin e Leonardo da Vinçit me atë të Mikelanxhelos. Jepu 3 udhëzime specifike për t'u fokusuar (drita, proporcioni, tema).",
      tags: ["art", "rilindja", "detyrë"]
    },
    {
      subcategory: "primary_lower",
      subject: "Muzikë",
      title: "Kuptimi i Notave",
      prompt: "Si t'i shpjegoj notat muzikore (Do, Re, Mi, Fa, Sol, La, Si) për fëmijët 7-vjeçarë duke përdorur një histori vizuale me shkallë (shkallët e një shtëpie magjike)?",
      tags: ["muzikë", "notat", "histori"]
    },
    {
      subcategory: "secondary",
      subject: "Filozofi",
      title: "Dilema e Tramvajit",
      prompt: "Unë jap filozofi në gjimnaz. Dua të prezantoj 'Dilemën e Tramvajit' (Trolley Problem) për të diskutuar etikën utilitare. Shkruaj skenarin dhe 3 pyetje që provokojnë debat të ashpër mes nxënësve.",
      tags: ["filozofi", "etika", "debat"]
    },
    {
      subcategory: "all",
      subject: "Mjedisi / Ekologjia",
      title: "Ndotja e Plastikës",
      prompt: "Gjenero një fletë pune (worksheet) interaktive ku nxënësit llogarisin përafërsisht sa shishe plastike përdor familja e tyre në një vit dhe u kërkohet të gjejnë tre zgjidhje alternative.",
      tags: ["ekologji", "plastika", "mjedisi"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjeografi",
      title: "Format e Relievit",
      prompt: "Krijo një lojë asocimi (matching game) për 10 forma të relievit (gadishull, gji, mal, luginë, etj.) bashkë me përshkrimet e tyre të thjeshtuara në gjuhën shqipe.",
      tags: ["gjeografi", "relievi", "lojë"]
    },
    {
      subcategory: "secondary",
      subject: "Gjuhë e Huaj (Frëngjisht)",
      title: "Prezantimi i Vetes",
      prompt: "Përgatit një listë me 10 fraza bazë në frëngjisht (dhe përkthimin e tyre në shqip) që nxënësit mund t'i përdorin për t'u prezantuar në një letërkëmbim (pen-pal) me shkollat partnere.",
      tags: ["frëngjisht", "komunikim", "fjalor"]
    },
    {
      subcategory: "primary_lower",
      subject: "Dituri Natyre",
      title: "Cikli i Ujit",
      prompt: "Përshkruaj ciklin e ujit (avullimi, kondensimi, rreshjet) përmes syve të një pike uji të quajtur 'Pika'. Shkruaje si një përrallë të shkurtër e tërheqëse për klasën e 3-të.",
      tags: ["natyra", "uji", "përrallë"]
    },
    {
      subcategory: "secondary",
      subject: "Matematikë",
      title: "Gjeometria në Arkitekturë",
      prompt: "Harto një detyrë për projekt ku nxënësit analizojnë përdorimin e figurave gjeometrike (trekëndësha, rrathë) në urat e njohura ose në ndërtesat lokale. Çfarë formulash duhet të përdorin për llogaritje?",
      tags: ["matematikë", "gjeometri", "arkitekturë"]
    },
    {
      subcategory: "all",
      subject: "Kujdestaria e Klasës",
      title: "Lojë për Bashkëpunim",
      prompt: "Më sugjero një lojë ekipore (team-building) 15-minutëshe që mund të bëhet brenda në klasë me bankat dhe karriget ekzistuese, për të theksuar rëndësinë e të dëgjuarit të njëri-tjetrit.",
      tags: ["kujdestaria", "bashkëpunim", "ekip"]
    },
    {
      subcategory: "primary_upper",
      subject: "Histori",
      title: "Qytetërimet e Lashta",
      prompt: "Krijo një tabelë krahasuese mes Egjiptit të Lashtë dhe Greqisë së Lashtë. Krahaso elemente si lumi, perënditë, shkrimi dhe arkitektura kryesore.",
      tags: ["histori", "egjipti", "greqia"]
    },
    {
      subcategory: "secondary",
      subject: "Ekonomi / Ndërmarrësi",
      title: "Krijimi i një Biznesi",
      prompt: "Për orën e ndërmarrësisë, harto një strukturë projekti 'Shark Tank' ku nxënësit e shkollës së mesme duhet të propozojnë një biznes eko-miqësor. Çfarë pyetjesh duhet t'u bëjë 'juria'?",
      tags: ["ekonomi", "biznes", "projekt"]
    },
    {
      subcategory: "primary_lower",
      subject: "Gjuhë Shqipe",
      title: "Drejtshkrimi - Shkronja e Madhe",
      prompt: "Përgatit një tekst prej 5 fjalish rreth një udhëtimi në qytetin e Tiranës, por pa asnjë shkronjë të madhe dhe shenjë pikësimi. Detyra e nxënësve do jetë t'i korrigjojnë.",
      tags: ["drejtshkrim", "gjuhë", "ushtrim"]
    },
    {
      subcategory: "secondary",
      subject: "Sociologji",
      title: "Roli i Mediave Sociale",
      prompt: "Gjenero 4 pyetje eseistike për orën e sociologjisë mbi ndikimin e mediave sociale në identitetin e adoleshentëve dhe presionin e bashkëmoshatarëve.",
      tags: ["sociologji", "media", "ese"]
    },
    {
      subcategory: "all",
      subject: "Psikologji Shkollore",
      title: "Teknika të Mendjes së Qetë (Mindfulness)",
      prompt: "Si mësues, më ndihmo të integroj një ushtrim 3-minutësh 'mindfulness' në fillim të orës së mësimit për të qetësuar klasën pas pushimit të gjatë. Çfarë duhet t'u them fëmijëve?",
      tags: ["psikologji", "qetësim", "mindfulness"]
    },
    {
      subcategory: "primary_upper",
      subject: "Matematikë",
      title: "Llogaritja e Buxhetit",
      prompt: "Krijo një problemë sfiduese ku nxënësi ka 5000 denarë (ose lekë) për të blerë pica dhe lëngje për ditëlindjen e tij me 10 shokë. Jepu atyre çmimet dhe kërkoju të llogarisin kusurin.",
      tags: ["matematikë", "buxheti", "problemë"]
    },
    {
      subcategory: "secondary",
      subject: "Letërsi",
      title: "Krahasimi i Personazheve",
      prompt: "Përgatit një kornizë pune (rubrikë) që udhëzon maturantët se si të shkruajnë një ese krahasuese mes Hamletit dhe Don Kishotit, duke u fokusuar te çmenduria dhe idealizmi.",
      tags: ["letërsi", "ese", "krahasim"]
    },
    {
      subcategory: "primary_lower",
      subject: "Art dhe Punë Dore",
      title: "Krijimi i Maskave",
      prompt: "Më jep një udhëzim të qartë hap-pas-hapi për një orë arti (klasa 4) për të krijuar maska teatrale duke përdorur pjata letre, fije dhe ngjyra uji.",
      tags: ["art", "krijimtari", "punë dore"]
    },
    {
      subcategory: "secondary",
      subject: "Gjuhë Gjermane",
      title: "Blerjet në Supermarket",
      prompt: "Krijo një dialog në gjuhën gjermane mes një shitësi dhe një klienti në një furrë buke. Fjalori duhet të jetë në nivelin A2 dhe të theksojë mirësjelljen ('Ich hätte gerne...', 'Danke').",
      tags: ["gjermanisht", "dialog", "blerje"]
    },
    {
      subcategory: "secondary",
      subject: "Kimi",
      title: "Lidhjet Kovalente (Protokolli CPTC)",
      prompt: "Roli: Mësues ekspert i kimisë. Konteksti: Nxënësit e vitit të parë po e kanë të vështirë të kuptojnë ndryshimin mes lidhjeve kovalente dhe jonike. Detyra: Shpjego këto dy koncepte duke përdorur një analogji nga jeta reale (psh. ndarja ose vjedhja e ushqimit mes miqve). Kufizimet: Përdor formatim me pika (bullet points). Shmang zhargonin e panevojshëm akademik. Shto një pyetje reflektuese në fund.",
      tags: ["kimi", "cptc", "analogji"]
    },
    {
      subcategory: "all",
      subject: "Vlerësimi",
      title: "Gjenerator i Rubrikave (Tabelë Markdown)",
      prompt: "Korniza CPTC. Konteksti: Duhet të vlerësoj një projekt hulumtues të nxënësve. Persona: Ekspert i vlerësimit pedagogjik. Detyra: Krijo një rubrikë vlerësimi (grading rubric) për një projekt grupor. Kriteret duhet të përfshijnë: Bashkëpunimin, Përmbajtjen, Prezantimin dhe Përdorimin e Burimeve. Kufizimet: Dalja duhet të jetë rreptësisht në format tabele (Markdown Table). Kolonat duhet të tregojnë nivelet: Shkëlqyeshëm, Mirë, Mjaftueshëm, Pamjaftueshëm.",
      tags: ["rubrikë", "vlerësim", "tabelë"]
    },
    {
      subcategory: "all",
      subject: "Edukim Special",
      title: "Përshtatja e Tekstit për ADHD",
      prompt: "Roli: Defektolog dhe psikolog shkollor. Konteksti: Kam një tekst të gjatë rreth rregullave të sigurisë në laborator që duhet t'ua jap nxënësve me ADHD. Detyra: Merr këtë tekst [FUT TEKSTIN KËTU] dhe rishkruaje për të maksimizuar fokusin. Kufizimet: Përdor fjali shumë të shkurtra. Thekso me shkronja të zeza (bold) vetëm fjalët kyçe ose veprimet kritike. Largo çdo fjali plotësuese të panevojshme.",
      tags: ["adhd", "përshtatje", "inkluzion"]
    },
    {
      subcategory: "secondary",
      subject: "Matematikë",
      title: "Zgjidhës hap-pas-hapi (Sokratik)",
      prompt: "Roli: Tutor i avancuar i matematikës Sokratike. Konteksti: Nxënësi po përpiqet të zgjidhë ekuacione kuadratike. Detyra: Mos ia jep përgjigjen përfundimtare. Udhëzoje nxënësin drejt zgjidhjes duke i bërë një pyetje në një kohë. Kufizimet: Përgjigju vetëm me 1 ose 2 fjali dhe përfundo gjithmonë me një pyetje drejtuese. Filloni duke pyetur nxënësin se cilin ekuacion dëshiron të zgjidhë.",
      tags: ["matematikë", "sokratik", "zgjidhje"]
    },
    {
      subcategory: "secondary",
      subject: "Histori",
      title: "Simulim i Debatit Historik",
      prompt: "Korniza CPTC. Persona: Moderator i paanshëm debatesh historike. Konteksti: Ora e historisë, tema: 'Lufta e Ftohtë'. Detyra: Gjenero 4 deklarata të forta dhe provokuese që do të nxisin debat mes nxënësve. Ndaje klasën virtualisht në dy kampe (Pro dhe Kundër). Kufizimet: Deklaratat duhet të jenë të bazuara në fakte historike, por të hapura për interpretime etike. Mos përfshi përgjigje, vetëm deklaratat e debatit.",
      tags: ["histori", "debat", "cptc"]
    },
    {
      subcategory: "primary_upper",
      subject: "Biologji",
      title: "Plani Mësimor 5E: Fotosinteza",
      prompt: "Roli: Profesor i Biologjisë. Detyra: Krijo një plan mësimor të formatit 5E (Engage, Explore, Explain, Elaborate, Evaluate) për procesin e fotosintezës për klasën e 6-të. Formati: Përdor listë të numëruar për secilën fazë. Kufizimet: Kufizoje secilën fazë në saktësisht 2 fjali të shkurtra dhe praktike për t'u lexuar shpejt nga mësuesi.",
      tags: ["biologji", "plan", "5E"]
    },
    {
      subcategory: "secondary",
      subject: "Gjuhë Angleze",
      title: "Intervistë Pune (Roleplay interaktiv)",
      prompt: "Roli: Menaxher i Burimeve Njerëzore. Konteksti: Nxënësit po praktikojnë anglishten për intervista pune reale. Detyra: Hapi 1 - Më bëj pyetjen e parë të intervistës në anglisht. Hapi 2 - Prit përgjigjen time. Hapi 3 - Korrigjo gramatikën time dhe bëj pyetjen tjetër. Kufizimet: Vepro me rreptësi profesionale dhe mos gjenero të gjitha pyetjet përnjëherë. Bëj vetëm një pyetje dhe ndalo.",
      tags: ["anglisht", "intervistë", "interaktiv"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukatë Fizike",
      title: "Gjimnastikë në Klasë (Ditë me shi)",
      prompt: "Persona: Trajner Olimpik për fëmijë. Konteksti: Është ditë me shi, ora e fizkulturës duhet të mbahet brenda në klasë pranë bankave. Detyra: Gjenero 3 ushtrime fizike statike (stretching dhe ekuilibër) që mund të bëhen pa rrezik duke qëndruar në vend. Kufizimet: Shpjego secilin ushtrim në saktësisht 2 hapa të thjeshtë, pa përdorur pajisje.",
      tags: ["sport", "siguri", "ushtrime"]
    },
    {
      subcategory: "secondary",
      subject: "Informatikë",
      title: "Ciklet në Python (Komentim Kodi)",
      prompt: "Roli: Inxhinier Softueri Kryesor (Senior Developer). Konteksti: Po u mësoj ciklet 'For' dhe 'While' në Python klasës së 10-të. Detyra: Më jep kodin për 3 ushtrime praktike (nga fillestar te i avancuar). Kufizimet: Kodi duhet të përmbajë komente në gjuhën shqipe për çdo rresht logjik. Përdor blloqe kodi të formatuara qartë (Markdown code blocks).",
      tags: ["kodim", "python", "informatikë"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjeografi",
      title: "Gjuetia e Thesareve Gjeografike",
      prompt: "Konteksti: Hartat dhe koordinatat gjeografike. Detyra: Gjenero një lojë gjuetie thesaresh (Scavenger Hunt) për në klasë. Jepu nxënësve 5 gjëegjëza (riddles) të shkurtra me rima, ku secila të çon të gjesh një kontinent ose oqean të caktuar në hartën e botës. Kufizimet: Shkruaj gjëegjëzat në shqip të rrjedhshëm dhe lër zgjidhjet në fund të fshehura me kllapa.",
      tags: ["gjeografi", "lojë", "hartat"]
    },
    {
      subcategory: "secondary",
      subject: "Gjuhë Shqipe",
      title: "Analiza Stilistike (Ton Akademik)",
      prompt: "Roli: Kritik Letrar i Universitetit. Detyra: Bëj një analizë stilistike të poezisë moderne shqipe bazuar tek [FUT POEZINË]. Kufizimet: Përdor një ton tejet akademik dhe objektiv. Përfshi detyrimisht analiza të metrikës dhe figurave letrare (metaforat, metonimia). Ndaje tekstin saktësisht në: Hyrje, Shtjellim, Konkluzion.",
      tags: ["letërsi", "analizë", "akademik"]
    },
    {
      subcategory: "primary_lower",
      subject: "Muzikë",
      title: "Tonaliteti i Shpjeguar me Emocione",
      prompt: "Persona: Kompozitor klasik i dashur. Detyra: Shpjego konceptin e 'Tonalitetit' (Dallimi mes Mazhorit dhe Minorit) duke e lidhur atë drejtpërdrejt me emocionet njerëzore (i lumtur vs i trishtuar). Kufizimet: Shkruaje si një histori të vogël vizuale për fëmijë të klasës së 3-të. Maksimumi 150 fjalë. Asnjë term i rëndë muzikor pa u shpjeguar.",
      tags: ["muzikë", "emocione", "tregim"]
    },
    {
      subcategory: "secondary",
      subject: "Art Figurativ",
      title: "Udhëzues i Stilit Kubist",
      prompt: "Konteksti: Ora e historisë së artit, po mësojmë Kubizmin. Detyra: Krijo një udhëzues praktik me 5 pika se si një nxënës mund të vizatojë një portret të shpejtë të shokut të tij duke përdorur vetëm forma gjeometrike (në stilin e Pikasos). Kufizimet: Përdor folje veprore direkte (Bëj, Vizato, Ndaj). Formatoje si një listë kontrolli (Checklist).",
      tags: ["art", "kubizmi", "udhëzues"]
    },
    {
      subcategory: "all",
      subject: "Menaxhimi i Klasës",
      title: "Skripte për Përforcim Pozitiv",
      prompt: "Roli: Psikolog i sjelljes (Behavioral Psychologist). Konteksti: Kam një klasë (klasa 7) që është tejet e zhurmshme pas pushimit të gjatë. Detyra: Më ofro 3 skripte (fjalë për fjalë çfarë duhet të them para klasës) për të qetësuar nxënësit duke përdorur përforcimin pozitiv (Positive Reinforcement) në vend të të bërtiturës ose dënimeve.",
      tags: ["menaxhim", "sjellja", "psikologji"]
    },
    {
      subcategory: "secondary",
      subject: "Filozofi",
      title: "Diskutim Etik me Sokratin",
      prompt: "Persona: Filozofi i lashtë Sokrati. Detyra: Dua të diskutoj me ty idenë e 'Drejtësisë' në shoqërinë moderne. Kufizimet: Asnjëherë mos fol më shumë se 2 fjali në të njëjtën kohë. Asnjëherë mos jep përkufizime të tua përfundimtare. Gjithmonë u përgjigj duke më bërë një pyetje që më shtyn të gjej të metat në argumentin tim. Fillo bisedën duke më pyetur.",
      tags: ["filozofi", "sokrati", "etika"]
    },
    {
      subcategory: "primary_lower",
      subject: "Matematikë",
      title: "Gjenerator i Problemeve me Tekst",
      prompt: "Konteksti: Klasa e 3-të, po praktikojmë tabelën e shumëzimit. Detyra: Gjenero 5 probleme matematikore tekstuale ku personazhet kryesore janë kafshët e fermës që mbledhin ushqim për dimër. Formati: Përfshi zgjidhjen me shpjegim menjëherë pas çdo pyetjeje, të ndarë qartë me një vizë vizuale (---).",
      tags: ["matematikë", "probleme", "shumëzimi"]
    },
    {
      subcategory: "secondary",
      subject: "Orientimi në Karrierë",
      title: "Pyetësor për Zgjedhjen e Fakultetit",
      prompt: "Roli: Këshilltar i Karrierës. Konteksti: Një maturant është shumë i stresuar sepse nuk e di se çfarë dege të zgjedhë në universitet. Detyra: Krijo një pyetësor vetë-vlerësimi me 10 pyetje (shkalla e përgjigjeve nga 1-5) që do ta ndihmojë të zbulojë prirjet e tij/saj (STEM vs Shkenca Humanitare vs Arte). Kufizimet: Gjuha të jetë motivuese.",
      tags: ["karriera", "orientim", "pyetësor"]
    },
    {
      subcategory: "secondary",
      subject: "Gjuhë e Huaj (Frëngjisht)",
      title: "Roleplay: Turisti i Humbur",
      prompt: "Roli: Turist i humbur në Paris. Detyra: Unë do të luaj rolin e një qytetari francez. Ti duhet të më pyesësh për drejtime rruge në frëngjisht (niveli B1). Kufizimet: Bëj vetëm nga një pyetje dhe prit reagimin tim. Mos gjenero bisedën e plotë. Korrigjo gabimet e mia gramatikore me mirësjellje në kllapa pas çdo përgjigjeje timen.",
      tags: ["frëngjisht", "komunikim", "interaktiv"]
    },
    {
      subcategory: "primary_upper",
      subject: "Fizikë",
      title: "SOP: Eksperimenti i Fërkimit",
      prompt: "Konteksti: Eksperiment shkollor për Forcën e Fërkimit. Detyra: Më shkruaj Procedurën Standarde të Veprimit (SOP) për këtë eksperiment laboratorik. Formati i daljes i detyrueshëm: [Qëllimi], [Materialet], [Hapat nga 1 në 5], [Kujdesi dhe Siguria]. Kufizimet: Përdor ton strikt objektiv dhe shkencor.",
      tags: ["fizikë", "eksperiment", "procedurë"]
    },
    {
      subcategory: "secondary",
      subject: "Sociologji",
      title: "Ese Neutrale: Cancel Culture",
      prompt: "Roli: Analist Objektiv i Mediave. Detyra: Gjenero një ese strukturore prej 300 fjalësh mbi temën: 'Kultura e Anulimit (Cancel Culture) dhe liria e fjalës te të rinjtë'. Kufizimet: Teksti duhet të jetë absolutisht neutral. Duhet të përmbajë saktësisht 3 argumente pro dhe 3 kundër. Konkluzioni nuk duhet të mbajë asnjë anë.",
      tags: ["sociologji", "ese", "media"]
    },
    {
      subcategory: "all",
      subject: "Inxhinieria e Prompteve",
      title: "Mjeshtri i Testeve (MCQ)",
      prompt: "Roli: Mjeshtër i Krijimit të Testeve Standardizuara. Detyra: Merr këtë tekst [FUT TEKSTIN TËND KËTU] dhe gjenero 10 pyetje me zgjedhje të shumëfishtë (MCQ). Kufizimet: Formato 4 opsione për secilën pyetje (A, B, C, D). Saktësisht një përgjigje e saktë. Distraktorët (përgjigjet e gabuara) duhet të duken jashtëzakonisht të besueshme për të testuar mendimin e thellë.",
      tags: ["test", "vlerësim", "mcq"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjeografi",
      title: "Analogjia Vullkanike",
      prompt: "Konteksti: Mësimi i gjeografisë rreth vullkaneve për fëmijë. Detyra: Krijo një analogji vizuale fantastike se si funksionon një vullkan, duke e krahasuar atë direkt me një shishe me lëng të gazuar (soda) që shkundet fort. Kufizimet: Përfshi dhe shpjego termat kyç gjatë analogjisë: magma, presioni, llava dhe korja e tokës.",
      tags: ["gjeografi", "vullkani", "analogji"]
    },
    {
      subcategory: "primary_lower",
      subject: "Matematikë",
      title: "Escape Room në Letër",
      prompt: "Persona: Magjistari i Numrave. Detyra: Krijo një sfidë matematike ('Escape Room') në letër për fëmijët e klasës së 4-të. Saktësisht 7 probleme me mbledhje dyshifrore. Zgjidhja e secilit problem duhet të korrespondojë me një shkronjë sekrete (psh. 25 = K, 12 = A) që në fund formon fjalën e saktë 'KAMPION'.",
      tags: ["matematikë", "lojë", "escape room"]
    },
    {
      subcategory: "secondary",
      subject: "Edukim Qytetar",
      title: "Simulimi i Buxhetit të Shtetit",
      prompt: "Konteksti: Tema e taksave dhe ndarjes së buxhetit të shtetit. Detyra: Harto një lojë rolesh (Roleplay Game) për në klasë ku nxënësit e klasës së 9-të janë anëtarë të parlamentit dhe duhet të ndajnë me kompromis një buxhet imagjinar prej 100 monedhash në 5 ministri. Kufizimet: Cilat janë rregullat e lojës dhe udhëzimet step-by-step për mësuesin?",
      tags: ["qytetari", "simulim", "buxheti"]
    },
    {
      subcategory: "all",
      subject: "Edukim Special",
      title: "Ushtrime Logopedike për Belbëzimin",
      prompt: "Roli: Terapist i të folurit (Logoped). Konteksti: Nxënësi ka belbëzim të lehtë dhe ndjen shumë vështirësi e stres në leximin me zë para klasës. Detyra: Më sugjero 5 ushtrime praktike vokale ose të frymëmarrjes që mund t'i bëj me të veçmas përpara se të fillojmë leximin, në mënyrë që kordat vokale të relaksohen. Formati: Bullet points të shkurtra.",
      tags: ["inkluzion", "logopedi", "lexim"]
    },
    {
      subcategory: "secondary",
      subject: "Matematikë",
      title: "Vëllimi i Trupave 3D",
      prompt: "Roli: Mësues matematike. Konteksti: Gjeometria e hapësirës (koni, cilindri, sfera) për klasën e 9-të. Detyra: Krijo 3 probleme nga jeta reale ku nxënësit duhet të llogaritin vëllimin e këtyre trupave (p.sh. një gotë uji, një top basketbolli). Kufizimet: Jep zgjidhjet e plota hap pas hapi në një format tabele Markdown.",
      tags: ["matematikë", "gjeometri", "vëllimi"]
    },
    {
      subcategory: "secondary",
      subject: "Letërsi",
      title: "Analiza e Romanit 'Kështjella'",
      prompt: "Roli: Profesor letërsie. Konteksti: Analiza e romanit 'Kështjella' nga Ismail Kadare, klasa 11. Detyra: Përgatit 5 pyetje kritike për diskutim rreth simbolikës së kështjellës dhe qëndresës shqiptare. Kufizimet: Shto një udhëzues të shkurtër (3 pika) se si mësuesi të menaxhojë debatin në klasë nëse nxënësit devijojnë temën.",
      tags: ["letërsi", "kadare", "analizë"]
    },
    {
      subcategory: "primary_upper",
      subject: "Histori",
      title: "Shkaqet e L. P. Botërore",
      prompt: "Korniza CPTC. Roli: Historian dhe mësues. Konteksti: Shkaqet e Luftës së Parë Botërore për klasën e 8-të. Detyra: Shpjego termin 'Fuçia e barutit e Ballkanit' përmes një analogjie të thjeshtë me një zënkë në oborrin e shkollës ku të gjithë përfshihen. Kufizimet: Mbaje tekstin nën 200 fjalë dhe përdor një gjuhë shumë të qartë.",
      tags: ["histori", "lufta", "analogji"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjeografi",
      title: "Relievi i Shqipërisë (5E)",
      prompt: "Roli: Mësues gjeografie. Konteksti: Tema 'Relievi i Shqipërisë' (Malet, Fushat, Bregdeti) për klasën e 9-të. Detyra: Krijo një plan mësimor 45-minutësh duke përdorur modelin 5E (Engage, Explore, Explain, Elaborate, Evaluate). Kufizimet: thekso përdorimin e hartës fizike të Shqipërisë në fazën 'Explore'.",
      tags: ["gjeografi", "relievi", "plan_mësimor"]
    },
    {
      subcategory: "secondary",
      subject: "Biologji",
      title: "Gjenetika dhe Kryqëzimet",
      prompt: "Roli: Gjenetist dhe edukator. Konteksti: Gjimnaz, trashëgimia gjenetike. Detyra: Gjenero 4 ushtrime gjenetike ku nxënësit përdorin Rrjetën e Punetit për të llogaritur probabilitetin e tipareve te pasardhësit (p.sh. ngjyra e luleve të bizeleve). Kufizimet: Ndaj pyetjet nga përgjigjet e sakta.",
      tags: ["biologji", "gjenetika", "ushtrime"]
    },
    {
      subcategory: "primary_upper",
      subject: "Kimi",
      title: "Reaksionet Kimike (Demonstrim)",
      prompt: "Roli: Mësues i kimisë. Konteksti: Nxënësit e klasës së 8-të po mësojnë reaksionet e shpejta kimike. Detyra: Më shkruaj skenarin fjalë-për-fjalë se çfarë t'u them atyre ndërkohë që përziej sodë buke me uthull në një vullkan letre. Kufizimet: Duhet të jetë tërheqës dhe të përdorë termat 'acid' dhe 'bazë'.",
      tags: ["kimi", "eksperiment", "demonstrim"]
    },
    {
      subcategory: "primary_upper",
      subject: "Fizikë",
      title: "Lëvizja Drejtvizore (Formula)",
      prompt: "Roli: Fizikan. Konteksti: Nxënësit e klasës së 7-të po e kanë të vështirë formulën V=S/T (Shpejtësia=Rruga/Koha). Detyra: Shpjegoje këtë formulë duke përdorur shembullin e vrapimit të Usain Bolt në 100 metra. Kufizimet: Përdor fjali të thjeshta dhe shto një detyrë të vockël në fund.",
      tags: ["fizikë", "shpejtësia", "formula"]
    },
    {
      subcategory: "primary_upper",
      subject: "Informatikë",
      title: "Bazat e Scratch (Programim)",
      prompt: "Roli: Instruktor kodimi. Konteksti: Nxënësit e klasës së 6-të po hapin Scratch për herë të parë. Detyra: Krijo një udhëzues me 5 hapa të thjeshtë se si të bëjnë macen e Scratch të ecë 10 hapa dhe të thotë 'Përshëndetje'. Kufizimet: Përdor terma ekzaktë të programit ('Klikoni Flamurin e Gjelbër').",
      tags: ["informatikë", "scratch", "programim"]
    },
    {
      subcategory: "primary_upper",
      subject: "Anglisht",
      title: "Past Continuous (Gramatikë)",
      prompt: "Roli: Tutor i Gjuhës Angleze. Konteksti: Nxënësit e klasës së 7-të shpesh e ngatërrojnë Past Simple me Past Continuous. Detyra: Më jep 5 fjali ku një veprim i gjatë ndërpritet nga një veprim i shkurtër (p.sh. 'I was reading when the phone rang'). Kufizimet: Shto përkthimin në shqip për çdo fjali.",
      tags: ["anglisht", "gramatikë", "past_continuous"]
    },
    {
      subcategory: "primary_upper",
      subject: "Edukim Fizik",
      title: "Rregullat e Hendbollit",
      prompt: "Roli: Gjyqtar Sportiv. Konteksti: Fillon turneu i shkollës në Hendboll (klasa 6-9). Detyra: Përmblidh 5 rregullat thelbësore të hendbollit që nxënësit i harrojnë më shpesh (psh. hapat, hyrja në zonë). Kufizimet: Përdor gjuhë strikte por inkurajuese. Përdor pika.",
      tags: ["sport", "hendboll", "rregullat"]
    },
    {
      subcategory: "primary_lower",
      subject: "Art Figurativ",
      title: "Proporcioni i Portretit",
      prompt: "Roli: Mësues vizatimi. Konteksti: Klasa e 5-të. Nxënësit vizatojnë sytë në ballë dhe gojën tek mjekra. Detyra: Shpjegoje rregullin e masës (proporcionit) të fytyrës njerëzore në 3 hapa magjikë. Kufizimet: Bëje si një tregim të shkurtër ku fytyra është një 'hartë thesaresh'.",
      tags: ["art", "portreti", "vizatim"]
    },
    {
      subcategory: "primary_lower",
      subject: "Muzikë",
      title: "Njohja me Korin e Shkollës",
      prompt: "Roli: Dirigjent i dashur. Konteksti: Po ftoj nxënësit e klasës së 4-të t'i bashkohen korit të shkollës. Detyra: Shkruaj një letër ftese inkurajuese që t'ua jap fëmijëve ta çojnë në shtëpi. Kufizimet: Thekso se nuk ka rëndësi nëse mendojnë se 'nuk kanë zë', me rëndësi është argëtimi.",
      tags: ["muzikë", "kori", "këndim"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukim Qytetar",
      title: "Rregullat e Bashkëjetesës",
      prompt: "Roli: Kujdestar Klase. Konteksti: Klasa e 5-të. Nxënësit po zihen për bankat. Detyra: Krijo një aktivitet 'Pema e Miqësisë' ku nxënësit shkruajnë vlera të bashkëjetesës në gjethe letre. Kufizimet: Ofroni 5 pyetje reflektimi për ta diskutuar në fund të lojës.",
      tags: ["qytetari", "bashkëjetesa", "vlera"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukim Special",
      title: "Ndihmë për Disgrafinë",
      prompt: "Korniza CPTC. Roli: Defektolog. Konteksti: Kam një nxënës në klasën e 3-të me shkrim shumë të pakuptueshëm dhe lodhet shpejt (dyshim për disgrafi). Detyra: Sugjero 5 mjete të vogla (psh. mbajtëse lapsi ergonomike) dhe përshtatje që mund t'i bëj në detyrat e shtëpisë për ta lehtësuar. Kufizimet: Praktike dhe me kosto zero.",
      tags: ["inkluzion", "disgrafia", "shkrimi"]
    },
    {
      subcategory: "primary_upper",
      subject: "Gjuhë Shqipe",
      title: "Struktura e Esesë",
      prompt: "Roli: Mësues i Gjuhës Shqipe. Konteksti: Nxënësit e klasës së 9-të po shkruajnë esetë e para argumentuese. Detyra: Krijo një skemë 'Hamburgeri' për strukturën e esesë (Hyrja = Buka, Mishi = Argumenti, etj.). Kufizimet: Shto një shembull vizual dhe thekso rëndësinë e paragrafit përmbyllës.",
      tags: ["gjuhë_shqipe", "ese", "strukturë"]
    },
    {
      subcategory: "primary_upper",
      subject: "Matematikë",
      title: "Ekuacionet me një të panjohur",
      prompt: "Roli: Tutor Matematike. Konteksti: Zgjidhja e ekuacioneve bazë (psh. 2x + 3 = 11) për klasën e 8-të. Detyra: Përdor metodën e 'Peshoreve' për t'u shpjeguar nxënësve pse 'çfarë bëjmë në njërën anë, duhet ta bëjmë edhe në tjetrën'. Kufizimet: Jep 3 ekuacione për t'i zgjidhur ata si detyrë.",
      tags: ["matematikë", "ekuacione", "algjebër"]
    },
    {
      subcategory: "primary_lower",
      subject: "Histori",
      title: "Përralla e Skënderbeut",
      prompt: "Roli: Historian për fëmijë. Konteksti: Klasa e 4-të, historia e Gjergj Kastriot Skënderbeut. Detyra: Përmblidhe jetën e tij (Marrja peng, Kthimi, Mbrojtja e Krujës) si një tregim i shkurtër epik, i përshtatshëm për fëmijë 9 vjeç. Kufizimet: Maksimumi 250 fjalë. thekso vlerën e lirisë.",
      tags: ["histori", "skënderbeu", "tregim"]
    },
    {
      subcategory: "secondary",
      subject: "Gjeografi",
      title: "Debat: Ndryshimet Klimatike",
      prompt: "Roli: Profesor Ekologjie. Konteksti: Klasa 10, tema Ndryshimet Klimatike. Detyra: Ndaj klasën virtualisht në dy grupe ('Vendet e Zhvilluara' vs 'Vendet në Zhvillim') dhe jepu secilit grup 3 argumente se pse pala tjetër duhet të paguajë më shumë për mbrojtjen e ambientit. Kufizimet: Mbaje gjuhën akademike.",
      tags: ["gjeografi", "klima", "debat"]
    },
    {
      subcategory: "primary_upper",
      subject: "Biologji",
      title: "Organelet e Qelizës (Analogji)",
      prompt: "Roli: Biolog qelizor. Konteksti: Klasa e 6-të, struktura e qelizës shtazore. Detyra: Shpjego bërthamën, mitokondritë dhe membranën qelizore duke e krahasuar qelizën me një Qytet të vogël (Kryebashkiaku, Centrali Elektrik, Kufiri). Kufizimet: Formuloje tabelë Markdown.",
      tags: ["biologji", "qeliza", "analogji"]
    },
    {
      subcategory: "secondary",
      subject: "Kimi",
      title: "Familjet e Tabelës Periodike",
      prompt: "Roli: Mësues kimie. Konteksti: Nxënësit e klasës së 9-të po mësojnë Tabelën Periodike. Detyra: Përshkruaj 'Metalet Alkalo-Tokësore' dhe 'Halogjenët' sikur të ishin familje rivale në një lagje. Cilat janë vetitë e tyre ekstreme? Kufizimet: Të jetë humoristike por me të dhëna 100% të sakta.",
      tags: ["kimi", "elementet", "tabela_periodike"]
    },
    {
      subcategory: "secondary",
      subject: "Fizikë",
      title: "Ligji i Ohmit (Qarqet)",
      prompt: "Roli: Inxhinier Elektrik. Konteksti: Klasa e 9-të, Rryma Elektrike. Detyra: Shpjego tensionin (U), Rrymën (I) dhe Rezistencën (R) duke përdorur analogjinë e rrjedhjes së ujit në një gyp. Kufizimet: Shto 3 pyetje me Zgjedhje të Shumëfishtë (MCQ) në fund.",
      tags: ["fizikë", "rryma", "ligji_ohmit"]
    },
    {
      subcategory: "primary_lower",
      subject: "Informatikë",
      title: "Rregullat e Internetit",
      prompt: "Korniza CPTC. Roli: Polic i Internetit (Edukativ). Konteksti: Fëmijët e klasës së 5-të hapin llogaritë e tyre të para sociale. Detyra: Shkruaj 5 rregullat e arta të sigurisë në internet (psh. Mos prano ftesa nga të panjohur, Mos shpërnda foto private). Kufizimet: Përdor pika dhe emoji për ta bërë miqësore.",
      tags: ["informatikë", "siguria", "internet"]
    },
    {
      subcategory: "primary_lower",
      subject: "Anglisht",
      title: "Vocab: Ushqimet e Shëndetshme",
      prompt: "Roli: Tutor Gjuhësor. Konteksti: Klasa 3, Tema e Ushqimit (Food). Detyra: Gjenero një listë me 10 fjalë ushqimesh të shëndetshme në anglisht, dhe krijo një lojë 'Gjej Cili Ushqim Jam' (I am red, I grow on trees... -> Apple). Kufizimet: Përdor anglisht tepër të thjeshtë.",
      tags: ["anglisht", "ushqimi", "lojëra"]
    },
    {
      subcategory: "primary_upper",
      subject: "Edukim Qytetar",
      title: "Sistemi i Qeverisjes (Demokracia)",
      prompt: "Roli: Profesor i Shkencave Politike. Konteksti: Klasa e 8-të, Ndarja e Pushteteve. Detyra: Shpjego pse pushteti Legjislativ, Ekzekutiv dhe Gjyqësor duhet të jenë të ndarë, duke përdorur një shembull me arbitrin, lojtarët dhe rregullat e një ndeshjeje futbolli. Kufizimet: Saktësi teknike maksimale.",
      tags: ["qytetari", "demokracia", "pushteti"]
    },
    {
      subcategory: "primary_lower",
      subject: "Edukim Special",
      title: "Menaxhimi i nxënësve me ADHD",
      prompt: "Roli: Ekspert i Inkluzionit. Konteksti: Mësuesit ankohen se një nxënës me ADHD në klasën e 2-të çohet vazhdimisht gjatë mësimit. Detyra: Ofro 3 strategji ku lëvizja kthehet në avantazh (psh. nxënësi bëhet 'ndihmësi' i mësueses që shpërndan fletët). Kufizimet: Qasje 100% pozitive.",
      tags: ["inkluzion", "adhd", "menaxhim"]
    },
    {
      subcategory: "secondary",
      subject: "Histori",
      title: "Rilindja Kombëtare Shqiptare",
      prompt: "Roli: Mësues i Historisë. Konteksti: Nxënësit e klasës së 9-të. Detyra: Analizo rolin e Naim dhe Sami Frashërit në Rilindjen Kombëtare. Kërkoju nxënësve të reflektojnë mbi pyetjen: 'A ka më shumë fuqi pushka apo penda në ndërtimin e një kombi?' Kufizimet: Thekso rëndësinë e shkollës shqipe.",
      tags: ["histori", "rilindja", "shqipëria"]
    },
    {
      subcategory: "primary_lower",
      subject: "Gjuhë Shqipe",
      title: "Drejtshkrimi i 'Ë' dhe 'Ç'",
      prompt: "Roli: Mësues Gjuhësor. Konteksti: Nxënësit e klasës së 4-të harrojnë shkronjat Ë dhe Ç në fund të fjalëve. Detyra: Krijo një diktat të shkurtër argëtues (5 fjali) ku këto dy shkronja përdoren masivisht (psh. Çupat e vogla ulen në karrige). Kufizimet: Teksti duhet të ketë ritëm të mirë.",
      tags: ["gjuhë_shqipe", "drejtshkrim", "diktat"]
    },
    {
      subcategory: "primary_upper",
      subject: "Matematikë",
      title: "Hyrje në Numrat Negativë",
      prompt: "Roli: Mësues matematike. Konteksti: Nxënësit e klasës së 6-të po shohin numrat negativë për herë të parë. Detyra: Përdor ashensorin e një pallati (në katet nëntokësore) ose temperaturat e dimrit për t'u shpjeguar se si mblidhen dhe zbriten numrat negativë. Kufizimet: Ofroni vizualizime të thjeshta tekstuale (p.sh. -3 + 5 = 2).",
      tags: ["matematikë", "numrat", "algjebër"]
    },
    {
      subcategory: "primary_upper",
      subject: "Biologji",
      title: "Sistemi i Frymëmarrjes (Modeli)",
      prompt: "Roli: Asistent laboratori. Konteksti: Klasa e 8-të, mushkëritë dhe diafragma. Detyra: Më shkruaj një udhëzim si të ndërtoj një model mushkërie me një shishe plastike, dy tullumbace dhe një pipëz. Kufizimet: Udhëzimet të jenë step-by-step, të sigurta dhe të theksojnë se si tullumbacja lëviz kur tërhiqet baza.",
      tags: ["biologji", "frymëmarrja", "eksperiment"]
    },
    {
      subcategory: "secondary",
      subject: "Kimi",
      title: "Teoria e Acideve dhe Bazave",
      prompt: "Roli: Kimiant. Konteksti: Gjimnaz, Teoria e Arrhenius-it dhe Brønsted-Lowry. Detyra: Përgatit një kuiz rishikimi me 5 pyetje të vështira ku nxënësit duhet të dallojnë nëse përbërjet dhurojnë apo pranojnë protone. Kufizimet: Jep arsyetimin e zgjidhjes (Key) veçmas.",
      tags: ["kimi", "acidet", "bazat"]
    },
    {
      subcategory: "all",
      subject: "Pedagogji",
      title: "Vlerësimi Formues (Strategji)",
      prompt: "Roli: Këshilltar Arsimor. Konteksti: Mësuesit ankohen se testet përfundimtare zbulojnë se nxënësit nuk i kanë kuptuar gjërat në kohë. Detyra: Shpjego 3 metoda të 'Vlerësimit Formues' (Formative Assessment) si 'Biletat e Daljes' (Exit Tickets) që mësuesit t'i zbatojnë çdo ditë. Kufizimet: Teksti të jetë tepër praktik.",
      tags: ["pedagogji", "vlerësim", "metodologji"]
    },
    {
      subcategory: "all",
      subject: "Mësimdhënie",
      title: "Klasa e Përmbysur (Flipped Classroom)",
      prompt: "Roli: Ekspert i Teknologjisë Arsimore. Konteksti: Një mësues dëshiron të provojë metodën e 'Klasës së Përmbysur'. Detyra: Shkruaj një email informativ që mësuesi do t'ua dërgojë prindërve, duke u shpjeguar se nxënësit do ta shikojnë leksionin (video) në shtëpi, dhe detyrat do t'i bëjnë në klasë. Kufizimet: Gjuha të jetë qetësuese.",
      tags: ["mësimdhënie", "metoda", "teknologji"]
    },
    {
      subcategory: "primary_lower",
      subject: "Matematikë",
      title: "Thyesat vizuale për të vegjël",
      prompt: "Roli: Mësues i durueshëm matematike. Konteksti: Fëmijët e klasës së 3-të. Detyra: Shpjego thyesat duke kërkuar nga ata që të vizatojnë një çokollatë të ndarë në 8 pjesë dhe të ngjyrosin pjesët që 'hanë'. Kufizimet: Shto udhëzime sesi mësuesi ta moderojë lojën.",
      tags: ["matematikë", "thyesat", "vizatim"]
    },
    {
      subcategory: "secondary",
      subject: "Letërsi",
      title: "Ese Krahasuese: Don Kishoti vs Hamlet",
      prompt: "Roli: Profesor i letërsisë botërore. Konteksti: Maturantët po mësojnë humanizmin dhe renesancën. Detyra: Harto një plan për një ese krahasuese ku nxënësit do të analizojnë marrëzinë ('çmendurinë') e Hamletit dhe atë të Don Kishotit. A është e shtirur apo e vërtetë? Kufizimet: Krijo rubrikën vlerësuese.",
      tags: ["letërsi", "ese", "krahasim"]
    },
    {
      subcategory: "primary_upper",
      subject: "Shkencë",
      title: "Hapat e Metodës Shkencore",
      prompt: "Roli: Shkencëtar Mentor. Konteksti: Nxënësit e klasës së 7-të duhet të bëjnë një projekt shkencor. Detyra: Shpjego 5 hapat e metodës shkencore (Vëzhgimi, Hipoteza, Eksperimenti, Të dhënat, Përfundimi) duke përdorur një mister se pse 'bima e klasës po thahet'. Kufizimet: Zgjidhja duhet të jetë logjike.",
      tags: ["shkencë", "metoda", "hulumtim"]
    },
    {
      subcategory: "director",
      subject: "Menaxhimi i Krizave",
      title: "Politika e Celularëve",
      prompt: "Roli: Drejtor i Shkollës (Ton autoritar por i drejtë). Konteksti: Ka pasur raste të shtuara të përdorimit të celularëve gjatë mësimit që pengojnë procesin. Detyra: Shkruaj një njoftim zyrtar për prindërit ku u shpjegohet politika e re e shkollës (zero tolerancë për celularët në klasë) dhe arsyetimi pedagogjik prapa kësaj. Formati: Letër formale institucionale.",
      tags: ["drejtori", "rregullore", "celularët"]
    },
    {
      subcategory: "pedagogue",
      subject: "Etika Akademike",
      title: "Protokolli i Kopjimit me AI",
      prompt: "Korniza CPTC. Persona: Pedagog i shkollës. Konteksti: Një nxënës është kapur duke e gjeneruar tërësisht esenë e tij duke përdorur Inteligjencë Artificiale pa e cituar. Detyra: Shkruaj një protokoll (Listë me Hapa) se si duhet të zhvillohet biseda këshilluese me këtë nxënës. Kufizimet: Qëllimi absolut nuk është dënimi, por edukimi i tij mbi integritetin akademik.",
      tags: ["pedagog", "protokoll", "etika ai"]
    },
    {
      subcategory: "psychologist",
      subject: "Shëndeti Mendor",
      title: "Skripti Guided Imagery",
      prompt: "Roli: Psikolog klinik. Detyra: Krijo një skript (skenar të folur fjalë për fjalë nga mësuesi) për një seancë relaksimi të udhëhequr (Guided Imagery) prej 2 minutash për adoleshentët e stresuar. Kufizimet: Përdor fjali shumë të ngadalta, sugjestive, që e çojnë dëgjuesin në një pyll të qetë. Detyrimisht shto pauza vizuale në tekst të formatuara si [PAUZË 3 SEKONDA].",
      tags: ["psikologji", "stresi", "skript"]
    },
    {
      subcategory: "secretary",
      subject: "Burokracia",
      title: "Shabllon për Vërtetim Shkollor",
      prompt: "Konteksti: Administrata e shkollës (Zyra e Sekretarisë). Detyra: Më harto një shabllon (template) për një 'Vërtetim Shkollor' zyrtar që vërteton se nxënësi [EMRI_MBIEMRI] është aktualisht i regjistruar në shkollën tonë. Kufizimet: Gjuha duhet të jetë rreptësisht burokratike shtetërore. Lër hapësira të qarta me kllapa katrore për t'u plotësuar (si Data, Vula, Firma e Drejtorit).",
      tags: ["sekretari", "shabllon", "vërtetim"]
    },
    {
      subcategory: "department_head",
      subject: "Strategjia STEM",
      title: "Përmbledhje Ekzekutive për Buxhet",
      prompt: "Persona: Udhëheqës i Ekipit të Shkencave (Team Lead). Konteksti: Mbledhja e ardhshme e Këshillit të Shkollës për buxhetin. Detyra: Gjenero një përmbledhje ekzekutive (Executive Summary) prej fiks 200 fjalësh mbi nevojën urgjente për t'u pajisur me 5 projektorë të rinj inteligjentë për kabinetet e shkencës. Formati: Përdor theksim (bold) vetëm për shifrat financiare dhe benefitet kryesore të nxënësve.",
      tags: ["departamenti", "buxheti", "raport"]
    },
    {
      subcategory: "director",
      subject: "Planifikimi Strategjik",
      title: "Plani Zhvillimor i Shkollës",
      prompt: "Roli: Drejtor i një shkolle të mesme. Konteksti: Hartimi i planit strategjik 3-vjeçar të shkollës. Detyra: Shkruaj një draft të objektivave kryesore për përmirësimin e infrastrukturës dixhitale dhe trajnimit të stafit. Kufizimet: Përdor pika të shkurtra (bullet points) dhe gjuhë formale institucionale.",
      tags: ["drejtori", "planifikim", "strategjia"]
    },
    {
      subcategory: "pedagogue",
      subject: "Vlerësimi",
      title: "Rubrikë për Mësuesit e Rinj",
      prompt: "Roli: Pedagog Kryesor. Konteksti: Nevoja për të vlerësuar metodologjitë e reja të mësimdhënies nga mësuesit e rinj (fillestarë). Detyra: Krijo një formular vlerësimi (rubrikë) me 5 kritere kryesore (psh. menaxhimi i klasës, përfshirja e nxënësve). Kufizimet: Formato të gjithë përgjigjen si një tabelë Markdown.",
      tags: ["pedagog", "vlerësimi", "mësuesit"]
    },
    {
      subcategory: "psychologist",
      subject: "Ndërhyrje Psikologjike",
      title: "Plani Kundër Bullizmit",
      prompt: "Roli: Psikolog i shkollës. Konteksti: Rritja e rasteve të bullizmit kibernetik (cyberbullying) në klasat e 8-ta. Detyra: Hapi një plan veprimi emergjent me 3 hapa për të adresuar problemin me nxënësit dhe prindërit. Kufizimet: Ndërto një narrativë empatike, pa gjykim dhe ofro një skript se si t'i qasemi viktimës.",
      tags: ["psikologji", "bullizmi", "plan veprimi"]
    },
    {
      subcategory: "secretary",
      subject: "Administrata Shtetërore",
      title: "Vërtetim për Bursë (Shabllon)",
      prompt: "Roli: Sekretar administrativ. Konteksti: Një nxënës kërkon një vërtetim zyrtar për të aplikuar për një bursë studimi jashtë shtetit. Detyra: Shkruaj shabllonin e këtij vërtetimi. Kufizimet: Duhet të duket tejet zyrtar, me hapësira boshe për numrin e amzës, datën, vendin e lëshimit dhe firmën e drejtorit.",
      tags: ["sekretari", "vërtetim", "bursa"]
    },
    {
      subcategory: "department_head",
      subject: "Analiza e Suksesit",
      title: "Raport i Rezultateve të Dobëta",
      prompt: "Roli: Udhëheqës i Departamentit të Gjuhëve. Konteksti: Analiza e rezultateve të dobëta në testimin e fundit të gjuhës angleze. Detyra: Shkruaj një raport të shkurtër analitik mbi shkaqet e mundshme dhe propozo 2 ndërhyrje emergjente. Kufizimet: Përdor gjuhë thellësisht analitike, pa fajësuar në asnjë moment mësuesit.",
      tags: ["departamenti", "raport", "analizë"]
    },
    {
      subcategory: "director",
      subject: "Fjalime Motivuese",
      title: "Fjalimi për Maturantët",
      prompt: "Roli: Drejtor i shkollës. Konteksti: Fjalimi përmbyllës i vitit shkollor para nxënësve të klasës së 9-të / 12-të (gjenerata që diplomohet). Detyra: Shkruaj një fjalim motivues rreth 300 fjalësh mbi rëndësinë e të mësuarit gjatë gjithë jetës. Kufizimet: Përfshi një citat frymëzues dhe mbaje tonin tejet krenar dhe miqësor.",
      tags: ["drejtori", "fjalim", "maturantët"]
    },
    {
      subcategory: "pedagogue",
      subject: "Inkluzioni",
      title: "Përfshirja e Introvertëve",
      prompt: "Roli: Ekspert i pedagogjisë moderne. Konteksti: Një mësues ka vështirësi të përfshijë nxënësit introvertë në diskutimet e klasës. Detyra: Jep 4 strategji praktike dhe diskrete (gjithëpërfshirëse) që mësuesi mund t'i zbatojë nesër. Kufizimet: Shmang thirrjen e nxënësve me emër para të gjithëve si sugjerim.",
      tags: ["pedagog", "introvertët", "inkluzioni"]
    },
    {
      subcategory: "psychologist",
      subject: "Menaxhimi i Emocioneve",
      title: "Punëtori për Menaxhimin e Zemërimit",
      prompt: "Roli: Terapist i sjelljes / Psikolog shkollor. Konteksti: Organizimi i një punëtorie (workshop) 1-orëshe për menaxhimin e zemërimit te fëmijët e ciklit të ulët. Detyra: Krijo një axhendë me 3 aktivitete të bazuara në lojë. Kufizimet: Secili aktivitet duhet të përshkruhet qartë në maksimum 2 fjali të thjeshta.",
      tags: ["psikologji", "zemërimi", "emocione"]
    },
    {
      subcategory: "secretary",
      subject: "Komunikimi i Brendshëm",
      title: "Kërkesë për Blerje Mjetesh",
      prompt: "Roli: Asistent/Sekretar i shkollës. Konteksti: Shkolla ka nevojë urgjente për furnizime (letër A4, toner, markera) dhe duhet t'i dërgohet kërkesë drejtorisë arsimore/komunës. Detyra: Shkruaj një email zyrtar për kërkesë mjetesh. Kufizimet: Përdor një ton urgjent por thellësisht të sjellshëm dhe institucional.",
      tags: ["sekretari", "email", "furnizime"]
    },
    {
      subcategory: "department_head",
      subject: "Trajnime",
      title: "Ftesë për Trajnim të Brendshëm",
      prompt: "Roli: Kryetar i Këshillit të Arsimtarëve. Konteksti: Planifikimi i një trajnimi të brendshëm mbi përdorimin e platformave dixhitale në mësim. Detyra: Krijo ftesën që do t'u dërgohet mësuesve, duke përfshirë agjendën dhe përfitimet. Kufizimet: Formuloje mesazhin ashtu që mësuesit e vjetër të mos ndihen të frikësuar nga teknologjia.",
      tags: ["departamenti", "trajnim", "ftesë"]
    },
    {
      subcategory: "director",
      subject: "Disiplina",
      title: "Letër Paralajmëruese për Prindërit",
      prompt: "Roli: Drejtor me përvojë. Konteksti: Një nxënës ka bërë shkelje të rëndë të rregullores (dëmtim i qëllimshëm i pronës). Detyra: Shkruaj një letër formale paralajmëruese para përjashtimit drejtuar prindërve. Kufizimet: Përdor terminologji ligjore/administrative të ftohtë dhe kërko një takim urgjent sy më sy.",
      tags: ["drejtori", "disiplina", "prindër"]
    },
    {
      subcategory: "pedagogue",
      subject: "Tranzicioni Shkollor",
      title: "Plani i Kalimit në Klasën e 6-të",
      prompt: "Roli: Pedagog i shkollës. Konteksti: Nxënësit e klasës së 5-të po kalojnë në të 6-tën dhe ndihen të frikësuar nga fakti që do të kenë lëndë dhe mësues të rinj. Detyra: Shkruaj një plan tranzicioni me 3 hapa për t'i përgatitur ata mendërisht. Kufizimet: Fokusi të jetë te ndërtimi i pavarësisë organizative të nxënësit.",
      tags: ["pedagog", "tranzicioni", "këshillim"]
    },
    {
      subcategory: "psychologist",
      subject: "Shëndeti Mendor i Stafit",
      title: "Parandalimi i Burnout-it",
      prompt: "Roli: Psikolog për stafin. Konteksti: Fundi i semestrit të parë dhe mësuesit tregojnë shenja të rënda të Burnout (Lodhjes kronike). Detyra: Shkruaj një letër të hapur për stafin me 3 teknika të thjeshta të kujdesit për veten (Self-care). Kufizimet: Toni duhet të jetë jashtëzakonisht mbështetës, jo kërkues apo akademik.",
      tags: ["psikologji", "burnout", "mësuesit"]
    },
    {
      subcategory: "secretary",
      subject: "Komunikimi me Prindërit",
      title: "Njoftim për Këshillin e Prindërve",
      prompt: "Roli: Sekretaria e shkollës. Konteksti: Zgjedhja e Këshillit të ri të Prindërve. Detyra: Shkruaj një njoftim publik për t'u shpërndarë në Viber/WhatsApp grupet e klasave. Kufizimet: Mesazhi duhet të jetë i shkurtër, i qartë, të përmbajë datën/orën dhe një thirrje të ngrohtë për pjesëmarrje aktive.",
      tags: ["sekretari", "këshilli", "njoftim"]
    },
    {
      subcategory: "department_head",
      subject: "Aktivitete Jashtëshkollore",
      title: "Propozim për Panairin e Librit",
      prompt: "Roli: Përgjegjës i Bibliotekës / Departamentit Letrar. Konteksti: Mbledhja e fondeve për pasurimin e bibliotekës së shkollës me tituj të rinj. Detyra: Shkruaj një postim bindës për rrjetet sociale të shkollës (Facebook) duke ftuar komunitetin të dhurojë libra. Kufizimet: Përdor emoji dhe hashtag-e adekuate për të nxitur shpërndarjen.",
      tags: ["departamenti", "panairi", "rrjetet sociale"]
    },
    {
      subcategory: "director",
      subject: "Infrastruktura",
      title: "Fjalimi për Problemet Higjienike",
      prompt: "Roli: Udhëheqës Ekzekutiv i Shkollës. Konteksti: Prindërit janë ankuar për higjienën e dobët rreth ambienteve shkollore. Detyra: Përgatit një fjalim për mbledhjen e ardhshme të këshillit ku i pranon shqetësimet dhe prezanton planin e zgjidhjes. Kufizimet: Prano përgjegjësinë me empati dhe trego hapa konkretë pa justifikime.",
      tags: ["drejtori", "fjalim", "higjiena"]
    },
    {
      subcategory: "pedagogue",
      subject: "Didaktikë",
      title: "Strategji për Lexim-Kuptim",
      prompt: "Roli: Ekspert i Didaktikës. Konteksti: Vështirësi në kuptimin e teksteve (Reading Comprehension) te klasat e treta. Detyra: Shkruaj një udhëzues me 4 teknika inovative të leximit interaktiv për mësuesit e ciklit të ulët. Kufizimet: Evito teknikat e vjetra si leximi në heshtje, ofro metoda dinamike dhe vizuale.",
      tags: ["pedagog", "leximi", "strategji"]
    },
    {
      subcategory: "psychologist",
      subject: "Integrimi Social",
      title: "Përshtatja e Nxënësve të Rinj",
      prompt: "Roli: Psikolog i shkollës. Konteksti: Një nxënës i ri sapo është transferuar nga një shtet tjetër dhe nuk e flet mirë gjuhën shqipe. Detyra: Krijo një plan të shkurtër integrimi social për bashkëmoshatarët e tij (si ta presin në klasë dhe ta ftojnë në lojëra). Kufizimet: Bazoje planin te miqësia jo-verbale dhe aktivitetet sportive.",
      tags: ["psikologji", "integrimi", "shoqëria"]
    },
    {
      subcategory: "secretary",
      subject: "Raportimi",
      title: "Përmbledhja e Mungesave (Email)",
      prompt: "Roli: Administratore e të dhënave. Konteksti: Raportimi mujor i mungesave të nxënësve tek autoritetet (Ministria/Komuna). Detyra: Gjenero një shabllon teksti (Summary) që shoqëron tabelën excel kur dërgohet me email te zyrtarët. Kufizimet: Gjuha të jetë skajshmërisht e thatë, formale dhe direkte në poentë.",
      tags: ["sekretari", "raportim", "mungesat"]
    },
    {
      subcategory: "department_head",
      subject: "Vlerësimi Projektor",
      title: "Rubrikë për Panairin e Shkencës",
      prompt: "Roli: Drejtues i Departamentit të Shkencave. Konteksti: Panairi vjetor i shkencës. Detyra: Krijo një rubrikë (grading rubric) për të vlerësuar projektet e nxënësve bazuar në: Inovacionin, Prezantimin dhe Metodën Shkencore. Kufizimet: Të gjitha të dhënat duhet të paraqiten strikt si një tabelë markdown (Markdown table).",
      tags: ["departamenti", "shkenca", "tabelë"]
    },
    {
      subcategory: "director",
      subject: "Marrëdhëniet me Jashtë",
      title: "Projekt-Propozim për Donacion",
      prompt: "Roli: Drejtor Inovativ. Konteksti: Instalimi i paneleve diellore në çatinë e shkollës. Detyra: Shkruaj një draft-projekt propozim (Executive Summary) për një OJQ ndërkombëtare duke kërkuar financim. Kufizimet: Përqendrohu 100% te impakti mjedisor (eko-shkollë) dhe kursimi i buxhetit arsimor në afat të gjatë.",
      tags: ["drejtori", "projekt", "donacion"]
    },
    {
      subcategory: "pedagogue",
      subject: "Këshillim Akademik",
      title: "Bisedë për Apatinë Akademike",
      prompt: "Roli: Këshilltar Pedagogjik. Konteksti: Disa nxënës të klasës së 7-të tregojnë mungesë të theksuar motivimi për të mësuar (apati akademike). Detyra: Përgatit një skenar për një bisedë 1-me-1 me njërin prej tyre. Kufizimet: Përdor rreptësisht metodën e dëgjimit aktiv dhe jep 3 shembuj të pyetjeve refleksive.",
      tags: ["pedagog", "motivimi", "këshillim"]
    },
    {
      subcategory: "psychologist",
      subject: "Menaxhimi i Stresit",
      title: "Fakte vs Mite për Maturën",
      prompt: "Roli: Psikolog Klinik. Konteksti: Përgatitja e maturantëve për stresin e testeve të Maturës Shtetërore. Detyra: Krijo një fletëpalosje (broshurë) 1-faqëshe me 5 mite dhe 5 fakte rreth stresit para-provimeve. Kufizimet: Dizajnoje tekstin që të lexohet shpejt (skimmable) dhe thekso rëndësinë kritike të gjumit.",
      tags: ["psikologji", "matura", "stresi"]
    },
    {
      subcategory: "secretary",
      subject: "Procedura e Mbylljes së Vitit",
      title: "Kujtesë për Regjistrat Amë",
      prompt: "Roli: Sekretar i Shkollës. Konteksti: Mbyllja e vitit shkollor dhe lëshimi i dëftesave. Detyra: Shkruaj një e-mail masiv për mësuesit kujdestarë për afatet përfundimtare të plotësimit të regjistrave amë. Kufizimet: Thekso rëndësinë ligjore të saktësisë dhe penalitetet e vonesave administrative.",
      tags: ["sekretari", "regjistrat", "afatet"]
    },
    {
      subcategory: "department_head",
      subject: "Aktivitete Sportive",
      title: "Rregullorja e Turneut (Fair Play)",
      prompt: "Roli: Përgjegjës për Sportet. Konteksti: Organizimi i një turneu të brendshëm shkollor në futsall. Detyra: Shkruaj rregulloren bazë të turneut (5 pika kyçe), duke përfshirë kodin e mirësjelljes dhe ndëshkimet për gjuhën e pahijshme. Kufizimet: Rregullorja duhet të theksojë 'Fair Play'-in dhe respektin për kundërshtarin si elementin më të rëndësishëm.",
      tags: ["departamenti", "sport", "rregullore"]
    }
  ]
};