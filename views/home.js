window.VIEWS = window.VIEWS || {};
window.VIEWS.home = `
<div style="max-width: 1100px; margin: 0 auto; padding: 40px 32px;">

    <div style="text-align: center; margin-bottom: 40px; padding: 32px; background: linear-gradient(135deg, rgba(217, 119, 87, 0.03) 0%, rgba(74, 155, 111, 0.02) 100%); border-radius: 16px;">
        <h1 class="hero-heading" style="margin-bottom: 12px;">
            <span data-i18n="home.hero.pre">Добредојдовте во</span> <span class="accent">AINOW</span>
        </h1>
        <p data-i18n="home.hero.subtitle" style="color: var(--text-secondary); font-size: 18px; font-weight: 400;">Your digital assistant for modern education.</p>
        <p id="home-stat-bar" style="color: var(--text-tertiary); font-size: 13px; margin-top: 16px; letter-spacing: 0.05em;"></p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 48px;">

        <div class="home-feature-card" style="--card-accent: #d97757;" role="button" tabindex="0" onclick="App.switchView('guide')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(217, 119, 87, 0.1); color: #d97757;">
                <svg viewBox="0 0 20 20" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 3h7a1.5 1.5 0 0 1 1.5 1.5v10a1 1 0 0 0 1-1V4.5A1.5 1.5 0 0 0 12 3H4a1.5 1.5 0 0 0-1.5 1.5v10A1.5 1.5 0 0 0 4 16h7"></path>
                    <line x1="7" y1="7" x2="10" y2="7"></line>
                    <line x1="7" y1="10" x2="10" y2="10"></line>
                    <line x1="7" y1="13" x2="9" y2="13"></line>
                </svg>
            </div>
            <h3 data-i18n="card.guide.title">Водич за AI</h3>
            <p data-i18n="card.guide.desc">Научете ги основите на вештачката интелигенција преку структурирани лекции.</p>
            <span class="card-cta"><span data-i18n="card.guide.cta">ПРОЧИТАЈ</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #4a9b6f;" role="button" tabindex="0" onclick="App.switchView('prompts')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(74, 155, 111, 0.1); color: #4a9b6f;">
                <svg viewBox="0 0 20 20" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M2 7.5a2.5 2.5 0 0 1 2.5-2.5h10a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5H6.5l-2 1.5v-1.5A2.5 2.5 0 0 1 2 13.5z"></path>
                    <circle cx="6.5" cy="10" r="0.5" fill="currentColor"></circle>
                    <circle cx="10" cy="10" r="0.5" fill="currentColor"></circle>
                    <circle cx="13.5" cy="10" r="0.5" fill="currentColor"></circle>
                </svg>
            </div>
            <h3 data-i18n="card.prompts.title">Промптови</h3>
            <p data-i18n="card.prompts.desc">Реални промптови за наставници и административен персонал.</p>
            <span class="card-cta"><span data-i18n="card.prompts.cta">ИСТРАЖИ</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #6b5b4f;" role="button" tabindex="0" onclick="App.switchView('tools')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(107, 91, 79, 0.1); color: #6b5b4f;">
                <svg viewBox="0 0 20 20" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6 11l-2.5 2.5a1.5 1.5 0 0 0 0 2.12l1.06 1.06a1.5 1.5 0 0 0 2.12 0L9 14"></path>
                    <circle cx="12" cy="7.5" r="2"></circle>
                    <path d="M14 5.5l2-2a1.5 1.5 0 0 1 2.12 0l1.06 1.06a1.5 1.5 0 0 1 0 2.12l-2 2"></path>
                </svg>
            </div>
            <h3 data-i18n="card.tools.title">AI Алатки</h3>
            <p data-i18n="card.tools.desc">Готови шаблони за секојдневни училишни задачи.</p>
            <span class="card-cta"><span data-i18n="card.tools.cta">ОТВОРИ</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #4a9b6f;" role="button" tabindex="0" onclick="App.switchView('resources'); setTimeout(() => ResourceManager.switchWidget('tests'), 10)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(74, 155, 111, 0.1); color: #4a9b6f;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
            </div>
            <h3 data-i18n="card.tests.title">Студио за Тестови</h3>
            <p data-i18n="card.tests.desc">Креирајте професионални тестови за вашите ученици.</p>
            <span class="card-cta"><span data-i18n="card.tests.cta">КРЕИРАЈ</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #d97757;" role="button" tabindex="0" onclick="App.switchView('resources'); setTimeout(() => ResourceManager.switchWidget('guide'), 10)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(217, 119, 87, 0.1); color: #d97757;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            </div>
            <h3 data-i18n="card.handouts.title">Креатор на Прирачници</h3>
            <p data-i18n="card.handouts.desc">Генерирајте професионални прирачници од лекциите за ВИ.</p>
            <span class="card-cta"><span data-i18n="card.handouts.cta">ГЕНЕРИРАЈ</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #4a9b6f;" role="button" tabindex="0" onclick="App.switchView('resources'); setTimeout(() => ResourceManager.switchWidget('prompts'), 10)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(74, 155, 111, 0.1); color: #4a9b6f;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
            </div>
            <h3 data-i18n="card.prompt_lists.title">Промпт Листи</h3>
            <p data-i18n="card.prompt_lists.desc">Подгответе печатена листа со промптови за часовите.</p>
            <span class="card-cta"><span data-i18n="card.prompt_lists.cta">ПОДГОТВИ</span> <span aria-hidden="true">→</span></span>
        </div>

    </div>

</div>
`;
