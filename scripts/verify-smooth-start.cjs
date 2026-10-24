/* Run: node --test scripts/verify-smooth-start.cjs */
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const core=require('../biz/src/builder-core.js');
const plain=value=>JSON.parse(JSON.stringify(value));
function education(lang){
  const feedback={textContent:''};
  const s={document:{addEventListener(){},getElementById(){return feedback;}}};s.window=s;vm.createContext(s);
  for(const file of [`edu/js/lang/${lang}/docs.js`,`edu/js/lang/${lang}/quizzes.js`,'edu/js/i18n.js','edu/js/app.js','edu/js/router.js'])vm.runInContext(read(file),s,{filename:file});
  const app=vm.runInContext('({App,Router,I18n,DOCS_DATA,QUIZ_DATA})',s);app.I18n.lang=lang;
  return {...app,feedback};
}
test('legacy builder drafts retain fields, preferences, Unicode and unknown properties',()=>{
  const raw={name:'Асистент / Asistent',role:'Editor',framework:'cot',capabilities:'Review\nSummarise',examples:'Input: A\nOutput: B',constraints:['No Emojis','Team-specific rule'],futureSetting:{keep:true}};
  const before=JSON.stringify(raw),restored=core.restore(JSON.parse(before));
  for(const key of Object.keys(raw))assert.deepEqual(restored[key],raw[key]);
  assert.equal(JSON.stringify(raw),before);assert.equal(restored.task,'');assert.equal(restored.output_format,'');
  assert.deepEqual(core.restore(JSON.parse(JSON.stringify(restored))),restored);
});
test('builder tolerates malformed values without sharing mutable defaults',()=>{
  for(const raw of [null,[],false,'bad'])assert.deepEqual(core.restore(raw),{...core.defaults,constraints:[]});
  const state=core.restore({task:42,framework:'unknown',constraints:['No Emojis',null,9],name:null});
  assert.equal(state.task,'');assert.equal(state.name,core.defaults.name);assert.equal(state.framework,'standard');assert.deepEqual(state.constraints,['No Emojis']);
  state.constraints.push('new');assert.deepEqual(core.defaults.constraints,[]);
});
test('task, output and examples reach the actual generated instructions in every approach',()=>{
  for(const framework of ['standard','cot','fewshot','socratic']){
    const result=core.prompt({framework,task:'Summarise the supplied agenda.',output_format:'Three bullet points in Albanian.',examples:'Input: Monday\nOutput: E hënë',context:'Use only the supplied text.',capabilities:'Summarise',constraints:['No Bias / Opinionated Rants']});
    for(const text of ['Summarise the supplied agenda.','Three bullet points in Albanian.','Output: E hënë','Use only the supplied text.','REQUESTED TASKS','Separate facts, assumptions and opinions.','do not grant tools'])assert.ok(result.includes(text),framework+': '+text);
    assert.doesNotMatch(result,/forces? step.by.step|world.class|System Status|advanced intelligence|Capabilities \(Add Skills\)/i);
  }
});
test('all BIZ task and builder interface keys have real EN/MK/SQ translations',()=>{
  const dictionaries=['en','mk','sq'].map(lang=>{const s={AINOW:{}};s.window=s;vm.runInNewContext(read(`biz/locales/locales-${lang}.js`),s);return s.AINOW[`locales/locales-${lang}`].data;});
  const keys=Object.keys(dictionaries[0].smooth).sort();
  for(const d of dictionaries){assert.deepEqual(Object.keys(d.smooth).sort(),keys);for(const key of keys)assert.ok(typeof d.smooth[key]==='string'&&d.smooth[key].trim(),key);assert.ok(d.help.sections.features.builder.text);}
});
test('EDU navigation visits every section once and reverses through all 19 chapters in each language',()=>{
  for(const lang of ['en','mk','sq']){
    const {Router,DOCS_DATA}=education(lang),ids=Router.guideIds(),expected=[];assert.equal(ids.length,19);
    for(const id of ids){const section=DOCS_DATA.find(x=>x.id===id);assert.ok(section.items.length);if(['history','applications'].includes(id))expected.push({section:id,item:null});else for(const item of section.items)expected.push({section:id,item:item.id});}
    for(let i=0;i<expected.length;i++){
      const point=expected[i];
      assert.deepEqual(plain(Router.guideDestination(point.section,point.item,1)),expected[i+1]||{end:true},lang+' next '+i);
      assert.deepEqual(plain(Router.guideDestination(point.section,point.item,-1)),expected[i-1]||null,lang+' previous '+i);
    }
    assert.equal(Router.guideDestination('missing',null,1),null);
    assert.ok(Router._guideProgress(ids.at(-1)).includes('19 / 19'));
  }
});
test('EDU optional practice uses valid existing questions and gives distinct real feedback',()=>{
  for(const lang of ['en','mk','sq']){
    const {Router,DOCS_DATA,QUIZ_DATA,feedback}=education(lang);
    let practiced=0;
    for(const id of Router.guideIds()){
      const chapter=DOCS_DATA.find(x=>x.id===id),questions=(QUIZ_DATA[id]||[]).filter(q=>q.type==='mcq').slice(0,3);
      for(const q of questions){assert.ok(q.options[q.answer]);const html=Router.learningQuiz(chapter);assert.ok(html.includes('practice-'+id+'-'+q.id));
        Router.checkLearningAnswer(id,q.id,q.answer);const correct=feedback.textContent;
        Router.checkLearningAnswer(id,q.id,(q.answer+1)%q.options.length);assert.notEqual(feedback.textContent,correct);assert.ok(feedback.textContent.includes(q.options[q.answer]));practiced++;
      }
    }
    assert.ok(practiced>0);
  }
});
test('EDU guidance labels cover every language without exposing translation keys',()=>{
  const states=['en','mk','sq'].map(education),keys=Object.keys(states[0].I18n.translations.en).filter(k=>k.startsWith('learning.'));
  for(const {I18n,Router,DOCS_DATA} of states){for(const key of keys){assert.ok(I18n.t(key));assert.notEqual(I18n.t(key),key);}
    for(const id of Router.guideIds()){const chapter=DOCS_DATA.find(x=>x.id===id);assert.doesNotMatch(Router.learningNavigation(chapter,chapter.items[0]),/learning\./);}
  }
});
test('new builder assets are present in its independent offline manifest',()=>{
  const sw=read('biz/sw.js');for(const file of ['assets/builder.css','src/builder-core.js','src/builder.js']){assert.ok(sw.includes("'./"+file+"'"));assert.ok(fs.existsSync(path.join(root,'biz',file)));}
  assert.ok(sw.includes('ainow-biz-v0.95'));
});
for(const [file,cacheName] of [['edu/service-worker.js','ai-edu-v0.95'],['biz/sw.js','ainow-biz-v0.95']])test(file+' never serves stale shared CSS from another workspace',async()=>{
  const handlers={},currentResponse={release:cacheName},cache={match:async(request,options)=>options?.ignoreSearch?currentResponse:undefined};
  const s={URL,Request,Response,self:{location:{origin:'https://example.test'},addEventListener:(name,handler)=>handlers[name]=handler},caches:{open:async(name)=>{assert.equal(name,cacheName);return cache;},match:()=>{throw new Error('Cross-workspace cache lookup');}},fetch:()=>{throw new Error('This precached stylesheet should be available offline');}};
  s.importScripts=()=>vm.runInNewContext(read('assets/platform-files.js'),s);
  vm.runInNewContext(read(file),s,{filename:file});
  let response;handlers.fetch({request:{method:'GET',mode:'cors',url:'https://example.test/assets/workspaces.css?v=new'},respondWith:value=>response=value});
  assert.equal(await response,currentResponse);
  let intercepted=false;handlers.fetch({request:{method:'POST',url:'https://example.test/action'},respondWith:()=>intercepted=true});assert.equal(intercepted,false);
});
for(const file of ['edu/service-worker.js','biz/sw.js'])test(file+' refreshes an online script even when an exact older copy is cached',async()=>{
  const handlers={},old={release:'old'},current={release:'current',ok:true,type:'basic',clone(){return this;}},saved=[];
  const cache={match:async()=>old,put:async(request,response)=>saved.push(response)};
  const s={URL,Request,Response,self:{location:{origin:'https://example.test'},addEventListener:(name,handler)=>handlers[name]=handler},caches:{open:async()=>cache},fetch:async()=>current,importScripts(){}};
  vm.runInNewContext(read(file),s,{filename:file});let response;
  handlers.fetch({request:{method:'GET',mode:'cors',url:'https://example.test/biz/src/hooks.js?v=current'},respondWith:value=>response=value});
  assert.equal(await response,current);assert.deepEqual(saved,[current]);
});
