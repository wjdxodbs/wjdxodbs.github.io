import{u as l,j as e,b as i}from"./index-DNYc3rJI.js";import{N as c}from"./NavHeader-rVd9iril.js";import{a as o}from"./index-D-yVeQTx.js";import"./index-C1hhsflt.js";const d="flex justify-between cursor-pointer",m="flex items-center gap-[1.5vh]",x=({name:t,url:s})=>{const r=l(),n=()=>{r(s)};return e.jsxs("div",{className:d,onClick:n,children:[e.jsx("div",{children:t}),e.jsx("div",{className:m,children:e.jsx(o,{})})]})},h=({title:t,items:s})=>e.jsxs("div",{className:"flex flex-col gap-[1.5vh]",children:[e.jsx("div",{className:"text-textGray text-[2vh]",children:t}),e.jsx("div",{className:"flex flex-col gap-[1vh] text-[2.3vh] font-bold",children:s.map(r=>e.jsx(x,{...r},r.name))})]}),v="/assets/char-DiOePQ4D.webp",a=[{title:"펀딩",items:[{name:"무딩중",url:"/user/fund/progress"},{name:"애프터 무딩",url:"/user/fund/completed"}]},{title:"설정",items:[{name:"알림 설정",url:"/user/notification/setting"}]},{title:"기타",items:[{name:"AI 카메라",url:"a"},{name:"좌석 예매",url:"/fund/reserve"},{name:"결제",url:"/fund/payment"}]}],u="my-[3vh] mx-[-3vh] border-0 h-[1px] bg-textGray",g=()=>e.jsxs("div",{children:[e.jsx(c,{leftWord:"마이무딩",rightWord:["IoSettingsOutline","edit"]}),e.jsxs("div",{className:"p-[3vh] flex flex-col gap-[5vh]",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-[1vh]",children:[e.jsx("img",{src:v,alt:"",className:"w-[12vh] h-[12vh] rounded-[35%]"}),e.jsx("div",{className:"text-[2.5vh] font-bold",children:"로그인 후 이용해 주세요"})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"px-[3vh] py-[4vh] bg-bgGray w-[100%] rounded-[2vh]",children:a.map((t,s)=>e.jsxs(i.Fragment,{children:[e.jsx(h,{...t}),s<a.length-1&&e.jsx("hr",{className:u})]},s))})})]})]});export{g as default};
