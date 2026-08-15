// Root-scope cleanup worker.
//
// v0.93 registered a service worker at scope '/' that precached and served the
// education app from the site root. v0.94 moves that app to /edu/ with its own
// worker. This file replaces the old one at the same URL: already-installed
// clients fetch it on their next update check, it evicts the stale caches,
// then unregisters so '/' is served from the network normally.
//
// It deliberately does not cache anything. A caching worker at root scope
// would shadow /edu/ requests.

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const names = await caches.keys();
        const stale = names.filter(name => name.startsWith('ai-edu-'));

        await Promise.all(stale.map(name => caches.delete(name)));
        await self.registration.unregister();

        // Only reload if something was actually evicted. Reloading
        // unconditionally loops: reload -> register -> activate -> reload.
        // On a device that never had v0.93, `stale` is empty and this worker
        // retires silently. This guard is load-bearing — do not remove it.
        if (stale.length > 0) {
            await self.clients.claim();
            const clientList = await self.clients.matchAll({ type: 'window' });
            clientList.forEach(client => client.navigate(client.url));
        }
    })());
});
