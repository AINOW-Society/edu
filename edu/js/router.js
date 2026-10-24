const Router = {
    guideIds() {
        const ids = Object.values(App._guideCategoryMap).flat();
        return ids.filter(id => DOCS_DATA.some(section => section.id === id));
    },

    guideDestination(sectionId, itemId, direction) {
        const ids = this.guideIds(), chapter = ids.indexOf(sectionId);
        if (chapter < 0) return null;
        const section = DOCS_DATA.find(x => x.id === sectionId);
        const fullChapter = ['history', 'applications'].includes(sectionId);
        const index = Math.max(0, section.items.findIndex(x => x.id === itemId));
        if (!fullChapter && index + direction >= 0 && index + direction < section.items.length)
            return {section: sectionId, item: section.items[index + direction].id};
        const target = ids[chapter + direction];
        if (!target) return direction > 0 ? {end: true} : null;
        const targetSection = DOCS_DATA.find(x => x.id === target);
        return {section: target, item: ['history', 'applications'].includes(target) ? null : (direction < 0 ? targetSection.items.at(-1).id : targetSection.items[0].id)};
    },

    stepGuide(sectionId, itemId, direction) {
        const target = this.guideDestination(sectionId, itemId, direction);
        if (!target) return;
        if (target.end) { App.openResourcesWidget('homework'); return; }
        this.renderContent(target.section, target.item);
        const heading = document.querySelector('#doc-reader-content .guide-title');
        heading?.focus({preventScroll: true});
        heading?.scrollIntoView({block: 'start', behavior: 'auto'});
    },

    learningNavigation(section, item = null) {
        const esc = escapeHtml, t = key => esc(I18n.t('learning.' + key));
        const id = item?.id || section.items[0]?.id || '';
        const previous = this.guideDestination(section.id, id, -1), next = this.guideDestination(section.id, id, 1);
        if (!this.guideIds().includes(section.id)) return '';
        const position = item ? `${t('section')} ${section.items.indexOf(item) + 1} / ${section.items.length}` : '';
        const nextLabel = next?.end ? I18n.t('learning.start.material') : next?.section === section.id ? I18n.t('learning.next.section') : I18n.t('learning.next.chapter');
        return `<nav class="guide-reading-nav" aria-label="${t('nav.label')}"><button type="button" ${previous ? '' : 'disabled'} onclick="Router.stepGuide('${section.id}', '${id}', -1)">${t('prev')}</button><span>${position}</span><button type="button" class="guide-next" onclick="Router.stepGuide('${section.id}', '${id}', 1)">${esc(nextLabel)}</button></nav>`;
    },

    learningQuiz(section) {
        if (typeof QUIZ_DATA === 'undefined') return '';
        const questions = (QUIZ_DATA[section.id] || []).filter(q => q.type === 'mcq' && Array.isArray(q.options) && Number.isInteger(q.answer) && q.options[q.answer]).slice(0, 3);
        if (!questions.length) return '';
        const esc = escapeHtml;
        return `<details class="guide-quick-check"><summary>${esc(I18n.t('learning.check.title'))}</summary><p>${esc(I18n.t('learning.check.note'))}</p>${questions.map(q => `<fieldset><legend>${esc(q.question)}</legend>${q.options.map((option, i) => `<label><input type="radio" name="practice-${section.id}-${q.id}" value="${i}" onchange="Router.checkLearningAnswer('${section.id}', '${q.id}', ${i})"><span>${esc(option)}</span></label>`).join('')}<p class="guide-check-feedback" role="status" id="feedback-${section.id}-${q.id}"></p></fieldset>`).join('')}</details>`;
    },

    checkLearningAnswer(sectionId, questionId, answer) {
        const question = (QUIZ_DATA[sectionId] || []).find(q => q.id === questionId);
        const output = document.getElementById(`feedback-${sectionId}-${questionId}`);
        if (!question || !output) return;
        output.textContent = answer === question.answer ? I18n.t('learning.correct') : I18n.t('learning.retry') + ' ' + question.options[question.answer];
    },

    learningExample(section, item) {
        if (!(section.id === 'intro' && item.id === 'how-to-use') && !(section.id === 'prompts' && item === section.items[0])) return '';
        const t = key => escapeHtml(I18n.t('learning.example.' + key));
        return `<aside class="guide-worked-example"><h2>${t('title')}</h2><dl>${['task', 'context', 'check'].map(key => `<div><dt>${t(key)}</dt><dd>${t(key + '.text')}</dd></div>`).join('')}</dl></aside>`;
    },

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

        document.querySelectorAll('.sb-sub').forEach(el => el.classList.remove('active'));
        const activeSidebarItem = document.getElementById(`sidebar-${sectionId}`);
        if (activeSidebarItem) activeSidebarItem.classList.add('active');

        if (typeof App !== 'undefined' && App._guideCategoryMap) {
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
        if (typeof App === 'undefined' || !App._guideCategoryMap) return '';
        const ids = this.guideIds();
        const pos = ids.indexOf(sectionId) + 1;
        if (!pos) return '';
        return `<span class="guide-progress">${escapeHtml(I18n.t('learning.chapter'))} ${pos} / ${ids.length}</span>`;
    },

    renderSectionWithTabs(section, activeItemId = null) {
        const container = document.getElementById('doc-reader-content');
        if (!container) return;

        const rawTitle = section.title.replace(/^[IVX]+\.\s*/, '');
        const _esc = (typeof escapeHtml === 'function')
            ? escapeHtml
            : (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
        const cleanSectionTitle = _esc(rawTitle);
        const progress = this._guideProgress(section.id);

        if (section.id === 'history') {
            let html = `<div class="guide-container"><div class="guide-title-row"><h2 class="guide-title" tabindex="-1">${cleanSectionTitle}</h2>${progress}</div>`;
            html += this.renderHistoryTimelineInline(section);
            html += this.learningQuiz(section) + this.learningNavigation(section);
            html += '</div>';
            container.innerHTML = html;
            container.scrollTop = 0;
            return;
        }

        if (section.id === 'applications') {
            let html = `<div class="guide-container"><div class="guide-title-row"><h2 class="guide-title" tabindex="-1">${cleanSectionTitle}</h2>${progress}</div>`;
            html += this.renderApplicationsInline(section);
            html += this.learningQuiz(section) + this.learningNavigation(section);
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
                    <h2 class="guide-title" tabindex="-1">${cleanSectionTitle}</h2>
                    ${progress}
                </div>
                <div class="guide-layout">
                    <div class="guide-tabs">
        `;

        section.items.forEach((item, index) => {
            const isActive = item.id === activeItem.id;
            html += `
                <button type="button" onclick="Router.renderContent('${section.id}', '${item.id}')"
                     aria-label="${_esc(item.title)}" title="${_esc(item.title)}" aria-current="${isActive ? 'page' : 'false'}"
                     class="guide-tab-item ${isActive ? 'active' : ''}">
                    <span class="guide-tab-num" aria-hidden="true">${index + 1}</span>
                    <span class="guide-tab-text">${_esc(item.title)}</span>
                </button>
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
                            <h2 class="guide-current-section">${_esc(activeItem.title)}</h2>
                            ${cleanContent}
                            ${this.learningExample(section, activeItem)}
                            ${activeItem === section.items.at(-1) ? this.learningQuiz(section) : ''}
                        </div>
                    </div>
                </div>
                ${this.learningNavigation(section, activeItem)}
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
                        <div class="timeline-year">${escapeHtml(year)}</div>
                        <div class="timeline-period">${escapeHtml(period)}</div>
                    </div>
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
                        <p class="timeline-desc">${escapeHtml(description)}</p>
                    </div>
                </div>
            `;
        });

        html += `</div></div>`;
        return html;
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
                    <h3 style="font-size: 20px; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">${escapeHtml(item.title)}</h3>
                    <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.7; margin: 0; text-align: left;">${escapeHtml(description)}</p>
                </div>
            `;
        });

        html += `</div></div>`;
        return html;
    }
};
