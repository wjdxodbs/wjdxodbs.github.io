import{j as e,a as x,d as j,R as u,c as p,k as l,r as v}from"./index-BPBxqTnj.js";import{s as N,i as d}from"./atoms-BliSUMAI.js";import{H as f}from"./Header-DqKCR0gy.js";import{M as S}from"./MusicSearchInput-xD5hFkKI.js";import"./MusicSearchApi-D6Dstj1I.js";import{d as M}from"./atoms-DO02iDAS.js";import{b as W}from"./index-BMQldcRT.js";import"./iconBase-G431mWNS.js";import"./AddressContent-Z4PdUXO-.js";import"./toastMsg-B29LKMI_.js";import"./common-DQp8kAyd.js";const _=()=>e.jsx("div",{className:"SearchedWords",children:e.jsxs("div",{className:"no-word-container",children:[e.jsx("div",{className:"title",children:"앗!"}),e.jsx("div",{className:"subtitle",children:"최근 검색어 내역이 없어요."})]})}),R=()=>{const a=x(),[i,r]=j(N),o=u(d),n=s=>{const t=s.trim(),c=encodeURIComponent(t);o(s),a(`/music/search/results?query=${c}`,{replace:!0})},m=s=>{r(t=>t.filter(c=>c.id!==s))},h=()=>{r([])};return i.length===0?e.jsx(_,{}):e.jsxs("div",{className:"SearchedWords",children:[e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"title",children:"최근 검색어"}),e.jsx("div",{className:"all-delete",onClick:h,children:"전체 삭제"})]}),e.jsx("div",{className:"word-list",children:i.map(s=>e.jsxs("div",{className:"word-item",children:[e.jsx("div",{onClick:()=>n(s.title),className:"word-title",children:s.title}),e.jsx(W,{className:"word-delete",onClick:()=>m(s.id)})]},s.id))})]})},T=()=>{const a=p(d),i=l(M),r=l(d);return v.useEffect(()=>{a!==""&&i(),r()},[]),e.jsx("div",{className:"MusicSearchPage",children:e.jsxs("div",{children:[e.jsxs("div",{className:"MusicSearchPage-header",children:[e.jsx(f,{}),e.jsx(S,{})]}),e.jsx("div",{className:"searched-word",children:e.jsx(R,{})})]})})};export{T as default};
