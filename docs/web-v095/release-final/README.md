# v0.95 release handoff — 24 October 2026

Current distribution: one release titled [v0.95](https://github.com/AINOW-Society/edu/releases/tag/v0.95), with one `AINOW-Literacy-v0.95.zip` app download. Extract the complete folder and open `index.html`. The local preparation and QA history below predates publication.

**The web code and UI are prepared locally as v0.95.** Publication, deployment, Git commit/tag/push and native rebuilds have not been performed. Physical-phone, screen-reader and final-hosting sign-off remain pending.

## Final cleanup

The [rc37 rollback archive](rollback.json) was SHA256 verified and all 1,309 recorded files matched the checkout before cleanup. Earlier archives and maintainer history remain intact.

- Removed the unused Business environment/version script, its empty API-key placeholder and all runtime/cache references. The unused local navigation model, version export, redundant icon export and Hammer import are also removed. Workspace navigation still comes from `AINOWNavigation`.
- Removed Education's unreachable inline About renderer and its uncalled widget switcher. None of the three authored guide datasets contains that guide ID. Legacy About URLs still redirect to the canonical platform page. Source learning content and translation dictionaries remain intact.
- Removed 72 verified obsolete CSS selector branches for the retired About, prompt-card, prompt-scroll and scratchpad-button markup. The cleanup phase removes 31,748 bytes across 22 files; exact selectors, reasons and hashes are in [cleanup.json](cleanup.json). DEV's manifest generator was then updated to stop listing the retired environment script; the prior generator text is retained in maintainer history outside runtime/cache paths.
- Removed coloured pagination/button glows and the matching unused Tailwind token. Search and keyboard focus retain clear outlines. Neutral dialog/card depth is preserved. [The pagination capture](01-pagination-flat.jpg) was reopened from disk.
- [Comment review](comments-review.json): 78 authored runtime files examined, no removable comments, two required licence notices retained. Vendor/source data are excluded from comment removal. [Binding review](unused-bindings-after.json) finds no unused React/Lucide/AINOW destructured bindings across 44 authored modules; this conservative inventory does not claim that text/token searches prove every possible dynamic path unused.

## Verification

| Check | Result |
| --- | --- |
| Full checkout tests | [111 passed, zero failed](tests.tap) |
| Static dependencies | [Ten entry documents, 60 linked scripts, 24 inline scripts, four JSON-LD blocks, 288 linked assets](static-checks.json) |
| DEV content/media sync | Passed in check-only mode: 2,226 entries, 1,000 original skill files, 14 Windows captures |
| Release startup | [All ten public entry points and the legacy Education About redirect passed](browser-smoke.json); [Education Guide also renders](guide-check.json) |
| Pagination/focus | [No active-page shadow in light mode or dark mode at 320/390px](glow-checks.json); visible keyboard focus retained |
| Version coherence | [All ten entry asset revisions and all four worker caches identify v0.95](version-checks.json) |
| Isolation | [4,053 native/prototype baseline files compared; same 14 inherited differences; no new native differences. 1,108 content/vendor/brand/media files unchanged from rc37](isolation.json) |
| Source archive | [99 portable tests passed after extraction](source-tests.tap); [runtime/test source match verified](source-verification.json) |
| Archives | [CRC/source matching and reproducibility](package-verification.json), with SHA256 values in the generated checksum report |

The preceding reviews remain supporting evidence: [final audit](../final-audit/README.md), [Help/Settings](../guide-help-settings/README.md), [reader/Builder](../reader-builder/README.md) and [final app launcher](../prompt-launcher/README.md). Their candidate numbers and screenshots are historical; the shared icon launcher remains the final reader design. This pass does not relabel those earlier viewport or origin-unavailable checks as fresh physical-device evidence.

The browser tool exceeded its execution deadline while navigating to DEV during the startup walkthrough. Already completed observations were saved individually; the remaining DEV and shared-page checks were resumed and verified. No timeout was counted as a pass.

## Release download

- `dist/AINOW-Literacy-v0.95.zip`: the complete downloadable app. Extract it and open `index.html`.

Rebuild with `python -X utf8 scripts/package-web.py`. This creates one app ZIP and a local verification report. The app excludes native/prototype projects, maintainer tools, review history and rollback archives. Source and review reports remain in the repository. GPLv3 and original third-party terms remain in place.

Before publication, complete real-phone touch/keyboard/large-text review, screen-reader review and the final hosted cache-update check. The inherited local Tailwind browser bundle still emits its upstream production warning; its bytes/notices are preserved and it makes no CDN request. No external AI tool was opened and no real saved-work reset/restore was performed during this final review.
