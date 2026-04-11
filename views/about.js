window.VIEWS = window.VIEWS || {};

window.VIEWS['about'] = `
<div style="max-width: 1100px; margin: 0 auto; padding: 40px 32px;">

    <div style="text-align: center; margin-bottom: 40px; padding: 32px; background: linear-gradient(135deg, rgba(217, 119, 87, 0.03) 0%, rgba(74, 155, 111, 0.02) 100%); border-radius: 16px;">
        <div style="width: 56px; height: 56px; border-radius: 16px; background: var(--primary-light); color: var(--primary); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h1 class="hero-heading" style="margin-bottom: 8px;">AINOW <span class="accent">Society</span></h1>
        <p data-i18n="about.hero.sub" style="color: var(--text-secondary); font-size: 18px; font-weight: 400; max-width: 600px; margin: 0 auto;"></p>
    </div>

    <div class="about-pillars-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 32px;">
        <div class="home-feature-card" style="cursor: default; --card-accent: #d97757;">
            <div class="card-icon" style="background: rgba(217,119,87,0.1); color: #d97757;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h3 data-i18n="about.pillar.story.title"></h3>
            <p data-i18n="about.pillar.story.text"></p>
        </div>
        <div class="home-feature-card" style="cursor: default; --card-accent: #4a9b6f;">
            <div class="card-icon" style="background: rgba(74,155,111,0.1); color: #4a9b6f;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <h3 data-i18n="about.pillar.mission.title"></h3>
            <p data-i18n="about.pillar.mission.text"></p>
        </div>
        <div class="home-feature-card" style="cursor: default; --card-accent: #6b5b4f;">
            <div class="card-icon" style="background: rgba(107,91,79,0.1); color: #6b5b4f;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h3 data-i18n="about.pillar.values.title"></h3>
            <p data-i18n="about.pillar.values.text"></p>
        </div>
    </div>

    <div class="about-widget-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 24px;">
        <button class="about-widget-btn active" onclick="App.switchAboutWidget('team')" id="about-widget-btn-team"
                style="padding: 16px; border: 2px solid var(--primary); background: var(--primary-light); border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; transition: all 0.2s;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span data-i18n="about.team.title" style="font-weight: 700; color: var(--primary); font-size: 16px;"></span>
            </div>
        </button>
        <button class="about-widget-btn" onclick="App.switchAboutWidget('program')" id="about-widget-btn-program"
                style="padding: 16px; border: 1px solid var(--border-light); background: var(--bg-card); border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; transition: all 0.2s;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-primary);">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
                <span data-i18n="about.program.title" style="font-weight: 700; color: var(--text-primary); font-size: 16px;"></span>
            </div>
        </button>
        <button class="about-widget-btn" onclick="App.switchAboutWidget('partners')" id="about-widget-btn-partners"
                style="padding: 16px; border: 1px solid var(--border-light); background: var(--bg-card); border-radius: 12px; cursor: pointer; display: flex; flex-direction: column; gap: 8px; transition: all 0.2s;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-primary);">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
                </svg>
                <span data-i18n="about.partners.title" style="font-weight: 700; color: var(--text-primary); font-size: 16px;"></span>
            </div>
        </button>
    </div>

    <div id="about-widget-team" class="about-widget-content">
        <div id="about-team-section" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">

            <div class="about-team-card" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm);">
                <div data-i18n="about.team.suad.name" style="font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;"></div>
                <div data-i18n="about.creator.role" style="font-size: 13px; color: var(--primary); font-weight: 600; margin-bottom: 12px;"></div>
                <p data-i18n="about.creator.bio" style="font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin: 0 0 12px 0;"></p>
                <div style="padding: 10px 14px; background: rgba(217,119,87,0.06); border-radius: 10px; border-left: 3px solid var(--primary); margin-bottom: 12px;">
                    <p data-i18n="about.creator.quote" style="font-size: 12.5px; color: var(--text-secondary); font-style: italic; margin: 0;"></p>
                </div>
                <div style="display: flex; gap: 8px;">
                    <a href="https://www.linkedin.com/in/bxlogic" target="_blank" rel="noopener" class="about-social-link" title="LinkedIn">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 1 0 0 3.37m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                    </a>
                    <a href="https://suad.ainow.mk" target="_blank" rel="noopener" class="about-social-link" title="Website">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    </a>
                </div>
            </div>

            <div class="about-team-card" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm);">
                <div data-i18n="about.team.sead.name" style="font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;"></div>
                <div data-i18n="about.team.sead.role" style="font-size: 13px; color: var(--primary); font-weight: 600; margin-bottom: 12px;"></div>
                <p data-i18n="about.team.sead.bio" style="font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin: 0;"></p>
            </div>

            <div class="about-team-card" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm);">
                <div data-i18n="about.team.bojan.name" style="font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;"></div>
                <div data-i18n="about.team.bojan.role" style="font-size: 13px; color: var(--primary); font-weight: 600; margin-bottom: 12px;"></div>
                <p data-i18n="about.team.bojan.bio" style="font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin: 0;"></p>
            </div>

            <div class="about-team-card" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm);">
                <div data-i18n="about.team.biljana.name" style="font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;"></div>
                <div data-i18n="about.team.biljana.role" style="font-size: 13px; color: var(--primary); font-weight: 600; margin-bottom: 12px;"></div>
                <p data-i18n="about.team.biljana.bio" style="font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin: 0;"></p>
            </div>

            <div class="about-team-card" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm);">
                <div data-i18n="about.team.aleksandra.name" style="font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;"></div>
                <div data-i18n="about.team.aleksandra.role" style="font-size: 13px; color: var(--primary); font-weight: 600; margin-bottom: 12px;"></div>
                <p data-i18n="about.team.aleksandra.bio" style="font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin: 0;"></p>
            </div>

            <div class="about-team-card" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm);">
                <div data-i18n="about.team.maja.name" style="font-size: 17px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;"></div>
                <div data-i18n="about.team.maja.role" style="font-size: 13px; color: var(--primary); font-weight: 600; margin-bottom: 12px;"></div>
                <p data-i18n="about.team.maja.bio" style="font-size: 13px; color: var(--text-secondary); line-height: 1.7; margin: 0;"></p>
            </div>

        </div>
    </div>

    <div id="about-widget-program" class="about-widget-content" style="display: none;">
        <div id="about-program-section" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 28px; box-shadow: var(--shadow-sm);">
            <h3 data-i18n="about.program.subtitle" style="font-size: 17px; color: var(--text-primary); margin-bottom: 12px;"></h3>
            <p data-i18n="about.program.desc" style="font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;"></p>
            <h4 data-i18n="about.program.obj" style="font-size: 15px; color: var(--text-primary); margin-bottom: 14px;"></h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; background: rgba(217,119,87,0.04); border-radius: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(217,119,87,0.1); color: #d97757; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 700; margin-top: 1px;">1</div>
                    <p data-i18n="about.program.o1" style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; margin: 0;"></p>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; background: rgba(74,155,111,0.04); border-radius: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(74,155,111,0.1); color: #4a9b6f; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 700; margin-top: 1px;">2</div>
                    <p data-i18n="about.program.o2" style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; margin: 0;"></p>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; background: rgba(107,91,79,0.04); border-radius: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(107,91,79,0.1); color: #6b5b4f; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 700; margin-top: 1px;">3</div>
                    <p data-i18n="about.program.o3" style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; margin: 0;"></p>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; background: rgba(217,119,87,0.04); border-radius: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(217,119,87,0.1); color: #d97757; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 700; margin-top: 1px;">4</div>
                    <p data-i18n="about.program.o4" style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; margin: 0;"></p>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; background: rgba(74,155,111,0.04); border-radius: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(74,155,111,0.1); color: #4a9b6f; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 700; margin-top: 1px;">5</div>
                    <p data-i18n="about.program.o5" style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; margin: 0;"></p>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; background: rgba(107,91,79,0.04); border-radius: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(107,91,79,0.1); color: #6b5b4f; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 700; margin-top: 1px;">6</div>
                    <p data-i18n="about.program.o6" style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; margin: 0;"></p>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; background: rgba(217,119,87,0.04); border-radius: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(217,119,87,0.1); color: #d97757; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 700; margin-top: 1px;">7</div>
                    <p data-i18n="about.program.o7" style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; margin: 0;"></p>
                </div>
                <div style="display: flex; gap: 12px; align-items: flex-start; padding: 12px 14px; background: rgba(74,155,111,0.04); border-radius: 10px;">
                    <div style="width: 24px; height: 24px; border-radius: 6px; background: rgba(74,155,111,0.1); color: #4a9b6f; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; font-weight: 700; margin-top: 1px;">8</div>
                    <p data-i18n="about.program.o8" style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; margin: 0;"></p>
                </div>
            </div>
        </div>
    </div>

    <div id="about-widget-partners" class="about-widget-content" style="display: none;">
        <div id="about-partners-section" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">

            <a href="https://www.mcgo.org.mk" target="_blank" rel="noopener" style="text-decoration: none; background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 20px 24px; box-shadow: var(--shadow-sm); display: flex; align-items: center; gap: 16px; transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;">
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: var(--text-primary);">MCEC</div>
                    <div style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">Macedonian Civic Education Center</div>
                </div>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: auto; color: var(--text-tertiary); flex-shrink: 0;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>

        </div>
    </div>

</div>
`;
