const CACHE_VERSION = "man-utd-fixtures-v1";
const APP_CACHE = `${CACHE_VERSION}-app`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;

const APP_ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./styles.css",
  "./champions-league.svg",
  "./fc.jpg",
  "./sonyliv.png",
  "./UnitedFixtureApp_favicon_use.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(APP_CACHE)
      .then((cache) => cache.addAll(APP_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== APP_CACHE && key !== IMAGE_CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin === self.location.origin && url.pathname.startsWith("/.netlify/functions/")) {
    return;
  }

  if (request.destination === "image" || isKnownImageUrl(url)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request, APP_CACHE));
  }
});

function isKnownImageUrl(url) {
  return (
    url.hostname === "resources.premierleague.com" ||
    url.hostname === "crests.football-data.org" ||
    url.hostname === "upload.wikimedia.org" ||
    url.hostname === "a.espncdn.com"
  );
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response && (response.ok || response.type === "opaque")) {
    cache.put(request, response.clone());
  }
  return response;
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached);

  return cached || fetchPromise;
}
