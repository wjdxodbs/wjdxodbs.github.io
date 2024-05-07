import{f as v,m as f,a as D,r,j as e,e as S,R as B}from"./index-B6xZGepb.js";import{I as E,H as U}from"./Header-DR3aqby2.js";import{I as A}from"./index-CsxeQsvs.js";import{G as R}from"./ping-DGL1-xt7.js";import{d as P,s as I,a as w,m as k}from"./atoms-CM67S57b.js";import{s as G}from"./atoms-CrMidplK.js";import{a as T}from"./common-BDZuGjqk.js";import{s as q}from"./atoms-0lR4UmSv.js";import{l as F}from"./logo-CgX7Glqh.js";import{y as O}from"./youtubeMusic-xhMXNxMa.js";import{L as V}from"./Loading-BZk38fY4.js";import"./index-Co6n4StN.js";function W(t){return R({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M388.938 29.47c-23.008 0-46.153 9.4-62.688 25.405 5.74 46.14 21.326 75.594 43.75 94.28 22.25 18.543 52.078 26.88 87.75 28.345 13.432-16.07 21.188-37.085 21.188-58 0-23.467-9.75-47.063-26.344-63.656C436 39.25 412.404 29.47 388.938 29.47zm-76.282 42.374c-8.808 14.244-13.75 30.986-13.75 47.656 0 23.467 9.782 47.063 26.375 63.656 16.595 16.594 40.19 26.375 63.658 26.375 18.678 0 37.44-6.196 52.687-17.093-31.55-3.2-59.626-12.46-81.875-31-23.277-19.397-39.553-48.64-47.094-89.593zm-27.78 67.72l-64.47 83.78c2.898 19.6 10.458 35.1 22.094 46.187 11.692 11.142 27.714 18.118 48.594 19.626l79.312-65.28c-21.2-3.826-41.14-14.11-56.437-29.407-14.927-14.927-25.057-34.286-29.095-54.907zM300 201.468a8 8 0 0 1 .03 0 8 8 0 0 1 .533 0 8 8 0 0 1 5.875 13.374l-34.313 38.78a8.004 8.004 0 1 1-12-10.593l34.313-38.78a8 8 0 0 1 5.562-2.78zM207.594 240L103 375.906c3.487 13.327 7.326 20.944 12.5 26.03 5.03 4.948 12.386 8.46 23.563 12.408l135.312-111.438c-17.067-3.61-31.595-11.003-42.906-21.78-11.346-10.81-19.323-24.827-23.876-41.126zM95.97 402.375c-9.12 5.382-17.37 14.08-23.126 24.406-9.656 17.317-11.52 37.236-2.25 50.47 6.665 4.337 10.566 4.81 13.844 4.344 1.794-.256 3.618-.954 5.624-1.875-3.18-9.575-6.3-20.93-2.5-33.314 3.03-9.87 10.323-19.044 23.47-27.5-2.406-1.65-4.644-3.49-6.75-5.562-3.217-3.163-5.94-6.78-8.313-10.97z"},child:[]}]})(t)}function J(t){return R({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"},child:[]}]})(t)}const $=T(),K=async t=>{try{const{data:i}=await $.get(`/music/playlists?time=${t}`);return i}catch(i){throw console.log(i),i}},Q=async t=>{try{const{data:i}=await $.delete(`/music/playlists/${t}`);return i}catch(i){console.log(i)}},X=({song:t,deleteSongFromPlayList:i})=>{const d=v(P),h=f(I),m=v(q),n=v(G),u=v(w),o=D();r.useEffect(()=>{h()},[]);const p=l=>{u(t.youtubeId),o(`/music/search/${l}`),n(c=>{const j=c.length?c[c.length-1].id+1:1,y=c.filter(b=>b.title!==l);return[{id:j,title:l},...y]})},g=async l=>{l.preventDefault(),await Q(t.playlistId),i(t.playlistId),d(null)},M=l=>{const c={youtubeId:l.youtubeId,albumImage:l.albumImage,artist:l.artist,title:l.title,playTime:"",previewUrl:l.previewUrl};m(c),u(l.youtubeId),o(`/music/drop/${l.youtubeId}`)},x=l=>{p(l.title)},L=l=>{p(l.artist)};return e.jsxs("div",{className:"PlayListItemModal",children:[e.jsx("div",{className:"background",onClick:()=>d(null)}),e.jsxs("div",{className:"item-modal-body",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:t.albumImage})}),e.jsxs("div",{className:"item-detail",children:[e.jsx("div",{className:"item-title",children:t.title}),e.jsx("div",{className:"item-artist",children:t.artist})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"modal-menu",children:[e.jsxs("li",{onClick:()=>M(t),children:[e.jsx("img",{src:F,alt:""}),e.jsx("div",{children:"노래 쓰롱 하기"})]}),e.jsxs("li",{onClick:()=>x(t),children:[e.jsx(W,{}),e.jsx("div",{children:"관련 노래 검색"})]}),e.jsxs("li",{onClick:()=>L(t),children:[e.jsx(A,{}),e.jsx("div",{children:"아티스트 검색"})]}),e.jsxs("li",{onClick:g,children:[e.jsx(J,{}),e.jsx("div",{children:"삭제"})]})]})]})]})},Y=({song:t})=>{const i=v(I),d=h=>{const m=encodeURIComponent(h.title),n=encodeURIComponent(h.artist),u=`youtubemusic://search?q=${m}-${n}`,o=`https://music.youtube.com/search?q=${m}-${n}`;window.location.href=u,setTimeout(()=>{window.location.href=o},1500)};return e.jsxs("div",{className:"PlayListDirectListenModal",children:[e.jsx("div",{onClick:()=>i(null)}),e.jsxs("div",{onClick:()=>d(t),className:"modal-body",children:[e.jsx("div",{className:"img-container",children:e.jsx("img",{src:O,alt:""})}),e.jsx("div",{children:"바로 듣기"})]})]})},Z=()=>{const[t,i]=S(k),[d,h]=r.useState(!1),[m,n]=S(P),[u,o]=S(I),p=f(I),g=f(P),M=f(k),x=B(w),L=f(w),l=r.useRef(null),[c,j]=r.useState(!1),y=r.useCallback(async(s="")=>{const a=await K(s);a.last&&h(!0),i(N=>[...N,...a.content]),j(!1)},[]);r.useEffect(()=>{j(!0),x?z():(M(),y()),p(),g()},[]);const b=r.useCallback(s=>{c||(l.current&&l.current.disconnect(),l.current=new IntersectionObserver(a=>{a[0].isIntersecting&&!d&&y(t.length?t[t.length-1].modifiedAt:"")}),s&&l.current.observe(s))},[c,d,y,t]),z=()=>{if(x){const s=document.getElementById(x);s&&(s.scrollIntoView({block:"center"}),j(!1),L())}},H=s=>{m===s?(n(null),o(null)):n(s)},C=s=>{u===s?(o(null),n(null)):o(s)},_=s=>{i(a=>a.filter(N=>N.playlistId!==s))};return e.jsx("div",{className:"PlayListBody",children:c?e.jsx(V,{}):t.length>0?e.jsx("div",{children:t.map((s,a)=>e.jsxs("div",{id:s.youtubeId,className:"result-item",children:[e.jsxs("div",{className:"content-container",children:[e.jsx("div",{className:"image-container",onClick:()=>C(a),children:e.jsx("img",{src:s.albumImage,loading:"lazy"})}),e.jsxs("div",{className:"item-wide",children:[e.jsxs("div",{className:"item-detail",onClick:()=>C(a),children:[e.jsx("div",{className:"item-title",children:s.title}),e.jsx("div",{className:"item-artist",children:s.artist})]}),e.jsx("div",{className:"item-detail-btn",onClick:()=>H(a),children:e.jsx(E,{})})]})]}),m===a&&e.jsx(X,{song:s,deleteSongFromPlayList:_}),u===a&&e.jsx(Y,{song:s}),a===t.length-1?e.jsx("div",{ref:b}):null]},`${s.playlistId}-${a}`))}):e.jsx("div",{children:"플레이리스트가 비어있습니다."})})},ee=r.memo(Z),he=()=>e.jsxs("div",{className:"PlayListPage",children:[e.jsx(U,{centerText:"플레이리스트"}),e.jsx("div",{className:"body none-scroll",children:e.jsx(ee,{})})]});export{he as default};