import{r as c,j as e}from"./index-BUx5xPjx.js";import{N as p}from"./NoneNavHeader-CpKjkU_C.js";import{I as v,_ as x}from"./index-D4hz-5tp.js";import"./index-DqYn5gvb.js";import"./index-BWKp-rOp.js";const g=({id:t,handleClickFalse:a})=>{const[n,h]=c.useState(""),[o,r]=c.useState("");console.log(t);const l=s=>{s.target.value!=="기타"&&r(""),h(s.target.value)},d=s=>r(s.target.value),i=()=>{const s=n==="기타"?o:n;if(!s){x("사유를 알려주세요",{duration:1500});return}console.log(s)};return e.jsx("div",{className:"absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-80 p-[3vh]",children:e.jsxs("div",{className:"bg-bgGray p-[3vh] flex flex-col  gap-[3vh] rounded-[2vh] shadow-test",children:[e.jsxs("div",{children:[e.jsx("div",{className:"a text-[2.5vh] font-bold ",children:"펀딩 취소 사유를 선택해 주세요."}),e.jsx("div",{className:"text-[1.5vh] text-textGray",children:"펀딩 취소 시, 결제 금액이 환불 됩니다."})]}),e.jsxs("div",{className:"text-[2vh] flex flex-col gap-[0.5vh]",children:[e.jsxs("label",{className:"flex gap-[1vh]",children:[e.jsx("input",{type:"radio",name:"type",value:"단순 변심",onChange:l}),"단순 변심"]}),e.jsxs("label",{className:"flex gap-[1vh]",children:[e.jsx("input",{type:"radio",name:"type",value:"펀딩 변경",onChange:l}),"펀딩 변경"]}),e.jsxs("label",{className:"flex gap-[1vh]",children:[e.jsx("input",{type:"radio",name:"type",value:"기타",onChange:l}),"기타"]}),e.jsx("input",{disabled:n!=="기타",placeholder:"사유를 알려주세요",type:"text",value:o,onChange:d,className:"rounded-[0.5vh] text-black p-[1vh] w-[100%]"})]}),e.jsxs("div",{className:"w-[100%] flex gap-[2vh] text-[2vh] font-bold",children:[e.jsx("button",{className:"flex-1 bg-[#EFEFEF] text-bgGray p-[1.5vh] rounded-[1vh] shadow-bgwhite",onClick:a,children:"닫기"}),e.jsx("button",{className:"flex-1 text-white bg-red-600 p-[1.5vh] rounded-[1vh] shadow-bgRed",onClick:i,children:"취소"})]}),e.jsx(v,{containerStyle:{margin:"0 auto"},toastOptions:{style:{background:"#262626",color:"#fff",fontSize:"2vh"}}})]})})},u=({item:t})=>{const[a,n]=c.useState(!1),h=()=>n(!0),o=()=>n(!1),r=l=>{const d=new Date(l),i=new Date;d.setHours(0,0,0,0),i.setHours(0,0,0,0);const s=d.getTime()-i.getTime();return Math.round(s/(1e3*60*60*24))};return e.jsxs("div",{className:"flex flex-col bg-bgGray p-[2vh] rounded-[1vh] gap-[2vh] shadow-test",children:[e.jsxs("div",{className:"w-[100%] h-[13vh] flex gap-[2vh]",children:[e.jsx("img",{className:"w-[9vh] h-[13vh] object-cover rounded-[0.5vh] brightness-[90%]",src:t.url,alt:"",loading:"lazy"}),e.jsxs("div",{className:" flex flex-col justify-between relative w-[100%]",children:[e.jsxs("div",{className:"flex items-center justify-between ",children:[e.jsx("div",{className:"text-[2.5vh] font-bold sm:w-[200px] w-[40vw] overflow-hidden text-ellipsis whitespace-nowrap ",children:t.title}),e.jsx("div",{className:" text-[2vh] font-bold text-textGray",children:`D-${r(t.date)}`})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[1.5vh] py-[1vh] font-bold",children:`${t.per}% 진행중`}),e.jsx("div",{className:"w-[100%] h-[1.5vh] rounded-[1vh] parent",children:e.jsx("div",{style:{width:`${t.per}%`},className:"bg-[#fffbb1] rounded-[1vh] h-[100%] brightness-100"})})]})]})]}),e.jsx("button",{className:"p-[1vh] border border-textGray rounded-[1vh] text-[2vh]",onClick:h,children:"펀딩취소"}),a&&e.jsx(g,{id:t.id,handleClickFalse:o})]})},w=()=>{const[t]=c.useState([{id:0,title:"눈부신 하루 - 옴니버스영화 : 보물섬, 엄마 찾아 삼만리, 공항남녀",url:"https://blog.kakaocdn.net/dn/ze2jB/btqBSNSSM9q/ZfRVZvWMDlpJUvSa6SEHC0/img.jpg",per:75,date:"2024.03.26"},{id:1,title:"더 문",url:"https://thumb.mtstarnews.com/06/2023/08/2023080115114051612_1.jpg/dims/optimize",per:20,date:"2024.04.01"},{id:2,title:"파묘",url:"https://spnimage.edaily.co.kr/images/photo/files/NP/S/2024/03/PS24030200047.jpg",per:40,date:"2024.05.01"},{id:3,title:"폼페이",url:"https://cdn.huffingtonpost.kr/news/photo/201506/6399_10649.jpeg",per:98,date:"2024.03.30"},{id:4,title:"기생충",url:"https://blog.kakaocdn.net/dn/ze2jB/btqBSNSSM9q/ZfRVZvWMDlpJUvSa6SEHC0/img.jpg",per:75,date:"2024.05.01"},{id:5,title:"더 문",url:"https://thumb.mtstarnews.com/06/2023/08/2023080115114051612_1.jpg/dims/optimize",per:20,date:"2024.05.01"},{id:6,title:"파묘",url:"https://spnimage.edaily.co.kr/images/photo/files/NP/S/2024/03/PS24030200047.jpg",per:40,date:"2024.05.01"},{id:7,title:"폼페이",url:"https://cdn.huffingtonpost.kr/news/photo/201506/6399_10649.jpeg",per:98,date:"2024.05.01"}]);return e.jsxs("div",{className:"FundingProgress",children:[e.jsx(p,{centerText:"무딩중"}),e.jsx("div",{className:"none-scroll h-[93vh] overflow-auto p-[3vh] flex flex-col gap-[3vh] ",children:t.map(a=>e.jsx(u,{item:a},a.id))})]})};export{w as default};
