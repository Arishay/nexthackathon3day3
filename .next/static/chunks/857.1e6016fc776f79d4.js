"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{84857:function(e,r,t){t.r(r),t.d(r,{DetectViteDevServerStopped:function(){return h},DevServerStoppedErrorScreen:function(){return v}});var n=t(57437),o=t(83238),i=t(74487),s=t(2265);let c="Dev server stopped";class l extends Error{constructor(){super(c),this.name="ViteDevServerStoppedError",this.ViteDevServerStoppedError=!0}}let d=void 0,a=e=>!!e,p=()=>{let e,r,t,n;let i=(0,o.c)(5),[c,l]=(0,s.useState)(!1);i[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>l(!0),i[0]=e):e=i[0];let p=e;return i[1]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{a(d)&&d.on("vite:ws:disconnect",p)},t=[p],i[1]=r,i[2]=t):(r=i[1],t=i[2]),(0,s.useEffect)(r,t),i[3]!==c?(n={devServerStopped:c},i[3]=c,i[4]=n):n=i[4],n},u=()=>{let{devServerStopped:e}=p();if(e)throw new l;return null},h=()=>a(d)?(0,n.jsx)(u,{}):null,v=()=>(0,n.jsx)(i.Zb,{height:"fill",overflow:"auto",paddingY:[4,5,6,7],paddingX:4,sizing:"border",tone:"critical",children:(0,n.jsx)(i.W2,{width:3,children:(0,n.jsxs)(i.Kq,{space:4,children:[(0,n.jsx)(i.X6,{children:c}),(0,n.jsx)(i.Zb,{border:!0,radius:2,overflow:"auto",padding:4,tone:"inherit",children:(0,n.jsx)(i.Kq,{space:4,children:(0,n.jsx)(i.xv,{size:2,children:"The development server has stopped. You may need to restart it to continue working."})})})]})})})}}]);