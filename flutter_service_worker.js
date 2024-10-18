'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8224e8719283d66be7454dc6683220a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "a1cc6dbb92ffb53eeaea497858c63e0c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "208f032da957aa1e5dea91388b59a0da",
".git/logs/refs/heads/main": "595410ea74133d4e84c83440e5d2de80",
".git/logs/refs/remotes/origin/main": "c405df3b6c614a33732bd93b756405d5",
".git/objects/01/4877bd45dbe65141af3a52c522fd74970cc97c": "cf8c1a6869a9b6fd17c54b3dc40328fd",
".git/objects/0a/a91cf69bf891b6a1922c83a1b1af9837d54d06": "b73b96bd483ce0c818db8c5eed877fd8",
".git/objects/0a/e050a74a571f25886fb9a8ec3cdac9c4e06f9a": "f181b985bf68d812db4baeb2559a9969",
".git/objects/0c/365baa1dd2fc04866012e44f3ac38472a68057": "a55e75f64400e7b43200ed9a25d5e775",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/19/6a59f4a2a8c139b106c6dc3c821c2abeefac1e": "298e107c2498b7493d939ec433c2a9e4",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/c17c3ec6dd1792bd04dab36de83ee14a41524a": "2896d8c98115350f07baae18b8065231",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/aa738ec8604d5dc7360c17b3d0f5b76c34fa98": "53715d55740ba856f503a28779221f1a",
".git/objects/23/370a9ca65173deac01533c41351e42203cc259": "facb00db53eb1b29247fb80a0cd388d5",
".git/objects/23/89ecc8df19d898fdfa254e35a4625bdef4cdd2": "bd30b10f2216e48990705c3989ef0ee7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/91cc86890fa8ab960a459e1519b45053b88190": "eb3a9888fc687dc97a9538d7bab2fca0",
".git/objects/2c/1b6e88e4cdb3fac6587791e206ea3fcc59a593": "13c2bf3b4f92fbf5d70b5a6422c5f0d4",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/54c30e7178bb1faf2576aa222500da6aa0464c": "8000ee05140a1b3864debe0443c2345e",
".git/objects/38/8ecdb1b8e0d1851ddda4357e163c09828f2051": "0ed36365f2e6b5d9159fbcdeb92e9137",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/e2110a3535e26c46c0cf662a12f6fe8f645ee5": "d933a7c97e5561c673372381593ff9a7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/d11860015f43549b7d13d05d68e02b23d3a35f": "01d330570b903295f94361102832460c",
".git/objects/52/4cf7bc8ec9b20c9e28e53a65c6ae74accd9b12": "aae0b0ffe357716f28b950ec409a20ba",
".git/objects/58/c0fd449fd0032ae6dda868437451ae60be8ebf": "6760a10f7fdc140fa48aaf55a2d64e84",
".git/objects/58/de82aecdb25ffdfeda45a3e78de767f62a20bd": "e4ab19c8e47b996080c1b4b081029898",
".git/objects/5a/592515d915d0ec71a27d49e50994a31b7e8524": "0e729f898a0659f321d1bba5cbe14ef1",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/75058b79bdfcf64741fdc76b6de4443253ee18": "5f9ddde13b48eb859af6e04083806cb1",
".git/objects/60/9ebe4d98f20ec723d34f45df36c8cac46c4b86": "8531020be6288ca923dfd58d22af468c",
".git/objects/66/8de05f223e7f6cbc335c15bf3b90649824071d": "e379e290d8c3ceed82769b1966a2ccef",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/7e/cf5186cd76315c3438266cb8805c90332bb5d8": "89defee98132cab0919230c2c72d77eb",
".git/objects/7f/c27209fc1d5c226378ab55950b11803c3d1f07": "79baf9eb466cc3a166be403eb48c819e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/242c71e58593a289370b6ef2c4b5a15b48b34b": "fb02cd3bb2fc46c8174bb9526d84a31e",
".git/objects/8a/cd6ab703341ce6b71d25659eae2fd5bcf60974": "b2cbbab5f165184f9ae6f68a0f8632e9",
".git/objects/8b/fdb39c4b8512caa38d5f077b9b1db87b8c82f4": "820f3cb7d485dd080c73e8264a426de5",
".git/objects/8c/94016d2e07014b6c4cfd3a75f3c603b50807e1": "1398e4cb85623329a89235b83602a371",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/3f24614803f74e1fc69b42f6f48883a1b85ad4": "919a737f0445a9404111a6638f4ed4ad",
".git/objects/94/54e1235bf8366edd2ec7c145307a1f7ec289aa": "3d0ad2586abe6d41167a4c37a4e8fa9a",
".git/objects/96/25e045fc3b75e59ca4caebe0abdd721f2051d6": "5e064c9f7b5fdcef881d0696514e8144",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/5e57e5cdcf20555eed872248b2781498ffc982": "efa71d66702c70faa547bb74185c6374",
".git/objects/a1/45016f3a1fecfe5ce4d95555a7a1a0366c50c2": "4f52d011ac23da695145dbd0bb6852b8",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/ac/97a402b965256497a36b334db7dabf817d7957": "78236a079c583837594fbc9aa537c932",
".git/objects/b4/a28ca0a9ad4543a9e27d1688ae566b3cbef300": "df99d89e2b506e2ca8a1b341f6b84d68",
".git/objects/b5/771dd95e0ef9e9439874398ae2710c033d5b91": "48d44bb6101a6388a7e72c2df676ea48",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8dad2776d7527f8abbbda2e34ba3716803ba9c": "0b48752ff457ef940903724318da0139",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/1475fcce1fdc32d5bfa969b6862261f6e3a724": "bc3dcff272a560764ec739bfb6c44f9c",
".git/objects/ce/e89a24cf4745bf16695469d9a0a0ec86b93c66": "299dd58924590f3a89d61799f33da97a",
".git/objects/d1/3bedbc3efdb5c1e5fba542e2fd599ede12b997": "3c85288f717b0ebc9a6f01453013ab98",
".git/objects/d1/8d786e5118e973a8755bab2918643095e5a1ad": "4f592234f2fdcb37cb53ab08551fdec8",
".git/objects/d1/f94f56409c8d91c0fada935df98641621705d9": "d861b72f0e6cbedf58340ef680c26eb8",
".git/objects/d3/aa8dd44b9d1b11450657a4abc97cda3f8301ec": "ea8c46cb9412557cd9bf30b83363382b",
".git/objects/d3/b93f59f226d64e45e6533680c0445ae9efd2f6": "148ae18844a2720e4c3e0a58a4f5239f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/fba3f49a8919035ae97f5963d5d6e5ddd58d3b": "490f1462e7632628748bb41e91038ab5",
".git/objects/da/d77737ba03ba480e3affb305487347beb8ebac": "335e1e527fdb0b7cae7f97c56a187351",
".git/objects/de/b948eeddfdcc37291ea8c54e1251a1c8558526": "3dc01246aa61560f8ab8b7e722e5c98a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/cd9a97db939e869f8e8392fa57327f45292b8e": "1117b951f995ab880e6dd3cae0dd9e62",
".git/objects/f1/5013d5d529358688351a49ee6cb4254daa001f": "ebb06c7dcbaa9dedb1a9c03f0e339439",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f8/d51faccecb181914cc01260b488fdba86820d4": "78a90bb8db85e9ec853b1012a8e451b2",
".git/objects/fc/0280c05bdaa4769b9a1d45933961c7bef2f770": "1b98dd9ee62b284e7ba87a30391df154",
".git/refs/heads/main": "0e7419af28e73e6d0ccba80b266db83e",
".git/refs/remotes/origin/main": "0e7419af28e73e6d0ccba80b266db83e",
"assets/AssetManifest.bin": "827fd83ff522ef5df977483ac2292ecc",
"assets/AssetManifest.bin.json": "fd0aebfeba4faa82801465f16e10a650",
"assets/AssetManifest.json": "60d4835a5441f43bac27267844de0ca6",
"assets/assets/docs/CV.pdf": "c921cabc3d3784a9b25e6e7bbd86de32",
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
"assets/NOTICES": "e771802a8c304da7dfc6264fef9f9068",
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
"flutter_bootstrap.js": "785d9f9938072fa3f06c568b53227e21",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2258088a907a2c9b0c2154b97e1b49a5",
"/": "2258088a907a2c9b0c2154b97e1b49a5",
"main.dart.js": "b078859afe42b22f26f897afc02f5ea0",
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
