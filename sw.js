if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>l(s,n),a={module:{uri:n},exports:u,require:o};e[n]=Promise.all(i.map((s=>a[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddOutlined-Yw_LVhR4.js",revision:null},{url:"assets/Aquarium-22PWMB0Q.js",revision:null},{url:"assets/Aquarium-cZKdMs9s.css",revision:null},{url:"assets/AuthPage-ANkz8OuM.js",revision:null},{url:"assets/AuthPage-hnEUpfwj.css",revision:null},{url:"assets/axios-L6U4YIEh.js",revision:null},{url:"assets/backSymbol-0aRp874W.js",revision:null},{url:"assets/board-trRPgBQ3.js",revision:null},{url:"assets/BoardCreate-aL7ah88M.js",revision:null},{url:"assets/BoardDetail-8aaBZQmU.css",revision:null},{url:"assets/BoardDetail-Eno6dDN_.js",revision:null},{url:"assets/BoardFormItem-kEiwfx9T.css",revision:null},{url:"assets/BoardFormItem-oMgZ7uj6.js",revision:null},{url:"assets/BoardModify-4F-CAR17.js",revision:null},{url:"assets/BoardPage-kVlUxsFd.js",revision:null},{url:"assets/BoardPage-SbKvk9-d.css",revision:null},{url:"assets/ChatBot-OcNTCN5x.js",revision:null},{url:"assets/ChatBot-yOoIFiSN.css",revision:null},{url:"assets/commons--RmDgXK-.js",revision:null},{url:"assets/CreateRoom-60pgx5Pd.js",revision:null},{url:"assets/CreateRoom-fc44DAWO.css",revision:null},{url:"assets/default_profile-HTeSV8ma.js",revision:null},{url:"assets/EditNote-K-0NIfVC.js",revision:null},{url:"assets/effect-coverflow-7xYBGlh6.js",revision:null},{url:"assets/FavoriteBorder-5_UpXWJn.js",revision:null},{url:"assets/fish-ZY0xfTiz.js",revision:null},{url:"assets/FishBookDetailPage-vkEg-320.js",revision:null},{url:"assets/FishBookDetailPage-yIYTtdju.css",revision:null},{url:"assets/FishBookPage--7zvgXhB.js",revision:null},{url:"assets/FishBookPage-fspL2oD3.css",revision:null},{url:"assets/FishingMapStore-uI4j1CVD.js",revision:null},{url:"assets/FishMapDetailPage-CMJ5duwm.js",revision:null},{url:"assets/FishMapDetailPage-HvdXKYF-.css",revision:null},{url:"assets/FishMapPage-0OIojgr7.css",revision:null},{url:"assets/FishMapPage-Ug1b1B8C.js",revision:null},{url:"assets/Header-bHGHsn78.css",revision:null},{url:"assets/Header-oxeooN5E.js",revision:null},{url:"assets/HomePage-5rbTD_iF.css",revision:null},{url:"assets/HomePage-rEZgvYte.js",revision:null},{url:"assets/iconBase-XN4JMAe_.js",revision:null},{url:"assets/ImageEditPage-0EmoTqlO.js",revision:null},{url:"assets/ImageEditPage-u5nilnlX.css",revision:null},{url:"assets/ImageResultPage-ghSNk9Sw.css",revision:null},{url:"assets/ImageResultPage-o-Jpgdqz.js",revision:null},{url:"assets/index-1kbdXfb5.css",revision:null},{url:"assets/index-dlk3gkIN.js",revision:null},{url:"assets/index-Pd8V48__.js",revision:null},{url:"assets/InfoOutlined-Kj4jpv_D.js",revision:null},{url:"assets/Loading-GcHiRC7B.js",revision:null},{url:"assets/login_img-kcxhdVzM.js",revision:null},{url:"assets/LoginPage--srIzCf0.js",revision:null},{url:"assets/LoginPage-5g-G_4nT.css",revision:null},{url:"assets/marker_place_off-DaVJSVdB.js",revision:null},{url:"assets/marker_place-niajAGPN.js",revision:null},{url:"assets/MediaPage-0KFXPyMM.css",revision:null},{url:"assets/MediaPage-IPyR9KU9.js",revision:null},{url:"assets/MyFishPage-DuVGGhB3.js",revision:null},{url:"assets/MyFishPage-meoM3rWB.css",revision:null},{url:"assets/MyLocationPage-5Fvn2VsN.js",revision:null},{url:"assets/MyLocationPage-AgBwH5lu.css",revision:null},{url:"assets/MyPage--a9C7FMk.js",revision:null},{url:"assets/MyPage-xWnNUdAv.css",revision:null},{url:"assets/MyPageEdit-MRZbpVyl.js",revision:null},{url:"assets/MyPageEdit-RvHBemHd.css",revision:null},{url:"assets/RoomList-EtWmI35w.css",revision:null},{url:"assets/RoomList-RFK55f-2.js",revision:null},{url:"assets/Send-oqhdnyCf.js",revision:null},{url:"assets/TutorialDetailPage-vmfnKjNH.css",revision:null},{url:"assets/TutorialDetailPage-WmHb5aLu.js",revision:null},{url:"assets/TutorialPage-4am9KaJy.css",revision:null},{url:"assets/TutorialPage-9unhBAE2.js",revision:null},{url:"assets/VideoRoomComponent copy-0_HtSsWU.css",revision:null},{url:"assets/VideoRoomComponent copy-HcJAdHbt.js",revision:null},{url:"index.html",revision:"5d0a2d53cd7390664f32752814599cc3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./icons/logo192x192.webp",revision:"5c41fe5f983aecb875f2fb29ed88dd0d"},{url:"./icons/logo512x512.webp",revision:"f5a1e7a4c82f1086617b648d1a11ef65"},{url:"manifest.webmanifest",revision:"157db8f211cf3fc6961ac450123c07da"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
