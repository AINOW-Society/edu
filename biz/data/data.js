// AINOW Prompt Library - Core Data Orchestrator
export const embeddedPromptsData = {
    agriculture: () => import('./data-agriculture.js'),
    writing: () => import('./data-writing.js'),
    business: () => import('./data-business.js'),
    product: () => import('./data-product.js'),
    marketing: () => import('./data-marketing.js'),
    coding: () => import('./data-coding.js'),
    aiengineering: () => import('./data-aiengineering.js'),
    dataanalysis: () => import('./data-dataanalysis.js'),
    cybersecurity: () => import('./data-cybersecurity.js'),
    sales: () => import('./data-sales.js'),
    hr: () => import('./data-hr.js'),
    career: () => import('./data-career.js'),
    humanities: () => import('./data-humanities.js'),
    productivity: () => import('./data-productivity.js'),
    journalism: () => import('./data-journalism.js'),
    creativevisual: () => import('./data-creative-visual.js'),
    logistics: () => import('./data-logistics.js'),
    hospitality: () => import('./data-hospitality.js'),
    realestate: () => import('./data-realestate.js'),
    science: () => import('./data-science.js'),
    psychology: () => import('./data-psychology.js'),
    publichealth: () => import('./data-publichealth.js'),
    climate: () => import('./data-climate.js'),
    gov: () => import('./data-gov.js'),
    legal: () => import('./data-legal.js'),
    finance: () => import('./data-finance.js'),
    ngo: () => import('./data-ngo.js'),
    medicine: () => import('./data-medicine.js'),
    education: () => import('./data-education.js'),
    creative: () => import('./data-creative.js'),
    health: () => import('./data-health.js'),
    sustainability: () => import('./data-sustainability.js'),
    macedonian: () => import('./data-macedonian.js'),
    albanian: () => import('./data-albanian.js'),
};

export const generatePrompts = (seeds, categoryPrefix, count) => {
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
