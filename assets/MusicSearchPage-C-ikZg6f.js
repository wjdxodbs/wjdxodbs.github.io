import{j as e,a as x,e as j,f as u,R as p,m as t,r as v}from"./index-BSyA7eh-.js";import{s as N,i as c}from"./atoms-DkxT04gg.js";import{H as f}from"./Header-Djc5XA4A.js";import{M as S}from"./MusicSearchInput-CdsDj7Qc.js";import"./MusicSearchApi-DEPvDYNp.js";import{d as M}from"./atoms-BPitRS7X.js";import{a as W}from"./index-B8GAY5k7.js";import"./ping-CBR7rkQJ.js";import"./toastMsg-Bm5Rmuli.js";import"./common-BDZuGjqk.js";const _=()=>e.jsx("div",{className:"SearchedWords",children:e.jsxs("div",{className:"no-word-container",children:[e.jsx("div",{className:"title",children:"앗!"}),e.jsx("div",{className:"subtitle",children:"최근 검색어 내역이 없어요."})]})}),g=()=>{const r=x(),[i,a]=j(N),d=u(c),l=s=>{d(s),r(`/music/search/${s}`,{replace:!0})},o=s=>{a(m=>m.filter(h=>h.id!==s))},n=()=>{a([])};return i.length===0?e.jsx(_,{}):e.jsxs("div",{className:"SearchedWords",children:[e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"title",children:"최근 검색어"}),e.jsx("div",{className:"all-delete",onClick:n,children:"전체 삭제"})]}),e.jsx("div",{className:"word-list",children:i.map(s=>e.jsxs("div",{className:"word-item",children:[e.jsx("div",{onClick:()=>l(s.title),className:"word-title",children:s.title}),e.jsx(W,{className:"word-delete",onClick:()=>o(s.id)})]},s.id))})]})},D=()=>{const r=p(c),i=t(M),a=t(c);return v.useEffect(()=>{r!==""&&i(),a()},[]),e.jsx("div",{className:"MusicSearchPage",children:e.jsxs("div",{children:[e.jsxs("div",{className:"MusicSearchPage-header",children:[e.jsx(f,{}),e.jsx(S,{})]}),e.jsx("div",{className:"searched-word",children:e.jsx(g,{})})]})})};export{D as default};