const CACHE_NAME = "artvision-cache-v3";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/products.html",
  "/detail.html",
  "/about.html",
  "/contact.html",
  "/offline.html",

  "/css/style.css",
  "/js/api.js",

  "/manifest.json",

  "/images/icon-192.png",
  "/images/icon-512.png",
  "/images/museum.jpg",

  "/data/sample.json"
];

// INSTALL
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Cache oluşturuldu");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log("Eski cache silindi:", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // API ve dosyalar için network-first
        return response;
      })
      .catch(() => {
        // Cache'e bak
        return caches.match(event.request)
          .then(res => res || caches.match("/offline.html"));
      })
  );
});
