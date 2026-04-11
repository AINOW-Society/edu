const Engine = {

    init() {},

    processContent(htmlContent) {
        if (htmlContent.includes('{{WIDGET:TOOL_TOKENS}}')) {
            htmlContent = htmlContent.replace('{{WIDGET:TOOL_TOKENS}}', this.getToolHTML('tokens'));
        }
        return htmlContent;
    },

    getToolHTML(type) {
        if (type === 'tokens') {
            const t = (k) => (typeof I18n !== 'undefined') ? I18n.t(k) : k;
            return `
                <div class="interactive-card tool-widget">
                    <div class="card-badge" style="background:#d97757">${t('widget.token.badge')}</div>
                    <h3>🧮 ${t('widget.token.title')}</h3>
                    <p style="color: rgba(255,255,255,0.7)">${t('widget.token.desc')}</p>
                    <textarea class="tool-input" id="token-input" rows="3" placeholder="${t('widget.token.placeholder')}" oninput="Engine.calculateTokens(this.value)"></textarea>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <span style="font-size: 2rem; font-weight: 800;" id="token-count">0</span>
                            <span style="opacity: 0.7">${t('widget.token.tokens')}</span>
                        </div>
                        <div style="text-align: right;">
                            <span style="font-size: 1.2rem; font-weight: 700;" id="word-count">0</span>
                            <span style="opacity: 0.7">${t('widget.token.words')}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    calculateTokens(text) {
        const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const charCount = text.length;
        const estimatedTokens = Math.round(wordCount * 1.5 + (charCount * 0.1));
        document.getElementById('token-count').innerText = estimatedTokens;
        document.getElementById('word-count').innerText = wordCount;
    }
};
