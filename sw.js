if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const u=e=>i(e,l),t={module:{uri:l},exports:o,require:u};s[l]=Promise.all(n.map((e=>t[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Header-ChnGjuIg.css",revision:null},{url:"assets/Header-XNA9IYQG.js",revision:null},{url:"assets/HomePage-9jfndj3E.js",revision:null},{url:"assets/HomePage-nFNvqq5k.css",revision:null},{url:"assets/iconBase-BSG1fGhG.js",revision:null},{url:"assets/index-BbB6QBXW.js",revision:null},{url:"assets/index-D2QrecTB.css",revision:null},{url:"assets/LoginPage-BLFdsyUv.js",revision:null},{url:"assets/MusicSearchPage-DSkVCN-v.js",revision:null},{url:"assets/MyPage-D_1eFx8M.js",revision:null},{url:"assets/NotificationPage-CkCoSgsC.js",revision:null},{url:"assets/PlayListPage-CR2IqrSC.js",revision:null},{url:"assets/PrivateRoute-B8F6PBdd.js",revision:null},{url:"assets/PublicRoute-GkqWHc_5.js",revision:null},{url:"index.html",revision:"ddd09e872bf00df3ef7ee6e6c2f6c73b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./icons/logo192x192.webp",revision:"ff885f5fe6ee7e48233e0a3bbc962e90"},{url:"./icons/logo512x512.webp",revision:"45b5d34753d0700eb8a24d42b79ac200"},{url:"manifest.webmanifest",revision:"0785d283ddbb4ddaa9a9d3fd674e543f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
