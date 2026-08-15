
// AINOW Agents Module
import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import htm from 'htm';
import Fuse from 'fuse.js';
import {
    Search, LayoutGrid, List, TableProperties,
    Settings2, Cpu, X, Wand2, Loader2,
    Heart, Copy, Share2, ExternalLink, ArrowUpDown, ArrowUp, ArrowDown
} from 'lucide-react';
import { agentsData } from '../data/data-agents.js';
import { Header, Footer, ShortcutsModal, EmptyState, SidebarWrapper, addToHistory, useLanguage, ActionButtons, useToast, Toast, useGlobalShortcuts, Scratchpad, SettingsModal, Pagination } from './components.js';
import { AGENT_CATEGORIES } from './config.js';
import { copyTextToClipboard } from './utils.js';

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
            className=${`group flex items-center gap-3 sm:gap-4 border-b border-mist dark:border-slate-800/50 px-3 sm:px-4 py-2 cursor-pointer hover:bg-opal-bg dark:hover:bg-indigo-900/20 transition-all ${index % 2 === 0 ? 'bg-opal-surface dark:bg-slate-800' : 'bg-opal-bg/30 dark:bg-slate-800/40'}`}
          >
            <div className="w-6 sm:w-8 shrink-0 text-[10px] font-bold text-slate-300 dark:text-slate-600 tabular-nums text-left">
                ${globalIndex}
            </div>
            <div className="w-6 shrink-0 flex justify-center" onClick=${e => e.stopPropagation()}>
               <button 
                 onClick=${() => toggleFavorite(agent.id)}
                 title=${isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                 className=${`transition-all hover:scale-110 min-w-[32px] min-h-[32px] flex items-center justify-center ${isFavorite ? 'text-red-500' : 'text-slate-300 dark:text-slate-600 hover:text-red-400'}`}
               >
                 <${Heart} className="w-4 h-4" fill=${isFavorite ? 'currentColor' : 'none'} />
               </button>
            </div>
            <div className="flex-1 min-w-0 flex items-center gap-2">
              <span className="font-black text-xs text-charcoal dark:text-slate-200 truncate group-hover:text-coral transition-colors text-left uppercase tracking-tight">
                ${agent.name}
              </span>
              ${hasCustomization && html`
                <div title="Editable Template" className="text-indigo-500 dark:text-indigo-400 shrink-0">
                   <${Wand2} className="w-3.5 h-3.5" />
                </div>
              `}
            </div>
            <div className="hidden lg:flex w-32 shrink-0 items-center">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest truncate">
                    ${agent.category}
                </span>
            </div>
            <div className="w-10 sm:w-24 shrink-0 flex items-center justify-end gap-0.5 sm:opacity-0 group-hover:opacity-100 transition-all" onClick=${e => e.stopPropagation()}>
                <button onClick=${handleQuickCopy} className="p-2 text-stone-light hover:text-coral transition-colors" title="Quick Copy Text"><${Copy} className="w-3.5 h-3.5" /></button>
                <button onClick=${handleShare} className="hidden sm:block p-2 text-stone-light hover:text-coral transition-colors" title="Share Link"><${Share2} className="w-3.5 h-3.5" /></button>
                <button onClick=${() => onSelect(agent)} className="hidden sm:block p-2 text-stone-light hover:text-coral transition-colors" title="Open and Configure"><${ExternalLink} className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        `;
    }

    if (viewMode === 'compact') {
        return html`
            <div onClick=${() => onSelect(agent)} className="group flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 bg-opal-surface dark:bg-slate-800 border-b border-mist dark:border-slate-700 p-4 transition-all cursor-pointer hover:bg-opal-bg dark:hover:bg-slate-700/50">
                <div className="flex-1 min-w-0 text-left">
                    <h3 className="font-black text-charcoal dark:text-slate-100 text-sm truncate flex items-center gap-2 uppercase tracking-tight">
                        ${agent.name}
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
            <div className="flex justify-between items-start mb-4" onClick=${e => e.stopPropagation()}>
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
    const [vals, setVals] = useState({});
    const firstInputRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = '';
    }, []);

    useEffect(() => {
        setTimeout(() => firstInputRef.current?.focus(), 300);
    }, []);

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

    const handleCopy = async () => { if (await copyTextToClipboard(getFinalText())) showToast(t('common.copied_success')); };

    const inputs = placeholders.map((p, i) => {
        const rawContent = p.replace(/[\[\]]/g, '');
        const parts = rawContent.split(':');
        const label = parts[0] || 'Field';
        const options = parts.length > 1 ? parts[1].split('|') : null;
        const isEmpty = !vals[p];

        return html`
            <div key=${p} className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider text-left block">${label}</label>
                ${options ? html`
                    <select ref=${i === 0 ? firstInputRef : null} value=${vals[p] || ''} onChange=${e => setVals({ ...vals, [p]: e.target.value })} className=${`w-full bg-slate-50 dark:bg-slate-900 border ${isEmpty ? 'border-slate-200 dark:border-slate-700' : 'border-indigo-500'} rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white cursor-pointer`}><option value="" disabled>Select ${label}...</option>${options.map(opt => html`<option key=${opt} value=${opt}>${opt}</option>`)}</select>
                ` : html`
                    <textarea ref=${i === 0 ? firstInputRef : null} value=${vals[p] || ''} onChange=${e => setVals({ ...vals, [p]: e.target.value })} placeholder=${'Enter ' + label.toLowerCase() + '...'} rows="2" className=${`w-full bg-slate-50 dark:bg-slate-900 border ${isEmpty ? 'border-slate-200 dark:border-slate-700' : 'border-indigo-500'} rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white resize-none`} />
                `}
            </div>
        `;
    });

    const previewParts = useMemo(() => {
        const text = agent.instructions || '';
        const parts = text.split(/(\[.*?\])/g);
        return parts.map((part, i) => {
            if (placeholders.includes(part)) return html`<span key=${i} className="text-indigo-400 font-bold bg-indigo-900/30 px-1 rounded border border-indigo-500/30">${vals[part] || part}</span>`;
            if (part.startsWith('[') && part.endsWith(']')) return html`<span key=${i} className="text-emerald-600 dark:text-emerald-400 font-bold">${part}</span>`;
            return part;
        });
    }, [agent.instructions, vals, placeholders]);

    const isFavorite = favorites.includes(agent.id);

    return html`
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in no-print" onClick=${onClose}>
            <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-5xl shadow-xl h-[85vh] flex flex-col animate-modal-in overflow-hidden" onClick=${e => e.stopPropagation()}>
                <header className="p-4 sm:p-6 border-b dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="text-left">
                        <h2 className="text-base sm:text-xl font-black dark:text-white leading-none">${agent.name}</h2>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">${placeholders.length > 0 ? t('agents_ui.interactive_config') : t('agents_ui.static_config')}</p>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <${ActionButtons} text=${getFinalText()} title=${agent.name} itemId=${agent.id} isFavorite=${isFavorite} onToggleFavorite=${() => toggleFavorite(agent.id)} showToast=${showToast} showCopy=${true} showShare=${true} showPlay=${true} showFavorite=${true} />
                        <button onClick=${onClose} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"><${X} className="w-5 h-5" /></button>
                    </div>
                </header>
                <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                    ${placeholders.length > 0 ? html`<div className="w-full md:w-1/3 border-r dark:border-slate-700 p-4 sm:p-6 overflow-y-auto bg-white dark:bg-slate-800 no-scrollbar text-left"><h3 className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-widest mb-6">${t('agents_ui.customize_title')}</h3><div className="space-y-6">${inputs}</div><div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50"><p className="text-xs text-indigo-800 dark:text-indigo-200 leading-relaxed">${t('agents_ui.tip')}</p></div></div>` : null}
                    <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-slate-50 dark:bg-slate-900/50 no-scrollbar text-left"><h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">${t('agents_ui.preview_title')}</h3><div className="bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-mono text-[11px] sm:text-[13px] p-5 sm:p-8 rounded-2xl whitespace-pre-wrap leading-relaxed border border-slate-200 dark:border-slate-700 shadow-sm selection:bg-indigo-500/30 text-left">${previewParts}</div></div>
                </div>
                <footer className="p-4 sm:p-6 border-t dark:border-slate-700 flex justify-end gap-3 bg-white dark:bg-slate-800 items-center">
                    <button onClick=${onClose} className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all mr-auto text-left">${t('agents_ui.cancel')}</button>
                    <button onClick=${handleCopy} className="px-5 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-xl shadow-indigo-200 dark:shadow-none transition-all flex items-center justify-center gap-2">${t('agents_ui.copy_config')}</button>
                </footer>
            </div>
        </div>
    `;
};

const App = () => {
    const { lang, setLang, t, isReady } = useLanguage();
    const { toast, showToast } = useToast();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [viewMode, setViewMode] = useState(() => localStorage.getItem('agentViewMode') || 'grid');
    const [page, setPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [favorites, setFavorites] = useState(() => { try { return JSON.parse(localStorage.getItem('favAgents') || '[]'); } catch { return []; } });
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
    const [isZenMode, setIsZenMode] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
    const searchInputRef = useRef(null);

    const fuse = useMemo(() => new Fuse(agentsData, { keys: [{ name: 'name', weight: 0.7 }, { name: 'description', weight: 0.5 }, { name: 'instructions', weight: 0.3 }, { name: 'category', weight: 0.4 }], threshold: 0.3 }), []);

    useGlobalShortcuts({
        onSearch: () => searchInputRef.current?.focus(),
        onThemeToggle: () => setTheme(prev => prev === 'dark' ? 'light' : 'dark'),
        onSidebarToggle: () => setIsSidebarOpen(prev => !prev),
        onHelp: () => setShowShortcuts(prev => !prev),
        onScratchpad: () => setIsScratchpadOpen(prev => !prev),
        onEscape: () => { setSelectedAgent(null); setShowShortcuts(false); setIsSidebarOpen(false); setIsScratchpadOpen(false); setIsSettingsOpen(false); }
    });

    useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); localStorage.setItem('theme', theme); }, [theme]);
    useEffect(() => localStorage.setItem('favAgents', JSON.stringify(favorites)), [favorites]);
    useEffect(() => { localStorage.setItem('agentViewMode', viewMode); }, [viewMode]);

    useEffect(() => {
        if (!isReady) return;
        const handleHash = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#/agent/')) {
                const id = hash.replace('#/agent/', '');
                const found = agentsData.find(a => a.id === id);
                if (found) { setSelectedAgent(found); addToHistory({ id: found.id, title: found.name, type: 'agent', url: 'agents.html#/agent/' + found.id }); }
            } else if (hash.startsWith('#/share/')) {
                try {
                    const encoded = hash.replace('#/share/', '');
                    const decoded = decodeURIComponent(escape(atob(encoded)));
                    const sharedAgent = { id: 'shared-' + Date.now(), name: 'Shared Configuration', instructions: decoded, category: 'Shared', description: 'Custom AI Agent configuration shared via link.' };
                    setSelectedAgent(sharedAgent);
                } catch (e) { console.error("Failed to decode shared agent", e); }
            }
        };
        handleHash();
        window.addEventListener('hashchange', handleHash);
        return () => window.removeEventListener('hashchange', handleHash);
    }, [isReady]);

    const handleSelectAgent = useCallback((a) => {
        setSelectedAgent(a);
        if (a && !a.id.startsWith('shared')) { addToHistory({ id: a.id, title: a.name, type: 'agent', url: 'agents.html#/agent/' + a.id }); }
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

    if (!isReady) return html`<div className="fixed inset-0 bg-slate-50 dark:bg-slate-900 flex items-center justify-center"><${Loader2} className="w-12 h-12 animate-spin text-indigo-500" /></div>`;

    const itemsPerPage = viewMode === 'table' ? 40 : (viewMode === 'compact' ? 24 : 12);
    const paginated = filteredAgents.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    const totalPages = Math.ceil(filteredAgents.length / itemsPerPage);

    const categoryButtons = AGENT_CATEGORIES.map(cat => {
        const active = selectedCategory === cat.id;
        const count = catCounts[cat.id] || 0;
        return html`<button key=${cat.id} onClick=${() => { setSelectedCategory(cat.id); setPage(1); setIsSidebarOpen(false); window.location.hash = ''; }} className=${'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ' + (active ? 'bg-coral/10 dark:bg-indigo-900/30 text-coral dark:text-indigo-300 font-bold shadow-sm' : 'text-stone hover:bg-opal-sidebar/50 dark:text-slate-400 dark:hover:bg-slate-800')}><${cat.icon} className="w-4 h-4" /><span className="flex-1 text-left">${t(cat.nameKey)}</span><span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white dark:bg-slate-800 tabular-nums">${count}</span></button>`;
    });

    const agentList = paginated.map((a, i) => html`<${AgentItem} key=${a.id} agent=${a} onSelect=${handleSelectAgent} viewMode=${viewMode} showToast=${showToast} favorites=${favorites} toggleFavorite=${toggleFavorite} t=${t} index=${i} currentPage=${page} itemsPerPage=${itemsPerPage} />`);

    let pageTitle = t(AGENT_CATEGORIES.find(c => c.id === selectedCategory)?.nameKey) || t('agents_ui.title');

    return html`
        <div className="min-h-screen bg-opal-bg dark:bg-slate-900 flex flex-col">
            <${Header} onMenuClick=${() => setIsSidebarOpen(true)} onThemeToggle=${() => setTheme(theme === 'dark' ? 'light' : 'dark')} onScratchpad=${() => setIsScratchpadOpen(true)} onSettingsClick=${() => setIsSettingsOpen(true)} currentTheme=${theme} activePage="agents" isZenMode=${isZenMode} onToggleZen=${() => setIsZenMode(!isZenMode)} />
            <div className="flex-1 max-w-[1600px] mx-auto w-full flex">
                <${SidebarWrapper} isOpen=${isSidebarOpen} onClose=${() => setIsSidebarOpen(false)} isZenMode=${isZenMode}>
                    <button onClick=${() => handleSelectAgent(agentsData[Math.floor(Math.random() * agentsData.length)])} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 mb-2 w-full text-left font-bold transition-all"><${Wand2} className="w-5 h-5" /><span className="flex-1 text-left">${t('common.surprise_me')}</span></button>
                    <nav className="space-y-1"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Agent Types</p>${categoryButtons}</nav>
                <//>
                <main className="flex-1 p-4 md:p-8 min-w-0">
                    <div className="mb-8 relative max-w-2xl text-left shadow-sm rounded-2xl transition-all focus-within:shadow-level-2 focus-within:ring-2 focus-within:ring-coral/20">
                        <${Search} className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-light w-5 h-5 pointer-events-none" />
                        <input ref=${searchInputRef} type="text" value=${searchQuery} onChange=${e => { setSearchQuery(e.target.value); setPage(1); }} placeholder=${t('agents_ui.search_placeholder')} className="w-full bg-white dark:bg-slate-800 border-2 border-mist dark:border-slate-700 rounded-2xl py-4 pl-14 pr-4 outline-none focus:border-coral transition-colors dark:text-white shadow-sm text-charcoal text-base" />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-6"><div className="text-left w-full sm:w-auto"><h1 className="text-3xl sm:text-4xl font-[600] tracking-tight text-charcoal dark:text-white text-left tabular-nums mb-2">${pageTitle}</h1><p className="text-stone-light dark:text-slate-400 text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.08em] text-left">${filteredAgents.length} INTELLIGENCE ASSETS</p></div><div className="flex bg-opal-sidebar dark:bg-slate-900 p-1.5 rounded-xl border border-mist dark:border-slate-800"><button onClick=${() => setViewMode('grid')} className=${'p-2 rounded-lg transition-all ' + (viewMode === 'grid' ? 'bg-coral/10 text-coral shadow-sm' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('common.view_grid')}><${LayoutGrid} className="w-4 h-4" /></button><button onClick=${() => setViewMode('compact')} className=${'p-2 rounded-lg transition-all ' + (viewMode === 'compact' ? 'bg-coral/10 text-coral shadow-sm' : 'text-stone-light hover:text-stone hover:bg-white')} title=${t('common.view_list')}><${List} className="w-4 h-4" /></button><button onClick=${() => setViewMode('table')} className=${'p-2 rounded-lg transition-all ' + (viewMode === 'table' ? 'bg-coral/10 text-coral shadow-sm' : 'text-stone-light hover:text-stone hover:bg-white')} title="Table View"><${TableProperties} className="w-4 h-4" /></button></div></div>
                    ${paginated.length > 0 ? html`
                        <${React.Fragment}>
                            <div className=${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col'}>${viewMode === 'table' && html`<div className="sticky top-16 z-20 flex items-center gap-3 sm:gap-4 bg-slate-100 dark:bg-slate-900 px-3 sm:px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 dark:border-slate-800"><div className="w-8 shrink-0 text-left">#</div><div className="w-6 shrink-0 flex justify-center" title=${t('common.table_favorite')}><${Heart} className="w-3.5 h-3.5" /></div><button onClick=${() => handleSort('name')} className="flex-1 text-left flex items-center gap-1 hover:text-indigo-500 transition-colors uppercase">${t('common.table_name')} <${SortIcon} colKey="name" /></button><button onClick=${() => handleSort('category')} className="hidden lg:flex w-32 shrink-0 items-center gap-1 hover:text-indigo-500 transition-colors uppercase">${t('common.table_category')} <${SortIcon} colKey="category" /></button><div className="w-10 sm:w-24 shrink-0 text-right sm:pr-4 uppercase">${t('common.table_actions')}</div></div>`}${agentList}</div>
                            ${filteredAgents.length > itemsPerPage && html`<${Pagination} currentPage=${page} totalPages=${totalPages} onPageChange=${setPage} totalItems=${filteredAgents.length} itemsPerPage=${itemsPerPage} t=${t} itemType="agents" />`}
                        <//>
                    ` : html`<${EmptyState} message=${t('agents_ui.no_results')} icon=${Cpu} onClear=${() => { setSearchQuery(''); setSelectedCategory('all'); }} />`}
                </main>
            </div>
            <${Toast} toast=${toast} />
            <${Scratchpad} isOpen=${isScratchpadOpen} onClose=${() => setIsScratchpadOpen(false)} />
            <${SettingsModal} isOpen=${isSettingsOpen} onClose=${() => setIsSettingsOpen(false)} />
            ${selectedAgent && html`<${AgentModal} agent=${selectedAgent} onClose=${() => setSelectedAgent(null)} showToast=${showToast} t=${t} favorites=${favorites} toggleFavorite=${(id) => setFavorites(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id])} />`}
            <${ShortcutsModal} isOpen=${showShortcuts} onClose=${() => setShowShortcuts(false)} />
            <${Footer} isZenMode=${isZenMode} />
        </div>
    `;
};

const root = createRoot(document.getElementById('root'));
root.render(html`<${App} />`);
