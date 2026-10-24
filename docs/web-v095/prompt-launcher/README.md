# Shared prompt launcher — 24 October 2026

Local candidate **v0.95-rc37**. The owner rejected the row of equally weighted text buttons in rc36. The shared footer now has one primary **Copy** action and a quiet strip of labelled app marks. There is no extra chooser to open. Mobile puts Copy above the five app marks; desktop places them alongside it.

The change is in `assets/prompt-actions.js` and the existing shared `biz/assets/prompt-reader.css`, so Education, Business prompts and Business agents use the same renderer and styles. App names stay visible beneath their marks; translated accessible labels explain copy-and-continue behavior. Copy keeps a 44px target; each app has a 52px target. Monochrome marks invert in dark mode. The five SVGs are locally bundled with their pinned sources, hashes and MIT notice in `assets/ai-apps/`; no remote image request is needed at runtime. Existing prompt content, provider URLs, copy/edit behavior, storage and notes adapters remain unchanged.

## Verification

- [111 automated checks passed](tests.tap), including direct dispatch, unknown-provider rejection, listener disposal, current edited/filled copy and base-URL reader launches. [Static checks](static-checks.json) cover ten entry documents, 61 linked scripts, 24 inline scripts, four JSON-LD blocks and 297 linked assets. DEV content/media sync passed in check-only mode.
- [72 final browser observations](browser-checks.json): all three reader types at actual 320/390/768/1280px, in EN/MK/SQ and light/dark. All six actions stay visible with at least 44px targets. App labels fit, all five images load and the monochrome marks have the correct dark treatment. No document or reader horizontal overflow was observed.
- [Seven additional checks](interaction-checks.json): 639/640px action-layout boundary, 767px mobile shell, 320×568, 800×390, Tab wrapping and Escape restoring the original Education opener. No external AI app was opened during browser checks; existing isolated launch tests cover copy/open behavior.
- [Runtime/source comparison](runtime-changes.json) records 1,089 protected files unchanged from rc36, including original content, vendor, brand, screenshot and tool-icon files. All five added mark hashes match provenance. No native/prototype writes, real backup restore/reset, deployment or Git publication was performed.
- All four caches and matching entry asset revisions advance to rc37. The shared cache manifests include the new local marks and notices. Prior origin-unavailable evidence remains in the rc36 review; this follow-up does not claim a fresh physical-device or offline-origin walkthrough.

The preview server stopped during the browser-tool transition, so an initial Business check loaded rc36 from cache and was rejected. The known loopback preview was restarted, HTTP 200/current rc37 was verified, and the final matrix was rerun against rc37. Only final observations are in the accepted matrix.

Accepted images were reopened from disk: [normal preview](05-edu-default-preview.jpg) and [390px dark mode](03-edu-sq-dark-390.jpg). Image 01 records the rejected old design; image 02 precedes the final 11px app labels. The two image-04 captures have a blurred desktop raster and are excluded from acceptance and packaging. Desktop geometry remains recorded in the measured matrix.

The runtime/source ZIPs and checksum report are local candidates under `dist/`. The extracted source passed [99 portable tests](source-tests.tap); [source validation](source-verification.json) and [archive validation](package-verification.json) record the result. Physical-phone, screen-reader and final-hosting review remain separate release checks.
