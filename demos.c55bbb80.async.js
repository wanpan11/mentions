"use strict";(self.webpackChunkrc_mentions=self.webpackChunkrc_mentions||[]).push([[433],{51855:function(N,u,e){e.r(u),e.d(u,{default:function(){return m}});var T=e(79800),l=e.n(T),_=e(36128),o=e(71062),E=e(99678);function m(){var j=(0,o.useState)("hello world"),b=l()(j,2),R=b[0],D=b[1];return(0,E.jsxs)("div",{children:[(0,E.jsx)("p",{children:"Uncontrolled"}),(0,E.jsx)(_.Z,{allowClear:!0}),(0,E.jsx)("p",{children:"controlled"}),(0,E.jsx)(_.Z,{value:R,onChange:D,allowClear:!0})]})}},1644:function(N,u,e){e.r(u);var T=e(71062),l=e(36128),_=e(99349),o=e(99678),E=function(R,D){console.log("Select:",D,"-",R.value)},m=function(){console.log("onFocus")},j=function(){console.log("onBlur")};u.default=function(){return(0,o.jsx)(l.Z,{autoFocus:!0,rows:3,defaultValue:"Hello World",onSelect:E,onFocus:m,onBlur:j,options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})}},36519:function(N,u,e){e.r(u);var T=e(71062),l=e(36128),_=e(99349),o=e(99678);u.default=function(){return(0,o.jsx)(l.Z,{rows:3,defaultValue:"Hello @ World @",open:!0,options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})}},96050:function(N,u,e){e.r(u),e.d(u,{default:function(){return b}});var T=e(79800),l=e.n(T),_=e(71062),o=e(36128),E=e(99349),m=e(99678),j=function(D,W){var A=_.useRef({fn:D,timer:null}),x=A.current;return _.useEffect(function(){x.fn=D},[D]),_.useCallback(function(){for(var L=arguments.length,s=new Array(L),y=0;y<L;y++)s[y]=arguments[y];x.timer&&clearTimeout(x.timer),x.timer=setTimeout(function(){x.fn.apply(x,s)},W)},[W])},b=function(){var R=_.useState(!1),D=l()(R,2),W=D[0],A=D[1],x=_.useState([]),L=l()(x,2),s=L[0],y=L[1],Z=_.useRef(""),q=j(function(f){if(!f){y([]);return}fetch("https://api.github.com/search/users?q=".concat(f)).then(function(O){return O.json()}).then(function(O){var X=O.items,ee=X===void 0?[]:X;if(Z.current!==f){console.log("Out Of Date >",f,ee);return}console.log("Fetch Users >",ee),y(ee.slice(0,10)),A(!1)})},800),ve=function(O){Z.current=O,A(!!O),y([]),console.log("Search:",O),q(O)},z;return W?z=[{value:Z.current,disabled:!0,label:"Searching '".concat(Z.current,"'...")}]:z=s.map(function(f){var O=f.login,X=f.avatar_url;return{key:O,value:O,className:"dynamic-option",label:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("img",{src:X,alt:O}),(0,m.jsx)("span",{children:O})]})}}),(0,m.jsxs)("div",{children:[(0,m.jsx)(o.Z,{onSearch:ve,style:{width:"100%"},autoFocus:!0,options:z}),"search: ",(0,m.jsx)("code",{children:Z.current})]})}},66961:function(N,u,e){e.r(u);var T=e(71062),l=e(36128),_=e(99349),o=e(99678);function E(m,j){var b=j.key;return b.indexOf(m)!==-1}u.default=function(){return(0,o.jsx)(l.Z,{style:{width:"100%",fontSize:30},filterOption:E,autoFocus:!0,options:[{value:"light",key:"1128",label:"Light (ID: 1128)"},{value:"bamboo",key:"903",label:"Bamboo (ID: 903)"},{value:"light",key:"1706",label:"Cat (ID: 1706)"}]})}},22080:function(N,u,e){e.r(u);var T=e(79800),l=e.n(T),_=e(71062),o=e(36128),E=e(99349),m=e(99678),j={"@":["light","bamboo","cat"],"#":["123","456","7890"]};u.default=function(){var b=_.useState("@"),R=l()(b,2),D=R[0],W=R[1],A=function(s,y){W(y)},x=j[D].map(function(L){return{value:L,key:L,label:L}});return(0,m.jsxs)("div",{children:["@ for string, # for number",(0,m.jsx)(o.Z,{prefix:["@","#"],onSearch:A,style:{width:"100%",fontSize:50},autoFocus:!0,options:x})]})}},59710:function(N,u,e){e.r(u);var T=e(71062),l=e(36128),_=e(99349),o=e(99678),E=l.Z.Option;function m(j){return console.log("~~>",j),j.length<=3}u.default=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Customize Split Logic"}),(0,o.jsx)("p",{children:"Only validate string length less than 3"}),(0,o.jsxs)(l.Z,{style:{width:"100%",fontSize:50},split:"",validateSearch:m,autoFocus:!0,children:[(0,o.jsx)(E,{value:"light",children:"Light"}),(0,o.jsx)(E,{value:"bamboo",children:"Bamboo"}),(0,o.jsx)(E,{value:"cat",children:"Cat"})]})]})}},13630:function(N,u,e){e.r(u),e.d(u,{default:function(){return E}});var T=e(71062),l=e(36128),_=e(99349),o=e(99678),E=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(l.Z,{placeholder:"disabled",disabled:!0,options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]}),(0,o.jsx)(l.Z,{placeholder:"readonly",readOnly:!0,options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]}),(0,o.jsx)("div",{style:{paddingTop:100},children:(0,o.jsx)(l.Z,{placeholder:"Support AutoSize",autoSize:!0,transitionName:"motion-zoom",options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})}),(0,o.jsx)("div",{style:{paddingTop:100},children:(0,o.jsx)(l.Z,{placeholder:"placement: top",placement:"top",transitionName:"motion-zoom",options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})}),(0,o.jsx)("div",{style:{padding:"100px 0",width:200,direction:"rtl"},children:(0,o.jsx)(l.Z,{placeholder:"direction: rtl",direction:"rtl",transitionName:"motion-zoom",options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})})]})}},36128:function(N,u,e){e.d(u,{Z:function(){return vt}});var T=e(82242),l=e.n(T),_=e(79800),o=e.n(_),E=e(39647),m=e.n(E),j=e(92310),b=e.n(j),R=e(19536),D=e(10974),W=e(19847),A=e(61673),x=e(91308),L=e(26327),s=e(71062);function y(){var t=(0,s.useState)({id:0,callback:null}),n=o()(t,2),v=n[0],h=n[1],c=(0,s.useCallback)(function(g){h(function(i){var C=i.id;return{id:C+1,callback:g}})},[]);return(0,s.useEffect)(function(){var g;(g=v.callback)===null||g===void 0||g.call(v)},[v]),c}var Z=e(42827),q=e(69151),ve=s.createContext(null),z=ve,f=e(99678);function O(t){var n=s.useContext(z),v=n.notFoundContent,h=n.activeIndex,c=n.setActiveIndex,g=n.selectOption,i=n.onFocus,C=n.onBlur,P=t.prefixCls,S=t.options,K=S[h]||{};return(0,f.jsxs)(q.ZP,{prefixCls:"".concat(P,"-menu"),activeKey:K.key,onSelect:function(U){var B=U.key,p=S.find(function(F){var Y=F.key;return Y===B});g(p)},onFocus:i,onBlur:C,children:[S.map(function(I,U){var B=I.key,p=I.disabled,F=I.className,Y=I.style,$=I.label;return(0,f.jsx)(q.sN,{disabled:p,className:F,style:Y,onMouseEnter:function(){c(U)},children:$},B)}),!S.length&&(0,f.jsx)(q.sN,{disabled:!0,children:v})]})}var X=O,ee={bottomRight:{points:["tl","br"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},bottomLeft:{points:["tr","bl"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topRight:{points:["bl","tr"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}},topLeft:{points:["br","tl"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}}},Je=function(n){var v=n.prefixCls,h=n.options,c=n.children,g=n.visible,i=n.transitionName,C=n.getPopupContainer,P=n.dropdownClassName,S=n.direction,K=n.placement,I="".concat(v,"-dropdown"),U=(0,f.jsx)(X,{prefixCls:I,options:h}),B=(0,s.useMemo)(function(){var p;return S==="rtl"?p=K==="top"?"topLeft":"bottomLeft":p=K==="top"?"topRight":"bottomRight",p},[S,K]);return(0,f.jsx)(Z.Z,{prefixCls:I,popupVisible:g,popup:U,popupPlacement:B,popupTransitionName:i,builtinPlacements:ee,getPopupContainer:C,popupClassName:P,children:c})},ke=Je,qe=function(){return null},et=qe;function tt(t){var n=t.selectionStart;return t.value.slice(0,n)}function nt(t,n){return n.reduce(function(v,h){var c=t.lastIndexOf(h);return c>v.location?{location:c,prefix:h}:v},{location:-1,prefix:""})}function pe(t){return(t||"").toLowerCase()}function at(t,n,v){var h=t[0];if(!h||h===v)return t;for(var c=t,g=n.length,i=0;i<g;i+=1)if(pe(c[i])!==pe(n[i])){c=c.slice(i);break}else i===g-1&&(c=c.slice(g));return c}function ot(t,n){var v=n.measureLocation,h=n.prefix,c=n.targetText,g=n.selectionStart,i=n.split,C=t.slice(0,v);C[C.length-i.length]===i&&(C=C.slice(0,C.length-i.length)),C&&(C="".concat(C).concat(i));var P=at(t.slice(g),c.slice(g-v-h.length),i);P.slice(0,i.length)===i&&(P=P.slice(i.length));var S="".concat(C).concat(h).concat(c).concat(i);return{text:"".concat(S).concat(P),selectionLocation:S.length}}function rt(t,n){t.setSelectionRange(n,n),t.blur(),t.focus()}function lt(t,n){return!n||t.indexOf(n)===-1}function st(t,n){var v=n.value,h=v===void 0?"":v,c=t.toLowerCase();return h.toLowerCase().indexOf(c)!==-1}var it=["prefixCls","className","style","prefix","split","notFoundContent","value","defaultValue","children","options","open","allowClear","validateSearch","filterOption","onChange","onKeyDown","onKeyUp","onPressEnter","onSearch","onSelect","onFocus","onBlur","transitionName","placement","direction","getPopupContainer","dropdownClassName","rows"],ut=["suffix","prefixCls","defaultValue","value","allowClear","onChange","classNames","className","disabled"],ct=(0,s.forwardRef)(function(t,n){var v=t.prefixCls,h=t.className,c=t.style,g=t.prefix,i=g===void 0?"@":g,C=t.split,P=C===void 0?" ":C,S=t.notFoundContent,K=S===void 0?"Not Found":S,I=t.value,U=t.defaultValue,B=t.children,p=t.options,F=t.open,Y=t.allowClear,$=t.validateSearch,oe=$===void 0?lt:$,re=t.filterOption,H=re===void 0?st:re,fe=t.onChange,me=t.onKeyDown,he=t.onKeyUp,De=t.onPressEnter,be=t.onSearch,ge=t.onSelect,Ie=t.onFocus,xe=t.onBlur,ft=t.transitionName,mt=t.placement,ht=t.direction,gt=t.getPopupContainer,xt=t.dropdownClassName,Te=t.rows,Ct=Te===void 0?1:Te,Et=m()(t,it),le=(0,s.useMemo)(function(){return Array.isArray(i)?i:[i]},[i]),te=(0,s.useRef)(null),Ce=(0,s.useRef)(null),Ee=function(){var a;return(a=te.current)===null||a===void 0||(a=a.resizableTextArea)===null||a===void 0?void 0:a.textArea};s.useImperativeHandle(n,function(){var d;return{focus:function(){var r;return(r=te.current)===null||r===void 0?void 0:r.focus()},blur:function(){var r;return(r=te.current)===null||r===void 0?void 0:r.blur()},textarea:(d=te.current)===null||d===void 0||(d=d.resizableTextArea)===null||d===void 0?void 0:d.textArea}});var _t=(0,s.useState)(!1),ye=o()(_t,2),se=ye[0],Re=ye[1],St=(0,s.useState)(""),Le=o()(St,2),Be=Le[0],Ae=Le[1],Mt=(0,s.useState)(""),Ke=o()(Mt,2),Ue=Ke[0],Ot=Ke[1],Pt=(0,s.useState)(0),Ne=o()(Pt,2),We=Ne[0],Fe=Ne[1],pt=(0,s.useState)(0),Ze=o()(pt,2),_e=Ze[0],Se=Ze[1],jt=(0,s.useState)(!1),$e=o()(jt,2),Dt=$e[0],Ve=$e[1],bt=(0,A.Z)("",{defaultValue:U,value:I}),we=o()(bt,2),G=we[0],It=we[1];(0,s.useEffect)(function(){se&&Ce.current&&(Ce.current.scrollTop=Ee().scrollTop)},[se]);var Tt=s.useMemo(function(){if(F)for(var d=0;d<le.length;d+=1){var a=le[d],r=G.lastIndexOf(a);if(r>=0)return[!0,"",a,r]}return[se,Be,Ue,We]},[F,se,le,G,Be,Ue,We]),ie=o()(Tt,4),Q=ie[0],Me=ie[1],ue=ie[2],Oe=ie[3],Pe=s.useCallback(function(d){var a;return p&&p.length>0?a=p.map(function(r){var M;return l()(l()({},r),{},{key:(M=r==null?void 0:r.key)!==null&&M!==void 0?M:r.value})}):a=(0,W.Z)(B).map(function(r){var M=r.props,V=r.key;return l()(l()({},M),{},{label:M.children,key:V||M.value})}),a.filter(function(r){return H===!1?!0:H(d,r)})},[B,p,H]),ce=s.useMemo(function(){return Pe(Me)},[Pe,Me]),yt=y(),Rt=function(a,r,M){Re(!0),Ae(a),Ot(r),Fe(M),Se(0)},J=function(a){Re(!1),Fe(0),Ae(""),yt(a)},ze=function(a){It(a),fe==null||fe(a)},Lt=function(a){var r=a.target.value;ze(r)},Xe=function(a){var r,M=a.value,V=M===void 0?"":M,w=ot(G,{measureLocation:Oe,targetText:V,prefix:ue,selectionStart:(r=Ee())===null||r===void 0?void 0:r.selectionStart,split:P}),k=w.text,ne=w.selectionLocation;ze(k),J(function(){rt(Ee(),ne)}),ge==null||ge(a,ue)},Bt=function(a){var r=a.which;if(me==null||me(a),!!Q){if(r===x.Z.UP||r===x.Z.DOWN){var M=ce.length,V=r===x.Z.UP?-1:1,w=(_e+V+M)%M;Se(w),a.preventDefault()}else if(r===x.Z.ESC)J();else if(r===x.Z.ENTER){if(a.preventDefault(),!ce.length){J();return}var k=ce[_e];Xe(k)}}},At=function(a){var r=a.key,M=a.which,V=a.target,w=tt(V),k=nt(w,le),ne=k.location,de=k.prefix;if(he==null||he(a),[x.Z.ESC,x.Z.UP,x.Z.DOWN,x.Z.ENTER].indexOf(M)===-1)if(ne!==-1){var ae=w.slice(ne+de.length),Qe=oe(ae,P),Wt=!!Pe(ae).length;Qe?(r===de||r==="Shift"||Q||ae!==Me&&Wt)&&Rt(ae,de,ne):Q&&J(),be&&Qe&&be(ae,de)}else Q&&J()},Kt=function(a){!Q&&De&&De(a)},Ye=(0,s.useRef)(),He=function(a){window.clearTimeout(Ye.current),!Dt&&a&&Ie&&Ie(a),Ve(!0)},Ge=function(a){Ye.current=window.setTimeout(function(){Ve(!1),J(),xe==null||xe(a)},0)},Ut=function(){He()},Nt=function(){Ge()};return(0,f.jsxs)("div",{className:b()(v,h),style:c,children:[(0,f.jsx)(D.Z,l()(l()({ref:te,value:G},Et),{},{rows:Ct,onChange:Lt,onKeyDown:Bt,onKeyUp:At,onPressEnter:Kt,onFocus:He,onBlur:Ge})),Q&&(0,f.jsxs)("div",{ref:Ce,className:"".concat(v,"-measure"),children:[G.slice(0,Oe),(0,f.jsx)(z.Provider,{value:{notFoundContent:K,activeIndex:_e,setActiveIndex:Se,selectOption:Xe,onFocus:Ut,onBlur:Nt},children:(0,f.jsx)(ke,{prefixCls:v,transitionName:ft,placement:mt,direction:ht,options:ce,visible:!0,getPopupContainer:gt,dropdownClassName:xt,children:(0,f.jsx)("span",{children:ue})})}),G.slice(Oe+ue.length)]})]})}),je=(0,s.forwardRef)(function(t,n){var v=t.suffix,h=t.prefixCls,c=h===void 0?"rc-mentions":h,g=t.defaultValue,i=t.value,C=t.allowClear,P=t.onChange,S=t.classNames,K=t.className,I=t.disabled,U=m()(t,ut),B=(0,A.Z)("",{defaultValue:g,value:i}),p=o()(B,2),F=p[0],Y=p[1],$=function(H){Y(H),P==null||P(H)},oe=function(){$("")};return(0,f.jsx)(R.Q,{suffix:v,prefixCls:c,value:F,allowClear:C,handleReset:oe,className:K,classNames:S,disabled:I,children:(0,f.jsx)(ct,l()({className:S==null?void 0:S.mentions,prefixCls:c,ref:n,onChange:$},U))})});je.Option=et;var dt=je,vt=dt},99349:function(){}}]);
