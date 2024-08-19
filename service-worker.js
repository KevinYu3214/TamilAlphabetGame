// public/service-worker.js

self.addEventListener('install', (event) => {
    console.log('Service worker installing...');
    event.waitUntil(
      caches.open('cache-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/static/js/main.js',
          '/static/css/main.css',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  