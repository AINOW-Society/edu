/* Public web dependency and shared-header checks. No browser, native build or packages needed. */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const entries = ['index.html','help.html','about.html','settings.html','edu/index.html','dev/index.html',...['index','agents','builder','playbooks'].map(x=>'biz/'+x+'.html')];
const external = value => /^(?:[a-z]+:|\/\/|#|data:)/i.test(value);
const stats = {htmlDocuments:entries.length, parsedJavaScriptFiles:0, parsedInlineScripts:0, parsedJsonLd:0, checkedLinkedAssets:0};

test('public entry documents resolve local scripts, styles and CSS assets without a build', () => {
  const scripts = new Set(), styles = new Set();
  function resolve(from, value) {
    if (external(value)) return null;
    const file = path.posix.normalize(path.posix.join(path.posix.dirname(from),decodeURIComponent(value.split(/[?#]/)[0])));
    assert.ok(!file.startsWith('../'), from+':'+value);
    assert.ok(fs.existsSync(path.join(root,file)),from+': missing '+value);
    stats.checkedLinkedAssets++;
    return file;
  }
  for (const file of entries) {
    const source=read(file);
    for (const match of source.matchAll(/<(script|link|img)\b[^>]*(?:src|href)="([^"]+)"[^>]*>/g)) {
      const dependency=resolve(file,match[2]);
      if (dependency?.endsWith('.js')) scripts.add(dependency);
      if (dependency?.endsWith('.css')) styles.add(dependency);
    }
    for(const match of source.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
      if (/\bsrc=/.test(match[1]) || !match[2].trim()) continue;
      if (match[1].includes('application/ld+json')) {JSON.parse(match[2]);stats.parsedJsonLd++;}
      else {new vm.Script(match[2],{filename:file+':inline'});stats.parsedInlineScripts++;}
    }
    assert.ok(source.includes('assets/design-system.css'),file+': shared design primitives missing');
  }
  for (const file of scripts) {new vm.Script(read(file),{filename:file});stats.parsedJavaScriptFiles++;}
  for (const file of styles) for(const match of read(file).matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g)) resolve(file,match[1]);
});

test('shared header renders translated, labelled controls and one icon source in EN/MK/SQ', () => {
  for (const lang of ['en','mk','sq']) {
    const s={URL,document:{currentScript:{src:'https://example.test/sub/assets/platform.js'}},location:{protocol:'file:'}};
    s.window=s;s.self=s;vm.createContext(s);vm.runInContext(read('assets/platform.js'),s);vm.runInContext(read('assets/platform-navigation.js'),s);vm.runInContext(read('biz/libs/htm.js'),s);
    s.React={useState:x=>[x,()=>{}],useRef:()=>({current:null}),useEffect:()=>{},createElement:(type,props,...children)=>typeof type==='function'?type(props||{}):({type,props:props||{},children})};
    s.AINOW={'src/hooks':{useLanguage:()=>({lang,setLang:()=>{},t:()=>s.AINOWPlatform.text(lang,'notes')})}};
    vm.runInContext(read('biz/src/components/layout/Header.js'),s);
    const tree=s.AINOW['src/components/layout/Header'].Header({currentTheme:'light',onThemeToggle:()=>{},onMenuClick:()=>{}});
    const flatten=x=>Array.isArray(x)?x.flatMap(flatten):x&&typeof x==='object'?[x,...flatten(x.children)]:[];
    const controls=flatten(tree).filter(x=>x.props['data-header-control']);
    assert.deepEqual(controls.map(x=>x.props['data-header-control']),['language','theme','about','home','menu']);
    for(const control of controls) {
      assert.ok(control.props['aria-label']&&control.props.title);
      assert.doesNotMatch(control.props['aria-label'],/^(?:nav|help|header)\./);
      const svg=flatten(control).find(x=>x.props.dangerouslySetInnerHTML)?.props.dangerouslySetInnerHTML.__html;
      assert.ok(svg?.includes('stroke-width="2"'));
    }
    assert.equal(controls.find(x=>x.props['data-header-control']==='home').props.href,'https://example.test/sub/index.html');
  }
});

process.on('exit',()=>{
  if (process.env.AINOW_CHECK_REPORT) fs.writeFileSync(process.env.AINOW_CHECK_REPORT,JSON.stringify(stats,null,2)+'\n');
});

test('compact references preserve imported attribution, revision text and every source URL', () => {
  const s={};s.window=s;s.self=s;vm.createContext(s);
  vm.runInContext(read('biz/libs/htm.js'),s);
  vm.runInContext(read('dev/data/catalog.js'),s);
  s.html=s.htm.bind((type,props,...children)=>({type,props:props||{},children}));
  s.useC=()=>({tr:en=>en});s.URL=URL;
  const source=read('dev/app.js'),start=source.indexOf('  function References('),end=source.indexOf('  function Reader(',start);
  vm.runInContext(source.slice(start,end)+';this.renderReferences=References;',s);
  const entry=s.AINOW_DEV_DATA.library.items.find(x=>x.attribution?.includes('Pinned revision:'));
  assert.ok(entry,'review a real imported attribution');
  const original=JSON.stringify(entry),sources=(entry.sources||[]).filter(x=>/^https:\/\//.test(x.url));
  const tree=s.renderReferences({sources,attribution:entry.attribution,reviewedAt:entry.reviewedAt});
  const nodes=x=>Array.isArray(x)?x.flatMap(nodes):x&&typeof x==='object'?[x,...nodes(x.children)]:[];
  const text=x=>Array.isArray(x)?x.map(text).join(' '):x&&typeof x==='object'?text(x.children):typeof x==='string'?x:'';
  const all=nodes(tree),urls=all.filter(x=>x.type==='a').map(x=>x.props.href);
  for(const line of entry.attribution.split(/\r?\n/).map(x=>x.trim()).filter(Boolean)) {
    if(/^https?:\/\/\S+$/.test(line))assert.ok(urls.includes(line),line);
    else assert.ok(text(tree).includes(line),line);
  }
  assert.equal(JSON.stringify(entry),original);
  assert.ok(all.every(x=>x.type!=='details'&&x.type!=='summary'));
  assert.ok(all.filter(x=>x.type==='a').every(x=>x.props.rel==='noopener noreferrer'));
});

test('the supplied black and white logo geometry is preserved and workspace text stays outside it', () => {
  const crypto=require('node:crypto'),data=JSON.parse(read('assets/brand/provenance.json'));
  const paths=svg=>[...svg.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)].map(x=>x[1]);
  const project=JSON.parse(read('assets/brand/ai-balkans-provenance.json'));
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'assets/brand',project.file))).digest('hex'),project.sha256);
  assert.equal(project.geometryModified,false);
  const originals=data.originals.map(file=>{
    const bytes=fs.readFileSync(path.join(root,'assets/brand',file.file));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),file.sha256);
    return paths(bytes.toString('utf8'));
  });
  assert.deepEqual(originals[0],originals[1]);
  const s={URL,document:{currentScript:{src:'https://example.test/assets/platform.js'}},location:{protocol:'file:'}};
  s.window=s;vm.runInNewContext(read('assets/platform.js'),s);
  const logo=s.AINOWPlatform.logo();
  assert.deepEqual(paths(logo),originals[0]);
  assert.ok(logo.includes('viewBox="'+data.originals[0].viewBox+'"'));
  assert.doesNotMatch(logo,/>\s*(?:DEV|EDU|BIZ)\s*</);
});
