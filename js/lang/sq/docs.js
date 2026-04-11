var DOCS_DATA = [
    {
        id: "intro",
        title: "Hyrje",
        items: [
            {
                id: "importance",
                title: "Pse është i rëndësishëm ky udhëzues?",
                content: `
                    <h2>Pse është i rëndësishëm ky udhëzues?</h2>
                    <p>Sistemi arsimor në Maqedoni, ashtu si sistemet arsimore në mbarë botën, përballet me sfida dhe mundësi të mëdha lidhur me integrimin e inteligjencës artificiale. Mësimdhënësit, nxënësit, prindërit dhe administrata shpesh ndihen të hutuar dhe të papërgatitur për këto ndryshime të shpejta.</p>
                    <p>Ky Udhëzues është krijuar për të mbushur këto boshllëqe dhe për të ofruar udhëzime praktike për të gjithë pjesëmarrësit në procesin arsimor. Rëndësia e tij qëndron në nevojën për të demistifikuar teknologjinë që tashmë është e pranishme në klasat dhe shtëpitë tona.</p>
                `
            },
            {
                id: "goals",
                title: "Qëllimet Kryesore",
                content: `
                    <h2>Qëllimet Kryesore</h2>
                    <p>Ky udhëzues ka disa qëllime parësore që synojnë përmirësimin e procesit edukativ:</p>
                    <ul>
                        <li><strong>Alfabetizimi AI:</strong> Të ndihmojë përdoruesit të kuptojnë çfarë është AI, si funksionon dhe cilat janë kufizimet e saj.</li>
                        <li><strong>Zbatimi Praktik:</strong> Të ofrojë teknika konkrete për inxhinierinë e prompteve dhe shembuj për përdorimin e mjeteve AI në mësimdhënie.</li>
                        <li><strong>Siguria dhe Etika:</strong> Të edukojë përdoruesit për mbrojtjen e privatësisë, ndershmërinë akademike dhe përdorimin e përgjegjshëm.</li>
                        <li><strong>Mendimi Kritik:</strong> Të inkurajojë zhvillimin e aftësive për vlerësimin e informacionit të gjeneruar nga AI.</li>
                    </ul>
                `
            },
            {
                id: "target-audience",
                title: "Për kë është ky udhëzues",
                content: `
                    <h2>Për kë është ky udhëzues</h2>
                    <p>Ky udhëzues është strukturuar me kujdes për të përmbushur nevojat e tre grupeve kryesore:</p>
                    <p><strong>1. Mësimdhënësit (Stafi Mësimor)</strong><br>
                    Të cilët duan të integrojnë AI në planet e tyre mësimore, të përmirësojnë procesin e vlerësimit dhe të reduktojnë punën administrative.</p>
                    <p><strong>2. Bashkëpunëtorët Profesionalë</strong><br>
                    Pedagogët, psikologët dhe defektologët që duhet të ofrojnë mbështetje dhe udhëzime për të gjithë procesin arsimor dhe të përballen me sfidat e sjella nga teknologjia e re.</p>
                    <p><strong>3. Nxënësit</strong><br>
                    Të cilët duhet të mësojnë se si të përdorin AI si një mjet të fuqishëm për të mësuar dhe hulumtuar, jo si një zëvendësim për punën e tyre intelektuale.</p>
                `
            },
            {
                id: "actuality",
                title: "Aktualiteti i problematikës",
                content: `
                    <h2>Aktualiteti i problematikës</h2>
                    <p>Inteligjenca artificiale nuk është e ardhmja - është e tashmja. Mjete si ChatGPT, Gemini, Claude dhe të tjerë tashmë janë të disponueshme dhe përdoren gjerësisht, shpesh pa mbikëqyrje ose kuptim të duhur.</p>
                    <p>Edukimi duhet të përshtatet për të mbetur i rëndësishëm. Injorimi i këtyre teknologjive nuk është një opsion, pasi do t'i linte nxënësit të papërgatitur për tregun e punës dhe për një shoqëri ku bashkëpunimi me AI do të jetë një aftësi kyçe.</p>
                `
            },
            {
                id: "how-to-use",
                title: "Si të përdorni këtë udhëzues?",
                content: `
                    <h2>Si të përdorni këtë udhëzues?</h2>
                    <p>Udhëzuesi është dizajnuar në mënyrë modulare për lundrim dhe përdorim të lehtë:</p>
                    <ul>
                        <li><strong>Lexim vijues:</strong> Për ata që duan kuptim të plotë, rekomandojmë leximin nga fillimi deri në fund.</li>
                        <li><strong>Si referencë:</strong> Përdorni menunë për të gjetur shpejt tema specifike (psh. Inxhinieria e Prompteve) kur është e nevojshme.</li>
                        <li><strong>Për planifikim mësimi:</strong> Mësimdhënësit mund t'i përdorin shembujt dhe ushtrimet drejtpërdrejt në klasat e tyre.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: "literacy",
        title: "Alfabetizimi AI",
        items: [
            {
                id: "what-is-literacy",
                title: "Çfarë është Alfabetizimi AI?",
                content: `
                    <h2>Çfarë është Alfabetizimi AI?</h2>
                    <p><strong>Alfabetizimi AI</strong> përfaqëson një sërë njohurish, aftësish dhe qëndrimesh teknike që u mundësojnë individëve të funksionojnë me sukses në një botë të formësuar nga inteligjenca artificiale.</p>
                    <p>Kjo nuk do të thotë që të gjithë duhet të jenë programues ose të dinë të kodojnë. Përkundrazi, alfabetizimi AI nënkupton kuptimin e parimeve bazë të mënyrës se si funksionojnë sistemet AI, aftësinë për t'i përdorur ato në mënyrë efektive dhe një konsideratë kritike të ndikimit të tyre në shoqëri.</p>
                `
            },
            {
                id: "youth-needs",
                title: "Të rinjtë eksperimentojnë me AI",
                content: `
                    <h2>Të rinjtë eksperimentojnë me AI dhe kanë nevojë për udhëzime</h2>
                    <p>Gjeneratat e reja janë "vendas dixhitalë" dhe natyrisht janë të prirur për të provuar teknologji të reja. Ata tashmë po eksperimentojnë me mjete gjeneruese AI për argëtim, komunikim, madje edhe punë shkollore.</p>
                    <p>Megjithatë, pa udhëzime të duhura, ata ekspozohen ndaj rreziqeve:</p>
                    <ul>
                        <li>Pranimi i gabimeve të AI (halucinacionet) si fakte të sakta.</li>
                        <li>Shkelje e paqëllimshme e të drejtës së autorit ose e ndershmërisë akademike.</li>
                        <li>Ndarja e të dhënave personale me sistemet AI pa e ditur se si përdoren ato të dhëna.</li>
                    </ul>
                `
            },
            {
                id: "educational-priority",
                title: "Prioritet Arsimor",
                content: `
                    <p>Alfabetizimi AI duhet të bëhet një prioritet arsimor. Kjo përfshin:</p>
                    <ol>
                        <li><strong>Të kuptuarit:</strong> Çfarë është AI dhe si përpunon informacionin?</li>
                        <li><strong>Përdorimi:</strong> Si të përdorim AI për zgjidhjen e problemeve?</li>
                        <li><strong>Vlerësimi:</strong> Vlerësim kritik i përgjigjeve nga AI.</li>
                        <li><strong>Etika:</strong> Ndërgjegjësim mbi paragjykimet dhe përgjegjësitë e AI.</li>
                    </ol>
                `
            }
        ]
    },
    {
        id: "definition",
        title: "Çfarë është AI?",
        items: [
            {
                id: "def-ai",
                title: "Përkufizimi i AI",
                content: `
                    <p><strong>Inteligjenca Artificiale (AI)</strong> është një degë e shkencave kompjuterike e dedikuar për krijimin e sistemeve dhe makinerive të afta për të kryer detyra që tradicionalisht kërkojnë inteligjencë njerëzore.</p>
                    <p>Këto detyra përfshijnë, por nuk kufizohen në:</p>
                    <ul>
                        <li>Të mësuarit nga përvoja (Machine Learning).</li>
                        <li>Kuptimi i gjuhës natyrore (Natural Language Processing).</li>
                        <li>Njohja e objekteve dhe imazheve (Computer Vision).</li>
                        <li>Zgjidhja e problemeve komplekse dhe vendimmarrja.</li>
                    </ul>
                `
            },
            {
                id: "types-capability",
                title: "Llojet e AI sipas aftësive",
                content: `
                    <p>Inteligjenca artificiale zakonisht kategorizohet në tre lloje kryesore sipas nivelit të inteligjencës dhe aftësive që posedon.</p>
                `
            },
            {
                id: "narrow-ai",
                title: "Narrow AI",
                content: `\n                    <h2>1. AI i Ngushtë (Inteligjencë Specifike e Domenit)</h2>
<p>Kjo është e vetmja shtresë e Inteligjencës Artificiale aktualisht në funksion. Ajo është e projektuar për të shkëlqyer brenda një grupi rreptësisht të përcaktuar parametrash operativë.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Niveli i Inteligjencës: Jo më i zgjuar se njeriu.</strong> Ndërsa përpunon llogaritje më shpejt se ne, ajo posedon zero të kuptuar të pavarur ose intelekt të vërtetë jashtë softuerit të saj të programuar.</li>
  <li><strong>Aftësitë:</strong> Kryen operacione thellësisht komplekse si diagnostikimi mjekësor me imazheri, tregtia algoritmike ose gjenerimi i tekstit (p.sh., ChatGPT).</li>
  <li><strong>Kufizimet:</strong> I mungon përshtatshmëria kryq-domene. Një AI diagnostikues nuk mund të përdoret për të parashikuar tregjet financiare, dhe një model gjuhësor nuk mund të llogarisë në mënyrë të pavarur ekuacionet e fizikës.</li>
  <li><strong>Analogjia:</strong> Merrni në konsideratë një skaner mjekësor MRI të teknologjisë fundit. Është një kryevepër për imazheri të brendshme, por është thelbësisht i paaftë për të kryer detyra jashtë skanimit. AI i Ngushtë operon njëlloj: i patëmetë brenda domenit të tij, por i kufizuar strukturisht.</li>
</ul>\n                `
            },
            {
                id: "general-ai",
                title: "General AI (AGI)",
                content: `\n                    <h2>2. AI i Përgjithshëm (Ekuivalenca Njohëse)</h2>
<p>Inteligjenca Artificiale e Përgjithshme (AGI) është një paradigmë teorike që përfaqëson një makinë me përshtatshmëri njohëse ekuivalente me intelektin njerëzor.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Niveli i Inteligjencës: Njësoj si inteligjenca njerëzore.</strong> Ajo do të zotëronte kapacitetin për të arsyetuar, mësuar dhe zbatuar njohuri në mënyrë të pavarur në çdo disiplinë, ashtu si truri i një njeriu.</li>
  <li><strong>Aftësitë:</strong> Do të mund të nxirrte parime nga një disiplinë (p.sh., inxhinieria) dhe t'i zbatonte në mënyrë të përkryer në skenarë të rinj (p.sh., biologjia).</li>
  <li><strong>Statusi:</strong> Nuk ekziston aktualisht. Arritja e AGI kërkon zbulime të shumëfishta në arkitekturën e harduerit dhe në shkencat kompjuterike teorike.</li>
  <li><strong>Analogjia:</strong> E krahasueshme me një studiues njerëzor multidisiplinar. Ndërsa një kalkulator mund të procesojë vetëm numra, një kërkues mund të lexojë një tekst historik, të ndërtojë një model statistikor prej tij dhe të prezantojë gjetjet operacionalisht. AGI përfaqëson këtë nivel të arsyetimit holistik.</li>
</ul>\n                `
            },
            {
                id: "super-ai",
                title: "Super AI",
                content: `\n                    <h2>3. Super AI (Superinteligjenca)</h2>
<p>Superinteligjenca Artificiale (ASI) konceptualizon një intelekt që tejkalon në mënyrë drastike mendjet më të mira njerëzore në pothuajse çdo fushë respektive.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Niveli i Inteligjencës: Shumë përtej inteligjencës njerëzore.</strong> Ajo përfaqëson një entitet njohës që do të tejkalonte kapacitetin intelektual kolektiv mbarë njerëzimit.</li>
  <li><strong>Aftësitë:</strong> Ajo mund të procesonte menjëherë të dhëna multidimensionale për të zgjidhur probleme komplekse globale, të shpikte teknologji të papara ndonjëherë dhe të optimizonte infrastrukturën matematikisht.</li>
  <li><strong>Statusi:</strong> Spekulim i pastër teknologjik. Mbetet pika qendrore e debateve të forta akademike dhe etike mbi kontrollin institucional dhe sigurinë.</li>
  <li><strong>Analogjia:</strong> Mendoni sikur të mbushni intelektin e mendjeve më të mëdha shkencore të njerëzimit—si Albert Einstein, Nikola Tesla dhe Marie Curie—të shumëzoni shpejtësinë e tyre njohëse një milion herë dhe ta bashkoni dijen e tyre në një intelekt të vetëm e të unifikuar. ASI përfaqëson një qenie të aftë për të zgjidhur mijëra kriza të ndërlikuara globale njëkohësisht me asnjë lodhje.</li>
</ul>\n                `
            }
        ]
    },
    {
        id: "functionality",
        title: "Ndarja sipas funksionalitetit",
        items: [
            {
                id: "reactive-machines",
                title: "Makineri Reaktive",
                content: `\n                    <p>Ky është lloji më i vjetër dhe më bazik i Inteligjencës Artificiale. Siç e sugjeron emri, këto sisteme thjesht "reagojnë" para situatës aktuale me të cilën përballen, bazuar në rregulla strikte.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Nuk ka Kujtesë (Memorie):</strong> Ato nuk mund të përdorin përvojat nga e kaluara për të ndihmuar në vendimet e tanishme.</li>
  <li><strong>E Tashmja Absolute:</strong> Ato trajtojnë çdo interaksion sikur të ishte duke ndodhur plotësisht për herë të parë.</li>
  <li><strong>Shembull i Njohur:</strong> Deep Blue, superkompjuteri i IBM-së që mundi Garry Kasparov-in. Nuk analizoi lëvizjet e kaluara; thjesht zgjidhte lëvizjen më të mirë sekondare.</li>
</ul>
<div style="background: #f0fdf4; padding: 20px; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 20px;">
  <strong>Analogi: Makinë Llogaritëse</strong>
  <p style="margin-top: 8px;">Imagjino një kalkulator. Sa herë që i shkruan "5 + 5", ai thjesht përgjigjet "10". Nuk i bëhet vonë nëse dje bëre të njëjtën pyetje. Atij i mungon kujtesa dhe as s'mundohet të "kuptoj" ty si individ; reagon tek mbypja e butonit.</p>
</div>\n                `
            },
            {
                id: "limited-memory",
                title: "Memoria e Kufizuar",
                content: `\n                    <p>Kjo është klasa dominuese që ekziston në botën tonë sot (ku përfshihet ChatGPT, njohja e fytyrave, dhe makinat që vetë-drejtohen).</p>
<p>Këto sisteme mund t'i hedhin një sy <em>të shkuarës së afërt</em> për një moment qe të sjellin vendimet e qarta sot.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Gjetja e Modeleve:</strong> Lexojnë sasi devijuese të dhënash të vjetra e të reja dhe i gjejnë vetë regullat (patterns).</li>
  <li><strong>Përditësim:</strong> Monitorojnë mjedisin duke futur të dhëna "për dreq" për ta stabilizuar ngasjen apo ndihmën, ndonëse ajo nuk qëndron gjatë.</li>
</ul>
<div style="background: #eff6ff; padding: 20px; border-radius: 12px; border: 1px solid #bfdbfe; margin-bottom: 20px;">
  <strong>Analogi: Një Shofer Fillestar</strong>
  <p style="margin-top: 8px;">Mendo sikur një shofer po mban sytë nga pasqyrat kur ftoh këmbën. Ai përdor kujtesën e përkohshme si "Ua pash një fuoristradë", pret dhe ecën në korsi duke mos e humbur vetëkontrollin me ato sekonda memorie vëzhguese.</p>
</div>\n                `
            },
            {
                id: "theory-of-mind",
                title: "Teoria e Mendjes",
                content: `\n                    <p>Kjo fazë hyn totalisht në aspektin e kërkimit dhe inxhinierisë së ardhshme—që pritet në dekadat afërta. E sjellur si term psikologjik te teknologjia.</p>
<p>"Teoria e Mendjes" arrihet atëherë kur makina ta marrë vesh që tek çdo individ ekziston gëzimi, zemërimi, dhe mendje e ndryshme tek njeriu ashtu edhe tek një makinë tjetër.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Inteligjencë Emocionale e Rëndë:</strong> Ky robot i ardhshëm do ia vlejë sepse do vëzhgojë tonin mjaft "depresiv" ose të ashpër që po e flisni dhe automatikisht i tjetërson reagimet e llogjikun.</li>
  <li><strong>Shoqërie Harmonizuara:</strong> Makina që integrohen duke llogaritur emocioinin paraprakisht aty tek aty!</li>
</ul>
<div style="background: rgba(107, 91, 79, 0.1); padding: 20px; border-radius: 12px; border: 1px solid #fed7aa; margin-bottom: 20px;">
  <strong>Analogi: Mësuesi Suprem Empatik</strong>
  <p style="margin-top: 8px;">Deri tani makinat veç thonin "Përgjigje gabim!". Kur ky hap arrihet, AI do dëgjojë e shikojë nervozizmin e djaloshit tek pyetjet. Dhe si një profesor mendje-lehtë do propozoj: "Shoh që je tepër i lodhur, le ta mbyllim faqen e le të provojmë të qetësohemi, fitoje prap gjakftohtësinë e kthehu!".</p>
</div>\n                `
            },
            {
                id: "self-awareness",
                title: "Vetëdija",
                content: `\n                    <p>Faza e Fundit Absolute ku bota zvarritet me mendime futuristike vetëm tek filmat Hollywood.</p>
<p>Kjo inteligjencë jo vetëm "lexon" e "kupton" njerëz të tretë përgjatë teorisë së mendjes; ndërthur qenien e thellë <strong>për veten</strong>.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Njohje Vetevetje:</strong> Robotika me nevoja, ndjenja të ekzistencës apo frikës ndaj "Fikjes."</li>
  <li><strong>Qëllime t'pavarura:</strong> Ai s'u bindet kërkesave më.. do ti refuzojë nga teket personale.</li>
</ul>
<div style="background: #fef2f2; padding: 20px; border-radius: 12px; border: 1px solid #fecaca; margin-bottom: 20px;">
  <strong>Analogi: Zgjimi i Kukullave</strong>
  <p style="margin-top: 8px;">Cdo AI aktual është gjithmonë kukulla me tela; ti e lëviz, ajo bën punë. Këtu arrijmë tek "Buratino": Kur druri fillon kërkon drejtësi e thekson, "Sot s'jam programuar t'të gjej fakte tek fjalori matematikor.. Unë veç po fle gjumë po shëtis jashtë".</p>
</div>\n                `
            }
        ]
    },
    {
        id: "history",
        title: "Historia e AI",
        items: [
            { id: "early", title: "Fillimet e hershme", content: "<p>Ideja e qenieve artificiale daton që nga mitet e lashta, por baza shkencore u hodh në vitet 1940. Alan Turing, me pyetjen e tij 'A mund të mendojnë makinat?', vendosi kuadrin teorik.</p>" },
            { id: "birth", title: "Lindja e AI", content: "<p>Termi 'Inteligjencë Artificiale' u miratua zyrtarisht në konferencën e Dartmouth në 1956. Kjo shënoi fillimin e AI si një disiplinë akademike.</p>" },
            { id: "winter-1", title: "Dimri i parë i AI", content: `<p>Pas entuziazmit fillestar, përparimi ishte më i ngadalshëm se sa pritej. Qeveritë mbyllën buxhetet pas mungesës masive të inovacioneve komerciale.</p>
<div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #cbd5e1; margin-top: 20px;">
  <strong>Analogjia: Flluska e Shpresave</strong>
  <p style="margin-top: 8px;">Imagjinoni një start-up që premton makina fluturuese vitin e ardhshëm. Ata marrin miliona fonde, por kur e kuptojnë se teknologjia është dekada larg, investitorët pushtohen nga paniku dhe marrin paratë e tyre mbrapsht. Kjo është pikërisht ajo që i ndodhi AI në vitet '70 dhe '80.</p>
</div>` },
            { id: "expert-systems", title: "Sistemet e Ekspertëve", content: "<p>AI përjetoi një ringjallje me ardhjen e 'sistemeve të ekspertëve' - programe që imitonin vendimet e ekspertëve njerëzorë në fusha të caktuara (psh. diagnostikimi mjekësor).</p>" },
            { id: "winter-2", title: "Dimri i dytë i AI", content: "<p>Sistemet e ekspertëve provuan se ishin rëndë të kushtueshme duke shkaktuar sërish ngritje fondesh.</p>" },
            { id: "intelligent-agents", title: "Agjentët Inteligjentë", content: "<p>Interneti dhe shpejtësia kompjuterike ringjalli fushën, mundësoi lojëra grafike, kërkime semantike dhe kompjuterë shahistë ekspertë.</p>" },
            { id: "ml-bigdata", title: "ML dhe Big Data", content: "<p>Pasuria masive e të dhënave mundësoi Rrjetet Nervore Artificiale ashtu si modelet gjeneruese e gjuhesore të quajtura Transformers - GPT (Krijuesit e Chatgpt e inovuan fushën në maksimum).</p>" }
        ]
    },
    {
        id: "applications",
        title: "Aplikime në jetën e përditshme",
        items: [
            { id: "health", title: "Shëndetësi", content: "<p>AI mjekësor analizon X-rezet zbulon tumore e përcakton ilaçe inovative dhe medikamente me planifikim perfekt për terapinë individuale.</p>" },
            { id: "transport", title: "Transport", content: "<p>Navigimi i integruar rregullon flukset me makina auto-pilota dhe parandalon përplasjet si tek ajri dhe faza tokësore.</p>" },
            { id: "media", title: "Media", content: `<p>Algoritmet shfaqin saktësisht preferenca tuaja tek muzika film dhe rekomandime tjera argëtuese në Facebook/YouTube apo Spotify / Netflix.</p>
<div style="background: #fdf4ff; padding: 20px; border-radius: 12px; border: 1px solid #f5d0fe; margin-top: 20px;">
  <strong>Analogjia: Shërbëtori Dixhital</strong>
  <p style="margin-top: 8px;">Mendoni për AI në mediat sociale si një shërbëtor jashtëzakonisht vëzhgues. Ata shikojnë saktësisht se sa sekonda kaloni duke parë një pikturë dhe në heshtje i ndërrojnë pikturat e tjera në shtëpi për të përshtatur saktësisht atë që ju tërhoqi vëmendjen.</p>
</div>` },
            { id: "finance", title: "Financa", content: "<p>Zulon aktivitete abuzive apo keqpërdorime të parave në sistemet e integruara bankare apo të kartelave elektronike globale.</p>" },
            { id: "entertainment", title: "Argëtim", content: "<p>Karakteret jo te luajtshëm (NPC) veprojnë si të mençur në video lojëra ndërsa edhe filma dizajnohen e renderizohen me kompjuter nga AI në hollivud.</p>" },
            { id: "agriculture", title: "Bujqësi", content: "<p>Ekuilifikon agrikulture preçize ose përdorimin e dronëve ku dedektojnë saktësisht lagështitë barojat a infektinet e kulturave mbi terren.</p>" }
        ]
    },
    {
        id: "prompts",
        title: "Inxhinieria e Prompteve",
        items: [
            {
                id: "what-is-prompt",
                title: "Çfarë është një prompt?",
                content: `\n                    <p>Një <strong>prompt</strong> (udhëzim/komandë) është teksti që shtypni tek një një mjet i inteligjencës artificiale (si ChatGPT) për të kërkuar një përgjigje. Është në thelb njësoj "Timoni" i inteligjencës.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Parimi i Parë:</strong> Cilësia absolute e atyre rreshtave fjalësh gjenerues varet drejtpërdrejt nga kualiteti dhe saktësia e thellë e "prompt-it" tuaj.</li>
  <li><strong>Rregulli i Artë:</strong> "Fusni Mbeturina, Merr Mbeturina". (Garbage in, Garbage Out!). Bëj paçavure tek e pyet dhe zije se po merr po atë paçavure prap tek të kthehet si zgjidhje!</li>
</ul>
<div style="background: #f0fdf4; padding: 20px; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 20px;">
  <strong>Analogi: Porosia e Ushqimit</strong>
  <p style="margin-top: 8px;">Futeni në restorant: Nëse thatë "Du me ngran.. bëm diçka", banakieri po të jep një supë me arrëmyshk, kur në fakt alergjitë e tua ndalojnë erëzat. Me Prompte ideale bën si profesionist "Bëj një fileto të pulës super të lehtë pa lajthi dhe sille me djath kashkaval dhe në fund shoqëroje pa asnjë shpikje pikante!" - Atë që the, fiks këtë do jep AI mbrapa tek ty!</p>
</div>\n                `
            },
            {
                id: "framework-structure",
                title: "Korniza për një prompt perfekt",
                content: `
                    <p>Për rezultate superiore ndjekim (Karakter, Kontekst, Detyrë dhe Rregulla/Konstrainta):</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 24px;">
                        <!-- PERSONA -->
                        <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 12px; position: relative; overflow: hidden;">
                            <div style="position: absolute; top: 10px; right: 10px; color: var(--border-hover); opacity: 0.08; pointer-events: none;">
                                <svg viewBox="0 0 233.52 233.52" width="60" height="60" fill="currentColor"><path d="M0 116.95c0 64.15 52.06 116.58 116.58 116.58 64.52 0 116.95-52.43 116.95-116.58 0-64.52 -52.42 -116.95 -116.95 -116.95 -64.52 0 -116.58 52.42 -116.58 116.95zm23.46 0c0-51.69 41.79-93.48 93.12-93.48 51.69 0 93.12 41.79 93.12 93.48 0 26.03 -10.63 49.49 -27.86 66.35l0 -66.72c0-35.93 -29.33 -64.89 -65.26 -64.89 -35.93 0 -65.26 28.96 -65.26 64.89 0 36.29 29.33 65.25 65.26 65.26l0 -25.3c-21.99 0 -39.59 -17.96 -39.59 -39.96 0-21.63 17.6 -39.59 39.59 -39.59 22 0 39.59 17.96 39.59 39.59l0 52.06 0 32.63c-11.73 5.5 -25.3 8.8 -39.59 8.8 -51.32 0 -93.12 -41.79 -93.12 -93.12z" /></svg>
                            </div>
                            <div style="display: flex; align-items: center; gap: 12px; position: relative; z-index: 2;">
                                <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(107, 91, 79, 0.1); color: #6b5b4f; display: flex; align-items: center; justify-content: center;">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <strong style="font-size: 16px; color: var(--text-primary);">1. PERSONA (Karakteri)</strong>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6; position: relative; z-index: 2;">Përcakto ekspertizën. <br><i style="background: #fef3c7; padding: 0 4px; border-radius: 4px;">Psh: "Kushto vëmendje si një studiues ose mësues..."</i></p>
                        </div>

                        <!-- CONTEXT -->
                        <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 12px; position: relative; overflow: hidden;">
                            <div style="position: absolute; top: 10px; right: 10px; color: var(--border-hover); opacity: 0.08; pointer-events: none;">
                                <svg viewBox="0 0 233.52 233.52" width="60" height="60" fill="currentColor"><path d="M0 116.95c0 64.15 52.06 116.58 116.58 116.58 64.52 0 116.95-52.43 116.95-116.58 0-64.52 -52.42 -116.95 -116.95 -116.95 -64.52 0 -116.58 52.42 -116.58 116.95zm23.46 0c0-51.69 41.79-93.48 93.12-93.48 51.69 0 93.12 41.79 93.12 93.48 0 26.03 -10.63 49.49 -27.86 66.35l0 -66.72c0-35.93 -29.33 -64.89 -65.26 -64.89 -35.93 0 -65.26 28.96 -65.26 64.89 0 36.29 29.33 65.25 65.26 65.26l0 -25.3c-21.99 0 -39.59 -17.96 -39.59 -39.96 0-21.63 17.6 -39.59 39.59 -39.59 22 0 39.59 17.96 39.59 39.59l0 52.06 0 32.63c-11.73 5.5 -25.3 8.8 -39.59 8.8 -51.32 0 -93.12 -41.79 -93.12 -93.12z" /></svg>
                            </div>
                            <div style="display: flex; align-items: center; gap: 12px; position: relative; z-index: 2;">
                                <div style="width: 40px; height: 40px; border-radius: 10px; background: #f0fdf4; color: #16a34a; display: flex; align-items: center; justify-content: center;">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <strong style="font-size: 16px; color: var(--text-primary);">2. CONTEXT (Konteksti)</strong>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6; position: relative; z-index: 2;">Përshkruaj situatën se çfarë nevoje po përpiqesh te mbulosh.</p>
                        </div>

                        <!-- TASK -->
                        <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 12px; position: relative; overflow: hidden;">
                            <div style="position: absolute; top: 10px; right: 10px; color: var(--border-hover); opacity: 0.08; pointer-events: none;">
                                <svg viewBox="0 0 233.52 233.52" width="60" height="60" fill="currentColor"><path d="M0 116.95c0 64.15 52.06 116.58 116.58 116.58 64.52 0 116.95-52.43 116.95-116.58 0-64.52 -52.42 -116.95 -116.95 -116.95 -64.52 0 -116.58 52.42 -116.58 116.95zm23.46 0c0-51.69 41.79-93.48 93.12-93.48 51.69 0 93.12 41.79 93.12 93.48 0 26.03 -10.63 49.49 -27.86 66.35l0 -66.72c0-35.93 -29.33 -64.89 -65.26 -64.89 -35.93 0 -65.26 28.96 -65.26 64.89 0 36.29 29.33 65.25 65.26 65.26l0 -25.3c-21.99 0 -39.59 -17.96 -39.59 -39.96 0-21.63 17.6 -39.59 39.59 -39.59 22 0 39.59 17.96 39.59 39.59l0 52.06 0 32.63c-11.73 5.5 -25.3 8.8 -39.59 8.8 -51.32 0 -93.12 -41.79 -93.12 -93.12z" /></svg>
                            </div>
                            <div style="display: flex; align-items: center; gap: 12px; position: relative; z-index: 2;">
                                <div style="width: 40px; height: 40px; border-radius: 10px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center;">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </div>
                                <strong style="font-size: 16px; color: var(--text-primary);">3. TASK (Detyra)</strong>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6; position: relative; z-index: 2;">Tash futi të dhënat mbi detyrën që po kërkon ta kryej programi psh 3 plane për hartim tekstesh.</p>
                        </div>

                        <!-- CONSTRAINTS -->
                        <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 12px; position: relative; overflow: hidden;">
                            <div style="position: absolute; top: 10px; right: 10px; color: var(--primary); opacity: 0.05; pointer-events: none;">
                                <svg viewBox="0 0 233.52 233.52" width="60" height="60" fill="currentColor"><path d="M0 116.95c0 64.15 52.06 116.58 116.58 116.58 64.52 0 116.95-52.43 116.95-116.58 0-64.52 -52.42 -116.95 -116.95 -116.95 -64.52 0 -116.58 52.42 -116.58 116.95zm23.46 0c0-51.69 41.79-93.48 93.12-93.48 51.69 0 93.12 41.79 93.12 93.48 0 26.03 -10.63 49.49 -27.86 66.35l0 -66.72c0-35.93 -29.33 -64.89 -65.26 -64.89 -35.93 0 -65.26 28.96 -65.26 64.89 0 36.29 29.33 65.25 65.26 65.26l0 -25.3c-21.99 0 -39.59 -17.96 -39.59 -39.96 0-21.63 17.6 -39.59 39.59 -39.59 22 0 39.59 17.96 39.59 39.59l0 52.06 0 32.63c-11.73 5.5 -25.3 8.8 -39.59 8.8 -51.32 0 -93.12 -41.79 -93.12 -93.12z" /></svg>
                            </div>
                            <div style="display: flex; align-items: center; gap: 12px; position: relative; z-index: 2;">
                                <div style="width: 40px; height: 40px; border-radius: 10px; background: #fef2f2; color: #dc2626; display: flex; align-items: center; justify-content: center;">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </div>
                                <strong style="font-size: 16px; color: var(--text-primary);">4. CONSTRAINTS (Kufizimet)</strong>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6; position: relative; z-index: 2;">A ka rregulla shtesë? "Përdor format me pika, fjalor shqip dhe mos devijo në historinë..."</p>
                        </div>
                    </div>
                `
            },
            {
                id: "what-is-token",
                title: "Tokenet dhe kufijtë",
                content: `\n                    <p>Modelet si ChatGPT nuk i lexojnë rreshtat fjalë për fjalë si njerëzit. Përkundrazi, ato e copëtojnë tekstin në pjesë matematikore të quajtura <strong>tokene</strong>.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Çfarë është një token?</strong> Zakonisht d.m.th 3-4 shkronja. Një fjalë e shkurtër si "Mollë" mund të jetë 1 token por një fjalë e gjatë mund të ndahet në 3 tokene.</li>
  <li><strong>Kufiri i Dritares (Context Window):</strong> Çdo AI ka kufij rreth historikut të bisedës aktuale. Nëse ia kaloni atë "memorje afatshkurtër", ajo fillon dhe "harron" thelbin e fillimit të bisedës suaj!</li>
</ul>
{{WIDGET:TOOL_TOKENS}}\n                `
            }
        ]
    },
    {
        id: "agents",
        title: "Agjentët AI",
        items: [
            {
                id: "what-is-agent",
                title: "Çfarë janë Agjentët AI?",
                content: `\n                    <p>Ndërsa modelet bazë (si ChatGPT) sillen si motorë kërkimi gjenialë që gjenerojnë tekste ashtu si një njeri, <strong>Agjentët e Inteligjencës Artificiale</strong> gëzojnë lirinë e veprimit (Autonominë). Ata marrin vendime dhe rreshtojnë <strong>veprime të njëpasnjëshme</strong> për të arritur qëllimet!</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Super Aftësitë:</strong> Një agjent mund të shfletojë në internet të hapur drejtpërdrejt, të bëjë llogari te ndërlikuara me kalkulator e t'ju hapë e lëvizë lirisht skedarë tek kompjuteri.</li>
  <li><strong>Pavarësi absolute:</strong> Jepini vetëm një Komandë sipërfaqësore dhe roboti ndaj detyrat vetë pa ta drejtuar si skllav çdo dy sekonda.</li>
</ul>
<div style="background: #eef2ff; padding: 20px; border-radius: 12px; border: 1px solid #c7d2fe; margin-bottom: 20px;">
  <strong>Analogi: Enciklopedia Përballë Praktikantit!</strong>
  <p style="margin-top: 8px;">Imagjino të shohësh të vërtetën: Një AI klasik qoftë e çmendur mbetet thjesht një Enciklopedi shumë bindëse e ftohtë. I thua rreth Turqisë, e ta sjell të zbardhur faktin. AI-Agjent ndërkaq ëshë "Të paguhesh dikë" "Agjenit, Më ço në Stamboll e mi menaxho pushimet!" AI bën të pamundurën që t'ju hapi platforma avionesh automatikisht si praktikant perfekt i juaji e i blen online krejt itinerarin.</p>
</div>\n                `
            },
            {
                id: "how-agents-work",
                title: "Si funksionojnë?",
                content: `\n                    <p>Agjenti AI jeton me një kod operativ "përsëritje loop". S'qëndron në heshtje veç pasi flet. Vazhdon punën fort si llogaritës dëgjues.</p>
<div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid var(--border-light); margin-bottom: 20px;">
<ul style="display: flex; flex-direction: column; gap: 16px; margin: 0;">
  <li>🧠 <strong style="color: #0369a1;">1. Analizë Synim:</strong> AI zbulon hapat logjik super kompleks të kërkesave tuaja mbi kodin.</li>
  <li>🛠️ <strong style="color: #c2410c;">2. Veprimi/Shtegtim (Tools):</strong> Ai teston mjetet; hyn e blen vizitën, teston ujin etj automatikisht.</li>
  <li>👁️ <strong style="color: #6d28d9;">3. Shikimi mbrapa për Korozion (Vetë-Feedback):</strong> Gjeti dështim apo link t'gabuar faqeje? Agjenti KTHSHET VETE pa t'the asgjë, përdor Google sërish dhe sjell punën të kryer perfekte pa u dorëzuar.</li>
</ul>
</div>\n                `
            }
        ]
    },
    {
        id: "glossary",
        title: "Fjalori i Termave",
        items: [
            {
                id: "glossary-list",
                title: "Termat kyç të AI",
                content: `<h2>Fjalori i Termave të AI</h2>
                    <ul>
                        <li><strong>LLM (Model i Madh i Gjuhës):</strong> Një model masiv i AI i trajnuar në sasi të mëdha teksti për të kuptuar dhe gjeneruar gjuhën njerëzore (p.sh. GPT-4).</li>
                        <li><strong>Machine Learning (Mësimi i Makinerisë):</strong> Një degë e AI ku kompjuterët mësojnë nga të dhënat pa u programuar në mënyrë eksplicite.</li>
                        <li><strong>Halucinacioni:</strong> Kur AI gjeneron me besim një përgjigje të pasaktë, të fabrikuar ose pa kuptim.</li>
                        <li><strong>NLP (Përpunimi i Gjuhës Natyrore):</strong> Teknologji që ndihmon kompjuterët të kuptojnë, interpretojnë dhe manipulojnë gjuhën njerëzore.</li>
                        <li><strong>Deep Learning (Mësimi i Thellë):</strong> Një nënbashkësi e mësimit të makinerisë bazuar në rrjete neurale artificiale me shumë shtresa.</li>
                        <li><strong>RAG (Retrieval-Augmented Generation):</strong> Gjenerimi i Shtuar nga Rimarrja — kombinimi i rimarrjes së dokumentit me gjenerimin e AI.</li>
                        <li><strong>Token:</strong> Njësia më e vogël e tekstit e përpunuar nga një model AI.</li>
                        <li><strong>Embedding:</strong> Një përfaqësim vektor i tekstit i përdorur për kërkim semantik.</li>
                    </ul>
                    <div style="background: #fdf2f8; padding: 20px; border-radius: 12px; border: 1px solid #fbcfe8; margin-top: 20px;">
                      <strong>Analogjia: Fjalori i Përkthyesit</strong>
                      <p style="margin-top: 8px;">Mendoni për fjalorin si fjalorin që ju nevojitet kur vizitoni një vend të huaj. AI ka gjuhën e vet (tokena, embedding, prompte). Kuptimi i këtyre termave kyç është dallimi midis të qenit një turist i hutuar dhe një vendas i rrjedhshëm që mund të lundrojë me besim në terrenin e ri.</p>
                    </div>`
            }
        ]
    },
    {
        id: "roadmap",
        title: "Plani i Punës për AI",
        items: [
            {
                id: "roadmap-steps",
                title: "Hapat për zbatimin në klasë",
                content: `<h2>Plani i punës për AI në arsim</h2>
                    <p>Për një integrim të suksesshëm dhe të sigurt të AI në mësimdhënie, ne rekomandojmë hapat e mëposhtëm:</p>
                    <ol>
                        <li><strong>Hapi 1: Kërkimi dhe Edukimi.</strong> Mësimdhënësit duhet së pari të njihen me bazat dhe të kuptojnë rreziqet (privatësia, halucinacionet).</li>
                        <li><strong>Hapi 2: Eksperimentimi Personal.</strong> Përdorni mjetet e AI për të përgatitur planet e mësimeve, e-mailet dhe administrimin përpara se t'ua prezantoni ato nxënësve.</li>
                        <li><strong>Hapi 3: Integrimi i Mbikëqyrur.</strong> Prezantoni AI në klasë si një "bashkë-pilot", ku nxënësit analizojnë në mënyrë kritike përgjigjet e AI.</li>
                        <li><strong>Hapi 4: Vlerësimi Etik.</strong> Vendosni rregulla të qarta sa i përket integritetit akademik dhe plagjiaturës.</li>
                    </ol>
                    <div style="background: #ecfdf5; padding: 20px; border-radius: 12px; border: 1px solid #a7f3d0; margin-top: 20px;">
                      <strong>Analogjia: Të mësuarit për të notuar</strong>
                      <p style="margin-top: 8px;">Integrimi i AI është saktësisht si të mësuarit për të notuar. Ju nuk hidheni menjëherë në pjesën e thellë. Ju filloni duke lexuar rregullat e sigurisë (Hapi 1), duke vendosur këmbët në ujin e cekët vetë (Hapi 2), duke u praktikuar me një trajner (Hapi 3), dhe përfundimisht duke kuptuar kufijtë e pishinës (Hapi 4).</p>
                    </div>`
            }
        ]
    },

    {
        id: "architecture",
        title: "Arkitektura & Si Funksionon AI",
        items: [
            {
                id: "ai-architecture",
                title: "Arkitektura e AI (Në Përgjithësi)",
                content: `\n                    <p>Të kuptuarit e arkitekturës së Inteligjencës Artificiale nuk kërkon një diplomë në shkenca kompjuterike. Në thelb, bëhet fjalë se si sistemi merr informacion, kërkon modele (paterns) dhe jep një parashikim.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>1. Hyrja (Dëgjimi i pyetjes suaj):</strong> Këtu AI merr <strong>Prompt-in</strong> (Kërkesën) tuaj. Sistemi përkthen fjalët tuaja në të dhëna matematikore.</li>
  <li><strong>2. Përpunimi (Mendimi & Kërkimi):</strong> AI ndan prompt-in në pjesë (tokensa), i kalon ato nëpër rrjetën e tij neurale dhe llogarit përgjigjen matematikisht më logjike.</li>
  <li><strong>3. Dalja (Shkrimi i përgjigjes):</strong> AI përkthen matematikën e saj përsëri në tekst njerëzor (ose imazhe/kod) dhe jua paraqet.</li>
</ul>
<div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #cbd5e1; margin-bottom: 20px;">
  <strong>Analogjia: Bibliotekari i Zgjuar por i Verbër</strong>
  <p style="margin-top: 8px;">Imagjinoni një bibliotekar jashtëzakonisht të shpejtë dhe shumë inteligjent në një bibliotekë masive, por ai është plotësisht i verbër dhe i izoluar nga bota e jashtme. Për t'i bërë një pyetje (Hyrja), ju rrëshqisni një letër nën derë. Ai lexon letrën, vrapon nëpër miliona libra në sekonda për të gjetur përgjigjen më të mirë (Përpunimi), shkruan një përgjigje dhe jua kthen nën derë (Dalja). Ai në thelb nuk "e di" sesi duket qielli; ai vetëm e di se çfarë thonë librat për këtë gjë.</p>
</div>\n                `
            },
            {
                id: "how-models-work",
                title: "Si Funksionojnë Modelet AI",
                content: `\n                    <p>Koncepti më thelbësor për t'u përvetësuar është ky: <strong>AI nuk 'di' fakte si një bazë të dhënash. Ai parashikon fjalë matematikisht.</strong></p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Faza e Trajnimit:</strong> Modelet lexojnë miliarda faqe teksti për të mësuar modelet statistikore të gjuhës njerëzore.</li>
  <li><strong>Faza e Veprimit:</strong> Kur pyesni diçka, modeli llogarit: <em>"Në bazë të trajnimit tim, cila është fjala e radhës më e mundshme statistikisht?"</em></li>
</ul>
<div style="background: #fffbeb; padding: 20px; border-radius: 12px; border: 1px solid #fde68a; margin-bottom: 20px;">
  <strong>Analogjia: Autokorrigjimi me Super-Fuqi</strong>
  <p style="margin-top: 8px;">Imagjinoni autokorrigjimin në telefonin tuaj. Kur shkruani "Unë po shkoj në...", telefoni sugjeron "qendër" ose "shtëpi". AI funksionon me të njëjtin parim bazë, por në një shkallë miliona herë më të madhe dhe komplekse.</p>
</div>\n                `
            },
            {
                id: "model-types-detail",
                title: "Llojet e Modeleve",
                content: `\n                    <p>Modele të ndryshme AI janë arkitekturuar për të përpunuar lloje krejtësisht të ndryshme të dhënash.</p>
<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">📚 Modele të Mëdha Gjuhësore (LLMs)</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Përpunojnë tekst. <em>P.sh., ChatGPT, Claude.</em></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">👁️ Modele të Vizionit Kompjuterik</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Përpunojnë imazhe dhe video. <em>P.sh., Midjourney.</em></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">🧠 Modele Multimodale</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Përpunojnë hyrje të ndryshme njëkohësisht (tekst+imazh+zë). <em>P.sh., GPT-4o.</em></p>
  </div>
</div>\n                `
            },
            {
                id: "core-concepts-detail",
                title: "Konceptet Baza",
                content: `\n                    <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">1. Tokens (Alfabeti i AI)</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">AI nuk lexon fjalë por 'tokens'. Një token është rreth 3-4 shkronja.</p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">2. Dritarja e Kontekstit</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Limiti i kujtesës afatshkurtër të AI brenda një bisede të vetme.</p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">3. Temperatura</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Kontrollon nivelin e kreativitetit apo 'çmendurisë' së përgjigjeve (e lartë = kreative, e ulët = e saktë).</p>
  </div>
</div>\n                `
            }
        ]
    },
    {
        id: "prompt-advanced",
        title: "Prompt të Avancuara",
        items: [
            {
                id: "prompt-patterns",
                title: "Teknikat e Prompt",
                content: `\n                    <h2>Teknikat e Avancuara</h2>
<div style="display: flex; flex-direction: column; gap: 16px;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary);">1. Prompt me Rol (Rolet)</h3>
    <p>Thuaj AI-së të pretendojë se është një ekspert specifik. Kjo ndryshon totalisht vizionin dhe fjalorin e tij.</p>
    <p><em>Shembull: "Vepro si një pedagog i lartë..."</em></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary);">2. Prompt me Shembull</h3>
    <p>Thuajini AI-së 2 apo 3 shembuj konkret para se ajo të kryejë punën që t'ia mësoni si duhet fiks.</p>
  </div>
</div>\n                `
            },
            {
                id: "prompt-structure",
                title: "Struktura Ekzakte",
                content: `<h2>Ndërtimi i Stukturës perfekte</h2>
                    <pre>Roli: Analist i Biznesit
Qëllimi: Analizo kostot
Konteksti: Ne jemi kompani e re
Kufizime: Jo më shumë se 200 fjalë
Formati: Listë</pre>`
            }
        ]
    },
    {
        id: "memory-rag",
        title: "Kujtesa dhe RAG",
        items: [
            {
                id: "memory-types",
                title: "Llojet e Kujtesës",
                content: `\n                    <p>Konteksti ka nevojë për trurin: Kështu e asimilon Ai Inteligjencë me anë të historikut kohor.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Kujtesa Afatshkurtër:</strong> Është fiks faqja apo qeliza në të cilën jeni në ChatGPT. Shtyp butonin *Chat i ri* dhe ajo ikën në harresë.</li>
  <li><strong>Kujtesa Afatgjatë:</strong> Direktivat ku roboti detyrohet të sillet njëlloj tek ti sa herë qe ti i rinis gjërat tek account-i.</li>
  <li><strong>Kujtesa Eksternale (Jashtme):</strong> Sirtarë privat dokumentash te bazave e quajtur Databaza Vektore kur agjenti i ndan rregullisht e ti s'i mbush përdit.</li>
</ul>\n                `
            },
            {
                id: "rag",
                title: "RAG – Gjenerimi i bazuar drejtpërdrejt tek Arkivat",
                content: `\n                    <p><strong>RAG (Retrieval-Augmented Generation)</strong> përfaqëson epokën madhore dhe thelbësore sot. Ajo e zgjidh totalisht sëmundjen e thellë t'Inteligjencës qe gjeneron "Halucinacione", pra rrena vizive si fakte llogjikuese që ngjajnë t'qarta!</p>
<p>Me fjalë të tjera sa e lëndon modelin te mendohet gjëra rreth librave te vitit 2021 ashtu zbrazëti pa dit gje per vitin tend. Kjo i ofron modelit të KTHENET sigurtazi tek Dokumenti APO Pdf e firmes tënde dhe FLET veç MBI atë argument asnje devijim!</p>
<div style="background: #fdf4ff; padding: 20px; border-radius: 12px; border: 1px solid #f5d0fe; margin-bottom: 20px;">
  <strong>Analogi: Provimi "Libër Hapur" (Open-book)</strong>
  <p style="margin-top: 8px;">Imagjibni studenti bëhet copë nga stresi provimit se "Mbajti MEND" krejt enciklopedinë jashtë me mendje po te ftohti i bllokoi testin e gabon fakte kot!! Normalitet Ky!! Por imagjino teknologjinë RAG: Ai ështe si Provimi "Libër hapur." Studenti po e morr pyetjen e nxjerr tekstin, e lexon sakt nga literatura bazë e merr pikët MAXIMALE me përgjigje origjinale t'sakt!! Pika fund! Skandalet marrin fund me këtë tek AI.</p>
</div>\n                `
            },
            {
                id: "tool-usage",
                title: "Ofrimi i Qasjeve Mekanike (API Tools)",
                content: `\n                    <p>Rasti kur t'thuash Robot, API domethënë "Brazda e jashtme lidhese" që një Agjent AI gëzon te barti forcën nga jasht mureve!!</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Mjete Hulumtuese:</strong> Marrin çmime valutorë, Skedarin Gjyqesor brenda gjysëm sekondi.. etj.</li>
  <li><strong>Mjete Veprueese (Action API):</strong> Ndërrojna emra klientave te kompanisë tënde, fusin në Outlook axhenda kalendarike t'çmendura etj.</li>
</ul>\n                `
            }
        ]
    },
    {
        id: "safety-limits",
        title: "Kufizimet & Siguria",
        items: [
            {
                id: "limitations-detail",
                title: "Kufizimet",
                content: `<h2>Çfarë NUK Mund të bëjë AI</h2>
<div style="background: #fef2f2; padding: 20px; border-radius: 12px; border: 1px solid #fca5a5; margin-bottom: 20px;">
<ul style="display: flex; flex-direction: column; gap: 12px; margin: 0;">
  <li><strong>Nuk ka 'Arsye të Shëndoshë':</strong> Mudn të të shkruajë një baladë të lotueshme për një mollë por nuk ndjen se si po bjen në tokë apo si ka erë e mollës.</li>
  <li><strong>Nuk kontrollon llogjikisht realisht dot faktet:</strong> Bën fjalë sikur din gjashtë gjuhë në perfeksion bazuar nga fjlalët parashikuese, jo fakte absolute.</li>
  <li><strong>Nuk ka vetëdije.</strong></li>
</ul>
</div>
<div style="background: #fffbeb; padding: 20px; border-radius: 12px; border: 1px solid #fde68a; margin-bottom: 20px;">
  <strong>Analogjia: Një Papagall Gjenial</strong>
  <p style="margin-top: 8px;">Mendoni për AI si një papagall jashtëzakonisht të lexuar. Mund të recitojë Shekspirin pa të meta dhe ta përziejë me fizikën kuantike sepse ka "lexuar" gjithçka në internet. Por papagalli nuk e kupton vërtet se çfarë është dashuria ose atomet. Ai vetëm e di se cilat fjalë ndjekin statistikisht njëra-tjetrën në mënyrë të përsosur.</p>
</div>`
            },
            {
                id: "failure-modes",
                title: "Rreziqet",
                content: `\n                    <p>Kur përdorni AI në teknologji prisni rreziqet më poshtë:</p>
<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light); border-left: 4px solid #ef4444;">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">1. Halucinacionet AI (Gënjeshtari i Sigurt)</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Ndonjëherë AI e humb fijen por s'do t'ju zhgënjejë prandaj SHPIK! Krijon referate false! <strong>Rregulli: Verifiko gjithmonë!</strong></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light); border-left: 4px solid #d97757;">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">2. Paragjykimi i Trashëguar</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Ai merr gjërat që njerëzit mendojnë gabim e ti konfirmon i paaftë se pse si p.sh dallimet e minoriteteve apo racave njerëzore.</p>
  </div>
</div>\n                `
            },
            {
                id: "best-practices",
                title: "Praktikat më të Mira",
                content: `\n                    <h2>Praktikat më të Mira për AI</h2>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Ndajeni punën me pika:</strong> Pse me u mbyt ma me një letër 3 faqëshe theksi të shkruar në një lëvizje? Jepi tre hapa bazë t'ia gjenerosh një nga një.</li>
  <li><strong>Kontrolloni vazhdimësisht mjetin:</strong> Skenari katastrofik për të rekrutuesit AI pa kontroll nga drejtori është si dështimi në punë.</li>
</ul>\n                `
            },
            {
                id: "safety-rules",
                title: "Rregulla Sigurie",
                content: `\n                    <div style="background: #fef2f2; padding: 20px; border-radius: 12px; border: 1px solid #fca5a5; margin-bottom: 20px;">
  <strong>⚠️ Rregullore e Ashpër!</strong>
  <ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
    <li>Kurrë, NË ASNJË MËNYRË s'duhen dhënë passworde tek AI pasi ato ushqehen prej teje.</li>
  </ul>
</div>\n                `
            }
        ]
    },
    {
        id: "performance-design",
        title: "Dizajni & Performanca",
        items: [
            {
                id: "optimization",
                title: "Optimizimi i Shpejtësisë",
                content: `\n                    <p>Mendimi për përdorimin industrial e arkitektonik:</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li>Ulini maksimalisht "tokens", d.m.th bëni fjali shkurt se paguani per fjale të kota në rast të AI Biznes.</li>
</ul>
<div style="background: #f0fdf4; padding: 20px; border-radius: 12px; border: 1px solid #bbf7d0; margin-top: 20px;">
  <strong>Analogjia: Punësimi i një Korrieri</strong>
  <p style="margin-top: 8px;">Çdo fjalë (token) që dërgoni tek një model AI kushton fuqi kompjuterike. Është si të punësosh një korrier që tarifon për çdo gram. Nëse dëshironi të dërgoni një letër, nuk dërgoni të gjithë librin me 1,000 faqe nga ka ardhur — grisni atë faqe të vetme dhe dërgoni atë. Kjo është saktësisht arsyeja pse ne përdorim RAG dhe embeddings!</p>
</div>\n                `
            },
            {
                id: "evaluation",
                title: "Matja e Inteligjencës",
                content: `\n                    <h2>Çfarë tregon shkëlqimin në një API (Platformë AI)?</h2>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Kosto:</strong> OpenAI apo Anthropic marrin para bazuar në aftësinë komplekse kompjuterike. Modelet "Mini" dalin pothuajse falas!</li>
</ul>\n                `
            },
            {
                id: "system-design",
                title: "Modelet e Rrjetës Inxhinierike",
                content: `\n                    <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
  <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">Struktura Më Bazike Njeri-Bot (Chatbot)</h3>
    <p style="font-family: monospace; font-size: 13px; background: white; padding: 8px; border-radius: 4px; border: 1px solid #e2e8f0; margin: 0; color: #475569;">Përdorues → API → Server Rrjeti → Model Mendor → Pergjigjia Ekran</p>
  </div>
</div>\n                `
            }
        ]
    },
    {
        id: "agent-advanced",
        title: "Sistemi Super Agjent",
        items: [
            {
                id: "agent-execution",
                title: "Urgjenca Operacionale Agjent",
                content: `\n                    <p>Kështu mendon super agjenti prapa skenave derisa gjen zgjidhjen:</p>
<div style="background: #1e293b; color: #f8fafc; padding: 20px; border-radius: 12px; font-family: monospace; font-size: 14px; margin-bottom: 20px;">
  <div style="color: #60a5fa; margin-bottom: 8px;">NIS CIKLIN:</div>
  1. Analizo qëllimin e hyrjes<br>
  2. Kontrollo memorien dhe kontekstin<br>
  3. Planifiko hapin e ardhshëm logjik<br>
  4. <strong style="color: #60a5fa;">Ekzekuto veprimin</strong> (p.sh. kërko në web)<br>
  5. <strong style="color: #60a5fa;">Vëzhgo rezultatin</strong><br>
  6. Përditëso gjendjen e brendshme<br>
  7. Përsërit deri në arritjen e qëllimit<br>
  <div style="color: #60a5fa; margin-top: 8px;">MBYLLJA E CIKLIT: Kthe Rezultatin</div>
</div>
<div style="background: #eff6ff; padding: 20px; border-radius: 12px; border: 1px solid #bfdbfe; margin-bottom: 20px;">
  <strong>Analogjia: Shefi i Kuzhinës</strong>
  <p style="margin-top: 8px;">Një Chatbot standard është si një makinë shitëse (vending machine): shtypni një buton, merrni një rostiçeri. Një Agjent Autonom është si një Shef Kuzhine. Ata marrin një porosi (Qëllimi), kontrollojnë qilarin (Kujtesa), kuptojnë se u mungojnë domatet, vendosin të dërgojnë dikë në treg (Ekzekutimi), presin që domatet të mbërrijnë (Vëzhgimi) dhe më pas e mbarojnë gatimin e gjellës në perfeksion.</p>
</div>\n                `
            },
            {
                id: "output-formats",
                title: "Formatet Jetike Të Daljes së të Dhënave (Output)",
                content: `\n                    <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <div style="background: #f9fafb; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb;"><strong>JSON Tabela:</strong> Tabela e programimit inxhinierik. Çdo makinë ndërvepron me AI 100% permes strukturës thellësisht rradhe të JSON. Tekstet rrëmujë (shkrimet tona) nuk kalojnë direkt mes kodeve por ne Formë JSON!</div>
</div>\n                `
            }
        ]
    },
    {
        id: "future-principles",
        title: "Të Ardhmet dhe Parimet Rënjësore",
        items: [
            {
                id: "future-directions",
                title: "Të Ardhmet AI",
                content: `\n                    <p>Për ku po shkon zhvillimi pas këtij viti?</p>
<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;"><strong>Agjentët plotësisht Autonomë (Të Varur):</strong> Do lulëzojnë "Zyrat virtuale agjentë" pa asnjë mbikqryrës! Punëtoret bëhen mbikqyrës direkt te 5 inteligjencave bashke punojnë një projekt masiv!</div>
</div>
<div style="background: rgba(107, 91, 79, 0.1); padding: 20px; border-radius: 12px; border: 1px solid #fed7aa; margin-top: 20px;">
  <strong>Analogjia: Evolucioni i Smartfonëve</strong>
  <p style="margin-top: 8px;">Tani për tani, AI është si ditët e para të telefonave celularë. Janë pajisje (faqe interneti) të veçanta që duhet t'i vizitoni për t'i përdorur. Në të ardhmen, AI do të jetë si një smartphone modern — e integruar në gjithçka. Nuk do të jetë thjesht një aplikacion që e hapni; do të jetë vetë sistemi operativ, duke menaxhuar jetën tuaj dixhitale në mënyrë të padukshme.</p>
</div>\n                `
            },
            {
                id: "strict-rules",
                title: "Rregullat Inxhinierike Moderne Agjentësh!",
                content: `\n                    <p>Kujdes! Si inxhinier gjithmonë jepni direktiva me "MOS RREJ":</p>
<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <div style="background: rgba(107, 91, 79, 0.1); padding: 12px; border-radius: 8px; border: 1px solid #ffedd5;"><strong>Një rregullore pa kompromis:</strong> Çdo devijim dënon modelin e e fundos inteligjencen me Halucinacione andaj theksoji t'nxisë mendime origjinale. </div>
</div>\n                `
            },
            {
                id: "system-template",
                title: "Bazë Ekzakte Prompt-i nga Agjentë Zbulues AI!",
                content: `\n                    <p>Sekreti më i fshehtë i sistemit AI prompt zbuluar i gjallë:</p>
<div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid var(--border-light); font-family: monospace; font-size: 13px; color: #334155; margin-bottom: 20px;">
  Ju jeni një agjent i ndërtuar për saktësi absolute mos u lëndoni nga pyetjet, mbani mend thellë!<br>
  - Jep vetë fakte të besueshme.<br>
</div>\n                `
            },
            {
                id: "summary",
                title: "Llogjika Fillestare",
                content: `\n                    <div style="background: #eef2ff; padding: 20px; border-radius: 12px; border: 1px solid #c7d2fe; text-align: center;">
  <p style="margin: 0; font-size: 18px; color: #3730a3;"><strong>AI NUK ËSHTË ZOT! AI ËSHTË NJË MAKINË E FUQISHME PËR PARASHIKIM FJALËSH BAZUAR NË MATEMATIKË!</strong></p>
  <p style="margin-top: 8px; color: #4f46e5;">Cilësia maksimale = Të dhënat origjinale (që ti mban fshehur) + Drejtimi Udhëzimeve Të Tua</p>
</div>\n                `
            }
        ]
    }
];

var getAllChapters = () => {
    return DOCS_DATA.flatMap(section => section.items.map(chapter => ({
        ...chapter,
        sectionId: section.id,
        sectionTitle: section.title
    })));
};

