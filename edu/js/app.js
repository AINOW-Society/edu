const APP_VERSION = 'v0.95';

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

const ICONS = {
    guide:     '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    prompts:   '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    tools:     '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    glossary:  '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    resources: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    tests:     '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    homework:  '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/>',
    handouts:  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    prompt_lists: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    all:       '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    primary:          '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    secondary_school: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    higher_ed:        '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
};

function icon(name, size = 20) {
    const body = ICONS[name];
    if (!body) return '';
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

const App = {
    currentView: 'home',
    theme: 'light',

    _deferredInstallPrompt: null,
    _onboardingSeenKey: 'ainow-onboarding-v3',
    _onboardingStepIndex: 0,
    _onboardingStepCount: 6,
    _isRefreshing: false,
    _pullToRefreshActive: false,
    _startY: 0,
    _scrollPositions: {},

    async init() {
        if (typeof I18n !== 'undefined') await I18n.init();
        window.onerror = (msg, src, line, col, err) => {
            console.error(`[AINOW Error] ${msg} (${src}:${line}:${col})`, err);
            return false;
        };
        window.onunhandledrejection = (event) => {
            console.error('[AINOW Unhandled Promise]', event.reason);
        };

        document.querySelectorAll("[data-platform-icon]").forEach(el => { el.innerHTML = AINOWPlatform.icon(el.dataset.platformIcon); });
        document.querySelectorAll("[data-platform-logo]").forEach(el => { el.innerHTML = AINOWPlatform.logo(); });
        this.loadTheme();
        const syncPreferences = () => {
            try {
                const language = localStorage.getItem('ainow_lang') || localStorage.getItem('ainow-lang') || localStorage.getItem('language');
                if (['en','mk','sq'].includes(language) && language !== I18n.lang) I18n.setLang(language);
                const theme = (localStorage.getItem('ainow-theme') || localStorage.getItem('theme')) === 'dark' ? 'dark' : 'light';
                if (theme !== this.theme) this.setTheme(theme);
            } catch (_) {}
        };
        ['storage','pageshow','focus'].forEach(type => window.addEventListener(type, syncPreferences));
        this._initOfflineIndicator();
        this._initInstallPrompt();
        this._initPullToRefresh();
        this._initOutsideClickHandlers();
        const menuMedia = window.matchMedia('(max-width:767.98px)');
        const syncMenu = () => {
            const sidebar = document.querySelector('.app-sidebar');
            if (!menuMedia.matches && sidebar?.classList.contains('open')) this.toggleMobileMenu();
            this._syncMenuVisibility();
        };
        menuMedia.addEventListener('change', syncMenu);
        syncMenu();


        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLangMenu(true);
                this.closeOnboardingModal();
                this.closePrivacyModal();
                this.closePromptDetail();
                const sidebar = document.querySelector('.app-sidebar');
                const overlay = document.getElementById('sidebar-overlay');
                if (sidebar?.classList.contains('open')) this.toggleMobileMenu();
            }
        });

        if (window.Engine) Engine.init();

        const params = new URLSearchParams(location.search);
        await this.restoreLocation('replace');
        window.addEventListener('popstate', () => this.restoreLocation());
        if (params.get('intro') === '1') this.openOnboardingModal(true);
        document.body.style.opacity = '1';
        this._maybeShowOnboarding();

        const vEl = document.getElementById('footer-version');
        if (vEl) vEl.textContent = APP_VERSION;

        this._prefetchPromptCounts();
    },

    _prefetchPromptCounts() {
        const userLang = I18n.lang || 'mk';
        const others = ['mk', 'en', 'sq'].filter(l => l !== userLang);
        const loadNext = (langs) => {
            if (!langs.length) { this._renderHomeStats(); return; }
            const lang = langs[0];
            if (window._pc && Object.prototype.hasOwnProperty.call(window._pc, lang)) {
                loadNext(langs.slice(1));
                return;
            }
            const s = document.createElement('script');
            s.id = `prefetch-prompts-${lang}`;
            s.src = `js/lang/${lang}/prompts.js`;
            s.onload = () => { loadNext(langs.slice(1)); };
            s.onerror = () => { loadNext(langs.slice(1)); };
            document.body.appendChild(s);
        };
        loadNext(others);
    },

    async restoreLocation(historyMode = 'none') {
        const params = new URLSearchParams(location.search);
        const legacy = location.hash.match(/^#\/?(help|about)$/)?.[1];
        const view = legacy || params.get('view') || 'home';
        const navigation = this.switchView(view, { historyMode });
        const request = this._viewRequest;
        await navigation;
        if (request !== this._viewRequest) return;
        const widget = params.get('widget');
        if (this.currentView === 'resources' && widget && window.ResourceManager) ResourceManager.switchWidget(widget);
    },

    async switchView(viewId, { historyMode = 'push' } = {}) {
        if (viewId === 'help' || viewId === 'about') { location.href = AINOWPlatform.href(viewId); return; }
        if (!['home','guide','prompts','tools','resources','glossary'].includes(viewId)) viewId = 'home';
        if (historyMode !== 'none') {
            const url = new URL(location.href);
            if (viewId === 'home') url.searchParams.delete('view');
            else url.searchParams.set('view', viewId);
            if (historyMode === 'push' && viewId !== this.currentView) { url.searchParams.delete('widget'); url.searchParams.delete('intro'); }
            if (url.href !== location.href) window.history[historyMode === 'replace' ? 'replaceState' : 'pushState'](null, '', url.href);
        }
        const request = this._viewRequest = (this._viewRequest || 0) + 1;
        this.closeLangMenu();
        this.closePromptDetail();
        if (document.querySelector('.app-sidebar')?.classList.contains('open')) this.toggleMobileMenu();

        const mainContent = document.getElementById('main-content');
        if (mainContent && this.currentView && this.currentView !== viewId) {
            this._scrollPositions[this.currentView] = mainContent.scrollTop;
        }

        this.currentView = viewId;


        await this.loadView(viewId);
        if (request !== this._viewRequest) return;

        document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
        const activeSection = document.getElementById(`view-${viewId}`);
        if (activeSection) activeSection.classList.remove('hidden');

        this.renderSidebarCtx(viewId);

        const sidebar = document.querySelector('.app-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('open');

        if (mainContent) {
            const saved = this._scrollPositions[viewId];
            mainContent.scrollTop = (saved !== undefined) ? saved : 0;
        }

        if (viewId === 'home') {
            delete this._scrollPositions['home'];
            this._renderHomeCards();
            this._renderHomeStats();
        } else if (viewId === 'guide') {
            const activeItem = document.querySelector('.sb-sub.active');
            let targetSection = DOCS_DATA[0] ? DOCS_DATA[0].id : 'intro';
            if (activeItem && activeItem.id && activeItem.id.startsWith('sidebar-')) {
                targetSection = activeItem.id.replace('sidebar-', '');
            }
            for (const [catId, ids] of Object.entries(this._guideCategoryMap)) {
                if (ids.includes(targetSection)) { this.currentGuideCategory = catId; break; }
            }
            this.renderGuideChapterTabs();
            Router.renderContent(targetSection);
        } else if (viewId === 'tools') {
            this.renderTools(this.currentToolCategory || 'all');
        } else if (viewId === 'glossary') {
            this.renderGlossary();
        } else if (viewId === 'resources') {
            if (window.ResourceManager) window.ResourceManager.init();
        } else if (viewId === 'prompts') {
            this.currentPromptSearch = '';
                this.renderPrompts(this.currentPromptCategory || 'primary', this.currentPromptSubcategory || 'all');
        }
    },

    async loadView(viewId) {
        const el = document.getElementById(`view-${viewId}`);
        if (!el || el.dataset.loaded === 'true') return;

        if (window.VIEWS && window.VIEWS[viewId] !== undefined) {
            el.innerHTML = window.VIEWS[viewId];
            el.dataset.loaded = 'true';
            this._applyViewI18n(el);
            return;
        }

        await new Promise((resolve) => {
            const s = document.createElement('script');
            s.src = `views/${viewId}.js`;
            s.onload = resolve;
            s.onerror = () => { resolve(); };
            document.head.appendChild(s);
        });

        if (window.VIEWS && window.VIEWS[viewId] !== undefined) {
            el.innerHTML = window.VIEWS[viewId];
            el.dataset.loaded = 'true';
            this._applyViewI18n(el);
        }
    },

    _applyViewI18n(el) {
        if (typeof I18n !== 'undefined' && typeof I18n.applyTranslations === 'function') {
            I18n.applyTranslations(el);
        }
    },

    renderSidebarCtx(viewId) {
        const sidebar = document.getElementById('sidebar-content');
        if (!sidebar) return;

        let html = '';

        if (viewId === 'guide') {
            const cat = this.currentGuideCategory || 'foundations';
            const t = (k) => I18n.t(k);

            const catIcons = {
                foundations: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
                practice:    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
                reference:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
            };

            const activeEl = document.querySelector('.sb-sub.active');
            const activeSection = activeEl && activeEl.id ? activeEl.id.replace('sidebar-', '') : null;

            const groups = ['foundations', 'practice', 'reference'].map(cId => {
                const chapterIds = this._guideCategoryMap[cId] || [];
                const chapters = (typeof DOCS_DATA !== 'undefined')
                    ? chapterIds.map(id => DOCS_DATA.find(s => s.id === id)).filter(Boolean)
                    : [];
                if (!chapters.length) return '';
                const open = cat === cId;

                const rows = chapters.map((section, idx) => {
                    const key = 'guide.section.' + section.id;
                    const translated = t(key);
                    const label = (translated !== key) ? translated : section.title.replace(/^[IVX]+\.\s*/, '');
                    const isActive = section.id === activeSection;
                    return `
                        <button class="sb-sub ${isActive ? 'active' : ''}" id="sidebar-${section.id}"
                                onclick="Router.renderContent('${section.id}')">
                            <span class="sb-sub-num" aria-hidden="true">${idx + 1}</span>
                            <span class="sb-sub-label">${label}</span>
                        </button>`;
                }).join('');

                return `
                    <div class="sb-group ${open ? 'open' : ''}">
                        <button class="sb-group-head ${open ? 'current' : ''}"
                                aria-expanded="${open ? 'true' : 'false'}"
                                onclick="App.switchGuideCategory('${cId}'); App.renderSidebarCtx('guide');">
                            <span class="sb-group-icon" aria-hidden="true">${catIcons[cId]}</span>
                            <span class="sb-group-label">${t('guide.cat.' + cId)}</span>
                            <span class="sb-group-count">${chapters.length}</span>
                            <svg class="sb-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none"
                                 stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <div class="sb-group-body"><div class="sb-group-inner">${rows}</div></div>
                    </div>`;
            }).join('');

            html = `
                <div class="sidebar-ctx-wrap">
                    <div class="sb-section-label">${t('nav.guide')}</div>
                    ${groups}
                </div>
            `;
        } else if (viewId === 'tools') {
            const categories = [
                { id: 'all', title: I18n.t('tools.cat.all'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="8"/></svg>' },
                { id: 'text', title: I18n.t('tools.cat.text'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>' },
                { id: 'visual', title: I18n.t('tools.cat.visual'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg>' },
                { id: 'multimedia', title: I18n.t('tools.cat.multimedia'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>' },
                { id: 'planning', title: I18n.t('tools.cat.planning'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' },
                { id: 'assessment', title: I18n.t('tools.cat.assessment'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>' },
                { id: 'presentation', title: I18n.t('tools.cat.presentation'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
                { id: 'math', title: I18n.t('tools.cat.math'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' },
                { id: 'research', title: I18n.t('tools.cat.research'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
                { id: 'students', title: I18n.t('tools.cat.students'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' }
            ];

            const current = this.currentToolCategory || 'all';
            const rows = categories.map(cat => {
                const n = cat.id === 'all'
                    ? this._toolsData.length
                    : this._toolsData.filter(x => x.category === cat.id).length;
                if (!n) return '';
                return `
                    <button class="sb-sub ${current === cat.id ? 'active' : ''}"
                            onclick="App.filterTools('${cat.id}')">
                        <span class="sb-sub-icon" aria-hidden="true">${cat.icon}</span>
                        <span class="sb-sub-label">${cat.title}</span>
                        <span class="sb-sub-count">${n}</span>
                    </button>`;
            }).join('');

            html = `
                <div class="sidebar-ctx-wrap">
                    <div class="sb-section-label">${I18n.t('nav.tools')}</div>
                    <div class="sb-flat">${rows}</div>
                </div>
            `;

            this.renderTools(this.currentToolCategory || 'all');
        } else if (viewId === 'prompts') {
            const t = (k) => I18n.t(k);

            const activeCat = this.currentPromptCategory || 'primary';
            const groups = this._promptCategories.map(c => {
                const pool = this._promptsForCategory(c.id);
                if (!pool.length) return '';

                const open = this._openPromptLevel === c.id
                    || (this._openPromptLevel === undefined && c.id === activeCat);

                const subs = (this._promptSubMap[c.id] || []).filter(s => s !== 'all');
                const links = subs.map(s => {
                    const n = this._promptsForSubcategory(c.id, s, pool).length;
                    return n ? this._sidebarPromptSubLink(s, n, c.id) : '';
                }).join('');

                return `
                    <div class="sb-group ${open ? 'open' : ''}">
                        <button class="sb-group-head ${activeCat === c.id ? 'current' : ''}"
                                aria-expanded="${open ? 'true' : 'false'}"
                                onclick="App.togglePromptLevel('${c.id}')">
                            <span class="sb-group-icon" aria-hidden="true">${c.icon}</span>
                            <span class="sb-group-label">${t('prompts.cat.' + c.id)}</span>
                            <span class="sb-group-count">${pool.length}</span>
                            <svg class="sb-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none"
                                 stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <div class="sb-group-body">
                            <div class="sb-group-inner">
                                <button class="sb-sub ${activeCat === c.id && (this.currentPromptSubcategory || 'all') === 'all' ? 'active' : ''}"
                                        onclick="App.switchPromptSubcategory('all', '${c.id}')">
                                    <span class="sb-sub-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg></span>
                                    <span class="sb-sub-label">${t('prompts.sub.all')}</span>
                                    <span class="sb-sub-count">${pool.length}</span>
                                </button>
                                ${links}
                            </div>
                        </div>
                    </div>`;
            }).join('');

            html = `
                <div class="sidebar-ctx-wrap">
                    <div class="sb-section-label">${t('nav.prompts')}</div>
                    ${groups}
                </div>
            `;
        } else if (viewId === 'glossary') {
            const t = (k) => I18n.t(k);
            const cats = [
                { id: 'all',     label: t('glossary.cat.all'),     icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="8"/><line x1="12" y1="12" x2="12" y2="16"/></svg>' },
                { id: 'ai',      label: t('glossary.cat.ai'),      icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
                { id: 'tech',    label: t('glossary.cat.tech'),    icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
                { id: 'edu',     label: t('glossary.cat.edu'),     icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>' },
                { id: 'prompts', label: t('glossary.cat.prompts'), icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
            ];
            const cur = this.currentGlossaryCat || 'all';
            const lang = I18n.currentLang || I18n.lang || 'mk';
            const terms = (typeof GLOSSARY_DATA !== 'undefined')
                ? (GLOSSARY_DATA[lang] || GLOSSARY_DATA.mk || [])
                : [];
            const rows = cats.map(c => {
                const n = c.id === 'all' ? terms.length : terms.filter(x => x.category === c.id).length;
                if (!n) return '';
                return `
                    <button class="sb-sub ${cur === c.id ? 'active' : ''}"
                            onclick="App.setGlossaryCat('${c.id}')">
                        <span class="sb-sub-icon" aria-hidden="true">${c.icon}</span>
                        <span class="sb-sub-label">${c.label}</span>
                        <span class="sb-sub-count">${n}</span>
                    </button>`;
            }).join('');

            html = `
                <div class="sidebar-ctx-wrap">
                    <div class="sb-section-label">${t('nav.glossary')}</div>
                    <div class="sb-flat">${rows}</div>
                </div>
            `;
        }

        const menu=AINOWNavigation;
        sidebar.innerHTML='<div class="ainow-sidebar-scroll"><div class="ainow-drawer-heading"><span>'+menu.text(I18n.lang,'navigation')+'</span><button class="edu-menu-close" type="button" onclick="App.toggleMobileMenu()" aria-label="'+AINOWPlatform.text(I18n.lang,'close')+'">'+AINOWPlatform.icon('X')+'</button></div>'+menu.render('edu',I18n.lang,{active:viewId})+'<div class="ainow-sidebar-context">'+html+'</div></div>'+menu.render('edu',I18n.lang,{group:'common'});
        sidebar.onclick=event=>{const link=event.target.closest('[data-nav-id]');if(!link||!sidebar.contains(link)||!menu.primary.edu.some(item=>item.id===link.dataset.navId))return;event.preventDefault();this.switchView(link.dataset.navId);};
    },

    currentToolCategory: 'all',

    filterTools(categoryId) {
        this.currentToolCategory = categoryId;
        this.renderSidebarCtx('tools');
    },

    _toolsData: [
        { id: 'gpt', title: 'ChatGPT', url: 'https://chat.openai.com', tags: ['General', 'Text'], category: 'text', pricing: 'paid' },
        { id: 'claude', title: 'Claude', url: 'https://claude.ai', tags: ['Analysis', 'Creative'], category: 'text', pricing: 'paid' },
        { id: 'gemini', title: 'Gemini', url: 'https://gemini.google.com', tags: ['Google', 'Fast'], category: 'text', pricing: 'paid' },
        { id: 'copilot', title: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', tags: ['Microsoft', 'Productivity'], category: 'text', pricing: 'paid' },
        { id: 'duck', title: 'Duck.ai', url: 'https://duck.ai', tags: ['Privacy', 'Free'], category: 'text', pricing: 'free' },
        { id: 'perp', title: 'Perplexity', url: 'https://www.perplexity.ai', tags: ['Research', 'Search'], category: 'research', pricing: 'paid' },
        { id: 'elicit', title: 'Elicit', url: 'https://elicit.com', tags: ['Papers', 'Extract'], category: 'research', pricing: 'paid' },
        { id: 'consensus', title: 'Consensus', url: 'https://consensus.app', tags: ['Science', 'Evidence'], category: 'research', pricing: 'free' },
        { id: 'scite', title: 'Scite', url: 'https://scite.ai', tags: ['Citations', 'Analysis'], category: 'research', pricing: 'paid' },
        { id: 'semantic', title: 'Semantic Scholar', url: 'https://www.semanticscholar.org', tags: ['Academic', 'Search'], category: 'research', pricing: 'free' },
        { id: 'connected', title: 'Connected Papers', url: 'https://www.connectedpapers.com', tags: ['Visual', 'Discovery'], category: 'research', pricing: 'paid' },
        { id: 'notebooklm', title: 'NotebookLM', url: 'https://notebooklm.google/', tags: ['Google', 'Documents'], category: 'research', pricing: 'free' },
        { id: 'researchrabbit', title: 'Research Rabbit', url: 'https://www.researchrabbit.ai', tags: ['Discovery', 'Tracking'], category: 'research', pricing: 'free' },
        { id: 'amma', title: 'Gamma', url: 'https://gamma.app', tags: ['Presentation', 'AI'], category: 'presentation', pricing: 'paid' },
        { id: 'classpoint', title: 'ClassPoint AI', url: 'https://www.classpoint.io', tags: ['Slides', 'Interactive'], category: 'presentation', pricing: 'paid' },
        { id: 'tome', title: 'Tome', url: 'https://tome.app', tags: ['Storytelling', 'AI'], category: 'presentation', pricing: 'paid' },
        { id: 'canva', title: 'Canva Magic', url: 'https://www.canva.com', tags: ['Design', 'Creative'], category: 'visual', pricing: 'paid' },
        { id: 'dalle', title: 'DALL-E 3', url: 'https://labs.openai.com', tags: ['Image', 'Art'], category: 'visual', pricing: 'paid' },
        { id: 'midj', title: 'Midjourney', url: 'https://www.midjourney.com', tags: ['High-qual', 'Art'], category: 'visual', pricing: 'paid' },
        { id: 'suno', title: 'Suno AI', url: 'https://suno.com', tags: ['Music', 'Audio'], category: 'multimedia', pricing: 'paid' },
        { id: 'pika', title: 'Pika Labs', url: 'https://pika.art', tags: ['Video', 'Animation'], category: 'multimedia', pricing: 'paid' },
        { id: 'synthesia', title: 'Synthesia', url: 'https://www.synthesia.io', tags: ['Video', 'Avatars'], category: 'multimedia', pricing: 'paid' },
        { id: 'pictory', title: 'Pictory', url: 'https://pictory.ai', tags: ['Text-to-Video', 'Content'], category: 'multimedia', pricing: 'paid' },
        { id: 'descript', title: 'Descript', url: 'https://www.descript.com', tags: ['Audio', 'Video'], category: 'multimedia', pricing: 'paid' },
        { id: 'lumen5', title: 'Lumen5', url: 'https://lumen5.com', tags: ['Video', 'Blog'], category: 'multimedia', pricing: 'paid' },
        { id: 'animoto', title: 'Animoto', url: 'https://animoto.com', tags: ['Video', 'Education'], category: 'multimedia', pricing: 'paid' },
        { id: 'curi', title: 'Curipod', url: 'https://curipod.com', tags: ['Interactive', 'Planning'], category: 'planning', pricing: 'paid' },
        { id: 'brisk', title: 'Brisk Teaching', url: 'https://www.briskteaching.com', tags: ['Time-saver', 'Chrome Ext'], category: 'planning', pricing: 'paid' },
        { id: 'ms', title: 'MagicSchool', url: 'https://www.magicschool.ai', tags: ['Teachers', 'All-in-one'], category: 'planning', pricing: 'paid' },
        { id: 'diff', title: 'Diffit', url: 'https://web.diffit.me', tags: ['Reading', 'Differentiation'], category: 'planning', pricing: 'free' },
        { id: 'eduaide', title: 'Eduaide.AI', url: 'https://www.eduaide.ai', tags: ['Lessons', 'AI'], category: 'planning', pricing: 'paid' },
        { id: 'teachbetter', title: 'TeachBetter.ai', url: 'https://teachbetter.ai', tags: ['Workflow', 'Structured'], category: 'planning', pricing: 'paid' },
        { id: 'lessonplans', title: 'LessonPlans.ai', url: 'https://lessonplans.ai', tags: ['Generator', 'Auto'], category: 'planning', pricing: 'paid' },
        { id: 'educreations', title: 'Educreations', url: 'https://www.educreations.com', tags: ['Whiteboard', 'Visual'], category: 'planning', pricing: 'free' },
        { id: 'schoolai', title: 'SchoolAI', url: 'https://schoolai.com', tags: ['Classroom', 'Management'], category: 'planning', pricing: 'paid' },
        { id: 'quiz', title: 'Quizizz AI', url: 'https://quizizz.com', tags: ['Assessment', 'Gamified'], category: 'assessment', pricing: 'paid' },
        { id: 'formative', title: 'Formative AI', url: 'https://www.formative.com', tags: ['Feedback', 'Real-time'], category: 'assessment', pricing: 'paid' },
        { id: 'kahoot', title: 'Kahoot AI', url: 'https://kahoot.com', tags: ['Quizzes', 'Games'], category: 'assessment', pricing: 'paid' },
        { id: 'gradescope', title: 'Gradescope', url: 'https://www.gradescope.com', tags: ['Grading', 'AI'], category: 'assessment', pricing: 'paid' },
        { id: 'socrative', title: 'Socrative', url: 'https://www.socrative.com', tags: ['Quizzes', 'Polls'], category: 'assessment', pricing: 'paid' },
        { id: 'khan', title: 'Khanmigo', url: 'https://www.khanacademy.org', tags: ['Student', 'Tutor'], category: 'students', pricing: 'free' },
        { id: 'duolingo', title: 'Duolingo Max', url: 'https://www.duolingo.com/max', tags: ['Language', 'Learning'], category: 'students', pricing: 'paid' },
        { id: 'quizlet', title: 'Quizlet', url: 'https://quizlet.com', tags: ['Flashcards', 'Study'], category: 'students', pricing: 'paid' },
        { id: 'photomath', title: 'Photomath', url: 'https://photomath.com', tags: ['Math', 'Camera'], category: 'students', pricing: 'paid' },
        { id: 'socratic', title: 'Socratic', url: 'https://socratic.org', tags: ['Homework', 'Visual'], category: 'students', pricing: 'free' },
        { id: 'brainly', title: 'Brainly', url: 'https://brainly.com', tags: ['Community', 'Help'], category: 'students', pricing: 'paid' },
        { id: 'wolf', title: 'Wolfram Alpha', url: 'https://www.wolframalpha.com', tags: ['Math', 'Computing'], category: 'math', pricing: 'paid' },
        { id: 'symbolab', title: 'Symbolab', url: 'https://www.symbolab.com', tags: ['Algebra', 'Calculus'], category: 'math', pricing: 'paid' },
        { id: 'mathway', title: 'Mathway', url: 'https://www.mathway.com', tags: ['Solver', 'Steps'], category: 'math', pricing: 'paid' },
        { id: 'grammarly', title: 'Grammarly', url: 'https://www.grammarly.com', tags: ['Writing', 'Grammar'], category: 'text', pricing: 'paid' },
        { id: 'quillbot', title: 'QuillBot', url: 'https://quillbot.com', tags: ['Paraphrase', 'Summary'], category: 'text', pricing: 'paid' },
        { id: 'notion', title: 'Notion AI', url: 'https://www.notion.so/product/ai', tags: ['Notes', 'Workspace'], category: 'text', pricing: 'paid' },
        { id: 'otter', title: 'Otter.ai', url: 'https://otter.ai', tags: ['Transcription', 'Notes'], category: 'text', pricing: 'paid' },
        { id: 'speechify', title: 'Speechify', url: 'https://speechify.com', tags: ['Text-to-Speech', 'Audio'], category: 'text', pricing: 'paid' },
        { id: 'readwise', title: 'Readwise Reader', url: 'https://readwise.io/reader', tags: ['Reading', 'Retention'], category: 'text', pricing: 'paid' },
        { id: 'mem', title: 'Mem', url: 'https://mem.ai', tags: ['Notes', 'AI'], category: 'text', pricing: 'paid' },
        { id: 'taskade', title: 'Taskade', url: 'https://www.taskade.com', tags: ['Productivity', 'Tasks'], category: 'text', pricing: 'paid' },
    ],

    renderTools(category = 'all') {
        const grid = document.getElementById('tools-grid');
        const header = document.getElementById('tools-header');
        if (!grid || !header) return;

        if (category === 'all') {
            header.innerHTML = `
                <div class="page-hero-card">
                    <div class="page-hero-card-icon page-hero-card-icon--secondary">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                    </div>
                    <div>
                        <h1 class="page-hero-title">${I18n.t('tools.hero.title')}</h1>
                        <p class="page-hero-sub">${I18n.t('tools.hero.subtitle')}</p>
                    </div>
                </div>
            `;
            grid.innerHTML = this._toolsData.map(tool => `
                    <div class="tool-card">
                        <div class="tool-card-head">
                            <h3 class="tool-card-title">${tool.title}</h3>
                            <div class="tool-card-tags">
                                ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                            </div>
                            <span class="tool-pricing-badge tool-pricing-${tool.pricing}">${tool.pricing.toUpperCase()}</span>
                        </div>
                        <p class="tool-card-desc">${I18n.t('tool.' + tool.id + '.desc')}</p>
                        <a href="${tool.url}" target="_blank" rel="noopener" class="tool-card-link">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            ${I18n.t('tools.open')}
                        </a>
                    </div>
                `).join('');
            return;
        }

        const filtered = this._toolsData.filter(t => t.category === category);
        const catTitle = I18n.t('tools.cat.' + category);
        const countLabel = `${filtered.length} ${I18n.t('stats.tools')}`;

        header.innerHTML = `
            <div class="tools-cat-header">
                <div class="tools-cat-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <h2 class="tools-cat-title">${catTitle}</h2>
                <span class="tools-cat-count">${countLabel}</span>
            </div>
        `;

        grid.innerHTML = filtered.map(tool => `
                <div class="tool-card">
                    <div class="tool-card-head">
                        <h3 class="tool-card-title">${tool.title}</h3>
                        <div class="tool-card-tags">
                            ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                        </div>
                        <span class="tool-pricing-badge tool-pricing-${tool.pricing}">${tool.pricing.toUpperCase()}</span>
                    </div>
                    <p class="tool-card-desc">${I18n.t('tool.' + tool.id + '.desc')}</p>
                    <a href="${tool.url}" target="_blank" rel="noopener" class="tool-card-link">
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        ${I18n.t('tools.open')}
                    </a>
                </div>
            `).join('');

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="pc-empty-state">
                    <div class="pc-empty-state-icon" aria-hidden="true">🔎</div>
                    <div class="pc-empty-state-title">${escapeHtml(I18n.t('prompts.empty'))}</div>
                    <div class="pc-empty-state-sub">${escapeHtml(I18n.t('prompts.empty.try'))}</div>
                </div>`;
        }
    },

    _homeCards: {
        learn: [
            { id: 'guide',    icon: 'guide',    action: "App.switchView('guide')" },
            { id: 'prompts',  icon: 'prompts',  action: "App.switchView('prompts')" },
            { id: 'tools',    icon: 'tools',    action: "App.switchView('tools')" },
            { id: 'glossary', icon: 'glossary', action: "App.switchView('glossary')" },
        ],
        create: [
            { id: 'tests',        icon: 'tests',        action: "App.openResourcesWidget('tests')" },
            { id: 'homework',     icon: 'homework',     action: "App.openResourcesWidget('homework')" },
            { id: 'handouts',     icon: 'handouts',     action: "App.openResourcesWidget('guide')" },
            { id: 'prompt_lists', icon: 'prompt_lists', action: "App.openResourcesWidget('prompts')" },
        ],
    },

    _homeGoal: null,
    _homeStartOpen: false,
    _selectHomeGoal(goal) {
        this._homeGoal = this._homeGoal === goal ? null : goal;
        this._homeStartOpen = true;
        this._renderTaskStart();
        document.getElementById('edu-goal-' + goal)?.focus({preventScroll: true});
    },
    async _openHomeGoal(goal) {
        if (goal === 'learn') { await this.switchView('guide'); Router.renderContent('definition'); }
        else if (goal === 'lesson') { await this.switchView('prompts'); }
        else if (goal === 'material') { await this.openResourcesWidget('homework'); }
        const heading = document.querySelector('#main-content .guide-title') || document.querySelector('#main-content h1');
        if (heading) { heading.tabIndex = -1; heading.focus({preventScroll: true}); heading.scrollIntoView({block: 'start', behavior: 'auto'}); }
    },
    _renderTaskStart() {
        const el = document.getElementById('home-task-start');
        if (!el) return;
        const t = key => escapeHtml(I18n.t('learning.start.' + key));
        const paths = [['learn', 'guide'], ['lesson', 'prompts'], ['material', 'homework']];
        el.innerHTML = `<details class="task-start task-start--edu" ${this._homeStartOpen ? 'open' : ''} ontoggle="App._homeStartOpen=this.open"><summary id="edu-start-title">${t('choose')}</summary><div class="task-start-body"><p>${t('title')}</p><div class="task-start-choices">${paths.map(([goal, mark]) => `<button type="button" id="edu-goal-${goal}" aria-pressed="${this._homeGoal === goal}" onclick="App._selectHomeGoal('${goal}')">${icon(mark)}${t(goal)}</button>`).join('')}</div>${this._homeGoal ? `<div class="task-start-result"><p role="status">${t(this._homeGoal + '.text')}</p><div class="task-start-actions"><button type="button" onclick="App._openHomeGoal('${this._homeGoal}')">${t('go')}</button></div></div>` : ''}</div></details>`;
    },

    _renderHomeCards() {
        this._renderTaskStart();
        const t = (k) => I18n.t(k);
        const build = (list, compact) => list.map(c => `
            <div class="home-feature-card ${compact ? 'home-feature-card--compact' : ''}"
                 role="button" tabindex="0" onclick="${c.action}"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
                <div class="card-icon">${icon(c.icon, compact ? 20 : 22)}</div>
                <div class="home-card-text">
                    <h3>${t('card.' + c.id + '.title')}</h3>
                    ${compact ? '' : `<p>${t('card.' + c.id + '.desc')}</p>`}
                </div>
                <span class="card-arrow" aria-hidden="true">→</span>
            </div>
        `).join('');

        const learn = document.getElementById('home-grid-learn');
        const create = document.getElementById('home-grid-create');
        if (learn) learn.innerHTML = build(this._homeCards.learn, false);
        if (create) create.innerHTML = build(this._homeCards.create, true);
    },

    _renderHomeStats() {
        const bar = document.getElementById('home-stat-bar');
        if (!bar) return;
        const promptCount = window._pc
            ? Object.values(window._pc).reduce((s, c) => s + c, 0)
            : (typeof embeddedPromptsData !== 'undefined'
                ? Object.values(embeddedPromptsData).reduce((s, a) => s + a.length, 0)
                : 0);
        const toolCount   = this._toolsData ? this._toolsData.length : 0;
        const chapterCount = (typeof DOCS_DATA !== 'undefined')
            ? DOCS_DATA.filter(s => s.id !== 'about').length
            : 0;
        const t = (k) => I18n.t(k);
        bar.textContent = `${promptCount} ${t('stats.prompts')} • ${chapterCount} ${t('stats.chapters')} • ${toolCount} ${t('stats.tools')}`;
    },

    currentGlossaryCat: 'all',
    currentGlossarySearch: '',

    setGlossaryCat(cat) {
        this.currentGlossaryCat = cat;
        this.renderSidebarCtx('glossary');
        this.renderGlossary();
    },

    filterGlossary() {
        const input = document.getElementById('glossary-search');
        this.currentGlossarySearch = input ? input.value.trim().toLowerCase() : '';
        this._renderGlossaryCards();
    },

    renderGlossary() {
        const header = document.getElementById('glossary-header');
        const grid   = document.getElementById('glossary-grid');
        if (!header || !grid) return;

        const t    = (k) => I18n.t(k);
        const lang = I18n.currentLang || I18n.lang || 'mk';
        const data = (typeof GLOSSARY_DATA !== 'undefined' && GLOSSARY_DATA[lang])
                   ? GLOSSARY_DATA[lang]
                   : (typeof GLOSSARY_DATA !== 'undefined' ? GLOSSARY_DATA['mk'] : []);
        const total = data.length;

        header.innerHTML = `
            <header class="ainow-page-heading">
                <span class="ainow-page-mark">${AINOWPlatform.icon('BookOpen')}</span>
                <div><h1 class="ainow-page-title">${escapeHtml(t('glossary.title'))}</h1><p class="ainow-page-meta">${total} ${escapeHtml(t('glossary.count'))}</p></div>
            </header>
            <label class="ainow-search-field">
                <span class="ainow-visually-hidden">${escapeHtml(t('glossary.search'))}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input id="glossary-search" type="search" placeholder="${escapeHtml(t('glossary.search'))}" autocomplete="off" oninput="App.filterGlossary()" value="${escapeHtml(this.currentGlossarySearch)}">
            </label>
        `;
        this._renderGlossaryCards();
    },

    _renderGlossaryCards() {
        const grid = document.getElementById('glossary-grid');
        if (!grid) return;

        const lang   = I18n.currentLang || I18n.lang || 'mk';
        const data   = (typeof GLOSSARY_DATA !== 'undefined' && GLOSSARY_DATA[lang])
                     ? GLOSSARY_DATA[lang]
                     : (typeof GLOSSARY_DATA !== 'undefined' ? GLOSSARY_DATA['mk'] : []);
        const cat    = this.currentGlossaryCat || 'all';
        const search = this.currentGlossarySearch || '';

        const badgeLabel = { ai: 'AI', tech: 'Tech', edu: 'Edu', prompts: 'Prompts' };

        const filtered = data.filter(item => {
            const matchCat    = cat === 'all' || item.category === cat;
            const matchSearch = !search
                || item.term.toLowerCase().includes(search)
                || item.full.toLowerCase().includes(search)
                || item.desc.toLowerCase().includes(search);
            return matchCat && matchSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="pc-empty-state">
                    <div class="pc-empty-state-icon" aria-hidden="true">📖</div>
                    <div class="pc-empty-state-title">${escapeHtml(I18n.t('glossary.empty'))}</div>
                    <div class="pc-empty-state-sub">${escapeHtml(I18n.t('prompts.empty.try'))}</div>
                </div>`;
            return;
        }

        grid.innerHTML = filtered.map(item => `
            <div class="glossary-card">
                <div class="glossary-card-term">${escapeHtml(item.term)}</div>
                ${item.full ? `<div class="glossary-card-full">${escapeHtml(item.full)}</div>` : ''}
                <div class="glossary-card-desc">${escapeHtml(item.desc)}</div>
                <span class="glossary-badge glossary-badge-${escapeHtml(item.category)}">${escapeHtml(badgeLabel[item.category] || item.category)}</span>
            </div>
        `).join('');
    },

    _promptCategories: [
        { id: 'primary',          icon: icon('primary') },
        { id: 'secondary_school', icon: icon('secondary_school') },
        { id: 'higher_ed',        icon: icon('higher_ed') },
    ],

    _promptSubMap: {
        primary:          ['all', 'primary_lower', 'primary_upper', 'director', 'pedagogue', 'psychologist', 'secretary', 'department_head'],
        secondary_school: ['all', 'secondary', 'director', 'pedagogue', 'psychologist', 'secretary', 'department_head'],
        higher_ed:        ['all', 'lecturer', 'researcher', 'doctoral', 'student_services', 'quality', 'leadership'],
    },

    _teachingSubs: {
        primary:          ['primary_lower', 'primary_upper'],
        secondary_school: ['secondary'],
        higher_ed:        ['lecturer'],
    },

    _levelOf(prompt, sourceArray) {
        if (sourceArray === 'higher_ed') return 'higher';
        if (sourceArray === 'administration') return 'both';
        if (prompt.subcategory === 'primary_lower' || prompt.subcategory === 'primary_upper') return 'primary';
        if (prompt.subcategory === 'secondary') return 'secondary';
        return 'both';
    },

    _promptsForCategory(categoryId) {
        const data = (typeof embeddedPromptsData !== 'undefined') ? embeddedPromptsData : {};
        const out = [];
        ['teachers', 'administration', 'higher_ed'].forEach(src => {
            (data[src] || []).forEach(p => {
                const level = this._levelOf(p, src);
                if (categoryId === 'primary' && (level === 'primary' || level === 'both')) out.push(p);
                else if (categoryId === 'secondary_school' && (level === 'secondary' || level === 'both')) out.push(p);
                else if (categoryId === 'higher_ed' && level === 'higher') out.push(p);
            });
        });
        return out;
    },

    _promptsForSubcategory(category, subcategory, pool = this._promptsForCategory(category)) {
        const teaching = (this._teachingSubs[category] || []).includes(subcategory);
        return pool.filter(p => subcategory === 'all' || p.subcategory === subcategory || (teaching && p.subcategory === 'all'));
    },

    currentPromptCategory: 'primary',
    currentPromptSubcategory: 'all',
    currentPromptSearch: '',
    currentPromptView: 'grid',
    currentPromptPage: 1,
    promptsPerPage: 12,

    switchPromptCategory(cat) {
        this.currentPromptCategory = cat;
        this.currentPromptSubcategory = 'all';
        this.currentPromptSearch = '';
        this.currentPromptPage = 1;

        this._openPromptLevel = cat;
        this.renderPrompts(cat, 'all');
        this.renderSidebarCtx('prompts');
        const searchInput = document.getElementById('prompts-search-input');
        if (searchInput) searchInput.value = '';
    },

    switchPromptSubcategory(sub, cat) {
        if (cat) this.currentPromptCategory = cat;
        this.currentPromptSubcategory = sub;
        this.currentPromptSearch = '';
        this.currentPromptPage = 1;

        this._openPromptLevel = this.currentPromptCategory;
        this.renderPrompts(this.currentPromptCategory, sub);
        this.renderSidebarCtx('prompts');
        const searchInput = document.getElementById('prompts-search-input');
        if (searchInput) searchInput.value = '';
    },

    searchPrompts(query) {
        this.currentPromptSearch = query.toLowerCase().trim();
        this.currentPromptPage = 1;
        this.renderPrompts(this.currentPromptCategory, this.currentPromptSubcategory);
    },

    setPromptView(view) {
        if (!['grid', 'list', 'table'].includes(view)) return;
        this.currentPromptView = view;
        this.renderPrompts(this.currentPromptCategory, this.currentPromptSubcategory);
    },

    openPromptCard(event, index) {
        if (event.target.closest('button, a, input, select, textarea')) return;
        this.openPromptDetail(index);
    },

    copyPromptCard(index, button) {
        const prompt = this._pagePrompts[index];
        if (prompt) this._copyPromptText(prompt.prompt, button);
    },

    renderPrompts(category, subcategory) {
        const list = document.getElementById('prompts-list');
        const pagContainer = document.getElementById('prompts-pagination');
        if (!list) return;
        const header = document.getElementById('prompts-header');

        const allPrompts = this._promptsForCategory(category);

        let filtered = this._promptsForSubcategory(category, subcategory, allPrompts);

        const query = this.currentPromptSearch;
        if (query) {
            filtered = filtered.filter(p => {
                const haystack = (p.title + ' ' + p.prompt + ' ' + (p.subject || '') + ' ' + (p.tags || []).join(' ')).toLowerCase();
                return haystack.includes(query);
            });
        }

        const titleText = subcategory === 'all' ? I18n.t('prompts.sub.all') : I18n.t('prompts.sub.' + subcategory);
        if (header) {
            header.innerHTML = `
                ${escapeHtml(I18n.t('prompts.cat.' + category))}${subcategory === 'all' ? '' : ' · ' + escapeHtml(titleText)} · ${filtered.length} ${escapeHtml(I18n.t('prompts.count.suffix'))}
            `;
        }

        const totalItems = filtered.length;
        const totalPages = Math.ceil(totalItems / this.promptsPerPage);

        if (this.currentPromptPage > totalPages && totalPages > 0) {
            this.currentPromptPage = totalPages;
        } else if (totalPages === 0) {
            this.currentPromptPage = 1;
        }

        const startIndex = (this.currentPromptPage - 1) * this.promptsPerPage;
        const endIndex = Math.min(startIndex + this.promptsPerPage, totalItems);
        const pageItems = filtered.slice(startIndex, endIndex);

        this._pagePrompts = pageItems;

        list.className = 'ainow-template-grid' + (this.currentPromptView === 'grid' ? '' : ' is-' + this.currentPromptView);
        const controls = document.getElementById('prompts-view-controls');
        if (controls) controls.innerHTML = ['grid','list','table'].map((view,i) => {
            const label = escapeHtml(I18n.t('prompts.view.' + view));
            const icons = ['<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>','<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>','<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18M3 15h18"/>'];
            return `<button type="button" class="ainow-action-control" aria-label="${label}" title="${label}" aria-pressed="${this.currentPromptView===view}" onclick="App.setPromptView('${view}')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${icons[i]}</svg></button>`;
        }).join('');
        const html = pageItems.map((p,i) => `
            <article class="ainow-template-card" onclick="App.openPromptCard(event,${i})">
                <div class="ainow-card-header"><span class="ainow-template-badge">${escapeHtml(p.subject || I18n.t('prompts.cat.'+category))}</span>
                <button type="button" class="ainow-action-control" aria-label="${escapeHtml(I18n.t('prompts.copy')+' · '+p.title)}" title="${escapeHtml(I18n.t('prompts.copy'))}" onclick="App.copyPromptCard(${i},this)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button></div>
                <h3 class="ainow-template-title"><button type="button" onclick="App.openPromptDetail(${i})">${escapeHtml(p.title)}</button></h3>
                <p class="ainow-template-preview">${escapeHtml(p.prompt)}</p>
                <div class="ainow-template-tags">${[p.grade,...(p.tags||[]).slice(0,3)].filter(Boolean).map(tag=>`<span>${escapeHtml(tag)}</span>`).join('')}</div>
            </article>`).join('');

        list.innerHTML = html || `
            <div class="pc-empty-state">
                <div class="pc-empty-state-icon" aria-hidden="true">🔎</div>
                <div class="pc-empty-state-title">${escapeHtml(I18n.t('prompts.empty'))}</div>
                <div class="pc-empty-state-sub">${escapeHtml(I18n.t('prompts.empty.try'))}</div>
            </div>`;
        this._applyViewI18n(list);

        if (pagContainer) {
            if (totalPages > 1) {
                let pagHtml = '<div class="pc-pagination">';

                const prevDisabled = this.currentPromptPage === 1 ? 'disabled' : '';
                pagHtml += `<button class="pag-btn" aria-label="${escapeHtml(I18n.t('pagination.previous'))}" ${prevDisabled} onclick="App.goToPromptPage(${this.currentPromptPage - 1})"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>`;

                this._paginationWindow(this.currentPromptPage, totalPages).forEach(item => {
                    if (item === '…') {
                        pagHtml += '<span class="pag-gap" aria-hidden="true">…</span>';
                        return;
                    }
                    const activeClass = item === this.currentPromptPage ? 'active' : '';
                    const current = item === this.currentPromptPage ? ' aria-current="page"' : '';
                    pagHtml += `<button class="pag-num ${activeClass}" aria-label="${escapeHtml(I18n.t('pagination.page'))} ${item}"${current} onclick="App.goToPromptPage(${item})">${item}</button>`;
                });

                const nextDisabled = this.currentPromptPage === totalPages ? 'disabled' : '';
                pagHtml += `<button class="pag-btn" aria-label="${escapeHtml(I18n.t('pagination.next'))}" ${nextDisabled} onclick="App.goToPromptPage(${this.currentPromptPage + 1})"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>`;

                pagHtml += '</div>';
                pagContainer.innerHTML = pagHtml;
            } else {
                pagContainer.innerHTML = '';
            }
        }
    },

    _paginationWindow(current, total, radius = 1) {
        if (total <= 7) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }
        const pages = new Set([1, total, current]);
        for (let i = 1; i <= radius; i++) {
            if (current - i > 1) pages.add(current - i);
            if (current + i < total) pages.add(current + i);
        }

        if (current <= 3) { pages.add(2); pages.add(3); pages.add(4); }
        if (current >= total - 2) { pages.add(total - 1); pages.add(total - 2); pages.add(total - 3); }

        const sorted = [...pages].filter(p => p >= 1 && p <= total).sort((a, b) => a - b);
        const out = [];
        sorted.forEach((p, i) => {
            if (i > 0 && p - sorted[i - 1] > 1) out.push('…');
            out.push(p);
        });
        return out;
    },

    goToPromptPage(page) {
        this.currentPromptPage = page;
        this.renderPrompts(this.currentPromptCategory, this.currentPromptSubcategory);

        const scrollArea = document.getElementById('main-content');
        if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
    },

    _pagePrompts: [],
    _detailPrompt: null,

    openPromptDetail(index) {
        const p = this._pagePrompts[index];
        if (!p) return;
        this._detailPrompt = p;

        const modal = document.getElementById('prompt-detail-modal');
        const body = document.getElementById('prompt-detail-body');
        const title = document.getElementById('prompt-detail-title');
        const meta = document.getElementById('prompt-detail-meta');
        if (!modal || !body || !title) return;

        title.textContent = p.title;

        if (meta) {
            const bits = [];
            if (p.subcategory) bits.push(I18n.t('prompts.sub.' + p.subcategory));
            if (p.subject) bits.push(p.subject);
            if (p.grade) bits.push(p.grade);
            const seen=new Set();
            meta.innerHTML=[...bits,...(p.tags||[])].filter(value=>{const key=String(value).trim().toLocaleLowerCase();if(!key||seen.has(key))return false;seen.add(key);return true;}).map(value=>`<span>${escapeHtml(value)}</span>`).join('');
        }

        this._detailText=null; this._detailEditing=false; this._renderPromptDetail();

        this._detailReturnFocus = document.activeElement;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        this._updateBodyScrollState();

        const first = modal.querySelector('.prompt-dialog-reader');
        if (first) setTimeout(() => first.focus(), 0);

        this._detailTrapHandler = (e) => {
            if (e.key !== 'Tab') return;
            const f = [...modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(el=>el.getClientRects().length);
            if (!f.length) return;
            const a = f[0], z = f[f.length - 1];
            if (e.shiftKey && document.activeElement === a) { z.focus(); e.preventDefault(); }
            else if (!e.shiftKey && document.activeElement === z) { a.focus(); e.preventDefault(); }
        };
        modal.addEventListener('keydown', this._detailTrapHandler);
    },

    _renderPromptDetail() {
        if (!this._detailPrompt) return;
        const ui=AINOWPromptText.ui(I18n.lang), body=document.getElementById('prompt-detail-body'), editor=document.getElementById('prompt-detail-editor'), input=document.getElementById('prompt-detail-input');
        const value=this._detailText===null?this._detailPrompt.prompt:this._detailText;
        body.hidden=!!this._detailEditing; editor.hidden=!this._detailEditing;
        body.innerHTML=AINOWPromptText.render(value); input.value=value;
        editor.querySelector('span').textContent=ui.instructions;
        document.getElementById('prompt-detail-hint').textContent=AINOWPromptActions.ui(I18n.lang).hint;
        const actions=document.getElementById('prompt-detail-ai');
        actions.innerHTML=AINOWPromptActions.render(I18n.lang);
        if(!this._detailAiDispose)this._detailAiDispose=AINOWPromptActions.bind(actions,tool=>this.openDetailWithAI(tool.url));
        document.getElementById('prompt-detail-tools').innerHTML=`<span>${escapeHtml(this._detailEditing?ui.editing:ui.instructions)}</span><div>${this._detailText!==null?`<button type="button" onclick="App.resetPromptCopy()">${escapeHtml(ui.reset)}</button>`:''}<button type="button" onclick="App.editPromptCopy()">${escapeHtml(this._detailEditing?ui.preview:ui.edit)}</button></div>`;
    },

    editPromptCopy() {
        if (!this._detailPrompt) return;
        this._detailEditing=!this._detailEditing;
        if(this._detailEditing&&this._detailText===null)this._detailText=AINOWPromptText.editable(this._detailPrompt.prompt);
        this._renderPromptDetail();
        if(this._detailEditing)document.getElementById('prompt-detail-input').focus();
    },

    resetPromptCopy() { this._detailText=null;this._detailEditing=false;this._renderPromptDetail(); },

    closePromptDetail() {
        const modal = document.getElementById('prompt-detail-modal');
        if (!modal || !modal.classList.contains('open')) return;
        this._detailAiDispose?.();this._detailAiDispose=null;
        this._moveFocusOutOfModal(modal, this._detailReturnFocus);
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        if (this._detailTrapHandler) {
            modal.removeEventListener('keydown', this._detailTrapHandler);
            this._detailTrapHandler = null;
        }
        this._detailReturnFocus = null;
        this._detailPrompt = null;
        this._updateBodyScrollState();
    },

    copyDetailPrompt(btn) {
        if (this._detailPrompt) this._copyPromptText(this._detailText===null?this._detailPrompt.prompt:this._detailText, btn);
    },

    _copyPromptText(text, btn) {
        const done = () => {
            this.showToast(I18n.t('prompts.copied'));
            if (!btn) return;
            const original = btn.innerHTML;
            btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg><span class="prompt-dialog-action-label">${escapeHtml(I18n.t('prompts.copied'))}</span>`;
            setTimeout(() => { btn.innerHTML = original; }, 2000);
        };
        const copy = async () => {
            try { await navigator.clipboard.writeText(text); }
            catch (_) {
                const field = document.createElement('textarea');
                field.value = text; field.style.position = 'fixed'; field.style.opacity = '0';
                document.body.append(field); field.select();
                const copied = document.execCommand('copy'); field.remove(); btn?.focus();
                if (!copied) throw new Error('Copy unavailable');
            }
        };
        copy().then(done).catch(() => this.showToast(I18n.t('prompts.copy_failed')));
    },

    openDetailWithAI(url) {
        const p = this._detailPrompt;
        if (p) this._copyPromptText(this._detailText===null?p.prompt:this._detailText);
        window.open(url, '_blank', 'noopener');
    },

    showToast(msg) {
        const el = document.getElementById('toast');
        if (!el) return;
        el.textContent = msg;
        el.classList.add('show');
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
    },

    toggleFAQ(el) {
        const ans = el.querySelector('.faq-ans');
        const ch  = el.querySelector('.faq-ch');
        if (!ans) return;
        const open = ans.style.display === 'block';
        ans.style.display = open ? 'none' : 'block';
        if (ch) ch.style.transform = open ? '' : 'rotate(180deg)';
        el.setAttribute('aria-expanded', String(!open));
    },

    async openResourcesWidget(widget) {
        await this.switchView('resources');
        if (window.ResourceManager) {
            window.ResourceManager.switchWidget(widget);
        }
    },

    currentGuideCategory: 'foundations',

    _guideCategoryMap: {
        foundations: ['intro', 'literacy', 'definition', 'functionality', 'history', 'applications'],
        practice:    ['prompts', 'agents', 'architecture', 'prompt-advanced', 'memory-rag', 'performance-design', 'agent-advanced'],
        reference:   ['safety-limits', 'future-principles', 'school-context', 'integrity-feedback', 'glossary', 'roadmap'],
    },

    switchGuideCategory(cat) {
        this.currentGuideCategory = cat;
        this.renderGuideChapterTabs();
        this.renderSidebarCtx('guide');
        const sections = this._guideCategoryMap[cat] || [];
        const first = sections.find(id => (typeof DOCS_DATA !== 'undefined') && DOCS_DATA.find(s => s.id === id));
        if (first) Router.renderContent(first);
    },

    renderGuideChapterTabs() {
        const el = document.getElementById('guide-chapter-tabs');
        if (!el || typeof DOCS_DATA === 'undefined') return;

        const t = (k) => I18n.t(k);
        const cat = this.currentGuideCategory || 'foundations';

        const categories = [
            {
                id: 'foundations',
                label: t('guide.cat.foundations'),
                icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
            },
            {
                id: 'practice',
                label: t('guide.cat.practice'),
                icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
            },
            {
                id: 'reference',
                label: t('guide.cat.reference'),
                icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
            },
        ];

        const counts = {};
        categories.forEach(c => {
            counts[c.id] = (this._guideCategoryMap[c.id] || []).filter(id => DOCS_DATA.find(s => s.id === id)).length;
        });

        let activeChapterId = null;
        const activeEl = document.querySelector('.sb-sub.active');
        if (activeEl && activeEl.id && activeEl.id.startsWith('sidebar-')) {
            activeChapterId = activeEl.id.replace('sidebar-', '');
        }

        let catHtml = '<div class="prompts-cat-grid">';
        categories.forEach(c => {
            catHtml += `
                <button class="prompts-cat-btn ${cat === c.id ? 'active' : ''}"
                        onclick="App.switchGuideCategory('${c.id}')">
                    <div class="prompts-cat-btn-head">
                        ${c.icon}
                        <span class="prompts-cat-btn-label">${c.label}</span>
                        <span class="prompts-cat-btn-count">${counts[c.id]}</span>
                    </div>
                </button>`;
        });
        catHtml += '</div>';

        const chapterIds = this._guideCategoryMap[cat] || [];
        let pillHtml = '<div class="prompts-sub-row">';
        chapterIds.forEach(id => {
            const section = DOCS_DATA.find(s => s.id === id);
            if (!section) return;
            const i18nKey = 'guide.section.' + id;
            const translated = t(i18nKey);
            const label = (translated !== i18nKey) ? translated : section.title.replace(/^[IVX]+\.\s*/, '');
            const isActive = id === activeChapterId;
            pillHtml += `<button class="prompts-sub-pill guide-chapter-pill ${isActive ? 'active' : ''}"
                                 id="guide-pill-${id}"
                                 onclick="Router.renderContent('${id}')">
                             ${label}
                         </button>`;
        });
        pillHtml += '</div>';

        el.innerHTML = catHtml + pillHtml;
    },

    _promptSubIcons: {
        all: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
        primary_lower: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        primary_upper: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
        secondary: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg>',
        director: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/></svg>',
        pedagogue: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
        psychologist: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>',
        secretary: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
        department_head: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
        lecturer: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        researcher: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"/><path d="M14 9.3V2"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>',
        student_services: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>',
        doctoral: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/><line x1="22" y1="7" x2="22" y2="13"/></svg>',
        quality: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3z"/><polyline points="9 12 11 14 15 10"/></svg>',
        leadership: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="3"/><path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/><polyline points="9 3 12 1 15 3"/></svg>',
    },

    _sidebarPromptSubLink(subId, count, category) {
        const label = I18n.t('prompts.sub.' + subId);
        const isActive = this.currentPromptCategory === category && this.currentPromptSubcategory === subId;
        const icon = this._promptSubIcons[subId] || '';
        return `
            <button class="sb-sub ${isActive ? 'active' : ''}"
                    onclick="App.switchPromptSubcategory('${subId}', '${category}')">
                <span class="sb-sub-icon" aria-hidden="true">${icon}</span>
                <span class="sb-sub-label">${label}</span>
                <span class="sb-sub-count">${count}</span>
            </button>
        `;
    },

    _openPromptLevel: undefined,

    togglePromptLevel(catId) {
        const activeCat = this.currentPromptCategory || 'primary';
        const currentlyOpen = this._openPromptLevel === undefined ? activeCat : this._openPromptLevel;

        if (currentlyOpen === catId) {
            this._openPromptLevel = null;
        } else {
            this._openPromptLevel = catId;
            if (activeCat !== catId) {
                this.switchPromptCategory(catId);
                return;
            }
        }
        this.renderSidebarCtx('prompts');
    },

    _initOfflineIndicator() {
        const update = () => {
            const el = document.getElementById('offline-indicator');
            if (el) el.classList.toggle('visible', !navigator.onLine);
        };
        window.addEventListener('online', update);
        window.addEventListener('offline', update);
        update();
    },

    _initInstallPrompt() {
        if (window.matchMedia('(display-mode: standalone)').matches || navigator.standalone) return;

        const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
        const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
        let bannerShown = false;
        try { bannerShown = localStorage.getItem('ainow-install-banner-shown') === '1'; } catch(e) {}

        if (window._pwaPrompt) {
            this._deferredInstallPrompt = window._pwaPrompt;
            if (isMobile && !bannerShown) setTimeout(() => this._showInstallBanner(), 2500);
        }

        if (isIOS) {
            if (!bannerShown) setTimeout(() => this._showInstallBanner(), 2500);
        }

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this._deferredInstallPrompt = e;
            window._pwaPrompt = e;
            if (isMobile && !bannerShown) {
                bannerShown = true;
                setTimeout(() => this._showInstallBanner(), 2500);
            }
        });

        window.addEventListener('appinstalled', () => {
            this._deferredInstallPrompt = null;
            window._pwaPrompt = null;
            document.getElementById('install-banner')?.remove();
            try { localStorage.setItem('ainow-install-banner-shown', '1'); } catch(e) {}
        });
    },

    _showInstallBanner() {
        if (document.getElementById('install-banner')) return;
        const t = (k, fb) => (I18n && I18n.t(k) !== k) ? I18n.t(k) : fb;
        const banner = document.createElement('div');
        banner.id = 'install-banner';
        banner.innerHTML = `
            <img src="assets/logo.svg" class="install-banner-logo" alt="AINOW" aria-hidden="true" decoding="async">
            <div class="install-banner-text">
                <strong>AINOW Education</strong>
                <span>${t('pwa.banner.desc', 'Add to your home screen for quick access')}</span>
            </div>
            <button class="install-banner-btn" onclick="document.getElementById('install-banner').remove(); App.triggerInstall();">
                ${t('pwa.install', 'Install')}
            </button>
            <button class="install-banner-close" onclick="document.getElementById('install-banner').remove();" aria-label="Close">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
        `;
        document.body.appendChild(banner);
        try { localStorage.setItem('ainow-install-banner-shown', '1'); } catch(e) {}
        setTimeout(() => banner?.remove(), 10000);
    },

    _maybeShowOnboarding() {
        let seen = false;
        try { seen = localStorage.getItem(this._onboardingSeenKey) === '1'; } catch(e) {}
        if (seen) return;
        setTimeout(() => this.openOnboardingModal(), 600);
    },

    openOnboardingModal(force = false) {
        if (!force) {
            let seen = false;
            try { seen = localStorage.getItem(this._onboardingSeenKey) === '1'; } catch(e) {}
            if (seen) return;
        }

        const modal = document.getElementById('onboarding-modal');
        if (!modal || modal.classList.contains('open')) return;

        this._onboardingStepIndex = 0;
        this._onboardingReturnFocus = document.activeElement;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        this._updateBodyScrollState();
        this._syncOnboardingStep();

        this._onboardingTrapHandler = (e) => {
            if (e.key !== 'Tab') return;
            const focusables = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                last.focus(); e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === last) {
                first.focus(); e.preventDefault();
            }
        };
        modal.addEventListener('keydown', this._onboardingTrapHandler);
    },

    _syncOnboardingStep() {
        const modal = document.getElementById('onboarding-modal');
        if (!modal) return;
        const idx = this._onboardingStepIndex;
        const total = this._onboardingStepCount;
        modal.style.setProperty('--onboarding-progress-pct', `${((idx + 1) / total) * 100}%`);
        modal.querySelectorAll('[data-onboarding-step]').forEach((el) => {
            const n = parseInt(el.getAttribute('data-onboarding-step'), 10);
            const on = n === idx;
            el.hidden = !on;
            el.setAttribute('aria-hidden', on ? 'false' : 'true');
        });
        const prog = document.getElementById('onboarding-progress');
        if (prog && typeof I18n !== 'undefined') {
            const raw = I18n.t('onboarding.progress');
            prog.textContent = String(raw)
                .replace(/\{n\}/g, String(idx + 1))
                .replace(/\{t\}/g, String(total));
        }
        const back = document.getElementById('onboarding-btn-back');
        const next = document.getElementById('onboarding-btn-next');
        const done = document.getElementById('onboarding-btn-done');
        if (back) back.hidden = idx === 0;
        if (next) next.hidden = idx >= total - 1;
        if (done) done.hidden = idx < total - 1;
        if (typeof I18n !== 'undefined') I18n.applyTranslations(modal);
        const focusEl = (done && !done.hidden) ? done : next;
        if (focusEl) setTimeout(() => focusEl.focus(), 0);
    },

    onboardingGoNext() {
        if (this._onboardingStepIndex < this._onboardingStepCount - 1) {
            this._onboardingStepIndex++;
            this._syncOnboardingStep();
        } else {
            this.closeOnboardingModal();
        }
    },

    onboardingGoBack() {
        if (this._onboardingStepIndex > 0) {
            this._onboardingStepIndex--;
            this._syncOnboardingStep();
        }
    },

    _moveFocusOutOfModal(modal, returnEl) {
        if (!modal || !modal.contains(document.activeElement)) return;
        if (returnEl && document.body.contains(returnEl) && typeof returnEl.focus === 'function') {
            try { returnEl.focus({ preventScroll: true }); } catch (e) {}
            if (!modal.contains(document.activeElement)) return;
        }
        const main = document.getElementById('main-content');
        if (main) {
            if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
            try { main.focus({ preventScroll: true }); } catch (e) {}
        }
    },

    closeOnboardingModal() {
        const modal = document.getElementById('onboarding-modal');
        if (!modal || !modal.classList.contains('open')) return;

        const returnTo = this._onboardingReturnFocus;
        this._moveFocusOutOfModal(modal, returnTo);

        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        if (this._onboardingTrapHandler) {
            modal.removeEventListener('keydown', this._onboardingTrapHandler);
            this._onboardingTrapHandler = null;
        }
        try { localStorage.setItem(this._onboardingSeenKey, '1'); } catch(e) {}

        this._onboardingReturnFocus = null;
        this._onboardingStepIndex = 0;
        this._updateBodyScrollState();
    },

    resetOnboarding() {
        try { localStorage.removeItem(this._onboardingSeenKey); } catch(e) {}
        this.openOnboardingModal(true);
    },

    triggerInstall() {
        if (this._deferredInstallPrompt) {
            this._deferredInstallPrompt.prompt();
            this._deferredInstallPrompt.userChoice.then((choice) => {
                if (choice.outcome === 'accepted') {
                    this._deferredInstallPrompt = null;
                    window._pwaPrompt = null;
                }
            });
        } else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
            this._showIOSInstallGuide();
        }
    },

    _showIOSInstallGuide() {
        document.getElementById('ios-install-guide')?.remove();
        const t = (k, fb) => (I18n && I18n.t(k) !== k) ? I18n.t(k) : fb;
        const el = document.createElement('div');
        el.id = 'ios-install-guide';
        el.innerHTML = `
            <div class="ios-guide-backdrop" onclick="document.getElementById('ios-install-guide').remove()"></div>
            <div class="ios-guide-sheet" role="dialog" aria-modal="true" aria-label="${t('pwa.ios.title', 'Install App')}">
                <div class="ios-guide-handle"></div>
                <p class="ios-guide-title">${t('pwa.ios.title', 'Install App')}</p>
                <ol class="ios-guide-steps">
                    <li class="ios-guide-step">
                        <span class="ios-guide-step-num">1</span>
                        <div class="ios-guide-step-body">
                            <strong>${t('pwa.ios.step1', 'Tap the Share button')}</strong>
                            <span>${t('pwa.ios.step1desc', 'At the bottom of Safari')}</span>
                        </div>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--primary)" stroke-width="2" aria-hidden="true"><path d="M8 12H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-3"/><polyline points="12 3 12 15"/><polyline points="8 7 12 3 16 7"/></svg>
                    </li>
                    <li class="ios-guide-step">
                        <span class="ios-guide-step-num">2</span>
                        <div class="ios-guide-step-body">
                            <strong>${t('pwa.ios.step2', 'Tap "Add to Home Screen"')}</strong>
                            <span>${t('pwa.ios.step2desc', 'Scroll down in the share sheet')}</span>
                        </div>
                    </li>
                    <li class="ios-guide-step">
                        <span class="ios-guide-step-num">3</span>
                        <div class="ios-guide-step-body">
                            <strong>${t('pwa.ios.step3', 'Tap "Add" to confirm')}</strong>
                            <span>${t('pwa.ios.step3desc', 'The app will appear on your home screen')}</span>
                        </div>
                    </li>
                </ol>
                <button class="ios-guide-close" onclick="document.getElementById('ios-install-guide').remove()">
                    ${t('pwa.ios.close', 'Got it')}
                </button>
            </div>
        `;
        document.body.appendChild(el);
    },

    showUpdateBanner() {
        if (document.getElementById('sw-update-banner')) return;
        const t = (k) => I18n.t(k);
        const banner = document.createElement('div');
        banner.id = 'sw-update-banner';
        banner.innerHTML = `
            <span>${t('pwa.update.msg')}</span>
            <button onclick="window.location.reload()">${t('pwa.update.btn')}</button>
            <button class="sw-banner-close" onclick="this.closest('#sw-update-banner').remove()" aria-label="Close">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
        `;
        document.body.appendChild(banner);
    },

    loadTheme() {
        let saved = 'light';
        try { saved = localStorage.getItem('ainow-theme') || 'light'; } catch(e) {}
        this.setTheme(saved);
    },

    toggleTheme() {
        const next = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(next);
    },

    setTheme(theme) {
        this.theme = theme;
        document.body.setAttribute('data-theme', theme);
        try { localStorage.setItem('ainow-theme', theme); localStorage.setItem('theme', theme); } catch(e) {}

        const icon = document.getElementById('theme-icon');
        if (icon) icon.innerHTML = AINOWPlatform.icon(theme === 'light' ? 'Moon' : 'Sun');

        document.body.style.opacity = '1';
    },

    openPrivacyModal() {
        location.href = AINOWPlatform.href('policies');
    },

    closePrivacyModal() {
        const modal = document.getElementById('privacy-modal');
        if (!modal || !modal.classList.contains('open')) return;
        const returnTo = this._modalReturnFocus;
        this._moveFocusOutOfModal(modal, returnTo);
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        this._updateBodyScrollState();
        if (this._modalTrapHandler) {
            modal.removeEventListener('keydown', this._modalTrapHandler);
            this._modalTrapHandler = null;
        }
        this._modalReturnFocus = null;
    },

    _syncMenuVisibility() {
        const sidebar = document.querySelector('.app-sidebar');
        const hidden = window.matchMedia('(max-width:767.98px)').matches && !sidebar?.classList.contains('open');
        if (sidebar) {
            sidebar.inert = hidden;
            if (hidden) sidebar.setAttribute('aria-hidden','true');
            else sidebar.removeAttribute('aria-hidden');
        }
    },

    toggleMobileMenu() {
        const sidebar = document.querySelector('.app-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('open');
        const open = sidebar?.classList.contains('open');
        this._syncMenuVisibility();
        document.querySelectorAll('.mobile-menu-toggle,.edu-library-filter').forEach(button=>button.setAttribute('aria-expanded',String(!!open)));
        if (open) {
            this._menuPreviousFocus = document.activeElement;
            this._menuBodyOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            sidebar.querySelector('button,a[href]')?.focus();
            this._menuTrap = event => {
                if (event.key !== 'Tab') return;
                const nodes = [...sidebar.querySelectorAll('button,a[href],input,select')].filter(el=>el.offsetParent!==null);
                const first=nodes[0],last=nodes[nodes.length-1];
                if (event.shiftKey&&document.activeElement===first) {event.preventDefault();last?.focus();}
                else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
            };
            document.addEventListener('keydown',this._menuTrap);
        } else {
            document.body.style.overflow = this._menuBodyOverflow || '';
            if(this._menuTrap)document.removeEventListener('keydown',this._menuTrap);
            this._menuPreviousFocus?.focus?.();
        }
    },

    toggleLangMenu() {
        const dropdown = document.getElementById('lang-dropdown');
        const trigger = document.querySelector('[data-header-control="language"]');
        if (!dropdown || !trigger) return;
        const open = dropdown.hidden;
        if (open) dropdown.innerHTML = AINOWPlatform.languages.map(item => '<button type="button" aria-pressed="'+(item.code===I18n.lang)+'" onclick="I18n.setLang(\''+item.code+'\'); App.closeLangMenu(true)"><span>'+item.name+'</span>'+(item.code===I18n.lang?AINOWPlatform.icon('Check'):'')+'</button>').join('');
        dropdown.hidden = !open;
        trigger.setAttribute('aria-expanded', String(open));
    },

    closeLangMenu(restoreFocus = false) {
        const dropdown = document.getElementById('lang-dropdown');
        const trigger = document.querySelector('[data-header-control="language"]');
        const wasOpen = dropdown && !dropdown.hidden;
        if (dropdown) dropdown.hidden = true;
        trigger?.setAttribute('aria-expanded', 'false');
        if (restoreFocus && wasOpen) trigger?.focus();
        const code = document.getElementById('header-language-code');
        if (code) code.textContent = I18n.lang.toUpperCase();
    },

    _initPullToRefresh() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        mainContent.addEventListener('touchstart', (e) => this._handlePullStart(e, mainContent), { passive: false });
        mainContent.addEventListener('touchmove', (e) => this._handlePullMove(e, mainContent), { passive: false });
        mainContent.addEventListener('touchend', (e) => this._handlePullEnd(e, mainContent), { passive: true });
    },

    _handlePullStart(e, container) {
        if (this._isRefreshing) return;
        this._startY = e.touches[0].clientY;
        if (container.scrollTop <= 5) this._pullToRefreshActive = true;
    },

    _handlePullMove(e, container) {
        if (!this._pullToRefreshActive || this._isRefreshing) return;

        const currentY = e.touches[0].clientY;
        const diff = currentY - this._startY;

        if (diff > 0 && container.scrollTop <= 5) {
            e.preventDefault();
            const pullIndicator = this._ensurePullIndicator();
            const threshold = 80;
            const progress = Math.min(diff / threshold, 1);
            const translateY = Math.min(diff * 0.55, threshold * 0.55);

            pullIndicator.style.opacity = String(progress);
            pullIndicator.style.transform = `translateX(-50%) translateY(${translateY}px) scale(${0.5 + progress * 0.5})`;

            const label = pullIndicator.querySelector('.ptr-label');
            if (diff > threshold) {
                pullIndicator.classList.add('ptr-ready');
                if (label) label.textContent = I18n ? I18n.t('ptr.release') || 'Release to refresh' : 'Release to refresh';
            } else {
                pullIndicator.classList.remove('ptr-ready');
                if (label) label.textContent = I18n ? I18n.t('ptr.pull') || 'Pull to refresh' : 'Pull to refresh';
            }
        }
    },

    _handlePullEnd(e, container) {
        if (!this._pullToRefreshActive) return;
        this._pullToRefreshActive = false;

        const pullIndicator = document.getElementById('pull-to-refresh-indicator');

        const currentY = e.changedTouches[0].clientY;
        const diff = currentY - this._startY;

        if (diff > 80 && !this._isRefreshing) {
            this._refreshCurrentView(container);
        } else if (pullIndicator) {
            pullIndicator.style.opacity = '0';
            pullIndicator.style.transform = 'translateX(-50%) translateY(0) scale(0.5)';
        }
    },

    _ensurePullIndicator() {
        let indicator = document.getElementById('pull-to-refresh-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'pull-to-refresh-indicator';
            indicator.innerHTML = `
                <div class="ptr-bubble">
                    <svg class="ptr-spinner" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5">
                        <circle cx="12" cy="12" r="10" stroke-dasharray="40" stroke-dashoffset="10" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="ptr-label">Pull to refresh</div>
            `;
            if (!document.getElementById('ptr-spin-style')) {
                const style = document.createElement('style');
                style.id = 'ptr-spin-style';
                style.textContent = `
                    @keyframes ptr-spin { to { transform: rotate(360deg); } }
                    .ptr-spinner { animation: ptr-spin 0.9s linear infinite; }
                `;
                document.head.appendChild(style);
            }
            document.body.appendChild(indicator);
        }
        return indicator;
    },

    async _refreshCurrentView(container) {
        if (this._isRefreshing) return;
        this._isRefreshing = true;

        const scrollPos = container.scrollTop;
        const pullIndicator = document.getElementById('pull-to-refresh-indicator');
        if (pullIndicator) {
            const label = pullIndicator.querySelector('.ptr-label');
            if (label) label.textContent = I18n ? I18n.t('ptr.refreshing') || 'Refreshing…' : 'Refreshing…';
            pullIndicator.style.opacity = '1';
            pullIndicator.style.transform = 'translateX(-50%) translateY(44px) scale(1)';
        }

        try {
            await I18n.loadLangData(I18n.lang);

            const view = this.currentView;
            document.querySelectorAll('.view-section').forEach(el => { el.dataset.loaded = ''; });

            await this.switchView(view);

            this._prefetchPromptCounts();

            container.scrollTop = scrollPos;
        } finally {
            this._isRefreshing = false;
            if (pullIndicator) {
                pullIndicator.style.opacity = '0';
                pullIndicator.style.transform = 'translateX(-50%) translateY(0) scale(0.5)';
            }
        }
    },

    _initOutsideClickHandlers() {
        document.addEventListener('click', (e) => {
            const langSwitcher = document.getElementById('lang-switcher');
            const sidebar = document.querySelector('.app-sidebar');
            const overlay = document.getElementById('sidebar-overlay');

            if (langSwitcher && !langSwitcher.contains(e.target)) {
                this.closeLangMenu();
            }

            if (sidebar && overlay && !sidebar.contains(e.target) && !overlay.contains(e.target)) {
                const menuToggle = document.querySelector('.mobile-menu-toggle');
                if ((!menuToggle || !menuToggle.contains(e.target)) && !e.target.closest('.edu-library-filter')) {
                    if (sidebar.classList.contains('open')) this.toggleMobileMenu();
                }
            }
        });

    },

    _updateBodyScrollState() {
        const hasOpenModal = document.querySelector('.modal-overlay.open');
        document.body.style.overflow = hasOpenModal ? 'hidden' : 'auto';
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
