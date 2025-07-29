'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3210d959f689c7b4e984c2d43b05c900",
".git/config": "aa6ca98198dfc8a5cbbe6f13a81f6efa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fa4e9fa2f04881c253e564a7e7b624fc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bfea6e9999a4c7b52e82ac376a187fd2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "605a9da609e4d9f0db3dd917f7b01c5e",
".git/logs/refs/heads/main": "605a9da609e4d9f0db3dd917f7b01c5e",
".git/logs/refs/remotes/origin/HEAD": "92623736c0c60ca7ca6c5568bdf448c4",
".git/logs/refs/remotes/origin/main": "ed873bf592b058c8398155246bcdbfbe",
".git/objects/00/e4c15e20c98b524730a09df8e79009dcdfc55c": "009c531c5834ab57f085671863ab3963",
".git/objects/14/1878048f8a98feaacfc96442ebd41c010649ba": "88c41a8c1f6f87135eab4d1c363df147",
".git/objects/14/6c293aa4cd1857be4e09142b8c62537cc0aee0": "bc8b159ba3f9dad6e642f5e454cdac1c",
".git/objects/1b/1f23a9d7c7b42b238de62281962005eeefe5d8": "558fb1921bb800610ceae4fa63f8008f",
".git/objects/1c/18144c5ec9025b5455148bf90335678fe2e6a0": "9fcb5e0ba593c05117c0adf7776f13ae",
".git/objects/1c/d1f5864722bd6a92b0e4e033523a9af220f505": "1c52f8a316440d16991d487d70cb121c",
".git/objects/29/0c4a4a1229acbc48fd914c6c0bae7d7e6683d1": "aae37fbdb84ad2ca569da683f9430758",
".git/objects/2f/13f8bfcb2c5b2808a135cd2870fccf5d3b3ccb": "1db0dd87c9d380d2f749e3cbb5cac7d8",
".git/objects/3b/3afcd33f31aae4c75993446e3f0df371299003": "05643f9e64dda551932c8539bcd06ed2",
".git/objects/4c/7d780ca44ef1b90d9cc9b6b52579acc9772f03": "525b2aacb585c619c764726b41a54cc5",
".git/objects/61/2168e1fdadb56bdfe72fc406ae82d404c0d11e": "a0d2a31ef27f99cb0a8f201e7ee5b827",
".git/objects/62/1dfcb5261eb4fb22c7f37d6fa459ee077f6da3": "7c4ecfdcfdfbda36ba3a31172af26381",
".git/objects/82/b53876456eda2f3988a935a26bd64ed77ac6ee": "07648f190ab0f67bca0291c803c7eac3",
".git/objects/97/21e779510ebf5f4ccd3ff0c55cb7a30ce1e6b4": "624ad1775b3fb8ae23c76b4b5905e4f9",
".git/objects/a1/ddcf7a07982bd16757f74c67f6713767bbb329": "e4c7cd5df2b85c293b206a7a8109ebdb",
".git/objects/a3/ff0b73e1443c8ec6a3cf399e93ddabf8611deb": "7d33bea144a8fcfbf550b8922d68a53e",
".git/objects/b1/c5f0dcbb322c28916a146e751f1c567b14b854": "93f21181cbfca438200dee8f2ad5147f",
".git/objects/bb/8640b814332bdce673f3f989e2f334293750f1": "2d599fc60cee252df18fe36068687e54",
".git/objects/c2/e3d66aa4ae6a488ec1e42764610fcc326f37a9": "1f1c4843644e22a0c5d1e5e60106ea51",
".git/objects/ea/a9866319ea2ff8cbc9e9daf3e9d81a08e668b2": "b21538f6f92a679063ae4615d7aac79a",
".git/objects/f9/b9032a81faaa5207edc88fb6d0eb513d79e23e": "99f7e87eb5a29ad590f1438ad3013b60",
".git/objects/fa/b5708a0bd4b84ec9a7d43c473996e556603501": "a63cf25bc01aebd99289a9580d16a458",
".git/objects/pack/pack-bfb8ed7659a2cc495a23f9f68b1634dded785ceb.idx": "b49d80adfa6d6492785464a406f039eb",
".git/objects/pack/pack-bfb8ed7659a2cc495a23f9f68b1634dded785ceb.pack": "99a32bcfa111eb5e4300dedf0a780385",
".git/objects/pack/pack-bfb8ed7659a2cc495a23f9f68b1634dded785ceb.rev": "a1220c875a7ffe53d3dc79eb17fc5861",
".git/packed-refs": "fc18179f1c4aab5ccfead4ccac5fe073",
".git/refs/heads/main": "89841d5693f16675afd27915fd1fb6da",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "89841d5693f16675afd27915fd1fb6da",
"assets/AssetManifest.bin": "65463a3168026801202c51836a2cd438",
"assets/AssetManifest.bin.json": "504ebe5f05738e13187dcb78a5b6a2ad",
"assets/AssetManifest.json": "e68b44c26b1f01f1ac51b6734dc19fbf",
"assets/assets/docs/CV.pdf": "d8878932a76e7f8c27ad596b51882f18",
"assets/assets/images/BNEC_Logo.png": "99e97dc24ca8917f58a56315bab32796",
"assets/assets/images/copy.png": "793841bcb7d597cc7482befff347f855",
"assets/assets/images/copyright.png": "7d8433656767f783375b2d381d516e28",
"assets/assets/images/dark-mode.png": "5f6c5f4c6928d3059e13a65afae7d186",
"assets/assets/images/email.png": "0d842b0f60279cbdeae6f43544636b5d",
"assets/assets/images/github.png": "a7231b6caa0e85b7b9f25f56a9045adf",
"assets/assets/images/go_to.png": "84b75ef9428b4dcc7ba1b6aafae28f12",
"assets/assets/images/image.JPG": "d3c361558bf273518ed0833250a2d6df",
"assets/assets/images/light-mode.png": "fc3b5c5c648d755d1c66c1823cc9c679",
"assets/assets/images/linkedin.png": "16e4b76db468072c4d546c2aae3844dc",
"assets/assets/images/location.png": "44b77d430dc8a96cea6029ad3f24ac6e",
"assets/assets/images/logo.png": "3b91e3191e2b052fe271f28fcc8b36c5",
"assets/assets/images/phone.png": "4feec0124f16233c78891f8e29b1c22a",
"assets/assets/images/projects/bnec-mobile.png": "4d0cfa2bae30e877d7c1be81410a4164",
"assets/assets/images/projects/expense-tracker.png": "f3dd719cd574f181fe74d59641c8fa79",
"assets/assets/images/projects/faraidh-calculator.png": "4992351d1620261fa1fd5becbc6fe60b",
"assets/assets/images/projects/favorite-place.png": "0aaa1f0185b8b7d55c01ac93c7f72a07",
"assets/assets/images/projects/medicine-reminder.png": "77e0f564839b0b863e9c48937f968052",
"assets/assets/images/projects/micon.png": "bd7264dc8380ec3ab23ecb6b8fd0c6a7",
"assets/assets/images/projects/minder-mobile-v1.png": "30d742e758c888571d3c34f55526eda2",
"assets/assets/images/projects/minder-v1.png": "a3dd10cab1a90242e3cce224f9039401",
"assets/assets/images/projects/triana-iot.png": "14890e2630506be644a360f1b3c6139e",
"assets/assets/images/projects/triana.png": "cc848634a228e8ffe909c28f3327ee7f",
"assets/assets/images/skills/c.png": "e404990862473d8a41dbf234706c4441",
"assets/assets/images/skills/cpp.png": "340a2c96b975e8993790ce78bf1576f6",
"assets/assets/images/skills/dart.png": "2e0719b33b5cdd1ece46611b4d3d4a81",
"assets/assets/images/skills/firebase.png": "cf0918b3d77d6e4505a65f103e5f3382",
"assets/assets/images/skills/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/images/skills/git.png": "5f551c335eb3dc4b81ae34cf93b9a7f1",
"assets/assets/images/skills/golang.png": "5648e990564409cc0241df03bbae6bbe",
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
"assets/fonts/MaterialIcons-Regular.otf": "57c28ae1c7c5b389a548c2c730e9c2ec",
"assets/NOTICES": "1958d89d1e664dceb0bd079b44db8fef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"favicon.ico": "e52a27f84951d080acb886521734cc5b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0b5235b1f495c9adcb302f46b83264d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61497790e2768a827ab1f511ee8b2389",
"/": "61497790e2768a827ab1f511ee8b2389",
"main.dart.js": "8ac3c4585fcfe07ccd82d9fac73b0925",
"main.dart.mjs": "56d7bf7a5012577114587a8f0b72946f",
"main.dart.wasm": "1c16b7b6040c602293a7f935d7e7518e",
"manifest.json": "9b91fd8c6820ec2fde8ed86fbfa06dae",
"version.json": "d56a8f155e857828189fafbe8fef372b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
