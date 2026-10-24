(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/help'] = AINOW['src/help'] || {};

const { Layers, Keyboard, Globe, ExternalLink } = lucide;

const html = htm.bind(React.createElement);

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

const DocSection = ({ title, icon: Icon, children }) => html`
    <section className="mb-16 animate-fade-in group text-left">
        ${title && html`<div className="flex items-center gap-4 mb-8 pb-4 border-b border-mist dark:border-slate-800">
            ${Icon ? html`<div className="p-2.5 bg-opal-sidebar dark:bg-teal-900/30 text-coral dark:text-coral rounded-xl border border-mist dark:border-teal-800 shadow-sm"><${Icon} className="w-5 h-5" /></div>` : ''}
            <h2 className="text-xl font-black text-charcoal dark:text-white uppercase tracking-tight group-hover:text-coral transition-all">
                ${title}
            </h2>
        </div>
        `}
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

const GuideFeatures = ({ t, embedded = false }) => html`
    <div className="animate-fade-in">
        <${DocSection} title=${embedded ? null : t('help.sections.features.title')} icon=${Layers}>
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

const GuideShortcuts = ({ t, embedded = false }) => html`
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

const GuideTools = ({ t, embedded = false }) => html`
    <div className="animate-fade-in">
        <${DocSection} title=${embedded ? null : t('help.sections.tools.title')} icon=${Globe}>
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

const GUIDE_PAGES = {
    'features':        GuideFeatures,
    'shortcuts':       GuideShortcuts,
    'tools':           GuideTools,
};

__exports.GUIDE_PAGES = GUIDE_PAGES;
})();
