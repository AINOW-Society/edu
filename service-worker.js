importScripts('./assets/platform-files.js');
const CACHE_NAME='ainow-platform-v0.95';
const FILES=self.AINOW_PLATFORM_FILES;
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE_NAME);await Promise.allSettled(FILES.map(path=>cache.add(new Request(path,{cache:'reload'}))));})());self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{
  const names=await caches.keys(),stale=names.filter(name=>name.startsWith('ainow-platform-')&&name!==CACHE_NAME);
  for(const name of names.filter(value=>value.startsWith('ai-edu-'))){const cache=await caches.open(name),requests=await cache.keys();if(requests.length&&requests.every(request=>!new URL(request.url).pathname.includes('/edu/')))stale.push(name);}
  await Promise.all(stale.map(name=>caches.delete(name)));await self.clients.claim();
})());});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url),root=new URL('./',self.location.href);
  if(url.origin!==root.origin||!FILES.some(path=>new URL(path,root).pathname===url.pathname))return;
  event.respondWith((async()=>{const cache=await caches.open(CACHE_NAME);try{const response=await fetch(event.request);if(response.ok){try{await cache.put(event.request,response.clone());}catch(_){}return response;}const cached=await cache.match(event.request,{ignoreSearch:true});return cached||response;}catch(error){const cached=await cache.match(event.request,{ignoreSearch:true});if(cached)return cached;throw error;}})());
});
