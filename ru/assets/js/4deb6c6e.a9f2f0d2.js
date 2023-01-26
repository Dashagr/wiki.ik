"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[8173],{7446:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));n(1839);const l={unlisted:!0,slug:"/indwallet-in",id:"indwallet-in"},i="Depositing via INDWALLET",m={unversionedId:"merchant-instructions/indwallet-in",id:"version-1.0.0/merchant-instructions/indwallet-in",title:"Depositing via INDWALLET",description:"Payment method and currency",source:"@site/versioned_docs/version-1.0.0/merchant-instructions/tripplec-indwallet-in.md",sourceDirName:"merchant-instructions",slug:"/indwallet-in",permalink:"/wiki.interkassa/ru/indwallet-in",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/versioned_docs/version-1.0.0/merchant-instructions/tripplec-indwallet-in.md",tags:[],version:"1.0.0",frontMatter:{unlisted:!0,slug:"/indwallet-in",id:"indwallet-in"}},d={},o=[{value:"Payment method and currency",id:"payment-method-and-currency",level:2},{value:"Required parameters",id:"required-parameters",level:2},{value:"Request example",id:"request-example",level:2}],s={toc:o};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"depositing-via-indwallet"},"Depositing via INDWALLET"),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"robots",content:"noindex, nofollow"})),(0,r.kt)("h2",{id:"payment-method-and-currency"},"Payment method and currency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'ik_payment_method="indwallet"\nik_payment_currency="INR"\n')),(0,r.kt)("h2",{id:"required-parameters"},"Required parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_co_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Checkout ID"),(0,r.kt)("td",{parentName:"tr",align:null},"/^","[\\w-]","{1,36}$/D"),(0,r.kt)("td",{parentName:"tr",align:null},"4f269503a1da92c807000002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_pm_no")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment number according to your billing system"),(0,r.kt)("td",{parentName:"tr",align:null},"/^","[\\w-]","{1,64}$/D"),(0,r.kt)("td",{parentName:"tr",align:null},"14533; ID_4233")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_cur")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment currency"),(0,r.kt)("td",{parentName:"tr",align:null},"/^.{3}$/"),(0,r.kt)("td",{parentName:"tr",align:null},"INR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_am")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment amount"),(0,r.kt)("td",{parentName:"tr",align:null},"/^","[\\d]","{1,8}(","[.,][\\d]","{1,2})?$/"),(0,r.kt)("td",{parentName:"tr",align:null},"1.43; 43")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ik_desc")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment description"),(0,r.kt)("td",{parentName:"tr",align:null},"/^.{1,255}$/"),(0,r.kt)("td",{parentName:"tr",align:null},"Thanks for using out service!")))),(0,r.kt)("h2",{id:"request-example"},"Request example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'https://sci.interkassa.com' \\\n--form 'ik_act=\"process\"' \\\n--form 'ik_desc=\"jhtest33\"' \\\n--form 'ik_int=\"json\"' \\\n--form 'ik_co_id=\"*****\"' \\\n--form 'ik_pm_no=\"asdj123\"' \\\n--form 'ik_am=\"1\"' \\\n--form 'ik_cur=\"****\"' \\\n--form 'ik_payment_method=\"indwallet\"' \\\n--form 'ik_payment_currency=\"INR\"' \\\n--form 'ik_customer_email=\"test@mail.com\"' \\\n")))}u.isMDXComponent=!0}}]);