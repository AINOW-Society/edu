window.VIEWS = window.VIEWS || {};
window.VIEWS.help = `
<div class="guide-container">

    <div class="page-hero-card" style="margin-bottom: 40px;">
        <div class="page-hero-card-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        </div>
        <div>
            <h1 class="page-hero-title" data-i18n="help.page.title">Platform &amp; AI Guide</h1>
            <p class="page-hero-sub" data-i18n="help.page.subtitle">Everything you need to know to get started with AINOW and Artificial Intelligence.</p>
        </div>
    </div>

    <p style="font-size: 11px; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;" data-i18n="help.features.title">Platform Features</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 48px;">

        <div class="home-feature-card" style="--card-accent: #d97757;" role="button" tabindex="0" onclick="App.switchView('guide')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(217, 119, 87, 0.1); color: #d97757; margin-bottom: 16px;">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            </div>
            <h3 data-i18n="card.guide.title">AI Guide</h3>
            <p data-i18n="help.f1.desc">Learn the basics of AI through structured lessons.</p>
            <span class="card-cta"><span data-i18n="card.guide.cta">READ</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #4a9b6f;" role="button" tabindex="0" onclick="App.switchView('prompts')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(74, 155, 111, 0.1); color: #4a9b6f; margin-bottom: 16px;">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <h3 data-i18n="card.prompts.title">Prompts</h3>
            <p data-i18n="help.f2.desc">Explore our curated library of ready-to-use prompts for teachers and administration.</p>
            <span class="card-cta"><span data-i18n="card.prompts.cta">EXPLORE</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #6b5b4f;" role="button" tabindex="0" onclick="App.switchView('tools')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(107, 91, 79, 0.1); color: #6b5b4f; margin-bottom: 16px;">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <h3 data-i18n="card.tools.title">AI Tools</h3>
            <p data-i18n="help.f3.desc">Discover the best AI tools for everyday school tasks.</p>
            <span class="card-cta"><span data-i18n="card.tools.cta">OPEN</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #4a9b6f;" role="button" tabindex="0" onclick="App.switchView('resources'); setTimeout(function(){ if(window.ResourceManager) ResourceManager.switchWidget('tests'); }, 200);" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(74, 155, 111, 0.1); color: #4a9b6f; margin-bottom: 16px;">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
            </div>
            <h3 data-i18n="card.tests.title">Assessment Studio</h3>
            <p data-i18n="help.f5.desc">Create professional tests for your students based on guide content.</p>
            <span class="card-cta"><span data-i18n="card.tests.cta">CREATE</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #5c6bc0;" role="button" tabindex="0" onclick="App.openResourcesWidget('homework')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(92, 107, 192, 0.12); color: #5c6bc0; margin-bottom: 16px;">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><line x1="8" y1="7" x2="16" y2="7"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </div>
            <h3 data-i18n="card.homework.title">Homework</h3>
            <p data-i18n="help.f6.desc">Homework sheets: print and PDF; optional Guidance for teachers.</p>
            <span class="card-cta"><span data-i18n="card.homework.cta">OPEN</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #d97757;" role="button" tabindex="0" onclick="App.switchView('resources'); setTimeout(function(){ if(window.ResourceManager) ResourceManager.switchWidget('guide'); }, 200);" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(217, 119, 87, 0.1); color: #d97757; margin-bottom: 16px;">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            </div>
            <h3 data-i18n="card.handouts.title">Handout Builder</h3>
            <p data-i18n="help.f4.desc">Generate PDF handouts, export prompt lists, and create student assessments.</p>
            <span class="card-cta"><span data-i18n="card.handouts.cta">GENERATE</span> <span aria-hidden="true">→</span></span>
        </div>

        <div class="home-feature-card" style="--card-accent: #4a9b6f;" role="button" tabindex="0" onclick="App.switchView('resources'); setTimeout(function(){ if(window.ResourceManager) ResourceManager.switchWidget('prompts'); }, 200);" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click();}">
            <div class="card-icon" style="background: rgba(74, 155, 111, 0.1); color: #4a9b6f; margin-bottom: 16px;">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </div>
            <h3 data-i18n="card.prompt_lists.title">Prompt Lists</h3>
            <p data-i18n="card.prompt_lists.desc">Prepare a printed list of prompts for classroom use.</p>
            <span class="card-cta"><span data-i18n="card.prompt_lists.cta">PREPARE</span> <span aria-hidden="true">→</span></span>
        </div>

    </div>

    <div style="border-top: 1px solid var(--border-light); margin: 0 0 48px;"></div>
    <p style="font-size: 11px; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;" data-i18n="help.prompting.title">How to Write a Proper Prompt</p>
    <p style="font-size: 15px; color: var(--text-secondary); margin-bottom: 24px; line-height: 1.6;" data-i18n="help.prompting.desc">To get the best results from AI, structure your instructions using the CPTC framework:</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 48px;">
        <div style="background: var(--bg-card); padding: 20px; border-radius: 12px; border: 1px solid var(--border-light); display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(217, 119, 87, 0.1); color: #d97757; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <strong style="font-size: 15px; color: var(--text-primary);" data-i18n="help.cptc.c.title">1. CONTEXT</strong>
            </div>
            <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin: 0;"><span data-i18n="help.cptc.c.desc">Provide background information.</span><br><i style="background: rgba(217, 119, 87, 0.12); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 8px; color: #d97757; font-style: normal; font-size: 12px;" data-i18n="help.cptc.c.ex">Ex: "I am planning a 6th-grade lesson..."</i></p>
        </div>
        <div style="background: var(--bg-card); padding: 20px; border-radius: 12px; border: 1px solid var(--border-light); display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(107, 91, 79, 0.1); color: #6b5b4f; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <strong style="font-size: 15px; color: var(--text-primary);" data-i18n="help.cptc.p.title">2. PERSONA</strong>
            </div>
            <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin: 0;"><span data-i18n="help.cptc.p.desc">Define who the AI should act as.</span><br><i style="background: rgba(107, 91, 79, 0.12); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 8px; color: #6b5b4f; font-style: normal; font-size: 12px;" data-i18n="help.cptc.p.ex">Ex: "Act as an experienced math teacher..."</i></p>
        </div>
        <div style="background: var(--bg-card); padding: 20px; border-radius: 12px; border: 1px solid var(--border-light); display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(74, 155, 111, 0.1); color: #4a9b6f; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </div>
                <strong style="font-size: 15px; color: var(--text-primary);" data-i18n="help.cptc.t.title">3. TASK</strong>
            </div>
            <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin: 0;"><span data-i18n="help.cptc.t.desc">Clearly state what you want the AI to do.</span><br><i style="background: rgba(74, 155, 111, 0.12); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 8px; color: #4a9b6f; font-style: normal; font-size: 12px;" data-i18n="help.cptc.t.ex">Ex: "Create 3 exercises with real-world examples..."</i></p>
        </div>
        <div style="background: var(--bg-card); padding: 20px; border-radius: 12px; border: 1px solid var(--border-light); display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 38px; height: 38px; border-radius: 10px; background: rgba(217, 119, 87, 0.1); color: #d97757; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <strong style="font-size: 15px; color: var(--text-primary);" data-i18n="help.cptc.c2.title">4. CONSTRAINTS</strong>
            </div>
            <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin: 0;"><span data-i18n="help.cptc.c2.desc">Set limits, format, or tone.</span><br><i style="background: rgba(217, 119, 87, 0.12); padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 8px; color: #d97757; font-style: normal; font-size: 12px;" data-i18n="help.cptc.c2.ex">Ex: "Use simple language. Do not include answers..."</i></p>
        </div>
    </div>

    <div style="border-top: 1px solid var(--border-light); margin: 0 0 48px;"></div>
    <p style="font-size: 11px; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 20px;" data-i18n="help.start.title">Get Started in 3 Steps</p>
    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 48px;">
        <div style="display: flex; gap: 20px; align-items: flex-start; background: var(--bg-card); padding: 20px 24px; border-radius: 12px; border: 1px solid var(--border-light);">
            <div style="width:36px;height:36px;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex-shrink:0;">1</div>
            <div><h3 style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:4px;" data-i18n="help.start.s1.title">Explore the Guide</h3><p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0;" data-i18n="help.start.s1.desc">Click "Guide" in the navigation and read the introduction.</p></div>
        </div>
        <div style="display: flex; gap: 20px; align-items: flex-start; background: var(--bg-card); padding: 20px 24px; border-radius: 12px; border: 1px solid var(--border-light);">
            <div style="width:36px;height:36px;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex-shrink:0;">2</div>
            <div><h3 style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:4px;" data-i18n="help.start.s2.title">Copy a Prompt</h3><p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0;" data-i18n="help.start.s2.desc">Go to "Prompts", pick a subject and grade level, click "Copy".</p></div>
        </div>
        <div style="display: flex; gap: 20px; align-items: flex-start; background: var(--bg-card); padding: 20px 24px; border-radius: 12px; border: 1px solid var(--border-light);">
            <div style="width:36px;height:36px;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex-shrink:0;">3</div>
            <div><h3 style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:4px;" data-i18n="help.start.s3.title">Try an AI Tool</h3><p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0;" data-i18n="help.start.s3.desc">Go to "Tools", select a category and click any tool to open it directly.</p></div>
        </div>
    </div>

    <div style="border-top: 1px solid var(--border-light); margin: 0 0 48px;"></div>
    <p style="font-size: 11px; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;" data-i18n="help.tips.title">Platform Tips</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-bottom: 48px;">
        <div style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-light); padding: 16px 20px; display: flex; gap: 14px; align-items: flex-start;">
            <div style="width:34px;height:34px;border-radius:10px;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div>
                <p style="font-size:13px;font-weight:600;color:var(--text-primary);margin:0 0 3px;" data-i18n="help.tips.lang.label">Language</p>
                <p style="font-size:12px;color:var(--text-secondary);line-height:1.5;margin:0;" data-i18n="help.tips.lang">Click the globe icon in the top-right to switch language (MK / SQ / EN).</p>
            </div>
        </div>
        <div style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-light); padding: 16px 20px; display: flex; gap: 14px; align-items: flex-start;">
            <div style="width:34px;height:34px;border-radius:10px;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </div>
            <div>
                <p style="font-size:13px;font-weight:600;color:var(--text-primary);margin:0 0 3px;" data-i18n="help.tips.theme.label">Theme</p>
                <p style="font-size:12px;color:var(--text-secondary);line-height:1.5;margin:0;" data-i18n="help.tips.theme">Click the moon icon to toggle between light and dark mode.</p>
            </div>
        </div>
        <div style="background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-light); padding: 16px 20px; display: flex; gap: 14px; align-items: flex-start;">
            <div style="width:34px;height:34px;border-radius:10px;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M6 8l4 4-4 4"></path><line x1="12" y1="16" x2="18" y2="16"></line></svg>
            </div>
            <div>
                <p style="font-size:13px;font-weight:600;color:var(--text-primary);margin:0 0 3px;" data-i18n="help.tips.esc.label">Keyboard</p>
                <p style="font-size:12px;color:var(--text-secondary);line-height:1.5;margin:0;" data-i18n="help.tips.esc">Press Escape to close any open panel or modal.</p>
            </div>
        </div>
    </div>

    <div style="border-top: 1px solid var(--border-light); margin: 0 0 48px;"></div>
    <p style="font-size: 11px; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;" data-i18n="help.faq.title">Frequently Asked Questions</p>
    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 48px;">

        <div style="background:var(--bg-card);border-radius:12px;border:1px solid var(--border-light);padding:16px 20px;cursor:pointer;user-select:none;" role="button" tabindex="0" aria-expanded="false" onclick="App.toggleFAQ(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();App.toggleFAQ(this);}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
                <p style="font-size:14px;font-weight:600;color:var(--text-primary);margin:0;" data-i18n="help.faq.q1.q">Is the platform free?</p>
                <svg class="faq-ch" style="color:var(--text-tertiary);transition:transform 0.2s;flex-shrink:0;" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div class="faq-ans" style="display:none;padding-top:10px;margin-top:10px;border-top:1px solid var(--border-light);">
                <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0;" data-i18n="help.faq.q1.a">Yes, completely free and open-source.</p>
            </div>
        </div>

        <div style="background:var(--bg-card);border-radius:12px;border:1px solid var(--border-light);padding:16px 20px;cursor:pointer;user-select:none;" role="button" tabindex="0" aria-expanded="false" onclick="App.toggleFAQ(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();App.toggleFAQ(this);}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
                <p style="font-size:14px;font-weight:600;color:var(--text-primary);margin:0;" data-i18n="help.faq.q2.q">Do I need to create an account?</p>
                <svg class="faq-ch" style="color:var(--text-tertiary);transition:transform 0.2s;flex-shrink:0;" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div class="faq-ans" style="display:none;padding-top:10px;margin-top:10px;border-top:1px solid var(--border-light);">
                <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0;" data-i18n="help.faq.q2.a">No. The platform is fully open.</p>
            </div>
        </div>

        <div style="background:var(--bg-card);border-radius:12px;border:1px solid var(--border-light);padding:16px 20px;cursor:pointer;user-select:none;" role="button" tabindex="0" aria-expanded="false" onclick="App.toggleFAQ(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();App.toggleFAQ(this);}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
                <p style="font-size:14px;font-weight:600;color:var(--text-primary);margin:0;" data-i18n="help.faq.q3.q">Where do copied prompts go?</p>
                <svg class="faq-ch" style="color:var(--text-tertiary);transition:transform 0.2s;flex-shrink:0;" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div class="faq-ans" style="display:none;padding-top:10px;margin-top:10px;border-top:1px solid var(--border-light);">
                <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0;" data-i18n="help.faq.q3.a">Directly to your clipboard.</p>
            </div>
        </div>

        <div style="background:var(--bg-card);border-radius:12px;border:1px solid var(--border-light);padding:16px 20px;cursor:pointer;user-select:none;" role="button" tabindex="0" aria-expanded="false" onclick="App.toggleFAQ(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();App.toggleFAQ(this);}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
                <p style="font-size:14px;font-weight:600;color:var(--text-primary);margin:0;" data-i18n="help.faq.q4.q">Which AI tool do you recommend for beginners?</p>
                <svg class="faq-ch" style="color:var(--text-tertiary);transition:transform 0.2s;flex-shrink:0;" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div class="faq-ans" style="display:none;padding-top:10px;margin-top:10px;border-top:1px solid var(--border-light);">
                <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0;" data-i18n="help.faq.q4.a">ChatGPT or Claude are excellent first steps.</p>
            </div>
        </div>

        <div style="background:var(--bg-card);border-radius:12px;border:1px solid var(--border-light);padding:16px 20px;cursor:pointer;user-select:none;" role="button" tabindex="0" aria-expanded="false" onclick="App.toggleFAQ(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();App.toggleFAQ(this);}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
                <p style="font-size:14px;font-weight:600;color:var(--text-primary);margin:0;" data-i18n="help.faq.q5.q">Can I use this offline?</p>
                <svg class="faq-ch" style="color:var(--text-tertiary);transition:transform 0.2s;flex-shrink:0;" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div class="faq-ans" style="display:none;padding-top:10px;margin-top:10px;border-top:1px solid var(--border-light);">
                <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0;" data-i18n="help.faq.q5.a">Yes, the platform is 100% offline-capable with a Service Worker.</p>
            </div>
        </div>

        <div style="background:var(--bg-card);border-radius:12px;border:1px solid var(--border-light);padding:16px 20px;cursor:pointer;user-select:none;" role="button" tabindex="0" aria-expanded="false" onclick="App.toggleFAQ(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();App.toggleFAQ(this);}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
                <p style="font-size:14px;font-weight:600;color:var(--text-primary);margin:0;" data-i18n="help.faq.q6.q">How do I print materials?</p>
                <svg class="faq-ch" style="color:var(--text-tertiary);transition:transform 0.2s;flex-shrink:0;" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div class="faq-ans" style="display:none;padding-top:10px;margin-top:10px;border-top:1px solid var(--border-light);">
                <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0;" data-i18n="help.faq.q6.a">Use the Resources tab to select content and generate a PDF handout.</p>
            </div>
        </div>

    </div>

    <div style="border-top: 1px solid var(--border-light); margin: 0 0 48px;"></div>
    <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: 12px; padding: 24px 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
        <div style="display:flex;align-items:center;gap:16px;">
            <div style="width:40px;height:40px;border-radius:10px;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
                <p style="font-size:14px;font-weight:600;color:var(--text-primary);margin:0 0 2px;" data-i18n="help.contact.title">Contact &amp; Support</p>
                <p style="font-size:13px;color:var(--text-secondary);margin:0;" data-i18n="help.contact.desc">Have a question or suggestion? Reach us at:</p>
            </div>
        </div>
        <a href="mailto:contact@ainow.mk" style="display:inline-flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:var(--primary);text-decoration:none;padding:8px 16px;border:1.5px solid var(--primary);border-radius:8px;background:var(--primary-light);transition:background 0.15s;" onmouseover="this.style.background='rgba(217,119,87,0.15)'" onmouseout="this.style.background='var(--primary-light)'">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            contact@ainow.mk
        </a>
    </div>

</div>
`;
