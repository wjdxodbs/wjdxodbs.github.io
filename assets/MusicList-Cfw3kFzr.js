import{a as S,R as n,r,l as v,j as s}from"./index-BFfqBe_w.js";import{i as M}from"./atoms-DvGbDQvs.js";import{H as R}from"./Header-gY4_XGT7.js";import{M as g}from"./MusicSearchInput-D4HKKqSs.js";import{g as N}from"./MusicSearchApi-DDaRA6OD.js";import{s as d}from"./atoms-oUB3frrj.js";import{L}from"./Loading-DoK-N6Ig.js";import{S as y}from"./SongItemModule-iaHf5ZOh.js";import"./iconBase-DhHVUUgp.js";import"./AddressContent-Aj_TjtZn.js";import"./index-l2xSXz1q.js";import"./toastMsg-BFcdgC3S.js";import"./index-Co6n4StN.js";const T=()=>{const m=S(),l=n(M),[a,u]=r.useState([]),h=n(d),p=v(d),o=new URLSearchParams(location.search).get("query"),[x,c]=r.useState(!1);r.useEffect(()=>{p(),o&&f(decodeURIComponent(o))},[o]);const f=async e=>{c(!0);const t=decodeURIComponent(e);l(t);const i=await N(t);i&&u(i),c(!1)},j=e=>{h(e),m(`/music/drop/${e.youtubeId}`)};return s.jsxs("div",{className:"MusicList",children:[s.jsxs("div",{className:"MusicList-header",children:[s.jsx(R,{}),s.jsx(g,{})]}),x?s.jsx(L,{}):a&&a.length>0?s.jsx("div",{className:"searchResults none-scroll",children:a.map((e,t)=>s.jsx(y,{type:"search",onClick:()=>j(e),song:e},t))}):s.jsx("div",{className:"SearchedWords",children:s.jsxs("div",{className:"no-word-container",children:[s.jsx("div",{className:"title",children:"앗!"}),s.jsx("div",{className:"subtitle",children:"검색결과가 없어요."})]})})]})};export{T as default};
