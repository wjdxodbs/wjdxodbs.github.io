import{r as t,d as N,R as o,j as e,a as b}from"./index-BeVZ3B2b.js";import{m as p,H as R}from"./Header-Ci7_VFif.js";import{w as h}from"./whiteBox-CgJCDTJb.js";import{a as C}from"./index-CW5DeDA9.js";import{s as j}from"./atoms-9W6Wv2Nu.js";import{l as I,a as w}from"./atoms-BIw__wKm.js";import{p as y}from"./MusicSearchApi-DdMuNFbS.js";import"./iconBase-B0MEy39x.js";import"./common--nYADsze.js";const S=()=>{const d=t.useRef(null),a=t.useRef(null),[r,m]=t.useState(!1),[l,u]=N(p),i=o(j);t.useEffect(()=>{if(a.current){const s=a.current.scrollWidth,n=a.current.clientWidth;s>n?m(!0):m(!1)}},[]);const x=()=>{d.current.click()},g=s=>{if(s.target.files&&s.target.files[0]){const n=s.target.files[0];u(URL.createObjectURL(n))}};return e.jsxs("div",{className:"MusicDropHeader",children:[e.jsx("div",{className:"album-image-container",children:e.jsx("img",{className:"album-image",src:i.albumImage,alt:""})}),e.jsxs("div",{className:"cover",children:[e.jsx("div",{className:"black-cover"}),e.jsx("div",{className:"black-gradient"}),e.jsxs("div",{className:"content",children:[e.jsx(R,{}),e.jsxs("div",{className:"content-bottom",children:[e.jsxs("div",{children:[e.jsx("div",{className:"title",children:e.jsx("div",{ref:a,className:`scrolling-text ${r?"animated":""}`,children:i.title})}),e.jsx("div",{className:"artist",children:i.artist})]}),e.jsxs("div",{className:"upload-image-div",onClick:x,children:[e.jsx("img",{src:l||h,alt:"",className:"upload-image",onError:s=>{s.currentTarget.src=h}}),!l&&e.jsx(C,{})]}),l&&e.jsx("div",{className:"reselect-image",onClick:x,children:"이미지 다시 선택하기"}),e.jsx("input",{type:"file",ref:d,hidden:!0,onChange:g,className:"image-input"})]})]})]})]})},k=()=>{const[d,a]=t.useState(0),[r,m]=t.useState(""),l=t.useRef(null),u=o(I),i=o(w),x=o(p),g=b(),s=o(j),n=c=>{c.target.value.length<=50?(m(c.target.value),a(c.target.value.length)):alert("텍스트는 최대 50자까지 입력 가능합니다.")},v=c=>{if(c.preventDefault(),r.trim().length===0){alert("노래에 대한 감정이나 상황을 적어주세요. 텍스트가 비어있을 수 없습니다.");return}const f={longitude:u.lng,latitude:u.lat,location:i,imageUrl:x,comment:r.trim(),title:s.title,artist:s.artist,albumImageUrl:s.albumImage};y(s.youtubeId,f),g("/",{replace:!0})};return e.jsx("div",{className:"MusicDrop",children:e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"header",children:[e.jsxs("p",{children:[e.jsx("span",{children:i}),"에"]}),"음악을 두고 갈까요?"]}),e.jsxs("form",{className:"form-div",children:[e.jsxs("div",{className:"input-div",children:[e.jsx("textarea",{onChange:n,placeholder:"노래, 현재 감정, 상황, 관련 에피소드, 거리, 가수 등 떠오르는 말을 적어보세요.",value:r,maxLength:50,className:"input-area",ref:l,required:!0}),e.jsxs("div",{className:"input-count",children:[d,"/50"]})]}),e.jsx("div",{className:"waring-div",children:e.jsx("div",{className:"warning-msg",children:"텍스트 및 사진은 생략이 가능하며 욕설, 성희롱, 비방과 같은 내용은 삭제됩니다."})}),e.jsx("div",{className:"put-btn-div",children:e.jsx("button",{className:"put-btn",onClick:v,type:"button",children:"쓰롱하기"})})]})]})})},_=()=>e.jsxs(e.Fragment,{children:[e.jsx(S,{}),e.jsx(k,{})]});export{_ as default};
