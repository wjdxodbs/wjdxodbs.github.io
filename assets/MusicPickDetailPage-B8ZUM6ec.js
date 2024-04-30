import{h as j,e as l,j as s,R as h,d as g,i as p,a as k,r as m,u as R}from"./index-BsX6x3ci.js";import{G as M}from"./ping-jrCZqfNz.js";import{a as w}from"./dayjs.min-DnSRSQR8.js";import{t as b,T as S}from"./toastMsg-C4OGO5N7.js";import{y}from"./youtubeMusic-xhMXNxMa.js";import{a as N}from"./common-CgW3NMxz.js";import{b as I}from"./atoms-CkjKMvzy.js";import{H as C}from"./Header-Dgr4kIIm.js";import{w as D}from"./whiteBox-CgJCDTJb.js";function P(t){return M({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M388.8 896.4v-27.198c.6-2.2 1.6-4.2 2-6.4 8.8-57.2 56.4-102.4 112.199-106.2 62.4-4.4 115.2 31.199 132.4 89.199 2.2 7.6 3.8 15.6 5.8 23.4v27.2c-.6 1.8-1.6 3.399-1.8 5.399-8.6 52.8-46.6 93-98.6 104.4-4 .8-8 2-12 3h-27.2c-1.8-.6-3.6-1.6-5.4-1.8-52-8.4-91.599-45.4-103.6-96.8-1.2-5-2.6-9.6-3.8-14.2zm252.4-768.797l-.001 27.202c-.6 2.2-1.6 4.2-1.8 6.4-9 57.6-56.8 102.6-113.2 106.2-62.2 4-114.8-32-131.8-90.2-2.2-7.401-3.8-15-5.6-22.401v-27.2c.6-1.8 1.6-3.4 2-5.2 9.6-52 39.8-86 90.2-102.2 6.6-2.2 13.6-3.4 20.4-5.2h27.2c1.8.6 3.6 1.6 5.4 1.8 52.2 8.6 91.6 45.4 103.6 96.8 1.201 4.8 2.401 9.4 3.601 13.999zm-.001 370.801v27.2c-.6 2.2-1.6 4.2-2 6.4-9 57.4-58.6 103.6-114.6 106-63 2.8-116.4-35.2-131.4-93.8-1.6-6.2-3-12.4-4.4-18.6v-27.2c.6-2.2 1.6-4.2 2-6.4 8.8-57.4 58.6-103.601 114.6-106.2 63-3 116.4 35.2 131.4 93.8 1.6 6.4 3 12.6 4.4 18.8z"},child:[]}]})(t)}function _(t){return M({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M120,16V8a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm80,32a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,200,48ZM50.34,45.66A8,8,0,0,0,61.66,34.34l-8-8A8,8,0,0,0,42.34,37.66Zm87,26.45a8,8,0,1,0-2.64,15.78C153.67,91.08,168,108.32,168,128a8,8,0,0,0,16,0C184,100.6,163.93,76.57,137.32,72.11ZM232,176v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16V128a88,88,0,0,1,88.67-88c48.15.36,87.33,40.29,87.33,89v31A16,16,0,0,1,232,176ZM56,160H200V129c0-40-32.05-72.71-71.45-73H128a72,72,0,0,0-72,72Zm160,40V176H40v24H216Z"},child:[]}]})(t)}const v=j({key:"optionModalState",default:!1}),d=j({key:"reportModalState",default:!1}),f=j({key:"musicInfoState",default:{address:"",albumImage:"",artist:"",content:"",itemImage:"",pickupStatus:!1,throwId:0,thrownDate:"",title:""}}),O=()=>{const t=l(d),e=l(v);return s.jsxs("div",{className:"OptionModal",children:[s.jsx("div",{className:"background",onClick:()=>e(!1)}),s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"report",children:[s.jsx(_,{}),s.jsx("div",{onClick:()=>{e(!1),t(!0)},children:"신고하기"})]}),s.jsx("button",{className:"close",onClick:()=>e(!1),children:"닫기"})]})]})},T=({content:t})=>{const e=l(d),c=()=>{b("신고 완료"),e(!1)};return s.jsx("li",{onClick:c,children:t})},Z=["마음에 들지 않습니다","스팸","혐호 발언 또는 상징","불법 또는 규제 상품 판매","기타 문제"],E=()=>{const t=l(d);return s.jsxs("div",{className:"ReportModal",children:[s.jsx("div",{className:"background",onClick:()=>t(!1)}),s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"report",children:"신고"}),s.jsx("hr",{}),s.jsxs("div",{className:"content",children:[s.jsxs("div",{className:"title",children:[s.jsx("div",{children:"이 음악을 신고하는 이유"}),s.jsx("div",{children:"회원님의 신고는 익명으로 처리됩니다."})]}),s.jsx("ul",{className:"reson",children:Z.map(e=>s.jsx(T,{content:e},e))})]})]})]})},H=async t=>{try{const{data:e}=await N().get(`/music/thrown/${t}`);return e}catch(e){throw console.error(e),e}},A=async t=>{try{await N().post(`/music/pick/${t}`)}catch(e){throw e}},V=()=>{const t=h(d),[e,c]=g(v),i=p(I),a=h(f),o=k(),u=w(a.thrownDate),x=async()=>{try{await A(a.throwId),i(),o("/")}catch(n){console.error(n)}},r=()=>{encodeURIComponent(a.title),encodeURIComponent(a.artist);const n="https://music.youtube.com/watch?v=gwuCZYJdnT8";window.location.href=n};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"MusicPickDetailBottom",children:[s.jsxs("div",{className:"top",children:[s.jsx("div",{className:"option",children:s.jsx(P,{onClick:()=>c(!0)})}),s.jsx("div",{className:"content",children:a.content}),s.jsx("div",{className:"date",children:u.format("YY.MM.DD")})]}),s.jsxs("div",{className:"bottom",children:[s.jsxs("button",{className:"listen",onClick:r,children:[s.jsx("img",{src:y,alt:""}),s.jsx("div",{children:"바로 듣기"})]}),s.jsx("button",{className:`pick ${a.pickupStatus&&"disable"}`,onClick:x,disabled:a.pickupStatus,children:"줍기"})]})]}),e&&s.jsx(O,{}),t&&s.jsx(E,{}),s.jsx(S,{})]})},B=()=>{const t=m.useRef(null),[e,c]=m.useState(!1),{title:i,artist:a,albumImage:o,itemImage:u,address:x}=h(f);return m.useEffect(()=>{if(t.current){const r=t.current.scrollWidth,n=t.current.clientWidth;r>n?c(!0):c(!1)}},[]),s.jsxs("div",{className:"MusicPickDetailTop",children:[s.jsx("img",{className:"album-image",src:o,alt:""}),s.jsxs("div",{className:"cover",children:[s.jsx("div",{className:"black-gradient"}),s.jsxs("div",{className:"content",children:[s.jsx(C,{centerText:x,type:"address"}),s.jsxs("div",{className:"content-bottom",children:[s.jsxs("div",{children:[s.jsx("div",{className:"title",children:s.jsx("div",{ref:t,className:`scrolling-text ${e?"animated":""}`,children:i})}),s.jsx("div",{className:"artist",children:a})]}),s.jsx("img",{src:u,alt:"",onError:r=>{r.currentTarget.src=D}})]})]})]})]})},q=()=>{const t=p(v),e=p(d),c=l(f),{id:i}=R(),a=async()=>{try{const o=await H(i);console.log(o),c(o)}catch(o){console.log(o)}};return m.useEffect(()=>{t(),e(),a()},[]),s.jsxs("div",{className:"MusicPickDetailPage",children:[s.jsx(B,{}),s.jsx(V,{})]})};export{q as default};
