(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/utils'] = AINOW['src/utils'] || {};
const { useState, useEffect } = React;

const BUSINESS_DATA_KEYS = Object.freeze(['favPrompts','favAgents','favPlaybooks','ainow_builder_state','ainow_scratchpad','ainow_recent_items','viewMode','agentViewMode']);
const BUSINESS_PREFERENCE_KEYS = Object.freeze(['language','ainow_lang','ainow-lang','theme','ainow-theme']);
const parseBusinessBackup = raw => {
  if (typeof raw !== 'string' || raw.length > 2 * 1024 * 1024) throw new Error('Invalid backup');
  const data = JSON.parse(raw);
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Invalid backup');
  const result = Object.create(null);
  for (const key of [...BUSINESS_DATA_KEYS, ...BUSINESS_PREFERENCE_KEYS]) {
    if (Object.hasOwn(data, key)) {
      if (typeof data[key] !== 'string') throw new Error('Invalid backup value');
      if (['favPrompts','favAgents','favPlaybooks'].includes(key)) {
        const list=JSON.parse(data[key]);
        if(!Array.isArray(list)||!list.every(value=>typeof value==='string'||typeof value==='number'&&Number.isFinite(value)))throw new Error('Invalid saved list');
      }
      if(key==='ainow_recent_items') {
        const list=JSON.parse(data[key]);
        if(!Array.isArray(list)||!list.every(value=>value&&typeof value==='object'&&!Array.isArray(value)&&['string','number'].includes(typeof value.id)&&typeof value.title==='string'&&typeof value.type==='string'&&typeof value.url==='string'))throw new Error('Invalid recent items');
      }
      if(key==='ainow_builder_state') {
        const draft=JSON.parse(data[key]);
        if(!draft||typeof draft!=='object'||Array.isArray(draft))throw new Error('Invalid builder draft');
        const fields=['framework','name','role','domain','expertise','focus','tone','methodology','capabilities','context','input_format','examples','task','output_format'];
        if(fields.some(field=>Object.hasOwn(draft,field)&&typeof draft[field]!=='string')||Object.hasOwn(draft,'constraints')&&(!Array.isArray(draft.constraints)||!draft.constraints.every(value=>typeof value==='string')))throw new Error('Invalid builder draft');
      }
      if(['language','ainow_lang','ainow-lang'].includes(key)&&!['en','mk','sq'].includes(data[key]))throw new Error('Invalid language');
      if(['theme','ainow-theme'].includes(key)&&!['light','dark'].includes(data[key]))throw new Error('Invalid appearance');
      if(['viewMode','agentViewMode'].includes(key)&&!['grid','compact','table'].includes(data[key]))throw new Error('Invalid view');
      result[key] = data[key];
    }
  }
  if (!Object.keys(result).length) throw new Error('Not a Business backup');
  return result;
};

const promptKey = prompt => 'prompt:' + encodeURIComponent(String(prompt.category || '')) + ':' + encodeURIComponent(String(prompt.id));
const promptHref = prompt => '#/prompt/' + encodeURIComponent(String(prompt.category || '')) + '/' + encodeURIComponent(String(prompt.id));
const isPromptFavorite = (prompt, saved) => saved.has(promptKey(prompt)) || saved.has(prompt.id) || saved.has(String(prompt.id));
const togglePromptFavorite = (saved, prompt) => {
  const keys = new Set([promptKey(prompt), prompt.id, String(prompt.id)]);
  return saved.some(key => keys.has(key)) ? saved.filter(key => !keys.has(key)) : [...saved, promptKey(prompt)];
};
const findPromptForHash = (prompts, hash) => {
  if (!hash.startsWith('#/prompt/')) return null;
  try {
    const parts = hash.slice('#/prompt/'.length).split('/').map(decodeURIComponent);
    if (parts.length === 1) return prompts.find(prompt => String(prompt.id) === parts[0]) || null;
    if (parts.length === 2) return prompts.find(prompt => String(prompt.category || '') === parts[0] && String(prompt.id) === parts[1]) || null;
  } catch (_) {}
  return null;
};

const restoreBusinessBackup = (storage, data) => {
  const changes={...data},language=changes.ainow_lang||changes['ainow-lang']||changes.language,theme=changes['ainow-theme']||changes.theme;
  if(language!==undefined)for(const key of ['language','ainow_lang','ainow-lang'])changes[key]=language;
  if(theme!==undefined)for(const key of ['theme','ainow-theme'])changes[key]=theme;
  const previous = new Map(Object.keys(changes).map(key => [key, storage.getItem(key)]));
  try { for (const [key,value] of Object.entries(changes)) storage.setItem(key,value); }
  catch (error) {
    for (const [key,value] of previous) { try { value === null ? storage.removeItem(key) : storage.setItem(key,value); } catch (_) {} }
    throw error;
  }
};

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

const copyTextToClipboard = async (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    try { await navigator.clipboard.writeText(text); return true; } catch (err) {}
  }
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  try {
      textArea.select();
      return document.execCommand('copy');
  } catch (err) {
      return false;
  } finally {
      document.body.removeChild(textArea);
  }
};

  __exports.useDebounce = useDebounce;
  __exports.copyTextToClipboard = copyTextToClipboard;
  __exports.promptKey = promptKey;
  __exports.promptHref = promptHref;
  __exports.isPromptFavorite = isPromptFavorite;
  __exports.togglePromptFavorite = togglePromptFavorite;
  __exports.findPromptForHash = findPromptForHash;
  __exports.BUSINESS_DATA_KEYS = BUSINESS_DATA_KEYS;
  __exports.BUSINESS_PREFERENCE_KEYS = BUSINESS_PREFERENCE_KEYS;
  __exports.parseBusinessBackup = parseBusinessBackup;
  __exports.restoreBusinessBackup = restoreBusinessBackup;
})();
