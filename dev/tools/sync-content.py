"""Publish the existing offline DEV snapshot into standalone classic web scripts.
Reads Android as a content reference only. Normal web use needs no build step.
"""
import copy
import hashlib
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'dev'
SOURCE = ROOT / 'android/app/src/main/assets/content'

def read(path):
    return json.loads(path.read_text(encoding='utf-8'))

def js(value):
    return json.dumps(value, ensure_ascii=False, separators=(',', ':')).replace('<', '\\u003c')

def build(check=False):
    library = read(SOURCE / 'dev-library.json')
    # Keep web walkthrough corrections separate from the read-only Android snapshot.
    for update in read(OUT / 'data/web-guide-updates.json')['entries']:
        entry = next(x for x in library['items'] if x['id'] == update['id'])
        for title, patch in update.get('replace', {}).items():
            section = next(s for s in entry['sections'] if s['title']['en'] == title)
            section.update(copy.deepcopy(patch))
        for title, addition in update.get('insertAfter', {}).items():
            index = next(i for i, s in enumerate(entry['sections']) if s['title']['en'] == title)
            entry['sections'].insert(index + 1, copy.deepcopy(addition))
        entry['sections'].extend(copy.deepcopy(update.get('append', [])))
        urls = {s['url'] for s in entry.get('sources', [])}
        entry.setdefault('sources', []).extend(copy.deepcopy([s for s in update.get('sources', []) if s['url'] not in urls]))
    goals = [x for x in read(ROOT / 'android/content/learning-goals.json')['goals'] if x['workspace'] == 'dev']
    checks = [x for x in read(ROOT / 'android/content/goal-checks.json')['checks'] if x['goalId'] in {g['id'] for g in goals}]
    help_data = copy.deepcopy(read(ROOT / 'android/content/dev-help.json'))
    overrides = {
        'saved-drafts': [
            'The bookmark adds an entry to Saved in DEV. Save draft stores your edited instructions in this browser and bookmarks the source. Open it from Saved to restore your draft. Copy puts text on the clipboard. Your Education and Business collections remain separate. Notes and backups are in Data & backups.',
            'Обележувачот додава запис во Зачувано во DEV. Зачувај нацрт ги чува уредените инструкции во прелистувачот и го обележува изворот. Отворете го од Зачувано за да го вратите нацртот. Копирај го става текстот во таблата со исечоци. Образование и Бизнис имаат одделни збирки. Белешки и резервни копии се во Податоци и копии.',
            'Shënuesi shton përmbajtjen te Të ruajtura në DEV. Ruaj draftin mban udhëzimet në këtë shfletues dhe shënon burimin. Hapeni nga Të ruajtura për ta rikthyer. Kopjo vendos tekstin në kujtesë. Koleksionet e Arsimit dhe Biznesit janë të ndara. Shënimet dhe kopjet rezervë gjenden te Të dhëna dhe kopje.'
        ],
        'backup': [
            'Open Data & backups to export a DEV backup containing saved items, drafts, notes, reading progress and goal results. Keep the file somewhere safe. Import accepts an AINOW DEV web backup and restores DEV only. Private browsing, clearing site data or moving to another browser can remove local work. A browser backup and an Android app backup are separate formats.',
            'Во Податоци и копии извезете DEV резервна копија со зачувани ставки, нацрти, белешки, читање и резултати од целите. Чувајте ја датотеката безбедно. Увозот прифаќа AINOW DEV веб-копија и го обновува само DEV. Приватно прелистување, бришење податоци или друг прелистувач може да ја отстранат работата. Веб-копија и Android копија се одделни формати.',
            'Te Të dhëna dhe kopje eksportoni kopje DEV me përmbajtjet e ruajtura, draftet, shënimet, leximin dhe rezultatet. Ruajeni skedarin. Importi pranon kopje AINOW DEV web dhe rikthen vetëm DEV. Shfletimi privat, fshirja e të dhënave ose ndërrimi i shfletuesit mund ta heqin punën lokale. Kopjet web dhe Android kanë formate të ndara.'
        ],
        'offline-updates': [
            'DEV bundles a reviewed snapshot of the guide, tools, 1,000 skills, 1,000 MCP records and 200 workflows. The complete downloaded folder works from local files. When hosted, the offline cache downloads in the background; keep the complete downloaded folder for dependable local use. Catalogue updates arrive with a new website release, not a live feed. Review details and required attribution are inside References.',
            'DEV содржи прегледана снимка на водичот, алатките, 1.000 вештини, 1.000 MCP записи и 200 текови. Целосната преземена папка работи локално. На хостирана страница офлајн-копијата се презема во заднина; чувајте ја целосната преземена папка за сигурна локална употреба. Збирките се обновуваат со нова веб-верзија, не преку жива објава. Податоците за преглед и авторство се во Референци.',
            'DEV përfshin një version të rishikuar të udhëzuesit, mjeteve, 1.000 aftësive, 1.000 regjistrimeve MCP dhe 200 rrjedhave. Dosja e plotë e shkarkuar punon lokalisht. Në faqen e hostuar kopja offline shkarkohet në sfond; mbani dosjen e plotë të shkarkuar për përdorim lokal. Përditësimet vijnë me versione të reja të faqes. Data dhe autorësia gjenden te Referenca.'
        ]
    }
    overrides.update({
        'start': [
            'DEV opens on an overview. Open Getting started to follow Understand, Connect and Build. Start with the basics or choose a chapter from the contents sidebar. The sidebar opens Tools, Skills, MCP and Workflows. The Overview link gives a summary of the workspace; Practice checks and the token calculator are in the sidebar.',
            'DEV се отвора со преглед. Отворете Први чекори за Разбирање, Поврзување и Создавање. Почнете со основите или изберете поглавје од страничната содржина. Страничната навигација отвора Алатки, Вештини, MCP и Текови. Преглед дава краток преглед на просторот; практичните проверки и калкулаторот се во страничната лента.',
            'DEV hapet me një përmbledhje. Hapni Hapat e parë për Kuptoni, Lidhni dhe Ndërtoni. Filloni me bazat ose zgjidhni kapitull nga përmbajtja anash. Navigimi anash hap Mjetet, Aftësitë, MCP dhe Rrjedhat. Përmbledhja paraqet hapësirën; kontrollet praktike dhe llogaritësi gjenden në shiritin anësor.'
        ],
        'learning-progress': [
            'Mark as read records reading and can be reversed. Chapters are tracked separately in each language. Open Practice checks from the sidebar to see six learning topics, related reading and three questions per check. Missed answers point to material to review; retry freely. Scores stay local and are separate from reading progress. They do not certify mastery.',
            'Означи како прочитано бележи читање и може да се поништи. Поглавјата се следат одделно по јазик. Отворете Практични проверки од страничната лента за шест теми, соодветни материјали и три прашања по проверка. Погрешните одговори упатуваат на повторување; обидете се повторно. Резултатите остануваат локални, одделни од читањето, и не потврдуваат совладано знаење.',
            'Shëno si të lexuar regjistron leximin dhe mund të zhbëhet. Kapitujt ndiqen veçmas për çdo gjuhë. Hapni Kontrolle praktike nga shiriti anësor për gjashtë tema, materiale përkatëse dhe tri pyetje për kontroll. Përgjigjet e gabuara tregojnë materialin për rishikim; riprovoni lirisht. Rezultatet mbeten lokale, veç leximit, dhe nuk certifikojnë zotërimin.'
        ]
    })
    for faq in help_data['faqs']:
        if faq['id'] in overrides:
            faq['answer'] = dict(zip(['en','mk','sq'], overrides[faq['id']]))
    payload = {'library': library, 'goals': goals, 'checks': checks, 'help': help_data}
    outputs = {OUT/'data/catalog.js': 'window.AINOW_DEV_DATA='+js(payload)+';\n', OUT/'data/help.js': 'window.AINOW_DEV_HELP='+js(help_data)+';\n'}
    media = read(OUT / 'data/guide-media.json')
    resolved = {}
    for entry_id, sections in media['placements'].items():
        entry = next(x for x in library['items'] if x['id'] == entry_id)
        resolved[entry_id] = {}
        for title, image_ids in sections.items():
            index = next(i for i, s in enumerate(entry['sections']) if s['title']['en'] == title)
            assert all(id in media['images'] for id in image_ids)
            resolved[entry_id][str(index)] = image_ids
    outputs[OUT/'guide-media.js'] = 'window.AINOW_DEV_MEDIA='+js({'images': media['images'], 'placements': resolved})+';\n'
    for item in library['items']:
        if item.get('contentFile'):
            raw = (SOURCE/'dev-skills'/item['contentFile']).read_bytes()
            assert hashlib.sha256(raw).hexdigest() == item['contentSha256']
            key = item['contentFile'][:-3]
            outputs[OUT/'data/skills'/(key+'.js')] = 'window.AINOW_DEV_SKILLS=window.AINOW_DEV_SKILLS||{};window.AINOW_DEV_SKILLS['+js(key)+']='+js(raw.decode('utf-8'))+';\n'
    for path, text in outputs.items():
        if check:
            assert path.read_text(encoding='utf-8') == text, path
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text(text,encoding='utf-8',newline='\n')
    sources = list((ROOT/'android/design/tool-icons').glob('*')) + list((SOURCE/'licenses').glob('*'))
    for source in sources:
        if source.is_file():
            dest = OUT/'assets'/('tool-icons' if source.parent.name == 'tool-icons' else 'licenses')/source.name
            if check:
                assert source.read_bytes() == dest.read_bytes(), dest
            else:
                dest.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(source,dest)
    paths = ['./','./index.html','./styles.css','./theme.css','./practice.css','./guide-media.css','./app.js','./shell.js','./core.js','./guide-media.js','./learning-visuals.js','./learning-explorers.js','./manifest.json','./data/catalog.js','./data/help.js',
             '../assets/workspaces.css','../assets/fonts/fonts.css','../edu/assets/logo.svg',
             '../biz/libs/vendor.js','../biz/libs/htm.js']
    paths += ['../biz/'+path for path in ['assets/style.css','libs/tailwindcss.js','src/runtime.js',
              'locales/locales-en.js','locales/locales-mk.js','locales/locales-sq.js','locales/locales.js',
              'src/config.js','src/hooks.js','src/components/layout/Header.js',
              'src/components/layout/Sidebar.js','src/components/layout/Footer.js']]
    shared = json.loads((ROOT/'assets/platform-files.js').read_text(encoding='utf-8').split('=',1)[1].strip().rstrip(';'))
    paths += ['../'+path for path in shared]
    paths += ['../assets/fonts/'+p.name for p in (ROOT/'assets/fonts').glob('*') if p.suffix in {'.woff2','.ttf','.txt','.json'} and not p.name.startswith('onest-')]
    paths += ['./'+str(p.relative_to(OUT)).replace('\\','/') for p in outputs if '/skills/' in p.as_posix()]
    paths += ['./'+str(p.relative_to(OUT)).replace('\\','/') for p in (OUT/'assets').rglob('*') if p.is_file()]
    manifest = 'self.AINOW_DEV_FILES='+js(sorted(set(paths)))+';\n'
    if check:
        assert (OUT/'offline-files.js').read_text(encoding='utf-8') == manifest
    else:
        (OUT/'offline-files.js').write_text(manifest,encoding='utf-8')
    print(json.dumps({'mode':'check' if check else 'sync','items':len(library['items']), 'skills':1000,'mcp':1000,'workflows':200,'goals':len(goals),'goalQuestions':sum(len(x['questions']) for x in checks),'skillFiles':sum('/skills/' in p.as_posix() for p in outputs),'windowsCaptures':len(media['images'])}))

if __name__ == '__main__':
    import sys
    build('--check' in sys.argv)
