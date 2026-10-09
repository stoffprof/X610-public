// Generated from widgets/src; run npm run build:widgets.
var $="http://www.w3.org/2000/svg";function E(t,e){let n=Number(t);return Number.isFinite(n)?n:e}function P(t,e,n){return Math.min(n,Math.max(e,t))}function w(t,e){return typeof t=="function"?t(e):t}function F(t,e,n){let r=w(e.min,n),i=w(e.max,n),o=E(t,e.default);return Number.isFinite(r)&&(o=Math.max(r,o)),Number.isFinite(i)&&(o=Math.min(i,o)),e.integer&&(o=Math.round(o)),o}function T(t,e){let n={};for(let r of t.parameters)n[r.name]=F(e[r.name],r,{...n,...e});return t.sanitize?t.sanitize(n):n}function D(t,e){let n={...t.get("parameters")||{},...t.get("params")||{}};for(let r of e){let i=t.get(r);i!==void 0&&n[r]===void 0&&(n[r]=i)}return n}function M(t){return t>=.995?"1.00":t<.01?t.toPrecision(2):t.toFixed(2)}function z(t){if(!Number.isFinite(t))return"";if(Math.abs(t)<1e-10)return"0";let e=Math.abs(t);return e>=1e3||e<.01?t.toPrecision(2):e>=100?t.toFixed(0):e>=10?t.toFixed(1):t.toFixed(2)}function S(t,e){return e.integer?String(Math.round(t)):Number(t).toFixed(2)}function I(t,e){return t.parameters.map(n=>{let r=S(e[n.name],n);return`${n.label} = ${r}`}).join(", ")}function h(t,e={}){let n=document.createElementNS($,t);for(let[r,i]of Object.entries(e))n.setAttribute(r,i);return n}function g(t,e,n,r,i={}){let o=h("text",{x:n,y:r,...i});return o.textContent=e,t.appendChild(o),o}function B(t,e,n){let r=Math.max(2,n),i=(e-t)/(r-1);return Array.from({length:r},(o,s)=>t+s*i)}function j([t,e],n=!1){let r=e-t,i=new Set([0,1,2,3,4].map(o=>{let s=t+o/4*r;return n?Math.round(s):s}));return Array.from(i).sort((o,s)=>o-s)}function _(t,e,n,r="y"){let i="",o=!1;for(let s of t){let m=s[r];if(!Number.isFinite(m)){o=!1;continue}i+=`${o?" L":"M"} ${e(s.x)} ${n(m)}`,o=!0}return i}function G(t,{title:e,yLabel:n,xMin:r,xMax:i,yMax:o,xTicks:s,yTicks:m,xTickFormat:b=z,yTickFormat:k=M}){let a={top:34,right:18,bottom:42,left:54},x=440-a.left-a.right,l=300-a.top-a.bottom,N=i-r||1,C=Number.isFinite(o)&&o>0?o:1;t.setAttribute("viewBox","0 0 440 300"),t.setAttribute("role","img"),t.innerHTML="";let y=c=>a.left+(c-r)/N*x,f=c=>a.top+l-c/C*l;g(t,e,440/2,18,{class:"chart-title","text-anchor":"middle"});for(let c of m){let u=f(c);t.appendChild(h("line",{class:"grid-line",x1:a.left,y1:u,x2:440-a.right,y2:u})),g(t,k(c),a.left-10,u+4,{class:"tick-label","text-anchor":"end"})}t.appendChild(h("line",{class:"axis-line",x1:a.left,y1:f(0),x2:440-a.right,y2:f(0)})),t.appendChild(h("line",{class:"axis-line",x1:a.left,y1:a.top,x2:a.left,y2:300-a.bottom}));for(let c of s){let u=y(c);t.appendChild(h("line",{class:"axis-tick",x1:u,y1:f(0),x2:u,y2:f(0)+5})),g(t,b(c),u,f(0)+20,{class:"tick-label","text-anchor":"middle"})}return g(t,"x",a.left+x/2,294,{class:"axis-label","text-anchor":"middle"}),g(t,n,14,a.top+l/2,{class:"axis-label","text-anchor":"middle",transform:`rotate(-90 14 ${a.top+l/2})`}),{xScale:y,yScale:f,plotWidth:x}}function L(t,e,n){for(let r of e.parameters){let i=t.get(r.name),o=w(r.min,n),s=w(r.max,n);i.input.min=String(o),i.input.max=String(s),i.input.step=String(r.step),i.input.value=String(n[r.name]),i.output.textContent=S(n[r.name],r)}}var A=`
  .distribution-widget {
    color: #1f2933;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    margin: 1rem 0;
  }
  .distribution-controls {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem 1rem;
    margin-bottom: 0.75rem;
  }
  .control-label {
    align-items: center;
    display: inline-flex;
    font-size: 0.95rem;
    font-weight: 600;
    gap: 0.2rem;
    min-width: 4.5rem;
    white-space: nowrap;
  }
  .parameter-slider {
    accent-color: #2563eb;
    flex: 1 1 12rem;
    max-width: 18rem;
    min-width: 10rem;
  }
  .plots {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  }
  .distribution-widget svg {
    background: #ffffff;
    border: 1px solid #d8dee6;
    border-radius: 6px;
    box-sizing: border-box;
    display: block;
    height: auto;
    max-width: 100%;
    width: 100%;
  }
  .chart-title {
    fill: #1f2933;
    font-size: 14px;
    font-weight: 650;
  }
  .axis-label,
  .tick-label {
    fill: #52616f;
    font-size: 12px;
  }
  .axis-line {
    stroke: #52616f;
    stroke-width: 1.2;
  }
  .axis-tick {
    stroke: #52616f;
    stroke-width: 1;
  }
  .grid-line {
    stroke: #e6eaf0;
    stroke-width: 1;
  }
  .pdf-line {
    fill: none;
    stroke: #2563eb;
    stroke-linejoin: round;
    stroke-width: 2.5;
  }
  .pmf-bar {
    fill: #2563eb;
    opacity: 0.78;
    stroke: #1e3a8a;
    stroke-width: 0.8;
  }
  .cdf-line {
    fill: none;
    stroke: #d97706;
    stroke-linejoin: round;
    stroke-width: 2.5;
  }
  .cdf-point {
    fill: #ffffff;
    stroke: #d97706;
    stroke-width: 2;
  }
`;function R({el:t,distribution:e,widgetId:n,plotNames:r}){let i=document.createElement("style");i.textContent=A;let o=document.createElement("div");o.className="distribution-widget";let s=document.createElement("div");s.className="distribution-controls";let m=new Map;e.parameters.forEach(p=>{let d=`${n}-${p.name}`,a=document.createElement("label");a.className="control-label",a.setAttribute("for",d),a.textContent=`${p.label} = `;let x=document.createElement("output");a.appendChild(x);let l=document.createElement("input");l.className="parameter-slider",l.id=d,l.type="range",m.set(p.name,{input:l,output:x}),s.append(a,l)});let b=document.createElement("div");b.className="plots";let k=r.map(p=>{let d=h("svg",{"aria-label":`${e.title} ${p}`});return b.append(d),d});return o.append(s,b),t.append(i,o),{controls:m,root:o,style:i,svgs:k}}export{E as a,P as b,T as c,D as d,z as e,I as f,h as g,g as h,B as i,j,_ as k,G as l,L as m,R as n};
