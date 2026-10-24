# Contributing to AINOW

AINOW is a static web platform with Education, Business and DEV workspaces. Run it with the instructions in [README.md](README.md); no npm install or build is needed. UI and authored learning content support English, Macedonian and Albanian.

## Before changing a file

- Read [AGENTS.md](AGENTS.md) and the [shared UI contract](docs/web-v095/design-system/README.md).
- Keep the existing structure, source IDs, deep links, saved-work keys and backup formats. Do not regenerate data merely to change presentation.
- Add real EN/MK/SQ labels for new authored interface text. Imported source text keeps its original language. Albanian glossary is **Glosar**.
- Keep attribution, licences, review dates and pinned revisions with imported content. Do not describe bundled catalogues as live feeds or live integrations.
- Web work stays in public web paths and maintainer documentation. Android, the mobile prototype and other source projects are separate and read-only for this release.

## Education content

Language packs live under `edu/js/lang/{en,mk,sq}/`.

| File | Content |
| --- | --- |
| `prompts.js` | `window.__embeddedPromptsByLang[language]`: `teachers`, `administration` and `higher_ed` arrays. |
| `docs.js` | `DOCS_DATA`: chapter objects with stable `id`, `title` and `items`; each item has an `id`, `title` and HTML `content`. |
| `quizzes.js` | Topic questions and answer explanations. |
| `homework.js` | Printable chapter tasks and optional teacher guidance. |

Use a nearby record in the same language and category as the schema reference. Some prompt packs carry explicit IDs/grade fields and others use their existing normalized format; preserve that format and never renumber existing entries. Education prompt sets are independently authored, so their lengths do not have to match. A UI or shared lesson change needs equivalent EN/MK/SQ wording; a source-language prompt addition must not be presented as a translation that does not exist.

Keep Macedonian AI terminology consistent with **ВИ**. Write practical tasks without real personal/student data. Match chapter and item IDs across translated guide updates and check the corresponding quiz/homework references. Do not append a synthetic About chapter; About is a shared platform page.

The tool directory is `App._toolsData` in `edu/js/app.js`. Each tool needs a unique `id`, title, HTTPS URL, tags, category and pricing value matching an existing entry. Add `tool.<id>.desc` to all three dictionaries in `edu/js/i18n.js`. Verify current publisher information before changing pricing or capability claims.

## Business content

Category collections are in `biz/data/data-*.js`. The category registry is in `biz/src/config.js`; loading and counts also use `biz/data/data-counts.js` and the existing registry/configuration. Inspect those references when adding a category. Agents and playbooks have their own data files.

Preserve original source IDs. New prompt links and favorites use category-qualified identities because IDs can repeat between collections; legacy saved IDs still need to resolve. Do not replace `promptKey`, `promptHref` or the legacy compatibility behavior with an unqualified ID. Business interface text is in `biz/locales/locales-{en,mk,sq}.js`; source prompt/agent instructions keep their recorded language.

## DEV content

`dev/data/catalog.js` and `dev/data/skills/*.js` are bundled snapshots. Keep imported original files, hashes, source languages, licences and revision attribution intact. Authored web guide corrections are in `dev/data/web-guide-updates.json`; walkthrough media provenance is in `dev/assets/guide-screenshots/provenance.json`.

The maintainer sync helper reads `android/app/src/main/assets/content/` as a canonical reference. This path is outside the public web distribution. Only use the helper in a complete maintainer checkout that has that reference; do not edit native source for a web task. Normal contributors can run the portable checks without it.

## Shared interface

- Use `assets/design-system.css` for type, spacing, action variants, utility targets, library cards and reference pills. Education and Business prompt cards, search and view controls use the same primitives.
- Use `AINOWPlatform.logo()` and the original brand SVGs. Keep wordmark geometry, proportions and text fills. Only the circular AINOW symbol takes the workspace accent; desktop workspace labels are separate HTML and hidden on mobile.
- Keep header icon shapes/order and 44px controls consistent. DEV topic icons come from `AINOWDevUi`. Workspace switching returns through the root chooser.
- Help and About belong at `help.html` and `about.html`, with shared translated destinations in `assets/platform.js`. Help is linked in the shared footer. Explain a task before offering a workspace link.
- Reuse `biz/assets/prompt-reader.css` for prompt/agent reading surfaces. Mobile readers below 768px fill the viewport with one content scroll area. Avoid nested decorative frames.
- Replace verified obsolete rules instead of appending another page-specific theme. Preserve references and licences when removing superseded renderers.

## Checks

Run the portable Node checks from the root:

```text
node --test scripts/verify-smooth-start.cjs scripts/verify-web-interactions.cjs scripts/verify-platform-pages.cjs scripts/verify-design-system.cjs scripts/verify-release.cjs scripts/verify-final-qa.cjs scripts/verify-shared-state.cjs scripts/verify-polish.cjs scripts/verify-reader-actions.cjs scripts/verify-security.cjs
```

With the canonical content reference available, also run:

```text
python -X utf8 dev/tools/sync-content.py --check
node --test dev/tools/verify-web.cjs
```

Then check the actual browser UI: desktop sidebar, 320px and 390px mobile layouts, 767/768px navigation boundary, EN/MK/SQ, light/dark appearance, search/filter/view controls, pagination, dialog keyboard exit and focus restoration. Preserve existing saved work. Use fictional test input and never reset a user's storage to simplify testing. Record what was checked and any remaining gaps under `docs/web-v095/`.

## Prepare a release

1. Update [CHANGELOG.md](CHANGELOG.md) and the current candidate/status in the README. Keep unreleased changes labelled until publication.
2. Advance matching entry-document asset revisions and affected service-worker cache names. Shared changes affect root, EDU, BIZ and DEV workers. Update matching verification fixtures. The old EDU-only bump helper does not cover the platform.
3. Maintain `assets/platform-files.js` and the generated `dev/offline-files.js` when shared assets change. Preserve source notices in `THIRD_PARTY_NOTICES.md`.
4. Run the applicable checks and inspect the UI. Check cached content with the origin unavailable; record the setup and limitations. Real-device and final-hosting checks are separate.
5. Run `python -X utf8 scripts/package-web.py`. Verify the web/source archives, checksums and portable tests from the extracted source archive.
6. Review the exact Git diff and file list before staging. Local native/prototype folders, raw incoming media, personal paths, generated archives and private tooling are outside the web release. Never stage the whole maintainer workspace blindly.
7. Publish or deploy only after owner authorization and the remaining release checks. Do not attach stale candidate ZIPs to a newer source revision.

Submit a focused change with the problem, resulting behavior and relevant verification. Keep GPLv3 application licensing and all original third-party notices.
