import{d as v,i as h,j as e,u as b,r as i,N as I}from"./index-AY5JLS64.js";import{a as m}from"./axios-L6U4YIEh.js";import{L as C}from"./Loading-UT8T7lxY.js";import{d as S}from"./login_img-kcxhdVzM.js";import{H as E}from"./Header-IyowER4P.js";import"./backSymbol-0aRp874W.js";var o={},O=h;Object.defineProperty(o,"__esModule",{value:!0});var p=o.default=void 0,k=O(v()),u=e;p=o.default=(0,k.default)([(0,u.jsx)("path",{d:"m7.3 14.7 1.2-1.2c-1-1-1.5-2.3-1.5-3.5 0-1.3.5-2.6 1.5-3.5L7.3 5.3c-1.3 1.3-2 3-2 4.7s.7 3.4 2 4.7M19.1 2.9l-1.2 1.2c1.6 1.6 2.4 3.8 2.4 5.9 0 2.1-.8 4.3-2.4 5.9l1.2 1.2c2-2 2.9-4.5 2.9-7.1 0-2.6-1-5.1-2.9-7.1"},"0"),(0,u.jsx)("path",{d:"M6.1 4.1 4.9 2.9C3 4.9 2 7.4 2 10c0 2.6 1 5.1 2.9 7.1l1.2-1.2c-1.6-1.6-2.4-3.8-2.4-5.9 0-2.1.8-4.3 2.4-5.9m10.6 10.6c1.3-1.3 2-3 2-4.7-.1-1.7-.7-3.4-2-4.7l-1.2 1.2c1 1 1.5 2.3 1.5 3.5 0 1.3-.5 2.6-1.5 3.5zM14.5 10c0-1.38-1.12-2.5-2.5-2.5S9.5 8.62 9.5 10c0 .76.34 1.42.87 1.88L7 22h2l.67-2h4.67l.66 2h2l-3.37-10.12c.53-.46.87-1.12.87-1.88m-4.17 8L12 13l1.67 5z"},"1")],"CellTowerOutlined");var r={},M=h;Object.defineProperty(r,"__esModule",{value:!0});var f=r.default=void 0,P=M(v()),U=e;f=r.default=(0,P.default)((0,U.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z"}),"Cached");function w(){const x=b(),[a,j]=i.useState([]),[g,l]=i.useState(!0),L=!1,n="https://i10c203.p.ssafy.io",c=JSON.parse(localStorage.getItem("user")),R="wearegitaehasam";i.useEffect(()=>{d()},[]);const d=()=>{l(!0),m.get(n+"/api/lives").then(s=>{m.get(n+"/openvidu/api/sessions",{headers:{Authorization:"Basic "+btoa("OPENVIDUAPP:"+R),"Content-Type":"application/json"}}).then(t=>{j(s.data),l(!1)})}).catch(s=>{console.log(s)})},N=s=>{const t=s.liveRoomId,_=s.sessionId;x(`/live/${s.sessionId}`,{state:{isHost:L,roomId:t,subscriberSession:_,nickname:c.nickname,userImg:c.imageUrl}})};return e.jsx(e.Fragment,{children:g?e.jsx(C,{}):e.jsxs("div",{className:"room-list",children:[e.jsx(E,{centerText:"낚시 라이브"}),e.jsx("div",{className:"roomList-filter",children:e.jsx(f,{className:"room-list-reload-btn",onClick:d})}),a.liveRooms&&a.liveRooms.length>0?null:e.jsxs("div",{className:"no-live",children:[e.jsx(p,{}),e.jsx("span",{children:"진행중인 라이브가 없습니다."})]}),e.jsxs("div",{className:"roomlist-wrapper",children:[a.liveRooms&&a.liveRooms.map((s,t)=>e.jsxs("div",{className:"roomList-info",onClick:()=>N(s),children:[e.jsx("img",{src:s.imageUrl?s.imageUrl:S,alt:"room thumbnail",className:"thumbnail"}),e.jsxs("div",{className:"roomList-info-header",children:[e.jsx("p",{children:s.name}),e.jsx("div",{className:"roomList-info-body",children:e.jsx("span",{children:s.nickName})})]})]},t)),e.jsx(I,{to:"/media/roomList/create",className:"nav-item createLive-btn bg-blue",children:e.jsx("span",{children:"라이브 켜기"})})]})]})})}export{w as default};