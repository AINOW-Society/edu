# Prompt readers and Builder — 24 October 2026

Local candidate **v0.95-rc36**. The owner requested smaller prompt readers, visible AI-app actions and more interactive Builder steps. A subsequent review rejected the extra AI chooser button, including its neutral popover variant. The final reader has no chooser or popover: **Copy, ChatGPT, Gemini, Claude, Copilot and Perplexity** are directly visible in its fixed footer.

## Implementation

- Education, Business prompts and Business agents use the same compact reader CSS and shared provider renderer in `assets/prompt-actions.js`. Desktop readers are at most 680px wide and 82dvh high; mobile readers remain full-screen with one scrolling body. Metadata is compact and the repeated Education subject label is deduplicated for display.
- The six footer actions use one row on desktop and two rows of three below 640px, with 44px targets. Copy has a quiet workspace tint. Choosing an app copies the current edited/filled instructions and opens that app's base URL; the user pastes the prompt there. Content is not placed in the reader launch URL. Existing card launches keep their existing prefill URLs through the same provider metadata.
- Source words, values, IDs, templates, editing/reset behavior and saved-work formats are unchanged. Business favorite controls remain in the reader's body tools. The obsolete popover markup, styles and Escape interception were removed. The shared ExternalLink icon now has its correct bundled Lucide paths, also fixing existing Programme link icons.
- Builder retains its four steps and all existing fields. Icon cards show the current and viewed steps; click, arrow keys, Home/End and named next-step actions support navigation. Viewed describes navigation, not completion. Step changes focus the heading, drafts remain intact and reduced motion is respected. The Builder background now uses the shared warm theme tokens.

## Verification

- [111 automated checks passed](tests.tap), including edited Education/Business copy and launch, filled agent instructions, direct button dispatch/cleanup, and Builder keyboard navigation with draft preservation. [Static checks](static-checks.json) cover ten entry documents, 61 linked JavaScript files, 24 inline scripts, four JSON-LD blocks and 297 linked assets. DEV content/media sync passed in check-only mode.
- [72 final reader layout observations](reader-matrix.json): Education, Business prompts and Business agents in EN/MK/SQ, light/dark and actual 320/390/768/1280px viewports. All six footer actions fit, remain inside the viewport and have 44px targets; no document or reader horizontal overflow was observed. Requested and actual widths are both recorded.
- [Four additional reader checks](reader-interactions.json): 320×568, 800×390, Tab wrapping and Escape returning focus to the original Education card. No external AI app was opened during browser checks; launch/copy handlers use isolated test doubles.
- [60 Builder observations](builder-matrix.json) cover all four steps at 320/390px in three languages and both themes, plus English 767/768/1280px. [Six final surface checks](builder-surface-checks.json) verify the corrected warm background in both themes and all languages.
- [Offline checks](offline-checks.json): Education and Business prompt readers, the Business agent reader and Builder loaded the rc36 dependency with the known preview stopped. The Business follow-up waited for the reader before measuring. The initial DEV navigation exceeded the browser timeout and is not counted as an offline pass here. The preview was restored.
- [Isolation](isolation.json): 4,103 baseline files checked, the same 14 inherited native differences, no unexpected changes and 1,083 protected files unchanged from rc35. [Runtime comparison](runtime-changes.json) lists this bounded revision. Android/prototype/source projects remain untouched.
- All four service-worker caches and matching entry asset revisions advance together to rc36. Reproducible static/source archives and checksum reports are generated under `dist/`. The extracted source passed [99 portable tests](source-tests.tap). [Source validation](source-verification.json) and [package validation](package-verification.json) record the result.

Accepted captures, reopened from disk: [desktop reader](15-edu-en-light-desktop-final.jpg), [Albanian dark mobile reader](13-edu-sq-dark-390-direct-stable.jpg), [mobile Builder](14-builder-sq-dark-390-final.jpg) and [desktop Builder](10-builder-desktop-verified.jpg).

## Rejected and superseded evidence

The browser resize capability initially affected the foreground tab while measurements were taken from hidden tabs. Those repetitions were rejected and retained as `rejected-*-desktop-repeats.json`; the final matrices above were rerun on the foreground tab with an explicit actual-width assertion. Images 05 and 08 are not mobile proof. Images 01 and 12 caught stale/incomplete rasters. The popover matrix and images 02/03/06 are superseded. Image 09 predates the Builder background correction; 14 replaces it. Image 11 predates the final Copy tint; 15 replaces it. The supplied user screenshot 00 includes browser chrome and is excluded from public/source packages, as are rejected and intermediate captures.

This is local browser/viewport evidence. Physical-phone, screen-reader and final-hosting/cache-update checks remain pending. No deployment, publication, Git commit/tag/push, native rebuild or real saved-work restore/reset was performed.
