if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const u=s=>l(s,n),a={module:{uri:n},exports:o,require:u};e[n]=Promise.all(i.map((s=>a[s]||u(s)))).then((s=>(r(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddOutlined-DrkPBo-4.js",revision:null},{url:"assets/Aquarium-cZKdMs9s.css",revision:null},{url:"assets/Aquarium-JOh-FmT6.js",revision:null},{url:"assets/AuthPage-hnEUpfwj.css",revision:null},{url:"assets/AuthPage-ZmUL7tGJ.js",revision:null},{url:"assets/axios-L6U4YIEh.js",revision:null},{url:"assets/backSymbol-0aRp874W.js",revision:null},{url:"assets/board-trRPgBQ3.js",revision:null},{url:"assets/BoardCreate-J5FH9KJC.js",revision:null},{url:"assets/BoardDetail-8aaBZQmU.css",revision:null},{url:"assets/BoardDetail-rq7by2co.js",revision:null},{url:"assets/BoardFormItem-kEiwfx9T.css",revision:null},{url:"assets/BoardFormItem-TrKgSjVa.js",revision:null},{url:"assets/BoardModify-bZr3PyQ3.js",revision:null},{url:"assets/BoardPage-fgK2IYQm.js",revision:null},{url:"assets/BoardPage-SbKvk9-d.css",revision:null},{url:"assets/ChatBot-59X5RSFd.js",revision:null},{url:"assets/ChatBot-yOoIFiSN.css",revision:null},{url:"assets/commons--RmDgXK-.js",revision:null},{url:"assets/CreateRoom-fc44DAWO.css",revision:null},{url:"assets/CreateRoom-njICQGd_.js",revision:null},{url:"assets/default_profile-HTeSV8ma.js",revision:null},{url:"assets/EditNote-91XLLkrG.js",revision:null},{url:"assets/effect-coverflow-39rHTCF4.js",revision:null},{url:"assets/FavoriteBorder-ACl9nPhB.js",revision:null},{url:"assets/fish-ZY0xfTiz.js",revision:null},{url:"assets/FishBookDetailPage-YdHyFYXV.js",revision:null},{url:"assets/FishBookDetailPage-yIYTtdju.css",revision:null},{url:"assets/FishBookPage-fspL2oD3.css",revision:null},{url:"assets/FishBookPage-sbHnrW1-.js",revision:null},{url:"assets/FishingMapStore-fpbmUcu-.js",revision:null},{url:"assets/FishMapDetailPage-HvdXKYF-.css",revision:null},{url:"assets/FishMapDetailPage-PWLcNwqI.js",revision:null},{url:"assets/FishMapPage-0OIojgr7.css",revision:null},{url:"assets/FishMapPage-krqaylpw.js",revision:null},{url:"assets/Header-bHGHsn78.css",revision:null},{url:"assets/Header-yJKLV6py.js",revision:null},{url:"assets/HomePage-5rbTD_iF.css",revision:null},{url:"assets/HomePage-mvZU6Fp4.js",revision:null},{url:"assets/iconBase-iUXmG40a.js",revision:null},{url:"assets/ImageEditPage-o7YggFfd.js",revision:null},{url:"assets/ImageEditPage-u5nilnlX.css",revision:null},{url:"assets/ImageResultPage-_Tf4j4Xe.js",revision:null},{url:"assets/ImageResultPage-ghSNk9Sw.css",revision:null},{url:"assets/index--1xDB21s.js",revision:null},{url:"assets/index-1kbdXfb5.css",revision:null},{url:"assets/index-ahCigr3s.js",revision:null},{url:"assets/InfoOutlined-qLYy-bFu.js",revision:null},{url:"assets/Loading-Wi9_vsN3.js",revision:null},{url:"assets/login_img-kcxhdVzM.js",revision:null},{url:"assets/LoginPage-5g-G_4nT.css",revision:null},{url:"assets/LoginPage-Xb2gp-NF.js",revision:null},{url:"assets/marker_place_off-DaVJSVdB.js",revision:null},{url:"assets/marker_place--KA0UFFH.js",revision:null},{url:"assets/MediaPage--ivohz--.js",revision:null},{url:"assets/MediaPage-0KFXPyMM.css",revision:null},{url:"assets/MyFishPage-meoM3rWB.css",revision:null},{url:"assets/MyFishPage-Zrs9chSB.js",revision:null},{url:"assets/MyLocationPage-AgBwH5lu.css",revision:null},{url:"assets/MyLocationPage-K6DhyfDK.js",revision:null},{url:"assets/MyPage-cOMNo9vH.js",revision:null},{url:"assets/MyPage-xWnNUdAv.css",revision:null},{url:"assets/MyPageEdit-b4U7KaEQ.js",revision:null},{url:"assets/MyPageEdit-RvHBemHd.css",revision:null},{url:"assets/RoomList-4xNpIixM.js",revision:null},{url:"assets/RoomList-EtWmI35w.css",revision:null},{url:"assets/Send-ODZRbrSK.js",revision:null},{url:"assets/TutorialDetailPage-csiSkZBz.js",revision:null},{url:"assets/TutorialDetailPage-vmfnKjNH.css",revision:null},{url:"assets/TutorialPage-4am9KaJy.css",revision:null},{url:"assets/TutorialPage-Q0uBdhpC.js",revision:null},{url:"assets/VideoRoomComponent copy-0_HtSsWU.css",revision:null},{url:"assets/VideoRoomComponent copy-LxBozr5k.js",revision:null},{url:"index.html",revision:"6c4db2aa87068456f71aa97248ed7495"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./icons/logo192x192.webp",revision:"5c41fe5f983aecb875f2fb29ed88dd0d"},{url:"./icons/logo512x512.webp",revision:"f5a1e7a4c82f1086617b648d1a11ef65"},{url:"manifest.webmanifest",revision:"157db8f211cf3fc6961ac450123c07da"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
