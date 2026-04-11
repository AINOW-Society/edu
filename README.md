# AINOW Platform for AI Literacy

<div align="center">
  <h3>The Open-Source AI Literacy Platform for Educators</h3>
  <img src="assets/ainow.png" alt="AINOW Platform Preview" width="100%">
  <p>Available at <a href="https://edu.ainow.mk">edu.ainow.mk</a></p>
</div>

---

## About The Project

As Artificial Intelligence reshapes education, the **AINOW Platform for AI Literacy** exists to ensure educators aren't left behind. We built an offline-first, deeply pedagogical Progressive Web App (PWA) to give teachers, principals, and school administrators the exact skills and tools they need to leverage AI in their daily work. 

Currently deployed for schools across the Balkans, the platform is proudly **100% open-source, zero-dependency, and strictly privacy-first**. No data ever leaves the device.

## Key Features

- **Interactive Learning Guide:** A 16-chapter curriculum breaking down complex AI concepts into easy, classroom-ready analogies (Foundations, Practice, Reference).
- **Massive Prompt Bank:** Over 200 high-quality, educator-tested prompts. From designing Flipped Classroom lesson plans to handling difficult parent conferences — organized by grade level and administrative role.
- **AI Tool Directory:** A curated list of the best AI tools for classrooms, categorized by use-case (Planning, Multimedia, Assessment, etc.) with clear pricing badges.
- **Lightning Fast & Offline-Ready:** Built with vanilla HTML/CSS/JS. The built-in Service Worker ensures the platform works perfectly even when a school loses internet access.
- **Tri-Lingual:** Seamless, real-time language switching across English, Macedonian, and Albanian with full content parity.

---

## Built for Developers & Contributors

We intentionally designed the platform without heavy frameworks (React, Vue, etc.) or build steps (Webpack, Vite) so that **anyone with basic web skills can contribute**. 

### How to Run the App

This app is built to be as simple as possible for educators to use. You do not need to install any development tools, and you do not need an internet connection after downloading.

1. Download or clone this repository to your computer.
2. Double-click the `index.html` file to open it in your browser.

That's it! The platform is designed to run perfectly straight from your local files without the need for any server.

## How to Contribute

Whether it's adding new AI tools, translating the platform, or submitting new prompts for teachers — we need your help!

We have prepared a comprehensive **[Contribution Guide](CONTRIBUTING.md)** that explains exactly how to add data to the app, including:
1. Adding new Prompts to the Database
2. Adding new Educational AI Tools
3. Updating the AI Literacy Guide
4. Localization and Translation requirements

## Changelog

### v0.81 (April 11, 2026)
- **PWA Install — Fixed End-to-End:** Rewrote the entire PWA install flow with a single source of truth. Install button now shows only when the browser is actually ready to install (via `beforeinstallprompt`). iOS Safari shows a step-by-step bottom-sheet guide instead of a plain alert.
- **One-Time Install Banner:** A prominent install banner slides up from the bottom on first mobile visit, 2.5 seconds after load. Stored in `localStorage` so it only ever shows once per device.
- **Service Worker Overhaul:** Switched to network-first for navigation requests — fixes the blank page after PWA install. Cache bumped to `ai-edu-v0.81`.
- **Manifest Fixed:** Replaced broken `data:` URI icons with real SVG/PNG files. Changed `start_url` from absolute URL to `"/"` so the manifest is valid on both localhost and production — this was the root cause of `beforeinstallprompt` never firing.
- **Real Logo Assets:** Favicon and PWA icons now use `/assets/logo.svg` and `/assets/logo.png` (4000×4000). Maskable icon uses orange background for Android adaptive icons.
- **Mobile UI:** Hamburger menu hidden (footer nav handles all navigation). Custom styled checkboxes in Resources view. Pull-to-refresh indicator uses brand orange instead of green.
- **Nav Icons:** Reduced stroke-width from 2 to 1.5 for a lighter, more refined look.
- **iOS Install Guide:** Beautiful animated bottom-sheet with 3 numbered steps replaces the old `alert()`.
- **i18n:** Added `ptr.*` and `pwa.*` translation keys across all three languages (MK, EN, SQ).

### v77 (April 11, 2026)
- **Mobile UX Improvements:** Added pull-to-refresh gesture support with loading indicators, improved language dropdown interaction on mobile devices
- **Language Switching:** Fixed language switching behavior, ensuring test topics and content properly reset when changing languages
- **Code Cleanup:** Removed all unnecessary comments for a cleaner codebase
- **Bug Fixes:** Various stability improvements and edge case handling

### v76 (Previous Release)
- Footer PWA install improvements
- Initial platform release

## License

This project is licensed under the **MIT License**. It is completely free for educational institutions, non-profits, and individual learners. See the [LICENSE](LICENSE) file for more details.

---
<div align="center">
  <b>Built by Suad Seferi</b><br>
  <a href="https://www.ainow.mk">www.ainow.mk</a>
</div>
