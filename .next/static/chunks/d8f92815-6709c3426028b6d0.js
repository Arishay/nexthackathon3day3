"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{74487:function(e,t,o){o.d(t,{$j:function(){return t7},CP:function(){return nr},Ct:function(){return t2},EK:function(){return oc},F2:function(){return rr},Fg:function(){return eA},J2:function(){return ns},Jh:function(){return tK},Kq:function(){return n$},Kx:function(){return nT},Lg:function(){return w},Lt:function(){return j},NM:function(){return o_},OK:function(){return rW},Od:function(){return rQ},Of:function(){return _},Oo:function(){return rl},Ph:function(){return ny},Q5:function(){return N},Qr:function(){return rH},R:function(){return rN},RE:function(){return oP},Re:function(){return oH},SV:function(){return oA},Tu:function(){return ry},VW:function(){return r9},Vq:function(){return rv},W2:function(){return op},X6:function(){return ob},XL:function(){return eR},XZ:function(){return ol},Xp:function(){return o7},Y8:function(){return nf},Zb:function(){return or},__:function(){return tM},bg:function(){return oY},d2:function(){return eD},eb:function(){return eO},f6:function(){return eF},fo:function(){return oG},gF:function(){return oy},h4:function(){return eC},hO:function(){return S},h_:function(){return o6},iX:function(){return oO},j2:function(){return rE},kC:function(){return t4},kS:function(){return rF},li:function(){return oK},m4:function(){return y},mh:function(){return o1},oi:function(){return nW},p2:function(){return tq},p8:function(){return r$},pm:function(){return ie},qE:function(){return tH},qh:function(){return eE},rj:function(){return om},rs:function(){return nR},sJ:function(){return oD},sN:function(){return rM},sz:function(){return oM},td:function(){return rX},u:function(){return n2},uE:function(){return n0},ue:function(){return eQ},v2:function(){return rR},vI:function(){return o5},x4:function(){return rG},xu:function(){return tJ},xv:function(){return t0},zx:function(){return oo}});var n=o(20920),r=o(33385),i=o(57437),a=o(83238),l=o(2265),d=o(84851),s=o(59679),c=o(92840),u=o(71033),f=o(91545),p=o(50032),h=o(97859),m=o(40521),g=o(48614),b=o(54887),v=o(52141);let y=n.m4,w=(0,n.fi)(),x=[],$={},k="--motion-content-opacity",z={initial:{opacity:.5,[k]:0,scale:.97,willChange:"transform"},animate:{opacity:[null,1,1],[k]:[null,null,1],scale:1},exit:{opacity:[null,null,0],[k]:[null,0,0],scale:.97},transition:{duration:.4,type:"spring"}};function S(e){return 0===e?0:`${e/16}rem`}function j(e,t,o){return(t?.map(o)||[]).map((t,o)=>0===o?t:{[`@media screen and (min-width: ${e[o-1]}px)`]:t})}function C(e,t){return void 0===e?t||x:Array.isArray(e)?e:[e]}function R(e,t,o=x){if(!Array.isArray(o))throw Error("the property must be array of numbers");if(0===o.length)return null;let{media:n,space:i}=(0,r.aQ)(e);return j(n,o,e=>{var o;return o=S(i[e]),t.reduce((e,t)=>(e[t]=o,e),{})})}function E(e,t){let{$size:o,$weight:n}=t,{font:i,media:a}=(0,r.aQ)(t.theme),{family:l,sizes:d,weights:s}=i[e],c=n&&s[n]||s.regular,u=d[2],f={position:"relative",fontFamily:l,fontWeight:c,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return o?[f,...j(a,o,e=>(function(e){let{ascenderHeight:t,descenderHeight:o,fontSize:n,iconSize:r,letterSpacing:i,lineHeight:a}=e,l=t+o,d=a-l,s=2*Math.floor(1.125*n/2)+1;return{fontSize:S(n),lineHeight:`calc(${a} / ${n})`,letterSpacing:S(i),transform:`translateY(${S(o)})`,"&:before":{marginTop:`calc(${S(0-l)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:S((d-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${r} / 16 * 1rem)`,margin:S((d-r)/2)}}})(d[e]||u))]:(E.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:o,props:t,base:f}),E.warned=!0),[f])}function I(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$align,e=>({textAlign:e}))}function N(e,t){let o;let n=(0,a.c)(3);n[0]!==t||n[1]!==e?(o=()=>[C(e,t),JSON.stringify(e??t)],n[0]=t,n[1]=e,n[2]=o):o=n[2];let[r,i]=(0,l.useState)(o),[d,s]=r,c=JSON.stringify(e??t);return c!==s&&i([C(e,t),c]),d}function _(e,t,o){let n,r,i;let d=(0,a.c)(8),s=void 0===t?T:t;d[0]!==o||d[1]!==s||d[2]!==e?(n=t=>{if(!e)return;let n=t.target;if(!(n instanceof Node))return;let r=o?.();if(!r||r.contains(n)){for(let e of s().flat())if(e&&(n===e||e.contains(n)))return;e(t)}},d[0]=o,d[1]=s,d[2]=e,d[3]=n):n=d[3];let c=(0,v.i)(n),u=!!e;d[4]!==u||d[5]!==c?(r=()=>{if(!u)return;let e=e=>c(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},i=[u,c],d[4]=u,d[5]=c,d[6]=r,d[7]=i):(r=d[6],i=d[7]),(0,l.useEffect)(r,i),(0,l.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function T(){return x}function F(e,t){let o,n;let r=(0,a.c)(6);r[0]!==t||r[1]!==e.current?(o=()=>{e.current?.setCustomValidity(t||"")},r[0]=t,r[1]=e.current,r[2]=o):o=r[2],r[3]!==t||r[4]!==e?(n=[t,e],r[3]=t,r[4]=e,r[5]=n):n=r[5],(0,l.useEffect)(o,n)}var M,O=[],A="ResizeObserver loop completed with undelivered notifications.",L=function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:A}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=A),window.dispatchEvent(e)};(B=M||(M={})).BORDER_BOX="border-box",B.CONTENT_BOX="content-box",B.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var B,D,Q=function(e){return Object.freeze(e)},P=function(e,t){this.inlineSize=e,this.blockSize=t,Q(this)},H=function(){function e(e,t,o,n){return this.x=e,this.y=t,this.width=o,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Q(this)}return e.prototype.toJSON=function(){var e=this.x,t=this.y,o=this.top,n=this.right,r=this.bottom;return{x:e,y:t,top:o,right:n,bottom:r,left:this.left,width:this.width,height:this.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),V=function(e){return e instanceof SVGElement&&"getBBox"in e},W=function(e){if(V(e)){var t=e.getBBox(),o=t.width,n=t.height;return!o&&!n}var r=e.offsetWidth,i=e.offsetHeight;return!(r||i||e.getClientRects().length)},q=function(e){if(e instanceof Element)return!0;var t,o=null===(t=e?.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(o&&e instanceof o.Element)},X=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},G="u">typeof window?window:{},Y=new WeakMap,K=/auto|scroll/,U=/^tb|vertical/,J=/msie|trident/i.test(G.navigator&&G.navigator.userAgent),Z=function(e){return parseFloat(e||"0")},ee=function(e,t,o){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=!1),new P((o?t:e)||0,(o?e:t)||0)},et=Q({devicePixelContentBoxSize:ee(),borderBoxSize:ee(),contentBoxSize:ee(),contentRect:new H(0,0,0,0)}),eo=function(e,t){if(void 0===t&&(t=!1),Y.has(e)&&!t)return Y.get(e);if(W(e))return Y.set(e,et),et;var o=getComputedStyle(e),n=V(e)&&e.ownerSVGElement&&e.getBBox(),r=!J&&"border-box"===o.boxSizing,i=U.test(o.writingMode||""),a=!n&&K.test(o.overflowY||""),l=!n&&K.test(o.overflowX||""),d=n?0:Z(o.paddingTop),s=n?0:Z(o.paddingRight),c=n?0:Z(o.paddingBottom),u=n?0:Z(o.paddingLeft),f=n?0:Z(o.borderTopWidth),p=n?0:Z(o.borderRightWidth),h=n?0:Z(o.borderBottomWidth),m=n?0:Z(o.borderLeftWidth),g=u+s,b=d+c,v=m+p,y=f+h,w=l?e.offsetHeight-y-e.clientHeight:0,x=a?e.offsetWidth-v-e.clientWidth:0,$=n?n.width:Z(o.width)-(r?g+v:0)-x,k=n?n.height:Z(o.height)-(r?b+y:0)-w,z=$+g+x+v,S=k+b+w+y,j=Q({devicePixelContentBoxSize:ee(Math.round($*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:ee(z,S,i),contentBoxSize:ee($,k,i),contentRect:new H(u,d,$,k)});return Y.set(e,j),j},en=function(e,t,o){var n=eo(e,o),r=n.borderBoxSize,i=n.contentBoxSize,a=n.devicePixelContentBoxSize;switch(t){case M.DEVICE_PIXEL_CONTENT_BOX:return a;case M.BORDER_BOX:return r;default:return i}},er=function(e){var t=eo(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=Q([t.borderBoxSize]),this.contentBoxSize=Q([t.contentBoxSize]),this.devicePixelContentBoxSize=Q([t.devicePixelContentBoxSize])},ei=function(e){if(W(e))return 1/0;for(var t=0,o=e.parentNode;o;)t+=1,o=o.parentNode;return t},ea=function(){var e=1/0,t=[];O.forEach(function(o){if(0!==o.activeTargets.length){var n=[];o.activeTargets.forEach(function(t){var o=new er(t.target),r=ei(t.target);n.push(o),t.lastReportedSize=en(t.target,t.observedBox),r<e&&(e=r)}),t.push(function(){o.callback.call(o.observer,n,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var o=0;o<t.length;o++)(0,t[o])();return e},el=function(e){O.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(o){o.isActive()&&(ei(o.target)>e?t.activeTargets.push(o):t.skippedTargets.push(o))})})},ed=function(){var e=0;for(el(0);O.some(function(e){return e.activeTargets.length>0});)el(e=ea());return O.some(function(e){return e.skippedTargets.length>0})&&L(),e>0},es=[],ec=function(e){if(!D){var t=0,o=document.createTextNode("");new MutationObserver(function(){return es.splice(0).forEach(function(e){return e()})}).observe(o,{characterData:!0}),D=function(){o.textContent="".concat(t?t--:t++)}}es.push(e),D()},eu=function(e){ec(function(){requestAnimationFrame(e)})},ef=0,ep={attributes:!0,characterData:!0,childList:!0,subtree:!0},eh=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],em=function(e){return void 0===e&&(e=0),Date.now()+e},eg=!1,eb=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!eg){eg=!0;var o=em(e);eu(function(){var n=!1;try{n=ed()}finally{if(eg=!1,e=o-em(),!ef)return;n?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,ep)};document.body?t():G.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),eh.forEach(function(t){return G.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),eh.forEach(function(t){return G.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),ev=function(e){!ef&&e>0&&eb.start(),(ef+=e)||eb.stop()},ey=function(){function e(e,t){this.target=e,this.observedBox=t||M.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=en(this.target,this.observedBox,!0);return V(e=this.target)||X(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),ew=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},ex=new WeakMap,e$=function(e,t){for(var o=0;o<e.length;o+=1)if(e[o].target===t)return o;return -1},ek=function(){function e(){}return e.connect=function(e,t){var o=new ew(e,t);ex.set(e,o)},e.observe=function(e,t,o){var n=ex.get(e),r=0===n.observationTargets.length;0>e$(n.observationTargets,t)&&(r&&O.push(n),n.observationTargets.push(new ey(t,o&&o.box)),ev(1),eb.schedule())},e.unobserve=function(e,t){var o=ex.get(e),n=e$(o.observationTargets,t),r=1===o.observationTargets.length;n>=0&&(r&&O.splice(O.indexOf(o),1),o.observationTargets.splice(n,1),ev(-1))},e.disconnect=function(e){var t=this,o=ex.get(e);o.observationTargets.slice().forEach(function(o){return t.unobserve(e,o.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),ez=function(){function e(e){if(0==arguments.length)throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ek.connect(this,e)}return e.prototype.observe=function(e,t){if(0==arguments.length)throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!q(e))throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ek.observe(this,e,t)},e.prototype.unobserve=function(e){if(0==arguments.length)throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!q(e))throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ek.unobserve(this,e)},e.prototype.disconnect=function(){ek.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();let eS="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:ez,ej=function(){let e=new WeakMap,t=new WeakMap;return{subscribe(o,n){let r=t.get(o)||[],i=e.get(o);return t.has(o)||(t.set(o,r),i=({subscribe(e,t){let o=new eS(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return o.observe(e),()=>{o.unobserve(e),o.disconnect()}}}).subscribe(o,e=>{for(let t of r)t(e)})),r.push(n),()=>{let e=r.indexOf(n);e>-1&&r.splice(e,1),0===r.length&&i&&i()}}}}();function eC(e){let t,o;let n=(0,a.c)(3),[r,i]=(0,l.useState)(null);return n[0]!==e?(t=()=>{if(e)return ej.subscribe(e,i)},o=[e],n[0]=e,n[1]=t,n[2]=o):(t=n[1],o=n[2]),(0,l.useEffect)(t,o),r}function eR(e){return eC(e)?._contentRect||null}function eE(e){let t,o,n;let r=(0,a.c)(5);r[0]!==e?(t=t=>e(t),r[0]=e,r[1]=t):t=r[1];let i=(0,v.i)(t);r[2]!==i?(o=()=>{let e=e=>i(e);return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},n=[i],r[2]=i,r[3]=o,r[4]=n):(o=r[3],n=r[4]),(0,l.useEffect)(o,n)}function eI(e,t){let{subscribe:o,getSnapshot:n}=(0,l.useMemo)(()=>{let t;let o=()=>(t||(t=window.matchMedia(e)),t);return{subscribe:e=>{let t=o();return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},getSnapshot:()=>o().matches}},[e]);return(0,l.useDebugValue)(e),(0,l.useSyncExternalStore)(o,n,t)}let eN=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function e_(e,t){let o=Symbol.for(e);return typeof document>"u"?(0,l.createContext)(t):(eN[o]=eN[o]||(0,l.createContext)(t),eN[o])}let eT=e_("@sanity/ui/context/theme",null);function eF(e){let t,o,r,d;let s=(0,a.c)(15),u=(0,l.useContext)(eT),{children:f}=e,p=e.scheme??(u?.scheme||"light"),h=e.theme??(u?.theme||null),m=e.tone??(u?.tone||"default");e:{let e;if(!h){t=null;break e}s[0]!==h||s[1]!==p||s[2]!==m?(e={version:0,theme:h,scheme:p,tone:m},s[0]=h,s[1]=p,s[2]=m,s[3]=e):e=s[3],t=e}let g=t;t:{let e;if(!h){o=null;break t}s[4]!==h||s[5]!==p||s[6]!==m?(e=(0,n.BA)(h,p,m),s[4]=h,s[5]=p,s[6]=m,s[7]=e):e=s[7],o=e}let b=o;if(!b){let e;return s[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),s[8]=e):e=s[8],e}return s[9]!==f||s[10]!==b?(r=(0,i.jsx)(c.f6,{theme:b,children:f}),s[9]=f,s[10]=b,s[11]=r):r=s[11],s[12]!==r||s[13]!==g?(d=(0,i.jsx)(eT.Provider,{value:g,children:r}),s[12]=r,s[13]=g,s[14]=d):d=s[14],d}function eM(){let e=(0,l.useContext)(eT);if(!e)throw Error("useRootTheme(): missing context value");return e}function eO(e){let t;let o=(0,a.c)(5),{children:n,scheme:r,tone:l}=e,d=eM(),s=r||d.scheme;return o[0]!==n||o[1]!==d.theme||o[2]!==s||o[3]!==l?(t=(0,i.jsx)(eF,{scheme:s,theme:d.theme,tone:l,children:n}),o[0]=n,o[1]=d.theme,o[2]=s,o[3]=l,o[4]=t):t=o[4],t}function eA(){return(0,c.Fg)()}function eL(){let e;let t=(0,a.c)(2),o=(0,c.Fg)();return t[0]!==o?(e=(0,r.aQ)(o),t[0]=o,t[1]=e):e=t[1],e}function eB(){return 0}function eD(){let e,t;let o=(0,a.c)(2),{media:n}=eL();return o[0]!==n?(t=function(e){let t;let o=e.length,n=()=>{if(!t){t=[];for(let r=o;r>-1;r-=1){var n;let o=0===(n=r)?`screen and (max-width: ${e[n]-1}px)`:n===e.length?`screen and (min-width: ${e[n-1]}px)`:`screen and (min-width: ${e[n-1]}px) and (max-width: ${e[n]-1}px)`;t.push({index:r,mq:window.matchMedia(o)})}}return t};return{getSnapshot:()=>{for(let{index:e,mq:t}of n())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:o}of n()){let n=()=>{o.matches&&e()};o.addEventListener("change",n),t.push(()=>o.removeEventListener("change",n))}return()=>{for(let e of t)e()}}}}(n),o[0]=n,o[1]=t):t=o[1],e=t,(0,l.useSyncExternalStore)(e.subscribe,e.getSnapshot,eB)}function eQ(e){return eI("(prefers-color-scheme: dark)",void 0===e?eP:e)}function eP(){return!1}function eH(e){return eI("(prefers-reduced-motion: reduce)",void 0===e?eV:e)}function eV(){return!1}function eW(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$border,e=>e?{"&&":{border:n}}:{"&&":{border:0}})}function eq(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderTop,e=>e?{"&&":{borderTop:n}}:{"&&":{borderTop:0}})}function eX(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderRight,e=>e?{"&&":{borderRight:n}}:{"&&":{borderRight:0}})}function eG(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderBottom,e=>e?{"&&":{borderBottom:n}}:{"&&":{borderBottom:0}})}function eY(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderLeft,e=>e?{"&&":{borderLeft:n}}:{"&&":{borderLeft:0}})}eF.displayName="ThemeProvider",eO.displayName="ThemeColorProvider";let eK={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eU={content:"content-box",border:"border-box"},eJ={stretch:"stretch",fill:"100%"};function eZ(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function e0(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$sizing,e=>({boxSizing:eU[e]}))}function e1(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$height,e=>({height:eJ[e]}))}function e2(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$overflow,e=>({overflow:e}))}let e3={"&&:not([hidden])":{display:"flex"}};function e4(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$align,e=>({alignItems:e}))}function e5(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return j(t,e.$gap,e=>({gap:e?S(o[e]):void 0}))}function e6(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$wrap,e=>({flexWrap:e}))}function e7(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$justify,e=>({justifyContent:e}))}function e8(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$direction,e=>({flexDirection:e}))}let e9={minWidth:0,minHeight:0};function te(){return[e9,tt]}function tt(e){let{media:t}=(0,r.aQ)(e.theme);return e.$flex?j(t,e.$flex,e=>({flex:e})):x}function to(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function tn(e){let{base:t,border:o,focusRing:n}=e,r=n.offset+n.width,i=0-n.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,o&&to(o),i<0&&`0 0 0 ${0-i}px ${a}`,r>0&&`0 0 0 ${r}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let tr={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},ti={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},ta={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function tl(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function td(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$autoRows,e=>({gridAutoRows:e&&ta[e]}))}function ts(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$autoCols,e=>({gridAutoColumns:e&&ti[e]}))}function tc(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function tu(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function tf(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return j(t,e.$gap,e=>({gridGap:e?S(o[e]):void 0}))}function tp(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return j(t,e.$gapX,e=>({columnGap:e?S(o[e]):void 0}))}function th(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return j(t,e.$gapY,e=>({rowGap:e?S(o[e]):void 0}))}let tm={auto:"auto",full:"1 / -1"},tg={auto:"auto",full:"1 / -1"};function tb(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:tm[e]})}function tv(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$rowStart,e=>({gridRowStart:e}))}function ty(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$rowEnd,e=>({gridRowEnd:e}))}function tw(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:tg[e]})}function tx(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$columnStart,e=>({gridColumnStart:e}))}function t$(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$columnEnd,e=>({gridColumnEnd:e}))}function tk(e){let{$fontSize:t,$iconLeft:o,$iconRight:n,$padding:i,$space:a}=e,{font:l,media:d,space:s}=(0,r.aQ)(e.theme),c=Math.max(i.length,a.length,t.length),u=[],f=[],p=[];for(let e=0;e<c;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],u[e]=void 0===i[e]?u[e-1]:i[e],f[e]=void 0===a[e]?f[e-1]:a[e];return j(d,u,(e,t)=>{let r=l.text.sizes[p[t]]||l.text.sizes[2],i=r.lineHeight-r.ascenderHeight-r.descenderHeight,a=s[u[t]],d=s[f[t]],c={paddingTop:S(a-r.ascenderHeight),paddingRight:S(a),paddingBottom:S(a-r.descenderHeight),paddingLeft:S(a)};return n&&(c.paddingRight=S(a+i+d)),o&&(c.paddingLeft=S(a+i+d)),c})}function tz(e){return tk({...e,$iconRight:!0})}let tS=(0,c.iv)`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function tj(){return tS}function tC(e){let{$scheme:t,$tone:o,$weight:n}=e,{color:i,font:a}=(0,r.aQ)(e.theme);return(0,c.iv)`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${a.text.family};
    font-weight: ${n&&a.text.weights[n]||a.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${o}'] {
      --input-fg-color: ${i.input.default.enabled.fg};
      --input-placeholder-color: ${i.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${i.input.default.enabled.fg};
        --input-placeholder-color: ${i.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${i.input.default.disabled.fg};
        --input-placeholder-color: ${i.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${i.input.invalid.enabled.fg};
        --input-placeholder-color: ${i.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${i.input.default.readOnly.fg};
        --input-placeholder-color: ${i.input.default.readOnly.placeholder};
      }
    }
  `}function tR(e){let{font:t,media:o}=(0,r.aQ)(e.theme);return j(o,e.$fontSize,e=>{let o=t.text.sizes[e]||t.text.sizes[2];return{fontSize:S(o.fontSize),lineHeight:o.lineHeight/o.fontSize}})}function tE(e){let{$hasPrefix:t,$hasSuffix:o,$scheme:n,$tone:i,$unstableDisableFocusRing:a}=e,{color:l,input:d}=(0,r.aQ)(e.theme);return(0,c.iv)`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${o?0:void 0};
    border-bottom-right-radius: ${o?0:void 0};

    &[data-scheme='${n}'][data-tone='${i}'] {
      --card-bg-color: ${l.input.default.enabled.bg};
      --card-fg-color: ${l.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${to({color:l.input.default.enabled.border,width:d.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${l.input.invalid.enabled.bg};
        --card-fg-color: ${l.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${to({color:l.input.invalid.enabled.border,width:d.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${a?void 0:tn({border:{color:l.input.default.enabled.border,width:d.border.width},focusRing:d.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${a?void 0:tn({focusRing:d.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${l.input.default.disabled.bg} !important;
        --card-fg-color: ${l.input.default.disabled.fg} !important;
        --card-icon-color: ${l.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${to({color:l.input.default.disabled.border,width:d.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${l.input.invalid.disabled.bg} !important;
        --card-fg-color: ${l.input.invalid.disabled.fg} !important;
        --card-icon-color: ${l.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${to({color:l.input.invalid.disabled.border,width:d.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${l.input.default.readOnly.bg} !important;
        --card-fg-color: ${l.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${l.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${l.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${l.input.default.hovered.bg};
          --card-fg-color: ${l.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${l.input.invalid.hovered.bg};
          --card-fg-color: ${l.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${to({color:l.input.default.hovered.border,width:d.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${to({color:l.input.invalid.hovered.border,width:d.border.width})};
        }
      }
    }
  `}function tI(e){let{theme:t}=e;return[R(t,["padding"],e.$padding),R(t,["paddingLeft","paddingRight"],e.$paddingX),R(t,["paddingTop","paddingBottom"],e.$paddingY),R(t,["paddingTop"],e.$paddingTop),R(t,["paddingRight"],e.$paddingRight),R(t,["paddingBottom"],e.$paddingBottom),R(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function tN(e){let{media:t,radius:o}=(0,r.aQ)(e.theme);return j(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=S(o[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function t_(e,t){return`${e.map(S).join(" ")} ${t}`}let tT=c.zo.span.withConfig({displayName:"SpanWithTextOverflow",componentId:"sc-ol2i3b-0"})`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,tF=c.zo.div.withConfig({displayName:"StyledLabel",componentId:"sc-1luap7z-0"})(function(e){return E("label",e)},I,function(e){let{$accent:t,$muted:o}=e,{font:n}=(0,r.aQ)(e.theme);return(0,c.iv)`
    text-transform: uppercase;

    ${t&&(0,c.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,c.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),tM=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,f;let p=(0,a.c)(22);p[0]!==e?({accent:o,align:n,children:r,muted:d,size:s,textOverflow:c,weight:u,...l}=e,p[0]=e,p[1]=o,p[2]=n,p[3]=r,p[4]=l,p[5]=d,p[6]=s,p[7]=c,p[8]=u):(o=p[1],n=p[2],r=p[3],l=p[4],d=p[5],s=p[6],c=p[7],u=p[8]);let h=void 0!==d&&d,m=void 0===s?2:s,g=r;if("ellipsis"===c){let e;p[9]!==g?(e=(0,i.jsx)(tT,{children:g}),p[9]=g,p[10]=e):e=p[10],g=e}else{let e;p[11]!==g?(e=(0,i.jsx)("span",{children:g}),p[11]=g,p[12]=e):e=p[12],g=e}let b=N(n),v=N(m);return p[13]!==o||p[14]!==g||p[15]!==h||p[16]!==t||p[17]!==l||p[18]!==b||p[19]!==v||p[20]!==u?(f=(0,i.jsx)(tF,{"data-ui":"Label",...l,$accent:o,$align:b,$muted:h,$size:v,$weight:u,ref:t,children:g}),p[13]=o,p[14]=g,p[15]=h,p[16]=t,p[17]=l,p[18]=b,p[19]=v,p[20]=u,p[21]=f):f=p[21],f});tM.displayName="ForwardRef(Label)";let tO=c.zo.div.withConfig({displayName:"StyledAvatar",componentId:"sc-1rj7kl0-0"})(function(e){let{avatar:t,media:o}=(0,r.aQ)(e.theme);return j(o,e.$size,e=>{let o=t.sizes[e]||t.sizes[0];return{width:S(o.size),height:S(o.size),borderRadius:S(o.size/2),"&>svg":{width:S(o.size),height:S(o.size),borderRadius:S(o.size/2)}}})},function(e){let{$color:t}=e,{avatar:o}=(0,r.aQ)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:.5},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:tn({focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}}),tA=c.zo.div.withConfig({displayName:"Arrow",componentId:"sc-1rj7kl0-1"})(function(){return{position:"absolute",boxSizing:"border-box",zIndex:0,opacity:0,transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:0},"[data-arrow-position='top'] > &":{opacity:1,transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:1,transform:"rotate(-180deg)"}}}),tL=c.zo.ellipse.withConfig({displayName:"BgStroke",componentId:"sc-1rj7kl0-2"})(function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}}),tB=c.zo.ellipse.withConfig({displayName:"Stroke",componentId:"sc-1rj7kl0-3"})(function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}}),tD=c.zo.div.withConfig({displayName:"Initials",componentId:"sc-1rj7kl0-4"})(function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}}),tQ=(0,c.zo)(tM).withConfig({displayName:"InitialsLabel",componentId:"sc-1rj7kl0-5"})({color:"inherit"}),tP=c.zo.svg.withConfig({displayName:"AvatarImage",componentId:"sc-1rj7kl0-6"})(function(){return{position:"relative"}}),tH=(0,l.forwardRef)(function(e,t){let o,n,r,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,z,S,j,C,R;let E=(0,a.c)(52);E[0]!==e?({__unstable_hideInnerStroke:o,as:s,color:h,src:p,title:b,initials:c,onImageLoadError:u,arrowPosition:r,animateArrowFrom:n,status:m,size:g,...f}=e,E[0]=e,E[1]=o,E[2]=n,E[3]=r,E[4]=s,E[5]=c,E[6]=u,E[7]=f,E[8]=p,E[9]=h,E[10]=m,E[11]=g,E[12]=b):(o=E[1],n=E[2],r=E[3],s=E[4],c=E[5],u=E[6],f=E[7],p=E[8],h=E[9],m=E[10],g=E[11],b=E[12]);let I=void 0===h?"gray":h,_=void 0===m?"online":m,T=void 0===g?1:g,{avatar:F}=eL(),M=d.isValidElementType(s)?s:"div",O=N(T),A=(F.sizes[O[0]]||F.sizes[0]).size,L=A/2,B=(0,l.useId)(),[D,Q]=(0,l.useState)(n||r||"inside"),[P,H]=(0,l.useState)(!1),V=`avatar-image-${B}`;E[13]!==D||E[14]!==r?(v=()=>{if(D===r)return;let e=requestAnimationFrame(()=>Q(r));return()=>cancelAnimationFrame(e)},y=[D,r],E[13]=D,E[14]=r,E[15]=v,E[16]=y):(v=E[15],y=E[16]),(0,l.useEffect)(v,y),E[17]!==p?(w=()=>{p&&H(!1)},x=[p],E[17]=p,E[18]=w,E[19]=x):(w=E[18],x=E[19]),(0,l.useEffect)(w,x),E[20]!==u?($=()=>{H(!0),u&&u(Error("Avatar: the image failed to load"))},E[20]=u,E[21]=$):$=E[21];let W=$;E[22]!==O?(z=O.map(tV),E[22]=O,E[23]=z):z=E[23],k=z;let q="string"==typeof M?M:void 0;return E[24]!==I?(S=(0,i.jsx)(tA,{children:(0,i.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,i.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:I})})}),E[24]=I,E[25]=S):S=E[25],E[26]!==o||E[27]!==L||E[28]!==A||E[29]!==W||E[30]!==P||E[31]!==V||E[32]!==p?(j=!P&&p&&(0,i.jsxs)(tP,{viewBox:`0 0 ${A} ${A}`,fill:"none",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:V,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,i.jsx)("image",{href:p,width:"1",height:"1",onError:W})})}),(0,i.jsx)("circle",{cx:L,cy:L,r:L,fill:`url(#${V})`}),!o&&(0,i.jsx)(tL,{cx:L,cy:L,rx:L,ry:L,vectorEffect:"non-scaling-stroke"}),(0,i.jsx)(tB,{cx:L,cy:L,rx:L,ry:L,vectorEffect:"non-scaling-stroke"})]}),E[26]=o,E[27]=L,E[28]=A,E[29]=W,E[30]=P,E[31]=V,E[32]=p,E[33]=j):j=E[33],E[34]!==P||E[35]!==c||E[36]!==k||E[37]!==p?(C=(P||!p)&&c&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(tD,{children:(0,i.jsx)(tQ,{forwardedAs:"span",size:k,weight:"medium",children:c})})}),E[34]=P,E[35]=c,E[36]=k,E[37]=p,E[38]=C):C=E[38],E[39]!==D||E[40]!==M||E[41]!==I||E[42]!==t||E[43]!==f||E[44]!==O||E[45]!==_||E[46]!==q||E[47]!==S||E[48]!==j||E[49]!==C||E[50]!==b?(R=(0,i.jsxs)(tO,{as:M,"data-as":q,"data-ui":"Avatar",...f,$color:I,$size:O,"aria-label":b,"data-arrow-position":D,"data-status":_,ref:t,title:b,children:[S,j,C]}),E[39]=D,E[40]=M,E[41]=I,E[42]=t,E[43]=f,E[44]=O,E[45]=_,E[46]=q,E[47]=S,E[48]=j,E[49]=C,E[50]=b,E[51]=R):R=E[51],R});function tV(e){return 1===e?1:2===e?3:3===e?5:0}tH.displayName="ForwardRef(Avatar)";let tW=c.zo.div.withConfig({displayName:"StyledAvatarCounter",componentId:"sc-1ydx86y-0"})(function(e){let{avatar:t,media:o}=(0,r.aQ)(e.theme);return j(o,e.$size,e=>{let o=t.sizes[e];return o?{borderRadius:S(o.size/2),minWidth:S(o.size),height:S(o.size)}:$})},function(e){let{space:t}=(0,r.aQ)(e.theme);return(0,c.iv)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${S(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),tq=(0,l.forwardRef)(function(e,t){let o,n,r,l;let d=(0,a.c)(9),{count:s,size:c}=e,u=N(void 0===c?1:c);return d[0]!==u?(n=u.map(tX),d[0]=u,d[1]=n):n=d[1],o=n,d[2]!==s||d[3]!==o?(r=(0,i.jsx)(tM,{as:"span",size:o,weight:"medium",children:s}),d[2]=s,d[3]=o,d[4]=r):r=d[4],d[5]!==t||d[6]!==u||d[7]!==r?(l=(0,i.jsx)(tW,{$size:u,"data-ui":"AvatarCounter",ref:t,children:r}),d[5]=t,d[6]=u,d[7]=r,d[8]=l):l=d[8],l});function tX(e){return 1===e?1:2===e?3:3===e?5:0}tq.displayName="ForwardRef(AvatarCounter)";let tG=(0,c.iv)`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,tY=c.zo.div.withConfig({displayName:"StyledAvatarStack",componentId:"sc-cysmbb-0"})(function(e){let{avatar:t,media:o}=(0,r.aQ)(e.theme);return j(o,e.$size,e=>{let o=t.sizes[e];return o?{"& > div + div":{marginLeft:S(o.distance)}}:$})},function(){return tG}),tK=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c;let u=(0,a.c)(15);u[0]!==e?({children:o,maxLength:r,size:d,...n}=e,u[0]=e,u[1]=o,u[2]=n,u[3]=r,u[4]=d):(o=u[1],n=u[2],r=u[3],d=u[4]);let f=void 0===r?4:r,p=void 0===d?1:d,h=l.Children.toArray(o).filter(l.isValidElement),m=N(p),g=h.length,b=g-(Math.max(f,0)-1),v=b>1?h.slice(b,g):h,y=0===g&&(0,i.jsx)("div",{children:(0,i.jsx)(tq,{count:g,size:m})}),w=0!==g&&b>1&&(0,i.jsx)("div",{children:(0,i.jsx)(tq,{count:b,size:m})});u[5]!==m?(s=(e,t)=>(0,i.jsx)("div",{children:(0,l.cloneElement)(e,{size:m})},String(t)),u[5]=m,u[6]=s):s=u[6];let x=v.map(s);return u[7]!==tY||u[8]!==t||u[9]!==n||u[10]!==m||u[11]!==y||u[12]!==w||u[13]!==x?(c=(0,i.jsxs)(tY,{"data-ui":"AvatarStack",...n,ref:t,$size:m,children:[y,w,x]}),u[7]=tY,u[8]=t,u[9]=n,u[10]=m,u[11]=y,u[12]=w,u[13]=x,u[14]=c):c=u[14],c});tK.displayName="ForwardRef(AvatarStack)";let tU=c.zo.div.withConfig({displayName:"StyledBox",componentId:"sc-1hhky9f-0"})(function(){return eK},te,function(){return[e0,e1,e2,eZ]},function(){return[tb,tv,ty,tw,tx,t$]},function(e){let{theme:t}=e;return[R(t,["margin"],e.$margin),R(t,["marginLeft","marginRight"],e.$marginX),R(t,["marginTop","marginBottom"],e.$marginY),R(t,["marginTop"],e.$marginTop),R(t,["marginRight"],e.$marginRight),R(t,["marginBottom"],e.$marginBottom),R(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},tI),tJ=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,z,S,j,C,R,E,I,_;let T=(0,a.c)(59);T[0]!==e?({as:C,column:o,columnStart:r,columnEnd:n,display:R,flex:l,height:d,margin:E,marginX:p,marginY:h,marginTop:f,marginRight:u,marginBottom:s,marginLeft:c,overflow:m,padding:I,paddingX:w,paddingY:x,paddingTop:y,paddingRight:v,paddingBottom:g,paddingLeft:b,row:k,rowStart:S,rowEnd:z,sizing:j,...$}=e,T[0]=e,T[1]=o,T[2]=n,T[3]=r,T[4]=l,T[5]=d,T[6]=s,T[7]=c,T[8]=u,T[9]=f,T[10]=p,T[11]=h,T[12]=m,T[13]=g,T[14]=b,T[15]=v,T[16]=y,T[17]=w,T[18]=x,T[19]=$,T[20]=k,T[21]=z,T[22]=S,T[23]=j,T[24]=C,T[25]=R,T[26]=E,T[27]=I):(o=T[1],n=T[2],r=T[3],l=T[4],d=T[5],s=T[6],c=T[7],u=T[8],f=T[9],p=T[10],h=T[11],m=T[12],g=T[13],b=T[14],v=T[15],y=T[16],w=T[17],x=T[18],$=T[19],k=T[20],z=T[21],S=T[22],j=T[23],C=T[24],R=T[25],E=T[26],I=T[27]);let F=void 0===C?"div":C,M=void 0===R?"block":R,O=void 0===E?0:E,A=void 0===I?0:I,L="string"==typeof F?F:void 0,B=N(o),D=N(r),Q=N(n),P=N(M),H=N(l),V=N(d),W=N(O),q=N(p),X=N(h),G=N(f),Y=N(u),K=N(s),U=N(c),J=N(m),Z=N(A),ee=N(w),et=N(x),eo=N(y),en=N(v),er=N(g),ei=N(b),ea=N(k),el=N(S),ed=N(z),es=N(j);return T[28]!==F||T[29]!==e.children||T[30]!==t||T[31]!==$||T[32]!==V||T[33]!==W||T[34]!==q||T[35]!==X||T[36]!==G||T[37]!==Y||T[38]!==K||T[39]!==U||T[40]!==J||T[41]!==Z||T[42]!==ee||T[43]!==et||T[44]!==eo||T[45]!==en||T[46]!==er||T[47]!==ei||T[48]!==ea||T[49]!==el||T[50]!==ed||T[51]!==es||T[52]!==L||T[53]!==B||T[54]!==D||T[55]!==Q||T[56]!==P||T[57]!==H?(_=(0,i.jsx)(tU,{"data-as":L,"data-ui":"Box",...$,$column:B,$columnStart:D,$columnEnd:Q,$display:P,$flex:H,$height:V,$margin:W,$marginX:q,$marginY:X,$marginTop:G,$marginRight:Y,$marginBottom:K,$marginLeft:U,$overflow:J,$padding:Z,$paddingX:ee,$paddingY:et,$paddingTop:eo,$paddingRight:en,$paddingBottom:er,$paddingLeft:ei,$row:ea,$rowStart:el,$rowEnd:ed,$sizing:es,as:F,ref:t,children:e.children}),T[28]=F,T[29]=e.children,T[30]=t,T[31]=$,T[32]=V,T[33]=W,T[34]=q,T[35]=X,T[36]=G,T[37]=Y,T[38]=K,T[39]=U,T[40]=J,T[41]=Z,T[42]=ee,T[43]=et,T[44]=eo,T[45]=en,T[46]=er,T[47]=ei,T[48]=ea,T[49]=el,T[50]=ed,T[51]=es,T[52]=L,T[53]=B,T[54]=D,T[55]=Q,T[56]=P,T[57]=H,T[58]=_):_=T[58],_});tJ.displayName="ForwardRef(Box)";let tZ=c.zo.div.withConfig({displayName:"StyledText",componentId:"sc-11ov82j-0"})(function(e){return E("text",e)},I,function(e){let{$accent:t,$muted:o}=e,{font:n}=(0,r.aQ)(e.theme);return(0,c.iv)`
    color: var(--card-fg-color);

    ${t&&(0,c.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,c.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${n.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),t0=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:l,align:o,children:n,muted:d,size:s,textOverflow:c,weight:u,...r}=e,h[0]=e,h[1]=o,h[2]=n,h[3]=r,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(o=h[1],n=h[2],r=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let m=void 0!==l&&l,g=void 0!==d&&d,b=void 0===s?2:s,v=n;if("ellipsis"===c){let e;h[9]!==v?(e=(0,i.jsx)(tT,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let y=N(o),w=N(b);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==m||h[14]!==g||h[15]!==t||h[16]!==r||h[17]!==y||h[18]!==w||h[19]!==f||h[20]!==u?(p=(0,i.jsx)(tZ,{"data-ui":"Text",...r,$accent:m,$align:y,$muted:g,ref:t,$size:w,$weight:u,children:f}),h[13]=m,h[14]=g,h[15]=t,h[16]=r,h[17]=y,h[18]=w,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});t0.displayName="ForwardRef(Text)";let t1=(0,c.zo)(tJ).withConfig({displayName:"StyledBadge",componentId:"sc-5u140l-0"})(tN,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),t2=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u;let f=(0,a.c)(17);if(f[0]!==e){let{children:t,fontSize:i,mode:a,padding:c,radius:u,tone:p,...h}=e;o=t,r=i,l=c,d=u,s=p,n=h,f[0]=e,f[1]=o,f[2]=n,f[3]=r,f[4]=l,f[5]=d,f[6]=s}else o=f[1],n=f[2],r=f[3],l=f[4],d=f[5],s=f[6];let p=void 0===r?1:r,h=void 0===l?1:l,m=void 0===s?"default":s,g=N(void 0===d?"full":d),b=N(h);return f[7]!==o||f[8]!==p?(c=(0,i.jsx)(t0,{size:p,children:o}),f[7]=o,f[8]=p,f[9]=c):c=f[9],f[10]!==t||f[11]!==n||f[12]!==g||f[13]!==b||f[14]!==c||f[15]!==m?(u=(0,i.jsx)(t1,{"data-ui":"Badge",...n,$tone:m,$radius:g,padding:b,ref:t,children:c}),f[10]=t,f[11]=n,f[12]=g,f[13]=b,f[14]=c,f[15]=m,f[16]=u):u=f[16],u});t2.displayName="ForwardRef(Badge)";let t3=(0,c.zo)(tJ).withConfig({displayName:"StyledFlex",componentId:"sc-oxesg3-0"})(te,function(){return[e3,e4,e5,e6,e7,e8]}),t4=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({align:o,as:n,direction:s,gap:r,justify:l,wrap:c,...d}=e,f[0]=e,f[1]=o,f[2]=n,f[3]=r,f[4]=l,f[5]=d,f[6]=s,f[7]=c):(o=f[1],n=f[2],r=f[3],l=f[4],d=f[5],s=f[6],c=f[7]);let p=void 0===s?"row":s,h=N(o),m=N(p),g=N(r),b=N(l),v=N(c);return f[8]!==n||f[9]!==t||f[10]!==d||f[11]!==h||f[12]!==m||f[13]!==g||f[14]!==b||f[15]!==v?(u=(0,i.jsx)(t3,{"data-ui":"Flex",...d,$align:h,$direction:m,$gap:g,$justify:b,$wrap:v,forwardedAs:n,ref:t}),f[8]=n,f[9]=t,f[10]=d,f[11]=h,f[12]=m,f[13]=g,f[14]=b,f[15]=v,f[16]=u):u=f[16],u});t4.displayName="ForwardRef(Flex)";let t5=(0,c.F4)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,t6=(0,c.zo)(t0).withConfig({displayName:"StyledSpinner",componentId:"sc-124hnd0-0"})`& > span > svg{animation:${t5} 500ms linear infinite;}`,t7=(0,l.forwardRef)(function(e,t){let o,n;let r=(0,a.c)(4);return r[0]===Symbol.for("react.memo_cache_sentinel")?(o=(0,i.jsx)(u.L4p,{}),r[0]=o):o=r[0],r[1]!==e||r[2]!==t?(n=(0,i.jsx)(t6,{"data-ui":"Spinner",...e,ref:t,children:o}),r[1]=e,r[2]=t,r[3]=n):n=r[3],n});function t8(e,t,o=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":o?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-neutral-bg-color":t.badge.neutral?.bg,"--card-badge-neutral-dot-color":t.badge.neutral?.dot,"--card-badge-neutral-fg-color":t.badge.neutral?.fg,"--card-badge-neutral-icon-color":t.badge.neutral?.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-suggest-bg-color":t.badge.suggest?.bg,"--card-badge-suggest-dot-color":t.badge.suggest?.dot,"--card-badge-suggest-fg-color":t.badge.suggest?.fg,"--card-badge-suggest-icon-color":t.badge.suggest?.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function t9(...e){return e.filter(Boolean).join(",")}t7.displayName="ForwardRef(Spinner)";let oe=c.zo.button.withConfig({displayName:"StyledButton",componentId:"sc-aaekt4-0"})(tN,function(e){let{$width:t}=e,{style:o}=(0,r.aQ)(e.theme);return(0,c.iv)`
    ${o?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&(0,c.iv)`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:o,color:n,style:i}=(0,r.aQ)(e.theme),a="ghost"===e.$mode,l=n.button[t]||n.button.default,d=l[e.$tone]||l.default,s={width:o.border.width,color:"var(--card-border-color)"},c=void 0;return[t8(n,d.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:to(s),'&:disabled, &[data-disabled="true"]':t8(n,d.disabled),"&:not([data-disabled='true'])":{boxShadow:t9(to(s),a?c:void 0),"&:focus":{boxShadow:tn({base:n,border:{width:2,color:n.bg},focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:t9(to(s),a?c:void 0)},"@media (hover: hover)":{"&:hover":t8(n,d.hovered),"&:active":t8(n,d.pressed),"&[data-hovered]":t8(n,d.hovered)},"&[data-selected]":t8(n,d.pressed)}},i?.button?.root].filter(Boolean)}),ot=c.zo.div.withConfig({displayName:"LoadingBox",componentId:"sc-aaekt4-1"})`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,oo=(0,l.forwardRef)(function(e,t){let o,n,r,d,c,u,f,p,h,m,g,b,v,y,w,x,$,k,z,S,j,C,R,E,I,_,T,F,M,O,A;let L=(0,a.c)(64);L[0]!==e?({children:r,disabled:d,fontSize:y,icon:o,iconRight:n,justify:w,loading:c,mode:x,padding:$,paddingX:m,paddingY:g,paddingTop:h,paddingBottom:u,paddingLeft:f,paddingRight:p,radius:k,selected:v,space:z,text:R,textAlign:E,tone:S,type:j,muted:C,width:I,...b}=e,L[0]=e,L[1]=o,L[2]=n,L[3]=r,L[4]=d,L[5]=c,L[6]=u,L[7]=f,L[8]=p,L[9]=h,L[10]=m,L[11]=g,L[12]=b,L[13]=v,L[14]=y,L[15]=w,L[16]=x,L[17]=$,L[18]=k,L[19]=z,L[20]=S,L[21]=j,L[22]=C,L[23]=R,L[24]=E,L[25]=I):(o=L[1],n=L[2],r=L[3],d=L[4],c=L[5],u=L[6],f=L[7],p=L[8],h=L[9],m=L[10],g=L[11],b=L[12],v=L[13],y=L[14],w=L[15],x=L[16],$=L[17],k=L[18],z=L[19],S=L[20],j=L[21],C=L[22],R=L[23],E=L[24],I=L[25]);let B=void 0===y?1:y,D=void 0===w?"center":w,Q=void 0===x?"default":x,P=void 0===$?3:$,H=void 0===k?2:k,V=void 0===z?3:z,W=void 0===S?"default":S,q=void 0===j?"button":j,X=void 0!==C&&C,{button:G}=eL(),Y=N(D),K=N(P),U=N(m),J=N(g),Z=N(h),ee=N(u),et=N(f),eo=N(p),en=N(H),er=N(V);L[26]!==K||L[27]!==ee||L[28]!==et||L[29]!==eo||L[30]!==Z||L[31]!==U||L[32]!==J?(T={padding:K,paddingX:U,paddingY:J,paddingTop:Z,paddingBottom:ee,paddingLeft:et,paddingRight:eo},L[26]=K,L[27]=ee,L[28]=et,L[29]=eo,L[30]=Z,L[31]=U,L[32]=J,L[33]=T):T=L[33],_=T;let ei=!!(c||d),ea=v?"":void 0,el=!!(c||d);return L[34]!==c?(F=!!c&&(0,i.jsx)(ot,{children:(0,i.jsx)(t7,{})}),L[34]=c,L[35]=F):F=L[35],L[36]!==o||L[37]!==n||L[38]!==_||L[39]!==G||L[40]!==B||L[41]!==Y||L[42]!==X||L[43]!==er||L[44]!==R||L[45]!==E?(M=(o||R||n)&&(0,i.jsx)(tJ,{as:"span",..._,children:(0,i.jsxs)(t4,{as:"span",justify:Y,gap:er,children:[o&&(0,i.jsxs)(t0,{size:B,children:[(0,l.isValidElement)(o)&&o,(0,s.isValidElementType)(o)&&(0,i.jsx)(o,{})]}),R&&(0,i.jsx)(tJ,{children:(0,i.jsx)(t0,{muted:X,align:E,size:B,textOverflow:"ellipsis",weight:G.textWeight,children:R})}),n&&(0,i.jsxs)(t0,{size:B,children:[(0,l.isValidElement)(n)&&n,(0,s.isValidElementType)(n)&&(0,i.jsx)(n,{})]})]})}),L[36]=o,L[37]=n,L[38]=_,L[39]=G,L[40]=B,L[41]=Y,L[42]=X,L[43]=er,L[44]=R,L[45]=E,L[46]=M):M=L[46],L[47]!==_||L[48]!==r?(O=r&&(0,i.jsx)(tJ,{as:"span",..._,children:r}),L[47]=_,L[48]=r,L[49]=O):O=L[49],L[50]!==Q||L[51]!==en||L[52]!==t||L[53]!==b||L[54]!==ei||L[55]!==ea||L[56]!==el||L[57]!==F||L[58]!==M||L[59]!==O||L[60]!==W||L[61]!==q||L[62]!==I?(A=(0,i.jsxs)(oe,{"data-ui":"Button",...b,$mode:Q,$radius:en,$tone:W,"data-disabled":ei,"data-selected":ea,disabled:el,ref:t,type:q,$width:I,children:[F,M,O]}),L[50]=Q,L[51]=en,L[52]=t,L[53]=b,L[54]=ei,L[55]=ea,L[56]=el,L[57]=F,L[58]=M,L[59]=O,L[60]=W,L[61]=q,L[62]=I,L[63]=A):A=L[63],A});oo.displayName="ForwardRef(Button)";let on=(0,c.zo)(tJ).withConfig({displayName:"StyledCard",componentId:"sc-osnro2-0"})(function(){return[eW,eq,eX,eG,eY]},tN,function(e){let{card:t,media:o,shadow:n}=(0,r.aQ)(e.theme);return j(o,e.$shadow,e=>(function(e,t=1){if(!e)return $;let o=`0 0 0 ${S(t)} var(--card-shadow-outline-color)`,n=t_(e.umbra,"var(--card-shadow-umbra-color)"),r=t_(e.penumbra,"var(--card-shadow-penumbra-color)"),i=t_(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${o}, ${n}, ${r}, ${i}`}})(n[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:o}=(0,r.aQ)(e.theme);return(0,c.iv)`
    ${t&&(0,c.iv)`
      background-size: ${o[3]}px ${o[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:o,$muted:n}=e,{card:i,color:a,style:l}=(0,r.aQ)(e.theme),d={width:i.border.width,color:"var(--card-border-color)"};return(0,c.iv)`
    color-scheme: ${a._dark?"dark":"light"};

    ${t8(a,a,t)}

    background-color: ${n?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${t8(a,a.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${t8(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t8(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t8(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?tn({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${t8(a,a.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t8(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t8(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t8(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?tn({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    ${l?.card?.root}
  `}(e)]}),or=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,c,u,f,p,h,m,g,b,v,y,w,x,$;let k=(0,a.c)(42);k[0]!==e?({__unstable_checkered:b,__unstable_focusRing:v,as:o,border:n,borderTop:c,borderRight:d,borderBottom:r,borderLeft:l,muted:u,pressed:f,radius:y,scheme:h,selected:m,shadow:g,tone:w,...p}=e,k[0]=e,k[1]=o,k[2]=n,k[3]=r,k[4]=l,k[5]=d,k[6]=c,k[7]=u,k[8]=f,k[9]=p,k[10]=h,k[11]=m,k[12]=g,k[13]=b,k[14]=v,k[15]=y,k[16]=w):(o=k[1],n=k[2],r=k[3],l=k[4],d=k[5],c=k[6],u=k[7],f=k[8],p=k[9],h=k[10],m=k[11],g=k[12],b=k[13],v=k[14],y=k[15],w=k[16]);let z=void 0!==b&&b,S=void 0!==v&&v,j=void 0===y?0:y,C=void 0===w?"default":w,R=(0,s.isValidElementType)(o)?o:"div",E=eM(),I="inherit"===C?E.tone:C,_="string"==typeof R?R:void 0,T=E.scheme,F=N(n),M=N(c),O=N(d),A=N(r),L=N(l),B=N(j),D=N(g),Q=z?"":void 0,P=f?"":void 0,H=m?"":void 0;return k[17]!==R||k[18]!==z||k[19]!==S||k[20]!==u||k[21]!==t||k[22]!==p||k[23]!==E.scheme||k[24]!==m||k[25]!==L||k[26]!==B||k[27]!==D||k[28]!==Q||k[29]!==P||k[30]!==H||k[31]!==_||k[32]!==F||k[33]!==M||k[34]!==O||k[35]!==A||k[36]!==I?(x=(0,i.jsx)(on,{"data-as":_,"data-scheme":T,"data-ui":"Card","data-tone":I,...p,$border:F,$borderTop:M,$borderRight:O,$borderBottom:A,$borderLeft:L,$checkered:z,$focusRing:S,$muted:u,$radius:B,$shadow:D,$tone:I,"data-checkered":Q,"data-pressed":P,"data-selected":H,forwardedAs:R,ref:t,selected:m}),k[17]=R,k[18]=z,k[19]=S,k[20]=u,k[21]=t,k[22]=p,k[23]=E.scheme,k[24]=m,k[25]=L,k[26]=B,k[27]=D,k[28]=Q,k[29]=P,k[30]=H,k[31]=_,k[32]=F,k[33]=M,k[34]=O,k[35]=A,k[36]=I,k[37]=x):x=k[37],k[38]!==h||k[39]!==x||k[40]!==I?($=(0,i.jsx)(eO,{scheme:h,tone:I,children:x}),k[38]=h,k[39]=x,k[40]=I,k[41]=$):$=k[41],$});or.displayName="ForwardRef(Card)";let oi=c.zo.div.withConfig({displayName:"StyledCheckbox",componentId:"sc-1l5mt2l-0"})(function(){return(0,c.iv)`
    position: relative;
    display: inline-block;
  `}),oa=c.zo.input.withConfig({displayName:"Input",componentId:"sc-1l5mt2l-1"})(function(e){let{color:t,input:o,radius:n}=(0,r.aQ)(e.theme),{focusRing:i}=o.checkbox;return(0,c.iv)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${S(o.checkbox.size)};
      width: ${S(o.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${to({color:t.input.default.enabled.border,width:o.border.width})};
      border-radius: ${S(n[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${to({color:t.input.default.enabled.fg,width:o.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tn({focusRing:i})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${tn({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${to({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tn({border:{width:o.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${to({width:o.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${to({width:o.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),ol=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,f,p,h,m,g,b,v,y;let w=(0,a.c)(25);w[0]!==e?({checked:o,className:n,disabled:d,indeterminate:s,customValidity:r,readOnly:c,style:p,...f}=e,w[0]=e,w[1]=o,w[2]=n,w[3]=r,w[4]=d,w[5]=s,w[6]=c,w[7]=f,w[8]=p):(o=w[1],n=w[2],r=w[3],d=w[4],s=w[5],c=w[6],f=w[7],p=w[8]);let x=(0,l.useRef)(null);w[9]===Symbol.for("react.memo_cache_sentinel")?(h=()=>x.current,w[9]=h):h=w[9],(0,l.useImperativeHandle)(t,h),w[10]!==s?(m=()=>{x.current&&(x.current.indeterminate=s||!1)},g=[s],w[10]=s,w[11]=m,w[12]=g):(m=w[11],g=w[12]),(0,l.useEffect)(m,g),F(x,r);let $=!d&&c?"":void 0,k=r?"":void 0,z=d||c;return w[13]!==o||w[14]!==c||w[15]!==f||w[16]!==$||w[17]!==k||w[18]!==z?(b=(0,i.jsx)(oa,{"data-read-only":$,"data-error":k,...f,checked:o,disabled:z,type:"checkbox",readOnly:c,ref:x}),w[13]=o,w[14]=c,w[15]=f,w[16]=$,w[17]=k,w[18]=z,w[19]=b):b=w[19],w[20]===Symbol.for("react.memo_cache_sentinel")?(v=(0,i.jsxs)("span",{children:[(0,i.jsx)(u.KML,{}),(0,i.jsx)(u.HFL,{})]}),w[20]=v):v=w[20],w[21]!==n||w[22]!==p||w[23]!==b?(y=(0,i.jsxs)(oi,{className:n,"data-ui":"Checkbox",style:p,children:[b,v]}),w[21]=n,w[22]=p,w[23]=b,w[24]=y):y=w[24],y});function od({theme:e}){let{color:{syntax:t}}=(0,r.aQ)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}ol.displayName="ForwardRef(Checkbox)";let os=c.zo.pre.withConfig({displayName:"StyledCode",componentId:"sc-4dymyn-0"})(function(){return(0,c.iv)`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${od}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return E("code",e)}),oc=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,p;let h=(0,a.c)(23);h[0]!==e?({children:o,language:n,size:l,weight:d,...r}=e,h[0]=e,h[1]=o,h[2]=n,h[3]=r,h[4]=l,h[5]=d):(o=h[1],n=h[2],r=h[3],l=h[4],d=h[5]);let m=void 0===l?2:l,g="string"==typeof n?n:void 0;h[6]!==g?(s=!!g&&f.hasLanguage(g),h[6]=g,h[7]=s):s=h[7];let b=s,v=N(m);return h[8]!==o||h[9]!==g||h[10]!==b?(c=!(g&&b)&&(0,i.jsx)("code",{children:o}),h[8]=o,h[9]=g,h[10]=b,h[11]=c):c=h[11],h[12]!==o||h[13]!==g||h[14]!==b?(u=g&&b&&(0,i.jsx)(f,{inline:!0,language:g,value:String(o)}),h[12]=o,h[13]=g,h[14]=b,h[15]=u):u=h[15],h[16]!==t||h[17]!==r||h[18]!==v||h[19]!==c||h[20]!==u||h[21]!==d?(p=(0,i.jsxs)(os,{"data-ui":"Code",...r,$size:v,$weight:d,ref:t,children:[c,u]}),h[16]=t,h[17]=r,h[18]=v,h[19]=c,h[20]=u,h[21]=d,h[22]=p):p=h[22],p});oc.displayName="ForwardRef(Code)";let ou={width:"100%",margin:"0 auto"},of=(0,c.zo)(tJ).withConfig({displayName:"StyledContainer",componentId:"sc-wyroop-0"})(function(){return ou},function(e){let{container:t,media:o}=(0,r.aQ)(e.theme);return j(o,e.$width,e=>({maxWidth:"auto"===e?"none":S(t[e])}))}),op=(0,l.forwardRef)(function(e,t){let o,n,r,l;let d=(0,a.c)(9);d[0]!==e?({as:o,width:r,...n}=e,d[0]=e,d[1]=o,d[2]=n,d[3]=r):(o=d[1],n=d[2],r=d[3]);let s=N(void 0===r?2:r);return d[4]!==o||d[5]!==t||d[6]!==n||d[7]!==s?(l=(0,i.jsx)(of,{"data-ui":"Container",...n,$width:s,forwardedAs:o,ref:t}),d[4]=o,d[5]=t,d[6]=n,d[7]=s,d[8]=l):l=d[8],l});op.displayName="ForwardRef(Container)";let oh=(0,c.zo)(tJ).withConfig({displayName:"StyledGrid",componentId:"sc-v8t8oz-0"})(function(){return[tr,tl,td,ts,tc,tu,tf,tp,th]}),om=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,f,p,h,m;let g=(0,a.c)(26);g[0]!==e?({as:o,autoRows:l,autoCols:n,autoFlow:r,columns:s,gap:c,gapX:u,gapY:f,rows:h,children:d,...p}=e,g[0]=e,g[1]=o,g[2]=n,g[3]=r,g[4]=l,g[5]=d,g[6]=s,g[7]=c,g[8]=u,g[9]=f,g[10]=p,g[11]=h):(o=g[1],n=g[2],r=g[3],l=g[4],d=g[5],s=g[6],c=g[7],u=g[8],f=g[9],p=g[10],h=g[11]);let b="string"==typeof o?o:void 0,v=N(l),y=N(n),w=N(r),x=N(s),$=N(c),k=N(u),z=N(f),S=N(h);return g[12]!==o||g[13]!==d||g[14]!==t||g[15]!==p||g[16]!==b||g[17]!==v||g[18]!==y||g[19]!==w||g[20]!==x||g[21]!==$||g[22]!==k||g[23]!==z||g[24]!==S?(m=(0,i.jsx)(oh,{"data-as":b,"data-ui":"Grid",...p,$autoRows:v,$autoCols:y,$autoFlow:w,$columns:x,$gap:$,$gapX:k,$gapY:z,$rows:S,forwardedAs:o,ref:t,children:d}),g[12]=o,g[13]=d,g[14]=t,g[15]=p,g[16]=b,g[17]=v,g[18]=y,g[19]=w,g[20]=x,g[21]=$,g[22]=k,g[23]=z,g[24]=S,g[25]=m):m=g[25],m});om.displayName="ForwardRef(Grid)";let og=c.zo.div.withConfig({displayName:"StyledHeading",componentId:"sc-137lwim-0"})(function(e){let{$accent:t,$muted:o}=e,{font:n}=(0,r.aQ)(e.theme);return(0,c.iv)`
    ${t&&(0,c.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,c.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${n.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},I,function(e){return E("heading",e)}),ob=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:l,align:o,children:n,muted:d,size:s,textOverflow:c,weight:u,...r}=e,h[0]=e,h[1]=o,h[2]=n,h[3]=r,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(o=h[1],n=h[2],r=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let m=void 0!==l&&l,g=void 0!==d&&d,b=void 0===s?2:s,v=n;if("ellipsis"===c){let e;h[9]!==v?(e=(0,i.jsx)(tT,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let y=N(o),w=N(b);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==m||h[14]!==g||h[15]!==t||h[16]!==r||h[17]!==y||h[18]!==w||h[19]!==f||h[20]!==u?(p=(0,i.jsx)(og,{"data-ui":"Heading",...r,$accent:m,$align:y,$muted:g,$size:w,$weight:u,ref:t,children:f}),h[13]=m,h[14]=g,h[15]=t,h[16]=r,h[17]=y,h[18]=w,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});ob.displayName="ForwardRef(Heading)";let ov=(0,c.zo)(tJ).withConfig({displayName:"StyledInline",componentId:"sc-1pkiy6j-0"})(function(){return{lineHeight:0,"&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return j(t,e.$space,e=>{let t=S(.5===e?o[1]/2:o[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),oy=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u;let f=(0,a.c)(12);f[0]!==e?({as:o,children:n,space:d,...r}=e,f[0]=e,f[1]=o,f[2]=n,f[3]=r,f[4]=d):(o=f[1],n=f[2],r=f[3],d=f[4]),f[5]!==n?(c=l.Children.map(n,ow),f[5]=n,f[6]=c):c=f[6],s=c;let p=N(d);return f[7]!==o||f[8]!==s||f[9]!==r||f[10]!==p?(u=(0,i.jsx)(ov,{"data-ui":"Inline",...r,$space:p,forwardedAs:o,ref:t,children:s}),f[7]=o,f[8]=s,f[9]=r,f[10]=p,f[11]=u):u=f[11],u});function ow(e){return e&&(0,i.jsx)("div",{children:e})}oy.displayName="ForwardRef(Inline)";let ox=c.zo.kbd.withConfig({displayName:"StyledKBD",componentId:"sc-1w7yd8w-0"})(tN,function(){return(0,c.iv)`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),o$=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({children:o,fontSize:r,padding:l,radius:d,...n}=e,f[0]=e,f[1]=o,f[2]=n,f[3]=r,f[4]=l,f[5]=d):(o=f[1],n=f[2],r=f[3],l=f[4],d=f[5]);let p=void 0===r?0:r,h=void 0===l?1:l,m=N(void 0===d?2:d);return f[6]!==o||f[7]!==p?(s=(0,i.jsx)(t0,{as:"span",size:p,weight:"semibold",children:o}),f[6]=o,f[7]=p,f[8]=s):s=f[8],f[9]!==h||f[10]!==s?(c=(0,i.jsx)(tJ,{as:"span",padding:h,children:s}),f[9]=h,f[10]=s,f[11]=c):c=f[11],f[12]!==t||f[13]!==n||f[14]!==m||f[15]!==c?(u=(0,i.jsx)(ox,{"data-ui":"KBD",...n,$radius:m,ref:t,children:c}),f[12]=t,f[13]=n,f[14]=m,f[15]=c,f[16]=u):u=f[16],u});o$.displayName="ForwardRef(KBD)";let ok={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:o}){let[n]=t.split("-"),r=o.floating.width,i=o.floating.height,a=e.shift?.x||0,l=e.shift?.y||0;if(r<=0||i<=0)return{};let{originX:d,originY:s}=["bottom","top"].includes(n)?{originX:oz(.5-a/r,0,1),originY:"bottom"===n?0:1}:{originX:"left"===n?1:0,originY:oz(.5-l/i,0,1)};return{data:{originX:d,originY:s}}}};function oz(e,t,o){return Math.min(Math.max(e,t),o)}function oS(e,t,o){let n=t.x-e.x,r=t.y-e.y;return oj(e,t,Math.min(1,o/Math.sqrt(n*n+r*r)))}function oj(e,t,o){return{x:e.x+(t.x-e.x)*o,y:e.y+(t.y-e.y)*o}}let oC=c.zo.div.withConfig({displayName:"StyledArrow",componentId:"sc-12vzy6c-0"})(({$w:e})=>(0,c.iv)`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),oR=c.zo.path.withConfig({displayName:"StrokePath",componentId:"sc-12vzy6c-1"})`stroke:var(--card-shadow-outline-color);`,oE=c.zo.path.withConfig({displayName:"ShapePath",componentId:"sc-12vzy6c-2"})`fill:var(--card-bg-color);`,oI=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({width:l,height:o,radius:r,...n}=e,p[0]=e,p[1]=o,p[2]=n,p[3]=r,p[4]=l):(o=p[1],n=p[2],r=p[3],l=p[4]);let h=void 0===r?0:r,{card:m}=eL(),g=m.shadow.outline,b=(function(e){let t=e.length,o=[];for(let n=0;n<t;n+=1){let t=e[n],r=e[n-1],i=e[n+1];if(r&&t.radius){let e=oS(t,r,t.radius),n=oS(t,i,t.radius),a=oj(e,t,.5),l=oj(t,n,.5);o.push({type:"point",...e}),o.push({type:"curve",curveEnd:n,startControl:a,endControl:l})}else o.push({type:"point",...t})}return o})([{x:0,y:0},{x:h,y:0,radius:h},{x:l/2,y:o-1,radius:h},{x:l-h,y:0,radius:h},{x:l,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),v=`${b}`,y=`${b} M ${l} -1 M 0 -1 Z`,w=`0 0 ${l} ${l}`;p[5]!==g||p[6]!==l?(d=(0,i.jsx)("mask",{id:"stroke-mask",children:(0,i.jsx)("rect",{x:0,y:g,width:l,height:l,fill:"white"})}),p[5]=g,p[6]=l,p[7]=d):d=p[7];let x=2*g;return p[8]!==v||p[9]!==x?(s=(0,i.jsx)(oR,{d:v,mask:"url(#stroke-mask)",strokeWidth:x}),p[8]=v,p[9]=x,p[10]=s):s=p[10],p[11]!==y?(c=(0,i.jsx)(oE,{d:y}),p[11]=y,p[12]=c):c=p[12],p[13]!==w||p[14]!==d||p[15]!==s||p[16]!==c||p[17]!==l?(u=(0,i.jsxs)("svg",{width:l,height:l,viewBox:w,children:[d,s,c]}),p[13]=w,p[14]=d,p[15]=s,p[16]=c,p[17]=l,p[18]=u):u=p[18],p[19]!==t||p[20]!==n||p[21]!==u||p[22]!==l?(f=(0,i.jsx)(oC,{...n,$w:l,ref:t,children:u}),p[19]=t,p[20]=n,p[21]=u,p[22]=l,p[23]=f):f=p[23],f});oI.displayName="ForwardRef(Arrow)";let oN=e_("@sanity/ui/context/boundaryElement",null);function o_(e){let t,o,n;let r=(0,a.c)(5),{children:l,element:d}=e;return r[0]!==d?(o={version:0,element:d},r[0]=d,r[1]=o):o=r[1],t=o,r[2]!==l||r[3]!==t?(n=(0,i.jsx)(oN.Provider,{value:t,children:l}),r[2]=l,r[3]=t,r[4]=n):n=r[4],n}function oT(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}o_.displayName="BoundaryElementProvider";let oF={version:0,element:null};function oM(){let e=(0,l.useContext)(oN);if(e&&(!oT(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||oF}let oO=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m;let g=(0,a.c)(18),b=eL();g[0]!==e?({children:n,media:o,...r}=e,g[0]=e,g[1]=o,g[2]=n,g[3]=r):(o=g[1],n=g[2],r=g[3]);let v=o??b.media,[y,w]=(0,l.useState)(null),x=eC(y);if(d=x?.border.width??window.innerWidth,g[4]!==v||g[5]!==d){let e=function(e,t){let o=[];for(let n=0;n<e.length;n+=1)e[n]>t&&o.push(n);return o}(v,d);c=e.length?e.join(" "):void 0,g[4]=v,g[5]=d,g[6]=c}else c=g[6];if(s=c,g[7]!==v||g[8]!==d){let e=function(e,t){let o=[];for(let n=0;n<e.length;n+=1)e[n]<=t&&o.push(n);return o}(v,d);f=e.length?e.join(" "):void 0,g[7]=v,g[8]=d,g[9]=f}else f=g[9];return u=f,g[10]!==y?(p=()=>y,h=[y],g[10]=y,g[11]=p,g[12]=h):(p=g[11],h=g[12]),(0,l.useImperativeHandle)(t,p,h),g[13]!==n||g[14]!==s||g[15]!==u||g[16]!==r?(m=(0,i.jsx)("div",{"data-ui":"ElementQuery",...r,"data-eq-max":s,"data-eq-min":u,ref:w,children:n}),g[13]=n,g[14]=s,g[15]=u,g[16]=r,g[17]=m):m=g[17],m});oO.displayName="ForwardRef(ElementQuery)";class oA extends l.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onCatch({error:e,info:t})}render(){let{error:e}=this.state;if(e){let t="string"==typeof e?.message?e.message:"Error";return(0,i.jsx)(oc,{children:t})}return this.props.children}}function oL(e){if(!oT(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}let oB=e_("@sanity/ui/context/layer",null);function oD(){let e=(0,a.c)(2),t=(0,l.useContext)(oB);if(!t)throw Error("useLayer(): missing context value");try{let o;return e[0]!==t?(o=oL(t),e[0]=t,e[1]=o):o=e[1],o}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}function oQ(e){let t=requestAnimationFrame(e);return()=>{cancelAnimationFrame(t)}}function oP(e){let t=null,o=oQ(()=>{t=oQ(e)});return()=>{t&&t(),o()}}function oH(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function oV(e){return oH(e)&&"A"===e.nodeName}function oW(e){return oH(e)&&"BUTTON"===e.nodeName}function oq(e,t){return e.contains(t)||e===t}function oX(e){if(!(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex")||(oV(e)?!!e.href&&"ignore"!==e.rel:oH(e)&&"INPUT"===e.nodeName?"hidden"!==e.type&&"file"!==e.type&&!e.disabled:!!(oW(e)||oH(e)&&"SELECT"===e.nodeName||oH(e)&&"TEXTAREA"===e.nodeName)&&!e.disabled)))return!1;try{e.focus()}catch{}return document.activeElement===e}function oG(e){for(let t=0;t<e.childNodes.length;t++){let o=e.childNodes[t];if(oH(o)&&(oX(o)||oG(o)))return!0}return!1}function oY(e){for(let t=e.childNodes.length-1;t>=0;t--){let o=e.childNodes[t];if(oH(o)&&(oX(o)||oY(o)))return!0}return!1}function oK(e){let t,o,n,r,d,s,c,u;let f=(0,a.c)(19),{children:p,zOffset:h}=e,m=(0,l.useContext)(oB);f[0]!==m?(t=m&&oL(m),f[0]=m,f[1]=t):t=f[1];let g=t,b=g?.registerChild,v=(g?.level??0)+1,y=N(void 0===h?0:h),w=y.length-1,x=Math.min(eD(),w),$=g?g.zIndex+y[x]:y[x];f[2]===Symbol.for("react.memo_cache_sentinel")?(o={},f[2]=o):o=f[2];let[,k]=(0,l.useState)(o),[z,S]=(0,l.useState)(0),j=0===z;f[3]!==b||f[4]!==k?(n=e=>{let t=b?.(e);return void 0!==e?k(t=>{let o=t[e]??0,n={...t,[e]:o+1};return S(Object.keys(n).length),n}):S(oJ),()=>{void 0!==e?k(t=>{let o={...t};return 1===o[e]?(delete o[e],S(Object.keys(o).length)):o[e]=o[e]-1,o}):S(oU),t?.()}},f[3]=b,f[4]=k,f[5]=n):n=f[5];let C=n;return f[6]!==v||f[7]!==b?(r=()=>b?.(v),d=[v,b],f[6]=v,f[7]=b,f[8]=r,f[9]=d):(r=f[8],d=f[9]),(0,l.useEffect)(r,d),f[10]!==j||f[11]!==v||f[12]!==C||f[13]!==z||f[14]!==$?(c={version:0,isTopLayer:j,level:v,registerChild:C,size:z,zIndex:$},f[10]=j,f[11]=v,f[12]=C,f[13]=z,f[14]=$,f[15]=c):c=f[15],s=c,f[16]!==p||f[17]!==s?(u=(0,i.jsx)(oB.Provider,{value:s,children:p}),f[16]=p,f[17]=s,f[18]=u):u=f[18],u}function oU(e){return e-1}function oJ(e){return e+1}oK.displayName="LayerProvider";let oZ=c.zo.div.withConfig({displayName:"StyledLayer",componentId:"sc-16kojrv-0"})({position:"relative"}),o0=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m;let g=(0,a.c)(22);g[0]!==e?({children:o,onActivate:n,onFocus:r,style:s,...d}=e,g[0]=e,g[1]=o,g[2]=n,g[3]=r,g[4]=d,g[5]=s):(o=g[1],n=g[2],r=g[3],d=g[4],s=g[5]);let b=void 0===s?$:s,{zIndex:v,isTopLayer:y}=oD(),w=(0,l.useRef)(null),x=(0,l.useRef)(null),k=(0,l.useRef)(y);g[6]===Symbol.for("react.memo_cache_sentinel")?(c=()=>x.current,g[6]=c):c=g[6],(0,l.useImperativeHandle)(t,c),g[7]!==y||g[8]!==n?(u=()=>{k.current!==y&&y&&n?.({activeElement:w.current}),k.current=y},f=[y,n],g[7]=y,g[8]=n,g[9]=u,g[10]=f):(u=g[9],f=g[10]),(0,l.useEffect)(u,f),g[11]!==y||g[12]!==r?(p=e=>{r?.(e);let t=x.current,o=document.activeElement;!y||!t||!o||oH(o)&&oq(t,o)&&(w.current=o)},g[11]=y,g[12]=r,g[13]=p):p=g[13];let z=p;return g[14]!==b||g[15]!==v?(h={...b,zIndex:v},g[14]=b,g[15]=v,g[16]=h):h=g[16],g[17]!==o||g[18]!==z||g[19]!==d||g[20]!==h?(m=(0,i.jsx)(oZ,{...d,"data-ui":"Layer",onFocus:z,ref:x,style:h,children:o}),g[17]=o,g[18]=z,g[19]=d,g[20]=h,g[21]=m):m=g[21],m}),o1=(0,l.forwardRef)(function(e,t){let o,n,r,l,d;let s=(0,a.c)(11);s[0]!==e?({children:o,zOffset:r,...n}=e,s[0]=e,s[1]=o,s[2]=n,s[3]=r):(o=s[1],n=s[2],r=s[3]);let c=void 0===r?1:r;return s[4]!==o||s[5]!==t||s[6]!==n?(l=(0,i.jsx)(o0,{...n,ref:t,children:o}),s[4]=o,s[5]=t,s[6]=n,s[7]=l):l=s[7],s[8]!==l||s[9]!==c?(d=(0,i.jsx)(oK,{zOffset:c,children:l}),s[8]=l,s[9]=c,s[10]=d):d=s[10],d});o1.displayName="ForwardRef(Layer)";let o2="@sanity/ui/context/portal",o3=Symbol.for(`${o2}/element`);eN[o3]=null;let o4=e_(o2,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(eN[o3]||(eN[o3]=document.createElement("div"),eN[o3].setAttribute("data-portal",""),document.body.appendChild(eN[o3])),eN[o3])}});function o5(){let e=(0,l.useContext)(o4);if(!e)throw Error("usePortal(): missing context value");if(!oT(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function o6(e){let t;let o=(0,a.c)(3),{children:n,__unstable_name:r}=e,i=o5(),l=(r?i.elements&&i.elements[r]:i.element)||i.elements?.default;return l?(o[0]!==n||o[1]!==l?(t=(0,b.createPortal)(n,l),o[0]=n,o[1]=l,o[2]=t):t=o[2],t):null}function o7(e){let t,o,n;let r=(0,a.c)(7),{boundaryElement:d,children:s,element:c,__unstable_elements:u}=e,f=function(e){let t=(0,l.useRef)(e);return function(e,t){if(!e||!t)return e===t;let o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&o.every(o=>e[o]===t[o])}(t.current,e)||(t.current=e),t.current}(u),p=(0,l.useSyncExternalStore)(ne,o9,o8),h=d||null,m=c||p;return r[0]!==f||r[1]!==h||r[2]!==m?(o={version:0,boundaryElement:h,element:m,elements:f},r[0]=f,r[1]=h,r[2]=m,r[3]=o):o=r[3],t=o,r[4]!==s||r[5]!==t?(n=(0,i.jsx)(o4.Provider,{value:t,children:s}),r[4]=s,r[5]=t,r[6]=n):n=r[6],n}function o8(){return null}function o9(){return document.body}o6.displayName="Portal",o7.displayName="PortalProvider";let ne=()=>()=>{},nt=c.zo.div.withConfig({displayName:"StyledSrOnly",componentId:"sc-mubr0c-0"})`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`;(0,l.forwardRef)(function(e,t){let o;let n=(0,a.c)(4),{as:r,children:l}=e;return n[0]!==r||n[1]!==l||n[2]!==t?(o=(0,i.jsx)(nt,{"aria-hidden":!0,as:r,"data-ui":"SrOnly",ref:t,children:l}),n[0]=r,n[1]=l,n[2]=t,n[3]=o):o=n[3],o}).displayName="ForwardRef(SrOnly)";let no=c.zo.div.withConfig({displayName:"StyledVirtualList",componentId:"sc-dlqsj4-0"})`position:relative;`,nn=c.zo.div.withConfig({displayName:"ItemWrapper",componentId:"sc-dlqsj4-1"})`position:absolute;left:0;right:0;`,nr=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,z;let S=(0,a.c)(56);S[0]!==e?({as:s,gap:c,getItemKey:o,items:u,onChange:n,renderItem:r,...d}=e,S[0]=e,S[1]=o,S[2]=n,S[3]=r,S[4]=d,S[5]=s,S[6]=c,S[7]=u):(o=S[1],n=S[2],r=S[3],d=S[4],s=S[5],c=S[6],u=S[7]);let j=void 0===s?"div":s,C=void 0===c?0:c;S[8]!==u?(f=void 0===u?[]:u,S[8]=u,S[9]=f):f=S[9];let R=f,{space:E}=eL(),I=(0,l.useRef)(null),N=(0,l.useRef)(null),[_,T]=(0,l.useState)(0),[F,M]=(0,l.useState)(0),[O,A]=(0,l.useState)(-1);S[10]===Symbol.for("react.memo_cache_sentinel")?(p=()=>I.current,S[10]=p):p=S[10],(0,l.useImperativeHandle)(t,p),S[11]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{if(!N.current)return;let e=N.current.firstChild;e instanceof HTMLElement&&A(e.offsetHeight)},S[11]=h):h=S[11],S[12]!==r?(m=[r],S[12]=r,S[13]=m):m=S[13],(0,l.useEffect)(h,m),S[14]===Symbol.for("react.memo_cache_sentinel")?(g=()=>{if(!I.current)return;let e=I.current.parentNode;for(;e&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(e);)e=e.parentNode;if(e){let t=e;if(!(t instanceof HTMLElement))return;let o=()=>{T(t.scrollTop)};t.addEventListener("scroll",o,{passive:!0});let n=new eS(e=>{M(e[0].contentRect.height)});return n.observe(t),o(),()=>{t.removeEventListener("scroll",o),n.unobserve(t),n.disconnect()}}let t=()=>{T(window.scrollY)},o=()=>{M(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",o),M(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",o)}},b=[],S[14]=g,S[15]=b):(g=S[14],b=S[15]),(0,l.useEffect)(g,b);let L=R.length,B=O?L*(O+E[C])-E[C]:0,D=B?Math.max(Math.floor(_/B*L)-2,0):0,Q=B?Math.ceil((_+F)/B*L)+1:0;S[16]!==D||S[17]!==C||S[18]!==O||S[19]!==n||S[20]!==F||S[21]!==_||S[22]!==E||S[23]!==Q?(y=()=>{n&&n({fromIndex:D,gap:E[C],itemHeight:O,scrollHeight:F,scrollTop:_,toIndex:Q})},v=[D,C,O,n,F,_,E,Q],S[16]=D,S[17]=C,S[18]=O,S[19]=n,S[20]=F,S[21]=_,S[22]=E,S[23]=Q,S[24]=v,S[25]=y):(v=S[24],y=S[25]),(0,l.useEffect)(y,v);e:{let e;if(!r||0===R.length){w=null;break e}if(-1===O){let e,t;let o=R[0];S[26]!==r||S[27]!==o?(e=r(o),S[26]=r,S[27]=o,S[28]=e):e=S[28],S[29]!==e?(t=[(0,i.jsx)(nn,{children:e},0)],S[29]=e,S[30]=t):t=S[30],w=t;break e}if(S[31]!==D||S[32]!==C||S[33]!==o||S[34]!==O||S[35]!==R||S[36]!==r||S[37]!==E||S[38]!==Q){let t;S[40]!==D||S[41]!==C||S[42]!==o||S[43]!==O||S[44]!==r||S[45]!==E?(t=(e,t)=>{let n=D+t,a=r(e),l=o?o(e,n):n;return(0,i.jsx)(nn,{style:{top:n*(O+E[C])},children:a},l)},S[40]=D,S[41]=C,S[42]=o,S[43]=O,S[44]=r,S[45]=E,S[46]=t):t=S[46],e=R.slice(D,Q).map(t),S[31]=D,S[32]=C,S[33]=o,S[34]=O,S[35]=R,S[36]=r,S[37]=E,S[38]=Q,S[39]=e}else e=S[39];w=e}let P=w;return S[47]!==B?($={height:B},S[47]=B,S[48]=$):$=S[48],x=$,S[49]!==P||S[50]!==x?(k=(0,i.jsx)("div",{ref:N,style:x,children:P}),S[49]=P,S[50]=x,S[51]=k):k=S[51],S[52]!==j||S[53]!==d||S[54]!==k?(z=(0,i.jsx)(no,{as:j,"data-ui":"VirtualList",...d,ref:I,children:k}),S[52]=j,S[53]=d,S[54]=k,S[55]=z):z=S[55],z});nr.displayName="ForwardRef(VirtualList)";let ni=[0,0,0,0],na={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},nl=(0,c.zo)(m.E.create(or)).withConfig({displayName:"MotionCard",componentId:"sc-ihg31s-0"})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;& > *{opacity:var(${k},1);will-change:opacity;}`,nd=(0,l.memo)((0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j,C,R,E,I,N,_,T,F,M,O;let A=(0,a.c)(60);A[0]!==e?({__unstable_margins:c,animate:o,arrow:n,arrowRef:r,arrowX:l,arrowY:d,children:s,padding:h,placement:m,originX:u,originY:f,overflow:p,radius:g,scheme:v,shadow:y,strategy:w,style:x,tone:$,width:k,x:S,y:j,...b}=e,A[0]=e,A[1]=o,A[2]=n,A[3]=r,A[4]=l,A[5]=d,A[6]=s,A[7]=c,A[8]=u,A[9]=f,A[10]=p,A[11]=h,A[12]=m,A[13]=g,A[14]=b,A[15]=v,A[16]=y,A[17]=w,A[18]=x,A[19]=$,A[20]=k,A[21]=S,A[22]=j):(o=A[1],n=A[2],r=A[3],l=A[4],d=A[5],s=A[6],c=A[7],u=A[8],f=A[9],p=A[10],h=A[11],m=A[12],g=A[13],b=A[14],v=A[15],y=A[16],w=A[17],x=A[18],$=A[19],k=A[20],S=A[21],j=A[22]);let{zIndex:L}=oD(),B=(S??0)+(C=c||ni)[3],D=(j??0)+C[0],Q=o?"transform":void 0;A[23]!==u||A[24]!==f||A[25]!==w||A[26]!==x||A[27]!==Q||A[28]!==k||A[29]!==B||A[30]!==D||A[31]!==L?(E={left:B,originX:u,originY:f,position:w,top:D,width:k,zIndex:L,willChange:Q,...x},A[23]=u,A[24]=f,A[25]=w,A[26]=x,A[27]=Q,A[28]=k,A[29]=B,A[30]=D,A[31]=L,A[32]=E):E=A[32],R=E;let P=null!==l?l:void 0,H=null!==d?d:void 0;A[33]!==P||A[34]!==H?(N={left:P,top:H,right:void 0,bottom:void 0},A[33]=P,A[34]=H,A[35]=N):N=A[35],I=N;let V=b;return A[36]!==o?(_=o?z:{},A[36]=o,A[37]=_):_=A[37],A[38]!==s||A[39]!==h?(T=(0,i.jsx)(t4,{direction:"column",flex:1,padding:h,children:s}),A[38]=s,A[39]=h,A[40]=T):T=A[40],A[41]!==p||A[42]!==T?(F=(0,i.jsx)(t4,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:p,children:T}),A[41]=p,A[42]=T,A[43]=F):F=A[43],A[44]!==n||A[45]!==r||A[46]!==I?(M=n&&(0,i.jsx)(oI,{ref:r,style:I,width:19,height:8,radius:2}),A[44]=n,A[45]=r,A[46]=I,A[47]=M):M=A[47],A[48]!==m||A[49]!==g||A[50]!==t||A[51]!==R||A[52]!==v||A[53]!==y||A[54]!==F||A[55]!==M||A[56]!==V||A[57]!==_||A[58]!==$?(O=(0,i.jsxs)(nl,{"data-ui":"Popover",...V,"data-placement":m,radius:g,ref:t,scheme:v,shadow:y,sizing:"border",style:R,tone:$,..._,children:[F,M]}),A[48]=m,A[49]=g,A[50]=t,A[51]=R,A[52]=v,A[53]=y,A[54]=F,A[55]=M,A[56]=V,A[57]=_,A[58]=$,A[59]=O):O=A[59],O}));nd.displayName="Memo(ForwardRef(PopoverCard))";let ns=(0,l.memo)((0,l.forwardRef)(function(e,t){let{container:o,layer:n}=eL(),r=oM(),{__unstable_margins:a=ni,animate:d=!1,arrow:s=!1,boundaryElement:c=r.element,children:u,constrainSize:f=!1,content:m,disabled:b,fallbackPlacements:v=e.fallbackPlacements??na[e.placement??"bottom"],matchReferenceWidth:y,floatingBoundary:w=e.boundaryElement??r.element,onActivate:x,open:$,overflow:k="hidden",padding:z,placement:S="bottom",portal:j,preventOverflow:C=!0,radius:R=3,referenceBoundary:E=e.boundaryElement??r.element,referenceElement:I,scheme:_,shadow:T=3,tone:F="inherit",width:M="auto",zOffset:O=n.popover.zOffset,updateRef:A,...L}=e,B=!eH()&&d,D=eC(c)?.border,Q=N(z),P=N(R),H=N(T),V=N(M),W=N(O),q=(0,l.useRef)(null),X=(0,l.useRef)(null),G="viewport";(0,l.useImperativeHandle)(t,()=>q.current);let Y=eD(),K=f||C?D?.width:void 0,U=function(e){let{container:t,mediaIndex:o,width:n}=e,r=n[o],i=void 0===r?n[n.length-1]:r;return"number"==typeof i?t[i]:void 0}({container:o,mediaIndex:Y,width:V}),J=(0,l.useRef)(U);(0,l.useEffect)(()=>{J.current=U},[U]);let Z=function(e){let{boundaryWidth:t,currentWidth:o}=e;if(!(void 0===o&&void 0===t))return Math.min(o??1/0,(t||1/0)-8)}({boundaryWidth:K,currentWidth:U}),ee=(0,l.useRef)(Z);(0,l.useEffect)(()=>{ee.current=Z},[Z]);let et=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{let e=q.current;if(!$||!e)return;let t=et.current;y?void 0!==t&&(e.style.width=`${t}px`):void 0!==U&&(e.style.width=`${U}px`),"number"==typeof Z&&(e.style.maxWidth=`${Z}px`)},[U,y,Z,$]);let eo=(0,l.useMemo)(()=>{let e=[];return(f||C)&&e.push((0,h.RR)({boundary:w||void 0,fallbackPlacements:v,padding:4,rootBoundary:G})),e.push((0,h.cv)({mainAxis:4})),(f||y)&&e.push(function(e){let{apply:t,margins:o,padding:n=0}=e;return{name:"@sanity/ui/size",async fn(r){let{elements:i,placement:a,platform:l,rects:d}=r,{floating:s,reference:c}=d,u=await (0,p.US)(r,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:n,rootBoundary:"viewport"}),f=1/0,h=1/0,m=s.width,g=s.height;a.includes("top")&&(f=m-(u.left+u.right),h=g-u.top),a.includes("right")&&(f=m-u.right,h=g-(u.top+u.bottom)),a.includes("bottom")&&(f=m-(u.left+u.right),h=g-u.bottom),a.includes("left")&&(f=m-u.left,h=g-(u.top+u.bottom)),t({availableWidth:f-o[1]-o[3],availableHeight:h-o[0]-o[2],elements:i,referenceWidth:c.width-o[1]-o[3]});let b=await l.getDimensions(i.floating),v=b.height;return m!==b.width||g!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:o,referenceWidth:n}){et.current=n;let r=J.current,i=ee.current;y?o.floating.style.width=`${n}px`:void 0!==r&&(o.floating.style.width=`${r}px`),f&&(o.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,o.floating.style.maxHeight=`${t}px`)},boundaryElement:w||void 0,constrainSize:f,margins:a,matchReferenceWidth:y,padding:4})),C&&e.push((0,h.uY)({boundary:w||void 0,rootBoundary:G,padding:4})),s&&e.push((0,h.x7)({element:X,padding:4})),B&&e.push(ok),e.push((0,h.Cp)({boundary:E||void 0,padding:4,strategy:"referenceHidden"})),e},[B,s,f,v,w,a,y,C,E]),{x:en,y:er,middlewareData:ei,placement:ea,refs:el,strategy:ed,update:es}=(0,h.YF)({middleware:eo,placement:S,whileElementsMounted:p.Me,elements:I?{reference:I}:void 0}),ec=ei.hide?.referenceHidden,eu=ei.arrow?.x,ef=ei.arrow?.y,ep=ei["@sanity/ui/origin"]?.originX,eh=ei["@sanity/ui/origin"]?.originY,em=(0,l.useCallback)(e=>{X.current=e},[]),eg=(0,l.useCallback)(e=>{q.current=e,el.setFloating(e)},[el]),eb=(0,l.useCallback)(e=>{let t,o;el.setReference(e);let n=(t=Object.getOwnPropertyDescriptor(u.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.ref:(t=Object.getOwnPropertyDescriptor(u,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.props.ref:u.props.ref||u.ref;"function"==typeof n?n(e):n&&(n.current=e)},[u,el]),ev=(0,l.useMemo)(()=>I?u:u?(0,l.cloneElement)(u,{ref:eb}):null,[u,I,eb]);if((0,l.useEffect)(()=>{A&&("function"==typeof A?A(es):A&&(A.current=es))},[es,A]),b)return u||(0,i.jsx)(i.Fragment,{});let ey=(0,i.jsx)(oK,{zOffset:W,children:(0,i.jsx)(nd,{...L,__unstable_margins:a,animate:B,arrow:s,arrowRef:em,arrowX:eu,arrowY:ef,hidden:ec,overflow:k,padding:Q,placement:ea,radius:P,ref:eg,scheme:_,shadow:H,originX:ep,originY:eh,strategy:ed,tone:F,width:y?et.current:U,x:en,y:er,children:m})}),ew=$&&(j?(0,i.jsx)(o6,{__unstable_name:"string"==typeof j?j:void 0,children:ey}):ey);return(0,i.jsxs)(i.Fragment,{children:[B?(0,i.jsx)(g.M,{children:ew}):ew,ev]})}));ns.displayName="Memo(ForwardRef(Popover))";let nc=c.zo.div.withConfig({displayName:"StyledRadio",componentId:"sc-ccrwkf-0"})(function(){return(0,c.iv)`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),nu=c.zo.input.withConfig({displayName:"Input",componentId:"sc-ccrwkf-1"})(function(e){let{color:t,input:o}=(0,r.aQ)(e.theme),n=(o.radio.size-o.radio.markSize)/2;return(0,c.iv)`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${S(o.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${S(o.radio.size)};
      width: ${S(o.radio.size)};
      border-radius: ${S(o.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${to({color:t.input.default.enabled.border,width:o.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${S(n)};
        left: ${S(n)};
        height: ${S(o.radio.markSize)};
        width: ${S(o.radio.markSize)};
        border-radius: ${S(o.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${tn({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${to({color:t.input.default.enabled.border,width:o.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${to({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),nf=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h;let m=(0,a.c)(19);m[0]!==e?({className:o,disabled:r,style:c,customValidity:n,readOnly:d,...s}=e,m[0]=e,m[1]=o,m[2]=n,m[3]=r,m[4]=d,m[5]=s,m[6]=c):(o=m[1],n=m[2],r=m[3],d=m[4],s=m[5],c=m[6]);let g=(0,l.useRef)(null);m[7]===Symbol.for("react.memo_cache_sentinel")?(u=()=>g.current,m[7]=u):u=m[7],(0,l.useImperativeHandle)(t,u),F(g,n);let b=!r&&d?"":void 0,v=n?"":void 0,y=r||d;return m[8]!==d||m[9]!==s||m[10]!==b||m[11]!==v||m[12]!==y?(f=(0,i.jsx)(nu,{"data-read-only":b,"data-error":v,...s,disabled:y,readOnly:d,ref:g,type:"radio"}),m[8]=d,m[9]=s,m[10]=b,m[11]=v,m[12]=y,m[13]=f):f=m[13],m[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,i.jsx)("span",{}),m[14]=p):p=m[14],m[15]!==o||m[16]!==c||m[17]!==f?(h=(0,i.jsxs)(nc,{className:o,"data-ui":"Radio",style:c,children:[f,p]}),m[15]=o,m[16]=c,m[17]=f,m[18]=h):h=m[18],h});function np(e){let{font:t}=(0,r.aQ)(e.theme);return(0,c.iv)`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function nh(e){let{color:t,input:o}=(0,r.aQ)(e.theme);return(0,c.iv)`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${to({color:t.input.default.enabled.border,width:o.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${to({color:t.input.default.hovered.border,width:o.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${tn({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${to({color:t.input.default.readOnly.border,width:o.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${to({color:t.input.default.disabled.border,width:o.border.width})};
    }
  `}function nm(e){let{$fontSize:t}=e,{font:o,media:n}=(0,r.aQ)(e.theme);return j(n,t,e=>{var t;return{fontSize:S((t=o.text.sizes[e]||o.text.sizes[2]).fontSize),lineHeight:S(t.lineHeight)}})}nf.displayName="ForwardRef(Radio)";let ng=c.zo.div.withConfig({displayName:"StyledSelect",componentId:"sc-5mxno7-0"})(function(){return(0,c.iv)`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),nb=c.zo.select.withConfig({displayName:"Input",componentId:"sc-5mxno7-1"})(function(){return[tN,np,nh,nm,tz]}),nv=(0,c.zo)(tJ).withConfig({displayName:"IconBox",componentId:"sc-5mxno7-2"})(function(e){let{color:t}=(0,r.aQ)(e.theme);return(0,c.iv)`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}),ny=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,f,p,h,m,g,b,v,y,w;let x=(0,a.c)(29);x[0]!==e?({children:o,customValidity:n,disabled:r,fontSize:c,padding:f,radius:p,readOnly:d,space:h,...s}=e,x[0]=e,x[1]=o,x[2]=n,x[3]=r,x[4]=d,x[5]=s,x[6]=c,x[7]=f,x[8]=p,x[9]=h):(o=x[1],n=x[2],r=x[3],d=x[4],s=x[5],c=x[6],f=x[7],p=x[8],h=x[9]);let $=void 0===c?2:c,k=void 0===f?3:f,z=void 0===p?2:p,S=void 0===h?3:h,j=(0,l.useRef)(null);x[10]===Symbol.for("react.memo_cache_sentinel")?(m=()=>j.current,x[10]=m):m=x[10],(0,l.useImperativeHandle)(t,m),F(j,n);let C=!r&&d?"":void 0,R=N($),E=N(k),I=N(z),_=N(S),T=r||d;return x[11]!==o||x[12]!==s||x[13]!==T||x[14]!==C||x[15]!==R||x[16]!==E||x[17]!==I||x[18]!==_?(g=(0,i.jsx)(nb,{"data-read-only":C,"data-ui":"Select",...s,$fontSize:R,$padding:E,$radius:I,$space:_,disabled:T,ref:j,children:o}),x[11]=o,x[12]=s,x[13]=T,x[14]=C,x[15]=R,x[16]=E,x[17]=I,x[18]=_,x[19]=g):g=x[19],x[20]===Symbol.for("react.memo_cache_sentinel")?(b=(0,i.jsx)(u.v4q,{}),x[20]=b):b=x[20],x[21]!==$?(v=(0,i.jsx)(t0,{size:$,children:b}),x[21]=$,x[22]=v):v=x[22],x[23]!==k||x[24]!==v?(y=(0,i.jsx)(nv,{padding:k,children:v}),x[23]=k,x[24]=v,x[25]=y):y=x[25],x[26]!==g||x[27]!==y?(w=(0,i.jsxs)(ng,{"data-ui":"Select",children:[g,y]}),x[26]=g,x[27]=y,x[28]=w):w=x[28],w});ny.displayName="ForwardRef(Select)";let nw={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},nx=(0,c.zo)(tJ).withConfig({displayName:"StyledStack",componentId:"sc-8dpfq2-0"})(function(){return nw},function(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return j(t,e.$space,e=>({gridGap:S(o[e])}))}),n$=(0,l.forwardRef)(function(e,t){let o,n,r,l;let d=(0,a.c)(10);d[0]!==e?({as:o,space:r,...n}=e,d[0]=e,d[1]=o,d[2]=n,d[3]=r):(o=d[1],n=d[2],r=d[3]);let s="string"==typeof o?o:void 0,c=N(r);return d[4]!==o||d[5]!==t||d[6]!==n||d[7]!==s||d[8]!==c?(l=(0,i.jsx)(nx,{"data-as":s,"data-ui":"Stack",...n,$space:c,forwardedAs:o,ref:t}),d[4]=o,d[5]=t,d[6]=n,d[7]=s,d[8]=c,d[9]=l):l=d[9],l});n$.displayName="ForwardRef(Stack)";let nk=c.zo.span.withConfig({displayName:"StyledSwitch",componentId:"sc-dw1foe-0"})(function(){return(0,c.iv)`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),nz=c.zo.input.withConfig({displayName:"Input",componentId:"sc-dw1foe-1"})(function(){return(0,c.iv)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),nS=c.zo.span.withConfig({displayName:"Representation",componentId:"sc-dw1foe-2"})(function(e){let{color:t,input:o}=(0,r.aQ)(e.theme);return(0,c.iv)`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${S(o.switch.width)};
    height: ${S(o.switch.height)};
    border-radius: ${S(o.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${tn({focusRing:o.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),nj=c.zo.span.withConfig({displayName:"Track",componentId:"sc-dw1foe-3"})(function(e){let{input:t}=(0,r.aQ)(e.theme);return(0,c.iv)`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${S(t.switch.width)};
    height: ${S(t.switch.height)};
    border-radius: ${S(t.switch.height/2)};
  `}),nC=c.zo.span.withConfig({displayName:"Thumb",componentId:"sc-dw1foe-4"})(function(e){let{$indeterminate:t}=e,{input:o}=(0,r.aQ)(e.theme),n=o.switch.width,i=o.switch.height,a=o.switch.padding,l=i-2*o.switch.padding,d=n-2*a-l,s=n/2-l/2-a,u=!0!==t&&!0===e.$checked;return(0,c.iv)`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${S(a)};
    top: ${S(a)};
    height: ${S(l)};
    width: ${S(l)};
    border-radius: ${S(l/2)};
    transition-property: transform;
    transition-duration: ${o.switch.transitionDurationMs}ms;
    transition-timing-function: ${o.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${u&&(0,c.iv)`
      transform: translate3d(${d}px, 0, 0);
    `}

    ${t&&(0,c.iv)`
      transform: translate3d(${s}px, 0, 0);
    `}
  `}),nR=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m,g,b,v;let y=(0,a.c)(26);y[0]!==e?({checked:o,className:n,disabled:r,indeterminate:d,readOnly:s,style:u,...c}=e,y[0]=e,y[1]=o,y[2]=n,y[3]=r,y[4]=d,y[5]=s,y[6]=c,y[7]=u):(o=y[1],n=y[2],r=y[3],d=y[4],s=y[5],c=y[6],u=y[7]);let w=(0,l.useRef)(null);y[8]===Symbol.for("react.memo_cache_sentinel")?(f=()=>w.current,y[8]=f):f=y[8],(0,l.useImperativeHandle)(t,f),y[9]!==d?(p=()=>{w.current&&(w.current.indeterminate=d||!1)},h=[d],y[9]=d,y[10]=p,y[11]=h):(p=y[10],h=y[11]),(0,l.useEffect)(p,h);let x=!r&&s?"":void 0,$=!0!==d&&o,k=r||s;return y[12]!==c||y[13]!==x||y[14]!==$||y[15]!==k?(m=(0,i.jsx)(nz,{"data-read-only":x,...c,checked:$,disabled:k,type:"checkbox",ref:w}),y[12]=c,y[13]=x,y[14]=$,y[15]=k,y[16]=m):m=y[16],y[17]===Symbol.for("react.memo_cache_sentinel")?(g=(0,i.jsx)(nj,{}),y[17]=g):g=y[17],y[18]!==o||y[19]!==d?(b=(0,i.jsxs)(nS,{"aria-hidden":!0,"data-name":"representation",children:[g,(0,i.jsx)(nC,{$checked:o,$indeterminate:d})]}),y[18]=o,y[19]=d,y[20]=b):b=y[20],y[21]!==n||y[22]!==u||y[23]!==m||y[24]!==b?(v=(0,i.jsxs)(nk,{className:n,"data-ui":"Switch",style:u,children:[m,b]}),y[21]=n,y[22]=u,y[23]=m,y[24]=b,y[25]=v):v=y[25],v});nR.displayName="ForwardRef(Switch)";let nE=c.zo.span.withConfig({displayName:"StyledTextArea",componentId:"sc-1d6h1o8-0"})(tj),nI=c.zo.span.withConfig({displayName:"InputRoot",componentId:"sc-1d6h1o8-1"})`flex:1;min-width:0;display:block;position:relative;`,nN=c.zo.textarea.withConfig({displayName:"Input",componentId:"sc-1d6h1o8-2"})(tk,tC,tR),n_=c.zo.div.withConfig({displayName:"Presentation",componentId:"sc-1d6h1o8-3"})(tN,tE),nT=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m,g,b;let v=(0,a.c)(29);v[0]!==e?({border:d,customValidity:n,disabled:s,fontSize:c,padding:u,radius:f,weight:p,__unstable_disableFocusRing:o,...r}=e,v[0]=e,v[1]=o,v[2]=n,v[3]=r,v[4]=d,v[5]=s,v[6]=c,v[7]=u,v[8]=f,v[9]=p):(o=v[1],n=v[2],r=v[3],d=v[4],s=v[5],c=v[6],u=v[7],f=v[8],p=v[9]);let y=void 0===d||d,w=void 0!==s&&s,x=void 0===c?2:c,$=void 0===u?3:u,k=void 0===f?2:f,z=(0,l.useRef)(null),S=eM();v[10]===Symbol.for("react.memo_cache_sentinel")?(h=()=>z.current,v[10]=h):h=v[10],(0,l.useImperativeHandle)(t,h),F(z,n);let j=S.scheme,C=S.tone,R=N(x),E=N($),I=S.scheme,_=N(0);v[11]!==w||v[12]!==r||v[13]!==S.scheme||v[14]!==S.tone||v[15]!==_||v[16]!==R||v[17]!==E||v[18]!==p?(m=(0,i.jsx)(nN,{"data-as":"textarea","data-scheme":j,"data-tone":C,...r,$fontSize:R,$padding:E,$scheme:I,$space:_,$tone:S.tone,$weight:p,disabled:w,ref:z}),v[11]=w,v[12]=r,v[13]=S.scheme,v[14]=S.tone,v[15]=_,v[16]=R,v[17]=E,v[18]=p,v[19]=m):m=v[19];let T=N(k),M=y?"":void 0;return v[20]!==o||v[21]!==S.scheme||v[22]!==S.tone||v[23]!==T||v[24]!==M?(g=(0,i.jsx)(n_,{$radius:T,$unstableDisableFocusRing:o,$scheme:S.scheme,$tone:S.tone,"data-border":M,"data-scheme":S.scheme,"data-tone":S.tone}),v[20]=o,v[21]=S.scheme,v[22]=S.tone,v[23]=T,v[24]=M,v[25]=g):g=v[25],v[26]!==m||v[27]!==g?(b=(0,i.jsx)(nE,{"data-ui":"TextArea",children:(0,i.jsxs)(nI,{children:[m,g]})}),v[26]=m,v[27]=g,v[28]=b):b=v[28],b});nT.displayName="ForwardRef(TextArea)";let nF={zIndex:2},nM=(0,c.zo)(or).attrs({forwardedAs:"span"}).withConfig({displayName:"StyledTextInput",componentId:"sc-h62wco-0"})(tj),nO=c.zo.span.withConfig({displayName:"InputRoot",componentId:"sc-h62wco-1"})`flex:1;min-width:0;display:block;position:relative;`,nA=(0,c.zo)(or).attrs({forwardedAs:"span"}).withConfig({displayName:"Prefix",componentId:"sc-h62wco-2"})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,nL=(0,c.zo)(or).attrs({forwardedAs:"span"}).withConfig({displayName:"Suffix",componentId:"sc-h62wco-3"})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,nB=c.zo.input.withConfig({displayName:"Input",componentId:"sc-h62wco-4"})(tk,tC,tR),nD=c.zo.span.withConfig({displayName:"Presentation",componentId:"sc-h62wco-5"})(tN,tE),nQ=(0,c.zo)(tJ).withConfig({displayName:"LeftBox",componentId:"sc-h62wco-6"})`position:absolute;top:0;left:0;`,nP=(0,c.zo)(tJ).withConfig({displayName:"RightBox",componentId:"sc-h62wco-7"})`position:absolute;top:0;right:0;`,nH=(0,c.zo)(or).withConfig({displayName:"RightCard",componentId:"sc-h62wco-8"})`background-color:transparent;position:absolute;top:0;right:0;`,nV=(0,c.zo)(oo).withConfig({displayName:"TextInputClearButton",componentId:"sc-h62wco-9"})({"&:not([hidden])":{display:"block"}}),nW=(0,l.forwardRef)(function(e,t){let o,n,r,d,c,f,p,h,m,g,b,v,y,w,x,k,z,S,j,C,R,E,I,_,T,M,O,A,L,B,D,Q,P,H,V,W,q,X;let G=(0,a.c)(84);G[0]!==e?({__unstable_disableFocusRing:r,border:b,clearButton:d,disabled:v,fontSize:y,icon:o,iconRight:n,onClear:f,padding:w,prefix:p,radius:x,readOnly:h,space:k,suffix:g,customValidity:c,type:z,weight:S,...m}=e,G[0]=e,G[1]=o,G[2]=n,G[3]=r,G[4]=d,G[5]=c,G[6]=f,G[7]=p,G[8]=h,G[9]=m,G[10]=g,G[11]=b,G[12]=v,G[13]=y,G[14]=w,G[15]=x,G[16]=k,G[17]=z,G[18]=S):(o=G[1],n=G[2],r=G[3],d=G[4],c=G[5],f=G[6],p=G[7],h=G[8],m=G[9],g=G[10],b=G[11],v=G[12],y=G[13],w=G[14],x=G[15],k=G[16],z=G[17],S=G[18]);let Y=void 0===b||b,K=void 0!==v&&v,U=void 0===y?2:y,J=void 0===w?3:w,Z=void 0===x?2:x,ee=void 0===k?3:k,et=void 0===z?"text":z,eo=(0,l.useRef)(null),en=eM(),er=N(U),ei=N(J),ea=N(Z),el=N(ee),ed=!!d,es=!!o,ec=!!n,eu=!!g,ef=!!p;G[19]===Symbol.for("react.memo_cache_sentinel")?(j=()=>eo.current,G[19]=j):j=G[19],(0,l.useImperativeHandle)(t,j),F(eo,c),G[20]!==f?(C=e=>{e.preventDefault(),e.stopPropagation(),f&&f(),eo.current?.focus()},G[20]=f,G[21]=C):C=G[21];let ep=C;G[22]!==p||G[23]!==ea?(E=p&&(0,i.jsx)(nA,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:p})}),G[22]=p,G[23]=ea,G[24]=E):E=G[24],R=E;let eh=Y?"":void 0;G[25]!==o||G[26]!==er||G[27]!==ei?(_=o&&(0,i.jsx)(nQ,{padding:ei,children:(0,i.jsxs)(t0,{size:er,children:[(0,l.isValidElement)(o)&&o,(0,s.isValidElementType)(o)&&(0,i.jsx)(o,{})]})}),G[25]=o,G[26]=er,G[27]=ei,G[28]=_):_=G[28],G[29]!==ed||G[30]!==n||G[31]!==er||G[32]!==ei?(T=!ed&&n&&(0,i.jsx)(nP,{padding:ei,children:(0,i.jsxs)(t0,{size:er,children:[(0,l.isValidElement)(n)&&n,(0,s.isValidElementType)(n)&&(0,i.jsx)(n,{})]})}),G[29]=ed,G[30]=n,G[31]=er,G[32]=ei,G[33]=T):T=G[33],G[34]!==ef||G[35]!==eu||G[36]!==r||G[37]!==ea||G[38]!==en.scheme||G[39]!==en.tone||G[40]!==eh||G[41]!==_||G[42]!==T?(M=(0,i.jsxs)(nD,{$hasPrefix:ef,$unstableDisableFocusRing:r,$hasSuffix:eu,$radius:ea,$scheme:en.scheme,$tone:en.tone,"data-border":eh,"data-scheme":en.scheme,"data-tone":en.tone,children:[_,T]}),G[34]=ef,G[35]=eu,G[36]=r,G[37]=ea,G[38]=en.scheme,G[39]=en.tone,G[40]=eh,G[41]=_,G[42]=T,G[43]=M):M=G[43],I=M,G[44]!==ei?(A=ei.map(nX),G[44]=ei,G[45]=A):A=G[45],O=A,G[46]!==ei?(B=ei.map(nG),G[46]=ei,G[47]=B):B=G[47],L=B,D="object"==typeof d?d:$,G[48]!==d||G[49]!==O||G[50]!==L||G[51]!==D||G[52]!==c||G[53]!==K||G[54]!==er||G[55]!==ep||G[56]!==ea||G[57]!==h?(P=!K&&!h&&d&&(0,i.jsx)(nH,{forwardedAs:"span",padding:O,style:nF,tone:c?"critical":"inherit",children:(0,i.jsx)(nV,{"aria-label":"Clear","data-qa":"clear-button",fontSize:er,icon:u.Two,mode:"bleed",padding:L,radius:ea,...D,onClick:ep,onMouseDown:nq})}),G[48]=d,G[49]=O,G[50]=L,G[51]=D,G[52]=c,G[53]=K,G[54]=er,G[55]=ep,G[56]=ea,G[57]=h,G[58]=P):P=G[58],Q=P,G[59]!==ea||G[60]!==g?(V=g&&(0,i.jsx)(nL,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:g})}),G[59]=ea,G[60]=g,G[61]=V):V=G[61],H=V;let em=ec||ed;return G[62]!==es||G[63]!==K||G[64]!==er||G[65]!==ei||G[66]!==h||G[67]!==m||G[68]!==en.scheme||G[69]!==en.tone||G[70]!==el||G[71]!==em||G[72]!==et||G[73]!==S?(W=(0,i.jsx)(nB,{"data-as":"input","data-scheme":en.scheme,"data-tone":en.tone,...m,$fontSize:er,$iconLeft:es,$iconRight:em,$padding:ei,$scheme:en.scheme,$space:el,$tone:en.tone,$weight:S,disabled:K,readOnly:h,ref:eo,type:et}),G[62]=es,G[63]=K,G[64]=er,G[65]=ei,G[66]=h,G[67]=m,G[68]=en.scheme,G[69]=en.tone,G[70]=el,G[71]=em,G[72]=et,G[73]=S,G[74]=W):W=G[74],G[75]!==Q||G[76]!==I||G[77]!==W?(q=(0,i.jsxs)(nO,{children:[W,I,Q]}),G[75]=Q,G[76]=I,G[77]=W,G[78]=q):q=G[78],G[79]!==R||G[80]!==en.tone||G[81]!==H||G[82]!==q?(X=(0,i.jsxs)(nM,{"data-ui":"TextInput",tone:en.tone,children:[R,q,H]}),G[79]=R,G[80]=en.tone,G[81]=H,G[82]=q,G[83]=X):X=G[83],X});function nq(e){e.preventDefault(),e.stopPropagation()}function nX(e){return 0===e?0:1===e||2===e?1:e-2}function nG(e){return 0===e||1===e?0:2===e?1:e-1}function nY(e){let t,o;let n=(0,a.c)(3),[r,i]=(0,l.useState)(e),d=(0,l.useRef)(void 0);n[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let o=()=>{i(e)};if(d.current&&(clearTimeout(d.current),d.current=void 0),!t)return o();d.current=setTimeout(o,t)},n[0]=t):t=n[0];let s=t;return n[1]!==r?(o=[r,s],n[1]=r,n[2]=o):o=n[2],o}nW.displayName="ForwardRef(TextInput)";let nK={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},nU=(0,c.zo)(m.E.create(or)).withConfig({displayName:"MotionCard",componentId:"sc-1xn138w-0"})`& > *{opacity:var(${k},1);will-change:opacity;}`,nJ=(0,l.memo)((0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j;let C=(0,a.c)(42);C[0]!==e?({animate:o,arrow:n,arrowRef:r,arrowX:l,arrowY:d,children:s,originX:c,originY:u,padding:f,placement:p,radius:h,scheme:g,shadow:b,style:v,...m}=e,C[0]=e,C[1]=o,C[2]=n,C[3]=r,C[4]=l,C[5]=d,C[6]=s,C[7]=c,C[8]=u,C[9]=f,C[10]=p,C[11]=h,C[12]=m,C[13]=g,C[14]=b,C[15]=v):(o=C[1],n=C[2],r=C[3],l=C[4],d=C[5],s=C[6],c=C[7],u=C[8],f=C[9],p=C[10],h=C[11],m=C[12],g=C[13],b=C[14],v=C[15]);let R=o?"transform":void 0;C[16]!==c||C[17]!==u||C[18]!==v||C[19]!==R?(w={originX:c,originY:u,willChange:R,...v},C[16]=c,C[17]=u,C[18]=v,C[19]=R,C[20]=w):w=C[20],y=w;let E=null!==l?l:void 0,I=null!==d?d:void 0;C[21]!==E||C[22]!==I?($={left:E,top:I,right:void 0,bottom:void 0},C[21]=E,C[22]=I,C[23]=$):$=C[23],x=$;let N=m;return C[24]!==o?(k=o?z:{},C[24]=o,C[25]=k):k=C[25],C[26]!==n||C[27]!==r||C[28]!==x?(S=n&&(0,i.jsx)(oI,{ref:r,style:x,width:15,height:6,radius:2}),C[26]=n,C[27]=r,C[28]=x,C[29]=S):S=C[29],C[30]!==s||C[31]!==f||C[32]!==p||C[33]!==h||C[34]!==t||C[35]!==y||C[36]!==g||C[37]!==b||C[38]!==N||C[39]!==k||C[40]!==S?(j=(0,i.jsxs)(nU,{"data-ui":"Tooltip__card",...N,"data-placement":p,padding:f,radius:h,ref:t,scheme:g,shadow:b,style:y,...k,children:[s,S]}),C[30]=s,C[31]=f,C[32]=p,C[33]=h,C[34]=t,C[35]=y,C[36]=g,C[37]=b,C[38]=N,C[39]=k,C[40]=S,C[41]=j):j=C[41],j}));nJ.displayName="Memo(ForwardRef(TooltipCard))";let nZ=e_("@sanity/ui/context/tooltipDelayGroup",null);function n0(e){let t,o,n;let r=(0,a.c)(10),{children:l,delay:d}=e,[s,c]=nY(!1),[u,f]=nY(null),p="number"==typeof d?d:d?.open||0,h="number"==typeof d?d:d?.close||0,m=s?1:p;return r[0]!==h||r[1]!==s||r[2]!==u||r[3]!==c||r[4]!==f||r[5]!==m?(o={isGroupActive:s,setIsGroupActive:c,openTooltipId:u,setOpenTooltipId:f,openDelay:m,closeDelay:h},r[0]=h,r[1]=s,r[2]=u,r[3]=c,r[4]=f,r[5]=m,r[6]=o):o=r[6],t=o,r[7]!==l||r[8]!==t?(n=(0,i.jsx)(nZ.Provider,{value:t,children:l}),r[7]=l,r[8]=t,r[9]=n):n=r[9],n}n0.displayName="TooltipDelayGroupProvider";let n1=(0,c.zo)(o1).withConfig({displayName:"StyledTooltip",componentId:"sc-13f2zvh-0"})`pointer-events:none;`,n2=(0,l.forwardRef)(function(e,t){let o=oM(),{layer:n}=eL(),{animate:r=!1,arrow:d=!1,boundaryElement:s=o?.element,children:c,content:u,disabled:f,fallbackPlacements:m=e.fallbackPlacements??nK[e.placement??"bottom"],padding:b=2,placement:y="bottom",portal:w,radius:x=2,scheme:$,shadow:k=2,zOffset:z=n.tooltip.zOffset,delay:S,...j}=e,C=!eH()&&r,R=N(m),E=(0,l.useRef)(null),[I,_]=(0,l.useState)(null),T=(0,l.useRef)(null),F="viewport",[M,O]=(0,l.useState)(0);(0,l.useImperativeHandle)(t,()=>E.current);let A=o5(),L="string"==typeof w?A.elements?.[w]||null:A.element,B=(0,l.useMemo)(()=>{let e=[];return e.push((0,h.RR)({boundary:s||void 0,fallbackPlacements:R,padding:4,rootBoundary:F})),e.push((0,h.cv)({mainAxis:4})),e.push((0,h.uY)({boundary:s||void 0,rootBoundary:F,padding:4})),d&&e.push((0,h.x7)({element:T,padding:4})),C&&e.push(ok),e},[C,d,s,R]),{floatingStyles:D,placement:Q,middlewareData:P,refs:H,update:V}=(0,h.YF)({middleware:B,placement:y,whileElementsMounted:p.Me,elements:{reference:I}}),W=P.arrow?.x,q=P.arrow?.y,X=P["@sanity/ui/origin"]?.originX,G=P["@sanity/ui/origin"]?.originY,Y=(0,l.useId)(),[K,U]=nY(!1),J=(0,l.useContext)(nZ),Z=K||J?.openTooltipId===Y,ee=null!==J,et="number"==typeof S?S:S?.open||0,eo="number"==typeof S?S:S?.close||0,en=ee?J.openDelay:et,er=ee?J.closeDelay:eo,ei=(0,l.useCallback)((e,t)=>{if(ee){if(e){let o=t?0:en;J.setIsGroupActive(e,o),J.setOpenTooltipId(Y,o)}else{let o=er>200?er:200;J.setIsGroupActive(e,o),J.setOpenTooltipId(null,t?0:er)}}else U(e,t?0:e?en:er)},[ee,J,en,Y,er,U]),ea=(0,l.useCallback)(e=>{ei(!1),c?.props?.onBlur?.(e)},[c?.props,ei]),el=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onClick?.(e)},[c?.props,ei]),ed=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onContextMenu?.(e)},[c?.props,ei]),es=(0,l.useCallback)(e=>{ei(!0),c?.props?.onFocus?.(e)},[c?.props,ei]),ec=(0,l.useCallback)(e=>{ei(!0),c?.props?.onMouseEnter?.(e)},[c?.props,ei]),eu=(0,l.useCallback)(e=>{ei(!1),c?.props?.onMouseLeave?.(e)},[c?.props,ei]);(function(e){let t,o,n;let r=(0,a.c)(7),{handleIsOpenChange:i,referenceElement:d,showTooltip:s}=e;r[0]!==i||r[1]!==d?(t=(e,t)=>{d&&(d===e||e instanceof Node&&d.contains(e)||(i(!1),t()))},r[0]=i,r[1]=d,r[2]=t):t=r[2];let c=(0,v.i)(t);r[3]!==c||r[4]!==s?(o=()=>{if(!s)return;let e=t=>{c(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},n=[c,s],r[3]=c,r[4]=s,r[5]=o,r[6]=n):(o=r[5],n=r[6]),(0,l.useEffect)(o,n)})({handleIsOpenChange:ei,referenceElement:I,showTooltip:Z}),(0,l.useEffect)(()=>{f&&Z&&ei(!1)},[f,ei,Z]),(0,l.useEffect)(()=>{!u&&Z&&ei(!1)},[u,ei,Z]),(0,l.useEffect)(()=>{if(Z)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&ei(!1,!0)}},[ei,Z]),(0,l.useLayoutEffect)(()=>{O(Math.min(...s?[s.offsetWidth]:[],L?.offsetWidth||document.body.offsetWidth)-8)},[s,L]);let ef=(0,l.useCallback)(e=>{T.current=e,V()},[V]),ep=(0,l.useCallback)(e=>{E.current=e,H.setFloating(e)},[H]),eh=(0,l.useRef)(null);(0,l.useImperativeHandle)(c?.ref,()=>eh.current);let em=(0,l.useMemo)(()=>c?(0,l.cloneElement)(c,{onBlur:ea,onFocus:es,onMouseEnter:ec,onMouseLeave:eu,onClick:el,onContextMenu:ed,ref:eh}):null,[c,ea,el,ed,es,ec,eu]);if((0,l.useEffect)(()=>{if(em)return _(eh.current),()=>_(null)},[em]),!em)return(0,i.jsx)(i.Fragment,{});if(f)return em;let eg=(0,i.jsx)(n1,{"data-ui":"Tooltip",...j,ref:ep,style:{...D,maxWidth:M>0?`${M}px`:void 0},zOffset:z,children:(0,i.jsx)(nJ,{...j,animate:C,arrow:d,arrowRef:ef,arrowX:W,arrowY:q,originX:X,originY:G,padding:b,placement:Q,radius:x,ref:ep,scheme:$,shadow:k,children:u})}),eb=Z&&(w?(0,i.jsx)(o6,{__unstable_name:"string"==typeof w?w:void 0,children:eg}):eg);return(0,i.jsxs)(i.Fragment,{children:[C?(0,i.jsx)(g.M,{children:eb}):eb,em]})});n2.displayName="ForwardRef(Tooltip)";let n3=c.zo.div.withConfig({displayName:"StyledAutocomplete",componentId:"sc-1igauft-0"})`line-height:0;`,n4=(0,c.zo)(tJ).withConfig({displayName:"ListBox",componentId:"sc-1igauft-1"})`& > ul{list-style:none;padding:0;margin:0;}`,n5=(0,c.F4)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,n6=(0,c.zo)(u.L4p).withConfig({displayName:"AnimatedSpinnerIcon",componentId:"sc-1igauft-2"})`animation:${n5} 500ms linear infinite;`;function n7(e){let t,o,n;let r=(0,a.c)(11),{children:l,id:d,onSelect:s,selected:c,value:u}=e;r[0]!==s||r[1]!==u?(t=()=>{setTimeout(()=>{s(u)},0)},r[0]=s,r[1]=u,r[2]=t):t=r[2];let f=t;r[3]!==f?(o=e=>{var t;"Enter"!==e.key||oV(t=e.currentTarget)||oW(t)||f()},r[3]=f,r[4]=o):o=r[4];let p=o;return r[5]!==l||r[6]!==f||r[7]!==p||r[8]!==d||r[9]!==c?(n=(0,i.jsx)("li",{"aria-selected":c,"data-ui":"AutocompleteOption",id:d,role:"option",onClick:f,onKeyDown:p,children:l}),r[5]=l,r[6]=f,r[7]=p,r[8]=d,r[9]=c,r[10]=n):n=r[10],n}function n8(e,t){return"input/change"===t.type?{...e,activeValue:null,focused:!0,query:t.query}:"input/focus"===t.type?{...e,focused:!0}:"root/blur"===t.type?{...e,focused:!1,query:null}:"root/clear"===t.type?{...e,activeValue:null,query:null,value:null}:"root/escape"===t.type?{...e,focused:!1,query:null}:"root/open"===t.type?{...e,query:e.query||t.query}:"root/setActiveValue"===t.type?{...e,activeValue:t.value,listFocused:t.listFocused||e.listFocused}:"root/setListFocused"===t.type?{...e,listFocused:t.listFocused}:"value/change"===t.type?{...e,activeValue:t.value,query:null,value:t.value}:e}let n9=["Control","Shift","Alt","Enter","Home","End","PageUp","PageDown","Meta","Tab","CapsLock"],re=["bottom-start","top-start"],rt=(e,t)=>t?t.value:e,ro=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>-1,rn=(0,l.forwardRef)(function(e,t){let{border:o=!0,customValidity:n,disabled:r,filterOption:a,fontSize:d=2,icon:s,id:c,listBox:f=$,loading:p,onBlur:h,onChange:m,onFocus:g,onQueryChange:b,onSelect:v,openButton:y,openOnFocus:w,options:k,padding:z=3,popover:S=$,prefix:j,radius:C=2,readOnly:R,relatedElements:E,renderOption:I,renderPopover:_,renderValue:T=rt,suffix:F,value:M,...O}=e,[A,L]=(0,l.useReducer)(n8,{activeValue:M||null,focused:!1,listFocused:!1,query:null,value:M||null}),{activeValue:B,focused:D,listFocused:Q,query:P,value:H}=A,V=(0,l.useCallback)(({value:e})=>(0,i.jsx)(or,{"data-as":"button",padding:z,radius:2,tone:"inherit",children:(0,i.jsx)(t0,{size:d,textOverflow:"ellipsis",children:e})}),[d,z]),W="function"==typeof I?I:V,q="function"==typeof a?a:ro,X=(0,l.useRef)(null),G=(0,l.useRef)(null),Y=(0,l.useRef)(null),K=(0,l.useRef)(null),U=(0,l.useRef)(!1),J=(0,l.useRef)(H),Z=(0,l.useRef)(M),ee=(0,l.useRef)(!1);(0,l.useImperativeHandle)(t,()=>Y.current);let et=`${c}-listbox`,eo=Array.isArray(k)?k:x,en=N(z),er=(0,l.useMemo)(()=>null!==H?eo.find(e=>e.value===H):void 0,[eo,H]),ei=(0,l.useMemo)(()=>eo.filter(e=>!P||q(P,e)),[q,eo,P]),ea=ei.length,el=B?`${c}-option-${B}`:void 0,ed=null!==P&&p||D&&null!==P,es=(0,l.useCallback)(e=>{setTimeout(()=>{if(ee.current)return;let t=(E||[]).concat(X.current?[X.current]:[],G.current?[G.current]:[]),o=!1;if(document.activeElement){for(let e of t)if(e===document.activeElement||e.contains(document.activeElement)){o=!0;break}}!1===o&&(L({type:"root/blur"}),ee.current=!1,b&&b(null),h&&h(e))},0)},[h,b,E]),ec=(0,l.useCallback)(e=>{let t=K.current,o=e.target instanceof HTMLElement?e.target:null,n=t?.contains(o)||!1;n!==U.current&&(U.current=n,L({type:"root/setListFocused",listFocused:n}))},[]),eu=(0,l.useCallback)(e=>{L({type:"value/change",value:e}),ee.current=!1,v&&v(e),J.current=e,m&&m(e),b&&b(null),Y.current?.focus()},[m,v,b]),ef=(0,l.useCallback)(e=>{if("ArrowDown"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===B),o=t?ei.indexOf(t):-1,n=ei[(o+1)%ea];n&&L({type:"root/setActiveValue",value:n.value,listFocused:!0});return}if("ArrowUp"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===B),o=t?ei.indexOf(t):-1,n=ei[-1===o?ea-1:(ea+o-1)%ea];n&&L({type:"root/setActiveValue",value:n.value,listFocused:!0});return}if("Escape"===e.key){L({type:"root/escape"}),ee.current=!1,b&&b(null),Y.current?.focus();return}let t=e.target,o=K.current;if((o===t||o?.contains(t))&&!n9.includes(e.key)){Y.current?.focus();return}},[B,ei,ea,b]),ep=(0,l.useCallback)(e=>{let t=e.currentTarget.value;L({type:"input/change",query:t}),b&&b(t)},[b]),eh=(0,l.useCallback)(()=>{L({type:"root/open",query:H?T(H,er):""})},[er,T,H]),em=(0,l.useCallback)(e=>{D||(L({type:"input/focus"}),g&&g(e),w&&eh())},[D,g,w,eh]),eg=(0,l.useCallback)(()=>{ee.current=!0},[]),eb=(0,l.useCallback)(()=>{ee.current=!1},[]),ev=(0,l.useCallback)(()=>{L({type:"root/clear"}),J.current="",m&&m(""),b&&b(null),Y.current?.focus()},[m,b]),ey=(0,l.useCallback)(()=>{L({type:"input/focus"})},[]);(0,l.useEffect)(()=>{if(M!==Z.current){Z.current=M,void 0!==M&&(L({type:"value/change",value:M}),J.current=M);return}M!==J.current&&(J.current=M||null,L({type:"value/change",value:M||null}))},[M]),(0,l.useEffect)(()=>{!D&&J.current&&L({type:"root/setActiveValue",value:J.current})},[D]),(0,l.useEffect)(()=>{let e=K.current;if(!e)return;let t=ei.find(e=>e.value===B);if(t){let o=ei.indexOf(t),n=e.childNodes[o];if(n){if(document.activeElement&&n.contains(document.activeElement))return;oG(n)}}},[B,ei]);let ew=(0,l.useMemo)(()=>{if(!p&&!r&&H)return{"aria-label":"Clear",onFocus:ey}},[r,ey,p,H]),ex=(0,l.useMemo)(()=>en.map(e=>0===e?0:1===e||2===e?1:e-2),[en]),e$=(0,l.useMemo)(()=>en.map(e=>Math.max(e-1,0)),[en]),ek=(0,l.useMemo)(()=>"object"==typeof y?y:$,[y]),ez=(0,l.useCallback)(e=>{eh(),ek.onClick&&ek.onClick(e),oQ(()=>Y.current?.focus())},[ek,eh]),eS=(0,l.useMemo)(()=>r||R||!y?void 0:(0,i.jsx)(tJ,{"aria-hidden":ed,padding:ex,children:(0,i.jsx)(oo,{"aria-label":"Open",disabled:ed,fontSize:d,icon:u.v4q,mode:"bleed",padding:e$,...ek,onClick:ez})}),[r,ed,d,ez,y,ex,e$,ek,R]),ej=(0,l.useMemo)(()=>null===P?null!==H?T(H,er):"":P,[er,P,T,H]),eC=(0,i.jsx)(nW,{...O,"aria-activedescendant":el,"aria-autocomplete":"list","aria-expanded":ed,"aria-owns":et,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",border:o,clearButton:ew,customValidity:n,disabled:r,fontSize:d,icon:s,iconRight:p&&n6,id:c,inputMode:"search",onChange:ep,onClear:ev,onFocus:em,padding:en,prefix:j,radius:C,readOnly:R,ref:Y,role:"combobox",spellCheck:!1,suffix:F||eS,value:ej}),eR=(0,l.useCallback)(e=>{"Tab"===e.key&&Q&&Y.current?.focus()},[Q]),eE=(0,l.useMemo)(()=>0===ei.length?null:(0,i.jsx)(n4,{"data-ui":"AutoComplete__results",onKeyDown:eR,padding:1,...f,tabIndex:-1,children:(0,i.jsx)(n$,{as:"ul","aria-multiselectable":!1,"data-ui":"AutoComplete__resultsList",id:et,ref:K,role:"listbox",space:1,children:ei.map(e=>{let t=null!==B?e.value===B:er===e;return(0,i.jsx)(n7,{id:`${c}-option-${e.value}`,onSelect:eu,selected:t,value:e.value,children:(0,l.cloneElement)(W(e),{disabled:p,selected:t,tabIndex:Q&&t?0:-1})},e.value)})})}),[B,er,ei,eu,eR,c,f,et,Q,p,W]),eI=(0,l.useMemo)(()=>_?_({content:eE,hidden:!ed,inputElement:Y.current,onMouseEnter:eg,onMouseLeave:eb},G):0===ea?null:(0,i.jsx)(ns,{arrow:!1,constrainSize:!0,content:eE,fallbackPlacements:re,matchReferenceWidth:!0,onMouseEnter:eg,onMouseLeave:eb,open:ed,overflow:"auto",placement:"bottom-start",portal:!0,radius:C,ref:G,referenceElement:Y.current,...S}),[eE,ed,ea,eg,eb,S,C,_]);return(0,i.jsxs)(n3,{"data-ui":"Autocomplete",onBlur:es,onFocus:ec,onKeyDown:ef,ref:X,children:[eC,eI]})});rn.displayName="ForwardRef(Autocomplete)";let rr=rn,ri=c.zo.ol.withConfig({displayName:"StyledBreadcrumbs",componentId:"sc-1es8h8q-0"})`margin:0;padding:0;display:flex;list-style:none;align-items:center;white-space:nowrap;line-height:0;`,ra=(0,c.zo)(oo).withConfig({displayName:"ExpandButton",componentId:"sc-1es8h8q-1"})`appearance:none;margin:-4px;`,rl=(0,l.forwardRef)(function(e,t){let{children:o,maxLength:n,separator:r,space:a=2,...d}=e,s=N(a),[c,u]=(0,l.useState)(!1),f=(0,l.useRef)(null),p=(0,l.useRef)(null),h=(0,l.useCallback)(()=>u(!1),[]),m=(0,l.useCallback)(()=>u(!0),[]);_(h,()=>[f.current,p.current]);let g=(0,l.useMemo)(()=>l.Children.toArray(o).filter(l.isValidElement),[o]),b=(0,l.useMemo)(()=>{let e=g.length;if(n&&e>n){let t=Math.ceil(n/2),o=Math.floor(n/2);return[...g.slice(0,t-1),(0,i.jsx)(ns,{constrainSize:!0,content:(0,i.jsx)(n$,{as:"ol",overflow:"auto",padding:s,space:s,children:g.slice(t-1,e-o)}),open:c,placement:"top",portal:!0,ref:p,children:(0,i.jsx)(ra,{fontSize:1,mode:"bleed",onClick:c?h:m,padding:1,ref:f,selected:c,text:"…"})},"button"),...g.slice(e-o)]}return g},[h,m,n,c,g,s]);return(0,i.jsx)(ri,{"data-ui":"Breadcrumbs",...d,ref:t,children:b.map((e,t)=>(0,i.jsxs)(l.Fragment,{children:[t>0&&(0,i.jsx)(tJ,{"aria-hidden":!0,as:"li",paddingX:s,children:r||(0,i.jsx)(t0,{muted:!0,children:"/"})}),(0,i.jsx)(tJ,{as:"li",children:e})]},t))})});rl.displayName="ForwardRef(Breadcrumbs)";let rd=e_("@sanity/ui/context/dialog",{version:0});function rs(e,t,o){return!e||!t||oq(e,o)||oq(t,o)}let rc=(0,c.zo)(o1).withConfig({displayName:"StyledDialog",componentId:"sc-4n4xb3-0"})(tI,function({theme:e}){let{color:t}=(0,r.aQ)(e);return{"&:not([hidden])":{display:"flex"},top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center",outline:"none",background:t.backdrop}},function(e){let{media:t}=(0,r.aQ)(e.theme);return j(t,e.$position,e=>({"&&":{position:e}}))},function(e){return e.$animate?(0,c.iv)`
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 200ms ease-out;
    // Animates the dialog card.
    & > [data-ui='DialogCard'] {
      animation: zoomIn 200ms ease-out;
    }
  `:(0,c.iv)``}),ru=(0,c.zo)(op).withConfig({displayName:"DialogContainer",componentId:"sc-4n4xb3-1"})`&:not([hidden]){display:flex;}width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center;`,rf=(0,c.zo)(or).withConfig({displayName:"DialogCardRoot",componentId:"sc-4n4xb3-2"})`&:not([hidden]){display:flex;}width:100%;min-height:0;max-height:100%;overflow:hidden;overflow:clip;`,rp=(0,c.zo)(t4).withConfig({displayName:"DialogLayout",componentId:"sc-4n4xb3-3"})`flex:1;min-height:0;width:100%;`,rh=(0,c.zo)(tJ).withConfig({displayName:"DialogHeader",componentId:"sc-4n4xb3-4"})`position:relative;z-index:2;`,rm=(0,c.zo)(tJ).withConfig({displayName:"DialogContent",componentId:"sc-4n4xb3-5"})`position:relative;z-index:1;overflow:auto;outline:none;`,rg=(0,c.zo)(tJ).withConfig({displayName:"DialogFooter",componentId:"sc-4n4xb3-6"})`position:relative;z-index:3;`,rb=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,f,p,h,m,g,b,v;let y=(0,a.c)(38),{__unstable_autoFocus:w,__unstable_hideCloseButton:x,children:$,contentRef:k,footer:z,header:S,id:j,onClickOutside:C,onClose:R,portal:E,radius:I,scheme:T,shadow:F,width:M}=e,O=o5(),A=E?O.elements?.[E]||null:O.element,L=oM().element,B=N(I),D=N(F),Q=N(M),P=(0,l.useRef)(null),H=(0,l.useRef)(null),{isTopLayer:V}=oD(),W=`${j}_label`,q=!!R&&!1===x,X=!!S||q;return y[0]===Symbol.for("react.memo_cache_sentinel")?(o=()=>P.current,y[0]=o):o=y[0],(0,l.useImperativeHandle)(t,o),y[1]===Symbol.for("react.memo_cache_sentinel")?(n=()=>H.current,y[1]=n):n=y[1],(0,l.useImperativeHandle)(k,n),y[2]!==w?(r=()=>{w&&P.current&&oG(P.current)},d=[w,P],y[2]=w,y[3]=r,y[4]=d):(r=y[3],d=y[4]),(0,l.useEffect)(r,d),y[5]!==L||y[6]!==V||y[7]!==R||y[8]!==A?(s=e=>{if(!V||!R)return;let t=document.activeElement;t&&!rs(L,A,t)||"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),R())},y[5]=L,y[6]=V,y[7]=R,y[8]=A,y[9]=s):s=y[9],eE(s),y[10]!==L||y[11]!==V||y[12]!==C||y[13]!==A?(c=V&&C&&(e=>{let t=e.target;t&&!rs(L,A,t)||C()}),y[10]=L,y[11]=V,y[12]=C,y[13]=A,y[14]=c):c=y[14],y[15]===Symbol.for("react.memo_cache_sentinel")?(f=()=>[P.current],y[15]=f):f=y[15],_(c,f),y[16]!==S||y[17]!==W||y[18]!==R||y[19]!==q||y[20]!==X?(p=X&&(0,i.jsx)(rh,{children:(0,i.jsxs)(t4,{align:"flex-start",padding:3,children:[(0,i.jsx)(tJ,{flex:1,padding:2,children:S&&(0,i.jsx)(t0,{id:W,size:1,weight:"semibold",children:S})}),q&&(0,i.jsx)(tJ,{flex:"none",children:(0,i.jsx)(oo,{"aria-label":"Close dialog",disabled:!R,icon:u.Two,mode:"bleed",onClick:R,padding:2})})]})}),y[16]=S,y[17]=W,y[18]=R,y[19]=q,y[20]=X,y[21]=p):p=y[21],y[22]!==$?(h=(0,i.jsx)(rm,{flex:1,ref:H,tabIndex:-1,children:$}),y[22]=$,y[23]=h):h=y[23],y[24]!==z?(m=z&&(0,i.jsx)(rg,{children:z}),y[24]=z,y[25]=m):m=y[25],y[26]!==p||y[27]!==h||y[28]!==m?(g=(0,i.jsxs)(rp,{direction:"column",children:[p,h,m]}),y[26]=p,y[27]=h,y[28]=m,y[29]=g):g=y[29],y[30]!==B||y[31]!==T||y[32]!==D||y[33]!==g?(b=(0,i.jsx)(rf,{radius:B,ref:P,scheme:T,shadow:D,children:g}),y[30]=B,y[31]=T,y[32]=D,y[33]=g,y[34]=b):b=y[34],y[35]!==b||y[36]!==Q?(v=(0,i.jsx)(ru,{"data-ui":"DialogCard",width:Q,children:b}),y[35]=b,y[36]=Q,y[37]=v):v=y[37],v});rb.displayName="ForwardRef(DialogCard)";let rv=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,z,S,j,C,R,E,I,_,T;let F=(0,a.c)(60),M=(0,l.useContext)(rd),{layer:O}=eL();F[0]!==e?({__unstable_autoFocus:y,__unstable_hideCloseButton:w,cardRadius:x,cardShadow:$,children:r,contentRef:d,footer:s,header:c,id:u,onActivate:f,onClickOutside:p,onClose:h,onFocus:m,padding:k,portal:g,position:o,scheme:v,width:z,zOffset:n,animate:S,...b}=e,F[0]=e,F[1]=o,F[2]=n,F[3]=r,F[4]=d,F[5]=s,F[6]=c,F[7]=u,F[8]=f,F[9]=p,F[10]=h,F[11]=m,F[12]=g,F[13]=b,F[14]=v,F[15]=y,F[16]=w,F[17]=x,F[18]=$,F[19]=k,F[20]=z,F[21]=S):(o=F[1],n=F[2],r=F[3],d=F[4],s=F[5],c=F[6],u=F[7],f=F[8],p=F[9],h=F[10],m=F[11],g=F[12],b=F[13],v=F[14],y=F[15],w=F[16],x=F[17],$=F[18],k=F[19],z=F[20],S=F[21]);let A=void 0===y||y,L=void 0!==w&&w,B=void 0===x?4:x,D=void 0===$?3:$,Q=void 0===k?3:k,P=void 0===z?0:z,H=void 0!==S&&S,V=o??(M.position||"fixed"),W=n??(M.zOffset||O.dialog.zOffset),q=!eH()&&H,X=o5(),G=g?X.elements?.[g]||null:X.element,Y=oM().element,K=N(B),U=N(Q),J=N(V),Z=N(P),ee=N(W),et=(0,l.useRef)(null),eo=(0,l.useRef)(null),en=(0,l.useRef)(null),er=(0,l.useRef)(null);F[22]!==m?(j=e=>{m?.(e);let t=e.target,o=en.current;if(o&&t===et.current){oY(o);return}if(o&&t===eo.current){oG(o);return}oH(e.target)&&(er.current=e.target)},F[22]=m,F[23]=j):j=F[23];let ei=j,ea=`${u}_label`,el=(0,l.useRef)(void 0);F[24]!==Y||F[25]!==G?(C=()=>{el.current&&clearTimeout(el.current),el.current=setTimeout(()=>{let e=document.activeElement;if(e&&!rs(Y,G,e)){let e=er.current;if(!e||!document.body.contains(e)){let e=en.current;e&&oG(e);return}e.focus()}},0)},F[24]=Y,F[25]=G,F[26]=C):C=F[26];let ed=C;return F[27]===Symbol.for("react.memo_cache_sentinel")?(R=(0,i.jsx)("div",{ref:et,tabIndex:0}),F[27]=R):R=F[27],F[28]!==A||F[29]!==K||F[30]!==D||F[31]!==r||F[32]!==d||F[33]!==s||F[34]!==c||F[35]!==L||F[36]!==u||F[37]!==p||F[38]!==h||F[39]!==g||F[40]!==v||F[41]!==Z?(E=(0,i.jsx)(rb,{__unstable_autoFocus:A,__unstable_hideCloseButton:L,contentRef:d,footer:s,header:c,id:u,onClickOutside:p,onClose:h,portal:g,radius:K,ref:en,scheme:v,shadow:D,width:Z,children:r}),F[28]=A,F[29]=K,F[30]=D,F[31]=r,F[32]=d,F[33]=s,F[34]=c,F[35]=L,F[36]=u,F[37]=p,F[38]=h,F[39]=g,F[40]=v,F[41]=Z,F[42]=E):E=F[42],F[43]===Symbol.for("react.memo_cache_sentinel")?(I=(0,i.jsx)("div",{ref:eo,tabIndex:0}),F[43]=I):I=F[43],F[44]!==q||F[45]!==ei||F[46]!==ed||F[47]!==u||F[48]!==ea||F[49]!==f||F[50]!==U||F[51]!==J||F[52]!==t||F[53]!==b||F[54]!==E||F[55]!==ee?(_=(0,i.jsxs)(rc,{...b,$animate:q,$padding:U,$position:J,"aria-labelledby":ea,"aria-modal":!0,"data-ui":"Dialog",id:u,onActivate:f,onClick:ed,onFocus:ei,ref:t,role:"dialog",zOffset:ee,children:[R,E,I]}),F[44]=q,F[45]=ei,F[46]=ed,F[47]=u,F[48]=ea,F[49]=f,F[50]=U,F[51]=J,F[52]=t,F[53]=b,F[54]=E,F[55]=ee,F[56]=_):_=F[56],F[57]!==g||F[58]!==_?(T=(0,i.jsx)(o6,{__unstable_name:g,children:_}),F[57]=g,F[58]=_,F[59]=T):T=F[59],T});function ry(e){let t,o,n;let r=(0,a.c)(6),{children:l,position:d,zOffset:s}=e;return r[0]!==d||r[1]!==s?(o={version:0,position:d,zOffset:s},r[0]=d,r[1]=s,r[2]=o):o=r[2],t=o,r[3]!==l||r[4]!==t?(n=(0,i.jsx)(rd.Provider,{value:t,children:l}),r[3]=l,r[4]=t,r[5]=n):n=r[5],n}rv.displayName="ForwardRef(Dialog)",ry.displayName="DialogProvider";let rw=c.zo.kbd.withConfig({displayName:"StyledHotkeys",componentId:"sc-b37mge-0"})`font:inherit;padding:1px;&:not([hidden]){display:block;}`,rx=(0,c.zo)(o$).withConfig({displayName:"Key",componentId:"sc-b37mge-1"})`&:not([hidden]){display:block;}`,r$=(0,l.forwardRef)(function(e,t){let o,n,r,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({fontSize:o,keys:n,padding:r,radius:l,space:s,...d}=e,p[0]=e,p[1]=o,p[2]=n,p[3]=r,p[4]=l,p[5]=d,p[6]=s):(o=p[1],n=p[2],r=p[3],l=p[4],d=p[5],s=p[6]);let h=N(void 0===s?.5:s);if(!n||0===n.length){let e;return p[7]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)(i.Fragment,{}),p[7]=e):e=p[7],e}if(p[8]!==o||p[9]!==n||p[10]!==r||p[11]!==l){let e;p[13]!==o||p[14]!==r||p[15]!==l?(e=(e,t)=>(0,i.jsx)(rx,{fontSize:o,padding:r,radius:l,children:e},t),p[13]=o,p[14]=r,p[15]=l,p[16]=e):e=p[16],c=n.map(e),p[8]=o,p[9]=n,p[10]=r,p[11]=l,p[12]=c}else c=p[12];return p[17]!==h||p[18]!==c?(u=(0,i.jsx)(oy,{as:"span",space:h,children:c}),p[17]=h,p[18]=c,p[19]=u):u=p[19],p[20]!==t||p[21]!==d||p[22]!==u?(f=(0,i.jsx)(rw,{"data-ui":"Hotkeys",...d,ref:t,children:u}),p[20]=t,p[21]=d,p[22]=u,p[23]=f):f=p[23],f});r$.displayName="ForwardRef(Hotkeys)";let rk=e_("@sanity/ui/context/menu",null);function rz(e){return oV(e)&&"true"!==e.getAttribute("data-disabled")||oW(e)&&!e.disabled}function rS(e){return e.filter(rz)}let rj=[],rC=(0,c.zo)(tJ).withConfig({displayName:"StyledMenu",componentId:"sc-xt0tnv-0"})`outline:none;overflow:auto;`,rR=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,z,S,j,C,R;let E=(0,a.c)(50);if(E[0]!==e){let{children:t,focusFirst:i,focusLast:a,onClickOutside:l,onEscape:b,onItemClick:v,onItemSelect:y,onKeyDown:w,originElement:x,padding:$,registerElement:k,shouldFocus:z,space:S,...j}=e;n=t,r=l,d=b,s=v,c=y,u=w,f=x,m=$,p=k,o=z,g=S,h=j,E[0]=e,E[1]=o,E[2]=n,E[3]=r,E[4]=d,E[5]=s,E[6]=c,E[7]=u,E[8]=f,E[9]=p,E[10]=h,E[11]=m,E[12]=g}else o=E[1],n=E[2],r=E[3],d=E[4],s=E[5],c=E[6],u=E[7],f=E[8],p=E[9],h=E[10],m=E[11],g=E[12];let I=void 0===m?1:m,N=void 0===g?1:g,T=o??(e.focusFirst&&"first"||e.focusLast&&"last"||null),F=(0,l.useRef)(null);E[13]===Symbol.for("react.memo_cache_sentinel")?(b=()=>F.current,E[13]=b):b=E[13],(0,l.useImperativeHandle)(t,b);let{isTopLayer:M}=oD();E[14]!==u||E[15]!==f||E[16]!==T?(v={onKeyDown:u,originElement:f,shouldFocus:T,rootElementRef:F},E[14]=u,E[15]=f,E[16]=T,E[17]=v):v=E[17];let{activeElement:O,activeIndex:A,handleItemMouseEnter:L,handleItemMouseLeave:B,handleKeyDown:D,mount:Q}=function(e){let{onKeyDown:t,originElement:o,shouldFocus:n,rootElementRef:r}=e,i=(0,l.useRef)([]),[a,d]=(0,l.useState)(-1),s=(0,l.useRef)(a),c=(0,l.useMemo)(()=>i.current[a]||null,[a]),u=!!r.current,f=(0,l.useCallback)(e=>{d(e),s.current=e},[]),p=(0,l.useCallback)((e,t)=>e?(-1===i.current.indexOf(e)&&(i.current.push(e),function(e,t){if(!e)return;let o=new WeakMap;for(let n of t)o.set(n,function(e,t){let o=[],n=t;for(;n!==e;){let t=n.parentElement;if(!t)break;let r=Array.from(t.childNodes).indexOf(n);if(o.unshift(r),t===e)break;n=t}return o}(e,n));t.sort((e,t)=>{let n=o.get(e)||rj,r=o.get(t)||rj,i=Math.max(n.length,r.length);for(let e=0;e<i;e+=1){let t=n[e]||-1,o=r[e]||-1;if(t!==o)return t-o}return 0})}(r.current,i.current)),t&&f(i.current.indexOf(e)),()=>{let t=i.current.indexOf(e);t>-1&&i.current.splice(t,1)}):()=>{},[r,f]),h=(0,l.useCallback)(e=>{if("Tab"===e.key){o&&o.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=rS(i.current)[0];if(!t)return;f(i.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=rS(i.current),o=t[t.length-1];if(!o)return;f(i.current.indexOf(o));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=rS(i.current),o=t.length;if(0===o)return;let n=i.current[s.current],r=t.indexOf(n),a=t[r=(r-1+o)%o];f(i.current.indexOf(a));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=rS(i.current),o=t.length;if(0===o)return;let n=i.current[s.current],r=t.indexOf(n),a=t[r=(r+1)%o];f(i.current.indexOf(a));return}t&&t(e)},[t,o,f]),m=(0,l.useCallback)(e=>{let t=e.currentTarget;f(i.current.indexOf(t))},[f]),g=(0,l.useCallback)(()=>{f(-2),r.current?.focus()},[r,f]);return(0,l.useEffect)(()=>{if(!u)return;let e=requestAnimationFrame(()=>{if(-1===a){if("first"===n){let e=rS(i.current)[0];e&&f(i.current.indexOf(e))}if("last"===n){let e=rS(i.current),t=e[e.length-1];t&&f(i.current.indexOf(t))}return}(i.current[a]||null)?.focus()});return()=>cancelAnimationFrame(e)},[a,u,f,n]),{activeElement:c,activeIndex:a,handleItemMouseEnter:m,handleItemMouseLeave:g,handleKeyDown:h,mount:p}}(v),P=(0,l.useRef)(null);E[18]!==p?(y=e=>{P.current&&(P.current(),P.current=null),F.current=e,F.current&&p&&(P.current=p(F.current))},E[18]=p,E[19]=y):y=E[19];let H=y;return E[20]!==A||E[21]!==c?(w=()=>{c&&c(A)},x=[A,c],E[20]=A,E[21]=c,E[22]=w,E[23]=x):(w=E[22],x=E[23]),(0,l.useEffect)(w,x),E[24]===Symbol.for("react.memo_cache_sentinel")?($=()=>[F.current],E[24]=$):$=E[24],_(M&&r,$),E[25]!==M||E[26]!==d?(k=e=>{M&&"Escape"===e.key&&(e.stopPropagation(),d&&d())},E[25]=M,E[26]=d,E[27]=k):k=E[27],eE(k),E[28]!==O||E[29]!==A||E[30]!==L||E[31]!==B||E[32]!==Q||E[33]!==r||E[34]!==d||E[35]!==s||E[36]!==p?(S={version:0,activeElement:O,activeIndex:A,mount:Q,onClickOutside:r,onEscape:d,onItemClick:s,onItemMouseEnter:L,onItemMouseLeave:B,registerElement:p,onMouseEnter:L,onMouseLeave:B},E[28]=O,E[29]=A,E[30]=L,E[31]=B,E[32]=Q,E[33]=r,E[34]=d,E[35]=s,E[36]=p,E[37]=S):S=E[37],z=S,E[38]!==n||E[39]!==N?(j=(0,i.jsx)(n$,{space:N,children:n}),E[38]=n,E[39]=N,E[40]=j):j=E[40],E[41]!==D||E[42]!==H||E[43]!==I||E[44]!==h||E[45]!==j?(C=(0,i.jsx)(rC,{"data-ui":"Menu",...h,onKeyDown:D,padding:I,ref:H,role:"menu",tabIndex:-1,children:j}),E[41]=D,E[42]=H,E[43]=I,E[44]=h,E[45]=j,E[46]=C):C=E[46],E[47]!==C||E[48]!==z?(R=(0,i.jsx)(rk.Provider,{value:z,children:C}),E[47]=C,E[48]=z,E[49]=R):R=E[49],R});rR.displayName="ForwardRef(Menu)";let rE=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,z,S,j,C,R,E;let I=(0,a.c)(62),{__unstable_disableRestoreFocusOnClose:N,boundaryElement:_,button:T,id:F,menu:M,onClose:O,onOpen:A,placement:L,popoverScheme:B,portal:D,popover:Q,popoverRadius:P,preventOverflow:H}=e,V=void 0!==N&&N,W=void 0===D||D,[q,X]=(0,l.useState)(!1),[G,Y]=(0,l.useState)(null),[K,U]=(0,l.useState)(null);I[0]===Symbol.for("react.memo_cache_sentinel")?(o=[],I[0]=o):o=I[0];let[J,Z]=(0,l.useState)(o),ee=(0,l.useRef)(q);I[1]!==A||I[2]!==q?(n=()=>{A&&q&&!ee.current&&A()},r=[A,q],I[1]=A,I[2]=q,I[3]=n,I[4]=r):(n=I[3],r=I[4]),(0,l.useEffect)(n,r),I[5]!==O||I[6]!==q?(d=()=>{O&&!q&&ee.current&&O()},s=[O,q],I[5]=O,I[6]=q,I[7]=d,I[8]=s):(d=I[7],s=I[8]),(0,l.useEffect)(d,s),I[9]!==q?(c=()=>{ee.current=q},u=[q],I[9]=q,I[10]=c,I[11]=u):(c=I[10],u=I[11]),(0,l.useEffect)(c,u),I[12]===Symbol.for("react.memo_cache_sentinel")?(f=()=>{X(rI),Y(null)},I[12]=f):f=I[12];let et=f;I[13]!==q?(p=e=>{q&&e.preventDefault()},I[13]=q,I[14]=p):p=I[14];let eo=p;I[15]===Symbol.for("react.memo_cache_sentinel")?(h=e=>{if("ArrowDown"===e.key||"Enter"===e.key||" "===e.key){e.preventDefault(),X(!0),Y("first");return}if("ArrowUp"===e.key){e.preventDefault(),X(!0),Y("last");return}},I[15]=h):h=I[15];let en=h;I[16]!==K||I[17]!==J?(m=e=>{let t=e.target;if(t instanceof Node&&!(K&&(t===K||K.contains(t)))){for(let e of J)if(t===e||e.contains(t))return;X(!1)}},I[16]=K,I[17]=J,I[18]=m):m=I[18];let er=m;I[19]!==K||I[20]!==V?(g=()=>{X(!1),!V&&K&&K.focus()},I[19]=K,I[20]=V,I[21]=g):g=I[21];let ei=g;I[22]!==J?(b=e=>{let t=e.relatedTarget;if(t instanceof Node){for(let e of J)if(e===t||e.contains(t))return;X(!1)}},I[22]=J,I[23]=b):b=I[23];let ea=b;I[24]!==K||I[25]!==V?(v=()=>{X(!1),!V&&K&&K.focus()},I[24]=K,I[25]=V,I[26]=v):v=I[26];let el=v;I[27]===Symbol.for("react.memo_cache_sentinel")?(y=e=>(Z(t=>t.concat([e])),()=>Z(t=>t.filter(t=>t!==e))),I[27]=y):y=I[27];let ed=y;I[28]!==K||I[29]!==ea||I[30]!==el||I[31]!==er||I[32]!==ei||I[33]!==F||I[34]!==M||I[35]!==G?(w=M&&(0,l.cloneElement)(M,{"aria-labelledby":F,onBlurCapture:ea,onClickOutside:er,onEscape:ei,onItemClick:el,originElement:K,registerElement:ed,shouldFocus:G}),I[28]=K,I[29]=ea,I[30]=el,I[31]=er,I[32]=ei,I[33]=F,I[34]=M,I[35]=G,I[36]=w):w=I[36];let es=w;return I[37]!==T||I[38]!==eo||I[39]!==F||I[40]!==q?($=T&&(0,l.cloneElement)(T,{"data-ui":"MenuButton",id:F,onClick:et,onKeyDown:en,onMouseDown:eo,"aria-haspopup":!0,"aria-expanded":q,ref:U,selected:T.props.selected??q}),I[37]=T,I[38]=eo,I[39]=F,I[40]=q,I[41]=$):$=I[41],x=$,I[42]!==K?(k=()=>K,z=[K],I[42]=K,I[43]=k,I[44]=z):(k=I[43],z=I[44]),(0,l.useImperativeHandle)(t,k,z),I[45]!==Q?(j=Q||{},I[45]=Q,I[46]=j):j=I[46],I[47]!==_||I[48]!==L||I[49]!==P||I[50]!==B||I[51]!==W||I[52]!==H||I[53]!==j?(C={boundaryElement:_,overflow:"auto",placement:L,portal:W,preventOverflow:H,radius:P,scheme:B,...j},I[47]=_,I[48]=L,I[49]=P,I[50]=B,I[51]=W,I[52]=H,I[53]=j,I[54]=C):C=I[54],S=C,I[55]!==x?(R=x||(0,i.jsx)(i.Fragment,{}),I[55]=x,I[56]=R):R=I[56],I[57]!==es||I[58]!==q||I[59]!==S||I[60]!==R?(E=(0,i.jsx)(ns,{"data-ui":"MenuButton__popover",...S,content:es,open:q,children:R}),I[57]=es,I[58]=q,I[59]=S,I[60]=R,I[61]=E):E=I[61],E});function rI(e){return!e}rE.displayName="ForwardRef(MenuButton)";let rN=c.zo.hr.withConfig({displayName:"MenuDivider",componentId:"sc-uhoxwu-0"})`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;rN.displayName="MenuDivider";let r_=(0,c.zo)(tJ).withConfig({displayName:"Selectable",componentId:"sc-1w01ang-0"})(tN,function(){return(0,c.iv)`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:o,style:n}=(0,r.aQ)(e.theme),i=o.selectable[t];return(0,c.iv)`
    ${t8(o,i.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${t8(o,i.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${t8(o,i.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${t8(o,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(o,i.hovered)}
            }

            &:active {
              ${t8(o,i.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${t8(o,i.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t8(o,i.pressed)}
        }

        &[data-selected] {
          ${t8(o,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t8(o,i.hovered)}
            }
            &:active {
              ${t8(o,i.pressed)}
            }
          }
        }
      }
    }

    ${n?.card?.root}
  `});function rT(){let e=(0,l.useContext)(rk);if(!e)throw Error("useMenu(): missing context value");if(!oT(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function rF(e){let t,o,n,r,d,c,f,p,h,m,g,b,v,y,w,x,$,k,z,S,j,C,R,E,I,_,T,F,M,O,A,L,B,D,Q;let P=(0,a.c)(79);P[0]!==e?({as:f,children:o,fontSize:p,icon:t,menu:n,onClick:r,padding:h,popover:d,radius:m,space:g,text:v,tone:b,...c}=e,P[0]=e,P[1]=t,P[2]=o,P[3]=n,P[4]=r,P[5]=d,P[6]=c,P[7]=f,P[8]=p,P[9]=h,P[10]=m,P[11]=g,P[12]=b,P[13]=v):(t=P[1],o=P[2],n=P[3],r=P[4],d=P[5],c=P[6],f=P[7],p=P[8],h=P[9],m=P[10],g=P[11],b=P[12],v=P[13]);let H=void 0===f?"button":f,V=void 0===p?1:p,W=void 0===h?3:h,q=void 0===m?2:m,X=void 0===g?3:g,G=void 0===b?"default":b,Y=rT(),{scheme:K}=eM(),{activeElement:U,mount:J,onClickOutside:Z,onEscape:ee,onItemClick:et,onItemMouseEnter:eo,registerElement:en}=Y,er=eo??Y.onMouseEnter,[ei,ea]=(0,l.useState)(null),[el,ed]=(0,l.useState)(!1),[es,ec]=(0,l.useState)(null),eu=!!U&&U===ei,[ef,ep]=(0,l.useState)(!1);P[14]!==er?(y=e=>{ep(!1),er(e),ed(!0)},P[14]=er,P[15]=y):y=P[15];let eh=y;P[16]!==ei?(w=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),ed(!1),requestAnimationFrame(()=>{ei?.focus()}))},P[16]=ei,P[17]=w):w=P[17];let em=w;P[18]!==r?(x=e=>{r?.(e),ec("first"),ed(!0)},P[18]=r,P[19]=x):x=P[19];let eg=x;P[20]!==et?($=()=>{ed(!1),et?.()},P[20]=et,P[21]=$):$=P[21];let eb=$;P[22]===Symbol.for("react.memo_cache_sentinel")?(k=()=>ep(!0),P[22]=k):k=P[22];let ev=k;P[23]!==J||P[24]!==ei?(z=()=>J(ei),S=[J,ei],P[23]=J,P[24]=ei,P[25]=z,P[26]=S):(z=P[25],S=P[26]),(0,l.useEffect)(z,S),P[27]!==eu?(j=()=>{eu||ed(!1)},C=[eu],P[27]=eu,P[28]=j,P[29]=C):(j=P[28],C=P[29]),(0,l.useEffect)(j,C),P[30]!==el?(R=()=>{el||ep(!1)},E=[el],P[30]=el,P[31]=R,P[32]=E):(R=P[31],E=P[32]),(0,l.useEffect)(R,E),P[33]!==es?(I=()=>{if(!es)return;let e=requestAnimationFrame(()=>ec(null));return()=>cancelAnimationFrame(e)},_=[es],P[33]=es,P[34]=I,P[35]=_):(I=P[34],_=P[35]),(0,l.useEffect)(I,_),P[36]!==o||P[37]!==eb||P[38]!==em||P[39]!==n||P[40]!==Z||P[41]!==ee||P[42]!==en||P[43]!==es?(T=(0,i.jsx)(rR,{...n,onClickOutside:Z,onEscape:ee,onItemClick:eb,onKeyDown:em,onMouseEnter:ev,registerElement:en,shouldFocus:es,children:o}),P[36]=o,P[37]=eb,P[38]=em,P[39]=n,P[40]=Z,P[41]=ee,P[42]=en,P[43]=es,P[44]=T):T=P[44];let ey=T;P[45]===Symbol.for("react.memo_cache_sentinel")?(F=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){ec("first"),ed(!0),ep(!0);return}},P[45]=F):F=P[45];let ew=F,ex="button"===H?ef:void 0,e$="button"!==H?ef:void 0,ek=!ef&&eu?"":void 0,ez=N(q),eS="button"===H?"button":void 0;return P[46]!==t||P[47]!==V?(M=t&&(0,i.jsxs)(t0,{size:V,children:[(0,l.isValidElement)(t)&&t,(0,s.isValidElementType)(t)&&(0,i.jsx)(t,{})]}),P[46]=t,P[47]=V,P[48]=M):M=P[48],P[49]!==V||P[50]!==v?(O=(0,i.jsx)(tJ,{flex:1,children:(0,i.jsx)(t0,{size:V,textOverflow:"ellipsis",weight:"medium",children:v})}),P[49]=V,P[50]=v,P[51]=O):O=P[51],P[52]===Symbol.for("react.memo_cache_sentinel")?(A=(0,i.jsx)(u.XCv,{}),P[52]=A):A=P[52],P[53]!==V?(L=(0,i.jsx)(t0,{size:V,children:A}),P[53]=V,P[54]=L):L=P[54],P[55]!==W||P[56]!==X||P[57]!==M||P[58]!==O||P[59]!==L?(B=(0,i.jsxs)(t4,{gap:X,padding:W,children:[M,O,L]}),P[55]=W,P[56]=X,P[57]=M,P[58]=O,P[59]=L,P[60]=B):B=P[60],P[61]!==H||P[62]!==eg||P[63]!==eh||P[64]!==c||P[65]!==K||P[66]!==ex||P[67]!==e$||P[68]!==ek||P[69]!==ez||P[70]!==eS||P[71]!==B||P[72]!==G?(D=(0,i.jsx)(r_,{"data-as":H,"data-ui":"MenuGroup",forwardedAs:H,...c,"aria-pressed":ex,"data-pressed":e$,"data-selected":ek,$radius:ez,$tone:G,$scheme:K,onClick:eg,onKeyDown:ew,onMouseEnter:eh,ref:ea,tabIndex:-1,type:eS,children:B}),P[61]=H,P[62]=eg,P[63]=eh,P[64]=c,P[65]=K,P[66]=ex,P[67]=e$,P[68]=ek,P[69]=ez,P[70]=eS,P[71]=B,P[72]=G,P[73]=D):D=P[73],P[74]!==ey||P[75]!==el||P[76]!==d||P[77]!==D?(Q=(0,i.jsx)(ns,{...d,content:ey,"data-ui":"MenuGroup__popover",open:el,children:D}),P[74]=ey,P[75]=el,P[76]=d,P[77]=D,P[78]=Q):Q=P[78],Q}r_.displayName="Selectable",rF.displayName="MenuGroup";let rM=(0,l.forwardRef)(function(e,t){let o,n,r,d,c,u,f,p,h,m,g,b,v,y,w,x,$,k,z,S,j,C,R,E,I,_,T,F,M,O,A,L,B;let D=(0,a.c)(74);D[0]!==e?({as:x,children:r,disabled:d,fontSize:$,hotkeys:c,icon:o,iconRight:n,onClick:u,padding:k,paddingX:g,paddingY:b,paddingTop:m,paddingRight:h,paddingBottom:f,paddingLeft:p,pressed:v,radius:z,selected:w,space:S,text:C,tone:j,...y}=e,D[0]=e,D[1]=o,D[2]=n,D[3]=r,D[4]=d,D[5]=c,D[6]=u,D[7]=f,D[8]=p,D[9]=h,D[10]=m,D[11]=g,D[12]=b,D[13]=v,D[14]=y,D[15]=w,D[16]=x,D[17]=$,D[18]=k,D[19]=z,D[20]=S,D[21]=j,D[22]=C):(o=D[1],n=D[2],r=D[3],d=D[4],c=D[5],u=D[6],f=D[7],p=D[8],h=D[9],m=D[10],g=D[11],b=D[12],v=D[13],y=D[14],w=D[15],x=D[16],$=D[17],k=D[18],z=D[19],S=D[20],j=D[21],C=D[22]);let Q=void 0===x?"button":x,P=void 0===$?1:$,H=void 0===k?3:k,V=void 0===z?2:z,W=void 0===S?3:S,q=void 0===j?"default":j,{scheme:X}=eM(),G=rT(),{activeElement:Y,mount:K,onItemClick:U,onItemMouseEnter:J,onItemMouseLeave:Z}=G,ee=J??G.onMouseEnter,et=Z??G.onMouseLeave,[eo,en]=(0,l.useState)(null),er=!!Y&&Y===eo,ei=(0,l.useRef)(null);D[23]===Symbol.for("react.memo_cache_sentinel")?(R=()=>ei.current,D[23]=R):R=D[23],(0,l.useImperativeHandle)(t,R),D[24]!==K||D[25]!==eo||D[26]!==w?(E=()=>K(eo,w),I=[K,eo,w],D[24]=K,D[25]=eo,D[26]=w,D[27]=E,D[28]=I):(E=D[27],I=D[28]),(0,l.useEffect)(E,I),D[29]!==d||D[30]!==u||D[31]!==U?(_=e=>{d||(u&&u(e),U&&U())},D[29]=d,D[30]=u,D[31]=U,D[32]=_):_=D[32];let ea=_;D[33]!==H||D[34]!==f||D[35]!==p||D[36]!==h||D[37]!==m||D[38]!==g||D[39]!==b?(F={padding:H,paddingX:g,paddingY:b,paddingTop:m,paddingRight:h,paddingBottom:f,paddingLeft:p},D[33]=H,D[34]=f,D[35]=p,D[36]=h,D[37]=m,D[38]=g,D[39]=b,D[40]=F):F=D[40],T=F;let el=N(P);D[41]!==el?(M=el.map(rO),D[41]=el,D[42]=M):M=D[42];let ed=M;D[43]===Symbol.for("react.memo_cache_sentinel")?(O=e=>{ei.current=e,en(e)},D[43]=O):O=D[43];let es=O,ec="button"===Q&&v,eu="button"!==Q&&v?"":void 0,ef=er?"":void 0,ep=d?"":void 0,eh=N(V),em=N(0),eg=d?"default":q,eb="button"===Q?"button":void 0;return D[44]!==o||D[45]!==n||D[46]!==P||D[47]!==c||D[48]!==ed||D[49]!==T||D[50]!==W||D[51]!==C?(A=(o||C||n)&&(0,i.jsxs)(t4,{as:"span",gap:W,align:"center",...T,children:[o&&(0,i.jsxs)(t0,{size:P,children:[(0,l.isValidElement)(o)&&o,(0,s.isValidElementType)(o)&&(0,i.jsx)(o,{})]}),C&&(0,i.jsx)(tJ,{flex:1,children:(0,i.jsx)(t0,{size:P,textOverflow:"ellipsis",weight:"medium",children:C})}),c&&(0,i.jsx)(r$,{fontSize:ed,keys:c,style:{marginTop:-4,marginBottom:-4}}),n&&(0,i.jsxs)(t0,{size:P,children:[(0,l.isValidElement)(n)&&n,(0,s.isValidElementType)(n)&&(0,i.jsx)(n,{})]})]}),D[44]=o,D[45]=n,D[46]=P,D[47]=c,D[48]=ed,D[49]=T,D[50]=W,D[51]=C,D[52]=A):A=D[52],D[53]!==r||D[54]!==T?(L=r&&(0,i.jsx)(tJ,{as:"span",...T,children:r}),D[53]=r,D[54]=T,D[55]=L):L=D[55],D[56]!==Q||D[57]!==d||D[58]!==ea||D[59]!==ee||D[60]!==et||D[61]!==y||D[62]!==X||D[63]!==ec||D[64]!==eu||D[65]!==ef||D[66]!==ep||D[67]!==eh||D[68]!==em||D[69]!==eg||D[70]!==eb||D[71]!==A||D[72]!==L?(B=(0,i.jsxs)(r_,{"data-ui":"MenuItem",role:"menuitem",...y,"aria-pressed":ec,"data-pressed":eu,"data-selected":ef,"data-disabled":ep,forwardedAs:Q,$radius:eh,$padding:em,$tone:eg,$scheme:X,disabled:d,onClick:ea,onMouseEnter:ee,onMouseLeave:et,ref:es,tabIndex:-1,type:eb,children:[A,L]}),D[56]=Q,D[57]=d,D[58]=ea,D[59]=ee,D[60]=et,D[61]=y,D[62]=X,D[63]=ec,D[64]=eu,D[65]=ef,D[66]=ep,D[67]=eh,D[68]=em,D[69]=eg,D[70]=eb,D[71]=A,D[72]=L,D[73]=B):B=D[73],B});function rO(e){return e-1}rM.displayName="ForwardRef(MenuItem)";let rA=(0,c.F4)`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`,rL=(0,c.iv)`
  background-image: linear-gradient(
    to right,
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-to),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from)
  );
  background-position: 100%;
  background-size: 200% 100%;
  background-attachment: fixed;
  animation-name: ${rA};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2000ms;
`,rB=(0,c.iv)`
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 200ms ease-in;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({$animated:e})=>e?rL:(0,c.iv)`
            background-color: var(--card-skeleton-color-from);
          `}
  }

  @media screen and (prefers-reduced-motion: reduce) {
    background-color: var(--card-skeleton-color-from);
  }
`,rD=(0,c.zo)(tJ).withConfig({displayName:"StyledSkeleton",componentId:"sc-ebtpni-0"})(tN,rB),rQ=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u;let f=(0,a.c)(14);f[0]!==e?({animated:d,delay:o,radius:n,...r}=e,f[0]=e,f[1]=o,f[2]=n,f[3]=r,f[4]=d):(o=f[1],n=f[2],r=f[3],d=f[4]);let p=void 0!==d&&d,[h,m]=(0,l.useState)(!o);f[5]!==o?(s=()=>{if(!o)return m(!0);let e=setTimeout(()=>{m(!0)},o);return()=>{clearTimeout(e)}},c=[o],f[5]=o,f[6]=s,f[7]=c):(s=f[6],c=f[7]),(0,l.useEffect)(s,c);let g=N(n);return f[8]!==p||f[9]!==t||f[10]!==r||f[11]!==g||f[12]!==h?(u=(0,i.jsx)(rD,{...r,$animated:p,$radius:g,$visible:h,ref:t}),f[8]=p,f[9]=t,f[10]=r,f[11]=g,f[12]=h,f[13]=u):u=f[13],u});rQ.displayName="ForwardRef(Skeleton)";let rP=(0,c.zo)(rQ).withConfig({displayName:"StyledSkeleton",componentId:"sc-2p7a1v-0"})(e=>{let{$size:t,$style:o}=e,{font:n,media:i}=(0,r.aQ)(e.theme),a=n[o];return j(i,t,e=>{let t=a.sizes[e];return{height:t.lineHeight-t.ascenderHeight-t.descenderHeight}})}),rH=(0,l.forwardRef)(function(e,t){let o,n,r;let l=(0,a.c)(7);l[0]!==e?({size:n,...o}=e,l[0]=e,l[1]=o,l[2]=n):(o=l[1],n=l[2]);let d=N(void 0===n?2:n);return l[3]!==d||l[4]!==t||l[5]!==o?(r=(0,i.jsx)(rP,{...o,$size:d,ref:t,$style:"text"}),l[3]=d,l[4]=t,l[5]=o,l[6]=r):r=l[6],r});rH.displayName="ForwardRef(TextSkeleton)",(0,l.forwardRef)(function(e,t){let o,n,r;let l=(0,a.c)(7);l[0]!==e?({size:n,...o}=e,l[0]=e,l[1]=o,l[2]=n):(o=l[1],n=l[2]);let d=N(void 0===n?2:n);return l[3]!==d||l[4]!==t||l[5]!==o?(r=(0,i.jsx)(rP,{...o,$size:d,ref:t,$style:"label"}),l[3]=d,l[4]=t,l[5]=o,l[6]=r):r=l[6],r}).displayName="ForwardRef(LabelSkeleton)",(0,l.forwardRef)(function(e,t){let o,n,r;let l=(0,a.c)(7);l[0]!==e?({size:n,...o}=e,l[0]=e,l[1]=o,l[2]=n):(o=l[1],n=l[2]);let d=N(void 0===n?2:n);return l[3]!==d||l[4]!==t||l[5]!==o?(r=(0,i.jsx)(rP,{...o,$size:d,ref:t,$style:"heading"}),l[3]=d,l[4]=t,l[5]=o,l[6]=r):r=l[6],r}).displayName="ForwardRef(HeadingSkeleton)",(0,l.forwardRef)(function(e,t){let o,n,r;let l=(0,a.c)(7);l[0]!==e?({size:n,...o}=e,l[0]=e,l[1]=o,l[2]=n):(o=l[1],n=l[2]);let d=N(void 0===n?2:n);return l[3]!==d||l[4]!==t||l[5]!==o?(r=(0,i.jsx)(rP,{...o,$size:d,ref:t,$style:"code"}),l[3]=d,l[4]=t,l[5]=o,l[6]=r):r=l[6],r}).displayName="ForwardRef(CodeSkeleton)";let rV=(0,c.zo)(oo).withConfig({displayName:"CustomButton",componentId:"sc-1kns779-0"})`max-width:100%;`,rW=(0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m,g,b,v,y,w;let x=(0,a.c)(30);x[0]!==e?({icon:n,id:r,focused:o,fontSize:p,label:d,onClick:s,onFocus:c,padding:h,selected:f,...u}=e,x[0]=e,x[1]=o,x[2]=n,x[3]=r,x[4]=d,x[5]=s,x[6]=c,x[7]=u,x[8]=f,x[9]=p,x[10]=h):(o=x[1],n=x[2],r=x[3],d=x[4],s=x[5],c=x[6],u=x[7],f=x[8],p=x[9],h=x[10]);let $=void 0===p?1:p,k=void 0===h?2:h,z=(0,l.useRef)(null),S=(0,l.useRef)(!1);x[11]===Symbol.for("react.memo_cache_sentinel")?(m=()=>z.current,x[11]=m):m=x[11],(0,l.useImperativeHandle)(t,m),x[12]===Symbol.for("react.memo_cache_sentinel")?(g=()=>{S.current=!1},x[12]=g):g=x[12];let j=g;x[13]!==c?(b=e=>{S.current=!0,c&&c(e)},x[13]=c,x[14]=b):b=x[14];let C=b;x[15]!==o?(v=()=>{o&&!S.current&&(z.current&&z.current.focus(),S.current=!0)},y=[o],x[15]=o,x[16]=v,x[17]=y):(v=x[16],y=x[17]),(0,l.useEffect)(v,y);let R=f?"true":"false",E=f?0:-1;return x[18]!==$||x[19]!==C||x[20]!==n||x[21]!==r||x[22]!==d||x[23]!==s||x[24]!==k||x[25]!==u||x[26]!==f||x[27]!==R||x[28]!==E?(w=(0,i.jsx)(rV,{"data-ui":"Tab",...u,"aria-selected":R,fontSize:$,icon:n,id:r,mode:"bleed",onClick:s,onBlur:j,onFocus:C,padding:k,ref:z,role:"tab",selected:f,tabIndex:E,text:d,type:"button"}),x[18]=$,x[19]=C,x[20]=n,x[21]=r,x[22]=d,x[23]=s,x[24]=k,x[25]=u,x[26]=f,x[27]=R,x[28]=E,x[29]=w):w=x[29],w});rW.displayName="ForwardRef(Tab)";let rq=(0,c.zo)(oy).withConfig({displayName:"CustomInline",componentId:"sc-5cm04m-0"})`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,rX=(0,l.forwardRef)(function(e,t){let o,n,r,d,s;let c=(0,a.c)(15);c[0]!==e?({children:o,...n}=e,c[0]=e,c[1]=o,c[2]=n):(o=c[1],n=c[2]);let[u,f]=(0,l.useState)(-1);if(c[3]!==o||c[4]!==u){let e;let t=l.Children.toArray(o).filter(l.isValidElement);c[6]!==u?(e=(e,t)=>(0,l.cloneElement)(e,{focused:u===t,key:t,onFocus:()=>f(t)}),c[6]=u,c[7]=e):e=c[7],r=t.map(e),c[3]=o,c[4]=u,c[5]=r}else r=c[5];let p=r,h=p.length;c[8]!==h?(d=e=>{"ArrowLeft"===e.key&&f(e=>(e+h-1)%h),"ArrowRight"===e.key&&f(e=>(e+1)%h)},c[8]=h,c[9]=d):d=c[9];let m=d;return c[10]!==m||c[11]!==t||c[12]!==n||c[13]!==p?(s=(0,i.jsx)(rq,{"data-ui":"TabList",...n,onKeyDown:m,ref:t,role:"tablist",children:p}),c[10]=m,c[11]=t,c[12]=n,c[13]=p,c[14]=s):s=c[14],s});rX.displayName="ForwardRef(TabList)";let rG=(0,l.forwardRef)(function(e,t){let o,n,r;let l=(0,a.c)(9);l[0]!==e?({flex:o,...n}=e,l[0]=e,l[1]=o,l[2]=n):(o=l[1],n=l[2]);let d=void 0===e.tabIndex?0:e.tabIndex;return l[3]!==o||l[4]!==e.children||l[5]!==t||l[6]!==n||l[7]!==d?(r=(0,i.jsx)(tJ,{"data-ui":"TabPanel",...n,flex:o,ref:t,role:"tabpanel",tabIndex:d,children:e.children}),l[3]=o,l[4]=e.children,l[5]=t,l[6]=n,l[7]=d,l[8]=r):r=l[8],r});rG.displayName="ForwardRef(TabPanel)";let rY=(0,c.zo)(t4).withConfig({displayName:"TextBox",componentId:"sc-1rr7rxo-0"})`overflow-x:auto;`,rK=(0,c.F4)`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`,rU={error:"critical",warning:"caution",success:"positive",info:"neutral"},rJ={error:"critical",warning:"caution",success:"positive",info:"neutral"},rZ={error:"alert",warning:"alert",success:"alert",info:"alert"},r0=(0,c.zo)(or).withConfig({displayName:"StyledToast",componentId:"sc-1icz8ea-0"})(function(e){let{color:t}=(0,r.aQ)(e.theme),o=t.button.default[e.tone].enabled.bg;return e.$duration?(0,c.iv)`
    pointer-events: all;
    width: 100%;
    position: relative;
    overflow: hidden;
    overflow: clip;
    padding-bottom: ${2}px;
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      height: ${2}px;
      background: ${o};
      animation-name: ${rK};
      animation-duration: ${e.$duration}ms;
      animation-fill-mode: both;
    }

    & > * {
      opacity: var(${k}, 1);
      will-change: opacity;
    }
  `:(0,c.iv)`
      pointer-events: all;
      & > * {
        opacity: var(${k}, 1);
        will-change: opacity;
      }
    `});function r1(e){let t,o,n,r,l,d,s,c,f,p,h,m,g,b;let v=(0,a.c)(30);v[0]!==e?({closable:t,description:o,duration:n,onClose:r,radius:s,title:c,status:d,...l}=e,v[0]=e,v[1]=t,v[2]=o,v[3]=n,v[4]=r,v[5]=l,v[6]=d,v[7]=s,v[8]=c):(t=v[1],o=v[2],n=v[3],r=v[4],l=v[5],d=v[6],s=v[7],c=v[8]);let y=void 0===s?3:s,w=d?rU[d]:"default",x=d?rJ[d]:"default",$=d?rZ[d]:"status";return v[9]!==c?(f=c&&(0,i.jsx)(t0,{size:1,weight:"medium",children:c}),v[9]=c,v[10]=f):f=v[10],v[11]!==o?(p=o&&(0,i.jsx)(t0,{muted:!0,size:1,children:o}),v[11]=o,v[12]=p):p=v[12],v[13]!==f||v[14]!==p?(h=(0,i.jsx)(rY,{flex:1,padding:3,children:(0,i.jsxs)(n$,{space:3,children:[f,p]})}),v[13]=f,v[14]=p,v[15]=h):h=v[15],v[16]!==x||v[17]!==t||v[18]!==r?(m=t&&(0,i.jsx)(tJ,{padding:1,children:(0,i.jsx)(oo,{as:"button",icon:u.Two,mode:"bleed",padding:2,tone:x,onClick:r,style:{verticalAlign:"top"}})}),v[16]=x,v[17]=t,v[18]=r,v[19]=m):m=v[19],v[20]!==h||v[21]!==m?(g=(0,i.jsxs)(t4,{align:"flex-start",children:[h,m]}),v[20]=h,v[21]=m,v[22]=g):g=v[22],v[23]!==w||v[24]!==n||v[25]!==y||v[26]!==l||v[27]!==$||v[28]!==g?(b=(0,i.jsx)(r0,{"data-ui":"Toast",role:$,...l,marginTop:3,radius:y,shadow:2,tone:w,$duration:n,children:g}),v[23]=w,v[24]=n,v[25]=y,v[26]=l,v[27]=$,v[28]=g,v[29]=b):b=v[29],b}function r2(){return!1}function r3(){return!0}r1.displayName="Toast";let r4=()=>()=>{},r5=e_("@sanity/ui/context/toast",null),r6=0,r7=(0,c.zo)(o1).withConfig({displayName:"StyledToastProvider",componentId:"sc-17mn6j-0"})`position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;`,r8=c.zo.div.withConfig({displayName:"ToastContainer",componentId:"sc-17mn6j-1"})`box-sizing:border-box;position:absolute;right:0;bottom:0;max-width:420px;width:100%;`;function r9(e){let t,o,n,r,d,s,c,u,f,p,h,b,v,y,w;let x=(0,a.c)(24),{children:$,padding:z,paddingX:S,paddingY:j,zOffset:C}=e,R=void 0===z?4:z;x[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],x[0]=t):t=x[0];let[E,I]=(0,l.useState)(t);x[1]===Symbol.for("react.memo_cache_sentinel")?(o={},x[1]=o):o=x[1];let N=(0,l.useRef)(o),_=(0,l.useSyncExternalStore)(r4,r3,r2),T=eH();x[2]===Symbol.for("react.memo_cache_sentinel")?(r={opacity:0,[k]:0,y:32,scale:.25,willChange:"transform"},d=[0,1,1],x[2]=r,x[3]=d):(r=x[2],d=x[3]),x[4]===Symbol.for("react.memo_cache_sentinel")?(s={opacity:d,[k]:[0,0,1],y:0,scale:1},c=[1,1,0],x[4]=s,x[5]=c):(s=x[4],c=x[5]),x[6]===Symbol.for("react.memo_cache_sentinel")?(u=[1,0,0],x[6]=u):u=x[6];let F=T?0:.2;return x[7]!==F?(f={initial:r,animate:s,exit:{opacity:c,[k]:u,scale:.5,transition:{duration:F}}},x[7]=F,x[8]=f):f=x[8],n=f,x[9]===Symbol.for("react.memo_cache_sentinel")?(h={version:0,push:e=>{let t=e=>(0,l.startTransition)(()=>I(e)),o=e.id||String(r6++),n=e.duration||5e3,r=()=>{let e=N.current[o]?.timeoutId;t(e=>{let t=e.findIndex(e=>e.id===o);if(t>-1){let o=e.slice(0);return o.splice(t,1),o}return e}),void 0!==e&&(clearTimeout(e),delete N.current[o])};return t(t=>t.filter(e=>e.id!==o).concat([{dismiss:r,id:o,params:{...e,duration:n}}])),N.current[o]&&(clearTimeout(N.current[o].timeoutId),delete N.current[o]),N.current[o]={timeoutId:setTimeout(r,n)},o}},x[9]=h):h=x[9],p=h,x[10]===Symbol.for("react.memo_cache_sentinel")?(b=()=>()=>{for(let{timeoutId:e}of Object.values(N.current))clearTimeout(e);N.current={}},v=[],x[10]=b,x[11]=v):(b=x[10],v=x[11]),(0,l.useEffect)(b,v),x[12]!==_||x[13]!==R||x[14]!==S||x[15]!==j||x[16]!==T||x[17]!==E||x[18]!==n||x[19]!==C?(y=_&&(0,i.jsx)(r7,{"data-ui":"ToastProvider",zOffset:C,children:(0,i.jsx)(r8,{children:(0,i.jsx)(tJ,{padding:R,paddingX:S,paddingY:j,children:(0,i.jsx)(g.M,{initial:!1,children:E.map(e=>{let{dismiss:t,id:o,params:r}=e;return(0,i.jsx)(m.E.div,{layout:"position",initial:"initial",animate:"animate",exit:"exit",variants:n,transition:T?{duration:0}:{type:"spring",damping:30,stiffness:400},children:(0,i.jsx)(r1,{closable:r.closable,description:r.description,onClose:t,status:r.status,title:r.title,duration:r.duration})},o)})})})})}),x[12]=_,x[13]=R,x[14]=S,x[15]=j,x[16]=T,x[17]=E,x[18]=n,x[19]=C,x[20]=y):y=x[20],x[21]!==$||x[22]!==y?(w=(0,i.jsxs)(r5.Provider,{value:p,children:[$,y]}),x[21]=$,x[22]=y,x[23]=w):w=x[23],w}function ie(){let e=(0,l.useContext)(r5);if(!e)throw Error("useToast(): missing context value");if(!oT(e)||0!==e.version)throw Error("useToast(): the context value is not compatible");return e}function it(e){if("treeitem"===e.getAttribute("role")&&e.focus(),"none"===e.getAttribute("role")){let t=e.firstChild;t&&t instanceof HTMLElement&&t.focus()}}r9.displayName="ToastProvider";let io=e_("@sanity/ui/context/tree",null);function ir(){let e=(0,l.useContext)(io);if(!e)throw Error("Tree: missing context value");return e}(0,l.memo)((0,l.forwardRef)(function(e,t){let o,n,r,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,z,S,j,C;let R=(0,a.c)(37);R[0]!==e?({children:o,space:d,onFocus:n,...r}=e,R[0]=e,R[1]=o,R[2]=n,R[3]=r,R[4]=d):(o=R[1],n=R[2],r=R[3],d=R[4]);let E=void 0===d?1:d,I=(0,l.useRef)(null),[N,_]=(0,l.useState)(null),T=(0,l.useRef)(N);R[5]===Symbol.for("react.memo_cache_sentinel")?(c=[],R[5]=c):c=R[5],s=c,R[6]===Symbol.for("react.memo_cache_sentinel")?(u=[],R[6]=u):u=R[6];let[F,M]=(0,l.useState)(u);R[7]===Symbol.for("react.memo_cache_sentinel")?(f={},R[7]=f):f=R[7];let[O,A]=(0,l.useState)(f),L=(0,l.useRef)(O);R[8]===Symbol.for("react.memo_cache_sentinel")?(p=()=>I.current,R[8]=p):p=R[8],(0,l.useImperativeHandle)(t,p),R[9]!==N?(h=()=>{T.current=N},m=[N],R[9]=N,R[10]=h,R[11]=m):(h=R[10],m=R[11]),(0,l.useEffect)(h,m),R[12]!==O?(g=()=>{L.current=O},b=[O],R[12]=O,R[13]=g,R[14]=b):(g=R[13],b=R[14]),(0,l.useEffect)(g,b),R[15]===Symbol.for("react.memo_cache_sentinel")?(v=(e,t,o,n)=>(A(n=>({...n,[t]:{element:e,expanded:o}})),n&&_(e),()=>{A(e=>{let o={...e};return delete o[t],o})}),R[15]=v):v=R[15];let B=v;R[16]===Symbol.for("react.memo_cache_sentinel")?(y=(e,t)=>{A(o=>{let n=o[e];return n?{...o,[e]:{...n,expanded:t}}:o})},R[16]=y):y=R[16];let D=y,Q=N||F[0]||null;R[17]!==E||R[18]!==O||R[19]!==Q?(x={version:0,focusedElement:Q,level:0,path:s,registerItem:B,setExpanded:D,setFocusedElement:_,space:E,state:O},R[17]=E,R[18]=O,R[19]=Q,R[20]=x):x=R[20],w=x,R[21]!==F?($=e=>{if(T.current){if("ArrowDown"===e.key){e.preventDefault();let t=function(e,t,o){let n=t.indexOf(o),r=t.slice(n),i=t.length;for(let t=1;t<i;t+=1){if(!r[t])continue;let o=r[t].getAttribute("data-tree-key");if(!o)continue;let n=o.split("/");n.pop();let i=[],a=!0;for(let t=0;t<n.length;t+=1){i.push(n[t]);let o=i.join("/");if(!e[o]?.expanded){a=!1;break}}if(a)return r[t]}return null}(L.current,F,T.current);t&&(it(t),_(t));return}if("ArrowUp"===e.key){e.preventDefault();let t=function(e,t,o){let n=t.indexOf(o),r=t.slice(0,n),i=r.length;for(let t=i-1;t>=0;t-=1){let o=r[t].getAttribute("data-tree-key");if(!o)continue;let n=o.split("/");n.pop();let i=[],a=!0;for(let t=0;t<n.length;t+=1){i.push(n[t]);let o=i.join("/");if(!e[o]?.expanded){a=!1;break}}if(a)return r[t]}return null}(L.current,F,T.current);t&&(it(t),_(t));return}if("ArrowLeft"===e.key){e.preventDefault();let t=T.current.getAttribute("data-tree-key");if(!t)return;let o=L.current[t];if(!o)return;if(o.expanded)A(e=>{let o=e[t];return o?{...e,[t]:{...o,expanded:!1}}:e});else{let e=t.split("/");e.pop();let o=e.join("/"),n=o&&L.current[o];n&&(n.element.focus(),_(n.element))}return}if("ArrowRight"===e.key){e.preventDefault();let t=T.current.getAttribute("data-tree-key");if(!t)return;L.current[t]?.expanded||A(e=>{let o=e[t];return o?{...e,[t]:{...o,expanded:!0}}:e});return}}},R[21]=F,R[22]=$):$=R[22];let P=$;R[23]!==n?(k=e=>{_(e.target),n?.(e)},R[23]=n,R[24]=k):k=R[24];let H=k;return R[25]===Symbol.for("react.memo_cache_sentinel")?(z=()=>{I.current&&M(Array.from(I.current.querySelectorAll('[data-ui="TreeItem"]')))},R[25]=z):z=R[25],R[26]!==o?(S=[o],R[26]=o,R[27]=S):S=R[27],(0,l.useEffect)(z,S),R[28]!==o||R[29]!==H||R[30]!==P||R[31]!==r||R[32]!==E?(j=(0,i.jsx)(n$,{as:"ul","data-ui":"Tree",...r,onFocus:H,onKeyDown:P,ref:I,role:"tree",space:E,children:o}),R[28]=o,R[29]=H,R[30]=P,R[31]=r,R[32]=E,R[33]=j):j=R[33],R[34]!==w||R[35]!==j?(C=(0,i.jsx)(io.Provider,{value:w,children:j}),R[34]=w,R[35]=j,R[36]=C):C=R[36],C})).displayName="Memo(ForwardRef(Tree))";let ii=(0,l.memo)(function(e){let t,o,n,r;let l=(0,a.c)(9);l[0]!==e?({children:t,expanded:n,...o}=e,l[0]=e,l[1]=t,l[2]=o,l[3]=n):(t=l[1],o=l[2],n=l[3]);let d=void 0!==n&&n,s=ir(),c=!d;return l[4]!==t||l[5]!==o||l[6]!==c||l[7]!==s.space?(r=(0,i.jsx)(n$,{as:"ul","data-ui":"TreeGroup",...o,hidden:c,marginTop:s.space,role:"group",space:s.space,children:t}),l[4]=t,l[5]=o,l[6]=c,l[7]=s.space,l[8]=r):r=l[8],r}),ia=(0,l.memo)(c.zo.li.withConfig({displayName:"StyledTreeItem",componentId:"sc-iiskig-0"})(function(){return(0,c.iv)`
    &[role='none'] > [role='treeitem'] {
      outline: none;
      cursor: default;
      border-radius: 3px;

      background-color: var(--card-bg-color);
      color: var(--treeitem-fg-color);

      &:focus {
        position: relative;
      }
    }

    &[role='treeitem'] {
      outline: none;

      & > div {
        cursor: default;
        border-radius: 3px;

        background-color: var(--card-bg-color);
        color: var(--treeitem-fg-color);
      }

      &:focus > div {
        position: relative;
      }
    }
  `},function(e){let{color:t}=(0,r.aQ)(e.theme),o=t.selectable.default;return(0,c.iv)`
    &[role='none'] {
      & > [role='treeitem'] {
        ${t8(t,o.enabled)}
      }

      &[data-selected] > [role='treeitem'] {
        ${t8(t,o.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]) > [role='treeitem']:not(:focus):hover {
          ${t8(t,o.hovered)}
        }

        & > [role='treeitem']:focus {
          ${t8(t,o.selected)}
        }
      }
    }

    &[role='treeitem'] {
      & > [data-ui='TreeItem__box'] {
        ${t8(t,o.enabled)}
      }

      &[data-selected] > [data-ui='TreeItem__box'] {
        ${t8(t,o.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]):not(:focus) > [data-ui='TreeItem__box']:hover {
          ${t8(t,o.hovered)}
        }

        &:focus > [data-ui='TreeItem__box'] {
          ${t8(t,o.selected)}
        }
      }
    }
  `})),il=(0,c.zo)(tJ).attrs({forwardedAs:"a"}).withConfig({displayName:"TreeItemBox",componentId:"sc-iiskig-1"})(function(e){let{$level:t}=e,{space:o}=(0,r.aQ)(e.theme);return(0,c.iv)`
    padding-left: ${S(o[2]*t)};

    &[data-as='a'] {
      text-decoration: none;
    }
  `}),id=(0,c.zo)(t0).withConfig({displayName:"ToggleArrowText",componentId:"sc-iiskig-2"})`& > svg{transition:transform 100ms;}`;(0,l.memo)(function(e){let{children:t,expanded:o=!1,fontSize:n=1,href:r,icon:a,id:d,linkAs:s,muted:c,onClick:f,padding:p=2,selected:h=!1,space:m=2,text:g,weight:b,...v}=e,y=(0,l.useRef)(null),w=(0,l.useRef)(null),x=ir(),{path:$,registerItem:k,setExpanded:z,setFocusedElement:S}=x,j=(0,l.useId)(),C=d||j,R=(0,l.useMemo)(()=>$.concat([C||""]),[C,$]),E=R.join("/"),I=x.state[E],N=x.focusedElement===y.current,_=I?.expanded===void 0?o:I?.expanded||!1,T=x.focusedElement&&x.focusedElement===y.current?0:-1,F=(0,l.useMemo)(()=>({...x,level:x.level+1,path:R}),[R,x]),M=(0,l.useCallback)(e=>{f&&f(e);let t=e.target;t instanceof HTMLElement&&("TreeItem"===t.getAttribute("data-ui")||t.closest('[data-ui="TreeItem__box"]'))&&(e.stopPropagation(),z(E,!_),S(y.current))},[_,E,f,z,S]),O=(0,l.useCallback)(e=>{N&&"Enter"===e.key&&(w.current||y.current)?.click()},[N]);(0,l.useEffect)(()=>{if(y.current)return k(y.current,R.join("/"),_,h)},[_,R,k,h]);let A=(0,i.jsxs)(t4,{padding:p,children:[(0,i.jsxs)(tJ,{marginRight:m,style:{visibility:a||t?"visible":"hidden",pointerEvents:"none"},children:[a&&(0,i.jsx)(t0,{muted:c,size:n,weight:b,children:(0,i.jsx)(a,{})}),!a&&(0,i.jsx)(id,{muted:c,size:n,weight:b,children:(0,i.jsx)(u.tgp,{style:{transform:_?"rotate(90deg)":void 0}})})]}),(0,i.jsx)(tJ,{flex:1,children:(0,i.jsx)(t0,{muted:c,size:n,textOverflow:"ellipsis",weight:b,children:g})})]});return r?(0,i.jsxs)(ia,{"data-selected":h?"":void 0,"data-tree-id":C,"data-tree-key":E,"data-ui":"TreeItem",...v,onClick:M,ref:y,role:"none",children:[(0,i.jsx)(il,{$level:x.level,"aria-expanded":_,as:s,"data-ui":"TreeItem__box",href:r,ref:w,role:"treeitem",tabIndex:T,children:A}),(0,i.jsx)(io.Provider,{value:F,children:t&&(0,i.jsx)(ii,{hidden:!_,children:t})})]}):(0,i.jsxs)(ia,{"data-selected":h?"":void 0,"data-ui":"TreeItem","data-tree-id":C,"data-tree-key":E,...v,"aria-expanded":_,onClick:M,onKeyDown:O,ref:y,role:"treeitem",tabIndex:T,children:[(0,i.jsx)(il,{$level:x.level,as:"div","data-ui":"TreeItem__box",children:A}),(0,i.jsx)(io.Provider,{value:F,children:t&&(0,i.jsx)(ii,{expanded:_,children:t})})]})}).displayName="Memo(TreeItem)"}}]);