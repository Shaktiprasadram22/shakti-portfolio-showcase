// Define the cache name and assets to cache
const cacheName = "portfolio-cache-v1";

// List of static assets to cache
const staticAssets = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/placeholder.svg",
  "/robots.txt",
  "/index.css", // Cache your index.css file
  "/App.tsx", // Cache your main App.tsx file (or entry point for your app)
  "/lovable-uploads/", // Cache everything inside the lovable-uploads folder
  "/App.css", // Cache the CSS file associated with App.tsx
  "/main.tsx", // Cache the main.tsx file (since it's an entry point too)
];

// Install event to cache the static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Caching static assets...");
      return cache.addAll(staticAssets);
    })
  );
});

// Fetch event to serve cached assets when offline or after caching
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // If cache is available, serve from cache; otherwise, fetch from network
      return cachedResponse || fetch(event.request);
    })
  );
});

// Activate event to clean up old caches (if needed) when a new service worker is activated
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [cacheName]; // Only keep the latest cache version
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (!cacheWhitelist.includes(cache)) {
            return caches.delete(cache); // Remove old cache versions
          }
        })
      );
    })
  );
});
