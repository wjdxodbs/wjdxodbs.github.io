import{h as n,r as o,b as p,j as t}from"./index-AY5JLS64.js";import{B as f}from"./BoardFormItem-zWU_WK7j.js";import{H as x}from"./Header-IyowER4P.js";import{c as u}from"./board-trRPgBQ3.js";/* empty css                      */import"./AddOutlined-T-dnoror.js";import"./axios-L6U4YIEh.js";import"./marker_place_off-DaVJSVdB.js";import"./marker_place-e6HHTV3n.js";import"./backSymbol-0aRp874W.js";import"./commons--RmDgXK-.js";const S=()=>{var a;const{id:e}=n(),[r,s]=o.useState([]),i=p(),[m,y]=o.useState((a=i.state)==null?void 0:a.categoryId);o.useEffect(()=>{c()},[]);const c=async()=>{await u(e).then(d=>s(d))};return t.jsxs(t.Fragment,{children:[t.jsx(x,{centerText:"수정하기"}),t.jsx("div",{children:r&&t.jsx(f,{type:"modify",categoryId:m,boardData:r})})]})};export{S as default};