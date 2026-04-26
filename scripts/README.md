# Scripts

Optional maintenance helpers for the AINOW platform.

> This is a static app — double-click `index.html` and it runs. These
> scripts are just convenience tools for maintainers. They are **not**
> required to use or deploy the platform.

## `bump-version.ps1` — keep version numbers in sync

The version number lives in three places. This script updates all three
at once so they never drift apart:

- `js/app.js` — `const APP_VERSION = 'v0.91';`
- `service-worker.js` — `const CACHE_NAME = 'ai-edu-v0.91';`
- `index.html` — every `?v=NN` cache-buster

```powershell
powershell -ExecutionPolicy Bypass -File scripts/bump-version.ps1 -NewVersion 0.91
```

Commit all three files together after running.

## `strip-comments.mjs` — remove JS/CSS comments

Walks `js/`, `views/`, `css/`, plus `service-worker.js`, `index.html`,
`404.html` and removes `//` and `/* … */` comments. Skips `js/lib/*`
(third-party library license headers must stay).

The stripper is syntax-aware: strings, template literals, regex literals
and URLs with `//` in them are preserved.

```powershell
node scripts/strip-comments.mjs
```

Requires [Node.js](https://nodejs.org/).
