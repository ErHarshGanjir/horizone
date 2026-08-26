const CACHE_NAME = 'horizon-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './horizonApps.js',
  './importantLinks.js'
];

// Install the service worker and cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached file if found, otherwise fetch from the network
        return response || fetch(event.request);
      })
  );
});
