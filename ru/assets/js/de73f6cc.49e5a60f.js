"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[1850],{7977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));n(8209);const r={sidebar_position:3,label:"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043f\u043e API"},s="\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043f\u043e API",o={unversionedId:"get-started/payment-form-generation/API-payment-form",id:"get-started/payment-form-generation/API-payment-form",title:"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043f\u043e API",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 API \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0433\u0438\u0431\u043a\u0438\u0435 \u0438 \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430. \u0412 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0440\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u2013 \u0447\u0435\u0440\u0435\u0437 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 Interkassa \u0438\u043b\u0438 \u0440\u0435\u0436\u0438\u043c \u043f\u0440\u044f\u043c\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/get-started/payment-form-generation/API-payment-form.md",sourceDirName:"get-started/payment-form-generation",slug:"/get-started/payment-form-generation/API-payment-form",permalink:"/wiki.interkassa/ru/next/get-started/payment-form-generation/API-payment-form",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/docs/get-started/payment-form-generation/API-payment-form.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,label:"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043f\u043e API"},sidebar:"tutorialSidebar",previous:{title:"No code",permalink:"/wiki.interkassa/ru/next/get-started/payment-form-generation/no-code"},next:{title:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 \u043d\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",permalink:"/wiki.interkassa/ru/next/get-started/payment-form-generation/Logo-and-description"}},p={},m=[{value:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 Interkassa",id:"\u043e\u043f\u043b\u0430\u0442\u0430-\u0447\u0435\u0440\u0435\u0437-\u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0443\u044e-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443-interkassa",level:2},{value:"\u0420\u0435\u0436\u0438\u043c \u043f\u0440\u044f\u043c\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b",id:"\u0440\u0435\u0436\u0438\u043c-\u043f\u0440\u044f\u043c\u043e\u0439-\u043e\u043f\u043b\u0430\u0442\u044b",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439 \u043f\u043e API",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u0440\u0438\u0435\u043c\u0430-\u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439-\u043f\u043e-api",level:2},{value:"\u041f\u0440\u0438\u0435\u043c \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439",id:"\u043f\u0440\u0438\u0435\u043c-\u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432-\u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439-\u0444\u043e\u0440\u043c\u044b",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0436\u0438\u043c\u0430 \u043f\u0440\u044f\u043c\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0440\u0435\u0436\u0438\u043c\u0430-\u043f\u0440\u044f\u043c\u043e\u0439-\u043e\u043f\u043b\u0430\u0442\u044b",level:2}],l={toc:m};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f-\u0444\u043e\u0440\u043c\u0430-\u043f\u043e-api"},"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u043f\u043e API"),(0,i.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 API \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0433\u0438\u0431\u043a\u0438\u0435 \u0438 \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430. \u0412 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0440\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u2013 \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("strong",{parentName:"p"},"\u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 Interkassa")," \u0438\u043b\u0438 ",(0,i.kt)("strong",{parentName:"p"},"\u0440\u0435\u0436\u0438\u043c \u043f\u0440\u044f\u043c\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b"),"."),(0,i.kt)("h2",{id:"\u043e\u043f\u043b\u0430\u0442\u0430-\u0447\u0435\u0440\u0435\u0437-\u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0443\u044e-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443-interkassa"},"\u041e\u043f\u043b\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 Interkassa"),(0,i.kt)("p",null,"\u041d\u0430\u0436\u0430\u0432 \u043a\u043d\u043e\u043f\u043a\u0443 \u043e\u043f\u043b\u0430\u0442\u044b, \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 Interkassa \u2013 \u044d\u0442\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u0433\u0434\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044b \u0432\u0441\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u043e\u043f\u043b\u0430\u0442\u044b. \u0412\u044b\u0431\u0438\u0440\u0430\u0435\u0442, \u043a\u0430\u043a \u0435\u043c\u0443 \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443, \u0430 \u0437\u0430\u0442\u0435\u043c \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u0441\u0432\u043e\u0438\u0445 \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u043e\u0432."),(0,i.kt)("h2",{id:"\u0440\u0435\u0436\u0438\u043c-\u043f\u0440\u044f\u043c\u043e\u0439-\u043e\u043f\u043b\u0430\u0442\u044b"},"\u0420\u0435\u0436\u0438\u043c \u043f\u0440\u044f\u043c\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b"),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u044d\u0442\u0430\u043f \u0441 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435\u0439: \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u043a\u043b\u0438\u0435\u043d\u0442 \u0441\u0440\u0430\u0437\u0443 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c \u0445\u043e\u0447\u0435\u0442 \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a Advcash. \u0422\u043e\u0433\u0434\u0430 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0441\u0430\u0439\u0442\u0435 \u043e\u043d \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 '",(0,i.kt)("strong",{parentName:"p"},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 Advcash"),"' \u0438 \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u0444\u043e\u0440\u043c\u043e\u0439 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u043c."),(0,i.kt)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u0440\u0438\u0435\u043c\u0430-\u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439-\u043f\u043e-api"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439 \u043f\u043e API"),(0,i.kt)("p",null,"API \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043c\u0435\u0440\u0447\u0430\u043d\u0442\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0414\u043b\u044f \u0435\u0433\u043e \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 IP-\u0430\u0434\u0440\u0435\u0441 \u0432 \u043f\u043e\u043b\u0435 IP-\u0444\u0438\u043b\u044c\u0442\u0440 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430.  "),(0,i.kt)("div",{class:"text-center"},(0,i.kt)("img",{src:n(650).Z,alt:"IP \u0444\u0456\u043b\u044c\u0442\u0440 \u0432 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f\u0445 \u0430\u043a\u0430\u0443\u043d\u0442\u0443"}),(0,i.kt)("p",{class:"img-description"},"IP \u0444\u0438\u043b\u044c\u0442\u0440 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u0435\u043c-\u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439"},"\u041f\u0440\u0438\u0435\u043c \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0440\u0438\u0435\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439 \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443. \u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u0441 ",(0,i.kt)("strong",{parentName:"p"},"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438")," \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<form name="payment" method="post" action="https://sci.interkassa.com/" accept-charset="UTF-8">\n  <input type="hidden" name="ik_co_id" value="51237daa8f2a2d8413000000"/>\n  <input type="hidden" name="ik_pm_no" value="ID_4233"/>\n  <input type="hidden" name="ik_am" value="1.44"/>\n  <input type="hidden" name="ik_cur" value="uah"/>\n  <input type="hidden" name="ik_desc" value="Payment Description"/>\n  <input type="submit" value="Pay">\n</form>\n')),(0,i.kt)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432-\u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439-\u0444\u043e\u0440\u043c\u044b"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u044b"),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043a \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435, \u0432\u043b\u0438\u044f\u044e\u0449\u0438\u0435 \u043d\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u044b \u043e\u043f\u043b\u0430\u0442\u044b, \u0441\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u0447\u0435\u0442\u0430, \u044f\u0437\u044b\u043a \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u043f\u0440\u043e\u0447\u0435\u0435. \u0417\u0430 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.interkassa.com/#section/3.-Protocol/3.2.-Payment-request-form"},"\u0440\u0430\u0437\u0434\u0435\u043b\u0443 'API'")),"."),(0,i.kt)("h2",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u0440\u0435\u0436\u0438\u043c\u0430-\u043f\u0440\u044f\u043c\u043e\u0439-\u043e\u043f\u043b\u0430\u0442\u044b"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0436\u0438\u043c\u0430 \u043f\u0440\u044f\u043c\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b"),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0440\u0435\u0436\u0438\u043c \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u0440\u0438\u0435\u043c\u0430 \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 Interkassa \u0441 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0430 \u0448\u043b\u044e\u0437 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u043f\u043b\u0430\u0442\u044b. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u0448\u0435\u043c\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0432 \u0444\u043e\u043d\u043e\u0432\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u044b HTML, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0447\u0435\u0440\u0435\u0437 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0439 \u0448\u043b\u044e\u0437."),(0,i.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0440\u0435\u0436\u0438\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 JSON SCI \u0447\u0435\u0440\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0444\u043e\u0440\u043c\u044b \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"ik_int")," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c `",(0,i.kt)("inlineCode",{parentName:"p"},"json'"),"."))}d.isMDXComponent=!0},650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-new-ru-fc53398473c02be8ede9dead9b890505.png"}}]);