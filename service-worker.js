const CACHE_NAME = "firstpwa";

var urlsTocache = [
  "/",
  "/nav.html",
  "/index.html",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/css/materialize.min.css",
  "/js/materialize.min.js",
  "/js/nav.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsTocache);
    }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function (response) {
        if (response) {
          console.log("Service Worker: Gunakan aset dari ", response.url);
          return response;
        }
        console.log(
          "Service Worker: Memuat Aset dari server",
          event.request.url,
        );
        return fetch(event.request);
      }),
  );
});
