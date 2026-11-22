// Arabiyya v2.0. Mise à jour des données privilégiée lorsqu'une connexion est disponible.
const CACHE='arabiyya-curriculum-v2-1-20261122';
const ASSETS=['./','./index.html','./styles.css','./app.js','./courses.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 const url=new URL(event.request.url), important=event.request.mode==='navigate'||/\.(js|css|html)$/.test(url.pathname);
 if(important){event.respondWith(fetch(event.request).then(resp=>{if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));}return resp;}).catch(()=>caches.match(event.request,{ignoreSearch:true})));return;}
 event.respondWith(caches.match(event.request,{ignoreSearch:true}).then(hit=>hit||fetch(event.request).then(resp=>{if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));}return resp;})));
});
