import{u as A,j as e,S as l,a as f,r as o,L as n}from"./index-j_-y08VX.js";import{E as d}from"./effect-coverflow-Fr520hH6.js";const c=[{page:0,sub:"낚시를 시작하는 초보낚시꾼을 위한",title:"가이드북",url:"/tutorial"},{page:1,sub:"물고기, 널 알고싶어",title:"FishUniverse",url:"/fishbook"},{page:2,sub:"내가 잡은 물고기로 만드는 ",title:"아쿠아리움",url:"/aquarium"}],g=({setBack:t})=>{const i=A(),r=s=>{i(s)};return e.jsx("div",{className:"slider",children:e.jsx(l,{modules:[d],effect:"coverflow",slidesPerView:1.4,centeredSlides:!0,mousewheel:{invert:!1},onSlideChange:s=>{t(s.activeIndex)},spaceBetween:-100,slideToClickedSlide:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},children:c.map((s,a)=>e.jsxs(f,{className:`slider${s.page}`,onClick:()=>r(s.url),children:[e.jsx("div",{className:"slider-sub",children:s.sub}),e.jsx("div",{className:"slider-title",children:s.title})]},a))})})},u="/assets/Logo-WtStl40p.svg",x="data:image/webp;base64,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",w=()=>{const[t,i]=o.useState(0),r=A(),s=a=>i(a);return o.useEffect(()=>{localStorage.getItem("jwt")||r("/login")},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:`home slider${t}`,children:[e.jsxs("div",{className:"Home_header",children:[e.jsx("img",{src:u,alt:"logo",className:"home-logo"}),e.jsx(n,{to:"/chatbot","aria-label":"챗봇 이동",children:e.jsx("img",{src:x,className:"chatbot-icon",alt:""})})]}),e.jsx(g,{setBack:s})]})})};export{w as default};