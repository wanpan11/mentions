"use strict";(self.webpackChunkrc_mentions=self.webpackChunkrc_mentions||[]).push([[433],{31326:function(N,f,e){e.r(f);var I=e(71062),s=e(45689),p=e(55943),o=e(99678),O=function(L,j){console.log("Select:",j,"-",L.value)},E=function(){console.log("onFocus")},M=function(){console.log("onBlur")};f.default=function(){return(0,o.jsx)(s.Z,{autoFocus:!0,rows:3,defaultValue:"Hello World",onSelect:O,onFocus:E,onBlur:M,options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})}},929:function(N,f,e){e.r(f);var I=e(71062),s=e(45689),p=e(55943),o=e(99678);f.default=function(){return(0,o.jsx)(s.Z,{rows:3,defaultValue:"Hello @ World @",open:!0,options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})}},19925:function(N,f,e){e.r(f),e.d(f,{default:function(){return T}});var I=e(16854),s=e.n(I),p=e(71062),o=e(45689),O=e(55943),E=e(99678),M=function(j,B){var A=p.useRef({fn:j,timer:null}),x=A.current;return p.useEffect(function(){x.fn=j},[j]),p.useCallback(function(){for(var b=arguments.length,l=new Array(b),D=0;D<b;D++)l[D]=arguments[D];x.timer&&clearTimeout(x.timer),x.timer=setTimeout(function(){x.fn.apply(x,l)},B)},[B])},T=function(){var L=p.useState(!1),j=s()(L,2),B=j[0],A=j[1],x=p.useState([]),b=s()(x,2),l=b[0],D=b[1],F=p.useRef(""),J=M(function(m){if(!m){D([]);return}fetch("https://api.github.com/search/users?q=".concat(m)).then(function(S){return S.json()}).then(function(S){var w=S.items,k=w===void 0?[]:w;if(F.current!==m){console.log("Out Of Date >",m,k);return}console.log("Fetch Users >",k),D(k.slice(0,10)),A(!1)})},800),ue=function(S){F.current=S,A(!!S),D([]),console.log("Search:",S),J(S)},V;return B?V=[{value:F.current,disabled:!0,label:"Searching '".concat(F.current,"'...")}]:V=l.map(function(m){var S=m.login,w=m.avatar_url;return{key:S,value:S,className:"dynamic-option",label:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("img",{src:w,alt:S}),(0,E.jsx)("span",{children:S})]})}}),(0,E.jsxs)("div",{children:[(0,E.jsx)(o.Z,{onSearch:ue,style:{width:"100%"},autoFocus:!0,options:V}),"search: ",(0,E.jsx)("code",{children:F.current})]})}},29267:function(N,f,e){e.r(f);var I=e(71062),s=e(45689),p=e(55943),o=e(99678);function O(E,M){var T=M.key;return T.indexOf(E)!==-1}f.default=function(){return(0,o.jsx)(s.Z,{style:{width:"100%",fontSize:30},filterOption:O,autoFocus:!0,options:[{value:"light",key:"1128",label:"Light (ID: 1128)"},{value:"bamboo",key:"903",label:"Bamboo (ID: 903)"},{value:"light",key:"1706",label:"Cat (ID: 1706)"}]})}},32060:function(N,f,e){e.r(f);var I=e(16854),s=e.n(I),p=e(71062),o=e(45689),O=e(55943),E=e(99678),M={"@":["light","bamboo","cat"],"#":["123","456","7890"]};f.default=function(){var T=p.useState("@"),L=s()(T,2),j=L[0],B=L[1],A=function(l,D){B(D)},x=M[j].map(function(b){return{value:b,key:b,label:b}});return(0,E.jsxs)("div",{children:["@ for string, # for number",(0,E.jsx)(o.Z,{prefix:["@","#"],onSearch:A,style:{width:"100%",fontSize:50},autoFocus:!0,options:x})]})}},29665:function(N,f,e){e.r(f);var I=e(71062),s=e(45689),p=e(55943),o=e(99678),O=s.Z.Option;function E(M){return console.log("~~>",M),M.length<=3}f.default=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Customize Split Logic"}),(0,o.jsx)("p",{children:"Only validate string length less than 3"}),(0,o.jsxs)(s.Z,{style:{width:"100%",fontSize:50},split:"",validateSearch:E,autoFocus:!0,children:[(0,o.jsx)(O,{value:"light",children:"Light"}),(0,o.jsx)(O,{value:"bamboo",children:"Bamboo"}),(0,o.jsx)(O,{value:"cat",children:"Cat"})]})]})}},6270:function(N,f,e){e.r(f),e.d(f,{default:function(){return O}});var I=e(71062),s=e(45689),p=e(55943),o=e(99678),O=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(s.Z,{placeholder:"disabled",disabled:!0,options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]}),(0,o.jsx)(s.Z,{placeholder:"readonly",readOnly:!0,options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]}),(0,o.jsx)("div",{style:{paddingTop:100},children:(0,o.jsx)(s.Z,{placeholder:"Support AutoSize",autoSize:!0,transitionName:"motion-zoom",options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})}),(0,o.jsx)("div",{style:{paddingTop:100},children:(0,o.jsx)(s.Z,{placeholder:"placement: top",placement:"top",transitionName:"motion-zoom",options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})}),(0,o.jsx)("div",{style:{padding:"100px 0",width:200,direction:"rtl"},children:(0,o.jsx)(s.Z,{placeholder:"direction: rtl",direction:"rtl",transitionName:"motion-zoom",options:[{value:"light",label:"Light"},{value:"bamboo",label:"Bamboo"},{value:"cat",label:"Cat"}]})})]})}},45689:function(N,f,e){e.d(f,{Z:function(){return dt}});var I=e(67104),s=e.n(I),p=e(16854),o=e.n(p),O=e(17269),E=e.n(O),M=e(12124),T=e.n(M),L=e(5044),j=e(86757),B=e(83862),A=e(41842),x=e(96181),b=e(55921),l=e(71062);function D(){var t=(0,l.useState)({id:0,callback:null}),n=o()(t,2),v=n[0],d=n[1],c=(0,l.useCallback)(function(g){d(function(i){var C=i.id;return{id:C+1,callback:g}})},[]);return(0,l.useEffect)(function(){var g;(g=v.callback)===null||g===void 0||g.call(v)},[v]),c}var F=e(30046),J=e(99571),ue=l.createContext(null),V=ue,m=e(99678);function S(t){var n=l.useContext(V),v=n.notFoundContent,d=n.activeIndex,c=n.setActiveIndex,g=n.selectOption,i=n.onFocus,C=n.onBlur,y=t.prefixCls,P=t.options,K=P[d]||{};return(0,m.jsxs)(J.ZP,{prefixCls:"".concat(y,"-menu"),activeKey:K.key,onSelect:function(W){var $=W.key,R=P.find(function(U){var X=U.key;return X===$});g(R)},onFocus:i,onBlur:C,children:[P.map(function(_,W){var $=_.key,R=_.disabled,U=_.className,X=_.style,ne=_.label;return(0,m.jsx)(J.sN,{disabled:R,className:U,style:X,onMouseEnter:function(){c(W)},children:ne},$)}),!P.length&&(0,m.jsx)(J.sN,{disabled:!0,children:v})]})}var w=S,k={bottomRight:{points:["tl","br"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},bottomLeft:{points:["tr","bl"],offset:[0,4],overflow:{adjustX:1,adjustY:1}},topRight:{points:["bl","tr"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}},topLeft:{points:["br","tl"],offset:[0,-4],overflow:{adjustX:1,adjustY:1}}},Je=function(n){var v=n.prefixCls,d=n.options,c=n.children,g=n.visible,i=n.transitionName,C=n.getPopupContainer,y=n.dropdownClassName,P=n.direction,K=n.placement,_="".concat(v,"-dropdown"),W=(0,m.jsx)(w,{prefixCls:_,options:d}),$=(0,l.useMemo)(function(){var R;return P==="rtl"?R=K==="top"?"topLeft":"bottomLeft":R=K==="top"?"topRight":"bottomRight",R},[P,K]);return(0,m.jsx)(F.Z,{prefixCls:_,popupVisible:g,popup:W,popupPlacement:$,popupTransitionName:i,builtinPlacements:k,getPopupContainer:C,popupClassName:y,children:c})},ke=Je,qe=function(){return null},et=qe;function tt(t){var n=t.selectionStart;return t.value.slice(0,n)}function nt(t,n){return n.reduce(function(v,d){var c=t.lastIndexOf(d);return c>v.location?{location:c,prefix:d}:v},{location:-1,prefix:""})}function Pe(t){return(t||"").toLowerCase()}function at(t,n,v){var d=t[0];if(!d||d===v)return t;for(var c=t,g=n.length,i=0;i<g;i+=1)if(Pe(c[i])!==Pe(n[i])){c=c.slice(i);break}else i===g-1&&(c=c.slice(g));return c}function ot(t,n){var v=n.measureLocation,d=n.prefix,c=n.targetText,g=n.selectionStart,i=n.split,C=t.slice(0,v);C[C.length-i.length]===i&&(C=C.slice(0,C.length-i.length)),C&&(C="".concat(C).concat(i));var y=at(t.slice(g),c.slice(g-v-d.length),i);y.slice(0,i.length)===i&&(y=y.slice(i.length));var P="".concat(C).concat(d).concat(c).concat(i);return{text:"".concat(P).concat(y),selectionLocation:P.length}}function rt(t,n){t.setSelectionRange(n,n),t.blur(),t.focus()}function lt(t,n){return!n||t.indexOf(n)===-1}function st(t,n){var v=n.value,d=v===void 0?"":v,c=t.toLowerCase();return d.toLowerCase().indexOf(c)!==-1}var it=["prefixCls","className","style","prefix","split","notFoundContent","value","defaultValue","children","options","open","validateSearch","filterOption","onChange","onKeyDown","onKeyUp","onPressEnter","onSearch","onSelect","onFocus","onBlur","transitionName","placement","direction","getPopupContainer","dropdownClassName","rows"],ut=["suffix","prefixCls","classes","value"],ct=(0,l.forwardRef)(function(t,n){var v=t.prefixCls,d=v===void 0?"rc-mentions":v,c=t.className,g=t.style,i=t.prefix,C=i===void 0?"@":i,y=t.split,P=y===void 0?" ":y,K=t.notFoundContent,_=K===void 0?"Not Found":K,W=t.value,$=t.defaultValue,R=t.children,U=t.options,X=t.open,ne=t.validateSearch,je=ne===void 0?lt:ne,De=t.filterOption,ce=De===void 0?st:De,ve=t.onChange,de=t.onKeyDown,fe=t.onKeyUp,be=t.onPressEnter,ye=t.onSearch,me=t.onSelect,_e=t.onFocus,he=t.onBlur,ft=t.transitionName,mt=t.placement,ht=t.direction,xt=t.getPopupContainer,gt=t.dropdownClassName,Ie=t.rows,Ct=Ie===void 0?1:Ie,Et=E()(t,it),ae=(0,l.useMemo)(function(){return Array.isArray(C)?C:[C]},[C]),q=(0,l.useRef)(null),xe=(0,l.useRef)(null),ge=function(){var a,r;return(a=q.current)===null||a===void 0||(r=a.resizableTextArea)===null||r===void 0?void 0:r.textArea};l.useImperativeHandle(n,function(){var h,a;return{focus:function(){var u;return(u=q.current)===null||u===void 0?void 0:u.focus()},blur:function(){var u;return(u=q.current)===null||u===void 0?void 0:u.blur()},textarea:(h=q.current)===null||h===void 0||(a=h.resizableTextArea)===null||a===void 0?void 0:a.textArea}});var pt=(0,l.useState)(!1),Te=o()(pt,2),oe=Te[0],Re=Te[1],St=(0,l.useState)(""),Le=o()(St,2),Be=Le[0],Ae=Le[1],Ot=(0,l.useState)(""),Ke=o()(Ot,2),Ue=Ke[0],Pt=Ke[1],Mt=(0,l.useState)(0),Ne=o()(Mt,2),Fe=Ne[0],We=Ne[1],jt=(0,l.useState)(0),$e=o()(jt,2),Ce=$e[0],Ee=$e[1],Dt=(0,l.useState)(!1),Ze=o()(Dt,2),bt=Ze[0],ze=Ze[1],yt=(0,A.Z)("",{defaultValue:$,value:W}),Ve=o()(yt,2),Y=Ve[0],_t=Ve[1];(0,l.useEffect)(function(){oe&&xe.current&&(xe.current.scrollTop=ge().scrollTop)},[oe]);var It=l.useMemo(function(){if(X)for(var h=0;h<ae.length;h+=1){var a=ae[h],r=Y.lastIndexOf(a);if(r>=0)return[!0,"",a,r]}return[oe,Be,Ue,Fe]},[X,oe,ae,Y,Be,Ue,Fe]),re=o()(It,4),H=re[0],pe=re[1],le=re[2],Se=re[3],Oe=l.useCallback(function(h){var a;return U&&U.length>0?a=U.map(function(r){var u;return s()(s()({},r),{},{key:(u=r==null?void 0:r.key)!==null&&u!==void 0?u:r.value})}):a=(0,B.Z)(R).map(function(r){var u=r.props,Z=r.key;return s()(s()({},u),{},{label:u.children,key:Z||u.value})}),a.filter(function(r){return ce===!1?!0:ce(h,r)})},[R,U,ce]),se=l.useMemo(function(){return Oe(pe)},[Oe,pe]),Tt=D(),Rt=function(a,r,u){Re(!0),Ae(a),Pt(r),We(u),Ee(0)},G=function(a){Re(!1),We(0),Ae(""),Tt(a)},we=function(a){_t(a),ve==null||ve(a)},Lt=function(a){var r=a.target.value;we(r)},Xe=function(a){var r,u=a.value,Z=u===void 0?"":u,z=ot(Y,{measureLocation:Se,targetText:Z,prefix:le,selectionStart:(r=ge())===null||r===void 0?void 0:r.selectionStart,split:P}),Q=z.text,ee=z.selectionLocation;we(Q),G(function(){rt(ge(),ee)}),me==null||me(a,le)},Bt=function(a){var r=a.which;if(de==null||de(a),!!H){if(r===x.Z.UP||r===x.Z.DOWN){var u=se.length,Z=r===x.Z.UP?-1:1,z=(Ce+Z+u)%u;Ee(z),a.preventDefault()}else if(r===x.Z.ESC)G();else if(r===x.Z.ENTER){if(a.preventDefault(),!se.length){G();return}var Q=se[Ce];Xe(Q)}}},At=function(a){var r=a.key,u=a.which,Z=a.target,z=tt(Z),Q=nt(z,ae),ee=Q.location,ie=Q.prefix;if(fe==null||fe(a),[x.Z.ESC,x.Z.UP,x.Z.DOWN,x.Z.ENTER].indexOf(u)===-1)if(ee!==-1){var te=z.slice(ee+ie.length),Qe=je(te,P),Ft=!!Oe(te).length;Qe?(r===ie||r==="Shift"||H||te!==pe&&Ft)&&Rt(te,ie,ee):H&&G(),ye&&Qe&&ye(te,ie)}else H&&G()},Kt=function(a){!H&&be&&be(a)},Ye=(0,l.useRef)(),He=function(a){window.clearTimeout(Ye.current),!bt&&a&&_e&&_e(a),ze(!0)},Ge=function(a){Ye.current=window.setTimeout(function(){ze(!1),G(),he==null||he(a)},0)},Ut=function(){He()},Nt=function(){Ge()};return(0,m.jsxs)("div",{className:T()(d,c),style:g,children:[(0,m.jsx)(j.Z,s()(s()({ref:q,value:Y},Et),{},{rows:Ct,onChange:Lt,onKeyDown:Bt,onKeyUp:At,onPressEnter:Kt,onFocus:He,onBlur:Ge})),H&&(0,m.jsxs)("div",{ref:xe,className:"".concat(d,"-measure"),children:[Y.slice(0,Se),(0,m.jsx)(V.Provider,{value:{notFoundContent:_,activeIndex:Ce,setActiveIndex:Ee,selectOption:Xe,onFocus:Ut,onBlur:Nt},children:(0,m.jsx)(ke,{prefixCls:d,transitionName:ft,placement:mt,direction:ht,options:se,visible:!0,getPopupContainer:xt,dropdownClassName:gt,children:(0,m.jsx)("span",{children:le})})}),Y.slice(Se+le.length)]})]})}),Me=(0,l.forwardRef)(function(t,n){var v=t.suffix,d=t.prefixCls,c=t.classes,g=t.value,i=E()(t,ut);return(0,m.jsx)(L.Q,{inputElement:(0,m.jsx)(ct,s()({prefixCls:d,ref:n},i)),suffix:v,prefixCls:d,classes:c,value:g})});Me.Option=et;var vt=Me,dt=vt},55943:function(){}}]);
