(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{113:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(3),c=n(5),u=n(6),o=n(4),s=n(7),l=n(11),p=n(8),m=n(36),d=n(24),b=n(40),h=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function c(e){try{o(r.next(e))}catch(t){i(t)}}function u(e){try{o(r.throw(e))}catch(t){i(t)}}function o(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(c,u)}o((r=r.apply(e,t||[])).next())})},f=new(function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"login",value:function(e){return h(this,void 0,void 0,a.a.mark(function t(){var n,r,i,c,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.get("login",e);case 2:n=t.sent,t.t0=typeof n,t.next="string"===t.t0?7:"object"===t.t0?8:6;break;case 6:return t.abrupt("return");case 7:return t.abrupt("return",Object(b.c)(n));case 8:return r=n.token,i=Object(b.c)(r),c=n.nick,u=n.icon,c&&(i.nick=c),u&&(i.icon=u),t.abrupt("return",i);case 14:case"end":return t.stop()}},t,this)}))}},{key:"register",value:function(e){return h(this,void 0,void 0,a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.post("register",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}))}}]),t}(d.a))("tv/user/",void 0),g=(n(67),function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function c(e){try{o(r.next(e))}catch(t){i(t)}}function u(e){try{o(r.throw(e))}catch(t){i(t)}}function o(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(c,u)}o((r=r.apply(e,t||[])).next())})}),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"failed",value:function(){}},{key:"login",value:function(){var e=this,t=this.props,n=t.user,r=t.pwd;f.login({user:n,pwd:r,guest:m.g.guest}).then(function(t){return g(e,void 0,void 0,a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=3;break}return this.failed(),e.abrupt("return");case 3:return e.next=5,m.g.logined(t);case 5:case"end":return e.stop()}},e,this)}))})}},{key:"render",value:function(){var e=this,t=this.props,n=t.user;t.pwd;return p.createElement(m.d,{header:!1},p.createElement("div",{className:"container w-max-30c"},p.createElement("form",{className:"my-5"},p.createElement("div",{className:"py-5"},"\u7528\u6237 ",p.createElement("strong",{className:"text-primary"},n," ")," \u6ce8\u518c\u6210\u529f\uff01"),p.createElement("button",{className:"btn btn-success btn-block",onClick:function(){return e.login()}},"\u76f4\u63a5\u767b\u5f55"))))}}]),t}(p.Component),w={_:{a:"d"}},y={_:{a:"d"}},x=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function c(e){try{o(r.next(e))}catch(t){i(t)}}function u(e){try{o(r.throw(e))}catch(t){i(t)}}function o(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(c,u)}o((r=r.apply(e,t||[])).next())})},k=n(68),j=[{name:"user",type:"string",required:!0,maxLength:100},{name:"pwd",type:"string",required:!0,maxLength:100},{name:"rePwd",type:"string",required:!0,maxLength:100},{name:"register",type:"submit"}],O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).apply(this,arguments))).res=Object(m.h)(y),e.uiSchema={items:{user:{placeholder:"\u7528\u6237\u540d",label:"\u7528\u6237\u540d"},pwd:{widget:"password",placeholder:"\u5bc6\u7801",label:"\u5bc6\u7801"},rePwd:{widget:"password",placeholder:"\u91cd\u590d\u5bc6\u7801",label:"\u91cd\u590d\u5bc6\u7801"},register:{widget:"button",className:"btn btn-primary btn-block mt-3",label:"\u6ce8\u518c\u65b0\u7528\u6237"}}},e}return Object(s.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e,t){return x(this,void 0,void 0,a.a.mark(function e(){var n,r,i,c,u,o,s,l,d;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.form.data,r=n.user,i=n.pwd,c=n.rePwd,u=n.country,o=n.mobile,s=n.email,i===c){e.next=6;break}return t.setValue("pwd",""),t.setValue("rePwd",""),e.abrupt("return","\u5bc6\u7801\u4e0d\u5bf9\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u5bc6\u7801\uff01");case 6:return e.next=8,f.register({nick:void 0,user:r,pwd:i,country:void 0,mobile:void 0,email:void 0});case 8:l=e.sent,e.t0=l,e.next=0===e.t0?13:1===e.t0?16:2===e.t0?18:3===e.t0?20:12;break;case 12:throw"unknown return";case 13:return m.g.clear(),m.g.show(p.createElement(v,{user:r,pwd:i})),e.abrupt("return");case 16:return d="\u7528\u6237\u540d "+r,e.abrupt("break",22);case 18:return d="\u624b\u673a\u53f7 +"+u+" "+o,e.abrupt("break",22);case 20:return d="\u7535\u5b50\u90ae\u4ef6 "+s,e.abrupt("break",22);case 22:return e.abrupt("return",d+" \u5df2\u7ecf\u88ab\u6ce8\u518c\u8fc7\u4e86");case 23:case"end":return e.stop()}},e,this)}))}},{key:"click",value:function(){m.g.replace(p.createElement(P,null))}},{key:"render",value:function(){return p.createElement(m.d,{header:"\u6ce8\u518c"},p.createElement("div",{style:{maxWidth:"25em",margin:"3em auto",padding:"0 3em"}},p.createElement("div",{className:"container",style:{display:"flex",position:"relative"}},p.createElement("img",{className:"App-logo",src:k,style:{height:"60px",position:"absolute"}}),p.createElement("span",{style:{flex:1,fontSize:"x-large",alignSelf:"center",textAlign:"center",margin:"10px"}},"\u540c\u82b1")),p.createElement("div",{style:{height:"20px"}}),p.createElement(m.b,{schema:j,uiSchema:this.uiSchema,onButtonClick:this.onSubmit,requiredFlag:!1})))}}]),t}(p.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return p.createElement(m.d,{header:"\u5fd8\u8bb0\u5bc6\u7801"},"\u6b63\u5728\u8bbe\u8ba1\u4e2d...")}}]),t}(p.Component);n.d(t,"default",function(){return P});var S=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function c(e){try{o(r.next(e))}catch(t){i(t)}}function u(e){try{o(r.throw(e))}catch(t){i(t)}}function o(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(c,u)}o((r=r.apply(e,t||[])).next())})},N=n(68),C=[{name:"username",type:"string",required:!0,maxLength:100},{name:"password",type:"string",required:!0,maxLength:100},{name:"login",type:"submit"}],P=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).apply(this,arguments))).res=Object(m.h)(w),e.uiSchema={items:{username:{placeholder:"\u7528\u6237\u540d",label:"\u7528\u6237"},password:{widget:"password",placeholder:"\u5bc6\u7801",label:"\u5bc6\u7801"},login:{widget:"button",className:"btn btn-primary btn-block mt-3",label:"\u767b\u5f55"}}},e.onSubmit=function(t,n){return S(Object(l.a)(Object(l.a)(e)),void 0,void 0,a.a.mark(function e(){var t,r,i,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.form.data,r=t.username,void 0!==(i=t.password)){e.next=5;break}return e.abrupt("return","something wrong, pwd is undefined");case 5:return e.next=7,f.login({user:r,pwd:i,guest:m.g.guest});case 7:if(void 0!==(c=e.sent)){e.next=10;break}return e.abrupt("return","\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\uff01");case 10:return console.log("onLoginSubmit: user=%s pwd:%s",c.name,c.token),e.next=13,m.g.logined(c);case 13:case"end":return e.stop()}},e,this)}))},e}return Object(s.a)(t,e),Object(c.a)(t,[{key:"click",value:function(){m.g.replace(p.createElement(O,null))}},{key:"render",value:function(){var e=p.createElement("div",{className:"text-center"},p.createElement("button",{className:"btn btn-link",color:"link",style:{margin:"0px auto"},onClick:function(){return m.g.push(p.createElement(O,null))}},"\u5982\u679c\u6ca1\u6709\u8d26\u53f7\uff0c\u8bf7\u6ce8\u518c")),t=!1,n="\u540c\u82b1";return!0===this.props.withBack&&(t="\u767b\u5f55",n="\u767b\u5f55\u7528\u6237"),p.createElement(m.d,{header:t,footer:e},p.createElement("div",{style:{maxWidth:"25em",margin:"3em auto",padding:"0 3em"}},p.createElement("div",{className:"container",style:{display:"flex",position:"relative"}},p.createElement("img",{className:"App-logo",src:N,style:{height:"60px",position:"absolute"}}),p.createElement("span",{style:{flex:1,fontSize:"x-large",alignSelf:"center",textAlign:"center",margin:"10px"}},n)),p.createElement("div",{style:{height:"20px"}}),p.createElement(m.b,{schema:C,uiSchema:this.uiSchema,onButtonClick:this.onSubmit,requiredFlag:!1}),p.createElement("button",{className:"btn btn-link btn-block",onClick:function(){return m.g.push(p.createElement(E,null))}},"\u5fd8\u8bb0\u5bc6\u7801")))}}]),t}(p.Component)}}]);
//# sourceMappingURL=1.9a5afac0.chunk.js.map