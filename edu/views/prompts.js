window.VIEWS = window.VIEWS || {};
window.VIEWS.prompts = `
<div class="prompts-page">

    <div class="page-hero-card">
        <div class="page-hero-card-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
        </div>
        <div>
            <h1 data-i18n="nav.prompts" class="page-hero-title">Промптови</h1>
            <p data-i18n="prompts.hero.subtitle" class="page-hero-sub">Готови AI промптови за наставници и администрација.</p>
        </div>
    </div>

    <div id="prompts-cat-tabs"></div>

    <div id="prompts-sub-tabs"></div>

    <div class="prompts-search-wrap" style="position: relative; max-width: 540px; margin-bottom: 16px;">
        <svg style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-tertiary); pointer-events: none;"
             viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input id="prompts-search-input"
               type="text"
               class="pc-search-input"
               data-i18n-placeholder="prompts.search.placeholder"
               placeholder="Пребарувај промптови..."
               oninput="App.searchPrompts(this.value)"
               autocomplete="off"
               aria-label="Search prompts">
    </div>

    <div id="prompts-list" class="pa-grid"></div>

    <div id="prompts-pagination"></div>

</div>
`;
