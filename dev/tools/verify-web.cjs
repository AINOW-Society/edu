const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const crypto=require('node:crypto');
const core=require('../core.js');
const root=path.resolve(__dirname,'../..'),dev=path.join(root,'dev');
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(dev,'data/catalog.js'),'utf8'),sandbox);
const data=JSON.parse(JSON.stringify(sandbox.window.AINOW_DEV_DATA)),items=data.library.items;
test('every advertised collection has real unique entries and searchable last records',()=>{
  assert.equal(new Set(items.map(x=>x.id)).size,items.length);
  for(const [kind,count] of Object.entries({'dev-guides':13,'dev-tools':7,'dev-skills':1000,'dev-connectors':1000,'dev-workflows':200})){
    const records=core.browse(items,kind);assert.equal(records.length,count);
    const last=records.at(-1),query=last.sourceId||last.title.en;
    assert.ok(core.matches(records,{query}).some(x=>x.id===last.id));
    if(['dev-skills','dev-connectors'].includes(kind))assert.ok(records.every(x=>x.catalogType));
  }
});
test('concepts precede setup and practice; every related and quiz reference resolves',()=>{
  const guides=core.browse(items,'dev-guides'),idSet=new Set(items.map(x=>x.id));
  assert.deepEqual(guides.map(x=>x.chapter),Array.from({length:13},(_,i)=>i+1));
  assert.ok(guides.findIndex(x=>x.id==='skills-explained')<guides.findIndex(x=>x.id==='skill-authoring'));
  assert.ok(guides.findIndex(x=>x.id==='mcp-explained')<guides.findIndex(x=>x.id==='mcp-remote'));
  for(const entry of items)for(const id of entry.related||[])assert.ok(idSet.has(id),id);
  assert.equal(data.goals.length,6);assert.equal(data.checks.length,6);
  for(const check of data.checks){const goal=data.goals.find(x=>x.id===check.goalId);assert.ok(goal);assert.equal(check.questions.length,3);
    for(const step of goal.steps)assert.ok(idSet.has(step.id));
    for(const q of check.questions){assert.ok(q.answer>=0&&q.answer<q.options.length);assert.ok(goal.steps[q.reviewStep]);}
  }
});
test('authored learning material and help have all three languages',()=>{
  for(const lang of ['en','mk','sq']){
    for(const x of items.filter(x=>!x.catalogType)){
      for(const field of ['title','summary'])assert.ok(x[field]?.[lang],x.id+':'+field+':'+lang);
      for(const section of x.sections||[])assert.ok(section.title?.[lang]&&section.text?.[lang],x.id+':section:'+lang);
    }
    for(const faq of data.help.faqs)assert.ok(faq.question[lang]&&faq.answer[lang]);
  }
});
test('every original SKILL.md file is complete and matches its source SHA256',()=>{
  for(const x of items.filter(x=>x.contentFile)){
    const hash=x.contentFile.slice(0,-3),context={window:{}};
    vm.runInNewContext(fs.readFileSync(path.join(dev,'data/skills',hash+'.js'),'utf8'),context);
    const value=context.window.AINOW_DEV_SKILLS[hash];assert.equal(typeof value,'string');
    const parts=core.skillSections(value);assert.equal(parts.metadata+parts.instructions,value,x.id+': lossless source views');
    assert.equal(crypto.createHash('sha256').update(value,'utf8').digest('hex'),x.contentSha256,x.id);
  }
});
test('skill views preserve delimiters, line endings, BOM and incomplete frontmatter',()=>{
  for(const source of ['---\nname: example\n---\nInstructions\n---\nBody divider','\uFEFF---\r\nname: example\r\n---\r\nInstructions']){
    const parts=core.skillSections(source);
    assert.equal(parts.hasMetadata,true);assert.equal(parts.metadata+parts.instructions,source);
    assert.ok(parts.metadata.includes('name: example'));assert.ok(parts.instructions.startsWith('Instructions'));
  }
  for(const source of ['No metadata\n---\nKeep this','---\nname: incomplete','']){
    const parts=core.skillSections(source);assert.equal(parts.hasMetadata,false);assert.equal(parts.instructions,source);
  }
  const closed=core.skillSections('---\nname: example\n---');assert.equal(closed.hasMetadata,true);assert.equal(closed.instructions,'');
});

test('topic, query and per-language read filters combine without changing totals',()=>{
  const all=core.browse(items,'dev-skills'),first=all[0],read=['en:'+first.id],saved=[first.id];
  assert.deepEqual(core.matches(all,{status:'read',lang:'en',read}).map(x=>x.id),[first.id]);
  assert.equal(core.matches(all,{status:'read',lang:'mk',read}).length,0);
  assert.equal(core.matches(all,{status:'saved',saved,topic:first.topic,query:first.sourceId}).length,1);
  assert.equal(core.matches(all,{query:'this-entry-does-not-exist-zz'}).length,0);
  assert.equal(core.matches(all,{}).length,1000);
});
test('backup restores actual work, rejects wrong IDs/results and strips foreign keys',()=>{
  const state=core.emptyState(),entry=items.find(x=>x.example),check=data.checks[0];
  state.saved=[entry.id,entry.id];state.drafts[entry.id]='My adapted brief';state.notes='Мои белешки / Shënime';state.read=['sq:'+entry.id];
  state.results['sq:'+check.goalId+':'+check.revision]={answers:check.questions.map(q=>q.answer)};
  state.foreign='not imported';const valid=core.validateState(state,items,data.goals,data.checks);
  assert.equal(valid.saved.length,1);assert.equal(valid.drafts[entry.id],state.drafts[entry.id]);assert.equal(valid.notes,state.notes);assert.ok(!('foreign' in valid));
  for(const bad of [{...state,saved:['missing']},{...state,read:['de:'+entry.id]},{...state,notes:'x'.repeat(100001)},{...state,results:{'en:missing:1':{answers:[0,0,0]}}}])assert.throws(()=>core.validateState(bad,items,data.goals,data.checks));
});
test('provider-neutral budget handles Unicode, manual counts and overflow',()=>{
  assert.equal(core.estimate('😀😀😀😀'),1);
  assert.deepEqual(core.budget('1234','12345678',5,10,20,''),{parts:[1,5,2,10],total:18,capacity:20,remaining:2});
  assert.equal(core.budget('','text',0,10,8,4).remaining,-6);
  assert.equal(core.budget('','',NaN,-2,-4,'').total,0);
});
test('offline manifest resolves only web assets and includes font, shell, icons and all skills',()=>{
  const context={self:{}};vm.runInNewContext(fs.readFileSync(path.join(dev,'offline-files.js'),'utf8'),context);
  const files=context.self.AINOW_DEV_FILES;
  assert.equal(files.filter(x=>x.startsWith('./data/skills/')).length,1000);
  for(const expected of ['./shell.js','./assets/icons.js','./guide-media.js','./learning-visuals.js','./learning-explorers.js','../assets/fonts/manrope-variable.ttf'])assert.ok(files.includes(expected),expected);
  for(const file of files){const abs=path.resolve(dev,file);assert.ok(abs.startsWith(root+path.sep));assert.ok(!/[\\/](android|mobile-prototype)[\\/]/.test(abs));assert.ok(fs.existsSync(abs),file);}
});
test('service-worker activation removes only old DEV caches',async()=>{
  const handlers={},deleted=[],source=fs.readFileSync(path.join(dev,'sw.js'),'utf8'),current=source.match(/const CACHE_NAME\s*=\s*['"]([^'"]+)/)[1];
  const context={importScripts(){},self:{addEventListener:(type,fn)=>handlers[type]=fn,clients:{claim:async()=>{}},location:{origin:'https://example.test'}},caches:{keys:async()=>['ai-edu-current','ainow-biz-current','ainow-dev-old',current],delete:async key=>deleted.push(key)}};
  vm.runInNewContext(source,context);
  let pending;handlers.activate({waitUntil:p=>pending=p});await pending;assert.deepEqual(deleted,['ainow-dev-old']);
});

test('guide screenshots have local verified assets, relevant placements and three-language captions',()=>{
  const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(dev,'guide-media.js'),'utf8'),context);
  const {images,placements}=context.window.AINOW_DEV_MEDIA;
  const provenance=JSON.parse(fs.readFileSync(path.join(dev,'assets/guide-screenshots/provenance.json'),'utf8'));
  const used=new Set(),toolNames=new Set();
  for(const [entryId,sections] of Object.entries(placements)){
    const entry=items.find(x=>x.id===entryId);assert.equal(entry?.kind,'dev-guides');
    for(const [index,ids] of Object.entries(sections)){
      assert.ok(entry.sections[Number(index)],entryId+':'+index);
      for(const id of ids){assert.ok(images[id],id);used.add(id);}
    }
  }
  assert.equal(Object.keys(images).length,14);
  assert.equal(used.size,14);
  const manifestContext={self:{}};vm.runInNewContext(fs.readFileSync(path.join(dev,'offline-files.js'),'utf8'),manifestContext);
  for(const [id,image] of Object.entries(images)){
    const source=provenance.images.find(x=>x.id===id);assert.ok(source,id);
    assert.equal(image.src,'assets/guide-screenshots/'+source.file);
    const bytes=fs.readFileSync(path.join(dev,image.src));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),source.sha256);
    assert.equal(image.width,source.width);assert.equal(image.height,source.height);
    assert.equal(image.sourceKind,'owner-capture');assert.equal(source.sourceKind,'owner-capture');assert.equal(image.platform,'Windows');assert.equal(source.platform,'Windows');assert.equal(image.suppliedAt,'2026-10-20');assert.ok(fs.existsSync(path.join(root,source.sourceFile)));assert.equal(image.privacyEdited,source.privacyEdited);
    for(const lang of ['en','mk','sq']){assert.ok(image.title[lang]?.trim());assert.ok(image.caption[lang]?.length>30);assert.ok(image.version[lang]?.length>10);}
    assert.ok(image.callouts.length>0,id);
    for(const mark of image.callouts){const [x,y,w,h]=mark.rect;assert.ok(x>=0&&y>=0&&w>0&&h>0&&x+w<=image.width&&y+h<=image.height,id+':bounds');for(const lang of ['en','mk','sq'])assert.ok(mark.label[lang]?.trim());}
    assert.ok(manifestContext.self.AINOW_DEV_FILES.includes('./'+image.src));
    toolNames.add(image.tool.split(' ')[0]);
  }
  assert.deepEqual([...toolNames].sort(),['ChatGPT','Claude']);
  assert.ok(images['windows-claude-skill-picker'].privacyEdited);
  assert.equal(provenance.images.filter(x=>x.privacyEdited).length,1);
  const publicImages=fs.readdirSync(path.join(dev,'assets/guide-screenshots')).filter(x=>x.endsWith('.png'));
  assert.equal(publicImages.length,14);
  assert.ok(!publicImages.some(x=>x==='claude-skill-actions.png'||x==='codex-skills-library.png'));
  assert.ok(items.find(x=>x.id==='ai-stack').sections.some(x=>x.title.en==='Plugins and marketplaces'));
  assert.ok(items.find(x=>x.id==='design-to-code').sections.some(x=>x.title.en.startsWith('Artifacts and documents')));
});
test('offline fetch returns cached skill and never replaces a missing asset with HTML',async()=>{
  const handlers={},cached={text:'skill source'},cache={match:async()=>cached};
  const context={URL,importScripts(){},self:{addEventListener:(type,fn)=>handlers[type]=fn,location:{origin:'https://example.test'}},caches:{open:async()=>cache},fetch:async()=>{throw new Error('offline');}};
  vm.runInNewContext(fs.readFileSync(path.join(dev,'sw.js'),'utf8'),context);
  let response;handlers.fetch({request:{method:'GET',url:'https://example.test/dev/data/skills/known.js'},respondWith:p=>response=p});assert.equal(await response,cached);
  handlers.fetch({request:{method:'GET',url:'https://example.test/dev/assets/guide-screenshots/windows-mcp-remote.png'},respondWith:p=>response=p});assert.equal(await response,cached);
  cache.match=async()=>undefined;handlers.fetch({request:{method:'GET',url:'https://example.test/dev/missing.js'},respondWith:p=>response=p});await assert.rejects(response,/offline/);
});
