const CACHE_NAME = 'ai-edu-v76';
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
    '/js/lang/sq/quizzes.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }

                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(response => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
            .catch(() => {
                return caches.match('/index.html');
            })
    );
});
