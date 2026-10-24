const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const plain=value=>JSON.parse(JSON.stringify(value));
function storage(initial={}) {
  const values=new Map(Object.entries(initial));
  return {getItem:key=>values.has(key)?values.get(key):null,setItem:(key,value)=>values.set(key,String(value)),removeItem:key=>values.delete(key)};
}
function hookHarness(initial={}) {
  const effects=[],handlers=new Map(),store=storage(initial);
  const s={localStorage:store,React:{useRef:value=>({current:value}),useEffect:fn=>effects.push(fn)},AINOW:{'locales/locales':{}}};
  s.window=s;s.addEventListener=(name,fn)=>{if(!handlers.has(name))handlers.set(name,new Set());handlers.get(name).add(fn);};s.removeEventListener=(name,fn)=>handlers.get(name).delete(fn);
  vm.runInNewContext(read('biz/src/hooks.js'),s);
  return {s,store,effects,handlers,emit:(type,key)=>{for(const fn of handlers.get(type)||[])fn({type,key});}};
}
test('storage synchronization refreshes only changed watched keys and removes its listeners',()=>{
  const h=hookHarness({notes:'old',theme:'light'}),calls=[];
  h.s.AINOW['src/hooks'].useStorageSync(['notes','theme'],values=>calls.push(plain(values)));
  const dispose=h.effects[0]();
  h.store.setItem('unrelated','changed');h.emit('storage','unrelated');assert.equal(calls.length,0);
  h.store.setItem('notes','restored');h.emit('storage','notes');assert.deepEqual(calls,[{notes:'restored',theme:'light'}]);
  h.emit('focus');assert.equal(calls.length,1);
  h.store.removeItem('notes');h.emit('pageshow');assert.deepEqual(calls[1],{notes:null,theme:'light'});
  h.store.setItem('theme','dark');h.emit('storage',null);assert.equal(calls[2].theme,'dark');
  dispose();assert.ok([...h.handlers.values()].every(value=>value.size===0));
});
test('managed notes can disable external storage access and denied storage never crashes synchronization',()=>{
  const h=hookHarness();h.s.localStorage.getItem=()=>{throw Error('Unavailable');};
  h.s.AINOW['src/hooks'].useStorageSync([],()=>assert.fail('No watched keys'));
  assert.doesNotThrow(()=>h.effects[0]());
  h.s.AINOW['src/hooks'].useStorageSync(['notes'],()=>assert.fail('Unreadable values'));
  assert.doesNotThrow(()=>h.effects[1]());assert.equal(h.handlers.size,0);
});
function education() {
  let current=new URL('https://example.test/edu/index.html?view=prompts');
  const changes=[],sections=Object.fromEntries(['home','prompts','tools','resources','glossary'].map(id=>[id,{classList:{add(){},remove(){}}}]));
  const s={URL,URLSearchParams,document:{addEventListener(){},querySelector:()=>null,querySelectorAll:()=>[],getElementById:id=>id==='main-content'?{scrollTop:0}:sections[id.replace('view-','')]},I18n:{t:key=>key},location:{get href(){return current.href;},get search(){return current.search;},get hash(){return current.hash;}},history:{pushState:(_,__,href)=>{changes.push(href);current=new URL(href);},replaceState:(_,__,href)=>{current=new URL(href);}}};
  s.window=s;vm.runInNewContext(read('edu/js/app.js')+';this.app=App;',s);const app=s.app;
  for(const name of ['closeLangMenu','closePromptDetail','renderSidebarCtx','renderTools','renderGlossary','_renderHomeCards','_renderHomeStats'])app[name]=()=>{};
  const widgets=[];app.currentView='prompts';app.loadView=async()=>{};s.ResourceManager={init(){},switchWidget:value=>widgets.push(value)};
  return {app,changes,widgets,locate:href=>current=new URL(href),url:()=>current.href};
}
test('Education navigation updates deep links and restores Back/Forward without duplicate history',async()=>{
  const h=education();await h.app.switchView('tools');assert.equal(new URL(h.url()).searchParams.get('view'),'tools');assert.equal(h.changes.length,1);
  await h.app.switchView('tools');assert.equal(h.changes.length,1);
  h.locate('https://example.test/edu/index.html?view=glossary');await h.app.restoreLocation();assert.equal(h.app.currentView,'glossary');assert.equal(h.changes.length,1);
  await h.app.switchView('unknown');assert.equal(h.app.currentView,'home');assert.equal(new URL(h.url()).searchParams.has('view'),false);
});
test('a slower Education view cannot replace a later navigation',async()=>{
  const h=education(),pending={};h.app.loadView=id=>new Promise(resolve=>pending[id]=resolve);
  const rendered=[];h.app.renderSidebarCtx=id=>rendered.push(id);
  const first=h.app.switchView('tools'),second=h.app.switchView('glossary');pending.glossary();await second;pending.tools();await first;
  assert.deepEqual(rendered,['glossary']);assert.equal(h.app.currentView,'glossary');
});
test('Education resource deep links survive initial navigation and the latest widget wins',async()=>{
  const h=education(),pending=[];
  h.app.loadView=()=>new Promise(resolve=>pending.push(resolve));
  h.app.renderSidebarCtx=()=>{};
  h.locate('https://example.test/edu/index.html?view=resources&widget=homework');
  const initial=h.app.restoreLocation('replace');assert.equal(new URL(h.url()).searchParams.get('widget'),'homework');pending.shift()();await initial;
  h.locate('https://example.test/edu/index.html?view=resources&widget=tests');const first=h.app.restoreLocation();
  h.locate('https://example.test/edu/index.html?view=resources&widget=handouts');const second=h.app.restoreLocation();
  pending[1]();await second;pending[0]();await first;assert.equal(h.app.currentView,'resources');assert.deepEqual(h.widgets,['homework','handouts']);
});
function development(initial) {
  const core=require('../dev/core.js'),data={library:{items:[{id:'guide',kind:'dev-guides'}],categories:[]},goals:[],checks:[]};
  const store=storage({[core.key]:initial}),slots=[],refs=[],sync=[];let cursor=0,refCursor=0;
  const s={core,data,items:data.library.items,localStorage:store,useState:value=>{const i=cursor++;if(!(i in slots))slots[i]=typeof value==='function'?value():value;return [slots[i],value=>slots[i]=typeof value==='function'?value(slots[i]):value];},useRef:value=>{const i=refCursor++;return refs[i]||(refs[i]={current:value});},useEffect(){},useStorageSync:(_,fn)=>sync.push(fn),getRoute:()=>'home',document:{documentElement:{dataset:{theme:'light'}}},setTimeout,clearTimeout,Ctx:{Provider:'provider'},AINOWDevShell:'shell',AINOW:{'src/components':{Scratchpad:'scratchpad'}},Home:'home',location:{protocol:'https:'}};
  s.window=s;s.self=s;vm.createContext(s);vm.runInContext(read('biz/libs/htm.js'),s);s.html=s.htm.bind((type,props,...children)=>({type,props:props||{},children}));
  const source=read('dev/app.js'),start=source.indexOf('  function App() {'),end=source.indexOf('  ReactDOMClient.createRoot',start);
  vm.runInContext(source.slice(start,end)+';this.subject=App;',s);
  return {core,data,store,render:()=>{cursor=0;refCursor=0;return s.subject().props.value;},sync:values=>sync.at(-1)(values)};
}
test('DEV refuses to replace unreadable saved work when a user makes a new change',()=>{
  const h=development('{broken'),context=h.render();assert.equal(context.commit({notes:'new'}),false);assert.equal(h.store.getItem(h.core.key),'{broken');
});
test('DEV commits preserve restored fields and synchronize reset from another page',()=>{
  const core=require('../dev/core.js'),h=development(JSON.stringify(core.emptyState())),context=h.render();
  const restored={...core.emptyState(),notes:'restored',saved:['guide'],drafts:{guide:'Recovered draft'}};h.store.setItem(core.key,JSON.stringify(restored));
  assert.equal(context.commit({notes:'typed after restore'}),true);let value=JSON.parse(h.store.getItem(core.key));assert.deepEqual(value.saved,['guide']);assert.equal(value.drafts.guide,'Recovered draft');
  h.store.removeItem(core.key);h.sync({[core.key]:null,'ainow-lang':'en'});assert.deepEqual(plain(h.render().state),core.emptyState());
});
test('DEV topic searches use the translated label as well as the original source fields',()=>{
  const core=require('../dev/core.js'),items=[{id:'one',title:'Sample',summary:'Example',topic:'quality'}],topics={quality:{en:'Testing',mk:'Проверка',sq:'Kontrollimi'}};
  for(const [lang,query] of [['en','testing'],['mk','проверка'],['sq','kontrollimi']])assert.equal(core.matches(items,{lang,query,topics}).length,1);
  assert.equal(core.matches(items,{query:'unmatched',topics}).length,0);
});
test('Business exports validate existing work and never download an unrestorable backup',()=>{
  const s={React:{}};s.window=s;vm.runInNewContext(read('biz/src/utils.js'),s);vm.runInNewContext(read('assets/settings-data.js'),s);
  const utils=s.AINOW['src/utils'];
  for(const values of [{ainow_builder_state:'{broken'},{favPrompts:'{}'}])assert.throws(()=>s.AINOWSettingsData.business(storage(values),utils).read());
  const adapter=s.AINOWSettingsData.business(storage({ainow_scratchpad:'A sample note'}),utils),backup=plain(adapter.read());
  assert.equal(backup.ainow_scratchpad,'A sample note');assert.equal(backup.favPrompts,'[]');assert.deepEqual(plain(adapter.validate(backup)),backup);
});
function builder() {
  const core=require('../biz/src/builder-core.js'),key='ainow_builder_state',store=storage({[key]:JSON.stringify({task:'Saved task'})});
  const slots=[],effects=[];let cursor=0,sync;
  const s={core,storageKey:key,localStorage:store,document:{getElementById:()=>({scrollIntoView(){}}),documentElement:{classList:{toggle(){}}}},useState:initial=>{const i=cursor++;if(!(i in slots))slots[i]=typeof initial==='function'?initial():initial;return [slots[i],value=>slots[i]=typeof value==='function'?value(slots[i]):value];},useRef:initial=>{const i=cursor++;return slots[i]||(slots[i]={current:initial});},useEffect:(fn,deps)=>{const i=cursor++;if(!slots[i]||deps.some((value,j)=>value!==slots[i][j])){slots[i]=deps;effects.push(fn);}},useMemo:fn=>fn(),useStorageSync:(_,fn)=>sync=fn,useLanguage:()=>({isReady:true,t:key=>key}),useToast:()=>({toast:{},showToast(){}}),useGlobalShortcuts(){},Header:'header',Footer:'footer',SidebarWrapper:'sidebar',Toast:'toast',Scratchpad:'scratch',Field:'field',frameworks:[],constraints:[]};
  s.window=s;s.self=s;for(const name of ['RefreshCw','FileText','Copy','Download','Check','ChevronLeft','ChevronRight','User','Brain','Quote','Zap','HelpCircle'])s[name]=name;
  vm.createContext(s);vm.runInContext(read('biz/libs/htm.js'),s);vm.runInContext(read('assets/prompt-text.js'),s);s.html=s.htm.bind((type,props,...children)=>({type,props:props||{},children}));
  const source=read('biz/src/builder.js'),start=source.indexOf('function BuilderApp(){'),end=source.indexOf('ReactDOMClient.createRoot',start);
  vm.runInContext(source.slice(start,end)+';this.subject=BuilderApp;',s);
  const nodes=x=>Array.isArray(x)?x.flatMap(nodes):x&&typeof x==='object'?[x,...nodes(x.children)]:[];
  return {store,key,render:()=>{cursor=0;const tree=s.subject();while(effects.length)effects.shift()();return nodes(tree);},sync:()=>sync({[key]:store.getItem(key),'ainow-theme':store.getItem('ainow-theme')})};
}
test('a theme change preserves an unsaved Builder draft after storage quota failure',()=>{
  const h=builder(),field=tree=>tree.find(node=>node.type==='field'&&node.props.id==='builder-task');
  let tree=h.render();assert.equal(field(tree).props.value,'Saved task');
  const write=h.store.setItem;h.store.setItem=(key,value)=>{if(key===h.key)throw Error('Quota full');write(key,value);};
  field(tree).props.onChange('Keep this unsaved task');tree=h.render();assert.equal(field(tree).props.value,'Keep this unsaved task');
  write('ainow-theme','dark');h.sync();tree=h.render();assert.equal(field(tree).props.value,'Keep this unsaved task');
  write(h.key,JSON.stringify({task:'Explicitly restored task'}));h.sync();tree=h.render();assert.equal(field(tree).props.value,'Explicitly restored task');
});
test('backup export checks UTF-8 file size against the same limit as restore',()=>{
  const slots=[];let cursor=0,downloads=0;
  const s={Blob,React:{useState:initial=>{const i=cursor++;if(!(i in slots))slots[i]=initial;return [slots[i],value=>slots[i]=value];},useRef:()=>({current:null})},AINOWPlatform:{text:(_,key)=>key,icon:()=>''},URL:{createObjectURL:()=>{downloads++;return 'blob:sample';}},document:{createElement:()=>assert.fail('Oversized backup must not download')}};
  s.window=s;s.self=s;vm.createContext(s);vm.runInContext(read('biz/libs/htm.js'),s);s.React.createElement=(type,props,...children)=>({type,props:props||{},children});vm.runInContext(read('assets/backup-controls.js'),s);
  const nodes=x=>Array.isArray(x)?x.flatMap(nodes):x&&typeof x==='object'?[x,...nodes(x.children)]:[];
  const render=()=>{cursor=0;return nodes(s.AINOWBackupControls({lang:'en',description:'Backup',read:()=>({notes:'文'.repeat(700000)}),filename:'sample'}));};
  render().find(node=>node.type==='button').props.onClick();assert.equal(downloads,0);assert.ok(render().some(node=>node.props.role==='status'&&node.children.includes('backupTooLarge')));
});

test('Builder click and keyboard step navigation keep draft fields and distinguish viewed steps',()=>{
  const h=builder();let tree=h.render();const steps=()=>tree.find(node=>node.props.className==='builder-steps').children.flat(Infinity).filter(node=>node&&node.type==='button');
  const field=tree.find(node=>node.type==='field'&&node.props.id==='builder-task');field.props.onChange('A retained fictional task');tree=h.render();
  steps()[3].props.onClick();tree=h.render();assert.equal(steps()[3].props['aria-current'],'step');assert.ok(steps()[1].children.flat(Infinity).some(node=>JSON.stringify(node).includes('smooth.step_open')));
  steps()[3].props.onKeyDown({key:'Home',preventDefault(){}});tree=h.render();assert.equal(steps()[0].props['aria-current'],'step');assert.equal(tree.find(node=>node.type==='field'&&node.props.id==='builder-task').props.value,'A retained fictional task');
  assert.ok(steps()[3].children.flat(Infinity).some(node=>JSON.stringify(node).includes('smooth.step_viewed')));assert.equal(JSON.parse(h.store.getItem(h.key)).task,'A retained fictional task');
});
