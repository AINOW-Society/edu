(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/components'] = AINOW['src/components'] || {};
Object.assign(__exports, AINOW['src/hooks']);
const { useState, useEffect, useRef, useMemo } = React;

const { Globe, Sun, Moon, Menu, X, Github, Linkedin, Keyboard, Ghost, History, Check, Play, Copy, Share2, Heart, CheckCircle, Wand2, NotebookPen, Plus, Folder, Trash2, Save, Maximize2, Minimize2, Settings, Download, Upload, Square, CircleHelp, ChevronLeft, ChevronRight, GitMerge, Cpu, BookOpen, Info, Loader2, Sparkles, SearchX } = lucide;
const { loadLocale, getCachedLocale } = AINOW['locales/locales'];
const { LANGUAGES, NAV_CONFIG, NAV_LINKS, CHATBOTS, APP_VERSION } = AINOW['src/config'];
const { copyTextToClipboard } = AINOW['src/utils'];

const { useLanguage, useToast, useGlobalShortcuts } = AINOW['src/hooks'];

const { Header } = AINOW['src/components/layout/Header'];
const { SidebarWrapper } = AINOW['src/components/layout/Sidebar'];
const { Footer } = AINOW['src/components/layout/Footer'];

const html = htm.bind(React.createElement);

const addToHistory = (item) => {
    try {
        let history = JSON.parse(localStorage.getItem('ainow_recent_items') || '[]');
        history = history.filter(i => i.id !== item.id);
        history.unshift(item);
        history = history.slice(0, 8);
        localStorage.setItem('ainow_recent_items', JSON.stringify(history));
        window.dispatchEvent(new Event('historyUpdated'));
    } catch (e) { console.error(e); }
};

const Pagination = ({ currentPage, totalPages, onPageChange, totalItems, itemsPerPage, t, itemType = 'items', simple = false }) => {
    const pageNumbers = useMemo(() => {
        const pages = [];
        if (totalPages <= 7) for (let i = 1; i <= totalPages; i++) pages.push(i);
        else {
            pages.push(1);
            if (currentPage > 3) pages.push('...');
            const start = Math.max(2, currentPage - 1), end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) pages.push(i);
            if (currentPage < totalPages - 2) pages.push('...');
            pages.push(totalPages);
        }
        return pages;
    }, [currentPage, totalPages]);

    const pageButtons = pageNumbers.map((p, i) => {
        if (typeof p === 'string') return html`<span key=${i} className="w-9 h-9 flex items-center justify-center text-slate-400">...</span>`;
        const active = currentPage === p;
        const btnClass = "w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold transition-colors " + (active ? 'bg-coral text-white shadow-coral-glow' : 'text-stone hover:bg-mist dark:text-slate-300');
        return html`<button key=${i} onClick=${() => { onPageChange(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className=${`no-print ${btnClass}`}>${p}</button>`;
    });

    const showingStart = (currentPage - 1) * itemsPerPage + 1;
    const showingEnd = Math.min(currentPage * itemsPerPage, totalItems);

    return html`
        <nav className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 no-print">
             ${simple
            ? html`<p className="text-sm text-slate-600 dark:text-slate-400">Total: <span className="font-bold">${totalItems}</span> ${itemType}</p>`
            : html`<p className="text-sm text-slate-600 dark:text-slate-400">
                    ${t('common.showing')} <span className="font-bold">${showingStart}</span> - <span className="font-bold">${showingEnd}</span> ${t('common.of')} <span className="font-bold">${totalItems}</span>
                </p>`
        }
            <div className="flex items-center gap-1">
                <button onClick=${() => onPageChange(currentPage - 1)} disabled=${currentPage === 1} className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-50"><${ChevronLeft} className="w-4 h-4"/></button>
                ${pageButtons}
                <button onClick=${() => onPageChange(currentPage + 1)} disabled=${currentPage === totalPages} className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-50"><${ChevronRight} className="w-4 h-4"/></button>
            </div>
        </nav>
    `;
};

const Toast = ({ toast }) => {
    return html`
        <div className=${`fixed bottom-10 left-1/2 -translate-x-1/2 z-[250] transition-all duration-500 ease-out no-print ${toast.show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90 pointer-events-none'}`}>
            <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 font-black text-sm border border-white/10 backdrop-blur-xl">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <${CheckCircle} className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="tracking-tighter uppercase whitespace-nowrap">${toast.msg}</span>
            </div>
        </div>
    `;
};

const EmptyState = ({ message, icon, onClear }) => {
    const Icon = icon || Ghost;
    return html`
        <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-4">
                <${Icon} className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm mx-auto mb-6">${message}</p>
            ${onClear && html`
                <button onClick=${onClear} className="px-5 py-2 bg-coral text-white text-xs font-bold rounded-full shadow-coral-glow hover:bg-coral-hover transition-all flex items-center gap-2">
                    <${SearchX} className="w-3.5 h-3.5" /> Clear All Filters
                </button>
            `}
        </div>
    `;
};

const SettingsModal = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('data');
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => document.body.style.overflow = '';
    }, [isOpen]);

    if (!isOpen) return null;

    const handleExport = () => {
        const data = {};
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k.startsWith('ainow_') || k.startsWith('fav') || k === 'language' || k === 'theme') {
                data[k] = localStorage.getItem(k);
            }
        }
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        const date = new Date().toISOString().split('T')[0];
        link.download = `ainow-backup-${date}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleImport = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const data = JSON.parse(ev.target.result);
                Object.keys(data).forEach(k => localStorage.setItem(k, data[k]));
                alert(t('settings.imported_success'));
                window.location.reload();
            } catch (err) { alert("Invalid backup file."); }
        };
        reader.readAsText(file);
    };

    const handleReset = () => {
        if (confirm(t('settings.reset_confirm'))) {
            localStorage.clear();
            window.location.reload();
        }
    };

    return html`
        <div className="fixed inset-0 bg-black/60 z-[300] flex items-center justify-center p-4 animate-fade-in no-print" onClick=${onClose}>
            <div className="bg-opal-surface dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl border border-mist dark:border-slate-800 overflow-hidden animate-modal-in flex flex-col max-h-[85vh]" onClick=${e => e.stopPropagation()}>
                <header className="p-4 border-b border-mist dark:border-slate-800 flex justify-between items-center bg-opal-bg/50 dark:bg-slate-900/50">
                    <h3 className="font-bold text-charcoal dark:text-white flex items-center gap-2">
                        <${Settings} className="w-4 h-4" /> ${t('settings.title')}
                    </h3>
                    <button onClick=${onClose}><${X} className="w-5 h-5 text-stone-light hover:text-charcoal" /></button>
                </header>
                <div className="flex border-b border-mist dark:border-slate-800">
                    <button onClick=${() => setActiveTab('data')} className=${`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'data' ? 'border-coral text-coral' : 'border-transparent text-stone hover:text-charcoal dark:text-slate-400'}`}>${t('settings.data')}</button>
                </div>
                <div className="p-6 overflow-y-auto">
                    ${activeTab === 'data' && html`
                        <div className="space-y-6">
                            <div className="p-4 bg-opal-bg dark:bg-teal-900/20 rounded-xl border border-mist dark:border-teal-800/50">
                                <h4 className="font-bold text-charcoal dark:text-teal-300 mb-2 flex items-center gap-2"><${Download} className="w-4 h-4" /> ${t('settings.export_title')}</h4>
                                <p className="text-xs text-stone dark:text-teal-200 mb-4">${t('settings.export_text')}</p>
                                <button onClick=${handleExport} className="w-full py-2 bg-coral hover:bg-coral-hover text-white rounded-lg text-xs font-bold transition-colors shadow-coral-glow">${t('settings.export_btn')}</button>
                            </div>

                            <div className="p-4 bg-opal-surface dark:bg-slate-800 rounded-xl border border-mist dark:border-slate-700">
                                <h4 className="font-bold text-charcoal dark:text-white mb-2 flex items-center gap-2"><${Upload} className="w-4 h-4" /> ${t('settings.import_title')}</h4>
                                <p className="text-xs text-stone dark:text-slate-400 mb-4">${t('settings.import_text')}</p>
                                <button onClick=${() => fileInputRef.current.click()} className="w-full py-2 bg-white dark:bg-slate-700 border border-mist dark:border-slate-600 text-stone dark:text-slate-200 rounded-lg text-xs font-bold hover:bg-opal-bg dark:hover:bg-slate-600 transition-colors">${t('settings.import_btn')}</button>
                                <input type="file" autoRef=${fileInputRef} onChange=${handleImport} className="hidden" accept=".json" />
                            </div>

                            <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                                <h4 className="font-bold text-red-900 dark:text-red-400 mb-2 flex items-center gap-2"><${Trash2} className="w-4 h-4" /> ${t('settings.reset_title')}</h4>
                                <p className="text-xs text-red-800 dark:text-red-300 mb-4">${t('settings.reset_text')}</p>
                                <button onClick=${handleReset} className="w-full py-2 bg-white border border-red-200 text-red-600 rounded-lg text-xs font-bold hover:bg-red-50 transition-colors">${t('settings.reset_btn')}</button>
                            </div>
                        </div>
                    `}
                </div>
                <div className="p-3 bg-opal-bg dark:bg-slate-900/50 border-t border-mist dark:border-slate-800 text-center">
                    <p className="text-[10px] text-stone-light dark:text-slate-600 font-mono tracking-widest">
                        v${APP_VERSION}
                    </p>
                </div>
            </div>
        </div>
    `;
};

const Scratchpad = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [content, setContent] = useState(() => localStorage.getItem('ainow_scratchpad') || '');

    useEffect(() => {
        if (isOpen) {
            const saved = localStorage.getItem('ainow_scratchpad') || '';
            if (saved !== content) setContent(saved);
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const val = e.target.value;
        setContent(val);
        localStorage.setItem('ainow_scratchpad', val);
    };

    const handleCopy = async () => {
        await copyTextToClipboard(content);
    };

    return html`
        <${React.Fragment}>
            <div className=${`fixed inset-y-0 right-0 w-full sm:w-96 bg-opal-surface dark:bg-slate-900 shadow-level-3 transform transition-transform duration-300 z-[280] border-l border-mist dark:border-slate-800 flex flex-col no-print ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 border-b border-mist dark:border-slate-800 flex justify-between items-center bg-opal-bg dark:bg-slate-900">
                    <h3 className="font-black flex items-center gap-2 dark:text-white text-charcoal"><${NotebookPen} className="w-4 h-4" /> ${t('scratchpad.title')}</h3>
                    <div className="flex items-center gap-2">
                        <button onClick=${handleCopy} className="p-1.5 hover:bg-opal-surface dark:hover:bg-slate-800 rounded text-stone hover:text-coral transition-colors" title="Copy All"><${Copy} className="w-4 h-4" /></button>
                        <button onClick=${onClose} className="p-1.5 hover:bg-opal-surface dark:hover:bg-slate-800 rounded text-stone hover:text-coral transition-colors"><${X} className="w-4 h-4" /></button>
                    </div>
                </div>
                <textarea
                    className="flex-1 p-4 resize-none outline-none bg-opal-surface dark:bg-slate-900 dark:text-slate-200 font-mono text-sm leading-relaxed text-charcoal placeholder:text-stone-light"
                    placeholder=${t('scratchpad.placeholder')}
                    value=${content}
                    onChange=${handleChange}
                ></textarea>
                <div className="p-2 border-t border-mist dark:border-slate-800 text-[10px] text-center text-stone-light bg-opal-bg dark:bg-slate-900">
                    ${t('scratchpad.footer')}
                </div>
            </div>
            ${isOpen && html`<div className="fixed inset-0 bg-black/20 z-[275] backdrop-blur-[1px] no-print" onClick=${onClose}></div>`}
        <//>
    `;
};

const ActionButtons = ({
    text,
    title,
    isFavorite,
    onToggleFavorite,
    onShare,
    showToast,
    showPlay = true,
    showCopy = true,
    showShare = true,
    showFavorite = true,
    customClass = "",
    size = 4
}) => {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) setIsMenuOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.addEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCopy = async (e) => {
        e.stopPropagation();
        if (await copyTextToClipboard(text)) {
            setIsCopied(true);
            if (showToast) showToast(t('common.copied_success'));
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    const handleShare = async (e) => {
        e.stopPropagation();
        if (onShare) {
            onShare();
        } else {
            const url = window.location.href;
            if (navigator.share) {
                try { await navigator.share({ title: title || 'AINOW', url }); return; } catch (err) { }
            }
            if (await copyTextToClipboard(url)) {
                if (showToast) showToast(t('common.copied_success'));
            }
        }
    };

    const handleScratchpadAdd = (e) => {
        e.stopPropagation();
        const current = localStorage.getItem('ainow_scratchpad') || '';
        const newContent = current ? current + '\n\n' + text : text;
        localStorage.setItem('ainow_scratchpad', newContent);
        if (showToast) showToast(t('common.added_success'));
    };

    const botGrid = CHATBOTS.map(bot => html`
        <button key=${bot.name} onClick=${(e) => {
            e.stopPropagation();
            setIsMenuOpen(false);
            window.open(bot.url + encodeURIComponent(text), '_blank');
        }} className="w-full text-left px-3 py-2 text-xs text-stone hover:bg-mist dark:text-slate-300 dark:hover:bg-slate-700/50 transition-colors flex items-center gap-2">
            ${bot.name}
        </button>
    `);

    const buttonClass = `p-2 rounded-full transition-all hover:bg-opal-bg hover:scale-110 min-w-[32px] min-h-[32px] flex items-center justify-center `;

    return html`
        <div className=${`flex items-center gap-2 no-print ${customClass}`}>
            ${showFavorite && html`
                <button onClick=${(e) => { e.stopPropagation(); onToggleFavorite(); }} className=${buttonClass + (isFavorite ? 'text-coral' : 'text-stone-light hover:text-coral')} title=${t('common.favorites')}>
                    <${Heart} className=${`w-${size} h-${size}`} fill=${isFavorite ? 'currentColor' : 'none'} />
                </button>
            `}

            <button onClick=${handleScratchpadAdd} className=${buttonClass + "text-stone-light hover:text-coral"} title="Add to Scratchpad">
                <${NotebookPen} className=${`w-${size} h-${size}`} />
            </button>

            ${showCopy && html`
                <button onClick=${handleCopy} className=${buttonClass + "text-stone-light hover:text-coral"} title=${t('common.copy')}>
                    ${isCopied ? html`<${Check} className=${`w-${size} h-${size} text-emerald-500`} />` : html`<${Copy} className=${`w-${size} h-${size}`} />`}
                </button>
            `}

            ${showShare && html`
                <button onClick=${handleShare} className=${buttonClass + "text-stone-light hover:text-coral"} title=${t('common.share')}>
                    <${Share2} className=${`w-${size} h-${size}`} />
                </button>
            `}

            ${showPlay && html`
                <div className="relative" ref=${menuRef} onClick=${e => e.stopPropagation()}>
                    <button onClick=${() => setIsMenuOpen(!isMenuOpen)} className=${buttonClass + "text-stone-light hover:text-coral"} title=${t('common.try_ai')}>
                        <${Play} className=${`w-${size} h-${size}`} />
                    </button>
                    ${isMenuOpen && html`
                        <div className="absolute right-0 bottom-full mb-2 w-32 bg-opal-surface dark:bg-slate-800 rounded-xl shadow-level-3 border border-mist dark:border-slate-700 z-50 py-1 animate-modal-in overflow-hidden">
                            ${botGrid}
                        </div>
                    `}
                </div>
            `}
        </div>
    `;
};

const { Logo } = AINOW['src/components/ui/Logo'];

const ShortcutsModal = ({ isOpen, onClose, extraShortcuts }) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => document.body.style.overflow = '';
    }, [isOpen]);

    if (!isOpen) return null;
    return html`
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in no-print" onClick=${onClose}>
            <div className="bg-opal-surface dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-level-3 border border-mist dark:border-slate-800 overflow-hidden animate-modal-in" onClick=${e => e.stopPropagation()}>
                <header className="p-4 border-b border-mist dark:border-slate-800 flex justify-between items-center bg-opal-bg/50 dark:bg-slate-900/50">
                    <h3 className="font-bold text-charcoal dark:text-white flex items-center gap-2">
                        <${Keyboard} className="w-4 h-4" /> Keyboard Shortcuts
                    </h3>
                    <button onClick=${onClose}><${X} className="w-5 h-5 text-stone-light hover:text-charcoal" /></button>
                </header>
                <div className="p-6">
                    <div className="grid gap-4 text-sm">
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">Toggle this menu</span>
                            <span className="kbd">?</span>
                        </div>
                        ${extraShortcuts}
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">Toggle Scratchpad</span>
                            <div className="flex gap-1"><span className="kbd">Cmd</span><span className="kbd">K</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">Toggle Theme</span>
                            <div className="flex gap-1"><span className="kbd">Cmd</span><span className="kbd">J</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">Toggle Sidebar</span>
                            <div className="flex gap-1"><span className="kbd">Cmd</span><span className="kbd">\</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">Go to Prompts</span>
                            <div className="flex gap-1"><span className="kbd">g</span> <span className="text-stone-light text-[10px] self-center">then</span> <span className="kbd">p</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">Go to Agents</span>
                            <div className="flex gap-1"><span className="kbd">g</span> <span className="text-stone-light text-[10px] self-center">then</span> <span className="kbd">a</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">Go to Builder</span>
                            <div className="flex gap-1"><span className="kbd">g</span> <span className="text-stone-light text-[10px] self-center">then</span> <span className="kbd">b</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">Go to Resources</span>
                            <div className="flex gap-1"><span className="kbd">g</span> <span className="text-stone-light text-[10px] self-center">then</span> <span className="kbd">r</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const PageShell = ({ activePage, children, sidebarItems, isSidebarOpen: externalOpen, onSidebarToggle: setExternalOpen }) => {
    const { lang, setLang, t, isReady } = useLanguage();
    const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [internalOpen, setInternalOpen] = useState(false);
    const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isZenMode, setIsZenMode] = useState(false);

    const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;
    const setIsOpen = setExternalOpen !== undefined ? setExternalOpen : setInternalOpen;

    useGlobalShortcuts({
        onThemeToggle: () => setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark'),
        onSidebarToggle: () => setIsOpen(prev => !prev),
        onScratchpad: () => setIsScratchpadOpen(prev => !prev),
        onEscape: () => {
            setIsOpen(false);
            setIsScratchpadOpen(false);
            setIsSettingsOpen(false);
        }
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    if (!isReady) {
        return html`
            <div className="fixed inset-0 bg-opal-bg dark:bg-slate-900 flex items-center justify-center no-print">
                <${Loader2} className="w-12 h-12 animate-spin text-coral" />
            </div>
        `;
    }

    return html`
        <div className="min-h-screen bg-opal-bg dark:bg-slate-900 flex flex-col font-sans selection:bg-coral/30">
            <${Header}
                currentTheme=${currentTheme}
                onThemeToggle=${() => setCurrentTheme(t => t === 'dark' ? 'light' : 'dark')}
                onMenuClick=${() => setIsOpen(true)}
                onScratchpad=${() => setIsScratchpadOpen(true)}
                onSettingsClick=${() => setIsSettingsOpen(true)}
                activePage=${activePage}
                isZenMode=${isZenMode}
                onToggleZen=${() => setIsZenMode(!isZenMode)}
            />

            <div className="flex-1 max-w-[1600px] mx-auto w-full flex">
                <${SidebarWrapper} isOpen=${isOpen} onClose=${() => setIsOpen(false)} isZenMode=${isZenMode}>
                    ${sidebarItems}
                <//>

                <main className="flex-1 p-4 md:p-8 min-w-0">
                    ${children}
                </main>
            </div>

            <${Scratchpad} isOpen=${isScratchpadOpen} onClose=${() => setIsScratchpadOpen(false)} />
            <${SettingsModal} isOpen=${isSettingsOpen} onClose=${() => setIsSettingsOpen(false)} />
            <${Footer} isZenMode=${isZenMode} />
        </div>
    `;
};
  __exports.addToHistory = addToHistory;
  __exports.Pagination = Pagination;
  __exports.Toast = Toast;
  __exports.EmptyState = EmptyState;
  __exports.SettingsModal = SettingsModal;
  __exports.Scratchpad = Scratchpad;
  __exports.ActionButtons = ActionButtons;
  __exports.ShortcutsModal = ShortcutsModal;
  __exports.PageShell = PageShell;
  __exports.Header = Header;
  __exports.SidebarWrapper = SidebarWrapper;
  __exports.Footer = Footer;
  __exports.LANGUAGES = LANGUAGES;
  __exports.NAV_CONFIG = NAV_CONFIG;
  __exports.NAV_LINKS = NAV_LINKS;
  __exports.Logo = Logo;
})();
