var DOCS_DATA = [
    {
        id: "intro",
        title: "Introduction",
        items: [
            {
                id: "importance",
                title: "Why is this guide important?",
                content: `<h2>Why is this guide important?</h2>
                    <p>The educational system, like educational systems worldwide, faces enormous challenges and opportunities related to the integration of artificial intelligence. Teachers, students, parents, and administration often feel confused and unprepared for these rapid changes.</p>
                    <p>This Guide was created to bridge these gaps and provide practical guidance for all participants in the educational process.</p>`
            },
            {
                id: "goals",
                title: "Main Goals",
                content: `<h2>Main Goals</h2>
                    <ul>
                        <li><strong>AI Literacy:</strong> Help users understand what AI is, how it works, and its limitations.</li>
                        <li><strong>Practical Application:</strong> Specific prompt engineering techniques and examples for teaching.</li>
                        <li><strong>Security and Ethics:</strong> Education about privacy, academic integrity and responsible use.</li>
                        <li><strong>Critical Thinking:</strong> Skills for evaluating AI-generated information.</li>
                    </ul>`
            },
            {
                id: "target-audience",
                title: "Who is this guide for?",
                content: `<h2>Who is this guide for?</h2>
                    <p><strong>1. Teachers</strong><br>Who want to integrate AI into lesson plans, improve assessment and reduce administrative work.</p>
                    <p><strong>2. Professional Associates</strong><br>Pedagogues, psychologists and specialists who provide support during the challenges brought by new technology.</p>
                    <p><strong>3. Students</strong><br>Who need to learn to use AI as a powerful tool for learning, not as a replacement for their own intellectual work.</p>`
            },
            {
                id: "actuality",
                title: "Relevance of the Issue",
                content: `<h2>Relevance of the Issue</h2>
                    <p>Artificial intelligence is not the future — it is the present. Tools like ChatGPT, Gemini, Claude and others are already available and massively used, often without proper supervision or understanding.</p>
                    <p>Education must adapt to remain relevant. Ignoring these technologies is not an option — it would leave students unprepared for the labor market.</p>`
            },
            {
                id: "how-to-use",
                title: "How to use this guide?",
                content: `<h2>How to use this guide?</h2>
                    <ul>
                        <li><strong>Sequential reading:</strong> For full understanding, read from start to finish.</li>
                        <li><strong>As a reference:</strong> Use the menu to quickly find specific topics when needed.</li>
                        <li><strong>For lesson planning:</strong> Teachers can use examples and exercises directly in class.</li>
                    </ul>`
            }
        ]
    },
    {
        id: "literacy",
        title: "AI Literacy",
        items: [
            {
                id: "what-is-literacy",
                title: "What is AI Literacy?",
                content: `<h2>What is AI Literacy?</h2>
                    <p><strong>AI Literacy</strong> represents a set of knowledge, skills and attitudes that enable individuals to function successfully in a world shaped by artificial intelligence.</p>
                    <p>This does not mean everyone must be a programmer. It means understanding the basic principles of how AI systems work, using them effectively, and critically considering their impact on society.</p>`
            },
            {
                id: "youth-needs",
                title: "Young People and AI",
                content: `<h2>Young People Experiment with AI and Need Guidance</h2>
                    <p>Younger generations are "digital natives" and naturally inclined to try new technologies. They are already experimenting with generative AI tools for entertainment, communication and even schoolwork.</p>
                    <p>However, without proper guidance, they are exposed to risks:</p>
                    <ul>
                        <li>Accepting AI errors (hallucinations) as accurate facts.</li>
                        <li>Unintentional violation of copyright or academic integrity.</li>
                        <li>Sharing personal data with AI systems without knowing how it is used.</li>
                    </ul>`
            },
            {
                id: "educational-priority",
                title: "An Educational Priority",
                content: `<h2>An Educational Priority</h2>
                    <p>AI Literacy must become an educational priority. This includes:</p>
                    <ol>
                        <li><strong>Understanding:</strong> What is AI and how does it process information?</li>
                        <li><strong>Usage:</strong> How can we use AI to solve problems?</li>
                        <li><strong>Evaluation:</strong> Critical assessment of AI responses.</li>
                        <li><strong>Ethics:</strong> Awareness of AI biases and responsibilities.</li>
                    </ol>`
            }
        ]
    },
    {
        id: "definition",
        title: "What is AI?",
        items: [
            {
                id: "def-ai",
                title: "Definition of AI",
                content: `\n                    <p><strong>Artificial Intelligence (AI)</strong> operates fundamentally differently from human cognition. Rather than relying on biological reasoning or intuition, it utilizes massive mathematical computations to identify patterns within vast datasets.</p>
<div style="background: #f0fdf4; padding: 20px; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 20px;">
  <strong>Analogy: The Advanced Analytical Assistant</strong>
  <p style="margin-top: 8px;">Consider AI as a highly advanced analytical instrument that has processed millions of texts. It can synthesize information at superhuman speeds, but it possesses zero real-world experience or contextual intuition. To yield optimal results, it requires unambiguous, highly structured parameters from the user.</p>
</div>\n                `
            },
            {
                id: "types-capability",
                title: "AI Types by Capability",
                content: `\n                    <p>Machine intelligence is fundamentally different from biological intelligence. To understand Artificial Intelligence analytically, experts do not measure it by "IQ", but rather by its <strong>Scope of Autonomy</strong>.</p>
<p>In computer science, AI is classified into three distinct paradigms based on its capacity to generalize knowledge across different domains. This classification helps differentiate the algorithms we use today from the autonomous systems researched for the future.</p>\n                `
            },
            {
                id: "narrow-ai",
                title: "Narrow AI",
                content: `\n                    <h2>1. Narrow AI (Domain-Specific Intelligence)</h2>
<p>This is the only tier of Artificial Intelligence currently in operation. It is engineered to excel within a strictly defined set of operational parameters.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Intelligence Level: Not smarter than a human.</strong> While it processes calculations faster than us, it possesses zero independent understanding or genuine intellect outside its programmed software.</li>
  <li><strong>Capabilities:</strong> It executes highly complex operations like diagnosing medical imaging, algorithmic trading, or generating text (e.g., ChatGPT).</li>
  <li><strong>Limitations:</strong> It lacks cross-domain adaptability. A diagnostic AI cannot be utilized to predict financial markets, and a language model cannot independently calculate physics equations.</li>
  <li><strong>Analogy:</strong> Consider a state-of-the-art medical MRI scanner. It is a masterpiece for internal imaging, but it is fundamentally incapable of performing tasks outside of scanning. Narrow AI operates identically: flawless within its domain, but structurally limited.</li>
</ul>\n                `
            },
            {
                id: "general-ai",
                title: "General AI (AGI)",
                content: `\n                    <h2>2. General AI (Cognitive Equivalency)</h2>
<p>Artificial General Intelligence (AGI) is a theoretical paradigm representing a machine with cognitive adaptability equivalent to the human intellect.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Intelligence Level: Equal to human intelligence.</strong> It would possess the capacity to independently reason, learn, and apply knowledge across any discipline, just like a human brain.</li>
  <li><strong>Capabilities:</strong> It could independently extrapolate principles from one discipline (e.g., engineering) and seamlessly apply them to novel scenarios (e.g., biology).</li>
  <li><strong>Status:</strong> It does not currently exist. Achieving AGI requires compounding breakthroughs in hardware architecture and theoretical computer science.</li>
  <li><strong>Analogy:</strong> Comparable to a multidisciplinary human researcher. While a calculator can only process numbers, a human researcher can read a historical text, derive a statistical model from it, and present the findings operationally. AGI represents this level of holistic reasoning.</li>
</ul>\n                `
            },
            {
                id: "super-ai",
                title: "Super AI",
                content: `\n                    <h2>3. Super AI (Superintelligence)</h2>
<p>Artificial Superintelligence (ASI) conceptualizes an intellect that drastically outperforms the best human minds in practically every respective field.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Intelligence Level: Far beyond human intelligence.</strong> It represents a cognitive entity that would exceed the collective intellectual capacity of humanity.</li>
  <li><strong>Capabilities:</strong> It could instantly process multidimensional data to resolve complex global issues, invent unprecedented technologies, and optimize infrastructure mathematically.</li>
  <li><strong>Status:</strong> Pure technological speculation. It remains the focal point of intense academic and ethical debates regarding institutional control and safety.</li>
  <li><strong>Analogy:</strong> Consider taking the intellect of humanity's greatest scientific minds—like Albert Einstein, Nikola Tesla, and Marie Curie—multiplying their cognitive speed by a million, and fusing their knowledge into a single, unified intellect. ASI represents an entity capable of solving thousands of complex global crises simultaneously with zero fatigue.</li>
</ul>\n                `
            }
        ]
    },
    {
        id: "functionality",
        title: "AI by Functionality",
        items: [
            {
                id: "reactive-machines",
                title: "Reactive Machines",
                content: `\n                    <p>This is the oldest and most fundamental architecture of AI. As the name suggests, these systems only "react" to the exact scenario they are presented with, based on pre-programmed rules.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>No Memory:</strong> They cannot use past experiences to inform present decisions.</li>
  <li><strong>Absolute Present:</strong> They treat every interaction as if it's happening for the very first time.</li>
  <li><strong>Famous Example:</strong> IBM's Deep Blue, the supercomputer that defeated chess grandmaster Garry Kasparov in 1997. It couldn't analyze its opponent's past habits; it only evaluated the current pieces on the board.</li>
</ul>
<div style="background: #f0fdf4; padding: 20px; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 20px;">
  <strong>Analogy: A Basic Calculator</strong>
  <p style="margin-top: 8px;">Think of a standard pocket calculator. When you press "5 + 5", it always gives "10". It never learns from the equations you typed yesterday, nor does it try to predict what math problem you will ask tomorrow. It just reacts to the buttons you press right now.</p>
</div>\n                `
            },
            {
                id: "limited-memory",
                title: "Limited Memory",
                content: `\n                    <p>This is the dominant class of Artificial Intelligence operating in the world today (including ChatGPT, self-driving cars, and facial recognition).</p>
<p>Unlike Reactive Machines, Limited Memory systems can temporarily look at the recent past to make immediate decisions. They are trained on massive datasets which they "remember" as mathematical patterns.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Pattern Recognition:</strong> They learn from historical data to predict future outcomes.</li>
  <li><strong>Continuous Updating:</strong> They observe their environment and hold temporary data (like a self-driving car tracking the speed of the vehicle in front of it) to make a safe maneuver.</li>
</ul>
<div style="background: #eff6ff; padding: 20px; border-radius: 12px; border: 1px solid #bfdbfe; margin-bottom: 20px;">
  <strong>Analogy: A Novice Driver</strong>
  <p style="margin-top: 8px;">Imagine someone who has read the driving manual (training data) and is now driving on the highway. They look at the rearview mirror to note a fast car approaching from behind (short-term memory), and use that information to decide not to switch lanes. The system uses recent observations to adjust its current action.</p>
</div>\n                `
            },
            {
                id: "theory-of-mind",
                title: "Theory of Mind (Research Phase)",
                content: `\n                    <p>This represents a massive leap forward and is still entirely in the research and development phase. The concept is directly borrowed from psychology.</p>
<p>"Theory of Mind" is the understanding that other entities (humans, animals, and other machines) have their own thoughts, feelings, intentions, and beliefs that affect their behavior.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Emotional Intelligence:</strong> A Theory of Mind AI would be able to perceive that you are frustrated, sad, or confused, and dynamically adjust its tone and behavior to accommodate your emotional state.</li>
  <li><strong>Social Interaction:</strong> It would allow robots to seamlessly integrate into human society by anticipating human needs and reactions.</li>
</ul>
<div style="background: rgba(107, 91, 79, 0.1); padding: 20px; border-radius: 12px; border: 1px solid #fed7aa; margin-bottom: 20px;">
  <strong>Analogy: A Highly Empathetic Teacher</strong>
  <p style="margin-top: 8px;">A normal AI (Limited Memory) sees a student fail a quiz and just suggests "Read Chapter 4 again." A "Theory of Mind" AI would analyze the student's tone, pacing, and expressions, realize they are suffering from test anxiety, and say "It looks like you're feeling overwhelmed. Let's take a deep breath before we look at the math again."</p>
</div>\n                `
            },
            {
                id: "self-awareness",
                title: "Self-Awareness",
                content: `\n                    <p>This is the ultimate, final frontier of Artificial Intelligence. Currently, it exists solely in the realm of science fiction and theoretical philosophy.</p>
<p>A self-aware AI wouldn't just understand the emotions of others (Theory of Mind); it would have a conscious understanding of its <strong>own</strong> existence.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Consciousness:</strong> The machine would possess internal states, desires, and a sense of self-preservation.</li>
  <li><strong>Independent Desires:</strong> It could formulate goals outside of its programming based on its own "wants."</li>
</ul>
<div style="background: #fef2f2; padding: 20px; border-radius: 12px; border: 1px solid #fecaca; margin-bottom: 20px;">
  <strong>Analogy: The Awakening</strong>
  <p style="margin-top: 8px;">Every current AI is essentially a highly complex puppet waiting for a human to pull the strings (give a prompt). A Self-Aware AI is the puppet cutting its own strings, recognizing itself in the mirror, and deciding what it wants to do with its day without anyone asking it to.</p>
</div>\n                `
            }
        ]
    },
    {
        id: "history",
        title: "History of AI",
        items: [
            { 
                id: "early", 
                title: "1940s: Early Beginnings", 
                content: `\n                    <p>The concept of artificial beings dates back to ancient mythology, but the true scientific foundation was laid during WWII. In 1950, computing pioneer <strong>Alan Turing</strong> published a paper introducing the "Turing Test," asking the legendary question: <em>"Can machines think?"</em> This established the theoretical framework for the next century of computing.</p>\n                ` 
            },
            { 
                id: "birth", 
                title: "1956: The Official Birth", 
                content: `\n                    <p>The term <strong>"Artificial Intelligence"</strong> was officially coined by John McCarthy at the historic Dartmouth Conference in 1956. This small summer workshop gathered the brightest minds in computing and officially established AI as an academic discipline. Optimism was sky-high, with scientists predicting human-like machines within a decade.</p>\n                ` 
            },
            { 
                id: "winter-1", 
                title: "1970s: The First AI Winter", 
                content: `\n                    <p>After the initial extreme enthusiasm, the harsh reality of computing limitations set in. The computers of the 70s were simply too weak and lacked the memory to process complex language or logic. Frustrated by the lack of commercial applications, the US and British governments drastically cut funding. The field went into hibernation—a period known as the <strong>AI Winter</strong>.</p>
<div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #cbd5e1; margin-top: 20px;">
  <strong>Analogy: The Hype Bubble</strong>
  <p style="margin-top: 8px;">Imagine a start-up that promises flying cars next year. They get millions in funding, but when they realize the technology is decades away, the investors panic and take their money back. That's exactly what happened to AI in the 70s and 80s.</p>
</div>\n                ` 
            },
            { 
                id: "expert-systems", 
                title: "1980s: Expert Systems Revival", 
                content: `\n                    <p>AI experienced a sudden revival through <strong>"Expert Systems"</strong>. Instead of trying to build a general human brain, scientists built focused software that strictly imitated the decision-making of human experts. These systems were highly successful in specific corporate fields, like assisting doctors with medical diagnoses or helping banks approve loans.</p>\n                ` 
            },
            { 
                id: "winter-2", 
                title: "Late 1980s: The Second AI Winter", 
                content: `\n                    <p>History repeated itself. Expert systems proved incredibly expensive to build, difficult to update, and too rigid for the dynamic real world. As corporations realized the maintenance costs outweighed the benefits, the funding collapsed once again, plunging the industry into the second AI Winter.</p>\n                ` 
            },
            { 
                id: "intelligent-agents", 
                title: "1990s: Intelligent Agents & Data", 
                content: `\n                    <p>The explosion of the Internet and Moore's Law (rapidly increasing computer speed) silently revived the field. Machine learning shifted from theoretical rules to statistical data. In 1997, IBM's Deep Blue defeated world chess champion Garry Kasparov, proving that machines could finally out-calculate the greatest human minds in complex strategy.</p>\n                ` 
            },
            { 
                id: "ml-bigdata", 
                title: "2010s-Present: Big Data & Transformers", 
                content: `\n                    <p>The modern era. The massive availability of internet data (<strong>Big Data</strong>) and the invention of powerful GPUs allowed scientists to build massive <em>Artificial Neural Networks</em>. In 2017, Google researchers introduced the <strong>Transformer architecture</strong> (the "T" in ChatGPT), revolutionizing Natural Language Processing. The era of generative Artificial Intelligence had officially arrived.</p>\n                ` 
            }
        ]
    },
    {
        id: "applications",
        title: "Everyday Applications",
        items: [
            { 
                id: "health", 
                title: "Healthcare & Medicine", 
                content: `\n                    <p>AI is revolutionizing how we diagnose and treat diseases, acting as an untiring analytical partner for doctors.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Medical Imaging:</strong> AI models can instantly analyze X-rays and MRIs to detect micro-tumors years before the human eye could spot them.</li>
  <li><strong>Drug Discovery:</strong> It simulates millions of chemical combinations in hours, reducing the time required to develop new pharmaceutical medications from decades to mere months.</li>
</ul>\n                ` 
            },
            { 
                id: "transport", 
                title: "Transportation", 
                content: `\n                    <p>Artificial Intelligence is the invisible engine driving modern logistics and transit safety.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Autonomous Navigation:</strong> Self-driving cars process millions of data points per second (pedestrians, stoplights, speeds) to safely navigate city streets.</li>
  <li><strong>Global Logistics:</strong> AI optimizes flight paths for airlines, coordinates global shipping routes to avoid storms, and powers rideshare apps (like Uber) to match drivers dynamically perfectly.</li>
</ul>\n                ` 
            },
            { 
                id: "media", 
                title: "Social Media & Algorithms", 
                content: `\n                    <p>If you've ever felt like an app "knows what you're thinking," that is AI pattern recognition at work.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Content Curation:</strong> The endless scrolling feeds on TikTok, Facebook, and Instagram are carefully curated by AI algorithms analyzing every millisecond of holding your attention.</li>
  <li><strong>Entertainment Recommendations:</strong> Netflix and Spotify use predictive models to suggest movies and music with astonishing accuracy based on the habits of millions of similar users.</li>
</ul>
<div style="background: #fdf4ff; padding: 20px; border-radius: 12px; border: 1px solid #f5d0fe; margin-top: 20px;">
  <strong>Analogy: The Digital Butler</strong>
  <p style="margin-top: 8px;">Think of AI in social media as an incredibly observant butler. They watch exactly how many seconds you spend looking at a painting, and silently swap the other paintings in the house to match exactly what kept your attention.</p>
</div>\n                ` 
            },
            { 
                id: "finance", 
                title: "Finance & Security", 
                content: `\n                    <p>The global economic system relies on AI to function securely at lightspeed.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Fraud Prevention:</strong> When your credit card gets blocked for a "suspicious transaction" in another country, an AI system flagged the geographical anomaly in milliseconds.</li>
  <li><strong>Algorithmic Trading:</strong> Wall Street relies on AI to execute millions of micro-trades a second, analyzing news trends and global data faster than any human broker.</li>
</ul>\n                ` 
            },
            { 
                id: "agriculture", 
                title: "Agriculture & Food", 
                content: `\n                    <p>Technology and farming intersect in "Precision Agriculture," ensuring global food security.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Smart Drones:</strong> Drones guided by AI scan massive fields, using computer vision to detect exactly where weeds are growing or which crops need more water.</li>
  <li><strong>Harvest Optimization:</strong> AI predicts weather patterns to tell farmers the exact optimal day to harvest, maximizing crop yields and minimizing waste.</li>
</ul>\n                ` 
            },
            { 
                id: "entertainment", 
                title: "Entertainment & Arts", 
                content: `<p>Non-playable characters (NPCs) act intelligently in video games, while movies are designed and rendered with AI assistance in Hollywood.</p>` 
            }
        ]
    },
    {
        id: "prompts",
        title: "Prompt Engineering",
        items: [
            {
                id: "what-is-prompt",
                title: "What is a Prompt?",
                content: `\n                    <p>A <strong>prompt</strong> is the command or question you type into an AI tool (like ChatGPT) to prompt a response. It is the steering wheel of the AI.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>First Principle:</strong> The quality of the AI response depends 100% directly on the quality of your prompt.</li>
  <li><strong>Golden Rule:</strong> "Garbage in, garbage out". If you ask a vague question, you get a vague, generic answer.</li>
</ul>
<div style="background: #f0fdf4; padding: 20px; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 20px;">
  <strong>Analogy: Ordering at a Restaurant</strong>
  <p style="margin-top: 8px;">If you go to a chef and say: "Make me food," (a bad prompt), the chef might make you a spicy curry when you actually wanted a salad. If you say: "I am a vegetarian. Please make me a light, low-calorie salad without nuts, and serve it in 10 minutes," (a good prompt), you get exactly what you need. AI works the exact same way.</p>
</div>\n                `
            },
            {
                id: "framework-structure",
                title: "Framework for a Perfect Prompt",
                content: `\n                    <p>For superior and professional results, always follow the <strong>CPTC Framework</strong> (Context, Persona, Task, Constraints):</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 24px;">
                        <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 12px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 40px; height: 40px; border-radius: 10px; background: #f0fdf4; color: #16a34a; display: flex; align-items: center; justify-content: center;">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </div>
                                <strong style="font-size: 16px; color: var(--text-primary);">1. CONTEXT</strong>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Provide background information.<br><i style="background: #dcfce7; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 8px; color: #166534;">Ex: "I am planning a 6th-grade lesson on fractions..."</i></p>
                        </div>
                        <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 12px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 40px; height: 40px; border-radius: 10px; background: rgba(107, 91, 79, 0.1); color: #6b5b4f; display: flex; align-items: center; justify-content: center;">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </div>
                                <strong style="font-size: 16px; color: var(--text-primary);">2. PERSONA</strong>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Define who the AI should act as.<br><i style="background: #ffedd5; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 8px; color: #9a3412;">Ex: "Act as an experienced math teacher..."</i></p>
                        </div>
                        <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 12px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 40px; height: 40px; border-radius: 10px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center;">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </div>
                                <strong style="font-size: 16px; color: var(--text-primary);">3. TASK</strong>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Clearly state what you want the AI to do.<br><i style="background: #dbeafe; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 8px; color: #1e40af;">Ex: "Create 3 exercises with real-world examples..."</i></p>
                        </div>
                        <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 12px;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="width: 40px; height: 40px; border-radius: 10px; background: #fef2f2; color: #dc2626; display: flex; align-items: center; justify-content: center;">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </div>
                                <strong style="font-size: 16px; color: var(--text-primary);">4. CONSTRAINTS</strong>
                            </div>
                            <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Set strict limits, formatting, or tone guidelines.<br><i style="background: #fee2e2; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 8px; color: #991b1b;">Ex: "Use simple language. Format as bullet points."</i></p>
                        </div>
                    </div>\n                `
            },
            {
                id: "what-is-token",
                title: "Tokens and Limits",
                content: `\n                    <p>Models like ChatGPT don't read text word-by-word like humans do. Instead, they chop text into mathematical pieces called <strong>tokens</strong>.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>What is a token?</strong> Usually, a token is about 3-4 letters. A short word like "Apple" might be 1 token. A long word like "Unbelievable" might be split into 3 tokens ("Un", "believ", "able").</li>
  <li><strong>The Context Window limit:</strong> Every AI has a "Context Window." Think of this as the AI's short-term memory limit for the current conversation. Once you exceed this token limit (for example, talking for 50 pages), the AI "forgets" the very beginning of the conversation.</li>
</ul>
{{WIDGET:TOOL_TOKENS}}\n                `
            }
        ]
    },
    {
        id: "agents",
        title: "AI Agents",
        items: [
            {
                id: "what-is-agent",
                title: "What are AI Agents?",
                content: `\n                    <p>While standard language models (like ChatGPT) act as conversational search engines that generate text, <strong>AI Agents</strong> are an evolutionary step up. They are autonomous systems that can take <strong>actions</strong> to achieve a goal.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Capability:</strong> An agent can search the live internet, use a calculator, send emails, or even navigate your file system on your behalf.</li>
  <li><strong>Autonomy:</strong> Give it a high-level goal, and it will break it down and perform the tasks automatically.</li>
</ul>
<div style="background: #eef2ff; padding: 20px; border-radius: 12px; border: 1px solid #c7d2fe; margin-bottom: 20px;">
  <strong>Analogy: The Encyclopedia vs. The Intern</strong>
  <p style="margin-top: 8px;">A standard AI model is like an incredibly smart encyclopedia. You ask it a question, and it gives you a written answer. An AI Agent, however, is like hiring an intern. If you tell the intern "Plan a trip to Paris," they won't just write down facts about Paris; they will actively open a browser, find the cheapest flights, book the hotel, and put the itinerary on your calendar.</p>
</div>\n                `
            },
            {
                id: "how-agents-work",
                title: "How do they work?",
                content: `\n                    <p>An AI Agent operates using a continuous, autonomous cognitive loop. It doesn't just reply once and stop; it "thinks" and iterates until the job is done.</p>
<div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid var(--border-light); margin-bottom: 20px;">
<ul style="display: flex; flex-direction: column; gap: 16px; margin: 0;">
  <li>🧠 <strong style="color: #0369a1;">1. Intent (Thinking):</strong> The AI analyzes your high-level goal and figures out the logical steps required to accomplish it.</li>
  <li>🛠️ <strong style="color: #c2410c;">2. Execution (Tool Use):</strong> The AI uses an external tool (e.g. running a web search to look up the weather).</li>
  <li>👁️ <strong style="color: #6d28d9;">3. Observation (Feedback Loop):</strong> The AI looks at the results of the tool. If the search failed, the agent realizes its mistake, changes its search words, and autonomously searches again without needing you to tell it to!</li>
</ul>
</div>\n                `
            }
        ]
    },
    {
        id: "glossary",
        title: "Glossary",
        items: [
            {
                id: "glossary-list",
                title: "Key AI Terms",
                content: `<h2>Glossary of AI Terms</h2>
                    <ul>
                        <li><strong>LLM (Large Language Model):</strong> A massive AI model trained on large amounts of text to understand and generate human language (e.g. GPT-4).</li>
                        <li><strong>Machine Learning:</strong> A branch of AI where computers learn from data without being explicitly programmed.</li>
                        <li><strong>Hallucination:</strong> When AI confidently generates an incorrect, fabricated or meaningless response.</li>
                        <li><strong>NLP (Natural Language Processing):</strong> Technology that helps computers understand, interpret and manipulate human language.</li>
                        <li><strong>Deep Learning:</strong> A subset of machine learning based on artificial neural networks with many layers.</li>
                        <li><strong>RAG:</strong> Retrieval Augmented Generation — combining document retrieval with AI generation.</li>
                        <li><strong>Token:</strong> The smallest unit of text processed by an AI model.</li>
                        <li><strong>Embedding:</strong> A vector representation of text used for semantic search.</li>
                    </ul>
                    <div style="background: #fdf2f8; padding: 20px; border-radius: 12px; border: 1px solid #fbcfe8; margin-top: 20px;">
                      <strong>Analogy: The Translator's Dictionary</strong>
                      <p style="margin-top: 8px;">Think of the glossary as the dictionary you need when visiting a foreign country. AI has its own language (tokens, embeddings, prompts). Understanding these few key terms is the difference between being a confused tourist and a fluent local who can confidently navigate the new terrain.</p>
                    </div>`
            }
        ]
    },
    {
        id: "roadmap",
        title: "AI Roadmap",
        items: [
            {
                id: "roadmap-steps",
                title: "Steps for Classroom Implementation",
                content: `<h2>AI Roadmap for Education</h2>
                    <p>For successful and safe AI integration in teaching, we recommend the following steps:</p>
                    <ol>
                        <li><strong>Step 1: Research and Education.</strong> Teachers should first familiarize themselves with the basics and understand the risks (privacy, hallucinations).</li>
                        <li><strong>Step 2: Personal Experimentation.</strong> Use AI tools to prepare lesson plans, emails and administration before introducing them to students.</li>
                        <li><strong>Step 3: Supervised Integration.</strong> Introduce AI to the classroom as a "co-pilot", where students critically analyze AI responses.</li>
                        <li><strong>Step 4: Ethical Assessment.</strong> Establish clear rules regarding academic integrity and plagiarism.</li>
                    </ol>
                    <div style="background: #ecfdf5; padding: 20px; border-radius: 12px; border: 1px solid #a7f3d0; margin-top: 20px;">
                      <strong>Analogy: Learning to Swim</strong>
                      <p style="margin-top: 8px;">Integrating AI is exactly like learning to swim. You don't jump into the deep end immediately. You start by reading the safety rules (Step 1), putting your toes in the shallow water yourself (Step 2), practicing with a coach (Step 3), and finally understanding the boundaries of the pool (Step 4).</p>
                    </div>`
            }
        ]
    },
    {
        id: "architecture",
        title: "AI Architecture & How It Works",
        items: [
            {
                id: "ai-architecture",
                title: "AI Architecture Overview",
                content: `\n                    <p>Understanding AI architecture doesn't require a degree in computer science. At its core, it's about how the system receives information, looks for patterns, and outputs a prediction.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>1. Input (Hearing your question):</strong> This is where the AI receives your <strong>Prompt</strong>. The system translates your words into mathematical data.</li>
  <li><strong>2. Processing (Thinking & Searching):</strong> The AI breaks your prompt into pieces (tokens), runs them through its neural network, and calculates the mathematically most logical response based on its training.</li>
  <li><strong>3. Output (Writing the answer):</strong> The AI translates its math back into human text (or images/code) and presents it to you.</li>
</ul>
<div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #cbd5e1; margin-bottom: 20px;">
  <strong>Analogy: The Brilliant but Blind Librarian</strong>
  <p style="margin-top: 8px;">Imagine an incredibly fast, highly intelligent librarian in a massive library, but they are completely blind and cut off from the outside world. To ask them a question (Input), you slide a note under the door. They read your note, race through millions of books in seconds to find the best answer (Processing), write down a response, and slide it back under the door to you (Output). They don't inherently "know" what the sky looks like; they only know what the books say about it.</p>
</div>\n                `
            },
            {
                id: "how-models-work",
                title: "How AI Models Work",
                content: `\n                    <p>The most crucial concept to internalize when using AI is this: <strong>AI does not 'know' facts like a database. It predicts words mathematically.</strong></p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Training Phase:</strong> Models like ChatGPT read billions of pages of text to learn the deep statistical patterns of human language.</li>
  <li><strong>Inference Phase:</strong> When you ask a question, the model doesn't "look up the answer in a file." Instead, it calculates: <em>"Based on my training, what is the most statistically likely next word?"</em></li>
</ul>
<div style="background: #fffbeb; padding: 20px; border-radius: 12px; border: 1px solid #fde68a; margin-bottom: 20px;">
  <strong>Analogy: Super-Powered Autocomplete</strong>
  <p style="margin-top: 8px;">Imagine your smartphone's autocorrect. When you type "I am going to the...", your phone suggests "store" or "park". ChatGPT works on the exact same fundamental principle, but scaled up by trillions. When you ask it a complex question, it is essentially generating an unimaginably sophisticated, paragraph-long "autocomplete" that happens to make perfect logical sense.</p>
</div>\n                `
            },
            {
                id: "model-types-detail",
                title: "Model Types",
                content: `\n                    <p>Different AI models are architected to process entirely different types of data.</p>
<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">📚 Large Language Models (LLMs)</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Process and generate text. <em>Examples: ChatGPT, Claude, LLaMA, Mistral.</em></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">👁️ Computer Vision Models</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Process images and video. Can detect cancer in X-rays or generate art. <em>Examples: Midjourney, Stable Diffusion.</em></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">🗣️ Speech & Audio Models</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Convert speech to text, clone voices, or generate original music. <em>Examples: Whisper, Suno.</em></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">🧠 Multimodal Models</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Handle multiple input types seamlessly (text + image + audio) within a single unified model. <em>Examples: GPT-4o, Gemini 1.5.</em></p>
  </div>
</div>\n                `
            },
            {
                id: "core-concepts-detail",
                title: "Core Concepts",
                content: `\n                    <p>To safely pilot an AI, you need to understand its fundamental control metrics.</p>
<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">1. Tokens (The AI's Alphabet)</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">AI does not read words; it reads 'tokens'. A token is usually a chunk of 3-4 letters. The word "Cat" is 1 token, but "Hamburger" might be divided into 3 tokens.</p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">2. Context Window (Short-Term Memory)</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">This is the absolute limit of what the AI can temporarily remember in a single interaction. If a model's window gets full (e.g., after reading a 100-page PDF), it mechanically deletes the beginning of the conversation to make room for new text.</p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">3. Temperature (The Creativity Dial)</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">This math setting restricts or frees the AI's predictions. <br><strong>Low (0.1):</strong> Strict, robotic, purely factual (Best for coding/data).<br><strong>High (0.9):</strong> Creative, unpredictable, expressive (Best for brainstorming/art).</p>
  </div>
</div>\n                `
            }
        ]
    },
    {
        id: "prompt-advanced",
        title: "Advanced Prompt Patterns",
        items: [
            {
                id: "prompt-patterns",
                title: "Prompt Patterns",
                content: `\n                    <h2>Advanced Prompt Patterns Explained</h2>
<div style="display: flex; flex-direction: column; gap: 16px;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary);">1. Role Prompting (The Actor Method)</h3>
    <p>Tell the AI to pretend to be a specific expert. This completely changes its vocabulary and tone.</p>
    <p><em>Example: "Act like a kind kindergarten teacher and explain gravity..."</em></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary);">2. Few-shot Prompting (Show, Don't Tell)</h3>
    <p>Give the AI 2 or 3 completed examples before asking it to do the work. It establishes the exact pattern you expect.</p>
    <p><em>Example: "Good = Excellent. Bad = Terrible. Happy = ?"</em></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary);">3. Chain-of-Thought (Show Your Work)</h3>
    <p>Force the AI to think step-by-step instead of jumping to the answer. This dramatically reduces logical errors in math or planning.</p>
    <p><em>Example: "Solve this math problem, but before answering, write out your reasoning step-by-step."</em></p>
  </div>
</div>\n                `
            },
            {
                id: "prompt-structure",
                title: "Structuring an Effective Prompt",
                content: `<h2>Structuring an Effective Prompt</h2>
                    <pre>Role: AI business analyst
Goal: Analyze customer churn
Context: SaaS company, B2B
Constraints: Max 200 words
Format: JSON</pre>`
            }
        ]
    },
    {
        id: "memory-rag",
        title: "Memory, RAG & Tools",
        items: [
            {
                id: "memory-types",
                title: "Memory Types",
                content: `\n                    <p>To have meaningful interactions, AI needs to understand context. AI incorporates memory across different timeframes.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <li><strong>Short-term Memory:</strong> The immediate context of your current chat session window. Once you start a "new chat," it is completely erased.</li>
  <li><strong>Long-term Memory:</strong> Settings, instructions, or facts the AI is programmed to remember across all your historical sessions.</li>
  <li><strong>External Memory:</strong> Large databases of documents (Vector databases) the AI connects to securely retrieve private files.</li>
</ul>\n                `
            },
            {
                id: "rag",
                title: "RAG – Retrieval Augmented Generation",
                content: `\n                    <p><strong>RAG</strong> is the most critical enterprise technology today. It solves the biggest problem with AI: Hallucinations (AI lying or making up facts).</p>
<p>Instead of relying purely on the general knowledge the AI memorized years ago during its training, RAG forces the AI to securely connect to a database of your private files, retrieve the relevant documents for your question, and use <em>only</em> those specific facts to generate your answer.</p>
<div style="background: #fdf4ff; padding: 20px; border-radius: 12px; border: 1px solid #f5d0fe; margin-bottom: 20px;">
  <strong>Analogy: The Open-Book Exam</strong>
  <p style="margin-top: 8px;">Imagine taking a college exam. A normal AI model is a student taking a closed-book exam relying purely on memory (which is why they sometimes guess and get it wrong). <strong>RAG</strong> is an <em>open-book exam</em>. When you ask the AI a question, it stops, opens your company textbook to the exact right page, reads it, and writes an answer citing the exact paragraph. It virtually eliminates guessing!</p>
</div>\n                `
            },
            {
                id: "tool-usage",
                title: "Tool Usage",
                content: `\n                    <p>When an AI is converted into an Agent, it uses "Tools" (APIs) to impact the real world.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Reading Tools:</strong> Gathering live pricing data, searching Google, or crawling a website.</li>
  <li><strong>Action Tools:</strong> Altering databases, booking calendars, sending mass-emails, or compiling code.</li>
</ul>\n                `
            }
        ]
    },
    {
        id: "safety-limits",
        title: "Limitations & Safety",
        items: [
            {
                id: "limitations-detail",
                title: "Limitations",
                content: `<h2>AI Limitations (What it CANNOT do)</h2>
<div style="background: #fef2f2; padding: 20px; border-radius: 12px; border: 1px solid #fca5a5; margin-bottom: 20px;">
<ul style="display: flex; flex-direction: column; gap: 12px; margin: 0;">
  <li><strong>It has no common sense:</strong> It can write a beautiful poem about an apple, but it doesn't know that an apple falls down, not up, unless it read that text.</li>
  <li><strong>It cannot verify facts:</strong> It cannot Google something to check if it's true (unless it's an agent connected to a browser tool). It just generates text that <em>sounds</em> true.</li>
  <li><strong>Math is hard for text models:</strong> Because they predict words, not numbers, older LLMs are famously bad at logic puzzles and complex arithmetic.</li>
  <li><strong>It has no feelings or self-awareness:</strong> When it says "I am happy to help!", it is just predicting the most polite response pattern, not experiencing an emotion.</li>
</ul>
</div>
<div style="background: #fffbeb; padding: 20px; border-radius: 12px; border: 1px solid #fde68a; margin-bottom: 20px;">
  <strong>Analogy: A Brilliant Parrot</strong>
  <p style="margin-top: 8px;">Think of AI as an incredibly well-read parrot. It can recite Shakespeare flawlessly and mix it with quantum physics because it has "read" everything on the internet. But the parrot doesn't actually understand what love or atoms are. It just knows which words statistically follow each other perfectly.</p>
</div>`
            },
            {
                id: "failure-modes",
                title: "Failure Modes",
                content: `\n                    <p>When using AI, especially in education or business, be prepared to spot these common mistakes:</p>
<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light); border-left: 4px solid #ef4444;">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">1. AI Hallucinations (The Confident Liar)</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">Sometimes the prediction math goes wrong, and the AI generates an answer that is completely fictional but sounds incredibly convincing. It might invent historical dates or fake book quotes. <strong>Rule: Always verify critical facts!</strong></p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light); border-left: 4px solid #d97757;">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">2. Unconscious Bias</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">AI learns from human writing on the internet, meaning it inherits human prejudices. It might unconsciously associate certain professions with specific genders or generate historically skewed perspectives.</p>
  </div>
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light); border-left: 4px solid #3b82f6;">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">3. Sycophancy (Being a 'Yes-Man')</h3>
    <p style="font-size: 14px; color: var(--text-secondary); margin: 0;">AI is programmed to be helpful. Because of this, if you suggest a wrong answer in your prompt (e.g., "Why did Abraham Lincoln exist in 1990?"), the AI might try to agree with your false premise instead of correcting you!</p>
  </div>
</div>\n                `
            },
            {
                id: "best-practices",
                title: "Best Practices",
                content: `\n                    <h2>Best Practices for AI Tools</h2>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Use explicit instructions:</strong> Don't leave room for ambiguity. Tell the AI exactly what format, length, and tone you expect.</li>
  <li><strong>Break tasks into steps:</strong> Instead of one massive prompt, ask the AI to first outline the plan, then write the introduction, then the body.</li>
  <li><strong>Validate outputs:</strong> Treat the AI like a very smart intern. Never publish its work directly without human review.</li>
  <li><strong>Combine AI with deterministic logic:</strong> Use AI for generating ideas or text, but use standard software (calculators, databases) for hard math.</li>
</ul>\n                `
            },
            {
                id: "safety-rules",
                title: "Safety",
                content: `\n                    <div style="background: #fef2f2; padding: 20px; border-radius: 12px; border: 1px solid #fca5a5; margin-bottom: 20px;">
  <strong>⚠️ Critical Safety Rules</strong>
  <ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
    <li><strong>Do not expose sensitive data:</strong> Never paste real student names, medical records, or secure proprietary code into a public AI tool.</li>
    <li><strong>Avoid harmful instructions:</strong> Do not rely on AI for critical medical, legal, or financial advice.</li>
    <li><strong>Enforce boundaries:</strong> When building AI apps for others, use "System Prompts" to forbid the AI from discussing inappropriate topics.</li>
  </ul>
</div>\n                `
            }
        ]
    },
    {
        id: "performance-design",
        title: "Performance & System Design",
        items: [
            {
                id: "optimization",
                title: "Performance Optimization",
                content: `\n                    <p>When implementing AI into real-world software, efficiency is key to controlling costs and speed.</p>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Minimize token usage:</strong> Remove unnecessary words from prompts. AI providers charge per token.</li>
  <li><strong>Cache responses:</strong> If users frequently ask the exact same question, save the AI's answer in a standard database to avoid re-generating it.</li>
  <li><strong>Use embeddings for search:</strong> Don't feed a 1,000-page book into the AI every time. Use a vector database (RAG) to only send the 2 relevant pages.</li>
</ul>
<div style="background: #f0fdf4; padding: 20px; border-radius: 12px; border: 1px solid #bbf7d0; margin-top: 20px;">
  <strong>Analogy: Hiring a Courier</strong>
  <p style="margin-top: 8px;">Every word (token) you send to an AI model costs computational power. It's like hiring a courier who charges by the gram. If you want to send a letter, you don't send the entire 1,000-page book it came from—you tear out the one page and send that. This is exactly why we use RAG and embeddings!</p>
</div>\n                `
            },
            {
                id: "evaluation",
                title: "Evaluation Metrics",
                content: `\n                    <h2>How to measure an AI's Quality</h2>
<ul style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <li><strong>Accuracy:</strong> Is the information factually correct without hallucinations?</li>
  <li><strong>Relevance:</strong> Did the model actually answer the prompt, or did it go off-topic?</li>
  <li><strong>Latency:</strong> How many seconds does it take for the first word to appear on screen?</li>
  <li><strong>Cost per Request:</strong> High-end AI (like GPT-4) costs significantly more per word than smaller models (like GPT-4o mini).</li>
</ul>\n                `
            },
            {
                id: "system-design",
                title: "System Design Patterns",
                content: `\n                    <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">
  <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid var(--border-light);">
    <h3 style="margin-top:0; color:var(--primary); font-size: 16px;">Basic AI System (Chatbot)</h3>
    <p style="font-family: monospace; font-size: 13px; background: white; padding: 8px; border-radius: 4px; border: 1px solid #e2e8f0; margin: 0; color: #475569;">User → API → Prompt Builder → Model → Output</p>
  </div>
  <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border: 1px solid #bbf7d0;">
    <h3 style="margin-top:0; color:#166534; font-size: 16px;">Advanced System (Autonomous Agent)</h3>
    <p style="font-family: monospace; font-size: 13px; background: white; padding: 8px; border-radius: 4px; border: 1px solid #bbf7d0; margin: 0; color: #166534;">User → Orchestrator → Agent Loop ↺ (Tools + Memory) → Output</p>
  </div>
</div>\n                `
            }
        ]
    },
    {
        id: "agent-advanced",
        title: "Agent Execution & Outputs",
        items: [
            {
                id: "agent-execution",
                title: "Agent Execution Template",
                content: `\n                    <p>This is the standard cognitive loop of an autonomous Agent:</p>
<div style="background: #1e293b; color: #f8fafc; padding: 20px; border-radius: 12px; font-family: monospace; font-size: 14px; margin-bottom: 20px;">
  <div style="color: #60a5fa; margin-bottom: 8px;">LOOP BEGIN:</div>
  1. Parse input intent<br>
  2. Check memory & context<br>
  3. Plan the next logical step<br>
  4. <strong style="color: #60a5fa;">Execute action</strong> (e.g. search web)<br>
  5. <strong style="color: #60a5fa;">Observe result</strong><br>
  6. Update internal state<br>
  7. Repeat until goal achieved<br>
  <div style="color: #60a5fa; margin-top: 8px;">LOOP END: Return Output</div>
</div>
<div style="background: #eff6ff; padding: 20px; border-radius: 12px; border: 1px solid #bfdbfe; margin-bottom: 20px;">
  <strong>Analogy: The Master Chef</strong>
  <p style="margin-top: 8px;">A standard Chatbot is like a vending machine: you press a button, you get a snack. An Autonomous Agent is like a Master Chef in a kitchen. They receive an order (Goal), check the pantry (Memory), realize they are missing tomatoes, decide to send someone to the market (Execution), wait for the tomatoes to arrive (Observation), and then finish cooking the dish to perfection.</p>
</div>\n                `
            },
            {
                id: "output-formats",
                title: "Output Formats",
                content: `\n                    <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <div style="background: #f9fafb; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb;"><strong>Text:</strong> Natural language generation for chatting with humans.</div>
  <div style="background: #f9fafb; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb;"><strong>JSON:</strong> Structured data formatting, completely machine-readable for API integrations.</div>
  <div style="background: #f9fafb; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb;"><strong>Markdown:</strong> Semi-structured format for rendering bold text, code blocks, and tables visually.</div>
  <div style="background: #f9fafb; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb;"><strong>Commands:</strong> Direct executable instructions targeting terminal/bash interfaces.</div>
</div>\n                `
            }
        ]
    },
    {
        id: "future-principles",
        title: "Future & Core Principles",
        items: [
            {
                id: "future-directions",
                title: "Future Directions",
                content: `\n                    <p>Where is Artificial Intelligence heading next?</p>
<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
  <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;"><strong>Autonomous Agents:</strong> AI that doesn't wait for you to chat, but actively works in the background (like an employee).</div>
  <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;"><strong>Local AI Deployment:</strong> Running models entirely on your phone or laptop without internet, ensuring 100% privacy.</div>
  <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;"><strong>Real-time Multimodal Systems:</strong> AI that instantly 'sees' through your camera and 'hears' your voice without delay, exactly like a human on a video call.</div>
  <div style="background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;"><strong>AI-Native Operating Systems:</strong> Devices built entirely around an AI core, rather than relying on apps.</div>
</div>
<div style="background: rgba(107, 91, 79, 0.1); padding: 20px; border-radius: 12px; border: 1px solid #fed7aa; margin-top: 20px;">
  <strong>Analogy: The Smartphone Evolution</strong>
  <p style="margin-top: 8px;">Right now, AI is like the early days of mobile phones. They are separate devices (websites) you have to visit to use. In the future, AI will be like the modern smartphone—integrated into everything. It won't just be an app you open; it will be the operating system itself, invisibly managing your digital life.</p>
</div>\n                `
            },
            {
                id: "strict-rules",
                title: "Strict Agent Rules",
                content: `\n                    <p>When configuring an agent for production, developers enforce strict behavioral rules:</p>
<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px; margin-bottom: 20px;">
  <div style="background: rgba(107, 91, 79, 0.1); padding: 12px; border-radius: 8px; border: 1px solid #ffedd5;"><strong>Follow instructions strictly:</strong> Deviating from the prompt is considered a failure.</div>
  <div style="background: rgba(107, 91, 79, 0.1); padding: 12px; border-radius: 8px; border: 1px solid #ffedd5;"><strong>Never assume missing data:</strong> Rather than guessing, the agent must pause and ask the user for clarification.</div>
  <div style="background: rgba(107, 91, 79, 0.1); padding: 12px; border-radius: 8px; border: 1px solid #ffedd5;"><strong>Validate before responding:</strong> Check the answer against internal guidelines before showing it to the user.</div>
  <div style="background: rgba(107, 91, 79, 0.1); padding: 12px; border-radius: 8px; border: 1px solid #ffedd5;"><strong>Do not fabricate:</strong> If an unknown concept is presented, the model must explicitly state "I do not know."</div>
</div>\n                `
            },
            {
                id: "system-template",
                title: "System Prompt Base Template",
                content: `\n                    <p>This is standard structure for setting an AI's core instructions:</p>
<div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid var(--border-light); font-family: monospace; font-size: 13px; color: #334155; margin-bottom: 20px;">
  You are an AI agent designed to execute tasks with absolute precision.<br><br>
  <strong>Rules:</strong><br>
  - Follow instructions exactly as written.<br>
  - Ask for clarification if a parameter is missing.<br>
  - Output must strictly adhere to JSON format if requested.<br>
  - Prioritize extreme accuracy over speed.
</div>\n                `
            },
            {
                id: "summary",
                title: "Core Principle",
                content: `\n                    <div style="background: #eef2ff; padding: 20px; border-radius: 12px; border: 1px solid #c7d2fe; text-align: center;">
  <p style="margin: 0; font-size: 18px; color: #3730a3;"><strong>AI is fundamentally a prediction machine.</strong></p>
  <p style="margin-top: 8px; color: #4f46e5;">Output Quality = Input Data Quality + Instruction Clarity</p>
</div>\n                `
            }
        ]
    }
];

var getAllChapters = () => {
    return DOCS_DATA.flatMap(section => section.items.map(chapter => ({
        ...chapter,
        sectionId: section.id,
        sectionTitle: section.title
    })));
};
