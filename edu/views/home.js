window.VIEWS = window.VIEWS || {};

// The page used to be seven equal cards that were really two different kinds
// of thing: three destinations that duplicated the top nav, and four modes of
// a single tool (Resources) that all opened the same place. Glossary, a real
// feature with 60 terms, had no card at all. It is now two labelled bands —
// where to learn, and what to make — so the page reads as a sequence rather
// than a pile. Icons come from the shared registry so a concept looks the
// same here as it does in the nav and sidebar.
window.VIEWS.home = `
<div class="home-page">

    <div class="home-hero">
        <h1 class="hero-heading">
            <span data-i18n="home.hero.pre">Добредојдовте во</span> <span class="accent">AINOW</span>
        </h1>
        <p data-i18n="home.hero.subtitle" class="home-hero-sub">Your digital assistant for modern education.</p>
        <p id="home-stat-bar" class="home-hero-stats"></p>
    </div>

    <section class="home-band">
        <h2 class="home-band-title" data-i18n="home.band.learn">Учете и истражувајте</h2>
        <div class="home-grid" id="home-grid-learn"></div>
    </section>

    <section class="home-band">
        <h2 class="home-band-title" data-i18n="home.band.create">Направете материјали</h2>
        <p class="home-band-note" data-i18n="home.band.create.note">Сите отвораат Материјали — изберете формат.</p>
        <div class="home-grid home-grid--compact" id="home-grid-create"></div>
    </section>

</div>
`;
