if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const t=e=>n(e,s),a={module:{uri:s},exports:r,require:t};i[s]=Promise.all(c.map((e=>a[e]||t(e)))).then((e=>(o(...e),r)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-5VCDoejV.css",revision:null},{url:"index.html",revision:"35020022a4aad08537bae00ee173d07b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./icons/apple-touch-icon-57x57.png",revision:"b3b2d8793b3fb8e84aaae79a2b808650"},{url:"./icons/apple-touch-icon-60x60.png",revision:"a611b84fa727f4b1a6f86d5b4df9b0f0"},{url:"./icons/apple-touch-icon-72x72.png",revision:"74c40b0479cc511617c8169b59ace175"},{url:"./icons/apple-touch-icon-76x76.png",revision:"9dcdf439cd17eb263693af1b53d3922e"},{url:"./icons/apple-touch-icon-114x114.png",revision:"4c41ba4c3b1ab3fa43892c302bdbfc00"},{url:"./icons/apple-touch-icon-120x120.png",revision:"2b99d170a9618284e344df5e4d6324fa"},{url:"./icons/apple-touch-icon-144x144.png",revision:"f094ed032cb576877e695df6b0cc01b4"},{url:"./icons/apple-touch-icon-152x152.png",revision:"c3997e594cbd1ca85a52e61ce4813980"},{url:"./icons/512x512.png",revision:"b97c97a1f55d04f256e486ef3753405e"},{url:"manifest.webmanifest",revision:"4d7aa1ba8f1aa71896532d2268fc5a0b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
