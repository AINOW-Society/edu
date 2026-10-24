(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/hooks'] = AINOW['src/hooks'] || {};
const { useState, useEffect, useCallback, useRef } = React;
const { loadLocale, getCachedLocale } = AINOW['locales/locales'];

const useLanguage = () => {
    const getStoredLangCode = () => {
        try {
            const stored = localStorage.getItem('ainow_lang') || localStorage.getItem('language');
            return (stored && ['en', 'mk', 'sq'].includes(stored)) ? stored : 'en';
        } catch (e) { return 'en'; }
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
        window.addEventListener('pageshow', handleEvent);
        window.addEventListener('focus', handleEvent);

        return () => {
            mounted = false;
            window.removeEventListener('languageChange', handleEvent);
            window.removeEventListener('storage', handleEvent);
            window.removeEventListener('pageshow', handleEvent);
            window.removeEventListener('focus', handleEvent);
        };
    }, [lang]);

    const setLang = (newLang) => {
        if (!['en','mk','sq'].includes(newLang)) return false;
        setLangState(newLang);
        setIsReady(false);
        try { ['language','ainow_lang','ainow-lang'].forEach(key => localStorage.setItem(key, newLang)); }
        catch (_) { return false; }
        window.dispatchEvent(new Event('languageChange'));
        return true;
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

const useStorageSync = (keys, onChange) => {
    const callback = useRef(onChange);
    callback.current = onChange;
    const signature = keys.join('\u0000');
    useEffect(() => {
        if (!signature) return;
        const watched = signature.split('\u0000');
        const read = () => Object.fromEntries(watched.map(key => [key, localStorage.getItem(key)]));
        let previous;
        try { previous = read(); } catch (_) { return; }
        const sync = event => {
            if (event.type === 'storage' && event.key !== null && !watched.includes(event.key)) return;
            try {
                const next = read();
                if (watched.every(key => next[key] === previous[key])) return;
                previous = next;
                callback.current(next);
            } catch (_) {}
        };
        window.addEventListener('storage', sync);
        window.addEventListener('pageshow', sync);
        window.addEventListener('focus', sync);
        return () => {
            window.removeEventListener('storage', sync);
            window.removeEventListener('pageshow', sync);
            window.removeEventListener('focus', sync);
        };
    }, [signature]);
};


const dialogPanels = [];
const useDialog = (isOpen, onClose, panel) => {
    const close = useRef(onClose);
    close.current = onClose;
    useEffect(() => {
        if (!isOpen) return;
        dialogPanels.push(panel);
        const previous = document.activeElement, overflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const controls = () => [...panel.current.querySelectorAll('button, a[href], input, textarea, select, [tabindex="0"]')].filter(node => !node.disabled && node.offsetParent !== null);
        (panel.current.querySelector('[data-dialog-focus]') || controls()[0] || panel.current).focus();
        const keydown = event => {
            if (dialogPanels.at(-1) !== panel) return;
            if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); close.current(); }
            if (event.key !== 'Tab') return;
            const nodes = controls(), first = nodes[0], last = nodes[nodes.length - 1];
            if (!first) { event.preventDefault(); panel.current.focus(); }
            else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        };
        document.addEventListener('keydown', keydown, true);
        return () => { dialogPanels.splice(dialogPanels.indexOf(panel),1); document.body.style.overflow = overflow; document.removeEventListener('keydown', keydown, true); if (previous?.isConnected) previous.focus(); };
    }, [isOpen]);
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
  __exports.useDialog = useDialog;
  __exports.useStorageSync = useStorageSync;
})();
