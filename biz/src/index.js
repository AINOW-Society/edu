(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/index'] = AINOW['src/index'] || {};
// AINOW Main App Module
const { useState, useMemo, useEffect, useRef, useCallback } = React;
const { createRoot } = ReactDOMClient;


const { Search, LayoutGrid, List, TableProperties, Loader2, Wand2, Settings2, Edit, X, Hash, ArrowUpDown, ArrowUp, ArrowDown, Heart, Copy, Share2, ExternalLink, Calendar } = lucide;
const { embeddedPromptsData } = AINOW['data/data'];
const { promptCounts } = AINOW['data/data-counts'];
const { Header, Footer, ShortcutsModal, SidebarWrapper, EmptyState, addToHistory, useLanguage, ActionButtons, useToast, Toast, useGlobalShortcuts, Scratchpad, SettingsModal, Pagination } = AINOW['src/components'];
const { CATEGORY_CONFIG } = AINOW['src/config'];
const { useDebounce, copyTextToClipboard } = AINOW['src/utils'];

const html = htm.bind(React.createElement);

const PromptItem = React.memo(({ prompt, viewMode, onSelect, showToast, favorites, toggleFavorite, t, onTagClick, selectedTag, index, currentPage, itemsPerPage }) => {
    const isFavorite = favorites.has(prompt.id);
    const isCustomizable = /\[.*?\]/.test(prompt.prompt || '');
    const globalIndex = ((currentPage - 1) * itemsPerPage) + index + 1;

    const handleShare = async (e) => {
        e?.stopPropagation();
        const url = window.location.href.split('#')[0] + '#/prompt/' + prompt.id;
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
        className=${`group flex items-center gap-3 sm:gap-4 border-b border-mist dark:border-slate-800/50 px-3 sm:px-4 py-2 cursor-pointer hover:bg-opal-bg dark:hover:bg-indigo-900/20 transition-all ${index % 2 === 0 ? 'bg-opal-surface dark:bg-slate-800' : 'bg-opal-bg/30 dark:bg-slate-800/40'}`}
      >
        <div className="w-6 sm:w-8 shrink-0 text-[10px] font-bold text-stone-light dark:text-slate-600 tabular-nums text-left">
            ${globalIndex}
        </div>
        <div className="w-6 shrink-0 flex justify-center" onClick=${e => e.stopPropagation()}>
           <button 
             onClick=${() => toggleFavorite(prompt.id)}
             title=${isFavorite ? "Remove from Favorites" : "Add to Favorites"}
             className=${`transition-all hover:scale-110 min-w-[32px] min-h-[32px] flex items-center justify-center ${isFavorite ? 'text-coral' : 'text-stone-light dark:text-slate-700 hover:text-coral'}`}
           >
             <${Heart} className="w-4 h-4" fill=${isFavorite ? 'currentColor' : 'none'} />
           </button>
        </div>
        <div className="flex-1 min-w-0 flex items-center gap-2">
          <span className="font-black text-xs text-charcoal dark:text-slate-200 truncate group-hover:text-coral transition-colors text-left uppercase tracking-tight">
            ${prompt.title}
          </span>
          ${isCustomizable && html`<div title="Editable Template" className="text-coral dark:text-indigo-400 shrink-0"><${Wand2} className="w-3.5 h-3.5" /></div>`}
        </div>
        <div className="hidden lg:flex w-32 shrink-0 items-center">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest truncate">${prompt.category}</span>
        </div>
        <div className="hidden md:flex gap-1 items-center overflow-hidden w-40 shrink-0">${tagsList.slice(0, 2)}</div>
        <div className="hidden xl:flex w-24 shrink-0 text-[10px] text-slate-400 tabular-nums">
            ${new Date(prompt.created).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
        </div>
        <div className="w-10 sm:w-24 shrink-0 flex items-center justify-end gap-0.5 sm:opacity-0 group-hover:opacity-100 transition-all font-bold" onClick=${e => e.stopPropagation()}>
            <button onClick=${handleQuickCopy} className="p-2 text-stone-light hover:text-coral transition-colors" title="Quick Copy Text"><${Copy} className="w-4 h-4" /></button>
            <button onClick=${handleShare} className="hidden sm:block p-2 text-stone-light hover:text-coral transition-colors" title="Share Link"><${Share2} className="w-4 h-4" /></button>
            <button onClick=${() => onSelect(prompt)} className="hidden sm:block p-2 text-stone-light hover:text-coral transition-colors" title="Open and Customize"><${ExternalLink} className="w-4 h-4" /></button>
        </div>
      </div>
    `;
    }

    if (viewMode === 'compact') {
        return html`
      <div onClick=${() => onSelect(prompt)} className="group flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 bg-opal-surface dark:bg-slate-800 border-b border-mist dark:border-slate-700 p-4 cursor-pointer hover:bg-opal-bg dark:hover:bg-slate-700/50 transition-all">
        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-black text-xs text-charcoal dark:text-slate-200 uppercase tracking-tight">${prompt.title}</span>
            <div className="hidden sm:flex gap-1">${tagsList.slice(0, 2)}</div>
          </div>
          <div className="text-stone-light text-xs truncate italic font-medium leading-tight">"${preview}"</div>
        </div>
        <div className="flex items-center gap-2 justify-between md:justify-end" onClick=${e => e.stopPropagation()}>
            ${isCustomizable && html`<button onClick=${() => onSelect(prompt)} className="px-3 py-1.5 bg-opal-bg dark:bg-slate-700/50 text-coral dark:text-slate-400 text-[10px] font-black rounded-xl hover:bg-coral hover:text-white transition-all mr-1 sm:mr-2 uppercase tracking-widest border border-mist shadow-sm">${t('common.customize')}</button>`}
            <${ActionButtons} text=${prompt.prompt} title=${prompt.title} itemId=${prompt.id} isFavorite=${isFavorite} onToggleFavorite=${() => toggleFavorite(prompt.id)} onShare=${handleShare} showToast=${showToast} size=${3.5} />
        </div>
      </div>
    `;
    }

    return html`
    <div onClick=${() => onSelect(prompt)} className="group bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-2xl p-7 transition-all duration-300 shadow-level-1 hover:shadow-level-2 cursor-pointer flex flex-col h-full transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4" onClick=${e => e.stopPropagation()}>
          <div className="flex flex-col gap-1">
              <span className="px-2 py-1.5 bg-coral-light/30 text-coral dark:text-coral text-[11px] font-bold rounded-md w-fit uppercase tracking-wider">${prompt.category}</span>
          </div>
          <${ActionButtons} text=${prompt.prompt} title=${prompt.title} itemId=${prompt.id} isFavorite=${isFavorite} onToggleFavorite=${() => toggleFavorite(prompt.id)} onShare=${handleShare} showToast=${showToast} size=${3.5} />
      </div>
      <h3 className="text-lg font-bold mb-3 text-charcoal group-hover:text-coral transition-colors dark:text-white leading-tight text-left">${prompt.title}</h3>
      <div className="text-sm leading-relaxed text-stone dark:text-slate-400 mb-6 line-clamp-3 text-left">"${preview}"</div>
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-mist dark:border-slate-700/50">
        <div className="flex flex-wrap gap-1.5">${tagsList}</div>
        ${isCustomizable && html`<button className="p-2 text-stone-light hover:text-coral hover:bg-opal-bg dark:hover:bg-slate-700 rounded-lg transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"><${Edit} className="w-4 h-4" /></button>`}
      </div>
    </div>
  `;
});

const PromptModal = ({ prompt, onClose, showToast, favorites, toggleFavorite, t }) => {
    const [vals, setVals] = useState({});
    const firstInputRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = '';
    }, []);

    useEffect(() => { setTimeout(() => firstInputRef.current?.focus(), 300); }, []);

    const placeholders = useMemo(() => {
        const matches = (prompt.prompt || '').match(/\[(.*?)\]/g) || [];
        return [...new Set(matches)];
    }, [prompt.prompt]);

    const getFinalText = useCallback(() => {
        let text = prompt.prompt || '';
        placeholders.forEach(p => { if (vals[p]) text = text.replaceAll(p, vals[p]); });
        return text;
    }, [prompt.prompt, placeholders, vals]);

    const handleCopy = async () => { if (await copyTextToClipboard(getFinalText())) showToast(t('common.copied_success')); };

    const isFavorite = favorites.has(prompt.id);

    const inputs = placeholders.map((p, i) => {
        const rawContent = p.replace(/[\[\]]/g, '');
        const parts = rawContent.split(':');
        const label = parts[0];
        const options = parts.length > 1 ? parts[1].split('|') : null;
        const isEmpty = !vals[p];

        return html`
            <div key=${p} className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider text-left block">${label}</label>
                ${options ? html`
                    <select ref=${i === 0 ? firstInputRef : null} value=${vals[p] || ''} onChange=${e => setVals({ ...vals, [p]: e.target.value })} className=${`w-full bg-opal-bg dark:bg-slate-900 border ${isEmpty ? 'border-mist dark:border-slate-700' : 'border-coral'} rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-coral transition-all dark:text-white cursor-pointer appearance-none`}>
                        <option value="" disabled>Select ${label}...</option>
                        ${options.map(opt => html`<option key=${opt} value=${opt}>${opt}</option>`)}
                    </select>
                ` : html`
                    <input ref=${i === 0 ? firstInputRef : null} type="text" value=${vals[p] || ''} onChange=${e => setVals({ ...vals, [p]: e.target.value })} placeholder=${'Enter ' + label.toLowerCase() + '...'} className=${`w-full bg-opal-bg dark:bg-slate-900 border ${isEmpty ? 'border-mist dark:border-slate-700' : 'border-coral'} rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-coral transition-all dark:text-white`} />
                `}
            </div>
        `;
    });

    const previewParts = useMemo(() => {
        const text = prompt.prompt || '';
        const parts = text.split(/(\[.*?\])/g);
        return parts.map((part, i) => {
            if (part.startsWith('[') && part.endsWith(']')) return html`<span key=${i} className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/40 px-1 rounded">${vals[part] || part}</span>`;
            return part;
        });
    }, [prompt.prompt, vals]);

    return html`
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in no-print" onClick=${onClose}>
            <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-2xl shadow-xl max-h-[90vh] flex flex-col animate-modal-in" onClick=${e => e.stopPropagation()}>
                <header className="p-4 sm:p-6 border-b dark:border-slate-700 flex justify-between items-center">
                    <div className="text-left">
                        <h2 className="text-base sm:text-lg font-bold dark:text-white leading-none">${prompt.title}</h2>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mt-1 tracking-widest">${placeholders.length > 0 ? t('common.customize') : 'Static'}</p>
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                        <${ActionButtons} text=${getFinalText()} title=${prompt.title} itemId=${prompt.id} isFavorite=${isFavorite} onToggleFavorite=${() => toggleFavorite(prompt.id)} showToast=${showToast} showCopy=${true} showShare=${true} showPlay=${true} showFavorite=${true} />
                        <button onClick=${onClose} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg min-w-[40px] min-h-[40px] flex items-center justify-center"><${X} className="w-5 h-5"/></button>
                    </div>
                </header>
                <div className="p-4 sm:p-6 overflow-y-auto space-y-6 no-scrollbar text-left">
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 sm:p-6 text-sm italic leading-relaxed dark:text-slate-300 border border-slate-100 dark:border-slate-800">"${previewParts}"</div>
                    ${placeholders.length > 0 && html`<div className="space-y-4"><h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest border-b pb-2 dark:border-slate-700">Inputs</h3><div className="grid grid-cols-1 gap-4">${inputs}</div></div>`}
                </div>
                <footer className="p-4 sm:p-6 border-t dark:border-slate-700 flex justify-end items-center gap-3">
                    <button onClick=${onClose} className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all mr-auto">${t('common.cancel')}</button>
                    <button onClick=${handleCopy} className="px-5 sm:px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none transition-all flex items-center justify-center gap-2">${t('common.copy_prompt')}</button>
                </footer>
            </div>
        </div>
    `;
};

const SidebarNav = React.memo(({ all, selectedCat, favoritesCount, liveCounts, t, onSurpriseMe, onCategorySelect }) => html`
    <${React.Fragment}>
        <button onClick=${onSurpriseMe} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-200 dark:border-amber-800 hover:bg-amber-100 mb-2 w-full text-left font-bold transition-all shadow-sm"><${Wand2} className="w-5 h-5" /><span className="flex-1 text-left">${t('common.surprise_me')}</span></button>
        <nav className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">${t('common.categories_label')}</p>
            ${CATEGORY_CONFIG.map(cat => {
                const active = selectedCat === cat.id;
                const count = cat.id === 'all' ? all.length || Object.values(promptCounts).reduce((a, b) => a + b, 0) : (cat.id === 'favorites' ? favoritesCount : liveCounts[cat.id] || 0);
                return html`<button key=${cat.id} onClick=${() => onCategorySelect(cat.id)} className=${'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ' + (active ? 'bg-coral/10 dark:bg-indigo-900/30 text-coral dark:text-indigo-300 font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800')}><${cat.icon} className="w-4 h-4" /><span className="flex-1 text-left">${t(cat.nameKey)}</span><span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-100 dark:bg-slate-800 tabular-nums">${count}</span></button>`;
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
    const [view, setView] = useState(() => localStorage.getItem('viewMode') || 'grid');
    const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState(() => { try { return JSON.parse(localStorage.getItem('favPrompts') || '[]'); } catch { return []; } });
    const favoritesSet = useMemo(() => new Set(favorites), [favorites]);
    const toggleFavorite = useCallback((id) => setFavorites(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]), []);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isZenMode, setIsZenMode] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('theme') || 'light');
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
            };
            if ('requestIdleCallback' in window) requestIdleCallback(() => loadRemaining()); else setTimeout(loadRemaining, 1000);
        };
        load();
    }, [fuse]);

    useGlobalShortcuts({
        onSearch: () => searchInputRef.current?.focus(),
        onThemeToggle: () => setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark'),
        onSidebarToggle: () => setIsSidebarOpen(prev => !prev),
        onScratchpad: () => setIsScratchpadOpen(prev => !prev),
        onHelp: () => setShowShortcuts(prev => !prev),
        onEscape: () => { setSelPrompt(null); setIsSidebarOpen(false); setIsScratchpadOpen(false); setIsSettingsOpen(false); setShowShortcuts(false); }
    });

    useEffect(() => { document.documentElement.classList.toggle('dark', currentTheme === 'dark'); localStorage.setItem('theme', currentTheme); }, [currentTheme]);

    useEffect(() => {
        let res = debouncedQuery ? fuse.search(debouncedQuery).map(r => r.item) : all;
        if (selectedCat !== 'all') { if (selectedCat === 'favorites') res = res.filter(p => favoritesSet.has(p.id)); else res = res.filter(p => p.category === selectedCat); }
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
        setSelPrompt(prompt);
        if (prompt) {
            addToHistory({ id: prompt.id, title: prompt.title, type: 'prompt', url: 'index.html#/prompt/' + prompt.id });
        }
    }, []);

    const deepLinkHandled = useRef(false);
    useEffect(() => {
        if (deepLinkHandled.current || all.length === 0) return;
        deepLinkHandled.current = true;
        const match = window.location.hash.match(/^#\/prompt\/(.+)$/);
        if (match) {
            const prompt = all.find(p => String(p.id) === match[1]);
            if (prompt) handlePromptSelection(prompt);
        }
    }, [all, handlePromptSelection]);

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

    if (!isReady) return html`<div className="fixed inset-0 bg-slate-50 dark:bg-slate-900 flex items-center justify-center"><${Loader2} className="w-12 h-12 animate-spin text-indigo-500" /></div>`;

    const itemsPerPage = view === 'table' ? 40 : (view === 'compact' ? 24 : 12);
    const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return html`
        <div className="min-h-screen bg-opal-bg dark:bg-slate-900 flex flex-col font-sans">
            <${Header} currentTheme=${currentTheme} onThemeToggle=${() => setCurrentTheme(t => t === 'dark' ? 'light' : 'dark')} onMenuClick=${() => setIsSidebarOpen(true)} onScratchpad=${() => setIsScratchpadOpen(true)} onSettingsClick=${() => setIsSettingsOpen(true)} activePage="prompts" isZenMode=${isZenMode} onToggleZen=${() => setIsZenMode(!isZenMode)} />
            <div className="flex-1 max-w-[1600px] mx-auto w-full flex">
                <${SidebarWrapper} isOpen=${isSidebarOpen} onClose=${() => setIsSidebarOpen(false)} isZenMode=${isZenMode}>
                    <${SidebarNav} all=${all} selectedCat=${selectedCat} favoritesCount=${favorites.length} liveCounts=${liveCounts} t=${t} onSurpriseMe=${handleSurpriseMe} onCategorySelect=${handleCategorySelect} />
                <//>
                <main className="flex-1 p-4 md:p-8 min-w-0">
                    <div className="mb-8 relative max-w-2xl text-left shadow-sm rounded-2xl transition-all focus-within:shadow-level-2 focus-within:ring-2 focus-within:ring-coral/20">
                        <${Search} className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-light w-5 h-5 pointer-events-none" />
                        <input ref=${searchInputRef} type="text" value=${query} onChange=${e => setQuery(e.target.value)} placeholder=${t('common.search_prompts')} className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-mist dark:border-slate-700 dark:bg-slate-800 dark:text-white outline-none focus:border-coral transition-colors text-charcoal placeholder:text-stone-light text-base" />
                    </div>
                    ${selectedTag && html`
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">${t('common.filtered_by') || 'Filtered by'}:</span>
                            <button onClick=${() => setSelectedTag(null)} className="flex items-center gap-1.5 px-3 py-1 bg-coral/10 text-coral dark:bg-indigo-900/40 dark:text-indigo-300 rounded-xl text-xs font-black uppercase tracking-tighter border border-coral/20 dark:border-indigo-700 hover:bg-coral hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all">
                                ${selectedTag}
                                <${X} className="w-3 h-3" />
                            </button>
                        </div>
                    `}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-6">
                        <div className="text-left w-full sm:w-auto">
                            <h1 className="text-3xl sm:text-4xl font-[600] tracking-tight text-charcoal dark:text-white truncate text-left tabular-nums mb-2">${t(CATEGORY_CONFIG.find(c => c.id === selectedCat)?.nameKey) || "Prompts"}</h1>
                            <p className="text-stone-light dark:text-slate-400 text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.08em]">${filtered.length} PROMPT TEMPLATES</p>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                            <div className="flex bg-opal-sidebar dark:bg-slate-800 p-1.5 rounded-xl border border-mist dark:border-slate-700">
                                <button onClick=${() => setView('grid')} className=${'p-2 rounded-lg transition-all ' + (view === 'grid' ? 'bg-coral/10 text-coral shadow-sm' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('common.view_grid')}><${LayoutGrid} className="w-4 h-4" /></button>
                                <button onClick=${() => setView('compact')} className=${'p-2 rounded-lg transition-all ' + (view === 'compact' ? 'bg-coral/10 text-coral shadow-sm' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('common.view_list')}><${List} className="w-4 h-4" /></button>
                                <button onClick=${() => setView('table')} className=${'p-2 rounded-lg transition-all ' + (view === 'table' ? 'bg-coral/10 text-coral shadow-sm' : 'text-stone-light hover:text-stone hover:bg-white')} title="Table View"><${TableProperties} className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </div>
                    ${isLoading ? html`<div className="py-20 text-center"><${Loader2} className="animate-spin mx-auto mb-4" /> Loading...</div>` : html`
                        <${React.Fragment}>
                            <div className=${view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col'}>
                                ${view === 'table' && html`<div className="sticky top-16 z-20 flex items-center gap-3 sm:gap-4 bg-slate-100 dark:bg-slate-900 px-3 sm:px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-slate-800"><div className="w-6 sm:w-8 shrink-0 text-left">#</div><div className="w-6 shrink-0 flex justify-center" title=${t('common.table_favorite')}><${Heart} className="w-3.5 h-3.5" /></div><button onClick=${() => handleSort('title')} className="flex-1 text-left flex items-center gap-1 hover:text-indigo-500 transition-colors uppercase">${t('common.table_title')} <${SortIcon} colKey="title" /></button><button onClick=${() => handleSort('category')} className="hidden lg:flex w-32 shrink-0 items-center gap-1 hover:text-indigo-500 transition-colors uppercase">${t('common.table_category')} <${SortIcon} colKey="category" /></button><div className="hidden md:flex w-40 shrink-0 uppercase">${t('common.table_tags')}</div><div className="w-10 sm:w-24 shrink-0 text-right sm:pr-4 uppercase">${t('common.table_actions')}</div></div>`}
                                ${paginated.map((p, i) => html`<${PromptItem} key=${p.id} prompt=${p} viewMode=${view} onSelect=${handlePromptSelection} showToast=${showToast} favorites=${favoritesSet} toggleFavorite=${toggleFavorite} t=${t} onTagClick=${(tag) => setSelectedTag(prev => prev === tag ? null : tag)} selectedTag=${selectedTag} index=${i} currentPage=${page} itemsPerPage=${itemsPerPage} />`)}
                            </div>
                            <${Pagination} currentPage=${page} totalPages=${Math.ceil(filtered.length / itemsPerPage)} onPageChange=${setPage} totalItems=${filtered.length} itemsPerPage=${itemsPerPage} t=${t} />
                        <//>
                    `}
                </main>
            </div>
            <${Toast} toast=${toast} />
            <${Scratchpad} isOpen=${isScratchpadOpen} onClose=${() => setIsScratchpadOpen(false)} />
            <${SettingsModal} isOpen=${isSettingsOpen} onClose=${() => setIsSettingsOpen(false)} />
            <${ShortcutsModal} isOpen=${showShortcuts} onClose=${() => setShowShortcuts(false)} />
            ${selPrompt && html`<${PromptModal} prompt=${selPrompt} onClose=${() => setSelPrompt(null)} showToast=${showToast} favorites=${favoritesSet} toggleFavorite=${toggleFavorite} t=${t} />`}
            <${Footer} isZenMode=${isZenMode} />
        </div>
    `;
};

const { ErrorBoundary } = AINOW['src/ErrorBoundary'];

const root = createRoot(document.getElementById('root'));
root.render(html`<${ErrorBoundary}><${App} /><//>`);
})();