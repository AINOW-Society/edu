(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/help'] = AINOW['src/help'] || {};
const { useState, useEffect } = React;
const { createRoot } = ReactDOMClient;

const { BookOpen, Command, Zap, Layers, MessageSquare, Play, Copy, ArrowRight, CheckCircle, HelpCircle, Keyboard, Shield, Terminal, Share2, Globe, ExternalLink, Info, Users, ShieldCheck, Sparkles, ChevronRight, Loader2, Hash, Briefcase } = lucide;
const { Header, Footer, ShortcutsModal, useLanguage, Scratchpad, SettingsModal, Toast, useToast, useGlobalShortcuts, SidebarWrapper } = AINOW['src/components'];
const { StaticPage } = AINOW['src/StaticPages'];

const html = htm.bind(React.createElement);

// ─── AI Tools Data ────────────────────────────────────────────────────────────
const TOOLS_DATA = [
    {
        category: "help.sections.tools.categories.general",
        tools: [
            { name: "ChatGPT", url: "https://chat.openai.com" },
            { name: "Microsoft Copilot", url: "https://copilot.microsoft.com" },
            { name: "Gemini", url: "https://gemini.google.com" },
            { name: "Claude", url: "https://claude.ai" },
            { name: "DeepSeek", url: "https://www.deepseek.com" },
            { name: "Perplexity", url: "https://www.perplexity.ai" }
        ]
    },
    {
        category: "help.sections.tools.categories.writing",
        tools: [
            { name: "Grammarly", url: "https://www.grammarly.com" },
            { name: "QuillBot", url: "https://quillbot.com" },
            { name: "Wordtune", url: "https://www.wordtune.com" },
            { name: "Jasper", url: "https://www.jasper.ai" },
            { name: "Sudowrite", url: "https://www.sudowrite.com" }
        ]
    },
    {
        category: "help.sections.tools.categories.presentations",
        tools: [
            { name: "Gamma", url: "https://gamma.app" },
            { name: "Beautiful.ai", url: "https://www.beautiful.ai" },
            { name: "Tome", url: "https://tome.app" },
            { name: "Canva", url: "https://www.canva.com" },
            { name: "Pitch", url: "https://pitch.com" },
            { name: "Decktopus", url: "https://www.decktopus.com" }
        ]
    },
    {
        category: "help.sections.tools.categories.images",
        tools: [
            { name: "DALL·E", url: "https://openai.com/dall-e" },
            { name: "Midjourney", url: "https://www.midjourney.com" },
            { name: "Leonardo AI", url: "https://leonardo.ai" },
            { name: "OpenArt", url: "https://openart.ai" },
            { name: "StarryAI", url: "https://starryai.com" },
            { name: "Adobe Firefly", url: "https://www.adobe.com/firefly" }
        ]
    },
    {
        category: "help.sections.tools.categories.video",
        tools: [
            { name: "Runway ML", url: "https://runwayml.com" },
            { name: "Synthesia", url: "https://www.synthesia.io" },
            { name: "Pictory", url: "https://pictory.ai" },
            { name: "Elai", url: "https://elai.io" },
            { name: "Veo", url: "https://deepmind.google/models/veo" },
            { name: "Descript", url: "https://www.descript.com" },
            { name: "Kapwing", url: "https://www.kapwing.com" }
        ]
    },
    {
        category: "help.sections.tools.categories.audio",
        tools: [
            { name: "Fliki", url: "https://fliki.ai" },
            { name: "ElevenLabs", url: "https://elevenlabs.io" },
            { name: "Play.ht", url: "https://play.ht" },
            { name: "Otter.ai", url: "https://otter.ai" },
            { name: "Whisper", url: "https://openai.com/research/whisper" }
        ]
    },
    {
        category: "help.sections.tools.categories.music",
        tools: [
            { name: "Assisted Melody", url: "https://experiments.withgoogle.com/assisted-melody" },
            { name: "Semi Conductor", url: "https://experiments.withgoogle.com/semi-conductor" },
            { name: "Suno", url: "https://suno.ai" },
            { name: "Soundraw", url: "https://soundraw.io" }
        ]
    },
    {
        category: "help.sections.tools.categories.research",
        tools: [
            { name: "Consensus", url: "https://consensus.app" },
            { name: "Elicit", url: "https://elicit.org" },
            { name: "Scite", url: "https://scite.ai" },
            { name: "Connected Papers", url: "https://www.connectedpapers.com" },
            { name: "Research Rabbit", url: "https://www.researchrabbit.ai" }
        ]
    },
    {
        category: "help.sections.tools.categories.search",
        tools: [
            { name: "Google Fact Check Explorer", url: "https://toolbox.google.com/factcheck/explorer" },
            { name: "InVID WeVerify", url: "https://www.invid-project.eu" },
            { name: "TinEye", url: "https://tineye.com" }
        ]
    },
    {
        category: "help.sections.tools.categories.math",
        tools: [
            { name: "Wolfram Alpha", url: "https://www.wolframalpha.com" },
            { name: "Photomath", url: "https://photomath.com" },
            { name: "Desmos", url: "https://www.desmos.com" },
            { name: "GeoGebra", url: "https://www.geogebra.org" },
            { name: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
            { name: "Orange Data Mining", url: "https://orangedatamining.com" }
        ]
    },
    {
        category: "help.sections.tools.categories.programming",
        tools: [
            { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
            { name: "Replit", url: "https://replit.com" },
            { name: "CodeWP", url: "https://codewp.ai" },
            { name: "Cursor", url: "https://cursor.sh" },
            { name: "Tabnine", url: "https://www.tabnine.com" }
        ]
    },
    {
        category: "help.sections.tools.categories.assessment",
        tools: [
            { name: "Kahoot AI", url: "https://kahoot.com" },
            { name: "Quizizz AI", url: "https://quizizz.com" },
            { name: "Gradescope", url: "https://www.gradescope.com" },
            { name: "Turnitin", url: "https://www.turnitin.com" },
            { name: "Formative", url: "https://www.formative.com" }
        ]
    },
    {
        category: "help.sections.tools.categories.collaboration",
        tools: [
            { name: "Notion AI", url: "https://www.notion.so/product/ai" },
            { name: "Miro AI", url: "https://miro.com/ai" },
            { name: "ClickUp AI", url: "https://clickup.com/ai" },
            { name: "Slack AI", url: "https://slack.com" }
        ]
    },
    {
        category: "help.sections.tools.categories.translation",
        tools: [
            { name: "DeepL", url: "https://www.deepl.com" },
            { name: "Google Translate", url: "https://translate.google.com" },
            { name: "Microsoft Translator", url: "https://www.microsoft.com/translator" }
        ]
    },
    {
        category: "help.sections.tools.categories.multifunction",
        tools: [
            { name: "Character.AI", url: "https://character.ai" },
            { name: "Curipod", url: "https://curipod.com" },
            { name: "Poe", url: "https://poe.com" },
            { name: "Teachable Machine", url: "https://teachablemachine.withgoogle.com" }
        ]
    },
    {
        category: "Platform and privacy focused",
        tools: [
            { name: "DuckDuckGo AI", url: "https://duckduckgo.com" },
            { name: "LM Studio", url: "https://lmstudio.ai" },
            { name: "Ollama", url: "https://ollama.com" },
            { name: "Nextcloud AI", url: "https://nextcloud.com" }
        ]
    }
];

// ─── Nav Config ───────────────────────────────────────────────────────────────
const GUIDE_NAV = [
    { id: 'intro',           labelKey: 'help.toc.intro',           icon: BookOpen },
    { id: 'getting-started', labelKey: 'help.toc.getting_started', icon: Zap },
    { id: 'features',        labelKey: 'help.toc.features',        icon: Layers },
    { id: 'shortcuts',       labelKey: 'help.toc.shortcuts',       icon: Keyboard },
    { id: 'tools',           labelKey: 'help.toc.tools',           icon: Globe },
    { id: 'faq',             labelKey: 'help.toc.faq',             icon: HelpCircle },
];


// ─── Shared Doc Components ────────────────────────────────────────────────────
const DocSection = ({ title, icon: Icon, children }) => html`
    <section className="mb-16 animate-fade-in group text-left">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-mist dark:border-slate-800">
            ${Icon ? html`<div className="p-2.5 bg-opal-sidebar dark:bg-teal-900/30 text-coral dark:text-coral rounded-xl border border-mist dark:border-teal-800 shadow-sm"><${Icon} className="w-5 h-5" /></div>` : ''}
            <h2 className="text-xl font-black text-charcoal dark:text-white uppercase tracking-tight group-hover:text-coral transition-all">
                ${title}
            </h2>
        </div>
        <div className="text-stone dark:text-slate-300 leading-relaxed space-y-6 font-medium">
            ${children}
        </div>
    </section>
`;

const DocSubSection = ({ title, children }) => html`
    <div className="mb-10 pl-6 border-l-2 border-mist dark:border-slate-800 hover:border-coral transition-colors">
        <h3 className="text-sm font-black text-charcoal dark:text-slate-200 mb-4 uppercase tracking-widest">${title}</h3>
        <div className="text-stone dark:text-slate-400 text-sm leading-relaxed space-y-3 font-medium">
            ${children}
        </div>
    </div>
`;

const Note = ({ type = 'info', children }) => {
    const styles = {
        info:    'bg-blue-50   dark:bg-blue-900/20   border-blue-100   dark:border-blue-900/30   text-blue-800   dark:text-blue-200',
        warning: 'bg-amber-50  dark:bg-amber-900/20  border-amber-100  dark:border-amber-900/30  text-amber-800  dark:text-amber-200',
        tip:     'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-900/30 text-emerald-800 dark:text-emerald-200',
    };
    return html`<div className=${`p-4 rounded-xl border ${styles[type]} my-6 text-sm`}>${children}</div>`;
};

const FaqItem = ({ i, t }) => html`
    <details open=${i === 1} className="group bg-opal-surface dark:bg-slate-800/50 rounded-2xl border border-mist dark:border-slate-700 transition-all overflow-hidden">
        <summary className="flex items-center justify-between p-5 cursor-pointer font-black text-charcoal dark:text-slate-200 uppercase tracking-tight text-sm select-none hover:bg-opal-bg transition-colors">
            ${t(`help.faq.q${i}.question`)}
            <${ArrowRight} className="w-4 h-4 text-coral transition-transform group-open:rotate-90 shrink-0" />
        </summary>
        <div className="px-5 pb-5 text-stone dark:text-slate-400 text-[13px] leading-relaxed border-t border-mist dark:border-slate-700 pt-5 font-medium">
            ${i === 1 ? html`
                <${React.Fragment}>
                    <p dangerouslySetInnerHTML=${{ __html: t('help.faq.q1.answer_1') }}></p>
                    <p className="mt-2" dangerouslySetInnerHTML=${{ __html: t('help.faq.q1.answer_2') }}></p>
                <//>
            ` : html`<div dangerouslySetInnerHTML=${{ __html: t(`help.faq.q${i}.answer`) }}></div>`}
        </div>
    </details>
`;

// ─── Guide Page Components ────────────────────────────────────────────────────
const GuideIntro = ({ t }) => html`
    <div className="animate-fade-in text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-opal-surface dark:bg-slate-800 text-stone-light dark:text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-mist dark:border-slate-700">
            <span>${t('help.intro.badge')}</span>
            <span className="w-1 h-1 rounded-full bg-mist"></span>
            <span>${t('help.intro.version')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-[600] tracking-tight text-charcoal dark:text-white text-left tabular-nums mb-4 uppercase">
            ${t('help.intro.title_prefix')} <span className="text-coral">${t('help.intro.title_suffix')}</span>
        </h1>
        <p className="text-xl text-stone dark:text-slate-300 leading-relaxed font-medium mb-12">
            ${t('help.intro.subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            ${GUIDE_NAV.slice(1).map(item => html`
                <a key=${item.id} href=${`#/guide/${item.id}`}
                   className="flex items-center gap-4 p-4 rounded-2xl border border-mist dark:border-slate-700 bg-opal-surface dark:bg-slate-800/50 hover:border-coral dark:hover:border-coral transition-all group">
                    <div className="p-2.5 rounded-xl bg-opal-bg dark:bg-slate-900 border border-mist dark:border-slate-700 text-stone group-hover:text-coral group-hover:border-coral transition-all">
                        <${item.icon} className="w-4 h-4" />
                    </div>
                    <span className="font-black text-charcoal dark:text-slate-200 text-xs uppercase tracking-widest group-hover:text-coral transition-colors">${t(item.labelKey)}</span>
                    <${ChevronRight} className="w-3 h-3 text-mist group-hover:text-coral ml-auto transition-colors" />
                </a>
            `)}
        </div>
    </div>
`;

const GuideGettingStarted = ({ t }) => html`
    <div className="animate-fade-in">
        <${DocSection} title=${t('help.sections.getting_started.title')} icon=${Zap}>
            <p dangerouslySetInnerHTML=${{ __html: t('help.sections.getting_started.text') }}></p>
            <${Note} type="tip">
                <strong>${t('help.sections.getting_started.note_bold')}</strong> ${t('help.sections.getting_started.note_text')}
            <//>
            <${DocSubSection} title=${t('help.sections.getting_started.fill_in_title')}>
                <p dangerouslySetInnerHTML=${{ __html: t('help.sections.getting_started.fill_in_text_1') }}></p>
                <p>${t('help.sections.getting_started.fill_in_text_2')}</p>
            <//>
        <//>
    </div>
`;

const GuideFeatures = ({ t }) => html`
    <div className="animate-fade-in">
        <${DocSection} title=${t('help.sections.features.title')} icon=${Layers}>
            <${DocSubSection} title=${t('help.sections.features.library.title')}>
                <p dangerouslySetInnerHTML=${{ __html: t('help.sections.features.library.text') }}></p>
            <//>
            <${DocSubSection} title=${t('help.sections.features.agents.title')}>
                <p dangerouslySetInnerHTML=${{ __html: t('help.sections.features.agents.text') }}></p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li dangerouslySetInnerHTML=${{ __html: t('help.sections.features.agents.list_1') }}></li>
                    <li dangerouslySetInnerHTML=${{ __html: t('help.sections.features.agents.list_2') }}></li>
                    <li dangerouslySetInnerHTML=${{ __html: t('help.sections.features.agents.list_3') }}></li>
                </ul>
            <//>
            <${DocSubSection} title=${t('help.sections.features.playbooks.title')}>
                <p>${t('help.sections.features.playbooks.text_1')}</p>
                <p>${t('help.sections.features.playbooks.text_2')}</p>
                <ol className="list-decimal pl-5 space-y-2 mt-2 marker:text-coral marker:font-black">
                    <li>${t('help.sections.features.playbooks.step_1')}</li>
                    <li>${t('help.sections.features.playbooks.step_2')}</li>
                    <li>${t('help.sections.features.playbooks.step_3')}</li>
                    <li>${t('help.sections.features.playbooks.step_4')}</li>
                </ol>
            <//>
            <${DocSubSection} title=${t('help.sections.features.situations.title')}>
                <p>${t('help.sections.features.situations.text_1')}</p>
                <p className="mt-2">${t('help.sections.features.situations.text_2')}</p>
                <ol className="list-decimal pl-5 space-y-2 mt-2 marker:text-coral marker:font-black">
                    <li>${t('help.sections.features.situations.step_1')}</li>
                    <li>${t('help.sections.features.situations.step_2')}</li>
                    <li>${t('help.sections.features.situations.step_3')}</li>
                    <li>${t('help.sections.features.situations.step_4')}</li>
                </ol>
            <//>
            <${DocSubSection} title=${t('help.sections.features.builder.title')}>
                <p>${t('help.sections.features.builder.text')}</p>
                <${Note}>${t('help.sections.features.builder.tip')}<//>
            <//>
        <//>
    </div>
`;

const GuideShortcuts = ({ t }) => html`
    <div className="animate-fade-in">
        <${DocSection} title=${t('help.toc.shortcuts')} icon=${Keyboard}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-opal-surface dark:bg-slate-800/50 p-6 rounded-2xl border border-mist dark:border-slate-700">
                    <h3 className="text-xs font-black uppercase text-coral dark:text-coral mb-4 tracking-widest">${t('pages.accessibility.global.title')}</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.global.show')}</span>
                            <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">?</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.global.theme')}</span>
                            <div className="flex gap-1">
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">Cmd</span>
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">J</span>
                            </div>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.global.sidebar')}</span>
                            <div className="flex gap-1">
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">Cmd</span>
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">\</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-opal-surface dark:bg-slate-800/50 p-6 rounded-2xl border border-mist dark:border-slate-700">
                    <h3 className="text-xs font-black uppercase text-coral dark:text-coral mb-4 tracking-widest">${t('pages.accessibility.jump.title')}</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.jump.prompts')}</span>
                            <div className="flex gap-1 items-center">
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">g</span>
                                <span className="text-stone-light text-[10px] mx-1 uppercase font-black">then</span>
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">p</span>
                            </div>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.jump.agents')}</span>
                            <div className="flex gap-1 items-center">
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">g</span>
                                <span className="text-stone-light text-[10px] mx-1 uppercase font-black">then</span>
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">a</span>
                            </div>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.jump.builder')}</span>
                            <div className="flex gap-1 items-center">
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">g</span>
                                <span className="text-stone-light text-[10px] mx-1 uppercase font-black">then</span>
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">b</span>
                            </div>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.jump.resources')}</span>
                            <div className="flex gap-1 items-center">
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">g</span>
                                <span className="text-stone-light text-[10px] mx-1 uppercase font-black">then</span>
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">r</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-opal-surface dark:bg-slate-800/50 p-6 rounded-2xl border border-mist dark:border-slate-700">
                    <h3 className="text-xs font-black uppercase text-coral dark:text-coral mb-4 tracking-widest">${t('pages.accessibility.actions.title')}</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.actions.search')}</span>
                            <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">/</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.actions.close')}</span>
                            <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">Esc</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-stone dark:text-slate-300 font-medium">${t('pages.accessibility.actions.copy')}</span>
                            <div className="flex gap-1">
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">Cmd</span>
                                <span className="px-2 py-1 bg-opal-bg dark:bg-slate-700 rounded border border-mist dark:border-slate-600 font-mono text-[10px] uppercase font-black">Enter</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        <//>
    </div>
`;

const GuideTools = ({ t }) => html`
    <div className="animate-fade-in">
        <${DocSection} title=${t('help.sections.tools.title')} icon=${Globe}>
            <p className="mb-6">${t('help.sections.tools.desc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${TOOLS_DATA.map((group, idx) => html`
                    <div key=${idx}>
                        <h3 className="font-black text-charcoal dark:text-white mb-3 pb-2 border-b border-mist dark:border-slate-800 text-xs uppercase tracking-widest">
                            ${t(group.category)}
                        </h3>
                        <ul className="space-y-2">
                            ${group.tools.map((tool, toolIdx) => html`
                                <li key=${toolIdx}>
                                    <a href=${tool.url} target="_blank" rel="noopener noreferrer"
                                       className="flex items-center justify-between group p-2 -mx-2 rounded-xl hover:bg-opal-surface transition-all">
                                        <span className="text-stone dark:text-slate-400 group-hover:text-coral dark:group-hover:text-coral font-bold text-sm transition-colors">
                                            ${tool.name}
                                        </span>
                                        <${ExternalLink} className="w-3 h-3 text-mist group-hover:text-coral opacity-0 group-hover:opacity-100 transition-all" />
                                    </a>
                                </li>
                            `)}
                        </ul>
                    </div>
                `)}
            </div>
        <//>
    </div>
`;

const GuideFaq = ({ t }) => html`
    <div className="animate-fade-in">
        <${DocSection} title="FAQ" icon=${HelpCircle}>
            <div className="space-y-4">
                ${/* q13 covered the Lab tools, removed in v0.94 */ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => html`
                    <${FaqItem} key=${'faq-' + i} i=${i} t=${t} />
                `)}
            </div>
        <//>
    </div>
`;

const GUIDE_PAGES = {
    'intro':           GuideIntro,
    'getting-started': GuideGettingStarted,
    'features':        GuideFeatures,
    'shortcuts':       GuideShortcuts,
    'tools':           GuideTools,
    'faq':             GuideFaq,
};

// ─── Sidebar Nav Component ────────────────────────────────────────────────────
const PageNav = ({ currentHash, t, onClose }) => {
    const isGuideActive = (id) => currentHash === `#/guide/${id}`;
    const isPageActive  = (id) => currentHash === `#/page/${id}`;

    const navItem = (key, href, active, icon, label) => html`
        <a key=${key} href=${href} onClick=${onClose}
           className=${`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
               active
                   ? 'bg-coral/10 dark:bg-teal-900/30 text-coral font-semibold shadow-sm'
                   : 'text-stone dark:text-slate-400 hover:bg-opal-bg dark:hover:bg-slate-800 hover:text-charcoal dark:hover:text-slate-200'
           }`}>
            <${icon} className="w-4 h-4 shrink-0" />
            <span className="flex-1">${label}</span>
            ${active ? html`<${ChevronRight} className="w-3 h-3 text-coral shrink-0" />` : null}
        </a>
    `;

    return html`
        <div>
            <p className="text-[10px] font-black text-stone-light uppercase tracking-widest mb-3 px-3">${t('resources.sidebar.guide_section')}</p>
            <nav className="space-y-0.5 mb-6">
                ${GUIDE_NAV.map(item => navItem(
                    `guide-${item.id}`,
                    `#/guide/${item.id}`,
                    isGuideActive(item.id),
                    item.icon,
                    t(item.labelKey)
                ))}
            </nav>
        </div>
    `;
};

// ─── Main App ─────────────────────────────────────────────────────────────────
const HelpApp = () => {
    const { t, isReady } = useLanguage();
    const { toast } = useToast();
    const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isZenMode, setIsZenMode] = useState(false);
    const [hash, setHash] = useState(() => window.location.hash || '#/guide/intro');

    useGlobalShortcuts({
        onThemeToggle: () => setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark'),
        onSidebarToggle: () => setIsSidebarOpen(prev => !prev),
        onHelp: () => setShowShortcuts(prev => !prev),
        onScratchpad: () => setIsScratchpadOpen(prev => !prev),
        onEscape: () => {
            setIsSidebarOpen(false);
            setShowShortcuts(false);
            setIsScratchpadOpen(false);
            setIsSettingsOpen(false);
        }
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    useEffect(() => {
        const onHash = () => setHash(window.location.hash || '#/guide/intro');
        window.addEventListener('hashchange', onHash);
        if (!window.location.hash) window.location.hash = '#/guide/intro';
        return () => window.removeEventListener('hashchange', onHash);
    }, []);

    if (!isReady) return html`
        <div className="fixed inset-0 bg-opal-bg dark:bg-slate-900 flex items-center justify-center">
            <${Loader2} className="w-12 h-12 animate-spin text-coral" />
        </div>
    `;

    const isGuide = hash.startsWith('#/guide/');
    const pageId  = hash.split('/').pop() || 'intro';

    let Content;
    if (isGuide) {
        const GuideComp = GUIDE_PAGES[pageId] || GuideIntro;
        Content = html`<${GuideComp} t=${t} />`;
    } else {
        Content = html`<${StaticPage} page=${pageId} />`;
    }

    return html`
        <div className="min-h-screen bg-opal-bg dark:bg-slate-900 flex flex-col font-sans transition-colors duration-200">
            <${Header}
                currentTheme=${currentTheme}
                onThemeToggle=${() => setCurrentTheme(t => t === 'dark' ? 'light' : 'dark')}
                onMenuClick=${() => setIsSidebarOpen(true)}
                onScratchpad=${() => setIsScratchpadOpen(true)}
                onSettingsClick=${() => setIsSettingsOpen(true)}
                activePage="help"
                isZenMode=${isZenMode}
                onToggleZen=${() => setIsZenMode(!isZenMode)}
            />

            <div className="flex-1 max-w-[1600px] mx-auto w-full flex">

                <!-- Mobile sidebar overlay -->
                <${SidebarWrapper} isOpen=${isSidebarOpen} onClose=${() => setIsSidebarOpen(false)} showOnDesktop=${false} isZenMode=${isZenMode}>
                    <${PageNav} currentHash=${hash} t=${t} onClose=${() => setIsSidebarOpen(false)} />
                <//>

                <!-- Desktop sidebar: always visible -->
                ${!isZenMode && html`
                    <div className="hidden lg:flex flex-col w-60 shrink-0 pt-12 px-4 border-r border-mist dark:border-slate-800 no-scrollbar overflow-y-auto">
                        <${PageNav} currentHash=${hash} t=${t} onClose=${() => {}} />
                        <div className="mt-auto pb-10 pt-8">
                            <a href="https://www.ainow.mk" target="_blank"
                               className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-stone dark:text-slate-400 border border-mist dark:border-slate-700 hover:border-coral hover:text-coral transition-all">
                                <${Globe} className="w-3 h-3" /> ainow.mk
                            </a>
                        </div>
                    </div>
                `}

                <!-- Main content -->
                <main className="flex-1 min-w-0 px-6 lg:px-16 py-12 overflow-y-auto no-scrollbar">
                    ${Content}
                </main>
            </div>

            <${Toast} toast=${toast} />
            <${Scratchpad} isOpen=${isScratchpadOpen} onClose=${() => setIsScratchpadOpen(false)} />
            <${SettingsModal} isOpen=${isSettingsOpen} onClose=${() => setIsSettingsOpen(false)} />
            <${ShortcutsModal} isOpen=${showShortcuts} onClose=${() => setShowShortcuts(false)} />
            <${Footer} isZenMode=${isZenMode} />
        </div>
    `;
};

const root = createRoot(document.getElementById('root'));
root.render(html`<${HelpApp} />`);
})();