const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const plain=value=>JSON.parse(JSON.stringify(value));
const nodes=tree=>Array.isArray(tree)?tree.flatMap(nodes):tree&&typeof tree==='object'?[tree,...nodes(tree.children)]:[];
const text=tree=>Array.isArray(tree)?tree.map(text).join(''):tree&&typeof tree==='object'?text(tree.children):tree==null?'':String(tree);
function harness(file,{lang='en',stored={},blocked=false,playbooks=[]}={}){
  const slots=[],effects=[],listeners=new Map(),values=new Map(Object.entries(stored)),messages=[];
  let cursor=0,dirty=true,tree;
  const same=(a,b)=>a&&b&&a.length===b.length&&a.every((value,index)=>Object.is(value,b[index]));
  const useState=initial=>{const index=cursor++;if(!slots[index])slots[index]={value:typeof initial==='function'?initial():initial};return [slots[index].value,value=>{const next=typeof value==='function'?value(slots[index].value):value;if(!Object.is(next,slots[index].value)){slots[index].value=next;dirty=true;}}];};
  const useMemo=(fn,deps)=>{const index=cursor++;if(!slots[index]||!same(deps,slots[index].deps))slots[index]={value:fn(),deps};return slots[index].value;};
  const useEffect=(fn,deps)=>{const index=cursor++;if(!slots[index]||!same(deps,slots[index].deps)){const previous=slots[index];slots[index]={deps,cleanup:previous?.cleanup};effects.push(()=>{previous?.cleanup?.();slots[index].cleanup=fn();});}};
  const useRef=value=>useMemo(()=>({current:value}),[]);
  const icon=()=>null,component=name=>Object.assign(()=>null,{componentName:name});
  const sandbox={console,URL,Event,encodeURIComponent,decodeURIComponent,setTimeout:()=>0,clearTimeout(){},requestIdleCallback:fn=>fn(),localStorage:{getItem:key=>{if(blocked)throw Error('Unavailable');return values.get(key)??null;},setItem:(key,value)=>{if(blocked)throw Error('Unavailable');values.set(key,String(value));},removeItem:key=>values.delete(key)},document:{querySelector:()=>null,getElementById:()=>null,documentElement:{classList:{toggle(){}}}},location:{hash:file.includes('index.js')?'#/prompts':'',href:'https://example.test/biz/index.html'},navigator:{},React:{useState,useMemo,useEffect,useRef,useCallback:(fn,deps)=>useMemo(()=>fn,deps),createElement:(type,props,...children)=>({type,props:props||{},children}),Fragment:component('Fragment')},lucide:new Proxy({}, {get:()=>icon})};
  sandbox.window=sandbox;sandbox.self=sandbox;sandbox.scrollTo=()=>{};
  sandbox.addEventListener=(name,fn)=>{if(!listeners.has(name))listeners.set(name,new Set());listeners.get(name).add(fn);};
  sandbox.removeEventListener=(name,fn)=>listeners.get(name)?.delete(fn);
  sandbox.dispatchEvent=event=>{for(const fn of [...listeners.get(event.type)||[]])fn(event);return true;};
  const libraryHash=sandbox.location.hash;
  sandbox.location.pathname='/biz/'+(file.includes('agents')?'agents':'index')+'.html';sandbox.location.search='';
  sandbox.history={back:()=>{sandbox.location.hash=libraryHash;sandbox.dispatchEvent({type:'hashchange'});},replaceState:(_state,_title,url)=>{sandbox.location.hash=url.includes('#')?url.slice(url.indexOf('#')):'';}};
  vm.createContext(sandbox);
  for(const source of ['biz/libs/htm.js','biz/libs/fuse.js',`biz/locales/locales-${lang}.js`,'biz/src/utils.js'])vm.runInContext(read(source),sandbox);
  const dictionary=sandbox.AINOW[`locales/locales-${lang}`].data;
  const t=(key,vars)=>{if(!key)return '';let value=key.split('.').reduce((value,part)=>value?.[part],dictionary);if(typeof value!=='string')return key;for(const [name,replacement]of Object.entries(vars||{}))value=value.replaceAll('${'+name+'}',replacement);return value;};
  sandbox.AINOW['locales/locales']={loadLocale:async()=>dictionary,getCachedLocale:()=>dictionary};
  vm.runInContext(read('biz/src/hooks.js'),sandbox);
  Object.assign(sandbox,sandbox.AINOW['src/utils'],{useState,useMemo,useEffect,useRef,useCallback:sandbox.React.useCallback,html:sandbox.htm.bind(sandbox.React.createElement),useLanguage:()=>({lang,t,isReady:true}),useToast:()=>({toast:{},showToast:message=>messages.push(message)}),useStorageSync:sandbox.AINOW['src/hooks'].useStorageSync,useGlobalShortcuts(){},useDebounce:value=>value,addToHistory(){},t});
  for(const name of ['Header','Footer','ShortcutsModal','SidebarWrapper','EmptyState','ActionButtons','Toast','Scratchpad','Pagination','BusinessHome','SidebarNav','PromptItem','PromptModal','AgentItem','AgentModal','ItemCard','QuestionFlow','OutputView'])sandbox[name]=component(name);
  for(const name of ['Search','LayoutGrid','List','TableProperties','Loader2','Wand2','Settings2','Edit','X','ArrowUpDown','ArrowUp','ArrowDown','Heart','Copy','Share2','ExternalLink','Calendar','FileText','Briefcase','Cpu','ChevronRight','Target','MessageSquare','Sparkles'])sandbox[name]=icon;
  sandbox.CATEGORY_CONFIG=[];sandbox.AGENT_CATEGORIES=[{id:'all',nameKey:'agents_ui.title',icon},{id:'favorites',nameKey:'common.favorites',icon}];sandbox.PB_CAT_ICONS={};sandbox.SIT_CAT_ICONS={};sandbox.getIcon=()=>icon;
  sandbox.promptCounts={business:100};sandbox.embeddedPromptsData={business:async()=>({prompts:Array.from({length:100},(_,i)=>({id:'qa-'+i,title:i===99?'Orchid endpoint':'Sample '+String(i).padStart(3,'0'),prompt:'Draft a sample message.',tags:['sample']}))})};
  sandbox.agentsData=Array.from({length:100},(_,i)=>({id:'agent-'+i,name:i===99?'Orchid endpoint':'Sample '+String(i).padStart(3,'0'),description:'A sample assistant',instructions:'Prepare a short example.',category:'General'}));
  sandbox.playbooksData=playbooks;sandbox.normalizePb=value=>value;
  vm.runInContext(read('biz/data/data-situations.js'),sandbox);sandbox.SITUATIONS=sandbox.AINOW['data/data-situations'].SITUATIONS;
  const source=read(file),start=source.indexOf('const App = () => {'),end=source.indexOf('\nconst { ErrorBoundary }',start)>=0?source.indexOf('\nconst { ErrorBoundary }',start):source.indexOf('\nconst root = createRoot',start);
  for(const match of source.matchAll(/const\s*\{([^}]+)\}\s*=\s*lucide/g))for(const name of match[1].split(',').map(value=>value.trim()))sandbox[name]=icon;
  vm.runInContext(source.slice(start,end)+'\nthis.subject=App;',sandbox,{filename:file});
  function render(){cursor=0;dirty=false;tree=sandbox.subject();while(effects.length)effects.shift()();return tree;}
  async function settle(){for(let i=0;i<30;i++){if(dirty)render();await Promise.resolve();if(!dirty&&!effects.length){await Promise.resolve();if(!dirty)return tree;}}throw Error('Hook render did not settle');}
  return {sandbox,values,messages,t,settle,tree:()=>tree,emit:type=>sandbox.dispatchEvent({type}),find:(name,predicate=()=>true)=>nodes(tree).find(node=>node.type?.componentName===name&&predicate(node.props)),input:()=>nodes(tree).find(node=>node.type==='input'&&node.props.type==='search'),button:title=>nodes(tree).find(node=>node.type==='button'&&node.props.title===title)};
}
test('Business prompt favorites and view survive remount, including qualified IDs',async()=>{
  const first=harness('biz/src/index.js');await first.settle();
  first.find('PromptItem').props.toggleFavorite(first.find('PromptItem').props.prompt);
  first.button(first.t('release.table_view')).props.onClick();await first.settle();
  assert.equal(first.values.get('viewMode'),'table');
  const saved=JSON.parse(first.values.get('favPrompts'));assert.deepEqual(saved,['prompt:business:qa-99']);
  const second=harness('biz/src/index.js',{stored:Object.fromEntries(first.values)});await second.settle();
  const prompt=second.find('PromptItem');assert.equal(prompt.props.viewMode,'table');assert.equal(prompt.props.favorites.has(saved[0]),true);
});
for(const file of ['biz/src/index.js','biz/src/agents.js'])test(file+' resets pagination when view page size changes',async()=>{
  const h=harness(file);await h.settle();h.find('Pagination').props.onPageChange(8);await h.settle();
  assert.equal(h.find('Pagination').props.currentPage,8);h.button(h.t('release.table_view')).props.onClick();await h.settle();
  assert.equal(h.find('Pagination').props.currentPage,1);assert.ok(h.find(file.includes('agents')?'AgentItem':'PromptItem'));
});
for(const lang of ['en','mk','sq'])test('Work situations search finds localized title and description in '+lang,async()=>{
  const h=harness('biz/src/playbooks.js',{lang});await h.settle();const first=h.sandbox.SITUATIONS[0];
  for(const query of [h.t(first.titleKey),h.t(first.descKey)]){h.input().props.onChange({target:{value:'  '+query+'  '}});await h.settle();assert.ok(h.find('ItemCard',props=>props.item.id===first.id),query);}
  h.input().props.onChange({target:{value:'zz-no-such-situation-9821'}});await h.settle();assert.equal(h.find('ItemCard'),undefined);
  assert.ok(h.input().props['aria-label']);
});
for(const file of ['biz/src/index.js','biz/src/agents.js','biz/src/playbooks.js'])test(file+' remains usable when browser storage is blocked',async()=>{
  const h=harness(file,{blocked:true});await h.settle();assert.ok(h.tree());assert.ok(h.messages.includes(h.t('release.storage_unavailable')));
});
for(const [file,key]of [['biz/src/index.js','favPrompts'],['biz/src/agents.js','favAgents'],['biz/src/playbooks.js','favPlaybooks']])test(file+' adopts reset and restore in another tab without reviving old favorites',async()=>{
  const h=harness(file,{stored:{[key]:'["old-item"]'}});await h.settle();
  h.values.delete(key);h.emit('focus');await h.settle();assert.equal(h.values.get(key),'[]');
  h.values.set(key,'["restored-item"]');h.emit('pageshow');await h.settle();assert.equal(h.values.get(key),'["restored-item"]');
  h.emit('focus');await h.settle();assert.equal(h.values.get(key),'["restored-item"]');
});
test('Business restore rejects malformed saved data before replacing valid work',()=>{
  const s={React:{}};s.window=s;vm.runInNewContext(read('biz/src/utils.js'),s);const utils=s.AINOW['src/utils'];
  const invalid=[{ainow_builder_state:'{broken'},{ainow_builder_state:'null'},{ainow_builder_state:'[]'},{ainow_builder_state:'{"task":42}'},{ainow_builder_state:'{"constraints":[null]}'},{favPrompts:'[{}]'},{favAgents:'[null]'},{favPlaybooks:'[true]'},{ainow_recent_items:'[{}]'},{language:'fr'},{theme:'blue'},{viewMode:'invalid'}];
  for(const value of invalid)assert.throws(()=>utils.parseBusinessBackup(JSON.stringify(value)),JSON.stringify(value));
  const legacy={favPrompts:'[7,"legacy-id","prompt:product:prod-13"]',ainow_builder_state:'{"persona":"Writer","futureSetting":{"keep":true}}',ainow_recent_items:'[{"id":"legacy-id","title":"Saved","type":"prompt","url":"index.html#/prompt/legacy-id"}]',language:'sq',theme:'dark',viewMode:'compact'};
  assert.deepEqual(plain(utils.parseBusinessBackup(JSON.stringify(legacy))),legacy);
});
for(const file of ['biz/src/index.js','biz/src/agents.js'])test(file+' searches the complete loaded collection and clears back to all results',async()=>{
  const h=harness(file);await h.settle();h.input().props.onChange({target:{value:'Orchid endpoint'}});await h.settle();
  const name=file.includes('agents')?'AgentItem':'PromptItem',match=h.find(name);assert.ok(match);
  const record=match.props.agent||match.props.prompt;assert.equal(record.id,file.includes('agents')?'agent-99':'qa-99');
  h.input().props.onChange({target:{value:'zz-no-such-template-9821'}});await h.settle();assert.equal(h.find(name),undefined);
  h.input().props.onChange({target:{value:''}});await h.settle();assert.equal(h.find('Pagination').props.totalItems,100);
});
test('agents deleting the last favorite on a later page returns to an existing page',async()=>{
  const h=harness('biz/src/agents.js',{stored:{favAgents:JSON.stringify(Array.from({length:13},(_,i)=>'agent-'+i))}});await h.settle();
  const favoriteCategory=nodes(h.tree()).find(node=>node.type==='button'&&text(node).includes(h.t('common.favorites')));assert.ok(favoriteCategory);favoriteCategory.props.onClick();await h.settle();
  h.find('Pagination').props.onPageChange(2);await h.settle();const item=h.find('AgentItem');assert.ok(item);item.props.toggleFavorite(item.props.agent.id);await h.settle();
  assert.ok(h.find('AgentItem'));assert.ok(nodes(h.tree()).filter(node=>node.type?.componentName==='AgentItem').every(node=>node.props.currentPage===1));
});
for(const file of ['biz/src/index.js','biz/src/agents.js'])test(file+' reader follows card, Back and close navigation',async()=>{
  const h=harness(file);await h.settle();const agent=file.includes('agents'),card=agent?'AgentItem':'PromptItem',modal=agent?'AgentModal':'PromptModal',libraryHash=agent?'':'#/prompts';
  const select=()=>{const item=h.find(card);item.props.onSelect(item.props.agent||item.props.prompt);h.emit('hashchange');};
  select();await h.settle();assert.ok(h.find(modal));assert.match(h.sandbox.location.hash,agent?/^#\/agent\//:/^#\/prompt\/business\//);
  h.sandbox.location.hash=libraryHash;h.emit('hashchange');await h.settle();assert.equal(h.find(modal),undefined);
  select();await h.settle();h.find(modal).props.onClose();await h.settle();assert.equal(h.find(modal),undefined);assert.equal(h.sandbox.location.hash,libraryHash);
  h.sandbox.location.hash=agent?'#/agent/agent-0':'#/prompt/business/qa-0';h.emit('hashchange');await h.settle();assert.ok(h.find(modal));h.find(modal).props.onClose();await h.settle();assert.equal(h.find(modal),undefined);assert.equal(h.sandbox.location.hash,libraryHash);
});
test('shared formatting preserves all bundled Education and Business prompt wording and values',()=>{
  const formatter={};formatter.window=formatter;vm.runInNewContext(read('assets/prompt-text.js'),formatter);let total=0;
  const normalize=value=>String(value).replace(/\r\n?/g,'\n').replace(/^\s*(?:#{1,4}|[-*•]|\d+[.)])\s+/gm,'').replace(/\s+/g,' ').trim();
  function inspect(value,source){
    if(typeof value==='string'){
      total++;const output=formatter.AINOWPromptText.blocks(value).map(block=>block.text??block.items.join(' ')).join(' ');
      assert.equal(normalize(output),normalize(value),source);
    } else if(value&&typeof value==='object')for(const [key,item]of Object.entries(value)){
      if(['prompt','instructions','example'].includes(key)&&typeof item==='string')inspect(item,source+':'+key);
      else if(typeof item==='object')inspect(item,source+':'+key);
    }
  }
  for(const file of fs.readdirSync(path.join(root,'biz/data')).filter(value=>/^data-.+\.js$/.test(value))){const data={};data.window=data;vm.runInNewContext(read('biz/data/'+file),data);inspect(data.AINOW,file);}
  for(const lang of ['en','mk','sq']){const data={};data.window=data;vm.runInNewContext(read('edu/js/lang/'+lang+'/prompts.js'),data);inspect(data.__embeddedPromptsByLang,lang);}
  assert.equal(total,8346);
});
test('legacy Business restore synchronizes all preference aliases and rolls back a partial failure',()=>{
  const s={React:{}};s.window=s;vm.runInNewContext(read('biz/src/utils.js'),s);const utils=s.AINOW['src/utils'];
  const values=new Map([['ainow_lang','en'],['ainow-theme','light'],['ainow_dev_v095','unchanged'],['ainow_scratchpad','old']]);let fail=false;
  const storage={getItem:key=>values.get(key)??null,removeItem:key=>values.delete(key),setItem:(key,value)=>{if(fail&&key==='ainow_lang'){fail=false;throw Error('Quota');}values.set(key,value);}};
  const backup=utils.parseBusinessBackup('{"language":"sq","theme":"dark","ainow_scratchpad":"restored"}');
  const before=[...values].sort();fail=true;assert.throws(()=>utils.restoreBusinessBackup(storage,backup));assert.deepEqual([...values].sort(),before);
  utils.restoreBusinessBackup(storage,backup);
  for(const key of ['language','ainow_lang','ainow-lang'])assert.equal(values.get(key),'sq');
  for(const key of ['theme','ainow-theme'])assert.equal(values.get(key),'dark');
  assert.equal(values.get('ainow_dev_v095'),'unchanged');assert.equal(values.get('ainow_scratchpad'),'restored');
});
test('playbooks deleting the last favorite on a later page returns to an existing page',async()=>{
  const playbooks=Array.from({length:13},(_,i)=>({_type:'playbook',id:'pb-'+i,title:'Example '+i,desc:'Draft a sample',category:'Business',questions:[]}));
  const h=harness('biz/src/playbooks.js',{stored:{favPlaybooks:JSON.stringify(playbooks.map(item=>item.id))},playbooks});await h.settle();
  const category=nodes(h.tree()).find(node=>node.type?.name==='SidebarBtn'&&node.props.filterKey==='favorites');assert.ok(category);category.type(category.props).props.onClick();await h.settle();
  h.find('Pagination').props.onPageChange(2);await h.settle();const item=h.find('ItemCard');assert.ok(item);item.props.onToggleFav(item.props.item.id);await h.settle();
  assert.equal(h.find('Pagination').props.currentPage,1);assert.ok(h.find('ItemCard'));
});
