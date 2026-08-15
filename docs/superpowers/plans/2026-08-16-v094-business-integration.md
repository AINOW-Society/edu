# AINOW v0.94 Business Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the AI Prompt Library into `biz/` as a buildless, `file://`-openable app trimmed to 3 languages and retinted, then enable the Business card on the landing page.

**Architecture:** Copy the source, delete what is out of scope, replace the esm.sh ESM vendor bundles with global builds, then convert the app's own ES modules to classic scripts via a scripted codemod rather than by hand. Component logic, htm templates, and hooks are never modified — only how files locate each other.

**Tech Stack:** React 19 + htm (runtime, no JSX) + Tailwind runtime script. No build step in the deployed tree. Node is used **once**, locally, to produce a vendored `lucide-react` global bundle.

**Spec:** `docs/superpowers/specs/2026-08-16-ainow-v094-dual-app-design.md`

**Depends on:** `docs/superpowers/plans/2026-08-16-v094-structural-foundation.md` (complete — `biz/` and the landing page exist)

## Global Constraints

- `D:\AINOW\AI PROMPT LIBRARY - working V` is **read-only**. Copy out of it; never write into it.
- Business must open by double-clicking `biz/index.html` — no build, no server, no network.
- Business accent is `#4F46E5`. Education keeps `#d97757`. Never change education's palette.
- Component logic, htm templates, hooks, and state management are **not** modified. Only module resolution.
- Shipped surface: Prompts, Agents, Situations, Playbooks, Builder, Help. Lab and all 6 tools are dropped.
- Languages: MK, EN, SQ only. Bosnian and Serbian locales *and* prompt categories are dropped.
- No `node_modules`, `package.json`, or `vite.config.ts` in the committed tree.

## File Structure

| Path | Responsibility |
|---|---|
| `biz/index.html` … `biz/help.html` | 5 page entry points, each with ordered classic `<script>` tags |
| `biz/libs/*.js` | Vendored global builds: react, react-dom, htm, fuse, lucide-react, tailwind |
| `biz/src/**` | App modules, converted to classic scripts writing into `window.AINOW` |
| `biz/data/**` | Prompt/agent/situation data, converted to classic scripts |
| `biz/locales/**` | 3 locale files, converted to classic scripts |
| `biz/config.js` | Replaces Vite's `define` substitutions |
| `scripts/esm-to-classic.mjs` | One-shot codemod (maintainer-local, gitignored) |

---

### Task 1: Copy the source into `biz/`

**Files:**
- Create: `biz/**` from the read-only source
- Replace: `biz/index.html` (the Plan 1 placeholder)

**Interfaces:**
- Consumes: `biz/` directory from Plan 1
- Produces: an unmodified copy of the prompt library under `biz/`, which every later task edits.

- [ ] **Step 1: Copy everything except tooling and build artifacts**

```powershell
$src = "D:\AINOW\AI PROMPT LIBRARY - working V"
$dst = "D:\AINOW Literacy - dev\biz"
Remove-Item "$dst\index.html" -Force
robocopy $src $dst /E /XD node_modules dist .git .claude .agent .cursor /XF package.json package-lock.json tsconfig.json vite.config.ts .env.local start.sh start_server.bat
```

`robocopy` exit codes 0–7 indicate success; 8+ is an error.

- [ ] **Step 2: Verify the source folder is untouched**

```bash
cd "D:/AINOW/AI PROMPT LIBRARY - working V" && git status --short | head
```

Expected: no output, or only pre-existing changes. **Any new modification means the copy went the wrong direction — stop and restore.**

- [ ] **Step 3: Verify the copy landed**

```bash
cd "D:/AINOW Literacy - dev/biz" && ls && echo "---" && ls src data locales public/libs | head -20
```

Expected: `index.html`, `agents.html`, `builder.html`, `help.html`, `lab.html`, `playbooks.html`, `src/`, `data/`, `locales/`, `public/`, `assets/`.

- [ ] **Step 4: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add biz/ && git commit -m "feat(biz): copy AI Prompt Library source into biz/

Unmodified copy, excluding node_modules, dist, and build tooling. The
original at D:\AINOW\AI PROMPT LIBRARY - working V is untouched."
```

---

### Task 2: Trim scope — drop Lab, Bosnian, and Serbian

Pure deletion. Doing it before the conversion means ~14 fewer files to convert.

**Files:**
- Delete: `biz/lab.html`, `biz/src/lab.js`, `biz/src/tools/`, `biz/src/assessments/`
- Delete: `biz/locales/locales-bs.js`, `biz/locales/locales-sr.js`
- Delete: `biz/data/data-bosnian.js`, `biz/data/data-serbian.js`
- Modify: `biz/locales/locales.js`, `biz/data/data.js`, `biz/data/data-counts.js`, `biz/src/config.js`, `biz/src/components.js`

**Interfaces:**
- Consumes: `biz/` from Task 1
- Produces: a tree with 5 HTML pages and 3 locales. `NAV_LINKS` in `components.js` no longer contains a `lab` entry.

- [ ] **Step 1: Delete the files**

```bash
cd "D:/AINOW Literacy - dev/biz" && rm -rf lab.html src/lab.js src/tools src/assessments locales/locales-bs.js locales/locales-sr.js data/data-bosnian.js data/data-serbian.js
```

- [ ] **Step 2: Update the locale registry**

In `biz/locales/locales.js`, remove the `bs` and `sr` imports and registry entries so it reads:

```javascript
import { data as en } from './locales-en.js';
import { data as mk } from './locales-mk.js';
import { data as sq } from './locales-sq.js';
```

and:

```javascript
const registry = {
    en: deepMerge(readinessFallbacks, en),
    mk: deepMerge(readinessFallbacks, mk),
    sq: deepMerge(readinessFallbacks, sq),
};
```

If `buildAssessmentFallbacks` is only used by the deleted Readiness tool, remove that import and use the locale objects directly. Verify with:

```bash
cd "D:/AINOW Literacy - dev/biz" && grep -rn "readinessFallbacks\|buildAssessmentFallbacks" --include=*.js .
```

- [ ] **Step 3: Remove the dropped data categories**

Delete the `bosnian` and `serbian` lines from `biz/data/data.js` and `biz/data/data-counts.js`, and their category entries from `biz/src/config.js`.

- [ ] **Step 4: Remove the Lab nav link**

In `biz/src/components.js`, delete the `lab` entry from `NAV_LINKS`.

- [ ] **Step 5: Verify nothing still references the deleted modules**

```bash
cd "D:/AINOW Literacy - dev/biz" && grep -rn "lab\.js\|/tools/\|/assessments/\|locales-bs\|locales-sr\|data-bosnian\|data-serbian\|bosnian\|serbian" --include=*.js --include=*.html . | grep -v "^./libs/"
```

Expected: no output. Every hit is a dangling reference that will throw at runtime.

- [ ] **Step 6: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add -A biz/ && git commit -m "feat(biz): trim to shipped scope

Drops Lab and all 6 tools including the Readiness Assessment subsystem,
plus Bosnian and Serbian locales and prompt categories. Ships Prompts,
Agents, Situations, Playbooks, Builder, and Help in MK/EN/SQ."
```

---

### Task 3: Vendor global dependency builds

The current `public/libs/*.js` are esm.sh **ES module** builds. Classic `<script>` tags cannot load them.

**Files:**
- Create: `biz/libs/*.js` (global builds)
- Delete: `biz/public/`

**Interfaces:**
- Consumes: nothing from earlier tasks
- Produces: globals `React`, `ReactDOM`, `htm`, `Fuse`, `lucide` on `window`, loaded before any app script. Task 4's codemod maps bare specifiers to these names.

React, React-DOM, htm, and Fuse all publish UMD builds. `lucide-react` does not, so it is bundled **once**, locally, and the output committed — the same provenance as the existing esm.sh files. No user or contributor ever runs a bundler.

- [ ] **Step 1: Fetch the UMD builds**

```bash
cd "D:/AINOW Literacy - dev/biz" && mkdir -p libs && cd libs
curl -sLo react.js https://unpkg.com/react@19.0.0/umd/react.production.min.js
curl -sLo react-dom.js https://unpkg.com/react-dom@19.0.0/umd/react-dom.production.min.js
curl -sLo htm.js https://unpkg.com/htm@3.1.1/dist/htm.umd.js
curl -sLo fuse.js https://unpkg.com/fuse.js@7.0.0/dist/fuse.min.js
cp "../public/libs/tailwindcss.js" ./tailwindcss.js
ls -la
```

- [ ] **Step 2: Verify each exposes a global, not an export**

```bash
cd "D:/AINOW Literacy - dev/biz/libs" && for f in react.js react-dom.js htm.js fuse.js; do printf "%-16s " "$f"; if grep -q "^export\|export{" "$f"; then echo "ESM — WRONG"; else echo "global — OK"; fi; done
```

Expected: all four report `global — OK`. Any `ESM — WRONG` means the wrong build was fetched.

- [ ] **Step 3: Bundle lucide-react into a global build**

Run once in a scratch directory outside the repo:

```bash
mkdir -p /tmp/lucide-build && cd /tmp/lucide-build
npm init -y >/dev/null
npm install lucide-react@0.460.0 react@19.0.0 esbuild --silent
cat > entry.js <<'EOF'
import * as icons from 'lucide-react';
window.lucide = icons;
EOF
npx esbuild entry.js --bundle --format=iife --minify \
  --external:react --define:process.env.NODE_ENV='"production"' \
  --global-name=__lucide --outfile=lucide-global.js
cp lucide-global.js "D:/AINOW Literacy - dev/biz/libs/lucide-react.js"
```

`--external:react` keeps React out of the bundle, since the UMD build already defines the global.

- [ ] **Step 4: Verify the bundle defines `window.lucide` and excludes React**

```bash
cd "D:/AINOW Literacy - dev/biz/libs" && grep -c "window.lucide" lucide-react.js && ls -la lucide-react.js
```

Expected: at least 1 match. Size should be well under the 662 KB ESM original, since only used icons' dependencies are bundled and React is external.

- [ ] **Step 5: Remove the ESM vendor directory**

```bash
cd "D:/AINOW Literacy - dev/biz" && rm -rf public
```

- [ ] **Step 6: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add -A biz/ && git commit -m "feat(biz): vendor global dependency builds

Replaces the esm.sh ESM bundles with UMD/global builds so classic script
tags can load them from file://. lucide-react publishes no UMD build, so
it is bundled once locally and the output committed, matching the
provenance of the files it replaces. The deployed tree stays buildless."
```

---

### Task 4: Convert ES modules to classic scripts

~220 import/export statements across ~71 files. A scripted codemod is used rather than hand edits, because mechanical transcription across that many sites is where errors hide, and because a script's output can be reviewed as a single diff.

**Files:**
- Create: `scripts/esm-to-classic.mjs` (maintainer-local, gitignored)
- Modify: every `.js` under `biz/src/`, `biz/data/`, `biz/locales/`

**Interfaces:**
- Consumes: globals from Task 3
- Produces: every module writes its exports to `window.AINOW['<module-key>']`, where the key is the path relative to `biz/` without extension (e.g. `src/components`, `data/data-agents`). Task 5's HTML script ordering depends on these keys.

**Transformation rules:**

| ESM | Classic |
|---|---|
| `import React from 'react'` | dropped — `React` is already global |
| `import htm from 'htm'` | dropped — global |
| `import Fuse from 'fuse.js'` | dropped — global |
| `import { X } from 'lucide-react'` | `const { X } = lucide;` |
| `import React, { useState } from 'react'` | `const { useState } = React;` |
| `import { a, b } from './x.js'` | `const { a, b } = AINOW['src/x'];` |
| `import Foo from './x.js'` | `const Foo = AINOW['src/x'].default;` |
| `export const foo = …` | `const foo = …` + added to the module's export object |
| `export { a, b }` | added to the export object |
| `export default X` | `__exports.default = X` |
| `export * from './hooks.js'` | `Object.assign(__exports, AINOW['src/hooks'])` |
| `await import('./data-x.js')` | `await AINOW.loadScript('data/data-x.js')` |

Each converted file is wrapped in an IIFE so top-level names don't collide.

- [ ] **Step 1: Write the module loader**

Create `biz/src/runtime.js` — the only hand-written runtime piece, loaded first on every page:

```javascript
// Classic-script module registry. Replaces the ES module graph so the app
// loads from file://, where <script type="module"> is CORS-blocked.
(function () {
    window.AINOW = window.AINOW || {};

    var loaded = {};

    // Replaces dynamic import(). Injects a classic script and resolves once
    // the module has registered itself. Mirrors the education app's
    // I18n.loadLangData() pattern.
    window.AINOW.loadScript = function (relPath) {
        var key = relPath.replace(/\.js$/, '');
        if (loaded[key]) { return loaded[key]; }
        loaded[key] = new Promise(function (resolve, reject) {
            if (window.AINOW[key]) { resolve(window.AINOW[key]); return; }
            var s = document.createElement('script');
            s.src = (window.AINOW.basePath || '') + relPath;
            s.onload = function () { resolve(window.AINOW[key]); };
            s.onerror = function () { reject(new Error('Failed to load ' + relPath)); };
            document.head.appendChild(s);
        });
        return loaded[key];
    };
})();
```

- [ ] **Step 2: Write the codemod**

Create `scripts/esm-to-classic.mjs`. Full source:

```javascript
// One-shot ESM -> classic-script codemod for biz/.
// Run from the repo root:  node scripts/esm-to-classic.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative, sep } from 'path';

const BIZ = join(process.cwd(), 'biz');
const GLOBAL_ONLY = { react: 'React', 'react-dom': 'ReactDOM', 'react-dom/client': 'ReactDOM', htm: 'htm', 'fuse.js': 'Fuse' };
const NAMESPACE = { 'lucide-react': 'lucide' };

function walk(dir, out = []) {
    for (const name of readdirSync(dir)) {
        const p = join(dir, name);
        if (statSync(p).isDirectory()) { walk(p, out); }
        else if (name.endsWith('.js')) { out.push(p); }
    }
    return out;
}

const keyOf = (file) => relative(BIZ, file).split(sep).join('/').replace(/\.js$/, '');

function resolveKey(fromFile, spec) {
    const dir = join(fromFile, '..');
    return keyOf(join(dir, spec));
}

function convert(file) {
    let src = readFileSync(file, 'utf8');
    const exported = new Set();
    const prelude = [];

    // import ... from '...';  (handles multi-line braces)
    src = src.replace(
        /^import\s+([\s\S]*?)\s+from\s+['"]([^'"]+)['"];?\s*$/gm,
        (_m, clause, spec) => {
            clause = clause.trim();
            if (GLOBAL_ONLY[spec] !== undefined || NAMESPACE[spec]) {
                const globalName = GLOBAL_ONLY[spec] || NAMESPACE[spec];
                const named = clause.match(/\{([\s\S]*)\}/);
                const lines = [];
                if (named) { lines.push(`const {${named[1]}} = ${globalName};`); }
                const def = clause.replace(/,?\s*\{[\s\S]*\}/, '').trim();
                if (def && def !== globalName) { lines.push(`const ${def} = ${globalName};`); }
                return lines.join('\n');
            }
            const key = resolveKey(file, spec);
            const named = clause.match(/\{([\s\S]*)\}/);
            const def = clause.replace(/,?\s*\{[\s\S]*\}/, '').trim();
            const lines = [];
            if (named) { lines.push(`const {${named[1]}} = AINOW['${key}'];`); }
            if (def) { lines.push(`const ${def} = AINOW['${key}'].default;`); }
            return lines.join('\n');
        }
    );

    // export * from './x.js'
    src = src.replace(/^export\s+\*\s+from\s+['"]([^'"]+)['"];?\s*$/gm, (_m, spec) => {
        prelude.push(`Object.assign(__exports, AINOW['${resolveKey(file, spec)}']);`);
        return '';
    });

    // export const / function / class NAME
    src = src.replace(/^export\s+(const|let|var|function|class)\s+([A-Za-z0-9_$]+)/gm, (_m, kind, name) => {
        exported.add(name);
        return `${kind} ${name}`;
    });

    // export { a, b as c };
    src = src.replace(/^export\s*\{([^}]*)\};?\s*$/gm, (_m, names) => {
        names.split(',').map(s => s.trim()).filter(Boolean).forEach(n => {
            const [orig, alias] = n.split(/\s+as\s+/).map(s => s.trim());
            exported.add(alias || orig);
        });
        return '';
    });

    // export default X
    let hasDefault = false;
    src = src.replace(/^export\s+default\s+/gm, () => { hasDefault = true; return 'const __default = '; });

    // dynamic import('./x.js')
    src = src.replace(/import\(\s*['"]([^'"]+)['"]\s*\)/g, (_m, spec) =>
        `AINOW.loadScript('${resolveKey(file, spec)}.js')`);

    const assigns = [...exported].map(n => `  __exports.${n} = ${n};`).join('\n');
    const defAssign = hasDefault ? '  __exports.default = __default;\n' : '';

    return `(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['${keyOf(file)}'] = AINOW['${keyOf(file)}'] || {};
${prelude.join('\n')}
${src}
${assigns}
${defAssign}})();
`;
}

const files = [...walk(join(BIZ, 'src')), ...walk(join(BIZ, 'data')), ...walk(join(BIZ, 'locales'))]
    .filter(f => !f.includes(`${sep}runtime.js`));

let n = 0;
for (const f of files) { writeFileSync(f, convert(f), 'utf8'); n++; }
console.log(`Converted ${n} files.`);
```

- [ ] **Step 3: Run the codemod on a copy first**

Never run it in place before seeing the output. Commit the untouched tree (done in Task 3), so `git diff` is the review surface.

```bash
cd "D:/AINOW Literacy - dev" && node scripts/esm-to-classic.mjs
```

Expected: `Converted 71 files.` (exact count may differ; it must be non-zero and match the file count).

- [ ] **Step 4: Verify no ESM syntax survives**

```bash
cd "D:/AINOW Literacy - dev/biz" && grep -rn "^import \|^export " src data locales --include=*.js | head -20
```

Expected: no output. Every remaining line is a case the codemod missed and must be fixed by hand.

- [ ] **Step 5: Review the diff for the known-tricky files**

Read the converted output of these four by hand — they carry the edge cases:

```bash
cd "D:/AINOW Literacy - dev" && head -40 biz/src/components.js && head -30 biz/src/index.js && head -20 biz/locales/locales.js && head -20 biz/data/data.js
```

Confirm: `components.js` has the `Object.assign(__exports, …)` for its `export *`; `data.js`'s lazy category map uses `AINOW.loadScript`; no `const React = React;` self-assignment appears anywhere.

- [ ] **Step 6: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add -A biz/ && git commit -m "refactor(biz): convert ES modules to classic scripts

Applies a scripted codemod so the app loads from file://, where module
scripts are CORS-blocked. Every module registers its exports on
window.AINOW; dynamic import() becomes injected classic scripts, mirroring
the education app's I18n.loadLangData pattern.

Component logic, htm templates, and hooks are unchanged — only module
resolution."
```

---

### Task 5: Rewrite the HTML entry points

**Files:**
- Modify: `biz/index.html`, `biz/agents.html`, `biz/builder.html`, `biz/playbooks.html`, `biz/help.html`
- Create: `biz/config.js`

**Interfaces:**
- Consumes: `window.AINOW` keys from Task 4, globals from Task 3
- Produces: 5 working pages. Load order is explicit: libs → runtime → config → shared modules → page entry.

- [ ] **Step 1: Create `biz/config.js`**

Replaces Vite's `define` substitutions:

```javascript
// Replaces Vite's build-time `define` substitutions.
window.AINOW = window.AINOW || {};
window.AINOW.env = {
    APP_VERSION: '0.94',
    // No API key ships in a static, offline-first app. Features requiring
    // one must degrade gracefully.
    API_KEY: ''
};
```

- [ ] **Step 2: Replace the module script block in each page**

In each of the 5 HTML files, replace `<script type="module" src="src/<page>.js"></script>` with an ordered classic block. For `index.html`:

```html
<script src="libs/react.js"></script>
<script src="libs/react-dom.js"></script>
<script src="libs/htm.js"></script>
<script src="libs/fuse.js"></script>
<script src="libs/lucide-react.js"></script>
<script src="src/runtime.js"></script>
<script src="config.js"></script>
<script src="src/utils.js"></script>
<script src="src/hooks.js"></script>
<script src="src/components/ui/Logo.js"></script>
<script src="src/components/layout/Header.js"></script>
<script src="src/components/layout/Sidebar.js"></script>
<script src="src/components/layout/Footer.js"></script>
<script src="src/ErrorBoundary.js"></script>
<script src="src/config.js"></script>
<script src="src/components.js"></script>
<script src="src/StaticPages.js"></script>
<script src="src/pdfExport.js"></script>
<script src="locales/locales-en.js"></script>
<script src="locales/locales-mk.js"></script>
<script src="locales/locales-sq.js"></script>
<script src="locales/locales.js"></script>
<script src="data/data.js"></script>
<script src="src/index.js"></script>
```

For the other pages, replace the final line with `src/agents.js`, `src/builder.js`, `src/playbooks.js`, or `src/help.js`, and add `data/data-agents.js`, `data/data-playbooks.js`, `data/data-situations.js` before it on the pages that need them.

Also remove the `<link rel="modulepreload">` tags — they refer to module scripts that no longer exist.

- [ ] **Step 3: Point Tailwind at the local copy**

Confirm each page loads `libs/tailwindcss.js`, not a CDN URL:

```bash
cd "D:/AINOW Literacy - dev/biz" && grep -n "tailwind" *.html | grep -v "libs/tailwindcss.js"
```

Expected: only the `tailwind.config` blocks and the warning suppressor — no `cdn.tailwindcss.com` script tag.

- [ ] **Step 4: Verify no module scripts remain**

```bash
cd "D:/AINOW Literacy - dev/biz" && grep -n 'type="module"\|modulepreload' *.html
```

Expected: no output.

- [ ] **Step 5: Open each page from `file://` and check the console**

Double-click each of `index.html`, `agents.html`, `builder.html`, `playbooks.html`, `help.html`.

Expected per page: renders fully, and the console shows **no** CORS errors, no `AINOW[...] is undefined`, and no `X is not defined`. A `Cannot read properties of undefined` naming a module key means that module loads too late — move its `<script>` earlier.

- [ ] **Step 6: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add -A biz/ && git commit -m "feat(biz): classic-script entry points for all 5 pages

Explicit dependency-ordered script tags replace module scripts and
modulepreload hints. Adds config.js in place of Vite's define
substitutions. All 5 pages now open from file://."
```

---

### Task 6: Retint to `#4F46E5`

**Files:**
- Modify: the `tailwind.config` block in all 5 HTML files
- Modify: `biz/assets/style.css`

**Interfaces:**
- Consumes: working pages from Task 5
- Produces: no interface change. Palette values only.

The 439 `coral-*` class usages across `src/` are **not** touched — they resolve to the new values automatically.

- [ ] **Step 1: Redefine the palette in each HTML file**

In every `tailwind.config` block, replace the `coral` entry:

```javascript
            coral: {
              DEFAULT: '#4F46E5',
              light: 'rgba(79, 70, 229, 0.15)',
              hover: '#4338CA',
            },
```

- [ ] **Step 2: Update the theme colour meta tag**

In each page: `<meta name="theme-color" content="#4f46e5">`

- [ ] **Step 3: Replace hard-coded coral hexes in the stylesheet**

```bash
cd "D:/AINOW Literacy - dev/biz" && grep -in "E87B5F\|D66A4E" assets/style.css
```

Replace each `#E87B5F` with `#4F46E5` and `#D66A4E` with `#4338CA`.

- [ ] **Step 4: Verify no old accent survives in business, and education is untouched**

```bash
cd "D:/AINOW Literacy - dev" && echo "biz old accent:" && grep -rin "E87B5F\|D66A4E" biz --include=*.html --include=*.css | wc -l && echo "edu accent intact:" && grep -c "d97757" edu/css/styles.css
```

Expected: `0` for business; non-zero for education.

- [ ] **Step 5: Visually confirm**

Open `biz/index.html`. Expected: buttons, active nav, and focus rings are indigo. Open `edu/index.html`. Expected: still orange, entirely unchanged.

- [ ] **Step 6: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add -A biz/ && git commit -m "style(biz): retint accent to #4F46E5

Redefines the coral palette values in each page's tailwind config and the
stylesheet's hard-coded hexes. The 439 coral-* class usages in src/ are
untouched and resolve to the new values. Education's #d97757 is unchanged."
```

---

### Task 7: Enable the Business card and verify end to end

**Files:**
- Modify: `index.html` (repo root)
- Modify: `README.md`

**Interfaces:**
- Consumes: a working `biz/` from Tasks 1–6
- Produces: the completed v0.94 platform.

- [ ] **Step 1: Turn the disabled Business card into a link**

In the root `index.html`, replace the `<span class="card card--biz" aria-disabled="true">` element with an anchor, and drop the "coming soon" badge:

```html
    <a class="card card--biz" href="./biz/index.html">
        <div class="card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
        </div>
        <h2 data-t="biz.title">Бизнис</h2>
        <p data-t="biz.desc">Промптови, агенти и сценарија за професионална употреба.</p>
    </a>
```

Remove the now-unused `biz.badge` key from all three dictionaries in the same file.

- [ ] **Step 2: Full `file://` acceptance pass**

Every row must pass:

| # | Check | Expected |
|---|---|---|
| 1 | Double-click root `index.html` | Chooser renders; both cards active |
| 2 | Click Education | App loads; footer `v0.94`; all views work |
| 3 | Click Business | Prompt library loads, indigo accent |
| 4 | Business → each of the 5 pages | All render; console clean |
| 5 | Business → switch MK / EN / SQ | All three work; no `bs`/`sr` options |
| 6 | Business → open a prompt category | Lazy-loaded data appears (exercises `AINOW.loadScript`) |
| 7 | Business → Situations | Wizard runs and generates output |
| 8 | Business → Builder | Assembles and copies a prompt |
| 9 | Education, network disabled | Still fully functional |
| 10 | Education accent | Still `#d97757`, nothing changed |

- [ ] **Step 3: Confirm the source folder was never written to**

```bash
cd "D:/AINOW/AI PROMPT LIBRARY - working V" && git status --short | head
```

Expected: unchanged from before this plan started.

- [ ] **Step 4: Update the changelog**

In `README.md`, extend the v0.94 entry with the Business half: shipped surface, 3 languages, buildless classic-script conversion, indigo accent.

- [ ] **Step 5: Rebuild the release zip**

```powershell
Set-Location "D:\AINOW Literacy - dev"
Remove-Item AINOW-Literacy-v0.94.zip -Force -ErrorAction SilentlyContinue
Compress-Archive -Path index.html,landing.css,manifest.json,service-worker.js,404.html,robots.txt,sitemap.xml,CNAME,LICENSE,README.md,CONTRIBUTING.md,edu,biz -DestinationPath AINOW-Literacy-v0.94.zip -Force
```

- [ ] **Step 6: Verify the zip is self-contained**

Extract to a scratch folder, double-click `index.html`, and click through to **both** apps. This is the property teachers and businesses depend on — it must be tested on the artifact, not the working tree.

- [ ] **Step 7: Commit and re-tag**

```bash
cd "D:/AINOW Literacy - dev" && git add -A && git commit -m "feat: enable Business on the landing page

Completes v0.94. Both apps now open by double-clicking index.html." && git tag -f v0.94 -m "v0.94 - dual-app platform: education at /edu/, business at /biz/"
```

---

## Self-Review

**Spec coverage:**

| Spec section | Task |
|---|---|
| §7.0 De-build and module conversion | 3, 4, 5 |
| §7.1 Retint | 6 |
| §7.2 Five languages to three | 2 |
| §7.3 Drop bs/sr prompt data | 2 |
| §7.4 Drop Lab | 2 |
| §7.5 Shipped surface | 2, 5 |
| §10 Verification | 7 |
| §8.1–8.2 Education content | Deferred per §9 — rolling after v0.94 |

**Placeholder scan:** No TBDs. Every code step contains complete, runnable content.

**Type consistency:** `AINOW['<path-without-extension>']` is the module key format in Task 4's codemod, Task 4 Step 5's review, and Task 5's script ordering. `AINOW.loadScript(relPath)` takes a path *with* `.js` and strips it internally; the codemod emits `.js`, matching. `window.AINOW.env` is written in Task 5 Step 1 and read by converted `config.js` consumers.

**Known risks:**

1. **Script load order (Task 5) is the most likely failure point.** The codemod removes the dependency graph that ESM enforced; order is now manual. Symptom is `Cannot read properties of undefined` naming a module key. Fix by moving that script earlier. Convert and test **one page at a time** rather than all five at once.
2. **The codemod's regexes are not a JS parser.** Unusual formatting — an import inside a comment, a string containing `export `, an unconventional line break — can slip through. Task 4 Step 4's grep is the backstop; treat any hit as a manual fix, not a codemod bug to chase.
3. **`lucide-react` bundling needs network and npm once.** If unavailable, the fallback is replacing lucide icons with inline SVGs, as the education app does.
