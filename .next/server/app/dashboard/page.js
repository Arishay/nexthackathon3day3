(()=>{var e={};e.id=702,e.ids=[702],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},17004:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>c,routeModule:()=>p,tree:()=>o}),r(38256),r(70828),r(35866);var t=r(23191),a=r(88716),i=r(37922),n=r.n(i),d=r(95231),l={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>d[e]);r.d(s,l);let o=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,38256)),"C:\\Users\\user\\Desktop\\ArishaCoding\\Nextjs\\figmaHackathon\\figmaHackathon-\\src\\app\\dashboard\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,70828)),"C:\\Users\\user\\Desktop\\ArishaCoding\\Nextjs\\figmaHackathon\\figmaHackathon-\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\user\\Desktop\\ArishaCoding\\Nextjs\\figmaHackathon\\figmaHackathon-\\src\\app\\dashboard\\page.tsx"],h="/dashboard/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},283:(e,s,r)=>{Promise.resolve().then(r.bind(r,59530))},35047:(e,s,r)=>{"use strict";var t=r(77389);r.o(t,"useRouter")&&r.d(s,{useRouter:function(){return t.useRouter}}),r.o(t,"useServerInsertedHTML")&&r.d(s,{useServerInsertedHTML:function(){return t.useServerInsertedHTML}})},59530:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>n});var t=r(10326);r(17577);var a=r(25842),i=r(35047);let n=()=>{let e=(0,i.useRouter)(),s=(0,a.v9)(e=>e.auth.user),r=(0,a.v9)(e=>e.cart);if(!s)return e.push("/login"),null;let n=[{id:1,date:"2025-01-01",total:"₹10,000",items:["Nike Air Force","Nike Yoga Wear"]},{id:2,date:"2025-01-10",total:"₹6,000",items:["Nike Pegasus Trail"]}];return(0,t.jsxs)("div",{className:"min-h-screen bg-gray-100 p-6",children:[t.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Dashboard"}),(0,t.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-md mb-6",children:[t.jsx("h2",{className:"text-lg font-semibold mb-4",children:"User Details"}),(0,t.jsxs)("p",{children:[t.jsx("strong",{children:"Name:"})," ",s.name||"Not provided"]}),(0,t.jsxs)("p",{children:[t.jsx("strong",{children:"Email:"})," ",s.email]}),t.jsx("p",{children:t.jsx("strong",{children:"Saved Addresses:"})}),(0,t.jsxs)("ul",{className:"list-disc pl-6",children:[t.jsx("li",{children:"123 Street, City, Country"}),t.jsx("li",{children:"456 Another Street, City, Country"})]})]}),(0,t.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-md mb-6",children:[t.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Order History"}),0===n.length?t.jsx("p",{children:"No orders found."}):t.jsx("ul",{className:"list-disc pl-6",children:n.map(s=>(0,t.jsxs)("li",{className:"mb-2",children:[(0,t.jsxs)("p",{children:[t.jsx("strong",{children:"Order ID:"})," ",s.id]}),(0,t.jsxs)("p",{children:[t.jsx("strong",{children:"Date:"})," ",s.date]}),(0,t.jsxs)("p",{children:[t.jsx("strong",{children:"Total:"})," ",s.total]}),(0,t.jsxs)("p",{children:[t.jsx("strong",{children:"Items:"})," ",s.items.join(", ")]}),t.jsx("button",{className:"text-blue-500 underline mt-2",onClick:()=>e.push(`/orders/${s.id}`),children:"View Order Details"})]},s.id))})]}),(0,t.jsxs)("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[t.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Cart Items"}),0===r.length?t.jsx("p",{children:"Your cart is empty."}):t.jsx("ul",{className:"list-disc pl-6",children:r.map((e,s)=>(0,t.jsxs)("li",{className:"mb-2",children:[(0,t.jsxs)("p",{children:[t.jsx("strong",{children:"Title:"})," ",e.title]}),(0,t.jsxs)("p",{children:[t.jsx("strong",{children:"Price:"})," ",e.price]})]},s))})]})]})}},38256:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>t});let t=(0,r(68570).createProxy)(String.raw`C:\Users\user\Desktop\ArishaCoding\Nextjs\figmaHackathon\figmaHackathon-\src\app\dashboard\page.tsx#default`)},73881:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[948,968,621,456],()=>r(17004));module.exports=t})();