import{d as S,i as I,j as e,b as F,h as _,u as E,r,e as P}from"./index-AY5JLS64.js";import{a as f}from"./axios-L6U4YIEh.js";import{L as M}from"./Loading-UT8T7lxY.js";import{H as R}from"./Header-IyowER4P.js";import{p as k}from"./FishingMapStore-AFc3ox7b.js";import{p as A}from"./default_profile-HTeSV8ma.js";import"./backSymbol-0aRp874W.js";var g={},H=I;Object.defineProperty(g,"__esModule",{value:!0});var N=g.default=void 0,L=H(S()),T=e;N=g.default=(0,L.default)((0,T.jsx)("path",{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");const W=["일","월","화","수","목","금","토"],K=({weatherData:o,sunrise:l,sunset:n})=>{const t=new Date,m=(t.getMonth()+1).toString().padStart(2,"0"),d=t.getDate().toString().padStart(2,"0"),c=a=>a.toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1}),h=a=>a<12?`오전${a||12}시`:`오후${a===12?a:a-12}시`;return e.jsxs("div",{className:"MapDetailWeather",children:[e.jsx("div",{className:"todays-date",children:`${m}.${d} ${W[t.getDay()]}`}),e.jsxs("div",{className:"sun-rs",children:[`일출 ${c(l)}`,e.jsx("span",{children:"•"}),`일몰 ${c(n)}`]}),e.jsxs("div",{className:"weather-data",children:[e.jsxs("div",{className:"weather-info",children:[e.jsx("div",{className:"weather-time",children:"시간"}),e.jsx("div",{className:"weather",children:"날씨"}),e.jsx("div",{className:"temper",children:"기온"}),e.jsx("div",{className:"precipitation",children:"강수확률"}),e.jsx("div",{className:"wind-speed",children:"풍속"}),e.jsx("div",{className:"wind-direction",children:"풍향"})]}),e.jsx("div",{className:"weather-totals",children:o.map((a,p)=>e.jsxs("div",{className:"weather-total",children:[e.jsx("div",{className:"weather-time",children:h(new Date(a.dt_txt).getHours())}),e.jsx("img",{className:"weather-icon",src:`http://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png`,alt:"날씨 아이콘"}),e.jsxs("div",{children:[a.main.temp.toFixed(0),"°"]}),e.jsx("div",{children:`${(a.pop*100).toFixed()}%`}),e.jsxs("div",{children:[a.wind.speed.toFixed(1),"m/s"]}),e.jsx("div",{className:"navigation",style:{transform:`rotate(${a.wind.deg}deg)`},children:e.jsx(N,{})})]},p))})]})]})},q="87246d75e1ce26e1392a087b3d1d88c5",J=()=>{const o=F(),l=_(),n=E(),[t,m]=r.useState({}),[d,c]=r.useState([]),[h,a]=r.useState(""),[p,w]=r.useState(""),D=P(k),$=async(s,x)=>{try{const i=await f.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${s}&lon=${x}&appid=${q}&units=metric&lang=kr`);a(new Date(i.data.city.sunrise*1e3)),w(new Date(i.data.city.sunset*1e3)),c(i.data.list)}catch(i){console.log(i)}finally{D(o.pathname)}},b=async()=>{try{const s=await f.get(`https://i10c203.p.ssafy.io/api/spots/${l.idx}`,{headers:{Authorization:localStorage.getItem("jwt")}});m(s.data),await $(s.data.latitude,s.data.longitude)}catch(s){console.log(s)}},y=s=>{const x=new Date,j=(new Date(s)-x)/(1e3*60*60),u=new Intl.RelativeTimeFormat("ko-KR");let v;return Math.abs(j)<24?v=u.format(Math.round(j),"hour"):v=u.format(Math.round(j/24),"day"),v};return r.useEffect(()=>{b()},[]),d.length?e.jsxs("div",{className:"FishMapDetailPage",children:[e.jsx(R,{prevPath:"/fish/map"}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"fishing-info",children:[e.jsxs("div",{className:"fishing-name",children:[e.jsx("h2",{children:t.name}),e.jsx("div",{children:t.spotType})]}),e.jsx("div",{children:t.streetAddress})]}),e.jsx(K,{weatherData:d,sunrise:h,sunset:p}),e.jsxs("div",{className:"fish-species",children:[e.jsxs("h3",{className:"name",children:[t.name,"의 주요어종"]}),e.jsx("div",{className:"wrapper",children:t.fishes.length?t.fishes.map(s=>e.jsxs("div",{onClick:()=>n(`/fishbook/${s.id}`),children:[e.jsx("img",{src:s.imageUrl,className:"blue-bd"}),e.jsx("div",{children:s.name})]},s.name)):e.jsx("div",{className:"none-data",children:"정보를 준비 중입니다."})})]}),e.jsxs("div",{className:"fishing-reviews",children:[e.jsxs("h3",{className:"name",children:[t.name,"의 리뷰"]}),e.jsx("div",{className:"wrapper",children:t.boards.length?e.jsx(e.Fragment,{children:e.jsx("div",{className:"board",children:t.boards.map(s=>e.jsxs("div",{className:"review",onClick:()=>n(`/media/board/${s.boardId}`),children:[e.jsx("img",{src:s.boardImageUrl,className:"review-img"}),e.jsxs("div",{className:"review-user",children:[e.jsx("img",{src:s.profileImageUrl||A,alt:""}),e.jsx("div",{children:s.nickName})]}),e.jsx("div",{className:"review-date",children:y(s.createdAt)})]},s.boardId))})}):e.jsx("div",{className:"none-data",children:"정보를 준비 중입니다."})})]})]})]}):e.jsx(M,{})};export{J as default};