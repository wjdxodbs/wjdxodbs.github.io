import{r as d,u as v,j as e}from"./index-DSs0NPxt.js";import{N as m}from"./NoneNavHeader-C5a6j-F4.js";import{a as r}from"./axios-Bo0ATomq.js";import{b as p}from"./index-BqXQZyDN.js";import"./index-Dp7mA2MP.js";const N=()=>{const a="http://j10C204.p.ssafy.io",[n,t]=d.useState(!1),c=v(),l="cursor-pointer bg-transparent text-[2.5vh] border-none text-white",o=()=>{localStorage.removeItem("jwt"),localStorage.removeItem("user"),c("/login",{replace:!0})},i=async()=>{try{await r.delete(`${a}/api/log-out`,{headers:{Authorization:localStorage.getItem("jwt"),"Content-Type":"application/json"}}),o()}catch(s){console.log(s)}},h=async()=>{try{await r.delete(`${a}/api/users`,{headers:{Authorization:localStorage.getItem("jwt")}}),o()}catch(s){console.log(s)}},x=()=>{t(!0)};return e.jsxs("div",{className:"relative flex flex-col gap-[4vh] h-[100vh]",children:[e.jsx(m,{}),e.jsx("div",{className:" absolute cursor-pointer font-bold text-[2.5vh] right-[2.3vh] top-[1.7vh]",children:"완료"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("label",{htmlFor:"profile-img",className:"relative cursor-pointer",children:[e.jsx("input",{type:"file",accept:"image/*",id:"profile-img",className:"hidden "}),e.jsx("div",{className:"absolute bottom-[-0.5vh] right-[-0.5vh] bg-[#232121] w-[4vh] h-[4vh] flex items-center justify-center rounded-[50%] ",children:e.jsx(p,{className:"w-[3vh] h-[3vh] text-white"})})]})}),e.jsx("div",{className:"flex flex-col gap-[1vh] mx-[2vh]",children:e.jsx("div",{className:"font-bold text-[2.5vh]",children:"닉네임"})}),e.jsxs("div",{className:"absolute bottom-[25%] left-[50%] flex gap-[3vh] translate-x-[-50%]",children:[e.jsx("button",{className:l,onClick:i,children:"로그아웃"}),e.jsx("button",{className:l,onClick:x,children:"회원탈퇴"})]}),n&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 mx-auto filter-open bg-black/70",onClick:()=>t(!1)}),e.jsxs("div",{className:"a z-1 absolute flex flex-col gap-[2vh] p-[2vh] w-[30vh] top-[50%] left-[50%] bg-white rounded-[2vh] translate-x-[-50%] translate-y-[-50%]",children:[e.jsx("h2",{className:"a py-[1vh] text-[2.5vh] text-black font-bold",children:"회원 탈퇴"}),e.jsxs("div",{className:"flex flex-col gap-[1vh] text-[1.5vh] ",children:[e.jsx("div",{className:"text-gray-600",children:"회원 탈퇴 시 계정 정보가 삭제되어 복구가 불가해요"}),e.jsx("div",{className:"text-gray-600",children:"정말로 탈퇴하시겠어요?"})]}),e.jsxs("div",{className:"px-[1vh] flex gap-[2vh]",children:[e.jsx("button",{className:"cancel cursor-pointer border-none w-[100%] flex justify-center px-[1.5vh] text-[1.5vh] font-bold rounded-[1vh] bg-gray-400",onClick:()=>t(!1),children:"더 써볼래요"}),e.jsx("button",{className:"cancel cursor-pointer border-none w-[100%] flex justify-center px-[1.5vh] text-[1.5vh] font-bold rounded-[1vh] bg-red-500",onClick:h,children:"떠날래요"})]})]})]})]})};export{N as default};
