import{j as e,r as l}from"./index-D9dJCgm7.js";import{N as n}from"./NoneNavHeader-CitUPkcm.js";import{g as a}from"./commonFunction-F8INBqL7.js";import"./index-BSNLrtaP.js";import"./index-Dhy3bGrj.js";const i=({state:t,handleChange:s,value:d,text:r})=>e.jsxs("label",{className:`flex-1 flex items-center justify-center text-[2vh] cursor-pointer ${t===d&&"border-t-2 border-t-transparent border-b-2 border-b-red-600 font-bold text-white"}`,children:[e.jsx("input",{checked:t===d,value:d,name:"fund_state",type:"radio",className:"hidden input",onChange:s}),r]}),o=({state:t,handleChange:s})=>e.jsxs("div",{className:"w-[100%] h-[5vh] flex border-b-[1px] border-b-red-600 text-textGray",children:[e.jsx(i,{state:t,handleChange:s,value:"success",text:"펀딩성공"}),e.jsx(i,{state:t,handleChange:s,value:"fail",text:"펀딩실패"})]}),h=({item:t})=>e.jsxs("div",{className:"flex flex-col bg-bgGray p-[2vh] rounded-[1vh] gap-[2vh] shadow-bgTTT",children:[e.jsxs("div",{className:"w-[100%] h-[13vh] flex gap-[2vh]",children:[e.jsx("img",{className:"w-[9vh] h-[13vh] object-cover rounded-[0.5vh] brightness-[90%]",src:t.url,alt:"",loading:"lazy"}),e.jsxs("div",{className:" flex flex-col justify-between relative w-[100%]",children:[e.jsxs("div",{className:"flex items-center justify-between ",children:[e.jsx("div",{className:"text-[2.5vh] font-bold sm:w-[200px] w-[40vw] overflow-hidden text-ellipsis whitespace-nowrap ",children:t.title}),e.jsx("div",{className:" text-[2vh] font-bold text-textGray",children:`${a(t.date)}`})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[1.5vh] py-[1vh] font-bold",children:`${t.per}% 펀딩성공`}),e.jsx("div",{className:"w-[100%] h-[1.5vh] rounded-[1vh] success",children:e.jsx("div",{style:{width:`${t.per}%`},className:"bg-[#2CD9AA] rounded-[1vh] h-[100%] brightness-[70%]"})})]})]})]}),e.jsx("button",{className:"p-[1vh] border border-textGray rounded-[1vh] text-[2vh]",children:"티켓확인"})]}),p=()=>{const[t]=l.useState([{id:0,title:"눈부신 하루 - 옴니버스영화 : 보물섬, 엄마 찾아 삼만리, 공항남녀",url:"https://blog.kakaocdn.net/dn/ze2jB/btqBSNSSM9q/ZfRVZvWMDlpJUvSa6SEHC0/img.jpg",per:90,date:"2024.03.24"},{id:1,title:"더 문",url:"https://thumb.mtstarnews.com/06/2023/08/2023080115114051612_1.jpg/dims/optimize",per:92,date:"2024.03.11"},{id:2,title:"파묘",url:"https://spnimage.edaily.co.kr/images/photo/files/NP/S/2024/03/PS24030200047.jpg",per:91,date:"2024.02.27"},{id:3,title:"폼페이",url:"https://cdn.huffingtonpost.kr/news/photo/201506/6399_10649.jpeg",per:98,date:"2024.02.22"},{id:4,title:"기생충",url:"https://blog.kakaocdn.net/dn/ze2jB/btqBSNSSM9q/ZfRVZvWMDlpJUvSa6SEHC0/img.jpg",per:95,date:"2024.02.01"},{id:5,title:"더 문",url:"https://thumb.mtstarnews.com/06/2023/08/2023080115114051612_1.jpg/dims/optimize",per:90,date:"2024.01.19"},{id:6,title:"파묘",url:"https://spnimage.edaily.co.kr/images/photo/files/NP/S/2024/03/PS24030200047.jpg",per:100,date:"2024.01.10"},{id:7,title:"폼페이",url:"https://cdn.huffingtonpost.kr/news/photo/201506/6399_10649.jpeg",per:98,date:"2024.01.08"}]);return e.jsx(e.Fragment,{children:t.map(s=>e.jsx(h,{item:s},s.id))})},c=({item:t})=>e.jsx("div",{className:"flex flex-col bg-bgGray p-[2vh] rounded-[1vh] gap-[2vh] shadow-bgTTT",children:e.jsxs("div",{className:"w-[100%] h-[13vh] flex gap-[2vh]",children:[e.jsx("img",{className:"w-[9vh] h-[13vh] object-cover rounded-[0.5vh] brightness-[90%]",src:t.url,alt:"",loading:"lazy"}),e.jsxs("div",{className:" flex flex-col justify-between relative w-[100%]",children:[e.jsxs("div",{className:"flex items-center justify-between ",children:[e.jsx("div",{className:"text-[2.5vh] font-bold sm:w-[200px] w-[40vw] overflow-hidden text-ellipsis whitespace-nowrap ",children:t.title}),e.jsx("div",{className:" text-[2vh] font-bold text-textGray",children:`${a(t.date)}`})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[1.5vh] py-[1vh] font-bold",children:`${t.per}% 펀딩실패`}),e.jsx("div",{className:"w-[100%] h-[1.5vh] rounded-[1vh] fail",children:e.jsx("div",{style:{width:`${t.per}%`},className:"bg-[#C00202] rounded-[1vh] h-[100%] brightness-100"})})]})]})]})}),x=()=>{const[t]=l.useState([{id:0,title:"눈부신 하루 - 옴니버스영화 : 보물섬, 엄마 찾아 삼만리, 공항남녀",url:"https://blog.kakaocdn.net/dn/ze2jB/btqBSNSSM9q/ZfRVZvWMDlpJUvSa6SEHC0/img.jpg",per:80,date:"2024.03.24"},{id:1,title:"더 문",url:"https://thumb.mtstarnews.com/06/2023/08/2023080115114051612_1.jpg/dims/optimize",per:72,date:"2024.03.11"},{id:2,title:"파묘",url:"https://spnimage.edaily.co.kr/images/photo/files/NP/S/2024/03/PS24030200047.jpg",per:11,date:"2024.02.27"},{id:3,title:"폼페이",url:"https://cdn.huffingtonpost.kr/news/photo/201506/6399_10649.jpeg",per:28,date:"2024.02.22"},{id:4,title:"기생충",url:"https://blog.kakaocdn.net/dn/ze2jB/btqBSNSSM9q/ZfRVZvWMDlpJUvSa6SEHC0/img.jpg",per:75,date:"2024.02.01"},{id:5,title:"더 문",url:"https://thumb.mtstarnews.com/06/2023/08/2023080115114051612_1.jpg/dims/optimize",per:30,date:"2024.01.19"},{id:6,title:"파묘",url:"https://spnimage.edaily.co.kr/images/photo/files/NP/S/2024/03/PS24030200047.jpg",per:20,date:"2024.01.10"},{id:7,title:"폼페이",url:"https://cdn.huffingtonpost.kr/news/photo/201506/6399_10649.jpeg",per:88,date:"2024.01.08"}]);return e.jsx(e.Fragment,{children:t.map(s=>e.jsx(c,{item:s},s.id))})},f=()=>{const[t,s]=l.useState("success"),d=r=>{s(r.target.value)};return e.jsxs("div",{className:"FundingCompletedPage",children:[e.jsx(n,{centerText:"애프터 무딩"}),e.jsxs("div",{className:"FundingCompletedPage-body ",children:[e.jsx(o,{state:t,handleChange:d}),e.jsx("div",{className:"none-scroll h-[88vh] overflow-auto p-[3vh] flex flex-col gap-[3vh] ",children:t==="success"?e.jsx(p,{}):e.jsx(x,{})})]})]})};export{f as default};
