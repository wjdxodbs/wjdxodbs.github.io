import{r as t,b as i,a as u,j as e}from"./index-fQ9Gg1a8.js";import{H as x}from"./Header-DzIZP-s8.js";import{m as h,d as j}from"./atoms-DTW23K2u.js";import{a as g}from"./MyCouponAPi-C70N0fhb.js";import{T as v,t as k}from"./toastMsg-C1yR8Zdb.js";import"./iconBase-D0O-DFjb.js";import"./AddressContent-CRtWcgRm.js";import"./common-BDZuGjqk.js";const R=()=>{const c=t.useRef(null),r=i(h),[s,n]=t.useState(""),o=u(),m=i(j),l=a=>{n(a.target.value)},d=async a=>{a.preventDefault();const p=/^[가-힣]{1,15}$/,N={couponId:m,nickName:s,couponType:"NICKNAME"};if(p.test(s))await g(N),o("/user/mypage",{replace:!0});else return k("닉네임은 한글 단어로만 설정이 가능하며, 영어, 숫자, 공백, 특수문자는 사용할 수 없습니다. 최대 15자까지 가능합니다."),n(""),!1};return e.jsxs("div",{className:"ChangeNickNamePage",children:[e.jsxs("div",{className:"content",children:[e.jsx(x,{centerText:"프로필 수정"}),e.jsx("div",{className:s.trim()?"onSubmit":"onSubmitClose",onClick:s.trim()?d:void 0,children:"확인"}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"title",children:"닉네임"}),e.jsx("div",{className:"change-nickname-input-div",children:e.jsx("input",{className:"input",ref:c,type:"text",placeholder:r,value:s,onChange:a=>l(a),maxLength:15})}),e.jsxs("div",{className:"notice",children:[e.jsxs("div",{children:["닉네임은 ",e.jsx("span",{children:"한글 단어"}),"로만 설정이 가능합니다."]}),e.jsxs("div",{children:["영어, 숫자, 공백, 특수문자의 사용은 ",e.jsx("span",{children:"불가능"}),"합니다."]}),e.jsxs("div",{children:["최대 ",e.jsx("span",{children:"15자"}),"까지 가능합니다."]})]})]})]}),e.jsx(v,{})]})};export{R as default};
