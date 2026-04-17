window.VIEWS = window.VIEWS || {};

window.VIEWS['resources'] = `
<div class="resources-container" style="padding: 32px; max-width: 1100px; margin: 0 auto; box-sizing: border-box;">
    <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px 32px; margin-bottom: 32px; display: flex; gap: 20px; align-items: center; box-shadow: var(--shadow-sm);">
        <div style="width: 48px; height: 48px; border-radius: 14px; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        </div>
        <div>
            <h1 data-i18n="resources.hero.title" style="font-family: 'Georgia', 'Charter', serif; font-size: 24px; font-weight: 400; color: var(--text-primary); margin-bottom: 6px; letter-spacing: -0.3px;">Resource Builder</h1>
            <p data-i18n="resources.hero.subtitle" style="font-size: 15px; color: var(--text-secondary); max-width: 700px; line-height: 1.5; margin: 0;">Select content to export as a formatted handout.</p>
        </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 24px;">
        <button id="widget-btn-guide" onclick="ResourceManager.switchWidget('guide')"
                style="padding: 16px; border: 2px solid var(--primary); background: var(--primary-light); border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; transition: all 0.2s;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span data-i18n="resources.widget.guide" style="font-weight: 700; color: var(--primary); font-size: 16px;">The Guide</span>
            </div>
            <span data-i18n="resources.widget.guide.desc" style="font-size: 12px; color: var(--text-tertiary); text-align: left;">AI Literacy Documentation</span>
        </button>

        <button id="widget-btn-prompts" onclick="ResourceManager.switchWidget('prompts')"
                style="padding: 16px; border: 1px solid var(--border-light); background: var(--bg-card); border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; transition: all 0.2s;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-primary);">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span data-i18n="resources.widget.prompts" style="font-weight: 700; color: var(--text-primary); font-size: 16px;">Prompts</span>
            </div>
            <span data-i18n="resources.widget.prompts.desc" style="font-size: 12px; color: var(--text-tertiary); text-align: left;">Teacher & Admin Prompt Bank</span>
        </button>

        <button id="widget-btn-tests" onclick="ResourceManager.switchWidget('tests')"
                style="padding: 16px; border: 1px solid var(--border-light); background: var(--bg-card); border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; transition: all 0.2s;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-primary);">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                <span data-i18n="resources.widget.tests" style="font-weight: 700; color: var(--text-primary); font-size: 16px;">Tests</span>
            </div>
            <span data-i18n="resources.widget.tests.desc" style="font-size: 12px; color: var(--text-tertiary); text-align: left;">Create student assessments</span>
        </button>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 350px; gap: 32px;" class="resources-grid">
        <div class="resources-selection" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: 12px; padding: 24px;">
            <div id="tests-topic-selector" style="display: none; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light);">
                <h4 data-i18n="tests.select_topic" style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-tertiary); margin-bottom: 12px;">Select Topic:</h4>
                <div id="tests-topics-list" style="display: flex; flex-wrap: wrap; gap: 8px;">
                </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <h3 id="selection-title" data-i18n="resources.select_desc" style="font-size: 16px; margin: 0; color: var(--text-primary);">Select content to export:</h3>
                <div style="display: flex; gap: 8px;">
                     <button onclick="ResourceManager.selectAll(true)" data-i18n="resources.select_all" style="font-size: 12px; padding: 4px 8px; background: none; border: 1px solid var(--border-light); border-radius: 4px; color: var(--text-secondary); cursor: pointer;">All</button>
                     <button onclick="ResourceManager.selectAll(false)" data-i18n="resources.select_none" style="font-size: 12px; padding: 4px 8px; background: none; border: 1px solid var(--border-light); border-radius: 4px; color: var(--text-secondary); cursor: pointer;">None</button>
                </div>
            </div>
            <div id="resources-list" style="display: flex; flex-direction: column; gap: 10px;"></div>
        </div>

        <div class="resources-action" style="display: flex; flex-direction: column; gap: 16px;">
            <div style="background: var(--primary-light); padding: 24px; border-radius: 12px; border: 1px solid var(--border-light); text-align: center;">
                <div id="tests-settings" style="display: none; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px; padding: 10px; background: rgba(255,255,255,0.5); border-radius: 8px;">
                    <input type="checkbox" id="include-answer-key" style="width: 18px; height: 18px; cursor: pointer; accent-color: var(--primary);">
                    <label for="include-answer-key" data-i18n="tests.answer_key" style="font-size: 14px; font-weight: 500; color: var(--text-primary); cursor: pointer;">Answers Only</label>
                </div>

                <div style="color: var(--primary); margin-bottom: 12px;">
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                </div>
                <p style="font-size: 12px; color: var(--text-secondary); margin: 0 0 16px 0; line-height: 1.5;" data-i18n="resources.export_hint">Opens a formatted document ready to save or print.</p>
                <button onclick="ResourceManager.handleExport()" style="width: 100%; padding: 13px 16px; background: var(--primary); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; letter-spacing: 0.01em; margin-bottom: 10px;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    <span id="export-btn-text" data-i18n="resources.export_btn">Save as PDF</span>
                </button>
                <button id="print-btn" onclick="ResourceManager.handlePrint()" style="width: 100%; padding: 11px 16px; background: var(--bg-card); color: var(--text-secondary); border: 1px solid var(--border-light); border-radius: 8px; font-size: 13px; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 7px;">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                    <span data-i18n="resources.print_btn">Print</span>
                </button>
            </div>

            <div id="pedagogy-tip-container"></div>

            <div style="background: var(--bg-body); border: 1px solid var(--border-light); border-radius: 12px; padding: 20px;">
                <h4 data-i18n="resources.preview" style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-tertiary);">Preview</h4>
                <ul id="resources-preview-list" style="margin: 0; padding-left: 20px; color: var(--text-secondary); font-size: 14px; line-height: 1.6;">
                </ul>
            </div>
        </div>
    </div>
</div>
`;

window.ResourceManager = {
    currentWidget: 'guide',
    currentTestTopic: null,
    selectedItems: new Set(),

    init() {
        this.renderList();
        this.renderPedagogyTip();
    },

    switchWidget(type) {
        if (typeof DOCS_DATA === 'undefined') {
            console.error('[Resources] DOCS_DATA missing!');
            return;
        }

        this.currentWidget = type;
        this.selectedItems.clear();

        const topicSelector = document.getElementById('tests-topic-selector');
        const testSettings = document.getElementById('tests-settings');
        const exportBtnText = document.getElementById('export-btn-text');
        const selectionTitle = document.getElementById('selection-title');

        if (topicSelector) {
            topicSelector.style.display = (type === 'tests') ? 'block' : 'none';
            if (type === 'tests') {
                const topicHeading = topicSelector.querySelector('[data-i18n="tests.select_topic"]');
                if (topicHeading) {
                    topicHeading.textContent = I18n.t('tests.select_topic');
                }
            }
        }
        if (testSettings) testSettings.style.display = (type === 'tests') ? 'flex' : 'none';

        if (exportBtnText) {
            exportBtnText.setAttribute('data-i18n', (type === 'tests') ? 'tests.export_btn' : 'resources.export_btn');
            exportBtnText.textContent = I18n.t(exportBtnText.getAttribute('data-i18n'));
        }

        if (selectionTitle) {
            selectionTitle.setAttribute('data-i18n', (type === 'tests') ? 'tests.select_questions' : 'resources.select_desc');
            selectionTitle.textContent = I18n.t(selectionTitle.getAttribute('data-i18n'));
        }

        ['guide', 'prompts', 'tests'].forEach(w => {
            const btn = document.getElementById(`widget-btn-${w}`);
            if (!btn) return;
            const isActive = w === type;
            btn.style.borderColor = isActive ? 'var(--primary)' : 'var(--border-light)';
            btn.style.background = isActive ? 'var(--primary-light)' : 'var(--bg-card)';
            const lbl = btn.querySelector('span[data-i18n]');
            if (lbl) lbl.style.color = isActive ? 'var(--primary)' : 'var(--text-primary)';
            const svg = btn.querySelector('svg');
            if (svg) svg.style.color = isActive ? 'var(--primary)' : 'var(--text-primary)';
        });

        if (type === 'tests') {
            if (!this.currentTestTopic && QUIZ_DATA) {
                this.currentTestTopic = Object.keys(QUIZ_DATA)[0] || null;
            }
            this.renderTestTopics();
        }

        this.renderList();
        this.renderPedagogyTip();

        if (window.App) window.App.renderSidebarCtx('resources');
    },

    renderTestTopics() {
        if (typeof DOCS_DATA === 'undefined') return;

        const listEl = document.getElementById('tests-topics-list');
        if (!listEl) return;

        let html = '';
        DOCS_DATA.forEach(topic => {
            if (QUIZ_DATA && QUIZ_DATA[topic.id]) {
                const isActive = topic.id === this.currentTestTopic;
                const i18nKey = 'guide.section.' + topic.id;
                const title = I18n.t(i18nKey) === i18nKey ? topic.title : I18n.t(i18nKey);
                const cleanTitle = title.replace(/^[IVX]+\.\s*/, '');

                html += `
                    <button onclick="ResourceManager.switchTestTopic('${topic.id}')"
                        style="padding: 6px 14px; border-radius: 20px; border: 1px solid ${isActive ? 'var(--primary)' : 'var(--border-light)'};
                        cursor: pointer; transition: all 0.2s; font-size: 13px;
                        background: ${isActive ? 'var(--primary)' : 'var(--bg-card)'};
                        color: ${isActive ? 'white' : 'var(--text-secondary)'};">
                        ${cleanTitle}
                    </button>
                `;
            }
        });
        listEl.innerHTML = html;
    },

    switchTestTopic(id) {
        this.currentTestTopic = id;
        this.renderTestTopics();
        this.renderList();
    },

    selectAll(check) {
        document.querySelectorAll('#resources-list input[type="checkbox"]').forEach(cb => {
            cb.checked = check;
            this._toggleItem(cb.value, check);
            cb.closest('.resource-item')?.classList.toggle('resource-item--checked', check);
        });
        this.updatePreview();
    },

    _toggleItem(id, checked) {
        if (checked) this.selectedItems.add(id);
        else this.selectedItems.delete(id);
    },

    renderList() {
        if (typeof DOCS_DATA === 'undefined') {
            const listEl = document.getElementById('resources-list');
            if (listEl) listEl.innerHTML = '<div style="padding: 20px; color: var(--text-tertiary);">Loading data...</div>';
            return;
        }

        const listEl = document.getElementById('resources-list');
        if (!listEl) return;

        let html = '';

        if (this.currentWidget === 'guide') {
            DOCS_DATA.forEach(section => {
                if (section.id === 'about') return;
                const i18nKey = 'guide.section.' + section.id;
                const translated = I18n.t(i18nKey);
                const title = (translated !== i18nKey) ? translated : section.title.replace(/^[IVX]+\.\s*/, '');
                html += this._renderCheckboxItem(section.id, title);
            });
        } else if (this.currentWidget === 'prompts') {
            const categories = [
                { id: 'primary_lower', label: I18n.t('prompts.sub.primary_lower') },
                { id: 'primary_upper', label: I18n.t('prompts.sub.primary_upper') },
                { id: 'secondary', label: I18n.t('prompts.sub.secondary') },
                { id: 'pedagogue', label: I18n.t('prompts.sub.pedagogue') },
                { id: 'psychologist', label: I18n.t('prompts.sub.psychologist') },
                { id: 'secretary', label: I18n.t('prompts.sub.secretary') },
                { id: 'department_head', label: I18n.t('prompts.sub.department_head') },
                { id: 'director', label: I18n.t('prompts.sub.director') }
            ];
            categories.forEach(cat => {
                html += this._renderCheckboxItem(cat.id, cat.label);
            });
        } else {
            const questions = (QUIZ_DATA && QUIZ_DATA[this.currentTestTopic]) || [];
            questions.forEach(q => {
                html += this._renderCheckboxItem(q.id, q.question, q.type === 'mcq' ? 'MCQ' : 'Open');
            });
        }

        listEl.innerHTML = html;
        this.updatePreview();
    },

    _renderCheckboxItem(id, title, meta = '') {
        const isSelected = this.selectedItems.has(id);
        return `
            <label class="resource-item${isSelected ? ' resource-item--checked' : ''}">
                <input type="checkbox" class="resource-checkbox-input" value="${escapeHtml(id)}" ${isSelected ? 'checked' : ''}
                    onchange="ResourceManager._toggleItem('${escapeHtml(id)}', this.checked); ResourceManager.updatePreview(); this.closest('.resource-item').classList.toggle('resource-item--checked', this.checked)"
                    aria-label="${escapeHtml(title)}">
                <span class="resource-checkbox" aria-hidden="true"></span>
                <div class="resource-item-text">
                    <span class="resource-item-title">${title}</span>
                    ${meta ? `<div class="resource-item-meta">${meta}</div>` : ''}
                </div>
            </label>
        `;
    },

    updatePreview() {
        const previewEl = document.getElementById('resources-preview-list');
        if (!previewEl) return;

        if (this.selectedItems.size === 0) {
            previewEl.innerHTML = '<li style="list-style-type: none; color: var(--text-tertiary); margin-left: -20px;">-</li>';
            return;
        }

        let html = '';
        this.selectedItems.forEach(val => {
            let label = '';
            if (this.currentWidget === 'guide') {
                const section = DOCS_DATA.find(s => s.id === val);
                const i18nKey = 'guide.section.' + val;
                label = (I18n.t(i18nKey) !== i18nKey) ? I18n.t(i18nKey) : (section ? section.title : val);
            } else if (this.currentWidget === 'prompts') {
                label = I18n.t('prompts.sub.' + val);
            } else {
                const qBank = Object.values(QUIZ_DATA || {}).flat();
                const q = qBank.find(item => item.id === val);
                const txt = q ? (q.question || val) : val;
                label = txt.length > 45 ? txt.substring(0, 43) + '…' : txt;
            }
            html += `<li>${escapeHtml(label)}</li>`;
        });

        previewEl.innerHTML = html;
    },

    renderPedagogyTip() {
        const container = document.getElementById('pedagogy-tip-container');
        if (!container) return;

        const tipIndex = (Math.floor(Math.random() * 3) + 1);
        const tipText = I18n.t(`resources.pedagogy.tip.${tipIndex}`);
        const tipLabel = I18n.t('resources.pedagogy.label');

        container.innerHTML = `
            <div class="pedagogy-tip-box" style="margin-top: 16px; padding: 16px; background: var(--bg-card); border: 1px solid var(--border-light); border-left: 4px solid var(--primary); border-radius: 8px; box-shadow: var(--shadow-sm); animation: fadeIn 0.4s ease-out;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center;">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <span style="font-size: 11px; font-weight: 800; color: var(--primary); letter-spacing: 0.05em; text-transform: uppercase;">${tipLabel}</span>
                </div>
                <p style="margin: 0; font-size: 13px; color: var(--text-secondary); line-height: 1.6; font-style: italic;">"${tipText}"</p>
            </div>
        `;
    },

    handleExport() {
        if (this.selectedItems.size === 0) {
            alert('Изберете содржина! / Select content.');
            return;
        }
        if (this.currentWidget === 'tests') {
            this.exportExamPDF(true);
        } else {
            this._buildPrintHTML((html) => this._openSavePDFWindow(html), true);
        }
    },

    handlePrint() {
        if (this.selectedItems.size === 0) {
            alert('Изберете содржина! / Select content.');
            return;
        }
        if (this.currentWidget === 'tests') {
            this.exportExamPDF(false);
        } else {
            this._buildPrintHTML((html) => this._openPrintWindow(html), false);
        }
    },

    _buildPrintHTML(callback, forPDF) {
        const headerHtml = this._getPrintHeader();
        let printHtml = '';
        const selectedList = Array.from(this.selectedItems);
        if (this.currentWidget === 'guide') {
            let printedCount = 0;
            selectedList.forEach((sectionId) => {
                const section = DOCS_DATA.find(s => s.id === sectionId);
                if (!section) return;
                const i18nKey = 'guide.section.' + section.id;
                const title = (I18n.t(i18nKey) !== i18nKey) ? I18n.t(i18nKey) : section.title.replace(/^[IVX]+\.\s*/, '');
                printHtml += `<div class="print-module" style="${printedCount > 0 ? 'page-break-before: always;' : ''}">`;
                printedCount++;
                printHtml += `<h1 class="print-module-title">${escapeHtml(title)}</h1>`;
                section.items.forEach(item => {
                    let cleanContent = item.content.replace(/<h[23][^>]*>.*?<\/h[23]>/gi, '').replace(/^(\s*<br\s*\/?>\s*)+/gi, '').replace(/\{\{WIDGET:[^}]+\}\}/g, '').trim();
                    printHtml += `<div class="print-item"><h2 class="print-item-title">${escapeHtml(item.title)}</h2><div class="print-item-content">${cleanContent}</div></div>`;
                });
                printHtml += `</div>`;
            });
        } else {
            const allPrompts = [...(embeddedPromptsData.teachers || []), ...(embeddedPromptsData.administration || [])];
            let printedCount = 0;
            selectedList.forEach((categoryId) => {
                const categoryPrompts = allPrompts.filter(p => p.subcategory === categoryId);
                if (!categoryPrompts.length) return;
                printHtml += `<div class="print-module" style="${printedCount > 0 ? 'page-break-before: always;' : ''}">`;
                printedCount++;
                printHtml += `<h1 class="print-module-title">${escapeHtml(I18n.t('prompts.sub.' + categoryId))}</h1>`;
                categoryPrompts.forEach(p => {
                    const tagsSafe = (p.tags || []).map(t => escapeHtml(t)).join(' • ');
                    printHtml += `<div class="print-item" style="border-bottom:0.5px solid #eee;padding-bottom:20px;"><h3 class="print-item-title" style="margin-bottom:4px;">${escapeHtml(p.title)}</h3><div style="font-size:11px;color:#666;margin-bottom:10px;">${tagsSafe}</div><div class="print-item-content" style="background:#f9fafb;padding:15px;border-radius:4px;border-left:3px solid #d97757;">${escapeHtml(p.prompt)}</div></div>`;
                });
                printHtml += `</div>`;
            });
        }

        const commonCSS = `
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; color: #111827; line-height: 1.5; margin: 0; padding: 0; background: white; }
            .print-module-title { font-size: 22px; font-weight: 800; color: #d97757; border-bottom: 2px solid #d97757; padding-bottom: 10px; margin-bottom: 24px; break-after: avoid; page-break-after: avoid; }
            .print-item { margin-bottom: 24px; break-inside: avoid; page-break-inside: avoid; }
            .print-item-title { font-size: 15px; font-weight: 700; margin: 0 0 8px 0; color: #111827; break-after: avoid; page-break-after: avoid; }
            .print-item-content { font-size: 13px; color: #374151; line-height: 1.65; }
            .print-item-content p { margin: 0 0 10px 0; }
        `;

        if (forPDF) {
            callback(`<style>${commonCSS}</style>${headerHtml}${printHtml}`);
        } else {
            callback(`<style>
                @page { size: A4; margin: 0; }
                ${commonCSS}
                .print-master-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
                .print-header-cell { padding: 12.7mm 25.4mm 0; }
                .print-page-content { padding: 0 25.4mm 20mm; }
                .print-footer-fixed { position: fixed; bottom: 12.7mm; left: 25.4mm; right: 25.4mm; background: white; }
                @media print { .no-print { display: none !important; } }
            </style>
            <table class="print-master-table">
                <thead><tr><td class="print-header-cell">${this._getCompactPrintHeader()}</td></tr></thead>
                <tbody><tr><td><div class="print-page-content">${printHtml}</div></td></tr></tbody>
            </table>
            <div class="print-footer-fixed">${this._getPrintFooter()}</div>`);
        }
    },

    exportExamPDF(forPDF) {
        if (this.selectedItems.size === 0) {
            alert('Изберете прашања! / Select questions.');
            return;
        }

        const includeKey = document.getElementById('include-answer-key')?.checked;
        const qBank = Object.values(QUIZ_DATA || {}).flat();
        const selectedList = Array.from(this.selectedItems).map(id => qBank.find(q => q.id === id)).filter(q => !!q);

        const examCSS = `
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif; color: #111827; line-height: 1.4; margin: 0; padding: 0; background: white; }
            .exam-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #d97757; padding-bottom: 15px; margin-bottom: 20px; }
            .student-info-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 16px; margin-bottom: 25px; }
            .info-item { border-bottom: 1px solid #e5e7eb; padding: 8px 0; }
            .info-label { display: block; font-size: 9px; text-transform: uppercase; font-weight: 700; color: #9ca3af; margin-bottom: 4px; }
            .info-value { height: 20px; font-size: 14px; color: #111827; }
            .print-item { margin-bottom: 22px; }
            .q-header { display: flex; gap: 12px; font-size: 15px; font-weight: 600; margin-bottom: 12px; }
            .q-num { background: #d97757; color: white; width: 24px; height: 24px; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; }
            .options-container { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding-left: 36px; }
            .opt-item { display: flex; align-items: center; gap: 10px; font-size: 14px; }
            .opt-box { width: 16px; height: 16px; border: 1.5px solid #d1d5db; border-radius: 4px; flex-shrink: 0; }
            .open-lines { margin-left: 36px; margin-top: 10px; }
            .line { border-bottom: 1px solid #e5e7eb; height: 32px; }
            .key-section { padding: 30px 0; }
            .key-title { font-size: 22px; font-weight: 700; border-bottom: 2px solid #d97757; padding-bottom: 8px; margin-bottom: 25px; }
            .key-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
            .key-card { padding: 12px; background: #fdf2f0; border-radius: 8px; border-left: 4px solid #d97757; }
        `;

        let questionsHtml = '';
        selectedList.forEach((q, idx) => {
            questionsHtml += `
                <div class="print-item">
                    <div class="q-header">
                        <div class="q-num">${idx + 1}</div>
                        <div style="padding-top: 2px;">${escapeHtml(q.question)}</div>
                    </div>
                    ${q.type === 'mcq' ? `
                        <div class="options-container">
                            ${q.options.map(opt => `
                                <div class="opt-item">
                                    <div class="opt-box"></div>
                                    <span>${escapeHtml(opt)}</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="open-lines">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                    `}
                </div>
            `;
        });

        let keyHtml = '';
        if (includeKey) {
            keyHtml = `
            <div class="key-section">
                <h2 class="key-title">${escapeHtml(I18n.t('tests.answer_key'))}</h2>
                <div class="key-grid">
                    ${selectedList.map((q, idx) => `
                        <div class="key-card">
                            <div style="font-size: 10px; font-weight: 700; color: #d97757; margin-bottom: 4px;">${escapeHtml(I18n.t('tests.question'))} ${idx + 1}</div>
                            <div style="font-size: 14px; font-weight: 600; color: #111827;">
                                ${q.type === 'mcq' ? escapeHtml(q.options[q.answer]) : '---'}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }

        const studentInfoHtml = `
            <div class="student-info-grid">
                <div class="info-item">
                    <span class="info-label">${I18n.t('tests.label_student')}</span>
                    <div class="info-value"></div>
                </div>
                <div class="info-item">
                    <span class="info-label">${I18n.t('tests.label_class')}</span>
                    <div class="info-value"></div>
                </div>
                <div class="info-item">
                    <span class="info-label">${I18n.t('tests.label_date')}</span>
                    <div class="info-value"></div>
                </div>
            </div>`;

        if (forPDF) {
            const pdfHtml = `<style>${examCSS}</style>${this._getPrintHeader()}${studentInfoHtml}${questionsHtml}${keyHtml}`;
            this._openSavePDFWindow(pdfHtml);
        } else {
            const printHtml = `
                <style>
                    @page { size: A4; margin: 0; }
                    ${examCSS}
                    .print-master-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
                    .print-header-cell { padding: 12.7mm 25.4mm 0; }
                    .print-page-content { padding: 0 25.4mm 20mm; }
                    .print-footer-fixed { position: fixed; bottom: 12.7mm; left: 25.4mm; right: 25.4mm; background: white; }
                    .print-item { page-break-inside: avoid; break-inside: avoid; }
                    .exam-header { break-after: avoid; page-break-after: avoid; }
                </style>
                <table class="print-master-table">
                    <thead><tr><td class="print-header-cell">${this._getCompactPrintHeader()}</td></tr></thead>
                    <tbody><tr><td>
                        <div class="print-page-content">
                            ${studentInfoHtml}
                            ${questionsHtml}
                            ${keyHtml}
                        </div>
                    </td></tr></tbody>
                </table>
                <div class="print-footer-fixed">${this._getPrintFooter()}</div>`;
            this._openPrintWindow(printHtml);
        }
    },

    _openSavePDFWindow(bodyHtml) {
        const btnText = document.getElementById('export-btn-text');
        const origText = btnText ? btnText.textContent : '';
        if (btnText) { btnText.textContent = '⏳ Generating...'; }

        this._loadPDFLibs(() => {
            this._renderPDF(bodyHtml, () => {
                if (btnText) btnText.textContent = origText;
            });
        });
    },

    _loadPDFLibs(cb) {
        const loaded = () => typeof window.html2canvas !== 'undefined' && typeof window.jspdf !== 'undefined';
        if (loaded()) { cb(); return; }
        const loadScript = (src, next) => {
            if (document.querySelector(`script[src="${src}"]`)) { next(); return; }
            const s = document.createElement('script');
            s.src = src;
            s.onload = next;
            s.onerror = () => { alert('Could not load PDF library. Check your connection.'); };
            document.head.appendChild(s);
        };
        loadScript('js/lib/html2canvas.min.js', () => loadScript('js/lib/jspdf.min.js', cb));
    },

    _renderPDF(bodyHtml, done) {
        const A4_W   = 794;
        const A4_H   = 1123;
        const PAD_T  = 96;
        const PAD_B  = 96;
        const PAD_X  = 96;
        const CONT_H = A4_H - PAD_T - PAD_B;
        const SCALE  = 2;

        const wrap = document.createElement('div');
        wrap.style.cssText = `position:fixed;top:0;left:-${A4_W + 100}px;width:${A4_W}px;background:white;padding:0 ${PAD_X}px;box-sizing:border-box;`;
        wrap.innerHTML = bodyHtml;
        document.body.appendChild(wrap);

        setTimeout(async () => {
            try {
                const wTop = wrap.getBoundingClientRect().top;
                const toBounds = el => {
                    const r = el.getBoundingClientRect();
                    return { top: (r.top - wTop) * SCALE, bot: (r.top - wTop + r.height) * SCALE };
                };
                const titleBounds = Array.from(
                    wrap.querySelectorAll('.print-module-title, .exam-header')
                ).map(toBounds);
                const itemBounds = Array.from(
                    wrap.querySelectorAll('.print-item')
                ).map(toBounds);

                const { jsPDF } = window.jspdf;
                const doc  = new jsPDF({ unit: 'mm', format: 'a4' });
                const docW = doc.internal.pageSize.getWidth();
                const docH = doc.internal.pageSize.getHeight();
                const widgetTitle = ResourceManager.currentWidget === 'tests'
                    ? I18n.t('tests.hero.title')
                    : (ResourceManager.currentWidget === 'prompts' ? I18n.t('resources.widget.prompts') : I18n.t('resources.widget.guide'));

                const full = await html2canvas(wrap, {
                    scale: SCALE,
                    useCORS: true,
                    allowTaint: true,
                    width: A4_W,
                    windowWidth: A4_W,
                    backgroundColor: '#ffffff',
                    logging: false
                });

                const fCtx     = full.getContext('2d', { willReadFrequently: true });
                const contH_sc = CONT_H * SCALE;
                const rowW     = full.width;

                const px = fCtx.getImageData(0, 0, rowW, full.height).data;

                function isWhiteRow(y) {
                    const off = y * rowW * 4;
                    for (let x = 0; x < rowW; x++) {
                        const i = off + x * 4;
                        if (px[i] < 245 || px[i + 1] < 245 || px[i + 2] < 245) return false;
                    }
                    return true;
                }

                function findCutY(targetY, pageStart) {
                    let cut = targetY;
                    for (let y = targetY; y > pageStart; y--) {
                        if (!isWhiteRow(y)) continue;
                        let handled = false;
                        for (const item of itemBounds) {
                            if (y > item.top && y < item.bot) {
                                if (item.top > pageStart) {
                                    for (let y2 = Math.floor(item.top) - 1; y2 > pageStart; y2--) {
                                        if (isWhiteRow(y2)) { cut = y2; break; }
                                    }
                                }
                                handled = true;
                                break;
                            }
                        }
                        if (!handled) cut = y;
                        break;
                    }

                    for (const t of titleBounds) {
                        if (t.bot > pageStart && t.bot <= cut && cut - t.bot < contH_sc / 6) {
                            for (let y = Math.floor(t.top) - 1; y > pageStart; y--) {
                                if (isWhiteRow(y)) { cut = y; break; }
                            }
                            break;
                        }
                    }
                    return cut;
                }

                const slices = [0];
                while (true) {
                    const prev   = slices[slices.length - 1];
                    const target = prev + contH_sc;
                    if (target >= full.height) break;
                    slices.push(findCutY(target, prev));
                }

                const docId  = Math.random().toString(36).substr(2, 8).toUpperCase();
                const euDate = new Date().toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'})
                                         .replace(/ /g, '-').toUpperCase();
                const pages  = slices.length;

                const pg = document.createElement('canvas');
                pg.width  = full.width;
                pg.height = A4_H * SCALE;

                for (let i = 0; i < pages; i++) {
                    if (i > 0) doc.addPage();
                    const srcY = slices[i];
                    const srcH = ((i + 1 < pages) ? slices[i + 1] : full.height) - srcY;

                    const ctx = pg.getContext('2d');
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, pg.width, pg.height);
                    ctx.drawImage(full, 0, srcY, full.width, srcH, 0, PAD_T * SCALE, full.width, srcH);

                    if (i > 0) {
                        const hTextY = 48 * SCALE;
                        const hLineY = 65 * SCALE;
                        ctx.fillStyle = '#111827';
                        ctx.font = `bold ${9 * SCALE}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
                        ctx.textAlign = 'left';
                        ctx.fillText('AINOW Society', PAD_X * SCALE, hTextY);
                        ctx.fillStyle = '#6b7280';
                        ctx.font = `${8 * SCALE}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
                        ctx.textAlign = 'right';
                        ctx.fillText(widgetTitle, (A4_W - PAD_X) * SCALE, hTextY);
                        ctx.fillStyle = '#d97757';
                        ctx.fillRect(PAD_X * SCALE, hLineY, (A4_W - PAD_X * 2) * SCALE, Math.round(1.5 * SCALE));
                    }

                    const footerTextY = (A4_H - 46) * SCALE;
                    const footerLineY = (A4_H - 66) * SCALE;
                    ctx.fillStyle = '#e5e7eb';
                    ctx.fillRect(PAD_X * SCALE, footerLineY, (A4_W - PAD_X * 2) * SCALE, 1 * SCALE);
                    ctx.fillStyle = '#9ca3af';
                    ctx.font = `${9 * SCALE}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
                    ctx.textAlign = 'left';
                    ctx.fillText('edu.ainow.mk | ' + I18n.t('footer.platform'), PAD_X * SCALE, footerTextY);
                    ctx.textAlign = 'right';
                    ctx.fillText(euDate + '  •  ID: ' + docId + '  •  ' + (i + 1) + '/' + pages,
                                 (A4_W - PAD_X) * SCALE, footerTextY);

                    doc.addImage(pg.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, docW, docH);
                }

                const w = ResourceManager.currentWidget || 'export';
                doc.save('AINOW-' + w.charAt(0).toUpperCase() + w.slice(1) + '-' + new Date().toISOString().slice(0, 10) + '.pdf');
            } catch(e) {
                console.error('[AINOW PDF]', e);
                alert('PDF generation failed. Use the Print button as fallback.');
            } finally {
                wrap.remove();
                if (done) done();
            }
        }, 350);
    },

    _openPrintWindow(bodyHtml) {
        document.getElementById('_ainow_print_frame')?.remove();

        const iframe = document.createElement('iframe');
        iframe.id = '_ainow_print_frame';
        iframe.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:210mm;height:297mm;border:none;';
        document.body.appendChild(iframe);

        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(`<!DOCTYPE html><html><head>
            <meta charset="UTF-8">
            <title>AINOW Export</title>
        </head><body style="margin:0">${bodyHtml}</body></html>`);
        doc.close();

        setTimeout(() => {
            try {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();
            } catch(e) {
                const blob = new Blob([`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>AINOW Export</title></head><body style="margin:0">${bodyHtml}</body></html>`], {type: 'text/html'});
                const url = URL.createObjectURL(blob);
                window.open(url, '_blank', 'noopener');
                setTimeout(() => URL.revokeObjectURL(url), 10000);
            }
            setTimeout(() => iframe.remove(), 2000);
        }, 400);
    },

    _getPrintHeader() {
        const title = this.currentWidget === 'tests'
            ? I18n.t('tests.hero.title')
            : (this.currentWidget === 'prompts' ? I18n.t('resources.widget.prompts') : I18n.t('resources.widget.guide'));

        const desc = this.currentWidget === 'tests'
            ? I18n.t('tests.header_desc')
            : I18n.t('header.platform');

        return `
            <div class="exam-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #d97757; padding-bottom: 15px; margin-bottom: 20px;">
                <div class="exam-logo-wrap" style="display: flex; align-items: center; gap: 8px;">
                    <svg viewBox="0 0 233.52 233.52" width="32" height="32" fill="#d97757">
                        <path d="M0 116.95c0 64.15 52.06 116.58 116.58 116.58 64.52 0 116.95-52.43 116.95-116.58 0-64.52-52.42-116.95-116.95-116.95-64.52 0-116.58 52.42-116.58 116.95zm23.46 0c0-51.69 41.79-93.48 93.12-93.48 51.69 0 93.12 41.79 93.12 93.48 0 26.03-10.63 49.49-27.86 66.35l0-66.72c0-35.93-29.33-64.89-65.26-64.89-35.93 0-65.26 28.96-65.26 64.89 0 36.29 29.33 65.25 65.26 65.26l0-25.3c-21.99 0-39.59-17.96-39.59-39.96 0-21.63 17.6-39.59 39.59-39.59 22 0 39.59 17.96 39.59 39.59l0 52.06 0 32.63c-11.73 5.5-25.3 8.8-39.59 8.8-51.32 0-93.12-41.79-93.12-93.12z"></path>
                    </svg>
                    <h1 style="font-size: 22px; font-weight: 800; margin: 0; color: #111827; letter-spacing: -0.04em;">AINOW Society</h1>
                </div>
                <div style="text-align: right;">
                    <div style="font-weight: 700; font-size: 13px; color: #111827;">${title}</div>
                    <div style="font-size: 10px; color: #6b7280; font-weight: 600;">${desc}</div>
                </div>
            </div>
        `;
    },

    _getCompactPrintHeader() {
        const title = this.currentWidget === 'tests'
            ? I18n.t('tests.hero.title')
            : (this.currentWidget === 'prompts' ? I18n.t('resources.widget.prompts') : I18n.t('resources.widget.guide'));
        const desc = this.currentWidget === 'tests'
            ? I18n.t('tests.header_desc')
            : I18n.t('header.platform');
        return `
            <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #d97757;padding-bottom:12px;margin-bottom:0;">
                <div style="display:flex;align-items:center;gap:8px;">
                    <svg viewBox="0 0 233.52 233.52" width="32" height="32" fill="#d97757"><path d="M0 116.95c0 64.15 52.06 116.58 116.58 116.58 64.52 0 116.95-52.43 116.95-116.58 0-64.52-52.42-116.95-116.95-116.95-64.52 0-116.58 52.42-116.58 116.95zm23.46 0c0-51.69 41.79-93.48 93.12-93.48 51.69 0 93.12 41.79 93.12 93.48 0 26.03-10.63 49.49-27.86 66.35l0-66.72c0-35.93-29.33-64.89-65.26-64.89-35.93 0-65.26 28.96-65.26 64.89 0 36.29 29.33 65.25 65.26 65.26l0-25.3c-21.99 0-39.59-17.96-39.59-39.96 0-21.63 17.6-39.59 39.59-39.59 22 0 39.59 17.96 39.59 39.59l0 52.06 0 32.63c-11.73 5.5-25.3 8.8-39.59 8.8-51.32 0-93.12-41.79-93.12-93.12z"></path></svg>
                    <span style="font-size:22px;font-weight:800;color:#111827;letter-spacing:-0.04em;">AINOW Society</span>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:13px;font-weight:700;color:#111827;">${title}</div>
                    <div style="font-size:10px;font-weight:600;color:#6b7280;">${desc}</div>
                </div>
            </div>`;
    },

    _getPrintFooter() {
        const euDate = new Date().toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'}).replace(/ /g,'-').toUpperCase();
        const docId = Math.random().toString(36).substr(2, 8).toUpperCase();
        return `
            <div style="padding-top: 6px; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-between; font-size: 9px; color: #9ca3af; font-weight: 500; width: 100%;">
                <div>edu.ainow.mk &nbsp;|&nbsp; ${I18n.t('footer.platform')}</div>
                <div>${euDate} &nbsp;•&nbsp; ID: ${docId}</div>
            </div>`;
    }
};

setTimeout(() => {
    if (document.getElementById('resources-list')) {
        ResourceManager.init();
    }
}, 50);
