# Help contents controls — 24 October 2026

Local candidate **v0.95-rc35**. The owner rejected the rc34 plain text jump controls and dropdown arrows. This bounded revision replaces that component across the shared Help overview and Education, Business and DEV guides.

The component now shows a small translated **On this page** label and two shared secondary buttons. Book and question icons identify the guide/steps and questions destinations. Short EN/MK/SQ labels fit beside each other at 320px; the control size, typography, corners and focus treatment come from the existing design system. The former text-link/chevron rules were replaced. The surrounding page content and navigation remain as reviewed in [the preceding polish pass](../guide-help-settings/README.md).

## Checks

- [51 browser observations](browser-checks.json): the overview and all three guides at 320/390px in EN/MK/SQ and light/dark modes, plus English DEV at 767/768/1280px. No document overflow, undersized buttons or wrapping into a second row was observed.
- [Interaction checks](interaction-checks.json): Questions focuses the FAQ heading while preserving the route; opening another FAQ leaves one answer expanded. Existing automated checks also exercise both destination handlers in all three languages.
- [Complete regression suite](full-tests.tap): 106 passed, zero failed. [Static checks](static-checks.json) cover all ten entry documents and their linked assets.
- All four cache names and entry asset revisions advance together to rc35. The preview uses the new revision. No deployment, publication, native project changes or real saved-work restore/reset was performed.

Final captures were reopened from disk: [desktop](04-dev-desktop-stable.jpg) and [320px mobile](05-dev-mobile-stable.jpg). Capture 01 is intermediate copy, 02 caught a loading raster and 03 caught a stale breakpoint raster; they are excluded from acceptance.

Viewport emulation is local layout evidence. The physical-phone, screen-reader and final-hosting checks recorded in the broader release review remain pending.
