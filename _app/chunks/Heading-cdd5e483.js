import{S as e,i as t,s as i,e as l,t as n,c as a,a as s,g as r,d as c,b as o,f as u,H as d,U as h,K as m,Y as f,P as p,G as v,a1 as g,B as w,r as $,u as z,v as x,a2 as D,Q as E,R as b}from"./vendor-3f2a1874.js";import"./timeline.module-55415b74.js";function k(e){let t,i;return{c(){t=l("time"),i=n(e[0]),this.h()},l(l){t=a(l,"TIME",{datetime:!0,class:!0});var n=s(t);i=r(n,e[0]),n.forEach(c),this.h()},h(){o(t,"datetime",e[0]),o(t,"class","svelte-gd9sbs")},m(e,l){u(e,t,l),d(t,i)},p:h,i:h,o:h,d(e){e&&c(t)}}}function y(e=new Date,t,i){return new Intl.DateTimeFormat(t,null!=i?i:{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1}).format(new Date(e))}function T(e,t,i){let l;m(e,f,(e=>i(4,l=e)));let{date:n=new Date}=t,{options:a}=t,{relative:s=!1}=t,r=s?function(e=new Date,t){const i=Date.now()-new Date(e).getTime(),l=new Intl.RelativeTimeFormat(t);for(let n=1;n<23;n++)if(i<3600*n*1e3)return l.format(-1*n,"hour");for(let n=1;n<4;n++)if(i<24*n*3600*1e3)return l.format(-1*n,"day");return i<6048e5?l.format(-1,"week"):y(e,t)}(n,l):y(n,l,a);return e.$$set=e=>{"date"in e&&i(1,n=e.date),"options"in e&&i(2,a=e.options),"relative"in e&&i(3,s=e.relative)},[r,n,a,s]}class C extends e{constructor(e){super(),t(this,e,T,k,i,{date:1,options:2,relative:3})}}function H(e){let t;const i=e[11].default,l=E(i,e,e[10],null);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,i){l&&l.m(e,i),t=!0},p(e,n){l&&l.p&&(!t||1024&n)&&b(l,i,e,e[10],n,null,null)},i(e){t||(x(l,e),t=!0)},o(e){$(l,e),t=!1},d(e){l&&l.d(e)}}}function I(e){let t,i;const n=e[11].default,r=E(n,e,e[10],null);return{c(){t=l("a"),r&&r.c(),this.h()},l(e){t=a(e,"A",{href:!0,class:!0});var i=s(t);r&&r.l(i),i.forEach(c),this.h()},h(){o(t,"href",e[9]),o(t,"class","svelte-1lzik0d")},m(e,l){u(e,t,l),r&&r.m(t,null),i=!0},p(e,l){r&&r.p&&(!i||1024&l)&&b(r,n,e,e[10],l,null,null),(!i||512&l)&&o(t,"href",e[9])},i(e){i||(x(r,e),i=!0)},o(e){$(r,e),i=!1},d(e){e&&c(t),r&&r.d(e)}}}function j(e){let t,i,n,r,d,h,m,f;const E=[I,H],b=[];function k(e,t){return e[9]?0:1}return i=k(e),n=b[i]=E[i](e),{c(){t=l("h2"),n.c(),this.h()},l(e){t=a(e,"H2",{id:!0,class:!0,style:!0});var i=s(t);n.l(i),i.forEach(c),this.h()},h(){o(t,"id",e[0]),o(t,"class",r="header align-"+e[4]+" svelte-1lzik0d"),p(t,"--weight",e[2]),p(t,"--size","var(--font-size-"+e[3]+")"),p(t,"--maxlines",e[5]),v(t,"accent",e[7]),v(t,"decorated",e[8]),v(t,"align",e[4]),v(t,"line-clamp",e[5]),v(t,"ellipsis",e[6])},m(l,n){u(l,t,n),b[i].m(t,null),h=!0,m||(f=g(d=A.call(null,t,e[1])),m=!0)},p(e,[l]){let a=i;i=k(e),i===a?b[i].p(e,l):(w(),$(b[a],1,1,(()=>{b[a]=null})),z(),n=b[i],n?n.p(e,l):(n=b[i]=E[i](e),n.c()),x(n,1),n.m(t,null)),(!h||1&l)&&o(t,"id",e[0]),(!h||16&l&&r!==(r="header align-"+e[4]+" svelte-1lzik0d"))&&o(t,"class",r),(!h||4&l)&&p(t,"--weight",e[2]),(!h||8&l)&&p(t,"--size","var(--font-size-"+e[3]+")"),(!h||32&l)&&p(t,"--maxlines",e[5]),d&&D(d.update)&&2&l&&d.update.call(null,e[1]),144&l&&v(t,"accent",e[7]),272&l&&v(t,"decorated",e[8]),16&l&&v(t,"align",e[4]),48&l&&v(t,"line-clamp",e[5]),80&l&&v(t,"ellipsis",e[6])},i(e){h||(x(n),h=!0)},o(e){$(n),h=!1},d(e){e&&c(t),b[i].d(),m=!1,f()}}}function A(e,t){if(!t)return;let i=document.createElement(`h${t}`);for([...e.attributes].forEach((e=>{i.setAttribute(e.nodeName,e.nodeValue)})),e.replaceWith(i);e.firstChild;)i.appendChild(e.firstChild);e=i}function F(e,t,i){let{$$slots:l={},$$scope:n}=t,{id:a}=t,{level:s}=t,{weight:r=700}=t,{size:c=5}=t,{alignment:o="left"}=t,{maxlines:u}=t,{ellipsis:d=!1}=t,{accent:h=!1}=t,{decorated:m=!1}=t,{href:f}=t;return e.$$set=e=>{"id"in e&&i(0,a=e.id),"level"in e&&i(1,s=e.level),"weight"in e&&i(2,r=e.weight),"size"in e&&i(3,c=e.size),"alignment"in e&&i(4,o=e.alignment),"maxlines"in e&&i(5,u=e.maxlines),"ellipsis"in e&&i(6,d=e.ellipsis),"accent"in e&&i(7,h=e.accent),"decorated"in e&&i(8,m=e.decorated),"href"in e&&i(9,f=e.href),"$$scope"in e&&i(10,n=e.$$scope)},[a,s,r,c,o,u,d,h,m,f,n,l]}class R extends e{constructor(e){super(),t(this,e,F,j,i,{id:0,level:1,weight:2,size:3,alignment:4,maxlines:5,ellipsis:6,accent:7,decorated:8,href:9})}}export{C as D,R as H};