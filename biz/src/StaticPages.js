(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/StaticPages'] = AINOW['src/StaticPages'] || {};
const { useEffect } = React;

const { Settings2, Search, Play, Copy, Terminal, Code, CheckCircle, Heart, Share2, ExternalLink, Shield, Users, Lock, Eye, Scale, BrainCircuit, AlertTriangle, Book, Github, Hand, User, Sparkles, Ban, GitMerge, Globe, Activity, Keyboard, Cpu, Palette, Box } = lucide;
const { useLanguage } = AINOW['src/components'];

const html = htm.bind(React.createElement);

const PageWrapper = ({ title, children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return html`
        <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in text-left">
            <h1 className="text-3xl sm:text-4xl font-[600] tracking-tight text-charcoal dark:text-white text-left tabular-nums mb-6 uppercase">${title}</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none">
                ${children}
            </div>
        </div>
    `;
};

const ContentCard = ({ title, desc, labels = [], icon: Icon }) => html`
    <div className="p-6 rounded-2xl bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 hover:border-coral transition-all group flex flex-col h-full shadow-sm hover:shadow-md">
        ${Icon && html`<div className="mb-4 text-stone group-hover:text-coral transition-colors"><${Icon} className="w-5 h-5" /></div>`}
        <h3 className="font-black text-charcoal dark:text-slate-100 mb-2 uppercase tracking-tight text-sm">${title}</h3>
        <p className="text-stone dark:text-slate-400 text-[11px] leading-relaxed mb-4 flex-1">${desc}</p>
        <div className="flex flex-wrap gap-1.5">
            ${labels.map(label => html`
                <span key=${label} className="px-2 py-0.5 rounded-md bg-opal-bg dark:bg-slate-700 text-stone-dark dark:text-slate-300 text-[9px] font-black uppercase tracking-widest border border-mist dark:border-slate-600">
                    ${label}
                </span>
            `)}
        </div>
    </div>
`;

const AboutPage = () => {
    const { t } = useLanguage();
    return html`
    <${PageWrapper} title=${t('pages.about.title')}>
        
        <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">${t('pages.about.story_title')}</h2>
            <p className="lead text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                ${t('pages.about.story_text')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
            <div className="bg-opal-sidebar dark:bg-teal-900/20 p-8 rounded-3xl border border-mist dark:border-teal-800">
                <h2 className="text-xl font-bold text-charcoal dark:text-teal-300 mb-4 flex items-center gap-2">
                    ${t('pages.about.mission_title')}
                </h2>
                <p className="text-stone dark:text-teal-200 leading-relaxed text-sm">
                    ${t('pages.about.mission_text')}
                </p>
            </div>
            
            <div className="bg-opal-bg dark:bg-slate-800/50 p-8 rounded-3xl border border-mist dark:border-slate-800">
                <h2 className="text-xl font-bold text-charcoal dark:text-white mb-4">
                    ${t('pages.about.values_title')}
                </h2>
                <p className="text-stone dark:text-slate-300 leading-relaxed text-sm">
                    ${t('pages.about.values_text')}
                </p>
            </div>
        </div>

        <div className="mb-16 not-prose">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">${t('pages.about.creator_title')}</h2>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col gap-6">
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Suad Seferi</h3>
                            <span className="px-3 py-1 rounded-full bg-coral/10 dark:bg-coral/20 text-coral dark:text-coral-light text-xs font-bold uppercase tracking-wider">Founder & President</span>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base mb-6">
                            ${t('pages.about.creator_bio')}
                        </p>

                        <div className="bg-opal-sidebar dark:bg-coral/10 p-6 rounded-2xl border border-mist dark:border-coral-dark/50 mb-6 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-coral opacity-50"></div>
                            <p className="text-charcoal dark:text-coral-light text-xl font-black leading-tight italic relative z-10">
                                ${t('pages.about.creator_quote')}
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="text-slate-600 dark:text-slate-400 text-sm italic border-l-4 border-slate-200 dark:border-slate-700 pl-4 py-1">
                                ${t('pages.about.creator_quote_2')}
                            </p>
                        </div>

                        <a href="https://suad.ainow.mk" target="_blank" className="inline-flex items-center gap-2 text-coral dark:text-coral-light font-bold hover:underline transition-all hover:text-stone-light dark:hover:text-coral-light">
                            ${t('pages.about.bio_link')} <${ExternalLink} className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-center mb-16 not-prose">
            <a href="https://www.ainow.mk" target="_blank" className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
                ${t('pages.about.visit')} <${ExternalLink} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

        <!-- The library is free and stays free; this says plainly where the
             paid work begins, without turning the page into a pitch. -->
        <section className="not-prose border-t border-slate-200 dark:border-slate-800 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white mb-4">${t('pages.about.beyond_title')}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${t('pages.about.beyond_free')}</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${t('pages.about.beyond_work')}</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">${t('pages.about.beyond_close')}</p>
            <div className="flex flex-wrap items-center gap-3">
                <a href="/biz/help.html#/page/services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-coral/10 text-coral font-bold text-sm hover:bg-coral/15 transition-colors">
                    ${t('pages.about.beyond_services')}
                </a>
                <a href="https://ctrlab.net" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:border-coral hover:text-coral transition-colors">
                    ctrlab.net <${ExternalLink} className="w-3.5 h-3.5" />
                </a>
            </div>
        </section>

    <//>
    `;
};

const PoliciesPage = () => {
    const { t } = useLanguage();
    return html`
    <${PageWrapper} title=${t('pages.legal.title')}>
        
        <div className="space-y-12">
            <div className="bg-coral/10 dark:bg-coral/10 p-6 rounded-2xl border border-mist dark:border-coral-dark">
                <h2 className="text-lg font-bold text-stone-light dark:text-coral-light mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-coral/100 inline-block"></span> ${t('pages.legal.open_source_title')}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">
                    ${t('pages.legal.open_source_text')}
                </p>
            </div>

            <section>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">${t('pages.legal.notice_title')}</h2>
                <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.notice_1_title')}</h3>
                        <p>${t('pages.legal.notice_1_text')}</p>
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.notice_2_title')}</h3>
                        <p>${t('pages.legal.notice_2_text')}</p>
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.notice_3_title')}</h3>
                        <ul className="list-none pl-0 space-y-1">
                            <li><strong>Organization:</strong> Здружение за вештачка интелигенција АИ Сега Скопје (NGO AI NOW Skopje)</li>
                            <li><strong>Email:</strong> <a href="mailto:contact@ainow.mk" className="text-coral hover:underline">contact@ainow.mk</a></li>
                            <li><strong>Status:</strong> Non-profit organization registered under the Law on Associations and Foundations (Official Gazette of RNM).</li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            <section>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">${t('pages.legal.privacy_title')}</h2>
                
                <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.no_tracking_title')}</h3>
                        <p>${t('pages.legal.no_tracking_text')}</p>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.local_storage_title')}</h3>
                        <p>${t('pages.legal.local_storage_text')}</p>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.third_party_title')}</h3>
                        <p>${t('pages.legal.third_party_text')}</p>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            <section>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">${t('pages.legal.terms_title')}</h2>
                
                <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.license_software')}</h3>
                        <p>The underlying source code of this web application is licensed under the MIT License.</p>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.license_content')}</h3>
                        <p>The prompt library content and agent configurations are licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.</p>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.user_resp_title')}</h3>
                        <p>${t('pages.legal.user_resp_text')}</p>
                    </div>
                </div>
            </section>
        </div>
    <//>
    `;
};

const DocumentsPage = () => {
    const { t } = useLanguage();
    const standards = t('pages.ethical.community.items');
    const resps = t('pages.ethical.user_resp.items');

    return html`
    <${PageWrapper} title=${t('pages.ethical.title')}>
        <p className="lead text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            ${t('pages.ethical.intro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 not-prose">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-3 mb-3 text-coral dark:text-teal-400">
                    <${Users} className="w-6 h-6" />
                    <h3 className="text-lg font-bold m-0 dark:text-white">${t('pages.ethical.pillars.human.title')}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">${t('pages.ethical.pillars.human.text')}</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-3 mb-3 text-emerald-600 dark:text-emerald-400">
                    <${Lock} className="w-6 h-6" />
                    <h3 className="text-lg font-bold m-0 dark:text-white">${t('pages.ethical.pillars.privacy.title')}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">${t('pages.ethical.pillars.privacy.text')}</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-3 mb-3 text-amber-600 dark:text-amber-400">
                    <${Scale} className="w-6 h-6" />
                    <h3 className="text-lg font-bold m-0 dark:text-white">${t('pages.ethical.pillars.fairness.title')}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">${t('pages.ethical.pillars.fairness.text')}</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-3 mb-3 text-sky-600 dark:text-sky-400">
                    <${Eye} className="w-6 h-6" />
                    <h3 className="text-lg font-bold m-0 dark:text-white">${t('pages.ethical.pillars.transparency.title')}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">${t('pages.ethical.pillars.transparency.text')}</p>
            </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-800 my-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <section>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <${Code} className="w-6 h-6 text-slate-400" />
                    ${t('pages.ethical.philosophy.title')}
                </h2>
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                    <p>${t('pages.ethical.philosophy.text')}</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <${Book} className="w-6 h-6 text-slate-400" />
                    ${t('pages.ethical.literacy.title')}
                </h2>
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                    <p>${t('pages.ethical.literacy.text')}</p>
                </div>
            </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <section>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <${Github} className="w-6 h-6 text-slate-400" />
                    ${t('pages.ethical.community.title')}
                </h2>
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="mb-4">${t('pages.ethical.community.intro')}</p>
                    <ul className="space-y-2 list-none pl-0">
                        ${Array.isArray(standards) && standards.map((s, i) => html`<li key=${i} className="flex gap-2"><${CheckCircle} className="w-4 h-4 text-coral flex-shrink-0" /> <span>${s}</span></li>`)}
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <${Hand} className="w-6 h-6 text-slate-400" />
                    ${t('pages.ethical.accessibility.title')}
                </h2>
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                    <p>${t('pages.ethical.accessibility.text')}</p>
                </div>
            </section>
        </div>

        <hr className="border-slate-200 dark:border-slate-800 my-12" />

        <section>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <${BrainCircuit} className="w-6 h-6 text-slate-400" />
                ${t('pages.ethical.user_resp.title')}
            </h2>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <ul className="space-y-4 list-none pl-0 my-0">
                    ${Array.isArray(resps) && resps.map((r, i) => html`
                        <li key=${i} className="flex gap-3 items-start">
                            <${CheckCircle} className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">${r}</span>
                        </li>
                    `)}
                </ul>
            </div>
        </section>

        <section className="mt-12 mb-16">
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-100 dark:border-amber-800/50 flex flex-col sm:flex-row gap-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/40 rounded-full h-fit w-fit text-amber-600 dark:text-amber-400 flex-shrink-0">
                    <${AlertTriangle} className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mt-0 mb-2">${t('pages.ethical.risk.title')}</h3>
                    <p className="text-sm text-amber-800 dark:text-amber-300 mb-0 leading-relaxed">
                        ${t('pages.ethical.risk.text')} <a href="mailto:contact@ainow.mk" className="underline decoration-amber-500 font-bold hover:decoration-2">contact@ainow.mk</a>.
                    </p>
                </div>
            </div>
        </section>

        <section className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-12">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-coral dark:text-teal-400">
                    <${Hand} className="w-6 h-6" />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">${t('pages.ethical.stand.title')}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                        ${t('pages.ethical.stand.text')}
                    </p>
                </div>
            </div>
        </section>

    <//>
    `;
};

const PartnersPage = () => {
    const { t } = useLanguage();
    return html`
    <${PageWrapper} title=${t('pages.partners.title')}>
        <p className="lead text-lg text-slate-600 dark:text-slate-300 mb-12">
            ${t('pages.partners.intro')}
        </p>

        <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-6">${t('pages.partners.current')}</h2>
        <div className="mb-16 not-prose">
            <a href="https://ctrlab.net" target="_blank" rel="noopener"
               className="block max-w-xl bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-mist dark:border-slate-700 hover:border-coral transition-colors">
                <h3 className="text-xl font-bold mb-1 text-charcoal dark:text-white">CTRLab</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-coral mb-3">ctrlab.net</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">${t('pages.partners.ctrlab_text')}</p>
            </a>
        </div>

        <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-6">${t('pages.partners.areas')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-2 text-charcoal dark:text-teal-400">${t('pages.partners.academic')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">${t('pages.partners.academic_text')}</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-2 text-emerald-900 dark:text-emerald-400">${t('pages.partners.ngo')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">${t('pages.partners.ngo_text')}</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-400">${t('pages.partners.tech')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">${t('pages.partners.tech_text')}</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-2 text-sky-900 dark:text-sky-400">${t('pages.partners.industry')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">${t('pages.partners.industry_text')}</p>
            </div>
        </div>

        <div className="mt-16 p-8 bg-coral/10 dark:bg-teal-900/20 rounded-3xl border border-mist dark:border-teal-800 text-center not-prose">
            <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">${t('pages.partners.become')}</h2>
            <p className="text-stone-light dark:text-teal-200 mb-6">
                ${t('pages.partners.become_text')} <a href="mailto:contact@ainow.mk" className="font-bold underline">contact@ainow.mk</a>
            </p>
        </div>
    <//>
    `;
};

const AccessibilityPage = () => {
    const { t } = useLanguage();
    const commitments = t('pages.accessibility.commitment.items');

    return html`
    <${PageWrapper} title=${t('pages.accessibility.title')}>
        <p className="lead text-lg text-slate-600 dark:text-slate-300 mb-8">
            ${t('pages.accessibility.intro')}
        </p>

        <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-6 dark:text-white">${t('pages.accessibility.keyboard_title')}</h2>
            <div className="bg-coral/10 dark:bg-teal-900/20 p-8 rounded-2xl border border-mist dark:border-teal-800 text-center">
                <p className="text-lg text-charcoal dark:text-teal-200 mb-6 font-medium">
                    We provide extensive keyboard support for power users.
                </p>
                <a href="help.html#shortcuts" className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-lg shadow-coral-glow dark:shadow-none">
                    <${Keyboard} className="w-5 h-5" />
                    View Full Keyboard Shortcuts Guide
                </a>
            </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold tracking-tight mb-4 dark:text-white">${t('pages.accessibility.commitment.title')}</h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
                ${t('pages.accessibility.commitment.text')}
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600 dark:text-slate-300">
                ${Array.isArray(commitments) && commitments.map((c, i) => html`<li key=${i}>${c}</li>`)}
            </ul>
        </section>
    <//>
    `;
};

const ServicesPage = () => {
    const { t } = useLanguage();
    // Delivered by CTRLab, the technology partner behind AINOW products.
    const services = [
        'consultancy', 'training', 'copilot', 'readiness',
        'agents', 'custom', 'seo'
    ];
    return html`
    <${PageWrapper} title=${t('pages.services.title')}>
        <p className="lead text-lg text-slate-600 dark:text-slate-300 mb-4">
            ${t('pages.services.intro')}
        </p>
        <p className="text-sm text-stone dark:text-slate-400 mb-12">
            ${t('pages.services.delivered_by')}
            <a href="https://ctrlab.net" target="_blank" rel="noopener" className="font-bold text-coral hover:underline">CTRLab</a>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            ${services.map(id => html`
                <div key=${id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold mb-1 text-charcoal dark:text-white">${t('pages.services.' + id)}</h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-coral mb-3">${t('pages.services.' + id + '_tag')}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${t('pages.services.' + id + '_text')}</p>
                </div>
            `)}
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 not-prose">
            <h3 className="text-lg font-bold mb-3 text-charcoal dark:text-white">${t('pages.services.governance')}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">${t('pages.services.governance_text')}</p>
            <div className="flex flex-wrap gap-2">
                ${['EU AI Act', 'GDPR', 'ISO/IEC 42001', 'NIS2'].map(f => html`
                    <span key=${f} className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-opal-sidebar dark:bg-slate-900 text-stone dark:text-slate-400 border border-mist dark:border-slate-700">${f}</span>
                `)}
            </div>
        </div>

        <div className="mt-12 p-8 bg-coral/10 dark:bg-teal-900/20 rounded-3xl border border-mist dark:border-teal-800 text-center not-prose">
            <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-4">${t('pages.services.cta')}</h2>
            <p className="text-stone-light dark:text-teal-200 mb-6">
                ${t('pages.services.cta_text')} <a href="mailto:contact@ainow.mk" className="font-bold underline">contact@ainow.mk</a>
            </p>
        </div>
    <//>
    `;
};

const pages = {
    about: AboutPage,
    policies: PoliciesPage,
    documents: DocumentsPage,
    partners: PartnersPage,
    services: ServicesPage,
    accessibility: AccessibilityPage,
};

const StaticPage = ({ page }) => {
    const PageComponent = pages[page] || pages['documentation'];
    return html`<${PageComponent} />`;
};
  __exports.StaticPage = StaticPage;
})();