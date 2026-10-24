/* Interaction tests run against the real practice component and bundled content. */
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const plain=value=>JSON.parse(JSON.stringify(value));
const catalog={window:{}};
vm.runInNewContext(read('dev/data/catalog.js'),catalog);
const data=catalog.window.AINOW_DEV_DATA;
const utilities={React:{},AINOW:{}};utilities.window=utilities;
vm.runInNewContext(read('biz/src/utils.js'),utilities);
const promptUtils=utilities.AINOW['src/utils'];
function harness(goal,lang='en',saved=null,storageWorks=true){
  const slots=[],patches=[];let cursor=0;
  const check=data.checks.find(x=>x.goalId===goal.id),key=lang+':'+goal.id+':'+check.revision;
  const context={lang,t:value=>typeof value==='string'?value:value?.[lang]||value?.en||'',tr:(...values)=>values[['en','mk','sq'].indexOf(lang)],state:{results:saved?{[key]:{answers:saved.slice()}}:{}},commit:patch=>{patches.push(plain(patch));if(storageWorks)context.state={...context.state,...patch};return storageWorks;}};
  const sandbox={data,useC:()=>context,href:id=>'#/entry/'+id,I:()=>null,
    useState:initial=>{const index=cursor++;if(!(index in slots))slots[index]=typeof initial==='function'?initial():initial;return [slots[index],value=>{slots[index]=typeof value==='function'?value(slots[index]):value;}];},
    useRef:()=>({current:null}),useEffect:()=>{}};
  sandbox.window=sandbox;sandbox.self=sandbox;vm.createContext(sandbox);
  vm.runInContext(read('biz/libs/htm.js'),sandbox);
  sandbox.html=sandbox.htm.bind((type,props,...children)=>({type,props:props||{},children}));
  const source=read('dev/app.js'),start=source.indexOf('  function Knowledge({goal}) {'),end=source.indexOf('  function Tokens() {',start);
  vm.runInContext(source.slice(start,end)+'\nthis.subject=Knowledge;',sandbox);
  return {check,key,patches,context,render:()=>{cursor=0;return sandbox.subject({goal});}};
}
function nodes(tree){if(Array.isArray(tree))return tree.flatMap(nodes);if(!tree||typeof tree!=='object')return [];return [tree,...nodes(tree.children)];}
function text(tree){if(Array.isArray(tree))return tree.map(text).join('');if(tree==null||typeof tree==='boolean')return '';if(typeof tree!=='object')return String(tree);return text(tree.children);}
function button(tree,label){const found=nodes(tree).find(x=>x.type==='button'&&text(x)===label);assert.ok(found,'Button: '+label);return found;}
const labels={en:['Check answer','Next question','See my result'],mk:['Провери одговор','Следно прашање','Види го резултатот'],sq:['Kontrollo përgjigjen','Pyetja tjetër','Shih rezultatin tim']};
for(const lang of ['en','mk','sq'])test('every practice check works one question at a time in '+lang,()=>{
  for(const goal of data.goals){
    const h=harness(goal,lang),choices=[];let tree=h.render();
    for(let step=0;step<h.check.questions.length;step++){
      const questions=nodes(tree).filter(x=>x.type==='fieldset');assert.equal(questions.length,1);
      assert.equal(button(tree,labels[lang][0]).props.disabled,true);
      const q=h.check.questions[step],selected=step===0?(q.answer+1)%q.options.length:q.answer;choices.push(selected);
      const radio=nodes(tree).find(x=>x.type==='input'&&x.props.type==='radio'&&x.props.value===selected);assert.ok(radio);radio.props.onChange();tree=h.render();
      assert.equal(button(tree,labels[lang][0]).props.disabled,false);button(tree,labels[lang][0]).props.onClick();tree=h.render();
      assert.ok(nodes(tree).some(x=>x.type==='aside'&&x.props.role==='status'));assert.ok(text(tree).includes(h.context.t(q.explanation)));
      assert.ok(nodes(tree).filter(x=>x.type==='input').every(x=>x.props.disabled));assert.equal(h.patches.length,0,'No result is stored before finishing');
      button(tree,labels[lang][step<2?1:2]).props.onClick();tree=h.render();
    }
    assert.equal(nodes(tree).filter(x=>x.type==='fieldset').length,0);assert.ok(text(tree).includes('2 / 3'));
    assert.equal(h.patches.length,1);assert.deepEqual(Object.keys(h.patches[0]),['results']);assert.deepEqual(h.patches[0].results[h.key].answers,choices);
  }
});
test('saved results open in review and retry preserves the previous saved result until completion',()=>{
  const goal=data.goals[0],check=data.checks.find(x=>x.goalId===goal.id),saved=check.questions.map(q=>q.answer),h=harness(goal,'en',saved);
  let tree=h.render();assert.ok(text(tree).includes('3 / 3'));button(tree,'Review').props.onClick();tree=h.render();
  assert.equal(nodes(tree).filter(x=>x.type==='fieldset').length,1);assert.ok(nodes(tree).filter(x=>x.type==='input').every(x=>x.props.disabled));button(tree,'Back to result').props.onClick();tree=h.render();button(tree,'Try again').props.onClick();tree=h.render();
  assert.equal(button(tree,'Check answer').props.disabled,true);assert.equal(h.patches.length,0);assert.deepEqual(plain(h.context.state.results[h.key].answers),plain(saved));
});
test('unavailable storage does not prevent showing a local practice result',()=>{
  const h=harness(data.goals[0],'en',null,false);let tree=h.render();
  for(let step=0;step<3;step++){nodes(tree).find(x=>x.type==='input'&&x.props.value===h.check.questions[step].answer).props.onChange();tree=h.render();button(tree,'Check answer').props.onClick();tree=h.render();button(tree,step<2?'Next question':'See my result').props.onClick();tree=h.render();}
  assert.ok(text(tree).includes('3 / 3'));assert.equal(h.patches.length,1);assert.deepEqual(h.context.state.results,{});
});
test('every BIZ icon import used in the changed screens exists in the actual vendor bundle',()=>{
  const vendor={};vendor.window=vendor;vendor.self=vendor;vm.runInNewContext(read('biz/libs/vendor.js'),vendor);
  for(const file of ['biz/src/index.js','biz/src/builder.js','biz/src/components/layout/Sidebar.js','biz/src/components/layout/Header.js']){
    for(const match of read(file).matchAll(/(?:const|let)\s*\{([^}]+)\}\s*=\s*lucide\s*;/g))for(const name of match[1].split(',').map(x=>x.trim()).filter(Boolean))assert.ok(vendor.lucide[name],file+': missing '+name);
  }
});
test('new reader and practice styles are included for offline use',()=>{
  for(const file of ['assets/home.css','assets/prompt-reader.css']){assert.ok(read('biz/sw.js').includes("'./"+file+"'"));assert.ok(read('biz/index.html').includes(file));}
  assert.ok(read('dev/offline-files.js').includes('./practice.css'));assert.ok(read('dev/index.html').includes('practice.css'));
});
test('the prompt reader copies filled variables and edited text without rewriting its source',async()=>{
  const slots=[],copied=[],opened=[];let cursor=0;
  const sandbox={useLanguage:()=>({lang:'en'}),isPromptFavorite:promptUtils.isPromptFavorite,useState:initial=>{const i=cursor++;if(!(i in slots))slots[i]=initial;return [slots[i],value=>{slots[i]=typeof value==='function'?value(slots[i]):value;}];},useEffect:()=>{},useRef:()=>({current:null}),useMemo:fn=>fn(),useCallback:fn=>fn,copyTextToClipboard:async value=>{copied.push(value);return true;},open:url=>opened.push(url)};
  for(const name of ['X','Edit','Heart','Copy','PromptAiActions'])sandbox[name]=()=>null;
  sandbox.window=sandbox;sandbox.self=sandbox;vm.createContext(sandbox);vm.runInContext(read('assets/prompt-text.js'),sandbox);vm.runInContext(read('assets/prompt-actions.js'),sandbox);vm.runInContext(read('biz/libs/htm.js'),sandbox);sandbox.html=sandbox.htm.bind((type,props,...children)=>({type,props:props||{},children}));
  const source=read('biz/src/index.js'),start=source.indexOf('const PromptModal ='),end=source.indexOf('\nconst SidebarNav',start);
  vm.runInContext(source.slice(start,end)+'\nthis.subject=PromptModal;',sandbox);
  const prompt={id:'sample',title:'Example',prompt:'Write to [audience].'},props={prompt,onClose:()=>{},showToast:()=>{},favorites:new Set(),toggleFavorite:()=>{},t:key=>key};
  const render=()=>{cursor=0;return sandbox.subject(props);};
  let tree=render();nodes(tree).find(x=>x.type==='input'&&x.props.id==='prompt-variable-0').props.onChange({target:{value:'наставниците'}});tree=render();
  button(tree,'Edit text').props.onClick();tree=render();const editor=nodes(tree).find(x=>x.type==='textarea');assert.equal(editor.props.value,'Write to наставниците.');
  editor.props.onChange({target:{value:'Три кратки предлози. Tre sugjerime të shkurtra.'}});tree=render();await button(tree,'Copy').props.onClick();
  assert.equal(copied[0],'Три кратки предлози. Tre sugjerime të shkurtra.');assert.equal(prompt.prompt,'Write to [audience].');
  nodes(tree).find(node=>node.type===sandbox.PromptAiActions).props.onChoose(sandbox.AINOWPromptActions.tools[0]);await Promise.resolve();assert.equal(copied[1],copied[0]);assert.equal(opened[0],'https://chatgpt.com/');
});
test('shared source IDs open the intended category while older prompt links still resolve',()=>{
  const first={id:'prod-13',category:'product',title:'Roadmap'},second={id:'prod-13',category:'productivity',title:'Priority'},unicode={id:'план / 1',category:'punë & mësim'};
  const prompts=[first,second,unicode];
  assert.equal(promptUtils.findPromptForHash(prompts,promptUtils.promptHref(second)),second);
  assert.equal(promptUtils.findPromptForHash([first],promptUtils.promptHref(second)),null,'A later-loading category must not open an unrelated template');
  assert.equal(promptUtils.findPromptForHash(prompts,'#/prompt/prod-13'),first);
  assert.equal(promptUtils.findPromptForHash(prompts,promptUtils.promptHref(unicode)),unicode);
  assert.equal(promptUtils.findPromptForHash(prompts,'#/prompt/%broken'),null);
  assert.equal(promptUtils.findPromptForHash(prompts,'#/home'),null);
});
test('favorites distinguish shared IDs and retain legacy saved items without rewriting source IDs',()=>{
  const first={id:'prod-13',category:'product'},second={id:'prod-13',category:'productivity'};
  let saved=promptUtils.togglePromptFavorite(['older-item'],second);
  assert.equal(promptUtils.isPromptFavorite(first,new Set(saved)),false);
  assert.equal(promptUtils.isPromptFavorite(second,new Set(saved)),true);
  saved=promptUtils.togglePromptFavorite(saved,first);
  assert.equal(promptUtils.isPromptFavorite(first,new Set(saved)),true);
  saved=promptUtils.togglePromptFavorite(saved,second);
  assert.equal(promptUtils.isPromptFavorite(second,new Set(saved)),false);
  assert.ok(saved.includes('older-item'));
  assert.equal(promptUtils.isPromptFavorite(first,new Set(['prod-13'])),true);
  assert.deepEqual(plain(promptUtils.togglePromptFavorite(['prod-13','older-item'],first)),['older-item']);
  assert.notEqual(promptUtils.promptKey(first),promptUtils.promptKey(second));
  assert.equal(first.id,'prod-13');assert.equal(second.id,'prod-13');
});


test('Education prompt views preserve filtering, page records and safe markup',()=>{
  const elements=Object.fromEntries(['prompts-list','prompts-header','prompts-pagination','prompts-view-controls'].map(id=>[id,{innerHTML:'',className:''}]));
  const s={window:{},document:{addEventListener(){},getElementById:id=>elements[id]},I18n:{t:key=>key}};
  vm.runInNewContext(read('edu/js/app.js')+';this.subject=App;',s);
  const app=s.subject;
  app._applyViewI18n=()=>{};
  app._promptsForCategory=()=>[{id:'source-1',title:'A <script> title',prompt:'A full classroom example',subject:'Math',tags:['lesson']},{id:'source-2',title:'Other',prompt:'Another subject',subject:'Science',tags:[]}];
  for(const mode of ['grid','list','table']){
    app.currentPromptSearch='classroom';app.setPromptView(mode);
    assert.equal(app._pagePrompts.length,1);assert.equal(app._pagePrompts[0].id,'source-1');
    assert.ok(elements['prompts-list'].innerHTML.includes('A &lt;script&gt; title'));
    assert.ok(elements['prompts-list'].innerHTML.includes('A full classroom example'));
    assert.ok(elements['prompts-list'].innerHTML.includes('App.copyPromptCard(0,this)'));
    assert.ok(elements['prompts-view-controls'].innerHTML.includes('aria-pressed="true"'));
  }
  let opened = null; app.openPromptDetail=index=>{opened=index;};
  app.openPromptCard({target:{closest:()=>null}},0);assert.equal(opened,0);
  opened=null;app.openPromptCard({target:{closest:()=>({})}},0);assert.equal(opened,null);
  app.setPromptView('unknown');assert.equal(app.currentPromptView,'table');
  assert.equal(app._promptsForSubcategory('primary','primary_lower',[{subcategory:'primary_lower'},{subcategory:'all'},{subcategory:'director'}]).length,2);
});


function promptFormatter(){const s={window:{}};vm.runInNewContext(read('assets/prompt-text.js'),s);return s.window.AINOWPromptText;}
test('shared prompt formatting separates the CFO requirements without changing its words or numbers',()=>{
 const s={};s.window=s;vm.runInNewContext(read('biz/data/data-finance.js'),s);
 const source=s.AINOW['data/data-finance'].financePrompts.find(x=>x.id==='fin-1');
 const before=JSON.stringify(source),format=promptFormatter(),blocks=format.blocks(source.prompt);
 assert.equal(blocks.find(x=>x.type==='list').items.length,5);
 const joined=blocks.flatMap(x=>x.type==='list'?x.items:[x.text]).join(' ').replace(/\s+/g,' ').trim();
 assert.equal(joined,source.prompt);assert.equal(JSON.stringify(source),before);
 for(const value of ['$4.2M','58%','$180K/month','18 months'])assert.ok(format.render(source.prompt).includes(value));
});
test('shared prompt rendering escapes source and placeholder values while retaining code',()=>{
 const format=promptFormatter(),html=format.render('Use [context].',{ '[context]':'<img src=x onerror=alert(1)>' });
 assert.ok(html.includes('&lt;img'));assert.ok(!html.includes('<img'));
 const code='```js\nconst value = "A. B.";\n\nconsole.log(value);\n```';
 assert.equal(format.blocks(code)[0].text,code);assert.equal(format.editable(code),code);
 for(const lang of ['en','mk','sq'])for(const value of Object.values(format.ui(lang)))assert.equal(typeof value,'string');
});
test('Education copies the current edited text and reset restores only the open source copy',()=>{
 const s={window:{},document:{addEventListener(){}},I18n:{t:key=>key}};
 vm.runInNewContext(read('edu/js/app.js')+';this.subject=App;',s);const app=s.subject;
 app._detailPrompt={prompt:'Original text'};let copied;app._copyPromptText=text=>{copied=text;};app._renderPromptDetail=()=>{};
 app._detailText='Edited text';app.copyDetailPrompt();assert.equal(copied,'Edited text');
 app._detailText='';app.copyDetailPrompt();assert.equal(copied,'');app.resetPromptCopy();app.copyDetailPrompt();assert.equal(copied,'Original text');
 assert.equal(app._detailPrompt.prompt,'Original text');
});


test('mixed instruction sections retain their heading, requirements and original wording',()=>{
 const text='WORKING STYLE\nUse a professional tone.\n\nREQUESTED TASKS\n- Prepare a draft\n- Check three figures\n\nCHECK BEFORE ANSWERING\nAsk for missing information.';
 const blocks=promptFormatter().blocks(text);
 assert.equal(blocks.filter(x=>x.type==='heading').length,3);assert.equal(blocks.find(x=>x.type==='list').items.length,2);
 const words=value=>value.match(/[\p{L}\p{N}]+/gu);
 assert.deepEqual(words(blocks.map(x=>x.text||x.items.join(' ')).join(' ')),words(text));
});
