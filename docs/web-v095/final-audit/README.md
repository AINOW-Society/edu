# Final public-web review — 23 October 2026

Candidate: **v0.95-rc33**. The owner requested independent functional QA, design QA and code cleanup before release. Three agents performed those reviews; their findings were checked and integrated in this checkout. This is a local release candidate, not a deployment or physical-device certification.

## Scope and result

The review covered the active public runtime: chooser, Education, Business, DEV, shared navigation, header/footer, Help/About/Programme/Services, Settings, backups, prompt formatting, Scratchpad, search, filters, readers and browser-local state. Authored runtime files were reviewed with parser/static checks and fresh browser walkthroughs. Bundled source records and vendor code were checked for integrity and compatibility; this is not a new semantic audit of every third-party instruction or library implementation.

Confirmed problems were fixed:

- Business prompt favorites and view selection now persist. Prompt/agent view changes and removal of the last favorite on a later page return to a valid page.
- Business situations search their displayed EN/MK/SQ titles and descriptions. DEV search includes translated topic labels. Agent and situation search inputs have explicit accessible names; loading/clear-filter controls use existing translations.
- Education navigation updates its URL and supports Back/Forward. Initial resource-widget links retain their parameters, and slower view loads cannot replace newer navigation. Business prompt/agent readers follow card, direct-link, Back and close navigation.
- Shared storage synchronization updates open workspaces after reset/restore and cached-page returns. DEV merges changes with current validated storage and refuses to replace unreadable saved data. Builder preserves an unsaved draft when only appearance changes after storage failure. Business and DEV Scratchpad notes remain isolated.
- Business backup validation rejects malformed lists, drafts and preferences. Legacy preference aliases restore consistently in one rollback transaction. Export validates current work, and both export and import enforce the same UTF-8 file-size limit. Storage failures show a distinct message.
- Education Guide category labels wrap between words at 320px. The original wordmark has a 44px-high link target. Existing logo geometry, brand colours and shared control layout remain intact.
- EDU/BIZ workers refresh online resources before falling back to their own cache, avoiding an old exact cached script masking a newer shared dependency. All four cache names and entry asset revisions use rc33.

## Verification evidence

| Check | Evidence |
| --- | --- |
| Consolidated automated regression checks | [tests.tap](tests.tap); 102 passed, zero failed |
| Functional agent review | [functional-review.json](functional-review.json); 21 dedicated behavioral checks |
| Shared state/navigation regression checks | `scripts/verify-shared-state.cjs`; 11 checks |
| Public scripts, inline scripts and linked assets | [static-checks.json](static-checks.json) |
| Fresh responsive/browser walkthrough | [Design review](design-review.md), [responsive-matrix.json](responsive-matrix.json); 78 checks across 39 routes at 320/390px, plus 767/768 navigation checks |
| Final live controls, translations and shared preferences | [root-smoke.json](root-smoke.json); EDU/BIZ grid/list/table, qualified reader Back, live Education URL/history, MK/SQ at 320px and cross-tab SQ/dark preferences |
| Classroom PDF export | [classroom-export.json](classroom-export.json); one selected question produced a 109,326-byte PDF with a valid header/trailer |
| Origin-unavailable smoke | Four rc33 surfaces loaded while loopback was confirmed unavailable; evidence in root-smoke.json. Preview restarted afterward |
| Original content/media consistency | `python -X utf8 dev/tools/sync-content.py --check`; 2,226 entries, 1,000 skill files and 14 Windows captures |
| Prompt formatting integrity | 8,346 bundled EDU/BIZ prompt/instruction/example strings retain words and values |
| Native/prototype/source-data isolation | [isolation.json](isolation.json); same 14 inherited Android differences in the 4,103-file baseline |
| Candidate/source archives and portable checks | `../release-readiness/packages.json`, `package-verification.json`, `source-archive-tests.tap` |

## Cleanup

[Cleanup review](cleanup-review.md) records 53 authored runtime comments removed, with JavaScript token/AST equivalence, plus 159 obsolete CSS selector branches (18,904 bytes) and verified unused imports. Required licence notices remain. No removable authored runtime comments remain in the final parser inventory. Vendor/source/translation assets retain their provenance and original terms.

The verified rc32 corresponding-source archive is the rollback checkpoint. Retired material stays outside public runtime/cache paths. No broad source deletion, dataset rewriting or changes to Android, mobile-prototype or the AI Balkans source project were issued.

## Release boundary

The complete static web/source ZIPs are prepared locally. No commit, push, tag, release publication or deployment was performed. Real Android/iPhone touch, keyboard, large-text and screen-reader review, plus final-hosting/cache-update verification, remain external sign-off checks. Viewport emulation does not prove behavior on physical phones. The inherited locally bundled Tailwind browser runtime still emits its upstream production warning; no CDN is used and its original bytes/licence remain intact.

Run the checks and packager documented in the root README. Earlier folders preserve historical review states; this folder supersedes their current-runtime conclusions.
