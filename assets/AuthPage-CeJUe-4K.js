import{u as s,a as c,r as n,j as o}from"./index-BKGO1a_R.js";import{g as i}from"./login-C35hP-x2.js";import"./common-CgW3NMxz.js";const l=()=>{const{provider:r}=s(),t=new URL(document.URL).searchParams.get("code"),a=c();return n.useEffect(()=>{(async()=>{try{if(r&&t){const e=await i(r,t);localStorage.setItem("jwt",e.accessToken),a("/",{replace:!0})}else throw new Error("Provider or code missing")}catch(e){console.error("Error while getting token:",e)}})()},[]),o.jsx(o.Fragment,{})};export{l as default};
