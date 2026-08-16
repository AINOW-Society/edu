(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/about'] = AINOW['src/about'] || {};

const { useState, useEffect } = React;
const { createRoot } = ReactDOMClient;

const { ArrowRight, Users, ShieldCheck, Keyboard, Scale, Info, Briefcase } = lucide;
const { Header, Footer, ShortcutsModal, useLanguage, Scratchpad, SettingsModal, Toast, useToast,
        useGlobalShortcuts, SidebarWrapper } = AINOW['src/components'];
const { StaticPage } = AINOW['src/StaticPages'];

const html = htm.bind(React.createElement);

const ABOUT_NAV = [
    { id: 'about',         labelKey: 'resources.nav.about',         icon: Info },
    { id: 'services',      labelKey: 'resources.nav.services',      icon: Briefcase },
    { id: 'partners',      labelKey: 'resources.nav.partners',      icon: Users },
    { id: 'documents',     labelKey: 'resources.nav.ethical_ai',    icon: ShieldCheck },
    { id: 'policies',      labelKey: 'resources.nav.privacy',       icon: Scale },
    { id: 'accessibility', labelKey: 'resources.nav.accessibility', icon: Keyboard },
];

const AboutNav = ({ current, t, onPick }) => html`
    <nav className="p-4 space-y-1">
        <p className="px-3 pb-2 text-[10px] font-black uppercase tracking-widest text-stone-light dark:text-slate-500">
            ${t('nav.about')}
        </p>
        ${ABOUT_NAV.map(item => {
            const active = current === item.id;
            return html`
                <a key=${item.id} href=${'#/page/' + item.id} onClick=${onPick}
                   className=${'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ' +
                     (active
                        ? 'bg-coral/10 text-coral'
                        : 'text-stone hover:bg-opal-bg dark:text-slate-400 dark:hover:bg-slate-800')}>
                    <${item.icon} className="w-4 h-4 shrink-0" />
                    <span className="truncate">${t(item.labelKey)}</span>
                </a>`;
        })}
    </nav>
`;

const App = () => {
    const { t, isReady } = useLanguage();
    const { toast, showToast } = useToast();
    const [theme, setTheme] = useState(() =>
        (typeof localStorage !== 'undefined' && localStorage.getItem('theme') === 'dark') ? 'dark' : 'light');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isShortcuts, setIsShortcuts] = useState(false);
    const [isScratchpad, setIsScratchpad] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
    const [hash, setHash] = useState(() => window.location.hash || '#/page/about');

    useEffect(() => {
        const onHash = () => setHash(window.location.hash || '#/page/about');
        window.addEventListener('hashchange', onHash);
        if (!window.location.hash) window.location.hash = '#/page/about';
        return () => window.removeEventListener('hashchange', onHash);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        try { localStorage.setItem('theme', theme); } catch (e) {}
    }, [theme]);

    useGlobalShortcuts({
        onScratchpad: () => setIsScratchpad(v => !v),
        onShortcuts: () => setIsShortcuts(v => !v),
        onTheme: () => setTheme(v => (v === 'dark' ? 'light' : 'dark')),
    });

    const page = hash.split('/').pop() || 'about';

    if (!isReady) return null;

    return html`
        <div className="min-h-screen bg-opal-bg dark:bg-slate-900 transition-colors">
            <${Header}
                currentTheme=${theme}
                onThemeToggle=${() => setTheme(v => (v === 'dark' ? 'light' : 'dark'))}
                onMenuClick=${() => setIsSidebarOpen(true)}
                activePage="about"
                onScratchpad=${() => setIsScratchpad(true)}
                onSettingsClick=${() => setIsSettings(true)} />

            <div className="max-w-[1600px] mx-auto flex">
                <${SidebarWrapper} isOpen=${isSidebarOpen} onClose=${() => setIsSidebarOpen(false)} showOnDesktop=${false}>
                    <${AboutNav} current=${page} t=${t} onPick=${() => setIsSidebarOpen(false)} />
                <//>

                <div className="hidden lg:flex flex-col w-60 shrink-0 pt-8 px-2 border-r border-mist dark:border-slate-800 no-scrollbar overflow-y-auto">
                    <${AboutNav} current=${page} t=${t} onPick=${() => {}} />
                </div>

                <main className="flex-1 min-w-0">
                    <${StaticPage} page=${page} />
                </main>
            </div>

            <${Footer} />
            <${ShortcutsModal} isOpen=${isShortcuts} onClose=${() => setIsShortcuts(false)} />
            <${Scratchpad} isOpen=${isScratchpad} onClose=${() => setIsScratchpad(false)} />
            <${SettingsModal} isOpen=${isSettings} onClose=${() => setIsSettings(false)} />
            <${Toast} toast=${toast} />
        </div>
    `;
};

const root = document.getElementById('root');
if (root) createRoot(root).render(html`<${App} />`);

  __exports.App = App;
})();
