(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/utils'] = AINOW['src/utils'] || {};
const { useState, useEffect } = React;

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

const compressState = (state) => {
    try {
        const json = JSON.stringify(state);
        return btoa(encodeURIComponent(json));
    } catch (e) {
        console.error("Compression failed", e);
        return null;
    }
};

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
