"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),o=n(6010),i=n(2802),c=n(9960),a=n(3919),l=n(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",f="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function m(e){let{href:t,icon:n,title:i,description:c}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},n," ",i),c&&r.createElement("p",{className:(0,o.Z)("text--truncate",f),title:c},c))}function d(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:null==o?void 0:o.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const c=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e})))))}},8121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),i=n(2991);const c={sidebar_position:4,label:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u044c"},a="\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u044c",l={unversionedId:"personal_account/configure_notifications/configure_notifications",id:"personal_account/configure_notifications/configure_notifications",title:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u044c",description:"\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0456\u044e \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u044c \u0443 Telegram \u0430\u0431\u043e \u043d\u0430 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443, \u0449\u043e\u0431 \u043e\u0434\u0440\u0430\u0437\u0443 \u0434\u0456\u0437\u043d\u0430\u0432\u0430\u0442\u0438\u0441\u044c \u043f\u0440\u043e \u0437\u0430\u0440\u0430\u0445\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0456\u0432 \u043d\u0430 \u043a\u0430\u0441\u0443, \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043f\u043b\u0430\u0442\u0435\u0436\u0443 \u0442\u0430 \u0431\u0430\u043b\u0430\u043d\u0441\u0438 \u043a\u0430\u0441.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/personal_account/configure_notifications/configure_notifications.md",sourceDirName:"personal_account/configure_notifications",slug:"/personal_account/configure_notifications/",permalink:"/uk/personal_account/configure_notifications/",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/docs/personal_account/configure_notifications/configure_notifications.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,label:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u044c"},sidebar:"tutorialSidebar",previous:{title:"\u0415\u043a\u0441\u043f\u043e\u0440\u0442 \u0434\u0430\u043d\u0438\u0445",permalink:"/uk/personal_account/transfers/export"},next:{title:"Telegram \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f",permalink:"/uk/personal_account/configure_notifications/telegram_notifications"}},s={},u=[],f={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f-\u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u044c"},"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u044c"),(0,o.kt)("p",null,"\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0456\u044e \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u044c \u0443 Telegram \u0430\u0431\u043e \u043d\u0430 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443 \u043f\u043e\u0448\u0442\u0443, \u0449\u043e\u0431 \u043e\u0434\u0440\u0430\u0437\u0443 \u0434\u0456\u0437\u043d\u0430\u0432\u0430\u0442\u0438\u0441\u044c \u043f\u0440\u043e \u0437\u0430\u0440\u0430\u0445\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u043b\u0430\u0442\u0435\u0436\u0456\u0432 \u043d\u0430 \u043a\u0430\u0441\u0443, \u0441\u0442\u0430\u0442\u0443\u0441 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043f\u043b\u0430\u0442\u0435\u0436\u0443 \u0442\u0430 \u0431\u0430\u043b\u0430\u043d\u0441\u0438 \u043a\u0430\u0441."),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);