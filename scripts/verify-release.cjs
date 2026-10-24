/* Public-source, translation and recovery checks for the static web release. */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const walk=dir=>fs.readdirSync(path.join(root,dir),{withFileTypes:true}).flatMap(x=>x.isDirectory()&&!['tools','tests','__pycache__'].includes(x.name)?walk(dir+'/'+x.name):x.isFile()?[dir+'/'+x.name]:[]);
const files=['assets','biz','dev','edu'].flatMap(walk);
const sandbox={React:{},URL,document:{currentScript:{src:'https://example.test/assets/platform.js'}},location:{protocol:'https:'}};sandbox.window=sandbox;vm.createContext(sandbox);
for(const file of ['biz/libs/htm.js','assets/platform.js',...['en','mk','sq'].map(x=>'biz/locales/locales-'+x+'.js'),'biz/locales/locales.js','biz/src/utils.js'])vm.runInContext(read(file),sandbox);
const registry=sandbox.AINOW['locales/locales'].TRANSLATIONS,utils=sandbox.AINOW['src/utils'];
const get=(object,key)=>key.split('.').reduce((x,k)=>x?.[k],object);

test('all public JavaScript parses, including lazy-loaded catalogue files',()=>{
  let count=0;
  for(const file of files.filter(x=>x.endsWith('.js'))){new vm.Script(read(file),{filename:file});count++;}
  assert.ok(count>1000);
});

test('every literal Business translation key has real EN/MK/SQ text',()=>{
  const missing=[];
  const sources=files.filter(x=>(x.startsWith('biz/src/')||x==='assets/platform-pages.js')&&x.endsWith('.js'));
  for(const file of sources)for(const [,key] of read(file).matchAll(/\bt\(\s*['"]([\w.-]+)['"]/g)){
    if(key.endsWith('.'))continue;
    for(const lang of ['en','mk','sq']){const value=get(registry[lang],key);if(typeof value!=='string'&&!Array.isArray(value))missing.push(lang+':'+file+':'+key);}
  }
  assert.deepEqual([...new Set(missing)],[]);
});

test('every literal Education translation key exists in all three languages',()=>{
  const s={};vm.runInNewContext(read('edu/js/i18n.js')+';this.dict=I18n.translations;',s);
  const missing=[];
  for(const file of ['edu/index.html',...files.filter(x=>(x.startsWith('edu/js/')||x.startsWith('edu/views/'))&&x.endsWith('.js')&&!x.includes('/lang/')&&!x.includes('/lib/'))]){
    const keys=[...read(file).matchAll(/(?:I18n\.t\(\s*['"]|data-i18n(?:-title|-aria-label|-placeholder)?=['"])([\w.-]+)['"]/g)].map(x=>x[1]);
    for(const key of keys.filter(x=>!x.endsWith('.')))for(const lang of ['en','mk','sq'])if(typeof s.dict[lang][key]!=='string')missing.push(lang+':'+file+':'+key);
  }
  assert.deepEqual([...new Set(missing)],[]);
});

test('Business backups retain legacy saves and reject invalid lists and foreign workspace keys',()=>{
  const input=JSON.stringify({favPrompts:'["old-id","prompt:product:prod-13"]',ainow_scratchpad:'test note',ainow_builder_state:'{"persona":"Writer"}',language:'sq','ainow-dev-web':'private','__proto__':'ignored'});
  const data=utils.parseBusinessBackup(input);
  assert.equal(data.favPrompts,JSON.parse(input).favPrompts);
  assert.equal(data.ainow_scratchpad,'test note');
  assert.equal(Object.getPrototypeOf(data),null);
  assert.ok(!Object.hasOwn(data,'ainow-dev-web'));
  for(const raw of ['null','[]','{}','{"format":"ainow-dev-web"}','invalid','{"favPrompts":"{}"}','{"favPrompts":[]}','x'.repeat(2*1024*1024+1)])assert.throws(()=>utils.parseBusinessBackup(raw));
});

test('a failed Business restore rolls back keys and never touches Education or DEV',()=>{
  const state=new Map([['favPrompts','["original"]'],['ainow_scratchpad','old'],['education-work','untouched'],['ainow-dev-web','untouched']]);
  let fail=true;
  const storage={getItem:key=>state.get(key)??null,removeItem:key=>state.delete(key),setItem:(key,value)=>{if(key==='ainow_scratchpad'&&fail){fail=false;throw Error('Quota');}state.set(key,value);}};
  const before=JSON.stringify([...state]);
  assert.throws(()=>utils.restoreBusinessBackup(storage,utils.parseBusinessBackup('{"favPrompts":"[]","ainow_scratchpad":"new"}')));
  assert.equal(JSON.stringify([...state]),before);
});

test('Business recovery offers translated actions without exposing an exception or stack',()=>{
  for(const lang of ['en','mk','sq']){
    const s={...sandbox,localStorage:{getItem:()=>lang}};s.window=s;
    s.React={Component:class{constructor(props){this.props=props;}},createElement:(type,props,...children)=>({type,props:props||{},children})};
    vm.runInNewContext(read('biz/src/ErrorBoundary.js'),s);
    const Subject=s.AINOW['src/ErrorBoundary'].ErrorBoundary,instance=new Subject({children:'child'});instance.state={hasError:true,error:Error('private-stack')};
    const tree=instance.render(),value=JSON.stringify(tree);
    assert.ok(value.includes(registry[lang].release.recovery_title));assert.ok(!value.includes('private-stack'));
    assert.ok(value.includes('ainow-button'));assert.ok(!value.includes('componentStack'));
  }
});

test('the complete shared Business component module executes without missing exports',()=>{
  const s={...sandbox};s.window=s;s.lucide={};
  s.React={createElement:()=>null,useState(){},useEffect(){},useRef(){},useMemo(){}};
  const placeholder={};for(const name of ['Header','Sidebar','Footer'])s.AINOW['src/components/layout/'+name]=placeholder;
  s.AINOW['src/config']={};s.AINOW['src/hooks']={};
  vm.runInNewContext(read('biz/src/components.js'),s);
  for(const name of ['Scratchpad','Pagination','ShortcutsModal'])assert.equal(typeof s.AINOW['src/components'][name],'function');
});


test('Business dialogs trap focus, close only the top dialog and restore scrolling and focus',()=>{
  const listeners=new Set(),cleanups=[],events=[];
  const doc={body:{style:{overflow:'auto'}},activeElement:null,addEventListener:(type,fn)=>listeners.add(fn),removeEventListener:(type,fn)=>listeners.delete(fn)};
  const node=name=>({name,disabled:false,offsetParent:{},isConnected:true,focus(){doc.activeElement=this;}});
  const opener=node('opener');doc.activeElement=opener;
  const s={React:{useRef:value=>({current:value}),useEffect:fn=>cleanups.push(fn())},AINOW:{'locales/locales':{}},document:doc};s.window=s;
  vm.runInNewContext(read('biz/src/hooks.js'),s);
  const controls=[node('close'),node('input'),node('copy')];
  const panel={current:{querySelectorAll:()=>controls,querySelector:()=>controls[1]}};
  s.AINOW['src/hooks'].useDialog(true,()=>events.push('parent'),panel);
  assert.equal(doc.activeElement,controls[1]);assert.equal(doc.body.style.overflow,'hidden');
  doc.activeElement=controls[2];for(const fn of listeners)fn({key:'Tab',preventDefault(){},shiftKey:false});assert.equal(doc.activeElement,controls[0]);
  for(const fn of listeners)fn({key:'Tab',preventDefault(){},shiftKey:true});assert.equal(doc.activeElement,controls[2]);
  const child={current:{querySelectorAll:()=>controls,querySelector:()=>controls[0]}};
  s.AINOW['src/hooks'].useDialog(true,()=>events.push('child'),child);
  for(const fn of listeners)fn({key:'Escape',preventDefault(){},stopImmediatePropagation(){}});
  assert.deepEqual(events,['child']);cleanups.pop()();assert.equal(doc.body.style.overflow,'hidden');
  cleanups.pop()();assert.equal(doc.body.style.overflow,'auto');assert.equal(doc.activeElement,opener);assert.equal(listeners.size,0);
});


test('shared backup controls reject invalid files and require confirmation before restoring',async()=>{
  const s={...sandbox}, messages=[];s.window=s;
  s.React={createElement:(type,props,...children)=>({type,props:props||{},children}),useState:()=>['',x=>messages.push(x)],useRef:()=>({current:null})};
  vm.runInNewContext(read('assets/backup-controls.js'),s);
  const nodes=tree=>Array.isArray(tree)?tree.flatMap(nodes):tree&&typeof tree==='object'?[tree,...nodes(tree.children)]:[];
  let restored=0,confirmed=0;
  s.confirm=()=>{confirmed++;return false;};
  for(const lang of ['en','mk','sq']){
    const tree=s.AINOWBackupControls({lang,description:'Business',filename:'test',read:()=>({}),validate:raw=>utils.parseBusinessBackup(JSON.stringify(raw)),restore:()=>restored++});
    const file=nodes(tree).find(x=>x.props.type==='file');
    const event=text=>({target:{files:[{size:text.length,text:async()=>text}],value:'test'}});
    const before=confirmed;await file.props.onChange(event('{"format":"ainow-dev-web"}'));assert.equal(confirmed,before);assert.equal(restored,0);
    await file.props.onChange(event('{"favPrompts":"[]"}'));assert.equal(restored,0);
    assert.ok(JSON.stringify(tree).includes(s.AINOWPlatform.text(lang,'backupDownload')));
  }
  assert.equal(confirmed,3);assert.equal(restored,0);assert.ok(messages.every(x=>x&&!x.startsWith('backup')));
  assert.ok(read('settings.html').includes('assets/backup-controls.js'));
});


test('Services leads with AINOW in every language and keeps CTRLab in one secondary section',()=>{
  const nodes=tree=>Array.isArray(tree)?tree.flatMap(nodes):tree&&typeof tree==='object'?[tree,...nodes(tree.children)]:[];
  for(const lang of ['en','mk','sq']){
    const s={...sandbox};s.window=s;s.AINOW={...sandbox.AINOW,'src/components':{useLanguage:()=>({lang,t:key=>get(registry[lang],key)})}};s.lucide={ExternalLink:'svg'};
    s.React={useEffect(){},createElement:(type,props,...children)=>typeof type==='function'?type({...props,children}):({type,props:props||{},children})};
    vm.runInNewContext(read('assets/platform-services.js'),s);
    vm.runInNewContext(read('biz/src/StaticPages.js'),s);
    const tree=s.AINOW['src/StaticPages'].StaticPage({page:'services'}),list=nodes(tree),data=s.AINOW_SERVICES.content[lang];
    assert.equal(data.training.length,4);assert.equal(data.ainow.length,3);assert.equal(data.services.length,6);
    const hero=list.find(x=>x.props.className==='services-heading'),heroLinks=nodes(hero).filter(x=>x.type==='a');
    assert.equal(heroLinks[0].props.href,'https://ainow.mk/contactus');assert.ok(!JSON.stringify(hero).includes('ctrlab'));
    const technical=list.find(x=>x.props.className==='services-technical');
    assert.equal(nodes(technical).filter(x=>x.type==='a').length,1);
    const commercial=list.filter(x=>x.type==='a'&&x.props.href?.includes('ctrlab.net'));
    assert.equal(commercial.length,2); // one partner link and its visible reference
    assert.equal(list.filter(x=>x.type==='img').length,2); // original light/dark wordmarks
    assert.ok(!JSON.stringify(tree).includes('undefined'));
  }
  const crypto=require('node:crypto'),provenance=JSON.parse(read('assets/brand/ctrlab-provenance.json'));
  for(const [file,sha] of Object.entries({'ctrlab-black.svg':'ec0e5585f8495faa408456f11e564c69f1213e9a00d67473b1e5901258585262','ctrlab-white.svg':'926a5f0fa5be042181f7d9751553fd885026a4ad490eb55af7c9801478aa7feb'}))assert.equal(crypto.createHash('sha256').update(read('assets/brand/'+file)).digest('hex'),sha);
  assert.ok(provenance);
  for(const file of ['about.html','help.html','assets/platform-files.js'])assert.ok(read(file).includes('assets/platform-services.js'),file);
});

test('the shared language picker does not close on its own opening click',()=>{
  const s={...sandbox},listeners=[];s.window=s;s.AINOW={...sandbox.AINOW,'src/hooks':{useLanguage:()=>({lang:'en',setLang(){},t:key=>key})}};
  let open=false,effects=[];
  s.document={addEventListener:(type,fn)=>listeners.push({type,fn}),removeEventListener(){}};
  s.React={useState:()=>[open,value=>{open=typeof value==='function'?value(open):value;}],useRef:()=>({current:{contains:()=>true}}),useEffect:fn=>effects.push(fn),createElement:(type,props,...children)=>({type,props:props||{},children})};
  vm.runInNewContext(read('biz/src/components/layout/Header.js'),s);
  const header=s.AINOW['src/components/layout/Header'].Header({currentTheme:'light'});
  const nodes=tree=>Array.isArray(tree)?tree.flatMap(nodes):tree&&typeof tree==='object'?[tree,...nodes(tree.children)]:[];
  const child=nodes(header).find(x=>typeof x.type==='function'&&x.type.name==='LanguageSwitcher');
  let tree=child.type(child.props),trigger=nodes(tree).find(x=>x.props['data-header-control']==='language');
  trigger.props.onClick();assert.equal(open,true);effects=[];
  tree=child.type(child.props);for(const fn of effects)fn();
  assert.ok(!listeners.some(x=>x.type==='click'));
  for(const x of listeners.filter(x=>['pointerdown','focusin'].includes(x.type)))x.fn({target:{}});
  assert.equal(open,true);assert.equal(nodes(tree).find(x=>x.props.id==='ainow-language-options').children.flat().length,3);
});


test('Business enables offline caching on loopback and the chooser caches its local images',()=>{
  for(const file of ['biz/index.html','biz/agents.html','biz/builder.html','biz/playbooks.html']){
    const script=[...read(file).matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x=>x[1]).find(x=>x.includes('serviceWorker'));
    const registered=[];vm.runInNewContext(script,{location:{hostname:'127.0.0.1',protocol:'http:'},localStorage:{getItem:()=>null},document:{documentElement:{classList:{toggle(){}}}},navigator:{serviceWorker:{register:path=>{registered.push(path);return Promise.resolve();}}}});
    assert.deepEqual(registered,['./sw.js'],file);
  }
  const s={self:{}};vm.runInNewContext(read('assets/platform-files.js'),s);
  for(const [,image] of read('index.html').matchAll(/<img[^>]+src="([^"]+)"/g))assert.ok(s.self.AINOW_PLATFORM_FILES.includes(image),image);
});


test('Education offline cache includes every local stylesheet used by its entry page',()=>{
  const s={self:{addEventListener(){}}};s.importScripts=()=>vm.runInNewContext(read('assets/platform-files.js'),s);
  vm.runInNewContext(read('edu/service-worker.js')+';this.files=urlsToCache;',s);
  const cached=new Set(s.files.map(file=>new URL(file,'https://example.test/edu/service-worker.js').pathname));
  for(const [,href] of read('edu/index.html').matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)){
    assert.ok(cached.has(new URL(href,'https://example.test/edu/index.html').pathname),href+' missing from Education offline cache');
  }
});


test('Settings retains both legacy backup formats and isolates each workspace reset',()=>{
  const s={window:{}};vm.runInNewContext(read('assets/settings-data.js'),s);
  const core=require('../dev/core.js'),catalog={window:{}};vm.runInNewContext(read('dev/data/catalog.js'),catalog);
  const data=catalog.window.AINOW_DEV_DATA,values=new Map([['favPrompts','["legacy"]'],['ainow_scratchpad','Business note'],[core.key,JSON.stringify(core.emptyState())],['ainow_lang','sq'],['ainow-theme','dark'],['edu-view','prompts']]);
  const storage={getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value),removeItem:key=>values.delete(key)};
  const biz=s.window.AINOWSettingsData.business(storage,utils),dev=s.window.AINOWSettingsData.development(storage,core,data);
  const bizBackup=biz.read(),devBackup=dev.read();
  assert.equal(biz.validate(bizBackup).favPrompts,'["legacy"]');
  assert.equal(devBackup.format,'ainow-dev-web');assert.equal(dev.validate(devBackup).version,1);
  assert.ok(!Object.hasOwn(bizBackup,core.key));assert.throws(()=>dev.validate(bizBackup));assert.throws(()=>biz.validate(devBackup));
  const devBefore=values.get(core.key);biz.reset();assert.equal(values.has('favPrompts'),false);assert.equal(values.get(core.key),devBefore);
  biz.restore(biz.validate(bizBackup));assert.equal(values.get('ainow_scratchpad'),'Business note');
  dev.reset();assert.equal(values.has(core.key),false);assert.equal(values.get('favPrompts'),'["legacy"]');
  for(const key of ['ainow_lang','ainow-theme','edu-view'])assert.ok(values.has(key));
  assert.equal(biz.validate(s.window.AINOWSettingsData.business({getItem:()=>null},utils).read()).favPrompts,'[]','An empty browser exports a restorable Business backup');
  values.set(core.key,'invalid');assert.throws(()=>dev.read(),'Corrupted local state must not silently export an empty copy');
});

test('Settings reset rolls back a partial storage failure',()=>{
  const s={window:{}};vm.runInNewContext(read('assets/settings-data.js'),s);
  const values=new Map([['favPrompts','["saved"]'],['favAgents','["agent"]'],['ainow_lang','mk']]);
  const storage={getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value),removeItem:key=>{if(key==='favAgents')throw Error('blocked');values.delete(key);}};
  assert.throws(()=>s.window.AINOWSettingsData.business(storage,utils).reset());
  assert.equal(values.get('favPrompts'),'["saved"]');assert.equal(values.get('favAgents'),'["agent"]');assert.equal(values.get('ainow_lang'),'mk');
});

test('Settings labels are complete and its footer link works from every workspace and local files',()=>{
  const source=read('assets/platform-settings.js'),s={};
  vm.runInNewContext(source.slice(source.indexOf('  const copy='),source.indexOf('  const mark='))+';this.labels=copy;',s);
  for(const lang of ['en','mk','sq'])for(const key of Object.keys(s.labels.en))assert.ok(typeof s.labels[lang][key]==='string'&&s.labels[lang][key].length>2,lang+':'+key);
  for(const workspace of ['edu','biz','dev']){
    const sandbox={URL,location:{protocol:'file:',pathname:'/AINOW/'+workspace+'/index.html'},document:{currentScript:{src:'file:///D:/AINOW/assets/platform.js'}}};sandbox.window=sandbox;vm.runInNewContext(read('assets/platform.js'),sandbox);
    assert.equal(sandbox.AINOWPlatform.href('settings'),'file:///D:/AINOW/settings.html?workspace='+workspace);
    assert.ok(sandbox.AINOWPlatform.footer('en').includes('settings.html?workspace='+workspace));
    assert.equal((sandbox.AINOWPlatform.footer('en').match(/data-platform-page="settings"/g)||[]).length,1);
  }
});


test('the shared Scratchpad delegates DEV notes without reading or writing Business storage',async()=>{
 const slots=[],changes=[],copied=[];let cursor=0;
 const s={React:{createElement:(type,props,...children)=>({type,props:props||{},children}),useState:initial=>{const i=cursor++;if(!(i in slots))slots[i]=typeof initial==='function'?initial():initial;return [slots[i],value=>slots[i]=value];},useEffect:()=>{},useRef:()=>({current:null}),useMemo:fn=>fn()},lucide:{},localStorage:{getItem(){throw Error('Business storage must not be read');},setItem(){throw Error('Business storage must not be written');}},AINOW:{'src/config':{},'src/utils':{copyTextToClipboard:async text=>copied.push(text)},'src/hooks':{useLanguage:()=>({t:key=>key}),useDialog:()=>{},useStorageSync:()=>{}},'src/components/layout/Header':{},'src/components/layout/Sidebar':{},'src/components/layout/Footer':{}}};
 s.window=s;vm.createContext(s);vm.runInContext(read('biz/libs/htm.js'),s);vm.runInContext(read('biz/src/components.js'),s);
 const nodes=x=>Array.isArray(x)?x.flatMap(nodes):x&&typeof x==='object'?[x,...nodes(x.children)]:[];
 const props={isOpen:true,onClose(){},value:'Existing DEV note',maxLength:100000,onChange:text=>{changes.push(text);return true;}};
 const render=()=>{cursor=0;return nodes(s.AINOW['src/components'].Scratchpad(props));};
 let tree=render(),editor=tree.find(x=>x.type==='textarea');assert.equal(editor.props.value,'Existing DEV note');assert.equal(editor.props.maxLength,100000);
 editor.props.onChange({target:{value:'Updated DEV note'}});tree=render();assert.equal(tree.find(x=>x.type==='textarea').props.value,'Updated DEV note');
 await tree.find(x=>x.props['aria-label']==='release.copy_all').props.onClick();assert.deepEqual(copied,['Updated DEV note']);assert.deepEqual(changes,['Updated DEV note']);
 assert.ok(read('dev/index.html').includes('biz/src/components.js'));assert.ok(read('dev/app.js').includes('onChange=${notes=>commit({notes})}'));
});
