const Router = {
    renderContent(sectionId, itemId = null) {
        if (typeof DOCS_DATA === 'undefined') {
            console.error('[Router] DOCS_DATA missing!');
            return;
        }

        const container = document.getElementById('doc-reader-content');
        if (!container) {
            console.error('doc-reader-content container not found');
            return;
        }

        const section = DOCS_DATA.find(s => s.id === sectionId);

        if (!section) {
            container.innerHTML = '<p>Section not found.</p>';
            return;
        }

        document.querySelectorAll('.sidebar-item').forEach(el => {
            el.classList.remove('active');
            el.style.borderLeft = '3px solid transparent';
            el.style.background = 'transparent';
            el.style.color = 'var(--text-primary)';
        });
        const activeSidebarItem = document.getElementById(`sidebar-${sectionId}`);
        if (activeSidebarItem) {
            activeSidebarItem.classList.add('active');
            activeSidebarItem.style.borderLeft = '3px solid var(--primary)';
            activeSidebarItem.style.background = 'var(--primary-light)';
            activeSidebarItem.style.color = 'var(--primary)';
        }

        if (window.App && App._guideCategoryMap) {
            for (const [catId, ids] of Object.entries(App._guideCategoryMap)) {
                if (ids.includes(sectionId)) {
                    if (App.currentGuideCategory !== catId) {
                        App.currentGuideCategory = catId;
                        App.renderGuideChapterTabs();
                    }
                    break;
                }
            }
        }
        document.querySelectorAll('.guide-chapter-pill').forEach(el => el.classList.remove('active'));
        const activePill = document.getElementById(`guide-pill-${sectionId}`);
        if (activePill) activePill.classList.add('active');

        this.renderSectionWithTabs(section, itemId);
    },

    _guideProgress(sectionId) {
        if (!window.App || !App._guideCategoryMap) return '';
        const cat = App.currentGuideCategory || 'foundations';
        const ids = (App._guideCategoryMap[cat] || []).filter(id => DOCS_DATA.find(s => s.id === id));
        const pos = ids.indexOf(sectionId) + 1;
        if (!pos) return '';
        return `<span class="guide-progress">${pos} / ${ids.length}</span>`;
    },

    renderSectionWithTabs(section, activeItemId = null) {
        const container = document.getElementById('doc-reader-content');
        if (!container) return;

        const cleanSectionTitle = section.title.replace(/^[IVX]+\.\s*/, '');
        const progress = this._guideProgress(section.id);

        if (section.id === 'history') {
            let html = `<div class="guide-container"><div class="guide-title-row"><h1 class="guide-title">${cleanSectionTitle}</h1>${progress}</div>`;
            html += this.renderHistoryTimelineInline(section);
            html += '</div>';
            container.innerHTML = html;
            container.scrollTop = 0;
            return;
        }

        if (section.id === 'applications') {
            let html = `<div class="guide-container"><div class="guide-title-row"><h1 class="guide-title">${cleanSectionTitle}</h1>${progress}</div>`;
            html += this.renderApplicationsInline(section);
            html += '</div>';
            container.innerHTML = html;
            container.scrollTop = 0;
            return;
        }

        if (section.id === 'about') {
            let html = `<div class="guide-container"><div class="guide-title-row"><h1 class="guide-title">${cleanSectionTitle}</h1>${progress}</div>`;
            html += this.renderAboutInline();
            html += '</div>';
            container.innerHTML = html;
            container.scrollTop = 0;
            return;
        }

        const firstItem = activeItemId ? section.items.find(i => i.id === activeItemId) : section.items[0];
        const activeItem = firstItem || section.items[0];

        let cleanContent = activeItem.content
            .replace(/<h[23][^>]*>.*?<\/h[23]>/gi, '')
            .replace(/^(\s*<br\s*\/?>\s*)+/gi, '')
            .trim();

        if (window.Engine) {
            cleanContent = Engine.processContent(cleanContent);
        } else {
            cleanContent = cleanContent.replace(/\{\{WIDGET:.*?\}\}/g, '');
        }

        let html = `
            <div class="guide-container">
                <div class="guide-title-row">
                    <h1 class="guide-title">${cleanSectionTitle}</h1>
                    ${progress}
                </div>
                <div class="guide-layout">
                    <div class="guide-tabs">
        `;

        section.items.forEach((item, index) => {
            const isActive = item.id === activeItem.id;
            html += `
                <div onclick="Router.renderContent('${section.id}', '${item.id}')"
                     class="guide-tab-item ${isActive ? 'active' : ''}">
                    <div class="guide-tab-num">${index + 1}</div>
                    <span class="guide-tab-text">${item.title}</span>
                </div>
            `;
        });

        html += `
                    </div>
                    <div class="guide-content-area">
                        <div class="guide-watermark">
                            <svg viewBox="0 0 233.52 233.52" width="120" height="120" fill="currentColor">
                                <path fill-rule="nonzero" d="M0 116.95c0 64.15 52.06 116.58 116.58 116.58 64.52 0 116.95-52.43 116.95-116.58 0-64.52 -52.42 -116.95 -116.95 -116.95 -64.52 0 -116.58 52.42 -116.58 116.95zm23.46 0c0-51.69 41.79-93.48 93.12-93.48 51.69 0 93.12 41.79 93.12 93.48 0 26.03 -10.63 49.49 -27.86 66.35l0 -66.72c0-35.93 -29.33 -64.89 -65.26 -64.89 -35.93 0 -65.26 28.96 -65.26 64.89 0 36.29 29.33 65.25 65.26 65.26l0 -25.3c-21.99 0 -39.59 -17.96 -39.59 -39.96 0-21.63 17.6 -39.59 39.59 -39.59 22 0 39.59 17.96 39.59 39.59l0 52.06 0 32.63c-11.73 5.5 -25.3 8.8 -39.59 8.8 -51.32 0 -93.12 -41.79 -93.12 -93.12z" />
                            </svg>
                        </div>
                        <div class="guide-inner-content">
                            ${cleanContent}
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
        container.scrollTop = 0;
    },

    renderHistoryTimelineInline(section) {
        let html = `<div style="padding-top: 24px;"><div class="timeline-wrapper"><div class="timeline-line"></div>`;

        section.items.forEach((item, index) => {
            const year = I18n.t(`timeline.y${index + 1}`);
            const period = I18n.t(`timeline.p${index + 1}`);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item.content;
            const fullText = tempDiv.textContent.trim();
            const description = fullText.replace(item.title, '').trim();

            html += `
                <div class="timeline-item">
                    <div class="timeline-label">
                        <div class="timeline-year">${year}</div>
                        <div class="timeline-period">${period}</div>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">${item.title}</h3>
                        <p class="timeline-desc">${description}</p>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
        return html;
    },

    renderAboutInline() {
        return `
            <div class="about-page" style="padding-top: 12px;">
                <section class="about-hero" aria-label="About AINOW" style="border: 2px solid var(--border-light); border-radius: 12px; margin-bottom: 24px;">
                    <div class="about-hero-logo" aria-hidden="true">
                        <svg viewBox="0 0 233.52 233.52" width="56" height="56" fill="currentColor" aria-hidden="true">
                            <path fill-rule="nonzero" d="M0 116.95c0 64.15 52.06 116.58 116.58 116.58 64.52 0 116.95-52.43 116.95-116.58 0-64.52 -52.42 -116.95 -116.95 -116.95 -64.52 0 -116.58 52.42 -116.58 116.95zm23.46 0c0-51.69 41.79-93.48 93.12-93.48 51.69 0 93.12 41.79 93.12 93.48 0 26.03 -10.63 49.49 -27.86 66.35l0 -66.72c0-35.93 -29.33 -64.89 -65.26 -64.89 -35.93 0 -65.26 28.96 -65.26 64.89 0 36.29 29.33 65.25 65.26 65.26l0 -25.3c-21.99 0 -39.59 -17.96 -39.59 -39.96 0-21.63 17.6 -39.59 39.59 -39.59 22 0 39.59 17.96 39.59 39.59l0 52.06 0 32.63c-11.73 5.5 -25.3 8.8 -39.59 8.8 -51.32 0 -93.12 -41.79 -93.12 -93.12z" />
                        </svg>
                    </div>
                    <h1 class="about-hero-title" style="font-size: 32px;">AINOW Society</h1>
                    <p class="about-hero-sub" style="font-size: 16px;">${I18n.t('about.hero.sub')}</p>
                </section>

                <section class="about-pillars-section" aria-label="Our pillars" style="padding: 0; margin-bottom: 24px; background: transparent;">
                    <div class="about-pillars" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
                        <article class="about-pillar">
                            <div class="about-pillar-icon-wrap about-pillar-icon-wrap--orange" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                            </div>
                            <h3 class="about-pillar-title">${I18n.t('about.pillar.story.title')}</h3>
                            <p class="about-pillar-text">${I18n.t('about.pillar.story.text')}</p>
                        </article>
                        <article class="about-pillar">
                            <div class="about-pillar-icon-wrap about-pillar-icon-wrap--indigo" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                            </div>
                            <h3 class="about-pillar-title">${I18n.t('about.pillar.mission.title')}</h3>
                            <p class="about-pillar-text">${I18n.t('about.pillar.mission.text')}</p>
                        </article>
                        <article class="about-pillar">
                            <div class="about-pillar-icon-wrap about-pillar-icon-wrap--sky" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            </div>
                            <h3 class="about-pillar-title">${I18n.t('about.pillar.values.title')}</h3>
                            <p class="about-pillar-text">${I18n.t('about.pillar.values.text')}</p>
                        </article>
                    </div>
                </section>

                <section class="about-creator-section" aria-label="Meet the creator" style="padding: 0; background: transparent;">
                    <div class="about-creator-card" style="margin: 0; max-width: 100%;">
                        <div class="about-creator-content">
                            <span style="font-size: 11px; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.08em;">${I18n.t('about.creator.label')}</span>
                            <h2 class="about-creator-name" style="margin-top: 2px;">Suad Seferi</h2>
                            <p class="about-creator-role">${I18n.t('about.creator.role')}</p>
                            <p class="about-creator-bio">${I18n.t('about.creator.bio')}</p>
                            <div class="about-creator-socials">
                                <a href="https://github.com/AINOW-Society" target="_blank" rel="noopener" class="about-social-link">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" /></svg>
                                    <span>GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/bxlogic" target="_blank" rel="noopener" class="about-social-link">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 1 0 0 3.37m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                                    <span>LinkedIn</span>
                                </a>
                                <a href="http://suad.ainow.mk" target="_blank" rel="noopener" class="about-social-link">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                    <span>Website</span>
                                </a>
                            </div>
                            <blockquote class="about-creator-quote">
                                <span class="about-quote-mark" aria-hidden="true">"</span>
                                <span class="about-quote-text">${I18n.t('about.creator.quote')}</span>
                            </blockquote>
                        </div>
                    </div>
                </section>
            </div>
        `;
    },

    renderApplicationsInline(section) {
        const appIcons = {
            'health': '<svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
            'transport': '<svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3h3v5l3 3v9a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1H7v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9l3-3V3h3"></path><path d="M9 6h6M7 14h.01M17 14h.01"></path></svg>',
            'media': '<svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>',
            'finance': '<svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
            'entertainment': '<svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="12" height="16" rx="2"></rect><line x1="6" y1="8" x2="18" y2="8"></line></svg>',
            'agriculture': '<svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>'
        };

        let html = `<div style="padding-top: 24px;"><div class="guide-grid">`;

        section.items.forEach((item) => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item.content;
            const description = tempDiv.textContent.trim().replace(item.title, '').trim();
            const icon = appIcons[item.id] || '<svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>';

            html += `
                <div style="background: var(--bg-app); border: 2px solid var(--border-light); border-radius: 12px; padding: 28px; transition: all 0.3s; text-align: center;">
                    <div style="color: var(--primary); margin-bottom: 16px;">${icon}</div>
                    <h3 style="font-size: 20px; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">${item.title}</h3>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.7; margin: 0; text-align: left;">${description}</p>
                </div>
            `;
        });

        html += `</div></div>`;
        return html;
    }
};
