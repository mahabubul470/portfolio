import{i as ue,P as pe,g as Y}from"../chunks/params.240a270a.js";import{s as _e,a as I,f as w,c as D,g as j,h as C,d as m,j as b,i as y,M as d,_ as Z,n as J,l as L,m as G,p as K,O as X,V as me}from"../chunks/scheduler.40310ec6.js";import{S as de,i as he,b as S,d as T,m as O,t as E,c as F,a as k,e as B,g as H}from"../chunks/index.ead5fd47.js";import{U as Q,e as q}from"../chunks/UIcon.3fef0134.js";import{C as $e}from"../chunks/CardLogo.aa3a003f.js";import{M as ge}from"../chunks/MainTitle.63d6be98.js";import{b as le}from"../chunks/paths.9a817037.js";import{B as ve,M as be}from"../chunks/Banner.3f474154.js";import{T as ke}from"../chunks/TabTitle.f758f469.js";import{C as ie}from"../chunks/Chip.167f3ea8.js";import{C as fe}from"../chunks/CardDivider.91a5371c.js";function we({params:f}){if(f.slug)return{project:ue.find(r=>r.slug===f.slug)}}const Ye=Object.freeze(Object.defineProperty({__proto__:null,load:we},Symbol.toStringTag,{value:"Module"}));function re(f,e,r){const t=f.slice();return t[4]=e[r],t}function ne(f,e,r){const t=f.slice();return t[4]=e[r],t}function se(f,e,r){const t=f.slice();return t[4]=e[r],t}function je(f){let e,r,t,l,n,s,a,o,u,c,g,V,M,N;r=new ve({props:{img:Y(f[0].project.logo),$$slots:{default:[De]},$$scope:{ctx:f}}});const A=[Pe,Ve],P=[];function h(v,i){return v[0].project.description?0:1}s=h(f),a=P[s]=A[s](f),c=new fe({});const W=[Me,ye],z=[];function $(v,i){return v[2].length>0?0:1}return V=$(f),M=z[V]=W[V](f),{c(){e=w("div"),S(r.$$.fragment),t=I(),l=w("div"),n=w("div"),a.c(),o=I(),u=w("div"),S(c.$$.fragment),g=I(),M.c(),this.h()},l(v){e=j(v,"DIV",{class:!0});var i=C(e);T(r.$$.fragment,i),t=D(i),l=j(i,"DIV",{class:!0});var p=C(l);n=j(p,"DIV",{class:!0});var x=C(n);a.l(x),x.forEach(m),o=D(p),u=j(p,"DIV",{class:!0});var _=C(u);T(c.$$.fragment,_),_.forEach(m),g=D(p),M.l(p),p.forEach(m),i.forEach(m),this.h()},h(){b(n,"class","px-10px m-y-5"),b(u,"class","w-100% m-t-8"),b(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),b(e,"class","flex flex-col items-center overflow-x-hidden")},m(v,i){y(v,e,i),O(r,e,null),d(e,t),d(e,l),d(l,n),P[s].m(n,null),d(l,o),d(l,u),O(c,u,null),d(l,g),z[V].m(l,null),N=!0},p(v,i){const p={};i&1&&(p.img=Y(v[0].project.logo)),i&2049&&(p.$$scope={dirty:i,ctx:v}),r.$set(p);let x=s;s=h(v),s===x?P[s].p(v,i):(H(),E(P[x],1,1,()=>{P[x]=null}),F(),a=P[s],a?a.p(v,i):(a=P[s]=A[s](v),a.c()),k(a,1),a.m(n,null)),M.p(v,i)},i(v){N||(k(r.$$.fragment,v),k(a),k(c.$$.fragment,v),k(M),N=!0)},o(v){E(r.$$.fragment,v),E(a),E(c.$$.fragment,v),E(M),N=!1},d(v){v&&m(e),B(r),P[s].d(),B(c),z[V].d()}}}function xe(f){let e,r,t,l,n="Could not load project data...",s;return r=new Q({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),S(r.$$.fragment),t=I(),l=w("p"),l.textContent=n,this.h()},l(a){e=j(a,"DIV",{class:!0});var o=C(e);T(r.$$.fragment,o),t=D(o),l=j(o,"P",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-18mwztv"&&(l.textContent=n),o.forEach(m),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,o){y(a,e,o),O(r,e,null),d(e,t),d(e,l),s=!0},p:J,i(a){s||(k(r.$$.fragment,a),s=!0)},o(a){E(r.$$.fragment,a),s=!1},d(a){a&&m(e),B(r)}}}function Ee(f){let e=f[0].project.name+"",r;return{c(){r=L(e)},l(t){r=G(t,e)},m(t,l){y(t,r,l)},p(t,l){l&1&&e!==(e=t[0].project.name+"")&&K(r,e)},d(t){t&&m(r)}}}function Ce(f){let e,r,t,l,n=f[4].label+"",s,a,o;return r=new Q({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),S(r.$$.fragment),t=I(),l=w("span"),s=L(n),a=I(),this.h()},l(u){e=j(u,"DIV",{class:!0});var c=C(e);T(r.$$.fragment,c),t=D(c),l=j(c,"SPAN",{});var g=C(l);s=G(g,n),g.forEach(m),c.forEach(m),a=D(u),this.h()},h(){b(e,"class","row-center gap-2")},m(u,c){y(u,e,c),O(r,e,null),d(e,t),d(e,l),d(l,s),y(u,a,c),o=!0},p(u,c){(!o||c&1)&&n!==(n=u[4].label+"")&&K(s,n)},i(u){o||(k(r.$$.fragment,u),o=!0)},o(u){E(r.$$.fragment,u),o=!1},d(u){u&&(m(e),m(a)),B(r)}}}function ae(f){let e,r;return e=new ie({props:{href:f[4].to,$$slots:{default:[Ce]},$$scope:{ctx:f}}}),{c(){S(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){O(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=t[4].to),l&2049&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function Ie(f){let e,r,t,l=f[4].name+"",n,s,a;return e=new $e({props:{src:Y(f[4].logo),alt:f[4].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){S(e.$$.fragment),r=I(),t=w("span"),n=L(l),s=I(),this.h()},l(o){T(e.$$.fragment,o),r=D(o),t=j(o,"SPAN",{class:!0});var u=C(t);n=G(u,l),u.forEach(m),s=D(o),this.h()},h(){b(t,"class","text-[0.9em]")},m(o,u){O(e,o,u),y(o,r,u),y(o,t,u),d(t,n),y(o,s,u),a=!0},p(o,u){const c={};u&1&&(c.src=Y(o[4].logo)),u&1&&(c.alt=o[4].name),e.$set(c),(!a||u&1)&&l!==(l=o[4].name+"")&&K(n,l)},i(o){a||(k(e.$$.fragment,o),a=!0)},o(o){E(e.$$.fragment,o),a=!1},d(o){o&&(m(r),m(t),m(s)),B(e,o)}}}function oe(f){let e,r;return e=new ie({props:{classes:"inline-flex flex-row items-center justify-center",href:`${le}/skills/${f[4].slug}`,$$slots:{default:[Ie]},$$scope:{ctx:f}}}),{c(){S(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){O(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=`${le}/skills/${t[4].slug}`),l&2049&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function De(f){let e,r,t,l,n,s=f[0].project.type+"",a,o,u,c,g,V,M,N,A;t=new ge({props:{$$slots:{default:[Ee]},$$scope:{ctx:f}}}),c=new fe({});let P=q(f[0].project.links),h=[];for(let i=0;i<P.length;i+=1)h[i]=ae(se(f,P,i));const W=i=>E(h[i],1,1,()=>{h[i]=null});let z=q(f[0].project.skills),$=[];for(let i=0;i<z.length;i+=1)$[i]=oe(ne(f,z,i));const v=i=>E($[i],1,1,()=>{$[i]=null});return{c(){e=w("div"),r=w("div"),S(t.$$.fragment),l=I(),n=w("p"),a=L(s),o=I(),u=w("div"),S(c.$$.fragment),g=I(),V=w("div");for(let i=0;i<h.length;i+=1)h[i].c();M=I(),N=w("div");for(let i=0;i<$.length;i+=1)$[i].c();this.h()},l(i){e=j(i,"DIV",{class:!0});var p=C(e);r=j(p,"DIV",{class:!0});var x=C(r);T(t.$$.fragment,x),x.forEach(m),l=D(p),n=j(p,"P",{class:!0});var _=C(n);a=G(_,s),_.forEach(m),o=D(p),u=j(p,"DIV",{class:!0});var R=C(u);T(c.$$.fragment,R),R.forEach(m),g=D(p),V=j(p,"DIV",{class:!0});var ee=C(V);for(let U=0;U<h.length;U+=1)h[U].l(ee);ee.forEach(m),M=D(p),N=j(p,"DIV",{class:!0});var te=C(N);for(let U=0;U<$.length;U+=1)$[U].l(te);te.forEach(m),p.forEach(m),this.h()},h(){b(r,"class","text-0.9em"),b(n,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),b(u,"class","w-75%"),b(V,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),b(N,"class","row-center flex-wrap m-b-2"),b(e,"class","col-center p-y-20")},m(i,p){y(i,e,p),d(e,r),O(t,r,null),d(e,l),d(e,n),d(n,a),d(e,o),d(e,u),O(c,u,null),d(e,g),d(e,V);for(let x=0;x<h.length;x+=1)h[x]&&h[x].m(V,null);d(e,M),d(e,N);for(let x=0;x<$.length;x+=1)$[x]&&$[x].m(N,null);A=!0},p(i,p){const x={};if(p&2049&&(x.$$scope={dirty:p,ctx:i}),t.$set(x),(!A||p&1)&&s!==(s=i[0].project.type+"")&&K(a,s),p&1){P=q(i[0].project.links);let _;for(_=0;_<P.length;_+=1){const R=se(i,P,_);h[_]?(h[_].p(R,p),k(h[_],1)):(h[_]=ae(R),h[_].c(),k(h[_],1),h[_].m(V,null))}for(H(),_=P.length;_<h.length;_+=1)W(_);F()}if(p&1){z=q(i[0].project.skills);let _;for(_=0;_<z.length;_+=1){const R=ne(i,z,_);$[_]?($[_].p(R,p),k($[_],1)):($[_]=oe(R),$[_].c(),k($[_],1),$[_].m(N,null))}for(H(),_=z.length;_<$.length;_+=1)v(_);F()}},i(i){if(!A){k(t.$$.fragment,i),k(c.$$.fragment,i);for(let p=0;p<P.length;p+=1)k(h[p]);for(let p=0;p<z.length;p+=1)k($[p]);A=!0}},o(i){E(t.$$.fragment,i),E(c.$$.fragment,i),h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)E(h[p]);$=$.filter(Boolean);for(let p=0;p<$.length;p+=1)E($[p]);A=!1},d(i){i&&m(e),B(t),B(c),X(h,i),X($,i)}}}function Ve(f){let e,r,t,l,n="No description",s;return r=new Q({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),S(r.$$.fragment),t=I(),l=w("p"),l.textContent=n,this.h()},l(a){e=j(a,"DIV",{class:!0});var o=C(e);T(r.$$.fragment,o),t=D(o),l=j(o,"P",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-1ugej71"&&(l.textContent=n),o.forEach(m),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,o){y(a,e,o),O(r,e,null),d(e,t),d(e,l),s=!0},p:J,i(a){s||(k(r.$$.fragment,a),s=!0)},o(a){E(r.$$.fragment,a),s=!1},d(a){a&&m(e),B(r)}}}function Pe(f){let e,r;return e=new be({props:{content:f[0].project.description}}),{c(){S(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){O(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.content=t[0].project.description),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function ye(f){let e,r,t,l,n="No screenshots",s;return r=new Q({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),S(r.$$.fragment),t=I(),l=w("p"),l.textContent=n,this.h()},l(a){e=j(a,"DIV",{class:!0});var o=C(e);T(r.$$.fragment,o),t=D(o),l=j(o,"P",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-s36p3y"&&(l.textContent=n),o.forEach(m),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,o){y(a,e,o),O(r,e,null),d(e,t),d(e,l),s=!0},p:J,i(a){s||(k(r.$$.fragment,a),s=!0)},o(a){E(r.$$.fragment,a),s=!1},d(a){a&&m(e),B(r)}}}function Me(f){let e,r=q(f[2]),t=[];for(let l=0;l<r.length;l+=1)t[l]=ce(re(f,r,l));return{c(){e=w("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=j(l,"DIV",{class:!0});var n=C(e);for(let s=0;s<t.length;s+=1)t[s].l(n);n.forEach(m),this.h()},h(){b(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(l,n){y(l,e,n);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,n){if(n&4){r=q(l[2]);let s;for(s=0;s<r.length;s+=1){const a=re(l,r,s);t[s]?t[s].p(a,n):(t[s]=ce(a),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}},i:J,o:J,d(l){l&&m(e),X(t,l)}}}function ce(f){let e,r,t,l,n,s=f[4].label+"",a,o;return{c(){e=w("div"),r=w("img"),l=I(),n=w("p"),a=L(s),o=I(),this.h()},l(u){e=j(u,"DIV",{class:!0});var c=C(e);r=j(c,"IMG",{class:!0,src:!0,alt:!0}),l=D(c),n=j(c,"P",{class:!0});var g=C(n);a=G(g,s),g.forEach(m),o=D(c),c.forEach(m),this.h()},h(){b(r,"class","aspect-video w-100%"),me(r.src,t=f[4].src)||b(r,"src",t),b(r,"alt",f[4].label),b(n,"class","text-[var(--tertiary-text)] font-300"),b(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(u,c){y(u,e,c),d(e,r),d(e,l),d(e,n),d(n,a),d(e,o)},p:J,d(u){u&&m(e)}}}function Se(f){let e,r,t,l,n,s;e=new ke({props:{title:f[1]}});const a=[xe,je],o=[];function u(c,g){return c[0].project===void 0?0:1}return l=u(f),n=o[l]=a[l](f),{c(){S(e.$$.fragment),r=I(),t=w("div"),n.c(),this.h()},l(c){T(e.$$.fragment,c),r=D(c),t=j(c,"DIV",{class:!0});var g=C(t);n.l(g),g.forEach(m),this.h()},h(){b(t,"class","pb-10 overflow-x-hidden col flex-1")},m(c,g){O(e,c,g),y(c,r,g),y(c,t,g),o[l].m(t,null),s=!0},p(c,[g]){const V={};g&2&&(V.title=c[1]),e.$set(V);let M=l;l=u(c),l===M?o[l].p(c,g):(H(),E(o[M],1,1,()=>{o[M]=null}),F(),n=o[l],n?n.p(c,g):(n=o[l]=a[l](c),n.c()),k(n,1),n.m(t,null))},i(c){s||(k(e.$$.fragment,c),k(n),s=!0)},o(c){E(e.$$.fragment,c),E(n),s=!1},d(c){c&&(m(r),m(t)),B(e,c),o[l].d()}}}function Te(f,e,r){var a;let t,{data:l}=e;const{title:n}=pe,s=((a=l.project)==null?void 0:a.screenshots)??[];return f.$$set=o=>{"data"in o&&r(0,l=o.data)},f.$$.update=()=>{f.$$.dirty&1&&r(1,t=l.project?`${l.project.name} - ${n}`:n)},[l,t,s]}class Fe extends de{constructor(e){super(),he(this,e,Te,Se,_e,{data:0})}}export{Fe as component,Ye as universal};