(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/agents'] = AINOW['src/agents'] || {};
const { useState, useMemo, useEffect, useRef, useCallback } = React;
const { createRoot } = ReactDOMClient;

const { Search, LayoutGrid, List, TableProperties, Settings2, Cpu, X, Wand2, Loader2, Heart, Copy, Share2, ExternalLink, ArrowUpDown, ArrowUp, ArrowDown, Info } = lucide;
const { agentsData } = AINOW['data/data-agents'];
const { Header, Footer, ShortcutsModal, EmptyState, SidebarWrapper, addToHistory, useLanguage, useStorageSync, ActionButtons, PromptAiActions, useToast, Toast, useGlobalShortcuts, Scratchpad, Pagination, useDialog } = AINOW['src/components'];
const { AGENT_CATEGORIES } = AINOW['src/config'];
const { copyTextToClipboard } = AINOW['src/utils'];

const html = htm.bind(React.createElement);

const AgentItem = React.memo(({ agent, onSelect, viewMode, showToast, favorites, toggleFavorite, t, index, currentPage, itemsPerPage }) => {
    const isFavorite = favorites.includes(agent.id);
    const hasCustomization = agent.instructions.includes('[User Context');
    const globalIndex = ((currentPage - 1) * itemsPerPage) + index + 1;

    const handleShare = async (e) => {
        e?.stopPropagation();
        const url = window.location.href.split('#')[0] + '#/agent/' + agent.id;
        if (navigator.share) { try { await navigator.share({ title: 'AINOW Agent: ' + agent.name, url }); return; } catch (err) { } }
        if (await copyTextToClipboard(url)) showToast(t('common.copied_success'));
    };

    const handleQuickCopy = async (e) => {
        e.stopPropagation();
        if (await copyTextToClipboard(agent.instructions)) {
            showToast(t('common.copied_success'));
        }
    };

    if (viewMode === 'table') {
        return html`
          <div
            onClick=${() => onSelect(agent)}
            className=${`group flex items-center gap-3 sm:gap-4 border-b border-mist dark:border-slate-800/50 px-3 sm:px-4 py-2 cursor-pointer hover:bg-opal-bg dark:hover:bg-teal-900/20 transition-all ${index % 2 === 0 ? 'bg-opal-surface dark:bg-slate-800' : 'bg-opal-bg/30 dark:bg-slate-800/40'}`}
          >
            <div className="w-6 sm:w-8 shrink-0 text-[10px] font-bold text-slate-300 dark:text-slate-600 tabular-nums text-left">
                ${globalIndex}
            </div>
            <div className="w-11 shrink-0 flex justify-center" onClick=${e => e.stopPropagation()}>
               <button
                 onClick=${() => toggleFavorite(agent.id)}
                 title=${isFavorite?t('release.remove_favorite'):t('common.favorites')}
                 className=${`transition-all hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center ${isFavorite ? 'text-red-500' : 'text-slate-300 dark:text-slate-600 hover:text-red-400'}`}
               >
                 <${Heart} className="w-4 h-4" fill=${isFavorite ? 'currentColor' : 'none'} />
               </button>
            </div>
            <div className="flex-1 min-w-0 flex items-center gap-2">
              <button type="button" onClick=${e=>{e.stopPropagation();onSelect(agent);}} className="min-h-[44px] font-black text-xs text-charcoal dark:text-slate-200 truncate group-hover:text-coral transition-colors text-left uppercase tracking-tight">${agent.name}</button>
              ${hasCustomization && html`
                <div title=${t('release.editable')} className="text-teal-500 dark:text-teal-400 shrink-0">
                   <${Wand2} className="w-3.5 h-3.5" />
                </div>
              `}
            </div>
            <div className="hidden lg:flex w-32 shrink-0 items-center">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest truncate">
                    ${agent.category}
                </span>
            </div>
            <div className="w-11 sm:w-36 shrink-0 flex items-center justify-end gap-0.5 sm:opacity-0 group-hover:opacity-100 transition-all" onClick=${e => e.stopPropagation()}>
                <button onClick=${handleQuickCopy} className="min-w-[44px] min-h-[44px] p-2 text-stone-light hover:text-coral transition-colors" title=${t('release.copy_text')}><${Copy} className="w-3.5 h-3.5" /></button>
                <button onClick=${handleShare} className="hidden sm:block min-w-[44px] min-h-[44px] p-2 text-stone-light hover:text-coral transition-colors" title=${t('release.share_link')}><${Share2} className="w-3.5 h-3.5" /></button>
                <button onClick=${() => onSelect(agent)} className="hidden sm:block min-w-[44px] min-h-[44px] p-2 text-stone-light hover:text-coral transition-colors" title=${t('release.open_template')}><${ExternalLink} className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        `;
    }

    if (viewMode === 'compact') {
        return html`
            <div onClick=${() => onSelect(agent)} className="group flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 bg-opal-surface dark:bg-slate-800 border-b border-mist dark:border-slate-700 p-4 transition-all cursor-pointer hover:bg-opal-bg dark:hover:bg-slate-700/50">
                <div className="flex-1 min-w-0 text-left">
                    <h3 className="font-black text-charcoal dark:text-slate-100 text-sm truncate flex items-center gap-2 uppercase tracking-tight">
                        <button type="button" onClick=${e=>{e.stopPropagation();onSelect(agent);}} className="text-left">${agent.name}</button>
                        ${hasCustomization && html`<${Settings2} className="w-3 h-3 text-stone-light" />`}
                    </h3>
                    <p className="text-stone-light text-xs truncate italic font-medium leading-tight">"${agent.description}"</p>
                </div>
                <div className="flex items-center gap-2 justify-between md:justify-end" onClick=${e => e.stopPropagation()}>
                    <${ActionButtons} text=${agent.instructions} title=${agent.name} itemId=${agent.id} isFavorite=${isFavorite} onToggleFavorite=${() => toggleFavorite(agent.id)} onShare=${handleShare} showToast=${showToast} size=${3.5} />
                </div>
            </div>
        `;
    }

    return html`
        <div onClick=${() => onSelect(agent)} className="group bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-2xl p-7 transition-all duration-300 shadow-level-1 hover:shadow-level-2 cursor-pointer flex flex-col h-full text-left transform hover:-translate-y-1">
            <div className="ainow-card-header flex justify-between items-start mb-4" onClick=${e => e.stopPropagation()}>
                 <div className="flex flex-col gap-1">
                    <span className="px-2 py-1.5 bg-coral-light/30 text-coral dark:text-coral text-[11px] font-bold rounded-md w-fit uppercase tracking-wider">${agent.category}</span>
                </div>
                <${ActionButtons}
                    text=${agent.instructions}
                    title=${agent.name}
                    itemId=${agent.id}
                    isFavorite=${isFavorite}
                    onToggleFavorite=${() => toggleFavorite(agent.id)}
                    onShare=${handleShare}
                    showToast=${showToast}
                    size=${3.5}
                />
            </div>

            <h3 className="text-lg font-bold mb-3 text-charcoal group-hover:text-coral transition-colors dark:text-white leading-tight">${agent.name}</h3>
            <p className="text-sm text-stone dark:text-slate-400 mb-6 italic line-clamp-2 leading-relaxed">"${agent.description}"</p>
            <div className="mt-auto pt-4 border-t border-mist dark:border-slate-700">
                 <button className="w-full py-2.5 bg-opal-sidebar dark:bg-slate-900 text-stone hover:text-white dark:text-slate-400 text-[10px] font-bold rounded-xl hover:bg-coral transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                    ${t('agents_ui.preview_title')}
                </button>
            </div>
        </div>
    `;
});

const AgentModal = ({ agent, onClose, showToast, t, favorites, toggleFavorite }) => {
    const {lang}=useLanguage(),readerUi=AINOWPromptActions.ui(lang);
    const [vals, setVals] = useState({});
    const firstInputRef = useRef(null);

    const dialogRef = useRef(null);
    useDialog(true, onClose, dialogRef);

    const placeholders = useMemo(() => {
        const matches = (agent.instructions || '').match(/\[(.*?)\]/g) || [];
        return [...new Set(matches)].filter(p => {
            const content = p.replace(/[\[\]]/g, '');
            const isSystemTag = /^[A-Z]+:/.test(content) || /^[A-Z]+$/.test(content);
            if (content.startsWith('User Context')) return true;
            return !isSystemTag;
        });
    }, [agent.instructions]);

    const getFinalText = () => {
        let text = agent.instructions || '';
        placeholders.forEach(p => { if (vals[p]) text = text.replaceAll(p, vals[p]); });
        return text;
    };

    const handleCopy = async () => showToast(await copyTextToClipboard(getFinalText())?t('common.copied_success'):readerUi.copyFailed);
    const handleAI=tool=>{handleCopy();window.open(tool.url,'_blank','noopener');};

    const inputs = placeholders.map((p, i) => {
        const rawContent = p.replace(/[\[\]]/g, '');
        const parts = rawContent.split(':');
        const label = parts[0] || 'Field';
        const options = parts.length > 1 ? parts[1].split('|') : null;
        const isEmpty = !vals[p];

        return html`
            <div key=${p} className="space-y-1">
                <label htmlFor=${"agent-input-"+i} className="text-[10px] font-bold uppercase text-slate-400 tracking-wider text-left block">${label}</label>
                ${options ? html`
                    <select id=${"agent-input-"+i} data-dialog-focus=${i===0?true:undefined} ref=${i === 0 ? firstInputRef : null} value=${vals[p] || ''} onChange=${e => setVals({ ...vals, [p]: e.target.value })} className=${`w-full bg-slate-50 dark:bg-slate-900 border ${isEmpty ? 'border-slate-200 dark:border-slate-700' : 'border-teal-500'} rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-teal-500 transition-all dark:text-white cursor-pointer`}><option value="" disabled>${t('release.select_field')} ${label}...</option>${options.map(opt => html`<option key=${opt} value=${opt}>${opt}</option>`)}</select>
                ` : html`
                    <textarea id=${"agent-input-"+i} data-dialog-focus=${i===0?true:undefined} ref=${i === 0 ? firstInputRef : null} value=${vals[p] || ''} onChange=${e => setVals({ ...vals, [p]: e.target.value })} placeholder=${t('release.enter_field')+' '+label.toLowerCase()+'...'} rows="2" className=${`w-full bg-slate-50 dark:bg-slate-900 border ${isEmpty ? 'border-slate-200 dark:border-slate-700' : 'border-teal-500'} rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-teal-500 transition-all dark:text-white resize-none`} />
                `}
            </div>
        `;
    });



    const isFavorite = favorites.includes(agent.id);

    return html`
        <div className="prompt-dialog-overlay" onClick=${onClose}>
            <section ref=${dialogRef} role="dialog" aria-modal="true" aria-labelledby="agent-reader-title" tabIndex="-1" className="prompt-dialog-reader" onClick=${e=>e.stopPropagation()}>
                <header className="prompt-dialog-header"><div><span className="prompt-dialog-kicker">${agent.category}</span><h2 id="agent-reader-title">${agent.name}</h2></div><button type="button" className="prompt-dialog-close" onClick=${onClose} aria-label=${t('release.close')}><${X}/></button></header>
                <div className="prompt-dialog-body">
                    <div className="prompt-dialog-tools"><span>${placeholders.length?t('agents_ui.interactive_config'):t('agents_ui.static_config')}</span><${ActionButtons} text=${getFinalText()} title=${agent.name} onShare=${undefined} isFavorite=${isFavorite} onToggleFavorite=${()=>toggleFavorite(agent.id)} showToast=${showToast} showCopy=${false} showFavorite=${true} showPlay=${false}/></div>
                    ${placeholders.length>0&&html`<section className="prompt-dialog-inputs"><h3>${t('agents_ui.customize_title')}</h3><div>${inputs}</div><p className="agent-reader-tip">${t('agents_ui.tip')}</p></section>`}
                    <h3 className="agent-reader-preview-label">${t('agents_ui.preview_title')}</h3><div className="prompt-dialog-source ainow-prompt-content" dangerouslySetInnerHTML=${{__html:AINOWPromptText.render(agent.instructions,vals)}}></div>
                </div>
                <footer className="prompt-dialog-footer"><div className="prompt-dialog-actions"><button type="button" className="ainow-button prompt-dialog-copy" onClick=${handleCopy} aria-label=${readerUi.copy} title=${readerUi.copy}><${Copy}/><span className="prompt-dialog-action-label">${readerUi.copy}</span></button><${PromptAiActions} lang=${lang} onChoose=${handleAI}/></div><p role="status">${isFavorite?readerUi.saved:readerUi.hint}</p></footer>
            </section>
        </div>
    `;
};

const App = () => {
    const { t, isReady } = useLanguage();
    const { toast, showToast } = useToast();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [theme, setTheme] = useState(() => { try { return (localStorage.getItem('ainow-theme') || localStorage.getItem('theme'))==='dark'?'dark':'light'; } catch (_) { return 'light'; } });
    const [viewMode, setViewMode] = useState(() => { try { const value=localStorage.getItem('agentViewMode');return ['grid','compact','table'].includes(value)?value:'grid'; } catch (_) { return 'grid'; } });
    const [page, setPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [favorites, setFavorites] = useState(() => { try { const value=JSON.parse(localStorage.getItem('favAgents') || '[]');return Array.isArray(value)?value:[]; } catch { return []; } });
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
    const readerFromLibrary=useRef(false);
    const closeAgent=useCallback(()=>{
        setSelectedAgent(null);
        if(!/^#\/(?:agent|share)\//.test(window.location.hash))return;
        if(readerFromLibrary.current){readerFromLibrary.current=false;window.history.back();}
        else window.history.replaceState(null,'',window.location.pathname+window.location.search);
    },[]);
    const isZenMode = false;
    useStorageSync(['favAgents','agentViewMode','ainow-theme','theme'],values=>{
        try {
            const saved=JSON.parse(values.favAgents||'[]'),mode=values.agentViewMode;
            setFavorites(Array.isArray(saved)?saved:[]);
            setViewMode(['grid','compact','table'].includes(mode)?mode:'grid');
            setTheme((values['ainow-theme']||values.theme)==='dark'?'dark':'light');
        } catch (_) { showToast(t('release.storage_unavailable')); }
    });

    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
    const searchInputRef = useRef(null);

    const fuse = useMemo(() => new Fuse(agentsData, { keys: [{ name: 'name', weight: 0.7 }, { name: 'description', weight: 0.5 }, { name: 'instructions', weight: 0.3 }, { name: 'category', weight: 0.4 }], threshold: 0.3 }), []);

    useGlobalShortcuts({
        onSearch: () => searchInputRef.current?.focus(),
        onThemeToggle: () => setTheme(prev => prev === 'dark' ? 'light' : 'dark'),
        onSidebarToggle: () => setIsSidebarOpen(prev => !prev),
        onHelp: () => setShowShortcuts(prev => !prev),
        onScratchpad: () => setIsScratchpadOpen(prev => !prev),
        onEscape: () => { closeAgent(); setShowShortcuts(false); setIsSidebarOpen(false); setIsScratchpadOpen(false); }
    });

    useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); try { localStorage.setItem('theme', theme); localStorage.setItem('ainow-theme', theme); } catch (_) { showToast(t('release.storage_unavailable')); } }, [theme]);
    useEffect(() => { try { localStorage.setItem('favAgents', JSON.stringify(favorites)); } catch (_) { showToast(t('release.storage_unavailable')); } }, [favorites]);
    useEffect(() => { try { localStorage.setItem('agentViewMode', viewMode); } catch (_) { showToast(t('release.storage_unavailable')); } }, [viewMode]);

    useEffect(() => {
        if (!isReady) return;
        const handleHash = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#/agent/')) {
                let id;try{id=decodeURIComponent(hash.slice('#/agent/'.length));}catch(_){setSelectedAgent(null);return;}
                const found = agentsData.find(a => String(a.id) === id);
                setSelectedAgent(found||null);
                if (found) addToHistory({ id: found.id, title: found.name, type: 'agent', url: 'agents.html#/agent/' + encodeURIComponent(found.id) });
            } else if (hash.startsWith('#/share/')) {
                try {
                    const encoded = hash.replace('#/share/', '');
                    const decoded = decodeURIComponent(escape(atob(encoded)));
                    const sharedAgent = { id: 'shared-' + Date.now(), name: 'Shared Configuration', instructions: decoded, category: 'Shared', description: 'Custom AI Agent configuration shared via link.' };
                    setSelectedAgent(sharedAgent);
                } catch (e) { console.error("Failed to decode shared agent", e); }
            } else { setSelectedAgent(null);readerFromLibrary.current=false; }
        };
        handleHash();
        window.addEventListener('hashchange', handleHash);
        return () => window.removeEventListener('hashchange', handleHash);
    }, [isReady]);

    const handleSelectAgent = useCallback((a) => {
        if(!a)return;
        readerFromLibrary.current=true;
        window.location.hash='#/agent/'+encodeURIComponent(a.id);
    }, []);

    const filteredAgents = useMemo(() => {
        let res = searchQuery ? fuse.search(searchQuery).map(r => r.item) : agentsData;
        if (selectedCategory !== 'all') {
            if (selectedCategory === 'favorites') res = res.filter(a => favorites.includes(a.id));
            else res = res.filter(a => a.category === selectedCategory);
        }
        res = [...res].sort((a, b) => {
            const valA = String(a[sortConfig.key]).toLowerCase();
            const valB = String(b[sortConfig.key]).toLowerCase();
            if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
            if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
        return res;
    }, [selectedCategory, searchQuery, favorites, sortConfig, fuse]);

    useEffect(() => { setPage(1); }, [viewMode]);
    useEffect(() => { setPage(current=>Math.min(current,Math.max(1,Math.ceil(filteredAgents.length/(viewMode==='table'?40:viewMode==='compact'?24:12))))); }, [filteredAgents.length,viewMode]);

    const catCounts = useMemo(() => {
        const counts = { all: agentsData.length, favorites: favorites.length };
        agentsData.forEach(a => counts[a.category] = (counts[a.category] || 0) + 1);
        return counts;
    }, [favorites]);

    const toggleFavorite = useCallback((id) => setFavorites(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]), []);

    const handleSort = (key) => { setSortConfig(prev => ({ key, direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc' })); };

    const SortIcon = ({ colKey }) => {
        if (sortConfig.key !== colKey) return html`<${ArrowUpDown} className="w-3 h-3 opacity-30" />`;
        return sortConfig.direction === 'asc' ? html`<${ArrowUp} className="w-3 h-3" />` : html`<${ArrowDown} className="w-3 h-3" />`;
    };

    if (!isReady) return html`<div className="fixed inset-0 bg-slate-50 dark:bg-slate-900 flex items-center justify-center"><${Loader2} className="w-12 h-12 animate-spin text-teal-500" /></div>`;

    const itemsPerPage = viewMode === 'table' ? 40 : (viewMode === 'compact' ? 24 : 12);
    const paginated = filteredAgents.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    const totalPages = Math.ceil(filteredAgents.length / itemsPerPage);

    const categoryButtons = AGENT_CATEGORIES.map(cat => {
        const active = selectedCategory === cat.id;
        const count = catCounts[cat.id] || 0;
        return html`<button key=${cat.id} onClick=${() => { setSelectedCategory(cat.id); setPage(1); setIsSidebarOpen(false); window.location.hash = ''; }} className=${'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ' + (active ? 'bg-coral/10 dark:bg-teal-900/30 text-coral dark:text-teal-300 font-bold shadow-sm' : 'text-stone hover:bg-opal-sidebar/50 dark:text-slate-400 dark:hover:bg-slate-800')}><${cat.icon} className="w-4 h-4" /><span className="flex-1 text-left">${t(cat.nameKey)}</span><span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white dark:bg-slate-800 tabular-nums">${count}</span></button>`;
    });

    const agentList = paginated.map((a, i) => html`<${AgentItem} key=${a.id} agent=${a} onSelect=${handleSelectAgent} viewMode=${viewMode} showToast=${showToast} favorites=${favorites} toggleFavorite=${toggleFavorite} t=${t} index=${i} currentPage=${page} itemsPerPage=${itemsPerPage} />`);

    let pageTitle = t(AGENT_CATEGORIES.find(c => c.id === selectedCategory)?.nameKey) || t('agents_ui.title');

    return html`
        <div className="min-h-screen bg-opal-bg dark:bg-slate-900 flex flex-col">
            <${Header} onMenuClick=${() => setIsSidebarOpen(true)} onThemeToggle=${() => setTheme(theme === 'dark' ? 'light' : 'dark')} onScratchpad=${() => setIsScratchpadOpen(true)} currentTheme=${theme} activePage="agents" isZenMode=${isZenMode} />
            <div className="flex-1 max-w-[1600px] mx-auto w-full flex">
                <${SidebarWrapper} onNotes=${()=>setIsScratchpadOpen(true)} isOpen=${isSidebarOpen} onClose=${() => setIsSidebarOpen(false)} isZenMode=${isZenMode}>
                    <button onClick=${() => handleSelectAgent(agentsData[Math.floor(Math.random() * agentsData.length)])} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 mb-2 w-full text-left font-bold transition-all"><${Wand2} className="w-5 h-5" /><span className="flex-1 text-left">${t('common.surprise_me')}</span></button>
                    <nav className="space-y-1"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">${t('release.agent_types')}</p>${categoryButtons}</nav>
                <//>
                <main className="flex-1 p-4 md:p-8 min-w-0">
                    <details className="mb-6 max-w-2xl rounded-2xl border border-mist dark:border-slate-800 bg-opal-sidebar dark:bg-slate-900/50 text-left">
                        <summary className="cursor-pointer select-none px-5 py-4 text-sm font-bold text-charcoal dark:text-slate-100 flex items-center gap-2">
                            <${Info} className="w-4 h-4 text-coral shrink-0" />
                            ${t('language_note.title')}
                        </summary>
                        <div className="px-5 pb-5 pt-1 space-y-3">
                            <p className="text-[13px] leading-relaxed text-stone dark:text-slate-400">${t('language_note.body')}</p>
                            <p className="text-[13px] leading-relaxed text-charcoal dark:text-slate-200 border-l-2 border-coral pl-3">${t('language_note.tip')}</p>
                        </div>
                    </details>
                    <div className="mb-8 relative max-w-2xl text-left shadow-sm rounded-2xl transition-all focus-within:shadow-level-2 focus-within:ring-2 focus-within:ring-coral/20">
                        <${Search} className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-light w-5 h-5 pointer-events-none" />
                        <input id="agent-search" ref=${searchInputRef} type="search" aria-label=${t('agents_ui.search_placeholder')} value=${searchQuery} onChange=${e => { setSearchQuery(e.target.value); setPage(1); }} placeholder=${t('agents_ui.search_placeholder')} className="w-full bg-white dark:bg-slate-800 border-2 border-mist dark:border-slate-700 rounded-2xl py-4 pl-14 pr-4 outline-none focus:border-coral transition-colors dark:text-white shadow-sm text-charcoal text-base" />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-6"><div className="text-left w-full sm:w-auto"><h1 className="text-3xl sm:text-4xl font-[600] tracking-tight text-charcoal dark:text-white text-left tabular-nums mb-2">${pageTitle}</h1><p className="text-stone-light dark:text-slate-400 text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.08em] text-left">${filteredAgents.length} ${t('release.agents_count')}</p></div><div className="flex bg-opal-sidebar dark:bg-slate-900 p-1.5 rounded-xl border border-mist dark:border-slate-800"><button onClick=${() => setViewMode('grid')} className=${'p-2 rounded-lg transition-all ' + (viewMode === 'grid' ? 'bg-coral/10 text-coral' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('common.view_grid')}><${LayoutGrid} className="w-4 h-4" /></button><button onClick=${() => setViewMode('compact')} className=${'p-2 rounded-lg transition-all ' + (viewMode === 'compact' ? 'bg-coral/10 text-coral' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('common.view_list')}><${List} className="w-4 h-4" /></button><button onClick=${() => setViewMode('table')} className=${'p-2 rounded-lg transition-all ' + (viewMode === 'table' ? 'bg-coral/10 text-coral' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('release.table_view')}><${TableProperties} className="w-4 h-4" /></button></div></div>
                    ${paginated.length > 0 ? html`
                        <${React.Fragment}>
                            <div className=${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col'}>${viewMode === 'table' && html`<div className="sticky top-16 z-20 flex items-center gap-3 sm:gap-4 bg-slate-100 dark:bg-slate-900 px-3 sm:px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-slate-800"><div className="w-8 shrink-0 text-left">#</div><div className="w-11 shrink-0 flex justify-center" title=${t('common.table_favorite')}><${Heart} className="w-3.5 h-3.5" /></div><button onClick=${() => handleSort('name')} className="flex-1 text-left flex items-center gap-1 hover:text-teal-500 transition-colors uppercase">${t('common.table_name')} <${SortIcon} colKey="name" /></button><button onClick=${() => handleSort('category')} className="hidden lg:flex w-32 shrink-0 items-center gap-1 hover:text-teal-500 transition-colors uppercase">${t('common.table_category')} <${SortIcon} colKey="category" /></button><div className="w-11 sm:w-36 shrink-0 text-right sm:pr-4 uppercase">${t('common.table_actions')}</div></div>`}${agentList}</div>
                            ${filteredAgents.length > itemsPerPage && html`<${Pagination} currentPage=${page} totalPages=${totalPages} onPageChange=${setPage} totalItems=${filteredAgents.length} itemsPerPage=${itemsPerPage} t=${t} itemType="agents" />`}
                        <//>
                    ` : html`<${EmptyState} message=${t('agents_ui.no_results')} icon=${Cpu} onClear=${() => { setSearchQuery(''); setSelectedCategory('all'); }} />`}
                </main>
            </div>
            <${Toast} toast=${toast} />
            <${Scratchpad} isOpen=${isScratchpadOpen} onClose=${() => setIsScratchpadOpen(false)} />

            ${selectedAgent && html`<${AgentModal} agent=${selectedAgent} onClose=${closeAgent} showToast=${showToast} t=${t} favorites=${favorites} toggleFavorite=${(id) => setFavorites(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id])} />`}
            <${ShortcutsModal} isOpen=${showShortcuts} onClose=${() => setShowShortcuts(false)} />
            <${Footer} isZenMode=${isZenMode} />
        </div>
    `;
};

const root = createRoot(document.getElementById('root'));
root.render(html`<${App} />`);
})();
