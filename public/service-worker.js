console.log('Starts Custom service worker');

const CACHE_NAME = 'anand-prem-cache-v1';
var urlsToCache = [
  '/',
  '/build.js',
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      })
      .catch(function(err, data) {
        console.log('======error ', err);
      })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
