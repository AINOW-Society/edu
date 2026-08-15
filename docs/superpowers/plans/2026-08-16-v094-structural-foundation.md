# AINOW v0.94 Structural Foundation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the single-app repo into a two-product platform shell — a landing page at `/`, the existing education app relocated to `/edu/` with its PWA scope migrated, and a `/biz/` placeholder — released as v0.94.

**Architecture:** The repo root becomes the deployed site. The education app moves wholesale into `edu/` via `git mv` so history follows the files. A vanilla landing page takes over `/`. A cleanup service worker at the old root scope evicts stale v0.93 caches from already-installed PWAs. No education application logic is modified — only paths, scope, and version identifiers.

**Tech Stack:** Vanilla HTML/CSS/JS. No build step, no framework, no dependencies. Git for release tagging. PowerShell for zip packaging.

**Spec:** `docs/superpowers/specs/2026-08-16-ainow-v094-dual-app-design.md`

## Global Constraints

- `D:\AINOW\AI PROMPT LIBRARY - working V` is **read-only** — never modified, moved, or deleted.
- `AINOW-Literacy-v0.93\` and `AINOW-Literacy-v0.93.zip` stay on disk untouched; they are gitignored, never committed.
- Both apps must run by double-clicking `index.html` — no build step, no server, no network.
- Education stays free. No gating, no paywall, no auth.
- No education view/router/i18n **logic** is modified in this plan. Paths, scope, and version strings only.
- Education accent color remains `#d97757`. Business accent is `#4F46E5`.
- Version identifiers move together: `APP_VERSION` `v0.94`, `CACHE_NAME` `ai-edu-v0.94`, asset query `?v=94`.
- There is no automated test suite. Every task's verification is an explicit manual check with a stated expected result.

## File Structure

| Path | Responsibility |
|---|---|
| `index.html` | Landing page / product chooser. Standalone-mode redirect to `/edu/`. |
| `landing.css` | Landing page styling. Reuses education's design tokens. |
| `service-worker.js` | Root-scope cleanup worker. Evicts stale `ai-edu-*` caches, then unregisters. |
| `manifest.json` | Landing-scope PWA manifest. |
| `404.html` | Path-aware SPA redirect for `/edu/`, `/biz/`, and root. |
| `sitemap.xml`, `robots.txt`, `CNAME` | SEO and domain config. `CNAME` unchanged. |
| `edu/**` | The v0.93 application, relocated. Only `manifest.json`, `service-worker.js`, `index.html`, and `js/app.js` change. |
| `biz/index.html` | Placeholder until Plan 2. |
| `scripts/bump-version.ps1` | Restores the single-command version sync the README documents. |
| `.gitignore` | Excludes local v0.93 copies and OS cruft. |

---

### Task 1: Recover the repo working tree

The working tree currently shows 45 unstaged deletions because the app files were physically moved into `AINOW-Literacy-v0.93/`. `HEAD` is intact and tag `v0.93` exists, so nothing is at risk. This task restores the tree and stops the local copies from ever being committed.

**Files:**
- Modify: `.gitignore`
- Restore: all 45 tracked files at repo root

**Interfaces:**
- Consumes: nothing (first task)
- Produces: a clean working tree at `D:\AINOW Literacy - dev` with the v0.93 app present at repo root, ready for Task 2's `git mv`.

- [ ] **Step 1: Confirm the safety net exists before touching anything**

```bash
cd "D:/AINOW Literacy - dev" && git tag -l v0.93 && git rev-parse v0.93
```

Expected: prints `v0.93` and a commit SHA. If either is missing, **stop** — do not proceed, the fallback is not in place.

- [ ] **Step 2: Confirm the deletions are unstaged, not committed**

```bash
cd "D:/AINOW Literacy - dev" && git diff --cached --name-only | wc -l && git diff --name-only | wc -l
```

Expected: `0` then `45`. A non-zero first number means deletions are staged — unstage with `git reset` before continuing.

- [ ] **Step 3: Restore the deleted files from HEAD**

```bash
cd "D:/AINOW Literacy - dev" && git restore .
```

- [ ] **Step 4: Verify the tree is clean and the app is back at root**

```bash
cd "D:/AINOW Literacy - dev" && git status --short && ls index.html js/app.js css/styles.css
```

Expected: `git status --short` shows only untracked entries (`.claude/`, `.cursor/`, `AINOW-Literacy-v0.93/`, the zip, `docs/`). All three files exist.

- [ ] **Step 5: Write `.gitignore`**

Create `.gitignore` at repo root:

```gitignore
# Local working copies — v0.93 is permanently available at tag v0.93
AINOW-Literacy-v0.93/
AINOW-Literacy-v0.94/
*.zip

# Editor and tooling
.claude/
.cursor/

# OS
Thumbs.db
.DS_Store

# Business app tooling (Plan 2) — the deployed tree stays buildless
biz/node_modules/
biz/dist/
```

- [ ] **Step 6: Verify the local copies are now ignored**

```bash
cd "D:/AINOW Literacy - dev" && git status --short
```

Expected: `AINOW-Literacy-v0.93/` and `AINOW-Literacy-v0.93.zip` no longer appear.

- [ ] **Step 7: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add .gitignore docs/ && git commit -m "chore: restore working tree and ignore local release copies

The v0.93 app files were physically moved into a subfolder, leaving 45
unstaged deletions. HEAD and tag v0.93 were unaffected. Restore the tree
and gitignore the local copies so they are never committed as duplicates
of the tagged release.

Also adds the v0.94 design spec and implementation plan."
```

---

### Task 2: Relocate the education app into `edu/`

**Files:**
- Move: 45 tracked files from repo root into `edu/`
- Keep at root: `CNAME`, `robots.txt`, `LICENSE`, `README.md`, `CONTRIBUTING.md`, `Home.md`, `sitemap.xml`, `404.html`

**Interfaces:**
- Consumes: clean working tree from Task 1
- Produces: `edu/index.html`, `edu/manifest.json`, `edu/service-worker.js`, `edu/js/**`, `edu/css/**`, `edu/views/**`, `edu/assets/**` — the paths every later task edits.

Use `git mv` rather than a filesystem move so history follows the files instead of reading as delete-plus-add.

- [ ] **Step 1: Create the target directory and move the application files**

```bash
cd "D:/AINOW Literacy - dev" && mkdir -p edu && git mv index.html manifest.json service-worker.js llms.txt assets css js views edu/
```

- [ ] **Step 2: Verify the move registered as renames, not deletes**

```bash
cd "D:/AINOW Literacy - dev" && git status --short | head -20
```

Expected: lines beginning with `R` (rename), not `D` followed by `??`. Seeing `D`/`??` pairs means the move bypassed git — undo and redo with `git mv`.

- [ ] **Step 3: Verify the app still runs from its new location**

Open `edu/index.html` by double-clicking it. Expected: the app loads, the home view renders, the stat bar shows prompt/chapter/tool counts, and the language switcher works. All asset paths in `index.html` are relative, so nothing should break.

- [ ] **Step 4: Confirm no absolute paths leaked**

```bash
cd "D:/AINOW Literacy - dev/edu" && grep -rn 'src="/\|href="/' index.html | grep -v '://' | head
```

Expected: no output. Any match is a root-absolute path that will now 404 and must be made relative.

- [ ] **Step 5: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add -A && git commit -m "refactor: relocate education app to edu/

Moves the v0.93 application into edu/ so the repo root can host the
landing page. Uses git mv so history follows the files. No application
logic changed; all internal paths were already relative."
```

---

### Task 3: Migrate the education PWA to `/edu/` scope

Teachers who already installed v0.93 have `start_url: "/"` in their home-screen icon. This task retargets the manifest and rewrites the service worker's absolute precache paths to relative ones.

**Files:**
- Modify: `edu/manifest.json`
- Modify: `edu/service-worker.js:1-36` (CACHE_NAME and precache list), `:75` (navigation fallback)

**Interfaces:**
- Consumes: `edu/` layout from Task 2
- Produces: an education app whose service worker scope is `/edu/` and whose cache key is `ai-edu-v0.94`. Task 6's cleanup worker relies on the old key `ai-edu-v0.93` no longer being in use.

The registration call in `edu/index.html` is already `'./service-worker.js'`, which auto-scopes to `/edu/`. **Do not change it.**

- [ ] **Step 1: Retarget the manifest**

In `edu/manifest.json`, change two values:

```json
  "start_url": "/edu/",
  "scope": "/edu/",
```

Leave `name`, `short_name`, `description`, `theme_color`, and the `icons` array unchanged — icon paths are already relative.

- [ ] **Step 2: Bump the cache key and rewrite precache paths as relative**

Replace lines 1–36 of `edu/service-worker.js` with:

```javascript
const CACHE_NAME = 'ai-edu-v0.94';
const urlsToCache = [
    './',
    './index.html',
    './css/styles.css',
    './js/i18n.js',
    './js/app.js',
    './js/router.js',
    './js/engine.js',
    './js/glossary-data.js',
    './manifest.json',
    './views/home.js',
    './views/help.js',
    './views/guide.js',
    './views/prompts.js',
    './views/tools.js',
    './views/about.js',
    './views/resources.js',
    './views/glossary.js',
    './js/lang/mk/docs.js',
    './js/lang/mk/prompts.js',
    './js/lang/en/docs.js',
    './js/lang/en/prompts.js',
    './js/lang/sq/docs.js',
    './js/lang/sq/prompts.js',
    './js/lang/mk/quizzes.js',
    './js/lang/en/quizzes.js',
    './js/lang/sq/quizzes.js',
    './js/lang/mk/homework.js',
    './js/lang/en/homework.js',
    './js/lang/sq/homework.js',
    './js/lib/html2canvas.min.js',
    './js/lib/jspdf.min.js',
    './assets/logo.svg',
    './assets/icon-maskable.svg'
];
```

- [ ] **Step 3: Fix the navigation fallback**

In `edu/service-worker.js`, in the `fetch` handler's navigate branch, change:

```javascript
                        .then(cached => cached || caches.match('/index.html'))
```

to:

```javascript
                        .then(cached => cached || caches.match('./index.html'))
```

- [ ] **Step 4: Verify no absolute paths remain**

```bash
cd "D:/AINOW Literacy - dev/edu" && grep -n "'/" service-worker.js
```

Expected: no output.

- [ ] **Step 5: Verify the app still loads offline from disk**

Open `edu/index.html` by double-click. Expected: app loads normally. (The service worker does not register on `file://` — the guard in `index.html` checks `window.location.protocol !== 'file:'` — so this confirms the precache edit did not break parsing.)

- [ ] **Step 6: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add edu/manifest.json edu/service-worker.js && git commit -m "fix(pwa): scope education app to /edu/

Retargets manifest start_url and scope, rewrites the service worker
precache list from root-absolute to relative paths, and bumps the cache
key to ai-edu-v0.94. Registration is already './service-worker.js' and
auto-scopes, so it is unchanged."
```

---

### Task 4: Bump education to v0.94 and restore the version script

The README documents `scripts/bump-version.ps1`, but the file does not exist. This task restores it and uses it, so version drift stops being possible.

**Files:**
- Create: `scripts/bump-version.ps1`
- Modify: `edu/js/app.js:1` (`APP_VERSION`)
- Modify: `edu/index.html` (all `?v=93` → `?v=94`)

**Interfaces:**
- Consumes: `edu/` layout from Task 2, `CACHE_NAME` from Task 3
- Produces: `scripts/bump-version.ps1`, invoked as `.\scripts\bump-version.ps1 -NewVersion 0.94`. Updates `APP_VERSION` in `edu/js/app.js`, `CACHE_NAME` in `edu/service-worker.js`, and every `?v=` query string in `edu/index.html`.

- [ ] **Step 1: Write the version bump script**

Create `scripts/bump-version.ps1`:

```powershell
<#
.SYNOPSIS
    Synchronizes AINOW education app version identifiers in one command.
.EXAMPLE
    .\scripts\bump-version.ps1 -NewVersion 0.94
#>
param(
    [Parameter(Mandatory = $true)]
    [ValidatePattern('^\d+\.\d+$')]
    [string]$NewVersion
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$eduDir = Join-Path $root 'edu'

$queryVersion = $NewVersion -replace '^0\.', ''

$targets = @(
    @{ Path = Join-Path $eduDir 'js\app.js'
       Pattern = "^const APP_VERSION = 'v[\d.]+';"
       Replacement = "const APP_VERSION = 'v$NewVersion';" },
    @{ Path = Join-Path $eduDir 'service-worker.js'
       Pattern = "^const CACHE_NAME = 'ai-edu-v[\d.]+';"
       Replacement = "const CACHE_NAME = 'ai-edu-v$NewVersion';" }
)

foreach ($t in $targets) {
    if (-not (Test-Path $t.Path)) { throw "Missing file: $($t.Path)" }
    $content = Get-Content $t.Path -Raw
    if ($content -notmatch $t.Pattern) { throw "Pattern not found in $($t.Path)" }
    $content -replace $t.Pattern, $t.Replacement | Set-Content $t.Path -Encoding utf8 -NoNewline
    Write-Host "Updated $($t.Path)"
}

$indexPath = Join-Path $eduDir 'index.html'
if (-not (Test-Path $indexPath)) { throw "Missing file: $indexPath" }
$index = Get-Content $indexPath -Raw
$index = $index -replace '\?v=\d+', "?v=$queryVersion"
$index | Set-Content $indexPath -Encoding utf8 -NoNewline
Write-Host "Updated $indexPath (?v=$queryVersion)"

Write-Host "Version sync complete: v$NewVersion"
```

- [ ] **Step 2: Run it**

```bash
cd "D:/AINOW Literacy - dev" && powershell -ExecutionPolicy Bypass -File scripts/bump-version.ps1 -NewVersion 0.94
```

Expected: three "Updated" lines then "Version sync complete: v0.94".

- [ ] **Step 3: Verify every identifier moved together**

```bash
cd "D:/AINOW Literacy - dev" && head -1 edu/js/app.js && head -1 edu/service-worker.js && grep -c "?v=94" edu/index.html && grep -c "?v=93" edu/index.html
```

Expected: `const APP_VERSION = 'v0.94';`, `const CACHE_NAME = 'ai-edu-v0.94';`, a non-zero count of `?v=94`, and `0` for `?v=93`.

- [ ] **Step 4: Verify the app loads and reports the new version**

Open `edu/index.html`. Expected: the footer version reads `v0.94`.

- [ ] **Step 5: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add scripts/bump-version.ps1 edu/js/app.js edu/service-worker.js edu/index.html && git commit -m "chore(release): bump education app to v0.94

Restores scripts/bump-version.ps1, which the README documented but which
was missing from the tree, and uses it to sync APP_VERSION, CACHE_NAME,
and all ?v= cache-busting query strings in one command."
```

---

### Task 5: Build the landing page

**Files:**
- Create: `index.html`
- Create: `landing.css`
- Create: `biz/index.html` (placeholder)

**Interfaces:**
- Consumes: `edu/` at Task 2's location
- Produces: `/` chooser linking to `./edu/` and `./biz/`. Task 7's 404 handler and Task 6's cleanup worker both assume this file exists at root.

The Business card is rendered **disabled** until Plan 2 delivers `/biz/`. It must not link to a broken page.

- [ ] **Step 1: Write `landing.css`**

Create `landing.css`. Tokens are copied from `edu/css/styles.css:1-56` so the chooser reads as the same product family.

```css
:root {
    --bg-app: #fdfcfa;
    --bg-card: #ffffff;
    --text-primary: #1e1d1b;
    --text-secondary: #5a5550;
    --text-tertiary: #8b8a87;
    --border-light: #e8e6e1;
    --border-hover: #d2d0cb;
    --edu: #d97757;
    --edu-light: #fcf6f4;
    --biz: #4f46e5;
    --biz-light: #f2f1fe;
    --radius-lg: 16px;
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.05);
}

[data-theme="dark"] {
    --bg-app: #1f1d1a;
    --bg-card: #2d2a25;
    --text-primary: #e6e4df;
    --text-secondary: #b0ada6;
    --text-tertiary: #7d7b77;
    --border-light: #3f3c37;
    --border-hover: #514d48;
    --edu-light: rgba(217, 119, 87, 0.15);
    --biz-light: rgba(79, 70, 229, 0.15);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.6);
}

* { box-sizing: border-box; }

body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: var(--bg-app);
    color: var(--text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.lang-row { display: flex; gap: 8px; margin-bottom: 32px; }

.lang-btn {
    padding: 6px 14px;
    border: 1px solid var(--border-light);
    border-radius: 999px;
    background: var(--bg-card);
    color: var(--text-secondary);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}

.lang-btn.active { border-color: var(--edu); color: var(--edu); }
.lang-btn:focus-visible { outline: 2px solid var(--edu); outline-offset: 2px; }

.brand { text-align: center; margin-bottom: 40px; }
.brand svg { color: var(--edu); }
.brand h1 { margin: 12px 0 6px; font-size: 28px; font-weight: 700; }
.brand p { margin: 0; color: var(--text-secondary); font-size: 15px; }

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 720px;
}

.card {
    display: block;
    padding: 28px;
    border: 2px solid var(--border-light);
    border-radius: var(--radius-lg);
    background: var(--bg-card);
    text-decoration: none;
    color: inherit;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.card:hover { border-color: var(--border-hover); transform: translateY(-2px); box-shadow: var(--shadow-md); }
.card--edu:hover { border-color: var(--edu); }
.card--biz:hover { border-color: var(--biz); }
.card:focus-visible { outline: 2px solid var(--edu); outline-offset: 2px; }

.card-icon {
    width: 48px; height: 48px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 12px; margin-bottom: 16px;
}

.card--edu .card-icon { background: var(--edu-light); color: var(--edu); }
.card--biz .card-icon { background: var(--biz-light); color: var(--biz); }

.card h2 { margin: 0 0 8px; font-size: 19px; font-weight: 700; }
.card p { margin: 0; font-size: 14px; line-height: 1.6; color: var(--text-secondary); }

.card[aria-disabled="true"] { opacity: 0.55; pointer-events: none; }

.badge {
    display: inline-block; margin-top: 14px; padding: 3px 10px;
    border-radius: 999px; font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.06em;
}

.card--edu .badge { background: var(--edu-light); color: var(--edu); }
.card--biz .badge { background: var(--biz-light); color: var(--biz); }

footer { margin-top: 40px; font-size: 12px; color: var(--text-tertiary); text-align: center; }
footer a { color: inherit; }

@media (prefers-reduced-motion: reduce) {
    * { transition: none !important; }
}
```

- [ ] **Step 2: Write `index.html`**

Create `index.html` at repo root. The standalone redirect runs before anything renders, so an installed PWA never flashes the chooser.

```html
<!DOCTYPE html>
<html lang="mk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>AINOW — Платформа за ВИ писменост</title>
<meta name="description" content="AINOW: AI literacy for educators and AI prompt tools for business. Offline-first, privacy-first, open source.">
<meta name="theme-color" content="#d97757">
<link rel="canonical" href="https://edu.ainow.mk/">
<link rel="icon" type="image/svg+xml" href="edu/assets/logo.svg">
<link rel="stylesheet" href="landing.css">
<script>
(function () {
    var standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
                     || window.navigator.standalone === true;
    if (standalone) { window.location.replace('./edu/'); }
    try {
        var t = localStorage.getItem('ainow-theme');
        if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    } catch (e) {}
})();
</script>
</head>
<body>

<div class="lang-row" role="group" aria-label="Language">
    <button class="lang-btn" data-lang="mk" type="button">MK</button>
    <button class="lang-btn" data-lang="sq" type="button">SQ</button>
    <button class="lang-btn" data-lang="en" type="button">EN</button>
</div>

<div class="brand">
    <svg viewBox="0 0 233.52 233.52" width="56" height="56" fill="currentColor" aria-hidden="true">
        <path fill-rule="nonzero" d="M0 116.95c0 64.15 52.06 116.58 116.58 116.58 64.52 0 116.95-52.43 116.95-116.58 0-64.52 -52.42 -116.95 -116.95 -116.95 -64.52 0 -116.58 52.42 -116.58 116.95zm23.46 0c0-51.69 41.79-93.48 93.12-93.48 51.69 0 93.12 41.79 93.12 93.48 0 26.03 -10.63 49.49 -27.86 66.35l0 -66.72c0-35.93 -29.33 -64.89 -65.26 -64.89 -35.93 0 -65.26 28.96 -65.26 64.89 0 36.29 29.33 65.25 65.26 65.26l0 -25.3c-21.99 0 -39.59 -17.96 -39.59 -39.96 0-21.63 17.6 -39.59 39.59 -39.59 22 0 39.59 17.96 39.59 39.59l0 52.06 0 32.63c-11.73 5.5 -25.3 8.8 -39.59 8.8 -51.32 0 -93.12 -41.79 -93.12 -93.12z" />
    </svg>
    <h1>AINOW</h1>
    <p data-t="tagline">Изберете платформа</p>
</div>

<div class="cards">
    <a class="card card--edu" href="./edu/">
        <div class="card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <h2 data-t="edu.title">Образование</h2>
        <p data-t="edu.desc">Водич за ВИ писменост, промптови, алатки и материјали за наставници.</p>
        <span class="badge" data-t="edu.badge">Бесплатно</span>
    </a>

    <span class="card card--biz" aria-disabled="true">
        <div class="card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
        </div>
        <h2 data-t="biz.title">Бизнис</h2>
        <p data-t="biz.desc">Промптови, агенти и сценарија за професионална употреба.</p>
        <span class="badge" data-t="biz.badge">Наскоро</span>
    </span>
</div>

<footer>
    <span data-t="footer">© 2026 AINOW Society · GPLv3</span> ·
    <a href="https://www.ainow.mk" target="_blank" rel="noopener">ainow.mk</a>
</footer>

<script>
(function () {
    var T = {
        mk: { tagline: 'Изберете платформа', 'edu.title': 'Образование',
              'edu.desc': 'Водич за ВИ писменост, промптови, алатки и материјали за наставници.',
              'edu.badge': 'Бесплатно', 'biz.title': 'Бизнис',
              'biz.desc': 'Промптови, агенти и сценарија за професионална употреба.',
              'biz.badge': 'Наскоро', footer: '© 2026 AINOW Society · GPLv3' },
        sq: { tagline: 'Zgjidhni platformën', 'edu.title': 'Arsimi',
              'edu.desc': 'Udhëzues për shkrim-leximin e IA, prompte, mjete dhe materiale për mësimdhënësit.',
              'edu.badge': 'Falas', 'biz.title': 'Biznesi',
              'biz.desc': 'Prompte, agjentë dhe skenarë për përdorim profesional.',
              'biz.badge': 'Së shpejti', footer: '© 2026 AINOW Society · GPLv3' },
        en: { tagline: 'Choose a platform', 'edu.title': 'Education',
              'edu.desc': 'AI literacy guide, prompts, tools and classroom materials for teachers.',
              'edu.badge': 'Free', 'biz.title': 'Business',
              'biz.desc': 'Prompts, agents and situations for professional use.',
              'biz.badge': 'Coming soon', footer: '© 2026 AINOW Society · GPLv3' }
    };

    function apply(lang) {
        var dict = T[lang] || T.mk;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-t]').forEach(function (el) {
            var k = el.getAttribute('data-t');
            if (dict[k]) el.textContent = dict[k];
        });
        document.querySelectorAll('.lang-btn').forEach(function (b) {
            b.classList.toggle('active', b.dataset.lang === lang);
        });
        try { localStorage.setItem('ainow-lang', lang); } catch (e) {}
    }

    var saved = 'mk';
    try { saved = localStorage.getItem('ainow-lang') || 'mk'; } catch (e) {}
    if (!T[saved]) saved = 'mk';

    document.querySelectorAll('.lang-btn').forEach(function (b) {
        b.addEventListener('click', function () { apply(b.dataset.lang); });
    });

    apply(saved);
})();
</script>

</body>
</html>
```

- [ ] **Step 3: Create the `/biz/` placeholder**

Create `biz/index.html` so a direct visit is not a bare 404 before Plan 2:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AINOW Business — Coming soon</title>
<meta name="robots" content="noindex">
<link rel="stylesheet" href="../landing.css">
</head>
<body>
<div class="brand">
    <h1>AINOW Business</h1>
    <p>Coming soon.</p>
</div>
<footer><a href="../">← AINOW</a></footer>
</body>
</html>
```

- [ ] **Step 4: Verify the landing page from disk**

Double-click `index.html`. Expected:
- Chooser renders with two cards; Education is clickable, Business is dimmed and unclickable
- Clicking MK / SQ / EN switches all copy, and the choice survives a reload
- Clicking the Education card opens the app at `edu/index.html`
- Browser console shows no errors

- [ ] **Step 5: Verify the education app is reachable and unbroken**

From the landing page, click Education. Expected: the app loads, footer reads `v0.94`, all views switch normally.

- [ ] **Step 6: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add index.html landing.css biz/index.html && git commit -m "feat(landing): add product chooser at site root

Vanilla HTML/CSS chooser with MK/SQ/EN switching and no dependencies.
Redirects to ./edu/ when launched in standalone display-mode so existing
home-screen icons open the installed app rather than the chooser. The
Business card is disabled until /biz/ ships."
```

---

### Task 6: Add the root cleanup service worker

Devices with v0.93 installed have a service worker registered at scope `/` serving the old app from cache. Replacing the file at that same URL is what reaches them: the browser fetches it on its next update check.

**Files:**
- Create: `service-worker.js` (repo root — replaces the file `git mv`'d to `edu/` in Task 2)
- Create: `manifest.json` (repo root, landing scope)
- Modify: `index.html` (register the cleanup worker)

**Interfaces:**
- Consumes: `index.html` from Task 5, `CACHE_NAME = 'ai-edu-v0.94'` from Task 3
- Produces: a root worker that deletes every `ai-edu-*` cache and then unregisters itself, freeing `/` for normal network serving.

The root worker must **not** precache the landing page. Its only job is eviction; a caching worker at root scope would shadow `/edu/` requests.

- [ ] **Step 1: Write the cleanup worker**

Create `service-worker.js` at repo root:

```javascript
// Root-scope cleanup worker.
//
// v0.93 registered a service worker at scope '/' that precached and served
// the education app from the site root. v0.94 moves that app to /edu/ with
// its own worker. This file replaces the old one at the same URL: installed
// clients fetch it on their next update check, it evicts the stale caches,
// then unregisters so '/' is served from the network normally.

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const names = await caches.keys();
        const stale = names.filter(name => name.startsWith('ai-edu-'));

        await Promise.all(stale.map(name => caches.delete(name)));
        await self.registration.unregister();

        // Only reload if we actually evicted something. Reloading
        // unconditionally would loop: reload -> register -> activate ->
        // reload. On a device that never had v0.93, `stale` is empty and
        // this worker retires silently.
        if (stale.length > 0) {
            await self.clients.claim();
            const clientList = await self.clients.matchAll({ type: 'window' });
            clientList.forEach(client => client.navigate(client.url));
        }
    })());
});
```

The `stale.length > 0` guard is load-bearing. Without it, every visit to `/`
registers the worker, which reloads the page, which registers it again — an
infinite reload loop on the site's front page.

- [ ] **Step 2: Write the landing manifest**

Create `manifest.json` at repo root:

```json
{
  "name": "AINOW",
  "short_name": "AINOW",
  "description": "AI literacy for educators and AI prompt tools for business",
  "start_url": "/",
  "scope": "/",
  "display": "browser",
  "background_color": "#fdfcfa",
  "theme_color": "#d97757",
  "lang": "mk",
  "dir": "ltr",
  "icons": [
    { "src": "edu/assets/logo.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any" },
    { "src": "edu/assets/logo.png", "sizes": "512x512", "type": "image/png", "purpose": "any" }
  ]
}
```

`display` is `browser`, not `standalone` — the chooser is a signpost, not an app to install. Only `/edu/` should be installable.

- [ ] **Step 3: Register the cleanup worker from the landing page**

In `index.html`, immediately before the closing `</body>` tag, add:

```html
<script>
(function () {
    if (window.location.protocol === 'file:' || !('serviceWorker' in navigator)) return;
    // Register once per device. The cleanup worker is a one-shot migration
    // for v0.93 installs, not an ongoing part of the landing page.
    try {
        if (localStorage.getItem('ainow-sw-cleaned') === '1') return;
        localStorage.setItem('ainow-sw-cleaned', '1');
    } catch (e) {}
    navigator.serviceWorker.register('./service-worker.js');
})();
</script>
```

Two independent protections against the reload loop: this one-shot
registration guard, and the `stale.length > 0` check inside the worker. Keep
both — the `localStorage` write can fail in private-browsing modes, which is
exactly when the in-worker guard has to carry it.

Also add the manifest link inside `<head>`, after the stylesheet link:

```html
<link rel="manifest" href="manifest.json">
```

- [ ] **Step 4: Verify the landing page still works from disk**

Double-click `index.html`. Expected: chooser renders normally, no console errors. The `file:` guard prevents registration, so this only confirms the added script parses.

- [ ] **Step 5: Verify the migration over HTTP**

This is the one check that needs a server, because service workers do not run on `file://`.

```bash
cd "D:/AINOW Literacy - dev" && python -m http.server 8080
```

Then, in a browser at `http://localhost:8080/`:
1. Open DevTools → Application → Service Workers
2. Expected: the root worker activates, then disappears (it unregisters itself)
3. Application → Cache Storage: expected: no `ai-edu-v0.93` entry remains
4. Navigate to `http://localhost:8080/edu/`
5. Expected: a worker registers with scope `/edu/`, and `ai-edu-v0.94` appears in Cache Storage

- [ ] **Step 5b: Prove there is no reload loop**

This is the specific failure the two guards exist to prevent, so test it directly.

1. In DevTools → Application → Storage, click **Clear site data**
2. Reload `http://localhost:8080/` and leave the tab open for 30 seconds
3. Expected: the page renders **once** and stays still. The Network panel shows
   no repeating document requests.
4. Reload manually three times
5. Expected: still stable, and DevTools → Application → Service Workers shows no
   worker registered at scope `/`

A page that flickers or reloads on its own means a guard was dropped — stop and
fix before continuing.

- [ ] **Step 6: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add service-worker.js manifest.json index.html && git commit -m "feat(pwa): add root cleanup worker for v0.93 migration

Replaces the old root-scope worker at the same URL so installed clients
pick it up on their next update check. Evicts all ai-edu-* caches, claims
clients, reloads them, then unregisters so / serves from the network.
Deliberately does not cache, to avoid shadowing /edu/ requests."
```

---

### Task 7: Make 404 handling path-aware and update SEO

`404.html` currently runs `window.location.replace('/')` unconditionally. Under the new layout a mistyped URL under `/edu/` would dump the user on the chooser. GitHub Pages allows only one root `404.html`, so it must branch on the path.

**Files:**
- Modify: `404.html`
- Modify: `sitemap.xml`

**Interfaces:**
- Consumes: `/edu/` and `/biz/` from Tasks 2 and 5
- Produces: nothing consumed by later tasks.

- [ ] **Step 1: Rewrite `404.html`**

Replace the whole file:

```html
<!DOCTYPE html>
<html lang="mk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AINOW</title>
<script>
(function () {
    // GitHub Pages serves this for every unmatched path. Route the visitor
    // into whichever app they were aiming at, rather than always the chooser.
    var path = window.location.pathname;
    sessionStorage.setItem('spa-redirect', window.location.href);
    if (path.indexOf('/edu/') === 0) {
        window.location.replace('/edu/');
    } else if (path.indexOf('/biz/') === 0) {
        window.location.replace('/biz/');
    } else {
        window.location.replace('/');
    }
})();
</script>
</head>
<body></body>
</html>
```

- [ ] **Step 2: Update the sitemap**

Replace `sitemap.xml` with entries for the new structure. The education hash routes move under `/edu/`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
  <url><loc>https://edu.ainow.mk/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://edu.ainow.mk/edu/</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://edu.ainow.mk/edu/#guide</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://edu.ainow.mk/edu/#prompts</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://edu.ainow.mk/edu/#tools</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://edu.ainow.mk/edu/#glossary</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://edu.ainow.mk/edu/#resources</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://edu.ainow.mk/edu/#about</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>
  <url><loc>https://edu.ainow.mk/edu/#help</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>
</urlset>
```

- [ ] **Step 3: Fix the education canonical tag**

In `edu/index.html`, change:

```html
<link rel="canonical" href="https://edu.ainow.mk/">
```

to:

```html
<link rel="canonical" href="https://edu.ainow.mk/edu/">
```

- [ ] **Step 4: Verify the sitemap is well-formed**

```bash
cd "D:/AINOW Literacy - dev" && powershell -Command "[xml](Get-Content sitemap.xml); Write-Host 'XML OK'"
```

Expected: `XML OK` with no parser exception.

- [ ] **Step 5: Verify 404 routing over HTTP**

With `python -m http.server 8080` running, visit `http://localhost:8080/edu/nonexistent-page`.

Expected: redirected to `/edu/`, not to `/`. (Note: the dev server returns its own 404 page rather than `404.html`; this behavior is GitHub Pages-specific and must be re-verified after deploy — see Task 8 Step 5.)

- [ ] **Step 6: Commit**

```bash
cd "D:/AINOW Literacy - dev" && git add 404.html sitemap.xml edu/index.html && git commit -m "fix(routing): make 404 path-aware and update SEO for /edu/

GitHub Pages allows one root 404.html, so branch on pathname to route
visitors into the app they were aiming at instead of always the chooser.
Updates sitemap entries and the education canonical tag."
```

---

### Task 8: Release v0.94

**Files:**
- Modify: `README.md` (changelog entry)
- Create: `AINOW-Literacy-v0.94.zip` (gitignored, distributed via the GitHub release)

**Interfaces:**
- Consumes: everything from Tasks 1–7
- Produces: tag `v0.94` on `origin/main`, and a distributable zip.

- [ ] **Step 1: Add the changelog entry**

In `README.md`, insert directly above the `### v0.93` heading (or above the topmost existing entry):

```markdown
### v0.94 (August 16, 2026)
- **Two products, one platform:** The site root is now a chooser between **Education** and **Business**. The education app moves to `/edu/` and keeps every feature, its offline behavior, and its free licence unchanged.
- **PWA migration:** `start_url` and `scope` retargeted to `/edu/`; service worker precache paths rewritten from root-absolute to relative. A root-scope cleanup worker evicts stale `ai-edu-v0.93` caches from already-installed devices, then unregisters itself.
- **Path-aware 404:** Unmatched URLs under `/edu/` now return to the education app instead of the chooser.
- **Version tooling:** Restored `scripts/bump-version.ps1`, which the README documented but which was missing from the tree. `APP_VERSION`, `CACHE_NAME`, and all `?v=` query strings now move in one command.
- **Service Worker:** Cache bumped to `ai-edu-v0.94`.
```

- [ ] **Step 2: Run the full verification pass**

Confirm each of these before tagging. Every one must pass:

| # | Check | Expected |
|---|---|---|
| 1 | Double-click `index.html` | Chooser renders, language switching works, no console errors |
| 2 | Double-click `edu/index.html` with network disabled | App loads fully offline; guide, prompts, tools, glossary, resources all render |
| 3 | Footer version | Reads `v0.94` |
| 4 | PDF export from Resources | Produces a document with correct MK/EN/SQ text |
| 5 | `http://localhost:8080/` in DevTools | Root worker activates then unregisters; no `ai-edu-v0.93` cache remains |
| 6 | `http://localhost:8080/edu/` in DevTools | Worker scope is `/edu/`; `ai-edu-v0.94` cache present |
| 7 | `/` left open 30s, then reloaded 3× | Renders once and stays still — no reload loop |
| 8 | `grep -rn "?v=93" edu/` | No output |
| 9 | `git status --short` | Clean; no `AINOW-Literacy-v0.93*` entries |

- [ ] **Step 3: Commit the changelog**

```bash
cd "D:/AINOW Literacy - dev" && git add README.md && git commit -m "docs(readme): add v0.94 changelog entry"
```

- [ ] **Step 4: Tag and push**

```bash
cd "D:/AINOW Literacy - dev" && git tag -a v0.94 -m "v0.94 — dual-app platform: landing chooser, education at /edu/" && git push origin main && git push origin v0.94
```

- [ ] **Step 5: Verify the live deploy**

After GitHub Pages rebuilds, check `https://edu.ainow.mk/`:

| # | Check | Expected |
|---|---|---|
| 1 | `/` | Chooser renders |
| 2 | `/edu/` | Education app loads |
| 3 | `/edu/nonexistent` | Redirects to `/edu/`, not `/` |
| 4 | A device with v0.93 installed | Home-screen icon opens the app, not the chooser; stale cache evicted |

Check 4 is the one that cannot be verified locally and is the highest-risk item in this plan. Test it on a real device that has v0.93 installed **before** announcing the release.

- [ ] **Step 6: Build the distributable zip**

```bash
cd "D:/AINOW Literacy - dev" && powershell -Command "Compress-Archive -Path index.html,landing.css,manifest.json,service-worker.js,404.html,robots.txt,sitemap.xml,CNAME,LICENSE,README.md,edu,biz,scripts -DestinationPath AINOW-Literacy-v0.94.zip -Force"
```

- [ ] **Step 7: Verify the zip is self-contained**

Extract `AINOW-Literacy-v0.94.zip` to a scratch folder and double-click `index.html` inside it. Expected: chooser renders, Education card opens the working app. This proves the zip is complete and portable — the property teachers depend on.

---

## Self-Review

**Spec coverage:**

| Spec section | Task |
|---|---|
| §4 Target layout | 1, 2, 5 |
| §5 Landing page | 5 |
| §6.1 Education manifest | 3 |
| §6.2 Education service worker | 3 |
| §6.3 Root cleanup worker | 6 |
| §6.4 Standalone redirect | 5 |
| §6.5 404 handling | 7 |
| §6.6 SEO | 7 |
| §8.3 Version sync | 4 |
| §10 Verification | 8 |
| §7 Business changes | **Plan 2** |
| §8.1 Language parity | **Deferred per §9** |
| §8.2 Higher Education | **Deferred per §9** |

No gaps in this plan's scope. §7 and §8.1–8.2 are out of scope by design.

**Placeholder scan:** No TBDs, no "add error handling", no "similar to Task N". Every code step contains complete content.

**Type consistency:** `CACHE_NAME` is `ai-edu-v0.94` in Task 3 and referenced identically in Tasks 4, 6, and 8. The cleanup worker's `ai-edu-` prefix filter (Task 6) matches both the old `ai-edu-v0.93` and new `ai-edu-v0.94` keys — intentional, since it unregisters before `/edu/` registers its own.

**Known risks:**

1. **PWA migration cannot be fully verified locally.** Task 6 Step 5 and Task 8 Step 5 check 4 exercise the upgrade path for already-installed devices. Verifying it properly needs a real device with v0.93 installed. Called out in both tasks rather than assumed.
2. **Reload loop in the cleanup worker.** Found during self-review of this plan. An unconditional `client.navigate()` after `unregister()` loops forever: reload → register → activate → reload. Two independent guards now prevent it (`stale.length > 0` in the worker, one-shot `localStorage` flag at the call site), and Task 6 Step 5b tests for it explicitly. Do not remove either guard.
