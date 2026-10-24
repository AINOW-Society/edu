# Design and responsive review

Reviewed locally on 2026-10-23 using the in-app browser and fresh screenshots. This review preserves the approved warm Manrope design, original wordmarks, workspace accents and shared component system. It covers visible reflow, selected interactions and keyboard behavior; it is not a full accessibility certification or physical-device test.

## Result

The accepted screenshots show readable mobile layouts, matching primary/common navigation, full-screen prompt/agent readers and consistent shared Settings, Help, Programme and Services. Two bounded CSS issues were corrected during this pass. Functional and code-cleanup findings were handed to the corresponding agents and root for their final checks.

`responsive-matrix.json` records **78 DOM checks across 39 representative routes**, each at 320×740 and 390×844. Every recorded route had its expected non-empty heading and document width no wider than the viewport. The limited raw-key scan found no visible `nav.*`, `menu.*`, `footer.*` or `release.*` strings. This scan does not establish that every string in every language was visually reviewed.

## Flow and template coverage

| Step | Surface and task | General health and evidence |
| --- | --- | --- |
| 1 | Education prompts: desktop library, 320px library, open reader at 320/390 | Healthy: readable cards, full-screen reader, 44px reader actions and one content scroll. Images 01–04. |
| 2 | Education navigation at 767/768 | Healthy: hamburger at 767; desktop sidebar at 768; no document overflow. Images 05–06. |
| 3 | Education guide categories at 320/390 | Fixed: Foundations previously broke inside the word at 320. Auto-fitting category columns now wrap whole controls; labels stay intact. Images 07 before, 40–41 after. |
| 4 | Education resources and glossary | Healthy visible reflow. Resource guide/prompts/tests/homework variants also checked by DOM at both mobile widths. Images 09–10; route matrix records choice counts 19/8/8/1 respectively. |
| 5 | Business prompts: library and reader | Healthy mobile reflow; five app-specific card actions fit; reader title, close/edit/favorite/copy controls remain usable. Images 11–13. |
| 6 | Business agents: library and configurable reader | Healthy visible mobile reflow. Reader opens full-screen and exposes context input plus formatted instructions. Images 14–15. Agent search accessible-name issue was sent to functional QA. |
| 7 | Business situations: gallery, question flow, output | Healthy visible reflow. Completed all five questions of Navigate a Difficult Conversation using fictional data and reached the formatted result. Next remained disabled until a response was supplied. Images 16–18. |
| 8 | Business builder: task and review | Healthy on the synchronized rc33 candidate. Mobile task/review and desktop split preview render correctly. Images 37–39 replace rejected intermediate blank captures 19–20. |
| 9 | DEV overview, catalogue and readers | Healthy accepted screenshots: desktop/mobile overview; skill/MCP/workflow catalogues; authored, original-source and tool readers. Images 21–25 and 51–53. Additional guide/tool catalogue routes were checked by DOM at both widths. |
| 10 | DEV practice, individual question and token calculator | Healthy visible mobile reflow. Practice choices are native labeled radios; calculator fields inherit names from enclosing labels. Images 26–28. No practice result was submitted in this design pass. |
| 11 | Shared Settings and backups | Healthy mobile hierarchy and button layout. Starting language, appearance, workspace selection and backup actions have accessible names. EDU/DEV/BIZ conditional variants checked by DOM. Images 29–30. Restore/reset were not executed by this agent. |
| 12 | Shared Help and FAQ | Healthy readable steps. Clicking Where is my work saved? left exactly one details element open. Images 31–32. EDU/BIZ/DEV Help guide variants also passed the DOM reflow matrix. |
| 13 | Programme and Services | Healthy at 320/390. Programme keeps transparent labels below the four circles; Services leads with AINOW training/contact actions. Images 33–36. |
| 14 | Shared drawers and keyboard close | Healthy: EDU/BIZ/DEV drawers measured left-aligned and 296px wide at 320; EDU measured 320px wide at 390. Settings/About remain at the bottom. EDU Escape closes the drawer and returns focus to Open menu. Images 42–45. DEV 768 sidebar measured 240px. Image 46. |
| 15 | Remaining route variants | Chooser, About, policies, accessibility, all three Help guides, all Settings workspace variants, Education home/tools, DEV guides/tools/workflow reader and the other recorded routes have explicit 320/390 DOM checks. These checks complement the screenshot evidence; they do not imply a visual screenshot of every route. |

## Corrected issues

1. **Guide category word breaking at 320px.** `edu/css/styles.css` forced three equal columns and `overflow-wrap:anywhere`, splitting Foundations. The mobile guide grid now uses `repeat(auto-fit, minmax(110px, 1fr))` and ordinary word wrapping. Both 320 and 390 were visually checked after the fix.
2. **Wordmark hit area.** The mobile logo artwork correctly preserved its proportions, but the containing link/button was only about 14.5px high at 320. `.ainow-brand` in `assets/design-system.css` now has the same 44px minimum height as utility controls. The artwork remains 80px wide at 320; Settings and Education measured an 80×44px target, with the 16px inset intact.

## Findings handed to root / functional QA

- An Education Guide sidebar click changed visible content without changing the existing prompts URL. Root took ownership of routing/history fixes; this agent did not repeat their final functional proof.
- Business agents and situations search fields had no explicit accessible name in the intermediate browser build. Functional QA added translated labels, IDs and search input types. The question-field labeling discrepancy was traced to a cached earlier runtime.
- An intermediate builder navigation mixed newly edited `builder.js` with a cached earlier `hooks.js`, causing `useStorageSync is not a function` and a blank screen. Root synchronized rc33 entry/cache revisions and changed online refresh behavior. Fresh rc33 builder captures 37–39 rendered successfully.

## Resource controls and export limit

Resource Tests All selected all eight displayed questions and populated the preview; None cleared all eight and the preview. The automation's native checkbox `setChecked` action then failed to change the first selection. A subsequent visible-label click and PDF-download check was interrupted while the browser tool was waiting. **This agent did not verify an exported PDF, print layout, or print dialog.** The interrupted action may have partially completed; root was informed before taking browser ownership.

## Screenshot index

Accepted images, inspected from the saved local files:

- 01–06: Education prompts, reader and navigation boundary.
- 07–08: Education guide before the narrow-width fix; 09 resources; 10 glossary.
- 11–18: Business library, prompt/agent readers and completed fictional situation flow.
- 21–28: DEV overview, skill catalogue, authored/original readers, practice and calculator.
- 29–36: Settings, backups, Help single FAQ, Programme and Services.
- 37–41: working rc33 builder and fixed guide layouts.
- 42–46: shared drawer layouts and DEV desktop boundary.
- 51–53: MCP/workflow catalogues and ChatGPT tool reader.

Rejected captures retained for diagnosis, excluded from design acceptance:

- `19-builder-320.jpg`, `20-builder-desktop.jpg`: blank intermediate mixed-revision runtime; superseded by 37–39.
- `47-edu-home-320.jpg`: transient loading/fade state.
- `48-edu-tools-320.jpg`: viewport repaint was not settled; screenshot crop did not match the recorded DOM width.
- `49-dev-guides-320.jpg`: stale scaled render immediately after a viewport change.
- `50-dev-tools-320.jpg`: previous route remained in the screenshot while DOM had moved to the tool catalogue.

There are 53 saved image files: 47 accepted, including documented before-fix evidence, and six rejected. Final acceptance images should be chosen from the explicitly working/fixed groups above, not from the rejected files.

## Remaining evidence limits

- No physical phone, browser zoom/large-text sweep, screen reader, contrast measurement or complete WCAG audit.
- EN/light was the observed starting state and remained unchanged. MK/SQ and dark-mode screenshots were not added in this design pass; source/functional QA and root's final smoke checks are separate evidence.
- Table/list toggles, search/empty/error states, all imported catalogue records and each playbook output variation were not individually exercised by this agent. The responsive matrix covers representative routes, not every dataset item or every interactive state.
- BIZ and DEV share the same sidebar implementation, but this agent's explicit 767/768 measured boundary captures were EDU and DEV. All three mobile drawers were inspected at 320.
- Origin-unavailable behavior, cross-tab storage, backup restore/reset and final release packaging are owned by root's final verification. This report does not claim those checks.
- No deployment or hosted-site proof was performed.

Browser ownership was returned to root on completion of this evidence pass. No further runtime edits were made by this agent beyond the two CSS fixes described above.
