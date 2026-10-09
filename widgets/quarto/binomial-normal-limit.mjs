// Generated from widgets/src; run npm run build:widgets.
import{b as M,g as x,h as I,k as v}from"./chunks/chunk-2IT2IX54.mjs";var C=1,P=100,T=.1,B=.9,F=.1;function R(e){return e===0?"0":e<.01?e.toFixed(3):e.toFixed(2)}function O(e,a){let m=1-a,c=new Array(e+1);c[0]=m**e;for(let o=1;o<=e;o+=1)c[o]=c[o-1]*((e-o+1)/o)*(a/m);let h=c.reduce((o,t)=>o+t,0);return c.map(o=>o/h)}function $(e,a,m){return Math.exp(-.5*(e-a)**2/m)/Math.sqrt(2*Math.PI*m)}function Y(e,a,m,c){let t={top:42,right:24,bottom:48,left:62},i=760-t.left-t.right,g=360-t.top-t.bottom,d=-.5,E=a+.5,l=a*m,S=a*m*(1-m),N=O(a,m),p=$(l,l,S),u=Math.max(...N,p)*1.15,y=n=>t.left+(n-d)/(E-d)*i,r=n=>t.top+g-n/u*g;e.setAttribute("viewBox","0 0 760 360"),e.setAttribute("role","img"),e.setAttribute("aria-label","Binomial PMF overlaid with its normal approximation"),e.innerHTML="";let A=a===1?[0,.5,u]:[0,u/2,u];for(let n of A){let s=r(n);e.appendChild(x("line",{class:"binomial-normal-grid-line",x1:t.left,y1:s,x2:760-t.right,y2:s})),I(e,R(n),t.left-10,s+4,{class:"binomial-normal-tick-label","text-anchor":"end"})}e.appendChild(x("line",{class:"binomial-normal-axis-line",x1:t.left,y1:r(0),x2:760-t.right,y2:r(0)})),e.appendChild(x("line",{class:"binomial-normal-axis-line",x1:t.left,y1:t.top,x2:t.left,y2:360-t.bottom}));let w=Array.from(new Set([0,a/4,a/2,3*a/4,a].map(n=>Math.round(n))));for(let n of w){let s=y(n);e.appendChild(x("line",{class:"binomial-normal-axis-tick",x1:s,y1:r(0),x2:s,y2:r(0)+5})),I(e,String(n),s,r(0)+22,{class:"binomial-normal-tick-label","text-anchor":"middle"})}let L=Math.max(1,i/(a+1)*.8);if(N.forEach((n,s)=>{e.appendChild(x("rect",{class:"binomial-normal-pmf-bar",x:y(s)-L/2,y:r(n),width:L,height:r(0)-r(n)}))}),c){let n=Array.from({length:301},(s,b)=>{let f=d+b/300*(E-d);return{x:f,y:$(f,l,S)}});e.appendChild(x("path",{class:"binomial-normal-pdf-line",d:v(n,y,r)}))}I(e,"number of successes",t.left+i/2,352,{class:"binomial-normal-axis-label","text-anchor":"middle"}),I(e,"probability / density",16,t.top+g/2,{class:"binomial-normal-axis-label","text-anchor":"middle",transform:`rotate(-90 16 ${t.top+g/2})`})}function q({model:e,el:a}){let m=document.createElement("style");m.textContent=`
    .binomial-normal-widget {
      color: #1f2933;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      margin: 1rem 0;
    }
    .binomial-normal-controls {
      align-items: center;
      display: flex;
      flex-wrap: nowrap;
      gap: 0.7rem;
      margin-bottom: 0.35rem;
    }
    .binomial-normal-label {
      align-items: center;
      display: inline-flex;
      font-size: 0.95rem;
      font-weight: 600;
      gap: 0.35rem;
      white-space: nowrap;
    }
    .binomial-normal-output {
      font-size: 0.95rem;
      font-weight: 600;
    }
    .binomial-normal-slider {
      accent-color: #2563eb;
      flex: 1 1 18rem;
      max-width: 28rem;
      min-width: 8rem;
    }
    .binomial-normal-legend {
      display: flex;
      flex-wrap: wrap;
      font-size: 0.9rem;
      gap: 1rem;
      margin-bottom: 0.25rem;
    }
    .binomial-normal-legend-item {
      align-items: center;
      display: inline-flex;
      gap: 0.35rem;
    }
    .binomial-normal-legend-item[hidden] {
      display: none;
    }
    .binomial-normal-legend-swatch {
      display: inline-block;
      height: 0.8rem;
      width: 1.2rem;
    }
    .binomial-normal-legend-pmf {
      background: #2563eb;
    }
    .binomial-normal-legend-pdf {
      border-top: 3px solid #d97706;
      height: 0;
    }
    .binomial-normal-chart {
      background: #ffffff;
      border: 1px solid #d8dee6;
      box-sizing: border-box;
      display: block;
      height: auto;
      max-width: 100%;
      width: 100%;
    }
    .binomial-normal-pmf-bar {
      fill: #2563eb;
      opacity: 0.55;
    }
    .binomial-normal-pdf-line {
      fill: none;
      stroke: #d97706;
      stroke-linejoin: round;
      stroke-width: 3;
    }
    .binomial-normal-axis-line,
    .binomial-normal-axis-tick {
      stroke: #52616f;
      stroke-width: 1.2;
    }
    .binomial-normal-grid-line {
      stroke: #e6eaf0;
      stroke-width: 1;
    }
    .binomial-normal-axis-label,
    .binomial-normal-tick-label {
      fill: #52616f;
      font-size: 12px;
    }
  `;let c=document.createElement("div");c.className="binomial-normal-widget";let h=document.createElement("div");h.className="binomial-normal-controls";let o=document.createElement("label");o.className="binomial-normal-label",o.textContent="Number of trials, n = ";let t=document.createElement("output");t.className="binomial-normal-output";let i=document.createElement("input"),g=`binomial-normal-${Math.random().toString(36).slice(2)}`;i.id=g,o.setAttribute("for",g),i.className="binomial-normal-slider",i.type="range",i.min=String(C),i.max=String(P),i.step="1",h.append(o,t,i);let d=document.createElement("label");d.className="binomial-normal-label",d.textContent="Probability of success, p = ";let E=document.createElement("output");E.className="binomial-normal-output";let l=document.createElement("input"),S=`binomial-normal-p-${Math.random().toString(36).slice(2)}`;l.id=S,d.setAttribute("for",S),l.className="binomial-normal-slider",l.type="range",l.min=String(T),l.max=String(B),l.step=String(F),h.append(d,E,l);let N=document.createElement("label");N.className="binomial-normal-label binomial-normal-toggle";let p=document.createElement("input");p.type="checkbox",p.checked=!1,N.append(p,document.createTextNode("Show PDF")),h.append(N);let u=document.createElement("div");u.className="binomial-normal-legend";let y=document.createElement("span");y.className="binomial-normal-legend-item";let r=document.createElement("span");r.className="binomial-normal-legend-swatch binomial-normal-legend-pmf";let A=document.createElement("span");y.append(r,A);let w=document.createElement("span");w.className="binomial-normal-legend-item";let L=document.createElement("span");L.className="binomial-normal-legend-swatch binomial-normal-legend-pdf";let n=document.createElement("span");w.append(L,n),w.hidden=!0,u.append(y,w);let s=x("svg",{class:"binomial-normal-chart"});c.append(m,h,u,s),a.append(c);function b(){let f=Math.round(M(Number(i.value),C,P)),k=M(Math.round(Number(l.value)/F)*F,T,B),_=f*k,z=f*k*(1-k);t.textContent=String(f),E.textContent=k.toFixed(1),A.textContent=`Bin(x; p = ${k.toFixed(2)})`,n.textContent=`N(\u03BC = ${_.toFixed(2)}, \u03C3\xB2 = ${z.toFixed(2)})`,w.hidden=!p.checked,Y(s,f,k,p.checked),e.set("n",f),e.set("p",k)}return i.value=String(Math.round(M(Number(e.get("n")),C,P))),l.value=M(Number(e.get("p")),T,B).toFixed(1),i.addEventListener("input",b),l.addEventListener("input",b),p.addEventListener("change",b),b(),()=>{i.removeEventListener("input",b),l.removeEventListener("input",b),p.removeEventListener("change",b),c.remove(),m.remove()}}var W={render:q};export{W as default};
