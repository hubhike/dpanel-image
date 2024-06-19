"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[992],{7618:function(V,D,r){r.r(D),r.d(D,{default:function(){return fe}});var A=r(5574),$=r.n(A),M=r(2831),P=r(38345),O=r(20713),l=r(62435),I=r(89739),N=r(4340),b=r(97937),B=r(21640),F=r(78860),c=r(93967),T=r.n(c),X=r(82225),J=r(64217),Q=r(96159),Y=r(53124),W=r(54548),k=r(14747),_=r(91945);const x=(n,e,s,t,o)=>({background:n,border:`${(0,W.bf)(t.lineWidth)} ${t.lineType} ${e}`,[`${o}-icon`]:{color:s}}),q=n=>{const{componentCls:e,motionDurationSlow:s,marginXS:t,marginSM:o,fontSize:m,fontSizeLG:u,lineHeight:f,borderRadiusLG:d,motionEaseInOutCirc:g,withDescriptionIconSize:E,colorText:j,colorTextHeading:h,withDescriptionPadding:i,defaultPadding:y}=n;return{[e]:Object.assign(Object.assign({},(0,k.Wf)(n)),{position:"relative",display:"flex",alignItems:"center",padding:y,wordWrap:"break-word",borderRadius:d,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:t,lineHeight:0},["&-description"]:{display:"none",fontSize:m,lineHeight:f},"&-message":{color:h},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${s} ${g}, opacity ${s} ${g},
        padding-top ${s} ${g}, padding-bottom ${s} ${g},
        margin-bottom ${s} ${g}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",padding:i,[`${e}-icon`]:{marginInlineEnd:o,fontSize:E,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:t,color:h,fontSize:u},[`${e}-description`]:{display:"block",color:j}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},ee=n=>{const{componentCls:e,colorSuccess:s,colorSuccessBorder:t,colorSuccessBg:o,colorWarning:m,colorWarningBorder:u,colorWarningBg:f,colorError:d,colorErrorBorder:g,colorErrorBg:E,colorInfo:j,colorInfoBorder:h,colorInfoBg:i}=n;return{[e]:{"&-success":x(o,t,s,n,e),"&-info":x(i,h,j,n,e),"&-warning":x(f,u,m,n,e),"&-error":Object.assign(Object.assign({},x(E,g,d,n,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},ne=n=>{const{componentCls:e,iconCls:s,motionDurationMid:t,marginXS:o,fontSizeIcon:m,colorIcon:u,colorIconHover:f}=n;return{[e]:{["&-action"]:{marginInlineStart:o},[`${e}-close-icon`]:{marginInlineStart:o,padding:0,overflow:"hidden",fontSize:m,lineHeight:(0,W.bf)(m),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${s}-close`]:{color:u,transition:`color ${t}`,"&:hover":{color:f}}},"&-close-text":{color:u,transition:`color ${t}`,"&:hover":{color:f}}}}},oe=n=>({withDescriptionIconSize:n.fontSizeHeading3,defaultPadding:`${n.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${n.paddingMD}px ${n.paddingContentHorizontalLG}px`});var te=(0,_.I$)("Alert",n=>[q(n),ee(n),ne(n)],oe),z=function(n,e){var s={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(s[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(s[t[o]]=n[t[o]]);return s};const re={success:I.Z,info:F.Z,error:N.Z,warning:B.Z},ae=n=>{const{icon:e,prefixCls:s,type:t}=n,o=re[t]||null;return e?(0,Q.wm)(e,l.createElement("span",{className:`${s}-icon`},e),()=>({className:T()(`${s}-icon`,{[e.props.className]:e.props.className})})):l.createElement(o,{className:`${s}-icon`})},se=n=>{const{isClosable:e,prefixCls:s,closeIcon:t,handleClose:o,ariaProps:m}=n,u=t===!0||t===void 0?l.createElement(b.Z,null):t;return e?l.createElement("button",Object.assign({type:"button",onClick:o,className:`${s}-close-icon`,tabIndex:0},m),u):null};var L=n=>{const{description:e,prefixCls:s,message:t,banner:o,className:m,rootClassName:u,style:f,onMouseEnter:d,onMouseLeave:g,onClick:E,afterClose:j,showIcon:h,closable:i,closeText:y,closeIcon:S,action:U}=n,pe=z(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[R,ge]=l.useState(!1),ve=l.useRef(null),{getPrefixCls:Ce,direction:Ee,alert:a}=l.useContext(Y.E_),p=Ce("alert",s),[he,ye,Se]=te(p),$e=v=>{var C;ge(!0),(C=n.onClose)===null||C===void 0||C.call(n,v)},G=l.useMemo(()=>n.type!==void 0?n.type:o?"warning":"info",[n.type,o]),Ie=l.useMemo(()=>typeof i=="object"&&i.closeIcon||y?!0:typeof i=="boolean"?i:S!==!1&&S!==null&&S!==void 0?!0:!!(a!=null&&a.closable),[y,S,i,a==null?void 0:a.closable]),K=o&&h===void 0?!0:h,be=T()(p,`${p}-${G}`,{[`${p}-with-description`]:!!e,[`${p}-no-icon`]:!K,[`${p}-banner`]:!!o,[`${p}-rtl`]:Ee==="rtl"},a==null?void 0:a.className,m,u,Se,ye),Be=(0,J.Z)(pe,{aria:!0,data:!0}),je=l.useMemo(()=>{var v,C;return typeof i=="object"&&i.closeIcon?i.closeIcon:y||(S!==void 0?S:typeof(a==null?void 0:a.closable)=="object"&&(!((v=a==null?void 0:a.closable)===null||v===void 0)&&v.closeIcon)?(C=a==null?void 0:a.closable)===null||C===void 0?void 0:C.closeIcon:a==null?void 0:a.closeIcon)},[S,i,y,a==null?void 0:a.closeIcon]),De=l.useMemo(()=>{const v=i!=null?i:a==null?void 0:a.closable;if(typeof v=="object"){const{closeIcon:C}=v;return z(v,["closeIcon"])}return{}},[i,a==null?void 0:a.closable]);return he(l.createElement(X.ZP,{visible:!R,motionName:`${p}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:v=>({maxHeight:v.offsetHeight}),onLeaveEnd:j},v=>{let{className:C,style:w}=v;return l.createElement("div",Object.assign({ref:ve,"data-show":!R,className:T()(be,C),style:Object.assign(Object.assign(Object.assign({},a==null?void 0:a.style),f),w),onMouseEnter:d,onMouseLeave:g,onClick:E,role:"alert"},Be),K?l.createElement(ae,{description:e,icon:n.icon,prefixCls:p,type:G}):null,l.createElement("div",{className:`${p}-content`},t?l.createElement("div",{className:`${p}-message`},t):null,e?l.createElement("div",{className:`${p}-description`},e):null),U?l.createElement("div",{className:`${p}-action`},U):null,l.createElement(se,{isClosable:Ie,prefixCls:p,closeIcon:je,handleClose:$e,ariaProps:De}))}))},le=r(15671),ie=r(43144),ce=r(53640),ue=r(32531),de=function(n){(0,ue.Z)(e,n);function e(){var s;return(0,le.Z)(this,e),s=(0,ce.Z)(this,e,arguments),s.state={error:void 0,info:{componentStack:""}},s}return(0,ie.Z)(e,[{key:"componentDidCatch",value:function(t,o){this.setState({error:t,info:o})}},{key:"render",value:function(){const{message:t,description:o,children:m}=this.props,{error:u,info:f}=this.state,d=f&&f.componentStack?f.componentStack:null,g=typeof t=="undefined"?(u||"").toString():t,E=typeof o=="undefined"?d:o;return u?l.createElement(L,{type:"error",message:g,description:l.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},E)}):m}}]),e}(l.Component);const Z=L;Z.ErrorBoundary=de;var me=Z,H=r(86074);function fe(){var n=(0,l.useState)(""),e=$()(n,2),s=e[0],t=e[1];return(0,l.useEffect)(function(){(0,M.d)().then(function(o){var m="";o.data.info.Mounts.map(function(d){d.Type=="volume"&&(m=d.Name)});var u=Object.keys(o.data.info.HostConfig.PortBindings).map(function(d){return o.data.info.HostConfig.PortBindings[d].map(function(g){return"-p ".concat(g.HostPort,":").concat(String(parseInt(d)))})}),f=o.data.info.HostConfig.Binds.map(function(d){return"-v ".concat(d)});t("docker stop ".concat(o.data.info.Name," && docker rm ").concat(o.data.info.Name," && docker rmi ").concat(o.data.info.Config.Image,` && \\
docker run -it -d --name `).concat(o.data.info.Name,` --restart=always \\
 `).concat(u.join(" "),` --network dpanel-local \\
 `).concat(f.join(" "),` \\
 `).concat(o.data.info.Config.Image))})},[]),(0,H.jsxs)(P.Z,{title:"\u66F4\u65B0\u811A\u672C",children:[(0,H.jsx)(me,{message:"\u6CE8\u610F",description:`1\u3001\u66F4\u65B0\u547D\u4EE4\u9700\u8981\u5728\u5BBF\u4E3B\u673A\u4E0A\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u3002
2\u3001\u4E3A\u4E86\u4FDD\u7559\u65E7\u6570\u636E\u8BF7\u52A1\u5FC5\u7ED1\u5B9A /dpanel \u76EE\u5F55\u5230\u4E4B\u524D\u5B58\u50A8\u5377\u4E2D\u3002
3\u3001\u66F4\u65B0\u547D\u4EE4\u7B49\u4E8E\u5220\u9664\u3001\u91CD\u5EFA\u9762\u677F\u6240\u5C5E\u5BB9\u5668\uFF0C\u8FC7\u7A0B\u4E2D\u4F1A\u9020\u6210\u7AD9\u70B9\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002`,type:"error",style:{marginBottom:"20px"}}),(0,H.jsx)(O.ZP,{theme:"dark",height:"300px",value:s})]})}},2831:function(V,D,r){r.d(D,{a:function(){return l},d:function(){return N}});var A=r(15009),$=r.n(A),M=r(99289),P=r.n(M),O=r(54006);function l(){return I.apply(this,arguments)}function I(){return I=P()($()().mark(function B(){return $()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,O.request)("/api/common/home/info",{method:"POST"});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},B)})),I.apply(this,arguments)}function N(){return b.apply(this,arguments)}function b(){return b=P()($()().mark(function B(){return $()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,O.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},B)})),b.apply(this,arguments)}}}]);