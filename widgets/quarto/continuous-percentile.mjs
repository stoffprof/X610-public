// Generated from widgets/src; run npm run build:widgets.
import{d as _,e as q,f as F}from"./chunks/chunk-NN26AQND.mjs";import{a as O,b as S,f as Y,g as C,h as D,i as j,k as Q}from"./chunks/chunk-2IT2IX54.mjs";var G=1e-4,H=.9999;function Z(e){let n=String(e||"left").toLowerCase();return n==="right"||n==="upper"?"right":n==="both"||n==="two-sided"||n==="two-tailed"?"both":"left"}function J(e,n){let i={...n.get("parameters")||{},...n.get("params")||{}};i.nu!==void 0&&i.df===void 0&&(i.df=i.nu);let o={};for(let r of e.parameters){let x=n.get(r.name),h=O(i[r.name]===void 0?x:i[r.name],r.default);r.min!==void 0&&(h=Math.max(r.min,h)),r.integer&&(h=Math.round(h)),o[r.name]=h}return o}function te(e,n,i,o){return i==="left"?{probability:o,lower:F(e,n,o),upper:null}:i==="right"?{probability:o,lower:null,upper:F(e,n,1-o)}:{probability:o,lower:F(e,n,o/2),upper:F(e,n,1-o/2)}}function ne(e,n,i,o){let r=S(e.cdf(n,o),0,1);if(i==="left")return{probability:r,lower:o,upper:null};if(i==="right")return{probability:1-r,lower:null,upper:o};let x=Math.min(r,1-r);return{probability:2*x,lower:F(e,n,x),upper:F(e,n,1-x)}}function A(e){return Number.isFinite(e)?Math.abs(e)<1e-10?"0":Math.abs(e)>=100||Math.abs(e)<.01?e.toPrecision(3):e.toFixed(2):""}function X(e){return Number(e.toPrecision(7)).toString()}function ie(e){return e<1e-4?"< 0.0001":e>.9999?"> 0.9999":e.toFixed(4)}function re(e,n,i,o,r,x){if(!(o>i))return"";let h=j(i,o,161).map(m=>({x:m,y:e.pdf(n,m)})).filter(m=>Number.isFinite(m.y));if(h.length<2)return"";let g=h[0],a=h[h.length-1],b=h.map(m=>`L ${r(m.x)} ${x(m.y)}`).join(" ");return`M ${r(g.x)} ${x(0)} ${b} L ${r(a.x)} ${x(0)} Z`}function oe(e,n){return[0,1,2,3,4].map(i=>e+i/4*(n-e))}function ae(e,n){let i=ie(e.probability);return n==="left"?`P(X \u2264 ${A(e.lower)}) = ${i}`:n==="right"?`P(X \u2265 ${A(e.upper)}) = ${i}`:`P(X \u2264 ${A(e.lower)} or X \u2265 ${A(e.upper)}) = ${i}`}function le(e,n,i,o,r,x){let a={top:38,right:24,bottom:46,left:62},b=760-a.left-a.right,m=330-a.top-a.bottom,[L,$]=n.support,[w,I]=n.domain(i),M=[{name:"lower",value:r.lower},{name:"upper",value:r.upper}].filter(c=>Number.isFinite(c.value)),T=M.map(c=>c.value),l=Math.min(w,...T),p=Math.max(I,...T),B=Math.max((p-l)*.04,1e-6);l<w&&(l-=B),p>I&&(p+=B),Number.isFinite(L)&&(l=Math.max(L,l)),Number.isFinite($)&&(p=Math.min($,p));let P=j(l,p,x).map(c=>({x:c,y:n.pdf(i,c)})),f=P.map(c=>c.y).filter(Number.isFinite),y=Math.max(...f,0),v=y>0?y*1.12:1,N=c=>a.left+(c-l)/(p-l)*b,d=c=>a.top+m-c/v*m;e.setAttribute("viewBox","0 0 760 330"),e.setAttribute("role","img"),e.setAttribute("aria-label",`${n.title} density with ${o==="both"?"both tails":`${o} tail`} shaded`),e.innerHTML="",D(e,`${n.title} PDF (${Y(n,i)})`,760/2,20,{class:"percentile-chart-title","text-anchor":"middle"});for(let c of[0,v/2,v]){let s=d(c);e.appendChild(C("line",{class:"percentile-grid-line",x1:a.left,y1:s,x2:760-a.right,y2:s})),D(e,A(c),a.left-10,s+4,{class:"percentile-tick-label","text-anchor":"end"})}e.appendChild(C("line",{class:"percentile-axis-line",x1:a.left,y1:d(0),x2:760-a.right,y2:d(0)})),e.appendChild(C("line",{class:"percentile-axis-line",x1:a.left,y1:a.top,x2:a.left,y2:d(0)}));for(let c of oe(l,p)){let s=N(c);e.appendChild(C("line",{class:"percentile-axis-tick",x1:s,y1:d(0),x2:s,y2:d(0)+5})),D(e,A(c),s,d(0)+21,{class:"percentile-tick-label","text-anchor":"middle"})}let z=o==="left"?[[l,Math.min(r.lower,p)]]:o==="right"?[[Math.max(r.upper,l),p]]:[[l,Math.min(r.lower,p)],[Math.max(r.upper,l),p]];for(let[c,s]of z){let R=re(n,i,c,s,N,d);R&&e.appendChild(C("path",{class:"percentile-tail-area",d:R}))}let U=Q(P,N,d);U&&e.appendChild(C("path",{class:"percentile-pdf-line",d:U}));for(let c of M){let s=c.value;s<l||s>p||(e.appendChild(C("line",{class:"percentile-cutoff-line",x1:N(s),y1:a.top,x2:N(s),y2:d(0)})),e.appendChild(C("line",{class:"percentile-cutoff-hit","data-cutoff":c.name,x1:N(s),y1:a.top,x2:N(s),y2:d(0)})))}return D(e,"x",a.left+b/2,324,{class:"percentile-axis-label","text-anchor":"middle"}),D(e,"density",16,a.top+m/2,{class:"percentile-axis-label","text-anchor":"middle",transform:`rotate(-90 16 ${a.top+m/2})`}),{margin:a,plotWidth:b,width:760,xMin:l,xMax:p}}function ce({model:e,el:n}){let i=q(e.get("distribution"));if(!i)return n.textContent=`Unsupported distribution: ${e.get("distribution")}`,()=>{n.textContent=""};let o=_[i],r=J(o,e),x=!!e.get("showDistributionSelect"),h=Math.round(S(O(e.get("points"),401),101,801)),g=Z(e.get("tail")),a=S(O(e.get("probability"),g==="both"?.05:.95),G,H),b=O(e.get("x"),NaN),m=document.createElement("style");m.textContent=`
    .percentile-widget {
      color: #1f2933;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      margin: 0.65rem 0;
    }
    .percentile-controls {
      align-items: end;
      display: flex;
      flex-wrap: wrap;
      gap: 0.55rem 1rem;
      margin-bottom: 0.4rem;
    }
    .percentile-control {
      display: inline-flex;
      flex-direction: column;
      font-size: 0.9rem;
      font-weight: 600;
      gap: 0.15rem;
      white-space: nowrap;
    }
    .percentile-input,
    .percentile-select {
      box-sizing: border-box;
      font: inherit;
      padding: 0.2rem 0.35rem;
    }
    .percentile-input {
      width: 7.5rem;
    }
    .percentile-select {
      width: 9.5rem;
    }
    .percentile-result {
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      min-height: 1.2em;
    }
    .percentile-chart {
      background: #ffffff;
      border: 1px solid #d8dee6;
      box-sizing: border-box;
      display: block;
      height: auto;
      max-width: 100%;
      width: 100%;
    }
    .percentile-chart-title {
      fill: #1f2933;
      font-size: 14px;
      font-weight: 650;
    }
    .percentile-axis-label,
    .percentile-tick-label {
      fill: #52616f;
      font-size: 12px;
    }
    .percentile-axis-line,
    .percentile-axis-tick {
      stroke: #52616f;
      stroke-width: 1.2;
    }
    .percentile-grid-line {
      stroke: #e6eaf0;
      stroke-width: 1;
    }
    .percentile-tail-area {
      fill: #60a5fa;
      opacity: 0.45;
    }
    .percentile-pdf-line {
      fill: none;
      stroke: #2563eb;
      stroke-linejoin: round;
      stroke-width: 3;
    }
    .percentile-cutoff-line {
      pointer-events: none;
      stroke: #d97706;
      stroke-dasharray: 6 4;
      stroke-width: 2;
    }
    .percentile-cutoff-hit {
      cursor: ew-resize;
      pointer-events: stroke;
      stroke: transparent;
      stroke-width: 22;
      touch-action: none;
    }
  `;let L=document.createElement("div");L.className="percentile-widget";let $=document.createElement("div");$.className="percentile-controls";let w=null;if(x){let t=document.createElement("label");t.className="percentile-control",t.textContent="Distribution",w=document.createElement("select"),w.className="percentile-select";for(let u of["normal","exponential","logNormal","chiSquare","studentT","f"]){let k=document.createElement("option");k.value=u,k.textContent=_[u].title,w.append(k)}w.value=i,t.append(w),$.append(t)}let I=document.createElement("label");I.className="percentile-control",I.textContent="Area";let M=document.createElement("select");M.className="percentile-select";for(let[t,u]of[["left","Left tail"],["right","Right tail"],["both","Both tails"]]){let k=document.createElement("option");k.value=t,k.textContent=u,M.append(k)}M.value=g,I.append(M);let T=document.createElement("label");T.className="percentile-control",T.textContent="Probability";let l=document.createElement("input");l.className="percentile-input",l.type="number",l.min=String(G),l.max=String(H),l.step="0.001",T.append(l);let p=document.createElement("label");p.className="percentile-control";let B=document.createElement("span"),E=document.createElement("input");E.className="percentile-input",E.type="number",E.step="any",p.append(B,E);let P=document.createElement("div");P.className="percentile-result",P.setAttribute("aria-live","polite");let f=C("svg",{class:"percentile-chart"}),y=null,v=null;$.append(I,T,p),L.append(m,$,P,f),n.append(L);function N(t){B.textContent=g==="both"?"x cutoff":"x value",P.textContent=ae(t,g),y=le(f,o,r,g,t,h),e.set("distribution",i),e.set("parameters",r),e.set("tail",g),e.set("probability",t.probability),e.set("x",b),e.set("cutoffs",{lower:t.lower,upper:t.upper})}function d(){let t=Number(l.value);if(!Number.isFinite(t)){P.textContent="Enter a probability between 0 and 1.";return}a=S(t,G,H);let u=te(o,r,g,a);b=g==="left"?u.lower:u.upper,l.value=X(a),E.value=X(b),N(u)}function z(){let t=Number(E.value);if(!Number.isFinite(t)){P.textContent="Enter a numeric x value.";return}U(t)}function U(t){b=t;let u=ne(o,r,g,b);a=u.probability,l.value=X(a),E.value=X(b),N(u)}function c(t){if(!y)return null;let u=f.getBoundingClientRect();if(u.width<=0)return null;let ee=((t.clientX-u.left)/u.width*y.width-y.margin.left)/y.plotWidth;return S(y.xMin+ee*(y.xMax-y.xMin),y.xMin,y.xMax)}function s(t){t.target.getAttribute("data-cutoff")&&(t.pointerType==="mouse"&&t.button!==0||(v=t.pointerId,f.setPointerCapture&&f.setPointerCapture(v),t.preventDefault(),t.stopPropagation()))}function R(t){if(t.pointerId!==v)return;let u=c(t);u!==null&&U(u),t.preventDefault(),t.stopPropagation()}function V(t){t.pointerId===v&&(f.hasPointerCapture?.(v)&&f.releasePointerCapture(v),v=null,t.preventDefault(),t.stopPropagation())}function K(){g=Z(M.value),d()}function W(){let t=q(w.value);t&&(i=t,o=_[i],r=J(o,e),d())}return l.addEventListener("change",d),E.addEventListener("change",z),M.addEventListener("change",K),f.addEventListener("pointerdown",s),f.addEventListener("pointermove",R),f.addEventListener("pointerup",V),f.addEventListener("pointercancel",V),w&&w.addEventListener("change",W),l.value=X(a),Number.isFinite(b)&&e.get("probability")===void 0?(E.value=X(b),z()):d(),()=>{l.removeEventListener("change",d),E.removeEventListener("change",z),M.removeEventListener("change",K),f.removeEventListener("pointerdown",s),f.removeEventListener("pointermove",R),f.removeEventListener("pointerup",V),f.removeEventListener("pointercancel",V),w&&w.removeEventListener("change",W),L.remove()}}var ue={render:ce};export{ue as default};
