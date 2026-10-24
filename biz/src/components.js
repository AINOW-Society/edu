(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/components'] = AINOW['src/components'] || {};
Object.assign(__exports, AINOW['src/hooks']);
const { useState, useEffect, useRef, useMemo } = React;

const { X, Keyboard, Ghost, Check, Play, Copy, Share2, Heart, CheckCircle, NotebookPen, ChevronLeft, ChevronRight, SearchX } = lucide;
const { CHATBOTS } = AINOW['src/config'];
const { copyTextToClipboard } = AINOW['src/utils'];

const { useLanguage, useDialog, useStorageSync } = AINOW['src/hooks'];

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
        return html`<button type="button" key=${i} aria-current=${active?'page':undefined} aria-label=${t('release.page')+' '+p} onClick=${() => { onPageChange(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="ainow-page-control">${p}</button>`;
    });

    const showingStart = (currentPage - 1) * itemsPerPage + 1;
    const showingEnd = Math.min(currentPage * itemsPerPage, totalItems);

    return html`
        <nav className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 no-print">
             ${simple
            ? html`<p className="text-sm text-slate-600 dark:text-slate-400">${t('release.total')}: <span className="font-bold">${totalItems}</span> ${itemType}</p>`
            : html`<p className="text-sm text-slate-600 dark:text-slate-400">
                    ${t('common.showing')} <span className="font-bold">${showingStart}</span> - <span className="font-bold">${showingEnd}</span> ${t('common.of')} <span className="font-bold">${totalItems}</span>
                </p>`
        }
            <div className="flex items-center gap-1">
                <button type="button" aria-label=${t('release.previous_page')} onClick=${() => onPageChange(currentPage - 1)} disabled=${currentPage === 1} className="ainow-page-control"><${ChevronLeft}/></button>
                ${pageButtons}
                <button type="button" aria-label=${t('release.next_page')} onClick=${() => onPageChange(currentPage + 1)} disabled=${currentPage === totalPages} className="ainow-page-control"><${ChevronRight}/></button>
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
    const { t } = useLanguage();
    const Icon = icon || Ghost;
    return html`
        <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-4">
                <${Icon} className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm mx-auto mb-6">${message}</p>
            ${onClear && html`
                <button onClick=${onClear} className="px-5 py-2 bg-coral text-white text-xs font-bold rounded-full hover:bg-coral-hover transition-all flex items-center gap-2">
                    <${SearchX} className="w-3.5 h-3.5" /> ${t('smooth.clear_filters')}
                </button>
            `}
        </div>
    `;
};

const Scratchpad = ({ isOpen, onClose, value, onChange, maxLength }) => {
    const { t } = useLanguage();
    const panel = useRef(null), managed=typeof onChange==='function';
    const [content, setContent] = useState(() => { if(managed)return value||'';try { return localStorage.getItem('ainow_scratchpad') || ''; } catch (_) { return ''; } });
    const [persisted, setPersisted] = useState(true);
    useDialog(isOpen, onClose, panel);
    useStorageSync(managed ? [] : ['ainow_scratchpad'], values => {
        if (!managed) { setContent(values.ainow_scratchpad || ''); setPersisted(true); }
    });

    useEffect(() => {
        if (isOpen) {
            if(managed){setContent(value||'');setPersisted(true);return;}
            try { const saved = localStorage.getItem('ainow_scratchpad'); if (saved !== null && saved !== content) setContent(saved); } catch (_) { setPersisted(false); }
        }
    }, [isOpen, managed ? value : undefined]);

    const handleChange = (e) => {
        const val = e.target.value;
        setContent(val);
        if(managed){setPersisted(onChange(val)!==false);return;}
        try { localStorage.setItem('ainow_scratchpad', val); setPersisted(true); } catch (_) { setPersisted(false); }
    };

    const handleCopy = async () => {
        await copyTextToClipboard(content);
    };
    if (!isOpen) return null;

    return html`
        <${React.Fragment}>
            <div ref=${panel} role="dialog" aria-modal="true" aria-labelledby="ainow-scratchpad-title" tabIndex="-1" className="ainow-utility-dialog fixed inset-y-0 right-0 w-full sm:w-96 bg-opal-surface dark:bg-slate-900 shadow-level-3 z-[280] border-l border-mist dark:border-slate-800 flex flex-col no-print">
                <div className="p-4 border-b border-mist dark:border-slate-800 flex justify-between items-center bg-opal-bg dark:bg-slate-900">
                    <h3 id="ainow-scratchpad-title" className="font-semibold flex items-center gap-2 dark:text-white text-charcoal"><${NotebookPen} className="w-4 h-4" /> ${t('scratchpad.title')}</h3>
                    <div className="flex items-center gap-2">
                        <button type="button" onClick=${handleCopy} className="ainow-action-control" aria-label=${t('release.copy_all')} title=${t('release.copy_all')}><${Copy}/></button>
                        <button type="button" onClick=${onClose} className="ainow-action-control" aria-label=${t('release.close')} title=${t('release.close')}><${X}/></button>
                    </div>
                </div>
                <textarea
                    aria-label=${t('scratchpad.title')} data-dialog-focus
                    className="ainow-scratchpad-editor" maxLength=${maxLength}
                    placeholder=${t('scratchpad.placeholder')}
                    value=${content}
                    onChange=${handleChange}
                ></textarea>
                <div className="p-2 border-t border-mist dark:border-slate-800 text-[10px] text-center text-stone-light bg-opal-bg dark:bg-slate-900">
                    ${persisted?t('scratchpad.footer'):t('release.storage_unavailable')}
                </div>
            </div>
            ${isOpen && html`<div className="fixed inset-0 bg-black/20 z-[275] backdrop-blur-[1px] no-print" onClick=${onClose}></div>`}
        <//>
    `;
};

const PromptAiActions = ({lang,onChoose}) => {
    const root=useRef(null),choose=useRef(onChoose);choose.current=onChoose;
    useEffect(()=>AINOWPromptActions.bind(root.current,tool=>choose.current(tool)),[]);
    return html`<div ref=${root} className="prompt-dialog-apps" dangerouslySetInnerHTML=${{__html:AINOWPromptActions.render(lang)}}/>`;
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
        return () => document.removeEventListener('mousedown', handleClickOutside);
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
        try {
            const current = localStorage.getItem('ainow_scratchpad') || '';
            localStorage.setItem('ainow_scratchpad', current ? current + '\n\n' + text : text);
            if (showToast) showToast(t('common.added_success'));
        } catch (_) { if (showToast) showToast(t('release.storage_unavailable')); }
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

    const buttonClass = 'ainow-action-control ';

    return html`
        <div className=${`ainow-action-group flex items-center no-print ${customClass}`}>
            ${showFavorite && html`
                <button onClick=${(e) => { e.stopPropagation(); onToggleFavorite(); }} className=${buttonClass + (isFavorite ? 'text-coral' : 'text-stone-light hover:text-coral')} title=${t('common.favorites')}>
                    <${Heart} className=${`w-${size} h-${size}`} fill=${isFavorite ? 'currentColor' : 'none'} />
                </button>
            `}

            <button onClick=${handleScratchpadAdd} className=${buttonClass + "text-stone-light hover:text-coral"} title=${t('release.add_notes')}>
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


const ShortcutsModal = ({ isOpen, onClose, extraShortcuts }) => {
    const { t } = useLanguage(), panel = useRef(null);
    useDialog(isOpen, onClose, panel);

    if (!isOpen) return null;
    return html`
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in no-print" onClick=${onClose}>
            <div ref=${panel} role="dialog" aria-modal="true" aria-labelledby="business-shortcuts-title" tabIndex="-1" className="ainow-utility-dialog bg-opal-surface dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-level-3 border border-mist dark:border-slate-800 overflow-hidden animate-modal-in" onClick=${e => e.stopPropagation()}>
                <header className="p-4 border-b border-mist dark:border-slate-800 flex justify-between items-center bg-opal-bg/50 dark:bg-slate-900/50">
                    <h3 id="business-shortcuts-title" className="font-bold text-charcoal dark:text-white flex items-center gap-2">
                        <${Keyboard} className="w-4 h-4" /> ${t('release.shortcuts')}
                    </h3>
                    <button type="button" className="ainow-action-control" aria-label=${t('release.close')} onClick=${onClose}><${X}/></button>
                </header>
                <div className="p-6">
                    <div className="grid gap-4 text-sm">
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">${t('release.toggle_shortcuts')}</span>
                            <span className="kbd">?</span>
                        </div>
                        ${extraShortcuts}
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">${t('scratchpad.title')}</span>
                            <div className="flex gap-1"><span className="kbd">Ctrl / Cmd</span><span className="kbd">K</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">${t('release.toggle_theme')}</span>
                            <div className="flex gap-1"><span className="kbd">Ctrl / Cmd</span><span className="kbd">J</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">${t('release.toggle_navigation')}</span>
                            <div className="flex gap-1"><span className="kbd">Ctrl / Cmd</span><span className="kbd">\</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">${t('nav.prompts')}</span>
                            <div className="flex gap-1"><span className="kbd">g</span> <span className="text-stone-light text-[10px] self-center">${t('release.then')}</span> <span className="kbd">p</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">${t('nav.agents')}</span>
                            <div className="flex gap-1"><span className="kbd">g</span> <span className="text-stone-light text-[10px] self-center">${t('release.then')}</span> <span className="kbd">a</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">${t('nav.builder')}</span>
                            <div className="flex gap-1"><span className="kbd">g</span> <span className="text-stone-light text-[10px] self-center">${t('release.then')}</span> <span className="kbd">b</span></div>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-stone dark:text-slate-300">${t('release.help')}</span>
                            <div className="flex gap-1"><span className="kbd">g</span> <span className="text-stone-light text-[10px] self-center">${t('release.then')}</span> <span className="kbd">r</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

  __exports.addToHistory = addToHistory;
  __exports.Pagination = Pagination;
  __exports.Toast = Toast;
  __exports.EmptyState = EmptyState;
  __exports.Scratchpad = Scratchpad;
  __exports.ActionButtons = ActionButtons;
  __exports.PromptAiActions = PromptAiActions;
  __exports.ShortcutsModal = ShortcutsModal;
  __exports.Header = Header;
  __exports.SidebarWrapper = SidebarWrapper;
  __exports.Footer = Footer;
})();
