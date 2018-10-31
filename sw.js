'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","style.css"]);

toolbox.router.get('/wth/image/*', toolbox.cacheFirst);

toolbox.router.get('/wth/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});