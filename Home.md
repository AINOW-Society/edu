# AINOW Platform for AI Literacy - Wiki Home

Welcome to the **AINOW Platform for AI Literacy** wiki! This is your hub for understanding, using, and contributing to the platform.

---

## 📚 Quick Navigation

| Section | Description |
|---------|-------------|
| **[Getting Started](#-getting-started)** | Install and run the platform in minutes |
| **[Features Overview](#-features-overview)** | Explore what the platform offers |
| **[Project Structure](#-project-structure)** | Understand the codebase organization |
| **[Contributing](#-contributing)** | Add prompts, tools, content, or translations |
| **[FAQ & Troubleshooting](#-faq--troubleshooting)** | Common questions and solutions |
| **[Architecture](#-architecture)** | Technical design and offline-first approach |
| **[Roadmap](#-roadmap)** | What's coming next |

---

## 🚀 Getting Started

### Quickest Way to Run

1. **Download or clone the repository**
   ```bash
   git clone https://github.com/AINOW-mk/platform.git
   ```

2. **Open the app**
   - Simply **double-click `index.html`** in your file browser
   - Or right-click → "Open with" → Your preferred browser

3. **That's it!** The app works offline immediately — no server, no installation, no build steps needed.

### Why This Approach?

- ✅ Works on any device with a web browser
- ✅ No internet required after first visit
- ✅ No installation of Node, npm, or any developer tools
- ✅ Teachers can run it from USB drives or local folders
- ✅ Perfect for schools with limited IT infrastructure

### First Time Using?

- 🌐 Use the language switcher (top-right) to choose **English**, **Macedonian**, or **Albanian**
- 📖 Start with the **Interactive Learning Guide** for AI foundations
- 🛠️ Explore the **AI Tool Directory** to discover classroom tools
- 💡 Search the **Prompt Bank** for ready-to-use teacher templates
- 📖 Use the **Glossary** (📖 icon) to understand AI terminology

---

## 💡 Features Overview

### 1. **Interactive Learning Guide** (18 Chapters)
- Three-tier curriculum: Foundations → Practice → Reference
- Complex AI concepts explained with classroom analogies
- Easy for educators to teach to their students
- Available in all three languages

### 2. **Massive Prompt Bank** (300+ Templates)
Organized by:
- **User Role:** Teachers | School Administration
- **Grade Level:** Primary Lower | Primary Upper | Secondary
- **Subject:** Biology, Math, Language, History, etc.
- **Use Case:** Lesson Planning | Grading | Parent Communication | Content Creation

All prompts use the **CPTC Framework:**
- **Role:** Define who the AI is
- **Context:** Provide background information
- **Task:** State what to do
- **Constraints:** Set guardrails

### 3. **AI Tool Directory** (57 Curated Tools)
Categorized by use-case with:
- ✅ Clear pricing badges (Free | Freemium | Paid)
- ✅ Direct links and descriptions
- ✅ Filtering by category: Planning, Multimedia, Assessment, Research, etc.
- ✅ Fast search functionality

### 4. **AI Literacy Glossary** (60 Terms)
Essential vocabulary including:
- AI concepts: AI, AGI, LLM, Attention, Transformer, Embedding
- Techniques: RAG, Fine-tuning, RLHF, Chain of Thought
- Safety: Deepfakes, Guardrails, Responsible AI
- All terms in English, Macedonian, and Albanian

### 5. **Offline-First PWA**
- Works **perfectly without internet**
- Built-in **Service Worker** caches all content
- Install as app on mobile devices
- Automatic offline indicator shows connection status

### 6. **Tri-Lingual** (Real-Time Switching)
- **English** | **Македонски** | **Shqip**
- Full content parity across all languages
- Language preference saved to device

### 7. **Privacy-First Design**
- ✅ **Zero data collection** — nothing leaves your device
- ✅ **No trackers** — no Google Analytics, no logging
- ✅ **No login required** — completely anonymous
- ✅ All data is local to your browser

### 8. **Export & Print**
- Save resources and guides as **PDF**
- **Print** functionality for classroom use
- Works offline on desktop and mobile

---

## 🗂️ Project Structure

```
AINOW-Platform/
├── index.html                 # Main app entry point (open this!)
├── service-worker.js          # Offline caching & PWA logic
├── manifest.json              # PWA manifest for app installation
├── 404.html                   # GitHub Pages error page
│
├── css/
│   └── styles.css             # All styling (fully responsive)
│
├── js/
│   ├── app.js                 # Core app logic & initialization
│   ├── engine.js              # Rendering engine
│   ├── router.js              # View routing
│   ├── glossary-data.js       # Glossary entries (60 terms)
│   ├── i18n.js                # Internationalization system
│   │
│   ├── lang/                  # Language-specific content
│   │   ├── en/
│   │   │   ├── docs.js        # Guide chapters (English)
│   │   │   ├── prompts.js     # Prompt templates (English)
│   │   │   └── quizzes.js     # Quiz questions (English)
│   │   ├── mk/                # Macedonian translations
│   │   └── sq/                # Albanian translations
│   │
│   └── lib/                   # External libraries
│       ├── html2canvas.min.js # PDF generation
│       └── jspdf.min.js       # PDF formatting
│
├── views/                     # View templates (loaded as `views/*.js`)
│   ├── home.js
│   ├── guide.js
│   ├── prompts.js
│   ├── tools.js
│   ├── resources.js
│   ├── glossary.js
│   ├── help.js
│   └── about.js
│
├── assets/                    # Images, logos, icons
├── README.md                  # Main documentation
├── CONTRIBUTING.md            # Contribution guidelines
└── LICENSE                    # Open-source license
```

### Key Files Explained

| File | Purpose |
|------|---------|
| `index.html` | **Start here!** Single-page HTML file that loads everything |
| `app.js` | Main JavaScript — routes, state management, event handlers |
| `service-worker.js` | Enables offline mode by caching assets |
| `i18n.js` | Handles language switching and translations |
| `engine.js` | Renders views and manages DOM updates |
| `js/lang/*/*.js` | Language-specific content (prompts, guides, glossaries) |
| `styles.css` | Single CSS file — responsive, mobile-first design |

---

## ✏️ Contributing

### Add New Content

Contributing is **100% straightforward** because there are no build steps or databases!

#### **1. Add Prompts** (Teacher Templates)
**Duration:** 5 minutes per prompt

- Edit `js/lang/mk/prompts.js`, `js/lang/en/prompts.js`, or `js/lang/sq/prompts.js`
- Add a JSON object with: id, title, prompt, category, grade, subject, tags
- Ensure all three language files are updated simultaneously
- See `CONTRIBUTING.md` for exact format

**Example:**
```javascript
{
  id: "T-201",
  category: "teachers",
  subcategory: "secondary",
  grade: "Grade 10-12",
  subject: "Mathematics",
  title: "Create Interactive Math Puzzles",
  prompt: "Role: Math puzzle designer...",
  tags: ["math", "puzzle", "engagement"]
}
```

#### **2. Add AI Tools** (Directory Tools)
**Duration:** 3-5 minutes per tool

- Edit `js/app.js` — find `_toolsData` array
- Add tool object: id, title, url, category, pricing, tags
- Update descriptions in `js/lang/*/ui.js` for each language
- See `CONTRIBUTING.md` for details

**Example:**
```javascript
{
  id: 'quizizz',
  title: 'Quizizz',
  url: 'https://quizizz.com',
  tags: ['Quiz', 'Assessment', 'Interactive'],
  category: 'assessment',
  pricing: 'freemium'
}
```

#### **3. Update the Learning Guide** (18 Chapters)
**Duration:** 30 minutes per chapter

- Edit `js/lang/mk/docs.js`, `js/lang/en/docs.js`, or `js/lang/sq/docs.js`
- Sections are grouped by chapter with explanations, examples, and tips
- Update all three language files for consistency

#### **4. Translate Content** (Into New Languages)
**Duration:** 2-4 hours per language

- Create new folder: `js/lang/{lang_code}/`
- Copy structure from `js/lang/en/` (docs.js, prompts.js, quizzes.js, ui.js)
- Translate all strings
- Add language option to language switcher
- Update `i18n.js` to load the new language

### General Guidelines

✅ **DO:**
- Keep prompts practical and classroom-tested
- Use consistent naming (lowercase tags, descriptive titles)
- Maintain content parity across all three languages
- Test your changes by opening `index.html` in a browser
- Submit a PR with a clear description of what you added

❌ **DON'T:**
- Add external dependencies (Vue, React, jQuery, etc.)
- Use build tools (Webpack, Vite, TypeScript, etc.)
- Hardcode API keys or external services
- Break existing functionality
- Modify the core architecture without discussion

### Contributing Workflow

1. **Fork the repository** on GitHub
2. **Create a branch:** `git checkout -b feature/add-new-prompts`
3. **Make your changes** to content files
4. **Test locally:** Open `index.html` in your browser
5. **Commit:** `git commit -m "Add 5 new Math prompts for secondary"`
6. **Push:** `git push origin feature/add-new-prompts`
7. **Open a Pull Request** with description and screenshots

### What We're Looking For

- **High-quality prompts** tested in real classrooms
- **Accurate tool descriptions** and verified links
- **Clear, pedagogical writing** suitable for educators
- **Language completeness** — all three languages updated
- **Accessibility** considerations for all learners

---

## 🏗️ Architecture

### Tech Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Storage:** Browser Local Storage & IndexedDB
- **Offline:** Service Worker with network-first caching
- **Bundling:** None! Single-file deployment
- **Dependencies:** Zero (except bundled html2canvas and jsPDF)

### Why Vanilla JavaScript?

✅ **Lower barrier to contribution** — anyone with basic web skills can help  
✅ **No build process** — opens in any browser instantly  
✅ **Smaller bundle** — faster downloads on slow connections  
✅ **Better performance** — minimal overhead  
✅ **True offline support** — Service Worker handles everything  

### Offline-First Approach

1. **On first visit:** Service Worker caches all assets
2. **On subsequent visits:** App loads from cache immediately
3. **Background check:** Periodically checks for app updates
4. **Fallback:** If no cache, tries to load from network
5. **Indicator:** Offline status shown in top-right corner

### Data Flow

```
index.html
    ↓
app.js (initialization)
    ↓
i18n.js (load language data)
    ↓
router.js (route to view)
    ↓
views/*.js (render content)
    ↓
engine.js (update DOM)
    ↓
styles.css (visual presentation)
```

### State Management

- **Current View:** Stored in `App.currentView`
- **Language:** Stored in `I18n.lang` and localStorage
- **Theme:** Stored in localStorage
- **Scroll Position:** Tracked per view for UX
- **Installation Prompt:** Managed by `App._deferredInstallPrompt`

### Responsive Design

- **Mobile First:** Optimized for small screens
- **Breakpoints:** Adapts from 320px (phones) to 2560px (desktops)
- **Touch-Friendly:** Large buttons, optimized spacing
- **Print-Friendly:** Resources can be printed/exported to PDF
- **Dark Mode Ready:** Theme system supports light/dark toggling

---

## 🤔 FAQ & Troubleshooting

### Q: The app won't open in my browser!
**A:** Make sure you're double-clicking `index.html` or dragging it into your browser. If you get CORS errors, try opening from a simple HTTP server:
```bash
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Q: I don't see my new prompt after editing the file!
**A:** 
1. Clear browser cache: `Ctrl+Shift+Delete` or `Cmd+Shift+Delete`
2. Hard refresh: `Ctrl+F5` or `Cmd+Shift+R`
3. Check that you edited the **correct language file**
4. Verify your JSON syntax is valid (use an online JSON validator)
5. Restart your browser

### Q: The app stopped working after I made changes
**A:** 
1. Check browser console for errors: `F12` → Console tab
2. Make sure you didn't break JSON syntax
3. Revert your changes to a working state: `git checkout -- filename`
4. Test with a fresh browser tab

### Q: How do I test the offline functionality?
**A:** 
1. Load the app normally
2. Go to DevTools: `F12`
3. Go to Application → Service Workers
4. Check "Offline"
5. Refresh the page — it should still work!

### Q: Can I add Bootstrap or Tailwind CSS?
**A:** Please don't! The goal is to keep the platform lightweight and dependency-free. Instead, add new styles to `styles.css`.

### Q: How do I add a new language?
**A:** See [**4. Translate Content**](#4-translate-content-into-new-languages) in the Contributing section above.

### Q: My changes worked locally but broke on GitHub Pages
**A:** This is usually a path issue. Make sure all file paths are relative (not absolute) and start with `/` (e.g., `/js/app.js` not `js/app.js`).

### Q: Can I deploy this on my own server?
**A:** Yes! The platform is 100% static HTML/CSS/JS. Deploy it anywhere:
- GitHub Pages ✅
- Netlify ✅
- Vercel ✅
- Any web server ✅
- USB drive / local folder ✅

---

## 🗺️ Roadmap

### Current Status (v0.92)
- ✅ 17-chapter Learning Guide (Foundations, Practice, Reference — full MK / EN / SQ parity)
- ✅ 300+ Educator Prompts
- ✅ 57 AI Tools Directory
- ✅ 60-Term Glossary
- ✅ Homework sheets (Resources) — print/PDF + optional teacher guidance (MK / EN / SQ)
- ✅ Tri-lingual (EN, MK, SQ)
- ✅ Offline-first PWA
- ✅ PDF Export
- ✅ Mobile-optimized

### Planned Features

**Short-term (Next Release)**
- [ ] Quiz system enhancement
- [ ] User progress tracking (local storage)
- [ ] More AI tools (100+ target)
- [ ] Enhanced search and filtering

**Medium-term**
- [ ] More language support (TR, HU, BG)
- [ ] Interactive exercises and assessments
- [ ] Classroom sharing features
- [ ] Admin dashboard lite version

**Long-term**
- [ ] Community submission portal
- [ ] Peer review system for prompts
- [ ] Integration with LMS (Google Classroom, Canvas)
- [ ] Multi-device sync (optional)

### How to Suggest Features

Open an **Issue** on GitHub with:
- Clear description of the feature
- Why it would help educators
- Mockup/sketch if applicable
- Any questions or blockers

---

## 📞 Support & Community

- **Report a Bug:** [Open an Issue](https://github.com/AINOW-mk/platform/issues)
- **Request a Feature:** [Discussions](https://github.com/AINOW-mk/platform/discussions)
- **View Changelog:** Check `README.md`
- **Contribute:** See [Contributing](#-contributing) section above
- **Website:** [edu.ainow.mk](https://edu.ainow.mk)

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0 (GPLv3)**.

**© 2026 AINOW Society**

You are free to:
- ✅ Use for any purpose (commercial or non-commercial)
- ✅ Modify and adapt the code
- ✅ Deploy in educational institutions, schools, and organizations
- ✅ Fork and contribute improvements back to the project
- ✅ Distribute modified versions

**You must:**
- ✅ Include the GPLv3 license and copyright notice
- ✅ Disclose the source code of modifications
- ✅ License derivatives under GPLv3
- ✅ Document significant changes

See `LICENSE` file for complete legal text or visit [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)

---

## 🎯 Project Goals

The AINOW Platform exists to:

1. **Empower educators** with practical AI literacy and tools
2. **Lower barriers** — works offline, no dependencies, free forever
3. **Respect privacy** — zero data collection or tracking
4. **Build community** — open-source and welcoming to contributors
5. **Bridge equity gaps** — accessible to schools everywhere, not just wealthy districts

---

## 📚 Learn More

| Link | Purpose |
|------|---------|
| [**README.md**](../README.md) | Main project documentation |
| [**CONTRIBUTING.md**](../CONTRIBUTING.md) | Detailed contribution guidelines |
| [**LICENSE**](../LICENSE) | Open-source license |
| [**GitHub Repository**](https://github.com/AINOW-mk/platform) | Source code |
| [**Live Platform**](https://edu.ainow.mk) | Running instance |

---

**Last Updated:** April 27, 2026 | **Platform Version:** v0.92 | **Wiki Status:** Active & Community-Maintained

---

*Welcome to the AINOW community! 🚀 We're excited to have you contributing to educator empowerment.*
