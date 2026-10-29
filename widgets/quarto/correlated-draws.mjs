// Generated from widgets/src; run npm run build:widgets.
import{g as d,h as x}from"./chunks/chunk-2IT2IX54.mjs";var k=500,s=5;function z(){return Math.sqrt(-2*Math.log(1-Math.random()))*Math.cos(2*Math.PI*Math.random())}function C(){return Array.from({length:k},()=>[z(),z()])}function D(e,S,n,i){let a=t=>46+(t+s)/(2*s)*360,l=t=>14+(s-t)/(2*s)*360,h=Math.sqrt(1-n**2);e.setAttribute("viewBox","0 0 430 430"),e.setAttribute("role","img"),e.setAttribute("aria-label",`Scatterplot of 500 draws with population correlation ${n.toFixed(2)} and standard deviation ratio ${i.toFixed(2)}`),e.replaceChildren();for(let t of[-4,-2,0,2,4])e.appendChild(d("line",{class:"correlated-draws-grid",x1:a(t),y1:14,x2:a(t),y2:374})),e.appendChild(d("line",{class:"correlated-draws-grid",x1:46,y1:l(t),x2:406,y2:l(t)})),x(e,String(t),a(t),394,{class:"correlated-draws-tick","text-anchor":"middle"}),x(e,String(t),37,l(t)+5,{class:"correlated-draws-tick","text-anchor":"end"});e.appendChild(d("rect",{class:"correlated-draws-border",x:46,y:14,width:360,height:360}));let w=d("g",{class:"correlated-draws-points"});for(let[t,f]of S){let r=i*(n*t+h*f);Math.abs(t)<=s&&Math.abs(r)<=s&&w.appendChild(d("circle",{cx:a(t),cy:l(r),r:2.2}))}e.appendChild(w),x(e,"X",46+360/2,422,{class:"correlated-draws-axis-label","text-anchor":"middle"}),x(e,"Y",13,14+360/2,{class:"correlated-draws-axis-label","text-anchor":"middle",transform:`rotate(-90 13 ${14+360/2})`})}function L({model:e,el:S}){let n=document.createElement("style");n.textContent=`
    .correlated-draws-widget {
      font-family: inherit;
      font-size: 0.6em;
      margin: 0 auto;
      max-width: 720px;
    }
    .correlated-draws-controls {
      align-items: center;
      display: grid;
      gap: 0.2em 0.5em;
      grid-template-columns: auto minmax(120px, 1fr) 3.3em auto;
    }
    .correlated-draws-controls label { text-align: right; }
    .correlated-draws-controls input { accent-color: #2563eb; width: 100%; }
    .correlated-draws-controls output { font-variant-numeric: tabular-nums; }
    .correlated-draws-controls button { font: inherit; grid-column: 4; grid-row: 1 / 3; }
    .correlated-draws-chart { display: block; height: auto; margin: 0 auto; max-width: 100%; width: 400px; }
    .correlated-draws-grid { stroke: #e3e8ee; stroke-width: 1; }
    .correlated-draws-border { fill: none; stroke: #687786; stroke-width: 1.5; }
    .correlated-draws-points { fill: #2563eb; opacity: 0.75; }
    .correlated-draws-tick { fill: #465464; font-size: 15px; }
    .correlated-draws-axis-label { fill: #1f2933; font-size: 20px; font-style: italic; }
    .correlated-draws-caption { margin: 0.1em 0 0; text-align: center; }
  `;let i=document.createElement("div");i.className="correlated-draws-widget";let p=document.createElement("div");p.className="correlated-draws-controls";function g(r,c,E,v,M){let b=document.createElement("label"),o=document.createElement("input"),y=document.createElement("output");return o.id=`correlated-draws-${Math.random().toString(36).slice(2)}`,o.type="range",o.min=String(c),o.max=String(E),o.step=String(v),o.value=String(M),b.htmlFor=o.id,b.textContent=r,p.append(b,o,y),{input:o,output:y}}let u=g("Correlation \u03C1",-1,1,.05,e.get("rho")),m=g("SD(Y) / SD(X)",.5,2,.1,e.get("sdRatio")),a=document.createElement("button");a.type="button",a.textContent="Draw again",p.appendChild(a);let l=d("svg",{class:"correlated-draws-chart"}),h=document.createElement("p");h.className="correlated-draws-caption",i.append(p,l,h),S.append(n,i);let w=C();function t(){let r=Number(u.input.value),c=Number(m.input.value);u.output.textContent=r.toFixed(2),m.output.textContent=c.toFixed(1),h.textContent=Math.abs(r)===1?`\u03C1 = ${r.toFixed(0)}: slope = ${(r*c).toFixed(1)}. Change SD(Y) / SD(X); \u03C1 stays fixed.`:"500 draws; \u03C1 is the population value. At \xB11, vary SD(Y) / SD(X).",D(l,w,r,c),e.set("rho",r),e.set("sdRatio",c)}function f(){w=C(),t()}return u.input.addEventListener("input",t),m.input.addEventListener("input",t),a.addEventListener("click",f),t(),()=>{u.input.removeEventListener("input",t),m.input.removeEventListener("input",t),a.removeEventListener("click",f),i.remove(),n.remove()}}var F={render:L};export{F as default};
