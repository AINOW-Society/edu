(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/playbooks'] = AINOW['src/playbooks'] || {};
const { MessageSquare, FileText, TrendingUp, AlertCircle, Briefcase, Users, Handshake, CalendarCheck, ArrowRight, Copy, RotateCcw, ChevronRight, ChevronLeft, Sparkles, Zap, BookOpen, Layers, Search, Loader2, Wand2, Brain, Target, UserCog, PenTool, Code, GraduationCap, Megaphone, HeartHandshake, Feather, Building2, Shield, BarChart3, Truck, Leaf, Scale, Landmark, Heart, Info, Lightbulb } = lucide;
const { useState, useEffect, useRef, useMemo, useCallback } = React;
const { createRoot } = ReactDOMClient;


const { Header, Footer, ShortcutsModal, SidebarWrapper, EmptyState, addToHistory, useLanguage, useToast, Toast, useGlobalShortcuts, Scratchpad, SettingsModal, Pagination } = AINOW['src/components'];
const { playbooksData } = AINOW['data/data-playbooks'];
const { SITUATIONS, SITUATION_CATEGORIES } = AINOW['data/data-situations'];
const { copyTextToClipboard } = AINOW['src/utils'];

const html = htm.bind(React.createElement);

// ─── Icon maps ────────────────────────────────────────────────────────────────
const ICON_MAP = {
    MessageSquare, FileText, TrendingUp, AlertCircle, Briefcase, Users,
    Handshake, CalendarCheck, Sparkles, Brain, Target, UserCog,
    PenTool, Code, BookOpen, Wand2, Zap, Lightbulb, Info, Search,
    GraduationCap, Megaphone, HeartHandshake, Feather, Building2,
    Shield, BarChart3, Truck, Leaf, Scale, Landmark, Layers
};
const getIcon = (name) => ICON_MAP[name] || FileText;

const PB_CAT_ICONS = {
    all: BookOpen, favorites: Heart, coding: Code, marketing: Megaphone,
    government: Building2, ngo: HeartHandshake, education: GraduationCap,
    creative: Sparkles, business: Briefcase, productivity: Zap,
    communication: MessageSquare, sales: TrendingUp, hr: Users,
    finance: Landmark, psychology: Brain, data: BarChart3, product: Layers,
    cybersecurity: Shield, legal: Scale, climate: Leaf, logistics: Truck,
    research: Search, writing: Feather
};
const SIT_CAT_ICONS = {
    all: Sparkles, leadership: Target, business: Briefcase,
    communication: MessageSquare, career: UserCog, productivity: Zap,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const interpolate = (tpl, vars) =>
    (tpl || '').replace(/\{\{([^{}]+)\}\}/g, (_, k) => vars[k.trim()] || `[${k.trim()}]`);

const sitInterpolate = (tpl, answers) =>
    (tpl || '').replace(/\{\{([^{}]+)\}\}/g, (_, k) => {
        const v = answers[k.trim()];
        return v !== undefined && v !== '' ? v : `[${k.trim()}]`;
    });

// ─── Smart question enhancer ─────────────────────────────────────────────────
// Converts short playbook input labels into proper consultant-style questions
// and detects whether the question needs a textarea (long input) or text field.
const LABEL_MAP = {
    'raw code':         { q: 'Paste the code you want to work with:',              type: 'textarea' },
    'code':             { q: 'Paste the code you want to work with:',              type: 'textarea' },
    'ui description':   { q: 'Describe the UI screens or interface:',              type: 'textarea' },
    'screen':           { q: 'Describe the UI or screen layout:',                  type: 'textarea' },
    'incident details': { q: 'Describe the incident or security alert:',           type: 'textarea' },
    'alerts':           { q: 'What are the security alerts or incident details?',  type: 'textarea' },
    'dataset desc':     { q: 'Describe your dataset or data tables:',              type: 'textarea' },
    'topic':            { q: 'What is the main topic or subject?',                 type: 'text' },
    'job title':        { q: 'What position or role are you hiring for?',          type: 'text' },
    'role':             { q: 'What role or position are you addressing?',          type: 'text' },
    'target behavior':  { q: 'What behaviour or pattern do you want to address?',  type: 'text' },
    'pattern':          { q: 'What behaviour or pattern do you want to change?',   type: 'text' },
    'public issue':     { q: 'What public or policy issue are you addressing?',    type: 'text' },
    'issue':            { q: 'What is the issue or challenge you are facing?',     type: 'text' },
    'contract type':    { q: 'What type of legal document or contract is this?',   type: 'text' },
    'contract':         { q: 'Describe the contract or legal document:',           type: 'textarea' },
    'team size':        { q: 'How large is your team or organization?',            type: 'text' },
    'size':             { q: 'What is the size or scale you are working with?',    type: 'text' },
    'current revenue':  { q: 'What is your current revenue or budget range?',      type: 'text' },
    'revenue':          { q: 'What is your annual revenue or financial context?',  type: 'text' },
    'company name':     { q: 'What is your company or organization name?',         type: 'text' },
    'product':          { q: 'What product or service are you focusing on?',       type: 'text' },
    'route':            { q: 'Describe your supply chain route or context:',       type: 'text' },
    'startup name':     { q: 'What is your startup or company name?',              type: 'text' },
    'pitch deck':       { q: 'Describe your pitch deck or investor context:',      type: 'textarea' },
    'market':           { q: 'What market or industry are you targeting?',         type: 'text' },
    'policy':           { q: 'What policy or regulation are you working with?',    type: 'text' },
    'research topic':   { q: 'What is your research topic or field?',              type: 'text' },
    'thesis':           { q: 'Describe your research thesis or hypothesis:',       type: 'textarea' },
    'grant type':       { q: 'What type of grant or funding are you applying for?', type: 'text' },
    'beneficiary':      { q: 'Who are the beneficiaries of this project?',         type: 'text' },
    'budget':           { q: 'What is your budget range?',                         type: 'text' },
    'project':          { q: 'Describe your project or initiative:',               type: 'textarea' },
    'property':         { q: 'What type of property are you working with?',        type: 'text' },
    'location':         { q: 'What is the location or target region?',             type: 'text' },
    'patient':          { q: 'Describe the patient case or medical context:',      type: 'textarea' },
    'symptoms':         { q: 'What are the symptoms or medical concerns?',         type: 'textarea' },
    'case':             { q: 'Describe the case or situation in detail:',          type: 'textarea' },
    'subject':          { q: 'What subject or course are you working with?',       type: 'text' },
    'lesson':           { q: 'What is the lesson topic or learning objective?',    type: 'text' },
    'student':          { q: 'Describe the student or learner profile:',           type: 'text' },
    'campaign':         { q: 'Describe your campaign goal or focus:',              type: 'textarea' },
    'brief':            { q: 'Describe your project brief or requirements:',       type: 'textarea' },
    'keyword':          { q: 'What are your main keywords or topics?',             type: 'text' },
    'niche':            { q: 'What is your niche or specialization?',              type: 'text' },
    'audience':         { q: 'Who is your target audience?',                       type: 'text' },
    'brand':            { q: 'Describe your brand identity or positioning:',       type: 'text' },
};

const TEXTAREA_SIGNALS = /code|desc|detail|context|background|brief|content|text|letter|report|proposal|draft|plan|script|summary|analysis|review|notes|paragraph/i;

const enhanceInput = (inp) => {
    const key = (inp.label || '').toLowerCase().trim();
    if (LABEL_MAP[key]) return LABEL_MAP[key];
    // Partial match
    for (const [pattern, mapped] of Object.entries(LABEL_MAP)) {
        if (key.includes(pattern) || pattern.includes(key)) return mapped;
    }
    const isLong = TEXTAREA_SIGNALS.test(key) || TEXTAREA_SIGNALS.test((inp.key || '').toLowerCase());
    const q = key.endsWith('?') ? inp.label : `What is your ${key}?`;
    return { q, type: isLong ? 'textarea' : 'text' };
};

// ─── Pre-written situation-style templates for all 20 playbook base types ────
// Each entry maps a base template ID (first 5 chars of pb.id) to:
//   questions[]  — smart consultant-style questions (text / textarea)
//   template_quick / template_full / chain_1-3  — standalone prompts using {{VAR}}
// {{VARIANT}} is auto-injected as the clean variant name (e.g. "Python", "LinkedIn", "SaaS App")
const PB_SITUATION_TEMPLATES = {

    // ── Code Refactor (pb-cr) ──────────────────────────────────────────────────
    'pb-cr': {
        questions: [
            { id: 'CODE',    type: 'textarea', _label: 'Paste the code you want to work with:',                       _placeholder: 'Paste your code here...' },
            { id: 'GOAL',    type: 'select', _label: 'What is the primary improvement goal?', options: ['Improve performance', 'Fix bugs & logic errors', 'Improve readability', 'Add type safety', 'Security hardening', 'Add test coverage', 'Modernize / refactor'] },
            { id: 'CONTEXT', type: 'text',  _label: 'Any framework version or team conventions to consider?', _placeholder: 'e.g. React 18, TypeScript strict mode, company style guide' },
        ],
        template_quick:
`Act as a senior {{VARIANT}} engineer and expert code reviewer.

Review the code below and provide a concise expert audit covering:
1. Logical flaws or bugs
2. Performance bottlenecks
3. Security vulnerabilities
4. Readability and maintainability issues

Goal: {{GOAL}}
Context: {{CONTEXT}}

Code:
\`\`\`
{{CODE}}
\`\`\`

Provide specific, actionable recommendations with code examples where applicable.`,
        template_full:
`You are a principal {{VARIANT}} engineer conducting a comprehensive code review for a production system.

Primary Goal: {{GOAL}}
Constraints & Context: {{CONTEXT}}

Code to Review:
\`\`\`
{{CODE}}
\`\`\`

Deliver a full technical report covering:

## 1. Critical Issues
Bugs, security vulnerabilities, and breaking flaws — must fix before production.

## 2. Performance Analysis
Time/space complexity, unnecessary re-renders, blocking calls, memory leaks.

## 3. Code Quality
Naming conventions, separation of concerns, DRY violations, SOLID principles.

## 4. Modernization Opportunities
Outdated patterns, deprecated APIs, newer language features that improve the code.

## 5. Refactored Version
A clean, improved version of the code with inline comments explaining each change.

## 6. Testing Recommendations
Key test cases and edge cases to cover for this code.

Be specific — reference exact line numbers or function names where applicable.`,
        chain_1:
`Act as a senior {{VARIANT}} engineer. Perform a static audit of the following code.

Goal: {{GOAL}}
Context: {{CONTEXT}}

Code:
\`\`\`
{{CODE}}
\`\`\`

List every issue — bugs, security flaws, performance problems, and bad practices.
For each issue specify: the problem, why it matters, and severity (Critical / High / Medium / Low).`,
        chain_2:
`You are a {{VARIANT}} expert. Rewrite the following code with all identified issues resolved.

Code:
\`\`\`
{{CODE}}
\`\`\`

Goal: {{GOAL}}
Context: {{CONTEXT}}

Provide the fully refactored version using modern {{VARIANT}} best practices.
Add concise inline comments explaining the key changes you made.`,
        chain_3:
`Act as a {{VARIANT}} test engineer. Write a comprehensive test suite for the code below.

Code:
\`\`\`
{{CODE}}
\`\`\`

Goal: {{GOAL}}

Include:
- Unit tests for all functions/methods
- Edge cases and boundary conditions
- Error handling scenarios
- Integration test suggestions

Use the standard testing framework for {{VARIANT}}.`,
    },

    // ── UX Audit (pb-ux) ───────────────────────────────────────────────────────
    'pb-ux': {
        questions: [
            { id: 'SCREEN',    type: 'textarea', _label: 'Describe the UI or screens you want audited:',              _placeholder: 'Describe the interface, flows, and key interactions...' },
            { id: 'USER_TYPE', type: 'text',     _label: 'Who is the primary user?',                                  _placeholder: 'e.g. First-time buyers, enterprise admins, students 18-25' },
            { id: 'TOP_ISSUE', type: 'select', _label: 'What is the biggest UX complaint or known drop-off point?', options: ['High drop-off / abandonment', 'User confusion & errors', 'Low engagement', 'Poor accessibility', 'Slow task completion', 'Cluttered layout', 'Poor mobile experience'] },
        ],
        template_quick:
`Act as a senior UX designer specializing in {{VARIANT}} interfaces.

Audit the following UI against Nielsen's 10 usability heuristics and identify the top 5 friction points.

UI Description:
{{SCREEN}}

Primary User: {{USER_TYPE}}
Known Issue: {{TOP_ISSUE}}

For each friction point provide:
- The heuristic violated
- The impact on user experience
- A specific, actionable fix`,
        template_full:
`You are a senior UX strategist conducting a full heuristic evaluation of a {{VARIANT}} product.

UI Description:
{{SCREEN}}

Primary User Profile: {{USER_TYPE}}
Critical Problem Area: {{TOP_ISSUE}}

Deliver a comprehensive UX audit report:

## 1. Heuristic Violations
Rate each of Nielsen's 10 heuristics (1-10). Flag violations with severity (Critical / Major / Minor).

## 2. User Journey Analysis
Map the key task flows and identify where users are likely to get confused or drop off.

## 3. Accessibility Gaps
WCAG 2.1 AA compliance — color contrast, keyboard navigation, screen reader support.

## 4. Microcopy Review
Button labels, error messages, empty states, and onboarding text that need improvement.

## 5. Prioritized Fix List
Rank all issues by impact vs. effort. Provide wireframe-level descriptions for the top 3 fixes.

## 6. Quick Wins
3 changes implementable this sprint that will immediately improve conversion or retention.`,
        chain_1:
`Act as a UX researcher specializing in {{VARIANT}} products.

Conduct a heuristic evaluation of this interface:
{{SCREEN}}

User: {{USER_TYPE}}
Known Problem: {{TOP_ISSUE}}

Identify the top 5 usability friction points. For each state:
- The issue
- The heuristic violated
- User impact
- Severity (Critical / High / Medium)`,
        chain_2:
`You are a senior {{VARIANT}} UI designer. Propose specific visual and structural changes to fix the UX issues in this interface.

Interface Description:
{{SCREEN}}

User Profile: {{USER_TYPE}}
Priority Issue: {{TOP_ISSUE}}

For each problem area:
1. Describe the improved layout or interaction pattern
2. Explain the rationale (cognitive load, visual hierarchy, task flow)
3. Provide improved microcopy for any text elements`,
        chain_3:
`Design a usability testing plan for a {{VARIANT}} interface.

Interface Description:
{{SCREEN}}

Target User: {{USER_TYPE}}
Hypothesis to Test: {{TOP_ISSUE}}

Provide:
- 5 specific task scenarios for test participants
- Metrics to measure (time-on-task, error rate, satisfaction score)
- Screening criteria for recruiting 5 test participants
- A discussion guide for the post-task debrief interview`,
    },

    // ── Content Engine (pb-ce) ─────────────────────────────────────────────────
    'pb-ce': {
        questions: [
            { id: 'TOPIC',    type: 'text', _label: 'What is the topic or subject of this content?',  _placeholder: 'e.g. AI tools for small businesses, leadership in remote teams' },
            { id: 'AUDIENCE', type: 'text', _label: 'Who is the target audience?',                    _placeholder: 'e.g. Startup founders 25-40, tech-savvy but not developers' },
            { id: 'GOAL',     type: 'select', _label: 'What is the content goal?', options: ['Build brand awareness', 'Drive leads / signups', 'Increase engagement', 'Educate audience', 'Drive sales', 'Grow following', 'Establish thought leadership'] },
        ],
        template_quick:
`Act as an expert {{VARIANT}} content strategist and copywriter.

Create high-performing {{VARIANT}} content on the following topic.

Topic: {{TOPIC}}
Audience: {{AUDIENCE}}
Goal: {{GOAL}}

Deliver:
1. Three attention-grabbing hooks — bold, curiosity-driven, and contrast-based
2. The full content piece optimized for the {{VARIANT}} format and algorithm
3. A strong call-to-action aligned to the goal
4. 5 relevant hashtags or SEO tags

Write in an authoritative yet conversational tone. Make every word earn its place.`,
        template_full:
`You are a senior content strategist specializing in {{VARIANT}} with a track record of viral, high-conversion content.

Topic: {{TOPIC}}
Target Audience: {{AUDIENCE}}
Primary Goal: {{GOAL}}

Deliver a complete content package:

## 1. Hook Matrix
5 hooks targeting different psychological triggers: curiosity, fear of missing out, authority, relatability, and controversy.

## 2. Full {{VARIANT}} Content Piece
Optimized for the {{VARIANT}} format, algorithm, and reading patterns. Include formatting, spacing, and visual cues.

## 3. Visual Direction
Describe the ideal image, graphic, or video thumbnail to accompany this piece.

## 4. Distribution Strategy
Best posting times, cross-platform repurposing, and engagement tactics for the first hour.

## 5. Engagement Responses
3 pre-written replies to likely comments: skeptical, enthusiastic, and follow-up question.`,
        chain_1:
`Act as a {{VARIANT}} content expert. Generate 5 viral hooks for a post about: {{TOPIC}}

Audience: {{AUDIENCE}}
Goal: {{GOAL}}

For each hook, specify the psychological trigger used. Then recommend the single strongest hook and explain why it will perform best for this audience.`,
        chain_2:
`You are a professional {{VARIANT}} copywriter. Write a complete, publish-ready content piece.

Topic: {{TOPIC}}
Audience: {{AUDIENCE}}
Goal: {{GOAL}}

Optimize for engagement, shareability, and achieving the stated goal.
Use platform-native {{VARIANT}} formatting.
Include: a compelling hook, valuable body content, and a clear call-to-action.`,
        chain_3:
`Act as a social media growth strategist for {{VARIANT}}. Create a distribution and engagement plan.

Topic: {{TOPIC}}
Audience: {{AUDIENCE}}
Goal: {{GOAL}}

Provide:
1. Optimal posting time and frequency for {{VARIANT}}
2. 5 strategic hashtags or keywords
3. 3 canned responses to likely audience reactions
4. Repurposing ideas for 2 other platforms
5. A 30-day content series built around this topic`,
    },

    // ── Cyber Response (pb-ir) ─────────────────────────────────────────────────
    'pb-ir': {
        questions: [
            { id: 'ALERTS',   type: 'textarea', _label: 'Describe the incident or paste log/alert details:',  _placeholder: 'Paste error logs, alert details, or describe the incident...' },
            { id: 'SYSTEM',   type: 'text',     _label: 'What system or environment is affected?',            _placeholder: 'e.g. AWS production cluster, Windows domain, internal API gateway' },
            { id: 'SEVERITY', type: 'select', _label: 'What is the estimated severity and current status?', options: ['Critical — active breach in progress', 'High — confirmed intrusion, contained', 'Medium — suspicious activity detected', 'Low — potential misconfiguration found', 'Unknown — still investigating'] },
        ],
        template_quick:
`Act as a senior cybersecurity incident responder specializing in {{VARIANT}} threats.

Analyze the following security incident and provide an immediate triage assessment.

Incident Details / Logs:
{{ALERTS}}

Affected System: {{SYSTEM}}
Severity: {{SEVERITY}}

Provide:
1. Likely attack vector and threat actor classification (map to MITRE ATT&CK)
2. Immediate containment steps for the next 30 minutes
3. Evidence preservation checklist
4. Escalation recommendation (internal team / CISO / law enforcement / vendor)`,
        template_full:
`You are a Tier-3 incident responder and {{VARIANT}} security specialist. A confirmed security incident has been reported.

Incident Logs/Details:
{{ALERTS}}

Affected Environment: {{SYSTEM}}
Current Severity: {{SEVERITY}}

Deliver a full Incident Response Report:

## 1. Threat Classification
Attack type (ransomware, APT, insider, misconfiguration, etc.) mapped to MITRE ATT&CK.

## 2. Immediate Triage (0-30 min)
Step-by-step containment actions to stop active damage.

## 3. Investigation Steps
Forensic evidence to collect, systems to isolate, and logs to review.

## 4. Root Cause Analysis
The underlying vulnerability or misconfiguration that enabled this incident.

## 5. Remediation Plan
Patch, configuration fix, or architectural change to prevent recurrence.

## 6. Internal Communications
Executive briefing (non-technical, business impact focus) and technical team memo.

## 7. Post-Incident Hardening
5 security controls to implement before returning to normal operations.`,
        chain_1:
`Act as a cybersecurity analyst specializing in {{VARIANT}} incidents. Triage the following alert.

Alert Details:
{{ALERTS}}

System: {{SYSTEM}}
Severity: {{SEVERITY}}

Identify: the likely attack vector, true positive vs. false positive assessment, current threat stage (recon / lateral movement / exfiltration / etc.), and immediate containment priority.
Map findings to MITRE ATT&CK where applicable.`,
        chain_2:
`You are a security engineer responding to a confirmed {{VARIANT}} incident.

Incident Summary:
{{ALERTS}}

Affected System: {{SYSTEM}}

Provide the complete containment and remediation playbook:
1. Network, account, and system isolation steps
2. Evidence preservation (what to capture before making changes)
3. Root cause identification steps
4. The specific patch or configuration fix required
5. Validation steps to confirm the threat is fully neutralized`,
        chain_3:
`Act as a CISO-level communicator following a {{VARIANT}} security incident.

Incident: {{ALERTS}}
System Impacted: {{SYSTEM}}
Severity: {{SEVERITY}}

Draft three communications:
1. Executive briefing — 5 bullet points, no jargon, focus on business impact and actions taken
2. Technical team memo — detailed, technical, and actionable
3. Post-incident lessons-learned document — timeline, root cause, and preventive controls`,
    },

    // ── Data Science (pb-ds) ───────────────────────────────────────────────────
    'pb-ds': {
        questions: [
            { id: 'DATA',      type: 'textarea', _label: 'Describe your dataset (tables, columns, size, source):',  _placeholder: 'e.g. Customer transactions: user_id, date, amount, product — 2M rows, PostgreSQL' },
            { id: 'OBJECTIVE', type: 'select', _label: 'What is the analytical or predictive goal?', options: ['Predict outcomes (ML model)', 'Detect anomalies / fraud', 'Segment customers', 'Forecast trends', 'Explore patterns (EDA)', 'Build a dashboard / report', 'Automate a data pipeline'] },
            { id: 'TOOLS',     type: 'text',     _label: 'What tools or stack are you using?',                      _placeholder: 'e.g. Python / Pandas / Scikit-learn / Jupyter' },
        ],
        template_quick:
`Act as a senior data scientist specializing in {{VARIANT}} analysis.

Dataset Description:
{{DATA}}

Objective: {{OBJECTIVE}}
Tools: {{TOOLS}}

Provide:
1. A data quality checklist (missing values, outliers, type issues to fix first)
2. The top 3 exploratory visualizations to run first and what insight each reveals
3. The recommended ML algorithm or statistical approach for this objective
4. The single most important feature to engineer for this dataset
5. A Python/{{TOOLS}} starter code snippet to begin the analysis`,
        template_full:
`You are a principal data scientist specializing in {{VARIANT}} problems. Design a complete pipeline from raw data to production insights.

Dataset:
{{DATA}}

Objective: {{OBJECTIVE}}
Tech Stack: {{TOOLS}}

## 1. Data Quality Assessment
Missing data strategy, outlier handling, and encoding plan for categorical variables.

## 2. Exploratory Data Analysis Plan
5 specific visualizations with the insight each is designed to reveal.

## 3. Feature Engineering
5 derived features most likely to improve model performance for this objective.

## 4. Model Selection
Top 3 algorithms ranked for this use case — pros/cons and evaluation metrics for each.

## 5. Implementation Code
Python/{{TOOLS}} code for: data loading, cleaning, train/test split, model training, and evaluation.

## 6. Production Considerations
Model serving strategy, monitoring metrics, and retraining triggers.`,
        chain_1:
`Act as a data analyst. Write Python/{{TOOLS}} code to clean and prepare the following dataset for analysis.

Dataset:
{{DATA}}

Objective: {{OBJECTIVE}}

Include: null handling, outlier detection, data type fixes, and a summary statistics report.
Add comments explaining each step.`,
        chain_2:
`You are a data scientist working on a {{VARIANT}} problem. Design the feature engineering and model training pipeline.

Dataset: {{DATA}}
Objective: {{OBJECTIVE}}
Stack: {{TOOLS}}

Provide:
1. 5 engineered features with rationale for each
2. The recommended model with justification
3. Full training code with cross-validation
4. Key evaluation metrics and what good performance looks like for this use case`,
        chain_3:
`Act as an ML engineer. Create a model monitoring and reporting plan for a {{VARIANT}} model in production.

Model Objective: {{OBJECTIVE}}
Data Source: {{DATA}}
Stack: {{TOOLS}}

Include:
1. Key performance metrics to track weekly
2. Data drift detection approach
3. Automated retraining trigger conditions
4. A stakeholder-friendly dashboard spec (3-5 KPI visualizations)
5. A weekly performance report template for non-technical stakeholders`,
    },

    // ── HR Recruit (pb-hr) ─────────────────────────────────────────────────────
    'pb-hr': {
        questions: [
            { id: 'ROLE',     type: 'text', _label: 'What role or position are you hiring for?',          _placeholder: 'e.g. Senior Product Manager, DevOps Engineer, Sales Director' },
            { id: 'COMPANY',  type: 'text', _label: 'Describe your company and culture briefly:',         _placeholder: 'e.g. Series B SaaS startup, 80 people, remote-first, fast-paced' },
            { id: 'PRIORITY', type: 'select', _label: 'What is the #1 quality you need in this hire?', options: ['Deep technical expertise', 'Leadership & communication', 'Fast onboarding / adaptability', 'Culture & values alignment', 'Domain / industry experience', 'Strategic thinking', 'Execution & ownership mindset'] },
        ],
        template_quick:
`Act as a talent acquisition expert specializing in {{VARIANT}} hiring.

Write a high-converting job description for the following role.

Role: {{ROLE}}
Company: {{COMPANY}}
Top Priority: {{PRIORITY}}

The job description should:
- Open with a compelling "why join us" hook (not a generic company intro)
- Clearly separate "must have" from "nice to have" requirements
- Describe real day-to-day responsibilities — not vague bullet points
- Include a salary range and key benefits
- Close with a direct, action-oriented application CTA`,
        template_full:
`You are a senior HR strategist and talent acquisition expert specializing in {{VARIANT}} hiring.

Role: {{ROLE}}
Company Context: {{COMPANY}}
Key Priority: {{PRIORITY}}

Deliver a complete hiring package:

## 1. Job Description
Compelling, honest JD that attracts the right candidates and repels wrong-fit applicants.

## 2. Sourcing Strategy
Top 5 channels to find candidates for this role with specific tactics for each.

## 3. Interview Process
4-stage structure with the goal and format of each stage.

## 4. Question Bank
10 behavioral + technical questions with what a great answer looks like for each.

## 5. Evaluation Scorecard
Objective rubric (1-5 scale) covering 6 key competencies for this role.

## 6. 30-Day Onboarding Plan
A structured first month to maximize new hire success and retention.`,
        chain_1:
`Act as a senior recruiter specializing in {{VARIANT}} talent. Write a high-converting job description.

Role: {{ROLE}}
Company: {{COMPANY}}
Must-Have Quality: {{PRIORITY}}

Include: compelling hook, realistic responsibilities, clear requirements (must vs. nice-to-have), compensation range, and a strong CTA.
Avoid corporate jargon. Write like a human talking to a human.`,
        chain_2:
`You are a hiring manager designing the interview process for a {{VARIANT}} role.

Role: {{ROLE}}
Company: {{COMPANY}}
Top Priority: {{PRIORITY}}

Create:
1. A 4-stage interview process with the purpose of each stage
2. 5 behavioral interview questions using the STAR format
3. 3 role-specific technical or situational questions
4. Red flags to watch for in responses
5. A scoring rubric (1-5) for evaluating candidates objectively`,
        chain_3:
`Design a 30-day onboarding plan for a new {{ROLE}} hire at a {{VARIANT}} company.

Company Context: {{COMPANY}}
Key Success Factor: {{PRIORITY}}

Structure in three phases:
- Week 1: Orientation (culture, tools, team introductions)
- Weeks 2-3: Ramp-up (first projects, shadow sessions, key relationships)
- Week 4: First delivery (30-day goal, first meaningful contribution)

Include: daily check-in questions, success metrics, and common onboarding mistakes to avoid.`,
    },

    // ── Gov Policy (pb-gp) ─────────────────────────────────────────────────────
    'pb-gp': {
        questions: [
            { id: 'ISSUE',        type: 'text', _label: 'What public or policy issue are you addressing?',            _placeholder: 'e.g. Urban traffic congestion, youth unemployment, digital privacy' },
            { id: 'JURISDICTION', type: 'select', _label: 'What is the jurisdiction or scope?', options: ['Local / City level', 'Regional / State level', 'National level', 'Multi-country / EU', 'International / Global'] },
            { id: 'CONSTRAINT',   type: 'text', _label: 'What are the key constraints or political considerations?',  _placeholder: 'e.g. Limited budget, election year, strong industry opposition' },
        ],
        template_quick:
`Act as a senior policy analyst specializing in {{VARIANT}} governance.

Issue: {{ISSUE}}
Jurisdiction: {{JURISDICTION}}
Constraints: {{CONSTRAINT}}

Provide:
1. Root cause analysis — why this problem persists despite previous efforts
2. Three policy options (conservative, moderate, progressive) with pros/cons
3. The recommended approach with implementation steps
4. Key stakeholder groups and their likely positions
5. Success metrics and a 12-month evaluation framework`,
        template_full:
`You are a senior government policy advisor specializing in {{VARIANT}} issues. Prepare a full policy brief.

Issue: {{ISSUE}}
Jurisdiction: {{JURISDICTION}}
Constraints: {{CONSTRAINT}}

## 1. Problem Statement
Evidence-based description of the issue, affected populations, and cost of inaction.

## 2. Root Cause Analysis
Systemic, structural, and behavioral factors driving this issue.

## 3. Policy Options Analysis
Three distinct approaches with: expected outcomes, implementation cost, political feasibility, and equity impact.

## 4. Recommended Policy
Detailed implementation plan with timeline, responsible agencies, budget estimate, and legal requirements.

## 5. Stakeholder Map
Supporters, opponents, and neutral parties — with engagement strategy for each.

## 6. Public Communication
Plain-language citizen explainer and a media statement draft.

## 7. Evaluation Framework
KPIs, data sources, and a 12-month review process.`,
        chain_1:
`Act as a policy researcher specializing in {{VARIANT}} governance. Conduct a root cause analysis.

Issue: {{ISSUE}}
Jurisdiction: {{JURISDICTION}}
Constraints: {{CONSTRAINT}}

Identify: the immediate triggers, underlying structural causes, historical policy failures on this issue, and the key data points that quantify the problem's severity and scope.`,
        chain_2:
`You are a government policy designer. Draft a concrete policy proposal to address the following issue.

Issue: {{ISSUE}}
Jurisdiction: {{JURISDICTION}}
Constraints: {{CONSTRAINT}}

The proposal must include: the policy objective, specific interventions, responsible agencies, implementation timeline, estimated budget, and legal/regulatory requirements.
Be specific — avoid vague recommendations.`,
        chain_3:
`Act as a government communications director. Create a public communication plan for the following policy.

Policy Issue: {{ISSUE}}
Jurisdiction: {{JURISDICTION}}
Context: {{CONSTRAINT}}

Produce:
1. A 1-page plain-language policy explainer for citizens
2. Key messages tailored to 3 different audiences (general public, affected communities, media)
3. Anticipated objections with evidence-based responses
4. Social media messaging strategy with sample posts`,
    },

    // ── Legal Draft (pb-ld) ────────────────────────────────────────────────────
    'pb-ld': {
        questions: [
            { id: 'CONTRACT',  type: 'select', _label: 'What type of legal document do you need?', options: ['SaaS / Software license', 'Employment contract', 'NDA / Confidentiality', 'Partnership agreement', 'Service / Consulting agreement', 'Freelance contract', 'Terms of service'] },
            { id: 'PARTIES',   type: 'text',     _label: 'Who are the parties involved?',                               _placeholder: 'e.g. Software company (provider) and enterprise client (customer)' },
            { id: 'KEY_TERMS', type: 'textarea', _label: 'What are the key terms, conditions, or concerns to address?', _placeholder: 'e.g. $5k/month, 12-month term, IP stays with provider, data privacy critical' },
        ],
        template_quick:
`Act as a senior commercial lawyer specializing in {{VARIANT}} contracts.

Document Type: {{CONTRACT}}
Parties: {{PARTIES}}
Key Terms & Concerns:
{{KEY_TERMS}}

Provide:
1. A structured outline of the document with all essential clauses
2. The top 3 legal risks in this arrangement and protective language for each
3. The single most important clause to get right and why
4. Plain-language summary of the key obligations for each party

Note: This is AI-assisted drafting. Have the final document reviewed by a licensed attorney.`,
        template_full:
`You are a senior commercial attorney specializing in {{VARIANT}} law. Draft a professional legal document.

Document: {{CONTRACT}}
Parties: {{PARTIES}}
Key Terms:
{{KEY_TERMS}}

## 1. Document Structure
Full clause-by-clause outline with the legal purpose of each section.

## 2. Key Provisions Draft
Draft the 5 most critical clauses in full legal language: definitions, obligations, liability, termination, and dispute resolution.

## 3. Risk Analysis
Top 5 legal risks for each party with protective language to address each.

## 4. Negotiation Points
Clauses likely to be disputed, typical market standards, and recommended starting positions.

## 5. Plain Language Summary
Executive summary of what each party is agreeing to, in plain English.

Note: AI-assisted drafting only. Always have final documents reviewed by a licensed attorney.`,
        chain_1:
`Act as a commercial lawyer specializing in {{VARIANT}} agreements. Create a structured outline for the following document.

Document: {{CONTRACT}}
Parties: {{PARTIES}}
Key Terms: {{KEY_TERMS}}

List every clause that should be in this document with a one-line description of its purpose and whether it favors the provider, client, or is neutral.`,
        chain_2:
`You are a senior attorney specializing in {{VARIANT}} contracts. Draft the core clauses for the following agreement.

Document: {{CONTRACT}}
Parties: {{PARTIES}}
Key Terms: {{KEY_TERMS}}

Draft in full legal language: (1) Definitions, (2) Scope of Services/Rights, (3) Payment Terms, (4) Liability Limitations, (5) Termination, and (6) Dispute Resolution.
Flag any provisions that need custom input to complete.`,
        chain_3:
`Act as a contract risk advisor specializing in {{VARIANT}} law. Analyze the following arrangement for legal exposure.

Contract: {{CONTRACT}}
Parties: {{PARTIES}}
Key Terms: {{KEY_TERMS}}

Identify:
1. Top 3 risks for each party
2. Missing clauses that create exposure
3. Ambiguous language that could cause future disputes
4. Recommended protective language for each risk
5. Plain-English obligation summary for a non-lawyer executive`,
    },

    // ── Sales Strategy (pb-ss) ─────────────────────────────────────────────────
    'pb-ss': {
        questions: [
            { id: 'ACCOUNT', type: 'text', _label: 'Who is the target company or account?',      _placeholder: 'e.g. Fortune 500 retailer, mid-market SaaS company, local government' },
            { id: 'PRODUCT', type: 'text', _label: 'What are you selling?',                      _placeholder: 'e.g. Enterprise cybersecurity platform, $80k/year ARR' },
            { id: 'STAGE',   type: 'select', _label: 'What stage of the sales cycle are you at?', options: ['Initial outreach / cold', 'After first discovery call', 'Proposal sent', 'Evaluating against competitors', 'Negotiating final contract', 'Deal stalled — re-engaging'] },
        ],
        template_quick:
`Act as a senior enterprise sales strategist specializing in {{VARIANT}} deals.

Target Account: {{ACCOUNT}}
Product/Solution: {{PRODUCT}}
Current Stage: {{STAGE}}

Provide:
1. The most likely buyer persona and their top 3 pain points
2. 5 high-impact discovery questions tailored to this account
3. The strongest ROI-focused value proposition for this buyer
4. The most likely objection and a consultative response
5. The recommended next action to advance the deal`,
        template_full:
`You are a principal enterprise sales strategist specializing in {{VARIANT}} sales cycles.

Target Account: {{ACCOUNT}}
Solution: {{PRODUCT}}
Deal Stage: {{STAGE}}

Deliver a complete account strategy:

## 1. Account Intelligence
Buyer committee map, decision-making process, budget cycle, and competitive landscape.

## 2. Discovery Framework
10 strategic questions covering: business pain, technical fit, political dynamics, and economic impact.

## 3. Value Proposition
ROI-focused business case tailored to this account's industry and size.

## 4. Objection Handling
Top 5 objections with evidence-based, consultative responses.

## 5. Multi-Threader Strategy
How to build relationships with 3+ stakeholders simultaneously.

## 6. Deal Acceleration Plan
Week-by-week closing roadmap from current stage to signed contract.`,
        chain_1:
`Act as a B2B sales strategist specializing in {{VARIANT}}. Prepare for a discovery conversation.

Target Account: {{ACCOUNT}}
Product: {{PRODUCT}}
Stage: {{STAGE}}

Provide:
1. Intelligence to gather before the call
2. 10 discovery questions (business pain, technical fit, budget, timeline, internal politics)
3. The single biggest value driver for this account
4. Red flags that indicate this is a bad-fit deal`,
        chain_2:
`You are a senior {{VARIANT}} sales consultant. Build a compelling business case for the following prospect.

Account: {{ACCOUNT}}
Solution: {{PRODUCT}}
Stage: {{STAGE}}

Create a 3-part value case:
1. Current State: quantify the pain (cost, time, risk of their current situation)
2. Future State: specific outcomes your solution delivers with estimated ROI
3. The Case for Action: why now, why you, and what happens if they delay`,
        chain_3:
`Act as an enterprise deal coach specializing in {{VARIANT}} sales. Design a 30-day closing plan.

Account: {{ACCOUNT}}
Product: {{PRODUCT}}
Current Stage: {{STAGE}}

Provide:
1. Week-by-week action plan with specific activities and owners
2. Champion enablement strategy (how to help your internal sponsor sell up)
3. The mutual action plan to share with the customer
4. Negotiation strategy for the final 3 sticking points
5. Win/loss criteria and how to get a firm decision date commitment`,
    },

    // ── Climate Plan (pb-cp) ───────────────────────────────────────────────────
    'pb-cp': {
        questions: [
            { id: 'ORG',        type: 'text', _label: 'Describe your organization or operation:',           _placeholder: 'e.g. Mid-size manufacturing facility, 500 employees, produces packaging' },
            { id: 'BASELINE',   type: 'text', _label: 'What is your current sustainability baseline or target?', _placeholder: 'e.g. No ESG policy yet, or: targeting net zero by 2030' },
            { id: 'CONSTRAINT', type: 'select', _label: 'What are the key constraints?', options: ['Limited budget', 'Investor / board ESG pressure', 'Regulatory compliance deadline', 'Operational continuity risk', 'Supply chain complexity', 'No current ESG baseline'] },
        ],
        template_quick:
`Act as a corporate sustainability strategist specializing in {{VARIANT}} contexts.

Organization: {{ORG}}
Current Baseline / Target: {{BASELINE}}
Constraints: {{CONSTRAINT}}

Provide:
1. Scope 1, 2, and 3 emission hotspot analysis for this type of organization
2. The top 3 high-impact, cost-effective sustainability interventions
3. A 12-month implementation roadmap with milestones
4. ESG reporting framework recommendation (GRI, TCFD, or CDP)
5. Quick wins achievable in the first 90 days`,
        template_full:
`You are a senior sustainability consultant specializing in {{VARIANT}} strategy. Create a comprehensive climate action plan.

Organization: {{ORG}}
Baseline/Target: {{BASELINE}}
Constraints: {{CONSTRAINT}}

## 1. Carbon Footprint Assessment
Scope 1-3 emission categories, hotspots, and estimated volumes for this organization type.

## 2. Target Setting
Science-Based Targets (SBTi) framework — short, medium, and long-term reduction commitments.

## 3. Mitigation Strategy
Prioritized interventions by: emission reduction potential, cost, timeline, and co-benefits.

## 4. Circular Economy Plan
Waste reduction, resource efficiency, and circular supply chain opportunities.

## 5. ESG Reporting Plan
Framework selection, data collection systems, and disclosure timeline.

## 6. Stakeholder Engagement
Employee, investor, customer, and regulatory communication strategy.

## 7. Budget & ROI
Estimated investment and financial return for the top 3 initiatives.`,
        chain_1:
`Act as a carbon accounting expert specializing in {{VARIANT}}. Conduct an emissions audit.

Organization: {{ORG}}
Baseline: {{BASELINE}}
Constraints: {{CONSTRAINT}}

Identify all Scope 1 (direct), Scope 2 (energy), and Scope 3 (value chain) emission sources.
Rank them by magnitude and flag the top 3 hotspots that should be prioritized for reduction.`,
        chain_2:
`You are a sustainability engineer specializing in {{VARIANT}} decarbonization. Design the mitigation strategy.

Organization: {{ORG}}
Target: {{BASELINE}}
Constraints: {{CONSTRAINT}}

For each of the top 3 emission hotspots, provide:
1. Specific technology or process change to reduce emissions
2. Estimated reduction (% or tons CO2e)
3. Implementation cost and payback period
4. Timeline and key dependencies`,
        chain_3:
`Act as an ESG communications expert. Create the sustainability reporting and stakeholder communication plan.

Organization: {{ORG}}
Target: {{BASELINE}}
Context: {{CONSTRAINT}}

Provide:
1. Recommended ESG reporting framework and why
2. Top 5 metrics to track and disclose
3. Annual ESG report structure
4. Investor and customer sustainability messaging
5. Internal employee engagement campaign plan`,
    },

    // ── Project Manager (pb-pm) ────────────────────────────────────────────────
    'pb-pm': {
        questions: [
            { id: 'GOAL',  type: 'text',     _label: 'What is the project goal or key deliverable?',          _placeholder: 'e.g. Launch new e-commerce website, migrate to cloud infrastructure' },
            { id: 'SCOPE', type: 'textarea', _label: 'Describe the project scope, team, and resources:',      _placeholder: 'e.g. 6-person team, 3-month timeline, $50k budget, stakeholders: marketing + engineering' },
            { id: 'RISK',  type: 'select', _label: 'What is the biggest risk or challenge?', options: ['Unclear or changing requirements', 'Resource / team constraints', 'Technical complexity', 'Stakeholder misalignment', 'Tight deadline pressure', 'Budget overrun risk', 'Dependency on third parties'] },
        ],
        template_quick:
`Act as a senior project manager specializing in {{VARIANT}} delivery.

Project Goal: {{GOAL}}
Scope & Resources:
{{SCOPE}}
Biggest Risk: {{RISK}}

Provide:
1. Work Breakdown Structure — top-level tasks and sub-tasks
2. Critical path identification
3. Top 5 risks with likelihood, impact, and mitigation strategy
4. RACI matrix for key roles
5. First 2-week sprint plan with specific deliverables`,
        template_full:
`You are a principal project manager specializing in {{VARIANT}} projects. Create a comprehensive project plan.

Goal: {{GOAL}}
Scope & Resources:
{{SCOPE}}
Key Risk: {{RISK}}

## 1. Project Charter
Objectives, success criteria, constraints, assumptions, and stakeholder list.

## 2. Work Breakdown Structure
Full WBS with tasks, subtasks, owners, and duration estimates.

## 3. Project Timeline
Phased schedule with milestones, dependencies, and buffer time.

## 4. Risk Register
10 risks ranked by probability × impact. Mitigation and contingency plan for each.

## 5. RACI Matrix
Responsibility assignment for all key deliverables and decisions.

## 6. Communication Plan
Meeting cadence, reporting format, and escalation protocol.

## 7. Quality Management
Definition of done, review checkpoints, and acceptance criteria.`,
        chain_1:
`Act as a senior project manager. Create the project charter and Work Breakdown Structure.

Goal: {{GOAL}}
Resources: {{SCOPE}}
Risk: {{RISK}}

Provide: project objectives, success criteria, deliverable list, task breakdown (3 levels deep), estimated duration per task, and critical dependencies.`,
        chain_2:
`You are a risk management expert specializing in {{VARIANT}} projects. Build a detailed risk register.

Project: {{GOAL}}
Context: {{SCOPE}}
Known Risk: {{RISK}}

Identify 8-10 risks. For each provide: risk description, likelihood (1-5), impact (1-5), risk score, owner, mitigation strategy, and contingency plan if the risk materializes.`,
        chain_3:
`Act as a project communications manager. Design the stakeholder communication plan.

Project: {{GOAL}}
Team & Stakeholders: {{SCOPE}}
Context: {{RISK}}

Provide:
1. Stakeholder map with influence/interest matrix
2. Communication matrix (who gets what, when, and how)
3. Status report template (weekly format)
4. Escalation protocol with decision-making thresholds
5. End-of-project retrospective agenda`,
    },

    // ── Course Creator (pb-cc) ─────────────────────────────────────────────────
    'pb-cc': {
        questions: [
            { id: 'TOPIC',   type: 'text', _label: 'What subject or skill will this course teach?',     _placeholder: 'e.g. Data analysis with Python, Business communication, Graphic design' },
            { id: 'LEARNER', type: 'select', _label: 'Who is the target learner?', options: ['Complete beginners', 'Intermediate practitioners', 'Advanced professionals', 'Corporate / L&D teams', 'University students', 'Self-paced online learners'] },
            { id: 'FORMAT',  type: 'text', _label: 'What is the course format and duration?',           _placeholder: 'e.g. 6-week online course, 10 video modules, self-paced with weekly live Q&A' },
        ],
        template_quick:
`Act as a senior instructional designer specializing in {{VARIANT}} education.

Course Topic: {{TOPIC}}
Target Learner: {{LEARNER}}
Format: {{FORMAT}}

Provide:
1. 5 Bloom's Taxonomy learning objectives (measurable, action-verb driven)
2. 8-module course outline with brief description of each module
3. The most common misconception learners have about this subject — and how to address it
4. The single most effective activity or exercise for this course
5. Assessment strategy (formative + summative)`,
        template_full:
`You are a master instructional designer specializing in {{VARIANT}} curriculum. Design a complete course.

Topic: {{TOPIC}}
Learner Profile: {{LEARNER}}
Format & Duration: {{FORMAT}}

## 1. Learning Objectives
5 Bloom's Taxonomy objectives at different cognitive levels (remember → create).

## 2. Learner Persona
Detailed profile: prior knowledge, motivations, frustrations, and learning preferences.

## 3. Course Structure
Full module-by-module outline with: learning goal, content format, activities, and time estimate.

## 4. Week 1 Detailed Plan
Lesson-by-lesson breakdown: content, delivery method, practice exercises.

## 5. Assessment Design
Formative checks (quizzes, reflections) and a summative final project with rubric.

## 6. Engagement Strategy
Techniques to reduce dropout: community elements, habit triggers, milestone celebrations.

## 7. Accessibility & Inclusivity
Language level, caption requirements, and visual design guidelines.`,
        chain_1:
`Act as a curriculum designer specializing in {{VARIANT}} education. Define the learning framework.

Topic: {{TOPIC}}
Learner: {{LEARNER}}
Format: {{FORMAT}}

Provide: 5 Bloom's Taxonomy objectives, a learner persona (background, motivations, barriers), prerequisite knowledge map, and the 3 biggest learning challenges for this audience.`,
        chain_2:
`You are an instructional designer. Create the full course outline and Week 1 detailed lesson plan.

Topic: {{TOPIC}}
Learner: {{LEARNER}}
Format: {{FORMAT}}

Deliver: complete module list (8-10 modules) with descriptions, and a detailed lesson-by-lesson plan for Module 1 including content, activities, discussion prompts, and time estimates.`,
        chain_3:
`Act as an assessment and engagement specialist. Design the assessment strategy and learner retention plan.

Course: {{TOPIC}}
Audience: {{LEARNER}}
Format: {{FORMAT}}

Provide:
1. Formative assessment strategy (low-stakes checks throughout the course)
2. Final summative project with clear rubric
3. Gamification or social elements to boost completion rates
4. 3 at-risk learner intervention strategies
5. Post-course follow-up plan to reinforce learning transfer`,
    },

    // ── Researcher (pb-rs) ─────────────────────────────────────────────────────
    'pb-rs': {
        questions: [
            { id: 'DOMAIN',   type: 'text',     _label: 'What is your research field or topic?',           _placeholder: 'e.g. Machine learning fairness, Public health policy, Behavioral economics' },
            { id: 'QUESTION', type: 'textarea', _label: 'What is your research question or hypothesis?',   _placeholder: 'Describe what you want to find out or test...' },
            { id: 'STAGE',    type: 'select', _label: 'What stage is your research at?', options: ['Literature review', 'Forming hypothesis', 'Designing methodology', 'Data collection', 'Analysis & modeling', 'Writing results', 'Peer review prep'] },
        ],
        template_quick:
`Act as a senior academic researcher specializing in {{VARIANT}}.

Research Field: {{DOMAIN}}
Research Question:
{{QUESTION}}
Current Stage: {{STAGE}}

Provide:
1. Identification of the key research gap this addresses
2. A refined, falsifiable research hypothesis
3. The most appropriate methodology for this question
4. Top 5 seminal papers or authors to review
5. Potential confounding variables and how to control for them`,
        template_full:
`You are a principal researcher and academic mentor specializing in {{VARIANT}}. Design a rigorous research project.

Field: {{DOMAIN}}
Research Question:
{{QUESTION}}
Current Stage: {{STAGE}}

## 1. Literature Gap Analysis
Current state of knowledge, key debates, and the specific gap this research addresses.

## 2. Research Hypothesis
Primary and alternative hypotheses, clearly operationalized.

## 3. Methodology
Research design (qualitative/quantitative/mixed), sampling strategy, data collection, and analysis approach.

## 4. Ethical Considerations
IRB/ethics requirements, informed consent, data privacy, and bias mitigation.

## 5. Paper Structure
Full academic paper outline with word count targets per section.

## 6. Publication Strategy
Target journals, submission checklist, and peer review preparation.

## 7. Limitations
Anticipated methodological limitations and how to acknowledge them honestly.`,
        chain_1:
`Act as an academic research consultant specializing in {{VARIANT}}. Refine the research foundation.

Field: {{DOMAIN}}
Research Question: {{QUESTION}}
Stage: {{STAGE}}

Identify: the key research gap, 3 alternative framings of the research question, the strongest hypothesis to test, and the top 5 must-read sources for this topic.`,
        chain_2:
`You are a research methodologist specializing in {{VARIANT}} studies. Design the research methodology.

Field: {{DOMAIN}}
Hypothesis: {{QUESTION}}
Stage: {{STAGE}}

Provide: research design rationale, sampling strategy, data collection instruments, analysis methods, validity/reliability measures, and a realistic 6-month research timeline.`,
        chain_3:
`Act as an academic writing coach. Help structure and draft the research paper.

Field: {{DOMAIN}}
Research: {{QUESTION}}
Stage: {{STAGE}}

Provide:
1. Complete paper outline (IMRaD or field-appropriate structure)
2. Abstract template with word count guidance
3. Introduction paragraph draft (hook → context → gap → contribution)
4. Discussion section framing tips
5. Journal selection criteria and target publication list`,
    },

    // ── Story Writer (pb-sw) ───────────────────────────────────────────────────
    'pb-sw': {
        questions: [
            { id: 'HOOK',     type: 'textarea', _label: 'Describe your story concept or opening idea:',  _placeholder: 'e.g. A disgraced astronaut gets one last chance to redeem herself on a solo Mars mission' },
            { id: 'GENRE',    type: 'select', _label: 'What is the genre and tone?', options: ['Thriller / Suspense', 'Fantasy / Sci-fi', 'Literary fiction', 'Romance', 'Comedy / Satire', 'Horror / Dark fiction', 'Mystery / Crime', 'Historical fiction'] },
            { id: 'AUDIENCE', type: 'text',     _label: 'Who is the target reader?',                     _placeholder: 'e.g. Adults 30-50 who enjoy literary sci-fi, YA readers aged 14-18' },
        ],
        template_quick:
`Act as a professional author and story development consultant specializing in {{VARIANT}} fiction.

Concept:
{{HOOK}}

Genre & Tone: {{GENRE}}
Target Reader: {{AUDIENCE}}

Provide:
1. The protagonist's core inner wound and external goal
2. A compelling antagonist or central conflict
3. Three-act structure outline with key turning points
4. The story's central theme or universal truth
5. An opening paragraph that immediately hooks the reader`,
        template_full:
`You are a master storyteller and fiction development coach specializing in {{VARIANT}} narrative.

Concept:
{{HOOK}}

Genre: {{GENRE}}
Reader: {{AUDIENCE}}

## 1. Character Development
Protagonist: inner wound, desire, need, ghost (backstory trauma), and transformation arc.
Antagonist: motivation, worldview, and how they embody the story's thematic conflict.

## 2. Story Structure
Full three-act breakdown: inciting incident, plot points, midpoint, dark night of the soul, climax, resolution.

## 3. World-Building
Key setting details, atmosphere, rules of this world, and sensory anchors.

## 4. Theme & Subtext
Central theme, thematic argument, and how it plays out in character choices.

## 5. Scene Cards
Detailed scene cards for the 5 most pivotal moments.

## 6. Voice & Style Guide
POV, narrative distance, prose style, and distinctive voice elements.

## 7. Opening Pages
The first 500 words of the story — fully written.`,
        chain_1:
`Act as a story development coach specializing in {{VARIANT}} fiction. Build the character and world foundation.

Concept:
{{HOOK}}

Genre: {{GENRE}}
Audience: {{AUDIENCE}}

Develop: the protagonist's psychological profile (inner wound, desire, fear, lie they believe), the central antagonist, the setting with 3 specific sensory details, and the thematic question the story will answer.`,
        chain_2:
`You are a professional story architect. Create the complete plot structure.

Concept:
{{HOOK}}

Genre: {{GENRE}}
Audience: {{AUDIENCE}}

Using a three-act structure, provide: the inciting incident, end-of-act-one turn, midpoint reversal, dark night of the soul, climax, and resolution.
Then add 5 specific scene cards for the most dramatic moments, each with location, conflict, and emotional stakes.`,
        chain_3:
`Act as a prose editor specializing in {{VARIANT}} fiction. Write and polish the opening sequence.

Concept:
{{HOOK}}

Genre: {{GENRE}}
Audience: {{AUDIENCE}}

Write the complete opening scene (600-800 words) that:
- Establishes the protagonist in their ordinary world
- Plants a central story question
- Establishes voice and tone immediately
- Ends on a hook that makes the reader turn the page

Then provide editorial notes explaining the key craft choices made.`,
    },

    // ── Biz Modeler (pb-bm) ────────────────────────────────────────────────────
    'pb-bm': {
        questions: [
            { id: 'IDEA',   type: 'textarea', _label: 'Describe your business idea or concept:',        _placeholder: 'e.g. AI meal planning app that learns family preferences and generates grocery lists' },
            { id: 'MARKET', type: 'text',     _label: 'Who is your target customer and market?',        _placeholder: 'e.g. Busy working parents in the US, $50B meal kit market' },
            { id: 'STAGE',  type: 'select', _label: 'What stage is this business at?', options: ['Just an idea', 'Pre-MVP / Validating', 'MVP built', 'First 100 customers', 'Pre-seed fundraising', 'Seed stage / Scaling'] },
        ],
        template_quick:
`Act as a startup strategy consultant and {{VARIANT}} expert.

Business Idea:
{{IDEA}}

Target Market: {{MARKET}}
Current Stage: {{STAGE}}

Provide:
1. Lean Canvas overview (problem, solution, UVP, channels, customer segments)
2. The unfair advantage — what makes this hard to copy
3. The single biggest assumption to validate first
4. Recommended go-to-market motion for this stage
5. 90-day action plan to reach the next milestone`,
        template_full:
`You are a principal startup strategist and {{VARIANT}} expert. Build the complete business model and strategy.

Idea:
{{IDEA}}

Market: {{MARKET}}
Stage: {{STAGE}}

## 1. Lean Canvas
All 9 blocks: Problem, Customer Segments, UVP, Solution, Channels, Revenue, Cost, Key Metrics, Unfair Advantage.

## 2. Market Analysis
TAM/SAM/SOM sizing, competitive landscape, and market entry timing.

## 3. Business Model Options
Three monetization models with pros/cons. Recommended model with pricing strategy.

## 4. Go-To-Market Plan
Acquisition channels, early adopter strategy, and growth loops.

## 5. Financial Projections
18-month P&L outline: revenue assumptions, key cost drivers, break-even point.

## 6. Fundraising Strategy
Bootstrap vs. raise, ideal investor profile, pitch narrative, and valuation rationale.

## 7. 90-Day Roadmap
Week-by-week priorities to hit the next funding or revenue milestone.`,
        chain_1:
`Act as a business model strategist specializing in {{VARIANT}} startups. Analyze and structure the business concept.

Idea: {{IDEA}}
Market: {{MARKET}}
Stage: {{STAGE}}

Complete a full Lean Canvas. Then identify: the single riskiest assumption, the most compelling UVP, and the first experiment to run to validate the core hypothesis.`,
        chain_2:
`You are a startup growth strategist specializing in {{VARIANT}}. Design the go-to-market and monetization strategy.

Business: {{IDEA}}
Market: {{MARKET}}
Stage: {{STAGE}}

Provide:
1. Ideal Customer Profile (ICP) with 3 specific personas
2. Top 3 acquisition channels with estimated CAC
3. Recommended pricing model and tier structure
4. Growth loop design (how each customer brings the next)
5. First 100 customers acquisition plan`,
        chain_3:
`Act as a startup investor and pitch coach specializing in {{VARIANT}} ventures. Prepare the fundraising narrative.

Business: {{IDEA}}
Market: {{MARKET}}
Stage: {{STAGE}}

Provide:
1. 10-slide pitch deck outline with the key message for each slide
2. The 3 most important metrics for this stage
3. Top investor objections with evidence-based responses
4. Key term sheet concepts to understand and negotiate
5. Ideal investor type and 10 relevant funds to target`,
    },

    // ── IT SOP (pb-so) ─────────────────────────────────────────────────────────
    'pb-so': {
        questions: [
            { id: 'SYSTEM',   type: 'text', _label: 'What technology system or infrastructure are you working with?', _placeholder: 'e.g. Kubernetes cluster on AWS, Windows Active Directory, PostgreSQL' },
            { id: 'PROCESS',  type: 'text', _label: 'What process or operation needs an SOP?',                        _placeholder: 'e.g. New service deployment, disaster recovery, user onboarding/offboarding' },
            { id: 'AUDIENCE', type: 'select', _label: 'Who will follow this SOP?', options: ['Junior engineers', 'Senior / mid-level engineers', 'Operations team', 'Help desk staff', 'Management / non-technical'] },
        ],
        template_quick:
`Act as a senior {{VARIANT}} IT operations engineer and technical writer.

System: {{SYSTEM}}
Process: {{PROCESS}}
Audience: {{AUDIENCE}}

Create a clear, step-by-step SOP including:
1. Purpose and scope
2. Prerequisites and access requirements
3. Numbered step-by-step procedure with exact commands/configurations
4. Verification steps (how to confirm success)
5. Troubleshooting for the 3 most common failure points`,
        template_full:
`You are a principal {{VARIANT}} infrastructure engineer. Write a production-grade SOP and operational runbook.

System: {{SYSTEM}}
Process: {{PROCESS}}
Audience: {{AUDIENCE}}

## 1. Document Header
Title, version, owner, last reviewed date, and scope.

## 2. Overview
Purpose, background, and when this procedure applies.

## 3. Prerequisites
Access, tools, permissions, and knowledge required before starting.

## 4. Step-by-Step Procedure
Numbered steps with: commands in code blocks, expected outputs, and decision points.

## 5. Verification Checklist
How to confirm the procedure completed successfully.

## 6. Rollback Plan
Step-by-step instructions to undo the procedure if something goes wrong.

## 7. Troubleshooting Guide
Top 5 errors with root cause and resolution for each.

## 8. Monitoring & Alerts
Key metrics, alert thresholds, and on-call escalation path.`,
        chain_1:
`Act as a senior {{VARIANT}} systems engineer. Write a step-by-step operational procedure.

System: {{SYSTEM}}
Process: {{PROCESS}}
Audience: {{AUDIENCE}}

Provide: prerequisites, numbered procedure with exact commands/steps, expected outputs at each step, and a success verification checklist.
Write for someone with basic technical knowledge.`,
        chain_2:
`You are a {{VARIANT}} reliability engineer. Create the incident response and troubleshooting runbook.

System: {{SYSTEM}}
Process: {{PROCESS}}

Provide:
1. 5 health check metrics to monitor this system
2. Top 5 failure modes with symptoms, root cause, and resolution steps
3. Disaster recovery procedure
4. Rollback plan if the operation fails mid-way
5. Escalation matrix with on-call contacts`,
        chain_3:
`Act as a {{VARIANT}} security engineer. Conduct a security hardening review.

System: {{SYSTEM}}
Process: {{PROCESS}}
Audience: {{AUDIENCE}}

Provide:
1. Top 5 security risks in this system or process
2. Specific hardening steps with exact configuration changes
3. Access control review (principle of least privilege)
4. Logging and audit trail requirements
5. Compliance checklist for relevant standards (SOC2, ISO27001, CIS Benchmarks)`,
    },

    // ── Supply Chain Audit (pb-la) ─────────────────────────────────────────────
    'pb-la': {
        questions: [
            { id: 'ROUTE',     type: 'text', _label: 'Describe your supply chain or trade route:',        _placeholder: 'e.g. Manufacturing in Vietnam → warehouse in Netherlands → retail in UK' },
            { id: 'PRODUCT',   type: 'text', _label: 'What product or goods are you moving?',             _placeholder: 'e.g. Consumer electronics, perishable food, industrial components' },
            { id: 'CHALLENGE', type: 'select', _label: 'What is the main challenge or optimization goal?', options: ['Reduce lead time', 'Cut logistics costs', 'Improve visibility & tracking', 'Ensure compliance', 'Reduce supply chain risk', 'Optimize inventory levels'] },
        ],
        template_quick:
`Act as a senior supply chain strategist specializing in {{VARIANT}} logistics.

Route: {{ROUTE}}
Product: {{PRODUCT}}
Challenge / Goal: {{CHALLENGE}}

Provide:
1. Supply chain flow map (nodes, handoffs, and lead times at each stage)
2. Top 3 bottlenecks or vulnerabilities in this chain
3. Recommended optimization with estimated impact
4. Key KPIs to track for this supply chain
5. One technology or process change to implement in the next 90 days`,
        template_full:
`You are a principal supply chain consultant specializing in {{VARIANT}} logistics. Conduct a full audit and optimization plan.

Route: {{ROUTE}}
Product Type: {{PRODUCT}}
Primary Challenge: {{CHALLENGE}}

## 1. Supply Chain Mapping
End-to-end flow with: nodes, transit times, costs, and risk exposure at each stage.

## 2. Bottleneck Analysis
Top 5 constraints with root cause, frequency, and business impact.

## 3. Risk Assessment
Geopolitical, operational, and compliance risks with probability and mitigation strategies.

## 4. Inventory Optimization
Safety stock model, reorder points, and demand forecasting approach.

## 5. Cost Reduction Plan
Top 3 cost-saving initiatives with implementation roadmap and ROI.

## 6. Compliance & Customs
Key regulatory requirements, documentation checklist, and tariff considerations.

## 7. Technology Stack
Recommended tools for visibility, forecasting, supplier management, and reporting.`,
        chain_1:
`Act as a supply chain analyst specializing in {{VARIANT}}. Map and audit the supply chain.

Route: {{ROUTE}}
Product: {{PRODUCT}}
Challenge: {{CHALLENGE}}

Provide: a step-by-step flow map of the entire chain, lead time and cost estimate at each stage, the top 3 bottlenecks by impact, and key risk factors (supplier concentration, geopolitical, weather, etc.).`,
        chain_2:
`You are a logistics optimization expert specializing in {{VARIANT}}. Design the efficiency improvement plan.

Route: {{ROUTE}}
Product: {{PRODUCT}}
Goal: {{CHALLENGE}}

For the top 3 identified bottlenecks, provide:
1. Specific intervention (process change, technology, partner change)
2. Expected improvement (time, cost, or reliability)
3. Implementation steps and timeline
4. Investment required and estimated ROI`,
        chain_3:
`Act as a trade compliance specialist for {{VARIANT}} supply chains.

Route: {{ROUTE}}
Product: {{PRODUCT}}
Context: {{CHALLENGE}}

Provide:
1. Key customs and regulatory requirements for this trade route
2. Required documentation checklist
3. Tariff and duty optimization strategies
4. Common compliance mistakes and how to avoid them
5. Recommended customs broker selection criteria`,
    },

    // ── HR Culture (pb-hc) ─────────────────────────────────────────────────────
    'pb-hc': {
        questions: [
            { id: 'SIZE',    type: 'text', _label: 'What is the team or organization size and structure?',     _placeholder: 'e.g. 45-person startup, fully remote, 3 engineering teams + sales + ops' },
            { id: 'PROBLEM', type: 'select', _label: 'What is the current cultural challenge or goal?', options: ['High employee turnover', 'Low team engagement', 'Poor cross-team collaboration', 'Scaling culture during growth', 'Conflict & interpersonal tension', 'Lack of psychological safety', 'Values misalignment'] },
            { id: 'VALUES',  type: 'text', _label: 'What values or principles should define this culture?',   _placeholder: 'e.g. Ownership, transparency, customer obsession, continuous learning' },
        ],
        template_quick:
`Act as an organizational culture strategist specializing in {{VARIANT}} organizations.

Team: {{SIZE}}
Challenge: {{PROBLEM}}
Values: {{VALUES}}

Provide:
1. Root cause diagnosis of the cultural challenge
2. Three core cultural rituals to implement immediately
3. A values operationalization plan (how values show up in hiring, performance, and daily decisions)
4. Quick wins to see results in 30 days
5. Culture health metrics to track`,
        template_full:
`You are a senior organizational psychologist and culture strategist specializing in {{VARIANT}} teams.

Organization: {{SIZE}}
Cultural Challenge: {{PROBLEM}}
Desired Values: {{VALUES}}

## 1. Culture Diagnosis
Root cause of current cultural issues. What behaviors are being rewarded vs. stated values?

## 2. Values Architecture
How to define, communicate, and operationalize the 3 core values across hiring, performance, and daily rituals.

## 3. Ritual Design
5 specific team rituals (weekly, monthly, quarterly) that reinforce the desired culture.

## 4. Conflict Resolution Protocol
Step-by-step process for addressing cultural violations and interpersonal conflicts.

## 5. Leadership Behavior Model
Specific behaviors leaders must model to authentically represent the culture.

## 6. Measurement System
Pulse survey design, culture metrics, and 90-day review cadence.

## 7. New Hire Culture Immersion
30-day culture onboarding plan with specific activities and conversations.`,
        chain_1:
`Act as an organizational culture consultant specializing in {{VARIANT}} environments. Diagnose the culture.

Team: {{SIZE}}
Problem: {{PROBLEM}}
Desired Values: {{VALUES}}

Provide: root cause analysis of the cultural issue, the gap between stated and lived values, the top 3 behaviors that need to change, and the key leverage points for culture transformation.`,
        chain_2:
`You are an HR design specialist. Build the cultural rituals and values operating system.

Team: {{SIZE}}
Culture Goal: {{PROBLEM}}
Values: {{VALUES}}

Design:
1. 3 weekly rituals that reinforce the desired culture
2. A monthly team ceremony for connection and celebration
3. A conflict resolution protocol with specific steps
4. A performance conversation framework aligned to values
5. New hire culture onboarding activities for Week 1`,
        chain_3:
`Act as an employee engagement strategist for {{VARIANT}} organizations. Design the measurement and improvement system.

Team: {{SIZE}}
Challenge: {{PROBLEM}}
Values: {{VALUES}}

Provide:
1. A 10-question anonymous pulse survey covering: safety, connection, clarity, growth, recognition
2. How to analyze results and identify patterns
3. Manager toolkit for acting on survey insights within 2 weeks
4. Quarterly culture review meeting agenda
5. Leading indicators that culture is genuinely improving`,
    },

    // ── Finance Plan (pb-fn) ───────────────────────────────────────────────────
    'pb-fn': {
        questions: [
            { id: 'REVENUE', type: 'text', _label: 'What is the current revenue or financial situation?',   _placeholder: 'e.g. $2.5M ARR growing 30% YoY, or pre-revenue startup with $500k seed' },
            { id: 'GOAL',    type: 'select', _label: 'What is the financial goal or challenge?', options: ['Extend runway / reduce burn', 'Reach profitability', 'Prepare for fundraising', 'Optimize tax strategy', 'Plan for growth / hiring', 'Financial health audit'] },
            { id: 'CONTEXT', type: 'text', _label: 'Describe the business model and cost structure:',       _placeholder: 'e.g. SaaS, $120 CAC, 18-month LTV, 70% gross margin, team of 15' },
        ],
        template_quick:
`Act as a CFO-level financial advisor specializing in {{VARIANT}} finance.

Current Situation: {{REVENUE}}
Goal: {{GOAL}}
Business Context: {{CONTEXT}}

Provide:
1. P&L health assessment — key financial ratios and what they signal
2. Top 3 cost reduction opportunities with estimated savings
3. Revenue growth lever most likely to compound quickly
4. 12-month cash flow forecast framework
5. The single most important financial metric to optimize right now`,
        template_full:
`You are a CFO and financial strategy advisor specializing in {{VARIANT}} organizations. Create a comprehensive financial strategy.

Current Financials: {{REVENUE}}
Strategic Goal: {{GOAL}}
Business Model: {{CONTEXT}}

## 1. Financial Health Assessment
Key ratios: gross margin, burn rate, LTV:CAC, runway — and what each tells us.

## 2. P&L Optimization
Line-by-line cost audit — where to cut, where to invest, and why.

## 3. Revenue Strategy
Top 3 growth levers ranked by impact, speed, and resource requirement.

## 4. 18-Month Financial Model
Monthly P&L projection with clearly stated assumptions.

## 5. Cash Flow Management
Cash conversion cycle, working capital optimization, and treasury strategy.

## 6. Tax Strategy
Key optimization opportunities for this business structure.

## 7. Fundraising Readiness
Financial metrics investors will examine and benchmarks to hit before raising.`,
        chain_1:
`Act as a financial analyst specializing in {{VARIANT}} businesses. Conduct a P&L and unit economics audit.

Revenue: {{REVENUE}}
Goal: {{GOAL}}
Context: {{CONTEXT}}

Assess: gross margin health, EBITDA or burn rate, key cost drivers as % of revenue, unit economics (CAC, LTV, payback period), and 3 specific areas where performance is below benchmark.`,
        chain_2:
`You are a financial strategy consultant specializing in {{VARIANT}}. Build the 18-month financial forecast.

Current State: {{REVENUE}}
Target: {{GOAL}}
Business Model: {{CONTEXT}}

Provide:
1. Revenue model with 3 scenarios (base, bull, bear)
2. Key cost assumptions and growth drivers
3. Monthly cash flow projection for 18 months
4. Break-even analysis
5. The top 3 levers that most impact the outcome`,
        chain_3:
`Act as a strategic finance advisor. Create the funding and investor readiness plan.

Financials: {{REVENUE}}
Goal: {{GOAL}}
Context: {{CONTEXT}}

Provide:
1. Funding strategy (bootstrap vs. raise, timing, amount)
2. Key metrics investors will scrutinize — and target benchmarks
3. Data room checklist for due diligence
4. Valuation methodology and defensible range
5. 5 potential investors or funds aligned to this stage and sector`,
    },

    // ── Psych Coach (pb-pc) ────────────────────────────────────────────────────
    'pb-pc': {
        questions: [
            { id: 'PATTERN', type: 'text', _label: 'What behavior or mental pattern do you want to change?',    _placeholder: 'e.g. Chronic procrastination, people-pleasing, imposter syndrome, performance anxiety' },
            { id: 'CONTEXT', type: 'select', _label: 'In what context does this pattern appear most?', options: ['At work / professional situations', 'In relationships & social life', 'Creative work & projects', 'Public speaking / leadership', 'Daily habits & health', 'Major life transitions'] },
            { id: 'GOAL',    type: 'text', _label: 'What does success look like for you?',                      _placeholder: 'e.g. Delivering work on time without last-minute panic, saying no without guilt' },
        ],
        template_quick:
`Act as a psychologist and behavioral coach specializing in {{VARIANT}} challenges.

Pattern to Change: {{PATTERN}}
Context: {{CONTEXT}}
Desired Outcome: {{GOAL}}

Provide:
1. CBT-based root cause analysis (trigger → thought → emotion → behavior cycle)
2. The core cognitive distortion driving this pattern
3. One evidence-based intervention to try this week
4. A habit replacement strategy (cue → routine → reward)
5. A daily micro-practice to build the desired behavior`,
        template_full:
`You are a clinical psychologist and executive coach specializing in {{VARIANT}} behavioral change.

Pattern: {{PATTERN}}
Context: {{CONTEXT}}
Goal: {{GOAL}}

## 1. Behavioral Analysis
ABC model (Antecedent → Behavior → Consequence). What triggers the pattern and what reinforces it.

## 2. Root Cause Exploration
Underlying beliefs, past experiences, and emotional needs driving this behavior.

## 3. Cognitive Restructuring
The 3 core cognitive distortions at play — with reframing exercises for each.

## 4. Behavioral Intervention Plan
Step-by-step 30-day plan using CBT, habit stacking, and behavioral activation.

## 5. Mindfulness & Somatic Techniques
2 practical exercises to interrupt the pattern in the moment when it arises.

## 6. Environment Design
How to structure your environment to make the desired behavior easier and more automatic.

## 7. Progress Tracking
Journal prompts, weekly reflection questions, and genuine markers of change.`,
        chain_1:
`Act as a CBT-trained psychologist specializing in {{VARIANT}} challenges. Analyze the behavioral pattern.

Pattern: {{PATTERN}}
Context: {{CONTEXT}}
Goal: {{GOAL}}

Using the CBT model, identify: the specific trigger situations, automatic thoughts that arise, the emotional response, the resulting behavior, and the long-term consequence that reinforces the cycle.
What is the core limiting belief underneath this pattern?`,
        chain_2:
`You are a behavioral coach specializing in {{VARIANT}} change. Design a 30-day intervention plan.

Pattern to Change: {{PATTERN}}
Context: {{CONTEXT}}
Goal: {{GOAL}}

Provide:
1. A cognitive reframing exercise for the core distorted thought
2. A habit replacement strategy (what to do instead when the trigger occurs)
3. A week-by-week 30-day plan with specific daily practices
4. Environmental design changes to support the new behavior
5. How to handle setbacks without self-criticism or shame spirals`,
        chain_3:
`Act as a mindfulness and resilience coach specializing in {{VARIANT}} challenges. Build the long-term support system.

Pattern: {{PATTERN}}
Context: {{CONTEXT}}
Goal: {{GOAL}}

Provide:
1. A 5-minute daily mindfulness practice tailored to this specific pattern
2. 5 journal prompts for weekly self-reflection
3. A self-compassion protocol for when the old pattern resurfaces
4. How to communicate this change to key people in your life
5. Concrete markers that indicate the pattern has genuinely shifted — not just suppressed`,
    },

};

// ─── Variant-specific chip overrides ─────────────────────────────────────────
// For each variant ID (pb.id) we can override one or more question option arrays.
// This makes suggestions immediately relevant — a LinkedIn card gets LinkedIn goals,
// a Checkout UX card gets checkout-specific issues, etc.
// Covers the 4 explicit variant groups (CONTENT_ENGINE, UX_AUDIT, CODE_REFACTOR, NGO_PROPOSAL)
// which are reused across all 20 base templates via cycling.
const PB_VARIANT_CHIPS = (() => {
    // ── CONTENT ENGINE variant goal chips (slug: li/tw/tk/bl/ne/yt/th/me/wh/pr/ig/rd/cs/eb/po/ad/qu/sa/cp/b2b/vh/bi)
    // Used directly by pb-ce-*, and reused by pb-hr-*, pb-cp-*, pb-pm-*, pb-hc-*, pb-fn-* via cycling
    const CE = {
        li:  ['Build thought leadership', 'Generate leads', 'Grow professional network', 'Drive newsletter signups', 'Announce product or news', 'Attract job opportunities', 'Increase profile visibility'],
        tw:  ['Grow following', 'Drive real-time engagement', 'Share hot takes', 'Start a discussion', 'Promote content', 'Build brand voice', 'Go viral'],
        tk:  ['Go viral', 'Build brand personality', 'Drive followers', 'Promote a product', 'Educate & entertain', 'Build community', 'Launch a trend / challenge'],
        bl:  ['Rank on Google (SEO)', 'Build authority', 'Drive newsletter signups', 'Generate leads', 'Educate readers deeply', 'Tell a brand story', 'Announce news'],
        ne:  ['Grow subscriber base', 'Drive clicks & traffic', 'Build reader loyalty', 'Sell product or service', 'Share curated insights', 'Nurture leads', 'Announce news'],
        yt:  ['Grow subscribers', 'Drive watch time', 'Educate audience', 'Build brand trust', 'Promote product', 'Entertain viewers', 'Monetize content'],
        th:  ['Build community', 'Drive engagement', 'Share ideas & opinions', 'Grow following', 'Start meaningful discussions', 'Build brand voice', 'Cross-post from Twitter'],
        me:  ['Build writing authority', 'Reach new readers', 'Drive newsletter signups', 'Monetize writing', 'Educate deeply', 'Share expertise', 'Tell a powerful story'],
        wh:  ['Generate enterprise leads', 'Build thought leadership', 'Educate the market', 'Support sales team', 'Establish credibility', 'Drive downloads', 'Research distribution'],
        pr:  ['Announce product launch', 'Announce funding or partnership', 'Manage breaking news', 'Drive media coverage', 'Build brand presence', 'Announce award or hire', 'Crisis communication'],
        ig:  ['Grow following', 'Build brand aesthetic', 'Drive product sales', 'Increase engagement', 'Build community', 'Tell brand story visually', 'Promote event or launch'],
        rd:  ['Build credibility authentically', 'Drive targeted traffic', 'Get genuine community feedback', 'Run an AMA session', 'Promote without spamming', 'Research your audience', 'Answer questions at scale'],
        cs:  ['Close sales deals', 'Build social proof', 'Showcase ROI to prospects', 'Win awards or recognition', 'Attract similar clients', 'Support sales team', 'Educate prospects'],
        eb:  ['Generate leads', 'Build deep authority', 'Grow email list', 'Educate audience thoroughly', 'Monetize expertise', 'Support the sales funnel', 'Establish credibility'],
        po:  ['Grow listenership', 'Build brand trust', 'Monetize through sponsorships', 'Interview industry experts', 'Educate & entertain audience', 'Build community', 'Drive newsletter signups'],
        ad:  ['Drive immediate conversions', 'Generate leads', 'Increase brand awareness', 'Retarget warm audience', 'Promote a sale or offer', 'Cold audience acquisition', 'Drive app installs'],
        qu:  ['Drive traffic to website', 'Build online authority', 'Generate leads', 'Educate target customers', 'Build brand visibility', 'Answer common objections', 'SEO benefits'],
        sa:  ['Book demos or discovery calls', 'Nurture warm leads', 'Close deals faster', 'Upsell existing customers', 'Re-engage cold prospects', 'Handle objections', 'Build urgency'],
        cp:  ['Drive course enrollments', 'Build educator credibility', 'Grow email list', 'Nurture prospects', 'Launch new cohort', 'Promote via affiliates', 'Re-engage past students'],
        b2b: ['Book first meeting', 'Warm up a cold prospect', 'Follow up after event / meeting', 'Re-engage ghosted prospect', 'Introduce new product or service', 'Referral request', 'Partnership proposal'],
        vh:  ['Maximum shares & reposts', 'Emotional resonance', 'Challenge or trend participation', 'Spark debate / controversy', 'Create curiosity gap', 'Surprise or shock value', 'Pure relatability'],
        bi:  ['Attract job opportunities', 'Build personal brand', 'Generate inbound leads', 'Establish niche expertise', 'Increase professional visibility', 'Attract speaking invites', 'Build authentic network'],
    };

    // ── UX AUDIT variant top-issue chips (sa/mg/gp/lm/ec/fi/cr/db/on/ch/fo/na/se/pr/dm/ap/bl/la/hs/mn/ay/mo)
    // Used by pb-ux-*, and reused by pb-ir-*, pb-ld-*, pb-so-*, pb-pc-* via cycling
    const UX = {
        sa:  ['High churn / low activation', 'Feature discoverability', 'Complex onboarding flow', 'Empty state confusion', 'Poor upgrade or upsell flow', 'Confusing settings page', 'Support ticket overflow'],
        mg:  ['Player drop-off at level 1', 'Confusing controls', 'Cluttered game UI', 'Poor reward / feedback loop', 'Hard to understand rules', 'Performance / loading issues', 'Unclear progression system'],
        gp:  ['Low digital literacy users', 'Accessibility compliance gaps', 'Complex forms & applications', 'Language / translation issues', 'Poor mobile experience', 'Unclear navigation structure', 'Trust & credibility issues'],
        lm:  ['Low course completion rate', 'Confusing navigation', 'Poor progress tracking', 'Content hard to find', 'Engagement drop-off mid-course', 'Poor quiz or video experience', 'Bad mobile experience'],
        ec:  ['High cart abandonment', 'Low product page conversion', 'Poor search & filter', 'Complex checkout flow', 'Trust & security concerns', 'Mobile shopping friction', 'Confusing returns process'],
        fi:  ['Trust & security concerns', 'Complex verification process', 'Confusing financial jargon', 'Slow transaction flow', 'Poor error recovery', 'Hard to understand fees', 'Regulatory friction'],
        cr:  ['Data hard to find', 'Too many clicks to complete tasks', 'Poor search & filter', 'Confusing pipeline view', 'Weak email integration', 'Reporting hard to read', 'Mobile unusable'],
        db:  ['Information overload', 'Unclear data hierarchy', 'Slow loading charts', 'Poor filter & sort tools', 'Confusing metric labels', 'Can\'t act on the data shown', 'No mobile support'],
        on:  ['High early drop-off', 'Users missing the "aha moment"', 'Confusing first steps', 'Too many required fields', 'Unclear value proposition', 'No progress indication', 'Users not inviting others'],
        ch:  ['High checkout abandonment', 'Payment step friction', 'Too many form fields', 'No guest checkout option', 'Unclear pricing & fees', 'Poor error messages', 'No progress indicator'],
        fo:  ['High form abandonment', 'Too many required fields', 'Confusing validation errors', 'Poor error messages', 'No progress indicator', 'Unclear field labels', 'No inline help text'],
        na:  ['Hard to find key sections', 'Too many menu items', 'Inconsistent navigation patterns', 'Missing breadcrumbs', 'Search hard to access', 'Back navigation issues', 'Overcrowded header'],
        se:  ['Poor search results relevance', 'No autocomplete or suggestions', 'Filters hard to use', 'Empty state on no results', 'Slow search response', 'Can\'t refine results', 'Spelling tolerance issues'],
        pr:  ['Confusing settings layout', 'Hard to update personal info', 'Unclear privacy controls', 'No activity history', 'Weak notification controls', 'Avatar / photo upload issues', 'Account deletion not findable'],
        la:  ['Low conversion rate', 'Unclear value proposition', 'Above-fold not compelling', 'Weak call-to-action', 'No social proof visible', 'Too much text, too little hierarchy', 'Poor mobile layout'],
        ap:  ['Too complex for non-technical users', 'Slow bulk actions', 'Confusing permission system', 'Poor audit log / history', 'Weak search & filter', 'Inconsistent UI patterns', 'No keyboard shortcuts'],
        mn:  ['Hard to reach key sections', 'Gesture conflicts', 'Bottom nav confusion', 'Too many top-level items', 'Active state not clear', 'Back navigation broken', 'Tab bar vs hamburger confusion'],
        ay:  ['Missing alt text on images', 'Low color contrast', 'No keyboard navigation', 'Screen reader incompatibility', 'Missing ARIA labels', 'Focus indicator not visible', 'Captions missing on videos'],
        mo:  ['Modals hard to dismiss', 'Confusing modal vs page', 'Too much content in modal', 'Keyboard trap', 'No overlay click to close', 'Poor mobile modal sizing', 'Stacked modals confusion'],
    };

    // ── CODE REFACTOR / NGO_PROPOSAL context chips
    // These are reused by templates that cycle through these variant sets.
    // We map by slug since the same slug can appear across many template bases.
    const CODE_GOAL = {
        py:  ['Fix bugs & logic errors', 'Improve performance (async, caching)', 'Add type hints (mypy)', 'Write unit tests (pytest)', 'Refactor to OOP / clean code', 'Migrate to newer Python version', 'Improve error handling'],
        js:  ['Fix bugs & async issues', 'Improve performance', 'Add TypeScript types', 'Write Jest tests', 'Modernize to ES2024+', 'Improve error handling', 'Reduce bundle size'],
        re:  ['Fix rendering bugs', 'Optimize re-renders', 'Convert to hooks', 'Add TypeScript', 'Write component tests', 'Improve accessibility', 'Modernize patterns'],
        ru:  ['Fix ownership / borrow errors', 'Improve performance', 'Add error handling', 'Write unit tests', 'Refactor async code', 'Improve memory safety', 'Modernize patterns'],
        go:  ['Fix concurrency bugs', 'Improve performance', 'Add error handling', 'Write tests', 'Refactor interfaces', 'Improve logging', 'Modernize patterns'],
        sq:  ['Optimize slow queries', 'Fix data integrity issues', 'Add proper indexing', 'Refactor stored procedures', 'Improve readability', 'Add missing constraints', 'Normalize schema'],
        fa:  ['Fix endpoint bugs', 'Improve async handling', 'Add Pydantic validation', 'Write API tests', 'Improve error responses', 'Add authentication', 'Optimize DB queries'],
        dj:  ['Fix model or view bugs', 'Improve query performance', 'Add test coverage', 'Refactor views to class-based', 'Fix N+1 queries', 'Improve admin interface', 'Add proper caching'],
        nx:  ['Fix hydration errors', 'Improve performance (SSR/SSG)', 'Add TypeScript', 'Write E2E tests', 'Optimize image loading', 'Improve SEO', 'Refactor data fetching'],
        tw:  ['Fix responsive issues', 'Improve accessibility', 'Reduce class bloat', 'Extract components', 'Improve dark mode', 'Fix custom config', 'Modernize design tokens'],
        ph:  ['Fix security vulnerabilities', 'Improve performance', 'Migrate to PHP 8+', 'Add type declarations', 'Write unit tests', 'Fix SQL injection risks', 'Improve error handling'],
        la:  ['Fix controller bugs', 'Improve Eloquent queries', 'Add feature tests', 'Refactor to services', 'Fix N+1 issues', 'Improve validation', 'Add proper caching'],
        sw:  ['Fix Swift concurrency bugs', 'Improve performance', 'Add unit tests (XCTest)', 'Refactor to SwiftUI', 'Fix memory leaks', 'Improve error handling', 'Modernize patterns'],
        ko:  ['Fix coroutine bugs', 'Improve performance', 'Add unit tests', 'Refactor to Kotlin idioms', 'Fix null safety issues', 'Improve error handling', 'Modernize patterns'],
        cp:  ['Fix memory leaks', 'Improve performance', 'Add unit tests', 'Refactor to modern C++', 'Fix undefined behavior', 'Improve error handling', 'Reduce complexity'],
        cs:  ['Fix async/await bugs', 'Improve performance', 'Add unit tests', 'Refactor to clean code', 'Fix null reference issues', 'Improve error handling', 'Modernize to .NET latest'],
        rb:  ['Fix Ruby idiom issues', 'Improve performance', 'Add RSpec tests', 'Refactor to OOP', 'Fix security issues', 'Improve error handling', 'Modernize patterns'],
        ra:  ['Fix ActiveRecord bugs', 'Improve query performance', 'Add feature specs', 'Refactor to services', 'Fix N+1 queries', 'Improve validations', 'Add proper caching'],
        vu:  ['Fix reactivity bugs', 'Improve performance', 'Add TypeScript', 'Write component tests', 'Modernize to Vue 3', 'Improve accessibility', 'Refactor to Composition API'],
        an:  ['Fix change detection issues', 'Improve performance', 'Add unit tests', 'Refactor to signals', 'Fix memory leaks', 'Improve lazy loading', 'Modernize patterns'],
        sv:  ['Fix reactivity bugs', 'Improve build performance', 'Add TypeScript', 'Write component tests', 'Modernize patterns', 'Improve accessibility', 'Optimize bundle size'],
        dt:  ['Fix null safety issues', 'Improve performance', 'Add unit tests', 'Refactor async code', 'Fix memory issues', 'Improve error handling', 'Modernize patterns'],
        fl:  ['Fix widget tree bugs', 'Improve performance', 'Add widget tests', 'Refactor state management', 'Fix platform-specific issues', 'Improve accessibility', 'Modernize patterns'],
    };

    const NGO_GOAL = {
        wa:  ['Improve community water access', 'Increase sanitation coverage', 'Train local technicians', 'Reduce waterborne disease', 'Build sustainable infrastructure', 'Secure donor funding', 'Measure impact at scale'],
        ed:  ['Increase school enrollment', 'Reduce dropout rates', 'Improve teacher quality', 'Support girls\' education', 'Provide remote learning', 'Secure government partnership', 'Measure learning outcomes'],
        ge:  ['Advance gender equality', 'Prevent gender-based violence', 'Increase women\'s economic participation', 'Support leadership development', 'Change social norms', 'Policy reform', 'Measure gender impact'],
        cl:  ['Reduce carbon emissions', 'Increase climate resilience', 'Mobilize climate finance', 'Advocate for policy change', 'Support green transition', 'Educate communities', 'Measure environmental impact'],
        yo:  ['Provide youth employment', 'Improve youth mental health', 'Increase civic engagement', 'Support entrepreneurship', 'Prevent youth crime', 'Build life skills', 'Measure youth outcomes'],
        he:  ['Improve healthcare access', 'Reduce maternal mortality', 'Prevent disease outbreaks', 'Train community health workers', 'Increase vaccination rates', 'Support mental health', 'Measure health outcomes'],
        re:  ['Provide refugee protection', 'Increase livelihood support', 'Improve camp conditions', 'Support integration', 'Provide legal aid', 'Support education access', 'Measure protection outcomes'],
        ci:  ['Strengthen civic participation', 'Combat disinformation', 'Support free elections', 'Build civil society capacity', 'Advocate human rights', 'Support journalists', 'Measure democratic outcomes'],
        ag:  ['Improve food security', 'Increase farmer income', 'Promote sustainable farming', 'Support market access', 'Build climate resilience', 'Reduce post-harvest loss', 'Measure agricultural impact'],
        tg:  ['Bridge digital divide', 'Improve digital literacy', 'Support underserved communities', 'Provide affordable devices', 'Build local digital skills', 'Advocate digital rights', 'Measure digital inclusion'],
        po:  ['Reduce extreme poverty', 'Increase household income', 'Improve access to services', 'Support social protection', 'Build economic resilience', 'Empower marginalized groups', 'Measure poverty reduction'],
        hr:  ['Document human rights violations', 'Support survivors', 'Advocate for accountability', 'Build local capacity', 'Change laws or policy', 'Increase public awareness', 'Measure rights outcomes'],
        mf:  ['Provide access to credit', 'Build financial literacy', 'Support women entrepreneurs', 'Reduce loan default rates', 'Scale microfinance program', 'Achieve financial sustainability', 'Measure economic impact'],
        di:  ['Provide emergency relief', 'Coordinate disaster response', 'Build community resilience', 'Restore livelihoods', 'Improve early warning systems', 'Secure emergency funding', 'Measure recovery outcomes'],
        sa:  ['Improve sanitation access', 'Build WASH infrastructure', 'Change hygiene behavior', 'Reduce open defecation', 'Train local operators', 'Achieve ODF status', 'Measure sanitation impact'],
        ar:  ['Support creative communities', 'Use arts for social change', 'Preserve cultural heritage', 'Build artistic capacity', 'Increase arts access', 'Advocate for arts funding', 'Measure cultural impact'],
        sc:  ['Increase scholarship access', 'Support underrepresented students', 'Improve scholarship outcomes', 'Build alumni network', 'Secure scholarship funding', 'Measure educational impact', 'Scale the program'],
        fo:  ['Increase forest cover', 'Reduce deforestation', 'Support forest communities', 'Promote sustainable forestry', 'Secure conservation finance', 'Advocate for policy change', 'Measure forest outcomes'],
        mh:  ['Improve mental health access', 'Reduce stigma', 'Train community counselors', 'Support crisis intervention', 'Integrate into health systems', 'Measure mental health outcomes', 'Advocate for policy'],
        sh:  ['Build community connections', 'Reduce social isolation', 'Support vulnerable groups', 'Create safe spaces', 'Strengthen social cohesion', 'Build volunteer capacity', 'Measure social impact'],
        we:  ['Improve welfare access', 'Support vulnerable families', 'Strengthen social protection', 'Build case management capacity', 'Reduce system barriers', 'Measure welfare outcomes', 'Advocate for reform'],
        em:  ['Deploy emergency response', 'Coordinate with local authorities', 'Secure emergency funding', 'Protect vulnerable populations', 'Provide essential supplies', 'Build staff capacity', 'Measure emergency outcomes'],
    };

    // Build the full chip map keyed by full pb.id (e.g. 'pb-ce-li', 'pb-ux-ec', etc.)
    // Templates that use CE variants (pb-ce, pb-hr, pb-cp, pb-pm, pb-hc, pb-fn):
    //   question ID to override per template base
    const CE_QUESTION_MAP = {
        'pb-ce': 'GOAL', 'pb-hr': 'PRIORITY', 'pb-cp': 'CONSTRAINT',
        'pb-pm': 'RISK',  'pb-hc': 'PROBLEM',  'pb-fn': 'GOAL',
    };
    // Templates that use UX variants (pb-ux, pb-ir, pb-ld, pb-so, pb-pc):
    const UX_QUESTION_MAP = {
        'pb-ux': 'TOP_ISSUE', 'pb-ir': 'SEVERITY',  'pb-ld': 'CONTRACT',
        'pb-so': 'AUDIENCE',  'pb-pc': 'CONTEXT',
    };
    // Templates that use CODE_REFACTOR variants (pb-cr, pb-ds, pb-ss, pb-rs, pb-la):
    const CODE_QUESTION_MAP = {
        'pb-cr': 'GOAL', 'pb-ds': 'OBJECTIVE', 'pb-ss': 'STAGE',
        'pb-rs': 'STAGE', 'pb-la': 'CHALLENGE',
    };
    // Templates that use NGO variants (pb-gp, pb-cc, pb-bm, pb-it, pb-sw, pb-pc):
    const NGO_QUESTION_MAP = {
        'pb-gp': 'ISSUE', 'pb-cc': 'LEARNER', 'pb-bm': 'STAGE',
        'pb-sw': 'GENRE', 'pb-ir': 'SEVERITY',
    };

    const chips = {};

    // Wire CE variants
    Object.entries(CE_QUESTION_MAP).forEach(([baseId, qId]) => {
        Object.entries(CE).forEach(([slug, opts]) => {
            chips[`${baseId}-${slug}`] = { [qId]: opts };
        });
    });
    // Wire UX variants
    Object.entries(UX_QUESTION_MAP).forEach(([baseId, qId]) => {
        Object.entries(UX).forEach(([slug, opts]) => {
            chips[`${baseId}-${slug}`] = { ...(chips[`${baseId}-${slug}`] || {}), [qId]: opts };
        });
    });
    // Wire CODE variants — for pb-cr use the specific CODE_GOAL map
    Object.entries(CODE_QUESTION_MAP).forEach(([baseId, qId]) => {
        const sourceMap = baseId === 'pb-cr' ? CODE_GOAL : {};
        Object.entries(CODE_GOAL).forEach(([slug, opts]) => {
            const override = sourceMap[slug] || opts;
            chips[`${baseId}-${slug}`] = { ...(chips[`${baseId}-${slug}`] || {}), [qId]: override };
        });
    });
    // Wire NGO variants
    Object.entries(NGO_QUESTION_MAP).forEach(([baseId, qId]) => {
        Object.entries(NGO_GOAL).forEach(([slug, opts]) => {
            chips[`${baseId}-${slug}`] = { ...(chips[`${baseId}-${slug}`] || {}), [qId]: opts };
        });
    });

    return chips;
})();

// ─── Variant name extraction ──────────────────────────────────────────────────
// Strips the category suffix from the full pb.title to get the clean variant name.
// e.g. "Python Refactor Pro" → "Python"   |   "LinkedIn Content Engine" → "LinkedIn"
// This lets templates say "Act as a senior Python engineer" instead of
// "Act as a senior Python Refactor Pro engineer".
const PB_TITLE_SUFFIXES = {
    'pb-cr': ' Refactor Pro',       'pb-ux': ' UX Audit',
    'pb-ce': ' Content Engine',     'pb-ir': ' Incident Response',
    'pb-ds': ' Data Pipeline',      'pb-hr': ' Hiring Manager',
    'pb-gp': ' Policy Lead',        'pb-ld': ' Legal Review',
    'pb-ss': ' Enterprise Sales',   'pb-cp': ' Eco Strategy',
    'pb-pm': ' Project Launch',     'pb-cc': ' Education Architect',
    'pb-rs': ' Academic Research',  'pb-sw': ' Story Suite',
    'pb-bm': ' Business Architect', 'pb-so': ' IT Operations',
    'pb-la': ' Supply Chain Audit', 'pb-hc': ' Cultural Design',
    'pb-fn': ' Fiscal Advisor',     'pb-pc': ' Behavior Coach',
};

const extractVariant = (title, baseId) => {
    const suffix = PB_TITLE_SUFFIXES[baseId];
    if (suffix && title.endsWith(suffix)) return title.slice(0, -suffix.length).trim();
    // Fallback: first word(s) before last two words (generic suffix)
    const parts = title.split(' ');
    return parts.length > 2 ? parts.slice(0, -2).join(' ') : title;
};

// ─── Normalize a playbook into the unified situation-style item format ─────────
const normalizePb = (pb) => {
    const baseId  = pb.id.substring(0, 5); // e.g. 'pb-cr' from 'pb-cr-py'
    const tpl     = PB_SITUATION_TEMPLATES[baseId];
    const variant = extractVariant(pb.title, baseId); // e.g. "Python", "LinkedIn", "SaaS App"
    if (tpl) {
        // Merge any variant-specific chip overrides into the question definitions
        const variantChips = PB_VARIANT_CHIPS[pb.id] || {};
        const questions = tpl.questions.map(q =>
            variantChips[q.id] ? { ...q, options: variantChips[q.id] } : q
        );
        return {
            _type: 'playbook',
            id: pb.id, category: pb.category.toLowerCase(),
            icon: pb.icon, title: pb.title, desc: pb.description,
            questionCount: questions.length,
            questions,
            _variant: variant,
            _tpl: tpl,
        };
    }
    return {
        _type: 'playbook',
        id: pb.id, category: pb.category.toLowerCase(),
        icon: pb.icon, title: pb.title, desc: pb.description,
        questionCount: pb.inputs.length,
        questions: pb.inputs.map(inp => {
            const { q, type } = enhanceInput(inp);
            return { id: inp.key, type, _label: q, _placeholder: inp.placeholder || '' };
        }),
        _variant: variant,
        _tpl: null,
        steps: pb.steps,
    };
};

// ─── Output generation ────────────────────────────────────────────────────────
// Situations → locale template keys
// Playbooks  → PB_SITUATION_TEMPLATES pre-written prompts
// Available interpolation variables:
//   {{TITLE}}   = full variant title  e.g. "Python Refactor Pro"
//   {{VARIANT}} = clean variant name  e.g. "Python"
//   + all user answer keys            e.g. {{CODE}}, {{GOAL}}, {{CONTEXT}}
const buildOutput = (item, answers, t) => {
    if (item._type === 'situation') {
        const sid = item.id;
        return {
            quick:  sitInterpolate(t(`situations.${sid}.template_quick`), answers),
            full:   sitInterpolate(t(`situations.${sid}.template_full`),  answers),
            chains: [
                sitInterpolate(t(`situations.${sid}.chain_1`), answers),
                sitInterpolate(t(`situations.${sid}.chain_2`), answers),
                sitInterpolate(t(`situations.${sid}.chain_3`), answers),
            ],
        };
    }

    if (item._tpl) {
        const vars = { TITLE: item.title, VARIANT: item._variant || item.title, ...answers };
        return {
            quick:  sitInterpolate(item._tpl.template_quick, vars),
            full:   sitInterpolate(item._tpl.template_full,  vars),
            chains: [
                sitInterpolate(item._tpl.chain_1, vars),
                sitInterpolate(item._tpl.chain_2, vars),
                sitInterpolate(item._tpl.chain_3, vars),
            ],
        };
    }

    // Legacy fallback: step-based output (only hits if _tpl is null)
    const compiled = (item.steps || []).map(s => ({
        title: s.title, prompt: interpolate(s.prompt, answers),
    }));
    const quick = compiled[0]?.prompt || '';
    const contextLines = Object.entries(answers).filter(([, v]) => v?.trim()).map(([k, v]) => `• ${k}: ${v}`).join('\n');
    const full  = `━━━ CONTEXT ━━━\n${contextLines}\n\n` +
        compiled.map((s, i) => `━━━ STEP ${i + 1}: ${s.title.toUpperCase()} ━━━\n\n${s.prompt}`).join('\n\n');
    const chains = compiled.slice(0, 5).map(s => s.prompt);
    while (chains.length < 3) chains.push(chains[chains.length - 1] || '');
    return { quick, full, chains };
};

// ─── Unified item card ────────────────────────────────────────────────────────
const ItemCard = ({ item, t, onSelect, isFav, onToggleFav }) => {
    const Icon = getIcon(item.icon);
    const isPlaybook = item._type === 'playbook';
    const title  = isPlaybook ? item.title  : t(item.titleKey);
    const desc   = isPlaybook ? item.desc   : t(item.descKey);
    const badge  = isPlaybook ? item.category : (t(`situations.cats.${item.category}`) || item.category);
    const metaLabel = `${item.questionCount || item.questions?.length || 0} ${t('situations.questions_label')}`;
    const ctaLabel  = t('situations.start_btn');

    return html`
        <div
            onClick=${() => onSelect(item)}
            className="group bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-2xl p-7 hover:shadow-level-2 shadow-level-1 transition-all cursor-pointer flex flex-col h-full relative overflow-hidden animate-fade-in text-left transform hover:-translate-y-1 hover:border-coral"
        >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <${Icon} className="w-24 h-24 rotate-12" />
            </div>
            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="p-3 rounded-xl bg-opal-bg dark:bg-slate-700 text-coral group-hover:bg-coral group-hover:text-white transition-all shadow-sm border border-mist dark:border-slate-600">
                    <${Icon} className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span className="px-2 py-1.5 text-[10px] font-black uppercase tracking-widest bg-opal-bg dark:bg-slate-700 text-stone-light dark:text-slate-400 rounded-lg border border-mist dark:border-slate-600">
                        ${badge}
                    </span>
                    ${isPlaybook && html`
                        <button onClick=${e => { e.stopPropagation(); onToggleFav(item.id); }}
                            className=${`transition-all hover:scale-110 min-w-[28px] min-h-[28px] flex items-center justify-center ${isFav ? 'text-coral' : 'text-stone-light hover:text-coral'}`}>
                            <${Heart} className="w-4 h-4" fill=${isFav ? 'currentColor' : 'none'} />
                        </button>
                    `}
                </div>
            </div>
            <h3 className="text-base font-black text-charcoal dark:text-white mb-2 relative z-10 leading-tight group-hover:text-coral transition-colors uppercase tracking-tight">
                ${title}
            </h3>
            <p className="text-sm text-stone dark:text-slate-400 leading-relaxed mb-6 flex-1 relative z-10 line-clamp-3 font-medium italic">
                "${desc}"
            </p>
            <div className="pt-4 border-t border-mist dark:border-slate-700 flex items-center justify-between text-xs font-medium text-stone-light dark:text-slate-500 relative z-10">
                <div className="flex items-center gap-1.5">
                    <${Sparkles} className="w-4 h-4"/>
                    <span>${metaLabel}</span>
                </div>
                <span className="flex items-center gap-1 group-hover:text-coral transition-colors font-black uppercase text-[10px] tracking-widest">
                    ${ctaLabel} <${ArrowRight} className="w-3 h-3" />
                </span>
            </div>
        </div>
    `;
};

// ─── Question flow (works for both situations and playbooks) ──────────────────
const QuestionFlow = ({ item, t, onComplete, onBack }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const isPlaybook = item._type === 'playbook';
    const question   = item.questions[step];
    const total      = item.questions.length;
    const current    = answers[question.id] || '';
    const isAnswered = current.trim() !== '';
    const pct        = Math.round(((step + 1) / total) * 100);
    const Icon       = getIcon(item.icon);
    const title      = isPlaybook ? item.title : t(item.titleKey);

    // For situation select questions
    const selectedOpt = (!isPlaybook && question.type === 'select')
        ? question.options.find(opt => t(`situations.${item.id}.${question.id}_${opt}`) === current)
        : null;

    const handleNext = useCallback(() => {
        if (!isAnswered) return;
        if (step < total - 1) setStep(s => s + 1);
        else onComplete(answers);
    }, [step, total, answers, isAnswered, onComplete]);

    const handleBack = useCallback(() => {
        if (step > 0) setStep(s => s - 1);
        else onBack();
    }, [step, onBack]);

    const handleSelect = (optId) => {
        const label = t(`situations.${item.id}.${question.id}_${optId}`);
        setAnswers(prev => ({ ...prev, [question.id]: label }));
    };
    const handleInput    = (e) => setAnswers(prev => ({ ...prev, [question.id]: e.target.value }));
    const handleKeyDown  = (e) => {
        if (e.key === 'Enter' && !e.shiftKey && question.type !== 'textarea' && isAnswered) {
            e.preventDefault(); handleNext();
        }
    };

    // Resolve label / placeholder depending on type
    // For playbooks, auto-generate locale key: playbooks.ql.{base}_{id_lower}_l / _ph
    const _pbBase      = item._type === 'playbook' ? item.id?.substring(3, 5) : null;
    const _autoLblKey  = _pbBase ? `playbooks.ql.${_pbBase}_${question.id.toLowerCase()}_l`  : null;
    const _autoPHKey   = _pbBase ? `playbooks.ql.${_pbBase}_${question.id.toLowerCase()}_ph` : null;
    const qLabel       = question.labelKey       ? t(question.labelKey)       : (_autoLblKey && t(_autoLblKey) !== _autoLblKey ? t(_autoLblKey) : question._label       || '');
    const qPlaceholder = question.placeholderKey ? t(question.placeholderKey) : (_autoPHKey   && t(_autoPHKey)   !== _autoPHKey   ? t(_autoPHKey)   : question._placeholder || '');

    return html`
        <div className="animate-fade-in max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-3 mb-8">
                <button onClick=${handleBack} className="p-2 rounded-xl text-stone-light hover:text-coral hover:bg-opal-bg dark:hover:bg-slate-800 transition-all">
                    <${ChevronLeft} className="w-5 h-5" />
                </button>
                <div className="flex-1">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-stone-light mb-2">
                        <span className="truncate max-w-[200px]">${title}</span>
                        <span>${t('situations.step_label')} ${step + 1} ${t('situations.of_label')} ${total}</span>
                    </div>
                    <div className="w-full h-2 bg-mist dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-coral rounded-full transition-all duration-500" style=${{ width: pct + '%' }}></div>
                    </div>
                </div>
            </div>

            <div className="bg-opal-surface dark:bg-slate-800 border-2 border-mist dark:border-slate-700 rounded-3xl p-6 sm:p-8 hover:border-coral transition-colors">
                <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-coral/10 text-coral border border-coral/20">
                    <${Icon} className="w-3.5 h-3.5" />
                    ${title}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-charcoal dark:text-white mb-6 uppercase tracking-tight leading-tight">
                    ${qLabel}
                </h2>

                ${question.type === 'select' && !isPlaybook && html`
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        ${question.options.map(optId => {
                            const label = t(`situations.${item.id}.${question.id}_${optId}`);
                            const isSel = selectedOpt === optId;
                            return html`
                                <button key=${optId} onClick=${() => handleSelect(optId)}
                                    className=${`px-4 py-3 rounded-2xl border-2 text-sm font-bold text-left transition-all duration-150 uppercase tracking-tight ${isSel ? 'bg-coral text-white border-coral shadow-sm' : 'bg-white dark:bg-slate-900 border-mist dark:border-slate-600 text-charcoal dark:text-white hover:border-coral'}`}>
                                    ${label}
                                </button>
                            `;
                        })}
                    </div>
                `}

                ${question.type === 'select' && isPlaybook && html`
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            ${(question.options || []).map(opt => {
                                const isSel = current === opt;
                                return html`
                                    <button key=${opt}
                                        onClick=${() => setAnswers(prev => ({ ...prev, [question.id]: opt }))}
                                        className=${`px-3.5 py-2 rounded-xl border-2 text-xs font-black uppercase tracking-tight transition-all duration-150 ${isSel ? 'bg-coral text-white border-coral shadow-sm scale-105' : 'bg-opal-bg dark:bg-slate-800 border-mist dark:border-slate-600 text-stone dark:text-slate-300 hover:border-coral hover:text-coral'}`}>
                                        ${opt}
                                    </button>
                                `;
                            })}
                        </div>
                        <div className="relative">
                            <div className="absolute -top-2.5 left-4 px-2 bg-opal-surface dark:bg-slate-800 text-[9px] font-black uppercase tracking-widest text-stone-light">
                                or describe your own
                            </div>
                            <input type="text" value=${current} onInput=${handleInput} onKeyDown=${handleKeyDown}
                                placeholder="Type anything more specific..."
                                className="w-full px-5 py-4 rounded-2xl border-2 border-mist dark:border-slate-600 bg-white dark:bg-slate-900 text-charcoal dark:text-white placeholder-stone-light dark:placeholder-slate-500 focus:outline-none focus:border-coral transition-colors text-sm font-medium shadow-inner"
                                autoFocus />
                        </div>
                    </div>
                `}

                ${question.type === 'text' && html`
                    <input type="text" value=${current} onInput=${handleInput} onKeyDown=${handleKeyDown}
                        placeholder=${qPlaceholder}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-mist dark:border-slate-600 bg-white dark:bg-slate-900 text-charcoal dark:text-white placeholder-stone-light dark:placeholder-slate-500 focus:outline-none focus:border-coral transition-colors text-sm font-medium shadow-inner"
                        autoFocus />
                `}

                ${question.type === 'textarea' && isPlaybook && question.options && html`
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            ${(question.options || []).map(opt => {
                                const isSel = current === opt;
                                return html`
                                    <button key=${opt}
                                        onClick=${() => setAnswers(prev => ({ ...prev, [question.id]: opt }))}
                                        className=${`px-3.5 py-2 rounded-xl border-2 text-xs font-black uppercase tracking-tight transition-all duration-150 ${isSel ? 'bg-coral text-white border-coral shadow-sm scale-105' : 'bg-opal-bg dark:bg-slate-800 border-mist dark:border-slate-600 text-stone dark:text-slate-300 hover:border-coral hover:text-coral'}`}>
                                        ${opt}
                                    </button>
                                `;
                            })}
                        </div>
                        <div className="relative">
                            <div className="absolute -top-2.5 left-4 px-2 bg-opal-surface dark:bg-slate-800 text-[9px] font-black uppercase tracking-widest text-stone-light">
                                or describe your own
                            </div>
                            <textarea value=${current} onInput=${handleInput} onKeyDown=${handleKeyDown}
                                placeholder=${qPlaceholder} rows="4"
                                className="w-full px-5 py-4 rounded-2xl border-2 border-mist dark:border-slate-600 bg-white dark:bg-slate-900 text-charcoal dark:text-white placeholder-stone-light dark:placeholder-slate-500 focus:outline-none focus:border-coral transition-colors text-sm font-medium shadow-inner resize-none"
                                autoFocus />
                        </div>
                    </div>
                `}

                ${question.type === 'textarea' && !(isPlaybook && question.options) && html`
                    <textarea value=${current} onInput=${handleInput} onKeyDown=${handleKeyDown}
                        placeholder=${qPlaceholder}
                        rows="5"
                        className="w-full px-5 py-4 rounded-2xl border-2 border-mist dark:border-slate-600 bg-white dark:bg-slate-900 text-charcoal dark:text-white placeholder-stone-light dark:placeholder-slate-500 focus:outline-none focus:border-coral transition-colors text-sm font-medium shadow-inner resize-none"
                        autoFocus />
                `}
            </div>

            <div className="flex justify-between items-center mt-6">
                <button onClick=${handleBack}
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl border border-mist dark:border-slate-600 text-stone dark:text-slate-300 hover:text-charcoal hover:bg-opal-bg dark:hover:bg-slate-800 transition-all text-[10px] font-black uppercase tracking-widest">
                    <${ChevronLeft} className="w-4 h-4" /> ${t('situations.back_btn')}
                </button>
                <button onClick=${handleNext} disabled=${!isAnswered}
                    className=${`flex items-center gap-2 px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${isAnswered ? 'bg-coral hover:bg-coral-hover text-white shadow-lg shadow-coral/20 active:scale-95' : 'bg-mist dark:bg-slate-700 text-stone-light cursor-not-allowed'}`}>
                    ${step < total - 1 ? t('situations.next_btn') : t('situations.generate_btn')} <${ChevronRight} className="w-4 h-4" />
                </button>
            </div>
        </div>
    `;
};

// ─── Prompt block ─────────────────────────────────────────────────────────────
const PromptBlock = ({ text, copyLabel, onCopy }) => html`
    <div className="relative">
        <pre className="whitespace-pre-wrap text-sm text-stone dark:text-slate-300 bg-opal-surface dark:bg-slate-800 rounded-2xl p-5 border-2 border-mist dark:border-slate-700 font-mono leading-relaxed overflow-auto max-h-96 shadow-inner">
${text}
        </pre>
        <button onClick=${() => onCopy(text)}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-700 border border-mist dark:border-slate-600 text-stone dark:text-slate-300 hover:text-coral hover:border-coral transition-all shadow-sm">
            <${Copy} className="w-3.5 h-3.5" /> ${copyLabel}
        </button>
    </div>
`;

// ─── Output panel (works for both types) ──────────────────────────────────────
const OutputPanel = ({ item, answers, t, onRestart, showToast }) => {
    const [activeTab, setActiveTab] = useState('quick');
    const Icon   = getIcon(item.icon);
    const title  = item._type === 'playbook' ? item.title : t(item.titleKey);
    const output = useMemo(() => buildOutput(item, answers, t), [item, answers, t]);

    const handleCopy = async (text) => { if (await copyTextToClipboard(text)) showToast(t('common.copied_success')); };

    const tabs = [
        { id: 'quick', icon: Zap,      label: t('situations.quick_label'), desc: t('situations.quick_desc') },
        { id: 'full',  icon: BookOpen, label: t('situations.full_label'),  desc: t('situations.full_desc')  },
        { id: 'chain', icon: Layers,   label: t('situations.chain_label'), desc: t('situations.chain_desc') },
    ];

    return html`
        <div className="animate-fade-in max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-coral/10 border-2 border-coral/20 text-coral">
                    <${Icon} className="w-6 h-6" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-black text-charcoal dark:text-white uppercase tracking-tight">${t('situations.output_title')}</h2>
                    <p className="text-xs text-stone-light font-medium uppercase tracking-widest">${title}</p>
                </div>
                <button onClick=${onRestart}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-mist dark:border-slate-600 text-stone-light hover:text-coral hover:border-coral text-[10px] font-black uppercase tracking-widest transition-all">
                    <${RotateCcw} className="w-3.5 h-3.5" /> ${t('situations.restart_btn')}
                </button>
            </div>

            <div className="bg-opal-bg dark:bg-slate-900/50 rounded-2xl border border-mist dark:border-slate-700 p-4 mb-6">
                <p className="text-[10px] font-black text-stone-light uppercase tracking-widest mb-3">${t('situations.your_context')}</p>
                <div className="flex flex-wrap gap-2">
                    ${Object.entries(answers).map(([key, val]) => html`
                        <span key=${key} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-mist dark:border-slate-600 text-charcoal dark:text-white font-medium">
                            <span className="text-stone-light">${key}:</span>
                            <span className="font-bold truncate max-w-[160px]">${val}</span>
                        </span>
                    `)}
                </div>
            </div>

            <div className="flex gap-1 bg-opal-sidebar dark:bg-slate-900 p-1.5 rounded-2xl mb-4 border border-mist dark:border-slate-800">
                ${tabs.map(tab => {
                    const TabIcon = tab.icon;
                    return html`
                        <button key=${tab.id} onClick=${() => setActiveTab(tab.id)}
                            className=${`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-white dark:bg-slate-700 text-charcoal dark:text-white shadow-sm' : 'text-stone-light hover:text-charcoal dark:hover:text-white'}`}>
                            <${TabIcon} className="w-3.5 h-3.5" /> ${tab.label}
                        </button>
                    `;
                })}
            </div>

            <p className="text-xs text-stone-light font-medium mb-4 italic">${tabs.find(tb => tb.id === activeTab)?.desc}</p>

            ${activeTab === 'quick' && html`<${PromptBlock} text=${output.quick} copyLabel=${t('situations.copy_prompt')} onCopy=${handleCopy} />`}
            ${activeTab === 'full'  && html`<${PromptBlock} text=${output.full}  copyLabel=${t('situations.copy_prompt')} onCopy=${handleCopy} />`}
            ${activeTab === 'chain' && html`
                <div className="space-y-5">
                    ${output.chains.map((prompt, i) => html`
                        <div key=${i}>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-7 h-7 rounded-xl bg-coral flex items-center justify-center text-xs font-black text-white flex-shrink-0">${i + 1}</div>
                                <span className="text-[10px] font-black text-stone-light uppercase tracking-widest">${t('situations.chain_step')} ${i + 1}</span>
                            </div>
                            <${PromptBlock} text=${prompt} copyLabel=${t('situations.copy_prompt')} onCopy=${handleCopy} />
                        </div>
                    `)}
                </div>
            `}
        </div>
    `;
};

// ─── Main App ─────────────────────────────────────────────────────────────────
const App = () => {
    const { t, isReady }                    = useLanguage();
    const { toast, showToast }              = useToast();
    const [currentTheme, setCurrentTheme]   = useState(() => localStorage.getItem('theme') || 'light');
    const [view, setView]                   = useState('gallery');      // gallery | questions | output
    const [activeItem, setActiveItem]       = useState(null);
    const [answers, setAnswers]             = useState({});
    const [selectedFilter, setSelectedFilter] = useState('all');         // 'all' | 'sit:cat' | 'pb:cat'
    const [searchQuery, setSearchQuery]     = useState('');
    const [page, setPage]                   = useState(1);
    const [favorites, setFavorites]         = useState(() => { try { return JSON.parse(localStorage.getItem('favPlaybooks') || '[]'); } catch { return []; } });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
    const [isZenMode, setIsZenMode]         = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => { document.documentElement.classList.toggle('dark', currentTheme === 'dark'); localStorage.setItem('theme', currentTheme); }, [currentTheme]);
    useEffect(() => { localStorage.setItem('favPlaybooks', JSON.stringify(favorites)); }, [favorites]);

    // Normalize playbooks into unified item format once
    const ALL_ITEMS = useMemo(() => [
        ...SITUATIONS.map(s => ({ _type: 'situation', ...s,
            title: null, desc: null,  // resolved via t() at render time
            questionCount: s.questions.length,
        })),
        ...playbooksData.map(normalizePb),
    ], []);

    const pbFuse = useMemo(() => new Fuse(
        ALL_ITEMS.filter(i => i._type === 'playbook'),
        { keys: ['title', 'desc', 'category'], threshold: 0.3 }
    ), [ALL_ITEMS]);

    // Unified categories — single flat list across both situations and playbooks
    const unifiedCategories = useMemo(() => {
        const counts = {};
        ALL_ITEMS.forEach(i => { counts[i.category] = (counts[i.category] || 0) + 1; });
        return Object.entries(counts).sort(([a], [b]) => a.localeCompare(b));
    }, [ALL_ITEMS]);

    const favCount = useMemo(() => favorites.length, [favorites]);

    const filtered = useMemo(() => {
        let res = ALL_ITEMS;
        if (selectedFilter === 'favorites') {
            res = res.filter(i => i._type === 'playbook' && favorites.includes(i.id));
        } else if (selectedFilter !== 'all') {
            res = res.filter(i => i.category === selectedFilter);
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            const pbMatches = new Set(pbFuse.search(searchQuery).map(r => r.item.id));
            res = res.filter(i => {
                if (i._type === 'playbook') return pbMatches.has(i.id);
                return i.id.replace(/_/g, ' ').includes(q) || i.category.includes(q);
            });
        }
        return res;
    }, [ALL_ITEMS, selectedFilter, searchQuery, pbFuse, favorites]);

    const ITEMS_PER_PAGE = 12;
    const paginatedItems = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    const toggleFavorite = useCallback((id) => setFavorites(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]), []);

    const handleSelect = useCallback((item) => {
        setActiveItem(item);
        setAnswers({});
        setView('questions');
        const title = item._type === 'playbook' ? item.title : t(item.titleKey);
        addToHistory({ id: item.id, title, type: item._type, url: 'playbooks.html#/' + item.id });
    }, []);

    const handleComplete  = useCallback((ans) => { setAnswers(ans); setView('output'); }, []);
    const handleRestart   = useCallback(() => { setActiveItem(null); setAnswers({}); setView('gallery'); }, []);

    const selectFilter = useCallback((filter) => {
        setSelectedFilter(filter);
        setPage(1);
        setIsSidebarOpen(false);
        if (view !== 'gallery') handleRestart();
    }, [view, handleRestart]);

    useGlobalShortcuts({
        onSearch:        () => { if (view === 'gallery') searchInputRef.current?.focus(); },
        onThemeToggle:   () => setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark'),
        onSidebarToggle: () => setIsSidebarOpen(prev => !prev),
        onHelp:          () => setShowShortcuts(prev => !prev),
        onScratchpad:    () => setIsScratchpadOpen(prev => !prev),
        onEscape: () => {
            if (showShortcuts)    { setShowShortcuts(false);    return; }
            if (isScratchpadOpen) { setIsScratchpadOpen(false); return; }
            if (isSettingsOpen)   { setIsSettingsOpen(false);   return; }
            if (isSidebarOpen)    { setIsSidebarOpen(false);    return; }
            if (view !== 'gallery') handleRestart();
        }
    });

    if (!isReady) return html`
        <div className="fixed inset-0 bg-opal-bg dark:bg-slate-900 flex items-center justify-center">
            <${Loader2} className="w-12 h-12 animate-spin text-coral" />
        </div>
    `;

    // ── Sidebar ───────────────────────────────────────────────────────────────
    const SidebarBtn = ({ filterKey, icon: Icon, label, count }) => {
        const isActive = selectedFilter === filterKey;
        return html`
            <button onClick=${() => selectFilter(filterKey)}
                className=${'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ' + (isActive ? 'bg-coral/10 dark:bg-coral/20 text-coral font-bold shadow-sm' : 'text-stone dark:text-slate-400 hover:bg-opal-sidebar/50 dark:hover:bg-slate-800 font-medium')}>
                <${Icon} className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 text-left">${label}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white dark:bg-slate-800 tabular-nums text-stone-light">${count}</span>
            </button>
        `;
    };

    const sidebarContent = html`
        <${React.Fragment}>
            <button
                onClick=${() => handleSelect(ALL_ITEMS[Math.floor(Math.random() * ALL_ITEMS.length)])}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900 mb-4 w-full text-left font-bold transition-all border border-amber-200 dark:border-amber-800 shadow-sm"
            >
                <${Wand2} className="w-5 h-5" />
                <span className="flex-1">${t('common.surprise_me')}</span>
            </button>
            <nav className="space-y-1">
                <${SidebarBtn} filterKey="all"       icon=${BookOpen} label=${t('situations.sidebar_all_topics')}     count=${ALL_ITEMS.length} />
                <${SidebarBtn} filterKey="favorites" icon=${Heart}    label=${t('common.favorites') || 'Favorites'} count=${favCount} />
                ${unifiedCategories.map(([cat, count]) => {
                    const CatIcon = SIT_CAT_ICONS[cat] || PB_CAT_ICONS[cat] || FileText;
                    const sitKey = `situations.cats.${cat}`;
                    const pbKey  = `playbook_categories.${cat}`;
                    const sitLabel = t(sitKey);
                    const pbLabel  = t(pbKey);
                    const label = (sitLabel !== sitKey) ? sitLabel : (pbLabel !== pbKey) ? pbLabel : cat.charAt(0).toUpperCase() + cat.slice(1);
                    return html`<${SidebarBtn} key=${cat} filterKey=${cat} icon=${CatIcon} label=${label} count=${count} />`;
                })}
            </nav>
        <//>
    `;

    // ── Header label ──────────────────────────────────────────────────────────
    const galleryTitle = (() => {
        if (selectedFilter === 'all')       return t('situations.page_title');
        if (selectedFilter === 'favorites') return t('common.favorites') || 'Favorites';
        const sitKey = `situations.cats.${selectedFilter}`;
        const pbKey  = `playbook_categories.${selectedFilter}`;
        const sitLabel = t(sitKey);
        const pbLabel  = t(pbKey);
        return (sitLabel !== sitKey) ? sitLabel : (pbLabel !== pbKey) ? pbLabel : selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1);
    })();

    const galleryCount = `${filtered.length} ${t('playbooks.items_label')}`;

    return html`
        <div className="min-h-screen bg-opal-bg dark:bg-slate-900 flex flex-col font-sans">
            <${Header}
                currentTheme=${currentTheme}
                onThemeToggle=${() => setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                onMenuClick=${() => setIsSidebarOpen(true)}
                onScratchpad=${() => setIsScratchpadOpen(true)}
                onSettingsClick=${() => setIsSettingsOpen(true)}
                activePage="playbooks"
                isZenMode=${isZenMode}
                onToggleZen=${() => setIsZenMode(prev => !prev)}
            />
            <div className="flex-1 max-w-[1600px] mx-auto w-full flex">
                <${SidebarWrapper} isOpen=${isSidebarOpen} onClose=${() => setIsSidebarOpen(false)} isZenMode=${isZenMode}>
                    ${sidebarContent}
                <//>
                <main className="flex-1 p-4 md:p-8 min-w-0">

                    ${view === 'gallery' && html`
                        <${React.Fragment}>
                            <div className="mb-10 animate-fade-in text-left max-w-3xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-opal-surface dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest text-coral border border-mist dark:border-slate-700">
                                        ${t('situations.badge')}
                                    </span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl font-[600] tracking-tight text-charcoal dark:text-white mb-2">
                                    ${galleryTitle}
                                </h1>
                                <p className="text-stone-light dark:text-slate-400 text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.08em]">
                                    ${t('situations.page_subtitle')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl">
                                ${[
                                    { step: '1', icon: Target,   titleKey: 'situations.guide.step1_title', descKey: 'situations.guide.step1_desc' },
                                    { step: '2', icon: MessageSquare, titleKey: 'situations.guide.step2_title', descKey: 'situations.guide.step2_desc' },
                                    { step: '3', icon: Copy,     titleKey: 'situations.guide.step3_title', descKey: 'situations.guide.step3_desc' },
                                ].map(({ step, icon: StepIcon, titleKey, descKey }) => html`
                                    <div key=${step} className="flex gap-3 items-start bg-opal-surface dark:bg-slate-800 border border-mist dark:border-slate-700 rounded-2xl p-4">
                                        <div className="w-8 h-8 rounded-xl bg-coral text-white flex items-center justify-center text-xs font-black flex-shrink-0">${step}</div>
                                        <div>
                                            <p className="text-xs font-black text-charcoal dark:text-white uppercase tracking-tight mb-0.5">${t(titleKey)}</p>
                                            <p className="text-xs text-stone-light dark:text-slate-400 font-medium leading-relaxed">${t(descKey)}</p>
                                        </div>
                                    </div>
                                `)}
                            </div>

                            <div className="mb-8 relative max-w-2xl shadow-sm rounded-2xl transition-all focus-within:shadow-level-2 focus-within:ring-2 focus-within:ring-coral/20">
                                <${Search} className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-light w-5 h-5 pointer-events-none" />
                                <input
                                    ref=${searchInputRef}
                                    type="text"
                                    value=${searchQuery}
                                    onChange=${e => { setSearchQuery(e.target.value); setPage(1); }}
                                    placeholder=${t('playbooks.list.search')}
                                    className="w-full bg-white dark:bg-slate-800 border-2 border-mist dark:border-slate-700 rounded-2xl py-4 pl-14 pr-4 outline-none focus:border-coral transition-colors dark:text-white shadow-sm text-charcoal text-base"
                                />
                            </div>

                            <div className="mb-6">
                                <p className="text-stone-light dark:text-slate-500 text-[11px] font-medium uppercase tracking-[0.08em]">${galleryCount}</p>
                            </div>

                            ${paginatedItems.length > 0 ? html`
                                <${React.Fragment}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        ${paginatedItems.map(item => html`
                                            <${ItemCard}
                                                key=${item.id}
                                                item=${item}
                                                t=${t}
                                                onSelect=${handleSelect}
                                                isFav=${favorites.includes(item.id)}
                                                onToggleFav=${toggleFavorite}
                                            />
                                        `)}
                                    </div>
                                    <${Pagination}
                                        currentPage=${page}
                                        totalPages=${totalPages}
                                        onPageChange=${setPage}
                                        totalItems=${filtered.length}
                                        itemsPerPage=${ITEMS_PER_PAGE}
                                        t=${t}
                                    />
                                <//>
                            ` : html`<${EmptyState} message=${t('playbooks.list.no_results')} />`}
                        <//>
                    `}

                    ${view === 'questions' && activeItem && html`
                        <${QuestionFlow}
                            item=${activeItem}
                            t=${t}
                            onComplete=${handleComplete}
                            onBack=${handleRestart}
                        />
                    `}

                    ${view === 'output' && activeItem && html`
                        <${OutputPanel}
                            item=${activeItem}
                            answers=${answers}
                            t=${t}
                            onRestart=${handleRestart}
                            showToast=${showToast}
                        />
                    `}

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
root.render(html`<${App} />`);
})();