"use strict";(self.webpackChunkinterkassa=self.webpackChunkinterkassa||[]).push([[7451],{4228:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));a(1839);const s={unlisted:!0,slug:"/mastercard-out",id:"mastercard-out"},o="Payout through Mastercard",u={unversionedId:"merchant-instructions/mastercard-out",id:"version-1.0.0/merchant-instructions/mastercard-out",title:"Payout through Mastercard",description:"Required parameters",source:"@site/versioned_docs/version-1.0.0/merchant-instructions/unido-mastercard-out.md",sourceDirName:"merchant-instructions",slug:"/mastercard-out",permalink:"/wiki.interkassa/mastercard-out",draft:!1,editUrl:"mailto://support@interkassa.com?subject=Documentation fix&body=Hello, I would like to suggest a fix to the documentation/versioned_docs/version-1.0.0/merchant-instructions/unido-mastercard-out.md",tags:[],version:"1.0.0",frontMatter:{unlisted:!0,slug:"/mastercard-out",id:"mastercard-out"}},i={},d=[{value:"Required parameters",id:"required-parameters",level:2},{value:"Request example",id:"request-example",level:2}],l={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"payout-through-mastercard"},"Payout through Mastercard"),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"robots",content:"noindex, nofollow"})),(0,n.kt)("h2",{id:"required-parameters"},"Required parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"card")),(0,n.kt)("td",{parentName:"tr",align:null},"Recipient's card number"),(0,n.kt)("td",{parentName:"tr",align:null},"4441 1144 1111 1111")))),(0,n.kt)("h2",{id:"request-example"},"Request example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location -g --request POST 'https://api.interkassa.com/v1/withdraw' \\\n--header 'Authorization: Basic ****' \\\n--form 'amount=\"100\"' \\\n--form 'purseId=\"******\"' \\\n--form 'useShortAlias=\"true\"' \\\n--form 'method=\"mastercard\"' \\\n--form 'currency=\"usd\"' \\\n--form 'action=\"process\"' \\\n--form 'calcKey=\"psPayeeAmount\"' \\\n--form 'details[card]=\"4441114411111111\"' \\\n")))}m.isMDXComponent=!0}}]);