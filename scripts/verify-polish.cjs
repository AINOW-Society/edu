const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const nodes=value=>Array.isArray(value)?value.flatMap(nodes):value&&typeof value==='object'?[value,...nodes(value.children||[])]:[];
function settings({failLanguage=false,failTheme=false}={}){
  let current=new URL('https://example.test/settings.html?workspace=biz&keep=1#anchor'),lang='en',cursor=0;
  const slots=[],store=new Map(),resets=[];
  const s={URL,URLSearchParams,localStorage:{getItem:key=>store.get(key)||null,setItem:(key,value)=>{if(failTheme)throw Error('Quota');store.set(key,value);}},location:{get href(){return current.href;},get search(){return current.search;}},history:{replaceState:(_,__,url)=>current=new URL(url)},document:{getElementById:()=>({}),documentElement:{classList:{toggle(){}},dataset:{}}},confirm:()=>true,React:{createElement:(type,props,...children)=>({type,props:props||{},children}),useEffect(){},useState(value){const index=cursor++;if(!(index in slots))slots[index]=typeof value==='function'?value():value;return [slots[index],value=>slots[index]=value];}},ReactDOMClient:{createRoot:()=>({render:node=>s.component=node.type})},AINOWPlatform:{text:(_,key)=>key,href:value=>value,icon:()=>'<svg/>',languages:[{code:'en',name:'English'},{code:'mk',name:'Македонски'},{code:'sq',name:'Shqip'}]},AINOW:{'src/components/layout/Header':{Header:'header'},'src/components/layout/Sidebar':{SidebarWrapper:'sidebar'},'src/components/layout/Footer':{Footer:'footer'},'src/hooks':{useLanguage:()=>({lang,setLang:value=>{if(failLanguage)return false;lang=value;return true;}}),useStorageSync(){}},'src/utils':{}},AINOWBackupControls:'backup',AINOWSettingsData:{business:()=>({reset:()=>resets.push('biz')}),development:()=>({reset:()=>resets.push('dev')})},AINOWDevCore:{},AINOW_DEV_DATA:{}};
  s.window=s;s.self=s;vm.createContext(s);vm.runInContext(read('biz/libs/htm.js'),s);vm.runInContext(read('assets/platform-settings.js'),s);
  const render=()=>{cursor=0;return s.component();};
  return {render,find:(tree,predicate)=>nodes(tree).find(predicate),store,resets,url:()=>current,language:()=>lang};
}
test('Settings reports preference saves and failures in the Preferences section',()=>{
  for(const fault of [false,true]){
    const h=settings({failTheme:fault}),tree=h.render();h.find(tree,n=>n.props.id==='appearance').props.onChange({target:{value:'dark'}});
    const section=h.find(h.render(),n=>n.props['aria-labelledby']==='preferences-title'),status=h.find(section,n=>n.props.role==='status');
    assert.ok(status);assert.equal(status.props.className.includes('is-error'),fault);
    assert.ok(nodes(status).some(n=>n.type==='span'&&n.children.includes(fault?'backupStorageError':'Saved in this browser.')));
  }
  const h=settings({failLanguage:true});h.find(h.render(),n=>n.props.id==='starting-language').props.onChange({target:{value:'sq'}});
  assert.equal(h.language(),'en');assert.ok(h.find(h.render(),n=>n.props.className==='settings-status is-error'));
});
test('Settings workspace selection preserves the URL and isolates the reset adapter',()=>{
  const h=settings();h.find(h.render(),n=>n.props.id==='data-workspace').props.onChange({target:{value:'dev'}});
  assert.equal(h.url().searchParams.get('workspace'),'dev');assert.equal(h.url().searchParams.get('keep'),'1');assert.equal(h.url().hash,'#anchor');assert.deepEqual(h.resets,[]);
  h.find(h.render(),n=>n.props.className==='ainow-button is-secondary is-danger').props.onClick();assert.deepEqual(h.resets,['dev']);
  h.find(h.render(),n=>n.props.id==='data-workspace').props.onChange({target:{value:'edu'}});assert.ok(!h.find(h.render(),n=>n.type==='backup'));
});
test('restored settings refresh language and theme while keeping success beside the data controls',()=>{
  const h=settings();h.store.set('ainow_lang','sq');h.store.set('ainow-theme','dark');h.find(h.render(),n=>n.type==='backup').props.onRestored();
  const tree=h.render();assert.equal(h.language(),'sq');assert.equal(h.find(tree,n=>n.props.id==='appearance').props.value,'dark');
  const section=h.find(tree,n=>n.props['aria-labelledby']==='settings-data-title'),status=h.find(section,n=>n.props.role==='status');
  assert.ok(nodes(status).some(n=>n.type==='span'&&n.children.includes('backupRestored')));
});
test('Help shortcuts focus and scroll to their headings without changing the route in every language',()=>{
  const s={window:{},calls:[],document:{getElementById:id=>({focus:options=>s.calls.push(['focus',id,options]),scrollIntoView:options=>s.calls.push(['scroll',id,options])})},icon:()=>null};s.self=s;vm.createContext(s);
  vm.runInContext(read('biz/libs/htm.js'),s);s.html=s.htm.bind((type,props,...children)=>({type,props:props||{},children}));
  vm.runInContext(read('assets/platform-help.js'),s);s.AINOW_HELP_CONTENT=s.window.AINOW_HELP_CONTENT;
  const source=read('assets/platform-pages.js'),start=source.indexOf('  function HelpJumps('),end=source.indexOf('  function Overview(',start);vm.runInContext(source.slice(start,end)+';this.subject=HelpJumps;',s);
  for(const lang of ['en','mk','sq'])for(const workspace of [false,true]){
    const tree=s.subject({lang,workspace}),buttons=nodes(tree).filter(n=>n.type==='button');assert.equal(buttons.length,2);assert.ok(tree.props['aria-label']);assert.ok(buttons.every(button=>button.children.some(child=>typeof child==='string'&&child.trim().length>0)));
    for(let i=0;i<buttons.length;i++){s.calls.length=0;buttons[i].props.onClick();assert.equal(s.calls[0][1],i===1?'help-faq-title':workspace?'help-steps-title':'help-guides-title');assert.equal(s.calls[0][0],'focus');assert.equal(s.calls[0][2].preventScroll,true);assert.equal(s.calls[1][0],'scroll');}
  }
});
