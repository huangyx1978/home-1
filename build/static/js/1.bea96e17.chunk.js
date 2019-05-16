(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{204:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(10),a=i(50);i(90);const r={_:{a:"d"}},o={_:{a:"d"}},c=i(91);function l(){return s.nav.loginTop(n.createElement("div",{className:"d-flex align-items-center"},n.createElement("img",{className:"App-logo h-3c position-absolute",src:c}),n.createElement("div",{className:"h3 flex-fill text-center"},n.createElement("span",{className:"text-primary mr-3"},"\u540c"),n.createElement("span",{className:"text-danger"},"\u82b1"))))}const u=[{type:"mobile",caption:"\u624b\u673a\u53f7",regex:s.mobileRegex},{type:"email",caption:"\u90ae\u7bb1",regex:s.emailRegex}];function m(e){return u.find(t=>!0===t.regex.test(e))}var h=function(e,t,i,n){return new(i||(i=Promise))(function(s,a){function r(e){try{c(n.next(e))}catch(t){a(t)}}function o(e){try{c(n.throw(e))}catch(t){a(t)}}function c(e){e.done?s(e.value):new i(function(t){t(e.value)}).then(r,o)}c((n=n.apply(e,t||[])).next())})};class d extends s.Controller{constructor(){super(...arguments),this.accountPageCaption="\u8d26\u53f7\u5bc6\u7801",this.accountLabel="\u6ce8\u518c\u8d26\u53f7",this.accountSubmitCaption="\u6ce8\u518c\u65b0\u8d26\u53f7",this.passwordPageCaption="\u8d26\u53f7\u5bc6\u7801",this.passwordSubmitCaption="\u6ce8\u518c\u65b0\u8d26\u53f7",this.successText="\u6ce8\u518c\u6210\u529f"}internalStart(){return h(this,void 0,void 0,function*(){this.openVPage(g)})}toVerify(e){this.account=e,this.openVPage(b)}toPassword(){this.openVPage(v)}toSuccess(){this.openVPage(f)}login(){a.a.login({user:this.account,pwd:this.password,guest:s.nav.guest}).then(e=>h(this,void 0,void 0,function*(){void 0!==e?yield s.nav.logined(e):alert("something wrong!")}))}regReturn(e){let t;switch(e){default:throw"unknown return";case 0:return;case 1:t="\u7528\u6237\u540d "+this.account;break;case 2:t="\u624b\u673a\u53f7 +"+this.account;break;case 3:t="\u90ae\u7bb1 "+this.account}return t+" \u5df2\u7ecf\u88ab\u6ce8\u518c\u8fc7\u4e86"}checkAccount(){return h(this,void 0,void 0,function*(){let e=yield a.a.isExists(this.account),t=this.accountError(e);if(void 0!==t)return t;e=yield a.a.setVerify(this.account,this.type),this.toVerify(this.account)})}accountError(e){if(e>0)return"\u5df2\u7ecf\u88ab\u6ce8\u518c\u4f7f\u7528\u4e86"}execute(){return h(this,void 0,void 0,function*(){let e={nick:void 0,user:this.account,pwd:this.password,country:void 0,mobile:void 0,email:void 0,verify:this.verify};switch(this.type){case"mobile":e.mobile=this.account;break;case"email":e.email=this.account}let t=yield a.a.register(e);return 0===t?(s.nav.clear(),void this.toSuccess()):this.regReturn(t)})}}class p extends d{constructor(){super(...arguments),this.accountPageCaption="\u5bc6\u7801\u627e\u56de",this.accountLabel="\u8d26\u53f7",this.accountSubmitCaption="\u6ce8\u518c\u65b0\u8d26\u53f7",this.passwordPageCaption="\u91cd\u7f6e\u5bc6\u7801",this.passwordSubmitCaption="\u63d0\u4ea4",this.successText="\u6210\u529f\u4fee\u6539\u5bc6\u7801"}execute(){return h(this,void 0,void 0,function*(){yield a.a.resetPassword(this.account,this.password,this.verify,this.type);s.nav.clear(),this.toSuccess()})}accountError(e){if(0===e)return"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8d26\u53f7"}}class g extends s.VPage{constructor(){super(...arguments),this.schema=[{name:"user",type:"string",required:!0,maxLength:100},{name:"verify",type:"submit"}],this.res=Object(s.resLang)(o),this.page=(()=>n.createElement(s.Page,{header:this.controller.accountPageCaption},n.createElement("div",{className:"w-max-20c my-5 py-5",style:{marginLeft:"auto",marginRight:"auto"}},l(),n.createElement("div",{className:"h-3c"}),n.createElement(s.Form,{schema:this.schema,uiSchema:this.uiSchema,onButtonClick:this.onSubmit,onEnter:this.onEnter,requiredFlag:!1})))),this.onSubmit=((e,t)=>h(this,void 0,void 0,function*(){t.clearContextErrors();let e=t.getValue("user"),i=m(e);if(void 0===i)return void t.setError("user","\u5fc5\u987b\u662f\u624b\u673a\u53f7\u6216\u90ae\u7bb1");let n=i.type;if("mobile"===n&&(11!==e.length||"1"!==e[0]))return void t.setError("user","\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7");this.controller.account=e,this.controller.type=n;let s=yield this.controller.checkAccount();void 0!==s&&t.setError("user",s)})),this.onEnter=((e,t)=>h(this,void 0,void 0,function*(){if("user"===e)return yield this.onSubmit("verify",t)}))}open(){return h(this,void 0,void 0,function*(){this.uiSchema={items:{user:{widget:"text",label:this.controller.accountLabel,placeholder:"\u624b\u673a\u53f7\u6216\u90ae\u7bb1"},verify:{widget:"button",className:"btn btn-primary btn-block mt-3",label:"\u53d1\u9001\u9a8c\u8bc1\u7801"}}},this.openPage(this.page)})}}class b extends s.VPage{constructor(){super(...arguments),this.schema=[{name:"verify",type:"number",required:!0,maxLength:6},{name:"submit",type:"submit"}],this.onVerifyChanged=((e,t,i)=>{e.setDisabled("submit",!t||6!=t.length)}),this.uiSchema={items:{verify:{widget:"text",label:"\u9a8c\u8bc1\u7801",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChanged:this.onVerifyChanged},submit:{widget:"button",className:"btn btn-primary btn-block mt-3",label:"\u4e0b\u4e00\u6b65 >",disabled:!0}}},this.onSubmit=((e,t)=>h(this,void 0,void 0,function*(){let e=this.controller.verify=t.getValue("verify");0!==(yield a.a.checkVerify(this.controller.account,e))?this.controller.toPassword():t.setError("verify","\u9a8c\u8bc1\u7801\u9519\u8bef")})),this.onEnter=((e,t)=>h(this,void 0,void 0,function*(){if("verify"===e)return yield this.onSubmit("submit",t)})),this.page=(()=>{let e,t;switch(this.controller.type){case"mobile":e="\u624b\u673a\u53f7";break;case"email":e="\u90ae\u7bb1",t=n.createElement(n.Fragment,null,n.createElement("span",{className:"text-danger"},"\u6ce8\u610f"),": \u6709\u53ef\u80fd\u8bef\u4e3a\u5783\u573e\u90ae\u4ef6\uff0c\u8bf7\u68c0\u67e5",n.createElement("br",null))}return n.createElement(s.Page,{header:"\u9a8c\u8bc1\u7801"},n.createElement("div",{className:"w-max-20c my-5 py-5",style:{marginLeft:"auto",marginRight:"auto"}},"\u9a8c\u8bc1\u7801\u5df2\u7ecf\u53d1\u9001\u5230",e,n.createElement("br",null),n.createElement("div",{className:"py-2 px-3 my-2 text-primary bg-light"},n.createElement("b",null,this.controller.account)),t,n.createElement("div",{className:"h-1c"}),n.createElement(s.Form,{schema:this.schema,uiSchema:this.uiSchema,onButtonClick:this.onSubmit,onEnter:this.onEnter,requiredFlag:!1})))})}open(){return h(this,void 0,void 0,function*(){this.openPage(this.page)})}}class v extends s.VPage{constructor(){super(...arguments),this.schema=[{name:"pwd",type:"string",required:!0,maxLength:100},{name:"rePwd",type:"string",required:!0,maxLength:100},{name:"submit",type:"submit"}],this.onSubmit=((e,t)=>h(this,void 0,void 0,function*(){let e=t.form.data,{pwd:i,rePwd:n}=e;return i&&i===n?(this.controller.password=i,yield this.controller.execute()):(t.setValue("pwd",""),t.setValue("rePwd",""),"\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u5bc6\u7801\uff01")})),this.onEnter=((e,t)=>h(this,void 0,void 0,function*(){if("rePwd"===e)return yield this.onSubmit("submit",t)})),this.page=(()=>n.createElement(s.Page,{header:this.controller.passwordPageCaption},n.createElement("div",{className:"w-max-20c my-5 py-5",style:{marginLeft:"auto",marginRight:"auto"}},"\u6ce8\u518c\u8d26\u53f7",n.createElement("br",null),n.createElement("div",{className:"py-2 px-3 my-2 text-primary bg-light"},n.createElement("b",null,this.controller.account)),n.createElement("div",{className:"h-1c"}),n.createElement(s.Form,{schema:this.schema,uiSchema:this.uiSchema,onButtonClick:this.onSubmit,onEnter:this.onEnter,requiredFlag:!1}))))}open(){return h(this,void 0,void 0,function*(){this.uiSchema={items:{pwd:{widget:"password",placeholder:"\u5bc6\u7801",label:"\u5bc6\u7801"},rePwd:{widget:"password",placeholder:"\u91cd\u590d\u5bc6\u7801",label:"\u91cd\u590d\u5bc6\u7801"},submit:{widget:"button",className:"btn btn-primary btn-block mt-3",label:this.controller.passwordSubmitCaption}}},this.openPage(this.page)})}}class f extends s.VPage{constructor(){super(...arguments),this.page=(()=>{const{account:e,successText:t}=this.controller;return n.createElement(s.Page,{header:!1},n.createElement("div",{className:"container w-max-30c"},n.createElement("form",{className:"my-5"},n.createElement("div",{className:"py-5"},"\u8d26\u53f7 ",n.createElement("strong",{className:"text-primary"},e," ")," ",t,"\uff01"),n.createElement("button",{className:"btn btn-success btn-block",onClick:()=>this.controller.login()},"\u76f4\u63a5\u767b\u5f55"))))})}open(){return h(this,void 0,void 0,function*(){this.openPage(this.page)})}}i.d(t,"default",function(){return E});var y=function(e,t,i,n){return new(i||(i=Promise))(function(s,a){function r(e){try{c(n.next(e))}catch(t){a(t)}}function o(e){try{c(n.throw(e))}catch(t){a(t)}}function c(e){e.done?s(e.value):new i(function(t){t(e.value)}).then(r,o)}c((n=n.apply(e,t||[])).next())})};const w=[{name:"username",type:"string",required:!0,maxLength:100},{name:"password",type:"string",required:!0,maxLength:100},{name:"login",type:"submit"}];class E extends n.Component{constructor(){super(...arguments),this.res=Object(s.resLang)(r),this.uiSchema={items:{username:{placeholder:"\u624b\u673a/\u90ae\u7bb1/\u7528\u6237\u540d",label:"\u767b\u5f55\u8d26\u53f7"},password:{widget:"password",placeholder:"\u5bc6\u7801",label:"\u5bc6\u7801"},login:{widget:"button",className:"btn btn-primary btn-block mt-3",label:"\u767b\u5f55"}}},this.onSubmit=((e,t)=>y(this,void 0,void 0,function*(){let e=t.form.data,i=e.username,n=e.password;if(void 0===n)return"something wrong, pwd is undefined";let r=yield a.a.login({user:i,pwd:n,guest:s.nav.guest});if(void 0===r){let e=m(i);return(void 0!==e?e.caption:"\u7528\u6237\u540d")+"\u6216\u5bc6\u7801\u9519\uff01"}console.log("onLoginSubmit: user=%s pwd:%s",r.name,r.token),yield s.nav.logined(r,this.props.callback)})),this.onEnter=((e,t)=>y(this,void 0,void 0,function*(){if("password"===e)return yield this.onSubmit("login",t)})),this.clickReg=(()=>{new d(void 0).start()}),this.clickForget=(()=>{new p(void 0).start()})}render(){let e=n.createElement("div",{className:"text-center"},n.createElement("button",{className:"btn btn-link",color:"link",style:{margin:"0px auto"},onClick:this.clickReg},"\u6ce8\u518c\u8d26\u53f7")),t=!1;return!0===this.props.withBack&&(t="\u767b\u5f55"),n.createElement(s.Page,{header:t,footer:e},n.createElement("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center"},n.createElement("div",{className:"flex-fill"}),n.createElement("div",{className:"w-20c"},l(),n.createElement("div",{className:"h-2c"}),n.createElement(s.Form,{schema:w,uiSchema:this.uiSchema,onButtonClick:this.onSubmit,onEnter:this.onEnter,requiredFlag:!1}),n.createElement("button",{className:"btn btn-link btn-block",onClick:()=>this.clickForget()},"\u5fd8\u8bb0\u5bc6\u7801")),n.createElement("div",{className:"flex-fill"}),n.createElement("div",{className:"flex-fill"})))}}}}]);
//# sourceMappingURL=1.bea96e17.chunk.js.map