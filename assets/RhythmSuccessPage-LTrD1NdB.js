import{r as o,a as l,j as s}from"./index-BPBxqTnj.js";import{Q as r,a as m,g as u}from"./IsCouponApi-C6cQC6pM.js";import{a as d,e as p,b as h,d as x,c as j,f as N,h as g,g as f}from"./coupon7-DYTPKriQ.js";import"./common-DQp8kAyd.js";const q=()=>{const[a,n]=o.useState(!1),e=l();o.useEffect(()=>{(sessionStorage.getItem("scoreAchieved")||"false")!=="true"&&e("/content",{replace:!0})},[e]),o.useEffect(()=>{const i=async()=>{try{(await u("game")).couponStatus?e("/close",{replace:!0}):e("/rhythm/coupon",{replace:!0})}catch(c){console.error("Error checking coupon validity:",c)}};if(a){const c=setTimeout(()=>{i()},2500);return()=>clearTimeout(c)}},[a,e]);const t=async()=>{n(!0)};return s.jsxs("div",{className:"QuizSuccessPage",children:[s.jsxs("div",{className:"quiz-success-header",children:[s.jsxs("h2",{children:["축하합니다 ",s.jsx("br",{}),"당신의 리듬감 무엇!?"]}),s.jsx("p",{className:"ment",children:"상자를 클릭하여 쿠폰을 뽑아볼까요?"})]}),s.jsx("div",{className:"quiz-success-lottie",onClick:t,children:a?s.jsx(r,{}):s.jsx(m,{})}),s.jsxs("div",{children:[s.jsx("h3",{children:"상자에서 획득 할 수 있는 쿠폰"}),s.jsxs("div",{className:"quiz-success-footer",children:[s.jsxs("div",{className:"quiz-success-img",children:[s.jsxs("div",{className:"content",children:[s.jsx("img",{src:d,alt:"abroad",className:"img"}),s.jsx("p",{className:"coupon-info",children:"무제한 쓰롱"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:p,alt:"unlimited",className:"img"}),s.jsx("p",{className:"coupon-info",children:"5개 쓰롱 추가"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:h,alt:"boom",className:"img"}),s.jsx("p",{className:"coupon-info",children:"2배 쓰롱 추가"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:x,alt:"boom",className:"img"}),s.jsx("p",{className:"coupon-info",children:"레벨 쓰롱 추가"})]})]}),s.jsxs("div",{className:"quiz-success-img",children:[s.jsxs("div",{className:"content",children:[s.jsx("img",{src:j,alt:"abroad",className:"img"}),s.jsx("p",{className:"coupon-info",children:"범위 밖 노래 조회"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:N,alt:"unlimited",className:"img"}),s.jsx("p",{className:"coupon-info",children:"닉네임 변경"})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:g,alt:"boom",className:"img"}),s.jsx("p",{className:"coupon-info",children:'"?" 음악 조회'})]}),s.jsxs("div",{className:"content",children:[s.jsx("img",{src:f,alt:"boom",className:"img"}),s.jsx("p",{className:"coupon-info",children:"꽝"})]})]})]})]})]})};export{q as default};