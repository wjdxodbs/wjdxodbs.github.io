import{r as t,a as p,j as o}from"./index-fQ9Gg1a8.js";import{c as l,a as d,b as m,d as h,e as x,f as g,g as f,h as j}from"./coupon7-DYTPKriQ.js";import{a as z,c as C}from"./common-BDZuGjqk.js";import{L as q}from"./Loading-DXPnl4ol.js";const y=z(),v=async e=>{try{return(await y.get(`/quizzes/coupons/${e}`)).data}catch(s){throw C.isAxiosError(s)&&console.error("이미 쿠폰을 뽑았습니다",s),s}},T=()=>{const[e,s]=t.useState(null),[r,c]=t.useState(!0),n=p();if(t.useEffect(()=>{if(!sessionStorage.getItem("quizCompleted")){n("/content",{replace:!0});return}(async()=>{c(!0);try{const a=await v("quiz");s(a)}catch{}c(!1)})()},[n]),r)return o.jsx("div",{children:o.jsx(q,{})});if(!e){n("/content",{replace:!0});return}const u=()=>{n("/user/mycoupons",{replace:!0})},i={"반경 밖 노래 조회 쿠폰":l,"24시간 무제한 쓰롱 쿠폰":d,"레벨 2배 쓰롱 쿠폰":m,"레벨만큼 추가 쓰롱 쿠폰":h,"쓰롱 5개 추가 쿠폰":x,"닉네임 변경 쿠폰":g,꽝:f,"물음표 음악 조회 쿠폰":j}[e.couponType];return o.jsxs("div",{className:"QuizCouponPage",children:[o.jsx("div",{className:"quiz-coupon-header",children:o.jsx("h2",{children:"무슨 쿠폰이 나왔을까요?"})}),o.jsxs("div",{className:"quiz-coupon-img",children:[o.jsx("img",{src:i,alt:e.couponType}),o.jsx("h2",{children:e.couponType})]}),o.jsx("div",{className:"quiz-coupon-footer",children:o.jsx("p",{children:e.couponDescription})}),o.jsx("div",{className:"quiz-coupon-button",children:o.jsx("button",{onClick:u,children:"쿠폰함으로 이동"})})]})};export{T as default};
