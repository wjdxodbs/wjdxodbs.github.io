if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>l(s,n),a={module:{uri:n},exports:u,require:o};e[n]=Promise.all(i.map((s=>a[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddOutlined-L7OeCqeD.js",revision:null},{url:"assets/Aquarium-1RcR04Sm.css",revision:null},{url:"assets/Aquarium-mEEu1UOZ.js",revision:null},{url:"assets/AuthPage-hnEUpfwj.css",revision:null},{url:"assets/AuthPage-VGrUhrVy.js",revision:null},{url:"assets/axios-L6U4YIEh.js",revision:null},{url:"assets/backSymbol-0aRp874W.js",revision:null},{url:"assets/board-trRPgBQ3.js",revision:null},{url:"assets/BoardCreate-ZW_82Up_.js",revision:null},{url:"assets/BoardDetail-8aaBZQmU.css",revision:null},{url:"assets/BoardDetail-uMNfeeP0.js",revision:null},{url:"assets/BoardFormItem-II-ssTdd.js",revision:null},{url:"assets/BoardFormItem-kEiwfx9T.css",revision:null},{url:"assets/BoardModify-D4s1M4WP.js",revision:null},{url:"assets/BoardPage-nb9fQA7E.js",revision:null},{url:"assets/BoardPage-SbKvk9-d.css",revision:null},{url:"assets/ChatBot-6H9mP7BG.css",revision:null},{url:"assets/ChatBot-YJF5q3wr.js",revision:null},{url:"assets/commons--RmDgXK-.js",revision:null},{url:"assets/CreateRoom-88BHnPX-.css",revision:null},{url:"assets/CreateRoom-BW0Xbvsl.js",revision:null},{url:"assets/default_profile-HTeSV8ma.js",revision:null},{url:"assets/EditNote-ER6hZFYg.js",revision:null},{url:"assets/effect-coverflow-yEsPGMIw.js",revision:null},{url:"assets/FavoriteBorder-UrUybudk.js",revision:null},{url:"assets/fish-ZY0xfTiz.js",revision:null},{url:"assets/FishBookDetailPage-7YMzsi7I.css",revision:null},{url:"assets/FishBookDetailPage-un-wXQy_.js",revision:null},{url:"assets/FishBookPage-i8ClJvk7.js",revision:null},{url:"assets/FishBookPage-IHnbo8t_.css",revision:null},{url:"assets/FishingMapStore-I116sW8E.js",revision:null},{url:"assets/FishMapDetailPage-eYYTzDSu.js",revision:null},{url:"assets/FishMapDetailPage-ZX_6zWBJ.css",revision:null},{url:"assets/FishMapPage-0OIojgr7.css",revision:null},{url:"assets/FishMapPage-dteX-GxD.js",revision:null},{url:"assets/Header-bHGHsn78.css",revision:null},{url:"assets/Header-XFbgH8Bi.js",revision:null},{url:"assets/HomePage-5rbTD_iF.css",revision:null},{url:"assets/HomePage-LMdxQo-X.js",revision:null},{url:"assets/iconBase-ApSM99A3.js",revision:null},{url:"assets/ImageEditPage-u5nilnlX.css",revision:null},{url:"assets/ImageEditPage-YjAxBR7X.js",revision:null},{url:"assets/ImageResultPage-43VkLppX.css",revision:null},{url:"assets/ImageResultPage-ewMZdnvb.js",revision:null},{url:"assets/index-hklk0IFU.css",revision:null},{url:"assets/index-k6kB5Caz.js",revision:null},{url:"assets/index-mRyGzWXO.js",revision:null},{url:"assets/InfoOutlined-S_cBlBC9.js",revision:null},{url:"assets/Loading-O1zKLldL.js",revision:null},{url:"assets/login_img-kcxhdVzM.js",revision:null},{url:"assets/LoginPage-5g-G_4nT.css",revision:null},{url:"assets/LoginPage-ht6R4m99.js",revision:null},{url:"assets/marker_place_off-DaVJSVdB.js",revision:null},{url:"assets/marker_place-eJTyr0U9.js",revision:null},{url:"assets/MediaPage-0KFXPyMM.css",revision:null},{url:"assets/MediaPage-exHBz_90.js",revision:null},{url:"assets/MyFishPage-35ynlQiD.js",revision:null},{url:"assets/MyFishPage-Bg12HRcH.css",revision:null},{url:"assets/MyLocationPage-5YODhxne.js",revision:null},{url:"assets/MyLocationPage-gCP3OH1A.css",revision:null},{url:"assets/MyPage-HjAwwduG.js",revision:null},{url:"assets/MyPage-xWnNUdAv.css",revision:null},{url:"assets/MyPageEdit-QcaaZ8ha.js",revision:null},{url:"assets/MyPageEdit-RvHBemHd.css",revision:null},{url:"assets/RoomList-6gHOfHoo.js",revision:null},{url:"assets/RoomList-EtWmI35w.css",revision:null},{url:"assets/Send-THM4ccsF.js",revision:null},{url:"assets/TutorialDetailPage-GJl6Ai8v.js",revision:null},{url:"assets/TutorialDetailPage-vmfnKjNH.css",revision:null},{url:"assets/TutorialPage-4am9KaJy.css",revision:null},{url:"assets/TutorialPage-X3mWIgIu.js",revision:null},{url:"assets/VideoRoomComponent copy-6zAtX18n.js",revision:null},{url:"assets/VideoRoomComponent copy-Vs-8RGO5.css",revision:null},{url:"index.html",revision:"727d586081f2dcc492cb7dddf3b85386"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./icons/logo192x192.webp",revision:"5c41fe5f983aecb875f2fb29ed88dd0d"},{url:"./icons/logo512x512.webp",revision:"f5a1e7a4c82f1086617b648d1a11ef65"},{url:"manifest.webmanifest",revision:"157db8f211cf3fc6961ac450123c07da"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
