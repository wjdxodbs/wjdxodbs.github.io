import{e as p,i as M,a as S,r as u,j as e,d as L}from"./index-BeVZ3B2b.js";import{s as P,I as b,H as C}from"./Header-Ci7_VFif.js";import{I as H}from"./index-CW5DeDA9.js";import{G as w}from"./iconBase-B0MEy39x.js";import{d as f,s as v}from"./atoms-C_1xhwhc.js";import{a as z}from"./common--nYADsze.js";import{y as k}from"./youtubeMusic-xhMXNxMa.js";function E(t){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M388.938 29.47c-23.008 0-46.153 9.4-62.688 25.405 5.74 46.14 21.326 75.594 43.75 94.28 22.25 18.543 52.078 26.88 87.75 28.345 13.432-16.07 21.188-37.085 21.188-58 0-23.467-9.75-47.063-26.344-63.656C436 39.25 412.404 29.47 388.938 29.47zm-76.282 42.374c-8.808 14.244-13.75 30.986-13.75 47.656 0 23.467 9.782 47.063 26.375 63.656 16.595 16.594 40.19 26.375 63.658 26.375 18.678 0 37.44-6.196 52.687-17.093-31.55-3.2-59.626-12.46-81.875-31-23.277-19.397-39.553-48.64-47.094-89.593zm-27.78 67.72l-64.47 83.78c2.898 19.6 10.458 35.1 22.094 46.187 11.692 11.142 27.714 18.118 48.594 19.626l79.312-65.28c-21.2-3.826-41.14-14.11-56.437-29.407-14.927-14.927-25.057-34.286-29.095-54.907zM300 201.468a8 8 0 0 1 .03 0 8 8 0 0 1 .533 0 8 8 0 0 1 5.875 13.374l-34.313 38.78a8.004 8.004 0 1 1-12-10.593l34.313-38.78a8 8 0 0 1 5.562-2.78zM207.594 240L103 375.906c3.487 13.327 7.326 20.944 12.5 26.03 5.03 4.948 12.386 8.46 23.563 12.408l135.312-111.438c-17.067-3.61-31.595-11.003-42.906-21.78-11.346-10.81-19.323-24.827-23.876-41.126zM95.97 402.375c-9.12 5.382-17.37 14.08-23.126 24.406-9.656 17.317-11.52 37.236-2.25 50.47 6.665 4.337 10.566 4.81 13.844 4.344 1.794-.256 3.618-.954 5.624-1.875-3.18-9.575-6.3-20.93-2.5-33.314 3.03-9.87 10.323-19.044 23.47-27.5-2.406-1.65-4.644-3.49-6.75-5.562-3.217-3.163-5.94-6.78-8.313-10.97z"},child:[]}]})(t)}function R(t){return w({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"},child:[]}]})(t)}const I=z(),$=async t=>{try{const{data:i}=await I.get(`/music/playlists?time=${t}`);return console.log(i),i}catch(i){throw console.log(i),i}},A=async t=>{try{const{data:i}=await I.delete(`/music/playlists/${t}`);return console.log(i),i}catch(i){console.log(i)}},D=({song:t})=>{const i=p(f),d=M(v),r=p(P),l=S();u.useEffect(()=>{d()},[]);const n=a=>{l(`/music/search/${a}`,{replace:!0}),r(h=>{const y=h.length?h[h.length-1].id+1:1,j=h.filter(g=>g.title!==a);return[{id:y,title:a},...j]})},m=async a=>{await A(t.playlistId),a.preventDefault(),i(null)},o=a=>{n(a.title)},x=a=>{n(a.artist)};return e.jsxs("div",{className:"PlayListItemModal",children:[e.jsx("div",{className:"background",onClick:()=>i(null)}),e.jsxs("div",{className:"item-modal-body",children:[e.jsxs("div",{className:"item",children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:t.albumImage})}),e.jsx("div",{className:"item-wide",children:e.jsxs("div",{className:"item-detail",children:[e.jsx("div",{className:"item-title",children:t.title}),e.jsx("div",{className:"item-artist",children:t.artist})]})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"modal-menu",children:[e.jsxs("li",{onClick:()=>o(t),children:[e.jsx(E,{}),e.jsx("div",{children:"관련 노래 검색"})]}),e.jsxs("li",{onClick:()=>x(t),children:[e.jsx(H,{}),e.jsx("div",{children:"아티스트 검색"})]}),e.jsxs("li",{onClick:m,children:[e.jsx(R,{}),e.jsx("div",{children:"삭제"})]})]})]})]})},_=({song:t})=>{const i=p(v),d=r=>{const l=encodeURIComponent(r.title),n=encodeURIComponent(r.artist),m=`youtubemusic://search?q=${l}-${n}`,o=`https://music.youtube.com/search?q=${l}-${n}`;window.location.href=m,setTimeout(()=>{window.location.href=o},1500)};return e.jsxs("div",{className:"PlayListDirectListenModal",children:[e.jsx("div",{onClick:()=>i(null)}),e.jsxs("div",{onClick:()=>d(t),className:"modal-body",children:[e.jsx("div",{className:"img-container",children:e.jsx("img",{src:k,alt:""})}),e.jsx("div",{children:"바로 듣기"})]})]})},B=()=>{const[t,i]=u.useState([]),[d,r]=u.useState(""),[l,n]=u.useState(!1),[m,o]=L(f),[x,a]=L(v),h=M(v),y=M(f);u.useEffect(()=>{j(),h(),y();const s=async()=>{window.innerHeight+document.documentElement.scrollTop!==document.documentElement.offsetHeight||l||await j()};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[d,l]);const j=async()=>{const s=await $(d);s.content.length>0&&(r(s.content[s.content.length-1].modifiedAt),i(c=>[...c,...s.content])),n(s.last)},g=s=>{m===s?(o(null),a(null)):o(s)},N=s=>{x===s?(a(null),o(null)):a(s)};return e.jsx("div",{className:"PlayListBody",children:t.length>0?e.jsxs("div",{children:[t.map((s,c)=>e.jsxs("div",{className:"result-item",children:[e.jsxs("div",{className:"content-container",children:[e.jsx("div",{className:"image-container",onClick:()=>N(c),children:e.jsx("img",{src:s.albumImage})}),e.jsxs("div",{className:"item-wide",children:[e.jsxs("div",{className:"item-detail",onClick:()=>N(c),children:[e.jsx("div",{className:"item-title",children:s.title}),e.jsx("div",{className:"item-artist",children:s.artist})]}),e.jsx("div",{className:"item-detail-btn",onClick:()=>g(c),children:e.jsx(b,{})})]})]}),m===c&&e.jsx(D,{song:s}),x===c&&e.jsx(_,{song:s})]},c)),l&&e.jsx("div",{children:"마지막 플레이리스트입니다."})]}):e.jsx("div",{children:"플레이리스트가 비어있습니다."})})},J=()=>e.jsxs("div",{className:"PlayListPage",children:[e.jsx(C,{centerText:"플레이리스트"}),e.jsx("div",{className:"body",children:e.jsx(B,{})})]});export{J as default};
