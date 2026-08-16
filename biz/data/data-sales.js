(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['data/data-sales'] = AINOW['data/data-sales'] || {};
const salesPrompts = [

    // --- PROSPECTING (1-10) ---
    {
        "id": "sal-1",
        "title": "Cold Outreach Sequence: Supply Chain SaaS",
        "prompt": "You are a senior enterprise sales strategist who has closed $50M+ in B2B SaaS deals. Write a 5-email cold outreach sequence targeting VP of Operations at manufacturing companies with 500–2,000 employees for a supply chain visibility platform priced at $80,000/year. Email 1 (Day 1): open with a supply chain disruption statistic from 2024, one-sentence value prop, soft CTA asking for a reaction. Email 2 (Day 3): a 3-bullet ROI mini-case study from a comparable manufacturer showing 23% reduction in stockouts. Email 3 (Day 7): a contrarian insight about why most supply chain software implementations fail in year two. Email 4 (Day 12): direct ask for 22 minutes with a specific agenda. Email 5 (Day 18): graceful breakup that leaves the door open. Each email under 120 words. Subject lines included for all 5.",
        "tags": ["prospecting", "cold-email", "outreach", "saas", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T10:00:00Z",
        "featured": true
    },
    {
        "id": "sal-2",
        "title": "LinkedIn Prospecting Message: HR Tech",
        "prompt": "You are a top-performing SDR at a HR technology company. Write 3 versions of a LinkedIn connection request message (under 300 characters each) targeting Chief People Officers at professional services firms with 200–800 employees. The product is a workforce analytics platform that reduces unwanted attrition by 31% on average. Version A: lead with a shared industry insight. Version B: lead with a recent trigger event (company growth announcement). Version C: lead with a specific pain point about retention cost. After each message, write a 2-sentence follow-up to send 48 hours after connection is accepted. All 6 messages must be complete and ready to copy-paste.",
        "tags": ["prospecting", "linkedin", "outreach", "hr-tech", "sdr"],
        "author": "AINOW",
        "created": "2024-02-15T10:05:00Z",
        "featured": false
    },
    {
        "id": "sal-3",
        "title": "Cold Call Opening Script: CFO Targeting",
        "prompt": "You are a sales trainer with 15 years of experience coaching enterprise reps. Write a complete cold call script for reaching a CFO at a mid-market logistics company (300–1,000 employees) to sell a spend analytics platform that typically saves clients 12–18% on operational costs within 6 months. The script must include: a pattern-interrupt opening line (not 'Did I catch you at a bad time'), a 12-second value statement, two qualifying questions, a response to 'We already have something for that', and a close for a 20-minute calendar meeting. Include stage directions like [pause] and [if they say X, say Y]. Total script under 400 words.",
        "tags": ["prospecting", "cold-calling", "scripts", "cfo", "logistics"],
        "author": "AINOW",
        "created": "2024-02-15T10:10:00Z",
        "featured": false
    },
    {
        "id": "sal-4",
        "title": "Trigger-Based Prospecting Email: Funding Round",
        "prompt": "You are a B2B sales copywriter. A Series B fintech startup just announced a $42M funding round and is expanding its engineering team from 40 to 120 people. Write a prospecting email from a recruiter platform vendor (product: AI-sourcing tool that reduces time-to-hire by 40%) to the VP of Engineering or Head of Talent. The email should: reference the funding announcement specifically, quantify the hiring challenge they are about to face, name-drop one comparable fintech that used the product during a similar growth phase, and close with a single low-friction CTA. Under 150 words. Subject line included. No generic openers like 'Congratulations on your funding.'",
        "tags": ["prospecting", "trigger-events", "fintech", "recruiting", "outreach"],
        "author": "AINOW",
        "created": "2024-02-15T10:15:00Z",
        "featured": false
    },
    {
        "id": "sal-5",
        "title": "Ideal Customer Profile Definition: Cybersecurity",
        "prompt": "You are a revenue operations consultant. Define a precise Ideal Customer Profile (ICP) for a B2B cybersecurity company selling a zero-trust network access platform at $120,000/year ACV. Structure your output in these sections: (1) Firmographics — industry verticals, employee count range, revenue range, geography, tech stack indicators; (2) Behavioral signals — 3 specific trigger events that indicate buying readiness such as recent breach news, compliance deadlines, or cloud migration announcements; (3) Persona map — title, day-to-day pain, internal pressure they face, how they measure success; (4) Negative ICP — 3 specific company types to exclude and why; (5) One-paragraph summary suitable for training a new SDR. Be specific with numbers and named industries.",
        "tags": ["prospecting", "icp", "strategy", "cybersecurity", "revops"],
        "author": "AINOW",
        "created": "2024-02-15T10:20:00Z",
        "featured": true
    },
    {
        "id": "sal-6",
        "title": "Video Prospecting Script: Loom to CRO",
        "prompt": "You are an account executive at a revenue intelligence platform. Write a complete 60-second Loom video script targeting the Chief Revenue Officer of a B2B software company that recently missed its Q3 revenue target by 15% (this was mentioned in a LinkedIn post). The platform you are selling uses AI to identify which deals are at risk 30 days earlier than traditional CRM data. The script must: open by referencing their public Q3 miss (empathetically, not condescendingly), show one specific screen — describe what to show on screen and what to say about it, deliver a concrete ROI statement, and close with a 15-minute calendar link CTA. Include on-screen text suggestions. Under 175 words spoken.",
        "tags": ["prospecting", "video", "loom", "cro", "revenue-intelligence"],
        "author": "AINOW",
        "created": "2024-02-15T10:25:00Z",
        "featured": false
    },
    {
        "id": "sal-7",
        "title": "Account Research Brief: Pre-Call Prep",
        "prompt": "You are a senior enterprise AE preparing for a first call with the SVP of IT at a regional bank with 1,800 employees. You are selling a document automation platform that eliminates manual data entry in loan processing, reducing average processing time from 4 days to 6 hours. Write a structured pre-call research brief including: (1) Three questions to ask about their current loan processing workflow; (2) Two likely objections based on the banking industry's typical procurement concerns (security, compliance, vendor consolidation) and your prepared responses; (3) A one-paragraph 'commercial insight' about digital transformation trends in regional banking to open the call with; (4) A primary objective and a fallback objective for the call. Practical and specific throughout.",
        "tags": ["prospecting", "account-research", "call-prep", "banking", "it"],
        "author": "AINOW",
        "created": "2024-02-15T10:30:00Z",
        "featured": false
    },
    {
        "id": "sal-8",
        "title": "Referral Request Script: Post-Success Milestone",
        "prompt": "You are a customer success manager at a project management SaaS company. Your client, a marketing agency with 75 employees, just hit a milestone: their teams completed 340% more projects on time in their first 6 months using your platform compared to the prior 6 months. Write a complete email and a follow-up phone script to ask their COO for a referral to 2–3 other agency leaders they know. The email should: celebrate the specific milestone, make the ask feel natural and mutual, suggest specific types of contacts they might refer (similar-size agencies, ops-heavy teams), and include a one-click referral link placeholder. The phone script (under 200 words) should handle 'I don't want to bother my contacts' gracefully.",
        "tags": ["referrals", "account-management", "customer-success", "agency", "saas"],
        "author": "AINOW",
        "created": "2024-02-15T10:35:00Z",
        "featured": false
    },
    {
        "id": "sal-9",
        "title": "LinkedIn Content Strategy: Social Selling for AEs",
        "prompt": "You are a social selling coach who trains enterprise account executives. Write a 4-week LinkedIn content calendar for an AE selling ERP software to manufacturing company executives. Each week has a different theme: Week 1 — Industry insight post (write the full post, under 200 words, no hard sell). Week 2 — Client success story post formatted as a before/after narrative (full post, anonymized). Week 3 — Contrarian opinion post that challenges a common belief about ERP implementations (full post, designed to generate comments). Week 4 — Personal story post that builds trust and relatability (full post). For each post include: the hook line, the body, a closing question to drive engagement, and 5 relevant hashtags. All posts complete and ready to publish.",
        "tags": ["prospecting", "linkedin", "social-selling", "content", "erp"],
        "author": "AINOW",
        "created": "2024-02-15T10:40:00Z",
        "featured": false
    },
    {
        "id": "sal-10",
        "title": "Gatekeeper Navigation Script",
        "prompt": "You are a sales trainer specializing in outbound prospecting. Write a complete phone script for navigating past an executive assistant to reach the VP of Finance at a 600-person healthcare company. The goal is to book a 20-minute meeting for a financial reporting automation platform. The script must cover: the initial ask, the 'He's not available, can I take a message?' response, the 'Can you tell me what this is about?' response, the 'We don't take unsolicited calls' response, and a final ask for a direct email or the best time to reach them. Tone: confident, respectful, never pushy. Include a voicemail script (under 30 seconds) to leave if transferred. All responses complete and ready to use.",
        "tags": ["prospecting", "cold-calling", "gatekeeper", "scripts", "healthcare"],
        "author": "AINOW",
        "created": "2024-02-15T10:45:00Z",
        "featured": false
    },

    // --- DISCOVERY (11-20) ---
    {
        "id": "sal-11",
        "title": "SPIN Discovery Question Set: Marketing Automation",
        "prompt": "You are a sales methodology trainer certified in SPIN Selling. Write a complete set of 20 discovery questions for a 45-minute discovery call selling a marketing automation platform ($36,000/year) to a VP of Marketing at a B2B SaaS company with 150–500 employees. Structure: 5 Situation questions (establish current state — current tech stack, team size, lead volume), 5 Problem questions (surface explicit pain — manual processes, reporting gaps, attribution failures), 5 Implication questions (expand the cost of the problem — lost pipeline, wasted headcount, missed targets), 5 Need-Payoff questions (get the prospect to articulate the value of solving it). For each question, add a one-line note explaining what information you are trying to extract and why it matters for qualification.",
        "tags": ["discovery", "spin-selling", "questions", "marketing-automation", "saas"],
        "author": "AINOW",
        "created": "2024-02-15T11:00:00Z",
        "featured": true
    },
    {
        "id": "sal-12",
        "title": "Discovery Call Talk Track: IT Infrastructure",
        "prompt": "You are an enterprise AE selling a cloud infrastructure management platform at $150,000/year ACV to IT Directors and VPs of Engineering at companies running hybrid cloud environments with 1,000+ employees. Write a complete discovery call talk track that covers: (1) A 90-second agenda-setting opener that builds credibility without a company pitch; (2) A transition question from small talk to business that feels natural; (3) A sequence of 8 diagnostic questions that uncover infrastructure cost waste, team productivity gaps, and compliance risks; (4) An active listening technique to use when the prospect gives a vague answer like 'things are mostly fine'; (5) A 60-second 'commercial insight' about cloud cost sprawl to share mid-call; (6) A call close that secures a next step even if no pain has been confirmed yet.",
        "tags": ["discovery", "talk-track", "it-infrastructure", "cloud", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T11:05:00Z",
        "featured": false
    },
    {
        "id": "sal-13",
        "title": "Uncovering Hidden Stakeholders in Discovery",
        "prompt": "You are a complex sales strategist. Write a guide for an account executive on how to map the full buying committee during a discovery call without appearing political or threatening to the primary contact. The guide should include: 5 specific questions to ask that naturally reveal other stakeholders (e.g., 'Who else in the organization would feel the impact of this problem most?'), a technique for getting the contact to describe the internal approval process without directly asking 'Who signs the check?', a template for an org chart exercise to run during a second discovery call, and a script for asking your champion to introduce you to the economic buyer. All scripts and questions must be complete and usable as-is.",
        "tags": ["discovery", "stakeholder-mapping", "buying-committee", "enterprise", "strategy"],
        "author": "AINOW",
        "created": "2024-02-15T11:10:00Z",
        "featured": false
    },
    {
        "id": "sal-14",
        "title": "Technical Discovery Questions: Data Platform",
        "prompt": "You are a solutions engineer helping an AE prepare for a technical discovery call with a Head of Data Engineering at a retail company with $800M in annual revenue. The product being sold is a cloud data warehouse migration and management platform at $200,000/year. Write 15 technical discovery questions that uncover: current data infrastructure (warehouse, ETL tools, query volumes), pain points (latency, cost, governance failures), team capability gaps, data security and compliance requirements (PCI-DSS, GDPR), and migration timeline constraints. For each question, note whether it is best asked by the AE or the SE, and what a 'good answer' looks like versus a 'red flag answer' from a qualification standpoint.",
        "tags": ["discovery", "technical", "data-platform", "solutions-engineering", "retail"],
        "author": "AINOW",
        "created": "2024-02-15T11:15:00Z",
        "featured": false
    },
    {
        "id": "sal-15",
        "title": "Discovery Email: Pre-Call Research Request",
        "prompt": "You are an AE at a supply chain analytics company. You have a discovery call booked with the Director of Supply Chain at an automotive parts manufacturer (2,400 employees, $1.2B revenue) in 5 days. Write a pre-call email to send 48 hours before the meeting that: confirms the agenda and time, shares one relevant piece of industry insight (the 2024 automotive supply chain disruption trends), asks 3 specific preparation questions the prospect can answer in advance (focused on their current reporting process, key pain metrics, and decision timeline), and sets the tone for a peer-level conversation rather than a vendor pitch. Email under 200 words. Subject line included.",
        "tags": ["discovery", "pre-call", "email", "supply-chain", "automotive"],
        "author": "AINOW",
        "created": "2024-02-15T11:20:00Z",
        "featured": false
    },
    {
        "id": "sal-16",
        "title": "Discovery Debrief Template: Post-Call Notes",
        "prompt": "You are a sales operations manager building a discovery debrief template for a 40-person enterprise sales team. Create a structured post-discovery call notes template that captures: MEDDPICC qualification fields (Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition) with a 1–2 sentence description of what good looks like for each field, a deal risk assessment section (rate each MEDDPICC element Green/Yellow/Red with one line of reasoning), a next steps section with owner and due date fields, and an 'AI summary prompt' — a ready-to-use prompt the rep can paste into an AI tool to generate a CRM summary from their raw call notes. Make this template practical enough that a rep can fill it in within 10 minutes post-call.",
        "tags": ["discovery", "meddpicc", "crm", "sales-ops", "templates"],
        "author": "AINOW",
        "created": "2024-02-15T11:25:00Z",
        "featured": true
    },
    {
        "id": "sal-17",
        "title": "Provocation Questions: Challenging Status Quo",
        "prompt": "You are a Challenger Sales trainer. An AE is meeting with the VP of Operations at a mid-market insurance company who says their current claims processing workflow is 'working fine.' Write 5 provocation questions designed to surface the hidden cost of the status quo without sounding confrontational. Each question should: connect to a real industry pressure (rising claim volumes, adjuster turnover, regulatory complexity), invite the prospect to calculate a cost they have not been measuring, and naturally lead toward a conversation about automation. After each question, write a one-paragraph 'insight bridge' — what the AE should say if the prospect engages with the question — that positions the AE's platform as the logical solution.",
        "tags": ["discovery", "challenger-sales", "provocation", "insurance", "status-quo"],
        "author": "AINOW",
        "created": "2024-02-15T11:30:00Z",
        "featured": false
    },
    {
        "id": "sal-18",
        "title": "Budget Discovery Script: Uncovering Financial Authority",
        "prompt": "You are a sales trainer. Write a complete script for uncovering budget, financial authority, and purchasing timeline during a discovery call without making the prospect feel interrogated. The scenario: an AE is selling a $65,000/year compliance management platform to a Director of Risk & Compliance at a 700-person financial services firm. The script should cover: how to transition from pain discovery to budget discussion naturally, 3 indirect questions that reveal whether budget exists without asking 'Do you have budget?', a technique for discovering whether the contact is the economic buyer or needs CFO approval, a question to uncover the fiscal year budget cycle, and a response to 'We don't have budget right now.' All dialogue complete and realistic.",
        "tags": ["discovery", "budget", "qualification", "financial-services", "scripts"],
        "author": "AINOW",
        "created": "2024-02-15T11:35:00Z",
        "featured": false
    },
    {
        "id": "sal-19",
        "title": "Multi-Stakeholder Discovery Plan",
        "prompt": "You are a strategic account executive. You have been given access to three separate 30-minute discovery calls with three different stakeholders at a 1,500-person logistics company: the VP of IT, the VP of Operations, and the CFO. You are selling a fleet management and route optimization platform at $180,000/year. Write a tailored discovery plan for each call that includes: the 5 most important questions to ask that persona, the specific pain points most relevant to their role, how to position the product's value in terms each persona cares about, and how to connect what you learn in one call to a question you will ask in the next. Conclude with a synthesis framework for combining insights from all three calls into a unified business case.",
        "tags": ["discovery", "multi-stakeholder", "logistics", "fleet-management", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T11:40:00Z",
        "featured": false
    },
    {
        "id": "sal-20",
        "title": "Discovery Red Flags Checklist",
        "prompt": "You are a sales manager reviewing discovery call recordings. Write a comprehensive checklist of 20 red flags that indicate a deal is not properly qualified after a discovery call. Organize into 4 categories: (1) Pain red flags — signs the prospect has no urgent problem or is describing a symptom not a root cause; (2) Authority red flags — signs the contact cannot champion or approve the deal; (3) Timeline red flags — signs there is no compelling event or real urgency; (4) Competition red flags — signs the prospect is using your call for leverage with an incumbent vendor. For each red flag, write the specific phrase or behavior to watch for and a one-sentence recommended action the AE should take. Designed to be used in deal review meetings.",
        "tags": ["discovery", "qualification", "deal-review", "red-flags", "coaching"],
        "author": "AINOW",
        "created": "2024-02-15T11:45:00Z",
        "featured": false
    },

    // --- QUALIFICATION (21-28) ---
    {
        "id": "sal-21",
        "title": "MEDDPICC Deal Scorecard",
        "prompt": "You are a VP of Sales at an enterprise software company. Build a detailed MEDDPICC deal qualification scorecard for a deal team to use during weekly pipeline reviews. For each of the 8 MEDDPICC elements (Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition), provide: a definition in plain language, 3 qualifying questions the AE should be able to answer, a scoring rubric (1–3 points: 1 = not identified, 2 = partially understood, 3 = fully validated), and the minimum score to consider the deal 'qualified to forecast.' Include a total score interpretation guide (e.g., 18–24 = commit, 12–17 = upside, below 12 = omit) and a list of 5 mandatory CRM fields that must be populated before the deal appears in a forecast call.",
        "tags": ["qualification", "meddpicc", "forecasting", "pipeline", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T12:00:00Z",
        "featured": true
    },
    {
        "id": "sal-22",
        "title": "Qualification Email After Inbound Lead",
        "prompt": "You are an SDR at a B2B SaaS company. An inbound lead has signed up for a product demo. Their company is a 90-person e-commerce brand. The product is a customer data platform (CDP) priced at $48,000/year. Write a qualification email to send within 30 minutes of the demo signup that: thanks them for their interest without sounding generic, asks 3 qualification questions embedded naturally in the email (tech stack, data volume, current pain with customer segmentation), sets expectations for what the demo will cover, and includes a Calendly-style scheduling link CTA. Then write a 2-minute phone script to call them if they do not reply within 24 hours. Both email and phone script complete and ready to use.",
        "tags": ["qualification", "inbound", "sdr", "cdp", "e-commerce"],
        "author": "AINOW",
        "created": "2024-02-15T12:05:00Z",
        "featured": false
    },
    {
        "id": "sal-23",
        "title": "Disqualification Script: How to Exit Gracefully",
        "prompt": "You are a sales trainer. Write a complete script and email template for professionally disqualifying a prospect who does not meet your ICP after a discovery call. The scenario: the AE has discovered that the prospect is a 25-person startup (below the 100-employee minimum for your enterprise platform), has no dedicated IT staff, and is not in a buying cycle for at least 12 months. The script must: thank them genuinely for their time, explain why the fit is not right without making them feel rejected, suggest an alternative resource or product tier that might serve them now, and leave the door open for future engagement when they scale. Include both a post-call wrap-up script (spoken) and a follow-up email. No burning bridges. Under 250 words total.",
        "tags": ["qualification", "disqualification", "scripts", "icp", "pipeline-hygiene"],
        "author": "AINOW",
        "created": "2024-02-15T12:10:00Z",
        "featured": false
    },
    {
        "id": "sal-24",
        "title": "Compelling Event Identification Framework",
        "prompt": "You are an enterprise sales coach. Write a practical guide for AEs on how to identify and leverage compelling events to create deal urgency. Include: a definition of a compelling event vs. artificial urgency, a list of 12 real compelling events to look for (e.g., regulatory deadline, contract renewal with current vendor, new executive hire, board-mandated cost reduction, IPO preparation), 5 discovery questions to uncover whether a compelling event exists, a script for asking 'What happens if you do not solve this by [date]?' in a way that feels consultative not pressuring, and a decision tree for what to do when no compelling event exists (how to create one by helping the prospect calculate the monthly cost of inaction). All scripts and frameworks complete.",
        "tags": ["qualification", "compelling-event", "urgency", "discovery", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T12:15:00Z",
        "featured": false
    },
    {
        "id": "sal-25",
        "title": "Champion Identification and Development Script",
        "prompt": "You are a strategic sales trainer. Write a complete playbook for identifying and developing an internal champion in a 6–12 month enterprise deal cycle. The scenario: selling a $250,000/year talent intelligence platform to a Fortune 1000 consumer goods company. The playbook must include: 5 behavioral signals that indicate someone is (or is not) a true champion vs. a sponsor vs. a blocker, a script for the 'champion test' conversation — asking your champion to share internal information they would only share if they are truly invested, a 3-step champion development plan (give them tools to sell internally, rehearse the internal pitch with them, help them navigate politics), and a recovery plan for when your champion goes quiet or leaves the company. All scripts ready to use.",
        "tags": ["qualification", "champion", "enterprise", "deal-strategy", "stakeholders"],
        "author": "AINOW",
        "created": "2024-02-15T12:20:00Z",
        "featured": false
    },
    {
        "id": "sal-26",
        "title": "BANT Qualification Framework Modernized",
        "prompt": "You are a sales methodology consultant. The classic BANT framework (Budget, Authority, Need, Timeline) is outdated for modern complex sales. Write an updated qualification framework that improves on BANT for a B2B SaaS company selling a $75,000–$200,000/year platform. For each original BANT element, explain why the traditional approach fails in modern enterprise selling and replace it with a more sophisticated qualification criterion. Budget → replace with what? Authority → replace with what? Need → replace with what? Timeline → replace with what? Add two additional qualification dimensions that BANT misses entirely. For each new dimension, write 2 discovery questions and explain what a fully qualified answer looks like. Conclude with a one-page 'qualification conversation guide' for new AEs.",
        "tags": ["qualification", "bant", "methodology", "framework", "saas"],
        "author": "AINOW",
        "created": "2024-02-15T12:25:00Z",
        "featured": false
    },
    {
        "id": "sal-27",
        "title": "Pipeline Stage Exit Criteria",
        "prompt": "You are a revenue operations leader. Define clear, objective exit criteria for each stage of a 6-stage B2B SaaS sales pipeline: Stage 1 (Suspect), Stage 2 (Marketing Qualified Lead), Stage 3 (Sales Accepted Lead), Stage 4 (Discovery Complete), Stage 5 (Solution Proposed), Stage 6 (Contract Negotiation). For each stage transition, list: the minimum 3 pieces of information that must be confirmed before moving to the next stage, the CRM field that must be populated, a one-sentence question the sales manager should ask to test whether the deal belongs in that stage, and the most common reason deals get stuck at that transition. Design this for a company selling a $120,000/year enterprise cybersecurity platform with a 90-day average sales cycle.",
        "tags": ["qualification", "pipeline", "sales-ops", "crm", "revops"],
        "author": "AINOW",
        "created": "2024-02-15T12:30:00Z",
        "featured": false
    },
    {
        "id": "sal-28",
        "title": "Competitive Qualification: Navigating a Bake-Off",
        "prompt": "You are an enterprise AE who has been told by your champion that you are in a formal evaluation alongside two competitors: Salesforce and a regional vendor. You are selling a $95,000/year revenue forecasting platform to a VP of Sales at a 800-person B2B technology company. Write a complete competitive qualification strategy that includes: 3 questions to ask your champion to understand the real decision criteria (not just the stated ones), a framework for identifying whether you are the incumbent choice or an underdog, a script for asking 'What would need to be true for you to choose us?' without sounding desperate, a list of 5 landmine questions to plant with the evaluation committee that expose gaps in your competitors' offerings, and a single-page competitive battle card comparing your platform to Salesforce Forecasting on 6 dimensions.",
        "tags": ["qualification", "competitive", "bake-off", "forecasting", "strategy"],
        "author": "AINOW",
        "created": "2024-02-15T12:35:00Z",
        "featured": false
    },

    // --- DEMOS (29-38) ---
    {
        "id": "sal-29",
        "title": "Discovery-Led Demo Script: HR Platform",
        "prompt": "You are a senior AE at an HR platform company. Write a complete 45-minute demo script for presenting a workforce management platform ($55,000/year) to a VP of HR and a Director of Operations at a 400-person retail chain. The demo was preceded by a discovery call where you learned: their top pain is scheduling 280 hourly workers across 12 locations, their current process uses Excel and takes the ops manager 6 hours every Sunday, and their biggest goal is reducing overtime costs (currently $340,000/year overspent). The script must: open with a 3-sentence recap of their pain (not a company overview), show only 4 product areas tied directly to the pains discovered, include a moment where you pause and ask a question after each demo section to confirm relevance, handle the 'Can it do X?' question mid-demo gracefully, and close with a clear next step. Stage directions included.",
        "tags": ["demos", "hr-platform", "talk-track", "discovery-led", "retail"],
        "author": "AINOW",
        "created": "2024-02-15T13:00:00Z",
        "featured": true
    },
    {
        "id": "sal-30",
        "title": "Demo Objection Handling Script",
        "prompt": "You are a sales trainer. Write a complete objection handling guide for the 8 most common objections that arise during a live product demo, for a B2B project management software at $42,000/year targeting PMOs at construction companies. For each objection, provide: the exact objection as the prospect states it, the psychological reason behind the objection, a 3-part response (acknowledge, reframe, redirect), and a follow-up question to re-engage the prospect. The 8 objections: (1) 'This looks complicated to implement,' (2) 'Our team won't adopt new software,' (3) 'We already use [Microsoft Project / Procore],' (4) 'The interface isn't intuitive for our field teams,' (5) 'Can it integrate with our ERP?', (6) 'This seems like more than we need,' (7) 'What does onboarding actually look like?', (8) 'We need to see more data before we decide.' All responses complete.",
        "tags": ["demos", "objection-handling", "project-management", "construction", "scripts"],
        "author": "AINOW",
        "created": "2024-02-15T13:05:00Z",
        "featured": false
    },
    {
        "id": "sal-31",
        "title": "Executive Demo: 30-Minute CXO Presentation",
        "prompt": "You are a VP of Sales. Write a complete 30-minute executive demo framework for presenting a supply chain AI platform ($320,000/year) to a COO and CFO at a $2B food manufacturing company. This audience has no patience for feature walkthroughs. The framework must include: a 5-minute business case opening (no product screenshots) that quantifies the cost of their supply chain inefficiency using industry benchmarks, a 10-minute platform overview showing only 3 screens — describe each screen and the exact words to say, a 10-minute ROI walkthrough using their specific numbers (assume $12M annual inventory write-off), and a 5-minute close with a mutual success plan. Include specific language for handing off between the AE and solutions engineer during the demo. Tone: peer-level, data-led, decisive.",
        "tags": ["demos", "executive", "coo", "cfo", "supply-chain"],
        "author": "AINOW",
        "created": "2024-02-15T13:10:00Z",
        "featured": false
    },
    {
        "id": "sal-32",
        "title": "Demo Follow-Up Email Sequence",
        "prompt": "You are an AE who just completed a strong 45-minute product demo for a legal tech platform ($85,000/year) with a General Counsel and IT Director at a 600-person insurance company. They said they were 'impressed' but need to 'discuss internally.' Write a 3-email follow-up sequence: Email 1 (same day, within 2 hours): personalized recap of their 3 specific pain points, how the demo addressed each, a link to the recording, and a proposed next step with a specific date. Email 2 (Day 3): a one-page business case PDF outline they can use internally (describe the content, write 200 words of the actual content). Email 3 (Day 7): a case study from a comparable insurance company that achieved a 44% reduction in contract review time. Each email under 180 words with subject lines.",
        "tags": ["demos", "follow-up", "legal-tech", "email", "insurance"],
        "author": "AINOW",
        "created": "2024-02-15T13:15:00Z",
        "featured": false
    },
    {
        "id": "sal-33",
        "title": "POC / Pilot Success Plan",
        "prompt": "You are an enterprise AE at a data security company. A mid-market financial services firm (550 employees) has agreed to a 30-day proof of concept (POC) for your data loss prevention platform at $110,000/year. Write a complete POC success plan document including: a 3-sentence executive summary of what success looks like, 5 specific and measurable success criteria agreed upon in advance (e.g., '100% of sensitive data in the SFTP environment classified within 5 business days'), a week-by-week milestone schedule for the 30 days, a list of required resources from the prospect's side (IT admin time, test data sets, stakeholder availability), a weekly check-in agenda template (15 minutes), and the exact language to use in the final POC readout meeting to transition from 'POC complete' to 'procurement conversation.' All sections complete.",
        "tags": ["demos", "poc", "pilot", "data-security", "financial-services"],
        "author": "AINOW",
        "created": "2024-02-15T13:20:00Z",
        "featured": true
    },
    {
        "id": "sal-34",
        "title": "Technical Demo Prep: SE Briefing Template",
        "prompt": "You are an enterprise AE preparing your solutions engineer for a technical demo with the engineering and IT team at a 1,200-person healthcare system. You are selling a cloud integration platform at $175,000/year. Write a complete SE briefing document that covers: prospect background (company, team size, current tech stack as discovered in the prior call), the 3 business problems to anchor the demo around, the 5 technical requirements the prospect explicitly mentioned (HL7 FHIR compliance, Epic EHR integration, zero-downtime deployment, role-based access control, audit trail for HIPAA), the 2 areas where your platform is weakest relative to their stated needs and how to handle them, a list of questions the IT team is likely to ask and suggested answers, and the exact moment in the demo to transition from technical depth back to business value. Complete and usable.",
        "tags": ["demos", "solutions-engineering", "healthcare", "technical", "integration"],
        "author": "AINOW",
        "created": "2024-02-15T13:25:00Z",
        "featured": false
    },
    {
        "id": "sal-35",
        "title": "Demo Environment Setup: Personalization Strategy",
        "prompt": "You are a solutions engineer at a B2B analytics platform company. You have an upcoming demo with the Head of Revenue Operations at a Series C e-commerce company that sells outdoor gear, with $180M in annual GMV and 60-person revenue team. Write a complete demo personalization guide: (1) What data to use in the demo environment (mock data should reflect outdoor gear SKUs, seasonal revenue patterns, and a 3-channel GTM — DTC, wholesale, Amazon); (2) Which 4 dashboard views to pre-configure and why each one connects to the pains discovered in discovery (pipeline visibility gaps, forecast accuracy below 70%, territory imbalances); (3) The exact customizations that will make the prospect say 'this feels built for us'; (4) A pre-demo checklist to run 30 minutes before showtime; (5) What to do if the demo environment crashes mid-presentation.",
        "tags": ["demos", "personalization", "e-commerce", "analytics", "solutions-engineering"],
        "author": "AINOW",
        "created": "2024-02-15T13:30:00Z",
        "featured": false
    },
    {
        "id": "sal-36",
        "title": "Demo Scoring Rubric for Managers",
        "prompt": "You are a sales enablement director. Build a demo quality scoring rubric for sales managers to use when shadowing or reviewing recorded demos. The rubric should evaluate 10 dimensions: (1) Opening — did they recap discovery pain before showing product? (2) Agenda — was it co-created or dictated? (3) Feature relevance — were all features shown tied to discovered pains? (4) Storytelling — was there a narrative arc or a feature dump? (5) Talk-to-listen ratio — did they pause and check in? (6) Objection handling — were objections handled in stride? (7) Competitive positioning — was the platform differentiated credibly? (8) ROI articulation — was there a number attached to the value? (9) Next step clarity — was a specific next step secured? (10) Prospect engagement — did the prospect ask questions and lean in? Each dimension: 1–5 scale with behavioral anchors. Total score thresholds for pass/coach/remediate.",
        "tags": ["demos", "coaching", "sales-enablement", "rubric", "management"],
        "author": "AINOW",
        "created": "2024-02-15T13:35:00Z",
        "featured": false
    },
    {
        "id": "sal-37",
        "title": "Interactive Demo: Prospect Self-Discovery Framework",
        "prompt": "You are a sales innovation consultant. Design a framework for running an interactive 'discovery demo' where the prospect, not the AE, drives the product exploration. The scenario: a $65,000/year business intelligence platform being demo'd to a Director of Analytics and two data analysts at a 300-person consumer packaged goods company. The framework should include: how to open the session so the prospect feels in control, 5 'driving prompts' (questions you ask that lead them to click the most impactful features themselves), a technique for letting them 'discover' the ROI calculation tool without you explicitly pointing to it, how to handle the moment when they find a limitation, and how to close an interactive demo session when no formal slides were presented. All dialogue and facilitation language complete.",
        "tags": ["demos", "interactive", "business-intelligence", "cpg", "facilitation"],
        "author": "AINOW",
        "created": "2024-02-15T13:40:00Z",
        "featured": false
    },
    {
        "id": "sal-38",
        "title": "Demo No-Show Recovery Plan",
        "prompt": "You are a sales manager. Write a complete no-show recovery playbook for an AE whose demo was skipped without notice by a VP-level prospect at a 900-person manufacturing company (deal size: $140,000/year). The playbook covers: an email to send within 15 minutes of the no-show (empathetic, not passive-aggressive, includes two reschedule options), a phone script for the follow-up call if no email reply comes in 24 hours, a strategy for reaching out to a different contact at the company if the primary contact goes dark after two attempts, a template for escalating to your own manager or executive sponsor if the deal is at risk, and a decision framework for when to officially disqualify a deal after repeated no-shows. All scripts and emails complete and ready to use.",
        "tags": ["demos", "no-show", "recovery", "follow-up", "manufacturing"],
        "author": "AINOW",
        "created": "2024-02-15T13:45:00Z",
        "featured": false
    },

    // --- PROPOSALS (39-46) ---
    {
        "id": "sal-39",
        "title": "Executive Proposal: SaaS Platform $200K ACV",
        "prompt": "You are a senior AE at a revenue operations software company. Write a complete executive proposal for a $198,000/year SaaS platform deal with a Director of RevOps and CFO at a 700-person B2B manufacturing technology company. The proposal must include: (1) Executive summary (250 words max) — their problem, your solution, expected outcomes in numbers; (2) Problem statement — 3 specific pain points validated in discovery with quantified impact (e.g., $2.1M annual revenue at risk from forecast inaccuracy); (3) Proposed solution — platform overview in business terms, not technical specs, showing 3 use cases; (4) Investment and ROI — pricing breakdown, 3-year TCO vs. current state, payback period calculation showing ROI positive at month 8; (5) Implementation timeline — 90-day onboarding plan with milestones; (6) Why now — 2 reasons the timing is optimal; (7) Next steps — mutual action plan with specific dates. Write the full proposal, not an outline.",
        "tags": ["proposals", "executive", "saas", "roi", "revops"],
        "author": "AINOW",
        "created": "2024-02-15T14:00:00Z",
        "featured": true
    },
    {
        "id": "sal-40",
        "title": "Business Case Builder: Internal Champion Template",
        "prompt": "You are an enterprise AE. Your champion at a 1,100-person healthcare technology company needs to present a business case to their CFO to get approval for a $145,000/year clinical workflow automation platform. Write the complete business case document your champion can customize and present internally. Include: a one-page executive summary with three strategic benefits tied to the company's stated 2025 priorities (reduce operational costs 15%, improve clinician retention, accelerate time-to-deployment for new health system clients), a financial model section with a cost-of-inaction analysis (current manual process costs $890,000/year in labor and error-related rework), a risk section that pre-empts the CFO's concerns (implementation risk, vendor viability, switching costs), a vendor comparison table (your platform vs. status quo vs. a named competitor), and a recommended decision timeline. All sections written in full, not as headers only.",
        "tags": ["proposals", "business-case", "champion", "healthcare", "cfo"],
        "author": "AINOW",
        "created": "2024-02-15T14:05:00Z",
        "featured": false
    },
    {
        "id": "sal-41",
        "title": "Proposal Pricing Page Strategy",
        "prompt": "You are a pricing strategist and sales consultant. Write a guide for structuring the pricing section of an enterprise software proposal to maximize perceived value, minimize sticker shock, and drive toward the mid-tier or multi-year option. The guide should cover: how to sequence pricing in the proposal (never lead with price), the 3-option architecture (entry, recommended, premium) and how to make the middle option obviously the best choice using the decoy effect, how to present annual pricing vs. monthly to control the psychological anchor, language for presenting multi-year discounts that feels like a benefit not a vendor ask, how to present a cost-of-inaction calculation before the pricing page so the price looks small by comparison, and 5 specific phrases to use and 5 to avoid on the pricing page. Include a mock pricing page (3 tiers) for a $60K–$180K/year cybersecurity platform.",
        "tags": ["proposals", "pricing", "psychology", "strategy", "cybersecurity"],
        "author": "AINOW",
        "created": "2024-02-15T14:10:00Z",
        "featured": false
    },
    {
        "id": "sal-42",
        "title": "Proposal Review: Strengths and Gaps Audit",
        "prompt": "You are a sales consultant who reviews enterprise proposals. Below is a mock proposal summary for a $160,000/year workforce management platform being submitted to a VP of HR at a 2,000-person retail company: [PROPOSAL SUMMARY: Our platform offers advanced scheduling, time-tracking, and compliance tools. Pricing is $160,000/year with a 90-day implementation. We have worked with many retail companies. Please see the appendix for technical specs.] Conduct a complete audit of this proposal's weaknesses. Identify: the 5 most critical missing elements, the 3 biggest language mistakes, how it fails to connect to buyer value, how it fails on competitive differentiation, and how it fails on urgency creation. Then rewrite the executive summary section of this proposal from scratch, applying every fix you identified. Show before and after.",
        "tags": ["proposals", "audit", "copywriting", "workforce-management", "retail"],
        "author": "AINOW",
        "created": "2024-02-15T14:15:00Z",
        "featured": false
    },
    {
        "id": "sal-43",
        "title": "RFP Response: IT Security Section",
        "prompt": "You are a bid manager at an enterprise cloud storage company. Write a complete response to the following RFP section for a 3,000-employee government contractor: 'Section 4.2 — Security and Compliance Requirements: Describe your data encryption standards, access control mechanisms, audit logging capabilities, incident response SLA, data residency options, and relevant certifications.' Your platform has: AES-256 encryption at rest and in transit, role-based access control with MFA, immutable audit logs with 7-year retention, a 4-hour incident response SLA with dedicated CISO escalation, US-only data residency option, and certifications including FedRAMP Moderate, SOC 2 Type II, ISO 27001, and ITAR. Write the full RFP response section (400–600 words), in formal RFP language, with confidence and specificity. No placeholders.",
        "tags": ["proposals", "rfp", "security", "compliance", "government"],
        "author": "AINOW",
        "created": "2024-02-15T14:20:00Z",
        "featured": false
    },
    {
        "id": "sal-44",
        "title": "Proposal Objection Pre-emption Strategy",
        "prompt": "You are a proposal writer and sales strategist. Explain how to proactively address the top 5 objections that kill deals at the proposal stage, before the prospect even raises them, by embedding responses within the proposal itself. The 5 objections to pre-empt: (1) 'Your price is too high,' (2) 'Implementation will take too long and disrupt operations,' (3) 'Our team won't adopt new software,' (4) 'What happens if your company gets acquired or shut down?', (5) 'We've had bad experiences with vendors in the past.' For each objection: write the exact proposal language (2–3 sentences) to include in the relevant proposal section that neutralizes the objection before it is raised, identify which section of the proposal it belongs in, and explain the psychological principle that makes this effective. Context: $90,000/year enterprise SaaS platform for a logistics company.",
        "tags": ["proposals", "objection-handling", "strategy", "copywriting", "logistics"],
        "author": "AINOW",
        "created": "2024-02-15T14:25:00Z",
        "featured": false
    },
    {
        "id": "sal-45",
        "title": "Mutual Close Plan (Mutual Action Plan)",
        "prompt": "You are an enterprise AE. A VP of IT and Procurement Director at a 1,400-person energy company have verbally agreed to proceed with your $220,000/year IT asset management platform. Create a complete Mutual Action Plan (MAP) / Mutual Close Plan document to share with the prospect. The document should include: a shared objective statement that both sides sign off on, a week-by-week timeline from today to signed contract (assume 6 weeks), tasks for the prospect side (security review, legal review, IT validation, executive sign-off, PO generation) with owner names and due dates, tasks for your side (legal redlines, security documentation, reference calls, final commercial terms), key decision gates where the deal could stall and a mitigation plan for each, and a 'deal at risk' escalation protocol if any milestone slips by more than 3 business days. Professional and specific.",
        "tags": ["proposals", "mutual-action-plan", "closing", "enterprise", "energy"],
        "author": "AINOW",
        "created": "2024-02-15T14:30:00Z",
        "featured": false
    },
    {
        "id": "sal-46",
        "title": "Proposal Presentation Deck Script",
        "prompt": "You are a senior AE at a marketing technology company. Write a complete spoken script for presenting a 7-slide proposal deck to a CMO and VP of Demand Generation at a $500M B2B technology company. You are proposing a $130,000/year account-based marketing platform. Slide 1 (Title): how to open — not 'Thank you for having me,' use a data point instead. Slide 2 (Their situation): how to recap their pains discovered in discovery — 3 specifics, their exact words back to them. Slide 3 (The cost of the status quo): walk them through the $3.4M annual pipeline impact calculation. Slide 4 (Our solution): 3 capabilities, each tied to one pain, 90 seconds maximum. Slide 5 (Proof): reference customer story + 3 metrics. Slide 6 (Investment): how to present the pricing page without apology. Slide 7 (Next steps): close to a decision. Total script under 600 words.",
        "tags": ["proposals", "presentation", "deck", "abm", "marketing-technology"],
        "author": "AINOW",
        "created": "2024-02-15T14:35:00Z",
        "featured": false
    },

    // --- NEGOTIATION (47-54) ---
    {
        "id": "sal-47",
        "title": "Discount Request Response Playbook",
        "prompt": "You are a VP of Sales and negotiation coach. A procurement manager at a 1,600-person pharmaceutical company is requesting a 25% discount on a $210,000/year clinical data management platform. Your target is to protect at least 85% of the contract value. Write a complete negotiation response playbook that includes: the exact opening response to the discount request (phone script, under 100 words) that does not say yes or no immediately, 5 'give-to-get' trade-offs to offer instead of a straight discount (e.g., multi-year commitment for price protection, reference case study for 8% discount, accelerated payment terms for 5% discount), a script for the moment the prospect says 'That is as low as we can go — we need the 25%,' how to involve your manager as a tactical escalation to make a concession feel earned, and a walk-away script for if the deal cannot be reached at acceptable margin. All scripts complete.",
        "tags": ["negotiation", "discount", "procurement", "pharmaceutical", "scripts"],
        "author": "AINOW",
        "created": "2024-02-15T15:00:00Z",
        "featured": true
    },
    {
        "id": "sal-48",
        "title": "Procurement Hardball Tactics and Counter-Moves",
        "prompt": "You are a sales negotiation trainer. Write a complete guide to the 7 most common hardball tactics used by enterprise procurement teams and the counter-move for each. The context: a $175,000/year enterprise SaaS deal in the contract stage with a procurement team at a 3,000-person financial services company. Tactics to cover: (1) The Last-Minute Price Reduction Request (deal is 90% done, they ask for 15% off), (2) The Salami Slice (small concessions requested one at a time over weeks), (3) The False Deadline ('We need 20% off by Friday or we go with the competitor'), (4) The Phantom Competitor ('We have a cheaper offer on the table'), (5) The Silent Treatment (no response for 10 days), (6) The Scope Creep Request (adding features not in the original deal), (7) The Legal Red Line War (redlining 40+ contract clauses). For each: describe the tactic, the psychology behind it, and a complete counter-script.",
        "tags": ["negotiation", "procurement", "tactics", "enterprise", "contracts"],
        "author": "AINOW",
        "created": "2024-02-15T15:05:00Z",
        "featured": false
    },
    {
        "id": "sal-49",
        "title": "Multi-Year Contract Pitch Script",
        "prompt": "You are an AE at a cloud communications company. A Director of IT at a 500-person logistics company is about to sign a 1-year contract for your unified communications platform at $72,000/year. You want to upgrade them to a 3-year agreement. Write a complete pitch script for proposing the multi-year upgrade during the contracting phase. The script should: open by acknowledging they are ready to move forward (not restarting the sale), present the 3-year option framed around 3 specific benefits for them (price protection against upcoming price increases, priority support tier, dedicated CSM), calculate the total savings vs. annual renewals ($28,800 over 3 years), handle the objection 'We prefer flexibility in case our needs change,' and close with a specific ask. Under 300 words. Include a one-paragraph email version they can forward to their CFO for approval.",
        "tags": ["negotiation", "multi-year", "contracts", "upsell", "cloud-communications"],
        "author": "AINOW",
        "created": "2024-02-15T15:10:00Z",
        "featured": false
    },
    {
        "id": "sal-50",
        "title": "Price Increase Conversation Script",
        "prompt": "You are a customer success manager and AE team. A long-standing client — a 300-person marketing agency that has been on your creative project management platform for 3 years at $38,000/year — is facing a 15% price increase at renewal due to new platform capabilities and infrastructure costs. Write a complete renewal conversation script for the call where you deliver the price increase news. The script must: open with a review of the value delivered (specific metrics: projects completed, time saved, team adoption rate), introduce the price increase confidently and specifically (not apologetically), explain the 2 major platform improvements driving the increase, anticipate and respond to 'We weren't expecting this' and 'We need to think about it,' offer a 90-day early renewal discount as a goodwill gesture, and close the call with a clear next step. Include a pre-call email to set the agenda. Complete and ready to use.",
        "tags": ["negotiation", "price-increase", "renewal", "customer-success", "agency"],
        "author": "AINOW",
        "created": "2024-02-15T15:15:00Z",
        "featured": false
    },
    {
        "id": "sal-51",
        "title": "Negotiation Preparation Worksheet",
        "prompt": "You are an enterprise sales coach. Build a negotiation preparation worksheet for an AE preparing for a contract negotiation meeting with a procurement team and VP of Finance at a 2,500-person healthcare company. Deal: $280,000/year electronic health record integration platform. The worksheet must cover: (1) Your walk-away position — minimum acceptable ACV, minimum contract length, payment terms floor; (2) Your ideal outcome — target ACV, preferred contract length, ideal payment terms; (3) Their likely opening position based on what you know about procurement behavior; (4) 5 variables you can trade (e.g., implementation support hours, SLA tiers, user seat limits, payment timing, case study rights); (5) 3 non-negotiables on your side with business justification; (6) Your BATNA (best alternative to a negotiated agreement) if the deal falls through; (7) The sequence of concessions you are willing to make and in what order. Full worksheet, ready to fill in.",
        "tags": ["negotiation", "preparation", "worksheet", "healthcare", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T15:20:00Z",
        "featured": false
    },
    {
        "id": "sal-52",
        "title": "Legal Redline Response Strategy",
        "prompt": "You are a sales director working with legal counsel. Write a practical guide for AEs on how to manage a contract redline process that is stalling a $195,000/year deal with a Fortune 500 retailer. The guide should cover: how to set expectations with the prospect on redline timelines upfront (before legal gets involved), how to triage redlines — which ones your legal team will accept, reject, or counter, the 5 most common redlines from enterprise legal teams (limitation of liability cap, indemnification scope, data processing agreement requirements, IP ownership for customizations, auto-renewal and termination for convenience) and typical acceptable compromise positions for each, how to schedule a legal-to-legal call to accelerate the process, and a template email to the prospect's legal team to kick off the redline review efficiently. Practical, not legal advice.",
        "tags": ["negotiation", "legal", "contracts", "redlines", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T15:25:00Z",
        "featured": false
    },
    {
        "id": "sal-53",
        "title": "Competitive Negotiation: Defending Against a Late Competitor",
        "prompt": "You are an enterprise AE. You are in the final stages of negotiating a $165,000/year deal with the VP of Supply Chain at a 1,800-person consumer goods company. Three days before expected signature, your champion tells you that a competitor (a newer, cheaper platform) has entered the evaluation and the CFO wants to review their offer. Write a complete battle plan: (1) An email to your champion within 1 hour — urgent but calm, asks 3 specific questions; (2) A decision framework memo you can send to the broader evaluation team comparing your platform to a generic 'newer vendor' on 8 dimensions (data security maturity, implementation track record, product roadmap, customer support, reference customers in their vertical, integration depth, total cost of ownership year 1 vs year 3, financial stability); (3) An executive escalation email from your CEO to their CEO; (4) A final-offer script that does not panic-discount. All assets complete.",
        "tags": ["negotiation", "competitive", "late-stage", "strategy", "supply-chain"],
        "author": "AINOW",
        "created": "2024-02-15T15:30:00Z",
        "featured": false
    },
    {
        "id": "sal-54",
        "title": "Win-Win Negotiation Principles for Complex Deals",
        "prompt": "You are a negotiation consultant who has facilitated over 200 enterprise software deals. Write a practical guide on applying win-win negotiation principles to a complex B2B SaaS deal without leaving money on the table. The guide should cover: how to reframe negotiation from positional bargaining ('we need 20% off') to interest-based negotiation ('help us understand what is driving the 20% request'), 5 techniques for expanding the deal's value without discounting (add services, extend payment terms, phase the rollout, include executive advisory access, offer co-marketing), how to use silence and patience as negotiation tools during a procurement standoff, a framework for distinguishing between a prospect negotiating in good faith vs. one using negotiation as a delay tactic, and 3 real-world negotiation scenarios with full dialogue examples. Context: $150,000–$300,000/year enterprise platform deals.",
        "tags": ["negotiation", "win-win", "strategy", "principles", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T15:35:00Z",
        "featured": false
    },

    // --- CLOSING (55-62) ---
    {
        "id": "sal-55",
        "title": "Closing Call Script: $120K SaaS Deal",
        "prompt": "You are a top-performing enterprise AE. Write a complete closing call script for a $118,000/year cybersecurity awareness training platform. The prospect is a CISO and VP of IT at a 900-person financial services firm. Discovery is complete, a demo was delivered 2 weeks ago, a proposal was sent 5 days ago, and the prospect has confirmed they want to move forward but 'just need to sort out a few things.' The script must: open with a brief value recap (not a re-demo), directly address the 'few things' by asking what they are, handle 3 likely final objections (internal approval process, wanting a slight discount, timeline flexibility on start date), use an assumptive close that moves to contract logistics, secure a specific signature date, and end with a mutual next step. Include stage directions for tone. Under 500 words.",
        "tags": ["closing", "scripts", "cybersecurity", "ciso", "financial-services"],
        "author": "AINOW",
        "created": "2024-02-15T16:00:00Z",
        "featured": true
    },
    {
        "id": "sal-56",
        "title": "Stalled Deal Revival Campaign",
        "prompt": "You are a senior AE. A $98,000/year HR analytics platform deal with the VP of People at a 650-person tech company has been stalled in 'Proposal Sent' stage for 47 days. Your last 3 follow-up emails went unanswered. Design a complete 4-touch revival campaign: Touch 1 (Email): a pattern-interrupt subject line and a 2-paragraph email that acknowledges the silence, references a new piece of value (a 2024 industry benchmark report showing companies using people analytics reduce voluntary turnover by 22%), and asks one direct question. Touch 2 (LinkedIn DM): 3-sentence message, different angle. Touch 3 (Phone voicemail script): 25-second voicemail, confident, not needy. Touch 4 (Break-up email): a 4-sentence email that creates urgency by suggesting you close the file, with a single easy-action CTA that gets a response 60% of the time. All 4 touches complete and ready to send.",
        "tags": ["closing", "stalled-deals", "revival", "follow-up", "hr-analytics"],
        "author": "AINOW",
        "created": "2024-02-15T16:05:00Z",
        "featured": false
    },
    {
        "id": "sal-57",
        "title": "Urgency Creation Without Fake Scarcity",
        "prompt": "You are a sales trainer and ethical selling coach. Write a guide on how to create genuine deal urgency without resorting to fake scarcity tactics like 'This price is only good until Friday.' The scenario: a $85,000/year e-procurement platform being sold to a Director of Procurement at a 1,200-person manufacturing company. The guide should cover: how to use the prospect's own compelling events to create urgency (fiscal year end, upcoming audit, contract expiry with current vendor), how to calculate and present the daily cost of inaction ($2,340/day based on discovered process inefficiency), how to create a visual timeline showing the opportunity cost of delaying 60 days, 5 legitimate closing phrases that convey urgency honestly, and how to respond to a prospect who says 'We're in no rush' with a question that surfaces a hidden deadline. All scripts and language complete.",
        "tags": ["closing", "urgency", "ethics", "manufacturing", "procurement"],
        "author": "AINOW",
        "created": "2024-02-15T16:10:00Z",
        "featured": false
    },
    {
        "id": "sal-58",
        "title": "Executive Sponsor Close Strategy",
        "prompt": "You are a strategic accounts director. A $340,000/year enterprise data governance platform deal with a Fortune 500 insurance company has been approved at the VP level but is stuck waiting for the EVP of Technology's sign-off for 3 weeks. Write a complete executive-to-executive engagement strategy: (1) A script for coaching your champion on how to re-engage the EVP internally; (2) An email from your CEO or CRO to the EVP of Technology — 150 words maximum, peer-level tone, not a sales pitch, referencing a strategic priority the insurance industry is focused on in 2025 (AI governance and data lineage compliance); (3) A one-page 'executive brief' your CEO can attach, covering the deal rationale in 3 bullets, risk mitigation, and a specific ask; (4) A contingency plan if the EVP re-opens the evaluation. All assets complete.",
        "tags": ["closing", "executive-sponsor", "executive-selling", "insurance", "data-governance"],
        "author": "AINOW",
        "created": "2024-02-15T16:15:00Z",
        "featured": false
    },
    {
        "id": "sal-59",
        "title": "The Assumptive Close: Language and Technique",
        "prompt": "You are a sales coach. Write a comprehensive guide to using the assumptive close ethically and effectively in enterprise B2B sales. The guide should cover: the psychological foundation of the assumptive close (why it works when trust is established), the key condition that must be true before using an assumptive close (genuine discovery, confirmed pain, validated fit), 10 specific assumptive close phrases with context for when each is appropriate (e.g., 'Let me put together the onboarding timeline so we can align on your go-live date' vs. 'I'll get legal on both sides connected — who should my contract team reach out to on your side?'), 5 ways the assumptive close fails and how to recover, and how to distinguish an assumptive close from a pressure tactic. Include a full role-play scenario — 8 exchanges — between an AE and a CFO closing a $150,000/year platform deal.",
        "tags": ["closing", "assumptive-close", "technique", "coaching", "role-play"],
        "author": "AINOW",
        "created": "2024-02-15T16:20:00Z",
        "featured": false
    },
    {
        "id": "sal-60",
        "title": "Verbal Close to Written Confirmation",
        "prompt": "You are an enterprise AE. A VP of Operations at a 1,000-person distribution company has verbally agreed on a call to move forward with your $105,000/year route optimization platform. Write the complete sequence of communications to convert the verbal commitment to a signed contract: (1) A same-day email (within 90 minutes of the call) confirming the verbal agreement, outlining next steps, attaching the order form, and setting a specific signature date 5 business days out; (2) A check-in email on Day 3 if no action has been taken — brief, friendly, specific; (3) A same-day phone script for Day 5 if the contract is still unsigned; (4) An escalation plan for Day 8 if there is still no signature and the prospect has gone quiet; (5) Language to use when sending the final DocuSign reminder that creates urgency without being aggressive. All communications complete.",
        "tags": ["closing", "verbal-to-written", "contracts", "follow-up", "distribution"],
        "author": "AINOW",
        "created": "2024-02-15T16:25:00Z",
        "featured": false
    },
    {
        "id": "sal-61",
        "title": "Final Objection Handling: 'We Need More Time'",
        "prompt": "You are a senior sales trainer. The most common last-minute objection before closing a B2B SaaS deal is 'We just need a bit more time.' Write a complete guide to diagnosing and responding to this objection. The guide must cover: 5 possible real reasons behind 'We need more time' (internal approval delay, cold feet about change, budget not released yet, competitor re-entering, personal hesitation of the contact) and how to diagnose which one is actually happening, a diagnostic question sequence (3 questions) to get the prospect to reveal the real reason, a tailored response script for each of the 5 root causes, a technique for co-creating a specific timeline together so 'more time' has a defined end date, and a script for when 'more time' is a polite rejection. Context: $130,000/year enterprise SaaS, 90-day sales cycle. All scripts complete.",
        "tags": ["closing", "objections", "more-time", "diagnosis", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T16:30:00Z",
        "featured": false
    },
    {
        "id": "sal-62",
        "title": "Deal Lost Analysis and Win-Back Strategy",
        "prompt": "You are a revenue strategy consultant. A $185,000/year enterprise data integration platform deal was lost to a competitor after a 4-month sales cycle with a 1,400-person media company. Write a complete loss analysis and win-back strategy. Part 1 — Loss Analysis Framework: a structured post-mortem template covering decision criteria weight, where you lost on each criterion, the real reason vs. stated reason, what you would do differently, and what product or pricing gap contributed to the loss. Part 2 — Win-Back Campaign: an email sequence (3 emails over 6 months) designed to stay in contact and re-open the deal, triggered by milestones like the competitor's contract renewal date (typically 12–18 months away), a product update that addresses the gap that cost you the deal, and a new executive contact at the company. All analysis frameworks and email templates complete.",
        "tags": ["closing", "deal-lost", "win-back", "analysis", "media"],
        "author": "AINOW",
        "created": "2024-02-15T16:35:00Z",
        "featured": false
    },

    // --- ACCOUNT MANAGEMENT (63-70) ---
    {
        "id": "sal-63",
        "title": "Quarterly Business Review (QBR) Script",
        "prompt": "You are a strategic account manager at a B2B SaaS company. Write a complete script and agenda for a 60-minute QBR with the VP of IT and Director of Operations at a 2,000-person telecommunications company. They have been a customer for 18 months on a $220,000/year IT service management platform. The QBR should cover: a 10-minute business update on their company's strategic priorities (prompt the AM to research and insert 2 relevant recent news items), a 15-minute value delivered review using specific metrics (ticket resolution time improved from 6.2 days to 2.8 days, 94% platform adoption, $1.1M estimated labor savings), a 10-minute roadmap preview showing 2 upcoming features relevant to their use case, a 15-minute expansion discussion (they have 3 departments not yet on the platform), and a 10-minute next steps and goal-setting close. Full script with transitions and handling the 'We have a concern' moment.",
        "tags": ["account-management", "qbr", "customer-success", "it-service-management", "upsell"],
        "author": "AINOW",
        "created": "2024-02-15T17:00:00Z",
        "featured": true
    },
    {
        "id": "sal-64",
        "title": "Upsell and Cross-Sell Playbook",
        "prompt": "You are a strategic account manager. Build a complete upsell and cross-sell playbook for a customer base of 80 mid-market accounts using a $60,000/year marketing analytics platform. The playbook must include: a framework for identifying the top 20 accounts most ready for expansion (based on usage signals: power users, feature adoption rate, support tickets about missing functionality, and growth in the customer's employee count), a tiered expansion strategy (Tier 1: seat expansion, Tier 2: module add-on, Tier 3: enterprise upgrade), a discovery question set for the expansion conversation that does not feel like a sales call, a success story template to reference during the upsell conversation (anonymized, showing a comparable company that expanded and achieved 40% more pipeline coverage), and email templates for initiating each tier of expansion conversation. All templates and frameworks complete.",
        "tags": ["account-management", "upsell", "cross-sell", "playbook", "marketing-analytics"],
        "author": "AINOW",
        "created": "2024-02-15T17:05:00Z",
        "featured": false
    },
    {
        "id": "sal-65",
        "title": "At-Risk Account Recovery Plan",
        "prompt": "You are a customer success leader. A 3-year enterprise customer — a 1,800-person insurance company paying $290,000/year for your claims processing platform — has submitted a formal request to review their contract 6 months before renewal. Their CSAT score dropped from 8.2 to 5.7 in Q4, they have an open P1 support ticket that is 18 days old, and their champion left the company last month. Write a complete at-risk recovery plan: (1) An internal triage meeting agenda (30 minutes, within 48 hours) to align CS, product, and executive teams; (2) An executive outreach email from your CRO or CEO to their SVP Technology — empathetic, takes ownership, specific proposed resolution; (3) A 30-day recovery plan with weekly milestones; (4) A plan to identify and develop a new champion; (5) A renewal negotiation strategy if the relationship stabilizes. Complete and usable.",
        "tags": ["account-management", "at-risk", "churn-prevention", "customer-success", "insurance"],
        "author": "AINOW",
        "created": "2024-02-15T17:10:00Z",
        "featured": false
    },
    {
        "id": "sal-66",
        "title": "Executive Relationship Building Plan",
        "prompt": "You are a strategic account executive. Write a 12-month executive relationship-building plan for your top strategic account: a $750M pharmaceutical company that currently spends $380,000/year on your clinical data platform and represents a $900,000 expansion opportunity over 3 years. The plan should cover: a schedule of executive touchpoints (QBRs, executive dinners, industry conferences, advisory board invitations) with goals for each, a 'value-add communication' calendar (what to send, when, and why — not vendor updates, but genuine industry intelligence), a strategy for building relationships with 3 new executives beyond your current champion, how to involve your own executive team (CEO, CRO) in key moments, and a scorecard for measuring relationship depth at 3, 6, and 12 months. Specific, practical, and designed for a single account manager to execute.",
        "tags": ["account-management", "executive-relationships", "strategic-accounts", "pharmaceutical", "planning"],
        "author": "AINOW",
        "created": "2024-02-15T17:15:00Z",
        "featured": false
    },
    {
        "id": "sal-67",
        "title": "Renewal Playbook: 90-Day Pre-Renewal Process",
        "prompt": "You are a customer success director. Write a complete 90-day pre-renewal playbook for a $140,000/year B2B SaaS platform (workforce analytics) with a customer base of 120 mid-market accounts. The playbook must cover: Day 90 — automated health score check and internal triage (which accounts to prioritize), Day 75 — CSM outreach email to schedule renewal conversation (template included), Day 60 — value delivered review meeting (agenda and talk track included), Day 45 — renewal proposal delivery (what to include), Day 30 — negotiation window opens (CSM authority levels and escalation triggers), Day 14 — urgency creation (specific language for early signing incentive), Day 7 — executive escalation if not signed (internal and external scripts), Day 0 — contract expiry protocol. Include decision criteria for early renewal discounts and how to handle a customer who goes silent during the renewal process.",
        "tags": ["account-management", "renewal", "playbook", "customer-success", "saas"],
        "author": "AINOW",
        "created": "2024-02-15T17:20:00Z",
        "featured": false
    },
    {
        "id": "sal-68",
        "title": "Customer Success Handoff: AE to CSM",
        "prompt": "You are a revenue operations director. Write a complete AE-to-CSM handoff process and template for a B2B SaaS company selling a $95,000/year talent management platform. The handoff document the AE completes must capture: (1) Company overview (size, industry, key stakeholders with contact info and relationship notes); (2) Why they bought (the 3 specific pain points that drove the deal); (3) Success metrics — what the customer said success looks like at 90 days and 12 months; (4) Implementation requirements (IT contacts, data migration scope, integration dependencies, go-live target date); (5) Relationship dynamics (who is the champion, who is skeptical, internal politics to be aware of); (6) Commitments made during the sale (any features promised on roadmap, custom SLA terms, onboarding support hours included); (7) Expansion signals (departments or use cases mentioned but not purchased). Template fully filled out as an example.",
        "tags": ["account-management", "handoff", "customer-success", "onboarding", "talent-management"],
        "author": "AINOW",
        "created": "2024-02-15T17:25:00Z",
        "featured": false
    },
    {
        "id": "sal-69",
        "title": "Expansion Deal: Land and Expand Strategy",
        "prompt": "You are a strategic account executive. You closed an initial $48,000/year deal with a 2,200-person global logistics company for your procurement automation platform — 1 business unit, 40 users, North America only. Write a complete 18-month land-and-expand strategy to grow this account to $240,000/year. The strategy must include: a success milestone plan for the first 90 days to ensure the initial deployment is visibly successful, a method for identifying the next business unit to expand into (using adoption data, internal referrals, and executive sponsorship), a cross-department discovery process (how to get internal introductions to 3 other business units without being seen as pushy), a case study creation process from the initial business unit's results to use internally, the commercial structure for the expansion proposal (new ACV tiers, volume discounts, enterprise agreement benefits), and a 4-quarter expansion timeline with revenue milestones.",
        "tags": ["account-management", "land-and-expand", "expansion", "logistics", "procurement"],
        "author": "AINOW",
        "created": "2024-02-15T17:30:00Z",
        "featured": false
    },
    {
        "id": "sal-70",
        "title": "Customer Advisory Board Invitation and Structure",
        "prompt": "You are a VP of Customer Success at a B2B analytics software company. Write a complete plan for launching a Customer Advisory Board (CAB) including: (1) Selection criteria for the 10–15 CAB members (mix of company size, industry, tenure, power users vs. executive sponsors); (2) A CAB invitation email to send to top strategic customers — 200 words, compelling, makes them feel selected not recruited; (3) The CAB charter — purpose, member expectations, meeting cadence, confidentiality norms; (4) An agenda template for the first CAB meeting (half-day format: company roadmap preview, member roundtable on industry trends, product feedback session, networking lunch); (5) A 12-month CAB engagement calendar; (6) How to measure the commercial impact of the CAB (retention rate of CAB members vs. non-members, expansion revenue attributed to CAB relationships, NPS differential). All documents complete and ready to use.",
        "tags": ["account-management", "customer-advisory-board", "customer-success", "engagement", "retention"],
        "author": "AINOW",
        "created": "2024-02-15T17:35:00Z",
        "featured": false
    },

    // --- SALES COACHING & ENABLEMENT (71-80) ---
    {
        "id": "sal-71",
        "title": "New AE Onboarding Plan: First 90 Days",
        "prompt": "You are a VP of Sales. Write a detailed 90-day onboarding plan for a new mid-market Account Executive joining a B2B SaaS company selling a $70,000–$150,000/year revenue intelligence platform. The plan must be structured by phase: Days 1–30 (learn the business) — specific learning activities, product certifications, call shadowing schedule, knowledge checks; Days 31–60 (build the foundation) — first prospecting activities, discovery call with manager shadowing, first solo demo with debrief, pipeline building targets; Days 61–90 (execute independently) — first self-sourced pipeline target ($400,000), first close attempt, weekly 1:1 coaching topics. Include a competency checklist for each phase, the criteria for 'ramp complete,' and the metrics used to assess whether the AE is on track vs. at risk. Make it specific enough that a hiring manager could hand this to a new AE on Day 1.",
        "tags": ["sales-coaching", "onboarding", "enablement", "new-hire", "ae"],
        "author": "AINOW",
        "created": "2024-02-15T18:00:00Z",
        "featured": true
    },
    {
        "id": "sal-72",
        "title": "Call Review Coaching Framework",
        "prompt": "You are a sales manager. Write a structured framework for conducting a 30-minute call review coaching session with an AE after listening to a recorded discovery call. The framework must cover: how to open the coaching session so the rep feels safe, not judged (specific opening language), a self-assessment method — 3 questions to ask the rep before giving your own feedback, a feedback delivery structure (observation, impact, alternative) with example language for each, the 3 highest-leverage coaching points to focus on in a single session (do not try to fix everything), a role-play exercise to practice the specific skill identified, how to close the session with a committed action and a measurement method, and a follow-up check-in template for the following week. Include a full sample coaching dialogue — 10 exchanges — between a manager and an AE reviewing a discovery call where the AE talked 70% of the time.",
        "tags": ["sales-coaching", "call-review", "management", "role-play", "feedback"],
        "author": "AINOW",
        "created": "2024-02-15T18:05:00Z",
        "featured": false
    },
    {
        "id": "sal-73",
        "title": "Sales Methodology Training: Challenger Sale Workshop",
        "prompt": "You are a sales enablement specialist designing a half-day Challenger Sale methodology workshop for a 25-person enterprise sales team at a $400M B2B industrial software company. Write the complete workshop curriculum including: Session 1 (45 min) — What is the Challenger Sale? Key concepts: teach, tailor, take control. Include 3 discussion questions to surface where reps default to relationship selling. Session 2 (45 min) — Building a 'Commercial Insight': how to construct a 5-minute insight that reframes the prospect's thinking. Write one complete example commercial insight for their industry (industrial software and manufacturing). Session 3 (45 min) — Tailoring to executive personas: how to adjust the insight for CFO vs. COO vs. VP of Operations. Session 4 (45 min) — Role-play practice: 4 scenarios with debrief criteria. Full workshop leader guide with timing, materials list, and learning outcomes.",
        "tags": ["sales-coaching", "enablement", "challenger-sale", "workshop", "methodology"],
        "author": "AINOW",
        "created": "2024-02-15T18:10:00Z",
        "featured": false
    },
    {
        "id": "sal-74",
        "title": "Performance Improvement Plan: Underperforming AE",
        "prompt": "You are a sales director. Write a structured 60-day Performance Improvement Plan (PIP) for an AE who is at 52% of quota in their 8th month. Diagnosis from call reviews: the AE is strong in prospecting (top 3 in outbound activity) but consistently loses deals at the proposal stage due to weak discovery — proposals do not connect to prospect pain, proposals include too many features, and pricing is presented without ROI context. The PIP must include: specific, measurable improvement goals (e.g., 'By Day 30, AE can demonstrate MEDDPICC qualification on 80% of their active pipeline in CRM'), weekly activities and learning commitments, bi-weekly 1:1 review criteria, the competency milestones that must be hit at Day 30 and Day 60, the consequences of not meeting the milestones, and the criteria for PIP completion. Written with HR-appropriate language and genuine developmental intent.",
        "tags": ["sales-coaching", "pip", "performance", "management", "quota"],
        "author": "AINOW",
        "created": "2024-02-15T18:15:00Z",
        "featured": false
    },
    {
        "id": "sal-75",
        "title": "Sales Battle Card: vs. Leading Competitor",
        "prompt": "You are a sales enablement manager at a B2B field service management software company. Write a complete competitive battle card for use by AEs when competing against ServiceMax in deals targeting VP of Field Operations at industrial equipment companies with 500–3,000 employees. The battle card must include: a 3-sentence overview of ServiceMax's positioning and ideal customer, their 5 product strengths (be honest and specific), their 5 product weaknesses or common customer complaints (sourced from G2 and Gartner categories, described specifically), your 5 competitive advantages over ServiceMax in deals of this type, 5 landmine questions to ask early in discovery that expose ServiceMax's weaknesses without naming them, responses to the 3 most common 'ServiceMax says' objections, a one-paragraph 'why we win' positioning statement, and 3 customer reference types that work best in competitive deals. Complete and ready for rep use.",
        "tags": ["sales-coaching", "battle-card", "competitive", "field-service", "enablement"],
        "author": "AINOW",
        "created": "2024-02-15T18:20:00Z",
        "featured": false
    },
    {
        "id": "sal-76",
        "title": "SDR Coaching: Email Deliverability and Personalization",
        "prompt": "You are an SDR manager. Write a complete training guide for SDRs on writing cold emails that get opened, read, and replied to. The guide must cover: the 5 subject line formulas that get 40–60% open rates with real examples for each (e.g., first-name + specific company reference, forward-style, question with a number), the anatomy of a cold email that gets replies (5 components: hook, problem statement, proof, CTA, PS line) with a complete example email for each component explained, the 5 most common cold email mistakes SDRs make with before/after rewrites for each, personalization techniques that scale (how to use LinkedIn activity, job postings, and earnings calls to personalize at volume), and A/B testing methodology for improving email performance over 30 days. Include 3 complete example cold emails for a $45,000/year e-signature platform targeting legal ops teams.",
        "tags": ["sales-coaching", "sdr", "email", "cold-outreach", "enablement"],
        "author": "AINOW",
        "created": "2024-02-15T18:25:00Z",
        "featured": false
    },
    {
        "id": "sal-77",
        "title": "Role-Play Scenario Library: Discovery to Close",
        "prompt": "You are a sales trainer. Write a role-play scenario library with 5 complete scenarios for training enterprise AEs across the full sales cycle for a $110,000/year ERP platform. Each scenario must include: the prospect persona (name, title, company type, personality type), the sales situation, the AE's objective for the exercise, the prospect's script (what they say, how they respond, what objections they raise), the key skills being evaluated, and a debrief rubric with 5 specific behaviors to look for. Scenarios: (1) Opening a discovery call with a skeptical VP of Finance; (2) Handling 'We already have a solution' mid-discovery; (3) Presenting a proposal to a 4-person buying committee with mixed enthusiasm; (4) Responding to a 20% discount demand in negotiation; (5) Recovering a stalled deal on a closing call. All roles and scripts complete.",
        "tags": ["sales-coaching", "role-play", "training", "erp", "enablement"],
        "author": "AINOW",
        "created": "2024-02-15T18:30:00Z",
        "featured": false
    },
    {
        "id": "sal-78",
        "title": "Sales Kickoff Keynote Outline",
        "prompt": "You are a VP of Sales preparing the keynote address for your company's annual Sales Kickoff (SKO) event. The company is a 150-person B2B SaaS company that grew ARR from $28M to $41M last year but missed the $48M target. The theme for this year's SKO is 'Precision Over Volume.' Write a complete 45-minute keynote outline including: opening hook (not 'Good morning everyone') — a story or statistic that immediately frames the year ahead, a 5-minute honest look back at last year (what drove the $41M, why the $48M was missed, without blame), the strategic priorities for the coming year (3 priorities with specific targets), the 'Precision Over Volume' framework explained with a concrete analogy, 3 stories of rep excellence from last year (describe the narrative arc of each story), the tools and enablement investments being made this year, and a motivational close that is specific and earned, not generic. Full speaker notes included.",
        "tags": ["sales-coaching", "sko", "keynote", "leadership", "strategy"],
        "author": "AINOW",
        "created": "2024-02-15T18:35:00Z",
        "featured": false
    },
    {
        "id": "sal-79",
        "title": "Objection Handling Flashcard Set: Top 10 Objections",
        "prompt": "You are a sales enablement specialist. Create a complete set of 10 objection handling flashcards for AEs selling a $80,000/year SaaS-based accounting and ERP platform to CFOs and Controllers at mid-market companies (100–500 employees). Each flashcard must have: the objection (front of card), the type of objection it is (price, timing, need, trust, competition), the recommended response structure (acknowledge, reframe, ask), and the complete word-for-word response script (back of card). The 10 objections: (1) 'We just renewed our current accounting software,' (2) 'This is too expensive for our budget,' (3) 'We're not ready to change our systems right now,' (4) 'Can we just use QuickBooks?', (5) 'We need board approval for this,' (6) 'Your implementation timeline is too long,' (7) 'What if our data gets lost during migration?', (8) 'We've had bad experiences with software implementations,' (9) 'Our team won't switch from the current system,' (10) 'We want to wait until next fiscal year.' All responses complete.",
        "tags": ["sales-coaching", "objection-handling", "flashcards", "erp", "accounting"],
        "author": "AINOW",
        "created": "2024-02-15T18:40:00Z",
        "featured": false
    },
    {
        "id": "sal-80",
        "title": "Top-Performer Interview: Deconstruct a $1M Deal",
        "prompt": "You are a sales enablement leader. Write a structured interview guide for capturing and codifying the winning strategy of a top-performing enterprise AE who just closed a $1.1M/year multi-year deal with a Fortune 500 retail company for a workforce management platform. The interview must extract: how they identified the account and what triggered outreach, the moment they knew it was a real opportunity, how they navigated a 7-person buying committee, the competitive situation and how they won despite being 20% more expensive, the role of the executive sponsor and how it was secured, what almost killed the deal at month 4 and how it was recovered, the specific commercial structure that sealed it, and the 3 things they would do differently. Include a 'lessons learned' summary template that can be turned into a team playbook and a case study for new hire onboarding.",
        "tags": ["sales-coaching", "top-performer", "deal-deconstruction", "enterprise", "playbook"],
        "author": "AINOW",
        "created": "2024-02-15T18:45:00Z",
        "featured": false
    },

    // --- FORECASTING, REVOPS & TERRITORY (81-90) ---
    {
        "id": "sal-81",
        "title": "Sales Forecast Review: Weekly Pipeline Meeting",
        "prompt": "You are a VP of Sales running the weekly forecast review for a 15-person enterprise sales team at a $60M ARR B2B SaaS company. The team sells a $100,000–$400,000/year cloud infrastructure platform. Write a complete guide for conducting a high-quality 60-minute weekly pipeline and forecast review that is rigorous but does not feel like a CRM audit. The guide must include: a pre-meeting preparation checklist for reps (what to update in CRM before the meeting, what to be ready to explain), a deal-by-deal review framework (the 5 questions to ask about every deal in 'commit' and 'upside' stages), how to challenge a forecast without demoralizing the rep, a technique for identifying sandbagging vs. overconfidence in deals, how to use MEDDPICC scores to validate forecast category, and a post-meeting action template. Include a sample 10-minute dialogue between a sales manager and an AE reviewing a $230,000 deal stuck at 'Proposal Sent' for 35 days.",
        "tags": ["forecasting", "pipeline", "sales-ops", "management", "revops"],
        "author": "AINOW",
        "created": "2024-02-15T19:00:00Z",
        "featured": true
    },
    {
        "id": "sal-82",
        "title": "Revenue Operations Dashboard Design",
        "prompt": "You are a revenue operations director. Design a comprehensive RevOps dashboard for the leadership team of a $80M ARR B2B SaaS company with 25 AEs and a 120-day average sales cycle. The dashboard must cover 4 sections: (1) Pipeline health — leading indicators: new pipeline created by week, pipeline coverage ratio by segment, average deal age by stage, and stage-by-stage conversion rates; (2) Forecast accuracy — trailing 4-quarter actuals vs. forecast, current quarter commit vs. upside vs. pipeline, and rep-level forecast accuracy scores; (3) Sales efficiency — sales velocity formula (deals × ACV × win rate ÷ cycle length), ramp time for new AEs, and CAC by segment; (4) Activity metrics — outbound touches per rep per week, discovery call to demo conversion rate, demo to proposal rate. For each metric: define it precisely, state the recommended target benchmark, and describe what action to take when it falls below the red-line threshold.",
        "tags": ["revops", "dashboard", "forecasting", "metrics", "saas"],
        "author": "AINOW",
        "created": "2024-02-15T19:05:00Z",
        "featured": false
    },
    {
        "id": "sal-83",
        "title": "Territory Planning Framework: New AE Assignment",
        "prompt": "You are a VP of Sales and revenue strategy leader. Write a complete territory planning framework for assigning and building a territory plan for a new enterprise AE joining a B2B healthcare IT company (product: $130,000/year patient engagement platform). The territory is the Southeast US — covering Florida, Georgia, North Carolina, South Carolina, and Tennessee. The framework must include: how to segment the territory by account tier (Tier 1: health systems with 5+ hospitals, Tier 2: regional hospitals 200–500 beds, Tier 3: large physician group practices), an account prioritization methodology using 5 scoring criteria (bed count, current tech spend signals, recent EHR modernization news, payer mix, proximity to existing reference customers), a 30-60-90 day territory activation plan with specific targets, a quarterly cadence for territory review, and a one-page territory plan template the AE fills out and the manager approves.",
        "tags": ["territory-planning", "revops", "healthcare", "ae", "strategy"],
        "author": "AINOW",
        "created": "2024-02-15T19:10:00Z",
        "featured": false
    },
    {
        "id": "sal-84",
        "title": "Sales Compensation Plan Design",
        "prompt": "You are a sales compensation consultant. Design a complete sales compensation plan for a mid-market AE at a $55M ARR B2B SaaS company selling a $50,000–$120,000/year procurement platform. The plan must specify: on-target earnings (OTE) structure (base vs. variable split, recommended for this role and company stage), quota calculation methodology (how to set individual quotas from team target), commission rate structure (rate per dollar of ACV closed, with explanation of why this rate makes sense), accelerators (when they kick in, how much they boost commission — e.g., 1.5× multiplier above 100% quota), decelerators for below-threshold performance, a SPIF (Sales Performance Incentive Fund) structure for Q4 push, clawback policy for churned deals within 90 days, multi-year deal crediting (full ACV in year 1, none in years 2–3? Or prorated?), and a worked example showing a rep's total earnings in 3 scenarios: 80% quota attainment, 100%, and 130%.",
        "tags": ["revops", "compensation", "quota", "commission", "saas"],
        "author": "AINOW",
        "created": "2024-02-15T19:15:00Z",
        "featured": false
    },
    {
        "id": "sal-85",
        "title": "CRM Data Hygiene Playbook",
        "prompt": "You are a revenue operations manager. Write a complete CRM data hygiene playbook for a 30-person sales team using Salesforce at a B2B SaaS company with $45M ARR. The playbook must include: a definition of the 10 required fields that must be populated for a deal to be included in the forecast (with acceptable vs. unacceptable field entries for each), a weekly rep checklist for CRM updates (5-minute routine, specific fields to review and update), a monthly ops audit process (what the RevOps team checks, what gets flagged, how discrepancies are handled), a data quality scoring system (how to calculate a 'CRM hygiene score' per rep and per deal), the top 5 data quality errors that corrupt forecast accuracy with examples of each, an incentive structure for maintaining data quality (how to tie it to recognition or minor SPIFs), and an onboarding module for new reps on CRM standards. All sections complete and implementable.",
        "tags": ["revops", "crm", "data-hygiene", "salesforce", "operations"],
        "author": "AINOW",
        "created": "2024-02-15T19:20:00Z",
        "featured": false
    },
    {
        "id": "sal-86",
        "title": "Win/Loss Analysis Program",
        "prompt": "You are a revenue intelligence consultant. Design a complete Win/Loss Analysis program for a 50-person go-to-market team at a $70M ARR B2B analytics company. The program must include: (1) Methodology — how to conduct win/loss interviews (who conducts them, when, how to get losing prospects to participate), a 15-question interview guide for won deals and a separate 15-question guide for lost deals; (2) Analysis framework — how to categorize findings across 6 dimensions (product fit, price competitiveness, sales process quality, competitive strength, customer relationship, and timing); (3) Reporting cadence — what to share with sales, marketing, product, and leadership, and how often; (4) Action loops — how insights feed back into product roadmap, battle cards, pricing strategy, and sales training; (5) A sample win/loss summary slide for a quarterly business review. Complete and operational.",
        "tags": ["revops", "win-loss", "analysis", "strategy", "competitive-intelligence"],
        "author": "AINOW",
        "created": "2024-02-15T19:25:00Z",
        "featured": false
    },
    {
        "id": "sal-87",
        "title": "Channel Partner Enablement Program",
        "prompt": "You are a channel sales director. Design a complete partner enablement program for onboarding and activating 20 new value-added resellers (VARs) for a $95,000/year cybersecurity platform. The program must cover: (1) Partner onboarding journey — a 30-day activation plan (certification tracks, sandbox access, first joint pipeline target); (2) Partner portal content — list of the 10 most critical assets partners need (battle cards, demo scripts, pricing calculator, ROI tool, co-branded proposal template); (3) Demand generation support — 3 co-marketing programs partners can run (webinar kit, email campaign kit, event sponsorship framework) with all templates provided; (4) Deal registration process — the exact process, SLA commitments, and conflict resolution policy; (5) Partner performance tiers (Silver, Gold, Platinum) — criteria for each tier and the incremental benefits at each level; (6) Quarterly partner business review agenda. All frameworks and templates specified in full.",
        "tags": ["channel-sales", "partner-enablement", "vар", "cybersecurity", "program"],
        "author": "AINOW",
        "created": "2024-02-15T19:30:00Z",
        "featured": false
    },
    {
        "id": "sal-88",
        "title": "Sales and Marketing Alignment SLA",
        "prompt": "You are a revenue operations consultant. Write a complete Sales and Marketing Service Level Agreement (SLA) for a B2B SaaS company with $35M ARR, a 20-person sales team, and a 10-person marketing team. The SLA must define: (1) Lead definitions — a precise definition of a Marketing Qualified Lead (MQL), a Sales Accepted Lead (SAL), and a Sales Qualified Lead (SQL) with specific criteria for each that leaves no ambiguity; (2) Lead handoff process — the exact workflow from MQL to SAL acceptance or rejection, including time SLAs (e.g., SDR must accept or reject an MQL within 4 business hours); (3) Lead rejection criteria — the 5 acceptable reasons for an SDR to reject a marketing lead, and the process for marketing to review rejections; (4) Marketing commitments — monthly MQL volume targets by source; (5) Sales commitments — follow-up activity SLAs, CRM documentation requirements; (6) Dispute resolution process; (7) Monthly alignment meeting agenda template. Complete and immediately usable.",
        "tags": ["revops", "sla", "sales-marketing-alignment", "leads", "operations"],
        "author": "AINOW",
        "created": "2024-02-15T19:35:00Z",
        "featured": false
    },
    {
        "id": "sal-89",
        "title": "Annual Sales Planning: Bottoms-Up Quota Model",
        "prompt": "You are a VP of Sales and revenue strategy leader. Write a complete guide to building a bottoms-up annual quota model for a B2B SaaS company aiming to grow from $42M to $65M ARR in the coming fiscal year. The guide must cover: how to calculate the total new ARR required after accounting for expected churn (assume 8% gross churn), how to segment the target by source (new logo vs. expansion vs. reactivation), how to calculate the number of AEs needed based on average quota attainment (typically 70% of reps hit quota — how does this affect headcount planning?), how to determine individual rep quotas using a fair and defensible methodology, how to account for ramp time for new hires hired throughout the year, how to stress-test the model with 3 scenarios (base, upside, downside), and how to present this model to the board in a clear and credible way. Include a worked example with real numbers throughout.",
        "tags": ["forecasting", "quota", "annual-planning", "revops", "leadership"],
        "author": "AINOW",
        "created": "2024-02-15T19:40:00Z",
        "featured": false
    },
    {
        "id": "sal-90",
        "title": "AI in Sales Operations: Implementation Roadmap",
        "prompt": "You are a revenue operations and AI strategy consultant. Write a practical 12-month roadmap for a $50M ARR B2B SaaS company to integrate AI tools across their sales operations without disrupting productivity or creating tool fatigue. The roadmap must cover: Month 1–3 (Foundation) — AI use cases to prioritize first (call transcription and analysis, email personalization at scale, CRM data entry automation) with specific tools, implementation steps, and success metrics for each; Month 4–6 (Intelligence) — conversation intelligence for deal coaching, AI-assisted pipeline health scoring, and predictive churn signals for account management; Month 7–9 (Automation) — AI SDR tools for outbound sequencing, automated competitive intelligence briefings, and AI-generated proposal first drafts; Month 10–12 (Optimization) — measuring AI impact on quota attainment, sales cycle length, and rep productivity. For each initiative: include expected ROI, change management considerations, and the biggest implementation risk. Practical and specific.",
        "tags": ["revops", "ai", "automation", "sales-ops", "roadmap"],
        "author": "AINOW",
        "created": "2024-02-15T19:45:00Z",
        "featured": true
    },

    // --- PARTNER, CHANNEL & ADVANCED STRATEGY (91-100) ---
    {
        "id": "sal-91",
        "title": "Strategic Partnership Outreach: Technology Ecosystem",
        "prompt": "You are a VP of Business Development at a B2B data analytics company. Write a complete partnership outreach strategy for recruiting 5 technology integration partners from the Salesforce AppExchange ecosystem to build native integrations with your $90,000/year business intelligence platform. For each outreach type, write complete assets: (1) A cold email to the VP of Business Development or Head of Partnerships at a Salesforce ISV partner — 150 words, specific to the Salesforce ecosystem, clear mutual benefit articulated; (2) A LinkedIn message to the same persona — under 300 characters; (3) A one-page partnership value proposition document covering: integration opportunity, shared customer overlap estimate, go-to-market co-sell model, technical integration scope, and expected deal size influence; (4) A follow-up email for when the initial outreach gets a 'Tell me more' response. All 4 assets complete and ready to send.",
        "tags": ["partner-sales", "biz-dev", "salesforce", "ecosystem", "outreach"],
        "author": "AINOW",
        "created": "2024-02-15T20:00:00Z",
        "featured": false
    },
    {
        "id": "sal-92",
        "title": "Channel Conflict Resolution Playbook",
        "prompt": "You are a channel sales director. Write a complete playbook for managing and resolving the 5 most common channel conflict scenarios in a partner-led sales model for a $115,000/year enterprise IoT platform sold through a network of 40 channel partners. Conflict scenarios: (1) A direct sales rep and a partner are both actively working the same account; (2) A partner submits a deal registration for an account already in your direct team's territory plan; (3) Two partners are both claiming the same deal; (4) A partner is discounting deeply below MAP (minimum advertised price) to win a deal; (5) A customer bought through a partner and is now requesting to move to a direct relationship. For each conflict: describe the scenario in detail, the impact on partner trust if handled badly, the resolution process step by step, the conversation script for delivering the resolution, and the policy change to implement to prevent recurrence.",
        "tags": ["channel-sales", "conflict", "partners", "policy", "iot"],
        "author": "AINOW",
        "created": "2024-02-15T20:05:00Z",
        "featured": false
    },
    {
        "id": "sal-93",
        "title": "Enterprise Account-Based Selling Plan",
        "prompt": "You are a strategic account executive. Write a complete Account-Based Selling (ABS) plan for a single named enterprise account: a $3.2B global logistics company with 8,200 employees across 14 countries. You are selling a $450,000/year supply chain risk intelligence platform. The ABS plan must include: (1) Account intelligence summary — company strategy, top 3 business initiatives publicly stated in their 2024 annual report, technology stack, key executives and LinkedIn profiles; (2) Stakeholder map — 8 stakeholders across IT, Operations, Finance, and Procurement with their likely stance toward your solution (advocate, neutral, skeptic); (3) Value hypothesis for each stakeholder — one sentence of specific value per persona; (4) Engagement plan — 6-month outreach cadence across all 8 stakeholders; (5) Internal alignment plan — how to coordinate AE, SE, CSM, and executive sponsor; (6) Success metrics — what does a successful 6-month engagement look like. Complete and detailed.",
        "tags": ["partner-sales", "abm", "enterprise", "account-planning", "supply-chain"],
        "author": "AINOW",
        "created": "2024-02-15T20:10:00Z",
        "featured": true
    },
    {
        "id": "sal-94",
        "title": "Product-Led Growth Sales Motion",
        "prompt": "You are a VP of Sales at a product-led growth (PLG) B2B SaaS company. Write a complete playbook for a 'Sales Assist' motion where AEs work accounts that have self-serve adoption but need enterprise conversion. The company sells a $24/user/month developer tools platform that has 120,000 self-serve users and needs to convert the top 500 accounts to enterprise contracts ($60,000–$240,000/year). The playbook must cover: the product usage signals that trigger an AE to engage a self-serve account (e.g., 50+ users, 3+ teams, API volume spike, SSO setup attempt), the initial outreach approach when the account already uses your product (not a cold call — a warm expansion conversation), a discovery framework specifically for PLG accounts where the champion is already a power user, the value proposition shift from 'try our product' to 'scale it enterprise-wide,' and a negotiation framework for converting a $0 self-serve account to a $120,000 enterprise contract. All scripts and frameworks complete.",
        "tags": ["partner-sales", "plg", "product-led-growth", "enterprise", "developer-tools"],
        "author": "AINOW",
        "created": "2024-02-15T20:15:00Z",
        "featured": false
    },
    {
        "id": "sal-95",
        "title": "International Sales Expansion: EMEA Go-to-Market",
        "prompt": "You are a VP of International Sales. Write a detailed go-to-market plan for expanding a $55M ARR US-based B2B SaaS company (HR tech platform, $80,000–$180,000/year ACV) into the EMEA market (initial focus: UK, Germany, and France) in the next 18 months. The plan must cover: (1) Market prioritization — why UK first, then Germany and France, with market size estimates and competitive landscape differences; (2) Talent strategy — hire locally or expand US team remotely? First 3 roles to hire and what to look for in each; (3) Localization requirements — what must be localized beyond language (GDPR compliance, local payment terms, cultural selling differences in each country); (4) Channel strategy — direct vs. local SI partners, pros and cons; (5) First-year revenue target and pipeline coverage required; (6) Key risks and mitigation strategies. Specific, commercially grounded, and based on realistic EMEA SaaS expansion benchmarks.",
        "tags": ["territory-planning", "international", "emea", "go-to-market", "hr-tech"],
        "author": "AINOW",
        "created": "2024-02-15T20:20:00Z",
        "featured": false
    },
    {
        "id": "sal-96",
        "title": "Customer Reference Program Design",
        "prompt": "You are a customer marketing and sales enablement director. Design a complete customer reference program for a B2B SaaS company with 400 customers and an $85,000 average ACV. The program must include: (1) Reference identification — criteria for selecting reference customers (NPS above 8, 12+ months tenure, strong ROI story, executive sponsor engaged), how to ask a customer to join the program (complete email template), and the incentive structure for reference participation; (2) Reference types and their use in the sales cycle — case study, peer call, site visit, video testimonial, advisory board — for which sales stage each is most effective; (3) Reference management process — how to track reference requests, prevent reference fatigue (maximum asks per reference customer per quarter), and thank reference customers after each use; (4) Reference content production — a template for a 1-page written case study and a guide for producing a 2-minute video testimonial; (5) Measuring program ROI — metrics and targets. Complete and operational.",
        "tags": ["sales-enablement", "customer-reference", "social-proof", "marketing", "program"],
        "author": "AINOW",
        "created": "2024-02-15T20:25:00Z",
        "featured": false
    },
    {
        "id": "sal-97",
        "title": "Enterprise Procurement Navigation Guide",
        "prompt": "You are an enterprise sales strategist who has closed over 200 Fortune 1000 deals. Write a comprehensive guide to navigating enterprise procurement processes for AEs selling $100,000–$500,000/year SaaS platforms. The guide must cover: understanding the anatomy of enterprise procurement (the players — procurement manager, legal, IT security, CFO, business sponsor — and what each cares about), how to front-load the procurement process (security questionnaire, DPA, standard contract terms) 60 days before expected close to avoid end-of-quarter delays, how to build a relationship with the procurement manager as an ally not an adversary, 5 common procurement stalls and how to unstick each one (security review delay, legal redline backlog, budget freeze, new procurement manager joining, year-end spending freeze), how to use your executive sponsor to accelerate procurement without going around the procurement manager, and a pre-close checklist of 12 items to verify before sending the contract. Complete and ready for an AE to use on their next enterprise deal.",
        "tags": ["enterprise", "procurement", "strategy", "closing", "navigation"],
        "author": "AINOW",
        "created": "2024-02-15T20:30:00Z",
        "featured": true
    },
    {
        "id": "sal-98",
        "title": "Sales Leadership: Building a High-Performance Team Culture",
        "prompt": "You are a VP of Sales who has built and led 3 high-performing sales teams at B2B SaaS companies. Write a practical guide for a first-time sales leader on building a high-performance team culture in a 15–25 person enterprise sales team. The guide must cover: the 5 cultural pillars that differentiate high-performing sales teams from average ones (with specific behaviors that demonstrate each pillar), how to establish norms in the first 90 days without feeling imposed (the 'listen first, shape second' approach), how to design weekly team rhythms that drive accountability without micromanagement (weekly forecast call, bi-weekly skill session, monthly team debrief), how to recognize and reward performance in ways that motivate the whole team not just top performers, how to handle the 3 most common team culture destroys (a toxic top performer, a clique of underperformers, a culture of blame after a lost deal), and how to scale the culture as the team grows from 10 to 50 people. Specific and practical throughout.",
        "tags": ["sales-coaching", "leadership", "culture", "management", "team-building"],
        "author": "AINOW",
        "created": "2024-02-15T20:35:00Z",
        "featured": false
    },
    {
        "id": "sal-99",
        "title": "Deal Desk Process Design",
        "prompt": "You are a revenue operations and deal strategy director. Design a complete Deal Desk process for a $65M ARR B2B SaaS company with a 30-person enterprise sales team. The Deal Desk handles non-standard commercial requests including custom pricing, non-standard contract terms, bundled offers, and multi-year structures. The process design must include: (1) Deal Desk trigger criteria — which deals must go through Deal Desk vs. which AEs can approve themselves (e.g., AE can approve up to 10% discount; anything above or with non-standard terms requires Deal Desk review); (2) Submission requirements — what information the AE must provide to initiate a Deal Desk review (template included); (3) SLA commitments — turnaround time by deal complexity and urgency level; (4) Approval matrix — who approves what (Deal Desk analyst, VP of Sales, CFO); (5) Deal structuring principles — how to structure a custom deal that serves the customer while protecting gross margin; (6) Conflict resolution when AE disagrees with Deal Desk ruling. Complete and implementable.",
        "tags": ["revops", "deal-desk", "pricing", "operations", "enterprise"],
        "author": "AINOW",
        "created": "2024-02-15T20:40:00Z",
        "featured": false
    },
    {
        "id": "sal-100",
        "title": "2026 Enterprise Sales Playbook: AI-Era Selling",
        "prompt": "You are a chief revenue officer and sales futurist. Write a comprehensive guide on how enterprise B2B sales must evolve in 2026 and beyond as AI transforms both the buying and selling sides of the table. The guide must cover: (1) How AI is changing the buyer's journey — buyers now arrive at vendor conversations 80% informed; what does this mean for the value of traditional discovery? (2) The new role of the enterprise AE — from information provider to trusted advisor and deal architect; specific competencies AEs must develop to stay relevant; (3) AI tools that are now non-negotiable in a high-performing sales stack — conversation intelligence, AI-assisted prospecting, AI deal coaching, and predictive pipeline management — with specific use cases for each; (4) How to sell to AI-augmented buying committees — procurement teams using AI to analyze vendor proposals and benchmark pricing; how to respond; (5) The skills that AI cannot replace in complex enterprise selling — and how to develop and demonstrate them; (6) A 12-month plan for a VP of Sales to transform their team for the AI era. Forward-looking, commercially grounded, and actionable.",
        "tags": ["strategy", "ai", "future-of-sales", "enterprise", "leadership"],
        "author": "AINOW",
        "created": "2024-02-15T20:45:00Z",
        "featured": true
    }

];
  __exports.salesPrompts = salesPrompts;
})();