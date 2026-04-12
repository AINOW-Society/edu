const CACHE_NAME = 'ai-edu-v0.84';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/i18n.js',
    '/js/app.js',
    '/js/router.js',
    '/js/engine.js',
    '/manifest.json',
    '/views/home.js',
    '/views/help.js',
    '/views/guide.js',
    '/views/prompts.js',
    '/views/tools.js',
    '/views/about.js',
    '/views/resources.js',
    '/js/lang/mk/docs.js',
    '/js/lang/mk/prompts.js',
    '/js/lang/en/docs.js',
    '/js/lang/en/prompts.js',
    '/js/lang/sq/docs.js',
    '/js/lang/sq/prompts.js',
    '/js/lang/mk/quizzes.js',
    '/js/lang/en/quizzes.js',
    '/js/lang/sq/quizzes.js',
    '/js/lib/html2canvas.min.js',
    '/js/lib/jspdf.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Only handle same-origin requests
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    // Navigation requests (page loads): network-first, cache fallback
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(() =>
                    caches.match(event.request)
                        .then(cached => cached || caches.match('/index.html'))
                )
        );
        return;
    }

    // All other requests: cache-first, network fallback
    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;

            return fetch(event.request).then(response => {
                if (response && response.status === 200 && response.type === 'basic') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => caches.match('/index.html'));
        })
    );
});
