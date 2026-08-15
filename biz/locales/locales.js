
// AINOW Locale Loader
// Static imports ensure offline functionality via file:// protocol
import { data as en } from './locales-en.js';
import { data as mk } from './locales-mk.js';
import { data as sq } from './locales-sq.js';

// The Readiness Assessment tool was dropped in v0.94, so its fallback
// dictionary is gone with it. Locales are used directly.
const registry = { en, mk, sq };

/**
 * Returns the translation dictionary. 
 * Since all files are statically imported, this is now synchronous.
 */
export const loadLocale = async (code) => {
    return registry[code] || registry.en;
};

/**
 * Returns the currently cached dictionary for a language.
 */
export const getCachedLocale = (code) => {
    return registry[code] || registry.en;
};

export const TRANSLATIONS = registry;
