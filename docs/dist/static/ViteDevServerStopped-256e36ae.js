import{j as r,C as c,a as u,S as a,H as x,T as m,c as D,r as v}from"./sanity-0508ae45.js";const S="Dev server stopped",E="The development server has stopped. You may need to restart it to continue working.";class f extends Error{constructor(){super(S),this.name="ViteDevServerStoppedError",this.ViteDevServerStoppedError=!0}}const d=void 0,l=e=>!!e,j=()=>{const e=D(5),[i,h]=v.useState(!1);let t;e[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>h(!0),e[0]=t):t=e[0];const p=t;let o,s;e[1]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{l(d)&&d.on("vite:ws:disconnect",p)},s=[p],e[1]=o,e[2]=s):(o=e[1],s=e[2]),v.useEffect(o,s);let n;return e[3]!==i?(n={devServerStopped:i},e[3]=i,e[4]=n):n=e[4],n},w=()=>{const{devServerStopped:e}=j();if(e)throw new f;return null},g=()=>l(d)?r.jsx(w,{}):null,T=()=>r.jsx(c,{height:"fill",overflow:"auto",paddingY:[4,5,6,7],paddingX:4,sizing:"border",tone:"critical",children:r.jsx(u,{width:3,children:r.jsxs(a,{space:4,children:[r.jsx(x,{children:S}),r.jsx(c,{border:!0,radius:2,overflow:"auto",padding:4,tone:"inherit",children:r.jsx(a,{space:4,children:r.jsx(m,{size:2,children:E})})})]})})});export{g as DetectViteDevServerStopped,T as DevServerStoppedErrorScreen};
