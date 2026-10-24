(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/index'] = AINOW['src/index'] || {};
const { useState, useMemo, useEffect, useRef, useCallback } = React;
const { createRoot } = ReactDOMClient;

const { Search, LayoutGrid, List, TableProperties, Loader2, Wand2, Settings2, Edit, X, ArrowUpDown, ArrowUp, ArrowDown, Heart, Copy, Share2, ExternalLink, Calendar, FileText, Briefcase, Cpu, ChevronRight } = lucide;
const { embeddedPromptsData } = AINOW['data/data'];
const { promptCounts } = AINOW['data/data-counts'];
const { Header, Footer, ShortcutsModal, SidebarWrapper, addToHistory, useLanguage, useStorageSync, ActionButtons, PromptAiActions, useToast, Toast, useGlobalShortcuts, Scratchpad, Pagination } = AINOW['src/components'];
const { CATEGORY_CONFIG } = AINOW['src/config'];
const { useDebounce, copyTextToClipboard, promptKey, promptHref, isPromptFavorite, togglePromptFavorite, findPromptForHash } = AINOW['src/utils'];

const html = htm.bind(React.createElement);

const BusinessHome = ({t,onEmail,onPlan}) => html`
  <div className="biz-home-page">
    <section className="biz-home-hero">
      <span className="biz-home-mark"><${Briefcase}/></span>
      <h1>${t('smooth.home_title')}${' '}<em>AINOW BIZ</em></h1>
      <p>${t('smooth.home_subtitle')}</p>
      <a className="biz-home-primary" href="#/prompts"><${Search}/>${t('smooth.browse_prompts')}<${ChevronRight}/></a>
    </section>
    <details className="task-start task-start--compact">
      <summary>${t('smooth.choose_help')}</summary>
      <div className="task-start-body"><p>${t('smooth.start_title')}</p><div className="task-start-choices">
        <button type="button" onClick=${onEmail}><${FileText}/>${t('smooth.write')}</button>
        <button type="button" onClick=${onPlan}><${Calendar}/>${t('smooth.plan')}</button>
        <a href="builder.html"><${Settings2}/>${t('smooth.build')}</a>
      </div></div>
    </details>
    <section className="biz-home-explore"><h2>${t('smooth.work_options')}</h2><div className="biz-home-grid">
      ${[
        ['agents.html',Cpu,'assistant_templates','assistant_templates_text'],
        ['playbooks.html',FileText,'work_situations','work_situations_text'],
        ['builder.html',Settings2,'your_assistant','your_assistant_text']
      ].map(([url,Icon,title,description])=>html`<a key=${url} className="biz-home-link" href=${url}><${Icon}/><span><h3>${t('smooth.'+title)}</h3><p>${t('smooth.'+description)}</p></span><${ChevronRight}/></a>`)}
    </div></section>
    <p className="biz-home-note">${t('smooth.library_help')}${' '}<a href="help.html">${t('smooth.how_it_works')}</a></p>
  </div>`;

const PromptItem = React.memo(({ prompt, viewMode, onSelect, showToast, favorites, toggleFavorite, t, onTagClick, selectedTag, index, currentPage, itemsPerPage }) => {
    const isFavorite = isPromptFavorite(prompt,favorites);
    const isCustomizable = /\[.*?\]/.test(prompt.prompt || '');
    const globalIndex = ((currentPage - 1) * itemsPerPage) + index + 1;

    const handleShare = async (e) => {
        e?.stopPropagation();
        const url = window.location.href.split('#')[0] + promptHref(prompt);
        if (navigator.share) { try { await navigator.share({ title: 'AINOW: ' + prompt.title, url }); return; } catch (err) { } }
        if (await copyTextToClipboard(url)) showToast(t('common.copied_success'));
    };

    const handleQuickCopy = async (e) => {
        e.stopPropagation();
        if (await copyTextToClipboard(prompt.prompt)) {
            showToast(t('common.copied_success'));
        }
    };

    const preview = (prompt.prompt || '').substring(0, 120) + '...';

    const tagsList = (prompt.tags || []).map(tag => html`
                                <button
                                    key=${tag}
                                    onClick=${(e) => { e.stopPropagation(); onTagClick(tag); }}
                                    className=${'text-[10px] px-2 py-1 rounded-xl font-medium transition-all uppercase tracking-tighter ' + (selectedTag === tag ? 'bg-coral text-white shadow-sm' : 'bg-opal-sidebar dark:bg-slate-700/50 text-stone dark:text-slate-400 hover:bg-coral hover:text-white hover:shadow-sm')}
                                >
                                    ${tag}
                                </button>
                              `);

    if (viewMode === 'table') {
        return html`
      <div
        onClick=${() => onSelect(prompt)}
        className=${`group flex items-center gap-3 sm:gap-4 border-b border-mist dark:border-slate-800/50 px-3 sm:px-4 py-2 cursor-pointer hover:bg-opal-bg dark:hover:bg-teal-900/20 transition-all ${index % 2 === 0 ? 'bg-opal-surface dark:bg-slate-800' : 'bg-opal-bg/30 dark:bg-slate-800/40'}`}
      >
        <div className="w-6 sm:w-8 shrink-0 text-[10px] font-bold text-stone-light dark:text-slate-600 tabular-nums text-left">
            ${globalIndex}
        </div>
        <div className="w-11 shrink-0 flex justify-center" onClick=${e => e.stopPropagation()}>
           <button
             onClick=${() => toggleFavorite(prompt)}
             title=${isFavorite?t('release.remove_favorite'):t('common.favorites')}
             className=${`transition-all hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center ${isFavorite ? 'text-coral' : 'text-stone-light dark:text-slate-700 hover:text-coral'}`}
           >
             <${Heart} className="w-4 h-4" fill=${isFavorite ? 'currentColor' : 'none'} />
           </button>
        </div>
        <div className="flex-1 min-w-0 flex items-center gap-2">
          <button type="button" onClick=${e=>{e.stopPropagation();onSelect(prompt);}} className="font-black text-xs text-charcoal dark:text-slate-200 truncate group-hover:text-coral transition-colors text-left uppercase tracking-tight">
            ${prompt.title}
          </button>
          ${isCustomizable && html`<div title=${t('release.editable')} className="text-coral dark:text-teal-400 shrink-0"><${Wand2} className="w-3.5 h-3.5" /></div>`}
        </div>
        <div className="hidden lg:flex w-32 shrink-0 items-center">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest truncate">${prompt.category}</span>
        </div>
        <div className="hidden md:flex gap-1 items-center overflow-hidden w-40 shrink-0">${tagsList.slice(0, 2)}</div>
        <div className="hidden xl:flex w-24 shrink-0 text-[10px] text-slate-400 tabular-nums">
            ${new Date(prompt.created).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
        </div>
        <div className="w-11 sm:w-36 shrink-0 flex items-center justify-end gap-0.5 sm:opacity-0 group-hover:opacity-100 transition-all font-bold" onClick=${e => e.stopPropagation()}>
            <button onClick=${handleQuickCopy} className="min-w-[44px] min-h-[44px] p-2 text-stone-light hover:text-coral transition-colors" title=${t('release.copy_text')}><${Copy} className="w-4 h-4" /></button>
            <button onClick=${handleShare} className="hidden sm:block min-w-[44px] min-h-[44px] p-2 text-stone-light hover:text-coral transition-colors" title=${t('release.share_link')}><${Share2} className="w-4 h-4" /></button>
            <button onClick=${() => onSelect(prompt)} className="hidden sm:block min-w-[44px] min-h-[44px] p-2 text-stone-light hover:text-coral transition-colors" title=${t('release.open_template')}><${ExternalLink} className="w-4 h-4" /></button>
        </div>
      </div>
    `;
    }

    if (viewMode === 'compact') {
        return html`
      <div onClick=${() => onSelect(prompt)} className="group flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 bg-opal-surface dark:bg-slate-800 border-b border-mist dark:border-slate-700 p-4 cursor-pointer hover:bg-opal-bg dark:hover:bg-slate-700/50 transition-all">
        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center gap-2 mb-1">
            <button type="button" onClick=${e=>{e.stopPropagation();onSelect(prompt);}} className="font-black text-xs text-charcoal dark:text-slate-200 uppercase tracking-tight text-left">${prompt.title}</button>
            <div className="hidden sm:flex gap-1">${tagsList.slice(0, 2)}</div>
          </div>
          <div className="text-stone-light text-xs truncate italic font-medium leading-tight">"${preview}"</div>
        </div>
        <div className="flex items-center gap-2 justify-between md:justify-end" onClick=${e => e.stopPropagation()}>
            ${isCustomizable && html`<button onClick=${() => onSelect(prompt)} className="px-3 py-1.5 bg-opal-bg dark:bg-slate-700/50 text-coral dark:text-slate-400 text-[10px] font-black rounded-xl hover:bg-coral hover:text-white transition-all mr-1 sm:mr-2 uppercase tracking-widest border border-mist shadow-sm">${t('common.customize')}</button>`}
            <${ActionButtons} text=${prompt.prompt} title=${prompt.title} itemId=${prompt.id} isFavorite=${isFavorite} onToggleFavorite=${() => toggleFavorite(prompt)} onShare=${handleShare} showToast=${showToast} size=${3.5} />
        </div>
      </div>
    `;
    }

    return html`
    <div onClick=${() => onSelect(prompt)} className="ainow-template-card cursor-pointer">
      <div className="ainow-card-header flex justify-between items-start mb-4" onClick=${e => e.stopPropagation()}>
          <div className="flex flex-col gap-1">
              <span className="ainow-template-badge">${prompt.category}</span>
          </div>
          <${ActionButtons} text=${prompt.prompt} title=${prompt.title} itemId=${prompt.id} isFavorite=${isFavorite} onToggleFavorite=${() => toggleFavorite(prompt)} onShare=${handleShare} showToast=${showToast} size=${3.5} />
      </div>
      <h3 className="ainow-template-title"><button type="button" className="text-left" onClick=${e=>{e.stopPropagation();onSelect(prompt);}}>${prompt.title}</button></h3>
      <div className="ainow-template-preview">"${preview}"</div>
      <div className="ainow-template-footer">
        <div className="ainow-template-tags">${tagsList}</div>
        ${isCustomizable && html`<button aria-label=${t('common.customize')+' '+prompt.title} className="p-2 text-stone-light hover:text-coral hover:bg-opal-bg dark:hover:bg-slate-700 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"><${Edit} className="w-4 h-4" /></button>`}
      </div>
    </div>
  `;
});

const PromptModal = ({ prompt, onClose, showToast, favorites, toggleFavorite, t }) => {
    const [vals, setVals] = useState({});
    const [editedText,setEditedText] = useState(null);
    const [isEditing,setIsEditing]=useState(false);
    const {lang}=useLanguage(), promptUi=AINOWPromptText.ui(lang),readerUi=AINOWPromptActions.ui(lang);
    const editorRef = useRef(null);
    useEffect(()=>{if(isEditing)editorRef.current?.focus();},[isEditing]);
    const firstInputRef = useRef(null);
    const dialogRef = useRef(null);

    useEffect(() => {
        const opener = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        (firstInputRef.current || dialogRef.current)?.focus();
        return () => {
            document.body.style.overflow = previousOverflow;
            if (opener?.isConnected) opener.focus();
        };
    }, []);

    const keepFocus = e => {
        if (e.key !== 'Tab') return;
        const controls = [...dialogRef.current.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]')].filter(el => el.getClientRects().length);
        const first = controls[0], last = controls.at(-1);
        if (!first) { e.preventDefault(); dialogRef.current.focus(); }
        else if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) { e.preventDefault(); first.focus(); }
    };

    const placeholders = useMemo(() => {
        const matches = (prompt.prompt || '').match(/\[(.*?)\]/g) || [];
        return [...new Set(matches)];
    }, [prompt.prompt]);

    const getFinalText = useCallback(() => {
        if(editedText!==null)return editedText;
        let text = prompt.prompt || '';
        placeholders.forEach(p => { if (vals[p]) text = text.replaceAll(p, vals[p]); });
        return text;
    }, [prompt.prompt, placeholders, vals, editedText]);

    const handleCopy = async () => showToast(await copyTextToClipboard(getFinalText())?t('common.copied_success'):readerUi.copyFailed);
    const handleAI=tool=>{handleCopy();window.open(tool.url,'_blank','noopener');};

    const isFavorite = isPromptFavorite(prompt,favorites);

    const inputs = placeholders.map((p, i) => {
        const rawContent = p.replace(/[\[\]]/g, '');
        const parts = rawContent.split(':');
        const label = parts[0];
        const options = parts.length > 1 ? parts[1].split('|') : null;
        const isEmpty = !vals[p];

        return html`
            <div key=${p} className="space-y-1">
                <label htmlFor=${'prompt-variable-'+i} className="text-xs font-semibold text-stone dark:text-slate-300 text-left block">${label}</label>
                ${options ? html`
                    <select id=${'prompt-variable-'+i} ref=${i === 0 ? firstInputRef : null} value=${vals[p] || ''} onChange=${e => setVals({ ...vals, [p]: e.target.value })} className=${`w-full bg-opal-bg dark:bg-slate-900 border ${isEmpty ? 'border-mist dark:border-slate-700' : 'border-coral'} rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-coral transition-all dark:text-white cursor-pointer appearance-none`}>
                        <option value="" disabled>${t('smooth.choose_value')} ${label}</option>
                        ${options.map(opt => html`<option key=${opt} value=${opt}>${opt}</option>`)}
                    </select>
                ` : html`
                    <input id=${'prompt-variable-'+i} ref=${i === 0 ? firstInputRef : null} type="text" value=${vals[p] || ''} onChange=${e => setVals({ ...vals, [p]: e.target.value })} placeholder=${t('smooth.enter_value')+' '+label} className=${`w-full bg-opal-bg dark:bg-slate-900 border ${isEmpty ? 'border-mist dark:border-slate-700' : 'border-coral'} rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-coral transition-all dark:text-white`} />
                `}
            </div>
        `;
    });



    return html`
        <div className="prompt-dialog-overlay no-print" onClick=${onClose}>
            <div ref=${dialogRef} role="dialog" aria-modal="true" aria-labelledby="prompt-dialog-title" tabIndex="-1" onKeyDown=${keepFocus} className="prompt-dialog-reader" onClick=${e => e.stopPropagation()}>
                <header className="prompt-dialog-header">
                    <div><span className="prompt-dialog-kicker">${placeholders.length > 0 ? t('common.customize') : t('smooth.static_template')}</span><h2 id="prompt-dialog-title">${prompt.title}</h2></div>
                    <button type="button" aria-label=${t('smooth.close')} onClick=${onClose} className="prompt-dialog-close"><${X}/></button>
                </header>
                <div className="prompt-dialog-body">
                    <div className="ainow-prompt-tools"><span>${isEditing?promptUi.editing:promptUi.instructions}</span><div><button type="button" className="ainow-action-control prompt-reader-favorite" aria-label=${t(isFavorite?'smooth.saved_template':'smooth.save_template')} title=${t(isFavorite?'smooth.saved_template':'smooth.save_template')} aria-pressed=${isFavorite} onClick=${()=>toggleFavorite(prompt)}><${Heart} fill=${isFavorite?'currentColor':'none'}/></button>${editedText!==null&&html`<button type="button" onClick=${()=>{setEditedText(null);setIsEditing(false);}}>${promptUi.reset}</button>`}<button type="button" onClick=${()=>{if(isEditing)setIsEditing(false);else{if(editedText===null)setEditedText(AINOWPromptText.editable(getFinalText()));setIsEditing(true);}}}><${Edit}/>${isEditing?promptUi.preview:promptUi.edit}</button></div></div>
                    ${isEditing?html`<label className="ainow-prompt-editor"><span className="sr-only">${promptUi.instructions}</span><textarea ref=${editorRef} value=${editedText} maxLength="100000" onChange=${e=>setEditedText(e.target.value)}/></label>`:html`<div className="prompt-dialog-source ainow-prompt-content" dangerouslySetInnerHTML=${{__html:AINOWPromptText.render(editedText===null?prompt.prompt:editedText,editedText===null?vals:null)}}></div>`}
                    ${editedText===null&&placeholders.length>0&&html`<section className="prompt-dialog-inputs"><h3>${t('smooth.modal_inputs')}</h3><div>${inputs}</div></section>`}
                </div>
                <footer className="prompt-dialog-footer">
                    <div className="prompt-dialog-actions"><button type="button" onClick=${handleCopy} className="ainow-button prompt-dialog-copy" aria-label=${readerUi.copy} title=${readerUi.copy}><${Copy}/><span className="prompt-dialog-action-label">${readerUi.copy}</span></button><${PromptAiActions} lang=${lang} onChoose=${handleAI}/></div>
                    <p role="status">${isFavorite?readerUi.saved:readerUi.hint}</p>
                </footer>
            </div>
        </div>`;
};

const SidebarNav = React.memo(({ all, selectedCat, favoritesCount, liveCounts, t, onSurpriseMe, onCategorySelect }) => html`
    <${React.Fragment}>
        <button onClick=${onSurpriseMe} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-200 dark:border-amber-800 hover:bg-amber-100 mb-2 w-full text-left font-bold transition-all shadow-sm"><${Wand2} className="w-5 h-5" /><span className="flex-1 text-left">${t('common.surprise_me')}</span></button>
        <nav className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">${t('common.categories_label')}</p>
            ${CATEGORY_CONFIG.map(cat => {
                const active = selectedCat === cat.id;
                const count = cat.id === 'all' ? all.length || Object.values(promptCounts).reduce((a, b) => a + b, 0) : (cat.id === 'favorites' ? favoritesCount : liveCounts[cat.id] || 0);
                return html`<button key=${cat.id} onClick=${() => onCategorySelect(cat.id)} className=${'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ' + (active ? 'bg-coral/10 dark:bg-teal-900/30 text-coral dark:text-teal-300 font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800')}><${cat.icon} className="w-4 h-4" /><span className="flex-1 text-left">${t(cat.nameKey)}</span><span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-slate-800 tabular-nums">${count}</span></button>`;
            })}
        </nav>
    <//>
`);

const App = () => {
    const { t, isReady } = useLanguage();
    const { toast, showToast } = useToast();
    const [all, setAll] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [selectedCat, setSelectedCat] = useState('all');
    const [selectedTag, setSelectedTag] = useState(null);
    const [query, setQuery] = useState('');
    const [selPrompt, setSelPrompt] = useState(null);
    const [page, setPage] = useState(1);
    const [view, setView] = useState(() => { try { const value=localStorage.getItem('viewMode');return ['grid','compact','table'].includes(value)?value:'grid'; } catch (_) { return 'grid'; } });
    const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });
    const [isLoading, setIsLoading] = useState(true);
    const [collectionReady, setCollectionReady] = useState(false);
    const [route,setRoute] = useState(()=>window.location.hash);
    const isHome = !route || route==='#/home';
    useEffect(()=>{const change=()=>{setRoute(window.location.hash);setIsSidebarOpen(false);setSelPrompt(null);if(!window.location.hash.startsWith('#/prompt/'))readerFromLibrary.current=false;};window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change);},[]);
    useEffect(()=>{const heading=document.querySelector('main h1');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}window.scrollTo({top:0,behavior:'auto'});},[route]);
    const [favorites, setFavorites] = useState(() => { try { const value=JSON.parse(localStorage.getItem('favPrompts') || '[]');return Array.isArray(value)?value:[]; } catch { return []; } });
    const favoritesSet = useMemo(() => new Set(favorites), [favorites]);
    const toggleFavorite = useCallback((prompt) => setFavorites(saved => togglePromptFavorite(saved,prompt)), []);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
    const readerFromLibrary = useRef(false);
    const closePrompt = useCallback(()=>{
        setSelPrompt(null);
        if(!window.location.hash.startsWith('#/prompt/'))return;
        if(readerFromLibrary.current){readerFromLibrary.current=false;window.history.back();}
        else {window.history.replaceState(null,'','#/prompts');setRoute('#/prompts');}
    },[]);

    const isZenMode = false;
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(() => { try { return (localStorage.getItem('ainow-theme') || localStorage.getItem('theme'))==='dark'?'dark':'light'; } catch (_) { return 'light'; } });
    useStorageSync(['favPrompts','viewMode','ainow-theme','theme'],values=>{
        try {
            const saved=JSON.parse(values.favPrompts||'[]'),mode=values.viewMode;
            setFavorites(Array.isArray(saved)?saved:[]);
            setView(['grid','compact','table'].includes(mode)?mode:'grid');
            setCurrentTheme((values['ainow-theme']||values.theme)==='dark'?'dark':'light');
        } catch (_) { showToast(t('release.storage_unavailable')); }
    });
    const searchInputRef = useRef(null);
    const debouncedQuery = useDebounce(query, 200);

    const fuse = useMemo(() => new Fuse([], { keys: [{ name: 'title', weight: 0.7 }, { name: 'prompt', weight: 0.5 }, { name: 'tags', weight: 0.4 }], threshold: 0.3, ignoreLocation: true }), []);

    useEffect(() => {
        const load = async () => {
            const categories = Object.keys(embeddedPromptsData);
            const initialData = [];
            const priorityCats = categories.slice(0, 5);
            for (const cat of priorityCats) { try { const mod = await embeddedPromptsData[cat](); const prompts = mod[Object.keys(mod)[0]]; initialData.push(...prompts.map(p => ({ ...p, category: cat }))); } catch (e) { } }
            fuse.setCollection(initialData);
            setAll([...initialData]);
            setIsLoading(false);
            const loadRemaining = async () => {
                const remainingData = [...initialData];
                const remainingCats = categories.slice(5);
                for (let i = 0; i < remainingCats.length; i += 3) {
                    const batch = remainingCats.slice(i, i + 3);
                    const results = await Promise.all(batch.map(async (cat) => { try { const mod = await embeddedPromptsData[cat](); const prompts = mod[Object.keys(mod)[0]]; return prompts.map(p => ({ ...p, category: cat })); } catch (e) { return []; } }));
                    remainingData.push(...results.flat());
                    setAll([...remainingData]);
                    fuse.setCollection(remainingData);
                }
                setCollectionReady(true);
            };
            if ('requestIdleCallback' in window) requestIdleCallback(() => loadRemaining()); else setTimeout(loadRemaining, 1000);
        };
        load();
    }, [fuse]);

    useGlobalShortcuts({
        onSearch: () => {if(isHome)window.location.hash='/prompts';else searchInputRef.current?.focus();},
        onThemeToggle: () => setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark'),
        onSidebarToggle: () => setIsSidebarOpen(prev => !prev),
        onScratchpad: () => setIsScratchpadOpen(prev => !prev),
        onHelp: () => setShowShortcuts(prev => !prev),
        onEscape: () => { closePrompt(); setIsSidebarOpen(false); setIsScratchpadOpen(false); setShowShortcuts(false); }
    });

    useEffect(() => { document.documentElement.classList.toggle('dark', currentTheme === 'dark'); try { localStorage.setItem('theme', currentTheme); localStorage.setItem('ainow-theme', currentTheme); } catch (_) { showToast(t('release.storage_unavailable')); } }, [currentTheme]);
    useEffect(() => { try { localStorage.setItem('favPrompts', JSON.stringify(favorites)); } catch (_) { showToast(t('release.storage_unavailable')); } }, [favorites]);
    useEffect(() => { try { localStorage.setItem('viewMode', view); } catch (_) { showToast(t('release.storage_unavailable')); } }, [view]);
    useEffect(() => { setPage(1); }, [view]);

    useEffect(() => {
        let res = debouncedQuery ? fuse.search(debouncedQuery).map(r => r.item) : all;
        if (selectedCat !== 'all') { if (selectedCat === 'favorites') res = res.filter(p => isPromptFavorite(p,favoritesSet)); else res = res.filter(p => p.category === selectedCat); }
        if (selectedTag) res = res.filter(p => p.tags && p.tags.includes(selectedTag));
        res = [...res].sort((a, b) => {
            const valA = String(a[sortConfig.key]).toLowerCase();
            const valB = String(b[sortConfig.key]).toLowerCase();
            if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
            if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
        setFiltered(res);
        setPage(1);
    }, [debouncedQuery, all, selectedCat, favoritesSet, selectedTag, sortConfig]);

    const handlePromptSelection = useCallback((prompt) => {
        if(!prompt)return;
        readerFromLibrary.current=true;
        window.location.hash=promptHref(prompt);
    }, []);

    const deepLinkHandled = useRef(false);
    useEffect(()=>{deepLinkHandled.current=false;},[route]);
    useEffect(() => {
        if (deepLinkHandled.current || all.length === 0) return;
        if (window.location.hash.startsWith('#/prompt/')) {
            const prompt = findPromptForHash(all,window.location.hash);
            if (prompt) { deepLinkHandled.current = true; setSelPrompt(prompt);addToHistory({ id: prompt.id, title: prompt.title, type: 'prompt', url: 'index.html' + promptHref(prompt) }); }
            else if (collectionReady) deepLinkHandled.current = true;
        } else deepLinkHandled.current = true;
    }, [all, collectionReady, handlePromptSelection, route]);

    const liveCounts = useMemo(() => {
        if (all.length === 0) return promptCounts;
        const counts = {};
        all.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
        return counts;
    }, [all]);

    const handleSurpriseMe = useCallback(() => {
        handlePromptSelection(all[Math.floor(Math.random() * all.length)]);
    }, [all, handlePromptSelection]);

    const handleCategorySelect = useCallback((catId) => {
        setSelectedCat(catId);
        setSelectedTag(null);
        setPage(1);
        setIsSidebarOpen(false);
    }, []);

    const handleSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const SortIcon = ({ colKey }) => {
        if (sortConfig.key !== colKey) return html`<${ArrowUpDown} className="w-3 h-3 opacity-30" />`;
        return sortConfig.direction === 'asc' ? html`<${ArrowUp} className="w-3 h-3" />` : html`<${ArrowDown} className="w-3 h-3" />`;
    };

    if (!isReady) return html`<div className="fixed inset-0 bg-slate-50 dark:bg-slate-900 flex items-center justify-center"><${Loader2} className="w-12 h-12 animate-spin text-teal-500" /></div>`;

    const itemsPerPage = view === 'table' ? 40 : (view === 'compact' ? 24 : 12);
    const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return html`
        <div className="min-h-screen bg-opal-bg dark:bg-slate-900 flex flex-col font-sans">
            <${Header} currentTheme=${currentTheme} onThemeToggle=${() => setCurrentTheme(t => t === 'dark' ? 'light' : 'dark')} onMenuClick=${() => setIsSidebarOpen(true)} onScratchpad=${() => setIsScratchpadOpen(true)} activePage=${isHome?'home':'prompts'} isZenMode=${isZenMode} />
            <div className="flex-1 max-w-[1600px] mx-auto w-full flex">
                <${SidebarWrapper} onNotes=${()=>setIsScratchpadOpen(true)} isOpen=${isSidebarOpen} onClose=${() => setIsSidebarOpen(false)} isZenMode=${isZenMode} showOnDesktop=${true}>
                    ${!isHome&&html`<${SidebarNav} all=${all} selectedCat=${selectedCat} favoritesCount=${favorites.length} liveCounts=${liveCounts} t=${t} onSurpriseMe=${handleSurpriseMe} onCategorySelect=${handleCategorySelect} />`}
                <//>
                <main className="flex-1 p-4 md:p-8 min-w-0">
                    ${isHome?html`<${BusinessHome} t=${t} onEmail=${()=>{setSelectedTag('email');setSelectedCat('all');setQuery('');setPage(1);window.location.hash='/prompts';}} onPlan=${()=>{setQuery('');handleCategorySelect('productivity');window.location.hash='/prompts';}}/>`:html`
                    <div className="ainow-search-field ainow-library-search">
                        <${Search} className="pointer-events-none" />
                        <label className="sr-only" htmlFor="prompt-search">${t('common.search_prompts')}</label><input id="prompt-search" ref=${searchInputRef} type="search" value=${query} onChange=${e => setQuery(e.target.value)} placeholder=${t('common.search_prompts')} className="" />
                    </div>
                    ${selectedTag && html`
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">${t('common.filtered_by') || 'Filtered by'}:</span>
                            <button onClick=${() => setSelectedTag(null)} className="flex items-center gap-1.5 px-3 py-1 bg-coral/10 text-coral dark:bg-teal-900/40 dark:text-teal-300 rounded-xl text-xs font-black uppercase tracking-tighter border border-coral/20 dark:border-teal-700 hover:bg-coral hover:text-white dark:hover:bg-teal-600 dark:hover:text-white transition-all">
                                ${selectedTag}
                                <${X} className="w-3 h-3" />
                            </button>
                        </div>
                    `}
                    <div className="ainow-library-heading">
                        <div className="text-left w-full sm:w-auto">
                            <h1 className="text-3xl sm:text-4xl font-[600] tracking-tight text-charcoal dark:text-white truncate text-left tabular-nums mb-2">${t(CATEGORY_CONFIG.find(c => c.id === selectedCat)?.nameKey) || "Prompts"}</h1>
                            <p className="text-stone dark:text-slate-300 text-[13px] font-medium">${filtered.length} ${t('common.prompts')==='common.prompts'?t('nav.prompts'):t('common.prompts')}</p><p role="status" className="text-xs text-stone dark:text-slate-300">${!collectionReady?t('smooth.loading_library'):''}</p>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end"><button type="button" className="biz-filter-button" aria-expanded=${isSidebarOpen} onClick=${()=>setIsSidebarOpen(true)}><${Settings2} className="w-4 h-4"/>${t('smooth.filters')}</button>${(query||selectedCat!=='all'||selectedTag)&&html`<button type="button" className="biz-clear-button" onClick=${()=>{setQuery('');setSelectedTag(null);handleCategorySelect('all');}}>${t('smooth.clear_filters')}</button>`}
                            <div className="ainow-view-controls">
                                <button onClick=${() => setView('grid')} aria-pressed=${view==='grid'} className=${'p-2 rounded-lg transition-all ' + (view === 'grid' ? 'bg-coral/10 text-coral' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('common.view_grid')}><${LayoutGrid} className="w-4 h-4" /></button>
                                <button onClick=${() => setView('compact')} aria-pressed=${view==='compact'} className=${'p-2 rounded-lg transition-all ' + (view === 'compact' ? 'bg-coral/10 text-coral' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('common.view_list')}><${List} className="w-4 h-4" /></button>
                                <button onClick=${() => setView('table')} aria-pressed=${view==='table'} className=${'p-2 rounded-lg transition-all ' + (view === 'table' ? 'bg-coral/10 text-coral' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('release.table_view')}><${TableProperties} className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                    ${isLoading ? html`<div className="py-20 text-center" role="status"><${Loader2} className="animate-spin mx-auto mb-4" /> ${t('smooth.loading_library')}</div>` : html`
                        <${React.Fragment}>
                            <div className=${view === 'grid' ? 'ainow-template-grid' : 'flex flex-col'}>
                                ${view === 'table' && html`<div className="sticky top-16 z-20 flex items-center gap-3 sm:gap-4 bg-slate-100 dark:bg-slate-900 px-3 sm:px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-slate-800"><div className="w-6 sm:w-8 shrink-0 text-left">#</div><div className="w-11 shrink-0 flex justify-center" title=${t('common.table_favorite')}><${Heart} className="w-3.5 h-3.5" /></div><button onClick=${() => handleSort('title')} className="flex-1 text-left flex items-center gap-1 hover:text-teal-500 transition-colors uppercase">${t('common.table_title')} <${SortIcon} colKey="title" /></button><button onClick=${() => handleSort('category')} className="hidden lg:flex w-32 shrink-0 items-center gap-1 hover:text-teal-500 transition-colors uppercase">${t('common.table_category')} <${SortIcon} colKey="category" /></button><div className="hidden md:flex w-40 shrink-0 uppercase">${t('common.table_tags')}</div><div className="w-11 sm:w-36 shrink-0 text-right sm:pr-4 uppercase">${t('common.table_actions')}</div></div>`}
                                ${paginated.map((p, i) => html`<${PromptItem} key=${promptKey(p)} prompt=${p} viewMode=${view} onSelect=${handlePromptSelection} showToast=${showToast} favorites=${favoritesSet} toggleFavorite=${toggleFavorite} t=${t} onTagClick=${(tag) => setSelectedTag(prev => prev === tag ? null : tag)} selectedTag=${selectedTag} index=${i} currentPage=${page} itemsPerPage=${itemsPerPage} />`)}
                            </div>
                            <${Pagination} currentPage=${page} totalPages=${Math.ceil(filtered.length / itemsPerPage)} onPageChange=${setPage} totalItems=${filtered.length} itemsPerPage=${itemsPerPage} t=${t} />
                        <//>
                    `}
                    `}
                </main>
            </div>
            <${Toast} toast=${toast} />
            <${Scratchpad} isOpen=${isScratchpadOpen} onClose=${() => setIsScratchpadOpen(false)} />

            <${ShortcutsModal} isOpen=${showShortcuts} onClose=${() => setShowShortcuts(false)} />
            ${selPrompt && html`<${PromptModal} prompt=${selPrompt} onClose=${closePrompt} showToast=${showToast} favorites=${favoritesSet} toggleFavorite=${toggleFavorite} t=${t} />`}
            <${Footer} isZenMode=${isZenMode} />
        </div>
    `;
};

const { ErrorBoundary } = AINOW['src/ErrorBoundary'];

const root = createRoot(document.getElementById('root'));
root.render(html`<${ErrorBoundary}><${App} /><//>`);
})();
