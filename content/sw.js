var CACHE_NAME = 'sharkpage'
var cads = [
          '/sheet1.less',
          '/ico.png',
          '/'
];
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME);
    .then(function(cache){
      console.log("MAKING WEBPAGE FASTER");
      return cache.addAll(cads);
    })
  );
});
self.addEventListener('fetch', function(event){
	event.respondWith(
	   caches.match(event.request)
	   .then(function(response){
		   if(response){
			   return response;
		   }
		   return fetch(event.request),
	   });
	);
});