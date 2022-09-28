"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(n),u=r,g=l["".concat(p,".").concat(u)]||l[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,label:"Widget"},i="Widget",s={unversionedId:"get_started/payment_form_generation/widget",id:"get_started/payment_form_generation/widget",title:"Widget",description:"To direct a payer from your website to the payment page, you can place a widget in the HTML code of a page right next to a product or service. A widget is an HTML form that uses GET method. So when the 'Pay' button is clicked, a payer will be directed to the Interkassa payment page.",source:"@site/docs/get_started/payment_form_generation/widget.md",sourceDirName:"get_started/payment_form_generation",slug:"/get_started/payment_form_generation/widget",permalink:"/get_started/payment_form_generation/widget",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/docs/get_started/payment_form_generation/widget.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,label:"Widget"},sidebar:"tutorialSidebar",previous:{title:"No code",permalink:"/get_started/payment_form_generation/no_code"},next:{title:"API payment form",permalink:"/get_started/payment_form_generation/API_payment_form"}},p={},c=[{value:"<strong>Step 1.</strong> Find the checkout and go to payment the form generation page",id:"step-1-find-the-checkout-and-go-to-payment-the-form-generation-page",level:3},{value:"<strong>Step 2.</strong> Fill the required fields",id:"step-2-fill-the-required-fields",level:3},{value:"<strong>Step 3.</strong>  Create a payment form",id:"step-3--create-a-payment-form",level:3}],m={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"widget"},"Widget"),(0,r.kt)("p",null,"To direct a payer ",(0,r.kt)("em",{parentName:"p"},"from your website")," to the payment page, you can place a widget in the HTML code of a page right next to a product or service. A widget is an HTML form that uses GET method. So when the 'Pay' button is clicked, a payer will be directed to the Interkassa payment page.\nYou can generate the HTML code of a widget in your account in a few steps."),(0,r.kt)("h3",{id:"step-1-find-the-checkout-and-go-to-payment-the-form-generation-page"},(0,r.kt)("strong",{parentName:"h3"},"Step 1.")," Find the checkout and go to payment the form generation page"),(0,r.kt)("p",null,"In your account, go to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://portal.interkassa.com/account/checkout/"},"'My checkouts'"))," page. Select the checkout for which you need to generate a payment form and click the 'Generate payment form' icon."),(0,r.kt)("div",{class:"text-center"},(0,r.kt)("img",{src:n(6170).Z,alt:"\\'Generate payment form\\' icon"}),(0,r.kt)("p",{class:"img-description"},"'Generate payment form' icon")),(0,r.kt)("h3",{id:"step-2-fill-the-required-fields"},(0,r.kt)("strong",{parentName:"h3"},"Step 2.")," Fill the required fields"),(0,r.kt)("p",null,"Fill in all fields on the payment form creation page: enter the payment number, according to your accounting system (if you have one), the amount, and add a description of the payment (optional). "),(0,r.kt)("div",{class:"text-center smaller"},(0,r.kt)("img",{src:n(8807).Z,alt:"Creating a form for payments"}),(0,r.kt)("p",{class:"img-description"},"Creating a form for payments")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Also, you have an opportunity for broader customization of the payment form. Click on the 'Full form' checkbox, where you can configure advanced parameters for the payment page. For example, if you\u2019re using API, you can send an additional value in the callback after payment is made for custom business logic on your side.")),(0,r.kt)("h3",{id:"step-3--create-a-payment-form"},(0,r.kt)("strong",{parentName:"h3"},"Step 3."),"  Create a payment form"),(0,r.kt)("p",null,"After all the data is filled in, click on the 'Create Form' button."),(0,r.kt)("div",{class:"text-center"},(0,r.kt)("img",{src:n(4839).Z,alt:"Generated payment widget"}),(0,r.kt)("p",{class:"img-description"},"Generated payment widget")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations!")," The widget has been created. "),(0,r.kt)("p",null,"The form uses the GET method, which will redirect a payer to an Interkassa payment page after clicking a 'Pay' button. The value inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<input>")," tag is responsible for the text that is displayed on the button (by default, the value 'Pay' is displayed). After embedding a widget in a website, you can customize it on your side with your website style sheets.\nYou can also add a logo and a short description of your market to the payment page. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/get_started/payment_form_generation/Logo_and_description"},"Detailed instructions are available here")),"."),(0,r.kt)("p",null,"Issued invoices have different statuses from the moment of creation to the moment of payment. You can track your invoice status on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://portal.interkassa.com/account/checkout"},"'Accepted Payments'"))," page. For more information on tracking payments, see the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/personal_account/managing_payments"},"'Managing Payments'"))," section."))}d.isMDXComponent=!0},6170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-3be89881b69722cf016935f311e45424.png"},8807:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-23f0ab56fc2cc989085e29a7101f38e2.png"},4839:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-586e08168decef7dad66c32d6b1277fd.png"}}]);