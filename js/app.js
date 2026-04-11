const APP_VERSION = 'v0.81';

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

const App = {
    currentView: 'home',
    theme: 'light',
    currentTipIndex: Math.floor(Math.random() * 10) + 1,

    _deferredInstallPrompt: null,
    _isRefreshing: false,
    _pullToRefreshActive: false,
    _startY: 0,
    _scrollPositions: {},

    async init() {
        if (window.I18n) await I18n.init();
        window.onerror = (msg, src, line, col, err) => {
            console.error(`[AINOW Error] ${msg} (${src}:${line}:${col})`, err);
            return false;
        };
        window.onunhandledrejection = (event) => {
            console.error('[AINOW Unhandled Promise]', event.reason);
        };

        this.loadTheme();
        this._initOfflineIndicator();
        this._initInstallPrompt();
        this._initPullToRefresh();
        this._initOutsideClickHandlers();

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === I18n.lang);
        });

        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                this.switchView(view);
            });
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closePrivacyModal();
                const sidebar = document.querySelector('.app-sidebar');
                const overlay = document.getElementById('sidebar-overlay');
                if (sidebar) sidebar.classList.remove('open');
                if (overlay) overlay.classList.remove('open');
            }
        });

        if (window.Engine) Engine.init();

        this.switchView('home');
        document.body.style.opacity = '1';

        const vEl = document.getElementById('footer-version');
        if (vEl) vEl.textContent = APP_VERSION;
    },

    async switchView(viewId) {
        this.closeLangMenu();

        // Save scroll position for the current view before switching
        const mainContent = document.getElementById('main-content');
        if (mainContent && this.currentView && this.currentView !== viewId) {
            this._scrollPositions[this.currentView] = mainContent.scrollTop;
        }

        this.currentView = viewId;

        document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
        const activeBtn = document.querySelector(`.nav-tab[data-view="${viewId}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        await this.loadView(viewId);

        document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
        const activeSection = document.getElementById(`view-${viewId}`);
        if (activeSection) activeSection.classList.remove('hidden');

        this.renderSidebarCtx(viewId);

        const sidebar = document.querySelector('.app-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('open');

        // Restore saved scroll position, or reset to top for new/first visit
        if (mainContent) {
            const saved = this._scrollPositions[viewId];
            mainContent.scrollTop = (saved !== undefined) ? saved : 0;
        }

        if (viewId === 'guide') {
            const activeItem = document.querySelector('.sidebar-item.active');
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
        } else if (viewId === 'resources') {
            if (window.ResourceManager) window.ResourceManager.init();
        } else if (viewId === 'prompts') {
            this.currentPromptSearch = '';
            this.renderPromptCatTabs();
            this.renderPrompts(this.currentPromptCategory || 'teachers', this.currentPromptSubcategory || 'all');
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
        el.querySelectorAll('[data-i18n]').forEach(node => {
            node.textContent = I18n.t(node.getAttribute('data-i18n'));
        });
        el.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
            node.placeholder = I18n.t(node.getAttribute('data-i18n-placeholder'));
        });
    },

    renderSidebarCtx(viewId) {
        const sidebar = document.getElementById('sidebar-content');
        if (!sidebar) return;

        let html = '';

        if (viewId === 'home' || viewId === 'help' || viewId === 'resources') {
            const t = (k) => I18n.t(k);
            
            html = `
                <div style="padding: 8px 0;">
                    <div class="sidebar-section-title" style="padding: 0 16px; margin-bottom: 8px;">${viewId === 'resources' ? 'AINOW Society' : t('sidebar.quicklinks')}</div>

                    ${viewId === 'resources' ? `
                        <a href="https://www.ainow.mk" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                            <span>ainow.mk</span>
                        </a>
                        <a href="https://github.com/AINOW-Society" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/company/ainowmk" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 1 0 0 3.37m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                            <span>LinkedIn</span>
                        </a>
                    ` : `
                        <div class="sidebar-quick-link" onclick="App.switchView('guide')">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                            <span>${t('sidebar.guide.link')}</span>
                        </div>
                        <div class="sidebar-quick-link" onclick="App.switchView('prompts')">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            <span>${t('sidebar.prompts.link')}</span>
                        </div>
                        <div class="sidebar-quick-link" onclick="App.switchView('tools')">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                            <span>${t('sidebar.tools.link')}</span>
                        </div>
                    `}

                    ${this._renderSidebarAILinks()}
                    ${this.renderSidebarTip(viewId)}
                </div>
            `;
        } else if (viewId === 'guide') {
            const cat = this.currentGuideCategory || 'foundations';
            const t = (k) => I18n.t(k);

            const catIcons = {
                foundations: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
                practice:    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
                reference:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
            };

            const activeEl = document.querySelector('.sidebar-item.active');
            let activeSection = activeEl && activeEl.id ? activeEl.id.replace('sidebar-', '') : null;

            html = '<div class="sidebar-menu" style="margin-top: 10px;">';

            ['foundations', 'practice', 'reference'].forEach(cId => {
                const isActive = cat === cId;
                html += `
                    <div class="sidebar-item ${isActive ? 'active' : ''}" onclick="App.switchGuideCategory('${cId}'); App.renderSidebarCtx('guide');">
                        <div class="sidebar-item-icon">${catIcons[cId]}</div>
                        <span class="sidebar-item-label">${t('guide.cat.' + cId)}</span>
                    </div>`;
            });

            if (typeof DOCS_DATA !== 'undefined') {
                const chapterIds = this._guideCategoryMap[cat] || [];
                const chapters = chapterIds.map(id => DOCS_DATA.find(s => s.id === id)).filter(Boolean);
                if (chapters.length) {
                    html += `<div class="sidebar-section-title" style="margin-top:12px;">${t('guide.toc.chapters') || 'Поглавја'}</div>`;
                    chapters.forEach((section, idx) => {
                        const i18nKey = 'guide.section.' + section.id;
                        const translated = t(i18nKey);
                        const label = (translated !== i18nKey) ? translated : section.title.replace(/^[IVX]+\.\s*/, '');
                        const isChapterActive = section.id === activeSection;
                        html += `
                            <div class="sidebar-item ${isChapterActive ? 'active' : ''}" id="sidebar-${section.id}"
                                 onclick="Router.renderContent('${section.id}')" style="padding-left:20px;">
                                <div class="sidebar-item-icon" style="width:20px;height:20px;font-size:11px;font-weight:700;color:var(--text-tertiary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">${idx + 1}</div>
                                <span class="sidebar-item-label" style="font-size:13px;">${label}</span>
                            </div>`;
                    });
                }
            }

            html += `${this.renderSidebarTip(viewId)}</div>`;
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

            html = '<div class="sidebar-menu" style="margin-top: 10px;">';
            categories.forEach(cat => {
                const isActive = (this.currentToolCategory || 'all') === cat.id;
                html += `
                    <div class="sidebar-item ${isActive ? 'active' : ''}" onclick="App.filterTools('${cat.id}')">
                        <div class="sidebar-item-icon">${cat.icon}</div>
                        <span class="sidebar-item-label">${cat.title}</span>
                    </div>
                `;
            });
            html += `${this._renderSidebarAILinks_tools()}${this.renderSidebarTip(viewId)}</div>`;

            this.renderTools(this.currentToolCategory || 'all');
        } else if (viewId === 'prompts') {
            const t = (k) => I18n.t(k);
            const data = (typeof embeddedPromptsData !== 'undefined') ? embeddedPromptsData : {};
            const teachers = data.teachers || [];
            const admin = data.administration || [];
            const countSub = (arr, sub) => arr.filter(p => p.subcategory === sub).length;

            html = `
                <div style="padding: 4px 0;">
                    <div class="sidebar-section-title">${t('prompts.cat.teachers')}</div>
                    ${this._sidebarPromptSubLink('primary_lower', countSub(teachers, 'primary_lower'), 'teachers')}
                    ${this._sidebarPromptSubLink('primary_upper', countSub(teachers, 'primary_upper'), 'teachers')}
                    ${this._sidebarPromptSubLink('secondary',     countSub(teachers, 'secondary'), 'teachers')}
                    <div class="sidebar-section-title" style="margin-top:12px;">${t('prompts.cat.administration')}</div>
                    ${this._sidebarPromptSubLink('director',     countSub(admin, 'director'), 'administration')}
                    ${this._sidebarPromptSubLink('pedagogue',    countSub(admin, 'pedagogue'), 'administration')}
                    ${this._sidebarPromptSubLink('psychologist', countSub(admin, 'psychologist'), 'administration')}
                    ${this._sidebarPromptSubLink('secretary',    countSub(admin, 'secretary'), 'administration')}
                    ${this._renderSidebarAILinks_prompts()}
                    ${this.renderSidebarTip('prompts')}
                </div>
            `;
        } else if (viewId === 'about') {
            const t = (k) => I18n.t(k);
            html = `
                <div style="padding: 8px 0;">
                    <div class="sidebar-section-title" style="padding: 0 16px; margin-bottom: 8px;">AINOW Society</div>
                    <div class="sidebar-quick-link" onclick="App.switchAboutWidget('team'); document.getElementById('about-widget-team').scrollIntoView({behavior:'smooth'})">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <span>${t('about.sidebar.team')}</span>
                    </div>
                    <div class="sidebar-quick-link" onclick="App.switchAboutWidget('program'); document.getElementById('about-widget-program').scrollIntoView({behavior:'smooth'})">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                        <span>${t('about.sidebar.program')}</span>
                    </div>
                    <div class="sidebar-quick-link" onclick="App.switchAboutWidget('partners'); document.getElementById('about-widget-partners').scrollIntoView({behavior:'smooth'})">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                        <span>${t('about.sidebar.partners')}</span>
                    </div>

                    <div style="margin-top: 16px; border-top: 1px solid var(--border-light); padding-top: 12px;">
                        <div class="sidebar-section-title" style="padding: 0 16px; margin-bottom: 8px;">AINOW Society</div>
                        <a href="https://www.ainow.mk" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                            <span>ainow.mk</span>
                        </a>
                        <a href="https://github.com/AINOW-Society" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/company/ainowmk" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 1 0 0 3.37m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    ${this.renderSidebarTip(viewId)}
                </div>
            `;
        } else {
            html = `
                <div style="padding: 8px 0;">
                    <div class="sidebar-section-title" style="padding: 0 16px; margin-bottom: 8px;">AINOW Society</div>
                    <a href="https://www.ainow.mk" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        <span>ainow.mk</span>
                    </a>
                    <a href="https://github.com/AINOW-Society" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/company/ainowmk" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 1 0 0 3.37m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                        <span>LinkedIn</span>
                    </a>
                </div>
            `;
        }

        sidebar.innerHTML = html;
    },

    _renderSidebarSettings() {
        const lang = I18n.currentLang || 'mk';
        return `
            <div class="sidebar-mobile-settings">
                <div class="sidebar-mobile-settings-label">${I18n.t('sidebar.settings.label')}</div>
                <div class="sidebar-mobile-settings-row">
                    <button class="sidebar-lang-pill${lang==='mk'?' active':''}" data-lang="mk" onclick="I18n.setLang('mk'); App.toggleMobileMenu()">🇲🇰 MK</button>
                    <button class="sidebar-lang-pill${lang==='sq'?' active':''}" data-lang="sq" onclick="I18n.setLang('sq'); App.toggleMobileMenu()">🇦🇱 SQ</button>
                    <button class="sidebar-lang-pill${lang==='en'?' active':''}" data-lang="en" onclick="I18n.setLang('en'); App.toggleMobileMenu()">🇬🇧 EN</button>
                    <button class="sidebar-icon-btn" onclick="App.toggleTheme()" title="Смени тема" aria-label="Смени тема">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </button>
                    <button class="sidebar-icon-btn" onclick="App.switchView('help'); App.toggleMobileMenu()" title="Помош" aria-label="Помош">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </button>
                </div>
            </div>
        `;
    },

    _renderSidebarAILinks() {
        return `
            <div class="sidebar-ai-tools" style="padding: 12px 16px 4px; margin-top: 8px; border-top: 1px solid var(--border-light);">
                <div class="sidebar-section-title" style="margin-bottom: 6px;">${I18n.t('sidebar.ai.label')}</div>
                <a href="https://chat.openai.com" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span>ChatGPT</span>
                </a>
                <a href="https://gemini.google.com" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span>Gemini</span>
                </a>
                <a href="https://claude.ai" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
                    <span>Claude</span>
                </a>
            </div>
        `;
    },

    _renderSidebarAILinks_guide() {
        return `
            <div class="sidebar-ai-tools" style="padding: 12px 16px 4px; margin-top: 8px; border-top: 1px solid var(--border-light);">
                <div class="sidebar-section-title" style="margin-bottom: 6px;">${I18n.t('sidebar.ai.learning')}</div>
                <a href="https://claude.ai" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
                    <span>Claude</span>
                </a>
                <a href="https://chat.openai.com" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span>ChatGPT</span>
                </a>
            </div>
        `;
    },

    _renderSidebarAILinks_prompts() {
        return `
            <div class="sidebar-ai-tools" style="padding: 12px 16px 4px; margin-top: 8px; border-top: 1px solid var(--border-light);">
                <div class="sidebar-section-title" style="margin-bottom: 6px;">${I18n.t('sidebar.ai.test')}</div>
                <a href="https://chat.openai.com" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span>ChatGPT</span>
                </a>
                <a href="https://claude.ai" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
                    <span>Claude</span>
                </a>
            </div>
        `;
    },

    _renderSidebarAILinks_tools() {
        return `
            <div class="sidebar-ai-tools" style="padding: 12px 16px 4px; margin-top: 8px; border-top: 1px solid var(--border-light);">
                <div class="sidebar-section-title" style="margin-bottom: 6px;">${I18n.t('sidebar.ai.popular')}</div>
                <a href="https://chat.openai.com" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <span>ChatGPT</span>
                </a>
                <a href="https://claude.ai" target="_blank" rel="noopener" class="sidebar-quick-link" style="text-decoration:none;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
                    <span>Claude</span>
                </a>
            </div>
        `;
    },

    renderSidebarTip(viewId) {
        const t = (k) => I18n.t(k);
        let titleKey = 'sidebar.tip.label';
        let descKey = 'sidebar.tip.text.' + this.currentTipIndex;

        if (viewId === 'guide') {
            titleKey = 'sidebar.tip.guide.title';
            descKey = 'sidebar.tip.guide.desc';
        } else if (viewId === 'prompts') {
            titleKey = 'sidebar.tip.prompts.title';
            descKey = 'sidebar.tip.prompts.desc';
        } else if (viewId === 'tools') {
            titleKey = 'sidebar.tip.tools.title';
            descKey = 'sidebar.tip.tools.desc';
        } else if (viewId === 'resources') {
            titleKey = 'resources.pedagogy.label';
            const rnd = (Math.floor(Math.random() * 3) + 1);
            descKey = 'resources.pedagogy.tip.' + rnd;
        }

        return `
            <div class="sidebar-tip-box" style="margin: 20px 12px 0;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--primary);"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    <div class="sidebar-tip-label" style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em;">${t(titleKey)}</div>
                </div>
                <p class="sidebar-tip-text">${t(descKey)}</p>
            </div>
        `;
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
                <div class="page-hero-card" style="margin-bottom:20px;">
                    <div class="page-hero-card-icon" style="background:rgba(107,91,79,0.1);color:#6b5b4f;">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                    </div>
                    <div>
                        <h1 class="page-hero-title">${I18n.t('tools.hero.title')}</h1>
                        <p class="page-hero-sub">${I18n.t('tools.hero.subtitle')}</p>
                    </div>
                </div>
            `;
            grid.innerHTML = '';
            this._toolsData.forEach(tool => {
                grid.innerHTML += `
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
                `;
            });
            return;
        }

        const filtered = this._toolsData.filter(t => t.category === category);
        const catTitle = I18n.t('tools.cat.' + category);
        const countLabel = `${filtered.length} ${I18n.t('stats.tools')}`;

        header.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:20px; padding-bottom:14px; border-bottom:1px solid var(--border-light);">
                <div style="width:32px;height:32px;border-radius:8px;background:rgba(107,91,79,0.1);color:#6b5b4f;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <h2 style="font-size:17px;font-weight:700;color:var(--text-primary);margin:0;">${catTitle}</h2>
                <span style="font-size:12px;color:var(--text-tertiary);background:var(--bg-sidebar);border:1px solid var(--border-light);border-radius:20px;padding:2px 10px;margin-left:auto;">${countLabel}</span>
            </div>
        `;

        grid.innerHTML = '';
        filtered.forEach(tool => {
            grid.innerHTML += `
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
            `;
        });

        if (filtered.length === 0) {
            grid.innerHTML = '<div class="pc-empty">' + I18n.t('prompts.empty') + '</div>';
        }
    },

    currentPromptCategory: 'teachers',
    currentPromptSubcategory: 'all',
    currentPromptSearch: '',
    currentPromptPage: 1,
    promptsPerPage: 12,

    switchPromptCategory(cat) {
        this.currentPromptCategory = cat;
        this.currentPromptSubcategory = 'all';
        this.currentPromptSearch = '';
        this.currentPromptPage = 1;
        this.renderPromptCatTabs();
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
        this.renderPromptCatTabs();
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

    renderPrompts(category, subcategory) {
        const list = document.getElementById('prompts-list');
        const pagContainer = document.getElementById('prompts-pagination');
        if (!list) return;
        const header = document.getElementById('prompts-header');

        const allPrompts = embeddedPromptsData[category] || [];
        let filtered = allPrompts.filter(p => subcategory === 'all' || p.subcategory === subcategory);

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
                <div class="pc-topbar-title">${titleText}</div>
                <div class="pc-topbar-meta">${filtered.length} <span data-i18n="prompts.count.suffix">${I18n.t('prompts.count.suffix')}</span></div>
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

        let html = '';
        pageItems.forEach(p => {
            const badgeText = p.subcategory ? I18n.t('prompts.sub.' + p.subcategory) : I18n.t('prompts.cat.' + category);
            
            const subjectSpan = p.subject ? `<span class="pcm-tag">${p.subject}</span>` : '';
            const gradeSpan = p.grade ? `<span class="pcm-tag">${p.grade}</span>` : '';

            html += `
                <div class="pcm-card">
                    <div class="pcm-header">
                        <span class="pcm-category-badge">${badgeText}</span>
                        <div class="pcm-actions">
                            <button class="pcm-action-btn" title="${I18n.t('prompts.copy')}" onclick="App.copyPrompt(this)">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                            </button>
                            <div class="pcm-ai-launcher">
                                <button class="pcm-action-btn pcm-open-btn" title="${I18n.t('prompts.open_ai')}" onclick="App.toggleAIMenu(this)">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                </button>
                                <div class="pcm-ai-menu">
                                    <button class="pcm-ai-option" onclick="App.openWithAI(this,'https://chat.openai.com')">
                                        <span class="pcm-ai-dot" style="background:#10a37f"></span>ChatGPT
                                    </button>
                                    <button class="pcm-ai-option" onclick="App.openWithAI(this,'https://gemini.google.com')">
                                        <span class="pcm-ai-dot" style="background:#4285f4"></span>Gemini
                                    </button>
                                    <button class="pcm-ai-option" onclick="App.openWithAI(this,'https://claude.ai')">
                                        <span class="pcm-ai-dot" style="background:#d97757"></span>Claude
                                    </button>
                                    <button class="pcm-ai-option" onclick="App.openWithAI(this,'https://www.perplexity.ai')">
                                        <span class="pcm-ai-dot" style="background:#20b2aa"></span>Perplexity
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="pcm-title">${p.title}</h3>
                    <p class="pcm-snippet">${p.prompt}</p>
                    <div class="pcm-footer">
                        ${subjectSpan}
                        ${gradeSpan}
                        ${(p.tags || []).map(t => `<span class="pcm-tag">${t}</span>`).join('')}
                    </div>
                </div>
            `;
        });
        
        list.innerHTML = html || `<div class="pc-empty">${I18n.t('prompts.empty')}</div>`;
        this._applyViewI18n(list);

        if (pagContainer) {
            if (totalPages > 1) {
                let pagHtml = '<div class="pc-pagination">';
                
                const prevDisabled = this.currentPromptPage === 1 ? 'disabled' : '';
                pagHtml += `<button class="pag-btn" ${prevDisabled} onclick="App.goToPromptPage(${this.currentPromptPage - 1})"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>`;
                
                for (let i = 1; i <= totalPages; i++) {
                    const activeClass = i === this.currentPromptPage ? 'active' : '';
                    pagHtml += `<button class="pag-num ${activeClass}" onclick="App.goToPromptPage(${i})">${i}</button>`;
                }
                
                const nextDisabled = this.currentPromptPage === totalPages ? 'disabled' : '';
                pagHtml += `<button class="pag-btn" ${nextDisabled} onclick="App.goToPromptPage(${this.currentPromptPage + 1})"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>`;
                
                pagHtml += '</div>';
                pagContainer.innerHTML = pagHtml;
            } else {
                pagContainer.innerHTML = '';
            }
        }
    },

    goToPromptPage(page) {
        this.currentPromptPage = page;
        this.renderPrompts(this.currentPromptCategory, this.currentPromptSubcategory);
        const scrollArea = document.querySelector('.pc-cards-scroll');
        if (scrollArea) scrollArea.scrollTo({top: 0, behavior: 'smooth'});
    },

    copyPrompt(btn) {
        const text = btn.closest('.pcm-card').querySelector('.pcm-snippet').innerText;
        navigator.clipboard.writeText(text).then(() => {
            const original = btn.innerHTML;
            btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
            btn.style.color = 'var(--primary)';
            setTimeout(() => {
                btn.innerHTML = original;
                btn.style.color = '';
            }, 2000);
        });
    },

    toggleAIMenu(btn) {
        const launcher = btn.closest('.pcm-ai-launcher');
        const menu = launcher.querySelector('.pcm-ai-menu');
        const isOpen = menu.classList.contains('open');

        document.querySelectorAll('.pcm-ai-menu.open').forEach(m => m.classList.remove('open'));

        if (!isOpen) {
            menu.classList.add('open');
            setTimeout(() => {
                document.addEventListener('click', function handler(e) {
                    if (!launcher.contains(e.target)) {
                        menu.classList.remove('open');
                        document.removeEventListener('click', handler);
                    }
                });
            }, 0);
        }
    },

    openWithAI(btn, url) {
        const card = btn.closest('.pcm-card');
        const text = card.querySelector('.pcm-snippet').innerText;
        card.querySelector('.pcm-ai-menu').classList.remove('open');
        navigator.clipboard.writeText(text).catch(() => {});
        window.open(url, '_blank', 'noopener');
    },

    renderPromptCatTabs() {
        const catEl = document.getElementById('prompts-cat-tabs');
        const subEl = document.getElementById('prompts-sub-tabs');
        if (!catEl || !subEl) return;

        const t  = (k) => I18n.t(k);
        const d  = (typeof embeddedPromptsData !== 'undefined') ? embeddedPromptsData : {};
        const cat = this.currentPromptCategory || 'teachers';
        const sub = this.currentPromptSubcategory || 'all';

        const teacherCnt = (d.teachers      || []).length;
        const adminCnt   = (d.administration|| []).length;

        catEl.innerHTML = `
            <div class="prompts-cat-grid">
                <button class="prompts-cat-btn ${cat === 'teachers' ? 'active' : ''}"
                        onclick="App.switchPromptCategory('teachers')">
                    <div class="prompts-cat-btn-head">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        <span class="prompts-cat-btn-label">${t('prompts.cat.teachers')}</span>
                        <span class="prompts-cat-btn-count">${teacherCnt}</span>
                    </div>
                </button>
                <button class="prompts-cat-btn ${cat === 'administration' ? 'active' : ''}"
                        onclick="App.switchPromptCategory('administration')">
                    <div class="prompts-cat-btn-head">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                        </svg>
                        <span class="prompts-cat-btn-label">${t('prompts.cat.administration')}</span>
                        <span class="prompts-cat-btn-count">${adminCnt}</span>
                    </div>
                </button>
            </div>
        `;

        const subMap = {
            teachers:      ['all','primary_lower','primary_upper','secondary'],
            administration:['all','director','pedagogue','psychologist','secretary'],
        };
        const subs = subMap[cat] || subMap.teachers;

        subEl.innerHTML = `
            <div class="prompts-sub-row">
                ${subs.map(s => `
                    <button class="prompts-sub-pill ${sub === s ? 'active' : ''}"
                            onclick="App.switchPromptSubcategory('${s}')">
                        ${t('prompts.sub.' + s)}
                    </button>
                `).join('')}
            </div>
        `;
    },

    currentGuideCategory: 'foundations',

    _guideCategoryMap: {
        foundations: ['intro', 'literacy', 'definition', 'functionality', 'history', 'applications'],
        practice:    ['agents', 'architecture', 'prompt-advanced', 'memory-rag', 'performance-design', 'agent-advanced'],
        reference:   ['safety-limits', 'future-principles', 'glossary', 'roadmap'],
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
        const activeEl = document.querySelector('.sidebar-item.active');
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

    _renderPromptCard(p) {
        const t = (k) => I18n.t(k);
        const badgeText  = p.subcategory ? t('prompts.sub.' + p.subcategory) : '';
        const subjectTag = p.subject ? `<span class="pcm-tag">${escapeHtml(p.subject)}</span>` : '';
        const gradeTag   = p.grade   ? `<span class="pcm-tag">${escapeHtml(p.grade)}</span>`   : '';
        const tagsHtml   = (p.tags || []).slice(0, 3).map(tag => `<span class="pcm-tag">${escapeHtml(tag)}</span>`).join('');

        return `
            <div class="pcm-card">
                <div class="pcm-header">
                    <span class="pcm-category-badge">${escapeHtml(badgeText)}</span>
                    <div class="pcm-actions">
                        <button class="pcm-action-btn" title="${t('prompts.copy') || 'Copy'}" onclick="App.copyPrompt(this)">
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <h3 class="pcm-title">${escapeHtml(p.title)}</h3>
                <p class="pcm-snippet">${escapeHtml(p.prompt)}</p>
                <div class="pcm-footer">${subjectTag}${gradeTag}${tagsHtml}</div>
            </div>
        `;
    },

    _promptSubIcons: {
        primary_lower: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        primary_upper: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
        secondary: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg>',
        director: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/></svg>',
        pedagogue: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
        psychologist: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>',
        secretary: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    },

    _sidebarPromptSubLink(subId, count, category) {
        const label = I18n.t('prompts.sub.' + subId);
        const isActive = this.currentPromptCategory === category && this.currentPromptSubcategory === subId;
        const icon = this._promptSubIcons[subId] || '';
        return `
            <div class="sidebar-item ${isActive ? 'active' : ''}" onclick="App.switchPromptSubcategory('${subId}', '${category}')">
                <div class="sidebar-item-icon">${icon}</div>
                <span class="sidebar-item-label">${label}</span>
                <span class="sidebar-sub-count">${count}</span>
            </div>
        `;
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
        // Already running as installed PWA — never show the button
        if (window.matchMedia('(display-mode: standalone)').matches || navigator.standalone) return;

        const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

        // Pick up prompt captured before app.js loaded
        if (window._pwaPrompt) {
            this._deferredInstallPrompt = window._pwaPrompt;
            this._showInstallBtn();
        }

        // iOS: beforeinstallprompt never fires — show button so user can get step-by-step guide
        if (isIOS) this._showInstallBtn();

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this._deferredInstallPrompt = e;
            window._pwaPrompt = e;
            this._showInstallBtn();
        });

        window.addEventListener('appinstalled', () => {
            this._deferredInstallPrompt = null;
            window._pwaPrompt = null;
            this._hideInstallBtn();
        });
    },

    _showInstallBtn() {
        const btn = document.getElementById('pwa-install-btn');
        if (btn) btn.classList.add('visible');
    },

    _hideInstallBtn() {
        const btn = document.getElementById('pwa-install-btn');
        if (btn) btn.classList.remove('visible');
    },

    triggerInstall() {
        if (this._deferredInstallPrompt) {
            // Android Chrome / Desktop Chrome / Edge — native install dialog
            this._deferredInstallPrompt.prompt();
            this._deferredInstallPrompt.userChoice.then((choice) => {
                if (choice.outcome === 'accepted') {
                    this._deferredInstallPrompt = null;
                    window._pwaPrompt = null;
                    this._hideInstallBtn();
                }
            });
        } else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
            // iOS Safari — show step-by-step guide sheet
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
        try { localStorage.setItem('ainow-theme', theme); } catch(e) {}

        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.innerHTML = theme === 'light' 
                ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'
                : '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        }

        document.body.style.opacity = '1';
    },

    openPrivacyModal() {
        const modal = document.getElementById('privacy-modal');
        if (modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    },

    closePrivacyModal() {
        const modal = document.getElementById('privacy-modal');
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    },

    switchAboutWidget(widget) {
        ['team', 'program', 'partners'].forEach(w => {
            const content = document.getElementById('about-widget-' + w);
            const btn = document.getElementById('about-widget-btn-' + w);
            if (content) content.style.display = w === widget ? '' : 'none';
            if (btn) {
                if (w === widget) {
                    btn.style.border = '2px solid var(--primary)';
                    btn.style.background = 'var(--primary-light)';
                    btn.querySelector('svg').style.color = 'var(--primary)';
                    btn.querySelector('span').style.color = 'var(--primary)';
                } else {
                    btn.style.border = '1px solid var(--border-light)';
                    btn.style.background = 'var(--bg-card)';
                    btn.querySelector('svg').style.color = 'var(--text-primary)';
                    btn.querySelector('span').style.color = 'var(--text-primary)';
                }
            }
        });
    },

    toggleMobileMenu() {
        const sidebar = document.querySelector('.app-sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('open');
        const currentLang = I18n.currentLang || 'mk';
        document.querySelectorAll('.sidebar-lang-pill').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
    },

    toggleLangMenu() {
        const dropdown = document.getElementById('lang-dropdown');
        if (dropdown) dropdown.classList.toggle('open');
    },

    closeLangMenu() {
        const dropdown = document.getElementById('lang-dropdown');
        if (dropdown) dropdown.classList.remove('open');
    },

    _initPullToRefresh() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        mainContent.addEventListener('touchstart', (e) => this._handlePullStart(e, mainContent), { passive: true });
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
            await new Promise(resolve => setTimeout(resolve, 800));

            if (this.currentView === 'guide') {
                const activeItem = document.querySelector('.sidebar-item.active');
                if (activeItem && activeItem.id) {
                    const sectionId = activeItem.id.replace('sidebar-', '');
                    Router.renderContent(sectionId);
                }
            } else if (this.currentView === 'prompts') {
                this.renderPrompts(this.currentPromptCategory, this.currentPromptSubcategory);
            } else if (this.currentView === 'resources') {
                if (window.ResourceManager) {
                    window.ResourceManager.renderList();
                    window.ResourceManager.renderPedagogyTip();
                }
            } else if (this.currentView === 'tools') {
                this.renderTools(this.currentToolCategory || 'all');
            }

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
                if (!menuToggle || !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('open');
                    overlay.classList.remove('open');
                }
            }
        });

        if (window.matchMedia('(max-width: 768px)').matches) {
            document.addEventListener('touchstart', (e) => {
                const dropdown = document.getElementById('lang-dropdown');
                const btn = document.querySelector('.lang-switcher-btn');
                if (dropdown && dropdown.classList.contains('open')) {
                    if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
                        this.closeLangMenu();
                    }
                }
            }, { passive: true });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
