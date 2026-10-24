
(function(){
  'use strict';
  const P=AINOWPlatform;
  const labels={
    en:{navigation:'Navigation',work:'Your work',home:'Overview',guide:'Guide',prompts:'Prompts',tools:'AI tools',resources:'Resources',glossary:'Glossary',agents:'Agents',situations:'Situations',builder:'Builder',skills:'Skills',mcp:'MCP',workflows:'Workflows',practice:'Practice checks',tokens:'Token calculator',saved:'Saved',notes:'Notes'},
    mk:{navigation:'Навигација',work:'Вашата работа',home:'Преглед',guide:'Водич',prompts:'Промптови',tools:'ВИ алатки',resources:'Ресурси',glossary:'Речник',agents:'Агенти',situations:'Ситуации',builder:'Создавач',skills:'Вештини',mcp:'MCP',workflows:'Текови',practice:'Практични проверки',tokens:'Калкулатор за токени',saved:'Зачувано',notes:'Белешки'},
    sq:{navigation:'Navigimi',work:'Puna juaj',home:'Përmbledhje',guide:'Udhëzuesi',prompts:'Prompte',tools:'Mjete IA',resources:'Burime',glossary:'Glosar',agents:'Agjentë',situations:'Situata',builder:'Ndërtuesi',skills:'Aftësi',mcp:'MCP',workflows:'Rrjedha',practice:'Kontrolle praktike',tokens:'Llogaritës tokenësh',saved:'Të ruajtura',notes:'Shënime'}
  };
  const entry=(id,label,icon,file,action)=>({id,label,icon,file,action});
  const primary={
    edu:[entry('home','home','Home','edu/index.html'),...['guide','prompts','tools','resources','glossary'].map((id,i)=>entry(id,id,['BookOpen','MessageSquare','Cpu','FileText','BookOpen'][i],'edu/index.html?view='+id))],
    biz:[entry('home','home','Home','biz/index.html'),entry('prompts','prompts','MessageSquare','biz/index.html#/prompts'),entry('agents','agents','Cpu','biz/agents.html'),entry('playbooks','situations','Sparkles','biz/playbooks.html'),entry('builder','builder','Wrench','biz/builder.html')],
    dev:[entry('home','home','Home','dev/index.html#/home'),...['guides','tools','skills','connectors','workflows'].map((id,i)=>entry('dev-'+id,['guide','tools','skills','mcp','workflows'][i],['BookOpen','Cpu','Blocks','Network','GitBranch'][i],'dev/index.html#/dev-'+id))]
  };
  const utilities={edu:[],biz:[entry('notes','notes','NotebookPen',null,'notes')],dev:[entry('practice','practice','CircleHelp','dev/index.html#/practice'),entry('tokens','tokens','Calculator','dev/index.html#/tokens'),entry('saved','saved','Bookmark','dev/index.html#/saved'),entry('notes','notes','NotebookPen',null,'notes')]};
  const text=(lang,key)=>(labels[lang]||labels.en)[key]||P.text(lang,key);
  const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render(workspace,lang,{group='primary',active='',counts={}}={}){
    const list=group==='common'?[entry('settings','settings','Settings',P.href('settings')),entry('about','about','Info',P.href('about'))]:(group==='utilities'?utilities:primary)[workspace]||[];
    if(!list.length)return '';
    const title=group==='primary'?P.text(lang,{edu:'education',biz:'business',dev:'development'}[workspace]):group==='utilities'?text(lang,'work'):'';
    return '<nav class="ainow-workspace-menu ainow-menu-'+group+'" aria-label="'+escape(title||'AINOW')+'">'+(title?'<p class="ainow-menu-label">'+escape(title)+'</p>':'')+list.map(item=>{
      const isActive=active===item.id,tag=item.action?'button':'a';
      const attrs=item.action?' type="button" data-nav-action="'+item.action+'"':' href="'+escape(P.href(item.file))+'"';
      const count=counts[item.id];
      return '<'+tag+attrs+' data-nav-id="'+item.id+'" class="ainow-menu-item'+(isActive?' active':'')+'"'+(isActive?' aria-current="page"':'')+'>'+P.icon(item.icon)+'<span>'+escape(text(lang,item.label))+'</span>'+(Number.isFinite(count)?'<span class="ainow-menu-count">'+count.toLocaleString(lang)+'</span>':'')+'</'+tag+'>';
    }).join('')+'</nav>';
  }
  window.AINOWNavigation=Object.freeze({primary,utilities,text,render});
})();
