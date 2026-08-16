(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/components/layout/Sidebar'] = AINOW['src/components/layout/Sidebar'] || {};
const { useState, useEffect } = React;

const { X, History } = lucide;
const { NAV_CONFIG } = AINOW['src/config'];
const { useLanguage } = AINOW['src/hooks'];

const html = htm.bind(React.createElement);

const RecentlyViewed = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const load = () => {
            try {
                setItems(JSON.parse(localStorage.getItem('ainow_recent_items') || '[]'));
            } catch (e) { }
        };
        load();
        window.addEventListener('historyUpdated', load);
        return () => window.removeEventListener('historyUpdated', load);
    }, []);

    const clearHistory = (e) => {
        e.stopPropagation();
        try {
            localStorage.removeItem('ainow_recent_items');
            setItems([]);
            window.dispatchEvent(new Event('historyUpdated'));
        } catch (e) { console.error(e); }
    };

    if (items.length === 0) return null;

    return html`
        <div className="mt-8 pt-6 border-t border-mist dark:border-slate-800 no-print text-left">
            <div className="flex items-center justify-between px-3 mb-3">
                <h3 className="text-[10px] font-black text-stone-light uppercase tracking-widest flex items-center gap-2">
                    <${History} className="w-3 h-3" /> Recently Viewed
                </h3>
                <button onClick=${clearHistory} className="text-[10px] font-black text-stone-light hover:text-coral transition-colors uppercase tracking-widest" title="Clear History">
                    Clear
                </button>
            </div>
            <div className="space-y-1">
                ${items.map(item => {
        const dotColor = item.type === 'agent' ? 'bg-emerald-500' : (item.type === 'playbook' ? 'bg-amber-500' : 'bg-indigo-500');
        return html`
                        <a key=${item.id} href=${item.url} className="flex items-center gap-2 px-3 py-2 text-[11px] text-stone dark:text-slate-400 hover:bg-opal-bg dark:hover:bg-slate-800 rounded-xl group truncate block transition-all font-bold">
                            <span className=${`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColor} group-hover:scale-125 transition-transform`}></span>
                            <span className="truncate uppercase tracking-tight">${item.title}</span>
                        </a>
                    `;
    })}
            </div>
        </div>
    `;
};

const SidebarWrapper = ({ isOpen, onClose, children, showOnDesktop = true, isZenMode }) => {
    const { t } = useLanguage();
    const path = window.location.pathname;
    const activeId = NAV_CONFIG.find(l => path.includes(l.href))?.id || (path.endsWith('/') || path.includes('index') ? 'prompts' : '');

    const shouldShow = showOnDesktop && !isZenMode;

    return html`
    <${React.Fragment}>
        <div className=${`fixed inset-0 bg-black/50 z-[60] transition-opacity no-print ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${shouldShow ? ' md:hidden' : ''}`} onClick=${onClose}></div>
        <aside className=${`fixed top-0 bottom-0 right-0 z-[70] w-[80%] max-w-[320px] bg-opal-sidebar dark:bg-slate-900 transition-transform border-l border-mist dark:border-slate-800 flex flex-col no-print ${isOpen ? 'translate-x-0 shadow-level-3' : 'translate-x-full'} ${shouldShow ? ' md:sticky md:top-16 md:bottom-auto md:h-[calc(100vh-4rem)] md:translate-x-0 md:shadow-none md:z-30 md:left-0 md:right-auto md:border-l-0 md:border-r' : ' shadow-level-3'}`}>
            <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-center md:hidden mb-6">
                    <h2 className="font-bold dark:text-white text-lg">AINOW Platform</h2>
                    <button onClick=${onClose} className="p-2"><${X} className="w-6 h-6 dark:text-white" /></button>
                </div>
                
                <div className="md:hidden flex flex-col gap-1 mb-4 pb-4 border-b border-mist dark:border-slate-800">
                    <p className="text-[10px] font-black text-stone-light uppercase tracking-widest px-3 mb-2">Main Navigation</p>
                    ${NAV_CONFIG.map(link => {
        const isActive = link.id === activeId;
        return html`
                            <a key=${link.id} href=${link.href} className=${`flex items-center gap-3 px-3 py-3 rounded-xl text-xs transition-all uppercase tracking-widest font-black ${isActive ? 'bg-opal-bg border-l-4 border-coral shadow-sm text-coral' : 'text-stone hover:bg-opal-bg dark:text-slate-400 dark:hover:bg-slate-800'}`}>
                                <${link.icon} className="w-4 h-4" /> ${t(link.labelKey)}
                            </a>
                        `;
    })}
                </div>
                
                ${children}
                
                <${RecentlyViewed} />
            </div>
        </aside>
    <//>
    `;
};
  __exports.SidebarWrapper = SidebarWrapper;
})();