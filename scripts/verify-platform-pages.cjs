const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
function platform(origin='https://example.test/sub/'){const s={URL,document:{currentScript:{src:origin+'assets/platform.js'}},location:{protocol:origin.startsWith('file:')?'file:':'https:'}};s.window=s;vm.runInNewContext(read('assets/platform.js'),s);return s.AINOWPlatform;}
test('every platform menu label is translated and all workspaces use the same canonical pages',()=>{
  for(const origin of ['https://example.test/sub/','file:///D:/AINOW/']){const p=platform(origin);
    for(const lang of ['en','mk','sq'])for(const item of p.pages){assert.notEqual(p.text(lang,item.id),item.id);assert.ok(p.links(lang,true).includes(p.href(item.id)));}
    assert.equal(p.href('help'),origin+'help.html');assert.equal(p.href('about'),origin+'about.html');assert.equal(p.href('policies'),origin+'about.html#/page/policies');
    assert.ok(p.footer('en').includes('https://github.com/AINOW-Society/'));assert.equal(p.text('en','about'),'About');assert.equal(p.languages.map(x=>x.code).join(','),'en,mk,sq');assert.equal(p.languages.map(x=>x.label).join(','),'EN,MK,SQ');
  }
});
test('all main workspace pages load the common contract and menu styles',()=>{
  const files=['index.html','edu/index.html','dev/index.html',...['index','agents','playbooks','builder'].map(x=>'biz/'+x+'.html'),'help.html','about.html','settings.html'];
  for(const file of files){assert.ok(read(file).includes('assets/platform.js'),file);assert.ok(read(file).includes('assets/platform.css'),file);}
  const s={};vm.createContext(s);vm.runInContext(read('edu/js/i18n.js')+';this.translations=I18n.translations;',s);
  assert.equal(s.translations.en['nav.glossary'],'Glossary');assert.equal(s.translations.mk['nav.glossary'],'Речник');assert.equal(s.translations.sq['nav.glossary'],'Glosar');
  for(const lang of ['en','mk','sq'])for(const key of ['subtitle','desc','obj',...Array.from({length:8},(_,i)=>'o'+(i+1))])assert.ok(s.translations[lang]['about.program.'+key],lang+':programme:'+key);
  for(const key of [...read('edu/index.html').matchAll(/data-i18n="(nav\.[^"]+)"/g)].map(x=>x[1]))for(const lang of ['en','mk','sq'])assert.ok(s.translations[lang][key],lang+':'+key);
});
test('older Business help and about links preserve useful destinations',()=>{
  for(const [file,hash,expected] of [['help','#/guide/features','../help.html#/biz/features'],['help','#/page/policies','../about.html#/page/policies'],['about','#/page/partners','../about.html#/page/partners'],['help','','../help.html'],['about','','../about.html']]){let got;vm.runInNewContext(read('biz/'+file+'.html').match(/<script>([\s\S]*?)<\/script>/)[1],{location:{hash,replace:url=>got=url}});assert.equal(got,expected);}
});
test('the shared DEV help retains every authored question and translation',()=>{
  const s={window:{}};vm.runInNewContext(read('dev/data/catalog.js'),s);vm.runInNewContext(read('dev/data/help.js'),s);assert.deepEqual(s.window.AINOW_DEV_HELP,s.window.AINOW_DEV_DATA.help);
  for(const question of s.window.AINOW_DEV_HELP.faqs)for(const lang of ['en','mk','sq'])assert.ok(question.question[lang]&&question.answer[lang]);
});

test('Society programme and optional community information have reviewed sources and complete translations',()=>{
  const s={window:{}};vm.runInNewContext(read('assets/platform-about.js'),s);const data=s.window.AINOW_ABOUT_CONTENT;
  assert.equal(data.sources.about,'https://ainow.mk/about');assert.equal(data.sources.join,'https://ainow.mk/join');assert.equal(data.sources.programme,'https://ainow.mk/program');
  assert.equal(data.reviewed,'2026-10-22');
  for(const lang of ['en','mk','sq']){assert.equal(data[lang].priorities.length,8);assert.equal(data[lang].focusDetails.length,8);assert.equal(data[lang].mapLabels.length,4);assert.equal(data[lang].workspaceSummaries.length,3);assert.equal(data[lang].aiBalkansTopics.length,3);for(const row of data[lang].focusDetails){assert.equal(row.length,2);assert.ok(row.every(text=>typeof text==='string'&&text.length>20));}for(const key of Object.keys(data.en))assert.ok(data[lang][key],lang+':'+key);}
  for(const page of ['help.html','about.html'])assert.ok(read(page).indexOf('assets/platform-about.js')<read(page).indexOf('biz/src/StaticPages.js'));
});

test('Help explains each workspace with steps and an example, and FAQ answers stay on the page',()=>{
  const s={window:{}};vm.runInNewContext(read('assets/platform-help.js'),s);
  for(const lang of ['en','mk','sq']){
    const data=s.window.AINOW_HELP_CONTENT[lang];assert.equal(data.steps.length,4);assert.equal(data.faqs.length,9);
    for(const workspace of ['edu','biz','dev']){
      const guide=data[workspace];assert.equal(guide.steps.length,4);assert.ok(guide.example&&guide.check);
      for(const [title,body] of guide.steps)assert.ok(title&&body);
    }
    for(const [question,answer] of [...data.faqs,...data.edu.faqs,...data.biz.faqs]){assert.ok(question&&answer);assert.doesNotMatch(answer,/<a\b|onclick|location\./i);}
  }
  const sandbox={};sandbox.window=sandbox;sandbox.self=sandbox;vm.createContext(sandbox);vm.runInContext(read('biz/libs/htm.js'),sandbox);
  sandbox.html=sandbox.htm.bind((type,props,...children)=>({type,props:props||{},children}));sandbox.icon=()=>null;
  const source=read('assets/platform-pages.js'),start=source.indexOf('  function Faqs('),end=source.indexOf('  const localFaqs=',start);
  vm.runInContext(source.slice(start,end)+';this.renderFaqs=Faqs;',sandbox);
  const nodes=tree=>Array.isArray(tree)?tree.flatMap(nodes):tree&&typeof tree==='object'?[tree,...nodes(tree.children)]:[];
  const tree=sandbox.renderFaqs({lang:'en',faqs:[{id:'test',question:{en:'Where is my work?'},answer:{en:'It stays in this browser.'}},{id:'next',question:{en:'What does Copy do?'},answer:{en:'It copies the text.'}}]});
  const all=nodes(tree),disclosures=all.filter(x=>x.type==='details');assert.equal(disclosures.length,2);assert.equal(all.filter(x=>x.type==='summary').length,2);
  assert.ok(disclosures.every(x=>x.props.name==='ainow-help-faq'));assert.equal(disclosures.filter(x=>x.props.open).length,1);
  assert.ok(all.some(x=>x.type==='p'&&x.children.includes('It stays in this browser.')));assert.ok(all.every(x=>x.type!=='a'&&!x.props.onClick));
});
test('shared offline files contain all page dependencies and stay inside the public web',()=>{
  const s={self:{}};vm.runInNewContext(read('assets/platform-files.js'),s);const files=s.self.AINOW_PLATFORM_FILES;
  for(const file of files){assert.ok(fs.existsSync(path.join(root,file)),file);assert.doesNotMatch(file,/android|mobile-prototype|\.\./);}
  for(const page of ['help.html','about.html'])for(const match of read(page).matchAll(/(?:src|href)="([^"?#]+)(?:[?#][^"]*)?"/g)){const file=match[1];if(!/^(https?:|mailto:)/.test(file))assert.ok(files.includes(file),page+':'+file);}
});
test('the platform worker uses its own cache and preserves workspace caches during migration',async()=>{
  const handlers={},deleted=[],current={ok:true,release:'platform'},s={URL,self:{location:{href:'https://example.test/service-worker.js'},clients:{claim:async()=>{}},addEventListener:(type,fn)=>handlers[type]=fn},caches:{keys:async()=>['ainow-platform-old','ainow-platform-v0.95','ai-edu-current','ai-edu-root-legacy','ainow-biz-current','ainow-dev-current'],delete:async name=>deleted.push(name),open:async name=>name==='ainow-platform-v0.95'?{match:async()=>current}:{keys:async()=>[{url:'https://example.test/'+(name==='ai-edu-root-legacy'?'index.html':'edu/index.html')}] }},fetch:async()=>{throw Error('Offline');}};
  s.importScripts=()=>vm.runInNewContext(read('assets/platform-files.js'),s);vm.runInNewContext(read('service-worker.js'),s);
  let pending;handlers.activate({waitUntil:p=>pending=p});await pending;assert.deepEqual(deleted,['ainow-platform-old','ai-edu-root-legacy']);
  let response;handlers.fetch({request:{method:'GET',url:'https://example.test/help.html'},respondWith:p=>response=p});assert.equal(await response,current);
  let intercepted=false;handlers.fetch({request:{method:'GET',url:'https://example.test/dev/index.html'},respondWith:()=>intercepted=true});assert.equal(intercepted,false);
});


test('one workspace menu model supplies translated internal links, shared utilities and active state',()=>{
 const s={URL,document:{currentScript:{src:'https://example.test/sub/assets/platform.js'}},location:{protocol:'file:',pathname:'/sub/edu/index.html'}};s.window=s;vm.createContext(s);
 vm.runInContext(read('assets/platform.js'),s);vm.runInContext(read('assets/platform-navigation.js'),s);
 const menu=s.AINOWNavigation;
 for(const lang of ['en','mk','sq'])for(const workspace of ['edu','biz','dev']){
   const primary=menu.render(workspace,lang,{active:'home',counts:{saved:3}}),common=menu.render(workspace,lang,{group:'common'});
   assert.equal((primary.match(/aria-current="page"/g)||[]).length,1);
   assert.equal((primary.match(/data-nav-id=/g)||[]).length,menu.primary[workspace].length);
   for(const item of [...menu.primary[workspace],...menu.utilities[workspace]])assert.notEqual(menu.text(lang,item.label),undefined);
   for(const [,url] of (primary+common).matchAll(/href="([^"]+)"/g))assert.ok(url.startsWith('https://example.test/sub/'));
   assert.ok(common.includes('data-nav-id="settings"'));assert.ok(common.includes('data-nav-id="about"'));assert.ok(!common.includes('data-nav-id="help"'));
   assert.doesNotMatch(primary,/ainow\.mk|github\.com|chatgpt|gemini|claude/i);
 }
 assert.equal(menu.text('sq','glossary'),'Glosar');
 assert.ok(menu.render('biz','en',{group:'utilities'}).includes('data-nav-action="notes"'));
 assert.ok(menu.render('dev','en',{group:'utilities',counts:{saved:3}}).includes('>3</span>'));
});

test('Education Resources uses the same menu and keeps unrelated sidebar lists retired',()=>{
 const sidebar={innerHTML:'',contains:()=>true},s={URL,document:{currentScript:{src:'https://example.test/assets/platform.js'},getElementById:id=>id==='sidebar-content'?sidebar:null,querySelector:()=>null,addEventListener(){}},location:{protocol:'file:',pathname:'/edu/index.html'},I18n:{lang:'en',t:key=>key}};
 s.window=s;s.AINOWPlatform=platform();vm.createContext(s);vm.runInContext(read('assets/platform-navigation.js'),s);vm.runInContext(read('edu/js/app.js')+';this.subject=App;',s);
 const app=s.subject;for(const method of ['switchView','loadView','renderSidebarCtx','openPromptDetail','copyDetailPrompt'])assert.equal(typeof app[method],'function',method);
 app.renderSidebarCtx('resources');assert.ok(sidebar.innerHTML.includes('data-nav-id="resources" class="ainow-menu-item active"'));
 assert.doesNotMatch(sidebar.innerHTML,/AINOW Society|sidebar-ai-tools|sidebar-tip|github.com|claude.ai|gemini.google/);
 assert.equal((sidebar.innerHTML.match(/data-nav-id=/g)||[]).length,8);
 let selected;app.switchView=id=>selected=id;let prevented=false;sidebar.onclick({target:{closest:()=>({dataset:{navId:'prompts'}})},preventDefault:()=>prevented=true});assert.equal(selected,'prompts');assert.equal(prevented,true);
});
