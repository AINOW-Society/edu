const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const nodes=value=>Array.isArray(value)?value.flatMap(nodes):value&&typeof value==='object'?[value,...nodes(value.children||[])]:[];
function actions(extra={}){const s={AINOWPlatform:{icon:name=>'<svg data-icon="'+name+'"></svg>',href:path=>'https://example.test/'+path},...extra};s.window=s;s.self=s;vm.createContext(s);vm.runInContext(read('assets/prompt-actions.js'),s);return s;}
test('the shared reader has five direct translated app actions and one provider list for reader and card launches',()=>{
  const s=actions();assert.equal(s.AINOWPromptActions.tools.length,5);
  for(const lang of ['en','mk','sq']){const ui=s.AINOWPromptActions.ui(lang),html=s.AINOWPromptActions.render(lang);for(const value of Object.values(ui))assert.ok(value);assert.ok(html.includes(ui.choose));assert.equal((html.match(/data-prompt-tool=/g)||[]).length,5);assert.equal((html.match(/<button /g)||[]).length,5);assert.equal((html.match(/<img /g)||[]).length,5);assert.equal((html.match(/aria-label=/g)||[]).length,5);assert.ok(!html.includes('<details'));}
  for(const tool of s.AINOWPromptActions.tools)assert.ok(fs.existsSync(path.join(root,'assets/ai-apps',tool.id+'.svg')));
  for(const tool of s.AINOWPromptActions.tools){assert.ok(tool.url.startsWith('https://'));assert.ok(!tool.url.includes('?'));assert.equal(tool.promptUrl.split('?')[0],tool.url);}
  assert.ok(read('biz/src/config.js').includes('AINOWPromptActions.tools.map'));
  for(const file of ['edu/index.html','biz/index.html','biz/agents.html'])assert.ok(read(file).indexOf('prompt-actions.js')<read(file).indexOf(file.startsWith('edu')?'js/app.js':'src/config.js'));
  assert.ok(read('assets/platform-files.js').includes('assets/prompt-actions.js'));
  const icons={URL,document:{currentScript:{src:'https://example.test/assets/platform.js'}},location:{protocol:'https:'}};icons.window=icons;vm.runInNewContext(read('assets/platform.js'),icons);assert.notEqual(icons.AINOWPlatform.icon('ExternalLink'),icons.AINOWPlatform.icon('Info'));assert.ok(icons.AINOWPlatform.icon('ExternalLink').includes('M15 3h6v6'));
});
test('direct AI buttons dispatch only known app IDs and disposing removes the delegated listener',()=>{
  const events=new Map(),chosen=[];
  const button={dataset:{promptTool:'claude'},closest(){return this;}};
  const root={contains:node=>node===button,addEventListener:(key,fn)=>events.set(key,fn),removeEventListener:key=>events.delete(key)};
  const s=actions(),dispose=s.AINOWPromptActions.bind(root,tool=>chosen.push(tool.id));
  let prevented=false,stopped=false;
  events.get('click')({target:button,preventDefault(){prevented=true;},stopPropagation(){stopped=true;}});
  assert.deepEqual(chosen,['claude']);assert.equal(prevented,true);assert.equal(stopped,true);
  button.dataset.promptTool='unknown';events.get('click')({target:button});assert.deepEqual(chosen,['claude']);
  events.get('click')({target:{closest:()=>null}});assert.deepEqual(chosen,['claude']);
  dispose();assert.equal(events.size,0);
});
test('Education launches copy the edited text without placing its content in an external URL',()=>{
  const copied=[],opened=[],s={window:{open:(...args)=>opened.push(args)}};vm.createContext(s);
  const source=read('edu/js/app.js'),start=source.indexOf('    openDetailWithAI(url) {'),end=source.indexOf('    showToast(',start);
  vm.runInContext('this.subject=({'+source.slice(start,end)+'});',s);
  s.subject._detailPrompt={prompt:'Original instructions'};s.subject._detailText='Edited local copy';s.subject._copyPromptText=value=>copied.push(value);
  s.subject.openDetailWithAI('https://claude.ai/new');assert.deepEqual(copied,['Edited local copy']);assert.deepEqual(opened,[['https://claude.ai/new','_blank','noopener']]);assert.equal(s.subject._detailPrompt.prompt,'Original instructions');
});
test('the agent reader launches an AI app with filled instructions and preserves the original record',async()=>{
  let cursor=0;const slots=[],copied=[],opened=[],s=actions({useLanguage:()=>({lang:'en'}),useDialog(){},useState:value=>{const index=cursor++;if(!(index in slots))slots[index]=value;return [slots[index],value=>slots[index]=value];},useRef:()=>({current:null}),useMemo:fn=>fn(),copyTextToClipboard:async value=>{copied.push(value);return true;},open:(...args)=>opened.push(args)});
  for(const name of ['X','Heart','Copy','ActionButtons','PromptAiActions'])s[name]=name;
  vm.runInContext(read('biz/libs/htm.js'),s);vm.runInContext(read('assets/prompt-text.js'),s);s.html=s.htm.bind((type,props,...children)=>({type,props:props||{},children}));
  const source=read('biz/src/agents.js'),start=source.indexOf('const AgentModal ='),end=source.indexOf('\nconst App =',start);vm.runInContext(source.slice(start,end)+';this.subject=AgentModal;',s);
  const agent={id:'sample',name:'Example',instructions:'Prepare a plan for [User Context].',category:'General'},props={agent,onClose(){},showToast(){},t:key=>key,favorites:[],toggleFavorite(){}};
  const render=()=>{cursor=0;return nodes(s.subject(props));};let tree=render();tree.find(node=>node.type==='textarea').props.onChange({target:{value:'a fictional team'}});tree=render();tree.find(node=>node.type==='PromptAiActions').props.onChoose(s.AINOWPromptActions.tools[0]);await Promise.resolve();
  assert.equal(copied[0],'Prepare a plan for a fictional team.');assert.equal(opened[0][0],'https://chatgpt.com/');assert.equal(agent.instructions,'Prepare a plan for [User Context].');
});
