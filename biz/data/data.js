(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['data/data'] = AINOW['data/data'] || {};
const embeddedPromptsData = {
    agriculture: () => AINOW.loadScript('data/data-agriculture.js'),
    writing: () => AINOW.loadScript('data/data-writing.js'),
    business: () => AINOW.loadScript('data/data-business.js'),
    product: () => AINOW.loadScript('data/data-product.js'),
    marketing: () => AINOW.loadScript('data/data-marketing.js'),
    coding: () => AINOW.loadScript('data/data-coding.js'),
    aiengineering: () => AINOW.loadScript('data/data-aiengineering.js'),
    dataanalysis: () => AINOW.loadScript('data/data-dataanalysis.js'),
    cybersecurity: () => AINOW.loadScript('data/data-cybersecurity.js'),
    sales: () => AINOW.loadScript('data/data-sales.js'),
    hr: () => AINOW.loadScript('data/data-hr.js'),
    career: () => AINOW.loadScript('data/data-career.js'),
    humanities: () => AINOW.loadScript('data/data-humanities.js'),
    productivity: () => AINOW.loadScript('data/data-productivity.js'),
    journalism: () => AINOW.loadScript('data/data-journalism.js'),
    creativevisual: () => AINOW.loadScript('data/data-creative-visual.js'),
    logistics: () => AINOW.loadScript('data/data-logistics.js'),
    hospitality: () => AINOW.loadScript('data/data-hospitality.js'),
    realestate: () => AINOW.loadScript('data/data-realestate.js'),
    science: () => AINOW.loadScript('data/data-science.js'),
    psychology: () => AINOW.loadScript('data/data-psychology.js'),
    publichealth: () => AINOW.loadScript('data/data-publichealth.js'),
    climate: () => AINOW.loadScript('data/data-climate.js'),
    gov: () => AINOW.loadScript('data/data-gov.js'),
    legal: () => AINOW.loadScript('data/data-legal.js'),
    finance: () => AINOW.loadScript('data/data-finance.js'),
    ngo: () => AINOW.loadScript('data/data-ngo.js'),
    medicine: () => AINOW.loadScript('data/data-medicine.js'),
    creative: () => AINOW.loadScript('data/data-creative.js'),
    health: () => AINOW.loadScript('data/data-health.js'),
    sustainability: () => AINOW.loadScript('data/data-sustainability.js'),
    macedonian: () => AINOW.loadScript('data/data-macedonian.js'),
    albanian: () => AINOW.loadScript('data/data-albanian.js'),
};

const generatePrompts = (seeds, categoryPrefix, count) => {
    if (!seeds || seeds.length === 0) return [];
    const generated = [];
    for (let i = 0; i < count; i++) {
        const seedIndex = i % seeds.length;
        const seed = seeds[seedIndex];

        generated.push({
            ...seed,
            id: `${categoryPrefix}-${i + 1}`,
            title: seed.title,
            created: new Date(new Date(seed.created).getTime() + i * 3600000).toISOString(),
        });
    }
    return generated;
};
  __exports.embeddedPromptsData = embeddedPromptsData;
  __exports.generatePrompts = generatePrompts;
})();
