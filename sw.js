if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Header-ChnGjuIg.css",revision:null},{url:"assets/Header-DfH03Yhm.js",revision:null},{url:"assets/HomePage-CYeQOsIY.css",revision:null},{url:"assets/HomePage-D292XCzg.js",revision:null},{url:"assets/iconBase-CIanaTVy.js",revision:null},{url:"assets/index-D2QrecTB.css",revision:null},{url:"assets/index-zO139x4U.js",revision:null},{url:"assets/LoginPage-D6oNmCvH.js",revision:null},{url:"assets/MusicSearchPage-cV73mTk-.js",revision:null},{url:"assets/MyPage-CmoVQiso.js",revision:null},{url:"assets/NotificationPage-Bg4w7gYv.js",revision:null},{url:"assets/PlayListPage-CfxprfNY.js",revision:null},{url:"assets/PrivateRoute--tpoR_iv.js",revision:null},{url:"assets/PublicRoute-D32bmUxC.js",revision:null},{url:"index.html",revision:"14c148847d432b0e930793d4b7e012bf"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./icons/logo192x192.webp",revision:"ff885f5fe6ee7e48233e0a3bbc962e90"},{url:"./icons/logo512x512.webp",revision:"45b5d34753d0700eb8a24d42b79ac200"},{url:"manifest.webmanifest",revision:"0785d283ddbb4ddaa9a9d3fd674e543f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
