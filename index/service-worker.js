// service-worker.js 파일 내용
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.css',
        '/index.html',
        '/index.js',
        '/manifest.json',
        '/pages/dm.js',
        '/pages/home.js',
        '/pages/mention.js',
        '/pages/pages.js',
        '/pages/you.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
