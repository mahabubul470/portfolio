import{s as he,f as g,a as I,l as W,g as b,h as x,c as V,m as X,d as v,j as d,i as ee,M as m,N as ge,O as be,P as Y,n as xe,Q as ye,R as oe,S as ke,T as Ee,U as we,o as Ne}from"../chunks/scheduler.40310ec6.js";import{S as de,i as pe,b as B,d as H,m as O,a as y,g as ce,c as ie,t as w,e as P}from"../chunks/index.ead5fd47.js";import{U as q,e as ue}from"../chunks/UIcon.3fef0134.js";import{p as je}from"../chunks/stores.ab429391.js";import{t as ve,H as fe,N as Q,a as Ae,o as Ie}from"../chunks/params.240a270a.js";import{b as Z}from"../chunks/paths.c1955edb.js";function me(l,e,n){const t=l.slice();return t[5]=e[n],t}function _e(l){let e,n,t,a,_=l[5].title+"",o,$,i;return n=new q({props:{icon:l[5].icon,classes:"text-1.3em"}}),{c(){e=g("a"),B(n.$$.fragment),t=I(),a=g("span"),o=W(_),$=I(),this.h()},l(r){e=b(r,"A",{href:!0,class:!0});var u=x(e);H(n.$$.fragment,u),t=V(u),a=b(u,"SPAN",{class:!0});var N=x(a);o=X(N,_),N.forEach(v),$=V(u),u.forEach(v),this.h()},h(){d(a,"class","nav-menu-item-label svelte-z8k68j"),d(e,"href",`${Z}${l[5].to}`),d(e,"class","nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j")},m(r,u){ee(r,e,u),O(n,e,null),m(e,t),m(e,a),m(a,o),m(e,$),i=!0},p:xe,i(r){i||(y(n.$$.fragment,r),i=!0)},o(r){w(n.$$.fragment,r),i=!1},d(r){r&&v(e),P(n)}}}function Ve(l){let e,n;return e=new q({props:{icon:"i-carbon-sun"}}),{c(){B(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,a){O(e,t,a),n=!0},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function De(l){let e,n;return e=new q({props:{icon:"i-carbon-moon"}}),{c(){B(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,a){O(e,t,a),n=!0},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Me(l){let e,n,t,a,_,o,$=fe.name+"",i,r,u=fe.lastName+"",N,R,D,F,j,M,S,G,A,k,E,C,J,te;a=new q({props:{icon:"i-carbon-code",classes:"text-2em"}});let T=ue(l[1]),c=[];for(let s=0;s<T.length;s+=1)c[s]=_e(me(l,T,s));const $e=s=>w(c[s],1,1,()=>{c[s]=null});S=new q({props:{icon:"i-carbon-search"}});const ne=[De,Ve],U=[];function re(s,h){return s[0]?0:1}return k=re(l),E=U[k]=ne[k](l),{c(){e=g("div"),n=g("nav"),t=g("a"),B(a.$$.fragment),_=I(),o=g("span"),i=W($),r=I(),N=W(u),R=I(),D=g("div");for(let s=0;s<c.length;s+=1)c[s].c();F=I(),j=g("div"),M=g("a"),B(S.$$.fragment),G=I(),A=g("button"),E.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var h=x(e);n=b(h,"NAV",{class:!0});var p=x(n);t=b(p,"A",{href:!0,class:!0});var f=x(t);H(a.$$.fragment,f),_=V(f),o=b(f,"SPAN",{class:!0});var z=x(o);i=X(z,$),r=V(z),N=X(z,u),z.forEach(v),f.forEach(v),R=V(p),D=b(p,"DIV",{class:!0});var se=x(D);for(let K=0;K<c.length;K+=1)c[K].l(se);se.forEach(v),F=V(p),j=b(p,"DIV",{class:!0});var L=x(j);M=b(L,"A",{href:!0,class:!0});var ae=x(M);H(S.$$.fragment,ae),ae.forEach(v),G=V(L),A=b(L,"BUTTON",{class:!0});var le=x(A);E.l(le),le.forEach(v),L.forEach(v),p.forEach(v),h.forEach(v),this.h()},h(){d(o,"class","ml-2 text-md font-bold hidden md:inline"),d(t,"href",`${Z}/`),d(t,"class","nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"),d(D,"class","flex flex-row flex-1 self-center justify-center"),d(M,"href",`${Z}/search`),d(M,"class","text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]"),d(A,"class","bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"),d(j,"class","flex flex-row self-stretch items-stretch gap-1 text-1.15em"),d(n,"class","container !justify-between flex flex-row items-center text-sm"),d(e,"class","nav-menu svelte-z8k68j")},m(s,h){ee(s,e,h),m(e,n),m(n,t),O(a,t,null),m(t,_),m(t,o),m(o,i),m(o,r),m(o,N),m(n,R),m(n,D);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(D,null);m(n,F),m(n,j),m(j,M),O(S,M,null),m(j,G),m(j,A),U[k].m(A,null),C=!0,J||(te=ge(A,"click",l[3]),J=!0)},p(s,[h]){if(h&2){T=ue(s[1]);let f;for(f=0;f<T.length;f+=1){const z=me(s,T,f);c[f]?(c[f].p(z,h),y(c[f],1)):(c[f]=_e(z),c[f].c(),y(c[f],1),c[f].m(D,null))}for(ce(),f=T.length;f<c.length;f+=1)$e(f);ie()}let p=k;k=re(s),k!==p&&(ce(),w(U[p],1,1,()=>{U[p]=null}),ie(),E=U[k],E||(E=U[k]=ne[k](s),E.c()),y(E,1),E.m(A,null))},i(s){if(!C){y(a.$$.fragment,s);for(let h=0;h<T.length;h+=1)y(c[h]);y(S.$$.fragment,s),y(E),C=!0}},o(s){w(a.$$.fragment,s),c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)w(c[h]);w(S.$$.fragment,s),w(E),C=!1},d(s){s&&v(e),P(a),be(c,s),P(S),U[k].d(),J=!1,te()}}}function Se(l,e,n){let t,a;Y(l,je,$=>n(2,t=$)),Y(l,ve,$=>n(0,a=$));const _=[{title:Q.skills,to:"/skills",icon:"i-carbon-software-resource-cluster"},{title:Q.personal,to:"/projects",icon:"i-carbon-cube"},{title:Q.career,to:"/experience",icon:"i-carbon-development"},{title:Q.resume,to:"/resume",icon:"i-carbon-result"}],o=()=>Ae();return l.$$.update=()=>{l.$$.dirty&4&&t&&t.url.pathname},[a,_,t,o]}class Te extends de{constructor(e){super(),pe(this,e,Se,Me,he,{})}}function Ue(l){let e,n,t,a,_,o;n=new Te({});const $=l[2].default,i=ye($,l,l[1],null);return{c(){e=g("div"),B(n.$$.fragment),t=I(),a=g("div"),i&&i.c(),this.h()},l(r){e=b(r,"DIV",{class:!0});var u=x(e);H(n.$$.fragment,u),t=V(u),a=b(u,"DIV",{class:!0});var N=x(a);i&&i.l(N),N.forEach(v),u.forEach(v),this.h()},h(){d(a,"class","content container svelte-mb6t29"),d(e,"class",_=oe(`body contents ${l[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(r,u){ee(r,e,u),O(n,e,null),m(e,t),m(e,a),i&&i.m(a,null),o=!0},p(r,[u]){i&&i.p&&(!o||u&2)&&ke(i,$,r,r[1],o?we($,r[1],u,null):Ee(r[1]),null),(!o||u&1&&_!==(_=oe(`body contents ${r[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&d(e,"class",_)},i(r){o||(y(n.$$.fragment,r),y(i,r),o=!0)},o(r){w(n.$$.fragment,r),w(i,r),o=!1},d(r){r&&v(e),P(n),i&&i.d(r)}}}function ze(l,e,n){let t;Y(l,ve,o=>n(0,t=o));let{$$slots:a={},$$scope:_}=e;return Ne(()=>Ie()),l.$$set=o=>{"$$scope"in o&&n(1,_=o.$$scope)},[t,_,a]}class Le extends de{constructor(e){super(),pe(this,e,ze,Ue,he,{})}}export{Le as component};