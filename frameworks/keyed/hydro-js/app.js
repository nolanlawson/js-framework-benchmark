window.requestIdleCallback=window.requestIdleCallback||((e,t,i=performance.now())=>setTimeout(e,0,{didTimeout:!1,timeRemaining:()=>Math.max(0,5-(performance.now()-i))}));var G=document.createRange();G.selectNodeContents(G.createContextualFragment("<template>").lastChild);var tt=G.createContextualFragment.bind(G),v=new WeakMap,S=new WeakMap,p=new WeakMap,g=new WeakMap,K=new WeakMap,m=new WeakMap,b=new WeakMap,X=new WeakMap,we=Symbol("boundFunctions"),k=Symbol("reactive"),I=Symbol("keys"),fe=!0,A=!0,se=!1;var W=!1,We=/\{\{([^]*?)\}\}/;var ve=/\n/g,ke=/[\.\[\]]/,_=/^on/,be=["allowfullscreen","async","autofocus","autoplay","checked","controls","draggable","default","defer","disabled","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected","spellcheck"],de=null,_e=!1;function E(e){return e!=null&&typeof e=="object"}function y(e){return typeof e=="function"}function x(e){return e.splitText!==void 0}function F(e){return e instanceof Node}function R(e){return e.nodeType===11}function $(e){return E(e)&&"event"in e&&"options"in e}function T(e){return Reflect.get(e,"isProxy")}function Ee(e){return E(e)&&typeof e.then=="function"}function Fe(){let e="abcdefghijklmnopqrstuvwxyz0123456789",t="";for(var i=0;i<6;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function ye(e){A=e}function P(e,t,i){return be.includes(t)&&!i?(e.removeAttribute(t),!1):(e.setAttribute(t,i),!0)}function Q(e,t,i){e.addEventListener(t,y(i)?i:i.event,y(i)?{}:i.options)}function C(e,t,...i){if(y(e))return e({...t,children:i});let n=document.createElement(e);for(let o in t)o in n&&!be.includes(o)?n[o]=t[o]:P(n,o,t[o]);return n.append(...i.some(o=>Array.isArray(o))?i.map($e).flat():i),W||q(n),n}function $e(e){return E(e)&&!F(e)?Object.values(e):e}function q(e,t){if(x(e)){z(e);return}let i=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT),n;for(;n=i.nextNode();){for(let s of n.getAttributeNames()){let l=n.getAttribute(s);if(t&&s.startsWith("on")){let c=s.replace(_,""),r=t[l];if(!r){z(n,s,l);continue}n.removeAttribute(s),$(r)?(n.addEventListener(c,r.event,r.options),S.has(n)?S.get(n).push(r.event):S.set(n,[r.event])):(n.addEventListener(c,r),S.has(n)?S.get(n).push(r):S.set(n,[r]))}else z(n,s,l)}let o=n.firstChild;for(;o;)x(o)&&o.nodeValue?.includes("{{")&&z(o),o=o.nextSibling}}function z(e,t,i){let n,o;for(t?(n=i,n===""&&(n=t,n.startsWith("{{")&&e.removeAttribute(n))):n=e.nodeValue;o=n.match(We);){let[s,l]=o,c=l.trim().replace(ve,"").split(ke).filter(Boolean),[r,f]=V(c),a=c[c.length-1],u=o.index,d=u+String(r).length;if(F(r)){e.nodeValue=n.replace(s,""),e.after(r),ie(u,d,r,a,f,t);return}if(x(e)){let h=E(r)?JSON.stringify(r):r??"";n=n.replace(s,h),n!=null&&(e.nodeValue=n)}else if(t==="bind"){n=n.replace(s,""),e.removeAttribute(t);let h=E(r)&&T(r)?r:f;g.has(h)?g.get(h).push(e):g.set(h,[e]);continue}else if(t==="two-way")e instanceof HTMLSelectElement?(e.value=r,J("change",e,f,a)):e instanceof HTMLInputElement&&e.type==="radio"?(e.checked=e.value===r,J("change",e,f,a)):e instanceof HTMLInputElement&&e.type==="checkbox"?(e.checked=r,J("change",e,f,a,!0)):(e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement)&&(e.value=r,J("input",e,f,a)),n=n.replace(s,""),e.setAttribute("two-way","");else if(y(r)||$(r))n=n.replace(s,""),e.removeAttribute(t),Q(e,t.replace(_,""),r);else if(E(r)){for(let[h,O]of Object.entries(r))n=n.replace(s,""),y(O)||$(O)?Q(e,h.replace(_,""),O):(a=h,P(e,h,O)?d=u+String(O).length:d=u),ie(u,d,e,a,r,h);continue}else n=n.replace(s,r),P(e,t,n===String(r)?r:n)||(n=n.replace(r,""));ie(u,d,e,a,f,t)}}function J(e,t,i,n,o=!1){t.addEventListener(e,s),te(()=>t.removeEventListener(e,s),t);function s({target:l}){Reflect.set(i,n,o?l.checked:l.value)}}function ie(e,t,i,n,o,s){let l=[e,t,s],c=[l];if(v.has(i)?v.get(i).push(l):v.set(i,[l]),p.has(o)){let r=p.get(o),f=r.get(n);f?f.has(i)?f.get(i).push(l):(f.set(c,i),f.set(i,c)):r.set(n,new Map([[c,i],[i,c]]))}else p.set(o,new Map([[n,new Map([[c,i],[i,c]])]]))}function V(e){let t,i;t=i=U;for(let n of e)i=t,t=Reflect.get(i,n);return[t,i]}function le(e,t,i){let n=[],o=[];if(x(e))return m.has(e)&&n.push(m.get(e)),b.has(e)&&n.push(b.get(e)),m.has(t)&&o.push(m.get(t)),b.has(t)&&o.push(b.get(t)),!(n.length!==o.length||String(n)!==String(o));if(S.has(e)&&n.push(...S.get(e)),S.has(t)&&o.push(...S.get(t)),m.has(e)&&n.push(m.get(e)),b.has(e)&&n.push(b.get(e)),m.has(t)&&o.push(m.get(t)),b.has(t)&&o.push(b.get(t)),n.length!==o.length||String(n)!==String(o))return!1;for(let s=0;s<e.childNodes.length;s++)if(i){if(x(e.childNodes[s])&&!le(e.childNodes[s],t.childNodes[s],i))return!1}else if(!le(e.childNodes[s],t.childNodes[s]))return!1;return!0}function Ne(e,t,i){return R(e)||R(t)?!1:e.isEqualNode(t)&&le(e,t,i)}function ce(e,t="",i=fe){if(i)return Z(ce,e,t,!1),pe(e);Reflect.has(e,k)&&(e=w(e));let n=[];if(R(e)&&(n=Array.from(e.childNodes),X.set(e,n)),!t)document.body.append(e);else{if(typeof t=="string"){let o=ne(t);if(o)t=o;else return qe}A?x(e)?Y(e,t):Ne(e,t)||Ue(e,t):Y(e,t)}M(e,m);for(let o of n)M(o,m);return pe(R(e)?n:e)}function qe(){}function oe(e,t){if(t.has(e)){let i=t.get(e);fe?window.requestIdleCallback(i):i(),t.delete(e)}}function M(e,t){if(t===m&&!Ve||t===b&&!Me)return;oe(e,t);let i=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT),n;for(;n=i.nextNode();){oe(n,t);let o=n.firstChild;for(;o;)x(o)&&oe(o,t),o=o.nextSibling}}function He(e,t){for(let[i,n]of e.entries())for(let o=0;o<n.length;o++){let s=n[o];(t.contains(s)||t.isSameNode(s))&&(n.splice(o,1),o--),n.length===0&&e.delete(i)}}function Ue(e,t){let i=[...e.querySelectorAll("*")];R(e)||i.unshift(e);let n=[];x(t)||(n=[...t.querySelectorAll("*")],R(t)||n.unshift(t));let o;se&&(o=document.createElement("template"),t===document.documentElement?t.append(o):R(t)?X.get(t)[0].before(o):t.before(o),o.append(e));let s=new Map;for(let l of n){if(se&&l===o)return;s.has(l.localName)?s.get(l.localName).push(l):s.set(l.localName,[l])}for(let l of i){let c=s.get(l.localName);if(c){for(let r of c)if(Ne(l,r,!0)){l.replaceWith(r),M(l,b),He(s,r);break}}}if(se){let l=R(e)?Array.from(o.childNodes):[e];if(R(t)){let c=X.get(t);for(let r of l)c[0].before(r);for(let r of c)r.remove()}else t.replaceWith(...l);o.remove(),M(t,b)}else Y(e,t);s.clear()}function Y(e,t){if(R(t)){let i=X.get(t);if(R(e)){let n=Array.from(e.childNodes);for(let o=0;o<i.length;o++){let s=i[o];o<n.length?ce(n[o],s):s.remove()}}else for(let n=0;n<i.length;n++){let o=i[n];n===0?ce(e,o):o.remove()}}else t.replaceWith(e);M(t,b)}function pe(e){return Array.isArray(e)?()=>e.forEach(H):()=>H(e)}function H(e){e.isConnected&&(e.remove(),M(e,b))}function Z(e,...t){navigator.scheduling?navigator.scheduling.isInputPending()?setTimeout(Z,0,e,...t):e(...t):window.requestIdleCallback(()=>e(...t))}function D(e){let t;do t=Fe();while(Reflect.has(U,t));Reflect.set(U,t,e),Reflect.set(n,k,!0);let i=Re(n,[t]);return i;function n(o){let s=(this&&Reflect.has(this,k)?this:i)[I.description],[l,c]=V(s),r=s[s.length-1];if(y(o)){let f=o(l);if(l===f)return;Reflect.set(c,r,f??l)}else Reflect.set(c,r,o)}}function Re(e,t){return new Proxy(e,{get(i,n,o){return n===k.description?!0:n===I.description?t:n===Symbol.toPrimitive?()=>`{{${t.join(".")}}}`:Re(i,[...t,n])}})}function Se(e){let t=e[I.description];return[t[t.length-1],t.length===1]}function ee(e){let[t,i]=Se(e);if(i)Reflect.set(U,t,null);else{let[n,o]=V(e[I.description]);Reflect.set(o,t,null)}}function xe(e,t){let[i,n]=Se(e);if(n)U.observe(i,t);else{let[o,s]=V(e[I.description]);s.observe(i,t)}}function Ae(e,t,i,n=e){let o=l=>(!Reflect.has(e,k)&&y(e)?e(l):!Ee(l)&&l)?y(t)?t():t:y(i)?i():i,s=D(o(w(n)));return xe(n,l=>{l===null?ee(s):s(o(l))}),s}var ge=!1,he=new Set,L=new WeakMap;function w(e){let[t]=V(Reflect.get(e,I.description));return t}var Ve=!1;var Me=!1;function te(e,t,...i){Me=!0,b.set(t,i.length?e.bind(e,...i):e)}function re(e){let t=Symbol("handlers"),i=new WeakMap,n=new Proxy(e??{},{set(o,s,l,c){ge&&(he.add(c),L.has(c)?L.get(c).add(s):L.set(c,new Set([s])));let r=!0,f=Reflect.get(o,s,c);if(f===l)return r;if(l===null){if(p.has(c)){let d=p.get(c);d.delete(String(s)),d.size===0&&p.delete(c)}let u=Reflect.get(o,t,c);if(u.has(s)){let d=u.get(s);for(let h of d)h(null,f);d.clear(),c.unobserve(s)}return E(f)&&T(f)?(p.delete(f),g.has(f)&&(g.get(f).forEach(H),g.delete(f))):g.has(c)&&(g.get(c).forEach(H),g.delete(c)),!_e&&Array.isArray(c)?(c.splice(Number(s),1),r):Reflect.deleteProperty(c,s)}if(Ee(l))return l.then(d=>{c[s]=d}).catch(d=>{console.error(d),c[s]=null}),r=Reflect.set(o,s,l,c),r;if(F(l))r=Reflect.set(o,s,l,c);else if(E(l)&&!T(l)){r=Reflect.set(o,s,re(l),c);for(let[u,d]of Object.entries(l))E(d)&&!T(d)&&Reflect.set(l,u,re(d))}else if(!A&&Array.isArray(c)&&c.includes(f)&&c.includes(l)&&g.has(l)){let[u]=g.get(l);if(de!==u){let[d]=g.get(f);de=d;let h=u.previousSibling,O=d.previousSibling,Pe=c.findIndex(Ie=>Ie===l);c.splice(Number(s),1,l),c.splice(Pe,1,f),h.after(d),O.after(u)}return!0}else r=Reflect.set(o,s,l,c);let a=Reflect.get(o,s,c);return p.has(f)?me(f,s,a,f):p.has(c)&&me(c,s,a,f),E(l)&&T(l)&&p.has(f)&&(A&&K.set(f,p.get(f)),K.has(l)?(p.set(f,K.get(l)),K.delete(l)):p.set(f,p.get(l))),r&&Reflect.get(o,t,c).get(s)?.forEach(u=>u(a,f)),!A&&f&&je(f),r},get(o,s,l){ge&&(he.add(l),L.has(l)?L.get(l).add(s):L.set(l,new Set([s])));let c=Reflect.get(o,s,l);return y(c)?(i.has(c)||i.set(c,c.bind(o)),i.get(c)):c}});return Reflect.defineProperty(n,"isProxy",{value:!0}),Reflect.defineProperty(n,"asyncUpdate",{value:fe,writable:!0}),Reflect.defineProperty(n,t,{value:new Map}),Reflect.defineProperty(n,"observe",{value(o,s){let l=Reflect.get(n,t);l.has(o)?l.get(o).add(s):l.set(o,new Set([s]))},configurable:!0}),Reflect.defineProperty(n,"getObservers",{value(){return Reflect.get(n,t)},configurable:!0}),Reflect.defineProperty(n,"unobserve",{value(o,s){let l=Reflect.get(n,t);if(o){if(l.has(o))if(s==null)l.delete(o);else{let c=l.get(o);c?.has(s)&&c.delete(s)}}else l.clear()},configurable:!0}),e||Reflect.defineProperty(n,we,{value:i}),n}function je(e){E(e)&&T(e)&&(p.delete(e),g.has(e)&&(g.get(e).forEach(H),g.delete(e)))}function me(e,t,i,n){let o=p.get(e),s=o.get(String(t));if(s&&(Reflect.get(e,"asyncUpdate")?Z(B,s,i,n):B(s,i,n)),E(i))for(let[l,c]of Object.entries(i)){let r=E(n)&&Reflect.get(n,l)||n,f=o.get(l);f&&(Reflect.get(e,"asyncUpdate")?Z(B,f,c,r):B(f,c,r))}}function B(e,t,i){e.forEach(n=>{if(F(n)){if(!n.isConnected){let o=e.get(n);e.delete(n),e.delete(o)}return}for(let o of n){let s=e.get(n),[l,c,r]=o,f=!1;if(F(t))Y(t,s),t!==s&&(e.delete(s),R(t)||(e.set(t,n),e.set(n,t)));else if(x(s)){f=!0;let a=s.nodeValue;s.nodeValue=a.substring(0,l)+String(t)+a.substring(c)}else if(r==="two-way")s instanceof HTMLInputElement&&s.type==="radio"?s.checked=Array.isArray(t)?t.includes(s.name):String(t)===s.value:s instanceof HTMLInputElement&&s.type==="checkbox"?s.checked=t:(s instanceof HTMLTextAreaElement||s instanceof HTMLSelectElement||s instanceof HTMLInputElement)&&(s.value=String(t));else if(y(t)||$(t)){let a=r.replace(_,"");s.removeEventListener(a,y(i)?i:i.event),Q(s,a,t)}else if(E(t))for(let[a,u]of Object.entries(t))if(y(u)||$(u)){let d=a.replace(_,"");s.removeEventListener(d,y(i[a])?i[a]:i[a].event),Q(s,d,u)}else P(s,a,u);else{f=!0;let a=s.getAttribute(r);a?(a=a.substring(0,l)+String(t)+a.substring(c),P(s,r,a===String(t)?t:a)):P(s,r,t)}if(f&&(o[1]=l+String(t).length,v.has(s))){let a=!1;for(let u of v.get(s)){if(u===o){a=!0;continue}if(a&&(x(s)||r===u[2])){let d=String(i).length-String(t).length;u[0]-=d,u[1]-=d}}}}})}function Ce(e,t,i){W=!0;let n=ne(e),o=w(t).map(i);n.append(...o);for(let s of o)M(s,m);n.hasChildNodes()&&q(n),te(ee,n,t),W=!1,xe(t,(s,l)=>{if(W=!0,!s?.length||!A&&s?.length===l?.length)n.textContent="";else if(A)for(let c=0;c<l?.length&&s?.length;c++)l[c].id=s[c].id,l[c].label=s[c].label,s[c]=l[c];if(l?.length&&s?.length>l?.length&&s[0]===l[0]){let c=l.length,f=s.slice(c).map((a,u)=>i(a,u+c));n.append(...f);for(let a of f)M(a,m)}else if(l?.length===0||!A&&s?.length){!A&&l?.length&&n.hasChildNodes()&&(n.textContent="");let c=s.map(i);n.append(...c);for(let r of c)M(r,m)}n.hasChildNodes()&&q(n),W=!1})}var U=re(),ne=document.querySelector.bind(document),nt=document.querySelectorAll.bind(document);var Oe=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],Le=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],Te=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],Ke=Oe.length,ze=Le.length,Je=Te.length,Be=1;function ue(e){let t=new Array(e);for(let i=0;i<e;i++)t[i]={id:Be++,label:Oe[ae(Ke)]+" "+Le[ae(ze)]+" "+Te[ae(Je)]};return t}function ae(e){return Math.random()*e|0}ye(!1);q(ne("#main"),{run:Xe,runLots:Qe,add:Ge,update:Ze,clear:Ye,swapRows:De});var N=D([]),j=D(-1);Ce("tbody",N,(e,t)=>{let i=Ae(o=>o===e.id,"danger","",j),n=C("tr",{class:i,bind:N[t]},C("td",{class:"col-md-1"},N[t].id),C("td",{class:"col-md-4"},C("a",{onclick:()=>j(e.id)},N[t].label)),C("td",{class:"col-md-1"},C("a",{onclick:()=>et(e.id)},C("span",{class:"glyphicon glyphicon-remove","aria-hidden":"true"}))),C("td",{class:"col-md-6"}));return te(ee,n,i),n});function Ge(){N(e=>[...e,...ue(1e3)])}function Xe(){j(null),N(ue(1e3))}function Qe(){j(null),N(ue(1e4))}function Ye(){N([]),j(null)}function Ze(){let e=w(N),t=0;for(;t<e.length;)N[t].setter(i=>{i.label+=" !!!"}),t+=10}function De(){N(e=>{e.length>998&&([e[1],e[998]]=[e[998],e[1]])})}function et(e){let t=w(N).findIndex(i=>i?.id===e);N(i=>{i[t]=null})}
