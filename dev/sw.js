importScripts('./offline-files.js');
const CACHE_NAME='ainow-dev-v0.95';
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME),queue=[...self.AINOW_DEV_FILES];
    await Promise.all(Array.from({length:6},async()=>{
      while(queue.length) {
        const path=queue.shift();
        if(path.includes('/data/skills/')&&await cache.match(path))continue;
        const response=await fetch(new Request(path,{cache:'reload'}));
        if(!response.ok)throw new Error('Offline asset missing: '+path);
        await cache.put(path,response);
      }
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  await Promise.all((await caches.keys()).filter(x=>x.startsWith('ainow-dev-')&&x!==CACHE_NAME).map(x=>caches.delete(x)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME),cached=await cache.match(event.request,{ignoreSearch:true});
    if(new URL(event.request.url).pathname.includes('/data/skills/')&&cached)return cached;
    try {
      const response=await fetch(event.request);
      if(response.ok)await cache.put(event.request,response.clone());
      return response;
    } catch(error) {
      if(cached)return cached;
      throw error;
    }
  })());
});
