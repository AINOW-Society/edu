importScripts('../assets/platform-files.js');
const CACHE_NAME = 'ai-edu-v0.95';
const urlsToCache = [
    './',
    '../assets/workspaces.css',
    '../assets/fonts/fonts.css',
    '../assets/fonts/manrope-variable.ttf',
    '../assets/fonts/Manrope-OFL.txt',
    './index.html',
    './css/styles.css',
    './js/i18n.js',
    './js/app.js',
    './js/router.js',
    './js/engine.js',
    './js/glossary-data.js',
    './manifest.json',
    './views/home.js',
    './views/guide.js',
    './views/prompts.js',
    './views/tools.js',
    './views/resources.js',
    './views/glossary.js',
    './js/lang/mk/docs.js',
    './js/lang/mk/prompts.js',
    './js/lang/en/docs.js',
    './js/lang/en/prompts.js',
    './js/lang/sq/docs.js',
    './js/lang/sq/prompts.js',
    './js/lang/mk/quizzes.js',
    './js/lang/en/quizzes.js',
    './js/lang/sq/quizzes.js',
    './js/lang/mk/homework.js',
    './js/lang/en/homework.js',
    './js/lang/sq/homework.js',
    './js/lib/html2canvas.min.js',
    './js/lib/jspdf.min.js',
    './assets/logo.svg',
    './assets/icon-maskable.svg',
    ...(self.AINOW_PLATFORM_FILES || []).map(path => '../'+path)
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>

            Promise.allSettled(urlsToCache.map(url => cache.add(new Request(url, {cache: 'reload'}))))
        )
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name => name.startsWith('ai-edu-') && name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
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
        } catch (error) {
            if (cached) return cached;
            if (event.request.mode === 'navigate') return await cache.match('./index.html') || Response.error();
            return Response.error();
        }
    })());
});
