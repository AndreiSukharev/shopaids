(this.webpackJsonptest_react=this.webpackJsonptest_react||[]).push([[0],{243:function(e,t,a){e.exports=a(449)},248:function(e,t,a){},449:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),o=a.n(r),c=a(47),i=(a(248),a(70)),s=a(488),m=a(491),u=a(493),p=a(220),d=a.n(p),E=a(221),h=a.n(E),f=a(222),v=a.n(f),b=a(223),g=a.n(b),y=a(22),S=Object(s.a)({root:{}});function k(){var e=S(),t=l.a.useState(0),a=Object(i.a)(t,2),n=a[0],r=a[1];return l.a.createElement(m.a,{style:{zIndex:100,position:"relative"},value:n,onChange:function(e,t){r(t)},showLabels:!0,className:e.root},l.a.createElement(u.a,{component:y.a,label:"Home",to:"/shopaids/home",icon:l.a.createElement(d.a,null)}),l.a.createElement(u.a,{component:y.a,label:"Stores",to:"/shopaids/stores",icon:l.a.createElement(h.a,null)}),l.a.createElement(u.a,{component:y.a,label:"List",to:"/shopaids/list",icon:l.a.createElement(v.a,null)}),l.a.createElement(u.a,{component:y.a,label:"Profile",to:"/shopaids/profile",icon:l.a.createElement(g.a,null)}))}var w=a(508),x=a(509),C=a(496),j=function(){return l.a.createElement("div",null,l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(x.a,{id:"standard-basic",label:"Login"})),l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(x.a,{id:"filled-basic",label:"Password"})),l.a.createElement(C.a,{variant:"contained",color:"primary",component:y.a,to:"/shopaids/home"},"Sign In"))},O=a(495),N=a(497),P=a(501),M=a(502),T=a(224),B=a.n(T),I=a(225),G=a.n(I),R=a(226),A=a.n(R),F=a(227),L=a.n(F),W=a(514),z=a(498),D=a(500),V=a(499),_=a(84),q=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},large:{width:e.spacing(17),height:e.spacing(17)}}}));function H(){var e=q();e.bullet;return l.a.createElement("div",{className:e.root},l.a.createElement(z.a,null,l.a.createElement(V.a,null,l.a.createElement(_.a,{variant:"h5",component:"h2"},"My Profile"),l.a.createElement(W.a,{className:e.large,src:"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/924/545/datas/profile.png"})),l.a.createElement(D.a,null,l.a.createElement(C.a,{size:"small"},"Monique Ho"))),l.a.createElement(O.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(N.a,{button:!0},l.a.createElement(P.a,null,l.a.createElement(B.a,null)),l.a.createElement(M.a,{primary:"Account"})),l.a.createElement(N.a,{button:!0},l.a.createElement(P.a,null,l.a.createElement(G.a,null)),l.a.createElement(M.a,{primary:"Shopping history"})),l.a.createElement(N.a,{button:!0},l.a.createElement(P.a,null,l.a.createElement(A.a,null)),l.a.createElement(M.a,{primary:"Favourites"})),l.a.createElement(N.a,{button:!0},l.a.createElement(P.a,null,l.a.createElement(L.a,null)),l.a.createElement(M.a,{primary:"Settings"}))))}var J=a(69),Q=a(113),U=a(494),Y=a(505),Z=a(451),$=a(503),K=a(450),X=a(512),ee=a(511),te=a(504),ae=Object(s.a)((function(e){return{m:{margin:16},padded:{padding:16},verticalFlex:{display:"flex",flexDirection:"column"},flex:{display:"flex",flexDirection:"row"},flexItemMain:{flexShrink:1,flexGrow:1,overflowY:"auto"},flexItemSecondary:{flexShrink:0},formGroup:{margin:e.spacing(3)},buttonCustom:{borderRadius:3,color:"primary"}}}));function ne(){var e=ae(),t=l.a.useState({milk:!1,bread:!1,paper:!1}),a=Object(i.a)(t,2),n=a[0],r=a[1],o=function(e){r(Object(Q.a)({},n,Object(J.a)({},e.target.name,e.target.checked)))};return l.a.createElement("div",{className:[e.verticalFlex,e.p]},l.a.createElement("h2",null,l.a.createElement(_.a,{color:"",variant:"h5"},"Shopping List")),l.a.createElement("form",{noValidate:!0},l.a.createElement(x.a,{id:"date",label:"Date",type:"date",defaultValue:"2020-04-11",InputLabelProps:{shrink:!0}})),l.a.createElement(K.a,{className:[e.flexItemMain]},l.a.createElement("div",null,["Eggs","Pasta","Toilet rolls"].map((function(t,a){return l.a.createElement(Z.a,{className:e.formGroup},l.a.createElement("div",{className:e.flex},l.a.createElement($.a,{className:e.flexItemMain,control:l.a.createElement(X.a,{color:"primary",checked:n[t],onChange:o,name:t}),label:t}),l.a.createElement(x.a,{id:"".concat(t,"-qty"),value:"".concat(a+1),label:"Qty",size:"small"})),l.a.createElement("div",null,l.a.createElement(_.a,{color:"textSecondary",variant:"caption"},"Indicate stock level for this item"),l.a.createElement(U.a,{component:"fieldset"},l.a.createElement(te.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top"},l.a.createElement($.a,{value:"0",control:l.a.createElement(ee.a,{color:"primary"}),label:"0%",labelPlacement:"start"}),l.a.createElement($.a,{value:"25",control:l.a.createElement(ee.a,{color:"primary"}),label:"25%",labelPlacement:"start"}),l.a.createElement($.a,{value:"50",control:l.a.createElement(ee.a,{color:"primary"}),label:"50%",labelPlacement:"start"}),l.a.createElement($.a,{value:"75",control:l.a.createElement(ee.a,{color:"primary"}),label:">75%",labelPlacement:"start"})))),l.a.createElement(Y.a,null))})))),l.a.createElement("div",{className:e.m},l.a.createElement(C.a,{variant:"contained",color:"primary",component:y.a,to:"/shopaids/profile",fullWidth:!0},"Done")))}var le=a(24),re=a(115),oe=a(116),ce=a(118),ie=a(117),se=a(228),me=a.n(se),ue=a(149),pe=a(58),de=function(e){Object(ce.a)(a,e);var t=Object(ie.a)(a);function a(){return Object(re.a)(this,a),t.apply(this,arguments)}return Object(oe.a)(a,[{key:"render",value:function(){return l.a.createElement(pe.GoogleMap,{ref:this.props.forwardedRef,defaultZoom:15,defaultCenter:{lat:51.522114,lng:-.157575}},this.props.markers&&this.props.markers.map((function(e){return l.a.createElement(pe.Marker,{position:{lat:e.lat,lng:e.lng},label:"S",options:{}})})),this.props.userPosition&&l.a.createElement(pe.Marker,{position:this.props.userPosition,label:"me"}),this.props.route&&l.a.createElement(pe.Polyline,{path:this.props.route,options:{strokeColor:"#E25F3E"}}))}}]),a}(l.a.Component),Ee=Object(ue.a)(Object(ue.b)({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})}),pe.withScriptjs,pe.withGoogleMap)(de),he=l.a.forwardRef((function(e,t){var a=Object.assign({},e);return l.a.createElement(Ee,Object.assign({},a,{forwardedRef:t}))})),fe=a(513),ve=a(506),be=a(507),ge=function(e){Object(ce.a)(a,e);var t=Object(ie.a)(a);function a(){var e;Object(re.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).mapRef=function(t){t&&(e.map=t)},e.state={selectedShop:null,showCurtain:!0,userPosition:{lat:51.521114,lng:-.157275},shops:[{lat:51.522114,lng:-.157575,name:"Tesco Superstore",travelTime:10,workTime:"Open Now | Closes 10:00PM",address:"15 Great Suffolk St",crowd:[3,4,5,9,7,8],inStock:"3/3"},{lat:51.513117,lng:-.157235,name:"Giddy Grocer",travelTime:23,workTime:"Open Now | Closes 7:00PM",address:"27 Well St, Hackney",crowd:[3,4,5,2,1,0],inStock:"1/3"}]},e.selectShop=function(t){e.setState({selectedShop:t})},e.focusesSelectedStore=function(){e.map.panTo(e.state.selectedShop),e.setState({selectedShop:null,showCurtain:!1,route:[e.state.selectedShop,e.state.userPosition]})},e.toggleCurtain=function(){e.setState({showCurtain:!e.state.showCurtain})},e}return Object(oe.a)(a,[{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement(he,{markers:this.state.shops,userPosition:this.state.userPosition,ref:this.mapRef,route:this.state.route}),n.createElement("div",{className:me()("bottom-curtain",{"bottom-curtain_hidden":!this.state.showCurtain})},n.createElement("div",{className:"bottom-curtain-handle",onClick:this.toggleCurtain}),n.createElement("div",{className:"bottom-curtain-content"},this.state.shops.map((function(t){return n.createElement("div",{className:"bottom-curtain-list-item",onClick:function(){return e.selectShop(t)}},n.createElement("div",{style:{flexGrow:1}},n.createElement("div",null,n.createElement(_.a,{variant:"body1"},t.name)),n.createElement("div",null,n.createElement(_.a,{color:"textSecondary",variant:"caption"},t.workTime)),n.createElement("div",null,n.createElement(_.a,{color:"textSecondary",variant:"caption"},t.address)),n.createElement("div",null,n.createElement(_.a,{color:"textSecondary",variant:"caption"},"Crowd:"),t.crowd.map((function(e){return n.createElement("div",{style:{marginLeft:1,width:2,height:2*e,display:"inline-block",backgroundColor:"rgb(".concat(30*e,", ").concat(255-50*e,", 20)")}})})))),n.createElement("div",null,n.createElement("div",null,n.createElement(_.a,{color:"textSecondary",variant:"caption"},"Travel time"),n.createElement(_.a,{color:"secondary"},t.travelTime," min")),n.createElement(Y.a,null),n.createElement("div",null,n.createElement(_.a,{color:"textSecondary",variant:"caption"},"Availability"),n.createElement(_.a,{color:"secondary"},t.inStock))))})))),this.state.selectedShop&&n.createElement(fe.a,{open:!0,onClose:function(){return e.selectShop(null)}},n.createElement(ve.a,null,n.createElement(_.a,{variant:"subtitle1"},"Are you at this store now?")," ",n.createElement("br",null),n.createElement(K.a,null,n.createElement("div",{style:{padding:16}},n.createElement(_.a,{variant:"body1"},this.state.selectedShop.name),n.createElement(_.a,{variant:"caption",color:"textSecondary"},this.state.selectedShop.address)))),n.createElement(be.a,null,n.createElement(C.a,{color:"primary",variant:"outlined",onClick:this.focusesSelectedStore},"no"),n.createElement(C.a,{color:"primary",variant:"contained",component:y.a,to:"/shopaids/list"},"yes"))))}}]),a}(n.Component);function ye(){var e=ae(),t=l.a.useState({milk:!1,bread:!1,paper:!1}),a=Object(i.a)(t,2),n=a[0],r=a[1],o=function(e){r(Object(Q.a)({},n,Object(J.a)({},e.target.name,e.target.checked)))};return l.a.createElement("div",{className:[e.verticalFlex,e.p]},l.a.createElement("h2",null,l.a.createElement(_.a,{color:"",variant:"h5"},"What items do you want to buy?")),l.a.createElement(K.a,{className:[e.flexItemMain]},l.a.createElement("div",null,["Eggs","Pasta","Toilet rolls"].map((function(t){return l.a.createElement(Z.a,{className:e.formGroup},l.a.createElement("div",{className:e.flex},l.a.createElement($.a,{className:e.flexItemMain,control:l.a.createElement(X.a,{color:"primary",checked:n[t],onChange:o,name:t}),label:t}),l.a.createElement(x.a,{id:"".concat(t,"-qty"),label:"Qty",size:"small"})))})))),l.a.createElement("div",{className:e.m},l.a.createElement(C.a,{variant:"contained",color:"primary",component:y.a,to:"/shopaids/stores",fullWidth:!0},"Continue")))}var Se=a(232),ke=Object(Se.a)({palette:{primary:{main:"#E25F3E",dark:"#B99471",light:"#F0E4D7"},secondary:{main:"#5156B5",dark:"#353BA8",light:"#777CCB"},background:{paper:"rgba(250, 248, 248, 0.92)"}},overrides:{MuiButton:{root:{borderRadius:30}},MuiButtonBase:{root:{borderRadius:30}}}}),we=document.getElementsByTagName("base")[0].getAttribute("href"),xe=Object(le.a)({basename:we});var Ce=function(){return l.a.createElement(w.a,{theme:ke},l.a.createElement(c.b,{history:xe},l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"page-content"},l.a.createElement(c.a,{exact:!0,path:"/shopaids",component:j}),l.a.createElement(c.a,{exact:!0,path:"/shopaids/home",component:ye}),l.a.createElement(c.a,{exact:!0,path:"/shopaids/stores",component:ge}),l.a.createElement(c.a,{exact:!0,path:"/shopaids/list",component:ne}),l.a.createElement(c.a,{exact:!0,path:"/shopaids/profile",component:H})),l.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[243,1,2]]]);
//# sourceMappingURL=main.fc7245ad.chunk.js.map