const CACHE_NAME = 'ainow-v0.5';
const ASSETS = [
  './',
  './index.html',
  './agents.html',
  './builder.html',
  './playbooks.html',
  './lab.html',
  './help.html',
  './settings.html',
  './manifest.json',
  './src/agents.js',
  './src/builder.js',
  './src/components/layout/Footer.js',
  './src/components/layout/Header.js',
  './src/components/layout/Sidebar.js',
  './src/components/ui/Logo.js',
  './src/components.js',
  './src/config.js',
  './src/ErrorBoundary.js',
  './src/help.js',
  './src/hooks.js',
  './src/index.js',
  './src/lab.js',
  './src/playbooks.js',
  './src/settings.js',
  './src/StaticPages.js',
  './src/utils.js',
  './data/data-agents.js',
  './data/data-agriculture.js',
  './data/data-aiengineering.js',
  './data/data-albanian.js',
  './data/data-bosnian.js',
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
  './data/data-situations.js',
  './data/data-product.js',
  './data/data-productivity.js',
  './data/data-psychology.js',
  './data/data-publichealth.js',
  './data/data-realestate.js',
  './data/data-sales.js',
  './data/data-science.js',
  './data/data-serbian.js',
  './data/data-sustainability.js',
  './data/data-writing.js',
  './data/data.js',
  './locales/locales-bs.js',
  './locales/locales-en.js',
  './locales/locales-mk.js',
  './locales/locales-sq.js',
  './locales/locales-sr.js',
  './locales/locales.js',
  './libs/fuse.js',
  './libs/htm.js',
  './libs/lucide-react.js',
  './libs/react-dom-client-bundle.js',
  './libs/react-dom-client.js',
  './libs/react-dom.js',
  './libs/react.js',
  './libs/tailwindcss.js',
  './assets/logo-placeholder.png',
  './assets/style.css'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(ASSETS.map(asset => cache.add(asset).catch(() => {})))
    )
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', (e) => {
  const url = e.request.url;

  // CRITICAL: Prevent caching of chrome-extension:// or other non-http schemes
  if (!url.startsWith('http')) return;

  // CRITICAL: Skip Vite dev server files (node_modules/.vite/)
  if (url.includes('node_modules/.vite/') || url.includes('/@vite/') || url.includes('/@fs/')) {
    return; // Let Vite handle its own files
  }

  // Cache-First for Google Fonts (both CSS and actual font files)
  if (url.includes('fonts.gstatic.com') || url.includes('fonts.googleapis.com')) {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        return cachedResponse || fetch(e.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
  // Stale-While-Revalidate for local App Files
  else if (ASSETS.some(asset => url.includes(asset.replace('./', '')))) {
    e.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(e.request).then((cachedResponse) => {
          const fetchedResponse = fetch(e.request).then((networkResponse) => {
            // Only cache successful responses
            if (networkResponse.ok) {
              cache.put(e.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => cachedResponse || new Response('Offline', { status: 503, statusText: 'Service Unavailable' }));
          return cachedResponse || fetchedResponse;
        });
      })
    );
  } else {
    e.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(e.request).then((response) => {
          return response || fetch(e.request).then((networkResponse) => {
            if (networkResponse.ok) {
              cache.put(e.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => new Response('Offline', { status: 503, statusText: 'Service Unavailable' }));
        });
      })
    );
  }
});