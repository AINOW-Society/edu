# Web v0.95 release candidate review

Reviewed locally on 22–24 October 2026. Prepared version: **v0.95**. The [final release review](../release-final/README.md) is the current handoff for cleanup, verification, source archives and remaining manual checks. The sections below preserve the earlier candidate history; their counts and images are historical. No deployment, Git publication or native rebuild was performed.

## What changed

- One shared Manrope type system, action styles, 44px utility controls, reference pills and original AINOW wordmarks. Mobile keeps a 16px header inset and hides the separate workspace label. The original SVG geometry and text fills are preserved.
- Education, Business and DEV use the shared Help/About destinations, menus and translated labels. Help explains tasks with steps, examples and exclusive FAQ expansion; it is linked in the footer. The removed sidebar local/offline status stays removed.
- Business prompt and agent readers share a full-screen mobile layout below 768px. Dialogs trap focus, handle Escape only at the top layer and restore the opener and scrolling. The builder uses four clear steps. Situation questions and output are flat, fit at 320px and focus the current heading.
- Shared Settings now covers starting language, appearance and Data & backups, linked from every workspace sidebar/footer. Backup actions use shared flat rows, icons and matching 44px buttons. Business and DEV retain separate formats; validation and rollback are tested. Reset remains secondary. Education has no saved learning-work store to back up. No real user data was restored or reset during review.
- One workspace navigation model now supplies consistent primary rows and fixed Settings/About links, with contextual filters and left-side mobile drawers. Education social/AI-tool/tip lists, Business recent-history navigation, the data modal and DEV Notes page are retired. Business and DEV reuse the actual Scratchpad drawer with separate notes storage and a plain unframed editor.
- Shared prompt prose formatting adds paragraphs, headings and requirement lists without rewriting source words/numbers. EDU/BIZ Edit/Preview/Reset and edited copy were checked in the browser. Builder preview uses readable shared surfaces, one content scroll and paired actions.
- Education and Business prompt libraries now share whole-card opening, card previews, search, view controls and layout primitives. Education supports grid/list/table views and quick copy; mobile filters use its existing sidebar, with counts derived from the same filtering as the result list. Its reader reuses the shared full-screen mobile style. The removed framed filter and title-only cards stay retired.
- Education glossary has a proper page heading and separate search field. Guide categories, pagination labels and resource headings fit mobile. Existing records and languages are preserved.
- Programme now has the owner-approved visual map and editorial layout. All eight reviewed areas remain visible, with proper explanations in EN/MK/SQ. It has no tabs, selectors or FAQ accordions. The original AINOW logo and four labels have transparent backgrounds; every label is centred 7px below its circle.
- AI Balkans has its own project section below the workspaces, with the supplied SVG, a reporting explanation and website action in EN/MK/SQ. The original SVG SHA256 is `8b75d79ed1bedd85134f67d8e742c607ed5a53000a6f996a86124e8bb7ec93f1`; geometry is unchanged. Dark mode renders the original monochrome artwork in white without a surrounding white plaque. No source-project writes were issued.
- Services is **AINOW first**: training, workshops, education/community and AINOW contact links. CTRLab is a small optional technical partner section, without the earlier commercial hero, repeated service links or contact buttons. Original partner SVGs are copied unchanged. Offerings were checked against official sources and owner source files; see [service sources](services-sources.json).
- Proven-unused imports/components/CSS were removed; the unused Onest fonts and retired renderers remain in maintainer history outside runtime/cache paths. Full GPLv3 and third-party notices are included; no third-party content was relicensed.
- The offline walkthrough exposed and fixed two gaps: Business unregistering its worker on loopback, and the chooser DEV icon missing from shared caching. The earlier nine-check walkthrough used rc13; the Programme revision kept worker/runtime revisions aligned; the current follow-up advances all four to rc32.

## Local verification

| Check | Result and evidence |
| --- | --- |
| Node suite | **68 passed, 0 failed**; [tests.tap](tests.tap). Covers content, references, translations, IDs, backups/rollback, dialog focus, shared header, Services and caching. |
| Linked/static sources | 10 main HTML documents, 60 linked JavaScript files, 24 inline scripts, 4 JSON-LD blocks and 287 linked assets; [static checks](static-checks.json). The release test also parses every public JS file, including 1,000 lazy skill scripts. |
| DEV content/media sync | Passed: 2,226 entries; 1,000 skills, 1,000 MCP, 200 workflows; 6 checks/18 questions; 1,000 original skill files and 14 Windows captures. |
| Browser layout | Manrope, headings, broken images, raw translation keys and document width recorded in [browser index](browser-index.json). Historical before/intermediate images remain labelled separately by filename and the groups below. |
| Origin unavailable | **9 listed rc13 browser checks passed**, plus rc15 Help, Services and Programme and the final rc16 Programme/logo; [offline.json](offline.json), [changed-page check](programme-offline.json), [final logo check](ai-balkans-offline.json). The known loopback server was stopped and the port confirmed unavailable; preview restarted afterwards. The prompt follow-up also verifies the rc22 Education reader and the cached rc21 Business library in [prompt-library-offline.json](prompt-library-offline.json); the initial missing-reader-style failure is preserved and its shared-manifest fix is recorded there. |
| Isolation | 4,103 baseline files checked. Exactly the same 14 pre-existing Android differences; no new native/prototype or baseline dataset differences; [isolation](isolation.json). |
| Diff hygiene | `git diff --check` passed; only Git line-ending notices were reported. |

Meaningful browser interactions included language changes, light/dark appearance, one-open FAQ behavior, glossary search, builder step navigation, mobile agent Escape/focus restoration, a fictional situation through to its locally composed prompt, original skill-file loading and the enlarged privacy-edited Windows screenshot. No external AI requests were submitted.

Repository documentation was compared with the public GitHub repository on 22 October. The README is consolidated, prior release history is preserved in CHANGELOG.md, contributor instructions cover all three workspaces, and v0.95 release notes remain marked unpublished. See `../repository-review/README.md`.

The final shared-component follow-up is [../prompt-formatting/README.md](../prompt-formatting/README.md), with browser geometry, storage isolation, original/edited copy checks, final screenshots and observed offline revisions. Its final images supersede earlier menu/data/notes/builder captures.

## Review images

The browser API supplies JPEG bytes; saved review image extensions were normalized to `.jpg` without altering their pixels. `browser.json` is the raw measurement history; `browser-index.json` keeps the latest measurement per image name. Some early images predate the final shared header padding; they prove the named flow rather than the latest header.

- Final Programme: images 81–85 record the approved visual layout and transparent map labels; image 85 supersedes the earlier tab/accordion explorations in 76–80. The latest mobile and translated checks are recorded in `programme-review.json`. Images 85–88 show the final label placement. `programme-offline.json` adds a successful rc15 origin-unavailable check for Programme, Help and Services; image 89 shows the resulting Programme page.
- AI Balkans: image 94 records the final desktop project presentation; the final responsive/logo/source checks are in `ai-balkans-review.json`.
- Final Services: [320px English](71-services-final-320.jpg), [Macedonian](56-services-mk-320.jpg), [Albanian](57-services-sq-320.jpg), [dark](58-services-sq-dark-320.jpg), [desktop](55-services-desktop.jpg), [quiet partner section](59-services-technical-secondary-320.jpg).
- Prompt-library follow-up: images 99–106 compare the shared Education library and mobile reader with Business. Whole-card opening, independent copy, filter counts, responsive and translated checks are recorded in `prompt-library-review.json`.
- Business: images 05–09 compare the old modal with the shared mobile reader at 320/390/767 and desktop at 768. Images 12–15 cover all four builder steps; 17 the prompt reader; 19 shared backups; 20 the flat question and 60 its result; 61 the desktop sidebar/overview. The final output check has no horizontal document overflow at 320px.
- Education: images 33–41 cover home, guide, prompt reader, tools, resources and glossary search. Image 35 is the later narrow prompt-library check; 74 is the final 320px resource heading. Glossary `agent` search returned two terms at 320px.
- DEV: images 24–32 cover practice, calculator, guide and catalogue templates; 29 waits for the original skill source. Images 72–73 add 320px calculator/practice review. References remain visible with original licence/revision information.
- Shared pages: images 42–53 cover Help in all three workspace contexts and About routes. Images 62–70 are the repeated successful origin-unavailable checks, including an original skill and loaded enlarged Windows screenshot. The earlier failed root/BIZ attempt is disclosed in `offline.json`.

## Cleanup and rollback

`before-release-cleanup.zip` is a maintainer rollback snapshot (1,212 files, 11,056,735 bytes; SHA256 `640d5bcbeebf2670de51f815440e1069bb4f169aa549b1b2400cbe0be4ef2f01`). It is excluded from every public package. [Removed imports](removed-imports.json) and [final unused imports](final-unused-imports.json) record the narrow cleanup. Earlier retired source is under `../design-system/legacy-source/`; retired font assets are under `retired-assets/`. None is in active cache lists.

Run full-checkout checks from the project root:

```text
python -X utf8 dev/tools/sync-content.py --check
node --test dev/tools/verify-web.cjs scripts/verify-smooth-start.cjs scripts/verify-web-interactions.cjs scripts/verify-platform-pages.cjs scripts/verify-design-system.cjs scripts/verify-release.cjs scripts/verify-final-qa.cjs scripts/verify-shared-state.cjs scripts/verify-polish.cjs scripts/verify-reader-actions.cjs
python -X utf8 scripts/package-web.py
```

The current packager creates one `AINOW-Literacy-v0.95.zip` app download and a local checksum report in `dist/`. Extract the complete folder and open `index.html`. Every entry is CRC checked and SHA256 matched against source. The app excludes Android, the prototype, Git/local tooling state, tests/tools, old review screenshots and backup archives. Source and portable checks remain in the repository. The historical review below records local preparation; it is not a second release or another downloadable app. GPL and original vendor/catalogue/brand provenance files remain included.

## Remaining review limits

This is local browser and viewport evidence, not proof for every phone or browser. Real Android/iPhone touch/keyboard, large-text behavior, screen-reader use and the final deployed hosting/cache-update path still need release sign-off. The offline check makes one origin unavailable after caching; it does not emulate device airplane mode, storage eviction or every external link. External tools, partner sites and publisher references require connectivity.

The inherited local Tailwind browser runtime emits its upstream production warning. It makes no CDN request here; the bundle is local and its bytes/licence are preserved. Replacing the inherited utility compiler with precompiled CSS would be a separate, tested change. No runtime errors appeared in the final Services review; historical offline navigation failures are documented rather than counted as passes.
