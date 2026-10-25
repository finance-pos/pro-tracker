const CACHE_NAME = 'arcus-entropy-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// ដំឡើង Service Worker និង Cache ឯកសារចាំបាច់
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// ទាញយកទិន្នន័យពី Cache ពេលគ្មានអ៊ីនធឺណិត
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
