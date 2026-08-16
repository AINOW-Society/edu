(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/components/layout/Header'] = AINOW['src/components/layout/Header'] || {};
const { useState } = React;

const { Sun, Moon, Menu, NotebookPen, Globe, Check, CircleHelp, GraduationCap, Home } = lucide;
const { NAV_CONFIG, LANGUAGES } = AINOW['src/config'];
const { useLanguage } = AINOW['src/hooks'];
const { Logo } = AINOW['src/components/ui/Logo'];

const html = htm.bind(React.createElement);


const LanguageSwitcher = ({ currentLang, setLang }) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeLang = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

    React.useEffect(() => {
        const close = () => setIsOpen(false);
        if (isOpen) window.addEventListener('click', close);
        return () => window.removeEventListener('click', close);
    }, [isOpen]);

    return html`
        <div className="relative no-print">
            <button onClick=${(e) => { e.stopPropagation(); setIsOpen(!isOpen); }} className="p-2 text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-1 min-w-[40px] min-h-[40px] justify-center" title="Change Language">
                <${Globe} className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase hidden sm:block">${activeLang.label}</span>
            </button>
            ${isOpen && html`
                <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-50 animate-fade-in" onClick=${e => e.stopPropagation()}>
                    ${LANGUAGES.map(lang => html`
                        <button 
                            key=${lang.code} 
                            onClick=${() => { setLang(lang.code); setIsOpen(false); }}
                            className=${`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 ${currentLang === lang.code ? 'text-teal-600 dark:text-teal-400 font-bold' : 'text-slate-600 dark:text-slate-300'}`}
                        >
                            <span>${lang.label}</span>
                            ${currentLang === lang.code && html`<${Check} className="w-3 h-3" />`}
                        </button>
                    `)}
                </div>
            `}
        </div>
    `;
};

const Header = ({ currentTheme, onThemeToggle, onMenuClick, activePage, onScratchpad, isZenMode, onToggleZen, onSettingsClick }) => {
    const { lang, setLang, t } = useLanguage();
    const themeIcon = currentTheme === 'dark' ? html`<${Sun} className="w-5 h-5" />` : html`<${Moon} className="w-5 h-5" />`;

    return html`
        <header className="sticky top-0 z-50 bg-opal-surface/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-mist dark:border-slate-800 no-print transition-colors duration-300">
            <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-hidden mr-2">
                    <a href="index.html" className="flex items-center gap-2 shrink-0">
                        <div className="w-8 h-8 rounded-full bg-coral text-white flex-shrink-0 flex items-center justify-center"><${Logo} /></div>
                        <div className="hidden xs:block sm:block">
                          <h1 className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-none">AINOW <span className="text-coral">OS</span></h1>
                          <p className="hidden md:block text-[10px] text-slate-500 font-medium">${t('footer.tagline')}</p>
                        </div>
                    </a>
                    <nav className=${isZenMode ? 'hidden' : 'hidden md:flex items-center ml-8 lg:ml-12 gap-8 h-16'}>
                        ${NAV_CONFIG.map(link => {
        const isActive = activePage === link.id;
        const className = isActive
            ? "h-full flex items-center gap-2 text-sm transition-all font-medium text-coral border-b-[3px] border-coral dark:text-coral dark:border-coral whitespace-nowrap"
            : "h-full flex items-center gap-2 text-sm transition-all font-medium text-stone hover:text-charcoal dark:text-slate-400 dark:hover:text-white whitespace-nowrap border-b-[3px] border-transparent";
        return html`
                                <a key=${link.id} href=${link.href} className=${className}>
                                    <${link.icon} className="w-4 h-4" /> ${t(link.labelKey)}
                                </a>
                            `;
    })}
                    </nav>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                    <button onClick=${onScratchpad} className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition-colors mr-1" title="Open Scratchpad (Cmd+K)">
                        <${NotebookPen} className="w-3.5 h-3.5" /> <span className="hidden sm:inline">${t('scratchpad.title')}</span>
                    </button>
                    
                    <${LanguageSwitcher} currentLang=${lang} setLang=${setLang} />
                    
                    <button onClick=${onThemeToggle} className="p-2 text-slate-500 hover:text-slate-700 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center" title="Toggle Theme (Cmd+J)">
                        ${themeIcon}
                    </button>

                    <!-- Field Guide (Help) Icon -->
                    <a href="help.html" className="p-2 text-slate-500 hover:text-coral transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center" title=${t('help.badge')}>
                        <${CircleHelp} className="w-5 h-5" />
                    </a>

                    <!-- Back to the platform chooser -->
                    <a href="../index.html" className="p-2 text-slate-500 hover:text-coral transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center" title=${t('platform.home')}>
                        <${Home} className="w-5 h-5" />
                    </a>

                    <!-- Cross-link to the Education half of the platform -->
                    <a href="../edu/index.html" className="p-2 text-slate-500 hover:text-coral transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center" title=${t('platform.education')}>
                        <${GraduationCap} className="w-5 h-5" />
                    </a>

                    <!-- Hamburger Menu - Strictly Mobile/Tablet Only -->
                    <button onClick=${onMenuClick} className=${`md:hidden p-2 text-slate-600 dark:text-slate-300 min-w-[40px] min-h-[40px] flex items-center justify-center ${isZenMode ? 'hidden' : ''}`} aria-label="Open menu">
                        <${Menu} className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    `;
};
  __exports.Header = Header;
})();