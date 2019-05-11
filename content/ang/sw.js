/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "3rdpartylicenses.txt",
    "revision": "dabe5480f2840f9e4328458c4bc9f1b1"
  },
  {
    "url": "es2015-polyfills.c5dd28b362270c767b34.js",
    "revision": "c9941a14e563309f6f023fb54ffe613a"
  },
  {
    "url": "favicon.ico",
    "revision": "012617b16b56ea947c94a359d9592990"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "46014e0707323800ea2855f0c5e132de"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "46014e0707323800ea2855f0c5e132de"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "46014e0707323800ea2855f0c5e132de"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "46014e0707323800ea2855f0c5e132de"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "46014e0707323800ea2855f0c5e132de"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "46014e0707323800ea2855f0c5e132de"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "46014e0707323800ea2855f0c5e132de"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "46014e0707323800ea2855f0c5e132de"
  },
  {
    "url": "index.html",
    "revision": "029472406d5bc806ee06532be09781f8"
  },
  {
    "url": "main.caddcff77b05c905e344.js",
    "revision": "650ad2e20fc70a7be11d35c77ec71082"
  },
  {
    "url": "manifest.json",
    "revision": "6da44f00d88dce3b5fec8dfbba428027"
  },
  {
    "url": "polyfills.8bbb231b43165d65d357.js",
    "revision": "7bf9eddc22ddfc9c0a471fbeb72bf9b7"
  },
  {
    "url": "runtime.26209474bfa8dc87a77c.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "styles.1f3798144a212ca6c608.css",
    "revision": "088a9e46ebcee035eef30b3c168cf9a6"
  },
  {
    "url": "x.html",
    "revision": "90672864fcfbb57a3e69d816a7470911"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
