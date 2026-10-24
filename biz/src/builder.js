(function () {
'use strict';
window.AINOW=window.AINOW||{};
const {useState,useEffect,useMemo,useRef}=React;
const {Header,Footer,SidebarWrapper,useLanguage,useToast,Toast,useGlobalShortcuts,Scratchpad,useStorageSync}=AINOW['src/components'];
const {copyTextToClipboard}=AINOW['src/utils'],core=AINOW['src/builder-core'];
const { FileText, Copy, Download, RefreshCw, User, Brain, Quote, Zap, HelpCircle, ChevronLeft, ChevronRight, Check } = lucide;
const html=htm.bind(React.createElement),storageKey='ainow_builder_state';
const constraints=[['No Fluff / No Yapping','concise'],['No Emojis','no_emoji'],['No Moralizing Lectures','no_lectures'],['No Em Dashes (—)','no_dashes'],['No Markdown Formatting','plain_text'],['No Bias / Opinionated Rants','balanced'],['No Acknowledgement (Just Do It)','answer_first']];
const frameworks=[['standard',Zap],['cot',Brain],['fewshot',Quote],['socratic',HelpCircle]];
function Field({id,label,hint,value,onChange,rows,placeholder}){
  return html`<div className="builder-field"><label htmlFor=${id}>${label}</label>${hint&&html`<p id=${id+'-hint'}>${hint}</p>`}${rows?html`<textarea id=${id} rows=${rows} value=${value} onChange=${e=>onChange(e.target.value)} aria-describedby=${hint?id+'-hint':undefined} placeholder=${placeholder} maxLength="100000"/>`:html`<input id=${id} type="text" value=${value} onChange=${e=>onChange(e.target.value)} aria-describedby=${hint?id+'-hint':undefined} placeholder=${placeholder} maxLength="100000"/>`}</div>`;
}
function downloadSettings(state){
  const url=URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:'application/json'})),a=document.createElement('a');
  a.href=url;a.download=(state.name||'assistant').replace(/[^\p{L}\p{N}_-]+/gu,'-')+'-settings.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function BuilderApp(){
  const {t,isReady}=useLanguage(),{toast,showToast}=useToast(),edited=useRef(false),blocked=useRef(false),loaded=useRef(false),heading=useRef(null),storedDraft=useRef(undefined);
  const [state,setState]=useState(()=>{try{const saved=localStorage.getItem(storageKey);storedDraft.current=saved;if(!saved)return core.restore();const raw=JSON.parse(saved);if(!raw||typeof raw!=='object'||Array.isArray(raw))throw new Error('Invalid saved draft');loaded.current=true;return core.restore(raw);}catch(e){blocked.current=true;return core.restore();}});
  const [visited,setVisited]=useState(()=>new Set([0]));
  const [saveStatus,setSaveStatus]=useState(blocked.current?'blocked':loaded.current?'saved':'local'),[step,setStep]=useState(0),[isSidebarOpen,setIsSidebarOpen]=useState(false),[scratch,setScratch]=useState(false),[theme,setTheme]=useState(()=>{try{return localStorage.getItem('ainow-theme')||localStorage.getItem('theme')||'light';}catch(e){return 'light';}});
  useStorageSync([storageKey,'ainow-theme','theme'],values=>{
    setTheme((values['ainow-theme']||values.theme)==='dark'?'dark':'light');
    if(values[storageKey]===storedDraft.current)return;
    storedDraft.current=values[storageKey];
    try {
      const raw=values[storageKey]===null?null:JSON.parse(values[storageKey]);
      if(raw!==null&&(!raw||typeof raw!=='object'||Array.isArray(raw)))throw Error('Invalid saved draft');
      edited.current=false;blocked.current=false;setState(core.restore(raw||{}));setSaveStatus(raw?'saved':'local');
    } catch (_) {blocked.current=true;setSaveStatus('blocked');}
  });
  const tr=key=>t('smooth.'+key),steps=['step_task','step_behaviour','step_examples','step_review'],stepIcons=[FileText,Brain,Quote,Check],finalPrompt=useMemo(()=>core.prompt(state),[state]);
  useEffect(()=>{if(!edited.current)return;if(blocked.current){setSaveStatus('blocked');return;}try{const raw=JSON.stringify(state);localStorage.setItem(storageKey,raw);storedDraft.current=raw;setSaveStatus('saved');}catch(e){setSaveStatus('unsaved');}},[state]);
  useEffect(()=>{document.documentElement.classList.toggle('dark',theme==='dark');try{localStorage.setItem('theme',theme);localStorage.setItem('ainow-theme',theme);}catch(e){}},[theme]);
  useEffect(()=>{heading.current?.focus({preventScroll:true});},[step]);
  useGlobalShortcuts({onThemeToggle:()=>setTheme(v=>v==='dark'?'light':'dark'),onSidebarToggle:()=>setIsSidebarOpen(v=>!v),onScratchpad:()=>setScratch(true),onEscape:()=>{setIsSidebarOpen(false);setScratch(false);}});
  const update=(key,value)=>{edited.current=true;setState(previous=>({...previous,[key]:value}));};
  const field=(key,label,hint,rows,placeholder)=>html`<${Field} id=${'builder-'+key} label=${label} hint=${hint} rows=${rows} value=${state[key]} placeholder=${placeholder} onChange=${value=>update(key,value)}/>`;
  const go=next=>{const index=Math.max(0,Math.min(steps.length-1,next));setStep(index);setVisited(previous=>new Set([...previous,index]));setIsSidebarOpen(false);document.getElementById('builder-top')?.scrollIntoView({block:'start',behavior:'auto'});};
  const stepKey=(event,index)=>{const next=event.key==='ArrowRight'?index+1:event.key==='ArrowLeft'?index-1:event.key==='Home'?0:event.key==='End'?steps.length-1:null;if(next!==null){event.preventDefault();go(next);}};
  const copy=async()=>showToast(await copyTextToClipboard(finalPrompt)?t('builder.copied_clip'):t('common.copy_failed')==='common.copy_failed'?tr('copy_manual'):t('common.copy_failed'));
  const reset=()=>{if(window.confirm(t('builder.reset'))){blocked.current=false;edited.current=true;setState(core.restore());setVisited(new Set([0]));go(0);}};
  const checklist=html`<div className="builder-checklist"><h2>${tr('check_title')}</h2><ul><li><${state.task.trim()?Check:FileText}/>${tr(state.task.trim()?'check_task':'check_task_missing')}</li><li><${state.input_format.trim()||state.examples.trim()?Check:FileText}/>${tr(state.input_format.trim()||state.examples.trim()?'check_input':'check_input_missing')}</li></ul><p>${tr('check_note')}</p></div>`;
  if(!isReady)return null;
  return html`<div className="min-h-screen flex flex-col font-sans builder-workspace"><${Header} activePage="builder" currentTheme=${theme} onThemeToggle=${()=>setTheme(v=>v==='dark'?'light':'dark')} onMenuClick=${()=>setIsSidebarOpen(true)} onScratchpad=${()=>setScratch(true)}/><div className="flex-1 max-w-[1600px] mx-auto w-full flex"><${SidebarWrapper} onNotes=${()=>setScratch(true)} isOpen=${isSidebarOpen} onClose=${()=>setIsSidebarOpen(false)}></${SidebarWrapper}>
    <main className="builder-main" id="builder-top"><header className="builder-heading"><div><h1>${t('builder.title')}</h1><p>${tr('builder_intro')}</p></div><button type="button" className="ainow-action-control" onClick=${reset} aria-label=${t('builder.reset')} title=${t('builder.reset')}><${RefreshCw}/></button></header>
      <p className=${'builder-save-status '+(['blocked','unsaved'].includes(saveStatus)?'is-unsaved':'')} role="status">${tr(saveStatus==='blocked'?'storage_unreadable':saveStatus==='unsaved'?'unsaved':saveStatus==='local'?'local_draft':'saved')}</p>
      <nav className="builder-steps" aria-label=${tr('nav_label')}>${steps.map((key,i)=>html`<button key=${key} type="button" aria-current=${step===i?'step':undefined} onClick=${()=>go(i)} onKeyDown=${event=>stepKey(event,i)}><span className="builder-step-icon"><${stepIcons[i]}/></span><span className="builder-step-label"><small>${String(i+1).padStart(2,'0')}${' · '}${tr(step===i?'step_current':visited.has(i)?'step_viewed':'step_open')}</small><strong>${tr(key)}</strong></span></button>`)}</nav>
      <div className="builder-columns"><div className="builder-form"><section key=${step} className="builder-panel" aria-labelledby="builder-step-heading"><span className="builder-step-count">${step+1} / 4</span><h2 id="builder-step-heading" ref=${heading} tabIndex="-1">${step===0?tr('task_title'):tr(steps[step])}</h2>
      ${step===0&&html`${field('task',tr('step_task'),tr('task_hint'),4,tr('task_placeholder'))}${field('output_format',tr('output'),tr('output_hint'),2)}<details className="builder-advanced"><summary><${User}/>${tr('identity_optional')}</summary><div className="builder-field-grid">${field('name',t('builder.name'))}${field('role',t('builder.role'))}${field('domain',t('builder.domain'))}</div></details>`}
      ${step===1&&html`<p className="builder-panel-note">${tr('behaviour_hint')}</p>${field('tone',t('builder.tone_style'))}${field('focus',t('builder.focus'))}<fieldset className="builder-preferences"><legend>${tr('preferences')}</legend><div>${constraints.map(([value,key])=>html`<button key=${value} type="button" aria-pressed=${state.constraints.includes(value)} onClick=${()=>update('constraints',state.constraints.includes(value)?state.constraints.filter(x=>x!==value):[...state.constraints,value])}>${tr(key)}</button>`)}</div></fieldset><details className="builder-advanced"><summary>${tr('advanced')}</summary>${field('methodology',tr('method'),'',3)}<fieldset className="builder-framework"><legend>${tr('framework')}</legend>${frameworks.map(([id,Icon])=>html`<label key=${id}><input type="radio" name="response-approach" value=${id} checked=${state.framework===id} onChange=${()=>update('framework',id)}/><${Icon}/><span><strong>${tr(id)}</strong><small>${tr(id+'_hint')}</small></span></label>`)}</fieldset>${field('capabilities',tr('capabilities'),tr('capabilities_hint'),3)}${field('expertise',t('builder.expertise')==='builder.expertise'?tr('knowledge'):t('builder.expertise'))}</details>`}
      ${step===2&&html`<p className="builder-panel-note">${tr('examples_hint')}</p>${field('input_format',tr('input'),'',3)}${field('examples',tr('step_examples'),'',4,tr('examples_placeholder'))}${field('context',tr('context'),'',4)}`}
      ${step===3&&html`<p className="builder-panel-note">${tr('builder_limit')}</p><ol className="builder-use-steps">${['review_1','review_2','review_3'].map(key=>html`<li key=${key}>${tr(key)}</li>`)}</ol>${checklist}`}
      </section><nav className="builder-bottom" aria-label=${tr('nav_label')}>${step>0?html`<button type="button" className="builder-button secondary" onClick=${()=>go(step-1)}><${ChevronLeft}/>${tr('back')}</button>`:html`<span></span>`}${step<3&&html`<button type="button" className="builder-button" onClick=${()=>go(step+1)}>${tr(steps[step+1])}<${ChevronRight}/></button>`}</nav></div>
      <aside className=${'builder-preview-column '+(step===3?'is-review':'')} aria-label=${tr('preview')}><div className="builder-preview"><header><h2><${FileText}/>${tr('preview')}</h2></header><div className="ainow-prompt-content" tabIndex="0" aria-label=${tr('preview')} dangerouslySetInnerHTML=${{__html:AINOWPromptText.render(finalPrompt)}}></div><footer><button type="button" className="ainow-button" onClick=${copy}><${Copy}/>${tr('copy')}</button><button type="button" className="ainow-button is-secondary" onClick=${()=>downloadSettings(state)}><${Download}/>${tr('export')}</button></footer></div><p className="builder-preview-note">${tr('builder_limit')}</p></aside></div>
    </main></div><${Toast} toast=${toast}/><${Scratchpad} isOpen=${scratch} onClose=${()=>setScratch(false)}/><${Footer}/></div>`;
}
ReactDOMClient.createRoot(document.getElementById('root')).render(html`<${BuilderApp}/>`);
})();
