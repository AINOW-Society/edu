# v0.95 security review

The owner requested a review of GitHub's three open high-severity CodeQL alerts before release publication. They were confirmed against `main` commit `525243eef2d3c4ce7dec5beee85e3e2506cef58a` on 24 October 2026.

| Alert | Cause | Change |
| --- | --- | --- |
| [4](https://github.com/AINOW-Society/edu/security/code-scanning/4), [5](https://github.com/AINOW-Society/edu/security/code-scanning/5) | Education guide text extracted from the DOM was interpolated into HTML without escaping. | Escape timeline/application descriptions, headings and translated timeline labels with the existing shared escaping function. |
| [3](https://github.com/AINOW-Society/edu/security/code-scanning/3) | The Business console-warning filter used an incomplete URL substring check. | Remove the filter from all four Business entry pages; preserve the bundled local Tailwind runtime and leave console warnings visible. |

`scripts/verify-security.cjs` exercises both reader paths with decoded HTML payloads and malicious heading/translation text. It also verifies that all four Business entry pages leave `console.warn` intact and still load local Tailwind. [The full local run](tests.tap) covers 114 passing checks. Source content, IDs, language packs, branding and saved-work formats are unchanged by these fixes.

The GitHub scan must analyse the pushed commit before the release is published. The release page records that final remote result. Alerts are fixed in source rather than dismissed or suppressed.

The first post-push analysis closed the original three alerts and identified five checks in the newly published test helpers. URL checks now compare parsed destinations, and HTML script checks handle upper-case tags too. Git attributes preserve original brand SVG bytes so the extracted repository retains the recorded artwork hashes. Portable checks are rerun on the extracted final Git archive before publication.

This security follow-up does not replace the earlier viewport, offline and interaction reviews. Physical-phone, screen-reader and final-hosting cache-update sign-off remain separate checks.
