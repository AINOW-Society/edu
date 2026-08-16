(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/hooks'] = AINOW['src/hooks'] || {};
const { useState, useEffect, useCallback, useRef } = React;
const { loadLocale, getCachedLocale } = AINOW['locales/locales'];

const useLanguage = () => {
    const getStoredLangCode = () => {
        const stored = localStorage.getItem('language');
        return (stored && ['en', 'mk', 'sq', 'bs', 'sr'].includes(stored)) ? stored : 'en';
    };

    const [lang, setLangState] = useState(getStoredLangCode);
    const [dict, setDict] = useState(() => getCachedLocale(lang));
    const [isReady, setIsReady] = useState(lang === 'en');

    useEffect(() => {
        let mounted = true;

        const updateDict = async () => {
            const data = await loadLocale(lang);
            if (mounted && data) {
                setDict(data);
                setIsReady(true);
            }
        };

        updateDict();

        const handleEvent = () => {
            const current = getStoredLangCode();
            if (current !== lang) {
                setLangState(current);
                setIsReady(false);
            }
        };

        window.addEventListener('languageChange', handleEvent);
        window.addEventListener('storage', handleEvent);

        return () => {
            mounted = false;
            window.removeEventListener('languageChange', handleEvent);
            window.removeEventListener('storage', handleEvent);
        };
    }, [lang]);

    const setLang = (newLang) => {
        localStorage.setItem('language', newLang);
        setLangState(newLang);
        setIsReady(false);
        window.dispatchEvent(new Event('languageChange'));
    };

    const t = (key, options) => {
        const findInDict = (d, k) => {
            if (!d) return undefined;
            const parts = k.split('.');
            let val = d;
            for (const p of parts) {
                val = val?.[p];
                if (val === undefined) return undefined;
            }
            return val;
        };

        let value = findInDict(dict, key);
        if (value === undefined && lang !== 'en') {
            const enDict = getCachedLocale('en');
            value = findInDict(enDict, key);
        }

        if (typeof value === 'string' && options) {
            Object.keys(options).forEach(optKey => {
                const regex = new RegExp(`\\$\\{${optKey}\\}`, 'g');
                value = value.replace(regex, options[optKey]);
            });
        }

        return value || key;
    };

    return { lang, setLang, t, isReady };
};

const useToast = () => {
    const [toast, setToast] = useState({ msg: '', show: false, type: 'success' });
    const timerRef = useRef(null);

    useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

    const showToast = useCallback((msg, type = 'success') => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setToast({ msg, show: true, type });
        timerRef.current = setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
    }, []);

    return { toast, showToast };
};

const useGlobalShortcuts = ({ onSearch, onThemeToggle, onSidebarToggle, onHelp, onEscape, onScratchpad }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                if (e.key === 'Escape') {
                    e.target.blur();
                    if (onEscape) onEscape();
                }
                return;
            }

            if (e.key === '/' && onSearch) {
                e.preventDefault();
                onSearch();
            } else if (e.key === '?' && e.shiftKey && onHelp) {
                onHelp();
            } else if ((e.metaKey || e.ctrlKey) && e.key === 'k' && onScratchpad) {
                e.preventDefault();
                onScratchpad();
            } else if ((e.metaKey || e.ctrlKey) && e.key === 'j' && onThemeToggle) {
                e.preventDefault();
                onThemeToggle();
            } else if ((e.metaKey || e.ctrlKey) && e.key === '\\' && onSidebarToggle) {
                e.preventDefault();
                onSidebarToggle();
            } else if (e.key === 'g') {
                const handleNextKey = (ev) => {
                    if (ev.key === 'p') window.location.href = 'index.html';
                    if (ev.key === 'a') window.location.href = 'agents.html';
                    if (ev.key === 'b') window.location.href = 'builder.html';
                    if (ev.key === 'r') window.location.href = 'help.html';
                    document.removeEventListener('keydown', handleNextKey);
                };
                document.addEventListener('keydown', handleNextKey, { once: true });
            } else if (e.key === 'Escape' && onEscape) {
                onEscape();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onSearch, onThemeToggle, onSidebarToggle, onHelp, onEscape, onScratchpad]);
};
  __exports.useLanguage = useLanguage;
  __exports.useToast = useToast;
  __exports.useGlobalShortcuts = useGlobalShortcuts;
})();
