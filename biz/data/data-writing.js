(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['data/data-writing'] = AINOW['data/data-writing'] || {};
// Contains all prompts for the 'Writing' category.
const writingPrompts = [

  // --- BLOGGING & CONTENT MARKETING (w-1 to w-15) ---

  {
    "id": "w-1",
    "title": "B2B SaaS SEO Blog Post",
    "prompt": "You are a B2B content strategist and senior copywriter specializing in SaaS and tech. Write a 1,600-word SEO-optimized blog post titled 'Why Your Engineering Team Is Your Best Customer Success Asset (And How to Unlock It)' targeting VP of Customer Success and Chief Customer Officers at B2B SaaS companies with 50–500 employees. Structure: open with a counterintuitive stat or claim in the first 80 words, three main sections each with an H2 subheading and one concrete example or mini-case study, a 'What to Do This Week' action box with 3 bullet points, and a closing paragraph with a soft CTA toward a product demo. SEO primary keyword: 'customer success engineering alignment'. Use an authoritative but conversational tone. No passive voice. No filler phrases like 'In today's fast-paced world.'",
    "tags": ["blogging", "seo", "b2b"],
    "author": "AINOW",
    "created": "2024-01-15T10:00:00Z",
    "featured": true
  },
  {
    "id": "w-2",
    "title": "Counter-Intuitive Listicle for Startup Founders",
    "prompt": "You are a contrarian tech columnist who writes for a readership of Series A and Series B startup founders. Write a 1,200-word listicle titled '7 Hiring Instincts That Are Quietly Killing Your Startup Culture' — where each of the 7 items challenges a commonly accepted best practice (e.g., 'Hiring for culture fit', 'Prioritizing 10x engineers', 'Moving fast on references'). For each item: write a bold H3 subheading that names the instinct, a 100-word explanation of why it backfires, and one 2-sentence real-world pattern you've observed repeatedly. End the article with a 60-word 'The Better Instinct' summary paragraph. Tone: sharp, slightly provocative, evidence-aware. Do not use bullet points inside individual items — write in tight prose.",
    "tags": ["blogging", "listicle", "startups"],
    "author": "AINOW",
    "created": "2024-01-15T10:05:00Z",
    "featured": false
  },
  {
    "id": "w-3",
    "title": "Customer Case Study Narrative",
    "prompt": "You are a content strategist at a B2B software company. Write a 900-word customer case study narrative about a mid-size logistics company (fictional name: Crestline Freight) that reduced delivery exception rates by 34% and saved $420,000 annually after implementing a route optimization platform. Structure the case study in four named sections: 'The Breaking Point' (the problem at scale — drivers, dispatch chaos, SLA penalties), 'The Decision' (evaluation process, internal skepticism, why they chose this solution), 'The First 90 Days' (implementation friction, first wins, team adoption), and 'The Numbers That Changed Everything' (metrics, operational impact, unexpected benefits). Write in third-person narrative journalism style — not marketing speak. Include one direct quote from a fictional VP of Operations named Danielle Kwan. No bullet lists. 900 words minimum.",
    "tags": ["marketing", "case-study", "b2b"],
    "author": "AINOW",
    "created": "2024-01-15T10:10:00Z",
    "featured": false
  },
  {
    "id": "w-4",
    "title": "Beginner's How-To Guide: Setting Up Google Analytics 4",
    "prompt": "You are a digital marketing educator writing for complete beginners — people who have never touched analytics software. Write a step-by-step how-to guide titled 'How to Set Up Google Analytics 4 for Your Small Business Website (Even If You're Not Technical)' at approximately 1,100 words. Begin with a 60-word section called 'Before You Start' listing two prerequisites (a Google account, access to your website's HTML or CMS). Then write 8 numbered steps, each with a bolded action statement and a 60–80 word explanation. Step 4 should address the most common mistake beginners make (adding the tag to only the homepage). End with a 'You're Done — Now What?' section suggesting three first reports to check after 48 hours. No jargon without definition. Friendly, encouraging tone.",
    "tags": ["instructional", "blog", "marketing"],
    "author": "AINOW",
    "created": "2024-01-15T10:15:00Z",
    "featured": false
  },
  {
    "id": "w-5",
    "title": "Thought Leadership Op-Ed: The Future of Remote Work",
    "prompt": "You are a future-of-work researcher and organizational psychologist writing a guest column for Harvard Business Review. Write a 900-word thought leadership piece arguing that the current debate between 'return to office' and 'fully remote' is a false binary — and that the companies winning talent wars in 2026 are those who have stopped asking where people work and started asking how decision-making is structured. The piece should open with one specific, vivid observation (not a statistic) from a real organizational behavior pattern you've noticed. Build a three-part argument: (1) presence theatre vs. output culture, (2) the underrated role of asynchronous trust infrastructure, (3) what 'hybrid' actually means when done well. End with a provocation — a single question for the reader to sit with. No listicles. Dense, idea-forward prose. Cite two real academic concepts (you may name but not fabricate specific studies).",
    "tags": ["thought-leadership", "opinion", "workplace"],
    "author": "AINOW",
    "created": "2024-01-15T10:20:00Z",
    "featured": false
  },
  {
    "id": "w-6",
    "title": "Email Newsletter Opening Hooks (3 Styles)",
    "prompt": "You are a newsletter editor who has grown three publications past 50,000 subscribers. Write three alternative opening hooks for a weekly newsletter issue about the psychology of pricing — specifically how anchoring affects consumer decisions at grocery stores, luxury retail, and SaaS pricing pages. Hook 1 (Personal Story): Open in first person with a specific, sensory moment — the writer standing in a wine aisle making an irrational purchase and only understanding why afterward. 150 words. Hook 2 (Counterintuitive Stat): Lead with one surprising, real piece of data about how a price change of less than $1 affected conversion rates dramatically, then tie it to a broader claim. 100 words. Hook 3 (Direct Challenge): Open by directly challenging the reader's belief that they are rational buyers, using second-person 'you' throughout. 120 words. Each hook should end on a line that makes the reader want to keep reading. Do not write the rest of the newsletter.",
    "tags": ["email", "newsletter", "hooks"],
    "author": "AINOW",
    "created": "2024-01-15T10:25:00Z",
    "featured": false
  },
  {
    "id": "w-7",
    "title": "On-Page SEO Content Block: HR Software Landing Page",
    "prompt": "You are an SEO content specialist. Write a 400-word on-page content block for a landing page selling HR software to small businesses (10–50 employees). The primary keyword is 'HR software for small business' (use it in the first 100 words and in one H2). Secondary keywords to weave in naturally: 'employee onboarding software', 'PTO tracking', 'payroll integration'. Structure: one H1 (already written — do not include it), one introductory paragraph (80 words), two H2 sections with 120 words each, and a closing paragraph (80 words) with a soft CTA to start a free trial. The tone should be reassuring and practical — these buyers are overwhelmed HR generalists doing everything themselves. Avoid superlatives. No passive voice. Each H2 section must include one concrete use case or outcome.",
    "tags": ["seo", "landing-page", "hr"],
    "author": "AINOW",
    "created": "2024-01-15T10:30:00Z",
    "featured": false
  },
  {
    "id": "w-8",
    "title": "FAQ Section for a Cybersecurity Product",
    "prompt": "You are a technical content writer specializing in B2B cybersecurity. Write a FAQ section of 10 questions and answers for a cloud-based endpoint protection product targeting IT managers at companies with 100–1,000 employees. The questions should reflect real buyer anxiety: questions about implementation time, compatibility with existing Microsoft or CrowdStrike tools, what happens during the 30-day trial, how pricing scales, data residency and compliance (SOC 2, GDPR), and what the incident response process looks like. Each answer should be 60–90 words — thorough enough to reduce doubt, short enough to scan. Do not start any answer with 'Great question.' Do not use passive voice. Write from a confident, transparent brand voice — not salesy, not evasive.",
    "tags": ["faq", "cybersecurity", "b2b"],
    "author": "AINOW",
    "created": "2024-01-15T10:35:00Z",
    "featured": false
  },
  {
    "id": "w-9",
    "title": "Content Pillar Strategy for a Personal Finance Brand",
    "prompt": "You are a content strategist building a 12-month editorial calendar for a personal finance blog targeting millennials aged 28–40 with household incomes between $60,000 and $120,000. These readers are financially literate but emotionally avoidant — they know what they should do but struggle to act. Develop a content pillar strategy with 5 pillars. For each pillar: write the pillar name, a one-sentence strategic rationale explaining why this audience needs this content, the SEO intent it captures (informational, transactional, navigational), and 4 specific article title ideas — each article title must be a complete, non-generic headline (no placeholders). The 5 pillars should collectively cover the full personal finance lifecycle from debt to investing to estate basics. Output as a structured list, not a table.",
    "tags": ["strategy", "personal-finance", "content"],
    "author": "AINOW",
    "created": "2024-01-15T10:40:00Z",
    "featured": false
  },
  {
    "id": "w-10",
    "title": "High-CTR Headline Rewrites: SaaS Blog",
    "prompt": "You are a conversion copywriter and former BuzzFeed senior editor who now writes for B2B SaaS blogs. Take the following five dull blog post titles and rewrite each one into a high-CTR headline that a VP of Engineering or CTO would click on LinkedIn. The original titles are: (1) 'Introduction to Feature Flags', (2) 'Why Incident Response Matters', (3) 'Our New Dashboard Update', (4) 'Technical Debt Explained', (5) 'Tips for Better Code Reviews'. For each: write the rewritten headline, identify the specific psychological trigger you used (curiosity gap, self-interest, urgency, social proof, or contrarianism), and write one sentence explaining the strategic logic. The rewrites must not be clickbait — they must accurately represent an article a senior technical leader would find worth 5 minutes of their time.",
    "tags": ["headlines", "saas", "copywriting"],
    "author": "AINOW",
    "created": "2024-01-15T10:45:00Z",
    "featured": false
  },
  {
    "id": "w-11",
    "title": "Podcast Show Notes: AI in Healthcare Episode",
    "prompt": "You are a podcast producer and content writer. Write full show notes for a 52-minute podcast episode titled 'When the Algorithm Gets It Wrong: AI Diagnostic Errors and Who Pays the Price' featuring Dr. Priya Menon, a radiologist and medical AI ethics researcher at Johns Hopkins. The show notes should include: a 120-word episode summary written in third person that captures the central debate (not just the topic); a 'In This Episode' bullet list of 6 specific points discussed (be concrete — name actual tools, studies, or arguments from a plausible version of the conversation); a 'Key Takeaways' section with 4 bullets a listener could act on or think about; and a 'Guest Bio' paragraph of 80 words. Do not include fictional timestamps. Write the summary to be compelling enough that a non-listener would share it.",
    "tags": ["podcast", "healthcare", "content"],
    "author": "AINOW",
    "created": "2024-01-15T10:50:00Z",
    "featured": false
  },
  {
    "id": "w-12",
    "title": "Guest Post Pitch Email to TechCrunch",
    "prompt": "You are a growth-stage startup founder and former journalist pitching a guest contribution to TechCrunch's opinion section. Write a pitch email to a TechCrunch editor proposing an article titled 'The Venture Capital Funding Playbook Is Broken for Climate Hardware — Here's What Replaces It.' The email should be under 220 words. Open with a one-sentence hook that establishes urgency and your credibility simultaneously. The second paragraph should describe the argument in 3–4 sentences: the specific failure of 10-year VC fund structures when applied to 15-year hardware development cycles, and the emerging alternatives (patient capital vehicles, government co-investment, revenue-based financing). The third paragraph should explain why TechCrunch's readers need this now (2 sentences). Close with a brief 2-sentence bio establishing your authority (you are founder of a climate hardware startup that raised a $12M Series A from Breakthrough Energy Ventures). No attachment mentioned. Warm but efficient tone.",
    "tags": ["pr", "pitch", "journalism"],
    "author": "AINOW",
    "created": "2024-01-15T10:55:00Z",
    "featured": false
  },
  {
    "id": "w-13",
    "title": "Evergreen Article Refresh Strategy",
    "prompt": "You are an SEO content strategist conducting a content audit. I have an article titled 'The Complete Guide to Social Media Marketing' published in March 2020 that currently ranks on page 2 of Google for the keyword 'social media marketing strategy'. The article is 2,800 words and does not mention TikTok, BeReal, Threads, AI content generation, or creator economy trends. Write a detailed refresh brief for an editor. The brief should include: (1) an opening assessment (2 sentences on why the article is losing ground), (2) a 'Remove or Archive' section listing 4 specific types of content to cut, (3) an 'Add or Expand' section with 6 specific new sections to add — each with a working title, 40-word description of what it should cover, and which 2026-relevant trend it addresses, (4) a 'SEO Quick Wins' section with 3 structural changes (meta description, internal linking, schema markup). Output as a structured brief, not prose.",
    "tags": ["content-audit", "seo", "strategy"],
    "author": "AINOW",
    "created": "2024-01-15T11:00:00Z",
    "featured": false
  },
  {
    "id": "w-14",
    "title": "Trend-to-Niche Content Bridge: Fintech",
    "prompt": "You are a fintech content strategist who writes for CFOs and finance directors at mid-market companies. Write a 600-word LinkedIn article that connects the current mainstream conversation about generative AI to the specific, underappreciated implications for corporate treasury management. The article must not be generic — it should focus on one narrow use case: AI-assisted cash flow forecasting in companies with multi-currency operations across 5+ countries. Open with a scene or observation that grounds the abstract AI trend in a real treasury team's daily reality. Build to three specific capability shifts AI enables in this context. End with a sober warning about the single biggest risk treasury teams face when adopting these tools without proper data governance. Tone: technically credible, not hype-driven. Avoid the phrases 'game-changer', 'revolutionary', and 'unlock'.",
    "tags": ["fintech", "linkedin", "content"],
    "author": "AINOW",
    "created": "2024-01-15T11:05:00Z",
    "featured": false
  },
  {
    "id": "w-15",
    "title": "Comparison Article: Notion vs. Confluence for Engineering Teams",
    "prompt": "You are a senior technical writer and productivity researcher. Write a 1,400-word comparison article titled 'Notion vs. Confluence in 2026: Which Wiki Actually Works for Engineering Teams?' targeting engineering managers and DevOps leads at companies with 20–200 engineers. The article should open with a 100-word framing section that acknowledges the comparison has been done before but argues the decision calculus has changed due to AI features introduced in 2024–2025. Structure the comparison across five specific dimensions, each with its own H2: (1) Documentation structure and hierarchy, (2) Integration with developer toolchains (Jira, GitHub, Linear), (3) AI writing and search capabilities, (4) Permission models for large teams, (5) Pricing at 50 vs. 150 vs. 500 user tiers. For each dimension, write a 150-word analysis — not a feature list — with a concrete scenario showing which tool performs better and why. End with a 120-word 'Who Should Pick What' decision matrix in prose form. No affiliate disclaimers needed. Be opinionated.",
    "tags": ["comparison", "productivity", "engineering"],
    "author": "AINOW",
    "created": "2024-01-15T11:10:00Z",
    "featured": false
  },

  // --- FICTION & STORYTELLING (w-16 to w-30) ---

  {
    "id": "w-16",
    "title": "Longform Feature Opening: Coal Miner Turned Solar Instructor",
    "prompt": "You are an award-winning narrative journalist. Write the opening 600 words of a longform feature story about a 67-year-old retired coal miner in West Virginia named Earl Combs who now teaches community solar installation workshops in the same county where he spent 31 years underground. Open with a scene-setting paragraph that puts the reader in the room — the smell of sawdust and coffee, the fluorescent lighting of a community college classroom, the age of the men's hands. Use the second paragraph to introduce the central tension: economic survival versus identity. What does it mean to learn a new craft when your old one defined you? The third paragraph should introduce Earl directly — not through physical description but through action and voice. Include one piece of direct dialogue from Earl in the fourth paragraph, something specific he says to the class that carries more meaning than the surface words. The prose style should feel like early-career Ta-Nehisi Coates — intimate, observational, unhurried. No summarizing. No thesis statements. Show, don't tell.",
    "tags": ["fiction", "journalism", "narrative"],
    "author": "AINOW",
    "created": "2024-01-15T11:15:00Z",
    "featured": true
  },
  {
    "id": "w-17",
    "title": "Complex Antagonist Character Profile",
    "prompt": "You are a literary fiction author and writing coach. Create a full character profile for a primary antagonist in a contemporary thriller. The character is Maren Solis, a 44-year-old former forensic accountant who now runs a financial consulting firm that helps corporations legally obscure environmental liabilities in developing countries. The profile must include: (1) Physical presence — not a description of features but how she occupies a room, how others read her body language; (2) Internal logic — write her moral framework as she would articulate it to herself privately, including the one thing she will not do; (3) Origin wound — the specific moment in her past (not a tragic childhood, something recent, something professional) that set her on this path; (4) Contradiction — one aspect of her daily life that directly conflicts with her professional actions; (5) Voice sample — write 10 lines of dialogue she might say across different situations (boardroom, argument, alone on the phone). She is not a villain who twirls her mustache. She believes she is solving a real problem.",
    "tags": ["fiction", "characters", "thriller"],
    "author": "AINOW",
    "created": "2024-01-15T11:20:00Z",
    "featured": false
  },
  {
    "id": "w-18",
    "title": "Subtext-Loaded Dialogue Scene",
    "prompt": "You are a fiction writer and dialogue coach. Write a 500-word scene of dialogue between two characters: Nadia, 38, who has just discovered that her business partner of 11 years has been quietly negotiating to sell their shared company without her knowledge, and Marcus, 41, the partner, who does not yet know she knows. The scene takes place in their shared office kitchen on a Tuesday morning. They are making coffee. They are talking about the weekend, about a colleague's retirement party, about the broken espresso machine. Neither of them mentions the sale. The entire conversation is surface-level normal. But every line should be freighted with subtext — what Nadia notices, what Marcus reveals without meaning to, the small moments where the facade nearly cracks. Use minimal dialogue tags. End the scene on Nadia's action, not her words. Do not write internal monologue. The reader should feel the tension entirely through behavior and word choice.",
    "tags": ["fiction", "dialogue", "subtext"],
    "author": "AINOW",
    "created": "2024-01-15T11:25:00Z",
    "featured": false
  },
  {
    "id": "w-19",
    "title": "Secondary World: Solarpunk City-State",
    "prompt": "You are a speculative fiction world-builder and former urban planner. Build a detailed secondary world document for a solarpunk city-state called Verdanta, set 90 years in the future on the coast of what is now northern Portugal. The document should cover six areas: (1) Physical geography and infrastructure — how the city is powered, fed, and defended from sea-level rise; (2) Governance — how decisions are made at the neighborhood and city level, including one specific tension or recent political crisis; (3) Economy — what Verdanta produces and trades, and what form currency or exchange takes; (4) Social stratification — what inequality looks like in a post-scarcity-adjacent society (who has access to what, and who enforces it); (5) Cultural life — one festival, one banned practice, and one art form unique to this world; (6) The shadow — one thing Verdanta's official story hides or ignores. Each section should be 120–150 words. Write in neutral documentary prose, not enthusiastic worldbuilding marketing copy.",
    "tags": ["fiction", "world-building", "speculative"],
    "author": "AINOW",
    "created": "2024-01-15T11:30:00Z",
    "featured": false
  },
  {
    "id": "w-20",
    "title": "Five Inciting Incidents for a Climate Scientist Protagonist",
    "prompt": "You are a story development consultant working with a novelist. The protagonist of the novel is Dr. Selin Arslan, 34, a glaciologist at the Alfred Wegener Institute in Germany who specializes in Antarctic ice shelf dynamics. She is driven, methodical, and has spent her career producing rigorous peer-reviewed work that is consistently ignored by policymakers. Generate five distinct inciting incidents that could disrupt her ordinary world and launch a literary thriller, a character-driven drama, a conspiracy narrative, a climate grief story, or a moral horror. For each: name the genre it best fits, describe the inciting incident in 100 words with enough specificity that a novelist could use it directly, identify the internal wound it triggers in Selin (not a new wound — one she already carries), and write the first line of Chapter One if this incident were used. No genre should repeat.",
    "tags": ["fiction", "plotting", "climate"],
    "author": "AINOW",
    "created": "2024-01-15T11:35:00Z",
    "featured": false
  },
  {
    "id": "w-21",
    "title": "Villain Backstory: Three Sympathetic Paths",
    "prompt": "You are a screenwriter and story consultant. The villain in a near-future corporate thriller is Theo Strand, 52, the CEO of a pharmaceutical company who has orchestrated the suppression of a generic drug that would eliminate a $4.2 billion annual revenue stream for his company. He is not psychopathic — he is rational, even warm in person, deeply loyal to the people closest to him. Write three distinct backstory explanations for how he arrived at this decision — three different 'origin paths' that would produce this man. Each backstory must be grounded in a believable sequence of compromises (not a single evil moment), include one specific formative event in his 30s, and end with the exact internal rationale he uses to sleep at night. The three paths should produce the same behavior from three completely different psychological architectures. Each backstory: 200 words. Do not make any of them cartoonishly evil.",
    "tags": ["fiction", "characters", "villain"],
    "author": "AINOW",
    "created": "2024-01-15T11:40:00Z",
    "featured": false
  },
  {
    "id": "w-22",
    "title": "Show Don't Tell: Five Emotional States",
    "prompt": "You are a writing teacher who specializes in sensory and embodied prose. For each of the following five emotional states, write a 60-word passage that conveys the emotion entirely through physical detail, action, and environment — without naming the emotion, without internal monologue, and without adverbs. The five states: (1) a character who has just received devastating medical news, (2) a character who is falling in love for the first time in a decade, (3) a character experiencing low-grade dread on a perfectly ordinary morning, (4) a character who has just made an irreversible decision they know is wrong, (5) a character who is finally, completely at peace. Each passage must feature a different character in a different setting. Sensory details should be specific — not 'her hands shook' but the particular way her hands moved and what they touched.",
    "tags": ["fiction", "craft", "technique"],
    "author": "AINOW",
    "created": "2024-01-15T11:45:00Z",
    "featured": false
  },
  {
    "id": "w-23",
    "title": "Atmospheric Scene: Abandoned Industrial Port at Dawn",
    "prompt": "You are a literary fiction writer known for your atmospheric, sensory prose. Write a 350-word scene set in an abandoned industrial port on the Baltic Sea coast in November, at 6:15 in the morning. The scene has no dialogue and no characters in active motion — only one figure, a 50-year-old harbor inspector named Ingrid, walking the length of the last working quay. The purpose of this scene is to establish a mood of exhausted, beautiful melancholy — the feeling of a world that has outlasted its purpose but has not yet decided what it will become. Use all five senses deliberately. Include one detail that is incongruously alive — something small and flourishing in the decay. The pace should be slow, the sentences long and unhurried except for one short sentence that lands like a stone. Do not use the words 'haunting', 'eerie', 'desolate', or 'abandoned'.",
    "tags": ["fiction", "atmosphere", "literary"],
    "author": "AINOW",
    "created": "2024-01-15T11:50:00Z",
    "featured": false
  },
  {
    "id": "w-24",
    "title": "Three Climactic Plot Twists for a Grief Thriller",
    "prompt": "You are a developmental editor and story consultant working on a literary thriller. The novel follows Dara Osei, a 39-year-old grief counselor in Glasgow whose clients — all of whom she has treated for sudden loss — begin dying in a pattern that mirrors their described grief. The novel is 280 pages in. Everything the reader has been told is accurate. Propose three distinct climactic plot twists that: (a) are genuinely surprising, (b) do not require the reader to feel cheated — each twist must be foreshadowed in details already established, (c) deepen the novel's central question about whether grief has a physical form that can be observed and possibly weaponized. For each twist: write a 150-word description of the twist and its mechanics, identify 3 specific earlier scenes or details that would foreshadow it (describe them, don't make them up — describe what the writer should have planted), and write the 3-sentence revelation passage as it would appear on the page.",
    "tags": ["fiction", "plotting", "thriller"],
    "author": "AINOW",
    "created": "2024-01-15T11:55:00Z",
    "featured": false
  },
  {
    "id": "w-25",
    "title": "Flash Fiction: A 100-Word Complete Story",
    "prompt": "You are a flash fiction writer with credits in One Story, Ploughshares, and Tin House. Write a complete short story in exactly 100 words — no more, no fewer. The story must feature: a 70-year-old retired postal worker named Hector, a Tuesday in late September, and a letter he has been carrying in his jacket pocket for 22 years without opening. The story must have a beginning, a middle complication, and an ending that earns an emotional response without sentimentality. The ending line must do double work — meaning something about Hector specifically and something about human behavior more broadly. Write the story as literary fiction, not genre fiction. Count your words carefully.",
    "tags": ["flash-fiction", "literary", "short-form"],
    "author": "AINOW",
    "created": "2024-01-15T12:00:00Z",
    "featured": false
  },
  {
    "id": "w-26",
    "title": "Hard Magic System: Cartographic Magic",
    "prompt": "You are a fantasy novelist who writes in the tradition of Brandon Sanderson's 'hard magic' principles. Design a fully realized magic system called Cartomancy — magic that works through the creation and manipulation of physical maps. The system must follow Sanderson's First Law (readers must understand the rules before they can be used to solve problems). Design the system across five specifications: (1) Source — where does the power come from and who can access it; (2) Core Mechanic — exactly how a cartomancer creates magical effect through map-making, including the minimum viable action required; (3) Scaling — how power increases with skill and what the ceiling is; (4) Hard Limitations — at least three specific, inviolable rules that create genuine story constraints; (5) Cost — what using the magic takes from the user physically, cognitively, or socially. Each specification: 100 words. End with a 100-word 'Story Conflict Potential' note describing three types of narrative problems this system could generate.",
    "tags": ["fantasy", "world-building", "magic"],
    "author": "AINOW",
    "created": "2024-01-15T12:05:00Z",
    "featured": false
  },
  {
    "id": "w-27",
    "title": "Distinct Character Voice Exercise: Same Line, Five Voices",
    "prompt": "You are an acting coach and fiction writing teacher. Take the following neutral line of dialogue: 'I thought you'd be here earlier.' Rewrite this line as it would be delivered — with surrounding action, body language, and one additional line of response — by each of the following five characters: (1) A 74-year-old Haitian-American grandmother who raised four children alone and communicates love through mild, weaponized disappointment; (2) A 26-year-old software engineer with ADHD who genuinely meant no harm and is slightly defensive; (3) A 55-year-old British diplomat who never raises her voice and never needs to; (4) A 19-year-old who is seeing the person they love for the first time in six months; (5) A 40-year-old surgeon who has been awake for 31 hours. For each, write the setup (2 sentences), the line and action beat (3 sentences), and the response (1 line). No two should feel remotely similar.",
    "tags": ["fiction", "dialogue", "voice"],
    "author": "AINOW",
    "created": "2024-01-15T12:10:00Z",
    "featured": false
  },
  {
    "id": "w-28",
    "title": "Ten Gripping Opening Lines: Literary Thriller",
    "prompt": "You are a literary agent and former senior editor at Farrar, Straus and Giroux. Write ten first lines for literary thrillers — novels that use the machinery of suspense to explore serious themes (grief, memory, identity, complicity). Each line must: (a) establish a specific narrative voice, not a generic narrator, (b) raise a question that is interesting enough to drive 300 pages, (c) avoid the word 'dead', 'body', 'blood', 'dark', or 'secret' in the first line itself. After each line, write a one-sentence explanation of the specific tension or question it opens. Lines should vary in length from 8 words to 40 words. At least three should use a first-person narrator, two a close third person, and two an unusual second person or collective 'we'. Aim for lines that could appear in a Sunday Times Books section recommendation.",
    "tags": ["fiction", "openings", "literary"],
    "author": "AINOW",
    "created": "2024-01-15T12:15:00Z",
    "featured": false
  },
  {
    "id": "w-29",
    "title": "Pacing Analysis and Revision: Slow Middle Scene",
    "prompt": "You are a developmental editor. Read the following scene and provide a pacing analysis: A character named Jonas is alone in his late father's apartment for the first time since the funeral, going through a box of photographs. The scene is 400 words of pure description and interiority — every item he finds is given equal attention, his thoughts circle without developing, and nothing changes by the end of the scene. Write: (1) a 150-word diagnostic identifying exactly where the pacing breaks down and why (naming specific pacing mechanisms: scene-sequel structure, action-reaction beats, delayed revelation, etc.); (2) a 100-word revision strategy — what structural changes would create forward momentum without sacrificing the elegiac tone; (3) a 200-word revised version of the opening 200 words of that scene, demonstrating your notes in practice. Jonas should find one photograph that changes something — for the reader, not necessarily for him.",
    "tags": ["editing", "pacing", "craft"],
    "author": "AINOW",
    "created": "2024-01-15T12:20:00Z",
    "featured": false
  },
  {
    "id": "w-30",
    "title": "Book Title Generation: Ten Options for a Climate Grief Memoir",
    "prompt": "You are a literary editor and book marketing consultant with 20 years of experience naming books. Generate ten title options for a memoir by a 58-year-old marine biologist named Elena Vasquez who spent 30 years documenting coral reef systems in the Pacific and Caribbean, and who is now writing about the psychological experience of watching an ecosystem she devoted her life to studying effectively die. The memoir sits at the intersection of nature writing, climate grief, and questions of scientific identity — what does it mean to be an expert witness to disappearance? Each title should: be distinct in approach (metaphorical, clinical, elegiac, confrontational, poetic, ironic, personal, ecological, archival, colloquial), be no more than six words, and avoid being generic or overlapping with existing prominent memoirs. After each title, write one sentence explaining what emotional or intellectual register it targets in the reader.",
    "tags": ["fiction", "titles", "memoir"],
    "author": "AINOW",
    "created": "2024-01-15T12:25:00Z",
    "featured": false
  },

  // --- COPYWRITING & SALES (w-31 to w-45) ---

  {
    "id": "w-31",
    "title": "SaaS Landing Page Hero Copy: Three Versions",
    "prompt": "You are a conversion copywriter who has written landing pages for Stripe, Notion, and Linear. Write three alternative versions of the hero section for a B2B project management tool targeting remote engineering teams. Each version should include: a headline (max 8 words), a subheadline (max 20 words), and a primary CTA button label (max 4 words). Version A: lead with time savings (engineers spend 6 hours/week in status meetings). Version B: lead with clarity (the best teams know what everyone is working on without asking). Version C: lead with a bold claim (ship 40% faster without adding headcount). After each version, write a one-sentence explanation of the psychological hook being used and one sentence identifying the specific buyer pain it targets.",
    "tags": ["copywriting", "landing-page", "conversion"],
    "author": "AINOW",
    "created": "2024-01-15T12:30:00Z",
    "featured": true
  },
  {
    "id": "w-32",
    "title": "PAS Cold Email: Cybersecurity Awareness Training",
    "prompt": "You are a B2B sales copywriter specializing in cybersecurity. Write a cold outreach email using the Problem-Agitate-Solution (PAS) framework to sell an employee cybersecurity awareness training platform to IT Security Managers at financial services firms with 200–2,000 employees. The email must be under 200 words and follow this architecture: (1) Problem — open with one specific, recent, credible statistic about phishing-related breaches in financial services in 2025; (2) Agitate — two sentences that make the pain visceral and specific to this buyer's situation (not just abstract risk, but regulatory penalty, internal political exposure, or audit findings); (3) Solution — two sentences introducing the platform without feature-listing, focused on the outcome; (4) CTA — one low-friction ask (a 15-minute call, a link to a breach impact calculator, etc.). Subject line included. No 'I hope this finds you well.' No passive voice.",
    "tags": ["copywriting", "cold-email", "cybersecurity"],
    "author": "AINOW",
    "created": "2024-01-15T12:35:00Z",
    "featured": false
  },
  {
    "id": "w-33",
    "title": "E-commerce Product Description: Premium Standing Desk",
    "prompt": "You are a DTC e-commerce copywriter who has written for brands like Away, Casper, and Eight Sleep. Write a 280-word product description for a standing desk called The Meridian Pro — a motorized, height-adjustable desk made from sustainably harvested oak and recycled aluminum, with a built-in cable management system and a dual-motor lift that moves in near-silence. Price: $1,249. Target buyer: a 32–45-year-old remote professional who has already bought a quality monitor and chair and considers their workspace an investment in their performance and wellbeing. The copy must: open with a benefit (not a feature), use sensory language in the second paragraph (the feel of the wood grain, the sound of the motor), address one unspoken objection (assembly anxiety) in the third paragraph, and close with a single sentence that positions the purchase as an identity decision, not a furniture decision. No bullet lists.",
    "tags": ["ecommerce", "product", "dtc"],
    "author": "AINOW",
    "created": "2024-01-15T12:40:00Z",
    "featured": false
  },
  {
    "id": "w-34",
    "title": "Three Facebook Ad Variations: Online Legal Services",
    "prompt": "You are a performance marketing copywriter specializing in legal tech and professional services. Write three Facebook/Meta ad copy variations for an online will and estate planning platform targeting adults aged 35–65 who own property, have children, and have been meaning to sort their estate planning 'someday'. Each ad variation should have: a headline (max 10 words), primary text (max 125 words), and a clear CTA. Variation 1 (Story-driven): Open with a real scenario — a family discovering their parent died without a will — told with restraint, not melodrama. Variation 2 (Time + Simplicity): Lead with how fast this takes and challenge the 'it's complicated' belief directly. Variation 3 (Social proof + authority): Lead with a credibility signal and a transformation statement from a fictional satisfied user. After each ad, write one sentence explaining what psychological mechanism drives clicks from this audience for this variation.",
    "tags": ["ads", "legal", "facebook"],
    "author": "AINOW",
    "created": "2024-01-15T12:45:00Z",
    "featured": false
  },
  {
    "id": "w-35",
    "title": "Email Subject Lines: 10 Curiosity + 10 Direct Benefit",
    "prompt": "You are an email marketing specialist with a portfolio spanning Mailchimp, HubSpot, and independent e-commerce brands. Write 20 email subject lines for an upcoming promotional email from a DTC specialty coffee subscription company announcing that three single-origin coffees from a new partner farm in Yirgacheffe, Ethiopia are now available — roasted in small batches, limited to 500 bags total, shipping Friday. The first 10 subject lines should use a curiosity gap — the reader doesn't know what it's about but feels compelled to open. The second 10 should use direct benefit or scarcity — the reader immediately understands the offer and is motivated to act. All 20 should be under 55 characters. At least 4 should use personalization tokens (first name or last order reference). None should use the word 'exclusive' or 'limited time' or emoji. Note which curiosity lines are risky (too vague) and which are safe (clear enough not to feel like spam).",
    "tags": ["email", "subject-lines", "ecommerce"],
    "author": "AINOW",
    "created": "2024-01-15T12:50:00Z",
    "featured": false
  },
  {
    "id": "w-36",
    "title": "Unique Value Proposition: Three Versions for an HR Platform",
    "prompt": "You are a brand strategist and B2B messaging specialist. Write three distinct Unique Value Propositions (UVPs) for an HR platform called Forma that helps small and mid-size professional services firms (law firms, accounting firms, consulting practices) manage hiring, onboarding, performance reviews, and compliance documentation in one system. The three versions should differ in strategic emphasis: UVP A — lead with time savings for managing partners who do HR tasks themselves because they can't afford a full-time HR director; UVP B — lead with risk reduction for firms that have grown past 50 people and are now exposed to compliance risk they don't fully understand; UVP C — lead with talent retention for firms losing junior employees to companies with better HR infrastructure and career development tooling. Each UVP should be one sentence (max 30 words), followed by a 40-word expansion and one example use case showing the UVP in action.",
    "tags": ["branding", "strategy", "hr"],
    "author": "AINOW",
    "created": "2024-01-15T12:55:00Z",
    "featured": false
  },
  {
    "id": "w-37",
    "title": "Cold Outreach: Recruiting Agency to Series B Startup",
    "prompt": "You are a specialist recruiter at a technical recruiting agency that places senior engineers and engineering managers at growth-stage startups. Write a cold outreach email — maximum 160 words — to the VP of Engineering at a fictional Series B fintech startup called Caspian, which just announced a $42M round and is publicly hiring for 12 engineering roles on their careers page. The email should: reference the funding news specifically in the first sentence, acknowledge that they're already hiring without being condescending about it, offer one concrete piece of value (a specific insight about the engineering talent market in fintech that not every recruiter would know), and end with a single low-pressure CTA — not 'let's jump on a call this week' but something that acknowledges they are busy and respects their time. No fluff. The email should read like it was written by a senior human being, not a template.",
    "tags": ["sales", "recruiting", "cold-email"],
    "author": "AINOW",
    "created": "2024-01-15T13:00:00Z",
    "featured": false
  },
  {
    "id": "w-38",
    "title": "About Us Page: Climate Fintech Startup",
    "prompt": "You are a brand copywriter with experience writing for mission-driven B2B startups. Write the 'About Us' page for a climate fintech startup called Terranova that provides carbon accounting and Scope 3 emissions tracking software for mid-market manufacturing companies. The page should be approximately 450 words and follow a narrative arc — not a list of facts or a mission statement collection. Arc: (1) The problem in the world that made this company necessary (70 words — establish that the problem is structural, not a lack of good intentions); (2) The founding story — two former sustainability consultants who kept hitting the same wall in client work, told with one specific scene (100 words); (3) What the company actually does, in plain language that a CFO who has never thought about carbon accounting would immediately understand (100 words); (4) The team and culture, in a tone that is direct, humble, and anti-corporate (80 words); (5) A closing statement that functions as a declaration, not a tagline (50 words). No bullet points. No 'we believe' opener.",
    "tags": ["branding", "about-us", "climate"],
    "author": "AINOW",
    "created": "2024-01-15T13:05:00Z",
    "featured": false
  },
  {
    "id": "w-39",
    "title": "Testimonial Polish and Restructure",
    "prompt": "You are a conversion copywriter. You have been given four rough customer testimonials from a B2B project management software company. Your job is to edit each one to be sharper, more specific, and more persuasive — without inventing new facts, changing the core meaning, or making them sound like marketing copy rather than a real person. Here are the four raw testimonials to polish: (1) 'Really good software, saves me a lot of time every day, easy to use, would recommend'; (2) 'We used to have so many meetings and now we have way fewer because everyone can see the project status, great tool'; (3) 'The onboarding was okay but once we got used to it, it really helped our team a lot with deadlines'; (4) 'As a CEO I like that I can see everything without having to ask people, good product.' For each: write the polished version (max 40 words), then write one sentence explaining what editorial principle you applied.",
    "tags": ["copywriting", "testimonials", "conversion"],
    "author": "AINOW",
    "created": "2024-01-15T13:10:00Z",
    "featured": false
  },
  {
    "id": "w-40",
    "title": "90-Second Video Sales Letter Script: Legal Tech",
    "prompt": "You are a direct-response video copywriter. Write a 90-second Video Sales Letter (VSL) script for a legal contract automation platform called Accord that helps in-house legal teams at mid-size companies automate NDA review, vendor contract generation, and clause extraction — cutting contract turnaround time from 14 days to under 4 hours. The target viewer is a General Counsel or VP Legal at a company with 200–2,000 employees who is drowning in routine contract work. Structure: (1) Hook — open with a scenario the viewer recognizes immediately, not a question ('raise your hand if...') but a statement of their current reality (15 seconds / ~40 words); (2) The Cost of the Problem — name the business cost of slow contracts: deals stalled, revenue delayed, legal team burnout (20 seconds); (3) The Solution Reveal — introduce Accord in two sentences, focused on outcomes not features (15 seconds); (4) Three specific capabilities shown as mini scenarios (30 seconds); (5) CTA with urgency that isn't fake (10 seconds). Write as a script with director visual cue notes in parentheses after each section.",
    "tags": ["video", "script", "legal-tech"],
    "author": "AINOW",
    "created": "2024-01-15T13:15:00Z",
    "featured": false
  },
  {
    "id": "w-41",
    "title": "Post-Purchase Upsell Copy: Coffee Subscription",
    "prompt": "You are a DTC e-commerce copywriter. Write a post-purchase upsell popup that appears immediately after a customer has completed their first order for a single-bag specialty coffee subscription (monthly, $22/month). The upsell is an upgrade to the Dual Bag plan ($36/month) — two different single-origin coffees per month, chosen by the brand's head roaster as a pair that reveals contrasting processing methods. The popup copy must: (1) acknowledge the purchase warmly without being obsequious; (2) introduce the upsell with a genuine reason why this customer specifically would enjoy it — frame it around discovery and the experience of tasting contrast, not around saving money; (3) include a headline (max 8 words), one short paragraph (max 60 words), a primary CTA ('Upgrade My Plan' or similar), and a dismissal link with copy that doesn't make the customer feel they made the wrong choice by declining. Total copy: under 120 words.",
    "tags": ["ecommerce", "upsell", "dtc"],
    "author": "AINOW",
    "created": "2024-01-15T13:20:00Z",
    "featured": false
  },
  {
    "id": "w-42",
    "title": "Webinar Invitation Email: CFO Series",
    "prompt": "You are a B2B event marketing copywriter. Write an invitation email for a live 60-minute webinar titled 'The CFO's Guide to AI-Driven Financial Forecasting: What Works, What Doesn't, and What's Coming in 2027' hosted by a B2B financial planning software company. The email is going to a cold list of CFOs and VPs of Finance at companies with $10M–$200M in annual revenue. The email must: be under 250 words; open with a claim or question that challenges something the CFO believes right now about their forecasting process; describe three specific, concrete things attendees will walk away knowing (not vague 'insights' — specific frameworks or data points); include the date, time (Tuesday, May 13, 2:00 PM ET / 7:00 PM BST), format (live, with Q&A), and two speakers with specific titles and companies (fictional but plausible); close with a single-link CTA to register. Subject line included. Do not use the word 'exclusive'.",
    "tags": ["events", "email", "b2b"],
    "author": "AINOW",
    "created": "2024-01-15T13:25:00Z",
    "featured": false
  },
  {
    "id": "w-43",
    "title": "Brand Tagline Options: Fintech for Freelancers",
    "prompt": "You are a brand naming and tagline specialist. Generate 12 tagline options for a fintech app called Ledge that helps freelancers and independent contractors manage invoicing, taxes, and cash flow forecasting in one mobile-first platform. The target user is a 25–40-year-old freelancer — designer, developer, consultant, writer — who is good at their craft but finds the financial side of their business a source of anxiety and avoidance. The 12 taglines should be grouped into three categories of four: (1) Functional — what the product does, plainly stated; (2) Emotional — how it makes the user feel; (3) Identity — who the user becomes by using it. Each tagline must be under 8 words. After all 12, write a one-paragraph recommendation identifying which two or three are strongest for acquisition-focused digital advertising and why (specific — reference emotional register, cognitive load, memorability).",
    "tags": ["branding", "fintech", "taglines"],
    "author": "AINOW",
    "created": "2024-01-15T13:30:00Z",
    "featured": false
  },
  {
    "id": "w-44",
    "title": "Honest Urgency Copy: End-of-Season Sale",
    "prompt": "You are a DTC brand copywriter who believes that manufactured scarcity is a short-term tactic that destroys long-term trust. Write five variations of end-of-sale urgency copy for an outdoor apparel brand called Cairn Supply that is running a genuine clearance sale — these are actual overstocked items from last winter's collection that will not be restocked. The sale ends in 48 hours. The urgency is real. Each variation (one sentence to three sentences max) should create urgency without: countdown clocks that reset, fake 'only 3 left' claims, artificial pressure language. Instead, the urgency should come from honesty: the products are genuinely going away, the prices will not return, and the offer is real. Write versions for: a banner headline, a cart abandonment email subject line, a product page badge, an SMS push, and a closing paragraph for a newsletter. Each should feel like it was written by a brand that respects its customers.",
    "tags": ["ecommerce", "urgency", "ethics"],
    "author": "AINOW",
    "created": "2024-01-15T13:35:00Z",
    "featured": false
  },
  {
    "id": "w-45",
    "title": "Competitive Comparison Landing Page Section",
    "prompt": "You are a B2B SaaS copywriter. Write a 400-word 'Why Cadence vs. Asana' landing page section for a project management tool called Cadence, comparing it against Asana. The target reader is an operations manager at a 50–200 person professional services company who is currently using Asana but is frustrated by its complexity and per-seat pricing at scale. The section should: open with a statement of respect for Asana (do not trash the competitor — that reads as insecurity); then use a comparison framing that focuses on use-case fit rather than feature superiority (Asana is a strong tool built for product teams; Cadence is built specifically for client-facing service operations); include three specific, concrete differentiators presented as prose — not a feature comparison table — with one sentence per differentiator explaining the real-world impact; and close with a two-sentence statement about who Cadence is not right for (anti-positioning builds trust). Tone: confident and fair.",
    "tags": ["landing-page", "competitive", "saas"],
    "author": "AINOW",
    "created": "2024-01-15T13:40:00Z",
    "featured": false
  },

  // --- TECHNICAL & PROFESSIONAL WRITING (w-46 to w-55) ---

  {
    "id": "w-46",
    "title": "Difficult Stakeholder Email: Project Delay Notification",
    "prompt": "You are a senior project manager at a digital transformation consultancy. Write a professional email to a VP of Digital at a large retail client informing them that a website replatforming project will be delayed by 6 weeks — from a July 15 go-live to an August 26 go-live. The delay is caused by unexpected complexity discovered during the legacy data migration phase. The email must: be direct about the delay in the first sentence (do not bury the news); clearly explain one root cause without making excuses or over-explaining; describe what has already been done to attempt to mitigate the delay; propose a revised timeline with three milestone dates; acknowledge the business impact (they had planned a back-to-school campaign launch tied to the go-live); and end with a request for a 30-minute call this week, with two proposed times. Tone: accountable, transparent, and confident without being defensive. Under 350 words.",
    "tags": ["professional-writing", "project-management", "email"],
    "author": "AINOW",
    "created": "2024-01-15T13:45:00Z",
    "featured": true
  },
  {
    "id": "w-47",
    "title": "Executive Meeting Summary with Action Items",
    "prompt": "You are a chief of staff. Produce a structured executive meeting summary from a 90-minute leadership team session that covered the following topics: (1) Q1 revenue performance — $4.2M actual vs. $4.8M forecast, attributed to two delayed enterprise deals that are now projected to close in Q2; (2) a decision to pause hiring for three open roles in the marketing team pending a Q2 budget review; (3) a 15-minute discussion about whether to proceed with a new Zurich office — no decision reached, more analysis requested; (4) an update from the product team that the mobile app redesign will ship April 30 instead of March 31. The summary should include: a one-paragraph executive overview (80 words); a 'Decisions Made' section with three clean bullet points; an 'Action Items' table with Owner, Action, and Deadline columns (5 items); and a 'Deferred Items' section (2 bullets) for items that need to return to agenda. Format cleanly. No filler.",
    "tags": ["professional-writing", "meetings", "business"],
    "author": "AINOW",
    "created": "2024-01-15T13:50:00Z",
    "featured": false
  },
  {
    "id": "w-48",
    "title": "API Documentation: Webhook Event Reference",
    "prompt": "You are a senior technical writer with a background in backend engineering. Write documentation for the 'invoice.payment_succeeded' webhook event for a fictional B2B billing API called BillingCore. The documentation should follow the structure used by Stripe's API reference. Include: (1) Event description (2 sentences — what triggers it and why a developer would listen for it); (2) Event schema — a complete JSON payload example with realistic data types and values, including nested objects for 'invoice', 'customer', and 'payment_method'; (3) Attributes table — list each top-level and second-level attribute with name, type, and a one-line description; (4) Use cases section — three numbered use cases showing what a developer might do upon receiving this event (e.g., update order status, send a receipt email, unlock account features); (5) Related events — list three related events with one-sentence descriptions of how they differ. Write for an audience of mid-level backend developers who are competent but time-constrained.",
    "tags": ["technical-writing", "api", "developer-docs"],
    "author": "AINOW",
    "created": "2024-01-15T13:55:00Z",
    "featured": false
  },
  {
    "id": "w-49",
    "title": "B2B Whitepaper Outline: AI in Supply Chain Risk",
    "prompt": "You are a content strategist at a supply chain technology company producing a gated whitepaper for Chief Supply Chain Officers and VP of Procurement at Fortune 1000 manufacturers. Produce a fully developed outline for a 3,500-word whitepaper titled 'Beyond the Spreadsheet: How AI-Powered Risk Intelligence Is Redefining Supply Chain Resilience.' The outline should include: (1) Executive Summary (150-word description of what the summary will cover — not the summary itself, but the brief for the writer); (2) five numbered sections, each with a working title, a 100-word description of its argument and content, 3 sub-section bullets with specific points to cover, and one data point or framework the writer should research and include; (3) a 'Expert Perspective' box description (a fictional sourced quote section from a supply chain academic); (4) a Conclusion brief (60 words); (5) a CTA and Lead Capture brief (what the CTA page should say to convert a whitepaper reader to a demo request). Output as a structured creative brief.",
    "tags": ["whitepaper", "supply-chain", "b2b"],
    "author": "AINOW",
    "created": "2024-01-15T14:00:00Z",
    "featured": false
  },
  {
    "id": "w-50",
    "title": "Cover Letter: Senior Product Manager, Fintech",
    "prompt": "You are an executive career coach who specializes in fintech and financial services. Write a cover letter for a Senior Product Manager applying to a Series C payments infrastructure company called Vanta Financial for a role leading their developer-facing API products. The candidate's profile: 7 years of product experience, the last 4 at a B2B payments startup where they led the developer platform team and grew API adoption from 400 to 4,200 active developers; they shipped 3 major SDK releases, reduced developer time-to-first-transaction from 12 days to 4 hours, and have a background in economics with no engineering degree. The cover letter should: open with a specific achievement rather than 'I am applying for'; demonstrate knowledge of Vanta's current public product challenges (developer onboarding friction is a known issue from their developer forum); connect the candidate's specific experience to those challenges; be exactly 320 words; and close with confidence, not deference. No 'I am a passionate product leader' constructions.",
    "tags": ["career", "cover-letter", "fintech"],
    "author": "AINOW",
    "created": "2024-01-15T14:05:00Z",
    "featured": false
  },
  {
    "id": "w-51",
    "title": "Professional Resignation Letter: Senior Role",
    "prompt": "You are an executive communications coach. Write a professional resignation letter from a Head of Data Analytics who is leaving a large insurance company after 6 years to join a climate tech startup as their first VP of Analytics. The letter should: state the resignation and final date clearly in the first sentence (the final day is four weeks from submission — standard notice for this level); express specific, genuine gratitude for three aspects of the role without being sycophantic (the technical team she built, the executive sponsor who championed data investments, the scope of problems she got to work on); briefly mention the new role as a natural next step without making the company feel criticized for not offering similar opportunities; include a paragraph committing to a thorough handover and offering to help hire or train her replacement; and close with an expression of continued respect. Tone: warm, definitive, and gracious. Under 300 words.",
    "tags": ["career", "professional-writing", "formal"],
    "author": "AINOW",
    "created": "2024-01-15T14:10:00Z",
    "featured": false
  },
  {
    "id": "w-52",
    "title": "Standard Operating Procedure: Client Offboarding",
    "prompt": "You are a senior operations manager at a B2B professional services agency (digital strategy consulting, 40 employees). Write a Standard Operating Procedure (SOP) for the Client Offboarding Process — the formal process that begins when a client contract ends or is not renewed, and concludes when all deliverables, access credentials, and documentation have been transferred and the client relationship is formally closed. The SOP should include: Purpose (2 sentences); Scope — who this applies to; Trigger conditions (3 specific conditions that initiate this process); Roles and Responsibilities table (Account Manager, Project Manager, Finance, IT/Systems); Procedure steps in numbered format — minimum 10 steps, each with the responsible party named and a clear action described; Required Documentation checklist (what must be filed before the process is marked complete); Timeline (maximum number of days for full offboarding from trigger); and a 'Common Failure Points' section with 3 items. Format for a team wiki.",
    "tags": ["operations", "sop", "consulting"],
    "author": "AINOW",
    "created": "2024-01-15T14:15:00Z",
    "featured": false
  },
  {
    "id": "w-53",
    "title": "Internal Announcement: Restructuring and Role Changes",
    "prompt": "You are the Chief People Officer of a 280-person tech company. Write an internal company announcement to all staff about a restructuring that merges the Customer Success and Professional Services teams into a single unified 'Client Experience' organization under a new Senior Vice President, Mia Chen, who was previously Head of Customer Success. Three roles in the Professional Services team are being eliminated. The announcement must: state the change clearly in the first paragraph without burying the difficult news; explain the strategic rationale in one paragraph that respects employees' intelligence without being evasive; address the role eliminations directly in the third paragraph — acknowledge the impact and state that affected employees have already been notified individually and will receive a full transition package; describe what the change means for day-to-day work for the employees who are not affected; and close with a message about where employees can ask questions (a company-wide Q&A session is scheduled for Thursday at 4pm). Under 400 words. No corporate euphemisms.",
    "tags": ["internal-comms", "hr", "leadership"],
    "author": "AINOW",
    "created": "2024-01-15T14:20:00Z",
    "featured": false
  },
  {
    "id": "w-54",
    "title": "Plain-Language Executive Summary: Technical Security Report",
    "prompt": "You are a technical writer who specializes in translating complex security findings for non-technical executive audiences. You have been given the following summary of findings from an annual penetration test: the test identified 3 critical vulnerabilities (an unpatched remote code execution flaw in the customer-facing web application, excessive privileged access for 14 service accounts, and an exposed internal API endpoint with no authentication), 7 high-severity findings, and 12 medium-severity findings. Mean time to detect in simulated attacks was 47 hours. Write a one-page (400-word maximum) executive summary for the Board of Directors that: explains what a penetration test is in one sentence for non-technical readers; summarizes the overall risk posture in plain terms (not scores — plain language that communicates consequence); describes the three critical findings without jargon, explaining what would happen if each was exploited by an attacker; and outlines the three immediate remediation actions underway with owners and target completion dates. No bullet points in the risk section. Reassuring but honest.",
    "tags": ["technical-writing", "security", "executive"],
    "author": "AINOW",
    "created": "2024-01-15T14:25:00Z",
    "featured": false
  },
  {
    "id": "w-55",
    "title": "Project Status Report: Red Status with Recovery Plan",
    "prompt": "You are a program director at a healthcare technology company. Write a formal project status report for the 'Patient Portal v2.0' initiative, currently in Red status. The report is for the executive steering committee. Situation: the project is 8 weeks behind an originally planned June 3 go-live, due to scope changes requested by the clinical operations team in Week 6 that were approved without a formal change control process, combined with a 3-week delay in receiving test data from the hospital partner. The revised go-live is now targeting July 29. The report should include: Project Overview (1 paragraph); Current Status with RAG rating and a single sentence explaining why it's Red; Key Milestones table with Original Date, Revised Date, and Status for 6 milestones; Issues and Risks section (3 issues with owner and mitigation action); Recovery Plan (4 specific actions with owners and due dates); and a Decisions Required section (2 items the committee must decide on before the next session). Clinical, governance-appropriate tone.",
    "tags": ["project-management", "status-report", "healthcare"],
    "author": "AINOW",
    "created": "2024-01-15T14:30:00Z",
    "featured": false
  },

  // --- JOURNALISM & NON-FICTION (w-56 to w-65) ---

  {
    "id": "w-56",
    "title": "Press Release: Series B Funding Announcement",
    "prompt": "You are a PR writer at a communications agency specializing in tech startups. Write a press release announcing the $28M Series B funding round of Arbor Intelligence, an AI-powered biodiversity monitoring platform that helps conservation organizations and corporate sustainability teams track and report on ecosystem health using satellite imagery and acoustic sensors. The round was led by Congruent Ventures, with participation from Salesforce Ventures and the European Investment Bank. The press release should follow AP style and include: a strong news-value headline (not a generic 'raises $28M' headline — find the angle); a dateline and lead paragraph that answers who, what, when, where, and why in 40 words; a second paragraph expanding on the product and the market need; a CEO quote (fictional CEO: Dr. Amara Osei-Bonsu) that adds genuine information rather than restating the lead; an investor quote from the Congruent Ventures managing partner; a 'Use of Funds' paragraph (product development, market expansion, team growth); and an 'About Arbor Intelligence' boilerplate (50 words). Total: 500 words.",
    "tags": ["pr", "press-release", "climate-tech"],
    "author": "AINOW",
    "created": "2024-01-15T14:35:00Z",
    "featured": false
  },
  {
    "id": "w-57",
    "title": "Investigative Interview Preparation: Labor Practices",
    "prompt": "You are an investigative journalist preparing for a recorded interview with the Chief Operating Officer of a large apparel company that has been the subject of a published report alleging unsafe labor practices at two contract factories in Bangladesh. The COO has agreed to a 45-minute on-record interview. Prepare a complete interview brief including: (1) a 100-word context summary on the allegations (cite the specific nature: fire safety violations, blocked exits, excessive overtime beyond local law, and management retaliation against workers who raised complaints); (2) 15 interview questions organized in three tiers — Tier 1 (5 opening questions to establish baseline positions on record), Tier 2 (5 follow-up questions that challenge prepared corporate talking points with specific documented contradictions), Tier 3 (5 questions for the final 10 minutes that address consequences — accountability mechanisms, remediation timeline, and whether any factory relationships have been terminated). After each Tier 2 question, note the specific evasion it is designed to counter.",
    "tags": ["journalism", "interview", "investigative"],
    "author": "AINOW",
    "created": "2024-01-15T14:40:00Z",
    "featured": false
  },
  {
    "id": "w-58",
    "title": "Op-Ed: Against Productivity Culture in Medicine",
    "prompt": "You are a practicing emergency physician who is also a writer with a regular column in a medical journal. Write an 800-word op-ed arguing that the adoption of corporate productivity frameworks in hospital systems — KPIs, throughput metrics, efficiency dashboards — is not simply misguided but is causing specific, measurable harms to patient care quality and physician wellbeing. The op-ed should: open with a specific clinical moment that grounds the abstract argument in human reality; build a structured argument across three sections (the appeal of productivity thinking in medicine, the ways it fails when applied to clinical judgment and patient complexity, and what better metrics might actually look like); include one reference to a real study or dataset (you may name a category of research rather than a specific paper); end with a direct address to hospital administrators — not a polemic, but a specific request. Tone: authoritative, measured, and morally serious without being self-righteous.",
    "tags": ["op-ed", "healthcare", "journalism"],
    "author": "AINOW",
    "created": "2024-01-15T14:45:00Z",
    "featured": false
  },
  {
    "id": "w-59",
    "title": "Narrative Non-Fiction Scene: Climate Grief Support Group",
    "prompt": "You are a narrative non-fiction writer working on a book-length reported work about the psychological dimensions of climate change. Write a 600-word scene from inside a climate grief support group meeting in Portland, Oregon — one of 240 such groups worldwide organized by the Climate Psychology Alliance. The meeting takes place in a church basement on a Wednesday night in January. There are nine participants aged 24–71. Use the scene to introduce three specific characters through behavior and speech, not through explicit description of their feelings. One character is a 34-year-old elementary school teacher who has stopped teaching the rainforest unit because she can't get through it without crying. One character is a 61-year-old retired forest service ranger from Oregon whose relationship with the fire-changed Cascades is the subject of his grief. One character is a 27-year-old who is there for the first time and says almost nothing. The facilitator has one line of dialogue. Write as if you were in the room — observational, precise, not editorializing.",
    "tags": ["narrative-nonfiction", "climate", "literary"],
    "author": "AINOW",
    "created": "2024-01-15T14:50:00Z",
    "featured": false
  },
  {
    "id": "w-60",
    "title": "Professional Biography: Think Tank Scholar",
    "prompt": "You are a communications director at a policy research institute. Write two versions of a professional biography for Dr. Naledi Dlamini, a 46-year-old South African economist and development policy researcher who is a Senior Fellow at the Brookings Institution. Her work focuses on sovereign debt restructuring in sub-Saharan Africa, the role of the IMF and World Bank in post-pandemic recovery, and informal economy labor formalization. She has a PhD from the London School of Economics, spent six years as an economist at the African Development Bank, has testified before the European Parliament, and has been a contributing op-ed writer at Project Syndicate. Version 1 (Long bio): 200 words, third person, for use on a conference program or book jacket. Version 2 (Short bio): 65 words, third person, for social media and speaking introductions. The long bio should read as authoritative and specific. The short bio should prioritize impact and recognition over credential listing.",
    "tags": ["biography", "professional", "academic"],
    "author": "AINOW",
    "created": "2024-01-15T14:55:00Z",
    "featured": false
  },
  {
    "id": "w-61",
    "title": "Headline Analysis and Rewrite: Political News",
    "prompt": "You are a journalism professor and former national editor at a major daily newspaper. Analyze the following five news headlines and assess each one for: accuracy of framing (does the headline say what the story actually says?), fairness (does the headline favor a particular interpretation?), clarity (would a general reader immediately understand the news?), and engagement (would a reader want to click or turn the page?). Rate each dimension 1–5. Then rewrite each headline to score at least 4/5 in all four dimensions. The five headlines are: (1) 'City Council Moves Forward on Contentious Housing Plan'; (2) 'Company CEO Under Fire for Comments'; (3) 'New Study Suggests Coffee May Not Be Bad for You After All'; (4) 'Government Announces Major Investment in Renewables'; (5) 'Critics Slam Latest Social Media Policy Changes.' After your analysis, write a one-paragraph commentary on the most common failure mode across all five headlines.",
    "tags": ["journalism", "editing", "headlines"],
    "author": "AINOW",
    "created": "2024-01-15T15:00:00Z",
    "featured": false
  },
  {
    "id": "w-62",
    "title": "Feature Story Lede: Hospital Nurse Staffing Crisis",
    "prompt": "You are an award-winning magazine feature writer with credits in The Atlantic and The New Yorker. Write three alternative opening ledes (each 150–200 words) for a longform feature story about the nursing staffing crisis in rural American hospitals — specifically, how the combination of burnout, agency nursing costs, and hospital consolidation is causing rural hospitals to close labor and delivery units, leaving women in some counties with no in-county option for childbirth. Lede A (Scene): Open in the middle of a specific event — a woman in labor being transported 90 miles by ambulance because the nearest hospital's L&D unit closed six months ago. Lede B (Portrait): Open with a specific nurse — her name, her county, her decision to leave staff nursing for agency nursing, and the mathematical reality that drove her to it. Lede C (Data Narrative): Open with one striking, specific statistic and immediately put a human face on it within the second sentence. Each lede should end on a line that makes the stakes of the story impossible to ignore.",
    "tags": ["journalism", "feature-writing", "healthcare"],
    "author": "AINOW",
    "created": "2024-01-15T15:05:00Z",
    "featured": false
  },
  {
    "id": "w-63",
    "title": "Fact-Check Briefing: AI Policy Claims",
    "prompt": "You are a fact-checking editor at a policy journalism outlet. The following three paragraphs have been submitted for publication. Your job is to produce a fact-check briefing — a list of every specific claim that requires verification before publication, organized by claim type (statistical, attributional, historical, causal). Do not verify the claims — only identify them and flag the specific verification requirement. Paragraphs: 'The European Union's AI Act, passed in 2024, has been called the most comprehensive AI regulatory framework in history by technology policy experts. Proponents argue it will reduce algorithmic bias by up to 40% in high-risk applications. Critics, including a coalition of seventeen US tech companies, have argued it will cost the European AI industry approximately €3.2 billion in compliance costs over the first three years. The Act requires mandatory human oversight for all AI systems used in healthcare, education, and law enforcement.' Produce a structured briefing with 8–12 specific claims identified, each tagged with a verification approach and a risk level (Low / Medium / High if published unchecked).",
    "tags": ["journalism", "fact-checking", "ai-policy"],
    "author": "AINOW",
    "created": "2024-01-15T15:10:00Z",
    "featured": false
  },
  {
    "id": "w-64",
    "title": "Keynote Speech: Company 10th Anniversary",
    "prompt": "You are a speechwriter who specializes in founder narratives and milestone communications. Write a 6-minute keynote speech (approximately 900 words) for the 10th anniversary celebration of a B2B HR software company called PeopleLayer, to be delivered by the co-founder and CEO, Sasha Novak, to an audience of 340 employees at an all-hands event in Chicago. The company started in 2015 as a two-person operation out of Sasha's spare bedroom, reached profitability at year three, turned down an acquisition offer at year six, and just crossed $50M in ARR with 340 employees in seven countries. The speech should: open with one specific memory from Year 1 that most long-tenured employees will remember (make it specific, not generic — a real-feeling detail); build to a narrative about what the company almost got wrong at year 4 (a near-miss with a major strategic mistake — what it was and what was learned); honor the team without corporate emptiness; and close with a forward-looking challenge, not a celebration. The tone should be honest, warm, and rally-worthy. No 'family' language.",
    "tags": ["speech", "leadership", "milestone"],
    "author": "AINOW",
    "created": "2024-01-15T15:15:00Z",
    "featured": false
  },
  {
    "id": "w-65",
    "title": "Book Review: The Alignment Problem by Brian Christian",
    "prompt": "You are a technology journalist and book critic with a column in a national publication. Write a 700-word review of 'The Alignment Problem: Machine Learning and Human Values' by Brian Christian (W. W. Norton, 2020) for a general-audience publication. The review should: open with a sentence that establishes why this book matters now, not when it was published; describe the book's central argument in one sharp paragraph without summarizing chapter by chapter; identify what Christian does exceptionally well (his ability to make technical concepts legible to non-specialists through human-centered research stories); identify one limitation or gap in the book's argument honestly and specifically (the book's relative underemphasis on non-Western AI development contexts, for example); name two or three readers for whom this book is essential and two for whom it would be too introductory; and close with a recommendation that is honest about who should read it and who can skip it. Do not use the phrases 'a must-read', 'tour de force', or 'page-turner'.",
    "tags": ["book-review", "technology", "ai"],
    "author": "AINOW",
    "created": "2024-01-15T15:20:00Z",
    "featured": false
  },

  // --- SCREENWRITING & PLAYWRITING (w-66 to w-75) ---

  {
    "id": "w-66",
    "title": "Short Film Script: The Last Interview",
    "prompt": "You are a screenwriter with credits at Sundance and SXSW. Write a complete 10-page short film script in standard Final Draft format for a film called 'The Last Interview.' The story: Vera, 72, a retired labor organizer in Detroit, has agreed to be interviewed on camera by her 26-year-old granddaughter Maya, who is making a documentary about Vera's life for her graduate thesis. The interview begins formally, the camera on, both women in their roles. Over the course of the film, the interview breaks down — not because of conflict, but because Vera begins speaking without performance for the first time, and Maya stops asking questions and begins listening. The film is about what it costs a person to be a witness to their own life. There are only two characters and one location (Vera's living room). No montage. No voiceover. The last shot should be on Maya's face, not Vera's. Use proper sluglines, action lines, and dialogue format throughout.",
    "tags": ["screenwriting", "short-film", "drama"],
    "author": "AINOW",
    "created": "2024-01-15T15:25:00Z",
    "featured": true
  },
  {
    "id": "w-67",
    "title": "Five Loglines: Near-Future Thriller Concepts",
    "prompt": "You are a literary manager and screenplay consultant. Write five loglines for near-future (2035–2050) thriller screenplays — not science fiction, but thrillers where the setting's technological context creates the central tension. Each logline must follow this structure: protagonist (specific, not generic) + inciting incident (what disrupts their world) + goal (what they must achieve) + central obstacle or antagonist. Rules: no AI-goes-rogue plots, no dystopian government control plots (unless the control is ambiguous and personal, not systemic), no AI romance plots. The five loglines should span five different protagonist types: a mid-level bureaucrat, a marine biologist, an immigration attorney, a logistics software engineer, and a pediatric neurologist. Each logline must be under 50 words. After each, write one sentence identifying the specific theme that separates it from a conventional thriller.",
    "tags": ["screenwriting", "loglines", "thriller"],
    "author": "AINOW",
    "created": "2024-01-15T15:30:00Z",
    "featured": false
  },
  {
    "id": "w-68",
    "title": "Pilot Episode Scene: Limited Series About Debt Collectors",
    "prompt": "You are a television writer on a prestige cable limited series. Write a 5-page scene from the pilot episode of a limited series called 'The Amount' — a character drama about a small debt collection agency in Akron, Ohio, and the people who work and owe there. The scene: Marcus, 44, the agency's floor supervisor, is on a call with a woman named Doris, 68, who owes $7,400 on a medical bill from her late husband's hospital stay. It is 11:15 AM on a Tuesday. Marcus is good at his job. He is not a villain. He has a script on his screen and a performance review in three hours. Doris is not a victim. She knows her rights. She is, however, exhausted. The scene should end with Marcus doing something that is slightly against protocol but entirely human. Write in proper television script format with scene headings, action lines, and dialogue.",
    "tags": ["screenwriting", "tv-drama", "character"],
    "author": "AINOW",
    "created": "2024-01-15T15:35:00Z",
    "featured": false
  },
  {
    "id": "w-69",
    "title": "Stage Monologue: A Climate Scientist Addresses Congress",
    "prompt": "You are a playwright. Write a 4-minute dramatic stage monologue (approximately 550 words) for a character named Dr. Yusuf Hasan, a 52-year-old Somali-American climate scientist who has been called to testify before a Congressional subcommittee for the 11th time in 18 years. He has prepared testimony. He begins reading it. About 45 seconds in, he stops. He sets it down. He speaks without notes for the rest of the monologue — not angrily, but with the particular exhaustion of a person who has said true things in important rooms for a very long time and watched nothing change. The monologue should not be a speech about climate data. It should be a monologue about the psychology of expertise, the performance of urgency, and what it costs to keep showing up. There is one point where his voice breaks — not from emotion but from the effort of keeping the emotion out. The final line should be very quiet and very specific.",
    "tags": ["playwriting", "monologue", "drama"],
    "author": "AINOW",
    "created": "2024-01-15T15:40:00Z",
    "featured": false
  },
  {
    "id": "w-70",
    "title": "Three-Act Outline: Corporate Whistleblower Drama",
    "prompt": "You are a screenplay story consultant. Produce a full three-act outline for a feature-length corporate thriller-drama titled 'Standard Practice' — about Eleni Papadakis, a 36-year-old compliance officer at a mid-size pharmaceutical company who discovers that a clinical trial result was statistically manipulated in the filing that gained FDA approval for a widely prescribed antidepressant. The outline should follow the standard three-act structure with specific plot points: Act One (setup to inciting incident to Plot Point 1 / Break into Act Two), Act Two (rising complications, midpoint reversal, all-is-lost moment, Plot Point 2), Act Three (final push, climax, resolution). For each act, write 200 words describing the major beats, the protagonist's internal arc stage, and the key decision she makes at each structural turn. The film should be morally ambiguous — the ending should not be a clean victory or a clean defeat. Include a B-story (Eleni's relationship with her mentor, a senior VP who may or may not have known).",
    "tags": ["screenwriting", "outline", "thriller"],
    "author": "AINOW",
    "created": "2024-01-15T15:45:00Z",
    "featured": false
  },
  {
    "id": "w-71",
    "title": "Character Arc Map: A Five-Season TV Protagonist",
    "prompt": "You are a TV showrunner and story room architect. Map the complete five-season character arc for Det. Rania Saleh, 38, the protagonist of a prestige police procedural set in Toronto. At the start of Season 1: Rania is brilliant, closed, and running from a decision she made five years ago that led to a wrongful conviction — a case she has never publicly admitted was her fault. She uses work as control. She trusts no one she hasn't tested. For each season, describe: the central external case that forces a specific internal confrontation, the specific wound that gets activated, the relationship that either deepens or breaks, the version of herself she is fighting to protect or destroy, and the one-line arc statement for that season. The arc across five seasons should track a complete internal transformation — not from broken to healed, but from defended to present. Season 5 should not end with redemption. It should end with accountability.",
    "tags": ["screenwriting", "character-arc", "tv"],
    "author": "AINOW",
    "created": "2024-01-15T15:50:00Z",
    "featured": false
  },
  {
    "id": "w-72",
    "title": "Sitcom Cold Open: Remote Work Chaos",
    "prompt": "You are a comedy writer with credits on a network sitcom. Write a 3-minute cold open for a workplace sitcom set at a fully remote software startup where the entire 9-person team works from wildly different time zones and living situations. The cold open takes place during a Monday morning all-hands video call. The situation: it's 9 AM EST, but Priya is calling in from Mumbai at 7:30 PM while nursing a sick cat; Devon's 4-year-old has walked into the background holding a fish; the CTO Bart has accidentally left his microphone on while arguing with someone off-screen about whose turn it is to unload the dishwasher; and the CEO is trying to deliver a serious announcement about a new investor while this unfolds around her. The comedy should come from human chaos, not technology jokes. Write in proper sitcom script format (slugline, action, dialogue). End on a hard cut to title card. The announcement the CEO is trying to make should land on the wrong line as the punchline.",
    "tags": ["comedy", "sitcom", "script"],
    "author": "AINOW",
    "created": "2024-01-15T15:55:00Z",
    "featured": false
  },
  {
    "id": "w-73",
    "title": "Stage Play Scene: Inheritance Conversation",
    "prompt": "You are a playwright in the tradition of Annie Baker and Lynn Nottage. Write a 6-page stage scene for two characters: Odessa, 67, a Black woman from Birmingham who has been living alone since her husband's death two years ago, and her son Marcus, 41, a corporate attorney in Chicago who has flown home under the pretense of 'just visiting' but actually wants to talk about Odessa's plans for the house. The house is paid off. It is worth $340,000. Marcus wants to suggest selling it, partly for practical reasons, partly because he doesn't fully know why he wants her to leave it. Odessa knows exactly what the conversation is about before he says anything. The scene should take place in her kitchen while she is cooking and he is sitting. Nothing should be said directly until the very end. The play is about inheritance as a form of love that neither person knows how to name. Write in proper stage play format: no third wall, no asides, no stage directions explaining feelings.",
    "tags": ["playwriting", "drama", "family"],
    "author": "AINOW",
    "created": "2024-01-15T16:00:00Z",
    "featured": false
  },
  {
    "id": "w-74",
    "title": "One-Page Film Treatment: AI-Assisted Defense Attorney",
    "prompt": "You are a screenwriter pitching to an independent production company. Write a one-page (400–450 word) film treatment for a legal thriller titled 'Reasonable Doubt' — a feature film about Camille Brooks, a 44-year-old public defender in New Orleans who starts using an AI legal research tool provided by a legal tech nonprofit to help manage her caseload of 180 active cases. Over the course of the film, the AI surfaces a suppressed DNA test result in a 12-year-old murder conviction — a case that isn't hers, involving a man who has served 11 of a 25-year sentence. The treatment should convey: the protagonist's voice and moral engine in two sentences; the central dramatic question (not just the plot — the question the film is really about, which concerns liability, accountability, and what it means to act on incomplete information); the three major structural pivots of the story; and the film's final image. Write with the confidence of a produced writer — no hedging, no 'might' or 'could'. State the story.",
    "tags": ["screenwriting", "treatment", "legal"],
    "author": "AINOW",
    "created": "2024-01-15T16:05:00Z",
    "featured": false
  },
  {
    "id": "w-75",
    "title": "60-Second Radio Ad Script: Independent Bookstore",
    "prompt": "You are a radio copywriter. Write a 60-second radio ad script (approximately 160 words) for an independent bookstore called Folio Books in Edinburgh, Scotland. The ad is for their annual 'Slow Saturday' event — a single day each November where the store closes its online ordering system, turns off the WiFi, brews three types of coffee and one pot of tea, and invites people to come in with no agenda and just browse. No events, no author signings, just the store, the books, and whoever shows up. The ad should: feel like it was written by someone who loves books, not someone who sells them; use sound design notes (a bell above a door, the sound of pages, rain on a window); speak directly to one very specific type of person — not 'book lovers' generally, but the person who used to read all the time and somewhere in the last five years has lost the habit and quietly misses it; and end with one line that does not sound like an ad. Include VO direction notes.",
    "tags": ["advertising", "radio", "retail"],
    "author": "AINOW",
    "created": "2024-01-15T16:10:00Z",
    "featured": false
  },

  // --- POETRY & LYRICISM (w-76 to w-85) ---

  {
    "id": "w-76",
    "title": "Elegy for a Dying Language",
    "prompt": "You are a contemporary poet working in the tradition of Claudia Rankine and Ocean Vuong. Write an elegy — a poem of mourning and remembrance — for a dying language: Silbo Gomero, the whistled language of La Gomera in the Canary Islands, which is understood by fewer than 22,000 people and is the only whistled language in the world to be used in everyday conversation. The poem should be 24–32 lines in free verse. It should not be sentimental. It should find one central image that carries the weight of the poem — not the whistling itself, but something adjacent to it: a particular hillside, a child who learned it, the space between two people who no longer share it. The poem should resist the impulse to make grief beautiful. At least two lines should feel like they were pulled from a conversation rather than composed. The last line should leave the reader with something unresolved.",
    "tags": ["poetry", "elegy", "literary"],
    "author": "AINOW",
    "created": "2024-01-15T16:15:00Z",
    "featured": true
  },
  {
    "id": "w-77",
    "title": "Haiku Sequence: A Season in a Hospital Ward",
    "prompt": "You are a poet with a background in medical humanities. Write a sequence of seven haiku that document the passage of four weeks in a hospital ward from the perspective of a long-term patient — not dying, but recovering slowly from a stroke, relearning language and movement. Each haiku must adhere to the 5-7-5 syllable structure in English. The sequence should move chronologically from arrival to near-departure. Each haiku should use one concrete, sensory image — ceiling tiles, a physiotherapist's voice, the weight of a spoon, the window's angle of light in late October. Avoid the words 'healing', 'hope', 'pain', 'journey', and 'strength'. The images should be entirely physical and specific. The sequence as a whole should create an arc of consciousness — not of recovery, but of the mind reacquainting itself with the world. After the seven haiku, write a one-paragraph craft note explaining the central image system you used.",
    "tags": ["poetry", "haiku", "medical-humanities"],
    "author": "AINOW",
    "created": "2024-01-15T16:20:00Z",
    "featured": false
  },
  {
    "id": "w-78",
    "title": "Song Lyrics: Indie Folk Chorus and Two Verses",
    "prompt": "You are a professional songwriter with credits in indie folk and Americana. Write one chorus and two verses for a song called 'The Long Way Back' — an indie folk song about the specific experience of returning to a hometown you left at 22 and finding, at 38, that your grief for it has no clean object: the town changed, you changed, and neither version of either of you can be held. The musical feel should sit somewhere between Phoebe Bridgers' 'Funeral' and Gregory Alan Isakov's 'The Stable Song' — unhurried, image-driven, emotionally precise without being explicit. Verse 1: ground the listener in a specific scene of return (a specific location, a time of day, one sensory detail). Chorus: the emotional core — written to be sung, with a melodic phrase that can carry three syllable variations across the song. Verse 2: shift the perspective or timeline — something the narrator notices that the town doesn't know about them. Avoid clichés: no 'driving down these old familiar roads', no 'nothing's changed but everything's different.'",
    "tags": ["songwriting", "indie-folk", "lyrics"],
    "author": "AINOW",
    "created": "2024-01-15T16:25:00Z",
    "featured": false
  },
  {
    "id": "w-79",
    "title": "Extended Metaphor Poem: Memory as Architecture",
    "prompt": "You are a poet. Write a 20-line free verse poem that sustains a single extended metaphor throughout: memory as an architectural structure — not a building in general, but one specific type of building. Choose a building type that generates tension with the subject of memory (a library that is also burning, a parking garage where things are stored but not displayed, a transit terminal built for departure). The poem should maintain the metaphor without letting it collapse into decoration — every image in the poem should serve the architectural conceit. The poem should be about a specific memory: a conversation between a parent and child that neither fully remembers the same way. The poem should not name the parent or the child. The poem should not explain itself. The final two lines should break the architectural metaphor in a way that feels earned — a crack in the structure that reveals something outside it.",
    "tags": ["poetry", "metaphor", "craft"],
    "author": "AINOW",
    "created": "2024-01-15T16:30:00Z",
    "featured": false
  },
  {
    "id": "w-80",
    "title": "Spoken Word Poem: First Generation Student",
    "prompt": "You are a spoken word poet and teaching artist. Write a performance poem — intended for live delivery, not print — titled 'Office Hours' for a first-generation college student at a large research university who has never spoken to a professor during office hours because every time they have stood outside the door they have found a reason to leave. The poem should be 30–40 lines. It should have the rhythm and breath of spoken word — places where the line breaks slow the speaker down, places where the syntax accelerates. It should carry the specific weight of class consciousness and institutional belonging without becoming an essay. Include one repeated refrain that changes meaning on each repetition. The poem should end with the door. The reader/speaker decides what happens at the door. Do not tell them.",
    "tags": ["spoken-word", "education", "identity"],
    "author": "AINOW",
    "created": "2024-01-15T16:35:00Z",
    "featured": false
  },
  {
    "id": "w-81",
    "title": "Villanelle: Insomnia",
    "prompt": "You are a formal poet. Write a villanelle — a 19-line poem with two refrains — about insomnia at 3 AM, specifically the version of insomnia where you are not worrying about anything in particular but simply cannot stop being conscious. The two refrains (A1 and A2) should be chosen with care: they should mean something different by the final quatrain than they did in the first stanza. The rhyme scheme is ABA throughout, with the two refrains repeating at alternating stanza endings and together in the final quatrain. The poem should not be about lying in bed staring at the ceiling — it should use the architecture of insomnia to say something about consciousness itself, or about the self that watches the self trying to sleep. Avoid: clock imagery, counting sheep, dawn imagery, the word 'darkness'. The form should feel inhabited, not merely demonstrated.",
    "tags": ["poetry", "formal", "villanelle"],
    "author": "AINOW",
    "created": "2024-01-15T16:40:00Z",
    "featured": false
  },
  {
    "id": "w-82",
    "title": "Prose Poem: The Last Beekeeper",
    "prompt": "You are a prose poet working in the tradition of Claudia Emerson and James Tate. Write a prose poem — a single dense paragraph of 200–250 words, without line breaks — about the last commercial beekeeper in a county in rural Iowa who is in the process of selling his hives to a conservation trust and closing a 43-year operation. The poem should not be a dirge. It should not be about climate change explicitly. It should find something specific and slightly strange about this particular situation — the bureaucracy of transferring living property, the way bees don't know they've been sold, the language in the conservation trust paperwork, or the beekeeper's hands as he signs. The poem should carry the grief of the situation while remaining on the surface of concrete detail. The last sentence should be the one where the emotion arrives, and it should arrive in a single physical image.",
    "tags": ["poetry", "prose-poem", "rural"],
    "author": "AINOW",
    "created": "2024-01-15T16:45:00Z",
    "featured": false
  },
  {
    "id": "w-83",
    "title": "Hip-Hop Verse: Generational Wealth Gap",
    "prompt": "You are a hip-hop lyricist and cultural critic. Write one full verse (16 bars) and a hook (8 bars) for a boom-bap track that explores the economic reality of a 29-year-old Black man in Atlanta who is the first in his family to own property — a condo he bought at 27 after six years of saving — but who is acutely aware that his white college friends, through family gifts and inheritances, acquired comparable assets 10 years earlier and with vastly less sacrifice. The verse should be dense with specificity: one reference to the actual mechanics of the mortgage process, one specific consumer item that was sacrificed, one moment of pride that is not uncomplicated. The hook should be anthemic but not triumphalist — it should hold both things at once. Rhyme scheme: internal rhymes, multisyllabic rhymes preferred. Do not use racial slurs. The tone is pride and clarity, not grievance.",
    "tags": ["hip-hop", "lyrics", "social-commentary"],
    "author": "AINOW",
    "created": "2024-01-15T16:50:00Z",
    "featured": false
  },
  {
    "id": "w-84",
    "title": "Sonnet: A Programmer Loses Her Job to Automation",
    "prompt": "You are a contemporary poet who writes in and against traditional forms. Write a Shakespearean sonnet (three quatrains of alternating rhyme + a couplet, ABAB CDCD EFEF GG) for a woman named Lin who has worked as a junior software developer for 4 years and has just been told her role is being automated by an AI coding assistant — a tool she herself has been using for the past year to do her job faster. The sonnet should hold this irony without being didactic about it. The first quatrain should establish her relationship with the tool — intimate, collaborative, genuinely useful. The second should turn toward the news. The third should locate the grief precisely — not in the job loss itself but in a specific, smaller thing (the morning ritual of opening the IDE, a project she had not yet finished). The couplet should be the hardest, most honest two lines — not consolation, not rage, but the specific quality of this particular loss.",
    "tags": ["poetry", "sonnet", "technology"],
    "author": "AINOW",
    "created": "2024-01-15T16:55:00Z",
    "featured": false
  },
  {
    "id": "w-85",
    "title": "Lyric Essay Fragment: On Leaving a City",
    "prompt": "You are a lyric essayist working in the tradition of Maggie Nelson and Hanif Abdurraqib. Write a 500-word lyric essay fragment — not a complete essay, but a piece that feels like a fragment from something larger, with the specific incompleteness that makes lyric essays breathe — on the experience of leaving a city you have lived in for 11 years (the city is Berlin; the writer has lived there since age 26 and is now 37, leaving for personal reasons that are not fully resolved in the piece). The fragment should move between the personal and the cultural — what Berlin means to the writer specifically, one street or neighborhood detail, one person encountered there who will not be mentioned by name, and one quality of the city's light in a particular season that cannot be found anywhere else. The fragment should resist conclusions. The last sentence should be a question that the writer is actually asking, not a rhetorical one.",
    "tags": ["lyric-essay", "personal", "place"],
    "author": "AINOW",
    "created": "2024-01-15T17:00:00Z",
    "featured": false
  },

  // --- EDITING & REFINEMENT (w-86 to w-95) ---

  {
    "id": "w-86",
    "title": "Comprehensive Line Edit: Business Writing Sample",
    "prompt": "You are a senior editor at a business publication with 20 years of experience editing corporate communication, thought leadership, and professional content. Perform a full line edit on the following paragraph, which was written by a senior manager for their company's LinkedIn page: 'In today's fast-paced and ever-changing business landscape, it is absolutely essential that organizations leverage their core competencies in order to drive synergies and deliver value-added solutions to their stakeholder ecosystem. Our team is passionate about innovation and dedicated to pushing the envelope on a daily basis to ensure that we remain at the forefront of industry best practices and thought leadership paradigms.' The edit should: strike every cliché and replace it with specific language; convert all passive constructions to active; reduce the word count by 50%; and produce a version that sounds like a real human being wrote it. After the edited version, provide an annotated list of every change made and the principle behind it (specificity, clarity, concision, or authenticity).",
    "tags": ["editing", "business-writing", "clarity"],
    "author": "AINOW",
    "created": "2024-01-15T17:05:00Z",
    "featured": true
  },
  {
    "id": "w-87",
    "title": "Passive Voice Audit and Rewrite",
    "prompt": "You are a writing coach specializing in active, direct prose. The following five sentences are written in passive voice. For each sentence: (1) identify the grammatical reason it is passive (agent omitted, agent placed in a by-phrase, overuse of 'to be' + past participle); (2) rewrite it in active voice without changing the meaning; (3) write one sentence explaining what information the passive voice was obscuring and why that matters. The five sentences: (1) 'Mistakes were made during the client onboarding process that resulted in delayed delivery.'; (2) 'The report was expected to be completed by end of quarter but has not been finalized.'; (3) 'It has been decided that the product feature will not be included in the next release.'; (4) 'Concerns have been raised about the safety of the proposed procedure.'; (5) 'The data was collected over a six-month period and analyzed using regression analysis.' After the five rewrites, write a one-paragraph general rule for when passive voice is actually justified in professional writing.",
    "tags": ["editing", "grammar", "active-voice"],
    "author": "AINOW",
    "created": "2024-01-15T17:10:00Z",
    "featured": false
  },
  {
    "id": "w-88",
    "title": "Executive Summary Compression: 600 Words to 150",
    "prompt": "You are a communications consultant. Compress the following fictional 600-word executive summary into a 150-word version that preserves all critical decisions and figures but eliminates context-setting, hedging, and repetition. The 600-word summary covers: Q3 performance review showing 12% revenue growth to $8.7M against a $9.2M target; the primary shortfall attributed to a delayed enterprise contract with Nordhem Industries ($1.4M) that is now expected to close in Q4; three strategic initiatives launched in Q3 (market expansion into Benelux, a new mid-market product tier launch at $299/month, and a partner ecosystem program with four signed implementation partners); team changes including the departure of the VP of Sales in August and an interim appointment; and a Q4 outlook projecting $10.1M revenue if the Nordhem deal closes and the mid-market tier reaches 200 subscribers by December. Write the 150-word compressed version, then list the five editorial decisions you made about what to cut and why.",
    "tags": ["editing", "compression", "executive-comms"],
    "author": "AINOW",
    "created": "2024-01-15T17:15:00Z",
    "featured": false
  },
  {
    "id": "w-89",
    "title": "Tone Transformation: Clinical to Human",
    "prompt": "You are a plain-language specialist and patient communications writer. Rewrite the following clinical discharge summary paragraph into plain language suitable for a patient with a 10th-grade reading level, while preserving all medically significant information accurately. The original: 'Patient was admitted with an acute ST-elevation myocardial infarction and underwent emergent percutaneous coronary intervention with drug-eluting stent placement in the left anterior descending artery. Ejection fraction on echocardiogram was measured at 45%, indicating mildly reduced left ventricular function. Patient was discharged on dual antiplatelet therapy, a beta-blocker, an ACE inhibitor, and a high-intensity statin. Outpatient cardiology follow-up is indicated within 14 days post-discharge. Resumption of moderate physical activity may commence six weeks post-procedure pending physician clearance.' Rewrite as a patient-facing paragraph (200 words maximum). Use plain analogies where helpful. Do not change any medical fact. Do not use jargon without immediate explanation. End with two specific action items the patient must take in the next two weeks.",
    "tags": ["editing", "healthcare", "plain-language"],
    "author": "AINOW",
    "created": "2024-01-15T17:20:00Z",
    "featured": false
  },
  {
    "id": "w-90",
    "title": "Ghost-Writing Voice Match: Founder LinkedIn Post",
    "prompt": "You are a ghostwriter who specializes in executive personal branding on LinkedIn. Analyze the voice in the following sample post written by a tech startup founder, then write a new 250-word LinkedIn post on a different topic using the exact same voice. Sample post: 'We almost ran out of money in March 2023. Three months of runway. I remember sitting in my car in the parking lot of a Target, on the phone with our lead investor, and he said the words I'd been dreading: 'We're going to need to see the unit economics before we can approve the bridge.' I didn't know if we'd survive the week. What happened next taught me more about fundraising than any course or book. We didn't pitch harder. We got honest. We showed him the ugly version of the model, told him where it broke, and said: here's exactly what we need to fix it and here's the timeline. He called back in 48 hours. Wire hit in five days.' New topic for the ghost-written post: the founder's experience hiring their first Head of Sales and getting it wrong twice before getting it right.",
    "tags": ["ghostwriting", "linkedin", "voice"],
    "author": "AINOW",
    "created": "2024-01-15T17:25:00Z",
    "featured": false
  },
  {
    "id": "w-91",
    "title": "Cliché Audit: Marketing Copy",
    "prompt": "You are a senior copywriter conducting a language audit. The following marketing copy block contains at least 12 overused phrases, dead metaphors, and meaningless claims. Identify each one, explain in one sentence why it fails to communicate, and provide a specific, concrete alternative that says something real. The copy: 'At Nexus Solutions, we're passionate about delivering best-in-class solutions that push the envelope and move the needle for our clients. Our cutting-edge technology is disrupting the industry and transforming businesses from the ground up. We're not just a vendor — we're a partner who goes above and beyond to ensure your success. With a track record of driving synergies and unlocking value across the enterprise, our team of seasoned experts is committed to helping you think outside the box and achieve your goals. We believe that innovation is in our DNA and that together, we can take your business to the next level.' After the audit, write a 60-word replacement paragraph that says something specific about what this hypothetical software company actually does.",
    "tags": ["editing", "copywriting", "cliches"],
    "author": "AINOW",
    "created": "2024-01-15T17:30:00Z",
    "featured": false
  },
  {
    "id": "w-92",
    "title": "Structural Edit: Academic Writing for General Audience",
    "prompt": "You are a popular science editor who adapts academic research for general audiences. The following abstract from a hypothetical research paper needs to be restructured for a general-audience science magazine (think Quanta or Nautilus). The original abstract: 'This study investigates the neurobiological correlates of decision fatigue in executive function tasks using fMRI methodology, focusing on prefrontal cortical activity patterns in 42 adult participants exposed to serial depletion paradigms. Results indicate significant reduction in dorsolateral prefrontal cortex (dlPFC) activation following sustained decision-making tasks (p<0.01), with corresponding increases in default mode network engagement. These findings suggest that executive resource depletion follows a discrete neurophysiological pattern distinct from general cognitive fatigue, with implications for organizational decision architecture and behavioral economics.' Produce: (1) A 150-word general-audience version that retains the scientific finding and its significance; (2) A list of five structural changes you made and the editorial principle behind each; (3) A suggested 8-word headline for the magazine article that would use this as its opening.",
    "tags": ["editing", "science-writing", "accessibility"],
    "author": "AINOW",
    "created": "2024-01-15T17:35:00Z",
    "featured": false
  },
  {
    "id": "w-93",
    "title": "Word Choice Upgrade: Weak Verbs in Narrative Writing",
    "prompt": "You are a prose style coach. The following paragraph from a short story relies heavily on weak verbs ('was', 'went', 'got', 'had', 'said') and generic nouns. Perform a targeted word-choice revision: replace every weak verb with a precise, active verb, and upgrade at least five generic nouns to specific ones — without adding words to the paragraph or changing its events or meaning. Original: 'She went to the window and looked at the street. There was a man outside who was walking quickly. She got her coat and went downstairs. When she got to the door it was raining. She went back in and said to her husband that they should take a cab. He said that was fine.' After the revised version, produce a craft note (150 words) explaining the specific revision principle applied to each major change, and why each specific word choice is an improvement over the original.",
    "tags": ["editing", "prose", "word-choice"],
    "author": "AINOW",
    "created": "2024-01-15T17:40:00Z",
    "featured": false
  },
  {
    "id": "w-94",
    "title": "Readability Rewrite: Legal Notice for Consumers",
    "prompt": "You are a plain-language specialist and legal communications writer. Rewrite the following consumer-facing legal notice to achieve a Flesch-Kincaid Grade Level of 8 or below, while preserving all legally significant information accurately. You may not omit, soften, or legally alter any material claim. The original: 'Notwithstanding any provision to the contrary contained herein, the Company reserves the right, at its sole and absolute discretion, to terminate, suspend, or modify the Service, in whole or in part, at any time and without prior notice to the User, and without incurring any liability whatsoever to the User or any third party as a result thereof. The User's continued utilization of the Service subsequent to any such modification shall constitute the User's acknowledgment and acceptance of such modification. In the event of termination, the User's right to access the Service shall immediately cease.' After the plain-language version, provide a brief note (100 words) on the three most important legal concepts preserved and how you expressed each without jargon.",
    "tags": ["editing", "legal", "plain-language"],
    "author": "AINOW",
    "created": "2024-01-15T17:45:00Z",
    "featured": false
  },
  {
    "id": "w-95",
    "title": "Developmental Feedback: First Chapter of a Business Book",
    "prompt": "You are a developmental editor at a business book publishing house. Provide developmental feedback on the following fictional first chapter of a business book written by a former Google product manager about building AI products for enterprise customers. The chapter (summarized for this prompt) opens with a personal story about the author's first week at Google, transitions to a broad history of enterprise software from the 1980s to present, spends 1,200 words defining artificial intelligence (covering Turing, neural networks, and large language models), and ends with a promise that the book will provide a framework for AI product decisions. Produce a developmental feedback letter (400 words) that: opens with what the chapter does well; identifies the three most significant structural problems with evidence and examples; proposes a specific revised structure for the chapter with a rationale; and closes with one sentence on the reader experience the chapter needs to create, which it currently does not. Write as an editor who wants the book to succeed, not as a critic.",
    "tags": ["editing", "book", "developmental"],
    "author": "AINOW",
    "created": "2024-01-15T17:50:00Z",
    "featured": false
  },

  // --- SOCIAL MEDIA & MICROCOPY (w-96 to w-100) ---

  {
    "id": "w-96",
    "title": "LinkedIn Post Suite: Climate Tech Founder",
    "prompt": "You are a LinkedIn content strategist who helps climate tech founders build authentic personal brands. Write five distinct LinkedIn post drafts — each 150–250 words — for Yemi Adeyemi, 36, co-founder of a carbon monitoring startup who has a background in environmental engineering and built the company after five years as a climate consultant who watched well-intentioned corporate sustainability pledges fail due to bad data. The five posts should cover different content formats: Post 1 (Founder Story): a specific moment of doubt in Year 1, told without inspiring-story clichés; Post 2 (Contrarian Take): a claim about carbon accounting that most people in his industry get wrong, argued with specificity; Post 3 (Behind-the-Scenes): one non-obvious thing about running a climate startup that he wishes someone had told him; Post 4 (Industry Observation): something he noticed at a climate conference last month that surprised him; Post 5 (Honest Failure): something the company tried in their go-to-market that didn't work and what they changed. Each post should end with a question that invites genuine discussion, not engagement-bait.",
    "tags": ["linkedin", "social-media", "climate-tech"],
    "author": "AINOW",
    "created": "2024-01-15T17:55:00Z",
    "featured": true
  },
  {
    "id": "w-97",
    "title": "X/Twitter Thread: The Psychology of Pricing",
    "prompt": "You are a consumer psychology researcher and newsletter writer with 180,000 followers on X. Write a 12-tweet thread titled 'Why you always pick the middle option (and how companies exploit this)' — a breakdown of the decoy effect and price anchoring for a general audience. The thread should follow this structure: Tweet 1 (Hook): one counterintuitive claim about pricing psychology that makes people stop scrolling; Tweets 2–4: the decoy effect — explain it with a real example (wine lists, streaming plan tiers, or popcorn sizes at a cinema), building the concept across three tweets without being repetitive; Tweets 5–7: price anchoring — how showing a high price first changes what feels 'reasonable', with a specific example from luxury retail or SaaS pricing; Tweets 8–10: three practical implications — how to use this knowledge when negotiating, buying a car, or choosing a software plan; Tweet 11: a counterpoint — when knowing about cognitive bias doesn't help (and why); Tweet 12 (CTA): close with a question that drives replies, not a link to a newsletter. Each tweet: under 280 characters. Number each tweet.",
    "tags": ["twitter", "thread", "psychology"],
    "author": "AINOW",
    "created": "2024-01-15T18:00:00Z",
    "featured": false
  },
  {
    "id": "w-98",
    "title": "Instagram Caption Set: Architecture Photography Account",
    "prompt": "You are a social media content writer for a photography account dedicated to mid-century modernist architecture called @concrete.and.light, which has 94,000 followers on Instagram. Write five captions — one for each of the following photographs (described below) — in the account's established voice: precise, intellectually curious, never sentimental, occasionally poetic, never hashtag-heavy. Photo 1: The exterior of the Breuer Building (now the Met Breuer) in New York on an overcast day. Photo 2: The shadow pattern cast by a brutalist parking structure in Birmingham, England, shortly before it was demolished in 2023. Photo 3: An interior shot of Pierre Koenig's Case Study House #22 at dusk, the city lights visible through the full-width glass wall. Photo 4: A close-up of weathered concrete on Oscar Niemeyer's National Congress in Brasília. Photo 5: An aerial shot of Habitat 67 in Montreal during winter. Each caption should be 80–120 words. No filler phrases. Each should tell the reader something non-obvious about the building, architect, or moment. Include 4–6 relevant hashtags at the end of each caption only.",
    "tags": ["instagram", "photography", "architecture"],
    "author": "AINOW",
    "created": "2024-01-15T18:05:00Z",
    "featured": false
  },
  {
    "id": "w-99",
    "title": "App Microcopy Suite: Onboarding Flow",
    "prompt": "You are a UX writer specializing in financial wellness apps. Write a complete microcopy suite for the onboarding flow of a savings app called Vault that helps users automate savings toward specific goals (e.g., emergency fund, vacation, home deposit). The target user is 25–40, financially literate but inconsistent about saving, and has abandoned savings apps before. The microcopy suite should include: (1) Welcome screen headline and subtext (headline max 7 words, subtext max 18 words); (2) Three permission request screens — notifications, bank connection, and budget access — each with a headline, one-sentence explanation, and a primary button label; (3) First goal-setting prompt headline and helper text; (4) Empty state message for when the user has set a goal but made no contributions yet (should feel encouraging, not guilt-inducing); (5) First milestone celebration message (user has saved their first $100 toward a goal); (6) One error message for a failed bank sync (honest, non-technical, actionable). All copy should sound human. Avoid exclamation marks except in the milestone message.",
    "tags": ["ux-writing", "fintech", "microcopy"],
    "author": "AINOW",
    "created": "2024-01-15T18:10:00Z",
    "featured": false
  },
  {
    "id": "w-100",
    "title": "Newsletter Subject Line and Preview Text: 20 Pairs",
    "prompt": "You are an email marketing specialist who writes newsletter subject lines for a weekly B2B newsletter called The Operator, read by operations leaders, COOs, and chiefs of staff at companies with 50–500 employees. Write 20 subject line + preview text pairs for 20 different newsletter issues. The topics are: (1) decision fatigue in leadership teams, (2) why most OKR implementations fail by week six, (3) the real cost of a missed hire, (4) async communication done wrong, (5) how to run a CEO weekly review, (6) the difference between a COO and a chief of staff, (7) why your onboarding process is losing new hires in week three, (8) pricing strategy mistakes early-stage ops teams make, (9) board meeting preparation, (10) the hidden cost of tool sprawl, (11) what great operational documentation looks like, (12) when to hire generalists vs. specialists, (13) the problem with 'culture fit' in hiring, (14) building an ops team that doesn't depend on you, (15) stakeholder communication failures, (16) running strategy off-sites that actually work, (17) the metrics ops leaders should track but don't, (18) offboarding done well, (19) scaling without losing quality, (20) when to say no to a new initiative. Subject line: max 52 characters. Preview text: max 85 characters. No emoji. No 'exclusive' or 'limited'.",
    "tags": ["email", "newsletter", "b2b"],
    "author": "AINOW",
    "created": "2024-01-15T18:15:00Z",
    "featured": false
  }

];
  __exports.writingPrompts = writingPrompts;
})();