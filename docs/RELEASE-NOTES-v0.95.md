# v0.95 — three workspaces, one interface

**v0.95 · 24 October 2026.** [GitHub release](https://github.com/AINOW-Society/edu/releases/tag/v0.95).

AINOW now brings Education, Business and DEV into one shared web interface. The platform remains a free, static website with bundled content, browser-local saved work and no AI API or account requirement.

## What is new

- **DEV:** 13 ordered guide chapters, seven tool profiles, 1,000 skills, 1,000 MCP records and 200 workflows, with interactive examples, practice checks and a provider-neutral context calculator. Imported content retains its source language and attribution.
- **Consistent browsing:** original AINOW wordmarks, local Manrope, shared headers, sidebars, buttons and references. Education and Business prompts share card/preview/search/view styles and a full-screen mobile reader.
- **Clearer guidance:** one Help and one About for all three workspaces, practical worked examples, exclusive FAQ expansion, an improved Programme presentation and an AI Balkans project section. Services focuses on AINOW training and learning support.
- **Shared Settings and Scratchpad:** choose the starting language and appearance in one page, manage each workspace’s backups, and use the same plain Scratchpad drawer in Business and DEV.
- **Safer local work:** Business and DEV retain separate backup formats with validation before restore. New Business prompt links/favorites distinguish repeated source IDs while retaining legacy saves.
- **Reading polish:** rounded guide screenshots fitted to their original proportions, calmer callouts, compact Help section buttons and Settings feedback beside the controls. Shared dark sidebars use the same warm palette.
- **Prompt actions and Builder:** compact readers keep a primary Copy action and a quiet strip of labelled AI-app marks directly visible. Builder step cards show current/viewed states, support keyboard navigation and preserve drafts.
- **Mobile fixes:** readable header controls, flat guide/resource/glossary layouts, clearer Business builder/situation steps and consistent reader focus/scroll behavior.
- **Security fixes:** Education timeline/application descriptions and headings are escaped before HTML rendering. The Business warning-suppression code behind the URL-substring alert is removed; console warnings remain visible.

## Distribution and compatibility

There is one release, **v0.95**, with one app download: `AINOW-Literacy-v0.95.zip`. Extract the complete folder and open `index.html`. No installation, server or account is required. Keep `assets/`, `edu/`, `biz/`, `dev/` and the root files together. The release description includes the ZIP's SHA-256 checksum; source is available from the repository. External AI apps and publisher websites require connectivity.

Existing source IDs and local-state formats are preserved. Keep a workspace backup before moving to a different site address/browser or clearing browser data. This web release excludes native/prototype projects.

The app ZIP excludes repository-only screenshots, QA reports, maintainer tools, native/prototype projects and rollback files. Required licence and attribution files remain included. Android remains an internal project.

## Verification and release gates

Local evidence covers 114 automated checks, including three security regressions, desktop/mobile walkthroughs, translated search and controls, history navigation, storage failures, backup isolation, content/source integrity and origin-unavailable browsing. Cleanup removes retired renderers, dead navigation/configuration, obsolete styles and decorative button glows while retaining original content and licence notices. Archives are CRC checked and source matched. Checksums accompany the release downloads. The final GitHub CodeQL result is verified on the release commit before publication.

A real-phone review, screen-reader review and the final-hosting/cache-update check remain pending. These notes do not claim deployment, universal device coverage or WCAG certification. The inherited bundled Tailwind browser runtime still emits its upstream production warning; replacing it is a separate change.

See [CHANGELOG.md](../CHANGELOG.md) for the preserved release history and [the local review](web-v095/release-readiness/README.md) for evidence and limitations. Application source is GPLv3; bundled third-party material keeps its original terms and notices.
