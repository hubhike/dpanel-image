"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[992],{7618:function(q,F,o){o.r(F),o.d(F,{default:function(){return ge}});var W=o(19632),f=o.n(W),w=o(5574),b=o.n(w),P=o(60335),z=o(38345),x=o(20713),i=o(62435),A=o(89739),Z=o(4340),M=o(97937),R=o(21640),N=o(78860),U=o(93967),j=o.n(U),K=o(82225),T=o(64217),c=o(96159),E=o(53124),y=o(54548),l=o(14747),ee=o(91945);const H=(n,e,a,t,s)=>({background:n,border:`${(0,y.bf)(t.lineWidth)} ${t.lineType} ${e}`,[`${s}-icon`]:{color:a}}),ne=n=>{const{componentCls:e,motionDurationSlow:a,marginXS:t,marginSM:s,fontSize:d,fontSizeLG:p,lineHeight:g,borderRadiusLG:O,motionEaseInOutCirc:v,withDescriptionIconSize:S,colorText:D,colorTextHeading:m,withDescriptionPadding:u,defaultPadding:I}=n;return{[e]:Object.assign(Object.assign({},(0,l.Wf)(n)),{position:"relative",display:"flex",alignItems:"center",padding:I,wordWrap:"break-word",borderRadius:O,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:t,lineHeight:0},["&-description"]:{display:"none",fontSize:d,lineHeight:g},"&-message":{color:m},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${a} ${v}, opacity ${a} ${v},
        padding-top ${a} ${v}, padding-bottom ${a} ${v},
        margin-bottom ${a} ${v}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",padding:u,[`${e}-icon`]:{marginInlineEnd:s,fontSize:S,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:t,color:m,fontSize:p},[`${e}-description`]:{display:"block",color:D}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},te=n=>{const{componentCls:e,colorSuccess:a,colorSuccessBorder:t,colorSuccessBg:s,colorWarning:d,colorWarningBorder:p,colorWarningBg:g,colorError:O,colorErrorBorder:v,colorErrorBg:S,colorInfo:D,colorInfoBorder:m,colorInfoBg:u}=n;return{[e]:{"&-success":H(s,t,a,n,e),"&-info":H(u,m,D,n,e),"&-warning":H(g,p,d,n,e),"&-error":Object.assign(Object.assign({},H(S,v,O,n,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},oe=n=>{const{componentCls:e,iconCls:a,motionDurationMid:t,marginXS:s,fontSizeIcon:d,colorIcon:p,colorIconHover:g}=n;return{[e]:{["&-action"]:{marginInlineStart:s},[`${e}-close-icon`]:{marginInlineStart:s,padding:0,overflow:"hidden",fontSize:d,lineHeight:(0,y.bf)(d),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${a}-close`]:{color:p,transition:`color ${t}`,"&:hover":{color:g}}},"&-close-text":{color:p,transition:`color ${t}`,"&:hover":{color:g}}}}},re=n=>({withDescriptionIconSize:n.fontSizeHeading3,defaultPadding:`${n.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${n.paddingMD}px ${n.paddingContentHorizontalLG}px`});var ae=(0,ee.I$)("Alert",n=>[ne(n),te(n),oe(n)],re),G=function(n,e){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)e.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(a[t[s]]=n[t[s]]);return a};const se={success:A.Z,info:N.Z,error:Z.Z,warning:R.Z},ie=n=>{const{icon:e,prefixCls:a,type:t}=n,s=se[t]||null;return e?(0,c.wm)(e,i.createElement("span",{className:`${a}-icon`},e),()=>({className:j()(`${a}-icon`,{[e.props.className]:e.props.className})})):i.createElement(s,{className:`${a}-icon`})},le=n=>{const{isClosable:e,prefixCls:a,closeIcon:t,handleClose:s,ariaProps:d}=n,p=t===!0||t===void 0?i.createElement(M.Z,null):t;return e?i.createElement("button",Object.assign({type:"button",onClick:s,className:`${a}-close-icon`,tabIndex:0},d),p):null};var X=n=>{const{description:e,prefixCls:a,message:t,banner:s,className:d,rootClassName:p,style:g,onMouseEnter:O,onMouseLeave:v,onClick:S,afterClose:D,showIcon:m,closable:u,closeText:I,closeIcon:$,action:L}=n,ve=G(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[J,he]=i.useState(!1),Ce=i.useRef(null),{getPrefixCls:Ee,direction:ye,alert:r}=i.useContext(E.E_),h=Ee("alert",a),[Se,$e,be]=ae(h),Ie=C=>{var B;he(!0),(B=n.onClose)===null||B===void 0||B.call(n,C)},Q=i.useMemo(()=>n.type!==void 0?n.type:s?"warning":"info",[n.type,s]),Be=i.useMemo(()=>typeof u=="object"&&u.closeIcon||I?!0:typeof u=="boolean"?u:$!==!1&&$!==null&&$!==void 0?!0:!!(r!=null&&r.closable),[I,$,u,r==null?void 0:r.closable]),Y=s&&m===void 0?!0:m,Oe=j()(h,`${h}-${Q}`,{[`${h}-with-description`]:!!e,[`${h}-no-icon`]:!Y,[`${h}-banner`]:!!s,[`${h}-rtl`]:ye==="rtl"},r==null?void 0:r.className,d,p,be,$e),Pe=(0,T.Z)(ve,{aria:!0,data:!0}),je=i.useMemo(()=>{var C,B;return typeof u=="object"&&u.closeIcon?u.closeIcon:I||($!==void 0?$:typeof(r==null?void 0:r.closable)=="object"&&(!((C=r==null?void 0:r.closable)===null||C===void 0)&&C.closeIcon)?(B=r==null?void 0:r.closable)===null||B===void 0?void 0:B.closeIcon:r==null?void 0:r.closeIcon)},[$,u,I,r==null?void 0:r.closeIcon]),De=i.useMemo(()=>{const C=u!=null?u:r==null?void 0:r.closable;if(typeof C=="object"){const{closeIcon:B}=C;return G(C,["closeIcon"])}return{}},[u,r==null?void 0:r.closable]);return Se(i.createElement(K.ZP,{visible:!J,motionName:`${h}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:C=>({maxHeight:C.offsetHeight}),onLeaveEnd:D},C=>{let{className:B,style:_}=C;return i.createElement("div",Object.assign({ref:Ce,"data-show":!J,className:j()(Oe,B),style:Object.assign(Object.assign(Object.assign({},r==null?void 0:r.style),g),_),onMouseEnter:O,onMouseLeave:v,onClick:S,role:"alert"},Pe),Y?i.createElement(ie,{description:e,icon:n.icon,prefixCls:h,type:Q}):null,i.createElement("div",{className:`${h}-content`},t?i.createElement("div",{className:`${h}-message`},t):null,e?i.createElement("div",{className:`${h}-description`},e):null),L?i.createElement("div",{className:`${h}-action`},L):null,i.createElement(le,{isClosable:Be,prefixCls:h,closeIcon:je,handleClose:Ie,ariaProps:De}))}))},ue=o(15671),ce=o(43144),de=o(53640),pe=o(32531),me=function(n){(0,pe.Z)(e,n);function e(){var a;return(0,ue.Z)(this,e),a=(0,de.Z)(this,e,arguments),a.state={error:void 0,info:{componentStack:""}},a}return(0,ce.Z)(e,[{key:"componentDidCatch",value:function(t,s){this.setState({error:t,info:s})}},{key:"render",value:function(){const{message:t,description:s,children:d}=this.props,{error:p,info:g}=this.state,O=g&&g.componentStack?g.componentStack:null,v=typeof t=="undefined"?(p||"").toString():t,S=typeof s=="undefined"?O:s;return p?i.createElement(X,{type:"error",message:v,description:i.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},S)}):d}}]),e}(i.Component);const k=X;k.ErrorBoundary=me;var fe=k,V=o(86074);function ge(){var n=(0,i.useState)(""),e=b()(n,2),a=e[0],t=e[1],s=(0,i.useState)(""),d=b()(s,2),p=d[0],g=d[1],O=(0,i.useState)([]),v=b()(O,2),S=v[0],D=v[1];return(0,i.useEffect)(function(){(0,P.jV)({md5:"dpanel"}).then(function(m){m.data.info.Mounts.map(function(u){u.Type=="volume"&&g(u.Name)}),Object.keys(m.data.info.HostConfig.PortBindings).map(function(u){m.data.info.HostConfig.PortBindings[u].map(function(I){var $=!1;S.map(function(L){L.host==I.HostPort?$=!0:$=!1}),$||D([].concat(f()(S),[{host:I.HostPort,dest:String(parseInt(u))}]))})}),t(m.data.info.Config.Image)})},[]),(0,V.jsxs)(z.Z,{title:"\u66F4\u65B0\u811A\u672C",children:[(0,V.jsx)(fe,{message:"\u6CE8\u610F",description:`1\u3001\u66F4\u65B0\u547D\u4EE4\u9700\u8981\u5728\u5BBF\u4E3B\u673A\u4E0A\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u3002
2\u3001\u4E3A\u4E86\u4FDD\u7559\u65E7\u6570\u636E\u8BF7\u52A1\u5FC5\u7ED1\u5B9A /dpanel \u76EE\u5F55\u5230\u4E4B\u524D\u5B58\u50A8\u5377\u4E2D\u3002
3\u3001\u66F4\u65B0\u547D\u4EE4\u7B49\u4E8E\u5220\u9664\u3001\u91CD\u5EFA\u9762\u677F\u6240\u5C5E\u5BB9\u5668\uFF0C\u8FC7\u7A0B\u4E2D\u4F1A\u9020\u6210\u7AD9\u70B9\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002`,type:"error",style:{marginBottom:"20px"}}),(0,V.jsx)(x.ZP,{theme:"dark",height:"300px",value:"docker stop dpanel && docker rm dpanel && docker rmi ".concat(a,` && \\
docker run -it -d --name dpanel --restart=always \\
 `).concat(S.map(function(m){return"-p ".concat(m.host,":").concat(m.dest)}),` --network dpanel-local \\
 -v /var/run/docker.sock:/var/run/docker.sock \\
 -v `).concat(p,`:/dpanel \\
 `).concat(a,`
`)})]})}},60335:function(q,F,o){o.d(F,{IE:function(){return i},IW:function(){return z},KK:function(){return U},LJ:function(){return K},eE:function(){return R},jV:function(){return Z}});var W=o(15009),f=o.n(W),w=o(99289),b=o.n(w),P=o(54006);function z(c){return x.apply(this,arguments)}function x(){return x=b()(f()().mark(function c(E){return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/container/status",{method:"POST",data:E}));case 1:case"end":return l.stop()}},c)})),x.apply(this,arguments)}function i(c){return A.apply(this,arguments)}function A(){return A=b()(f()().mark(function c(E){return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/container/get-list",{data:E,method:"POST"}));case 1:case"end":return l.stop()}},c)})),A.apply(this,arguments)}function Z(c){return M.apply(this,arguments)}function M(){return M=b()(f()().mark(function c(E){return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/container/get-detail",{data:E,method:"POST"}));case 1:case"end":return l.stop()}},c)})),M.apply(this,arguments)}function R(c){return N.apply(this,arguments)}function N(){return N=b()(f()().mark(function c(E){return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/container/update",{data:E,method:"POST"}));case 1:case"end":return l.stop()}},c)})),N.apply(this,arguments)}function U(){return j.apply(this,arguments)}function j(){return j=b()(f()().mark(function c(){return f()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",(0,P.request)("/api/app/container/prune",{method:"POST"}));case 1:case"end":return y.stop()}},c)})),j.apply(this,arguments)}function K(c){return T.apply(this,arguments)}function T(){return T=b()(f()().mark(function c(E){return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,P.request)("/api/app/container/export",{method:"POST",data:E,responseType:"blob"}));case 1:case"end":return l.stop()}},c)})),T.apply(this,arguments)}}}]);
