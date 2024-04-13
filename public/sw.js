importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

  // Precache manifest
const precacheManifest = [
    // Add your icon paths here
    '/icon/icon-192x192.png',
    '/icon/icon-512x512.png',
    // Add other assets to precache here
  ];
  
  // Set up Workbox to precache assets
  workbox.precaching.precacheAndRoute(precacheManifest);
  
  // Cache icon requests
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image' &&
      request.url.includes('/icon/'),
    new workbox.strategies.CacheFirst()
  );
  
  
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script' || request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate()
  );
  
  workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst()
  );

  //
  workbox.routing.registerRoute(
    ({ url }) => url.pathname === '/',
    new workbox.strategies.CacheFirst()
);



workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/login'),
    new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/signup'),
    new workbox.strategies.CacheFirst()
);


// // creating a cache by dfining the name
// const cacheName = 'cache-v1';
// // Adding what to be cached
// const resourcesToPrecache = [
//     '/',
//     '/index.html',
//     '/login',
//     '/signup',
//     '/styles.css'
// ]

// self.addEventListener('install',event => {
//     console.log('service worker install event !');
//     // adding cache so that it works in PWA
//     event.waitUntil(
//         caches.open(cacheName)
//         .then(cache => {
//             return cache.addAll(resourcesToPrecache);
//         })
//     );
// });

// self.addEventListener('activate', eveent => {
//     console.log('Activate event !');
// });

// // This listen to fetch events
// self.addEventListener('fetch', event => {
//     console.log('Fetch intercepted for: ', event.request.url);
   
//     event.respondWith(caches.match(event.request))
//         .then(cachedResponse  => {
//             return cachedResponse || fetch(event.request);
//         })
// });







