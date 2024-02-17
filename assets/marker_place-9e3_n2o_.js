var ie=Object.defineProperty;var oe=(n,e,r)=>e in n?ie(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var T=(n,e,r)=>(oe(n,typeof e!="symbol"?e+"":e,r),r);import{r as p,l as B,j as x,m as le}from"./index-WKhxwYiD.js";const P=typeof window<"u"&&typeof document<"u"?p.useLayoutEffect:p.useEffect,u=(n,e,r)=>{P(()=>{if(!n||!r)return;const a=function(){for(var k=arguments.length,f=new Array(k),o=0;o<k;o++)f[o]=arguments[o];return f===void 0?r(n):r(n,...f)};return kakao.maps.event.addListener(n,e,a),()=>{kakao.maps.event.removeListener(n,e,a)}},[n,e,r])},$="__react-kakao-maps-sdk__";let U=function(n){return n[n.INITIALIZED=0]="INITIALIZED",n[n.LOADING=1]="LOADING",n[n.SUCCESS=2]="SUCCESS",n[n.FAILURE=3]="FAILURE",n}({});const ce=`${$}_Loader`,c=class c{constructor(e){T(this,"callbacks",[]);T(this,"done",!1);T(this,"loading",!1);T(this,"errors",[]);let{appkey:r,id:a=ce,libraries:k=[],nonce:f,retries:o=3,url:g="//dapi.kakao.com/v2/maps/sdk.js"}=e;if(this.id=a,this.appkey=r,this.libraries=k,this.nonce=f,this.retries=o,this.url=g,c.instance&&!c.equalOptions(this.options,c.instance.options)&&!c.equalOptions(this.options,c.instance.options))switch(c.instance.status){case U.FAILURE:throw new Error(`Loader must not be called again with different options. 
${JSON.stringify(this.options,null,2)}
!==
${JSON.stringify(c.instance.options,null,2)}`);default:c.instance.reset(),c.instance=this;break}return c.instance||(c.instance=this),c.instance}get options(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}static addLoadEventLisnter(e){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(e),c.loadEventCallback.add(e),e}static removeLoadEventLisnter(e){return c.loadEventCallback.delete(e)}load(){return new Promise((e,r)=>{this.loadCallback(a=>{a?r(a):e(window.kakao)})})}get status(){return this.onEvent?U.FAILURE:this.done?U.SUCCESS:this.loading?U.LOADING:U.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}loadCallback(e){this.callbacks.push(e),this.execute()}resetIfRetryingFailed(){this.failed&&this.reset()}reset(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps){console.warn("Kakao Maps이 이미 외부 요소에 의해 로딩되어 있습니다.설정한 옵션과 일치 하지 않을 수 있으며, 이에 따른 예상치 동작이 발생할 수 있습니다."),window.kakao.maps.load(this.callback);return}this.loading||(this.loading=!0,this.setScript())}}setScript(){document.getElementById(this.id)&&this.callback();const e=this.createUrl(),r=document.createElement("script");r.id=this.id,r.type="text/javascript",r.src=e,r.onerror=this.loadErrorCallback.bind(this),r.onload=this.callback.bind(this),r.defer=!0,r.async=!0,this.nonce&&(r.nonce=this.nonce),document.head.appendChild(r)}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const r=this.errors.length*2**this.errors.length;console.log(`Failed to load Kakao Maps script, retrying in ${r} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},r)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach(r=>{r(this.onEvent)}),this.callbacks=[],c.loadEventCallback.forEach(r=>{r(this.onEvent)})}createUrl(){let e=this.url;return e+=`?appkey=${this.appkey}`,this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),e+="&autoload=false",e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}callback(){kakao.maps.load(()=>{c.instance.done=!0,c.instance.loading=!1,c.instance.callbacks.forEach(e=>{e(c.instance.onEvent)}),c.instance.callbacks=[],c.loadEventCallback.forEach(e=>{e(c.instance.onEvent)})})}static equalOptions(e,r){if(e.appkey!==r.appkey||e.id!==r.id||e.libraries.length!==r.libraries.length)return!1;for(let a=0;a<e.libraries.length;++a)if(e.libraries[a]!==r.libraries[a])return!1;return!(e.nonce!==r.nonce||e.retries!==r.retries||e.url!==r.url)}};T(c,"loadEventCallback",new Set);let V=c;const i=function(n,e){for(var r=arguments.length,a=new Array(r>2?r-2:0),k=2;k<r;k++)a[k-2]=arguments[k];P(()=>{!n||a.every(f=>typeof f>"u")||n[e].call(n,...a)},[n,e,...a])},_=B.createContext(void 0),he=B.forwardRef(function(e,r){let{id:a,as:k,children:f,center:o,isPanto:g=!1,padding:w=32,disableDoubleClick:l,disableDoubleClickZoom:d,draggable:C,zoomable:M,keyboardShortcuts:m,level:h,maxLevel:S,minLevel:D,mapTypeId:A,projectionId:I,scrollwheel:y,tileAnimation:L,onBoundsChanged:E,onCenterChanged:R,onClick:t,onDoubleClick:N,onDrag:j,onDragEnd:X,onDragStart:q,onIdle:z,onMaptypeidChanged:Z,onMouseMove:H,onRightClick:Y,onTileLoaded:F,onZoomChanged:K,onZoomStart:Q,onCreate:O,...te}=e;const re=k||"div",[G,ae]=p.useState(!1),[s,ne]=p.useState(),J=p.useRef(null);return P(()=>{const v=V.addLoadEventLisnter(b=>ae(!b));return()=>{V.removeLoadEventLisnter(v)}},[]),P(()=>{if(!G)return;const v=J.current;if(!v)return;const b="lat"in o?new kakao.maps.LatLng(o.lat,o.lng):new kakao.maps.Coords(o.x,o.y),se=new kakao.maps.Map(v,{center:b,disableDoubleClick:l,disableDoubleClickZoom:d,draggable:C,keyboardShortcuts:m,level:h,mapTypeId:typeof A=="string"?kakao.maps.MapTypeId[A]:A,projectionId:I,scrollwheel:y,tileAnimation:L});return ne(se),()=>{v.innerHTML=""}},[G,l,d,L]),p.useImperativeHandle(r,()=>s,[s]),P(()=>{!s||!O||O(s)},[s,O]),P(()=>{if(!s)return;let v=s.getCenter();v instanceof kakao.maps.Coords&&(v=v.toLatLng());const b="lat"in o?new kakao.maps.LatLng(o.lat,o.lng):new kakao.maps.Coords(o.x,o.y);b instanceof kakao.maps.LatLng&&b.equals(v)||b instanceof kakao.maps.Coords&&b.toLatLng().equals(v)||(g?s.panTo(b,w):s.setCenter(b))},[s,o.lat,o.lng,o.x,o.y]),i(s,"setDraggable",C),i(s,"setZoomable",M),i(s,"setKeyboardShortcuts",m),i(s,"setLevel",h),i(s,"setMapTypeId",G?typeof A=="string"?kakao.maps.MapTypeId[A]:A:void 0),i(s,"setProjectionId",I),i(s,"setMinLevel",S),i(s,"setMaxLevel",D),u(s,"bounds_changed",E),u(s,"center_changed",R),u(s,"click",t),u(s,"dblclick",N),u(s,"drag",j),u(s,"dragstart",q),u(s,"dragend",X),u(s,"idle",z),u(s,"maptypeid_changed",Z),u(s,"mousemove",H),u(s,"rightclick",Y),u(s,"tilesloaded",F),u(s,"zoom_changed",K),u(s,"zoom_start",Q),x.jsxs(x.Fragment,{children:[x.jsx(re,{id:a||`${$}_Map`,...te,ref:J}),s&&x.jsx(_.Provider,{value:s,children:f})]})}),ee=n=>{const e=p.useContext(_);if(!e)throw new Error(`${n?n+" Component":"useMap"} must exist inside Map Component!`);return e},ue=B.forwardRef(function(e,r){let{map:a,position:k,marker:f,children:o,altitude:g,disableAutoPan:w,range:l,removable:d,zIndex:C,onCreate:M}=e;const m=p.useRef(document.createElement("div")),h=p.useMemo(()=>{const S=new kakao.maps.InfoWindow({altitude:g,disableAutoPan:w,range:l,removable:d,zIndex:C,content:m.current,position:k});return m.current.style.display="none",S},[w,d]);return p.useImperativeHandle(r,()=>h,[h]),p.useLayoutEffect(()=>(h.open(a,f),()=>{h.close()}),[a,f]),p.useLayoutEffect(()=>{M&&M(h)},[h,M]),i(h,"setPosition",k),i(h,"setAltitude",g),i(h,"setRange",l),i(h,"setZIndex",C),m.current.parentElement&&le.createPortal(o,m.current.parentElement)}),W=B.createContext(void 0),me=B.forwardRef(function(e,r){let{onClusterclick:a,onClusterdblclick:k,onClustered:f,onClusterout:o,onClusterover:g,onClusterrightclick:w,onCreate:l,...d}=e;const{children:C,averageCenter:M,calculator:m,clickable:h,disableClickZoom:S,gridSize:D,hoverable:A,minClusterSize:I,minLevel:y,styles:L,texts:E}=d,R=ee("MarkerClusterer"),t=p.useMemo(()=>{if(!window.kakao.maps.MarkerClusterer){console.warn("clusterer 라이브러리를 별도 로드 해야 사용 가능합니다. `https://apis.map.kakao.com/web/guide/#loadlibrary`");return}return new kakao.maps.MarkerClusterer({averageCenter:M,calculator:m,clickable:h,disableClickZoom:S,gridSize:D,hoverable:A,minClusterSize:I,minLevel:y,styles:L,texts:E})},[]);return p.useImperativeHandle(r,()=>t,[t]),p.useLayoutEffect(()=>{if(t)return t.setMap(R),()=>{t.setMap(null)}},[R,t]),p.useLayoutEffect(()=>{t&&l&&l(t)},[t,l]),i(t,"setGridSize",D),i(t,"setMinClusterSize",I),i(t,"setAverageCenter",M),i(t,"setAverageCenter",M),i(t,"setMinLevel",y),i(t,"setTexts",E),i(t,"setCalculator",m),i(t,"setStyles",L),u(t,"clustered",f),u(t,"clusterclick",a),u(t,"clusterover",g),u(t,"clusterout",o),u(t,"clusterdblclick",k),u(t,"clusterrightclick",w),t?x.jsxs(W.Provider,{value:t,children:[C,x.jsx(de,{...d})]}):null}),de=()=>{const n=p.useContext(W);return P(()=>{n.redraw()}),null},pe=B.forwardRef(function(e,r){let{map:a,position:k,children:f,altitude:o,clickable:g,draggable:w,image:l,infoWindowOptions:d,onCreate:C,onClick:M,onDragEnd:m,onDragStart:h,onMouseOut:S,onMouseOver:D,opacity:A,range:I,title:y,zIndex:L}=e;const E=p.useContext(W),R=p.useMemo(()=>{var N,j,X,q,z,Z,H,Y,F,K,Q,O;return l&&new kakao.maps.MarkerImage(l.src,new kakao.maps.Size(l.size.width,l.size.height),{alt:(N=l.options)==null?void 0:N.alt,coords:(j=l.options)==null?void 0:j.coords,offset:((X=l.options)==null?void 0:X.offset)&&new kakao.maps.Point((q=l.options)==null?void 0:q.offset.x,(z=l.options)==null?void 0:z.offset.y),shape:(Z=l.options)==null?void 0:Z.shape,spriteOrigin:((H=l.options)==null?void 0:H.spriteOrigin)&&new kakao.maps.Point((Y=l.options)==null?void 0:Y.spriteOrigin.x,(F=l.options)==null?void 0:F.spriteOrigin.y),spriteSize:((K=l.options)==null?void 0:K.spriteSize)&&new kakao.maps.Size((Q=l.options)==null?void 0:Q.spriteSize.width,(O=l.options)==null?void 0:O.spriteSize.height)})},[JSON.stringify(l)]),t=p.useMemo(()=>new kakao.maps.Marker({altitude:o,clickable:g,draggable:w,image:R,opacity:A,range:I,title:y,zIndex:L,position:k}),[]);return p.useImperativeHandle(r,()=>t,[t]),p.useLayoutEffect(()=>E?(E.addMarker(t,!0),()=>E.removeMarker(t,!0)):(t.setMap(a),()=>t.setMap(null)),[a,E,t]),p.useLayoutEffect(()=>{C&&C(t)},[t,C]),i(t,"setPosition",k),i(t,"setImage",R),i(t,"setAltitude",o),i(t,"setClickable",g),i(t,"setDraggable",w),i(t,"setOpacity",A),i(t,"setRange",I),i(t,"setRange",I),i(t,"setTitle",y),i(t,"setTitle",y),i(t,"setZIndex",L),u(t,"click",M),u(t,"dragstart",h),u(t,"dragend",m),u(t,"mouseout",S),u(t,"mouseover",D),f?x.jsx(ue,{position:k,map:a,marker:t,altitude:d==null?void 0:d.altitude,disableAutoPan:d==null?void 0:d.disableAutoPan,range:d==null?void 0:d.range,removable:d==null?void 0:d.removable,zIndex:d==null?void 0:d.zIndex,children:f}):null}),ge=B.forwardRef(function(e,r){let{position:a,...k}=e;const f=ee("MapMarker"),o=p.useMemo(()=>"lat"in a?new kakao.maps.LatLng(a.lat,a.lng):new kakao.maps.Coords(a.x,a.y).toLatLng(),[a.lat,a.lng,a.x,a.y]);return x.jsx(pe,{map:f,position:o,...k,ref:r})}),Ce="data:image/webp;base64,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";export{ge as M,Ce as a,he as b,me as c,ee as u};