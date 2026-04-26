# Contributing to the AINOW Platform for AI Literacy

Thank you for your interest in improving the AINOW Platform for AI Literacy! Every addition helps empower educators with better AI literacy and tools.

This guide will walk you through the exact steps to add new **Prompts**, **AI Tools**, and **Guide Content** into the application. Since we use vanilla JavaScript (no databases), adding data is as simple as adding JSON objects to a few specific files.

---

## 1. How to Add New Prompts

Our prompt bank holds hundreds of templates for teachers and school administrators. Prompts must be added to all three language files simultaneously to maintain parity.

**Target Files:**
- Macedonian: `js/lang/mk/prompts.js`
- Albanian: `js/lang/sq/prompts.js`
- English: `js/lang/en/prompts.js`

### Step-by-Step

1. Open the language files listed above.
2. Inside each file, you will find a large `embeddedPromptsData` object with a `teachers` array and an `administration` array.
3. Add a new object into the appropriate array. 

**Required Format (Macedonian / Albanian):**
*Note: MK and SQ require an explicit ID and a translated "grade" string.*
```javascript
{
  id: "T-201",  // Look at the last prompt to see the next ID number
  category: "teachers", // or "administration"
  subcategory: "primary_upper", // Allowed: all, primary_lower, primary_upper, secondary
  grade: "Grade 6-9", // Translate this appropriately depending on the language
  subject: "Biology",
  title: "A clear, short title",
  prompt: "Role: ... Context: ... Task: ... Constraints: ...", // CPTC Framework
  tags: ["biology", "lesson_plan", "science"] // 3-5 lowercase tags
}
```

**Required Format (English):**
*Note: English uses a simpler format without the `id`, `category`, and `grade` attributes.*
```javascript
{
  subcategory: "primary_upper", 
  subject: "Biology",
  title: "A clear, short title",
  prompt: "Role: ... Context: ... Task: ... Constraints: ...",
  tags: ["biology", "lesson_plan", "science"]
}
```

**Important Guidelines:**
- The Macedonian file MUST use the abbreviation **ВИ** (Вештачка Интелигенција) instead of the English "AI".
- Administrator subcategories include: `director`, `pedagogue`, `psychologist`, `secretary`, `department_head`.

---

## 2. How to Add New AI Tools

The platform curates a visual directory of educational AI tools. 

**Target File:** `js/app.js`

### Step-by-Step

1. Open `js/app.js` and locate the `_toolsData` array (Usually near `App._toolsData = [ ... ]`).
2. Add your new tool object to the array:

```javascript
{ 
  id: 'unique_id',        // A short identifier (e.g., 'quizizz')
  title: 'Tool Name',     // Visible name on the card
  url: 'https://...',     // Direct HTTPS link to the tool
  tags: ['Tag 1', 'Tag 2'],// Make these short descriptors
  category: 'text',       // Allowed: text, visual, multimedia, planning, assessment, presentation, math, research, students, teachers
  pricing: 'freemium'     // Allowed: free, freemium, paid
}
```

3. **Important Translations:** Add the tool description under `tool.<unique_id>.desc` in **`js/i18n.js`** for all three languages (`mk`, `en`, and `sq` blocks). Replace `unique_id` with your tool's `id` from `_toolsData`.

---

## 3. How to Update the Guide Content

The 16-chapter literal guide is the core pedagogical text of the platform.

**Target Files:**
- `js/lang/mk/docs.js`
- `js/lang/sq/docs.js`
- `js/lang/en/docs.js`

### Step-by-Step

The guide is stored in the `DOCS_DATA` array. Each JavaScript object represents one chapter page.

```javascript
{
  id: 'new_chapter_id',
  title: 'III. The Importance of Data',
  content: `
    <h3>Why Data Matters</h3>
    <p>AI is like an engine, but data is the fuel...</p>
    <div class="tip-box">
       <strong>Educator Tip:</strong> Always verify algorithmic output...
    </div>
  `
}
```
*Note: Because we use vanilla JS, you write HTML directly inside the backtick literal string. Ensure you use semantic tags like `<strong>`, `<ul>`, and our custom `<div class="tip-box">` for hints.*

---

## 4. Releasing a New Version (For Maintainers)

Since this app operates completely offline as a PWA, the browser **must be told to fetch the new files** whenever data is added or code is modified. If you merge a Pull Request, do the following:

1. Prefer **`scripts/bump-version.ps1`** from the repo root: `powershell -ExecutionPolicy Bypass -File scripts/bump-version.ps1 -NewVersion 0.92` (updates `js/app.js`, `service-worker.js`, and all `?v=` in `index.html`).
2. Or manually: `const CACHE_NAME = 'ai-edu-v0.92';` in `service-worker.js` and `?v=92` on scripts/styles in `index.html`, and `const APP_VERSION = 'v0.92';` in `js/app.js`.

---

We believe that open education transforms the world. Thank you for your contributions!
