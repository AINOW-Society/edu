(function(){
  const html=htm.bind(React.createElement);
  const {Header}=AINOW['src/components/layout/Header'];
  const {SidebarWrapper}=AINOW['src/components/layout/Sidebar'];
  const {Footer}=AINOW['src/components/layout/Footer'];
  const webIcons={...lucide,...AINOW_DEV_ICONS},core=AINOWDevCore,data=AINOW_DEV_DATA;
  const icons=Object.freeze({'dev-guides':'BookOpen','dev-tools':'Cpu','dev-skills':'Blocks','dev-connectors':'Network','dev-workflows':'GitBranch'});
  const topicIcons=Object.freeze({code:'CodeXml',design:'Palette',quality:'ShieldCheck',cloud:'Cloud',data:'Database',content:'FileText',product:'Briefcase',workflow:'Workflow'});
  const guideIcons=window.AINOWDevGuideIcons=Object.freeze({'ai-model':'Brain','ai-stack':'Layers','choose-your-tool':'Compass','design-to-code':'Palette','project-context':'FolderTree','skills-explained':'Blocks','mcp-explained':'Network','mcp-remote':'Cloud','mcp-local':'Terminal','skill-authoring':'FileCode2','choose-stack':'GitBranch','workflow-quality':'ShieldCheck','first-small-build':'Rocket'});
  const Icon=({name,...props})=>React.createElement(webIcons[name]||webIcons.BookOpen,{'aria-hidden':true,...props});
  window.AINOWDevUi=Object.freeze({collections:icons,topics:topicIcons,guides:guideIcons});
  window.AINOWDevShell=function({c,active,menu,setMenu,theme,onTheme,children}){
    const isCollection=['dev-skills','dev-connectors','dev-workflows','dev-tools','saved'].includes(active),isGuide=active==='dev-guides';
    const full=active==='saved'?data.library.items.filter(x=>c.state.saved.includes(x.id)):core.browse(data.library.items,active),f=c.filter(active);
    const choose=patch=>{c.setFilter(active,patch);if(c.entry)location.hash='/'+active;setMenu(false);};
    const filterButton=(id,label,icon,count,patch,selected)=>html`<button key=${id} className=${'nav-link sidebar-filter '+(selected?'active':'')} aria-pressed=${selected} onClick=${()=>choose(patch)}><${Icon} name=${icon}/><span>${label}</span>${count!==undefined&&html`<span className="count">${count.toLocaleString(c.lang)}</span>`}</button>`;
    return html`<div className="dev-shell"><a href="#main-content" className="skip" onClick=${e=>{e.preventDefault();document.getElementById('main-content')?.focus();}}>${c.tr('Skip to content','Прескокни на содржината','Kalo te përmbajtja')}</a>
      <${Header} labels=${{notes:c.tr('Notes','Белешки','Shënime'),language:c.tr('Change language','Смени јазик','Ndrysho gjuhën'),theme:c.tr('Toggle theme','Смени тема','Ndrysho temën'),help:c.tr('DEV help','DEV помош','Ndihma DEV'),menu:c.tr('Navigation & filters','Навигација и филтри','Navigimi dhe filtrat')}} workspace="dev" languageControl=${{lang:c.lang,setLang:c.setLang}} homeHref="#/home" tagline=${c.tr('AI tools, explained','ВИ алатки, објаснети','Mjetet IA, të shpjeguara')} currentTheme=${theme} onThemeToggle=${onTheme} onMenuClick=${()=>setMenu(true)} onScratchpad=${c.openScratchpad} />
      <div className="dev-layout flex max-w-[1600px] mx-auto min-h-[calc(100vh-64px)]">
        <${SidebarWrapper} isOpen=${menu} onClose=${()=>setMenu(false)} workspace="dev" onNotes=${c.openScratchpad} active=${active} counts=${Object.fromEntries([...data.library.categories.map(cat=>[cat.id,core.browse(data.library.items,cat.id).length]),['saved',c.state.saved.length]])}>
          <div className="dev-sidebar-nav">
          ${isGuide&&html`<nav className="guide-contents" aria-label=${c.tr('Guide contents','Содржина на водичот','Përmbajtja e udhëzuesit')}><div className="nav-label">${c.tr('Guide contents','Содржина на водичот','Përmbajtja e udhëzuesit')}</div><a className=${'nav-link '+(!c.entry?'active':'')} href="#/dev-guides"><${Icon} name="ListTree"/>${c.tr('All chapters','Сите поглавја','Të gjithë kapitujt')}</a>${Object.entries(data.library.guideParts).map(([part,title])=>html`<div key=${part}><div className="nav-label guide-part-label">${c.t(title)}</div>${data.library.items.filter(x=>x.kind==='dev-guides'&&x.part===part).map(entry=>{
            const read=c.state.read.includes(c.lang+':'+entry.id),readLabel=c.tr('Read','Прочитано','Lexuar');
            return html`<a key=${entry.id} href=${'#/entry/'+entry.id} className=${'chapter-nav '+(c.entry?.id===entry.id?'active':'')} aria-label=${c.tr('Chapter','Поглавје','Kapitulli')+' '+entry.chapter+': '+c.t(entry.title)+(read?' · '+readLabel:'')} aria-current=${c.entry?.id===entry.id?'page':undefined}><span className="chapter-topic-icon"><${Icon} name=${guideIcons[entry.id]}/></span><span className="chapter-title">${c.t(entry.title)}</span><span className="chapter-read" title=${read?readLabel:undefined} aria-hidden="true">${read&&html`<${Icon} name="Check"/>`}</span></a>`;
          })}</div>`)}</nav>`}
          ${isCollection&&html`<nav aria-label=${c.tr('Collection filters','Филтри на збирката','Filtrat e koleksionit')}><div className="nav-label">${c.tr('Collection','Збирка','Koleksioni')}</div>
            ${filterButton('all',c.tr('All items','Сите ставки','Të gjitha përmbajtjet'),'Layers',full.length,{topic:'',status:''},!f.topic&&!f.status)}
            ${active!=='saved'&&filterButton('saved',c.tr('Saved only','Само зачувани','Vetëm të ruajtura'),'Bookmark',full.filter(x=>c.state.saved.includes(x.id)).length,{topic:'',status:'saved'},f.status==='saved'&&!f.topic)}
            ${Object.keys(data.library.topics).some(topic=>full.some(x=>x.topic===topic))&&html`<div className="nav-label">${c.tr('Topics','Теми','Temat')}</div>${Object.entries(data.library.topics).map(([topic,title])=>{const count=full.filter(x=>x.topic===topic).length;return count?filterButton(topic,c.t(title),topicIcons[topic],count,{topic},f.topic===topic):null;})}`}
            <div className="nav-label">${c.tr('Reading status','Статус на читање','Statusi i leximit')}</div><div className="reading-filters">${[['',c.tr('All','Сите','Të gjitha')],['unread',c.tr('Unread','Непрочитани','Të palexuara')],['read',c.tr('Read','Прочитани','Të lexuara')]].map(([status,label])=>html`<button key=${status} aria-pressed=${f.status===status} onClick=${()=>choose({status})}>${label}</button>`)}</div>
          </nav>`}
</div>
        </${SidebarWrapper}>
        <main id="main-content" className="main flex-1 min-w-0" tabIndex="-1"><div className="main-inner">${children}</div></main>
      </div><${Footer} tagline=${c.tr('AI tools, explained','ВИ алатки, објаснети','Mjetet IA, të shpjeguara')} />
    </div>`;
  };
})();
