"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[5134],{188:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>m,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=e(7462),r=(e(7294),e(3905));e(1839);const i={unlisted:!0,slug:"/indbanking-in",id:"indbanking-in"},m="Depositing through Indian banking",o={unversionedId:"merchant-instructions/indbanking-in",id:"version-1.0.0/merchant-instructions/indbanking-in",title:"Depositing through Indian banking",description:"Payment method and currency",source:"@site/versioned_docs/version-1.0.0/merchant-instructions/rupeepayment-indbanking-in.md",sourceDirName:"merchant-instructions",slug:"/indbanking-in",permalink:"/wiki.interkassa/indbanking-in",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/versioned_docs/version-1.0.0/merchant-instructions/rupeepayment-indbanking-in.md",tags:[],version:"1.0.0",frontMatter:{unlisted:!0,slug:"/indbanking-in",id:"indbanking-in"}},l={},s=[{value:"Payment method and currency",id:"payment-method-and-currency",level:2},{value:"Required parameters for payment",id:"required-parameters-for-payment",level:2},{value:"Request example",id:"request-example",level:2}],d={toc:s};function k(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"depositing-through-indian-banking"},"Depositing through Indian banking"),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"robots",content:"noindex, nofollow"})),(0,r.kt)("h2",{id:"payment-method-and-currency"},"Payment method and currency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'ik_payment_method="indbanking"\nik_payment_currency="INR"\n')),(0,r.kt)("h2",{id:"required-parameters-for-payment"},"Required parameters for payment"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_customer_phone")),(0,r.kt)("td",{parentName:"tr",align:null},"Payer's phone number"),(0,r.kt)("td",{parentName:"tr",align:null},"911100000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_customer_email")),(0,r.kt)("td",{parentName:"tr",align:null},"Payer's email"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:mail@mail.com"},"mail@mail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_customer_first_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Payer's first  name"),(0,r.kt)("td",{parentName:"tr",align:null},"John")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_customer_last_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Payer's last name"),(0,r.kt)("td",{parentName:"tr",align:null},"Smith")))),(0,r.kt)("h2",{id:"request-example"},"Request example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'https://sci.interkassa.com' \\\n  --form 'ik_act=\"process\"' \\\n  --form 'ik_desc=\"jhtest33\"' \\\n  --form 'ik_int=\"json\"' \\\n  --form 'ik_co_id=\"*****\"' \\\n  --form 'ik_pm_no=\"asdj123\"' \\\n  --form 'ik_am=\"1\"' \\\n  --form 'ik_cur=\"INR\"' \\\n  --form 'ik_payment_method =\"indbanking\"' \\\n  --form 'ik_payment_currency=\"INR\"' \\\n  --form 'ik_customer_phone=\"911100000000\"' \\\n  --form 'ik_customer_email=\"mail@mail.com\"' \\\n  --form 'ik_customer_first_name=\"John\"'\n  --form 'ik_customer_last_name=\"Smith\"'\n")))}k.isMDXComponent=!0}}]);