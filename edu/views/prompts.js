window.VIEWS = window.VIEWS || {};
window.VIEWS.prompts = `
<div class="prompts-page">

    <label class="ainow-search-field ainow-library-search">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
                     stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input id="prompts-search-input"
                       type="search"
                       data-i18n-placeholder="prompts.search.placeholder"
                       placeholder="Пребарувај промптови..."
                       oninput="App.searchPrompts(this.value)"
                       autocomplete="off"
                       data-i18n-aria-label="prompts.search.placeholder" aria-label="Search prompts">
    </label>
    <div class="ainow-library-heading">
        <div><h1 data-i18n="nav.prompts" class="ainow-page-title">Промптови</h1>
        <div id="prompts-header" class="ainow-page-meta" aria-live="polite"></div></div>
        <div class="edu-library-controls"><button type="button" class="ainow-button is-secondary edu-library-filter" onclick="App.toggleMobileMenu()" aria-expanded="false" data-i18n="prompts.filters">Филтри</button><div id="prompts-view-controls" class="ainow-view-controls"></div></div>
    </div>
    <div id="prompts-list" class="ainow-template-grid"></div>

    <div id="prompts-pagination"></div>

</div>
`;
