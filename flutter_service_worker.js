'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ed5acba30fec7c25d928ded04bf46978",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2cb548b16ca44b0d9ecfb8dc4f42cfc7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aa1ef414d3084c664032e714f3b4cd43",
".git/logs/refs/heads/master": "aa1ef414d3084c664032e714f3b4cd43",
".git/objects/02/80a7e99c9e1a9e6c0f77f7548f1bdfe3b83a92": "bdbec17d4af743fd43bd7b68d8770148",
".git/objects/09/7994503bcee325164c89367b21ef94696a756b": "9800e6da04ded333b624714fe41c46c6",
".git/objects/10/c64edb5bf35b6bb6bfc57469d2231add0d9aa4": "4c8f2a390acc14afd9901d41562ecfae",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/d184081eaceb2ed9c3bba19074f9874fe24823": "2ab5ae5618568c3f003820e18bd9e894",
".git/objects/16/4a132ccbe0c6072035147e222b12fc90a8458e": "10fc77a3cf6ea82881fb474ef45df051",
".git/objects/19/81755a2f5d0ffa1d84d6f7c3a1606978c138e1": "c6cee2980ac857bc46519c31a681cf46",
".git/objects/1c/26a23f58d55c7f3fe17d5907b5225fa03814c4": "0cb029f5af9c86325e65d295743ae519",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/20/409cc858cdc7139d9570020a2fc85f8a0e227c": "77a525bd90ba325696996f45c2df775b",
".git/objects/21/5d7c7bba879aa9b0e1896d3b47159eb45c726c": "04c3ff0f3875274f8f7518ae2931cd88",
".git/objects/25/2db698f17a7bac60a7560a7540a076f1b8a857": "8648bda87bb0da8eeb628b6f9f1ec4b6",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/61ccbb877511b7ef78c4295c9b96404019bf41": "11a107f83cf85acef61efd1f5dae6206",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3a/15b35733ba8c69731b051cd9b5b28b4e5bbdce": "1b9197e310b72613b20922fb2c6aa84d",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/46/3c56f091b4f667ef7f41334b0e3576d817e266": "699d7e33b2a5d2eaebbe2d878fc691f8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b12d5d4aedcdd83ae11b574948476b5905d468": "fdae1c826e89a2bce24c11f7a5aec409",
".git/objects/49/47855ac584740aa2285bfd7ca877ce17a2fe89": "446720e40a44fbd5c87440dab6d6f12a",
".git/objects/55/350c195ca2347ab9418793c88dd2eb00935363": "6c32af90cb4f4fe5b3d43806bdc543df",
".git/objects/5f/35e53fff69fdff3628bd929e1617934b02de1b": "6b85103ba617161730f467df5f7d9168",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/6b/56133c89ff3d6a0e464927b3245c8de7594ebf": "73bef8aa72dbb431e2737b212a6dbb5b",
".git/objects/6d/b26e857ab3d1b5bcb27587b3dbb1621188169b": "9dce276565f20e0824bee69fa92d319c",
".git/objects/6e/fbe9ab616ed3457cec3f09c14942f3b1dad512": "d2e2d0351298075aae3c9fb438c47ef3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/0b9e495c500a8724066884f54a270d4526021a": "a9732ead6389eaf361708afcaa34bd58",
".git/objects/7f/99eec61bf244c1456a3bf24bfae4dadf6bf26f": "c201c9edf81095e7446a996aaf5a5859",
".git/objects/80/64f8013161ed04f821f20bb73955cf92b06baf": "8ad93ff691c4be6b591e990642347412",
".git/objects/82/05566bf889d5de60b2e2c528715cae0ebb2f80": "5c4cdea453fe5cd956fb79c4cb303660",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/368f65ac87efea0d7d777c84d730c3eefab5a1": "d8c8d73e2be6eb77fe553a2bb3fe81a3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/defbc41fbd0d5fb10a057094519a10bbc630d6": "03909c2cad5b64d6c706ca7c0c66e87e",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9f/1b79ba333b66a3ee7922a826a26317999f5b9a": "61fd4498f8b6b78306498684335ed5ec",
".git/objects/9f/e203c0e029296aa53dfb6cfee281160097402a": "9bda5673454864ba47b4fbd8e6b4eb62",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/c8af9372c4044a25d97a9e867b9af3ea9cc3bf": "3ccc9332c725bb05d2d505efcd385d7b",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/8a00025ad91de40fbd643f75a5cdf2ff76b2cc": "5ca895be8d122d557dc474285129ca43",
".git/objects/b0/f680ae36ef8d2feb24a679b0a57f20b07544c1": "125b27f6bc5d9627f2848c99754970e1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/7286222f4a9752ae1a3e3045b2ae5cebaa0ff9": "88dbaeb149a70f9ea8cd9351ac96e059",
".git/objects/cc/044585faeb55c823846dceb389aa082d242087": "12747cc3b72965073a5c37074bca6a05",
".git/objects/d4/00435eabcb28f27772b6f25d7e3588e60da2f5": "915d2e6dcd20ca9d7a7105b4609ff9a4",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
".git/objects/dd/2eebb0501780abe30ba7a6ef1f772dceee1f4d": "e83da2385dc150c888a16eb1b050b448",
".git/objects/e3/7a335b4c03e621228dd2e2d1b9bd5e8e7d922d": "454aefc93c34710910a6167c3488f555",
".git/objects/e3/8c956cad0a862cb28ce96f1dadd07c43011d46": "07e5a94099cdb18e6f4b9ff0cb4e367a",
".git/objects/e3/9fcd3c07f901c1520077bf998d39d1dcbad908": "a096d85a30ae155abd4790a502d534d0",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/93653451c50f47ae2078c897efb7395cb30fd6": "2394d71df7dbcb2a967378ba4a770fa7",
".git/objects/e8/e3af10d3dce6a6025b60b2701dcabf87c428de": "b99a4c27847f08b5b62cec53097274a2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ad32cabbfcbef27eac80bfbe74fddec5370592": "2d62efa02c492177a7b628960db6c859",
".git/objects/ee/60382061120d3ea86eeaf8dde9338dc2a98d33": "d68e71c73f908a1a45e4000de671b1bf",
".git/objects/f2/7d9894fa1bd4dec3b763595a70fe2621874cb6": "a3f9e466a96d0dbb34885cb7b98f707f",
".git/objects/f5/ed8663e11e550a5c3248b2410947d85204156a": "79edd871b4e5c84de6bb7b2a45469129",
".git/objects/f6/685cc57866cf7a2fa519ca681368be0867e433": "ffc660e3c878a3a3ed41899f92173e61",
".git/objects/fe/6f9e16024468a4ddbe9950ce95b4cdbcb79161": "56fc6c13041c775c65140af9d026bb36",
".git/refs/heads/master": "4c5ce79f750df50be684d420bc2ce374",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "143c9eed7647e114bfae1990801cc055",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "08aab6a111884f3691f393c7190c163e",
"/": "08aab6a111884f3691f393c7190c163e",
"main.dart.js": "78d99bad7b66e27ad642853662967eca",
"manifest.json": "907b8ec5f8008305afd6aa5359f25dfe",
"version.json": "ea6032284da61e2686055e2d20546073"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
