const cacheName = "attendance-app-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/teacher.html",
  "/manifest.json",
  "/sw.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js",
  "https://cdn.jsdelivr.net/npm/@zxing/library@0.19.1/umd/index.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
