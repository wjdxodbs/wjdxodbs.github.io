import{j as t}from"./index-D9dJCgm7.js";import{N as n}from"./NoneNavHeader-CitUPkcm.js";import"./index-BSNLrtaP.js";import"./index-Dhy3bGrj.js";const i="/assets/kakao_logo-CBN4pDSq.webp",c=()=>{const o="https://kauth.kakao.com/oauth/authorize?client_id=d05009f41c13bdd89ac1bad897d45a01&redirect_uri=http://localhost:5174/login/KAKAO&response_type=code",e=()=>{window.location.href=o};return t.jsx(t.Fragment,{children:t.jsx("img",{className:"w-[50px]",src:i,alt:"카카오로그인",onClick:e})})},l="/assets/naver_logo-A72W5VIT.webp",d=()=>{const e="https://nid.naver.com/oauth2.0/authorize?client_id=i6wNtvL6tR5n9p0ERkNi&response_type=code&redirect_uri=http://172.30.1.16:5174/login/NAVER&state=DNolvvC9x8",a=()=>{window.location.href=e};return t.jsx(t.Fragment,{children:t.jsx("img",{className:"w-[50px]",src:l,alt:"네이버로그인",onClick:a})})},m=()=>t.jsxs("div",{className:"h-[100vh]",children:[t.jsx(n,{centerText:"로그인"}),t.jsx("div",{children:"로그인페이지 입니다"}),t.jsxs("div",{children:[t.jsx(d,{}),t.jsx(c,{})]})]});export{m as default};