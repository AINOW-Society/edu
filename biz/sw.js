importScripts('../assets/platform-files.js');
const CACHE_NAME = 'ainow-biz-v0.95';

const ASSETS = [
  './',
  '../assets/workspaces.css',
  '../assets/fonts/fonts.css',
    '../assets/fonts/manrope-variable.ttf',
    '../assets/fonts/Manrope-OFL.txt',
  './about.html',
  './agents.html',
  './assets/logo-placeholder.png',
  './assets/preview.png',
  './assets/style.css',
  './assets/builder.css',
  './assets/home.css',
  './assets/prompt-reader.css',
  './builder.html',
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
  './src/builder-core.js',
  './src/components.js',
  './src/components/layout/Footer.js',
  './src/components/layout/Header.js',
  './src/components/layout/Sidebar.js',
  './src/config.js',
  './src/help.js',
  './src/hooks.js',
  './src/index.js',
  './src/playbooks.js',
  './src/runtime.js',
  './src/utils.js',
    ...(self.AINOW_PLATFORM_FILES || []).map(path => '../'+path)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>

      Promise.allSettled(ASSETS.map(url => cache.add(new Request(url, {cache: 'reload'}))))
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
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const exact = await cache.match(event.request);
        const cached = exact || await cache.match(event.request, {ignoreSearch: true});
    try {
      const response = await fetch(event.request);
      if (response.ok && response.type === 'basic') {
        try { await cache.put(event.request, response.clone()); } catch (_) {   }
      }
      return response;
    } catch (error) { return cached || Response.error(); }
  })());
});
