import{j as e,H as r}from"./heart.pl3ai1q6.js";import{r as i}from"./index.DYrVU9rO.js";const d=15,f=()=>{const[o,n]=i.useState([]);i.useEffect(()=>{const t=Array.from({length:d}).map((a,s)=>({id:s,left:Math.random()*100,size:Math.random()*20+10,duration:Math.random()*10+5,delay:Math.random()*10,opacity:Math.random()*.5+.3,isMelting:!1}));n(t)},[]);const l=t=>{n(a=>a.map(s=>s.id===t?{...s,isMelting:!0}:s))};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
      `}),e.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden select-none",children:o.map(t=>e.jsx("div",{role:"button",tabIndex:0,className:"absolute top-0 pointer-events-auto cursor-pointer",style:{left:`${t.left}%`,width:`${t.size}px`,height:`${t.size}px`,animation:`fall ${t.duration}s linear infinite`,animationDelay:`-${t.delay}s`},onClick:a=>{a.stopPropagation(),l(t.id)},children:e.jsx("div",{className:"w-full h-full transition-all duration-700 ease-out",style:{opacity:t.isMelting?0:t.opacity,transform:t.isMelting?"scale(0)":"scale(1)",color:"#7d133a"},children:e.jsx(r,{fill:"#7d133a",strokeWidth:0})})},t.id))})]})};export{f as default};
