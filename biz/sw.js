const CACHE_NAME = 'ainow-biz-v0.94';

// Generated from the file tree. Regenerate when files are added or removed.
const ASSETS = [
  './',
  './agents.html',
  './assets/logo-placeholder.png',
  './assets/preview.png',
  './assets/style.css',
  './builder.html',
  './config.js',
  './data/data-agents.js',
  './data/data-agriculture.js',
  './data/data-aiengineering.js',
  './data/data-albanian.js',
  './data/data-business.js',
  './data/data-career.js',
  './data/data-climate.js',
  './data/data-coding.js',
  './data/data-counts.js',
  './data/data-creative-visual.js',
  './data/data-creative.js',
  './data/data-cybersecurity.js',
  './data/data-dataanalysis.js',
  './data/data-education.js',
  './data/data-finance.js',
  './data/data-gov.js',
  './data/data-health.js',
  './data/data-hospitality.js',
  './data/data-hr.js',
  './data/data-humanities.js',
  './data/data-journalism.js',
  './data/data-legal.js',
  './data/data-logistics.js',
  './data/data-macedonian.js',
  './data/data-marketing.js',
  './data/data-medicine.js',
  './data/data-ngo.js',
  './data/data-playbooks.js',
  './data/data-product.js',
  './data/data-productivity.js',
  './data/data-psychology.js',
  './data/data-publichealth.js',
  './data/data-realestate.js',
  './data/data-sales.js',
  './data/data-science.js',
  './data/data-situations.js',
  './data/data-sustainability.js',
  './data/data-writing.js',
  './data/data.js',
  './help.html',
  './index.html',
  './libs/fuse.js',
  './libs/htm.js',
  './libs/tailwindcss.js',
  './libs/vendor.js',
  './locales/locales-en.js',
  './locales/locales-mk.js',
  './locales/locales-sq.js',
  './locales/locales.js',
  './manifest.json',
  './playbooks.html',
  './src/ErrorBoundary.js',
  './src/StaticPages.js',
  './src/agents.js',
  './src/builder.js',
  './src/components.js',
  './src/components/layout/Footer.js',
  './src/components/layout/Header.js',
  './src/components/layout/Sidebar.js',
  './src/components/ui/Logo.js',
  './src/config.js',
  './src/help.js',
  './src/hooks.js',
  './src/index.js',
  './src/playbooks.js',
  './src/runtime.js',
  './src/utils.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // allSettled, not addAll: one missing file must not fail the whole install.
      Promise.allSettled(ASSETS.map(url => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => n.startsWith('ainow-biz-') && n !== CACHE_NAME)
                       .map(n => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(hit => hit || fetch(event.request).then(res => {
      if (res && res.status === 200 && res.type === 'basic') {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
      }
      return res;
    }).catch(() => caches.match(event.request, { ignoreSearch: true })))
  );
});
