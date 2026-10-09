// Generated from widgets/src; run npm run build:widgets.
import{a as g,b as k,g as c,h as y,i as P,k as M}from"./chunk-2IT2IX54.mjs";function A(t,e,{title:r,xMin:n,xMax:s,yMax:o,yLabel:i,yTicks:l}){let a={top:38,right:18,bottom:44,left:58},u=440-a.left-a.right,h=310-a.top-a.bottom,w=s-n||1;t.setAttribute("viewBox","0 0 440 310"),t.setAttribute("role","img"),t.innerHTML="";let b=m=>a.left+(m-n)/w*u,d=m=>a.top+h-m/o*h;y(t,r,440/2,20,{class:"area-title","text-anchor":"middle"});for(let m of e.xTicks(n,s)){let x=b(m);t.appendChild(c("line",{class:"area-grid",x1:x,y1:a.top,x2:x,y2:310-a.bottom})),t.appendChild(c("line",{class:"area-tick",x1:x,y1:d(0),x2:x,y2:d(0)+5})),y(t,e.formatXTick(m),x,d(0)+22,{class:"area-label","text-anchor":"middle"})}for(let m of l){let x=d(m);t.appendChild(c("line",{class:"area-grid",x1:a.left,y1:x,x2:440-a.right,y2:x})),y(t,m.toFixed(2),a.left-10,x+4,{class:"area-label","text-anchor":"end"})}return t.appendChild(c("line",{class:"area-axis",x1:a.left,y1:d(0),x2:440-a.right,y2:d(0)})),t.appendChild(c("line",{class:"area-axis",x1:a.left,y1:a.top,x2:a.left,y2:310-a.bottom})),y(t,"x",a.left+u/2,302,{class:"area-axis-label","text-anchor":"middle"}),y(t,i,16,a.top+h/2,{class:"area-axis-label","text-anchor":"middle",transform:`rotate(-90 16 ${a.top+h/2})`}),{margin:a,plotHeight:h,xScale:b,yScale:d}}function S(t,e,r,n,s,o){let i=t.filter(h=>h.x<=o);if(i.length===0)return"";let l=i[i.length-1],f=l.x<o?{x:o,pdf:e.pdf(o)}:l,p=f===l?i:[...i,f],a=n(0),u=p.map(h=>`L ${r(h.x)} ${n(h.pdf)}`).join(" ");return`M ${r(s)} ${a} ${u} L ${r(f.x)} ${a} Z`}function T(t,e,r,n,s,o,i){if(e.shade==="rectangle"){let f=k(n,e.support[0],e.support[1]);t.appendChild(c("rect",{class:"area-shade",x:o(e.support[0]),y:i(e.densityHeight),width:o(f)-o(e.support[0]),height:i(0)-i(e.densityHeight)}));return}let l=S(r,e,o,i,s,n);l&&t.appendChild(c("path",{class:"area-shade",d:l}))}function z(t,e,r,n,s,o){let{xScale:i,yScale:l}=A(t,e,{title:"Probability Density Function",xMin:s,xMax:o,yMax:e.pdfYMax,yLabel:"Density",yTicks:e.pdfYTicks});T(t,e,r,n,s,i,l),t.appendChild(c("path",{class:"area-pdf",d:M(r,i,l,"pdf")})),t.appendChild(c("line",{class:"area-cutoff",x1:i(n),y1:l(0),x2:i(n),y2:l(e.cutoffHeight(n))}));let[f,p]=e.annotationPosition(i,l);y(t,`Area: ${e.cdf(n).toFixed(3)}`,f,p,{class:"area-annotation"})}function F(t,e,r,n,s,o){let i=e.cdf(n),{margin:l,plotHeight:f,xScale:p,yScale:a}=A(t,e,{title:"Cumulative Distribution Function",xMin:s,xMax:o,yMax:e.cdfYMax,yLabel:"Probability",yTicks:[0,.25,.5,.75,1]});t.appendChild(c("path",{class:"area-cdf",d:M(r,p,a,"cdf")})),t.appendChild(c("line",{class:"area-guide",x1:l.left,y1:a(i),x2:p(n),y2:a(i)})),t.appendChild(c("line",{class:"area-guide",x1:p(n),y1:l.top+f,x2:p(n),y2:a(i)})),t.appendChild(c("circle",{class:"area-point",cx:p(n),cy:a(i),r:5}))}function H(t,e,r){return t.points?t.points(e,r):P(e,r,401).map(n=>({x:n,pdf:t.pdf(n),cdf:t.cdf(n)}))}function v({model:t,el:e},r){let n=g(t.get("xMin"),r.xMin),s=g(t.get("xMax"),r.xMax),o=g(t.get("sliderMin"),n),i=g(t.get("sliderMax"),s),l=g(t.get("step"),r.step),f=k(g(t.get("x"),r.initialX),o,i),p=H(r,n,s),a=document.createElement("style");a.textContent=`
    .area-widget {
      color: #1f2933;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      margin: 1rem 0;
    }
    .area-controls {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-bottom: 0.8rem;
    }
    .area-controls label {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      font-size: 1rem;
      gap: 0.45rem;
    }
    .area-controls input {
      width: min(18rem, 60vw);
    }
    .area-value {
      font-variant-numeric: tabular-nums;
      font-weight: 700;
      min-width: 3.6rem;
    }
    .area-heading {
      font-size: 1.15rem;
      font-weight: 650;
      margin: 0 0 0.4rem;
      text-align: center;
    }
    .area-charts {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    .area-charts svg {
      display: block;
      height: auto;
      width: 100%;
    }
    .area-title {
      fill: currentColor;
      font-size: 17px;
      font-weight: 600;
    }
    .area-axis,
    .area-tick {
      stroke: #1f2933;
      stroke-width: 1.2;
    }
    .area-grid {
      stroke: #d5dce5;
      stroke-width: 1;
    }
    .area-label,
    .area-axis-label,
    .area-annotation {
      fill: currentColor;
      font-size: 13px;
    }
    .area-axis-label {
      font-size: 14px;
      font-weight: 600;
    }
    .area-annotation {
      font-size: 15px;
      font-weight: 600;
    }
    .area-pdf {
      fill: none;
      stroke: #1d4ed8;
      stroke-linejoin: round;
      stroke-width: 2.8;
    }
    .area-cdf {
      fill: none;
      stroke: #15803d;
      stroke-linejoin: round;
      stroke-width: 3.2;
    }
    .area-shade {
      fill: #72b66f;
      opacity: 0.55;
    }
    .area-cutoff {
      stroke: #4b5563;
      stroke-width: 1.5;
    }
    .area-guide {
      stroke: #111827;
      stroke-dasharray: 3 4;
      stroke-linecap: round;
      stroke-width: 2;
    }
    .area-point {
      fill: #111827;
    }
  `;let u=document.createElement("div");u.className="area-widget";let h=document.createElement("div");h.className="area-controls";let w=document.createElement("label"),b=document.createElement("span");b.className="area-value";let d=document.createElement("input");d.type="range",d.min=String(o),d.max=String(i),d.step=String(l),d.value=String(f),w.append("Select a value for x:",b,d),h.appendChild(w);let m=document.createElement("div");m.className="area-heading",m.textContent=r.heading;let x=document.createElement("div");x.className="area-charts";let $=c("svg",{"aria-label":r.pdfAriaLabel}),L=c("svg",{"aria-label":r.cdfAriaLabel});x.append($,L),u.append(h,m,x),e.append(a,u);function C(){let E=k(g(d.value,f),o,i);b.textContent=E.toFixed(2),z($,r,p,E,n,s),F(L,r,p,E,n,s)}return d.addEventListener("input",C),C(),()=>{d.removeEventListener("input",C),u.remove(),a.remove()}}export{v as a};
