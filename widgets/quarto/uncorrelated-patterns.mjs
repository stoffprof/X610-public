// Generated from widgets/src; run npm run build:widgets.
import{g as h,h as f}from"./chunks/chunk-2IT2IX54.mjs";var T=600,g={w:{label:"W",x:[-1.1,1.1],y:[-.4,1.4],xTicks:[-1,0,1],yTicks:[0,1]},diamond:{label:"Diamond",x:[-1.5,1.5],y:[-1.5,1.5],xTicks:[-1,0,1],yTicks:[-1,0,1]},u:{label:"U",x:[-1.1,1.1],y:[-1.2,3.2],xTicks:[-1,0,1],yTicks:[-1,0,1,2,3]},x:{label:"X",x:[-1.5,1.5],y:[-1.5,1.5],xTicks:[-1,0,1],yTicks:[-1,0,1]},o:{label:"O",x:[-1.5,1.5],y:[-1.5,1.5],xTicks:[-1,0,1],yTicks:[-1,0,1]},clusters:{label:"Clusters",x:[-7,7],y:[-7,7],xTicks:[-6,-3,0,3,6],yTicks:[-6,-3,0,3,6]}};function y(t,d){return t+(d-t)*Math.random()}function b(){return Math.sqrt(-2*Math.log(1-Math.random()))*Math.cos(2*Math.PI*Math.random())}function M(t){let d=[[3,3],[-3,3],[-3,-3],[3,-3]];return Array.from({length:T},(p,c)=>{let e=y(-1,1);switch(t){case"w":return[e,4*(e**2-.5)**2+y(-1/3,1/3)];case"diamond":{let a=y(-1,1);return[(e-a)/Math.SQRT2,(e+a)/Math.SQRT2]}case"u":return[e,2*e**2+y(-1,1)];case"x":return[e,(Math.random()<.5?-1:1)*(e**2+y(0,.5))];case"o":{let a=Math.PI*e;return[Math.sin(a)+b()/8,Math.cos(a)+b()/8]}case"clusters":{let[a,n]=d[Math.floor(c/(T/4))];return[a+b(),n+b()]}default:throw new Error(`Unknown pattern: ${t}`)}})}function C(t){let d=t.reduce((n,s)=>n+s[0],0)/t.length,p=t.reduce((n,s)=>n+s[1],0)/t.length,c=0,e=0,a=0;for(let[n,s]of t)c+=(n-d)*(s-p),e+=(n-d)**2,a+=(s-p)**2;return c/Math.sqrt(e*a)}function E(t,d,p){let{x:c,y:e,xTicks:a,yTicks:n,label:s}=g[p],x=430,u=46,l=14,o=360,m=r=>u+(r-c[0])/(c[1]-c[0])*o,i=r=>l+(e[1]-r)/(e[1]-e[0])*o;t.setAttribute("viewBox",`0 0 ${x} ${x}`),t.setAttribute("role","img"),t.setAttribute("aria-label",`${s} pattern from 600 draws with population correlation zero`),t.replaceChildren();for(let r of a)t.appendChild(h("line",{class:"uncorrelated-patterns-grid",x1:m(r),y1:l,x2:m(r),y2:l+o})),f(t,String(r),m(r),l+o+20,{class:"uncorrelated-patterns-tick","text-anchor":"middle"});for(let r of n)t.appendChild(h("line",{class:"uncorrelated-patterns-grid",x1:u,y1:i(r),x2:u+o,y2:i(r)})),f(t,String(r),u-9,i(r)+5,{class:"uncorrelated-patterns-tick","text-anchor":"end"});t.appendChild(h("rect",{class:"uncorrelated-patterns-border",x:u,y:l,width:o,height:o}));let k=h("g",{class:"uncorrelated-patterns-points"});for(let[r,w]of d)r>=c[0]&&r<=c[1]&&w>=e[0]&&w<=e[1]&&k.appendChild(h("circle",{cx:m(r),cy:i(w),r:2.2}));t.appendChild(k),f(t,"X",u+o/2,x-8,{class:"uncorrelated-patterns-axis-label","text-anchor":"middle"}),f(t,"Y",13,l+o/2,{class:"uncorrelated-patterns-axis-label","text-anchor":"middle",transform:`rotate(-90 13 ${l+o/2})`})}function S({model:t,el:d}){let p=document.createElement("style");p.textContent=`
    .uncorrelated-patterns-widget {
      font-family: inherit;
      font-size: 0.6em;
      margin: 0 auto;
      max-width: 720px;
    }
    .uncorrelated-patterns-controls {
      align-items: center;
      display: flex;
      gap: 0.7em;
      justify-content: center;
    }
    .uncorrelated-patterns-controls select,
    .uncorrelated-patterns-controls button { font: inherit; }
    .uncorrelated-patterns-chart { display: block; height: auto; margin: 0 auto; max-width: 100%; width: 400px; }
    .uncorrelated-patterns-grid { stroke: #e3e8ee; stroke-width: 1; }
    .uncorrelated-patterns-border { fill: none; stroke: #687786; stroke-width: 1.5; }
    .uncorrelated-patterns-points { fill: #2563eb; opacity: 0.75; }
    .uncorrelated-patterns-tick { fill: #465464; font-size: 15px; }
    .uncorrelated-patterns-axis-label { fill: #1f2933; font-size: 20px; font-style: italic; }
    .uncorrelated-patterns-caption { margin: 0.1em 0 0; text-align: center; }
  `;let c=document.createElement("div");c.className="uncorrelated-patterns-widget";let e=document.createElement("div");e.className="uncorrelated-patterns-controls";let a=document.createElement("label"),n=document.createElement("select");n.id=`uncorrelated-pattern-${Math.random().toString(36).slice(2)}`,a.htmlFor=n.id,a.textContent="Pattern:";for(let[o,m]of Object.entries(g)){let i=document.createElement("option");i.value=o,i.textContent=m.label,n.appendChild(i)}n.value=t.get("pattern")||"w";let s=document.createElement("button");s.type="button",s.textContent="Draw again",e.append(a,n,s);let x=h("svg",{class:"uncorrelated-patterns-chart"}),u=document.createElement("p");u.className="uncorrelated-patterns-caption",c.append(e,x,u),d.append(p,c);function l(){let o=n.value,m=M(o),i=C(m),k=Math.abs(i)<.005?0:i;u.textContent=`Population \u03C1 = 0; sample r = ${k.toFixed(2)}.`,E(x,m,o),t.set("pattern",o)}return n.addEventListener("change",l),s.addEventListener("click",l),l(),()=>{n.removeEventListener("change",l),s.removeEventListener("click",l),c.remove(),p.remove()}}var $={render:S};export{$ as default};
