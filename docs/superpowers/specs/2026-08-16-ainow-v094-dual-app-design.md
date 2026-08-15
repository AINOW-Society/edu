# AINOW v0.94 — Dual-App Platform Design

**Date:** 2026-08-16
**Author:** Suad Seferi / AINOW Society
**Status:** Approved design, pending implementation plan

---

## 1. Goal

Turn the single AINOW education PWA into a two-product platform behind one
landing page:

- **Education** (`/edu/`) — the existing v0.93 app. Stays free, stays
  buildless, stays offline-first. Logic and design unchanged. Content expanded.
- **Business** (`/biz/`) — a trimmed copy of the AI Prompt Library, converted to
  run buildless from `file://` and retinted to its own accent color. Design and
  component logic unchanged.

Ships as **v0.94**. The existing v0.93 GitHub release is not modified.

## 2. Constraints

These are hard requirements, not preferences.

1. **The source prompt-library folder is read-only.**
   `D:\AINOW\AI PROMPT LIBRARY - working V` is never modified, moved, or
   deleted. All business-side changes apply to the copy inside v0.94.
2. **`AINOW-Literacy-v0.93` is not modified.** v0.94 is a new sibling folder.
   v0.93 remains a working fallback on disk for the entire migration.
3. **Both apps run by double-clicking `index.html`.** No build step, no server,
   no tooling, no network — for education *and* business (see §7.0). This is the
   property that makes the platform usable in a school with no internet, and it
   applies to both halves.
4. **Education stays free.** No gating, no paywall, no auth.
5. **Neither app's design or component logic is rewritten.** Business is
   retinted via palette values only; education's view/router/i18n code is
   touched only where the new Higher Education category requires it.

## 3. Why two apps rather than one

The two codebases are not the same kind of program:

| | Education v0.93 | AI Prompt Library (after §7.0) |
|---|---|---|
| Rendering | Hand-written DOM strings | React 19 + htm |
| Styling | Hand-authored CSS, custom properties | Tailwind runtime script |
| Module system | Classic `<script>`, globals | Classic `<script>`, globals |
| Build | None | None |
| Runs from `file://` | Yes | Yes |
| Entry points | 1 (view switcher, no URL router) | 5 HTML pages |
| Content | ~1.5 MB, `js/lang/{mk,en,sq}/` | ~4.4 MB, `data/` |
| i18n | Flat key map in `i18n.js` | 3 locale files, deep-merged |

After §7.0 the two apps share a delivery model — classic scripts, no build,
`file://`-openable — but not a rendering model. Education builds DOM by hand;
business renders through React. Unifying *those* would mean rewriting the
Situations wizard, Agents hub, and Builder across 27 modules, which buys nothing
the user can see.

Therefore: **two independent apps, one shared landing page.** They share the
domain, the chooser, and the no-build promise. They do not share a header,
sidebar, theme system, or service worker.

## 4. Target layout

```
D:\AINOW Literacy - dev\
├── AINOW-Literacy-v0.93\        UNTOUCHED — current release
└── AINOW-Literacy-v0.94\        NEW
    ├── index.html               landing page / chooser
    ├── landing.css
    ├── service-worker.js        migration + cleanup worker (see §6)
    ├── manifest.json            landing-scope manifest
    ├── CNAME                    edu.ainow.mk
    ├── robots.txt
    ├── sitemap.xml
    ├── 404.html                 path-aware (see §6.5)
    ├── edu\                     copy of v0.93, migrated to /edu/ scope
    └── biz\                     copy of the prompt library, unbuilt (§7.0)

D:\AINOW\AI PROMPT LIBRARY - working V\   READ-ONLY SOURCE — untouched
```

Because the build step is removed (§7.0), there is **no `biz-src` / `biz`
split**. `biz/` is both the editable source and what gets served, exactly as
`edu/` is. No `node_modules`, no `package.json`, no Vite in the deployed tree.

## 5. Landing page

Vanilla HTML + CSS. No framework, no build, no dependencies.

- Two cards: **Education** (`#d97757`, existing brand orange) and **Business**
  (new accent, see §7.1).
- MK / EN / SQ switcher, reusing education's translation-key convention.
- Reuses education's CSS custom properties so the chooser reads as the same
  product family.
- Choice is **not** persisted as an auto-redirect. A returning visitor sees the
  chooser. The only automatic redirect is the standalone-mode case in §6.4.

## 6. PWA and URL migration

This is the highest-risk area. Education currently owns `/`. Teachers who
already installed the PWA have `start_url: "/"` baked into their home-screen
icon, and a service worker registered at scope `/` that serves v0.93 from cache.

Five coordinated changes:

### 6.1 Education manifest
`edu/manifest.json`: `start_url` and `scope` change from `"/"` to `"/edu/"`.
Icon paths are already relative and need no change.

### 6.2 Education service worker
`edu/service-worker.js`:
- `CACHE_NAME` → `ai-edu-v0.94`
- All 33 precache entries rewritten from absolute (`/css/styles.css`) to
  relative (`./css/styles.css`)
- Navigation fallback `caches.match('/index.html')` → `./index.html`

Registration in `edu/index.html` is already `'./service-worker.js'`, which
auto-scopes to `/edu/`. **No registration change needed.**

### 6.3 Root cleanup worker
A new `service-worker.js` at root, replacing the old file at the same URL.

Devices with the old worker registered at scope `/` fetch this URL on their next
update check. The new worker must, on `activate`:
1. Delete all caches matching `ai-edu-*`.
2. Claim clients so the stale v0.93 shell stops being served from `/`.

Without this, existing installs continue serving cached v0.93 from root
indefinitely and never see the landing page.

### 6.4 Standalone redirect
Root `index.html`: if launched in standalone display-mode
(`matchMedia('(display-mode: standalone)')` or `navigator.standalone`), redirect
to `/edu/`.

An existing home-screen icon must open the app the user installed, not a chooser
they never asked for. Browser visits to `/` still get the chooser.

### 6.5 404 handling
The current `404.html` unconditionally runs `window.location.replace('/')`.
Under the new layout a deep education URL that 404s would land on the chooser.

GitHub Pages supports only one root `404.html`, so it becomes path-aware:
redirect to `/edu/` for paths under `/edu/`, `/biz/` for paths under `/biz/`,
and `/` otherwise. The existing `sessionStorage['spa-redirect']` handoff is
preserved.

### 6.6 SEO
`sitemap.xml` and canonical tags updated for the new paths. `CNAME` and
`robots.txt` unchanged.

## 7. Business app changes

All changes apply to the copy in `v0.94\biz\`, never to the source folder.

### 7.0 Remove the build step and the module system

Business must open from `file://` (constraint 3). This requires **two** changes
that are easy to conflate:

1. Removing the build step (Vite).
2. Converting ES modules to classic scripts.

Removing the build alone is *not sufficient*. Browsers block
`<script type="module">` loaded from `file://` under CORS (origin `null`),
whether or not the code was bundled. The build was never what enabled or
prevented `file://` — the module system is.

#### What makes this tractable

- **No JSX.** All 27 source files use `htm.bind(React.createElement)`, a runtime
  template-literal library. Verified: zero JSX in `src/`. Nothing needs
  transpiling.
- **Tailwind is already a runtime classic script** (`libs/tailwindcss.js`), which
  loads from `file://` today.
- **Every conversion pattern already exists in the education app.** This is not
  novel work; it is applying a proven in-house pattern.

#### Conversion scope

Measured after Lab (§7.4) and bs/sr (§7.2, §7.3) are dropped:

| Area | Files | Import/export statements |
|---|---|---|
| `src/` | ~28 | ~170 |
| `data/` | ~39 | ~41 |
| `locales/` | 4 | ~10 |

#### Conversion patterns

Each has a direct precedent in `AINOW-Literacy-v0.93`:

| ESM form | Classic form | Education precedent |
|---|---|---|
| `export const X = {…}` | `window.AINOW.X = {…}` | `js/lang/mk/prompts.js` assigning `window.__embeddedPromptsByLang[L]` |
| `import { X } from './y.js'` | read `window.AINOW.X` inside an IIFE | `js/app.js` reading `embeddedPromptsData` |
| `await import('./data-x.js')` | inject `<script>`, await `onload` | `I18n.loadLangData()`, `App._prefetchPromptCounts()` |
| `<script type="module" src>` | ordered classic `<script>` tags | `index.html` lines 463–476 |

A single global namespace object (`window.AINOW`) replaces the module graph.
Load order is made explicit in each HTML file, dependencies first.

**Component logic, htm templates, hooks, and state management are not modified.**
Only how files locate each other changes.

#### Dependency builds

The vendored libs in `public/libs/` are esm.sh ESM builds and must be replaced
with global/UMD equivalents:

| Library | Global build |
|---|---|
| react | Official UMD build |
| react-dom/client | Official UMD build |
| htm | Official UMD build (`htm/dist/htm.umd.js`) |
| fuse.js | Official UMD build |
| **lucide-react** | **No UMD published — requires a one-time bundle** |

`lucide-react` is imported at 21 sites. It is bundled **once** into a global
build, committed to the repo alongside the other libs, and never rebuilt. This
is the same provenance as the current `libs/` files, which were themselves
produced by esm.sh. No user or contributor ever runs a bundler; the deployed
tree stays buildless.

#### Vite removal

1. **Plain `config.js`** replacing the `process.env.API_KEY`,
   `process.env.GEMINI_API_KEY`, and `__APP_VERSION__` substitutions.
2. **Delete** `vite.config.ts`, `package.json`, `package-lock.json`,
   `tsconfig.json`, `node_modules/`, `dist/`, and `scripts/` from the copy.
3. Move `public/libs/` to `biz/libs/`.

#### Risk

This is the largest single work item in v0.94 and the only one that touches
business source beyond deletions and color values. It is mechanical rather than
creative, but ~220 edit sites means transcription errors are the main hazard.
Mitigation: convert one page's dependency chain at a time, verifying each page
loads from `file://` before moving to the next, rather than converting all files
and testing at the end.

### 7.1 Retint
The Tailwind config is defined **once per HTML file** (verified: exactly one
`tailwind.config` block in each of the 6 pages). Retinting redefines the `coral`
palette hex values in each config block, plus `assets/style.css` and the
`theme-color` meta tag.

The 439 `coral-*` class usages across `src/` are **not touched** — they resolve
to the new values automatically. This is why the retint carries near-zero
regression risk.

Education keeps `#d97757`. Business takes a distinct accent; exact value chosen
at implementation time and confirmed before it is applied.

### 7.2 Five languages to three
- Delete `locales/locales-bs.js`, `locales/locales-sr.js`
- Update the `registry` in `locales/locales.js` to `{ en, mk, sq }`
- Remove `bs`/`sr` from the language switcher UI

### 7.3 Drop Bosnian/Serbian prompt data
The prompt library has four *language* categories — prompts written in that
language, distinct from UI locale. Two are dropped with their locales:
- Delete `data/data-bosnian.js`, `data/data-serbian.js` (~510 KB)
- Remove entries from `data/data.js`, `data/data-counts.js`, `src/config.js`

`macedonian` and `albanian` categories are retained.

### 7.4 Drop Lab
- Delete `lab.html`, `src/lab.js`, `src/tools/`, `src/assessments/`
- Remove the Lab nav link from `src/components.js` (`NAV_LINKS`)

This removes all 6 tools including the Readiness Assessment subsystem. With the
build removed there is no `rollupOptions.input` list to update — deleting the
HTML file is sufficient.

### 7.5 Shipped surface
`/biz/` ships: **Prompts, Agents, Situations, Playbooks, Builder, Help.**

Situations and Playbooks are both rendered by `src/playbooks.js`. Because
Playbooks is retained, **no file split is required** — they ship together as-is.

## 8. Education app changes

### 8.1 Phase 1 — language parity

Current state, verified by counting `subcategory:` fields:

| MK | EN | SQ | Total |
|---|---|---|---|
| 324 | 259 | 343 | **926** |

The three sets are **independently authored, not translations of each other**. A
teacher switching MK → EN sees different prompts.

**Blocker:** MK entries carry stable `id: 'T-001'` fields. EN and SQ entries
have **no `id` field at all**. Parity cannot be verified or maintained without
stable identifiers.

Sequence:
1. Introduce a shared ID scheme across all three language files.
2. Reconcile to one canonical set (~343 prompts).
3. Author the gaps: ~19 MK, ~84 EN.

Result: every prompt exists in all three languages.

### 8.2 Phase 2 — Higher Education category

A third top-level category beside Teachers and Administration, targeting
universities and academic staff. Subcategories: lecturer, researcher, student
services.

Code touchpoints in `js/app.js`:
- `renderPromptCatTabs()` — currently hardcodes exactly **two** category
  buttons; generalize to a loop over a category list
- `subMap` — add the `higher_ed` subcategory array
- `_promptSubIcons` — add icons for the new subcategories
- `renderSidebarCtx()`, `prompts` branch — add the new section

Plus i18n keys (`prompts.cat.higher_ed` and subcategory keys) in MK, EN, SQ, and
the prompt data itself (~60–80 per language).

**Explicitly untouched:** `_guideCategoryMap`, `js/router.js`,
`js/service-worker.js` logic, `views/resources.js`, the guide, quizzes,
homework, glossary, and PDF export.

### 8.3 Phase 3 — version sync
- `APP_VERSION` → `v0.94` (`js/app.js`)
- `CACHE_NAME` → `ai-edu-v0.94` (`edu/service-worker.js`)
- All `?v=93` → `?v=94` in `edu/index.html`
- Restore `scripts/bump-version.ps1`, which the README documents but which
  **does not exist** in the v0.93 folder — so this stays one command instead of
  a manual sweep

## 9. Sequencing

The code work is on the order of days. Phases 8.1 and 8.2 are roughly **500
authored prompts across three languages** and are the long pole by a wide
margin.

Therefore v0.94 ships as a **structural release**:

**In v0.94:** landing page, `/edu/` + `/biz/` split, PWA migration, business
de-build and module conversion (§7.0), retint, language reduction, Lab removal,
version sync.

**Rolling after v0.94:** prompt parity (8.1), then Higher Education (8.2),
drafted in reviewable batches.

Holding the structural release until ~500 prompts are written means nothing
ships for a long time. Prompt data is additive and requires no further
structural change once the category exists.

## 10. Verification

No automated test suite exists in either project, so verification is manual and
must be explicit:

1. **Education offline** — open `edu/index.html` from `file://` with the network
   disabled; confirm all views, language switching, and PDF export work.
2. **PWA migration** — with v0.93 installed from `/`, deploy v0.94 and confirm
   the old cache is evicted, the home-screen icon opens `/edu/`, and a browser
   visit to `/` shows the chooser.
3. **Business offline from disk** — open `biz/index.html` by double-click, from
   `file://`, with the network disabled and no `node_modules` present. All 5
   pages load; Prompts, Agents, Situations, Playbooks, and Builder all function;
   category lazy-loading works; language switching works; the console shows no
   CORS errors and no `undefined` global-namespace reads.
4. **Retint** — no `coral` class resolves to the old orange; education's
   `#d97757` is unchanged.
5. **Deep links** — a 404 under `/edu/` and under `/biz/` each land in the
   correct app.
6. **Content counts** — the education home stat bar reports the expected prompt
   totals in each language.

## 11. Open items

1. **Business accent color** — chosen at implementation time and confirmed
   before it is applied (§7.1).
