import{j as e,c as k,d as y,e as S,f as B,g as u,h as N,u as C,r as A}from"./index-BUx5xPjx.js";import{N as H}from"./NoneNavHeader-CpKjkU_C.js";import{c as E}from"./index-BWKp-rOp.js";import{t as L}from"./commonFunction-C6ZaZWw1.js";import{T as G}from"./Common-ouThrvOH.js";import{p as J}from"./영화포스터-Bxtv0lMT.js";import{a as g}from"./axios-Bo0ATomq.js";import"./index-DqYn5gvb.js";import"./index-D4hz-5tp.js";const p=({label:s,color:t})=>e.jsxs("div",{className:"flex items-center gap-[0.5vh]",children:[e.jsx("div",{className:"text-[2vh]",children:s}),e.jsx("div",{className:`w-[2.5vh] h-[2.3vh] bg-[${t}] rounded-t-[1vh] rounded-b-[0.3vh] shj`})]}),R=()=>e.jsxs("div",{className:"flex justify-end gap-[2vh]",children:[e.jsx(p,{label:"선택불가",color:"#3D3C4E"}),e.jsx(p,{label:"선택가능",color:"#A09FB2"}),e.jsx(p,{label:"선택좌석",color:"#C00202"})]}),v=k({key:"selectSeatsAtom",default:[]}),j=y({key:"selectSeatsLengthSelector",get:({get:s})=>s(v).length}),w=S({key:"isSelectedSelector",get:s=>({get:t})=>t(v).includes(s)}),U=S({key:"isSelectableSelector",get:({seatId:s,max:t})=>({get:a})=>{const n=a(j),c=a(w(s));return n<t||c}}),q=({seatId:s,max:t,isOccupied:a})=>{const n=B(v),c=u(w(s)),l=u(U({seatId:s,max:t})),o=r=>{const i=r.target.checked;!a&&l&&n(d=>i?[...d,s]:d.filter(m=>m!==s))},f=`w-[4vh] h-[3.5vh] rounded-b-[0.3vh] rounded-t-[1.3vh] flex justify-center items-center font-bold text-[1.5vh] cursor-pointer ${a||!l?"bg-[#3D3C4E]":c?"bg-red-600":"bg-[#A09FB2]"}`;return e.jsxs("label",{className:"relative",children:[e.jsx("div",{className:f,children:a||!l?e.jsx(E,{className:"text-[2.5vh]"}):s}),e.jsx("input",{className:"hidden ",type:"checkbox",disabled:a||!l,checked:c,onChange:o})]})},P=({max:s})=>{const t=u(j),a=u(v),n=N(v),c=C(),l=async()=>{if(t<s){L("인원을 선택해주세요");return}try{const[o,f]=a[0],r={fundingId:1,seat:{seat:[{col:f,line:o}]},userId:1},i=await g.post("http://j10C204.p.ssafy.io:8085/reservations/make",r,{headers:{"Content-Type":"application/json"}}),d=await g.get(`http://j10C204.p.ssafy.io:8085/reservations/create/${i.data}`);n(),c(`/user/ticket/${i.data}`,{state:d.data,replace:!0})}catch(o){console.log(o)}};return e.jsxs("div",{className:"text-black bg-white w-[100%] h-[20vh] rounded-t-[3vh]",children:[e.jsxs("div",{className:"p-[2vh] flex gap-[3vh]",children:[e.jsxs("div",{className:"flex flex-col justify-between grow text-[2.5vh]",children:[e.jsxs("div",{className:"flex gap-[2vh]",children:[e.jsx("div",{className:"font-bold",children:"CGV 강남"}),e.jsx("div",{children:"3.15(금) 15:00"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"font-bold",children:"엘리멘탈"}),e.jsx("div",{children:`인원 ${t} / ${s}`})]})]}),e.jsx("img",{className:"h-[10vh] object-cover rounded-[0.8vh]",src:J,alt:"영화포스터"})]}),e.jsx("button",{className:" w-[100%] h-[6vh] bg-red-600 shadow-bgRed text-white font-bold text-[2.5vh] ",onClick:l,children:"예매"}),e.jsx(G,{})]})},Q="data:image/webp;base64,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",T=({onClose:s,onConfirm:t})=>e.jsx("div",{className:"absolute w-[100%] h-[100vh] flex justify-center items-center bg-black bg-opacity-70",children:e.jsxs("div",{className:"b bg-bgGray rounded-[1vh] w-[40vh] h-[20vh] p-[3vh] flex flex-col justify-between",children:[e.jsxs("div",{className:"text-[2vh]",children:[e.jsx("p",{children:"선택한 좌석 정보가 취소됩니다."}),e.jsx("p",{children:"계속 하시겠습니까?"})]}),e.jsxs("div",{className:"flex justify-end gap-[5vh]",children:[e.jsx("button",{type:"button",onClick:s,className:"text-red-600 bg-transparent border-none cursor-pointer",children:"취소"}),e.jsx("button",{type:"submit",onClick:t,className:"text-red-600 bg-transparent border-none cursor-pointer",children:"확인"})]})]})}),z=()=>{const s=N(v),t=u(j),[a,n]=A.useState(!1),[c]=A.useState(1),l=["B5","C6","D7"],o=C(),f=()=>{t?n(!0):o(-1)},r=()=>n(!1),i=()=>{s(),r(),o(-1)},d="ABCDEFGH".split(""),m=Array.from({length:8},(h,x)=>x+1);return A.useEffect(()=>{const h=x=>{t&&(x.preventDefault(),x.returnValue="")};return window.addEventListener("beforeunload",h),()=>window.removeEventListener("beforeunload",h)},[t]),e.jsxs("div",{className:"h-[100vh] flex flex-col",children:[e.jsx(H,{centerText:"좌석예매",onBackButtonClick:f}),e.jsxs("div",{className:"flex flex-col justify-between h-[93vh]",children:[e.jsxs("div",{className:"flex-1 flex flex-col gap-[5vh] p-[3vh]",children:[e.jsx(R,{}),e.jsxs("div",{className:"flex flex-col items-center gap-[5vh]",children:[e.jsxs("div",{className:"relative flex flex-col items-center",children:[e.jsx("img",{className:"w-[100%] h-[5vh]",src:Q,alt:"영화관스크린"}),e.jsx("div",{className:"text-[2vh] text-[#A09FB0] font-bold",children:"SCREEN"})]}),e.jsx("div",{className:"flex flex-col gap-[2vh]",children:d.map(h=>e.jsx("div",{className:"flex gap-[2vh]",children:e.jsx("div",{className:"flex items-center justify-center gap-[1vh]",children:m.map(x=>{const b=`${h}${x}`;return e.jsx(q,{seatId:b,max:c,isOccupied:l.includes(b)},b)})})},h))})]})]}),e.jsx(P,{max:c})]}),a&&e.jsx(T,{onClose:r,onConfirm:i})]})};export{z as default};
