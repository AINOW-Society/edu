(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['locales/locales'] = AINOW['locales/locales'] || {};
// AINOW Locale Loader
// Static imports ensure offline functionality via file:// protocol
const { data: en } = AINOW['locales/locales-en'];
const { data: mk } = AINOW['locales/locales-mk'];
const { data: sq } = AINOW['locales/locales-sq'];

// The Readiness Assessment tool was dropped in v0.94, so its fallback
// dictionary is gone with it. Locales are used directly.
const registry = { en, mk, sq };

/**
 * Returns the translation dictionary. 
 * Since all files are statically imported, this is now synchronous.
 */
const loadLocale = async (code) => {
    return registry[code] || registry.en;
};

/**
 * Returns the currently cached dictionary for a language.
 */
const getCachedLocale = (code) => {
    return registry[code] || registry.en;
};

const TRANSLATIONS = registry;
  __exports.loadLocale = loadLocale;
  __exports.getCachedLocale = getCachedLocale;
  __exports.TRANSLATIONS = TRANSLATIONS;
})();