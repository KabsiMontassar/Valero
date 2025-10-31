import{j as e,B as s,a as t,V as a,g as v,F as g,H,r as x}from"./index-pCu5hn1m.js";import{T as n,F as p,c as C}from"./innerPaths-DMjrz3LW.js";import{u as W}from"./use-breakpoint-CqeimRi2.js";const P=({icon:r})=>{const i=W({base:16,md:18});return e.jsx(s,{display:"flex",alignItems:"center",justifyContent:"center",width:{base:"28px",md:"32px"},height:{base:"28px",md:"32px"},borderRadius:"md",background:"#FFFFFF10",opacity:20,position:"relative",mb:2,flexShrink:0,children:e.jsx(r,{size:i,color:"#3073da",strokeWidth:1.8})})},b=({feature:r})=>e.jsxs(s,{py:{base:3,md:3},px:{base:4,md:6},borderRadius:"2xl",bg:t.backgroundSecondary+"50",height:"100%",transition:"all 0.3s ease",_hover:{transform:"translateY(-4px)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.08)",borderColor:t.primary+"30"},display:"flex",flexDirection:"column",width:{base:"100%",lg:"auto"},minW:{base:"100%",lg:"350px"},maxW:{base:"100%",lg:"400px"},children:[e.jsxs(H,{gap:{base:2,md:3},textAlign:"start",align:"flex-start",children:[e.jsx(P,{icon:r.icon}),e.jsx(n,{fontSize:{base:"sm",md:"md"},fontWeight:"bold",color:t.secondary,mb:{base:1,md:2},lineHeight:"1.3",children:r.title})]}),e.jsx(n,{fontSize:{base:"xs",md:"sm"},color:t.textPrimary,lineHeight:"1.6",flex:1,fontWeight:"normal",mt:{base:1,md:2},children:r.description})]}),F=()=>{const r=W({base:!0,lg:!1});return e.jsx(s,{id:"features",pt:{base:16,md:28},pb:{base:5,md:32},bg:t.backgroundPrimary,position:"relative",overflow:"hidden",children:e.jsxs(a,{gap:{base:10,md:16},px:{base:4,md:8},maxW:"1400px",mx:"auto",children:[e.jsxs(a,{gap:4,textAlign:"center",maxW:"800px",children:[e.jsx(n,{fontSize:{base:"xs",md:"sm"},fontWeight:"semibold",color:t.textPrimary,letterSpacing:"wide",textTransform:"uppercase",children:"✦ Features"}),e.jsx(s,{children:e.jsxs(n,{fontSize:{base:"2xl",sm:"3xl",md:"4xl",lg:"5xl"},fontWeight:"bold",lineHeight:"1.1",mb:6,children:[e.jsx(n,{as:"span",color:t.textPrimary,children:"Built for Scale."}),e.jsx("br",{}),e.jsx(n,{as:"span",style:v,children:"Engineered for Performance."})]})}),e.jsx(n,{fontSize:{base:"sm",md:"lg",lg:"xl"},color:t.textMuted,lineHeight:"1.7",maxW:"600px",fontWeight:"normal",children:"Seamlessly powering thousands of live connections with ultra-low latency and rock-solid reliability."})]}),r?e.jsx(a,{gap:4,w:"100%",maxW:"400px",children:p.map(i=>e.jsx(b,{feature:i},i.id))}):e.jsxs(a,{gap:8,w:"100%",children:[e.jsx(g,{gap:6,justifyContent:"center",flexWrap:"wrap",w:"100%",children:p.slice(0,2).map(i=>e.jsx(b,{feature:i},i.id))}),e.jsx(g,{gap:6,justifyContent:"center",flexWrap:"wrap",w:"100%",children:p.slice(2,5).map(i=>e.jsx(b,{feature:i},i.id))}),e.jsx(g,{gap:6,justifyContent:"center",flexWrap:"wrap",w:"100%",children:p.slice(5,7).map(i=>e.jsx(b,{feature:i},i.id))}),e.jsx(g,{gap:6,justifyContent:"center",flexWrap:"wrap",w:"100%",children:p.slice(7,8).map(i=>e.jsx(b,{feature:i},i.id))})]})]})})},I=({icon:r})=>{const i=r;return e.jsx(i,{size:64,strokeWidth:1.5})},L=()=>{const r=x.useRef(null),i=x.useRef(null),y=x.useRef(null),w=x.useRef([]);return x.useEffect(()=>{const o=r.current,l=i.current,d=y.current,h=w.current;if(!o||!l||!d)return;const j=()=>{const k=window.scrollY,S=window.innerHeight/2,u=o.getBoundingClientRect().top+window.scrollY,f=h[h.length-1],R=f?f.getBoundingClientRect().top+window.scrollY-u+f.offsetHeight/2:o.scrollHeight;if(k>=u-S){const c=k-u+S,m=Math.min(R,o.scrollHeight);if(c<=m){const $=Math.max(0,c);l.style.height=`${$}px`,d.style.height=`${$}px`}else l.style.height=`${m}px`,d.style.height=`${m}px`}const z=l.getBoundingClientRect().top+window.scrollY+l.offsetHeight;h.forEach(c=>{if(!c)return;const m=c.getBoundingClientRect().top+window.scrollY;z>m?c.classList.add("in-view"):c.classList.remove("in-view")})};return window.addEventListener("scroll",j),()=>window.removeEventListener("scroll",j)},[]),e.jsxs(s,{position:"relative",w:"100%",maxW:"1100px",mx:"auto",mt:{base:8,md:10,lg:20},py:{base:8,md:10},px:{base:4,md:0},ref:r,children:[e.jsx(s,{ref:y,position:"absolute",left:"50%",top:"0",w:"1px",bg:t.border,transform:"translateX(-50%)",borderRadius:"2px",height:"0"}),e.jsx(s,{ref:i,position:"absolute",left:"50%",top:"0",width:"2px",transform:"translateX(-50%)",background:`linear-gradient(180deg, ${t.primary} 0%, ${t.secondary} 50%, ${t.primary} 100%)`,boxShadow:`0 0 20px ${t.primary}80, 0 0 40px ${t.primary}40`,borderRadius:"1px",height:"0"}),e.jsx(a,{gap:{base:16,md:20,lg:40},position:"relative",py:{base:10,md:20},children:C.map((o,l)=>e.jsxs(s,{ref:d=>{d&&(w.current[l]=d)},position:"relative",w:"100%",minH:{base:"120px",md:"180px"},display:"flex",alignItems:"center",justifyContent:"center",className:"timeline-item",flexDirection:{base:"column",md:"row"},children:[e.jsx("style",{children:`
                  .timeline-item {
                    --primary: ${t.primary};
                    --secondary: ${t.secondary};
                    --textPrimary: ${t.textPrimary};
                    --textMuted: ${t.textMuted};
                    --gradient: linear-gradient(135deg, ${t.primary} 0%, ${t.secondary} 100%);
                  }
                  
                  .timeline-item.in-view .checkpoint-circle {
                    background-color: ${t.primary};
                    border-color: ${t.secondary};
                    box-shadow: 0 0 60px ${t.primary}90, 0 0 120px ${t.primary}50, inset 0 0 20px rgba(255,255,255,0.1);
                    transform: scale(1.2);
                    animation: pulse-glow 2s ease-in-out infinite;
                  }
                  
                  .timeline-item.in-view .checkpoint-circle-text {
                    color: ${t.textPrimary};
                    text-shadow: 0 0 15px ${t.primary}60;
                    animation: text-glow 2s ease-in-out infinite;
                  }
                  
                  .timeline-item.in-view .checkpoint-icon {
                    transform: scale(1.3);
                    color: ${t.primary};
                    opacity: 1;
                    bg: ${t.backgroundTertiary};
                    border-color: ${t.primary}40;
                    box-shadow: 0 8px 25px ${t.primary}40, 0 0 40px ${t.primary}30;
                    filter: drop-shadow(0 0 20px ${t.primary}50);
                  }
                  
                  .timeline-item.in-view .checkpoint-content {
                    opacity: 1;
                    transform: scale(1.05);
                  
                  }
                  
                  .timeline-item.in-view .checkpoint-title {
                    color: ${t.textPrimary};
                    text-shadow: 0 0 10px ${t.primary}40;
                  }
                  
                  .timeline-item.in-view .checkpoint-description {
                    color: ${t.textPrimary};
                    opacity: 1;
                  }
                 
                `}),e.jsx(s,{className:"checkpoint-icon",position:{base:"absolute",md:"absolute"},left:{base:"50%",md:"30%"},top:{base:"-20px",md:"auto"},transform:{base:"translateX(-50%)",md:"scale(1)"},color:t.textMuted,opacity:.6,p:{base:1.5,md:4},borderRadius:"xl",transition:"all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",bg:t.backgroundSecondary,border:"1px solid",borderColor:t.borderSubtle,boxShadow:"0 4px 12px rgba(0,0,0,0.3)",_hover:{bg:t.backgroundTertiary,borderColor:t.border},display:{base:"none",md:"none",lg:"block"},zIndex:3,children:e.jsx(I,{icon:o.icon})}),e.jsx(s,{className:"checkpoint-circle",position:"relative",width:{base:"50px",md:"60px",lg:"90px"},height:{base:"50px",md:"60px",lg:"90px"},borderRadius:"50%",border:"2px solid",borderColor:t.border,bg:t.backgroundSecondary,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,transition:"all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:"0 4px 16px rgba(0,0,0,0.3)",mt:{base:6,md:0},children:e.jsx(n,{className:"checkpoint-circle-text",fontSize:{base:"md",md:"lg",lg:"2xl"},fontWeight:"bold",color:t.textMuted,transition:"all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",zIndex:1,children:o.number})}),e.jsx(s,{className:"checkpoint-content",position:{base:"relative",md:"absolute"},left:{base:"auto",md:"60%"},maxW:{base:"100%",md:"280px",lg:"400px"},p:{base:3,md:4,lg:8},borderRadius:"2xl",transition:"all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:"scale(1)",mt:{base:4,md:0},textAlign:{base:"center",md:"start"},children:e.jsxs(a,{align:{base:"center",md:"start"},gap:3,children:[e.jsx(n,{className:"checkpoint-title",fontSize:{base:"xl",md:"2xl",lg:"4xl",xl:"6xl"},fontWeight:"bold",color:t.textPrimary,transition:"all 0.4s ease",lineHeight:"1.2",letterSpacing:"tight",textAlign:{base:"center",md:"start"},children:o.title}),e.jsx(s,{w:"100%",maxW:{base:"100%",md:"180px",lg:"200px"},children:e.jsx(n,{className:"checkpoint-description",fontSize:{base:"sm",md:"xs",lg:"sm"},color:t.textMuted,lineHeight:"1.5",transition:"all 0.4s ease",opacity:.8,wordBreak:"break-word",whiteSpace:"normal",textAlign:{base:"center",md:"start"},children:o.description})})]})})]},o.id))})]})},A=()=>{const r=x.useRef(null);return e.jsxs(s,{id:"howitworks",ref:r,pt:{base:4,md:20},pb:{base:12,md:20},bg:t.backgroundPrimary,position:"relative",overflow:"hidden",px:{base:4,md:0},children:[e.jsxs(a,{gap:{base:12,md:16},pt:{base:4,md:20},px:{base:4,md:8},children:[e.jsxs(a,{gap:6,textAlign:"center",maxW:"800px",px:{base:2,md:0},children:[e.jsx(n,{fontSize:{base:"xs",md:"lg"},fontWeight:"medium",color:t.textPrimary,letterSpacing:"wide",textTransform:"uppercase",children:"✦ How it works"}),e.jsx(s,{children:e.jsxs(n,{fontSize:{base:"xl",sm:"2xl",md:"4xl",lg:"6xl",xl:"7xl"},fontWeight:"bold",lineHeight:"1.1",textAlign:"center",children:[e.jsxs(n,{as:"span",color:t.textPrimary,children:["Transform your voice into"," "]}),e.jsx(n,{as:"span",style:v,children:"meaningful connections"})]})})]}),e.jsx(L,{})]}),e.jsx(F,{})]})};export{A as default};
