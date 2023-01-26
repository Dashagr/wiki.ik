"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[7424],{8218:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var a=e(7462),r=(e(7294),e(3905));e(1839);const i={unlisted:!0,slug:"/trbanking-in",id:"trbanking-in"},l="Depositing via TRBANKING",m={unversionedId:"merchant-instructions/trbanking-in",id:"version-1.0.0/merchant-instructions/trbanking-in",title:"Depositing via TRBANKING",description:"Payment method and currency",source:"@site/versioned_docs/version-1.0.0/merchant-instructions/tripplec-trbanking-in.md",sourceDirName:"merchant-instructions",slug:"/trbanking-in",permalink:"/wiki.interkassa/en/trbanking-in",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/versioned_docs/version-1.0.0/merchant-instructions/tripplec-trbanking-in.md",tags:[],version:"1.0.0",frontMatter:{unlisted:!0,slug:"/trbanking-in",id:"trbanking-in"}},o={},s=[{value:"Payment method and currency",id:"payment-method-and-currency",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Request example",id:"request-example",level:2}],d={toc:s};function k(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"depositing-via-trbanking"},"Depositing via TRBANKING"),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"robots",content:"noindex, nofollow"})),(0,r.kt)("h2",{id:"payment-method-and-currency"},"Payment method and currency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'ik_payment_method="trbanking"\nik_payment_currency="TRY"\n')),(0,r.kt)("h2",{id:"required-parameters"},"Required parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_co_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Checkout ID"),(0,r.kt)("td",{parentName:"tr",align:null},"/^","[\\w-]","{1,36}$/D"),(0,r.kt)("td",{parentName:"tr",align:null},"4f269503a1da92c807000002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_pm_no")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment number according to your billing system"),(0,r.kt)("td",{parentName:"tr",align:null},"/^","[\\w-]","{1,64}$/D"),(0,r.kt)("td",{parentName:"tr",align:null},"14533; ID_4233")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_cur")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment currency"),(0,r.kt)("td",{parentName:"tr",align:null},"/^.{3}$/"),(0,r.kt)("td",{parentName:"tr",align:null},"TRY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_am")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment amount"),(0,r.kt)("td",{parentName:"tr",align:null},"/^","[\\d]","{1,8}(","[.,][\\d]","{1,2})?$/"),(0,r.kt)("td",{parentName:"tr",align:null},"1.43; 43")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_desc")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment description"),(0,r.kt)("td",{parentName:"tr",align:null},"/^.{1,255}$/"),(0,r.kt)("td",{parentName:"tr",align:null},"Thanks for using out service!")))),(0,r.kt)("h2",{id:"request-example"},"Request example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'https://sci.interkassa.com' \\\n--form 'ik_act=\"process\"' \\\n--form 'ik_desc=\"jhtest33\"' \\\n--form 'ik_int=\"json\"' \\\n--form 'ik_co_id=\"*****\"' \\\n--form 'ik_pm_no=\"asdj123\"' \\\n--form 'ik_am=\"1\"' \\\n--form 'ik_cur=\"****\"' \\\n--form 'ik_payment_method=\"trbanking\"' \\\n--form 'ik_payment_currency=\"TRY\"' \\\n--form 'ik_customer_email=\"test@mail.com\"' \\\n")))}k.isMDXComponent=!0}}]);