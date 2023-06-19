"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[7740],{7891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));a(8209);const i={sidebar_position:3,label:"API payment form"},r="API payment form",s={unversionedId:"get-started/payment-form-generation/API-payment-form",id:"get-started/payment-form-generation/API-payment-form",title:"API payment form",description:"Using the API allows you to set up flexible and customized payment solutions for your website. In particular, you can choose the payment mode - through the Interkassa payment page or the direct payment mode.",source:"@site/docs/get-started/payment-form-generation/API-payment-form.md",sourceDirName:"get-started/payment-form-generation",slug:"/get-started/payment-form-generation/API-payment-form",permalink:"/wiki.interkassa/en/next/get-started/payment-form-generation/API-payment-form",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/docs/get-started/payment-form-generation/API-payment-form.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,label:"API payment form"},sidebar:"tutorialSidebar",previous:{title:"No code",permalink:"/wiki.interkassa/en/next/get-started/payment-form-generation/no-code"},next:{title:"Marketplace's logo and description",permalink:"/wiki.interkassa/en/next/get-started/payment-form-generation/Logo-and-description"}},m={},p=[{value:"Payment through the Interkassa payment page",id:"payment-through-the-interkassa-payment-page",level:3},{value:"Direct payment mode",id:"direct-payment-mode",level:3},{value:"Setting up API payment acceptance",id:"setting-up-api-payment-acceptance",level:2},{value:"Acceptance of payments",id:"acceptance-of-payments",level:2},{value:"Setting the parameters of the payment form",id:"setting-the-parameters-of-the-payment-form",level:2},{value:"Using the direct payment mode",id:"using-the-direct-payment-mode",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-payment-form"},"API payment form"),(0,o.kt)("p",null,"Using the API allows you to set up flexible and customized payment solutions for your website. In particular, you can choose the payment mode - ",(0,o.kt)("strong",{parentName:"p"},"through the Interkassa payment page")," or ",(0,o.kt)("strong",{parentName:"p"},"the direct payment mode"),"."),(0,o.kt)("h3",{id:"payment-through-the-interkassa-payment-page"},"Payment through the Interkassa payment page"),(0,o.kt)("p",null,"In this mode, after clicking the payment button, the buyer first gets to the Interkassa payment page. Here, he chooses a convenient payment method, and then proceed to the page of the corresponding payment system to enter their details."),(0,o.kt)("h3",{id:"direct-payment-mode"},"Direct payment mode"),(0,o.kt)("p",null,'In this mode, the buyer skips the stage with the payment page. Instead, he immediately goes to the payment page of the payment system after choosing a payment method on your website. For example, the buyer wants to pay through the Advcash electronic wallet. Then on your site, he selects "',(0,o.kt)("strong",{parentName:"p"},"Pay via Advcash"),'" and immediately gets to a page with a form for paying with a wallet.'),(0,o.kt)("h2",{id:"setting-up-api-payment-acceptance"},"Setting up API payment acceptance"),(0,o.kt)("p",null,"The API is available to all merchants by default. To activate it, add IP addresses to the IP filter field in the account settings."),(0,o.kt)("div",{class:"text-center"},(0,o.kt)("img",{src:a(6541).Z,alt:"IP filter in account settings"}),(0,o.kt)("p",{class:"img-description"},"IP filter in account settings")),(0,o.kt)("h2",{id:"acceptance-of-payments"},"Acceptance of payments"),(0,o.kt)("p",null,"To start accepting payments, simply copy the payment form. The standard form with ",(0,o.kt)("strong",{parentName:"p"},"mandatory parameters")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'<form name="payment" method="post" action="https://sci.interkassa.com/" accept-charset="UTF-8">\n    <input type="hidden" name="ik_co_id" value="51237daa8f2a2d8413000000"/>\n    <input type="hidden" name="ik_pm_no" value="ID_4233"/>\n    <input type="hidden" name="ik_am" value="1.44"/>\n    <input type="hidden" name="ik_cur" value="UAH"/>\n    <input type="hidden" name="ik_desc" value="Payment Description"/>\n    <input type="submit" value="Pay">\n</form>\n')),(0,o.kt)("h2",{id:"setting-the-parameters-of-the-payment-form"},"Setting the parameters of the payment form"),(0,o.kt)("p",null,"You can add additional parameters to the payment form, which affect the available payment methods, the invoice validity period,, the language of the payment page, etc. You can find a complete list of payment form parameters in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.interkassa.com/#section/3.-Protocol/3.2.-Payment-request-form"},"API section")),"."),(0,o.kt)("h2",{id:"using-the-direct-payment-mode"},"Using the direct payment mode"),(0,o.kt)("p",null,"The direct payment mode is used for receiving payments through Interkassa with the redirection of a client upon payment directly to the gateway of a selected payment system. This allows your server to receive HTML form data intended for payment through the selected payment gateway in the background."),(0,o.kt)("p",null,"To use this mode, use the JSON SCI interface through the payment request form parameter - ",(0,o.kt)("inlineCode",{parentName:"p"},"ik_int")," with the value ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),"."))}c.isMDXComponent=!0},6541:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-new-f879defdc05506fddcb87e6787d995c3.png"}}]);