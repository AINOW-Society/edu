# Shared AINOW interface and source cleanup — October 22, 2026

The existing warm Manrope design, Education terracotta, Business teal and DEV indigo remain the brand. This pass consolidates the public web interface; it does not replace the apps with a new framework.

## Current component contract

| Component | Canonical source | Rule |
| --- | --- | --- |
| Typography, spacing, radii, colours | assets/design-system.css | Manrope; shared 12/13/14/15px text roles, responsive 28–36px page titles and 32–48px hero titles |
| Logo | assets/brand/ + AINOWPlatform.logo() | Original owner-supplied paths and proportions; black/white text fills; workspace circle colour and separate HTML workspace cue |
| Header | biz/src/components/layout/Header.js + vanilla EDU adapter | 64px shell; 20px icons with identical SVG shapes; 44px utility targets |
| Icon shapes and labels | assets/platform.js | One renderer; translated EN/MK/SQ language, theme, About, chooser and menu labels |
| Sidebar | assets/platform-navigation.js + shared SidebarWrapper/EDU adapter | One menu model and HTML renderer; 240px desktop width, 13px rows, 18px icons, 44px rows; context filters scroll, Settings/About remain at the bottom |
| Actions | assets/design-system.css | Primary, secondary and text variants; 44px minimum height, 13px/600 text, 10px radius; existing DEV/BIZ/EDU class adapters use the same rules |
| References | dev/app.js References + shared CSS | Always visible; small source pills, consistent review label, no arrows; attribution/revision text retained |
| Settings and backups | settings.html / assets/platform-settings.js / settings-data.js | Shared preference rows, action rows and existing isolated BIZ/DEV formats |
| Prompt prose/editor | assets/prompt-text.js + ainow-prompt-* | Escaped rendering, paragraph/heading/list formatting, Edit/Preview/Reset, original source preserved |
| Scratchpad | biz/src/components.js | Same drawer for BIZ/DEV, plain Manrope editor, per-workspace storage adapter |
| Help and footer | assets/platform-pages.js / platform.js | Shared guides; Help linked once in the footer |

The root chooser keeps its purpose-specific layout; utility icons use the same source and sizing. Form, selection and filter controls retain their task-specific behavior; they should not be styled as primary actions just because they are buttons.

## Evidence-led walkthrough

Fresh before captures and before-metrics.json established the current styles before edits. These are actual local UI captures, not generated product screenshots.

| Step | Surface | Initial finding | Outcome / evidence |
| --- | --- | --- | --- |
| 1 | Shared Programme | Duplicate About sidebar link; repeated older programme copy | Current reviewed priorities shown once; archived content evidence in ../help-about-consistency/ |
| 2 | Education | Separate utility SVGs; small targets; old hidden top-nav markup; closed mobile sidebar accessible | Shared icon source and 44px controls; inert closed drawer, Escape/focus and EN/MK/SQ checks |
| 3 | Business | Header notes had a separate yellow control treatment; action sizing differed | Shared icon controls and action adapters; 320px header checked without horizontal overflow |
| 4 | DEV overview/sidebar | Different header treatment, wrapped MCP label and redundant status block | Shared shell; short MCP/Workflows labels; status block and unused display state removed |
| 5 | Token calculator | Chapter navigation looked like plain body text; sources behind a disclosure | Secondary chapter action; same visible References component |
| 6 | Practice overview | Indented chapter rows and inconsistent actions | Shared topic icons, aligned rows and shared secondary actions |
| 7 | Imported record | Raw URL lines mixed with licence attribution | Same pills as guides; original credit/revision text and URLs preserved by a regression check |

The supplied black and white SVGs are retained byte-for-byte with hashes and rendering rules in assets/brand/provenance.json. The active SVG uses their exact paths and viewBox. Only the circular symbol follows the workspace accent; text keeps the original black/white fills. EDU/BIZ/DEV cues sit outside the artwork on desktop and are hidden on mobile at the owner's request. The root chooser uses the same full wordmark. Mobile Business Notes moves into its menu to retain five 44px core controls beside the full logo. The wordmark keeps its intrinsic aspect ratio, cannot flex-shrink, and has no SVG clipping. EDU's logo initializer also has a new script revision so an earlier cached renderer cannot leave the wordmark blank.

Browser observations and final captures are stored alongside this file. Header metrics confirm identical SVG shapes and 44px targets in EDU and DEV. Desktop EDU/BIZ measurements confirm 64px headers, 240px sidebars and shared hero sizing. Mobile checks include 390px and 320px, menu focus/close, language menus and dark mode. Screenshots establish observed layout, not full accessibility conformance.

## Runtime cleanup

cleanup.json lists 45 obsolete CSS selectors removed with retired markup. The former workspace-switcher styles, competing guidance card/disclosure layers, unused header props/imports, obsolete language handlers, separate Help application shell and unused Help renderers were removed. Manrope has one active font declaration; inactive Onest files are no longer precached.

Four retired renderers were moved to legacy-source/ outside public paths to preserve authored history: EDU Help/About, the old BIZ About app and the replaced custom Logo component. Redirect entry URLs remain public. Vendor libraries, source datasets, identifiers, saved-data schemas, third-party attribution and licence files were preserved. Original imported skill files still match their hashes. No blanket unused-code deletion was performed from a text search.

The older repeated Programme description is retained in translations/history; the rendered Programme uses the reviewed Society priorities and explains all three workspaces once. An outdated fixed playbook count in the optional Business reference was replaced with a count-independent explanation; actual library totals remain data-backed.

## Validation and limits

Run the commands in the root README. tests.tap records 44 passing regression checks. static-checks.json confirms 54 JavaScript files, 22 inline scripts, four JSON-LD blocks and 237 linked assets without missing files. static-checks.json records script, inline-script, JSON-LD and linked-asset checks for all nine entry documents. Content/media sync verifies 2,226 entries, 1,000 original skill files and 14 Windows captures. isolation.json compares 4,103 baseline files: the same 14 pre-existing Android differences, with no new differences in native paths, prototype or original EDU/BIZ datasets.

This is a verified local component consolidation, not an assertion that every historical selector or every deep resource widget has been removed or reviewed. Full physical-device, cross-browser, screen-reader and offline walkthroughs remain release checks. No deployment, Git commit/tag or native build was performed.

## Final capture index

The final supplied-logo captures supersede earlier header examples in this folder: 19-biz-desktop-final.png (desktop/light), 21-edu-mobile-final.png (320px/dark), 22-chooser-mobile-original-logo.png (chooser), 23-practice-final.png (aligned action rows), 24-dev-mobile-final.png (390px/light), and 25-mobile-header-proof.png (header and article context). browser-checks.json contains the final observed geometry, theme fills, hidden mobile workspace labels, 44px controls, mobile Notes entry, FAQ expansion and alignment checks. Earlier numbered captures preserve the before/diagnosis steps.

## October 23 follow-up

[Shared reader, Settings, navigation and builder review](../prompt-formatting/README.md) supersedes the older menu/data/notes screenshots in this folder. The old DataModal, DEV Notes page, Education promotional sidebar helpers, conflicting drawer rules and 28 unused sidebar style selectors were removed. Desktop navigation and mobile drawers now share one model and control geometry. Builder styles use shared tokens and a readable preview rather than the former dark console. Runtime/cache revisions are rc32.

The [final audit](../final-audit/README.md) advances the candidate to rc33. It verifies shared controls after removing another 159 obsolete selector branches, gives wordmark links a 44px minimum height, and lets Education category labels wrap between words at narrow widths. `useStorageSync` in the shared hooks module refreshes state after external storage changes and cached-page returns; workspace adapters retain their original keys and formats. The original logo geometry, accents, typography and component ownership above remain the design contract.

## October 24 follow-up

[Help, Settings and guide polish](../guide-help-settings/README.md) advances the candidate to rc34. Guide screenshots use intrinsic proportions and the shared 10px control radius; callouts have no decorative accent rail. Help shortcuts focus their section headings and preserve the route. Settings uses consistent label/hint/select rows with action feedback inside the relevant section; narrow desktop layouts stack controls before they become cramped. The shared SidebarWrapper leaves its background and border colours to the design tokens in both themes. No new component owner or storage format was introduced.

The [rc35 Help refinement](../help-contents/README.md) replaces the temporary plain jump links with a visible translated contents label and shared secondary icon buttons. Their short labels fit a single row at 320px in all three interface languages.
