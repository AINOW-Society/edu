(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/StaticPages'] = AINOW['src/StaticPages'] || {};
const { useEffect } = React;

const { Code, CheckCircle, ExternalLink, Users, Lock, Eye, Scale, BrainCircuit, AlertTriangle, Book, Github, Hand } = lucide;
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

const AboutPage = () => {
    const { t, lang } = useLanguage();
    const society=AINOW_ABOUT_CONTENT[lang],sources=AINOW_ABOUT_CONTENT.sources;
    const teamMembers = ['sead', 'bojan', 'biljana', 'aleksandra', 'maja'];
    return html`
    <${PageWrapper} title=${AINOWPlatform.text(lang,'about')}>
        <p className="platform-about-intro">${AINOWPlatform.text(lang,'aboutIntro')}</p>
        <p className="platform-about-scope">${AINOWPlatform.text(lang,'scope')}</p>

        <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">${t('pages.about.story_title')}</h2>
            <p className="lead text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                ${society.societyIntro}
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
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">${t('pages.about.team.title')}</h2>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col gap-6">
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">${t('pages.about.creator_name')}</h3>
                            <span className="px-3 py-1 rounded-full bg-coral/10 dark:bg-coral/20 text-coral dark:text-coral-light text-xs font-bold uppercase tracking-wider">${t('pages.about.creator_role')}</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                ${teamMembers.map((member, i) => html`
                    <div key=${member} className=${'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm transition-all hover:shadow-md' +
                        (i === teamMembers.length - 1 && teamMembers.length % 2 ? ' md:col-span-2' : '')}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">${t(`pages.about.team.${member}.name`)}</h3>
                        <p className="text-coral dark:text-coral-light text-xs font-bold uppercase tracking-wider mb-4">${t(`pages.about.team.${member}.role`)}</p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-0">${t(`pages.about.team.${member}.bio`)}</p>
                    </div>
                `)}
            </div>
        </div>

        <div className="flex justify-center mb-16 not-prose">
            <a href=${sources.about} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
                ${society.aboutSource} <${ExternalLink} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

        <section className="not-prose border-t border-slate-200 dark:border-slate-800 pt-12">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white mb-4">${society.communityTitle}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">${society.communityText}</p>
            <div className="flex flex-wrap items-center gap-3">
                <a href=${sources.join} target="_blank" rel="noopener noreferrer" className="platform-source-link">
                    ${society.joinLabel}
                </a>
                <a href=${AINOWPlatform.href('about.html#/page/programme')} className="platform-source-link">
                    ${AINOWPlatform.text(lang,'programme')}
                </a>
            </div>
        </section>

    <//>
    `;
};

const PoliciesPage = () => {
    const { t, lang } = useLanguage();
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
                        <p>${AINOWPlatform.text(lang,'licenseSource')} <a href=${AINOWPlatform.href('LICENSE')}>GPLv3</a></p>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">${t('pages.legal.license_content')}</h3>
                        <p>${AINOWPlatform.text(lang,'contentLicense')}</p>
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
    const { t, lang } = useLanguage();
    return html`
    <${PageWrapper} title=${t('pages.partners.title')}>
        <section className="platform-education-partner"><h2>${AINOWPlatform.text(lang,'educationPartner')}</h2><a href="https://www.mcgo.org.mk" target="_blank" rel="noopener">MCEC · Macedonian Civic Education Center</a></section>
        <p className="lead text-lg text-slate-600 dark:text-slate-300 mb-12">
            ${t('pages.partners.intro')}
        </p>

        <h2 className="text-2xl font-bold text-charcoal dark:text-white mb-6">${t('pages.partners.current')}</h2>
        <div className="mb-16 not-prose">
            <a href="https://ctrlab.net" target="_blank" rel="noopener"
               className="block max-w-xl bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-mist dark:border-slate-700 hover:border-coral transition-colors">
                <${CtrlabLogo}/>
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

const CtrlabLogo = () => html`<span className="ctrlab-wordmark"><img className="ctrlab-for-light" src=${AINOWPlatform.href('assets/brand/ctrlab-black.svg')} alt="CTRLab" width="172" height="40"/><img className="ctrlab-for-dark" src=${AINOWPlatform.href('assets/brand/ctrlab-white.svg')} alt="CTRLab" width="172" height="40"/></span>`;

const ServicesPage = () => {
    const {lang}=useLanguage(), data=AINOW_SERVICES.content[lang]||AINOW_SERVICES.content.en, urls=AINOW_SERVICES.urls;
    return html`<div className="services-page">
      <header className="services-heading">
        <div><h1>${data.title}</h1><p className="services-lead">${data.intro}</p><div className="services-actions"><a className="ainow-button" href=${urls.ainowContact} target="_blank" rel="noopener noreferrer">${data.trainingCta}</a><a className="ainow-button is-secondary" href=${urls.programme} target="_blank" rel="noopener noreferrer">${data.societyCta}</a></div></div>
      </header>
      <section className="services-training" aria-labelledby="services-training-title">
        <header><h2 id="services-training-title">${data.trainingTitle}</h2><p>${data.trainingIntro}</p></header>
        <div className="services-training-layout"><ol className="services-training-list">${data.training.map(([title,text],index)=>html`<li key=${title}><span className="services-number" aria-hidden="true">${String(index+1).padStart(2,'0')}</span><div><h3>${title}</h3><p>${text}</p></div></li>`)}</ol>
          <aside className="services-delivery"><h3>${data.deliveryTitle}</h3><p>${data.delivery}</p></aside>
        </div>
      </section>
      <section className="services-society" aria-labelledby="services-society-title"><header><h2 id="services-society-title">${data.ainowTitle}</h2><p>${data.ainowIntro}</p></header><div className="services-society-list">${data.ainow.map(([title,text])=>html`<div key=${title}><h3>${title}</h3><p>${text}</p></div>`)}</div><div className="services-actions"><a className="ainow-button is-secondary" href=${urls.ainowContact} target="_blank" rel="noopener noreferrer">${data.ainowCta}</a><a className="ainow-button is-text" href=${urls.community} target="_blank" rel="noopener noreferrer">${data.join}<${ExternalLink} aria-hidden="true"/></a></div></section>
      <section className="services-technical" aria-labelledby="services-technical-title"><div><h2 id="services-technical-title">${data.servicesTitle}</h2><p>${data.servicesIntro}</p><ul>${data.services.map(([id,title])=>html`<li key=${id}>${title}</li>`)}</ul></div><a className="services-provider" href="https://www.ctrlab.net/" target="_blank" rel="noopener noreferrer"><span>${data.provider}</span><${CtrlabLogo}/></a></section>
      <section className="services-next"><h2>${data.nextTitle}</h2><p>${data.nextText}</p><div className="services-actions"><a className="ainow-button is-secondary" href=${urls.ainowContact} target="_blank" rel="noopener noreferrer">${data.ainowCta}</a></div></section>
      <section className="services-references"><div><h2>${data.sources}</h2><p>${data.reviewed}</p></div><nav aria-label=${data.sources}><a className="platform-source-link" href="https://www.ctrlab.net/services/" target="_blank" rel="noopener noreferrer">${data.sourceCtrlab}</a><a className="platform-source-link" href=${urls.programme} target="_blank" rel="noopener noreferrer">${data.sourceAinow}</a><a className="platform-source-link" href=${urls.community} target="_blank" rel="noopener noreferrer">${data.sourceCommunity}</a></nav></section>
    </div>`;
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
