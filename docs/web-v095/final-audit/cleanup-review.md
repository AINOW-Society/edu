# Runtime cleanup review

The rc32 corresponding-source ZIP was verified against its recorded SHA-256 before cleanup: `a2a19b62da312891d99c820551e7dada8db2ee6e541008f96b0e89fd6f49856f`. It remains the rollback archive. No files were deleted.

## Comments

The cleanup examined 78 authored runtime JavaScript, HTML and CSS files, including embedded scripts and styles. Three passes removed 51 explanatory comments; the functional QA pass removed the other two comments from `biz/src/utils.js`. JavaScript removals used parser-provided comment ranges from Node's bundled Acorn 8.16.0. Every edited JavaScript file and inline script retained identical executable tokens and an identical abstract syntax tree. CSS removals retained all content outside comments and whitespace. Four embedded script comments were removed from the Business entry documents; their HTML markup stayed identical.

Required Lucide ISC and Manrope OFL notices remain. Third-party libraries, imported skill files, original source datasets and translations, original SVGs and licence files were excluded. Maintainer documentation, verification scripts and tools were outside the runtime comment-removal scope.

Evidence: `comment-inventory.json`, `comment-cleanup.json`, `comment-cleanup-second-pass.json`, `comment-cleanup-final.json` and the final `comment-verification.json` inventory. The helper `comment-cleanup.cjs` is retained outside public runtime paths to make the method inspectable; it does not add an app dependency.

## Dead selectors and imports

The stylesheet cleanup removed 159 selector branches, reducing the three affected stylesheets by 18,904 bytes. These rules belonged to the retired Education prompt toolbar, card action menu, standalone footer and sidebar markup, plus DEV's former custom header, sidebar status, source disclosure and practice markup. Each curated class family had no matching public JavaScript or HTML reference. Balanced rule parsing retained shared selectors when only one branch of a selector list was obsolete.

The current shared Scratchpad, menu and footer, prompt reader metadata and AI dots, dynamic glossary badges, programme nodes, catalogue view variants and styles used by authored learning content remain. Exact removed selectors and before/after hashes are in `dead-css-cleanup.json`.

Three unused imports were removed: `APP_VERSION` in `biz/src/components.js`, `Play` in `biz/src/help.js`, and `ArrowRight` in `biz/src/StaticPages.js`. QA separately reviewed unused prompt, agent and playbook bindings while fixing those modules. DEV's unused `useMemo` binding was reported to the coordinating agent.

The old Business history writer remains deliberately for legacy saved-data compatibility. It does not restore the removed recent-history menu. The Business Help module and DEV Help data remain active dependencies of the unified Help page, so they were retained. No source dataset, record ID, saved-data schema, imported attribution or licence was removed.

## Verification

After cleanup, 24 existing design-system, platform-page and navigation regression checks passed. Final consolidated tests, browser evidence and release archives are recorded by the coordinating review. This is a verified removal of identified inactive code, not a claim that text search proves every possible dynamic CSS branch unused.
