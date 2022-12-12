import{o as T,j as F,k as $,r as I,b as A,d as S,e as t,l as y,v as w,n as f,t as _,m as J,i as h,f as E,w as M,F as q,h as L,a as P,p as z,u as B,q as G,s as R,x as j,y as H,z as K}from"./index.30c4974f.js";const N="/assets/ttl_form.139373a0.png",Q=t("section",{class:"page-head"},[t("h2",{class:"page-head__ttl"},[t("img",{src:N,class:"page-head__ttl--form",alt:"\u304A\u7533\u3057\u8FBC\u307F\u30D5\u30A9\u30FC\u30E0"})])],-1),X={class:"page-form"},Y={class:"page-container"},Z={class:"form-box"},W=t("p",{class:"form-box__confirm"},[h("\u3054\u5165\u529B\u5F8C\u3001\u6B21\u3078\u9032\u3080\u30DC\u30BF\u30F3\u3092"),t("br",{class:"sp"}),h("\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002")],-1),tt={class:"form-list"},et=t("dt",{class:"form-list__head"},[t("p",{class:"form-list__head--ttl"},"\u304A\u540D\u524D(Dear\u306E\u5F8C\u306B\u5165\u308B\uFF1A\u25EF\u25EF\u25EF\u3061\u3083\u3093\u3001\u25EF\u25EF\u25EF\u304F\u3093\u306A\u3069)"),t("p",{class:"form-list__head--note"},"\u203B\u5FC5\u305A\u656C\u79F0\u307E\u3067\u3054\u5165\u529B\u304A\u9858\u3044\u3057\u307E\u3059\uFF1A20\u6587\u5B57\u307E\u3067\u3002")],-1),st={class:"form-list__input"},at={class:"form-list"},ot=t("dt",{class:"form-list__head"},[t("p",{class:"form-list__head--ttl"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9")],-1),nt={class:"form-list__input"},it={class:"form-list",style:{display:"none"}},lt=t("dt",{class:"form-list__head"},[t("p",{class:"form-list__head--ttl"},"\u304A\u624B\u7D19\u306E\u8A00\u8A9E")],-1),rt={class:"form-list__input"},ct=t("option",{value:"JP"},"\u65E5\u672C\u8A9E",-1),dt=[ct],mt={class:"form-list"},_t={class:"form-list__head"},ft=t("p",{class:"form-list__head--ttl"},"\u30A6\u30A9\u30EC\u30C3\u30C8\u30A2\u30C9\u30EC\u30B9",-1),pt={class:"form-list__head--repletion"},ht={class:"form-list__input"},ut={class:"form-list"},gt=L('<dt class="form-list__head"><p class="form-list__head--ttl">\u8FFD\u52A0\u6587\u7AE0(\u4EFB\u610F)</p><p class="form-list__head--repletion">\u203B\u53D7\u3051\u53D6\u308B\u65B9\u3078\u306E\u304A\u597D\u304D\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u304C60\u6587\u5B57\u307E\u3067\u6587\u672B\u306B\u8FFD\u52A0\u3067\u5165\u308C\u3089\u308C\u307E\u3059\u3002</p><p class="form-list__head--repletion">\u203B\u6539\u884C\u3001\u7D75\u6587\u5B57\u3001\u7279\u6B8A\u8A18\u53F7\u306F\u4EE5\u4E0B\u3092\u9664\u304D\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002</p><p class="form-list__head--repletion">\u203B\u5229\u7528\u3067\u304D\u308B\u8A18\u53F7\u30FB\u7D75\u6587\u5B57(\u534A\u89D2\u306E\u307F)\u300C\u266A\u2606\u2605\u2661\uFF01\uFF1F\u25CE\u25CB\u25CF\u25BD\u25BC\u25B3\u25B2\u25A1\u25A0\u25C7\u25C6\u300D</p></dt>',1),vt={class:"form-list__input"},bt={__name:"LetterForm",props:{form:{type:Object,default:()=>({name:"",email:"",lang:"",nftCode:"",additionalArticles:""})}},setup(i){const a=i;T(()=>{const l=document.querySelector("main");l.classList.remove(...l.classList),l.classList.add("page-wrap","howto-bg")});const r={name:{isinvalid:!1,message:""},email:{isinvalid:!1,message:""},lang:{isinvalid:!1,message:""},nftCode:{isinvalid:!1,message:""},additionalArticles:{isinvalid:!1,message:""}},e=F({...r}),u=$("handleChangeComponent"),{handleGetUploadNFTUri:c}=$("api"),d=()=>{let l=!1;e.name.isinvalid=!1,e.email.isinvalid=!1,e.additionalArticles.isinvalid=!1,e.nftCode.isinvalid=!1;let s=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,o=/^0x[0-9a-fA-F]{40}$/;return Object.assign(e,r),a.form.name==""?(l=!0,e.name.isinvalid=!0,e.name.message="\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u3051\u53D6\u308B\u65B9\u306E\u304A\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u4E0B\u3055\u3044\u3002"):a.form.name.length>20&&(l=!0,e.name.isinvalid=!0,e.name.message="20\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),a.form.email==""?(l=!0,e.email.isinvalid=!0,e.email.message="\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"):a.form.email.match(s)||(l=!0,e.email.isinvalid=!0,e.email.message="\u6B63\u3057\u304F\u306A\u3044\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3067\u3059\u3002"),!a.form.additionalArticles==""&&a.form.additionalArticles.length>=61&&(l=!0,e.additionalArticles.isinvalid=!0,e.additionalArticles.message="\u30E1\u30C3\u30BB\u30FC\u30B8\u306F60\u6587\u5B57\u4EE5\u5185\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),a.form.nftCode==""?(l=!0,e.nftCode.isinvalid=!0,e.nftCode.message="\u30A6\u30A9\u30EC\u30C3\u30C8\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"):a.form.nftCode.match(o)||(l=!0,e.nftCode.isinvalid=!0,e.nftCode.message="\u30A6\u30A9\u30EC\u30C3\u30C8\u30A2\u30C9\u30EC\u30B9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002"),l},m=async()=>{if(d())return;await c()&&u("letterFormConfirm")};return(l,s)=>{const o=I("router-link");return A(),S(q,null,[Q,t("section",X,[t("div",Y,[t("form",Z,[W,t("dl",tt,[et,t("dd",st,[y(t("input",{type:"text",class:f({"is-invalid":e.name.isinvalid}),id:"name",placeholder:"\u25EF\u25EF\u25EF\u3061\u3083\u3093",autocomplete:"off","onUpdate:modelValue":s[0]||(s[0]=n=>i.form.name=n)},null,2),[[w,i.form.name]]),t("div",{class:f(e.name.isinvalid===!0?"error-msg":"error-msg is-hidden")},_(e.name.message),3)])]),t("dl",at,[ot,t("dd",nt,[y(t("input",{type:"email",class:f({"is-invalid":e.email.isinvalid}),id:"email",placeholder:"abcd@email.com",autocomplete:"off","onUpdate:modelValue":s[1]||(s[1]=n=>i.form.email=n)},null,2),[[w,i.form.email]]),t("div",{class:f(e.email.isinvalid===!0?"error-msg":"error-msg is-hidden")},_(e.email.message),3)])]),t("dl",it,[lt,t("dd",rt,[y(t("select",{"onUpdate:modelValue":s[2]||(s[2]=n=>i.form.lang=n)},dt,512),[[J,i.form.lang]])])]),t("dl",mt,[t("dt",_t,[ft,t("p",pt,[h(" \u203B\u30A6\u30A9\u30EC\u30C3\u30C8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u65B9\u6CD5\u306F"),E(o,{to:{name:"Howto"}},{default:M(()=>[h("\u3053\u3061\u3089")]),_:1})])]),t("dd",ht,[y(t("input",{type:"text",class:f({"is-invalid":e.nftCode.isinvalid}),id:"nftCode",placeholder:"\u8A18\u5165\u4F8B\uFF1A0xf9els:OF2390fkhbsPc22kld8ruefh",autocomplete:"off","onUpdate:modelValue":s[3]||(s[3]=n=>i.form.nftCode=n)},null,2),[[w,i.form.nftCode]]),t("div",{class:f(e.nftCode.isinvalid===!0?"error-msg":"error-msg is-hidden")},_(e.nftCode.message),3)])]),t("dl",ut,[gt,t("dd",vt,[y(t("textarea",{class:f({"is-invalid":e.additionalArticles.isinvalid}),id:"additionalArticles",placeholder:"\u8A18\u5165\u4F8B\uFF1A\u3059\u3066\u304D\u306A\u30AF\u30EA\u30B9\u30DE\u30B9\u306B\u306A\u308B\u3068\u3044\u3044\u306D\u3002\u307E\u305F\u4F1A\u3048\u308B\u65E5\u306E\u3053\u3068\u3092\u697D\u3057\u307F\u306B\u3057\u3066\u3044\u308B\u3088\u3002",autocomplete:"off","onUpdate:modelValue":s[4]||(s[4]=n=>i.form.additionalArticles=n)},null,2),[[w,i.form.additionalArticles]]),t("div",{class:f(e.additionalArticles.isinvalid===!0?"error-msg":"error-msg is-hidden")},_(e.additionalArticles.message),3)])]),t("div",{class:"form-box__btn"},[t("button",{class:"form-box__btn--submit",type:"button",onClick:m}," \u6B21\u3078\u9032\u3080 ")])])])])],64)}}},yt="/assets/preview.9165a34a.jpg",Ct=t("section",{class:"page-head"},[t("h2",{class:"page-head__ttl"},[t("img",{src:N,class:"page-head__ttl--form",alt:"\u304A\u7533\u3057\u8FBC\u307F\u30D5\u30A9\u30FC\u30E0"})])],-1),xt={class:"page-form"},wt={class:"page-container"},$t={class:"form-box confirm-box"},At=t("p",{class:"form-box__confirm"},[h("\u4EE5\u4E0B\u306E\u5185\u5BB9\u3067"),t("br",{class:"sp"}),h("\u6C7A\u5B9A\u3057\u3066\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F")],-1),Tt={class:"form-list"},kt=t("dt",{class:"form-list__head"},[t("p",{class:"form-list__head--ttl"},"\u304A\u540D\u524D(Dear\u306E\u5F8C\u306B\u5165\u308B\uFF1A\u25EF\u25EF\u25EF\u3061\u3083\u3093\u3001\u25EF\u25EF\u25EF\u304F\u3093\u306A\u3069)"),t("p",{class:"form-list__head--note"},"\u203B\u5FC5\u305A\u656C\u79F0\u307E\u3067\u3054\u5165\u529B\u304A\u9858\u3044\u3057\u307E\u3059\uFF1A20\u6587\u5B57\u307E\u3067\u3002")],-1),Ft={class:"form-list__input"},St={class:"form-list"},Lt=t("dt",{class:"form-list__head"},[t("p",{class:"form-list__head--ttl"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9")],-1),Nt={class:"form-list__input"},Ut={class:"form-list"},Vt=t("dt",{class:"form-list__head"},[t("p",{class:"form-list__head--ttl"},"\u304A\u624B\u7D19\u306E\u8A00\u8A9E")],-1),jt={class:"form-list__input form-list__input--lang"},qt={class:"form-list"},Pt=t("dt",{class:"form-list__head"},[t("p",{class:"form-list__head--ttl"},"\u30A6\u30A9\u30EC\u30C3\u30C8\u30A2\u30C9\u30EC\u30B9")],-1),Bt={class:"form-list__input--small"},Dt={key:0,class:"form-list"},Ot=L('<dt class="form-list__head"><p class="form-list__head--ttl">\u8FFD\u52A0\u6587\u7AE0(\u4EFB\u610F)</p><p class="form-list__head--repletion">\u203B\u53D7\u3051\u53D6\u308B\u65B9\u3078\u306E\u304A\u597D\u304D\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u304C60\u6587\u5B57\u307E\u3067\u6587\u672B\u306B\u8FFD\u52A0\u3067\u5165\u308C\u3089\u308C\u307E\u3059\u3002</p><p class="form-list__head--repletion">\u203B\u6539\u884C\u3001\u7D75\u6587\u5B57\u3001\u7279\u6B8A\u8A18\u53F7\u306F\u4EE5\u4E0B\u3092\u9664\u304D\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002</p><p class="form-list__head--repletion">\u203B\u5229\u7528\u3067\u304D\u308B\u8A18\u53F7\u30FB\u7D75\u6587\u5B57(\u534A\u89D2\u306E\u307F)\u300C\u266A\u2606\u2605\u2661\uFF01\uFF1F\u25CE\u25CB\u25CF\u25BD\u25BC\u25B3\u25B2\u25A1\u25A0\u25C7\u25C6\u300D</p></dt>',1),It={class:"form-list__input--small"},Jt=t("div",{class:"form-box__preview"},[t("div",{id:"canvas-parent",class:"canvas-parent"},[t("canvas",{id:"canvas",height:"821",width:"581"})])],-1),Et=t("p",{class:"preview-note"},"\u203B\u5199\u771F\u306F\u30A4\u30E1\u30FC\u30B8\u3067\u3059\u3002\u5B9F\u969B\u5C4A\u304F\u753B\u50CF\u3068\u6587\u5B57\u306E\u5927\u304D\u3055\u306A\u3069\u9055\u3046\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",-1),Mt={class:"form-box__btn"},zt={__name:"LetterFormConfirm",props:{form:{type:Object,default:()=>({name:"",email:"",lang:"",nftCode:"",additionalArticles:""})}},setup(i){const a=i,r=$("handleChangeComponent"),{uploadPreviewPicToNFTS3:e}=$("api");T(()=>{const c=document.querySelector("main");c.classList.remove(...c.classList),c.classList.add("page-wrap","howto-bg")}),P(()=>{function c(d,m,l){var s=document.getElementById("canvas"),o=s.getContext("2d"),n=new Image;n.src=d,n.onload=function(){o.drawImage(n,0,0),o.lineWidth=1,o.font="bold 24px sans-serif",o.fillText(m,80,100);const k=90,D=480;o.font="14px sans-serif",U(o,l,k,D,25,350);function U(g,p,C,x,V,v){if(v=v||0,v<=0){g.fillText(p,C,x);return}for(let b=1;b<=p.length;b++){const O=p.substr(0,b);if(g.measureText(O).width>v){g.fillText(p.substr(0,b-1),C,x),U(g,p.substr(b-1),C,x+V,V,v);return}}g.fillText(p,C,x)}}}c(yt,a.form.name,a.form.additionalArticles)});const u=async()=>{const d=document.getElementById("canvas").toDataURL("image/png"),m=atob(d.split(",")[1]),l=[];for(let n=0;n<m.length;n++)l.push(m.charCodeAt(n));const s=new Blob([new Uint8Array(l)],{type:"image/png"});await e(s)&&r("thx")};return(c,d)=>(A(),S(q,null,[Ct,t("section",xt,[t("div",wt,[t("form",$t,[At,t("dl",Tt,[kt,t("dd",Ft,_(i.form.name),1)]),t("dl",St,[Lt,t("dd",Nt,_(i.form.email),1)]),t("dl",Ut,[Vt,t("dd",jt,_(i.form.lang=="JP"?"\u65E5\u672C\u8A9E":"\u82F1\u8A9E"),1)]),t("dl",qt,[Pt,t("dd",Bt,_(i.form.nftCode),1)]),i.form.additionalArticles.length>0?(A(),S("dl",Dt,[Ot,t("dd",It,_(i.form.additionalArticles),1)])):z("",!0),Jt,Et,t("div",Mt,[t("button",{class:"form-box__btn--back",type:"button",onClick:d[0]||(d[0]=m=>B(r)("letterForm"))}," \u524D\u3078\u623B\u308B "),t("button",{class:"form-box__btn--submit",type:"button",onClick:u}," \u6C7A\u5B9A\u3059\u308B ")])])])])],64))}},Gt="/assets/thanks_img01.e0f6ff00.png",Rt=L('<section class="page-head"><h2 class="page-head__ttl"><img src="'+N+'" class="page-head__ttl--form" alt="\u304A\u7533\u3057\u8FBC\u307F\u30D5\u30A9\u30FC\u30E0"></h2></section><section class="page-form"><div class="page-container"><div class="thanks-box"><h3 class="thanks-box__ttl">\u304A\u7533\u3057\u8FBC\u307F\u627F\u308A\u307E\u3057\u305F\u3002</h3><p class="thanks-box__txt"> \u3053\u306E\u305F\u3073\u306F\u3001\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u304B\u3089\u306E\u624B\u7D19\uFF08NFT\uFF09\u306E\u304A\u7533\u3057\u8FBC\u307F\u3092\u3044\u305F\u3060\u304D\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002<br> \u304A\u7533\u3057\u8FBC\u307F\u3044\u305F\u3060\u3044\u305F\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u304B\u3089\u306E\u624B\u7D19\uFF08NFT\uFF09\u306F\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u306E\u6545\u90F7\u3001\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u30FB\u65E7\u30E9\u30C3\u30D7\u30E9\u30F3\u30C9\u5DDE\u516C\u8A8D\u306ENFT\u30EC\u30BF\u30FC\u3067\u3059\u3002<br> 12/24\u306B\u3054\u6307\u5B9A\u306E\u30D6\u30ED\u30C3\u30AF\u30C1\u30A7\u30FC\u30F3\u30A2\u30C9\u30EC\u30B9\u306B\u9001\u4FE1\u3044\u305F\u3057\u307E\u3059\u3002 </p><p class="thanks-box__txt">\u3054\u4E0D\u660E\u306A\u70B9\u7B49\u304C\u3054\u3056\u3044\u307E\u3057\u305F\u3089\u3001 <a href="mailto:info@santa-nft.com">info@santa-nft.com</a>\u307E\u3067\u3054\u9060\u616E\u306A\u304F\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002</p><p class="thanks-box__txt">\u305D\u308C\u3067\u306F\u3001\u5F53\u65E5\u307E\u3067\u3001\u3069\u3046\u305E\u697D\u3057\u307F\u306B\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u307E\u305B\u3002</p><div class="thanks-box__img"><img src="'+Gt+'" alt=""></div></div></div></section>',2),Ht={__name:"Thx",setup(i){return T(()=>{const a=document.querySelector("main");a.classList.remove(...a.classList),a.classList.add("page-wrap","howto-bg")}),(a,r)=>Rt}},Qt={__name:"index",setup(i){T(()=>{const s=document.querySelector("main");s.classList.remove(...s.classList),s.classList.add("page-wrap","howto-bg")}),P(()=>{const s="\u304A\u7533\u3057\u8FBC\u307F | \u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u304B\u3089\u306ENFT",o="\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9\u306E\u6545\u90F7\u3001\u30D5\u30A3\u30F3\u30E9\u30F3\u30C9\u30FB\u65E7\u30E9\u30C3\u30D7\u30E9\u30F3\u30C9\u5DDE\u516C\u8A8D\u306ENFT\u30EC\u30BF\u30FC\u3092\u30AF\u30EA\u30B9\u30DE\u30B9\u307E\u3067\u306B\u304A\u5C4A\u3051\u3044\u305F\u3057\u307E\u3059\u3002",n="https://santa-nft.com/application",k="article";document.querySelector("link[rel='canonical']").setAttribute("href",n),document.title=s,document.querySelector("meta[name='description']").setAttribute("content",o),document.querySelector("meta[property='og:title']").setAttribute("content",s),document.querySelector("meta[property='og:description']").setAttribute("content",o),document.querySelector("meta[property='og:type']").setAttribute("content",k),document.querySelector("meta[property='og:url']").setAttribute("content",n)});const a=F({name:"",email:"",lang:"JP",nftCode:"",additionalArticles:""}),r=F({}),e=G("letterForm"),u=R(()=>{switch(e.value){case"letterFormConfirm":return zt;case"thx":return Ht;default:return bt}});j("handleChangeComponent",s=>{e.value=s,document.body.scrollTop=0,document.documentElement.scrollTop=0});const d=async()=>{try{const o=await(await fetch(`https://api.diver-rpc.com/dev/santa_nft/create_presign_upload_url?address=${a.nftCode}`)).json();return Object.assign(r,o),!0}catch(s){return console.error(s),!1}},m=async s=>{try{return(await fetch(`${r.presigned_url}`,{method:"PUT",headers:{"Content-Type":"multipart/form-data"},body:s})).ok?await l():!1}catch(o){return console.error(o),!1}},l=async()=>{let s={address:a.nftCode,s3_key:r.key,email:a.email,name:a.name,language:a.lang};try{const n=await(await fetch("https://api.diver-rpc.com/dev/santa_nft/create",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)})).json();return!0}catch(o){return console.error(o),!1}};return j("api",{handleGetUploadNFTUri:d,uploadPreviewPicToNFTS3:m}),(s,o)=>(A(),H(K(B(u)),{form:a},null,8,["form"]))}};export{Qt as default};
