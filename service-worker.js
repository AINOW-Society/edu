
self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const names = await caches.keys();
        const stale = names.filter(name => name.startsWith('ai-edu-'));

        await Promise.all(stale.map(name => caches.delete(name)));
        await self.registration.unregister();

        if (stale.length > 0) {
            await self.clients.claim();
            const clientList = await self.clients.matchAll({ type: 'window' });
            clientList.forEach(client => client.navigate(client.url));
        }
    })());
});
