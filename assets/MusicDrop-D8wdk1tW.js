import{r as a,d as y,R as m,e as B,l as u,j as e,a as w}from"./index-DkMOrE4L.js";import{H as C}from"./Header-C6tx2lg1.js";import{a as V}from"./index-CnDwLdQM.js";import{m as b,u as p}from"./atoms-4hXxDfUr.js";import{s as U}from"./atoms-CGsP87hU.js";import{p as D,a as _}from"./MusicSearchApi-DEPvDYNp.js";import{G as M}from"./ping-uBj4jS-m.js";import{l as k,a as P}from"./atoms-2biy5Kb2.js";import{M as J}from"./MusicDropBtn-BzQCv95c.js";import{a as L}from"./atoms-D7sBqVZV.js";import{L as H}from"./Loading-DD23BVK9.js";import"./index-Co6n4StN.js";import"./common-BDZuGjqk.js";const R="data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAAlQAAlQAAQUxQSAoAAAABB1DAiAhERP8DVlA4IFgAAABwCACdASqWAJYAPpFIoU0lpCMiIGgAsBIJaW7hdfAAO6HVUmyYh1VJsmIdVSbJiHVUmyYh1VJsmIdVSbJiHVUmyYh1VJsmIdVSbIIAAP7/k5gAAAAAAAAA";function W(t){return M({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.243 12.993c-0.192 0-0.384-0.073-0.53-0.22-0.293-0.293-0.293-0.768 0-1.061 2.047-2.047 2.047-5.378 0-7.425-0.293-0.293-0.293-0.768 0-1.061s0.768-0.293 1.061 0c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773c-0.146 0.146-0.338 0.22-0.53 0.22v0zM8.578 11.578c-0.192 0-0.384-0.073-0.53-0.22-0.293-0.293-0.293-0.768 0-1.061 1.267-1.267 1.267-3.329 0-4.596-0.293-0.293-0.293-0.768 0-1.061s0.768-0.293 1.061 0c1.852 1.852 1.852 4.865 0 6.718-0.146 0.146-0.338 0.22-0.53 0.22z"},child:[]},{tag:"path",attr:{d:"M6.5 15c-0.13 0-0.258-0.051-0.354-0.146l-3.854-3.854h-1.793c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.793l3.854-3.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v13c0 0.202-0.122 0.385-0.309 0.462-0.062 0.026-0.127 0.038-0.191 0.038z"},child:[]}]})(t)}function z(t){return M({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15 9.674v1.326h-1.326l-1.674-1.674-1.674 1.674h-1.326v-1.326l1.674-1.674-1.674-1.674v-1.326h1.326l1.674 1.674 1.674-1.674h1.326v1.326l-1.674 1.674 1.674 1.674z"},child:[]},{tag:"path",attr:{d:"M6.5 15c-0.13 0-0.258-0.051-0.354-0.146l-3.854-3.854h-1.793c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h1.793l3.854-3.854c0.143-0.143 0.358-0.186 0.545-0.108s0.309 0.26 0.309 0.462v13c0 0.202-0.122 0.385-0.309 0.462-0.062 0.026-0.127 0.038-0.191 0.038z"},child:[]}]})(t)}const E=()=>{const t=a.useRef(null),r=a.useRef(null),[v,n]=a.useState(!1),[g,A]=y(b),o=m(U),d=B(p),h=u(b),f=u(p),[i,x]=a.useState(!0),c=a.useRef(null);a.useEffect(()=>{if(r.current){const s=r.current.scrollWidth,l=r.current.clientWidth;s>l?n(!0):n(!1)}h(),f(),c.current&&c.current.play().catch(s=>{console.error("Audio play failed",s),x(!1)})},[]);const j=()=>{t.current.click()},I=()=>{c.current&&(i?c.current.pause():c.current.play(),x(!i))},N=async s=>{if(s.target.files&&s.target.files[0]){const l=s.target.files[0];if(l.size>5e6){alert("사진의 용량이 너무 커요. 다른 사진을 사용해 주세요."),h(),f();return}else{A(URL.createObjectURL(l));const S=await D(l);d(S)}}};return e.jsxs("div",{className:"MusicDropHeader",children:[e.jsx("img",{className:"album-image",src:o.albumImage,alt:""}),e.jsxs("div",{className:"cover",children:[e.jsx("div",{className:"black-cover"}),e.jsx("div",{className:"black-gradient"}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"header",children:[e.jsx(C,{}),e.jsxs("div",{className:"volume",onClick:I,children:[i?e.jsx(W,{}):e.jsx(z,{}),e.jsx("audio",{ref:c,src:"https://p.scdn.co/mp3-preview/f480dd07f843eb0ef125a609bb947ea2bcf5b215?cid=cfe923b2d660439caf2b557b21f31221"})]})]}),e.jsxs("div",{className:"content-bottom",children:[e.jsxs("div",{className:"info",children:[e.jsx("div",{className:"title",children:e.jsx("div",{ref:r,className:`scrolling-text ${v?"animated":""}`,children:o.title})}),e.jsx("div",{className:"artist",children:o.artist})]}),e.jsxs("div",{className:"upload-image-div",onClick:j,children:[e.jsx("img",{src:g||R,alt:"",className:"upload-image",onError:s=>{s.currentTarget.src=R}}),!g&&e.jsx(V,{})]}),e.jsx("input",{type:"file",ref:t,hidden:!0,onChange:N,className:"image-input"})]})]})]})]})},Q=({setIsLoading:t})=>{const[r,v]=a.useState(0),[n,g]=a.useState(""),A=a.useRef(null),o=m(k),d=m(P),h=m(p),f=w(),i=m(U),x=u(p),c=u(b),j=u(L),I=s=>{s.target.value.length<=50?(g(s.target.value),v(s.target.value.length)):alert("텍스트는 최대 50자까지 입력 가능합니다.")},N=async s=>{if(t(!0),s.preventDefault(),n.trim().length===0){alert("노래, 현재 감정, 상황, 관련 에피소드, 거리, 가수 등 떠오르는 말을 적어보세요."),t(!1);return}const l={albumImageUrl:i.albumImage,artist:i.artist,code:d.code,comment:n.trim(),imageUrl:h,latitude:o.lat,location:d.regionName,longitude:o.lng,title:i.title};await _(i.youtubeId,l)==="Song_400_2"&&alert(`하루 쓰롱 개수를 초과하였습니다.
내일 다시 쓰롱 해주세요.`),x(),c(),j(),f("/",{replace:!0})};return e.jsxs("div",{className:"MusicDropBody",children:[e.jsxs("div",{className:"header",children:[e.jsxs("p",{children:[e.jsx("span",{children:d.regionName}),"에"]}),"음악을 두고 갈까요?"]}),e.jsxs("form",{className:"form-div",children:[e.jsxs("div",{className:"div",children:[e.jsxs("div",{className:"input-div",children:[e.jsx("textarea",{onChange:I,placeholder:"노래, 현재 감정, 상황, 관련 에피소드, 거리, 가수 등 떠오르는 말을 적어보세요.",value:n,maxLength:50,className:"input-area none-scroll",ref:A,required:!0}),e.jsxs("div",{className:"input-count",children:[r,"/50"]})]}),e.jsx("div",{className:"warning-msg",children:"텍스트 및 사진은 생략이 가능하며 욕설, 성희롱, 비방과 같은 내용은 삭제됩니다."})]}),e.jsx(J,{onClick:N,btnText:"쓰롱하기"})]})]})},ae=()=>{const[t,r]=a.useState(!1);return e.jsx(e.Fragment,{children:t?e.jsx(H,{}):e.jsxs("div",{className:"MusicDrop",children:[e.jsx(E,{}),e.jsx(Q,{setIsLoading:r})]})})};export{ae as default};
