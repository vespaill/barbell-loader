(this["webpackJsonpbarbell-loader"]=this["webpackJsonpbarbell-loader"]||[]).push([[0],{31:function(e,a,t){},35:function(e,a,t){e.exports=t.p+"static/media/fire.fe489d1d.png"},39:function(e,a,t){e.exports=t.p+"static/media/cog.f959e642.png"},43:function(e,a,t){e.exports=t(78)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),u=t(12),o=t(27),i=t(10),s=t(33),m=t(34),d=t(42),v=t(40),p=t(5),f=t(14),b=(t(48),t(49),function(){return l.a.createElement("div",{className:"barbell-icon"},l.a.createElement("div",{className:"barbell"},l.a.createElement("div",{className:"barbell__shaft"}),l.a.createElement("div",{className:"plate-group--1"},l.a.createElement("div",{className:"plate-group__plate--small"}),l.a.createElement("div",{className:"plate-group__plate--med"}),l.a.createElement("div",{className:"plate-group__plate--large"})),l.a.createElement("div",{className:"plate-group--2"},l.a.createElement("div",{className:"plate-group__plate--small"}),l.a.createElement("div",{className:"plate-group__plate--med"}),l.a.createElement("div",{className:"plate-group__plate--large"}))))}),g=(t(50),function(){return l.a.createElement("div",{className:"plate-icon"},l.a.createElement("div",{className:"plate__outline"}),l.a.createElement("div",{className:"plate__circle"}))}),h=(t(51),function(){return l.a.createElement("div",{className:"info-icon"},l.a.createElement("div",null,"i"))}),E=t(35),y=t.n(E),w=(t(52),function(){return l.a.createElement("img",{className:"fire-icon",src:y.a,alt:"fire"})}),k=function(){var e=[{url:{pathname:"/home",from:"navBar"},component:l.a.createElement(b,null)},{url:"/warmup",component:l.a.createElement(w,null)},{url:"/inventory",component:l.a.createElement(g,null)},{url:"/about",component:l.a.createElement(h,null)}],a={className:"nav-item",activeClassName:"active-class",replace:!0};return l.a.createElement("nav",{className:"bg-red navbar fixed-bottom d-flex justify-content-between"},e.map((function(e,t){var n=e.url,r=e.component;return l.a.createElement(u.c,Object.assign({key:t},a,{to:n}),r)})))},N=t(81),q=t(37),L=function(e){var a=e.value,t=e.quantity,n=e.bgColor,r=e.onClick;return l.a.createElement("div",{className:"plate-group text-center"},l.a.createElement("button",{onClick:function(){return r(a)},className:"plate-group__plate"+(t?" bg-"+n:"")},l.a.createElement("span",{className:"center-vertically"},a)),l.a.createElement("div",{className:"plate-group__quantity",style:{opacity:t>0?"100%":"0"}},l.a.createElement("span",{className:"center-vertically unselectable"},t)))},P=function(e){var a=e.children,t=e.my,n=e.mx,r=l.a.Children.count(a)>1?"between":"center",c="my-"+(t||"1"),u="mx-"+(n||"3");return l.a.createElement(N.a,{className:"".concat(c," ").concat(u," d-flex justify-content-").concat(r)},l.a.Children.map(a,(function(e){return l.a.createElement(l.a.Fragment,null,e)})))},C=(t(58),function(e){var a=e.unit,t=e.barbell,n=e.availPlates,r=e.onUnitClick,c=e.onPlateGroupClick,u=e.onClear;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,l.a.createElement("h1",null,"Unit"),l.a.createElement("button",{className:"btn-unit",onClick:function(e){return r(e)}},a)),l.a.createElement(P,null,l.a.createElement("h1",null,"Barbell"),l.a.createElement("h1",null,t[a])),l.a.createElement(P,null,l.a.createElement("h1",null,"Available plates")),l.a.createElement(N.a,{style:{minWidth:"300px"}},n[a].map((function(e,a){var t=e.value,n=e.color,r=e.quantity,u={onClick:c,value:t,quantity:r,bgColor:n};return l.a.createElement(q.a,{key:a,xs:4},l.a.createElement(L,u))})),l.a.createElement(q.a,{xs:4},l.a.createElement("div",{className:"btn-clear-container text-center"},l.a.createElement("button",{className:"btn-clear",onClick:function(){return u()}},l.a.createElement("span",{className:"center-vertically"},"clear"))))))}),S=function(){return l.a.createElement("h1",null,"Not Found")},x=t(83),O=t(82),_=t(38),j=t(84),W=(t(30),t(31),function(e){return l.a.createElement(x.a,{onSubmit:function(a){return e.onSubmit(a)}},l.a.createElement(O.a,null,l.a.createElement(_.a,{className:"text-right",type:"number",name:"loadInput",placeholder:e.placeholder,"aria-label":"weight",min:"0",step:"0.5",onFocus:function(e){e.currentTarget.select()}}),l.a.createElement(O.a.Append,null,l.a.createElement(O.a.Text,{className:"weight-input__text"},e.unit))),l.a.createElement("div",null,l.a.createElement(j.a,{className:"mx-auto d-block",variant:"dark",type:"submit"},e.btnText)))}),T=(t(60),t(61),t(25)),R=t.n(T),U=function(e){var a=e.prevCalcdLoad,t=e.calcdLoad,n=e.unit,r=R.a.generate(),c=R.a.generate();return l.a.createElement("div",{className:"load-value center-vertically"},a>-1&&l.a.createElement("div",{key:r,className:"load-value__prev badge badge-success animate-leave"},"".concat(a," ").concat(n)),t>-1&&l.a.createElement("div",{key:c,className:"load-value__cur badge badge-success animate-enter"},"".concat(t," ").concat(n)))},B=function(e){var a=e.unit,t=e.barbellWeight,n=e.calcdPlates,r={unit:a,calcdLoad:e.calcdLoad,prevCalcdLoad:e.prevCalcdLoad};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"load"},l.a.createElement("div",{className:"load__barbell--shaft"},l.a.createElement("div",null,t)),l.a.createElement("div",{className:"load__barbell--sleeve-threshold"}),l.a.createElement("div",{className:"load__plate-group"},l.a.createElement("div",{style:{opacity:"0px"},className:"plate-container"}),n.map((function(e,a){return l.a.createElement("div",{key:a,className:"plate-container",style:{left:"".concat(32*a+32,"px")}},l.a.createElement("div",{className:"plate-container__plate center-vertically bg-".concat(e.color),style:{height:"".concat((t=7*e.value,n=45,r=315,t>=r?r:t<=n?n:t),"px")}}),l.a.createElement("div",{className:"plate-container__plate--text center-vertically"},e.value));var t,n,r})))),l.a.createElement(U,r))},F=function(e){var a=e.unit,t=e.barbellWeight,r=e.calcdPlates,c=e.calcdLoad,u=e.prevCalcdLoad,o=e.onSubmit,i=e.resetPrevLoad,s={unit:a,onSubmit:o},m={unit:a,barbellWeight:t,calcdPlates:r,calcdLoad:c,prevCalcdLoad:u},d=Object(p.g)().from;return Object(n.useEffect)((function(){"navBar"===d&&i()}),[d,i]),"navBar"===d?l.a.createElement(p.a,{to:"/home"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,l.a.createElement("h1",null,"Barbell Loader")),l.a.createElement(W,Object.assign({},s,{placeholder:"Enter Weight",btnText:"Load"})),l.a.createElement(B,m))},I=t(41),M=t(39),A=t.n(M),G={width:"100%"},D=function(){return l.a.createElement("img",{className:"cog-icon",style:G,src:A.a,alt:"cog"})},J=function(e){var a=e.unit,t=e.onSubmit,n=e.btnText,r=e.onSettings,c=e.workWeight,u={type:"number",min:"0",onFocus:function(e){e.currentTarget.select()}},o="kg"===a?2840:7e3;return l.a.createElement(x.a,{onSubmit:function(e){return t(e)}},l.a.createElement(O.a,null,l.a.createElement(_.a,Object.assign({name:"loadInput",placeholder:c>0?c:"weight",step:"0.5",max:o},u)),l.a.createElement(O.a.Append,null,l.a.createElement(O.a.Text,null,a," \xd7 ")),l.a.createElement(_.a,Object.assign({name:"numRepsInput",placeholder:"reps",max:"999",step:"1",defaultValue:"5"},u))),l.a.createElement("div",{className:"button-group"},l.a.createElement(j.a,{className:"calc-btn",type:"submit",variant:"dark"},n),l.a.createElement(j.a,{className:"settings-btn",variant:"dark",onClick:function(){return r()}},l.a.createElement(D,null))))},V=(t(70),function(e){var a=e.unit,t=e.percentage,n=e.weight,r=e.numReps,c=e.isWorkingSet,o=e.btnText,i=c?" working-weight":"";return l.a.createElement("div",{className:"set-container d-flex justify-content-between"+i},l.a.createElement("span",{className:"percentage"},Math.round(100*t),"%"),l.a.createElement("span",{className:"set"},"".concat(n," ").concat(a," \xd7 ").concat(r)),l.a.createElement(u.b,{to:"/home"},l.a.createElement(j.a,{variant:"dark",onClick:function(){return e.onClick(n)}},o)))}),H=(t(71),function(e){var a=e.show,t=e.onClose,n=e.children,r=e.header;return l.a.createElement("div",{className:"popup"+(a?"":" hide")},l.a.createElement("div",{className:"popup__content"},l.a.createElement(P,{mx:3,my:2},l.a.createElement("h1",null,r),l.a.createElement(j.a,{className:"close-btn",variant:"danger",onClick:function(){return t()}},l.a.createElement("div",null,"\xd7"))),l.a.createElement("div",null,n)))}),$=(t(72),function(e){var a=e.workWeight,t=e.workNumReps,r=e.warmUpSets,c=e.percentages,u=e.unit,o=e.onSubmit,i={unit:u,onClick:e.onLoad},s={percentage:1,weight:a,numReps:t,isWorkingSet:!0,btnText:"Start"},m=Object(n.useState)(!1),d=Object(I.a)(m,2),v=d[0],p=d[1],f=function(){p(!v)},b={unit:u,onSubmit:o,onSettings:f,workWeight:a,btnText:"Calculate"};return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,l.a.createElement("a",{href:"https://www.t-nation.com/training/most-intelligent-way-to-warm-up",target:"#blank"},l.a.createElement("h1",null,"Warm Up Sets Calculator"))),l.a.createElement(J,b),l.a.createElement("div",{className:"setList-container"},l.a.createElement("div",{className:"setList mx-auto"},r.map((function(e,a){var t={percentage:e.percentage,weight:e.weight,numReps:e.numReps};return l.a.createElement(V,Object.assign({key:a,btnText:"Load"},i,t))})),-1!==a&&l.a.createElement(V,Object.assign({},i,s)))),l.a.createElement(H,{show:v,header:"Sets Toggler",onClose:f},c.map((function(a,t){var n=a.value,r=a.on;return l.a.createElement("button",{key:t,onClick:function(){return e.togglePercentage(t)},className:"mx-auto d-block mb-3 font-weight-bold btn btn-".concat(r?"warning":"secondary text-dark")},"".concat(Math.round(100*n),"%"))}))))}),z=function(){return l.a.createElement("div",{className:"center-vertically",style:{textAlign:"justify"}},"Barbell Loader was inspired by"," ",l.a.createElement("a",{target:"#blank",href:"https://www.happyliftingco.com/pages/rackmath"},"RackMath")," and built from scratch by Victor Espaillat with the help of React.js and Bootstrap.")},K=function(e,a,t){return Math.round(function(e,a,t){var n=(e-a)%t,l=e-n;return n>=t/2?l+t:l}(e,a,t))},Q=function(e,a){var t=Math.round(a*(2-4*(e-.5)));return t>0?t:1},X=t(26),Y=function(e,a,t){var n=Math.abs(e-a),l=t.reduce((function(e,a){return e.value<a.value?e:a})).value;if(0===n)return{success:!0,warn:"justbar",calcdLoad:a,calcdPlates:[]};if(n<=l)return{success:!0,warn:"roundoff",calcdLoad:a,calcdPlates:[],roundOff:{amount:n,up:!1}};var r=Z(e,a,t);if(0===r.length)return{success:!1,warn:"notEnoughRoom"};var c,u,o=ae(r),i=o.calcdLoad,s=o.calcdPlates,m=o.roundOff;return m&&(c="roundoff",u={amount:m,up:i>e}),{success:!0,calcdLoad:i,calcdPlates:s,roundOff:u,warn:c}},Z=function(e,a,t){var n,l=t.map((function(e){return Object(i.a)({},e)})),r=[],c=te(l),u=Object(X.a)(c);try{for(u.s();!(n=u.n()).done;)for(var o=n.value.map((function(e){return Object(i.a)({},e)}));o.length>0;){var s=ee(e,a,o),m=s.success,d=s.calcdLoad,v=s.calcdPlates,p=s.roundOff;m&&r.push({calcdLoad:d,calcdPlates:v,roundOff:p}),o[0].quantity--,o[0].quantity<=0&&o.shift()}}catch(f){u.e(f)}finally{u.f()}return r},ee=function(e,a,t){var n,l=t.map((function(e){return Object(i.a)({},e)})),r=a,c=[],u=t.reduce((function(e,a){return e.value<a.value?e:a})).value,o=Object(X.a)(l);try{for(o.s();!(n=o.n()).done;)for(var s=n.value,m=s.value,d=s.color,v=s.quantity,p=0;p<v;++p){var f=2*m,b=Math.abs(e-(r+f));if(r+f<e||b<u){if(r+=f,c.push({value:m,color:d}),c.length>8)return{success:!1};s.quantity--}}}catch(h){o.e(h)}finally{o.f()}var g=Math.abs(e-r);return g>2*t.reduce((function(e,a){return e.value>a.value?e:a})).value?{success:!1}:{success:!0,calcdLoad:r,calcdPlates:c,roundOff:g}},ae=function(e){var a=e.reduce((function(e,a){return e.roundOff<a.roundOff?e:a})).roundOff,t=e.map((function(e){return Object(i.a)({},e)})).filter((function(e){return e.roundOff===a})),n=t.reduce((function(e,a){return e.calcdPlates.length<a.calcdPlates.length?e:a})).calcdPlates.length;return t.map((function(e){return Object(i.a)({},e)})).filter((function(e){return e.calcdPlates.length===n})).reduce((function(e,a){var t=e.calcdPlates.reduce((function(e,a){return e.value>a.value?e:a})).value,n=a.calcdPlates.reduce((function(e,a){return e.value>a.value?e:a})).value;return t===n?e.calcdPlates.reduce((function(e,a){return a.value===t?e+1:e}),0)>a.calcdPlates.reduce((function(e,a){return a.value===t?e+1:e}),0)?e:a:t>n?e:a}))},te=function(e){for(var a=[],t=(1<<e.length)-1;t>=0;--t){for(var n=[],l=0;l<e.length;++l)(t&1<<l)>0&&n.push(Object(i.a)({},e[l]));n.length>0&&a.push(n)}return a},ne=function(e,a,t){return e>=a&&e<=t},le=function(e,a){return e.filter((function(e){return e.quantity>0})).map((function(e){return{value:e.value,color:e.color,quantity:e.quantity*a}}))},re=(t(73),t(74),t(75),t(76),function(e){Object(d.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={unit:"lbs",barbell:{lbs:45,kg:20},availPlates:{lbs:[{value:100,quantity:0},{value:65,quantity:0},{value:55,quantity:0},{value:50,quantity:0},{value:45,quantity:8},{value:35,quantity:0},{value:30,quantity:0},{value:25,quantity:8},{value:20,quantity:0},{value:15,quantity:0},{value:12.5,quantity:0},{value:10,quantity:8},{value:7.5,quantity:0},{value:5,quantity:8},{value:2.5,quantity:8},{value:1.25,quantity:0},{value:1,quantity:0},{value:.75,quantity:0},{value:.5,quantity:0},{value:.25,quantity:0}],kg:[{value:50,quantity:0},{value:45,quantity:0},{value:35,quantity:0},{value:30,quantity:0},{value:25,quantity:0},{value:20,quantity:8},{value:15,quantity:0},{value:12.5,quantity:0},{value:10,quantity:8},{value:7.5,quantity:0},{value:5,quantity:8},{value:3,quantity:0},{value:2.5,quantity:8},{value:2,quantity:0},{value:1.5,quantity:0},{value:1.25,quantity:8},{value:1,quantity:0},{value:.75,quantity:0},{value:.5,quantity:0},{value:.25,quantity:0}]},calcdPlates:[],calcdLoad:-1,prevCalcdLoad:-1,percentages:[{value:.5,on:!0},{value:.6,on:!0},{value:.7,on:!0},{value:.8,on:!0},{value:.9,on:!0},{value:1.1,on:!0}],workWeight:-1,workNumReps:-1,warmUpSets:[]},e.handleUnitClick=function(a){var t=e.state.unit;t="lbs"===t?"kg":"lbs",e.setState({unit:t,calcdPlates:[],calcdLoad:-1,prevCalcdLoad:-1,workWeight:-1,warmUpSets:[]}),a.currentTarget.classList.add("animate-wiggle"),a.currentTarget.classList.remove("animate-wiggle")},e.handlePlateGroupClick=function(a){var t=e.state.unit,n=Object(i.a)({},e.state.availPlates),l=n[t].findIndex((function(e){return e.value===a}));n[t][l].quantity=(n[t][l].quantity+2)%10,e.setState({availPlates:n,calcdPlates:[],calcdLoad:-1,prevCalcdLoad:-1})},e.handleLoadSubmit=function(a){a.preventDefault(),a.currentTarget.firstElementChild.firstElementChild.blur(),e.handleLoad(a.currentTarget.loadInput.value)},e.handleLoad=function(a){var t=e.state.unit,n=e.state.barbell[t],l=le(Object(o.a)(e.state.availPlates[t]),.5),r=e.state.calcdLoad,c=n+2*l.reduce((function(e,a){return e+a.value*a.quantity}),0);if(ne(a,n,c)){var u=Y(a,n,l),i=u.success,s=u.warn,m=u.calcdLoad,d=u.calcdPlates,v=u.roundOff;"justbar"===s?f.b.success("Just the bar!"):"roundoff"===s?f.b.warn("Inventory limitation\u2014Load rounded ".concat(v.up?"up":"down"," by ").concat(v.amount," ").concat(t,".")):"notEnoughRoom"===s&&f.b.error("Too many plates to fit on barbell!"),i?e.setState({calcdPlates:d,calcdLoad:m,prevCalcdLoad:r}):e.setState({calcdPlates:[],calcdLoad:-1,prevCalcdLoad:r})}else e.setState({calcdPlates:[],calcdLoad:-1,prevCalcdLoad:r}),a<n?f.b.error("That's not even the bar!"):a>c&&f.b.error("Exceeded maximum allowed by inventory!")},e.handleWorkSetSubmit=function(a){a.preventDefault(),a.currentTarget.firstElementChild.querySelectorAll("input").forEach((function(e){e.blur()}));var t=a.currentTarget,n=t.loadInput,l=t.numRepsInput;e.updateWarmUpSets(n.value,l.value)},e.updateWarmUpSets=function(a,t){if(a&&t){var n=[],l=e.state,r=l.percentages,c=l.unit,u=l.barbell,o=l.availPlates,i=u[c],s=o[c].filter((function(e){return e.quantity>0})).map((function(e){return e.value})).reduce((function(e,a){return e<a?e:a}));r.forEach((function(e){var l=e.value;if(e.on){var r=K(a*l,i,2*s),c=Q(l,t);n.push({percentage:l,weight:r,numReps:c})}})),e.setState({workWeight:a,workNumReps:t,warmUpSets:n})}else e.setState({workWeight:-1,workNumReps:-1,warmUpSets:[]})},e.handlePlateGroupsClear=function(){var a=e.state.unit,t=Object(i.a)({},e.state.availPlates);t[a]=t[a].map((function(e){return{value:e.value,color:e.color,quantity:0}})),e.setState({availPlates:t})},e.resetPrevLoad=function(){e.setState({prevCalcdLoad:-1})},e.handleTogglePercentage=function(a){var t=Object(o.a)(e.state.percentages);t[a].on=!t[a].on,e.setState({percentages:t});var n=e.state,l=n.workWeight,r=n.workNumReps;l>0&&r>0&&e.updateWarmUpSets(l,r)},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a={};["lbs","kg"].forEach((function(t){a[t]=e.state.availPlates[t].map((function(e,a){return Object(i.a)(Object(i.a)({},e),{},{color:(t=a,t%6===0?"black":t%5===0?"yellow":t%4===0?"red":t%3===0?"purple":t%2===0?"green":"cyan")});var t}))})),this.setState({availPlates:a})}},{key:"render",value:function(){var e=this.state,a=e.unit,t=e.barbell,n=e.availPlates,r=e.calcdPlates,c=e.calcdLoad,u=e.prevCalcdLoad,o=e.workWeight,i=e.workNumReps,s=e.warmUpSets,m=e.percentages,d={unit:a,barbellWeight:t[a],calcdPlates:r,calcdLoad:c,prevCalcdLoad:u,onSubmit:this.handleLoadSubmit,resetPrevLoad:this.resetPrevLoad},v={unit:a,barbell:t,availPlates:n,onPlateGroupClick:this.handlePlateGroupClick,onUnitClick:this.handleUnitClick,onClear:this.handlePlateGroupsClear},b={unit:a,workWeight:o,workNumReps:i,warmUpSets:s,onSubmit:this.handleWorkSetSubmit,onLoad:this.handleLoad,percentages:m,togglePercentage:this.handleTogglePercentage},g={autoClose:2e3,hideProgressBar:!0,pauseOnFocusLoss:!1,draggable:!1,pauseOnHover:!1,newestOnTop:!0};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{paddingBottom:"70px"}},l.a.createElement(f.a,g),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/home",render:function(){return l.a.createElement(F,d)}}),l.a.createElement(p.b,{path:"/inventory",render:function(){return l.a.createElement(C,v)}}),l.a.createElement(p.b,{path:"/warmup",render:function(){return l.a.createElement($,b)}}),l.a.createElement(p.b,{path:"/about",component:z}),l.a.createElement(p.b,{path:"/not-found",component:S}),l.a.createElement(p.a,{from:"/",exact:!0,to:"/home"}),l.a.createElement(p.a,{to:"/not-found"}))),l.a.createElement(k,null))}}]),t}(n.Component));t(77),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(u.a,null,l.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.d19cc4a6.chunk.js.map