import{j as e,a as x,d as j,e as u,R as v,h as t,r as N}from"./index-DyI6-lzT.js";import{s as p,i as c,H as f}from"./Header-CbrAwtZW.js";import{M as S}from"./MusicSearchInput-Bi8fj6Xe.js";import"./MusicSearchApi-DCz2VPDJ.js";import{d as M}from"./atoms-Cx9tWQ7j.js";import{a as W}from"./index-CcqKLS2B.js";import"./ping-Bf9ewFiT.js";import"./common-CgW3NMxz.js";const _=()=>e.jsx("div",{className:"SearchedWords",children:e.jsxs("div",{className:"no-word-container",children:[e.jsx("div",{className:"title",children:"앗!"}),e.jsx("div",{className:"subtitle",children:"최근 검색어 내역이 없어요."})]})}),g=()=>{const r=x(),[i,a]=j(p),d=u(c),l=s=>{d(s),r(`/music/search/${s}`)},o=s=>{a(m=>m.filter(h=>h.id!==s))},n=()=>{a([])};return i.length===0?e.jsx(_,{}):e.jsxs("div",{className:"SearchedWords",children:[e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"title",children:"최근 검색어"}),e.jsx("div",{className:"all-delete",onClick:n,children:"전체 삭제"})]}),e.jsx("div",{className:"word-list",children:i.map(s=>e.jsxs("div",{className:"word-item",children:[e.jsx("div",{onClick:()=>l(s.title),className:"word-title",children:s.title}),e.jsx(W,{className:"word-delete",onClick:()=>o(s.id)})]},s.id))})]})},b=()=>{const r=v(c),i=t(M),a=t(c);return N.useEffect(()=>{r!==""&&i(),a()},[]),e.jsx("div",{className:"MusicSearchPage",children:e.jsxs("div",{children:[e.jsxs("div",{className:"MusicSearchPage-header",children:[e.jsx(f,{}),e.jsx(S,{})]}),e.jsx("div",{className:"searched-word",children:e.jsx(g,{})})]})})};export{b as default};
