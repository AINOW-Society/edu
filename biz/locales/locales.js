(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['locales/locales'] = AINOW['locales/locales'] || {};

const { data: en } = AINOW['locales/locales-en'];
const { data: mk } = AINOW['locales/locales-mk'];
const { data: sq } = AINOW['locales/locales-sq'];

const registry = { en, mk, sq };

const loadLocale = async (code) => {
    return registry[code] || registry.en;
};

const getCachedLocale = (code) => {
    return registry[code] || registry.en;
};

const TRANSLATIONS = registry;
  __exports.loadLocale = loadLocale;
  __exports.getCachedLocale = getCachedLocale;
  __exports.TRANSLATIONS = TRANSLATIONS;
})();
