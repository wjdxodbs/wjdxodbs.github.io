import{d as h,i as v,j as e,r as a,h as m}from"./index-dlk3gkIN.js";import{b as x}from"./backSymbol-0aRp874W.js";import{a as u}from"./fish-ZY0xfTiz.js";import"./commons--RmDgXK-.js";import"./axios-L6U4YIEh.js";var n={},j=v;Object.defineProperty(n,"__esModule",{value:!0});var o=n.default=void 0,p=j(h()),w=e;o=n.default=(0,p.default)((0,w.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight");const g=({fish:s})=>{const[t,r]=a.useState(!1),[i,l]=a.useState([]),d=()=>{r(!t);const c=JSON.parse(s.interview);l(c),console.log(i),console.log(s.interview),console.log(typeof s.interview),console.log(c),console.log(typeof c)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:t?"card-rotate":"back-rotate",onClick:d,children:[e.jsxs("div",{className:`front ${s.fishType}`,children:[e.jsx("img",{src:x,alt:"",className:"back-fish-lish",onClick:()=>history.back()}),e.jsx("div",{className:"detail-title",children:"Mulgogi"}),e.jsxs("div",{className:"size",children:["size",e.jsx("div",{style:{whiteSpace:"pre-line"},children:s.size})]}),e.jsx("div",{className:"fish-img",children:e.jsx("img",{src:s.imageUrl})}),e.jsx("div",{className:"sub-one",children:"the fish"}),e.jsx("div",{className:"sub-two",children:"we love"}),e.jsx("div",{className:"fish-name",children:s.name}),e.jsxs("div",{className:"science-name",children:["학명",e.jsx("div",{style:{whiteSpace:"pre-line"},children:s.scientificName})]}),e.jsxs("div",{className:"food",children:["Food",e.jsx("div",{style:{whiteSpace:"pre-line"},children:s.bait})]}),e.jsxs("div",{className:"live",children:["Where",e.jsx("br",{}),"you live"]}),e.jsx("div",{className:"habitat",style:{whiteSpace:"pre-line"},children:s.habitat}),e.jsx("div",{className:"arrow",children:e.jsx(o,{})})]}),e.jsxs("div",{className:`back ${s.fishType}`,children:[e.jsxs("div",{className:"question",children:["Q. ",i.first_question,e.jsx("div",{style:{whiteSpace:"pre-line"},children:i.first_answer})]}),e.jsxs("div",{className:"question",children:["Q. ",i.second_question,e.jsx("div",{style:{whiteSpace:"pre-line"},children:i.second_answer})]}),i.third_question&&e.jsxs("div",{className:"question",children:["Q. ",i.third_question,e.jsx("div",{style:{whiteSpace:"pre-line"},children:i.third_answer})]})]})]})})},_=()=>{const{id:s}=m(),[t,r]=a.useState([]);a.useEffect(()=>{i()},[]);const i=async()=>{await u(s).then(l=>r(l)),console.log(t)};return e.jsx(g,{fish:t})};export{_ as default};