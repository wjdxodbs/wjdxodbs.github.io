if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>l(s,n),a={module:{uri:n},exports:u,require:o};e[n]=Promise.all(i.map((s=>a[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddOutlined-5__eC-kh.js",revision:null},{url:"assets/Aquarium-cZKdMs9s.css",revision:null},{url:"assets/Aquarium-mo5d1gWz.js",revision:null},{url:"assets/AuthPage-_6relkZH.js",revision:null},{url:"assets/AuthPage-hnEUpfwj.css",revision:null},{url:"assets/axios-L6U4YIEh.js",revision:null},{url:"assets/backSymbol-0aRp874W.js",revision:null},{url:"assets/board-trRPgBQ3.js",revision:null},{url:"assets/BoardCreate-XfrtGHZ2.js",revision:null},{url:"assets/BoardDetail-8aaBZQmU.css",revision:null},{url:"assets/BoardDetail-KgDNuyN7.js",revision:null},{url:"assets/BoardFormItem-EseAjbnQ.js",revision:null},{url:"assets/BoardFormItem-kEiwfx9T.css",revision:null},{url:"assets/BoardModify-FY6ndZO_.js",revision:null},{url:"assets/BoardPage-qNR1jF73.js",revision:null},{url:"assets/BoardPage-SbKvk9-d.css",revision:null},{url:"assets/ChatBot-lOxXsqS4.js",revision:null},{url:"assets/ChatBot-yOoIFiSN.css",revision:null},{url:"assets/commons--RmDgXK-.js",revision:null},{url:"assets/CreateRoom-A8FXgybc.js",revision:null},{url:"assets/CreateRoom-fc44DAWO.css",revision:null},{url:"assets/default_profile-HTeSV8ma.js",revision:null},{url:"assets/EditNote-fIkKvbME.js",revision:null},{url:"assets/effect-coverflow-Ea99FpZt.js",revision:null},{url:"assets/FavoriteBorder-p58SElAz.js",revision:null},{url:"assets/fish-ZY0xfTiz.js",revision:null},{url:"assets/FishBookDetailPage-TK8NM32s.js",revision:null},{url:"assets/FishBookDetailPage-yIYTtdju.css",revision:null},{url:"assets/FishBookPage-fspL2oD3.css",revision:null},{url:"assets/FishBookPage-jZ6TvMmg.js",revision:null},{url:"assets/FishingMapStore-CT2y4axp.js",revision:null},{url:"assets/FishMapDetailPage-4jYASi81.js",revision:null},{url:"assets/FishMapDetailPage-HvdXKYF-.css",revision:null},{url:"assets/FishMapPage-0OIojgr7.css",revision:null},{url:"assets/FishMapPage-hNabnC-6.js",revision:null},{url:"assets/Header-bHGHsn78.css",revision:null},{url:"assets/Header-vpXM2LZf.js",revision:null},{url:"assets/HomePage-5rbTD_iF.css",revision:null},{url:"assets/HomePage-iZRKajjB.js",revision:null},{url:"assets/iconBase-u21VGtxB.js",revision:null},{url:"assets/ImageEditPage-J0fxIo-p.js",revision:null},{url:"assets/ImageEditPage-u5nilnlX.css",revision:null},{url:"assets/ImageResultPage-blS1K-B2.js",revision:null},{url:"assets/ImageResultPage-ghSNk9Sw.css",revision:null},{url:"assets/index-1kbdXfb5.css",revision:null},{url:"assets/index-7QcinMer.js",revision:null},{url:"assets/index-soGWsI4E.js",revision:null},{url:"assets/InfoOutlined-tRhdRHS9.js",revision:null},{url:"assets/Loading-COiwx65b.js",revision:null},{url:"assets/login_img-kcxhdVzM.js",revision:null},{url:"assets/LoginPage--OnPGKMP.js",revision:null},{url:"assets/LoginPage-5g-G_4nT.css",revision:null},{url:"assets/marker_place_off-DaVJSVdB.js",revision:null},{url:"assets/marker_place-m1omeIcH.js",revision:null},{url:"assets/MediaPage-0KFXPyMM.css",revision:null},{url:"assets/MediaPage-OFL8KHN_.js",revision:null},{url:"assets/MyFishPage-meoM3rWB.css",revision:null},{url:"assets/MyFishPage-xpd9pkdX.js",revision:null},{url:"assets/MyLocationPage-AgBwH5lu.css",revision:null},{url:"assets/MyLocationPage-mL_0Tn2B.js",revision:null},{url:"assets/MyPage-Sxm07yZd.js",revision:null},{url:"assets/MyPage-xWnNUdAv.css",revision:null},{url:"assets/MyPageEdit-EWMm-9pI.js",revision:null},{url:"assets/MyPageEdit-RvHBemHd.css",revision:null},{url:"assets/RoomList-EtWmI35w.css",revision:null},{url:"assets/RoomList-JOkxK0s-.js",revision:null},{url:"assets/Send-FuytjnMe.js",revision:null},{url:"assets/TutorialDetailPage-EZSk1Q5N.js",revision:null},{url:"assets/TutorialDetailPage-vmfnKjNH.css",revision:null},{url:"assets/TutorialPage-4am9KaJy.css",revision:null},{url:"assets/TutorialPage-qaSrr_Ki.js",revision:null},{url:"assets/VideoRoomComponent copy-0_HtSsWU.css",revision:null},{url:"assets/VideoRoomComponent copy-lFDjBPsP.js",revision:null},{url:"index.html",revision:"186efd47a8d36e77dc312c40328b62c0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./icons/logo192x192.webp",revision:"5c41fe5f983aecb875f2fb29ed88dd0d"},{url:"./icons/logo512x512.webp",revision:"f5a1e7a4c82f1086617b648d1a11ef65"},{url:"manifest.webmanifest",revision:"157db8f211cf3fc6961ac450123c07da"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
