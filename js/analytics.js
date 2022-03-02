const cyrb53 = function(str, seed = 0) {
   let h1 = 0xdeadbeef ^ seed,
      h2 = 0x41c6ce57 ^ seed;
   for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
   }
   h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
   h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
   return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};


let clientIP = "{$_SERVER['REMOTE_ADDR']}";
let validityInterval = Math.round (new Date() / 1000 / 3600 / 24 / 4);
let clientIDSource = clientIP + ";" + window.location.host + ";" + navigator.userAgent + ";" + navigator.language + ";" + validityInterval;
let clientIDHashed = cyrb53(clientIDSource).toString(16);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied'
});

gtag('config', 'UA-220917531-1', {
  'cookie_domain': 'none',
  'anonymize_ip': true,
  'client_id': clientIDHashed
});
