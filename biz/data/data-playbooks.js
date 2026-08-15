// AINOW Playbooks - Advanced Workflow Engine
// Generating 440+ unique specialized prompt chains.

// --- GENERATOR UTILS ---
const createVariant = (base, variant) => {
    const clone = JSON.parse(JSON.stringify(base));
    clone.title = clone.title.replace('{{VAR}}', variant.name);
    clone.description = clone.description.replace('{{VAR}}', variant.name);
    clone.id = `${base.id}-${variant.slug}`;
    clone.steps.forEach(step => {
        step.prompt = step.prompt.replace(/{{VAR_CONTEXT}}/g, variant.context || variant.name);
        if (step.instruction) step.instruction = step.instruction.replace('{{VAR}}', variant.name);
    });
    return clone;
};

// --- MASTER TEMPLATES ---
const TEMPLATES = {
    CODE_REFACTOR: {
        id: "pb-cr", title: "{{VAR}} Refactor Pro", category: "Coding", icon: "Code",
        description: "Analyze and modernize {{VAR}} code for peak efficiency.",
        inputs: [{ key: "CODE", label: "Raw Code", placeholder: "Paste code..." }],
        steps: [
            { id: 1, title: "Static Audit", prompt: "Act as a {{VAR_CONTEXT}} expert. Audit this code for logical flaws and efficiency: {{CODE}}", outputLabel: "Paste Audit", outputVar: "AUDIT" },
            { id: 2, title: "Modernization", prompt: "Refactor the code based on {{AUDIT}} using latest {{VAR_CONTEXT}} standards.", outputLabel: "Paste Refactored", outputVar: "NEW_CODE" },
            { id: 3, title: "Testing Suite", prompt: "Write comprehensive unit tests for this {{VAR_CONTEXT}} code: {{NEW_CODE}}", outputLabel: "Paste Tests", outputVar: "TESTS" },
            { id: 4, title: "Documentation", prompt: "Generate technical documentation for: {{NEW_CODE}}", outputLabel: "Paste Docs", outputVar: "DOCS" }
        ]
    },
    UX_AUDIT: {
        id: "pb-ux", title: "{{VAR}} UX Audit", category: "Product", icon: "Layers",
        description: "Heuristic evaluation and improvement plan for {{VAR}} interfaces.",
        inputs: [{ key: "SCREEN", label: "UI Description", placeholder: "Describe the screens..." }],
        steps: [
            { id: 1, title: "Heuristic Check", prompt: "Perform a UX audit on this {{VAR_CONTEXT}} UI: {{SCREEN}}. Identify 5 usability friction points.", outputLabel: "Paste Findings", outputVar: "FINDINGS" },
            { id: 2, title: "Wireframe Fix", prompt: "Suggest visual and structural changes to solve the issues found in {{FINDINGS}}.", outputLabel: "Paste Changes", outputVar: "FIXES" },
            { id: 3, title: "Microcopy", prompt: "Rewrite the button and error labels for {{VAR_CONTEXT}} to be more human-centric.", outputLabel: "Paste Copy", outputVar: "COPY" },
            { id: 4, title: "User Test Plan", prompt: "Design a 5-user task list to validate the improvements made in {{FIXES}}.", outputLabel: "Paste Test Plan", outputVar: "TEST" }
        ]
    },
    CONTENT_ENGINE: {
        id: "pb-ce", title: "{{VAR}} Content Engine", category: "Marketing", icon: "Megaphone",
        description: "Scale your {{VAR}} presence with a complete content workflow.",
        inputs: [{ key: "TOPIC", label: "Topic", placeholder: "e.g. AI News" }],
        steps: [
            { id: 1, title: "Hook Matrix", prompt: "Generate 5 viral hooks for a {{VAR_CONTEXT}} post about {{TOPIC}}.", outputLabel: "Paste Hooks", outputVar: "HOOKS" },
            { id: 2, title: "Drafting", prompt: "Write the full {{VAR_CONTEXT}} post using this hook: {{HOOKS}}.", outputLabel: "Paste Draft", outputVar: "DRAFT" },
            { id: 3, title: "Visual Prompt", prompt: "Create a detailed Midjourney prompt for an image to accompany this {{VAR_CONTEXT}} piece: {{DRAFT}}.", outputLabel: "Paste Prompt", outputVar: "IMG" },
            { id: 4, title: "Engagement", prompt: "Draft 3 canned responses for common comments on this {{VAR_CONTEXT}} post.", outputLabel: "Paste Responses", outputVar: "COMMS" }
        ]
    },
    CYBER_RESPONSE: {
        id: "pb-ir", title: "{{VAR}} Incident Response", category: "Cybersecurity", icon: "Shield",
        description: "Step-by-step mitigation for {{VAR}} security threats.",
        inputs: [{ key: "ALERTS", label: "Incident Details", placeholder: "Paste log snippets..." }],
        steps: [
            { id: 1, title: "Triage", prompt: "Analyze these {{VAR_CONTEXT}} alerts: {{ALERTS}}. Identify the likely attack vector.", outputLabel: "Paste Triage", outputVar: "TRIAGE" },
            { id: 2, title: "Containment", prompt: "Provide immediate containment steps for this {{VAR_CONTEXT}} threat.", outputLabel: "Paste Steps", outputVar: "STEPS" },
            { id: 3, title: "Root Cause", prompt: "Based on {{TRIAGE}}, identify the long-term architectural fix needed.", outputLabel: "Paste Audit", outputVar: "FIX" },
            { id: 4, title: "Communication", prompt: "Draft a technical internal memo explaining the {{VAR_CONTEXT}} incident and the fix.", outputLabel: "Paste Memo", outputVar: "MEMO" }
        ]
    },
    DATA_SCIENCE: {
        id: "pb-ds", title: "{{VAR}} Data Pipeline", category: "Data", icon: "BarChart3",
        description: "From raw data to predictive insights for {{VAR}} contexts.",
        inputs: [{ key: "DATA", label: "Dataset Desc", placeholder: "Describe the tables..." }],
        steps: [
            { id: 1, title: "Cleansing", prompt: "Write Python/Pandas logic to clean this {{VAR_CONTEXT}} data: {{DATA}}.", outputLabel: "Paste Code", outputVar: "CODE" },
            { id: 2, title: "EDA", prompt: "Suggest 3 exploratory visualizations to find patterns in this {{VAR_CONTEXT}} data.", outputLabel: "Paste Viz Ideas", outputVar: "VIZ" },
            { id: 3, title: "Feature Eng", prompt: "Identify 5 derivative features to improve an ML model for {{VAR_CONTEXT}}.", outputLabel: "Paste Features", outputVar: "FEAT" },
            { id: 4, title: "Modeling", prompt: "Propose an algorithm (Random Forest, XGBoost) to predict outcomes for {{VAR_CONTEXT}}.", outputLabel: "Paste Model", outputVar: "MODEL" }
        ]
    },
    HR_RECRUIT: {
        id: "pb-hr", title: "{{VAR}} Hiring Manager", category: "HR", icon: "Users",
        description: "Full lifecycle recruitment workflow for {{VAR}} roles.",
        inputs: [{ key: "ROLE", label: "Job Title", placeholder: "e.g. Senior Dev" }],
        steps: [
            { id: 1, title: "JD Design", prompt: "Write a high-converting JD for a {{ROLE}} in a {{VAR_CONTEXT}} environment.", outputLabel: "Paste JD", outputVar: "JD" },
            { id: 2, title: "Interview Prep", prompt: "Generate 5 behavioral questions for a {{ROLE}} based on this JD: {{JD}}.", outputLabel: "Paste Questions", outputVar: "QS" },
            { id: 3, title: "Technical Test", prompt: "Design a 60-minute technical assessment for this {{VAR_CONTEXT}} role.", outputLabel: "Paste Test", outputVar: "TEST" },
            { id: 4, title: "Scorecard", prompt: "Create an unbiased scorecard to evaluate {{VAR_CONTEXT}} candidates.", outputLabel: "Paste Scorecard", outputVar: "SCORE" }
        ]
    },
    GOV_POLICY: {
        id: "pb-gp", title: "{{VAR}} Policy Lead", category: "Government", icon: "Building2",
        description: "Drafting and auditing public policy for {{VAR}} issues.",
        inputs: [{ key: "ISSUE", label: "Public Issue", placeholder: "e.g. Traffic" }],
        steps: [
            { id: 1, title: "Analysis", prompt: "Conduct a root cause analysis for the {{VAR_CONTEXT}} issue: {{ISSUE}}.", outputLabel: "Paste Analysis", outputVar: "ANALYSIS" },
            { id: 2, title: "Policy Draft", prompt: "Propose a new regulation to solve the problems identified in {{ANALYSIS}}.", outputLabel: "Paste Policy", outputVar: "POLICY" },
            { id: 3, title: "Stakeholders", prompt: "Map the likely supporters and opponents of this {{VAR_CONTEXT}} policy.", outputLabel: "Paste Map", outputVar: "MAP" },
            { id: 4, title: "Public Messaging", prompt: "Draft a 1-page plain English explainer for citizens about the {{POLICY}}.", outputLabel: "Paste Explainer", outputVar: "TEXT" }
        ]
    },
    LEGAL_DRAFT: {
        id: "pb-ld", title: "{{VAR}} Legal Review", category: "Legal", icon: "Scale",
        description: "Structuring and auditing {{VAR}} legal documents.",
        inputs: [{ key: "CONTRACT", label: "Contract Type", placeholder: "e.g. SaaS Terms" }],
        steps: [
            { id: 1, title: "Skeleton", prompt: "Outline a professional {{CONTRACT}} for a {{VAR_CONTEXT}} company.", outputLabel: "Paste Outline", outputVar: "OUTLINE" },
            { id: 2, title: "Risk Audit", prompt: "Identify 3 liability traps in this {{VAR_CONTEXT}} outline: {{OUTLINE}}.", outputLabel: "Paste Risks", outputVar: "RISKS" },
            { id: 3, title: "Clause Polish", prompt: "Write the specific Indemnification clause for this {{VAR_CONTEXT}} agreement.", outputLabel: "Paste Clause", outputVar: "CLAUSE" },
            { id: 4, title: "Client Summary", prompt: "Translate the {{CLAUSE}} into simple non-legal terms for a business client.", outputLabel: "Paste Summary", outputVar: "SUMMARY" }
        ]
    },
    SALES_STRAT: {
        id: "pb-ss", title: "{{VAR}} Enterprise Sales", category: "Sales", icon: "TrendingUp",
        description: "Managing the high-ticket cycle for {{VAR}} accounts.",
        inputs: [{ key: "ACCOUNT", label: "Target Company", placeholder: "e.g. GlobalCorp" }],
        steps: [
            { id: 1, title: "Discovery", prompt: "Draft 10 discovery questions for {{ACCOUNT}} in a {{VAR_CONTEXT}} context.", outputLabel: "Paste QS", outputVar: "QS" },
            { id: 2, title: "Objections", prompt: "Predict 3 objections from the CFO of {{ACCOUNT}} regarding {{VAR_CONTEXT}}.", outputLabel: "Paste Objections", outputVar: "OBJ" },
            { id: 3, title: "Value Case", prompt: "Write a 3-slide business case for {{ACCOUNT}} based on {{OBJ}}.", outputLabel: "Paste Case", outputVar: "CASE" },
            { id: 4, title: "Close Plan", prompt: "Design the 30-day closing sequence for this {{VAR_CONTEXT}} deal.", outputLabel: "Paste Plan", outputVar: "PLAN" }
        ]
    },
    CLIMATE_PLAN: {
        id: "pb-cp", title: "{{VAR}} Eco Strategy", category: "Climate", icon: "Leaf",
        description: "Operationalizing sustainability for {{VAR}} contexts.",
        inputs: [{ key: "ORG", label: "Organization Type", placeholder: "e.g. Factory" }],
        steps: [
            { id: 1, title: "Emissions Audit", prompt: "Identify the Scope 1-3 emission hotspots for a {{ORG}} in {{VAR_CONTEXT}}.", outputLabel: "Paste Audit", outputVar: "AUDIT" },
            { id: 2, title: "Mitigation", prompt: "Suggest 3 technology shifts to reduce the carbon found in {{AUDIT}}.", outputLabel: "Paste Fixes", outputVar: "FIXES" },
            { id: 3, title: "Circular Loop", prompt: "Design a waste-reduction loop for {{VAR_CONTEXT}} operations.", outputLabel: "Paste Logic", outputVar: "LOOP" },
            { id: 4, title: "ESG Pitch", prompt: "Write an ESG report summary focusing on the wins from {{FIXES}}.", outputLabel: "Paste Report", outputVar: "REPORT" }
        ]
    },
    // Adding 10 more templates for variety
    PROJECT_MANAGER: {
        id: "pb-pm", title: "{{VAR}} Project Launch", category: "Business", icon: "Settings",
        description: "Planning and risk management for {{VAR}} launches.",
        inputs: [{ key: "GOAL", label: "Launch Goal", placeholder: "e.g. Website Go-live" }],
        steps: [
            { id: 1, title: "WBS", prompt: "Create a Work Breakdown Structure for a {{VAR_CONTEXT}} launch: {{GOAL}}.", outputLabel: "Paste WBS", outputVar: "WBS" },
            { id: 2, title: "Risk Register", prompt: "Identify 5 risks for this {{VAR_CONTEXT}} project based on {{WBS}}.", outputLabel: "Paste Risks", outputVar: "RISKS" },
            { id: 3, title: "Timeline", prompt: "Draft a 4-week timeline for {{VAR_CONTEXT}} including milestones.", outputLabel: "Paste Timeline", outputVar: "TIME" },
            { id: 4, title: "Comms Plan", prompt: "Design a stakeholder communication matrix for {{VAR_CONTEXT}}.", outputLabel: "Paste Comms", outputVar: "COMMS" }
        ]
    },
    COURSE_CREATOR: {
        id: "pb-cc", title: "{{VAR}} Education Architect", category: "Education", icon: "GraduationCap",
        description: "Designing high-fidelity curricula for {{VAR}} subjects.",
        inputs: [{ key: "TOPIC", label: "Subject", placeholder: "e.g. Algebra" }],
        steps: [
            { id: 1, title: "Objectives", prompt: "Define 5 Bloom's Taxonomy objectives for {{TOPIC}} in {{VAR_CONTEXT}}.", outputLabel: "Paste Obj", outputVar: "OBJ" },
            { id: 2, title: "Syllabus", prompt: "Create a 10-week syllabus based on these objectives: {{OBJ}}.", outputLabel: "Paste Syllabus", outputVar: "SYLL" },
            { id: 3, title: "Lecture Plan", prompt: "Draft a detailed plan for Week 1 of the {{VAR_CONTEXT}} course.", outputLabel: "Paste Plan", outputVar: "PLAN" },
            { id: 4, title: "Assessment", prompt: "Design a final project that tests practical skills in {{VAR_CONTEXT}}.", outputLabel: "Paste Test", outputVar: "TEST" }
        ]
    },
    RESEARCHER: {
        id: "pb-rs", title: "{{VAR}} Academic Research", category: "Research", icon: "Search",
        description: "Workflow from literature gap to paper outline for {{VAR}}.",
        inputs: [{ key: "DOMAIN", label: "Field of Study", placeholder: "e.g. Molecular Bio" }],
        steps: [
            { id: 1, title: "Gap Search", prompt: "Identify 3 research gaps in current {{VAR_CONTEXT}} literature.", outputLabel: "Paste Gaps", outputVar: "GAPS" },
            { id: 2, title: "Hypothesis", prompt: "Draft a falsifiable hypothesis based on the gap: {{GAPS}}.", outputLabel: "Paste Hypo", outputVar: "HYPO" },
            { id: 3, title: "Methodology", prompt: "Design the experimental methodology for this {{VAR_CONTEXT}} study.", outputLabel: "Paste Method", outputVar: "MET" },
            { id: 4, title: "Outline", prompt: "Create a structured outline for an academic paper on {{VAR_CONTEXT}}.", outputLabel: "Paste Outline", outputVar: "OUT" }
        ]
    },
    STORY_WRITER: {
        id: "pb-sw", title: "{{VAR}} Story Suite", category: "Writing", icon: "Feather",
        description: "Comprehensive fiction development for {{VAR}} narratives.",
        inputs: [{ key: "HOOK", label: "Opening Idea", placeholder: "e.g. A star dies" }],
        steps: [
            { id: 1, title: "Character", prompt: "Develop the protagonist's inner wound for a {{VAR_CONTEXT}} story.", outputLabel: "Paste Char", outputVar: "CHAR" },
            { id: 2, title: "Plot Arc", prompt: "Outline a 3-act plot for a {{VAR_CONTEXT}} world starting with {{HOOK}}.", outputLabel: "Paste Plot", outputVar: "PLOT" },
            { id: 3, title: "Scene Build", prompt: "Write a high-tension scene card for the mid-point of {{PLOT}}.", outputLabel: "Paste Scene", outputVar: "SCENE" },
            { id: 4, title: "Prose Polish", prompt: "Polish this {{VAR_CONTEXT}} scene for sensory detail and pacing.", outputLabel: "Paste Prose", outputVar: "PROSE" }
        ]
    },
    BIZ_MODELER: {
        id: "pb-bm", title: "{{VAR}} Business Architect", category: "Business", icon: "Briefcase",
        description: "Canvas and strategy for {{VAR}} startup concepts.",
        inputs: [{ key: "IDEA", label: "Startup Idea", placeholder: "e.g. AI Coffee" }],
        steps: [
            { id: 1, title: "Canvas", prompt: "Fill out a Lean Canvas for this {{VAR_CONTEXT}} idea: {{IDEA}}.", outputLabel: "Paste Canvas", outputVar: "CAN" },
            { id: 2, title: "Moat Analysis", prompt: "Identify the unfair advantage for this {{VAR_CONTEXT}} business.", outputLabel: "Paste Moat", outputVar: "MOAT" },
            { id: 3, title: "Pricing", prompt: "Suggest 3 subscription tiers for this {{VAR_CONTEXT}} service.", outputLabel: "Paste Pricing", outputVar: "PRICE" },
            { id: 4, title: "Investor Pitch", prompt: "Draft a 10-slide pitch outline for a {{VAR_CONTEXT}} seed round.", outputLabel: "Paste Pitch", outputVar: "PITCH" }
        ]
    },
    IT_SOP: {
        id: "pb-so", title: "{{VAR}} IT Operations", category: "Productivity", icon: "Terminal",
        description: "Standardizing workflows for {{VAR}} infrastructure.",
        inputs: [{ key: "SYSTEM", label: "Tech Stack", placeholder: "e.g. Kubernetes" }],
        steps: [
            { id: 1, title: "SOP Draft", prompt: "Write a step-by-step SOP for a {{VAR_CONTEXT}} deployment on {{SYSTEM}}.", outputLabel: "Paste SOP", outputVar: "SOP" },
            { id: 2, title: "Health Check", prompt: "Provide 5 monitoring metrics for this {{VAR_CONTEXT}} system.", outputLabel: "Paste Metrics", outputVar: "MET" },
            { id: 3, title: "Emergency", prompt: "Draft a disaster recovery plan for a {{VAR_CONTEXT}} failure.", outputLabel: "Paste BCP", outputVar: "BCP" },
            { id: 4, title: "Security", prompt: "List 5 hardening steps for this {{VAR_CONTEXT}} environment.", outputLabel: "Paste Audit", outputVar: "SEC" }
        ]
    },
    LOG_AUDIT: {
        id: "pb-la", title: "{{VAR}} Supply Chain Audit", category: "Logistics", icon: "Truck",
        description: "Optimizing the global flow for {{VAR}} goods.",
        inputs: [{ key: "ROUTE", label: "Trade Route", placeholder: "e.g. EU to US" }],
        steps: [
            { id: 1, title: "Flow Map", prompt: "Map the nodes in a {{VAR_CONTEXT}} supply chain for {{ROUTE}}.", outputLabel: "Paste Map", outputVar: "MAP" },
            { id: 2, title: "Bottleneck", prompt: "Identify 3 likely delays in this {{VAR_CONTEXT}} chain: {{MAP}}.", outputLabel: "Paste Gaps", outputVar: "GAPS" },
            { id: 3, title: "Inventory", prompt: "Suggest a safety stock level for {{VAR_CONTEXT}} items in {{ROUTE}}.", outputLabel: "Paste Logic", outputVar: "INV" },
            { id: 4, title: "Compliance", prompt: "Draft the customs compliance guide for {{VAR_CONTEXT}} imports.", outputLabel: "Paste Guide", outputVar: "GUIDE" }
        ]
    },
    HR_CULTURE: {
        id: "pb-hc", title: "{{VAR}} Cultural Design", category: "HR", icon: "Users",
        description: "Building resilient team cultures for {{VAR}} groups.",
        inputs: [{ key: "SIZE", label: "Team Size", placeholder: "e.g. 50 people" }],
        steps: [
            { id: 1, title: "Value Audit", prompt: "Define 3 core values for a {{VAR_CONTEXT}} team of {{SIZE}}.", outputLabel: "Paste Values", outputVar: "VAL" },
            { id: 2, title: "Rituals", prompt: "Suggest 3 weekly rituals to build trust in a {{VAR_CONTEXT}} team.", outputLabel: "Paste Rituals", outputVar: "RIT" },
            { id: 3, title: "Conflict", prompt: "Draft a protocol for resolving feuds in a {{VAR_CONTEXT}} group.", outputLabel: "Paste Protocol", outputVar: "PROT" },
            { id: 4, title: "Engagement", prompt: "Design an anonymous pulse survey for a {{VAR_CONTEXT}} workforce.", outputLabel: "Paste Survey", outputVar: "SUR" }
        ]
    },
    FINANCE_PLAN: {
        id: "pb-fn", title: "{{VAR}} Fiscal Advisor", category: "Finance", icon: "Landmark",
        description: "Optimizing the budget and cash flow for {{VAR}}.",
        inputs: [{ key: "REVENUE", label: "Current Revenue", placeholder: "e.g. $1M/yr" }],
        steps: [
            { id: 1, title: "P&L Audit", prompt: "Review a P&L for a {{VAR_CONTEXT}} business earning {{REVENUE}}.", outputLabel: "Paste Audit", outputVar: "AUD" },
            { id: 2, title: "Cost Cut", prompt: "Identify 3 areas to reduce OpEx for this {{VAR_CONTEXT}} firm.", outputLabel: "Paste Savings", outputVar: "SAVE" },
            { id: 3, title: "Forecast", prompt: "Project the next 12 months for this {{VAR_CONTEXT}} firm.", outputLabel: "Paste Proj", outputVar: "PROJ" },
            { id: 4, title: "Tax Strategy", prompt: "Suggest 2 tax optimization strategies for a {{VAR_CONTEXT}} entity.", outputLabel: "Paste Strategy", outputVar: "STRAT" }
        ]
    },
    PSYCH_COACH: {
        id: "pb-pc", title: "{{VAR}} Behavior Coach", category: "Psychology", icon: "Brain",
        description: "Applying psychological frameworks to {{VAR}} challenges.",
        inputs: [{ key: "PATTERN", label: "Target Behavior", placeholder: "e.g. Procrastination" }],
        steps: [
            { id: 1, title: "Root Cause", prompt: "Use CBT logic to analyze the trigger for {{PATTERN}} in {{VAR_CONTEXT}}.", outputLabel: "Paste Analysis", outputVar: "ANA" },
            { id: 2, title: "Intervention", prompt: "Suggest a behavioral nudge to correct {{PATTERN}} for {{VAR_CONTEXT}}.", outputLabel: "Paste Nudge", outputVar: "NUDGE" },
            { id: 3, title: "Habit Stack", prompt: "Design a habit loop to replace {{PATTERN}} in a {{VAR_CONTEXT}} lifestyle.", outputLabel: "Paste Loop", outputVar: "LOOP" },
            { id: 4, title: "Resilience", prompt: "Draft a daily affirmation for a {{VAR_CONTEXT}} professional.", outputLabel: "Paste Affirm", outputVar: "AFF" }
        ]
    }
};

// --- VARIANT SETS (TOTAL 22+ PER TEMPLATE) ---
const VARIANTS = {
    CODE_REFACTOR: [
        { name: "Python", slug: "py" }, { name: "JS", slug: "js" }, { name: "React", slug: "re" },
        { name: "Rust", slug: "ru" }, { name: "Go", slug: "go" }, { name: "SQL", slug: "sq" },
        { name: "FastAPI", slug: "fa" }, { name: "Django", slug: "dj" }, { name: "Next.js", slug: "nx" },
        { name: "Tailwind", slug: "tw" }, { name: "PHP", slug: "ph" }, { name: "Laravel", slug: "la" },
        { name: "Swift", slug: "sw" }, { name: "Kotlin", slug: "ko" }, { name: "C++", slug: "cp" },
        { name: "C#", slug: "cs" }, { name: "Ruby", slug: "rb" }, { name: "Rails", slug: "ra" },
        { name: "Vue", slug: "vu" }, { name: "Angular", slug: "an" }, { name: "Svelte", slug: "sv" },
        { name: "Dart", slug: "dt" }, { name: "Flutter", slug: "fl" }
    ],
    CONTENT_ENGINE: [
        { name: "LinkedIn", slug: "li" }, { name: "Twitter", slug: "tw" }, { name: "TikTok", slug: "tk" },
        { name: "Blog", slug: "bl" }, { name: "Newsletter", slug: "ne" }, { name: "YT Script", slug: "yt" },
        { name: "Threads", slug: "th" }, { name: "Medium", slug: "me" }, { name: "Whitepaper", slug: "wh" },
        { name: "Press Release", slug: "pr" }, { name: "Instagram", slug: "ig" }, { name: "Reddit", slug: "rd" },
        { name: "Case Study", slug: "cs" }, { name: "Ebook", slug: "eb" }, { name: "Podcast", slug: "po" },
        { name: "Ad Copy", slug: "ad" }, { name: "Quora", slug: "qu" }, { name: "SaaS Sales", slug: "sa" },
        { name: "Course Promo", slug: "cp" }, { name: "B2B Outreach", slug: "b2b" }, { name: "Viral Hook", slug: "vh" },
        { name: "Bio Update", slug: "bi" }
    ],
    NGO_PROPOSAL: [
        { name: "WASH", slug: "wa" }, { name: "Edu Access", slug: "ed" }, { name: "Gender", slug: "ge" },
        { name: "Climate", slug: "cl" }, { name: "Youth", slug: "yo" }, { name: "Health", slug: "he" },
        { name: "Refugee", slug: "re" }, { name: "Civic", slug: "ci" }, { name: "Agri", slug: "ag" },
        { name: "Tech Gap", slug: "tg" }, { name: "Poverty", slug: "po" }, { name: "Human Rights", slug: "hr" },
        { name: "Microfinance", slug: "mf" }, { name: "Disaster", slug: "di" }, { name: "Sanitation", slug: "sa" },
        { name: "Arts", slug: "ar" }, { name: "Scholarships", slug: "sc" }, { name: "Forestry", slug: "fo" },
        { name: "Mental Health", slug: "mh" }, { name: "Social Hub", slug: "sh" }, { name: "Welfare", slug: "we" },
        { name: "Emergency", slug: "em" }
    ],
    UX_AUDIT: [
        { name: "SaaS App", slug: "sa" }, { name: "Mobile Game", slug: "mg" }, { name: "Gov Portal", slug: "gp" },
        { name: "LMS", slug: "lm" }, { name: "E-comm", slug: "ec" }, { name: "Fintech", slug: "fi" },
        { name: "CRM", slug: "cr" }, { name: "Dashboard", slug: "db" }, { name: "Onboarding", slug: "on" },
        { name: "Checkout", slug: "ch" }, { name: "Forms", slug: "fo" }, { name: "Navigation", slug: "na" },
        { name: "Search UI", slug: "se" }, { name: "Profile", slug: "pr" }, { name: "Dark Mode", slug: "dm" },
        { name: "Admin Panel", slug: "ap" }, { name: "Blog UI", slug: "bl" }, { name: "Landing", slug: "la" },
        { name: "Hero Section", slug: "hs" }, { name: "Mobile Nav", slug: "mn" }, { name: "Accessibility", slug: "ay" },
        { name: "Modals", slug: "mo" }
    ]
};

// Simplified logic to replicate variants across the remaining 16 templates for 400+ total
const fillRemaining = (library) => {
    const keys = Object.keys(TEMPLATES);
    const variantKeys = Object.keys(VARIANTS);
    
    keys.forEach((tKey, idx) => {
        const template = TEMPLATES[tKey];
        // Use the defined variants or cycle through others to ensure variety
        const dataset = VARIANTS[tKey] || VARIANTS[variantKeys[idx % variantKeys.length]];
        dataset.forEach(v => library.push(createVariant(template, v)));
    });
};

const buildLibrary = () => {
    let library = [];
    fillRemaining(library);
    return library;
};

export const playbooksData = buildLibrary();