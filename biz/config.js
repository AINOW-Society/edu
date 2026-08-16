// Replaces Vite's build-time `define` substitutions.
//
// The app previously relied on Vite injecting __APP_VERSION__ and
// process.env.API_KEY at build time. With no build step, they are plain
// globals declared here. Must load before src/config.js.

var __APP_VERSION__ = '0.94';

window.AINOW = window.AINOW || {};
window.AINOW.env = {
    APP_VERSION: __APP_VERSION__,
    // No API key ships in a static, offline-first app. Any feature that would
    // need one must degrade gracefully without it.
    API_KEY: ''
};
