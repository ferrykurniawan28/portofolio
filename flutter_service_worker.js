'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1f7981cdcd8b9046eef3163bb46b1477",
"assets/AssetManifest.bin.json": "881fa0dbb4d682408dc01e15914188f4",
"assets/AssetManifest.json": "38d4e7525990a2666851a9a0be6e5f06",
"assets/assets/images/BNEC_Logo.png": "99e97dc24ca8917f58a56315bab32796",
"assets/assets/images/copy.png": "793841bcb7d597cc7482befff347f855",
"assets/assets/images/copyright.png": "7d8433656767f783375b2d381d516e28",
"assets/assets/images/dark-mode.png": "5f6c5f4c6928d3059e13a65afae7d186",
"assets/assets/images/email.png": "0d842b0f60279cbdeae6f43544636b5d",
"assets/assets/images/github.png": "a7231b6caa0e85b7b9f25f56a9045adf",
"assets/assets/images/image.JPG": "d3c361558bf273518ed0833250a2d6df",
"assets/assets/images/light-mode.png": "fc3b5c5c648d755d1c66c1823cc9c679",
"assets/assets/images/linkedin.png": "16e4b76db468072c4d546c2aae3844dc",
"assets/assets/images/location.png": "44b77d430dc8a96cea6029ad3f24ac6e",
"assets/assets/images/logo.png": "3b91e3191e2b052fe271f28fcc8b36c5",
"assets/assets/images/phone.png": "4feec0124f16233c78891f8e29b1c22a",
"assets/assets/images/projects/bnec-mobile.png": "4d0cfa2bae30e877d7c1be81410a4164",
"assets/assets/images/projects/expense-tracker.png": "f3dd719cd574f181fe74d59641c8fa79",
"assets/assets/images/projects/favorite-place.png": "0aaa1f0185b8b7d55c01ac93c7f72a07",
"assets/assets/images/skills/c.png": "e404990862473d8a41dbf234706c4441",
"assets/assets/images/skills/cpp.png": "340a2c96b975e8993790ce78bf1576f6",
"assets/assets/images/skills/dart.png": "2e0719b33b5cdd1ece46611b4d3d4a81",
"assets/assets/images/skills/firebase.png": "cf0918b3d77d6e4505a65f103e5f3382",
"assets/assets/images/skills/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/images/skills/git.png": "5f551c335eb3dc4b81ae34cf93b9a7f1",
"assets/assets/images/skills/iot.png": "36c6492e26b50b69be23c36ad7709fc7",
"assets/assets/images/skills/keras.png": "b565438236c0eec8870694532a376ca6",
"assets/assets/images/skills/laravel.png": "978d1e3e3909d5c3129318732f980a55",
"assets/assets/images/skills/micon.png": "0df732bcc02d4635a552c86f832a465d",
"assets/assets/images/skills/opencv.png": "bfae5b1e6ec7f3626fc2f95ae9aa785b",
"assets/assets/images/skills/php.png": "117f84810dbc36ff6313846edbf6ed53",
"assets/assets/images/skills/python.png": "8fc980504e086ccec2612f8bdb6bfe15",
"assets/assets/images/skills/qt.png": "3246d5236ff955a00c3286f5748ec770",
"assets/assets/images/skills/tensorflow.png": "2fcc32929f9901c0508f7742b5d0b175",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dd6ff7e8292e86b6a03b856bad9cd50e",
"assets/NOTICES": "9402bb8ecd15b3869cbba7c21770e473",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "e52a27f84951d080acb886521734cc5b",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "0592ca3b84a636202736883ecf4e0ef1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2258088a907a2c9b0c2154b97e1b49a5",
"/": "2258088a907a2c9b0c2154b97e1b49a5",
"main.dart.js": "55ec92d3506547ba9b73fd4d202226db",
"manifest.json": "9b91fd8c6820ec2fde8ed86fbfa06dae",
"version.json": "d56a8f155e857828189fafbe8fef372b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
