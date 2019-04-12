self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/sheet1.less',
          '/ico.png',
          '/'
        ]
      );
    })
  );
});
