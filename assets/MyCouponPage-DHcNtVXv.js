import{r as c,a as x,R as N,j as s}from"./index-C8SrrZYJ.js";import{H as f}from"./Header-bOMrCzSG.js";import{d as i}from"./dayjs.min-CTZOCiEY.js";import{g as j,p as y}from"./MyCouponAPi-B2mRj1_x.js";import{d as v}from"./atoms-C5xLvwh9.js";import{L as C}from"./Loading-CnisqHh-.js";import"./iconBase-MD6yoUqO.js";import"./AddressContent-yYSjMnGa.js";import"./common-BDZuGjqk.js";const g=()=>{const[n,p]=c.useState([]),l=x(),m=N(v),[u,d]=c.useState(!1);c.useEffect(()=>{d(!0),r()},[]);const r=async()=>{const e=await j();p(e),d(!1)},h=async e=>{if(window.confirm("쿠폰을 적용하시겠습니까?")){const o=n.find(a=>a.couponId===e);if(!o)return;if(o.couponName==="닉네임 변경 쿠폰"){m(o.couponId),l("/user/mypage/change-nickname");return}if(n.some(a=>a.couponName===o.couponName&&a.couponStatus==="사용 중")){alert("이미 같은 쿠폰을 사용중입니다.");return}await y(e),r()}};return s.jsx("div",{className:"MyCouponBody",children:u?s.jsx(C,{}):n.length>0?n.map(e=>{const t=i(e.couponEndDate).diff(i(),"day"),o=t<=5;return s.jsxs("div",{className:"coupon-body",children:[s.jsxs("div",{className:"coupon-header",children:[s.jsx("div",{className:"coupon-title",children:e.couponName}),s.jsx("div",{className:"coupon-desc",children:e.couponDescription})]}),s.jsx("div",{className:`coupon-apply ${e.couponStatus==="사용 전"?"":"inactive"}`,onClick:()=>e.couponStatus==="사용 전"&&h(e.couponId),children:s.jsx("div",{className:`coupon-apply-btn ${e.couponStatus!=="사용 전"&&"coupon-apply-active"}`,children:e.couponStatus})}),s.jsx("hr",{}),s.jsxs("div",{className:"coupon-end-date",children:[s.jsx("div",{className:`${o&&"coupon-end-date-how-imminent"}`,children:`D-${t}`}),s.jsxs("div",{className:"coupon-end-date-when",children:[i(e.couponEndDate).format("YY/MM/DD HH:mm:ss"),"까지"]})]})]},e.couponId)}):s.jsx("div",{className:"SearchedWords",children:s.jsxs("div",{className:"no-word-container",children:[s.jsx("div",{className:"title",children:"앗!"}),s.jsx("div",{className:"subtitle",children:"사용 가능한 쿠폰이 없습니다."})]})})})},$=()=>s.jsxs("div",{className:"MyCouponPage",children:[s.jsx(f,{centerText:"쿠폰함"}),s.jsx("div",{className:"body none-scroll",children:s.jsx(g,{})})]});export{$ as default};
