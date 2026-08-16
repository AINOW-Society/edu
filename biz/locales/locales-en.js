(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['locales/locales-en'] = AINOW['locales/locales-en'] || {};
const data = {
    platform: {
        education: 'AINOW Education — free AI literacy for teachers',
        business: 'AINOW Business',
        back_to_education: 'Go to Education',
        home: 'AINOW home'
    },
    language_note: {
        title: 'Why are the agents written in English?',
        body: 'Agent instructions are kept in English because today\'s AI models were trained mostly on English text, and they follow English instructions more accurately and more consistently than translated ones. The difference is largest for long, structured instructions of exactly this kind.',
        tip: 'You can still work in your own language: paste the agent as it is, then write to it in Macedonian, Albanian, or any other language. It will answer you in the language you use.'
    },
    nav: {
        prompts: 'Prompts',
        agents: 'Agents',
        playbooks: 'Playbooks',
        situations: 'Situations',
        builder: 'Builder',
        about: 'About',
        resources: 'Resources',
        settings: 'Settings'
    },
    common: {
        search_prompts: 'Search prompts... (/)',
        surprise_me: 'Surprise Me',
        sort: 'Sort',
        sort_newest: 'Order: Newest',
        sort_az: 'Order: Title (A-Z)',
        view_grid: 'Grid View',
        view_list: 'List View',
        copied: 'Copied!',
        copied_success: 'Copied to clipboard!',
        added_success: 'Added to Scratchpad!',
        customize: 'Customize',
        try_ai: 'Try with AI',
        favorites: 'Add to Favorites',
        copy: 'Copy',
        share: 'Share',
        zen_mode: 'Zen Mode',
        settings: 'Settings & Data',
        no_results: "We couldn't find any items matching your search.",
        showing: 'Showing',
        of: 'of',
        cancel: 'Cancel',
        copy_prompt: 'Copy Prompt',
        table_favorite: 'Favorite Status',
        table_title: 'Title',
        table_name: 'Name',
        table_category: 'Category',
        table_tags: 'Tags',
        table_date: 'Date',
        table_actions: 'Actions',
        categories_label: 'Categories',
        filtered_by: 'Filtered by'
    },
    settings: {
        title: "Settings",
        general: "General",
        data: "Data Management",
        export_title: "Export Backup",
        export_text: "Download all your favorites and custom agents as a JSON file.",
        export_btn: "Download Backup",
        import_title: "Import Backup",
        import_text: "Restore your data from a backup file. This will merge with existing data.",
        import_btn: "Select File",
        reset_title: "Factory Reset",
        reset_text: "Delete all local data and reset the app to default state.",
        reset_btn: "Reset Everything",
        reset_confirm: "Are you sure? This cannot be undone.",
        imported_success: "Data restored successfully! Reloading..."
    },
    agent_categories: {
        all: 'All Agents',
        favorites: 'Favorites',
        gov: 'Government',
        sales: 'Sales',
        research: 'Research & Academic',
        writing: 'Writing & Content',
        dev: 'Programming',
        product: 'Product & UX',
        ai: 'Artificial Intelligence',
        data: 'Data & Analysis',
        hr: 'HR & People Ops',
        log: 'Logistics & Supply',
        cyber: 'Cybersecurity',
        realestate: 'Real Estate',
        science: 'Science & STEM',
        psych: 'Psychology',
        eco: 'Climate & Eco',
        files: 'File & Document',
        utility: 'Media & Utility',
        ngo: 'NGO & Non-Profit',
        business: 'Business',
        marketing: 'Marketing',
        edu: 'Education',
        pmo: 'PMO & Operations',
        health: 'Health & Wellness',
        creative: 'Creative'
    },
    agents_ui: {
        title: "Agents Hub",
        subtitle: "intelligent assets",
        search_placeholder: "Search AI agents... (/)",
        customizable: "Customizable",
        copy: "Copy configuration",
        copied: "Copied",
        interactive_config: "Interactive configuration",
        static_config: "Static configuration",
        customize_title: "Customize Agent",
        tip: "Tip: Adding specific context helps the agent adopt your unique constraints immediately without needing follow-up prompts.",
        preview_title: "Preview system instructions",
        cancel: "Cancel",
        no_results: "No agents found matching your criteria.",
        copy_config: 'Copy configuration'
    },
    help: {
        badge: "The Field Guide",
        title: "Understanding Artificial Intelligence",
        subtitle: "AI is a powerful tool, but it requires human direction. This guide explains how the technology works, why ethics matter, and how to use this platform to augment your skills, not replace them.",
        tech: {
            title: "Core Technology: The Prediction Engine",
            desc: "Artificial Intelligence isn't magic. It's mathematics and probability on a massive scale.",
            engine_title: "Large Language Models (LLMs)",
            engine_text: "Think of an LLM as an incredibly advanced autocomplete. It has read billions of pages of text. When you ask it a question, it isn't 'thinking' like a human; it is calculating the most probable next word based on patterns it learned during training.",
            prediction_title: "Pattern Recognition",
            prediction_text: "AI doesn't understand truth; it understands patterns. If you ask for a poem, it follows the pattern of poetry. If you ask for code, it follows the syntax of programming. It mirrors the quality of your input."
        },
        prompting_101: {
            title: "Prompting 101: The 4 Pillars",
            desc: "To get professional results, structure your prompts using these four key components.",
            pillar_1_title: "1. Persona",
            pillar_1_text: "Who is the AI? Give it a role (e.g., 'Act as a Senior Project Manager'). This filters its knowledge to that specific domain.",
            pillar_2_title: "2. Task",
            pillar_2_text: "What must it do? Be specific and use strong verbs (e.g., 'Draft a 300-word executive summary').",
            pillar_3_title: "3. Context",
            pillar_3_text: "Why and How? Provide background constraints (e.g., 'For a non-technical audience' or 'Focus on cost-saving').",
            pillar_4_title: "4. Format",
            pillar_4_text: "What should the output look like? Specify the structure (e.g., 'A bulleted list', 'A Markdown table', or 'JSON code').",
            iteration_title: "The Iteration Cycle",
            iteration_text: "Treat the AI like a junior colleague. If the output isn't perfect, refine your instructions. Add constraints, clarify the goal, and ask it to try again.",
            shot_title: "Zero-Shot vs. Few-Shot",
            shot_text: "Don't just tell; show. 'Zero-Shot' is asking without examples. 'Few-Shot' is providing 1-2 examples of the desired output. Providing examples significantly improves quality."
        },
        agents: {
            title: "Advanced Concepts: AI Agents",
            desc: "Agents are specialized configurations designed to simulate specific expertise.",
            persona_title: "Role Simulation",
            persona_text: "An 'Agent' is a prompt that instructs the AI to adopt a specific professional persona (e.g., 'Senior Academic Researcher'). This filters its vast knowledge base to prioritize information relevant to that field.",
            constraints_title: "Guardrails & Constraints",
            constraints_text: "Agents use negative constraints (e.g., 'Do not use flowery language') to prevent common AI bad habits like hallucination or verbosity. This ensures the output is usable and professional."
        },
        ethics: {
            title: "Ethics & Responsibility",
            desc: "AI should be your co-pilot, never the autopilot. You are responsible for the final output.",
            copilot_title: "Augmentation, Not Replacement",
            copilot_text: "The goal of AI is to handle repetitive tasks, structure ideas, and analyze data so you can focus on creativity and strategy. It is a tool to help you think faster, not to think for you.",
            verify_title: "The Human in the Loop",
            verify_text: "AI can 'hallucinate'—confidently stating facts that are wrong. You must always verify dates, facts, and code. Never submit AI-generated work without reviewing, editing, and understanding it."
        },
        guide: {
            title: "How to Use This Library",
            desc: "This application is your toolbox. It contains pre-tested prompts and agents to speed up your workflow.",
            search_title: "Find & Discover",
            search_text: "Use the search bar to find prompts for specific tasks (e.g., 'Coding', 'Writing'). Use 'Surprise Me' to discover new ways AI can assist you that you hadn't considered.",
            customize_title: "Customize & Deploy",
            customize_text: "Prompts with bracketed text like [Topic] are interactive. Click them to fill in your specific details before copying. This ensures the prompt is tailored to your exact needs."
        },
        intro: {
            badge: "Documentation",
            version: "v3.2.0",
            title_prefix: "User Manual &",
            title_suffix: "Platform Guide",
            subtitle: "Everything you need to master AINOW — 1,000+ prompts, AI agents, playbooks, situation advisor, custom builder, and lab tools. Fully offline, completely free."
        },
        toc: {
            intro: "Introduction",
            getting_started: "Getting Started",
            features: "Core Features",
            interface: "Interface Guide",
            shortcuts: "Shortcuts",
            tools: "AI Tools Directory",
            faq: "FAQ"
        },
        sections: {
            getting_started: {
                title: "Getting Started",
                text: "AINOW is your <strong>offline AI command center</strong> — a smart toolkit that turns complex AI interactions into simple, guided workflows. No accounts, no API keys, no internet required once loaded.",
                note_bold: "Offline First:",
                note_text: "Everything runs in your browser. No data is sent to any server. Your work stays completely private.",
                fill_in_title: "The Fill-in-the-Blanks Engine",
                fill_in_text_1: "Prompts with <strong>Variables</strong> in square brackets like <code>[Topic]</code> are interactive — click any prompt to open a form that auto-builds the final prompt from your answers.",
                fill_in_text_2: "For Playbooks and Situations, fill in the guided context questions and the platform generates a complete expert prompt package tailored to your exact scenario."
            },
            features: {
                title: "Core Features",
                library: {
                    title: "Prompt Library",
                    text: "Over 1,000 curated prompts across 30+ professional categories — coding, writing, marketing, legal, medicine, education, HR, finance, and more. Use the search bar (<code>/</code>) or browse by category. Mark favourites with ♥ for quick access."
                },
                agents: {
                    title: "AI Agents",
                    text: "Agents are <strong>System Instructions</strong> that define the AI's professional persona before your conversation begins.",
                    list_1: "<strong>Browse</strong> agents by category (Dev, Legal, HR, Sales, Research, and more).",
                    list_2: "<strong>Copy</strong> the full configuration.",
                    list_3: "<strong>Paste</strong> into ChatGPT Custom Instructions, Claude's System Prompt, or at the start of any chat session."
                },
                playbooks: {
                    title: "Playbooks",
                    text_1: "20 expert-guided workflows for complex professional tasks — Code Refactor, UX Audit, Sales Strategy, Legal Draft, HR Recruiting, Finance Plan, and more.",
                    text_2: "Answer 3 targeted questions and receive three prompt formats:",
                    step_1: "Quick Prompt — one powerful prompt for fast results.",
                    step_2: "Full Brief — a comprehensive expert briefing.",
                    step_3: "Prompt Chain — three progressive prompts for deep work.",
                    step_4: "Copy and execute each format in any AI assistant."
                },
                situations: {
                    title: "Situation Advisor",
                    text_1: "8 real-life professional scenarios guided by smart consultant-style questions — Difficult Conversation, Job Application, Client Pitch, Negotiation, Team Conflict, and more.",
                    text_2: "Answer context-specific questions about your exact situation and receive a tailored prompt package:",
                    step_1: "Choose your scenario from 8 real-life situations.",
                    step_2: "Answer the guided questions about your specific context.",
                    step_3: "Receive Quick, Full Brief, and Prompt Chain outputs.",
                    step_4: "Copy and use directly in any AI assistant."
                },
                builder: {
                    title: "Agent Builder",
                    text: "Create custom AI agents without writing code. Define the persona, set behavioural guardrails, specify the output format, and generate a ready-to-use system instruction in seconds.",
                    tip: "Perfect for company-specific assistants, project-based personas, or expert roles not covered by the default agent library."
                }
},
            interface: {
                title: "Interface Guide",
                desc: "A guide to the action buttons available across the application.",
                try: { title: "Try in AI", desc: "Instantly opens the prompt in ChatGPT, Claude, Gemini, Copilot, or Perplexity in a new tab — no copy-paste needed." },
                copy: { title: "Copy", desc: "Copies the final processed prompt to your clipboard, ready to paste anywhere." },
                scratchpad: { title: "Scratchpad", desc: "Appends the prompt to the Global Scratchpad (Cmd+K) — your personal in-app draft workspace." },
                share: { title: "Share", desc: "Generates a shareable link encoded with the prompt content — works even offline." }
            },
            tools: {
                title: "AI Tools Directory",
                desc: "A curated list of the best AI applications across various categories. These are third-party tools and require internet access.",
                categories: {
                    general: "General AI assistants",
                    writing: "Text and writing",
                    presentations: "Presentations and documents",
                    images: "Images and design",
                    video: "Video and multimedia",
                    audio: "Audio and speech",
                    music: "Music",
                    research: "Research and knowledge",
                    search: "Search and verification",
                    math: "Math, data, and science",
                    programming: "Programming and technical",
                    assessment: "Assessment and quizzes",
                    collaboration: "Collaboration and productivity",
                    translation: "Language and translation",
                    multifunction: "Multifunction and experimental",
                    privacy: "Platform and privacy focused"
                }
            }
        },
        faq: {
            q1: { question: "What is this app for?", answer_1: "<strong>AINOW is your \"AI Cockpit\".</strong> It bridges the gap between you and powerful AI models like ChatGPT or Claude.", answer_2: "Instead of struggling to write the perfect prompt from scratch, this app gives you a library of <strong>professionally engineered templates</strong>. You just fill in the blanks (like a Mad Libs game), and we generate the complex code that makes the AI do exactly what you want." },
            q2: { question: "Do I need an API Key?", answer: "<strong>No!</strong> This app does not connect to OpenAI or Google APIs directly. It generates text for you to <em>copy and paste</em> into the AI chat interface you already use (like the free version of ChatGPT). This is why it's completely free and requires no setup." },
            q3: { question: "Can I use this without internet?", answer: "<strong>Yes, 100%.</strong> Once you load this page (or open the local file), you can disconnect your internet. All logic, searching, and prompt generation happens right inside your browser. This makes it perfect for secure environments or travel." },
            q4: { question: "Where is my data stored?", answer: "Everything is saved in your browser's <strong>Local Storage</strong>. We do not have a database. We do not track you. If you clear your browser cache, your \"Favorites\" and \"Scratchpad\" will be reset." },
            q5: { question: "Which AI model should I use?", answer: "Our prompts are <strong>Model Agnostic</strong> — written in clear, structured language that works consistently across any capable AI. The landscape evolves fast: today's top model may be surpassed next month. Use whatever you have access to. As a general rule: larger frontier models (Claude, GPT, Gemini) handle complex reasoning and long instructions better, while smaller or local models (Llama, Mistral, DeepSeek) are great for quick tasks and privacy-first workflows. Try the prompt — good prompts work everywhere." },
            q6: { question: "How do I add my own prompts?", answer: "Currently, you can use the <strong>Scratchpad (Cmd+K)</strong> to save snippets temporarily. For permanent additions, because this is an open-source project, you would add them to the <code>src/data</code> folder in the source code." },
            q7: { question: "What is a \"Prompt\"?", answer: "A prompt is simply the <strong>instruction</strong> you give to the AI. Think of it like a command line for a human. The better your prompt (more context, specific constraints, clear goals), the better the result. AINOW stores \"Super-Prompts\" that are pre-optimized for best performance." },
            q8: { question: "What is an \"Agent\"?", answer: "An Agent is a <strong>Role-Playing Persona</strong>. Instead of just asking a question, you tell the AI <em>who it is</em> (e.g., \"Act as a Senior Python Architect\"). This drastically improves the quality of advice because the AI adopts the mindset and expertise of that specific role." },
            q9: { question: "What is a \"Hallucination\"?", answer: "Sometimes AI makes things up confidently. This is called a hallucination. It happens when the AI tries to please you but doesn't actually know the answer. <strong>Always verify important facts</strong>, especially legal or medical information." },
            q10: { question: "What are \"Tokens\"?", answer: "AI doesn't read words like we do; it reads \"tokens\". A token is roughly 4 characters (or 0.75 words). If an AI has a \"context limit\" of 128k tokens, it means it can remember about a 300-page book in a single conversation." },
            q11: { question: "What is the Situation Advisor?", answer: "The Situation Advisor is an intelligent prompt generator for real-life professional moments — like preparing for a difficult conversation, writing a job application, or planning a negotiation. You answer a few smart questions about your specific context, and the platform builds a tailored prompt package (Quick, Full Brief, and Prompt Chain) ready to use in any AI assistant." },
            q12: { question: "What is the Agent Builder?", answer: "The Agent Builder lets you create your own custom AI agent without any technical knowledge. You describe the persona, set the tone and constraints, and define the expected output format. The builder generates a complete system instruction you can paste into any AI platform to create a specialised assistant for your exact needs." }
}
    },

    scratchpad: {
        title: "Scratchpad",
        placeholder: "Paste prompts here to chain them, or take notes...",
        footer: "Content is auto-saved locally.",
        added: "Added to Scratchpad"
    },
    categories: {
        all: 'All Prompts', favorites: 'Favorites', agriculture: 'Agriculture',
        aiengineering: 'AI Engineering', business: 'Business', career: 'Career',
        climate: 'Climate', coding: 'Coding', creative: 'Creative',
        creativevisual: 'Visual Arts', cybersecurity: 'Cybersecurity',
        dataanalysis: 'Data & Analytics', education: 'Education',
        finance: 'Finance', gov: 'Government', hospitality: 'Hospitality',
        health: 'Health & Wellness', hr: 'HR', humanities: 'Humanities',
        journalism: 'Journalism', legal: 'Legal', logistics: 'Logistics',
        marketing: 'Marketing', medicine: 'Medicine', ngo: 'NGO',
        product: 'Product', productivity: 'Productivity', psychology: 'Psychology',
        publichealth: 'Public Health', realestate: 'Real Estate',
        sales: 'Sales', science: 'Science', sustainability: 'Sustainability',
        writing: 'Writing', macedonian: 'Macedonian', albanian: 'Albanian'
    },
    playbook_categories: {
        all: "All Playbooks",
        coding: "Programming",
        marketing: "Marketing",
        ngo: "NGO",
        education: "Education",
        creative: "Creative",
        business: "Business",
        productivity: "Productivity",
        communication: "Communication",
        sales: "Sales",
        hr: "HR",
        finance: "Finance",
        psychology: "Psychology",
        data: "Data",
        product: "Product",
        cybersecurity: "Cybersecurity",
        legal: "Legal",
        climate: "Climate",
        logistics: "Logistics",
        research: "Research",
        writing: "Writing",
        government: "Government"
    },
    playbooks: {
        hero: {
            badge: "Workflow Engine",
            title_start: "Don't just prompt.",
            title_end: "Build.",
            subtitle: "Complex tasks require more than one step. Playbooks chain prompts together, automatically feeding the output of one step into the context of the next.",
            step1: "Set Initial Context",
            step2: "Run AI Prompt",
            step3: "Feed Back Response",
            step_label: "Step"
        },
        modal: {
            title: "Initialize Playbook",
            subtitle: "Provide the starting context for:",
            info: "This data will be injected into the first prompt. The AI will use it to understand your specific goal.",
            cancel: "Cancel",
            start: "Start Workflow"
        },
        active: {
            exit: "Exit",
            active_badge: "Active",
            step_goal: "Step Goal",
            copy_prompt: "Copy this Prompt to AI",
            paste_response: "Paste AI Response Here",
            finish: "Finish Workflow",
            next: "Generate Next Step",
            memory: "Context Memory",
            why: "Why this matters:",
            why_text: "The data shown above is \"remembered\" by the app. We automatically inject it into the next steps so you don't have to manually explain the context to the AI again."
        },
        list: {
            categories: "Categories",
            all: "All Playbooks",
            search: "Search workflows... (/)",
            available: "Available Workflows",
            found: "playbooks found",
            no_results: "No playbooks found. Try adjusting your search.",
            table_steps: 'Steps'
        },
        items_label: 'prompts & scenarios',
        ql: {
            // pb-cr: Code Refactor
            cr_code_l: 'Paste the code you want to work with:',
            cr_code_ph: 'Paste your code here...',
            cr_goal_l: 'What is the primary improvement goal?',
            cr_context_l: 'Any framework or team conventions to consider?',
            cr_context_ph: 'e.g. React 18, TypeScript strict mode, company style guide',
            // pb-ux: UX Audit
            ux_screen_l: 'Describe the UI or screens you want audited:',
            ux_screen_ph: 'Describe the interface, flows, and key interactions...',
            ux_user_type_l: 'Who is the primary user?',
            ux_user_type_ph: 'e.g. First-time buyers, enterprise admins, students 18-25',
            ux_top_issue_l: 'What is the biggest UX complaint or known drop-off point?',
            // pb-ce: Content Engine
            ce_topic_l: 'What is the topic or subject of this content?',
            ce_topic_ph: 'e.g. AI tools for small businesses, leadership in remote teams',
            ce_audience_l: 'Who is the target audience?',
            ce_audience_ph: 'e.g. Startup founders 25-40, tech-savvy but not developers',
            ce_goal_l: 'What is the content goal?',
            // pb-ir: Incident Response
            ir_alerts_l: 'Describe the incident or paste log / alert details:',
            ir_alerts_ph: 'Paste error logs, alert details, or describe the incident...',
            ir_system_l: 'What system or environment is affected?',
            ir_system_ph: 'e.g. AWS production cluster, Windows domain, internal API gateway',
            ir_severity_l: 'What is the estimated severity and current status?',
            // pb-ds: Data Science
            ds_data_l: 'Describe your dataset (tables, columns, size, source):',
            ds_data_ph: 'e.g. Customer transactions: user_id, date, amount — 2M rows, PostgreSQL',
            ds_objective_l: 'What is the analytical or predictive goal?',
            ds_tools_l: 'What tools or stack are you using?',
            ds_tools_ph: 'e.g. Python / Pandas / Scikit-learn / Jupyter',
            // pb-hr: HR Recruiting
            hr_role_l: 'What role or position are you hiring for?',
            hr_role_ph: 'e.g. Senior Product Manager, DevOps Engineer, Sales Director',
            hr_company_l: 'Describe your company and culture briefly:',
            hr_company_ph: 'e.g. Series B SaaS startup, 80 people, remote-first, fast-paced',
            hr_priority_l: 'What is the #1 quality you need in this hire?',
            // pb-gp: Government / Policy
            gp_issue_l: 'What public or policy issue are you addressing?',
            gp_issue_ph: 'e.g. Urban traffic congestion, youth unemployment, digital privacy',
            gp_jurisdiction_l: 'What is the jurisdiction or scope?',
            gp_constraint_l: 'What are the key constraints or political considerations?',
            gp_constraint_ph: 'e.g. Limited budget, election year, strong industry opposition',
            // pb-ld: Legal Draft
            ld_contract_l: 'What type of legal document do you need?',
            ld_parties_l: 'Who are the parties involved?',
            ld_parties_ph: 'e.g. Software company (provider) and enterprise client (customer)',
            ld_key_terms_l: 'What are the key terms, conditions, or concerns?',
            ld_key_terms_ph: 'e.g. $5k/month, 12-month term, IP stays with provider, data privacy critical',
            // pb-ss: Sales Strategy
            ss_account_l: 'Who is the target company or account?',
            ss_account_ph: 'e.g. Fortune 500 retailer, mid-market SaaS company, local government',
            ss_product_l: 'What are you selling?',
            ss_product_ph: 'e.g. Enterprise cybersecurity platform, $80k/year ARR',
            ss_stage_l: 'What stage of the sales cycle are you at?',
            // pb-cp: Climate Plan
            cp_org_l: 'Describe your organization or operation:',
            cp_org_ph: 'e.g. Mid-size manufacturing facility, 500 employees, produces packaging',
            cp_baseline_l: 'What is your current sustainability baseline or target?',
            cp_baseline_ph: 'e.g. No ESG policy yet, or: targeting net zero by 2030',
            cp_constraint_l: 'What are the key constraints?',
            // pb-pm: Project Management
            pm_goal_l: 'What is the project goal or key deliverable?',
            pm_goal_ph: 'e.g. Launch new e-commerce website, migrate to cloud infrastructure',
            pm_scope_l: 'Describe the project scope, team, and resources:',
            pm_scope_ph: 'e.g. 6-person team, 3-month timeline, $50k budget, stakeholders: marketing + engineering',
            pm_risk_l: 'What is the biggest risk or challenge?',
            // pb-hc: HR Culture
            hc_size_l: 'What is the team or organization size and structure?',
            hc_size_ph: 'e.g. 45-person startup, fully remote, 3 engineering teams + sales + ops',
            hc_problem_l: 'What is the current cultural challenge or goal?',
            hc_values_l: 'What values or principles should define this culture?',
            hc_values_ph: 'e.g. Ownership, transparency, customer obsession, continuous learning',
            // pb-fn: Finance Plan
            fn_revenue_l: 'What is the current revenue or financial situation?',
            fn_revenue_ph: 'e.g. $2.5M ARR growing 30% YoY, or pre-revenue startup with $500k seed',
            fn_goal_l: 'What is the financial goal or challenge?',
            fn_context_l: 'Describe the business model and cost structure:',
            fn_context_ph: 'e.g. SaaS, $120 CAC, 18-month LTV, 70% gross margin, team of 15',
            // pb-cc: Course Creation
            cc_topic_l: 'What subject or skill will this course teach?',
            cc_topic_ph: 'e.g. Data analysis with Python, Business communication, Graphic design',
            cc_learner_l: 'Who is the target learner?',
            cc_format_l: 'What is the course format and duration?',
            cc_format_ph: 'e.g. 6-week online course, 10 video modules, self-paced with weekly live Q&A',
            // pb-rs: Research
            rs_domain_l: 'What is your research field or topic?',
            rs_domain_ph: 'e.g. Machine learning fairness, Public health policy, Behavioral economics',
            rs_question_l: 'What is your research question or hypothesis?',
            rs_question_ph: 'Describe what you want to find out or test...',
            rs_stage_l: 'What stage is your research at?',
            // pb-sw: Story Writer
            sw_hook_l: 'Describe your story concept or opening idea:',
            sw_hook_ph: 'e.g. A disgraced astronaut gets one last chance to redeem herself on a solo Mars mission',
            sw_genre_l: 'What is the genre and tone?',
            sw_audience_l: 'Who is the target reader?',
            sw_audience_ph: 'e.g. Adults 30-50 who enjoy literary sci-fi, YA readers aged 14-18',
            // pb-bm: Business Model
            bm_idea_l: 'Describe your business idea or concept:',
            bm_idea_ph: 'e.g. AI meal planning app that learns family preferences and generates grocery lists',
            bm_market_l: 'Who is your target customer and market?',
            bm_market_ph: 'e.g. Busy working parents in the US, $50B meal kit market',
            bm_stage_l: 'What stage is this business at?',
            // pb-so: IT SOP
            so_system_l: 'What technology system or infrastructure are you working with?',
            so_system_ph: 'e.g. Kubernetes cluster on AWS, Windows Active Directory, PostgreSQL',
            so_process_l: 'What process or operation needs an SOP?',
            so_process_ph: 'e.g. New service deployment, disaster recovery, user onboarding / offboarding',
            so_audience_l: 'Who will follow this SOP?',
            // pb-la: Supply Chain / Logistics
            la_route_l: 'Describe your supply chain or trade route:',
            la_route_ph: 'e.g. Manufacturing in Vietnam → warehouse in Netherlands → retail in UK',
            la_product_l: 'What product or goods are you moving?',
            la_product_ph: 'e.g. Consumer electronics, perishable food, industrial components',
            la_challenge_l: 'What is the main challenge or optimization goal?',
            // pb-pc: Psychology Coach
            pc_pattern_l: 'What behavior or mental pattern do you want to change?',
            pc_pattern_ph: 'e.g. Chronic procrastination, people-pleasing, imposter syndrome, performance anxiety',
            pc_context_l: 'In what context does this pattern appear most?',
            pc_goal_l: 'What does success look like for you?',
            pc_goal_ph: 'e.g. Delivering work on time without last-minute panic, saying no without guilt'
        }
    },
    builder: {
        title: "Agent Builder",
        subtitle: "Design custom intelligence assets",
        autosaved: "Auto-saved",
        export: "Export JSON",
        reset: "Reset Form",
        framework: "Reasoning Framework",
        identity: "Core Identity",
        name: "Agent Name",
        role: "Role",
        domain: "Domain",
        behavior: "Behavior & Tone",
        tone_style: "Tone & Style",
        focus: "Primary Focus",
        methodology: "Methodology",
        constraints: "Negative Constraints",
        task: "Task & Guidelines",
        instructions: "Instructions & Rules",
        input_format: "What will you paste to the agent?",
        examples: "Teach the AI with Examples",
        capabilities: "Capabilities (Add Skills)",
        quality: "Prompt Quality",
        preview: "Live Preview",
        copy: "Copy System Instructions",
        copied_clip: "Copied to Clipboard",
        tooltip: "Your work is saved locally in your browser. No data is sent to our servers.",
        presets: {
            professional: "Professional",
            empathetic: "Empathetic",
            academic: "Academic",
            eli5: "ELI5",
            sarcastic: "Sarcastic",
            executive: "Executive"
        },
        quality_checks: {
            identity_ok: "Core identity defined",
            identity_bad: "Missing Name, Role, or Domain",
            context_ok: "Context is detailed",
            context_mid: "Context is somewhat brief",
            context_bad: "Context is empty",
            examples_ok: "Examples are provided",
            examples_bad: "Few-Shot selected, but no examples",
            guardrails_ok: "Guardrails are active",
            guardrails_bad: "No negative constraints set",
            input_ok: "Input format defined"
        }
    },
    resources: {
        sidebar: { title: 'Knowledge Base', guide_section: 'Guide', platform_section: 'Platform' },
        nav: { getting_started: 'Developer Guide', ethical_ai: 'Ethical AI', partners: 'Partners', models: 'AI Models', about: 'About AINOW', privacy: 'Privacy & Terms', accessibility: 'Accessibility' },
        help: { title: 'Need help?', text: 'Check our community guides or reach out to us on the forum.' }
    },
    pages: {
        about: {
            title: 'About AINOW Society',
            story_title: 'Our Story',
            story_text: 'Every transformation begins with an idea. Ours started in a small space but with a big vision—to bring innovation and responsibility to AI. Through passion and dedication, it’s become a movement that inspires.',
            mission_title: 'Our Mission',
            mission_text: 'Our mission is to drive research, development, and education in artificial intelligence (AI) in Macedonia. We aim to foster ethical AI applications and support young talents and startups in this field.',
            values_title: 'Our Values',
            values_text: 'Our values are built on collaboration, innovation, ethics, and social responsibility. We believe in empowering people, fostering a culture of learning, and advancing AI for the greater good of society.',
            creator_title: 'Meet the Creator',
            creator_bio: 'With over 20 years of experience in IT, cybersecurity, and AI, Suad Seferi brings deep expertise to the rapidly evolving tech landscape. He is the author of The AI Journey and The Spell of AI - A World Without a Pause, books dedicated to simplifying complex concepts and ensuring technology remains accessible to everyone.',
            creator_quote: '"The Real Magic of AI is making it work for people."',
            creator_quote_2: '"I created this project as a dedicated initiative for digital well-being and to raise awareness about AI ethics. It is designed to be completely free, open-source, and accessible to everyone—whether running locally on your own machine or online."',
            bio_link: 'Read full bio and work',
            contact_title: 'Contact Us',
            contact_text: 'For questions, suggestions, or collaboration inquiries, please reach out to us at',
            project_title: 'The Prompt Library Project',
            project_text: 'This library is one of our flagship open-source projects, born directly from our mission to democratize AI education. It serves as a centralized, community-driven hub for high-quality prompts and agent configurations.',
            project_text_2: 'By providing these tools freely, we help students, businesses, and enthusiasts bridge the gap between complex AI research and practical, ethical implementation. It acts as a digital companion to our workshops and educational initiatives, empowering users to harness the full potential of Generative AI.'
        },
        partners: {
            title: 'Our Partners',
            intro: 'We collaborate with industry leaders, academic institutions, and tech communities to drive AI adoption and ethical standards across North Macedonia and the SEE region.',
            academic: 'Academic Institutions',
            academic_text: 'Collaborating with local universities for research and AI curriculum development.',
            tech: 'Tech Communities',
            tech_text: 'Partnering with developer hubs to host workshops and hakatone.',
            industry: 'Industry Leaders',
            industry_text: 'Working with local tech firms to implement responsible AI solutions.',
            ngo: 'Global NGOs',
            ngo_text: 'Cooperating on social impact projects powered by generative AI.',
            become: 'Become a Partner',
            become_text: 'Interested in collaborating? Contact us at'
        },
        legal: {
            title: 'Legal & Privacy',
            open_source_title: 'Open Source Initiative',
            open_source_text: 'The AINOW Prompt Library is a free, open-source project maintained by AINOW Society (NGO AI NOW Skopje). It is designed to serve the community without cost. We believe in democratizing access to artificial intelligence tools.',
            notice_title: 'Legal Notice',
            notice_1_title: '1. Nature of Service',
            notice_1_text: 'This application is provided "as is" for educational and productivity purposes. While we strive for quality, AINOW Society makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the prompts, agents, or software.',
            notice_2_title: '2. Liability Disclaimer',
            notice_2_text: 'You acknowledge that AINOW Society is not liable for the outputs generated by third-party AI models (such as ChatGPT, Claude, or Gemini) using our prompts. Users bear full responsibility for reviewing AI-generated content for accuracy and bias before use.',
            notice_3_title: '3. Information of Operator',
            privacy_title: 'Privacy Policy',
            no_tracking_title: '1. No Server Tracking',
            no_tracking_text: 'We respect your privacy by design. This application functions entirely on the Client-Side (in your browser). We do not operate a backend server to collect your personal data, search history, or prompt usage.',
            local_storage_title: '2. Local Storage',
            local_storage_text: 'To improve your experience, we use your browser\'s Local Storage to save your preferences. This data stays on your device and is never transmitted to us.',
            third_party_title: '3. Third-Party Services',
            third_party_text: 'This site may be hosted on platforms like GitHub Pages or Netlify, which may collect standard anonymous server logs (IP address, browser type) for security and performance monitoring. We do not use advertising cookies or marketing trackers.',
            terms_title: 'Terms & Licensing',
            license_software: '1. Open Source License (Software)',
            license_content: '2. Content License (Prompts)',
            user_resp_title: '3. User Responsibilities',
            user_resp_text: 'By using this website, you agree to use the content lawfully. You understand that prompts are tools for generating content, and you remain responsible for hov you use the output generated by AI models.'
        },
        
        
        
        
        ethical: {
            title: 'Ethical AI Guidelines',
            intro: 'We believe AI should empower humanity, not replace it. Our prompts and agents are designed with a focus on fairness, accuracy, and safety. We advocate for the transparent and ethical use of generative AI in all sectors.',
            pillars: {
                human: { title: 'Human-Centricity', text: 'AI is a tool for augmentation. We prioritize "Human-in-the-Loop" systems where technology serves human well-being, creativity, and decision-making, rather than automating meaningful human agency away.' },
                privacy: { title: 'Privacy by Design', text: 'We respect user data sovereignty. This library runs locally in your browser. We do not track prompts or usage data, ensuring that your interactions remain private and secure.' },
                fairness: { title: 'Fairness & Bias', text: 'We strive to curate prompts that mitigate harmful stereotypes. Users are encouraged to critically evaluate AI outputs for bias, as underlying models may reflect historical prejudices.' },
                transparency: { title: 'Transparency', text: 'We believe in open code and open intentions. Users should always disclose when content is AI-generated, especially in professional, academic, or creative contexts.' }
            },
            philosophy: { title: 'The Philosophy Behind the Code', text: 'Our choice to build this library as a Client-Side Only application is not just technical—it is an ethical stance on Data Sovereignty. In an age of surveillance capitalism, we believe educational tools should not come at the cost of user privacy. By removing the server, we ensure we physically cannot track your prompts, your interests, or your usage patterns. Your intellectual exploration remains yours alone.' },
            literacy: { title: 'AI Literacy & Education', text: 'We view AI literacy as a fundamental 21st-century skill. This library is designed to be a learning companion, not a magic box. We encourage users to analyze how our prompts are structured. Deconstruct them. Modify them. Understand the mechanism of the "System Instruction" or the "Few-Shot" example. True empowerment comes from understanding the tool, not just consuming its output.' },
            community: {
                title: 'Community Standards',
                intro: 'As an open-source project, we welcome contributions from the global community. However, to maintain the integrity of our mission, we enforce strict standards for all Pull Requests:',
                items: [
                    'No Harmful Content: We reject prompts that generate hate speech, violence, or non-consensual sexual content.',
                    'No Cyber-Attack Tools: We do not host prompts designed to facilitate hacking, phishing, or social engineering.',
                    'Quality over Quantity: Contributions must demonstrate clear utility and educational value.'
                ]
            },
            accessibility: { title: 'Accessibility Statement', text: 'We strive to make AI tools accessible to everyone, regardless of ability, geography, or hardware. Innovation should not be a luxury. Our lightweight, offline-first architecture ensures this library works on older devices and slow internet connections common in providing regions. We are committed to maintaining semantic HTML and ARIA standards to ensure compatibility with screen readers and assistive technologies.' },
            user_resp: {
                title: 'User Responsibilities',
                items: [
                    'Verify Facts: Generative AI can hallucinate. Always cross-reference facts, dates, and citations generated by prompts.',
                    'Review for Bias: Models can inadvertently produce biased content. It is your responsibility to review and edit outputs to ensure inclusivity.',
                    'Respect Copyright: Do not use AI to generate content that infringes on existing intellectual property or mimics living artists without consent.',
                    'Professional Judgment: AI is an assistant, not an expert. Use professional judgment when applying AI advice in legal, medical, or financial contexts.'
                ]
            },
            risk: { title: 'Risk Mitigation & Safety', text: 'We actively moderate our library to exclude prompts designed for malicious use, hate speech, or the generation of harmful content. If you encounter a prompt that violates these safety standards, please report it immediately to our team at' },
            stand: { title: 'Our Ethical Stand', text: 'We build AI tools to augment human creativity, never to replace the essential value of human connection.' }
        },
        accessibility: {
            title: 'Accessibility & Shortcuts',
            intro: 'The AINOW Platform is designed to be efficient for power users and accessible to everyone. We support keyboard navigation to streamline your workflow.',
            keyboard_title: 'Keyboard Shortcuts',
            global: { title: 'Global Navigation', show: 'Show Shortcuts', theme: 'Toggle Theme', sidebar: 'Toggle Sidebar' },
            jump: { title: 'Jump to Page', prompts: 'Prompt Library', agents: 'Agents Hub', builder: 'Agent Builder', resources: 'Resources', then: 'then' },
            actions: { title: 'Actions', search: 'Focus Search', close: 'Close Modal / Blur', copy: 'Copy Result (Builder)' },
            commitment: {
                title: 'Accessibility Commitment',
                text: 'We are committed to making our digital tools accessible to users of all abilities. We strive to adhere to WCAG 2.1 Level AA standards.',
                items: [
                    'Screen Readers: All interactive elements have aria-labels and semantic HTML structure.',
                    'Contrast: We use high-contrast color modes in both light and dark themes.',
                    'Reduced Motion: We respect system-level preferences for reduced motion.'
                ]
            }
        }
    },
    footer: {
        tagline: 'Prompt Different.',
        rights: 'An Open Source Initiative • Privacy First',
        forum: 'Forum'
    },
    situations: {
        badge: 'Situation Advisor',
        page_title: 'What\'s Your Situation?',
        page_subtitle: 'Pick a real-life scenario. Answer a few smart questions. Get expert-level AI prompts — instantly.',
        start_btn: 'Start',
        next_btn: 'Next',
        back_btn: 'Back',
        generate_btn: 'Generate My Prompts',
        restart_btn: 'Try Another',
        step_label: 'Step',
        of_label: 'of',
        questions_label: 'questions',
        output_title: 'Your Expert Prompt Package',
        output_subtitle: 'Three levels of power — pick the one that fits.',
        your_context: 'Your Context',
        quick_label: 'Quick Prompt',
        full_label: 'Full Brief',
        chain_label: 'Prompt Chain',
        quick_desc: 'One powerful prompt for fast results. Copy and go.',
        full_desc: 'A comprehensive expert briefing. Best for complex, high-stakes tasks.',
        chain_desc: 'Three progressive prompts — use them in sequence for the deepest results.',
        chain_step: 'Step',
        copy_prompt: 'Copy',
        copied: 'Copied!',
        cats: {
            all: 'All Situations',
            leadership: 'Leadership',
            business: 'Business',
            communication: 'Communication',
            career: 'Career',
            productivity: 'Productivity'
        },
        sidebar_topics: 'Advisor Topics',
        sidebar_all_topics: 'All Topics',
        guide: {
            step1_title: 'Pick Your Situation',
            step1_desc: '453 real-world scenarios across every professional field.',
            step2_title: 'Answer Smart Questions',
            step2_desc: 'A few targeted questions shape the output to your exact context.',
            step3_title: 'Copy Your Prompt',
            step3_desc: 'Quick, Full, or Chain — ready to paste into any AI instantly.'
        },
        difficult_conversation: {
            title: 'Navigate a Difficult Conversation',
            desc: 'Get expert guidance on approaching a sensitive or challenging discussion',
            who_label: 'Who are you speaking with?',
            who_direct_report: 'Direct Report',
            who_peer: 'Peer / Colleague',
            who_manager: 'Manager / Boss',
            who_client: 'Client / Customer',
            issue_label: 'What is the issue you need to address?',
            issue_ph: 'e.g. Performance has been declining, missed deadlines, attitude problem...',
            goal_label: 'What is your desired outcome from this conversation?',
            goal_ph: 'e.g. Agree on a 30-day improvement plan, preserve the relationship...',
            style_label: 'What communication style fits best?',
            style_direct: 'Direct',
            style_empathetic: 'Empathetic',
            style_diplomatic: 'Diplomatic',
            style_assertive: 'Assertive',
            history_label: 'What is the current state of your relationship?',
            history_positive: 'Generally Positive',
            history_neutral: 'Neutral / Professional Distance',
            history_strained: 'Recently Strained',
            history_long_standing: 'Long-Standing Tension',
            template_quick: `I need to have a difficult conversation with my {{who}} about: {{issue}}. Our relationship context: {{history}}. My goal is: {{goal}}. Please help me structure this conversation using a {{style}} approach. Provide: 1) A natural opening statement, 2) Key points to address clearly, 3) How to handle emotional resistance, 4) A closing that preserves the relationship.`,
            template_full: `Act as a senior executive coach specializing in workplace communication and conflict resolution.\n\nI need to navigate a challenging conversation with my {{who}}.\n\nSituation: {{issue}}\nDesired outcome: {{goal}}\nCommunication approach: {{style}}\nRelationship context: {{history}}\n\nCreate a comprehensive conversation framework:\n\n1. **Pre-Conversation Prep** — What to research, reflect on, and prepare emotionally\n2. **Opening Statement** — The exact 2-3 sentences to start\n3. **Core Message Structure** — How to articulate the issue without triggering defensiveness\n4. **Active Listening Moves** — Questions that show respect and surface their perspective\n5. **Resistance Playbook** — 3 likely pushback scenarios with responses\n6. **Agreement Anchors** — Points to land on that move toward resolution\n7. **Closing Statement** — How to end with dignity and a clear next step\n8. **Post-Conversation Actions** — What to document, what to follow up on\n\nTone: professional, empathetic, solution-focused.`,
            chain_1: `I am preparing for a difficult conversation with my {{who}} about: {{issue}}. Our relationship: {{history}}. Before I say a single word, what are the 5 most critical things I must understand? Consider: the emotional state they are likely in, the power dynamics, potential triggers, what they actually need (vs. what they will say), and what could go wrong.`,
            chain_2: `I am about to speak with my {{who}} using a {{style}} approach. My goal: {{goal}}. Our relationship context: {{history}}. Write me the opening 3 sentences for this conversation. They must feel completely natural to say out loud — not corporate-scripted, not confrontational. The goal is to open the door, not close it.`,
            chain_3: `My {{who}} has just responded defensively to the issue I raised. Using the {{style}} approach and our relationship context ({{history}}) and keeping my goal ({{goal}}) in sight, give me 5 flexible responses I can use to de-escalate the tension without backing down from the core issue. Label each by emotional tone (e.g., Acknowledging, Redirecting, Firm, Curious, Reframing).`
        },
        write_proposal: {
            title: 'Write a Winning Proposal',
            desc: 'Create a persuasive professional proposal that gets a yes',
            client_type_label: 'Who is this proposal for?',
            client_type_internal_team: 'Internal Team / Leadership',
            client_type_external_client: 'External Client',
            client_type_government: 'Government / Public Sector',
            client_type_nonprofit: 'Nonprofit / NGO',
            relationship_label: 'What is your existing relationship with this client?',
            relationship_new_client: 'New — No Prior Relationship',
            relationship_existing_client: 'Existing Client — Ongoing Work',
            relationship_returning_client: 'Returning — Previously Worked Together',
            relationship_competitive_bid: 'Competitive Bid — Against Other Vendors',
            problem_label: 'What problem does your proposal solve?',
            problem_ph: 'e.g. Our client wastes 10 hours per week on manual reporting...',
            solution_label: 'What is your proposed solution?',
            solution_ph: 'e.g. An automated dashboard that pulls data from 3 systems...',
            budget_label: 'What is the budget context?',
            budget_ph: 'e.g. €15,000 total, 3-month timeline, or "budget not yet defined"',
            decision_timeline_label: 'What is the decision urgency?',
            decision_timeline_urgent: 'Urgent — Decision This Week',
            decision_timeline_standard: 'Standard — Within a Month',
            decision_timeline_exploratory: 'Exploratory — No Set Timeline',
            decision_timeline_competitive: 'Competitive Bid — Multiple Vendors',
            template_quick: `Write a professional proposal for a {{client_type}}.\n\nWho is this proposal for: {{client_type}}. Client relationship: {{relationship}}.\n\nProblem: {{problem}}\nSolution: {{solution}}\nBudget context: {{budget}}\n\nDecision timeline: {{decision_timeline}}\n\nInclude: executive summary, problem statement, proposed solution with key deliverables, success metrics, timeline, and a clear call to action.`,
            template_full: `Act as a senior business consultant and proposal writer with 15 years of experience winning high-value contracts.\n\nWrite a compelling, complete proposal for: {{client_type}}\n\nProblem being solved: {{problem}}\nProposed solution: {{solution}}\nBudget context: {{budget}}\nDecision timeline: {{decision_timeline}}\nClient relationship: {{relationship}}\n\nStructure the proposal as follows:\n\n1. **Executive Summary** (3-4 sentences, decision-maker focused)\n2. **Problem Statement** — Frame the pain in their language, with quantified impact where possible\n3. **Our Solution** — What exactly you will do, how it works, what makes it different\n4. **Key Deliverables** — Bulleted, specific, measurable outcomes\n5. **Timeline** — Phase-by-phase breakdown with milestones\n6. **Investment** — Present the budget as an ROI story, not a cost\n7. **Why Us** — 3 concrete reasons this team and approach is the right choice\n8. **Next Steps** — A single clear call to action\n\nTone: confident, specific, client-centric. No filler sentences.`,
            chain_1: `I am writing a proposal for a {{client_type}} to solve: {{problem}}. The decision context: {{decision_timeline}}. Our relationship with this client: {{relationship}}. Before I write a single word, help me build the strategic foundation. What are the 3 biggest fears or objections this type of decision-maker typically has? What language and framing will resonate most? What proof or data should I reference?`,
            chain_2: `Help me write the problem statement for this proposal. The client is a {{client_type}}, the issue is: {{problem}}. Write a 150-word problem statement that makes them feel: "Yes, this is exactly what we are dealing with." Use their language, quantify the pain, and end with a transition toward the solution.`,
            chain_3: `My proposed solution is: {{solution}}, with budget context: {{budget}}. The decision timeline is {{decision_timeline}}. Write a persuasive "Investment" section for my proposal that reframes the cost as an ROI story. Include a simple before/after scenario and a risk-of-inaction paragraph. Keep it under 200 words but make every word count.`
        },
        client_pitch: {
            title: 'Nail a Client Pitch',
            desc: 'Structure a compelling pitch that converts prospects to clients',
            service_label: 'What are you pitching or offering?',
            service_ph: 'e.g. Custom software development, marketing strategy, HR consulting...',
            prospect_label: 'What type of client is this?',
            prospect_startup: 'Startup',
            prospect_sme: 'Small & Medium Business',
            prospect_enterprise: 'Enterprise / Corporation',
            prospect_government: 'Government / Public Sector',
            prospect_nonprofit: 'Nonprofit / NGO',
            pitch_stage_label: 'What stage is this relationship at?',
            pitch_stage_cold: 'Cold — First Ever Contact',
            pitch_stage_warm: 'Warm — Already Engaged',
            pitch_stage_follow_up: 'Follow-Up — Had a Previous Meeting',
            pitch_stage_final: 'Final Stage — They Are Deciding Now',
            benefit_label: 'What is the single biggest benefit you deliver?',
            benefit_ph: 'e.g. Cut operational costs by 30%, launch faster, reduce risk...',
            objection_label: 'What objection do you expect?',
            objection_ph: 'e.g. "It is too expensive", "We already have a solution"...',
            template_quick: `I need to pitch {{service}} to a {{prospect}} client. This is a {{pitch_stage}} interaction. My biggest value proposition: {{main_benefit}}. Expected objection: {{objection}}. Structure a 5-minute verbal pitch that hooks them in 30 seconds, communicates value clearly, handles the objection proactively, and closes with a specific next step.`,
            template_full: `Act as a senior sales strategist and pitch coach with deep expertise in {{prospect}} accounts.\n\nI am pitching: {{service}}\nClient type: {{prospect}}\nCore value proposition: {{main_benefit}}\nAnticipated objection: {{objection}}\nPitch stage: {{pitch_stage}}\n\nCreate a complete pitch playbook:\n\n1. **The Hook** (first 30 seconds) — A provocative question or insight that creates immediate relevance\n2. **Problem Framing** — How to articulate the pain this {{prospect}} specifically feels\n3. **The Solution Story** — Present {{service}} as the natural answer, not a product push\n4. **Proof Point** — A relevant example, stat, or case that builds credibility\n5. **Value Bridge** — Translate features into {{main_benefit}} in their language\n6. **Objection Neutralizer** — Pre-empt and defuse "{{objection}}" before they say it\n7. **The Ask** — A specific, low-friction next step\n8. **Backup Questions** — 3 follow-up questions to keep momentum if they hesitate\n\nTone: confident, peer-to-peer, focused on their world not your product.`,
            chain_1: `I am pitching {{service}} to a {{prospect}}. This is a {{pitch_stage}} interaction. Before I walk in, I need to think like them. What are the top 3 business pressures this type of organization is under right now? What does "success" look like for the person I am pitching to? What would make them look good internally for choosing this?`,
            chain_2: `Write me the opening 45 seconds of my {{pitch_stage}} pitch for {{service}} to a {{prospect}}. It must: start with a problem insight (not "let me tell you about us"), establish credibility quickly, and end with a question that invites them in. Make it conversational, not corporate.`,
            chain_3: `My prospect (a {{prospect}}) has just said: "{{objection}}". Using the context that I am pitching {{service}} with the value of {{main_benefit}}, write me a calm, confident 3-step response that: acknowledges their concern, reframes it as a sign they will benefit most, and redirects to the value.`
        },
        handle_complaint: {
            title: 'Handle a Complaint Professionally',
            desc: 'Turn a frustrated person into a loyal advocate',
            complainer_label: 'Who is making the complaint?',
            complainer_customer: 'Customer / Client',
            complainer_employee: 'Employee / Team Member',
            complainer_partner: 'Partner / Vendor',
            complainer_colleague: 'Colleague / Internal Stakeholder',
            complaint_label: 'What is the complaint about?',
            complaint_ph: 'e.g. Delayed delivery, unprofessional behavior, product defect, broken promise...',
            what_happened_label: 'What actually happened from your perspective?',
            what_happened_ph: 'e.g. System error caused a delay, the employee was stressed, miscommunication about scope...',
            resolution_power_label: 'What level of resolution can you offer?',
            resolution_power_full: 'Full resolution (I can fix it completely)',
            resolution_power_partial: 'Partial resolution (I can offer something)',
            resolution_power_none: 'No resolution power (I need to escalate)',
            channel_label: 'How will you be responding?',
            channel_in_person: 'In Person / Face-to-Face',
            channel_email: 'Email / Written Message',
            channel_phone: 'Phone / Video Call',
            channel_formal_letter: 'Formal Written Notice',
            template_quick: `I need to professionally handle a complaint from a {{complainer}}. The complaint: {{complaint}}. What actually happened: {{what_happened}}. My resolution capacity: {{resolution_power}}. Response format: {{channel}}. Write me a professional response that: acknowledges their frustration, takes responsibility where appropriate, explains what happened clearly, and presents the resolution path.`,
            template_full: `Act as a senior customer experience director and conflict resolution specialist.\n\nI need to handle a complaint professionally.\n\nWho: {{complainer}}\nTheir complaint: {{complaint}}\nWhat happened internally: {{what_happened}}\nMy resolution capacity: {{resolution_power}}\nResponse channel: {{channel}}\n\nProvide a complete complaint handling framework:\n\n1. **Emotional First Response** — The opening statement that immediately acknowledges their feeling (not the complaint — the feeling)\n2. **Accountability Language** — How to take responsibility without admitting legal liability\n3. **The Explanation** — How to explain what happened in a way that sounds like transparency, not excuses\n4. **Resolution Offer** — Present what you can offer based on your capacity: {{resolution_power}}\n5. **Recovery Step** — One unexpected extra gesture that turns frustration into loyalty\n6. **Prevention Promise** — How to close by explaining what will be done differently\n7. **Documentation Note** — What to record internally for quality management\n\nTone: warm, accountable, solution-focused. Zero corporate-speak.`,
            chain_1: `A {{complainer}} has a complaint about: {{complaint}}. Before I respond, help me understand their emotional state. What are they actually feeling underneath the complaint? What do they REALLY want beyond the surface ask? What response would make them feel heard vs. dismissed?`,
            chain_2: `I need to write a response to a {{complainer}}'s complaint about {{complaint}}. What actually happened: {{what_happened}}. I will be responding via {{channel}}. Write me the opening 3 sentences of my response. These must: lead with empathy (not apology), validate their experience, and signal that I am taking this seriously. No corporate filler.`,
            chain_3: `The {{complainer}} complaint is about {{complaint}} and my resolution capacity is: {{resolution_power}}. Help me craft the resolution offer. How do I present {{resolution_power}} resolution in a way that feels generous and caring, not defensive or minimal? Include language for an unexpected extra gesture that could turn this situation around. Format this for {{channel}} delivery.`
        },
        job_application: {
            title: 'Apply for a Job Like a Pro',
            desc: 'Craft materials that get you to the interview stage',
            role_label: 'What role are you applying for?',
            role_ph: 'e.g. Senior Product Manager, Marketing Director, Data Analyst...',
            company_label: 'What company or type of company?',
            company_ph: 'e.g. Google, a fintech startup, a local NGO, a government agency...',
            application_stage_label: 'Where are you in the application process?',
            application_stage_cv_resume: 'Writing My CV / Resume',
            application_stage_cover_letter: 'Writing a Cover Letter',
            application_stage_interview_prep: 'Preparing for an Interview',
            application_stage_salary_nego: 'Negotiating a Salary Offer',
            background_label: 'Briefly describe your relevant background',
            background_ph: 'e.g. 5 years in B2B SaaS marketing, led 3 product launches, MBA from local university...',
            highlight_label: 'What aspect do you want to emphasize most?',
            highlight_achievements: 'Past Achievements & Results',
            highlight_skills: 'Technical Skills & Expertise',
            highlight_culture_fit: 'Culture Fit & Soft Skills',
            highlight_growth: 'Growth Potential & Learning Agility',
            highlight_salary: 'Salary Negotiation',
            concern_label: 'What worries you most about this application?',
            concern_ph: 'e.g. I have a 2-year gap, I am changing industries, I am overqualified, no degree...',
            template_quick: `Help me apply for a {{role}} position at {{company}}. My background: {{background}}. Current stage: {{application_stage}}. I want to emphasize: {{highlight}}. My biggest concern about this application: {{concern}}. Write a compelling cover letter opening (3 paragraphs) and suggest 5 bullet points for my resume that would stand out for this specific role and company type.`,
            template_full: `Act as a senior career coach and executive recruiter who has reviewed thousands of applications for {{role}}-type positions.\n\nI am applying for: {{role}} at {{company}}\nMy background: {{background}}\nKey emphasis: {{highlight}}\nApplication stage: {{application_stage}}\nBiggest concern: {{concern}}\n\nCreate a complete application strategy:\n\n1. **Application Angle** — The unique narrative that differentiates me for this role at this company\n2. **Cover Letter** — Full 3-paragraph cover letter that hooks the reader immediately\n3. **Resume Headlines** — 5-7 achievement-based bullet points tailored to {{role}} requirements\n4. **Skills Matrix** — How to present my background to highlight {{highlight}}\n5. **Research Checklist** — 5 things to learn about {{company}} before applying or interviewing\n6. **ATS Optimization** — Key terms likely used in the job posting that should appear in my materials\n7. **Weak Spots** — Based on my background, what gaps might the hiring manager see, and how to address them proactively\n8. **First-Week Vision** — A 30-60-90 day plan outline to include in the cover letter or interview\n\nTone: ambitious, specific, confident without being arrogant.`,
            chain_1: `I am applying for {{role}} at {{company}}. My background: {{background}}. I am currently at the {{application_stage}} stage. Before I write anything, help me find my competitive angle. Based on what companies like {{company}} typically look for in {{role}} candidates, what 3 aspects of my background should I lead with? What should I de-emphasize? My biggest concern is: {{concern}}. How should I address or reframe this?`,
            chain_2: `Write a 3-paragraph cover letter for {{role}} at {{company}}. I am at the {{application_stage}} stage. Paragraph 1: Hook — start with the impact I want to have, not "I am applying for...". Paragraph 2: Evidence — use my background ({{background}}) to show I can deliver what they need. Paragraph 3: Close — express genuine interest in {{company}} specifically and ask for the conversation. Keep it under 300 words.`,
            chain_3: `Focus on the {{application_stage}} stage. I am in the final stage of applying for {{role}} at {{company}}. I want to emphasize {{highlight}}. Help me prepare 5 powerful talking points for the interview that directly address this emphasis. For each: the point, a specific example from my background ({{background}}), and a closing statement that ties it back to what {{company}} needs. My biggest concern about this application is: {{concern}}. Help me address this proactively in my talking points.`
        },
        team_conflict: {
            title: 'Resolve a Team Conflict',
            desc: 'Mediate disputes and rebuild productive working relationships',
            conflict_type_label: 'What type of conflict is this?',
            conflict_type_values: 'Values / Ethics Clash',
            conflict_type_workstyle: 'Work Style Difference',
            conflict_type_resources: 'Resources / Ownership Dispute',
            conflict_type_personality: 'Personality Friction',
            conflict_type_performance: 'Performance Concern',
            conflict_duration_label: 'How long has this conflict been going on?',
            conflict_duration_just_started: 'Just Started — Days',
            conflict_duration_few_weeks: 'A Few Weeks',
            conflict_duration_months: 'Several Months',
            conflict_duration_long_standing: 'Long-Standing — Over a Year',
            parties_label: 'Who are the parties involved?',
            parties_ph: 'e.g. Two senior developers, a project manager and a designer...',
            core_issue_label: 'What is the core issue creating the conflict?',
            core_issue_ph: 'e.g. One person keeps overriding the other\'s decisions, credit not given...',
            your_role_label: 'What is your role in this situation?',
            your_role_manager: 'Manager / Team Lead (I have authority)',
            your_role_peer: 'Peer (Same level as both)',
            your_role_stakeholder: 'Stakeholder (I am affected by this)',
            your_role_hr: 'HR / People Ops',
            template_quick: `Help me resolve a {{conflict_type}} conflict between {{parties}}. The core issue: {{core_issue}}. Duration: {{conflict_duration}}. My role: {{your_role}}. Provide: 1) How to approach both parties before a joint meeting, 2) A structured mediation agenda, 3) Language to use that stays neutral and solution-focused, 4) A clear resolution framework.`,
            template_full: `Act as an organizational psychologist and senior HR mediator with expertise in workplace conflict resolution.\n\nConflict type: {{conflict_type}}\nParties involved: {{parties}}\nCore issue: {{core_issue}}\nMy role: {{your_role}}\nConflict duration: {{conflict_duration}}\n\nProvide a complete conflict resolution playbook:\n\n1. **Root Cause Analysis** — What is likely driving this {{conflict_type}} conflict beneath the surface?\n2. **Individual Prep Sessions** — Key questions to ask each party separately before any joint meeting\n3. **Mediation Meeting Structure** — A step-by-step agenda with timing for a 60-minute resolution session\n4. **Neutral Language Guide** — Phrases that de-escalate and reframe (and phrases to absolutely avoid)\n5. **Common Ground Map** — How to identify shared interests beneath opposing positions\n6. **Agreement Framework** — What a sustainable resolution looks like and how to formalize it\n7. **Monitoring Plan** — How to track whether the resolution is holding over 30 days\n8. **Escalation Criteria** — When to involve more senior leadership or formal HR process\n\nConsider my authority level as {{your_role}} throughout.`,
            chain_1: `There is a {{conflict_type}} conflict between {{parties}} about: {{core_issue}}. This conflict has been going on: {{conflict_duration}}. Before I intervene as {{your_role}}, help me map the conflict. What are the likely underlying needs of each side (not their stated positions)? What dynamics of a {{conflict_type}} conflict should I be aware of? What are my biggest risks as {{your_role}} in this situation?`,
            chain_2: `The conflict has lasted: {{conflict_duration}}. I need to have separate conversations with each party in the {{conflict_type}} conflict before bringing them together. As {{your_role}}, write me 5 questions I should ask each person individually. These must: feel like genuine curiosity not interrogation, surface their real concerns, and help me understand what "resolution" means to them personally.`,
            chain_3: `I am now facilitating the joint resolution meeting between {{parties}}. The core issue is: {{core_issue}}. Using my role as {{your_role}}, write me the opening statement I will deliver at the start of this meeting. It must: set a neutral safe tone, state the purpose clearly, establish ground rules, and signal that we are here to build forward — not relitigate the past.`
        },
        negotiation: {
            title: 'Prepare for a Negotiation',
            desc: 'Enter any negotiation with strategy, confidence, and a path to win-win',
            neg_type_label: 'What type of negotiation is this?',
            neg_type_salary: 'Salary / Compensation',
            neg_type_contract: 'Contract / Agreement Terms',
            neg_type_partnership: 'Partnership / Collaboration Deal',
            neg_type_resources: 'Internal Resources / Budget',
            neg_type_vendor: 'Vendor / Supplier Negotiation',
            relationship_label: 'What is your relationship with the other party?',
            relationship_new_contact: 'New Relationship — First Negotiation',
            relationship_ongoing: 'Ongoing Partner / Vendor',
            relationship_internal: 'Internal Colleague / Same Organization',
            relationship_difficult: 'Difficult History — Past Conflicts',
            want_label: 'What is your ideal outcome?',
            want_ph: 'e.g. €5,000 more per year, 60-day payment terms, dedicated team of 3...',
            leverage_label: 'What leverage or strengths do you have?',
            leverage_ph: 'e.g. Competing offer, strong track record, unique skills, urgency on their side...',
            bottom_line_label: 'What is your minimum acceptable outcome?',
            bottom_line_ph: 'e.g. €3,000 minimum, net 45 days, at least 2 team members...',
            their_goal_label: 'What do you think the other side wants most?',
            their_goal_ph: 'e.g. Lock in a long-term contract, reduce upfront cost, avoid legal risk...',
            deadline_label: 'Is there a deadline or time pressure on this negotiation?',
            deadline_ph: 'e.g. Contract expires end of month, budget closes Friday, no urgency...',
            template_quick: `Prepare me for a {{neg_type}} negotiation. Relationship context: {{relationship}}. What I want: {{what_you_want}}. My leverage: {{leverage}}. My minimum: {{bottom_line}}. Their likely goal: {{their_goal}}. Deadline/urgency: {{deadline}}. Give me: 1) Opening position and framing, 2) Anchoring strategy, 3) How to handle their counteroffer, 4) When and how to make concessions, 5) Closing language.`,
            template_full: `Act as a master negotiator and strategic advisor with experience in high-stakes {{neg_type}} negotiations.\n\nNegotiation type: {{neg_type}}\nTarget outcome: {{what_you_want}}\nMy leverage and strengths: {{leverage}}\nMinimum acceptable: {{bottom_line}}\nTheir likely goal: {{their_goal}}\nDeadline / time pressure: {{deadline}}\nRelationship with other party: {{relationship}}\n\nBuild me a complete negotiation strategy:\n\n1. **BATNA Analysis** — My best alternative if this negotiation fails (and theirs)\n2. **Zone of Possible Agreement** — The realistic range based on my target ({{what_you_want}}) and minimum ({{bottom_line}})\n3. **Opening Move** — How to anchor the negotiation in my favor from the first sentence\n4. **Leverage Activation** — How to use {{leverage}} at the right moment without overplaying it\n5. **Concession Strategy** — What to give up, in what order, and what to ask for in return\n6. **Pressure Tactics Defense** — The 3 most common pressure moves in {{neg_type}} negotiations and how to counter them\n7. **Win-Win Frame** — Language that makes them feel they are winning while I achieve {{what_you_want}}\n8. **Closing Sequence** — How to recognize the right moment and seal the agreement\n\nPsychology-informed. Practical. Specific to {{neg_type}}.`,
            chain_1: `I am entering a {{neg_type}} negotiation. My goal: {{what_you_want}}. My relationship with them: {{relationship}}. Before I say a word, help me with intelligence gathering. What information should I know about the other side before this negotiation? What are their likely constraints, pressures, and what would they consider a win? I believe their goal is: {{their_goal}}. Validate or challenge this assumption — what am I likely missing? How does my leverage ({{leverage}}) compare to what they likely have?`,
            chain_2: `My negotiation target is {{what_you_want}} and my minimum is {{bottom_line}}. I have leverage: {{leverage}}. The deadline is: {{deadline}}. Given our relationship ({{relationship}}), write me the exact opening statement for this {{neg_type}} negotiation — the first 2-3 sentences I will say. This must anchor high (or at my target), sound confident not desperate, and invite a collaborative tone not a combative one.`,
            chain_3: `Given our relationship ({{relationship}}), the other party has countered well below my target of {{what_you_want}}, close to my minimum of {{bottom_line}}. My leverage is {{leverage}}. This is a {{neg_type}} negotiation. Their goal appears to be {{their_goal}} and the deadline is {{deadline}}. Give me a strategic response sequence: 1) How to react in the moment (first words), 2) The counter-offer I should make, 3) The exact language to present it, 4) How to use my leverage now without seeming aggressive.`
        },
        daily_planning: {
            title: 'Build Your Perfect Day Plan',
            desc: 'Transform your to-do list into a strategic, executable daily plan',
            top_goal_label: 'What is your single most important goal for today?',
            top_goal_ph: 'e.g. Finish the client presentation, close 2 deals, complete the code review...',
            constraints_label: 'What time or energy constraints do you have?',
            constraints_ph: 'e.g. 3 meetings already scheduled, low energy mornings, only 4 focused hours available...',
            blockers_label: 'What known blockers or risks could derail your day?',
            blockers_ph: 'e.g. Waiting for approval, team member unavailable, unclear requirements...',
            tasks_label: 'List your top 3–5 tasks for today (beyond the main goal)',
            tasks_ph: 'e.g. Reply to client emails, review the budget, team standup at 10am, finish the report draft...',
            role_label: 'What is your role or professional context?',
            role_ph: 'e.g. Marketing manager, freelancer, student, startup founder, project manager...',
            work_style_label: 'What type of day is this?',
            work_style_deep_work: 'Deep Work Day (focus and create)',
            work_style_meetings_heavy: 'Meetings Heavy (lots of calls)',
            work_style_mixed: 'Mixed (both focus and meetings)',
            work_style_crisis_mode: 'Crisis Mode (reactive and urgent)',
            energy_level_label: 'How is your energy and focus right now?',
            energy_level_high: 'High — Sharp and Ready to Go',
            energy_level_medium: 'Medium — Getting Warmed Up',
            energy_level_low: 'Low — Struggling to Focus',
            energy_level_variable: 'Variable — Unpredictable Today',
            template_quick: `Help me build an optimal day plan. My number one goal: {{top_goal}}. My role: {{role}}. Today's tasks: {{tasks}}. Constraints: {{constraints}}. Known blockers: {{blockers}}. Day type: {{work_style}}. My current energy level: {{energy_level}}. Create a time-blocked schedule that prioritizes my most important goal, accounts for my constraints, and includes buffer time for the unexpected.`,
            template_full: `Act as a world-class executive productivity coach and strategic planner.\n\nHelp me design the optimal execution plan for today.\n\nTop priority goal: {{top_goal}}\nMy role / context: {{role}}\nOther tasks for today: {{tasks}}\nToday's type: {{work_style}}\nTime and energy constraints: {{constraints}}\nKnown blockers: {{blockers}}\nEnergy level: {{energy_level}}\n\nBuild a complete daily operating plan:\n\n1. **Day Architecture** — The optimal structure for a {{work_style}} day, hour by hour\n2. **Priority Protection** — How to ensure {{top_goal}} gets done no matter what (time block, dependency removal, focus ritual)\n3. **Constraint Navigation** — Specific strategies for working within {{constraints}}\n4. **Blocker Removal Plan** — A pre-emptive action for each blocker in {{blockers}}\n5. **Energy Management** — When to do deep work vs. communication vs. admin based on a {{work_style}} day\n6. **Decision Filter** — A simple question to use when interruptions come: "Does this serve {{top_goal}} today?"\n7. **End-of-Day Review** — A 10-minute close-out ritual to capture learnings and prep tomorrow\n8. **Contingency Plan** — If the day goes off the rails, what is the minimum viable win?\n\nMake it specific, actionable, and realistic for someone in {{work_style}} mode.`,
            chain_1: `Today I need to: {{top_goal}}. My day is {{work_style}} with these constraints: {{constraints}}. My role is: {{role}}. My full task list: {{tasks}}. My energy level right now: {{energy_level}}. Before I open a single app or email, help me with a 5-minute mental clarity exercise. What are the 3 most important questions I should answer right now to make sure I am working on the right things in the right order?`,
            chain_2: `I need to protect time for my number one goal: {{top_goal}} in a {{work_style}} day. My constraints: {{constraints}}. Full task list: {{tasks}}. Role: {{role}}. My energy is currently: {{energy_level}}. Design a specific time-blocking system for today. Give me the exact schedule blocks, the transitions between them, and the rule I should follow when something tries to take over my most important block.`,
            chain_3: `It is now 3pm. My goal was {{top_goal}} and I have blockers: {{blockers}}. The day has not gone as planned. Give me a realistic damage control and recovery plan for the rest of the day. What can I still realistically accomplish? How do I close the day without feeling like a failure, and what is the single most important thing to do in the next 2 hours?`
        }
    },
    assessments: {
        general: {
            name: 'General AI Readiness',
            description: 'For any organization starting or scaling their AI journey across all sectors'
        },
        healthcare: {
            name: 'Healthcare & Clinical Services',
            description: 'For hospitals, clinics, and care providers scaling AI safely in patient-facing and operational workflows'
        },
        education: {
            name: 'Education & Learning Institutions',
            description: 'For schools, universities, and academies adopting AI in teaching, operations, and learner support'
        },
        finance: {
            name: 'Financial Services & Fintech',
            description: 'For banks, insurers, and fintech teams deploying AI in risk, operations, and customer workflows'
        },
        recruitment: {
            name: 'Recruitment & Talent Acquisition',
            description: 'For HR and hiring teams adopting AI in sourcing, screening, and candidate operations'
        },
        municipality: {
            name: 'Municipality & Public Sector',
            description: 'Tailored for local government, public agencies and municipal service providers',
            citizen_data: {
                label: 'Citizen Data & Digital Services',
                what_is: 'How your municipality manages citizen data and delivers digital services determines what AI can realistically do for you. AI for public services is built on the quality of your registers, records, and e-service infrastructure.',
                context: 'Public sector AI depends on trustworthy citizen data and functional digital infrastructure. This section checks whether your data and service foundation is AI-ready — before you consider tools.',
                cd1: {
                    text: 'How is citizen and service data currently stored and managed?',
                    hint: 'Why it matters: AI needs structured, accessible records. Paper-based or siloed citizen data makes AI impossible to deploy reliably.',
                    opt_0: 'Primarily paper-based or in disconnected local spreadsheets — no central system',
                    opt_25: 'Some digital records exist but are department-by-department with no shared access',
                    opt_50: 'Core registries (citizens, permits, payments) are digital but not well integrated',
                    opt_75: 'Integrated municipal information system with most services tracked digitally',
                    opt_100: 'Unified digital platform with structured data, APIs, and clear data ownership across all services'
                },
                cd2: {
                    text: 'What digital services does your municipality currently offer to citizens?',
                    hint: 'Why it matters: AI augments existing digital processes. Municipalities with no e-services have no foundation for AI-assisted service delivery.',
                    opt_0: 'All services require in-person visits — no digital channel exists',
                    opt_25: 'A basic website with information but forms still require physical presence',
                    opt_50: 'Some services available online (forms, payments) but processes still largely manual',
                    opt_75: 'Most common services accessible online with digital workflows and tracking',
                    opt_100: 'Fully integrated e-government portal — citizens can complete end-to-end services digitally'
                },
                cd3: {
                    text: 'How would you describe the IT infrastructure supporting your municipal operations?',
                    hint: 'Why it matters: Modern AI tools require cloud-compatible, maintained infrastructure. Legacy municipal IT is the single biggest blocker for AI adoption in the public sector.',
                    opt_0: 'Aging on-premise servers, unsupported software, no IT maintenance plan',
                    opt_25: 'Old infrastructure being maintained but no migration or modernization plan in place',
                    opt_50: 'Core systems modernized, some cloud tools adopted for email and file storage',
                    opt_75: 'Primarily cloud-based with modern software and a maintained IT roadmap',
                    opt_100: 'Cloud-first infrastructure with integrated systems, security controls, and IT governance'
                },
                cd4: {
                    text: 'How reliable and complete is your citizen and operational data?',
                    hint: 'Why it matters: Incomplete citizen registers or inconsistent service records produce AI outputs that are wrong — and in public services, wrong AI outputs erode citizen trust fast.',
                    opt_0: 'Significant gaps and inconsistencies — data is frequently missing or out of date',
                    opt_25: 'Partial data quality — some registers reliable, others frequently incomplete',
                    opt_50: 'Core registers reasonably up-to-date but quality varies across departments',
                    opt_75: 'Most data is reliable with regular update processes and basic quality checks',
                    opt_100: 'High data quality with validation processes, clear update responsibilities, and audit trails'
                },
                not_ready: {
                    situation: 'Your digital foundation is not yet ready to support AI in citizen services. Paper-based records and disconnected systems mean any AI deployed now will produce unreliable results — damaging citizen trust rather than building it.',
                    strengths: [
                        'Building digital infrastructure now means you can design it AI-ready from the start',
                        'EU digital government funds and grants are available for municipalities at exactly this stage'
                    ],
                    gaps: [
                        'Paper-based or siloed records cannot be ingested by AI systems reliably',
                        'Without digital service channels, AI has no interface to improve or automate',
                        'Legacy infrastructure creates security risks and integration barriers for any modern tool'
                    ],
                    actions: [
                        { action: 'Map every citizen-facing service and its current data trail', why: 'You cannot digitize or improve what you have not mapped. A service inventory reveals which processes have usable data and which need digitization first.', start: 'Assign one person to list all municipal services, their current channel (in-person/phone/online), and where the resulting data is stored' },
                        { action: 'Prioritize one high-volume service for digitization', why: 'One fully digital service creates a replicable model, demonstrates value to leadership, and produces the structured data AI needs to operate.', start: 'Pick your most requested service (permits, payments, certificates) and digitize the intake form and tracking this quarter' },
                        { action: 'Audit your citizen register for completeness and accuracy', why: 'AI systems for public services are only as good as the underlying citizen data. A clean register is the prerequisite for every AI use case in local government.', start: 'Run a completeness check on your citizen register — identify the top 5 missing or inconsistent fields and assign owners to fix them' }
                    ]
                },
                foundation: {
                    situation: 'You have the beginning of a digital foundation but it is fragmented. Some AI use cases are possible in isolated areas, but the lack of integration between systems limits scope and scale significantly.',
                    strengths: [
                        'Digital records exist in some departments — a starting point for AI projects',
                        'Some e-services are in place, creating data trails AI can learn from'
                    ],
                    gaps: [
                        'System silos mean AI cannot see across service areas — limiting what cross-departmental insights are possible',
                        'Inconsistent data quality across departments produces uneven AI performance',
                        'Paper fallbacks in some areas create data gaps that undermine AI reliability'
                    ],
                    actions: [
                        { action: 'Create a municipal data integration plan', why: 'Connecting your existing digital systems multiplies the value of AI. Even basic integration between citizen registry and permits system opens new automation possibilities.', start: 'List your top 3 digital systems and identify one shared data point between them — start with a simple data export/import sync' },
                        { action: 'Standardize data formats across your key registers', why: 'AI cannot learn from data it cannot interpret. Consistent formats for names, addresses, and IDs are prerequisite for reliable AI performance across departments.', start: 'Define a municipal data standard for the 10 most-used fields (name, address, ID number, service type) and apply it to your 2 most-used registers' },
                        { action: 'Deploy one AI-assisted service pilot', why: 'A working pilot proves the value of AI to leadership and citizens, and surfaces practical barriers before a larger rollout.', start: 'Identify one service with consistent digital data — e.g. document status inquiries — and trial an AI chatbot or automated response system for 60 days' }
                    ]
                },
                emerging: {
                    situation: 'Your digital infrastructure is solid and AI is starting to deliver real value in targeted areas. The challenge now is expanding AI systematically across services while managing citizen data responsibly.',
                    strengths: [
                        'Integrated digital systems give AI reliable, cross-departmental data to work with',
                        'Existing e-services provide AI deployment channels that citizens are already using',
                        'Cloud infrastructure reduces technical barriers for deploying modern AI tools'
                    ],
                    gaps: [
                        'Data governance for citizen data — who can use it, for what, with what safeguards — likely needs formalizing',
                        'Some legacy departments or services may still operate with data quality too low for AI',
                        'Cross-system AI workflows require API connectivity that may not yet exist between all key systems'
                    ],
                    actions: [
                        { action: 'Establish a citizen data governance policy', why: 'As AI uses more citizen data, you need clear rules on what data can be used for what AI purpose — GDPR requires it and citizens expect it from public institutions.', start: 'Draft a one-page citizen data use policy: what data AI can access, for which services, with which safeguards, and how citizens are informed' },
                        { action: 'Build an AI service roadmap for the next 12 months', why: 'Systematic AI adoption requires planning — which services get AI when, who is responsible, what data each needs, and how success is measured.', start: 'Map your 5 highest-volume citizen services and assess each for AI readiness: data quality, digital channel, staff capacity, and citizen impact' },
                        { action: 'Measure and publish AI service outcomes', why: 'Citizen trust in AI-assisted public services depends on demonstrated outcomes. Publishing results creates accountability and builds the case for continued investment.', start: 'Define one metric per AI-assisted service (response time, resolution rate, citizen satisfaction) and start tracking it in your next reporting cycle' }
                    ]
                },
                advanced: {
                    situation: 'Your digital infrastructure and data quality are strong enough to support sophisticated AI applications across multiple service areas. The focus is now on governance depth, citizen trust, and staying ahead of AI regulation in the public sector.',
                    strengths: [
                        'Integrated, high-quality citizen data enables reliable AI across service domains',
                        'Digital service channels provide deployment infrastructure for AI-assisted citizen interactions at scale',
                        'Cloud-native infrastructure enables rapid piloting and scaling of new AI capabilities'
                    ],
                    gaps: [
                        'EU AI Act public sector requirements — particularly for high-risk AI — require assessment and documentation your governance may not yet cover',
                        'AI explainability for citizen-facing decisions (benefits, permits, fines) is a legal and reputational necessity not yet addressed by most municipal AI deployments',
                        'Real-time data integration may be needed for advanced use cases like predictive maintenance or dynamic service routing'
                    ],
                    actions: [
                        { action: 'Assess your AI systems against EU AI Act public sector obligations', why: 'Municipal AI systems touching benefits, permits, or enforcement may be classified as high-risk under the EU AI Act — triggering mandatory documentation, human oversight, and transparency requirements.', start: 'List every AI tool in use, categorize each by risk level using the EU AI Act guidance, and identify which require conformity documentation' },
                        { action: 'Implement citizen-facing AI transparency notices', why: 'Citizens have the right to know when AI influences decisions about their services. Transparency is both a legal requirement and a trust-building measure for public institutions.', start: 'For each AI-assisted service, draft a plain-language notice explaining what AI does, what data it uses, and how citizens can request human review' },
                        { action: 'Develop a predictive analytics capability for service demand', why: 'Advanced municipalities use AI to anticipate demand — predicting permit volumes, maintenance needs, or seasonal service spikes — enabling proactive rather than reactive service delivery.', start: 'Identify your most cyclical service (e.g. building permits, park maintenance) and pull 3 years of historical data to build a baseline demand model' }
                    ]
                }
            },
            staff_leadership: {
                label: 'Staff Capacity & Leadership',
                what_is: "Whether a municipality succeeds with AI depends almost entirely on whether its leadership understands it and its staff can use it. Technical tools without human capacity don't transform services — they just create expensive problems.",
                context: "Municipal AI adoption is blocked by people more often than technology. This section checks whether your leadership and staff have the awareness, skills, and organizational commitment needed to make AI work in a public sector context.",
                sl1: {
                    text: 'How aware is your senior leadership (mayor, council, directors) of AI opportunities and risks for the municipality?',
                    hint: 'Why it matters: Without leadership understanding AI, budgets never get approved, risks never get managed, and projects die mid-implementation.',
                    opt_0: 'AI has not been discussed at leadership level — seen as irrelevant or a private sector topic',
                    opt_25: 'Leadership has heard of AI but has no position on it and no budget allocated',
                    opt_50: 'Some leaders are interested but there is no formal strategy or coordination',
                    opt_75: 'Leadership has approved AI exploration with some budget and assigned ownership',
                    opt_100: 'AI is a formal municipal strategy priority with dedicated budget, a named lead, and council endorsement'
                },
                sl2: {
                    text: 'What is the general digital and AI literacy level of your municipal staff?',
                    hint: 'Why it matters: Staff who distrust or misunderstand AI will avoid using it correctly — or worse, over-rely on it without the judgment to catch its errors.',
                    opt_0: 'Most staff are not comfortable with digital tools and have no awareness of AI',
                    opt_25: 'Basic digital literacy exists but AI tools are unknown or seen as threatening',
                    opt_50: 'Some staff use AI tools informally — awareness varies widely by department',
                    opt_75: 'Growing AI literacy across departments — staff are curious and some are experimenting',
                    opt_100: 'Strong digital and AI literacy — staff use AI tools as part of their regular workflow'
                },
                sl3: {
                    text: 'Does your municipality have technical staff or dedicated capacity for digital and AI projects?',
                    hint: 'Why it matters: Without someone accountable for AI implementation and maintenance, projects stall, tools break, and no one notices until a citizen complaint.',
                    opt_0: 'No dedicated IT staff — technology is handled reactively by non-specialists',
                    opt_25: 'One or two IT generalists maintain systems but have no capacity for new projects',
                    opt_50: 'An IT team exists but has no specific digital transformation or AI mandate',
                    opt_75: 'IT team with some capacity for new projects and a digital transformation plan',
                    opt_100: 'Dedicated digital transformation team or a named AI/digital officer with project capacity'
                },
                sl4: {
                    text: 'How does your municipality approach training and upskilling staff on digital tools?',
                    hint: 'Why it matters: Municipalities that invest in staff digital literacy see faster AI adoption and fewer costly misuse incidents.',
                    opt_0: 'No formal training — staff learn tools on their own or not at all',
                    opt_25: 'Occasional training when a specific system is introduced, then nothing',
                    opt_50: 'Some training is available but participation is optional and unstructured',
                    opt_75: 'Training program covers digital tools for relevant roles with regular updates',
                    opt_100: 'Structured digital and AI literacy program for all staff, integrated into onboarding and annual development'
                },
                not_ready: {
                    situation: 'Your organization lacks the leadership commitment and staff capacity to adopt AI responsibly. Without a mandate from leadership and baseline digital literacy across staff, AI tools will either sit unused or be misused in ways that damage citizen trust.',
                    strengths: [
                        'Starting without bad AI habits means you can establish good practices from the beginning',
                        'EU and national digital government programs offer training and capacity-building support for municipalities at this stage'
                    ],
                    gaps: [
                        'No leadership mandate means no budget, no ownership, and no accountability for outcomes',
                        'Staff digital literacy gaps will cause resistance to and misuse of any AI tool introduced',
                        'No technical capacity means AI projects will depend entirely on vendors — a costly and risky position'
                    ],
                    actions: [
                        { action: 'Run an AI awareness session for the mayor and council', why: 'Leadership cannot support what they do not understand. A 90-minute session on AI basics, public sector use cases, and key risks is the single highest-return investment at this stage.', start: 'Book a 90-minute session with an external AI facilitator or use free government digital literacy resources — brief council before the next budget cycle' },
                        { action: 'Identify one digital champion in each department', why: 'Peer-to-peer digital adoption is faster and more durable than top-down mandates. Champions translate digital tools into the language of their colleagues.', start: 'Ask each department head to nominate one curious, tech-comfortable staff member as their digital champion this month' },
                        { action: 'Run a 30-day AI tool pilot with one willing team', why: 'Real experience with a safe, low-stakes AI tool builds literacy and confidence far faster than training alone — and produces advocates inside the organization.', start: 'Pick one team with a repetitive writing or data task (reports, correspondence, data entry) and trial a free AI tool for 30 days with a simple before/after comparison' }
                    ]
                },
                foundation: {
                    situation: 'There is growing awareness of AI at leadership level and some staff enthusiasm, but it has not translated into organized capability. Without structure, enthusiasm fades and early adopters burn out.',
                    strengths: [
                        'Leadership awareness is sufficient to start the strategy conversation',
                        'Pockets of staff enthusiasm provide ready champions for structured programs'
                    ],
                    gaps: [
                        'Without a formal AI strategy, enthusiasm is not channeled into results',
                        'Inconsistent literacy creates two-speed adoption — digital champions leave colleagues behind',
                        'No dedicated technical capacity means AI projects depend on individuals, not systems'
                    ],
                    actions: [
                        { action: 'Develop a 12-month municipal AI action plan', why: 'An action plan converts leadership awareness into accountable commitments — specific projects, owners, budgets, and success measures for the next year.', start: 'Draft a one-page action plan: 3 AI pilots to test, who leads each, what data each needs, and how success is measured — present to council this quarter' },
                        { action: 'Create a basic AI literacy training program for all staff', why: 'A consistent baseline ensures all staff understand what AI is, what it cannot do, and how to use it responsibly — regardless of department or seniority.', start: 'Select a free 2-hour AI literacy course (Microsoft AI Skills, Google AI Essentials) and require completion for all staff within 3 months' },
                        { action: 'Hire or designate a municipal digital transformation lead', why: 'AI projects without a named owner do not get completed. A digital lead coordinates across departments, manages vendors, and keeps projects on track.', start: 'Assess whether an existing IT or project management role can be adapted, or prepare a job description for a digital officer role' }
                    ]
                },
                emerging: {
                    situation: 'Real AI capability is developing — leadership is committed, staff literacy is growing, and some projects are delivering results. The challenge is scaling this from individuals and teams to a municipal-wide capability.',
                    strengths: [
                        'Leadership commitment enables budget allocation and removes organizational blockers',
                        'Growing staff literacy means AI adoption accelerates as teams share learnings and best practices',
                        'Digital champions network provides a scalable peer-learning infrastructure'
                    ],
                    gaps: [
                        'Middle management often lags behind both leadership vision and ground-level enthusiasm — buy-in at this level is critical for scaling',
                        'Technical capacity may need expansion as AI project scope grows beyond initial pilots',
                        'Staff need structured learning pathways to grow beyond basic AI literacy into role-specific AI capability'
                    ],
                    actions: [
                        { action: 'Develop role-specific AI training tracks for key municipal roles', why: 'Generic AI literacy is necessary but not sufficient. Finance officers, urban planners, and social workers need AI training relevant to their specific responsibilities and risks.', start: 'Map the 5 most common municipal roles, identify the AI tools and tasks relevant to each, and create a 2-hour role-specific training module for each' },
                        { action: 'Establish a municipal AI steering committee', why: 'Cross-departmental AI needs cross-departmental coordination. A steering committee ensures projects align with municipal strategy, share resources, and avoid duplication.', start: 'Convene a monthly steering meeting with the digital lead, one representative from each department, and council sign-off on decisions' },
                        { action: 'Measure and report AI adoption outcomes to council', why: 'Regular reporting creates accountability, sustains council support, and demonstrates value to citizens — building the political will for continued investment.', start: 'Create a simple quarterly AI progress dashboard: projects underway, staff trained, services improved, costs saved — present at every council session' }
                    ]
                },
                advanced: {
                    situation: 'Your leadership and staff capacity is strong. AI is embedded in how the municipality operates, not just piloted in isolated projects. The focus now is sustaining this culture, managing the frontier risks, and developing the specialized expertise needed for advanced public sector AI.',
                    strengths: [
                        'Council and executive-level AI understanding enables strategic, risk-aware investment decisions',
                        'Organization-wide digital literacy enables rapid adoption of new AI tools as they emerge',
                        'Dedicated technical capacity provides the foundation for sophisticated AI projects and responsible vendor management'
                    ],
                    gaps: [
                        'Specialized public sector AI expertise — for predictive analytics, algorithmic decision-making, and AI governance — is genuinely scarce and hard to hire',
                        'Sustaining an innovation culture in a public sector context requires institutional structures beyond individual champions',
                        'Ethical AI leadership — ensuring AI decisions are fair, transparent, and contestable — requires dedicated roles and processes that most municipalities have not yet built'
                    ],
                    actions: [
                        { action: 'Establish a municipal Responsible AI function', why: 'At advanced AI maturity, governance, fairness, and explainability are not optional — they are legal requirements under the EU AI Act and ethical obligations to citizens.', start: "Appoint a Responsible AI officer (or expand an existing role) and draft the municipality's AI principles: what AI can and cannot decide, how citizens are informed, and how decisions can be contested" },
                        { action: 'Build partnerships with universities and regional AI programs', why: 'Access to specialized AI expertise and research supports advanced use cases — predictive maintenance, demand forecasting, natural language services — that internal capacity alone cannot deliver.', start: 'Identify 2 universities or regional AI programs with public sector expertise and explore a collaborative research or internship program' },
                        { action: 'Create a structured municipal AI innovation process', why: "Sustaining AI innovation in the public sector requires a repeatable way to source ideas from staff, evaluate them for impact and risk, fund pilots, and scale what works — without depending on individual champions.", start: 'Launch an annual internal AI innovation call: staff submit ideas, a review panel selects 3 pilots, each gets a small budget and a 6-month window to prove value' }
                    ]
                }
            },
            legal_governance: {
                label: 'Legal, Procurement & Governance',
                what_is: 'Public sector AI is held to a higher standard than private sector AI — because its outputs affect citizens who have no alternative provider. Legal compliance, procurement integrity, and governance maturity determine whether your municipality can deploy AI safely and defend that deployment to citizens, councils, and regulators.',
                context: 'The public sector operates under strict legal obligations that shape what AI can do, how it must be governed, and what procurement process it must go through. This section checks whether your governance is ready for AI — not just in theory, but in practice.',
                lg1: {
                    text: 'How well-documented and standardized are your core municipal service processes?',
                    hint: 'Why it matters: AI improves documented processes. Undocumented processes produce unpredictable AI behaviour — and in public services, unpredictability means citizen complaints and legal risk.',
                    opt_0: "Most processes exist only in experienced staff's knowledge — no written documentation",
                    opt_25: 'Some processes documented but inconsistently — quality varies by department and staff member',
                    opt_50: 'Core service processes documented and used for onboarding, though often outdated',
                    opt_75: 'Most processes documented, reviewed annually, and accessible to all relevant staff',
                    opt_100: 'Processes fully documented, regularly updated, version-controlled, and used for continuous improvement'
                },
                lg2: {
                    text: "How mature is your municipality's data protection and GDPR compliance?",
                    hint: 'Why it matters: Municipal AI systems almost always process personal citizen data. GDPR non-compliance combined with AI is not just a legal risk — it is a citizen trust crisis waiting to happen.',
                    opt_0: 'No formal data protection policies — GDPR compliance is not actively managed',
                    opt_25: 'Basic GDPR awareness exists but policies are not documented or enforced consistently',
                    opt_50: 'Standard GDPR policies in place, a DPO appointed, but AI-specific data rules not yet addressed',
                    opt_75: 'GDPR compliant with documented policies, regular staff training, and a functioning DPO',
                    opt_100: 'Mature GDPR framework including DPIAs for new AI systems, clear citizen rights processes, and AI-specific data governance rules'
                },
                lg3: {
                    text: 'How does your municipality procure and evaluate new technology solutions?',
                    hint: 'Why it matters: Public procurement rules exist for a reason — but they can slow AI adoption significantly. A structured process protects public money and ensures AI tools are evaluated for fit, not just price.',
                    opt_0: 'Ad hoc — tools adopted based on individual recommendations without formal evaluation',
                    opt_25: 'Basic procurement rules followed for large purchases but AI tools often bypass them',
                    opt_50: 'Procurement process exists and is generally followed, but lacks AI-specific evaluation criteria',
                    opt_75: 'Structured procurement with technical, legal, and cost evaluation — AI tools included in the process',
                    opt_100: 'Comprehensive procurement governance including AI-specific criteria: data use, GDPR compliance, explainability, vendor lock-in risk, and exit terms'
                },
                lg4: {
                    text: 'Does your municipality have policies specifically governing AI use by staff and in citizen services?',
                    hint: "Why it matters: Without AI-specific policies, staff don't know what they can use AI for, citizens don't know when AI is involved in decisions about them, and the municipality has no defense if something goes wrong.",
                    opt_0: 'No AI-specific policies — general IT rules are assumed to cover AI tools',
                    opt_25: 'AI use is informally restricted but there are no written policies or guidance',
                    opt_50: 'Basic AI acceptable use policy drafted but not communicated to staff or enforced',
                    opt_75: 'AI use policy in place, communicated to staff, covering acceptable tools and data rules',
                    opt_100: 'Comprehensive AI governance: staff use policy, citizen transparency notices, AI impact assessments for new systems, and a designated AI accountability owner'
                },
                not_ready: {
                    situation: 'Your governance and compliance foundation is not yet ready for AI. Deploying AI without documented processes, GDPR compliance, and basic AI policies creates significant legal risk and, more importantly, risks breaking citizen trust in your municipality.',
                    strengths: [
                        'Building governance from scratch for the AI era means you can design it right — without inheriting legacy frameworks not built for AI',
                        'Free GDPR templates, EU AI Act guidance, and public sector AI policy frameworks are widely available — you do not need to start from a blank page'
                    ],
                    gaps: [
                        'Undocumented service processes make AI behaviour unpredictable and ungovernable',
                        'GDPR non-compliance is a legal liability the moment any AI tool processes citizen data — even for internal use',
                        'Without AI-specific policies, staff are already using unapproved AI tools with citizen data — creating incidents you are not aware of'
                    ],
                    actions: [
                        { action: 'Document your 5 most important citizen-facing service processes', why: 'AI cannot improve a process it cannot understand. Documentation also reveals the real steps in service delivery — often different from how leadership thinks they work.', start: 'Pick your highest-volume service (permits, certificates, complaints) and write a step-by-step process description in 2 hours — bullet points are fine for a first draft' },
                        { action: 'Appoint or confirm a Data Protection Officer and document your GDPR baseline', why: 'A DPO is legally required for most municipalities under GDPR. Without one, your AI projects are illegal before they start.', start: 'Confirm your DPO appointment, run a data mapping exercise for your 3 most-used citizen data systems, and register all processing activities in a Record of Processing Activities' },
                        { action: 'Write a basic AI acceptable use policy for staff', why: "Without a policy, staff are using AI tools you have not approved, with data you have not assessed, for purposes you don't know about — and the municipality is liable.", start: 'Download a public sector AI policy template (available from EU, national government, or law firm sources) and adapt it for your municipality in a half-day workshop with IT and legal' }
                    ]
                },
                foundation: {
                    situation: 'Basic governance exists but it was not designed with AI in mind. As AI adoption accelerates, the gaps between your current policies and what AI requires will widen into significant risks.',
                    strengths: [
                        'GDPR baseline provides the data protection foundation AI governance builds on',
                        'Some process documentation exists — a starting point for systematic AI process review'
                    ],
                    gaps: [
                        'Existing policies do not address AI-specific risks: hallucination, automated decisions, data used for AI training, and vendor AI use of municipal data',
                        'Procurement processes lack AI-specific evaluation criteria — making it easy to select the wrong tool for the wrong reasons',
                        'Staff are likely using AI tools outside approved channels — creating shadow AI exposure the current governance does not cover'
                    ],
                    actions: [
                        { action: 'Conduct an AI shadow use audit', why: 'Staff are almost certainly using AI tools the municipality has not approved. An honest audit gives you the real picture of your exposure — not the assumed one.', start: 'Send a short anonymous survey: "Which AI tools do you use at work?" Emphasize no punishment — you need accurate data to protect the organization' },
                        { action: 'Add AI-specific criteria to your technology procurement checklist', why: 'General procurement criteria do not capture the unique risks of AI: data use by vendors, model training on municipal data, explainability of outputs, and exit terms.', start: 'Add 5 AI questions to every technology evaluation: Does it use our data to train models? Is it GDPR-compliant for public sector? Who is liable for incorrect outputs? What is the data retention policy? What are the exit terms?' },
                        { action: 'Update your GDPR documentation to cover AI processing activities', why: 'If AI processes citizen data, that processing must be documented in your Record of Processing Activities and assessed for necessity and proportionality under GDPR.', start: 'List every AI tool currently in use, identify what citizen data each processes, and add each to your Record of Processing Activities with a lawful basis documented' }
                    ]
                },
                emerging: {
                    situation: 'Your governance foundations are solid. Documented processes, GDPR compliance, and basic AI policies are in place. The challenge now is keeping governance ahead of rapid AI adoption — policies written for 2023 AI tools will not cover the AI tools of 2025.',
                    strengths: [
                        'Documented processes enable AI to be deployed into well-understood workflows — with predictable, auditable behaviour',
                        'GDPR compliance gives you a defensible position with regulators and citizen trust that AI outputs are handled responsibly',
                        'Structured procurement prevents vendor lock-in and ensures AI tools are evaluated for fit, not just marketed features'
                    ],
                    gaps: [
                        'AI governance is evolving faster than most public sector frameworks — your policies risk being outdated within 12 months of writing them',
                        'Citizen transparency — informing people when AI influences decisions about them — is not yet standard in most municipal AI deployments',
                        'Vendor AI governance — what your AI suppliers do with municipal data — is often completely unreviewed even in well-governed municipalities'
                    ],
                    actions: [
                        { action: 'Implement a DPIA process for every new AI system', why: 'A Data Protection Impact Assessment is legally required under GDPR for high-risk processing — which includes most AI systems that profile or make automated decisions about citizens.', start: 'Create a simple DPIA template for AI systems covering: purpose, data used, necessity, risks, mitigations, and DPO sign-off — require completion before any new AI system goes live' },
                        { action: 'Develop citizen transparency notices for AI-assisted services', why: 'Citizens have the right to know when AI influences decisions about them. Plain-language transparency is both a legal requirement and a trust-building measure for public institutions.', start: 'For each AI-assisted citizen service, draft a 2-sentence transparency notice: what AI does in this service, what data it uses, and who to contact for a human review' },
                        { action: 'Review AI vendor contracts for data governance terms', why: "Many municipalities discover their AI vendors have rights to use municipal citizen data for model training. Contract review prevents this — and demonstrates to citizens that you protect their data even from your own suppliers.", start: "Pull contracts for your top 3 AI tools and review: data use terms, model training clauses, data residency, retention periods, and what happens to your data if you terminate the contract" }
                    ]
                },
                advanced: {
                    situation: 'Your governance and compliance maturity is strong. You can deploy AI with confidence and defend your practices to citizens, council, auditors, and regulators. The focus is staying ahead of the EU AI Act, developing AI-specific accountability structures, and managing the growing complexity of AI vendor relationships.',
                    strengths: [
                        'Mature process documentation enables systematic, auditable AI deployment across service areas',
                        'Advanced GDPR compliance reduces regulatory risk as AI-specific regulation tightens under the EU AI Act',
                        'Structured AI procurement governance enables confident vendor selection and protects municipal data from misuse'
                    ],
                    gaps: [
                        'EU AI Act public sector obligations — particularly for high-risk AI systems — require assessment, documentation, and human oversight processes that go beyond current GDPR frameworks',
                        'AI algorithmic accountability — being able to explain to a citizen why an AI system produced a specific output — is not yet standard even in advanced municipal AI deployments',
                        'Third-party AI risk management is an emerging gap: what your AI vendors do with your data and how their models behave is often opaque even to governance-mature organizations'
                    ],
                    actions: [
                        { action: 'Complete an EU AI Act risk classification for all municipal AI systems', why: 'Municipal AI systems in areas like benefits, law enforcement support, or critical infrastructure may be classified as high-risk under the EU AI Act — triggering mandatory conformity assessments, human oversight requirements, and registration obligations.', start: 'List every AI tool in use, classify each using the EU AI Act risk tier guidance, and for every high-risk system begin the conformity documentation process' },
                        { action: 'Implement algorithmic accountability for citizen-facing AI decisions', why: "Citizens in democratic societies have the right to understand and contest automated decisions. Building explainability into your AI systems is both a legal requirement and a demonstration of the municipality's commitment to fair governance.", start: 'For each AI system influencing citizen outcomes, define: what factors influence the output, how a citizen can request human review, who reviews contested decisions, and what the appeal process is' },
                        { action: 'Develop a municipal AI vendor governance standard', why: 'Your AI risk extends to every vendor supplying AI tools. A vendor governance standard ensures suppliers meet your GDPR, security, and ethical AI requirements — and gives you contractual recourse if they do not.', start: 'Draft a municipal AI vendor standard covering: training data sources, model bias testing, data residency, incident reporting obligations, audit rights, and exit terms — require compliance for all new AI procurement' }
                    ]
                }
            },
            overall_summary: {
                not_ready: 'Significant groundwork is needed before AI can safely serve your citizens. Prioritize digitizing citizen records, securing leadership commitment, and establishing GDPR compliance — these three foundations unlock everything else.',
                foundation: 'The building blocks are in place. Targeted investment in your weakest area — whether data quality, staff capacity, or governance — will unlock meaningful AI results in citizen services within 6–12 months.',
                emerging: 'Solid foundations are established across your municipality. Focused improvements to your key governance and capacity gaps will allow you to scale AI from pilots to systematic service improvement.',
                advanced: 'Your municipality is well-positioned for sophisticated public sector AI. The focus is now on EU AI Act compliance, algorithmic accountability, and building the specialized expertise needed to lead responsible AI in your region.'
            }
        }
    }
};

// v0.94: AI services offering, named partners, and cross-platform labels.
Object.assign(data.resources.nav, { services: 'AI Services' });
Object.assign(data.pages, {
    services: {
        title: 'AI Services',
        intro: 'The library is free and always will be. When an organisation needs this applied to its own work — its documents, its systems, its people — that is delivery, and it is what our technology partner CTRLab does across the UK, EU and Western Balkans.',
        delivered_by: 'Delivered with ',
        for_label: 'For',
        time_label: 'Typically',
        consultancy: 'AI Consultancy',
        consultancy_tag: 'Start here',
        consultancy_for: 'Leadership teams',
        consultancy_time: '2–3 weeks to a roadmap',
        consultancy_text: 'Assessment, roadmap, delivery. The entry point when you do not yet know where to begin, or what is genuinely worth pursuing.',
        training: 'AI Training',
        training_tag: 'Training that sticks',
        training_for: 'Whole teams',
        training_time: 'Half a day per team',
        training_text: 'Runs on your documents, your systems and your actual backlog, so people leave having automated a real task from their own job — not a demo.',
        copilot: 'Microsoft 365 & Copilot',
        copilot_tag: 'Worth the licence',
        copilot_for: 'Licensed teams',
        copilot_time: 'Weeks',
        copilot_text: 'You bought the licences and adoption went flat. This teaches teams the specific tasks Copilot is genuinely good at, and the ones it is not.',
        readiness: 'AI Readiness & Adoption',
        readiness_tag: 'Adoption that survives',
        readiness_for: 'Operations and IT',
        readiness_time: '2 weeks, then 3–12 months',
        readiness_text: 'Why the pilots stalled, and which three things are worth doing next. Governance, shadow-AI risk and human-in-the-loop design, so what you adopt outlives the pilot.',
        agents: 'Agent Orchestration',
        agents_tag: 'Built around your business',
        agents_for: 'Operations teams',
        agents_time: 'Weeks to months',
        agents_text: 'Starts from how your processes actually run, then builds agents inside your existing platforms or self-hosted, with clear handovers between the automated and the human.',
        custom: 'Custom App Development',
        custom_tag: 'Software that fits',
        custom_for: 'Whole organisations',
        custom_time: 'Months',
        custom_text: 'Internal apps, dashboards and AI integration for the work that off-the-shelf tools handle badly, built to match how your team already works.',
        seo: 'SEO & GEO',
        seo_tag: 'Found and cited',
        seo_for: 'Marketing and growth',
        seo_time: 'Months, compounding',
        seo_text: 'Buyers now ask an assistant before they ask a search engine. Found by Google, cited by AI.',
        governance: 'Governance and compliance',
        governance_text: 'Every engagement is delivered against the frameworks that actually apply to AI use in Europe, so what you build stays defensible when someone asks.',
        cta: 'Start with the assessment',
        cta_text: 'Tell us what you are trying to solve. If AI is the wrong tool for it, we will say so:'
    }
});
Object.assign(data.pages.partners, {
    current: 'Our partners',
    areas: 'Partnership areas',
    ctrlab_text: 'Technology partner. CTRLab builds the engineering behind AINOW products and collaborates on applied AI work across the region.',
});

// v0.94: where the free library ends and paid delivery begins. Stated once,
// plainly, rather than as a banner on every page.
Object.assign(data.pages.about, {
    visit: 'Visit the AINOW Society site',
    beyond_title: 'Where the library ends',
    beyond_free: 'Everything here is free and stays free — the prompts, the agents, the situations, in three languages, with no account and no tracking. AINOW Society is a non-profit, and this library is part of that work.',
    beyond_work: 'Some things do not fit in a library. Rolling AI out across a team, deciding what should and should not be automated, writing a policy that holds up under audit, building something that fits how your organisation already works. That is delivery, and it is what our technology partner CTRLab does — for teams of five and for organisations of several hundred, across the UK, EU and Western Balkans.',
    beyond_close: 'If the library answers your question, take what you need and go. If it raises one, that is worth a conversation.',
    beyond_services: 'What we do for organisations'
});
  __exports.data = data;
})();