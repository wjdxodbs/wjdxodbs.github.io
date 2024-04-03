import{r as i,j as e,t as p,d as m}from"./index-u2Gvw5X7.js";import{a as g}from"./commons-D5rr2GKD.js";import{N as j}from"./NoneNavHeader-a-WfEfyy.js";import{T as N}from"./Common-CeOQ02Lw.js";import{U as b}from"./UserFundProgressBar-pubGXCQD.js";import{N as y}from"./NoneData-DbgR05Mt.js";import{L as w}from"./Loading-BgOpaWmb.js";import"./axios-Bo0ATomq.js";import"./index-Bet7odq9.js";import"./iconBase-mEdiO_nV.js";import"./index-COOfumwh.js";import"./profileImg-Fhzvd9kH.js";const C=["단순 변심","펀딩 변경","기타"],D=({id:s,orderUuid:r,handleClickFalse:c,removeFund:l})=>{const[o,a]=i.useState(""),[n,d]=i.useState(""),h=t=>{const{value:u}=t.target;u!=="기타"&&d(""),a(u)};console.log(l);const x=t=>d(t.target.value),v=async()=>{const t=o==="기타"?n:o;if(!t){p("사유를 알려주세요");return}const u={cancelReason:t,orderId:s};try{const f=await g().post(`/fundings/orders/${r}/refund`,u);console.log(f.data),l(s),c()}catch(f){console.log(f)}};return e.jsx("div",{className:"absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-80 p-[3vh]",children:e.jsxs("div",{className:"bg-bgGray p-[3vh] flex flex-col gap-[3vh] rounded-[2vh] shadow-test",children:[e.jsxs("div",{children:[e.jsx("div",{className:"a text-[2.5vh] font-bold ",children:"펀딩 취소 사유를 선택해 주세요."}),e.jsx("div",{className:"text-[1.5vh] text-textGray",children:"펀딩 취소 시, 결제 금액이 환불 됩니다."})]}),e.jsxs("div",{className:"text-[2vh] flex flex-col gap-[0.5vh]",children:[C.map(t=>e.jsxs("label",{className:"flex gap-[1vh]",children:[e.jsx("input",{type:"radio",name:"type",value:t,onChange:h,checked:o===t}),t]},t)),e.jsx("input",{disabled:o!=="기타",placeholder:"사유를 알려주세요 (필수)",type:"text",value:n,onChange:x,className:"rounded-[0.5vh] text-black p-[1vh] w-full"})]}),e.jsxs("div",{className:"w-full flex gap-[2vh] text-[2vh] font-bold",children:[e.jsx("button",{className:"flex-1 bg-[#EFEFEF] text-bgGray p-[1.5vh] rounded-[1vh]",onClick:c,children:"닫기"}),e.jsx("button",{className:"flex-1 text-white bg-red-600 p-[1.5vh] rounded-[1vh]",onClick:v,children:"취소"})]}),e.jsx(N,{})]})})},F=({item:s,removeFund:r})=>{const[c,l]=i.useState(!1),o=m(),a=()=>o(`/fund/list/${s.movieId}`,{state:{type:"list"}}),n=d=>{const h=new Date(d),x=new Date;h.setHours(0,0,0,0),x.setHours(0,0,0,0);const v=h.getTime()-x.getTime();return Math.round(v/(1e3*60*60*24))};return e.jsxs("div",{className:"flex flex-col bg-bgGray p-[2vh] rounded-lg gap-[2vh] shadow-test",children:[e.jsxs("div",{className:"w-full flex gap-[2vh]",children:[e.jsx("img",{className:"w-[9vh] h-[13vh] object-cover rounded-md",src:s.moviePoster,alt:"",loading:"lazy",onClick:a}),e.jsxs("div",{className:"relative flex flex-col justify-between w-full ",children:[e.jsxs("div",{className:"flex items-center w-full gap-[2vh]",children:[e.jsx("div",{className:"flex-1 text-[2.5vh] font-bold w-0 overflow-hidden text-ellipsis whitespace-nowrap ",onClick:a,children:s.movieTitle}),e.jsx("div",{className:" text-[1.5vh] text-textGray",children:`D-${n(s.endAt)}`})]}),e.jsx(b,{type:"progress-bar",attendCnt:s.participantCount,goalCnt:s.recruitedCount})]})]}),e.jsx("button",{className:"p-[1vh] border border-textGray rounded-[1vh] text-[2vh]",onClick:()=>l(!0),children:"펀딩취소"}),c&&e.jsx(D,{id:s.id,orderUuid:s.orderUuid,handleClickFalse:()=>l(!1),removeFund:r})]})},A=()=>{const[s,r]=i.useState([]),[c,l]=i.useState(!0),o=a=>r(n=>n.filter(d=>d.id!==a));return i.useEffect(()=>{(async()=>{try{const n=await g().get("/fundings/participation");r(n.data.joinFundingResponseList)}catch(n){console.log(n)}finally{l(!1)}})()},[]),e.jsxs("div",{className:"flex flex-col FundingProgress",children:[e.jsx(j,{centerText:"무딩중"}),c?e.jsx(w,{}):e.jsx("div",{className:"none-scroll h-[93vh] overflow-auto p-[3vh] flex flex-col gap-[3vh] relative",children:s.length?s.map(a=>e.jsx(F,{item:a,removeFund:o},a.id)):e.jsx(y,{content:"진행 중인 펀딩이 없습니다."})})]})};export{A as default};
