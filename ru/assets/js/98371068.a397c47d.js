"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[3879],{2991:(t,e,A)=>{A.d(e,{Z:()=>B});var a=A(7294),n=A(6010),r=A(3438),s=A(9960),i=A(3919),l=A(5999);const c="cardContainer_fWXF",o="cardTitle_rnsV",m="cardDescription_PWke";function g(t){let{href:e,children:A}=t;return a.createElement(s.Z,{href:e,className:(0,n.Z)("card padding--lg",c)},A)}function u(t){let{href:e,icon:A,title:r,description:s}=t;return a.createElement(g,{href:e},a.createElement("h2",{className:(0,n.Z)("text--truncate",o),title:r},A," ",r),s&&a.createElement("p",{className:(0,n.Z)("text--truncate",m),title:s},s))}function p(t){let{item:e}=t;const A=(0,r.Wl)(e);return A?a.createElement(u,{href:A,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function d(t){let{item:e}=t;const A=(0,i.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(e.docId??void 0);return a.createElement(u,{href:e.href,icon:A,title:e.label,description:e.description??n?.description})}function k(t){let{item:e}=t;switch(e.type){case"link":return a.createElement(d,{item:e});case"category":return a.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f(t){let{className:e}=t;const A=(0,r.jA)();return a.createElement(B,{items:A.items,className:e})}function B(t){const{items:e,className:A}=t;if(!e)return a.createElement(f,t);const s=(0,r.MN)(e);return a.createElement("section",{className:(0,n.Z)("row",A)},s.map(((t,e)=>a.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},a.createElement(k,{item:t})))))}},6315:(t,e,A)=>{A.r(e),A.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=A(7462),n=(A(7294),A(3905)),r=(A(8209),A(2991));const s={sidebar_position:3,label:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b"},i="\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b",l={unversionedId:"personal-account/transfers/transfers",id:"version-1.0.0/personal-account/transfers/transfers",title:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b",description:"\u041c\u0435\u0440\u0447\u0430\u043d\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430\u043c\u0438 \u043a\u0430\u0441\u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u0438\u043b\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430\u043c\u0438 \u043a\u0430\u0441\u0441 \u0438\u0437 \u0440\u0430\u0437\u043d\u044b\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-1.0.0/personal-account/transfers/transfers.md",sourceDirName:"personal-account/transfers",slug:"/personal-account/transfers/",permalink:"/wiki.interkassa/ru/personal-account/transfers/",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/versioned_docs/version-1.0.0/personal-account/transfers/transfers.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3,label:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b"},sidebar:"tutorialSidebar",previous:{title:"\u0412\u043e\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",permalink:"/wiki.interkassa/ru/personal-account/managing-payments/refund"},next:{title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430\u043c\u0438",permalink:"/wiki.interkassa/ru/personal-account/transfers/managing-transfers"}},c={},o=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430:",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u0422\u0430\u043a\u0436\u0435 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c",id:"\u0442\u0430\u043a\u0436\u0435-\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c",level:2}],m={toc:o};function g(t){let{components:e,...s}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b"},"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b"),(0,n.kt)("p",null,"\u041c\u0435\u0440\u0447\u0430\u043d\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430\u043c\u0438 \u043a\u0430\u0441\u0441 ",(0,n.kt)("strong",{parentName:"p"},"\u043e\u0434\u043d\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430")," \u0438\u043b\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430\u043c\u0438 \u043a\u0430\u0441\u0441 \u0438\u0437 ",(0,n.kt)("strong",{parentName:"p"},"\u0440\u0430\u0437\u043d\u044b\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432"),". "),(0,n.kt)("admonition",{title:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u042d\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f ",(0,n.kt)("strong",{parentName:"p"},"\u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430")," \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0427\u0442\u043e\u0431\u044b \u0435\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c - \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0441\u0432\u043e\u0435\u043c\u0443 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u043a\u0430\u0441\u0441\u044b. ")),(0,n.kt)("p",null,"\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u0432 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043f\u043e\u0434 \u043c\u0435\u0440\u0447\u0430\u043d\u0442\u0430 \u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0430 \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442-\u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c.\n\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0434\u0435\u043d\u0435\u0433 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0431\u0435\u0437 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438, \u0442\u043e \u0435\u0441\u0442\u044c \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043e\u0434\u043d\u043e\u0439 \u0432\u0430\u043b\u044e\u0442\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,n.kt)("strong",{parentName:"p"},"UAH \u2192 UAH, USD \u2192 USD")," \u0438 \u0442.\u0434."),(0,n.kt)("h3",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u0428\u0430\u0433 1.")," \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0443 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://portal.interkassa.com/account/operations/transfer"},"'\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b'"))," \u0438\u0437 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u043c\u0435\u043d\u044e.")),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("img",{src:A(841).Z,alt:"\u041d\u043e\u0432\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430 '\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b'"}),(0,n.kt)("p",{class:"img-description"},"\u0412\u043a\u043b\u0430\u0434\u043a\u0430 '\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b'")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u0428\u0430\u0433 2.")," \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 '",(0,n.kt)("strong",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434"),"'.")),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("img",{src:A(1265).Z,alt:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 '\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b'"}),(0,n.kt)("p",{class:"img-description"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 '\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b'")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u0428\u0430\u0433 3.")," \u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u043b\u044f \u0444\u043e\u0440\u043c\u044b. ",(0,n.kt)("strong",{parentName:"li"},"Id \u043a\u0430\u0441\u0441\u044b")," \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \u043c\u043e\u0436\u043d\u043e \u0443\u0437\u043d\u0430\u0442\u044c \u0441\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441 \u043f\u0435\u0440\u0435\u0447\u043d\u0435\u043c \u0432\u0441\u0435\u0445 \u043a\u0430\u0441\u0441 \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c, \u0438\u043b\u0438 \u0441\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0443 \u0430\u0434\u0440\u0435\u0441\u0430\u043d\u0442\u0430, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e\u0442 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430\u043c\u0438. \u0420\u0430\u0441\u0447\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0438 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0437\u0430\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0441\u0440\u0430\u0437\u0443 \u0432 \u043f\u043e\u043b\u0435 ",(0,n.kt)("strong",{parentName:"li"},"\u0441\u0443\u043c\u043c\u0430 \u043a \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044e"),".")),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("img",{src:A(7813).Z,alt:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"}),(0,n.kt)("p",{class:"img-description"},"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u0428\u0430\u0433 4.")," \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 '",(0,n.kt)("strong",{parentName:"p"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434"),"'.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u0428\u0430\u0433 5.")," \u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0421\u041c\u0421 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \u043a\u043e\u0434\u043e\u043c."))),(0,n.kt)("div",{class:"text-center smaller"},(0,n.kt)("img",{src:A(223).Z,alt:"\u0424\u043e\u0440\u043c\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f"}),(0,n.kt)("p",{class:"img-description"},"\u0424\u043e\u0440\u043c\u0430 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u0413\u043e\u0442\u043e\u0432\u043e!"),"  \u0423\u0432\u0438\u0434\u0435\u0442\u044c, \u0447\u0442\u043e \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440 \u0441\u043e\u0441\u0442\u043e\u044f\u043b\u0441\u044f, \u043c\u043e\u0436\u043d\u043e \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://portal.interkassa.com/account/operations/transfer"},"'\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b'"))," \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043c\u0435\u043d\u044e.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/wiki.interkassa/ru/personal-account/export/transfers-export"},"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))," \u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u0430 \u0432 excel \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0441\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://portal.interkassa.com/account/checkout"},"'\u041c\u043e\u0438 \u043a\u0430\u0441\u0441\u044b'")),".")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\u0415\u0441\u0442\u044c \u043b\u0438\u043c\u0438\u0442\u044b \u043d\u0430 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u0432? "),"\u041d\u0435\u0442, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u0432 \u0432 \u0434\u0435\u043d\u044c, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e. \u041b\u0438\u043c\u0438\u0442\u043e\u0432 \u043d\u0430 \u0441\u0443\u043c\u043c\u0443 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u0442\u043e\u0436\u0435 \u043d\u0435\u0442."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u043f\u0435\u0440\u0435\u0432\u043e\u0434?"),"\u042d\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u0430\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b \u0441\u0440\u0430\u0437\u0443 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0435\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0435 ",(0,n.kt)("a",{href:"https://portal.interkassa.com/account/operations/transfer"},(0,n.kt)("b",null,"'\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u044b'")),"."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0432\u043d\u0435\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0443\u0436\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u0432\u0448\u0438\u0439\u0441\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434?"),"\u041d\u0435\u0442, \u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0442\u0430\u043a\u0430\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\u041d\u0443\u0436\u043d\u043e \u043b\u0438 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u0430\u0441\u0441\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e?"),"\u0422\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u0435\u043d, \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432 \u043a\u0430\u0441\u0441\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\u0414\u043b\u044f \u043a\u0430\u043a\u0438\u0445 \u0432\u0430\u043b\u044e\u0442 \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434?"),"\u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 ",(0,n.kt)("a",{href:"/supported-currencies"},(0,n.kt)("b",null,"\u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0430\u043b\u044e\u0442")),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u0432\u0441\u0435 \u0432\u0430\u043b\u044e\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Interkassa. \u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0437 \u043d\u0438\u0445."),(0,n.kt)("h2",{id:"\u0442\u0430\u043a\u0436\u0435-\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c"},"\u0422\u0430\u043a\u0436\u0435 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c"),(0,n.kt)(r.Z,{mdxType:"DocCardList"}))}g.isMDXComponent=!0},841:(t,e,A)=>{A.d(e,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMAAAADTCAMAAABQmZ+CAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAL6UExURfX39t7f3vT29fHz8ihzRyw+UP///z0+RyYnLSeuYOvt7CdxRihyRidwRfaEhCZtQyZuROvs6/gSEoc+UBimVPT19PX3y8TExytzsGxtdOHh4iVqQfj6+eL39iVrQoCAhvz9+zOArdbW2LzFyK2tsZqbn2ax4eKxdSdxRXqMjZmZm/b444fL9rGxs9jY2WprbsiTUCyTy5alpuLi4s7Ozyw/dVdXW/XMlsnKy1VVVafj9qdzUMj39ubn58f5/yw+lhqfUl9ucWU+UNrd3vXksMPDxG215/PbmxCiTayPrfDx8FHLRiOuYP/40ANnL4aHiSktMqamp82hrf//5qng952srSw/V/fhyY3K+ByFSnB/gTSOxuf5+K+7u1BaXjx7WgNxTFbVjHd4e8zT1VHAgYaUljB/vCauqPjKvy9JPvHileHl5sXMz6zp//3tuyo7Nfb30onc8jWg1Kx0SPX47rq7vPD69UpRVSewyyhzmo+hokJITeW0tCfN3QN/VY+nqGx4e6vy/4x/sEbIOmyCtFljZs3498aySNzh4tLV14jq9TdkT7WHVDM+UMDJzMSml9rKR4PG64l0RdTv3NvPOKe0tQqdQy1OYktAUOfq66jG6rru9hp4POL25B+nXPX03Thba+y/hySQQfL/4pLUrkmocyxZlSxAh027RFPJhhGQXdz/9TI1OsqaY9z//4ucnl6BmI5ZUHA/UEakP3NsRm2Om8ft0BVnQHbKmeH3yz6CO6W11oqIdIiuzbrnsc77+9baXPL//2bDjeHNsLXDxoe83bispsrj9fPcuqeorauoWiJIN3JiWZtoUrrZ8avdwZ/jmCfg5a7hy8S2Mk66etC7raafiW+fyWy04M+wdiBdPTWtYmDRVavY54SQThOTvN/Il3XXa5hwmXXY8qipwqRtLwdnj/c9PPgvLixzdWaxsI3ehYm1hXbSa+jczPTv5d+0joipVgOqyYe0sPavryyKi4jcgYeopvL2/39njdzbzxrc5fXf9d728gTx1uoAAB2dSURBVHja7N1/aNP5HcdxdTHfOJWz2Cy2Zm3JWjAdaSEp4mAnZhIsLdIU8Q6za4vawETbrsyamlAaVrKe3GC9Kxa2qWxcZcqVK6yjFI8TdMNThFVE/1H/cdxf2x33x9gYg8He78/n+82PNm2/qd9vmnz7eu4036ZJvavfPvr+fPrtusWx2dpf1BwIbVQ/2AT/jVs2K2A1JgfAEAADYOYARsC8ZXIqYvgoQgAMgBkKmPl6aYYBMATAAJixgAm/9pieIAyAIQAGwIyM/SJfdpucIKymBh9FCIABMCMBY780Zg6YUZowEgwfRQiAWRuwgRenjlCnXgwUCTDh106TUwXDRxECYFYGbGA/8VVZWcmE7S8GYTSASb92mZgqGABDAMzSgD2+xnqpHbn2uEiAmcuXJAyAIQBmccBy/CqOYGIFabpfJJhYQ+KjCAEwywIWtuX4RYLZwsUA7IAAzGZaArADAAwBMEsD9mKJXyTYi2IAJlaQNpupgtEaEoAh/SnBaHw0Hg0qAKxcAAufUgFr5SRgp8wewTTAbAAMlVCxZDCmKEosmIzpJi8SUQoGLNwd8Ua6w1Z5t20oYI81vypf3txRqQpm9i5YUQCzATBU4PwVVFiVMB/ofE4qGk0VDFgs6fV69SMJwFapRgLWemNhfvLp/RtCsCO6r/384DR1+5zDce52D7/c06vrKoxlgPXVjasHJ35mLGC78wIWCgQCTc34kEXZdQcT6lEi2K13AIvHVx3B8gIW9HLBJfc2Bjjf8pO11M/UDQVMriBbb0zbKfeCmMGOnNINWC/hdZMEe1PA7P3idvheMQBrbmo56HD4tnbgYxZlu5KaUY9mUkF9GzCpqN8fTYWNAYzPSnluYgIrDLDWyvtuBsw++WwdgJ3r/eCNAfvmYwHXoPvjIgAWCokbX/mdKsjMIpmxqzuibwCrjUYi0VrFOMAcB1t8AKxgwOQApo1gGwDYw8PH6GbfJxcEYIP0r0IvXz48Qfd9ekw+ZvD4R/SKCZrS7HJe67PbeeXJD564LJ5vU29WB6z5Soc6iDXSLzG3N/KJEwjQGdTc1Nki5/hGOc/zo8RvB1vEgS9zgCxVOAcwPVvs4eBsUlGSs8GwcYCJm46tgUCIz8mhlq0dvswdAGwNwC4ttBYO2M2bb74HdmyEeLKNHP+cAeujY3ZLANZnzwA2QmDtGhynV07IR42M2wZp0TlcEGAdV9Q9hZAvmyefGM2am2hlKXQaanZ0NHUsASwU8GUOkKX8mskBbEaHYIrXnwqHU35vojDAUqsBxqfnow71lONtDgZMvcOAzhySnbHYErJNADZf6BKSN/GZrnyArfyuygMYY0W/hgmw4Uu8o0+i8X0jJ75IA/b5vQl2STzexo+k432fjGfJpQuwRm3pmA2YuJPOHTlZqatLpioHsMamIV/mwMyTAhW7RGQ2C7DZSGLtpyRn/TyB+WeThQEW5hFs2dimAdbUoZ2dB1tCWVsdIWM+ZZ4x/FQthU38HdMs2PWFG4Xvgd1ktPJOYCu+q/IAZhvsZ5OYpRGxkU9HBBjNWoMaYG7hl1g60lTGK0p2Tu76Xz5s5wWlPsCa8kxgPrGU3NohP8/xucRrykAuYHTj82UOzDwpULGLx0ezABuNx9cmL+qn4Svh9fujiYIAE2vIoGPlCUx8mdyn7ocJwEJ5v0C5bsEMPVVLADASbOHp/KJ2GUVBgA300hJyoDffEnKld1U+wGiUUucqsZpUAevrt6UBq/sPb33t+7RfA88mB7X06DV4/G8F7YFdyVogap/m0oB1bPUtm8BoiSkBkwdmnhSo2I2O5gA2OrrmmjMZJ7q6u4mx2WS4AMBmYhECLBKbyQsYnYnNTSF1AvPl3mGUYMaeqiUB2NTLhen7L6fWAZij57a6Eab9vua7Kh9gtr53aTW4ZAn5XzpMA3b857yfL8Six6ujl3ywBGzkhC7Asr8KmVlCqmOZBMwX4n+WAjZEw70ATD0w86RAJQ9YjOTyx71eYswfjekGLKykImIPLJJSwssBS+9nZAOm3VGalcISsrJ3cX5yfvrZeq4DEyNYD2+F9Zz+QNfT8gI2fK/fJne25CY+74nxBn4GsI+G7x0TYo3YeYefHj4yLh6sbuLrnMAc4vOZvA4siye6r3mIjpvk5j2L5stdQvIMLwBTD5CVCnrjWYDFvWtdCRaOCLmSSeHYSl+1XA5YQn4NUmzjJ5YBxoO/PP+yl5DaHQAsP2Ctlfeva5v4hX8VUuIl9vP1+ZUfsMs/HFcBE7tcEzxW8bSVBRjJ1c+XTfSLxx+223kK65ObX3Z+SdcemEPuKKQ/32m/8RYY3TxqEpdV8GOGWtIXWgR8B1vE5a98WqkHyErNxLyZK1KV1NIF3vIBbJbg8kcSiQjfzsb0AhbxZsq52kxciS8XAr5AIJQ9gWl3ALBlXeORa+rZpLyMwr74coo8u2byH1rE74XcXeD3Qq70xeoQvLL+DBZMhGd0f4ci74D5/d7ubi/fxpN6AfNmZ4n320YCFu6Zoiqn61TA2hZa6eUeAAbANl+JYDCWiup9dEoAphVP6QXMem3oBNb19P6OqZeLql/2uunKqd7FLgCGNmFKKhKNGvsmAZjJfTU5OT89ra0g7fbJ6cXJya82L2BoUxdOALDyAmzu6yd3J6+704BtuT7/5Os5vc8+ned/AAwhAFYswMbaX/3jyd356xfdde6L1+fvPnndPjZn8h8KwBAAA2BGdOfW2BgZ9poQu3v3yb9fv2ofG7t1B4AhBMDKALCBO3PtZBYh1v5Kvb11x+wfbgvAEAADYIYU3j93q50TeBFfc6b7BcAQAANgBg5hkjDm69adc+b/ifipRAiAATDjCNOmMOKrGD/sqWg/FxI/2BYBMOsDVuwYsN3iJ3PvMtOvXbyCBGAIgAEwYwF7iwGTgpnYTgCGABgAMwuwnWb7JfbwARgCYADMYMCkYCYatnOnOoABMATAAJiR1YgRTCXMtPhPIMBq8FGEABgAMxiwPYIwc9vDAxgAQwDMVMCQqSnlHv4KEQJgAAwhBMAAGEIIgAEwhBAAQwgBMACGEAJgAAwhBMAAGEIADIAhhAAYAEMIATAAhhACYAghAAbAEEIADIAhhAAYAEMIATCEkJUA8zidzrYGAIYQKkfAXIpSX1ELwBBC5QlYbUU9AEMIlSlgbzcoVdUufpFvqqppWelk01x0K+6urXA6aUxTR7XMxObh9Sc9h2496svidfVOeQc/r7qhgt9edTT9ZgEYQsgwwDweJRcwOnRVVyke+lVbwffXVtc2vL0cMH5AJwFGLFVVe+Qb4icq9R7F5VHkk4eq5J+SfrMADCFkEGBOOTQtA8yjNFTw5n49k0N65QGM7xLP8cg7xcs8zvGzGTCXJ4tJ7c0CMISQwXtgYt0oloPy0KM5JVQixQRgTvEaDTB1nJL20evFq8Uqkd4qUaWimAZMXVcCMISQcYClsXFV12oTGCElZi8JGD1Km8BIuzRgkqMMYNrSkqcw8Tbrl05gb/wFT/wVIgTA8gNWXxHVACODMktIBkkDjF6rKaTeSsB4SKtQLyjj57jUPbFcwMQCE4AhhAwDrKGtPt8Epm7i18tRK88EJja/eBO/rUE+jp9QdahKTF7iOfSGczfxMYEhhAwETN21EjtUFbXpPTBxdb5Hvs4l97baGsQmlyujED+Sn3OoWl5uIZ5ZLy/DcDpJs4Y2ue2V3gN744v+8VeIEAArKJdL29jKW2avXn35aIO2jsSFrAghAAbAEEKm/L9RLAUM30qEECobwPC9kAghAAbAEEIADCEEwAAYQsiwftIpevQFAEMIlVsPO68OcQAMIVRuOf/c+VcsIRFC5ZlewNzuOvsKATCE0Mb0XNfu18p6ATCEUEkDtipfAAwhtEFdfM5fg7x69tJqftntAAyhzdN39m7n3vkwfc/vxR3b9323xP5Nv/98aGjoQWfnZ++t2y8AhpAlAdv+Y22wufjLEgVsG//a9u6Dzt+s2y8AhpA1AfvDb9U7+veWKGAqYw87v3xvvX4BMISsCVh6DamuIEsVsC0/ffDlL/K/Jr1//+sLV/3+rrPfAmAIbQLA3kll1pC8gvzdn0obsP+tOoC5z3ad9J+kf7red1sOMDfOWEu27eiF72W6gHdIYRNYNL2G3Nb/x+3b/7W3dAFzPuz87NKqA9jZqyf/cvT8+aNdJFid1QCrwxlryd6/cv7b6c4DsAIB++eP6LcP0yvIv2cD9s2vmmP/Z+9sQ6M6szh+nTCRyQdhCtPRcEvuTBKFpthqcbVqLOtIiiHJ0knGCZgsQiAGE4Kbta7QGFCCmtCk7WKIqe8p+CFS1y7blbLraqktXbGFVPDlg7bsru1+6m6XhWVZCnvOeZ77NpNJTdToTP4/ydz73PvcO5pJfnPOueeOweDoeX3xT+Y/J6vvcaa5NPNcfNyuF3jXmfV8/8+N518Pbjl1023hSt+4NkRR3vkvsobLgs65/edTE4f5b5D+NEc/vh1tjbWmusZoYFaXp8rHbHM1vvksk/cCK0YIVpB0dRZ1DrQpEiUQ2AwF9vY6nUMGOINc9aUrjsA/j+iaWPDMHb/AXtmYU2Cr+aBVTYax6bf20aO6xnbyjSG9ZUXWcFqBBdKv/rmV2yjeCUwrsOHUFa2t6taRAVdg7xREBAaBFSblJYHEsE4g2zIE1hEjmvE9mkZgS5fZOSQbZ/GHjjh2vWf7xa7zOwI7uS6YS2BPv8+zec+mjc7R7DPD2Pm5s2FF1nD6CKxKGllbc3Xj29niSCqhXWYNp4atQhMYcsjCFNih2rFDCUWpX2DJ9kuWlf4E36PpBCaRUo2hHLLUEUdAQqngqQ/++Cu71cIWWGBZMJfAdnFuOSQXBTZt3PLBlc7v3jyiIzzdZDZ6/mc/YWNlDKcX2I9gx1orU532aluq3Cg0gRXjR7YgBdaVKO3UjPkE1ru1xeQPKMD3aDqBVf2SHttbDF6uWuuI4+Tndih18g1tK1tgdmw1hcDEelwAM4y0qpyJ7V5er3PLUXk3+exi1vChCCwFgYH8E5gHXwq5c3+zuxqLtdMvUS9llD2ckmymFcpr0v085r2x2Nbjm285x1bRetVmOoSTUNmcVEfIIsnnSPevLwiBSe2eAiyOxNpbHHG8ckR5jeCrk1vOHLAFVkVCGz0ypcA+fN9JGI2AqleF+fSr1hoGF/e31OiiVtbwoQhsZOVyO4UsL8AUEgIreIENlLS5O9L9B+wacH+zZfW2r6/6W4tVz1qr2txUv59+z3qbZGxayRrLrNpc4xFYjZHcSr++yUtWup/FtbXF6mjSiw6RYU9hRGDiJ8ohl8mjIw5palXfEMn2SHFaYKeH9MXKbIFdtaM24bsbz7+ki2BrVUT3suP8jKGxzCmIjZ6/M1uBtaVadQh2qHVkeTEEBvJLYG1GJOKp4G+1f/6TPSY7iUzFwViTPMiS0kszyb+l/JAhsN72S7SiD0z3X+J1veDYjrcWhsDET+3HJYN0xeENiV4Iuvue4zK9qvVnCWzLkBO10fuHW6T3nXjqCMsVGJ3m5u7ZCayoNXWlkwOvRGtquBYCA/kmsLFhTwopcZIdTmlJ9cbaL5kSnInAJCN0BRZTaaIc0i8T1cZmLqfpqpo2IumxpUAEpnLIP0kGeR8Ce48M0/z0lAIbPeJmkHI5Mnjq/G9uzFhgdP7ZCYwCr9TIla6uKyMrU20mBAbySmADJbVj3k58Sf2UjZptgZmWVMZ6eyQS27m/x7K8ERglmipsI2/1N8s5aqxGOlzni3bamL75TLKmQIr4RkBuKXpWZYx+gakGLinzU7on+/6zMRjs2T21wBbf5hDszAHbSOKy1R6BnTngm+8OHV/+Q5o3VsxSYOah8pFUKrVyZMTTig+BgbwQWHysrYuiMKcKZiZ7nBTS1RinjLzKApMoyp9C6rCN1js4GOul5JNn6812UFe1+cv9TYUiMNU8P+RplXCK+OomSWm04B4vSRPJO0eNHAI7vi7obZqQflVdxJcN7kePZQzdgE//BWYkMPeuISu8vGt4uCsx4LmZCH1g4ElmwO5iXd6pls6enfs5nEp/QnFUs6R/VX9Q1yZZXCwwjtE6Yj6BORFYjdlLBmNj9ca44kUO7GjSC5rWn/8ZpGuh1apllatXjjh2SkcqtzmottUa3wcg5hDYM9xhMcQTqtbZJ3xfX4UURa2SN5GPb049ZIF1z0Jgvhu3zUjEKrayb4fMEkI8oqhAJz54jDhdrNUliYHy4UTC887MJa72A4bJ7RJkHClo1ZjSn8+lLXJUrCfpq4FJ5V7JzEzSDDrDLa7+806SmV4oJRaMwLSZany1qdND3kZWzvb0NA6wcgnMWCZJ5FFVNwuev/LpNV3EV0aUE77EoVnG0E0heaXHmL3AdCh2qNW5JJlLYFF+XFIKgYHHTEBgmWV8GoVpWZaZtezooYWUtmhsSqOrae+1w3TeYNJcd4acwVQLt0WjIASm7s2W+4kccUSkqd53M5ASmDttKoGdtJPI0/aNSD/XAvPeW7Qia+gr4tOzzUhghpXDYAUlMGSQhU9J28B9zOro8ZT2Z4WkkgUksNVOwcsVR2DXbedmyDNHnfmqzSunwJSXaJLtv9jXtsCMz655BeYf+toobs2wD2zKD2S1Olvb7lNgS0qjlE/GaRTlh3jpkoVR+pKHsjBnmfIYKV0im9WOhRVu+lkhuWi4jE8XidRWSn5KC7U9KlvpkDhtqgzTV23cfSZ8HhiYIfrmotnfY5SM9ZgFJTDJ5972iYgMZqbffP51zvLueCX1w/QCi9zWMdSur68NbTn1SctqR2BG5GPKF4OjP734Q9bQ28j6hTFTgRnWLD5S2iuwCD/ElcAqIh6Bkdt0kCbTPQKrIF+xjURg7C55WJKoLKuuXFi2Rs/lAQuSjufTh8vokLJw1PNM+ERWMDWxR/bnonVRlgXPbv3xNZEZHOPMDWQdGggEjNzDB3pPekCBxbWFSCtl4TUJV2AsoCkF5tnoFRjNF2cRldVlWmAVfJQM4+EK+qNjPfVMEBgAiKofTGBRLRzSSjxeyQKLqJwxMwJTKSGbTZJKyTu9AqOTiLMqa1VKKQN1Ms4s5dKnHOM8EwQGADAfksBIQ5WeCEzKVxFfBEZJoAjMU/x3BVahgrYoV7ucCCzqZIplYaZMBKafCQIDAMz8f+bOFBgnetEErfoERqLKSCFpiy6OTSGwaJSdJUd4UkhRljxZ6avhV0vl3PYzQWAAAG50mb3AKGCSkCrKZXWfwOLxzBqYisAWVnBK+FpGEV8K+PQlRzkppNTYytawv5bQ0epygf1MEBgA4EcVNq3A1pRyaWuhpH4+gbGmMmtgFXqvUwJzBFbBJxGJhSO1rzkRmPRi1FaWhfWFS15xngkCAwBoheV22DRq8KWD+I9tAQBPHBAYAAACg8AAAE+QwPIDvIQAQGAQGAAAAoPAAAAQGAQGAIDAAAAQGAQGAIDAIDAAAAQGgQEAgUFgAAAIDAIDAEBgEBgAAAIDABQ0oXwHLyEAEBgEBgCAwCAwAAAEBoEBACAwAAAEBoEBACAwCAwAAIFBYABAYBAYAAACg8AAABAYBAYAgMAAABAYBAYAgMAepcAWfZvGywkABJaXAlv01FP/xssJAASWjwIjfy3CqwnAfBfYvmLF5bwSGPwFAATGAtvRQHyz4XBfHgkM/gIAAlMC21YXCm3PK4HBXwBAYFkCo3Sy8WooNFj/C7USmlS55SDnmN003nNO79i+objYukyLTSEZbZpLgZG//r7oyQQ/YAA8LoHt6x5v+Gv9XfIVr5CoJhuvNvxr90Ey2u94Wbf3o8vHZEdo+/rri89en9i+QR8ti7kS2FNPLvgBA+AxCWzvu29sq9tz9uCJwcZ7fRRsvbV9w+ULJ2jCBAmsbu+79yb2dR/r46kToT1nr3/12ASGCAwACCxTYJPqcuRh8RVv+eqcbOju4xSy8eoF7al9O/pCpDMlsGJOJedYYKiBAQCBZQms8R5fkGzocwV2WDZs4xRy8Tny1GElsG11g93HdATWQFnnB3MsMBgMAAgsM4XcfX1CNonAOEncsMOzgVLJfd19MnUbJ5d77BRysvEvcy0wGAwACCyziF9/N7T999+HBotfIV91XzgxaR0ke10Wge05R4r76K06Gtztm6QvR2CD9f+dc4HBYABAYH6BSUXr8viJwfqm4uL6X/ep/onu8Qlpo9h0bCK09yPa8f2F/9nd+3JE49Vv5l5gbLAOvJxg3hOYX2QbYVy5Z5wbWce5BMYBF63IZt5AK+NSG+NpxxoaKDLrdrr3Zc+EfZI5wPmXLPo2HQDgYZKP+ooUzSvuxxFS8spJXV1osvvCY+veLwLgERHJO4WRvmpL5hUPLjDhghu1zTElADwiaklheSawopIF84v7ksTcJYQzZwEAj4qSokCeBWC11QvmeREfHykNgGJBdW1+hWAUgL0IgUFgAIjAXsyzECxQFC6FwCAwAERgpeH/t2vuuG0DQQCNiz2BAEEp1HILsyALg4BlQIDgq+Q2AYIcwLdIAhgx0uUC6VzEcOsuR8jszOySUqwiiilLynsFRUuGONrP29khj05gZwgMgQGowM4QGAJDYIDAEBgCQ2CAwBAYAgNAYAgMgQECQ2AIDIEBAkNgCAwAgSEwBAaAwAAAgSEwAEBgCAwAEBgAIDAEBgAIDIEBAAJDYACAwAAAgSEwAEBgCAwAEBgAILDjE9h0Emp56UJo6dhTQXrTmM33c0EZRYn6QBuieuUwGolheYXAxhNYGoAIDIH9o8AOzmAHIbDr1aE1zukJLAYEdlIC0/U+7lNgdZqo1WE2xKtyvkhB2BGBjSOw69XyQQQm5xeXajMZ+LZuYLWjF5h1ZJ2mUNrI6EtKStKJdHcjBzmtUrZSyV/6wd+Kz0eRfF2Wpr42Jf9JQaSx5blanUsX5XVsgWkrtHk/l4Oz4a5/tP5R9fIx6C9UvUfLxfK1NHWYPQY3nO0zUyjaIX1nTCcS6AuuD6cmsNRcjQnMB3ZqM2neBoGdjsBMHbMbF5iJTOWV3qvkY58zXdhFYD79NgTWmta6sokaRLMXgQXXVFdc6gKz3y8hl0jtnRcXWLTOkG9vBwJrvEFi3ut798w3BNaFLLAmILAtAktdaAJ7Ws3m16u3IR21zRDY0QusC7PbbAntVZsd+j9pisgI+KgrWPrnRk22o8DCnxlYq9fRyWuJXY5mnwKz3M9jkjDqHKRefBBpiuvrS8dgDZsFNtR61HfU7xZhmXRFYNYZSWBdQGBbht73iTfbdDJ7Ly11cWcLFBnYSQhMpolZovG5bLOjTwZk+nwKn1c6h2TOxPButy2kGip6ptNvIeV7NYOwqKJOyrrkbHvYQureqyQ4KRYNLq7nQO1YJcP1DKyXpcUTc0ylsdYEZp0hn/9cLB8Q2La1s32TBfYoS/Hs3hdjamAnILDzhStDJmo9yMCaMl1jeFrlu2SNmKztdhOYTtXo5Ye1XEMvm3OxeloysDhIDsdriKQOraFHSwHtJJX8crvYSB9pue5rYINsL+biXLR6c5Kqd89QYN4ZIrC7UDcIbIvAculQBHYru8jKF6jlFRnY8QssTQovaFa2VykZmMyrD5qgpC1k9GEgLzsKTA6WUZzr1/lU9SJraylIl8urepA4v+wnA/Mcp+gjBdpuSGWkLaT8UgnCjsNrSR/8urQtpM01756hwLwz7CknBLZNYLb0qsBuFsEybK3pIrCjF1gMLhEvGxeB5T2c5yeV+sUqxd2uNTDXQfLCc0V8K+TYHtNDGj0DC2Wnqlu220ku1MVhxGMW8fNzYGt3PPMtlJz/VX33NKFPCb0z7PEABLZl6OlodYHNo6+ijdV4EdjRC8yWf815lt/6LaTNoeSt/jGK1pKUnQVW59JatfkYRWd3/NYEtpcaWL47mn6d7Vgra5j0w3+sFfGtRUaIRr9Xm3TjkY1W37nXk9I9Q4F5Z/R3iBEYwGuatbLCT0VbvOlrYM+mbSPmDggMAIEhMAQGCAyBITAEBgAIDAAQGAIDAASGwAAAgSEwAEBgAIDAEBgAIDAEBgAIDAAQGAIDAASGwAAAgSEwAEBgAIDAEBgAIDAEBgAIDAAQGAIDgP9CYL8Brk9ncq2odsAAAAAASUVORK5CYII="},1265:(t,e,A)=>{A.d(e,{Z:()=>a});const a=A.p+"assets/images/2-ru-d8a58fec0d03e253e160b173cfe4e7ec.png"},7813:(t,e,A)=>{A.d(e,{Z:()=>a});const a=A.p+"assets/images/3-ru-762fc1a332c18ed879f5b623ea31729e.png"},223:(t,e,A)=>{A.d(e,{Z:()=>a});const a=A.p+"assets/images/4-a9463939d3b8ec2fb7ea84c05e0534a9.jpg"}}]);