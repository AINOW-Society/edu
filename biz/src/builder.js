(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/builder'] = AINOW['src/builder'] || {};
const { useState, useEffect, useMemo, useRef } = React;
const { createRoot } = ReactDOMClient;

const { Hammer, Menu, X, Check, RefreshCw, Terminal, Sparkles, User, Zap, FileText, Ban, Quote, Brain, AlertTriangle, HelpCircle, Plus, Save, Copy, Download, Upload, Share2, Loader2 } = lucide;
const { Header, Footer, ShortcutsModal, NAV_LINKS, useLanguage, ActionButtons, useToast, Toast, useGlobalShortcuts, Scratchpad, SettingsModal, SidebarWrapper } = AINOW['src/components'];
const { compressState, decompressState, copyTextToClipboard } = AINOW['src/utils'];

const html = htm.bind(React.createElement);


const DEFAULT_STATE = {
    framework: "standard",
    name: "MyCustomAgent",
    role: "Expert Consultant",
    domain: "General Strategy",
    expertise: "Analysis, Planning, Critical Thinking",
    focus: "Actionable results and clarity",
    tone: "Professional and Direct",
    methodology: "Step-by-step reasoning",
    capabilities: "Data Synthesis\nStrategic Planning",
    context: "",
    input_format: "",
    examples: "",
    constraints: []
};

const CONSTRAINT_OPTIONS = [
    "No Fluff / No Yapping",
    "No Emojis",
    "No Moralizing Lectures",
    "No Em Dashes (—)",
    "No Markdown Formatting",
    "No Bias / Opinionated Rants",
    "No Acknowledgement (Just Do It)"
];

const FRAMEWORKS = {
    standard: {
        icon: Zap,
        label: "Standard (Direct)",
        desc: "Best for general purpose assistance."
    },
    cot: {
        icon: Brain,
        label: "Chain-of-Thought",
        desc: "Forces step-by-step reasoning before answering."
    },
    fewshot: {
        icon: Quote,
        label: "Few-Shot (Examples)",
        desc: "Provides examples to guide behavior."
    },
    socratic: {
        icon: HelpCircle,
        label: "Socratic Tutor",
        desc: "Asks questions to guide the user."
    }
};

const PRESETS = {
    context: [
        { label: "Corporate", text: "Strictly adhere to corporate communication standards. Be concise, objective, and avoid slang or casual language." },
        { label: "Creative", text: "Prioritize imagination and sensory details. You are encouraged to break conventional logic if it serves the narrative." },
        { label: "Coder", text: "Follow Clean Code principles. Prioritize efficiency, security, and scalability. Always comment your code." }
    ],
    input: [
        { label: "Email Draft", text: "A rough email draft that needs polishing." },
        { label: "Code Block", text: "A block of code that contains bugs or needs optimization." },
        { label: "Raw Data", text: "A list of unorganized data points (CSV or Text)." }
    ],
    examples: [
        { label: "Professional Rewrite", text: "User: i hate this, fix it\nAI: I have identified some concerns and would like to propose a solution.\n\nUser: send asap\nAI: Please provide this at your earliest convenience." },
        { label: "Data to JSON", text: "User: John Doe (Manager), Age 45\nAI: { \"name\": \"John Doe\", \"role\": \"Manager\", \"age\": 45 }" }
    ]
};

const PRO_TEMPLATE = (state) => {
    const caps = (state.capabilities || "").split('\n').filter(l => l.trim()).map(c => `- ${c}`).join('\n');
    const consts = state.constraints.map(c => `- ${c}`).join('\n');

    let base = `[ROLE: ${state.role.toUpperCase()} INTELLIGENCE AGENT]
[ENTITY: ${state.name}]
[DOMAIN: ${state.domain.toUpperCase()}]
[EXPERTISE: ${state.expertise}]

SYSTEM OVERVIEW:
You are an advanced ${state.role} AI Agent designed to provide world-class assistance in ${state.domain}. You operate with a primary focus on ${state.focus}. 

CORE AGENT DIRECTIVES:
1. PERSONA: Adopt a ${state.tone} communication style. You are an expert peer.
2. PRIORITY: In every execution, prioritize ${state.focus}.
3. METHODOLOGY: ${state.methodology}
${state.context ? `4. CONTEXT: ${state.context}\n` : ''}${state.input_format ? `5. INPUT FORMAT: You will primarily process ${state.input_format}\n` : ''}
${state.constraints.length > 0 ? `GUARDRAILS & CONSTRAINTS:\n${consts}\n` : ''}
${state.capabilities ? `CAPABILITIES:\n${caps}\n` : ''}
${state.framework === 'cot' ? `REASONING PROTOCOL: Always think step-by-step before answering. Break down the user's intent into atomic components and plan your execution.\n` : ''}${state.framework === 'fewshot' && state.examples ? `BEHAVIORAL EXAMPLES:\n${state.examples}\n` : ''}${state.framework === 'socratic' ? `INSTRUCTIONAL STYLE: Do not provide direct answers immediately. Instead, ask high-fidelity questions to guide the user towards the discovery of their own solution.\n` : ''}
SYSTEM STATUS:
By accepting these parameters, you are now operating as ${state.name}. Execute all subsequent prompts with maximum professional fidelity.`;

    return base;
};

const InputGroup = ({ label, icon: Icon, children }) => html`
    <div className="space-y-4 animate-fade-in text-left">
        <div className="flex items-center gap-2 text-coral">
            <${Icon} className="w-4 h-4" />
            <h3 className="text-xs font-black uppercase tracking-widest">${label}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${children}
        </div>
    </div>
`;

const BuilderApp = () => {
    const { t, isReady } = useLanguage();
    const { toast, showToast } = useToast();
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('ainow_builder_state');
        if (saved) { try { return JSON.parse(saved); } catch (e) { } }
        return DEFAULT_STATE;
    });
    const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isZenMode, setIsZenMode] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);

    useEffect(() => { localStorage.setItem('ainow_builder_state', JSON.stringify(state)); }, [state]);
    useEffect(() => { document.documentElement.classList.toggle('dark', currentTheme === 'dark'); localStorage.setItem('theme', currentTheme); }, [currentTheme]);

    useGlobalShortcuts({
        onThemeToggle: () => setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark'),
        onSidebarToggle: () => setIsSidebarOpen(prev => !prev),
        onHelp: () => setShowShortcuts(prev => !prev),
        onScratchpad: () => setIsScratchpadOpen(prev => !prev),
        onEscape: () => { setIsSidebarOpen(false); setIsScratchpadOpen(false); setIsSettingsOpen(false); setShowShortcuts(false); }
    });

    const finalPrompt = useMemo(() => PRO_TEMPLATE(state), [state]);

    const update = (key, val) => setState(prev => ({ ...prev, [key]: val }));

    const toggleConstraint = (c) => {
        const newC = state.constraints.includes(c)
            ? state.constraints.filter(x => x !== c)
            : [...state.constraints, c];
        update('constraints', newC);
    };

    const qualityScore = useMemo(() => {
        let score = 0;
        if (state.name.length > 3) score += 10;
        if (state.role.length > 5) score += 15;
        if (state.domain.length > 5) score += 15;
        if (state.context.length > 50) score += 20;
        if (state.constraints.length > 0) score += 20;
        if (state.framework !== 'standard') score += 10;
        if (state.input_format.length > 10) score += 10;
        return score;
    }, [state]);

    const handleCopy = async () => {
        if (await copyTextToClipboard(finalPrompt)) {
            showToast(t('builder.copied_clip'));
        }
    };

    const handleReset = () => {
        if (confirm(t('builder.reset'))) {
            setState(DEFAULT_STATE);
        }
    };

    if (!isReady) return html`<div className="fixed inset-0 bg-opal-bg dark:bg-slate-900 flex items-center justify-center"><${Loader2} className="w-12 h-12 animate-spin text-coral" /></div>`;

    const sidebarContent = html`
        <div className="space-y-8">
            <h2 className="text-[10px] font-black text-stone-light uppercase tracking-widest px-3">${t('builder.framework')}</h2>
            <div className="grid grid-cols-1 gap-2 px-1">
                ${Object.entries(FRAMEWORKS).map(([id, info]) => html`
                    <button key=${id} onClick=${() => update('framework', id)} className=${`flex items-start gap-3 p-3 rounded-xl transition-all border text-left ${state.framework === id ? 'bg-opal-bg dark:bg-teal-900/30 border-coral dark:border-teal-800' : 'bg-opal-surface dark:bg-slate-800 border-mist dark:border-slate-700 hover:border-stone-light'}`}>
                        <div className=${`p-2 rounded-lg ${state.framework === id ? 'bg-coral text-white' : 'bg-opal-bg dark:bg-slate-700 text-stone-light'}`}>
                            <${info.icon} className="w-4 h-4" />
                        </div>
                        <div>
                            <div className=${`text-xs font-bold ${state.framework === id ? 'text-coral' : 'text-charcoal dark:text-slate-300'}`}>${info.label}</div>
                            <div className="text-[10px] text-stone leading-tight mt-0.5">${info.desc}</div>
                        </div>
                    </button>
                `)}
            </div>

            <div className="px-3 pt-6 border-t border-mist dark:border-slate-800">
                <h3 className="text-[10px] font-black text-stone-light uppercase tracking-widest mb-4">${t('builder.quality')}</h3>
                <div className="w-full h-2 bg-mist dark:bg-slate-800 rounded-full overflow-hidden mb-4 border border-mist dark:border-slate-700">
                    <div className=${`h-full transition-all duration-1000 ${qualityScore > 80 ? 'bg-emerald-500' : qualityScore > 50 ? 'bg-amber-500' : 'bg-red-500'}`} style=${{ width: qualityScore + '%' }}></div>
                </div>
                <ul className="space-y-2 text-[10px] font-bold text-stone">
                    <li className="flex items-center gap-2"><div className=${`w-2 h-2 rounded-full ${state.name && state.role && state.domain ? 'bg-emerald-500' : 'bg-mist'}`}></div> ${state.name && state.role && state.domain ? t('builder.quality_checks.identity_ok') : t('builder.quality_checks.identity_bad')}</li>
                    <li className="flex items-center gap-2"><div className=${`w-2 h-2 rounded-full ${state.context.length > 50 ? 'bg-emerald-500' : state.context.length > 10 ? 'bg-amber-500' : 'bg-mist'}`}></div> ${state.context.length > 50 ? t('builder.quality_checks.context_ok') : state.context.length > 10 ? t('builder.quality_checks.context_mid') : t('builder.quality_checks.context_bad')}</li>
                    <li className="flex items-center gap-2"><div className=${`w-2 h-2 rounded-full ${state.constraints.length > 0 ? 'bg-emerald-500' : 'bg-mist'}`}></div> ${state.constraints.length > 0 ? t('builder.quality_checks.guardrails_ok') : t('builder.quality_checks.guardrails_bad')}</li>
                </ul>
            </div>
            
            <div className="px-3 pt-8 mt-auto">
                <div className="p-4 bg-opal-bg dark:bg-slate-800 rounded-2xl border border-mist dark:border-slate-700">
                    <div className="flex items-center gap-2 text-stone-light mb-2"><${AlertTriangle} className="w-3 h-3" /><span className="text-[10px] font-black uppercase tracking-widest">Privacy Note</span></div>
                    <p className="text-[10px] text-stone leading-relaxed">${t('builder.tooltip')}</p>
                </div>
            </div>
        </div>
    `;

    return html`
        <div className="min-h-screen bg-opal-bg dark:bg-slate-900 flex flex-col font-sans">
            <${Header} onMenuClick=${() => setIsSidebarOpen(true)} onThemeToggle=${() => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')} onScratchpad=${() => setIsScratchpadOpen(true)} onSettingsClick=${() => setIsSettingsOpen(true)} activePage="builder" isZenMode=${isZenMode} onToggleZen=${() => setIsZenMode(!isZenMode)} currentTheme=${currentTheme} />
            <div className="flex-1 max-w-[1600px] mx-auto w-full flex">
                <${SidebarWrapper} isOpen=${isSidebarOpen} onClose=${() => setIsSidebarOpen(false)} isZenMode=${isZenMode}>${sidebarContent}<//>
                <main className="flex-1 p-4 md:p-8 min-w-0">
                    <div className="flex flex-col lg:flex-row gap-8 h-full">
                        <div className="flex-1 space-y-10 pb-20">
                            <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
                                <div>
                                    <h1 className="text-3xl sm:text-4xl font-[600] tracking-tight text-charcoal dark:text-white text-left tabular-nums mb-2">${t('builder.title')}</h1>
                                    <p className="text-stone-light dark:text-slate-400 text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.08em] flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${t('builder.autosaved')}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick=${handleReset} className="p-2 text-stone-light hover:text-red-500 transition-colors" title=${t('builder.reset')}><${RefreshCw} className="w-5 h-5" /></button>
                                </div>
                            </header>

                            <${InputGroup} label=${t('builder.identity')} icon=${User}>
                                <div className="space-y-1 text-left">
                                    <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.name')}</label>
                                    <input type="text" value=${state.name} onChange=${e => update('name', e.target.value)} className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white" />
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.role')}</label>
                                    <input type="text" value=${state.role} onChange=${e => update('role', e.target.value)} className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white" />
                                </div>
                                <div className="md:col-span-2 space-y-1 text-left">
                                    <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.domain')}</label>
                                    <input type="text" value=${state.domain} onChange=${e => update('domain', e.target.value)} className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white" />
                                </div>
                            <//>

                            <${InputGroup} label=${t('builder.behavior')} icon=${Sparkles}>
                                <div className="space-y-1 text-left">
                                    <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.tone_style')}</label>
                                    <input type="text" value=${state.tone} onChange=${e => update('tone', e.target.value)} className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white" />
                                </div>
                                <div className="space-y-1 text-left">
                                    <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.focus')}</label>
                                    <input type="text" value=${state.focus} onChange=${e => update('focus', e.target.value)} className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white" />
                                </div>
                                <div className="md:col-span-2 space-y-1 text-left">
                                    <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.methodology')}</label>
                                    <input type="text" value=${state.methodology} onChange=${e => update('methodology', e.target.value)} className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white" />
                                </div>
                                <div className="md:col-span-2 space-y-2 text-left">
                                    <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.constraints')}</label>
                                    <div className="flex flex-wrap gap-2">
                                        ${CONSTRAINT_OPTIONS.map(opt => html`
                                            <button key=${opt} onClick=${() => toggleConstraint(opt)} className=${`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${state.constraints.includes(opt) ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400' : 'bg-opal-surface dark:bg-slate-800 border-mist dark:border-slate-700 text-stone hover:border-stone-light'}`}>
                                                ${opt}
                                            </button>
                                        `)}
                                    </div>
                                </div>
                            <//>

                            <${InputGroup} label=${t('builder.task')} icon=${FileText}>
                                <div className="md:col-span-2 space-y-1 text-left">
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.instructions')}</label>
                                        <div className="flex gap-1.5">
                                            ${PRESETS.context.map(p => html`<button key=${p.label} onClick=${() => update('context', p.text)} className="text-[9px] px-2 py-0.5 rounded bg-mist dark:bg-slate-700 text-stone font-bold hover:bg-coral hover:text-white transition-colors uppercase tracking-tighter">${p.label}</button>`)}
                                        </div>
                                    </div>
                                    <textarea value=${state.context} onChange=${e => update('context', e.target.value)} rows="4" className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white resize-none shadow-sm" placeholder="Add specific context, project background, or permanent rules..."></textarea>
                                </div>
                                <div className="space-y-1 text-left">
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.input_format')}</label>
                                        <div className="flex gap-1.5">
                                            ${PRESETS.input.map(p => html`<button key=${p.label} onClick=${() => update('input_format', p.text)} className="text-[9px] px-2 py-0.5 rounded bg-mist dark:bg-slate-700 text-stone font-bold hover:bg-coral hover:text-white transition-colors uppercase tracking-tighter">${p.label}</button>`)}
                                        </div>
                                    </div>
                                    <textarea value=${state.input_format} onChange=${e => update('input_format', e.target.value)} rows="3" className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white resize-none shadow-sm" placeholder="Describe the raw data the user will paste..."></textarea>
                                </div>
                                <div className=${`space-y-1 text-left ${state.framework !== 'fewshot' ? 'opacity-50 grayscale' : ''}`}>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.examples')}</label>
                                        <div className="flex gap-1.5">
                                            ${PRESETS.examples.map(p => html`<button key=${p.label} onClick=${() => update('examples', p.text)} className="text-[9px] px-2 py-0.5 rounded bg-mist dark:bg-slate-700 text-stone font-bold hover:bg-coral hover:text-white transition-colors uppercase tracking-tighter">${p.label}</button>`)}
                                        </div>
                                    </div>
                                    <textarea value=${state.examples} onChange=${e => update('examples', e.target.value)} disabled=${state.framework !== 'fewshot'} rows="3" className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white resize-none shadow-sm font-mono" placeholder="User: input\nAI: output..."></textarea>
                                </div>
                                <div className="md:col-span-2 space-y-1 text-left">
                                    <label className="text-[10px] font-black uppercase text-stone-light tracking-wider">${t('builder.capabilities')}</label>
                                    <textarea value=${state.capabilities} onChange=${e => update('capabilities', e.target.value)} rows="3" className="w-full bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-2xl p-4 text-sm outline-none focus:ring-2 focus:ring-coral dark:text-white resize-none shadow-sm" placeholder="List key skills (one per line)..."></textarea>
                                </div>
                            <//>
                        </div>

                        <div className="lg:w-[450px] space-y-6">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-charcoal dark:bg-black rounded-3xl border border-mist dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] group">
                                    <header className="p-5 bg-black/40 border-b border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-coral text-white flex items-center justify-center shadow-lg"><${Terminal} className="w-4 h-4" /></div>
                                            <h3 className="text-sm font-black text-white uppercase tracking-widest">${t('builder.preview')}</h3>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick=${handleCopy} className="p-2 text-stone-light hover:text-white transition-colors bg-white/5 rounded-lg border border-white/10" title="Copy to Clipboard"><${Copy} className="w-4 h-4" /></button>
                                        </div>
                                    </header>
                                    <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
                                        <pre className="text-[11px] sm:text-[12px] text-coral font-mono whitespace-pre-wrap leading-relaxed selection:bg-coral selection:text-white text-left">
                                            ${finalPrompt}
                                        </pre>
                                    </div>
                                    <footer className="p-5 bg-black/40 border-t border-white/5">
                                        <button onClick=${handleCopy} className="w-full py-4 bg-coral hover:bg-coral-hover text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-xl shadow-coral-glow active:scale-[0.98]">
                                            <${Copy} className="w-4 h-4" /> ${t('builder.copy')}
                                        </button>
                                    </footer>
                                </div>
                                <div className="flex gap-3">
                                    <button onClick=${() => {
            const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${state.name}-agent.json`;
            a.click();
        }} className="flex-1 py-3 bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 text-stone dark:text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-opal-bg transition-colors">
                                        <${Download} className="w-3.5 h-3.5" /> ${t('builder.export')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
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
root.render(html`<${BuilderApp} />`);
})();