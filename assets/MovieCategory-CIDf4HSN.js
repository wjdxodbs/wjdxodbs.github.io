import{r as a,j as e,L as r}from"./index-D9dJCgm7.js";import{p as t}from"./영화포스터-Bxtv0lMT.js";import{M as n}from"./MovieListItem-ByK39wBm.js";const o=()=>{const[i]=a.useState([{id:1,name:"엘리멘탈",state:"무딩중",count:3663,url:t},{id:2,name:"불한당",state:"무딩예정",count:1763,url:t},{id:3,name:"엘리멘탈",state:"무딩중",count:3663,url:t},{id:4,name:"불한당",state:"무딩예정",count:1763,url:t},{id:5,name:"엘리멘탈",state:"무딩중",count:3663,url:t},{id:6,name:"불한당",state:"무딩예정",count:1763,url:t},{id:7,name:"불한당",state:"무딩예정",count:1763,url:t},{id:8,name:"불한당",state:"무딩예정",count:1763,url:t},{id:9,name:"불한당",state:"무딩예정",count:1763,url:t}]);return e.jsxs("div",{className:"movielist-container",children:[e.jsx("div",{className:"",children:"아이템"}),e.jsx("div",{className:"movie-list none-scroller px-[1.5vh] mt-20 grid grid-cols-3 gap-[1.2vh] overflow-auto pb-40",children:i.map(s=>e.jsx(r,{to:`/fund/list/${s.id}`,children:e.jsx(n,{state:s.state,url:s.url})},s.id))})]})},u=()=>e.jsxs("div",{className:"movielist-container",children:[e.jsx("div",{children:"영화리스트"}),e.jsx("div",{children:e.jsx(o,{})})]});export{u as default};