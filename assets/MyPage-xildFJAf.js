import{u as i,j as e,b as c}from"./index-DSs0NPxt.js";import{N as o}from"./NavHeader-D2DobjBC.js";import{a as d}from"./index-Dp7mA2MP.js";import"./index-BqXQZyDN.js";const m="flex justify-between cursor-pointer",x="flex items-center gap-[1.5vh]",h=({name:s,url:t})=>{const r=i(),l=()=>{r(t)};return e.jsxs("div",{className:m,onClick:l,children:[e.jsx("div",{children:s}),e.jsx("div",{className:x,children:e.jsx(d,{})})]})},v=({title:s,items:t})=>e.jsxs("div",{className:"flex flex-col gap-[1.5vh]",children:[e.jsx("div",{className:"text-textGray text-[2vh]",children:s}),e.jsx("div",{className:"flex flex-col gap-[1vh] text-[2.3vh] font-bold",children:t.map(r=>e.jsx(h,{...r},r.name))})]}),a="/assets/profileImg-DiGwv-dE.webp",n=[{title:"펀딩",items:[{name:"무딩중",url:"/user/fund/progress"},{name:"애프터 무딩",url:"/user/fund/completed"}]},{title:"설정",items:[{name:"알림 설정",url:"/user/notification/setting"}]},{title:"기타",items:[{name:"AI 카메라",url:"a"},{name:"좌석 예매",url:"/fund/reserve"},{name:"결제",url:"/fund/payment"}]}],u="my-[3vh] mx-[-3vh] border-0 h-[1px] bg-textGray",g=()=>e.jsxs("div",{children:[e.jsx(o,{leftWord:"마이무딩",rightWord:["IoSettingsOutline","edit"]}),e.jsxs("div",{className:"p-[3vh] flex flex-col gap-[5vh]",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-[1vh]",children:[e.jsx("img",{src:a,alt:"프로필",onError:s=>{s.currentTarget.src=a},className:"w-[12vh] h-[12vh] rounded-[35%]"}),e.jsx("div",{className:"text-[2.5vh] font-bold",children:"로그인 후 이용해 주세요"})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"px-[3vh] py-[4vh] bg-bgGray w-[100%] rounded-[2vh] shadow-test",children:n.map((s,t)=>e.jsxs(c.Fragment,{children:[e.jsx(v,{...s}),t<n.length-1&&e.jsx("hr",{className:u})]},t))})})]})]});export{g as default};