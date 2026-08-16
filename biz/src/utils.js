(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/utils'] = AINOW['src/utils'] || {};
const { useState, useEffect } = React;

/**
 * Hook to debounce a value
 * @param {any} value 
 * @param {number} delay 
 * @returns {any}
 */
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

/**
 * Copies text to clipboard with fallback
 * @param {string} text 
 * @returns {Promise<boolean>}
 */
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

/**
 * Compresses a JSON object into a Base64 string for URL sharing
 */
const compressState = (state) => {
    try {
        const json = JSON.stringify(state);
        return btoa(encodeURIComponent(json));
    } catch (e) {
        console.error("Compression failed", e);
        return null;
    }
};

/**
 * Decompresses a Base64 string back into a JSON object
 */
const decompressState = (encoded) => {
    try {
        const json = decodeURIComponent(atob(encoded));
        return JSON.parse(json);
    } catch (e) {
        console.error("Decompression failed", e);
        return null;
    }
};
  __exports.useDebounce = useDebounce;
  __exports.copyTextToClipboard = copyTextToClipboard;
  __exports.compressState = compressState;
  __exports.decompressState = decompressState;
})();