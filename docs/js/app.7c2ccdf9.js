(function(e){function t(t){for(var o,i,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"33a91f3a"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=o);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var l=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"115d":function(e,t,n){"use strict";var o=n("4bc7"),a=n.n(o);a.a},"30e4":function(e,t,n){},"4a4d":function(e,t,n){"use strict";var o=n("30e4"),a=n.n(o);a.a},"4bc7":function(e,t,n){},"4e30":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("99af"),n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("863b"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-top-bar"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("game-board")],1)],1),n("v-footer",{attrs:{app:""}},[e._v(" Copyleft 2000 Skaman Sam Tyler ")])],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{dense:""}},[n("h2",[e._v("$"+e._s(e._f("unitsToName")(e.total)))]),n("v-col",{attrs:{cols:"12"}},e._l(e.generators,(function(t,o){return n("generator",{key:o,attrs:{name:t.name,color:t.color,value:t.value,cost:t.cost,auto:t.auto,increment:t.increment,initialCount:t.initialCount,speed:t.speed,icon:t.icon,gameTotal:e.total},on:{complete:e.sum}})})),1)],1)],1)},s=[],l=n("4128"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:e.color,dark:"",elevation:"5"},on:{click:e.startGenerator}},[n("v-list-item",[n("v-list-item-avatar",{attrs:{color:"grey"}},[n("v-icon",{attrs:{dark:"",color:e.color}},[e._v(e._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[e._v(e._s(e.name))]),n("v-list-item-subtitle",[e._v("Value: $"+e._s(e.value))]),n("v-list-item-subtitle",[e._v("Owned: "+e._s(e.count))]),n("v-row",{attrs:{justify:"space-between"}},[n("v-btn",{attrs:{elevation:"5",text:"",disabled:e.gameTotal.lessThan(e.cost)},on:{click:function(t){t.stopPropagation(),e.buyGenerator(e.gameTotal.dividedBy(e.cost).floor())}}},[e._v(" Buy Max ("+e._s(e._f("unitsToName")(e.gameTotal.dividedBy(e.cost).floor()||1))+"): $"+e._s(Math.floor(e.gameTotal.dividedBy(e.cost)))+" ")]),n("v-btn",{attrs:{elevation:"5",disabled:e.gameTotal.lessThan(e.cost),text:""},on:{click:function(t){return t.stopPropagation(),e.buyGenerator(1)}}},[e._v(" Buy 1: $"+e._s(e._f("unitsToName")(e.cost)))]),n("v-btn",{attrs:{elevation:"5",disabled:e.gameTotal.lessThan(e.cost.times(10)),text:""},on:{click:function(t){return t.stopPropagation(),e.buyGenerator(10)}}},[e._v(" Buy 10: $ "+e._s(e._f("unitsToName")(10*e.cost)))]),n("v-btn",{attrs:{elevation:"5",disabled:e.gameTotal.lessThan(e.cost.times(100)),text:""},on:{click:function(t){return t.stopPropagation(),e.buyGenerator(100)}}},[e._v(" Buy 100: $"+e._s(e._f("unitsToName")(100*e.cost)))]),n("v-btn",{attrs:{elevation:"5",disabled:e.gameTotal.lessThan(e.auto),text:""},on:{click:function(t){t.stopPropagation(),e.$emit("complete",e.auto.negated())}}},[e._v(" Buy Auto: $"+e._s(e._f("unitsToName")(e.auto)))])],1)],1)],1),n("v-progress-linear",{attrs:{bottom:!0,height:30,rounded:!0,striped:e.alwaysOn,value:e.completion,color:"light-blue"}},[e._v(e._s(e.completion)+"%")])],1)},d=[],p=(n("a9e3"),{name:"generator",data:function(){return{alwaysOn:!1,completion:0,count:1,generating:!1,timer:null}},props:{name:{type:String,default:"Defalut Name",description:"The the name of the generator."},gameTotal:{type:l["Decimal"],default:new l["Decimal"]("0"),description:"The accumulated total of this board."},color:{type:String,default:"cccccc",description:"The color of the card."},icon:{type:String,default:"mdi-account-circle",description:"The mdi icon of the generator"},value:{type:l["Decimal"],default:new l["Decimal"]("0"),description:"The output value of each generator. Must be a Decimal object, or respond to `add`."},cost:{type:l["Decimal"],default:new l["Decimal"]("5.00"),description:"The cost of the next generator."},auto:{type:l["Decimal"],default:new l["Decimal"]("50.00"),description:"The cost of automating the generator."},increment:{type:l["Decimal"],default:new l["Decimal"]("1.00"),description:"The yield of each generator we own."},initialCount:{type:l["Decimal"],default:new l["Decimal"]("0"),description:"How many generators we start with."},speed:{type:Number,default:0,description:"How many seconds it takes this generator to complete."},updatespeed:{type:Number,default:250,description:"How many milliseconds before updating the timer."}},mounted:function(){this.count=this.initialCount},methods:{startGenerator:function(){var e=this;return!this.generating&&(this.generating=!0,this.timer=setInterval((function(){e.completion=e.completion+100/e.speed,e.completion>=100&&e.$nextTick((function(){e.generating=!1,e.completion=0,e.$emit("complete",e.value.times(e.count)),clearInterval(e.timer)}))}),this.updatespeed),!0)},buyGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;console.log("Buying generator"),this.count=this.count.add(e),this.$emit("complete",this.cost.times(e).negated())}}}),m=p,f=(n("115d"),n("2877")),v=n("6544"),g=n.n(v),h=n("8336"),b=n("b0af"),y=n("132d"),w=n("da13"),_=n("8270"),T=n("5d23"),k=n("8e36"),V=n("0fd9"),j=Object(f["a"])(m,u,d,!1,null,null,null),O=j.exports;g()(j,{VBtn:h["a"],VCard:b["a"],VIcon:y["a"],VListItem:w["a"],VListItemAvatar:_["a"],VListItemContent:T["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VProgressLinear:k["a"],VRow:V["a"]});var D={name:"game-board",components:{Generator:O},data:function(){return{total:new l["Decimal"](0),generators:[{value:new l["Decimal"](.5),cost:new l["Decimal"](5),auto:new l["Decimal"](50),increment:new l["Decimal"](1),initialCount:new l["Decimal"](1),speed:5,name:"Generator 0",color:"#111",icon:"mdi-home"}]}},methods:{addGenerator:function(e){var t=this.generators[this.generators.length-1];this.generators.push({value:t.value.times(e),cost:t.cost.times(e),auto:t.auto.times(e),increment:t.increment.times(e),initialCount:1,speed:t.speed.times(2),name:"Generator ".concat(this.generators.length),color:"#111",icon:"mdi-home"})},sum:function(e){this.total=this.total.add(e)}}},x=D,C=(n("cac3"),n("62ad")),B=n("a523"),P=Object(f["a"])(x,c,s,!1,null,null,null),$=P.exports;g()(P,{VCol:C["a"],VContainer:B["a"],VRow:V["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("h2",[e._v("Easy Incremental")])],1),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(t){t.preventDefault(),e.showAbout=!e.showAbout}}},[n("span",{staticClass:"mr-2"},[e._v("About")]),n("v-icon",[e._v("mdi-open-in-new")])],1)],1)},S=[],N={name:"app-top-bar",data:function(){return{showAbout:!1}}},G=N,I=(n("4a4d"),n("40dc")),E=n("adda"),L=n("2fa4"),M=Object(f["a"])(G,A,S,!1,null,null,null),q=M.exports;g()(M,{VAppBar:I["a"],VBtn:h["a"],VIcon:y["a"],VImg:E["a"],VSpacer:L["a"]});var F={name:"App",components:{GameBoard:$,AppTopBar:q},data:function(){return{}}},H=F,J=n("7496"),R=n("a75b"),z=n("553a"),K=Object(f["a"])(H,r,i,!1,null,null,null),Q=K.exports;g()(K,{VApp:J["a"],VContainer:B["a"],VContent:R["a"],VFooter:z["a"]});var U=n("9483");Object(U["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var W=n("8c4f");o["a"].use(W["a"]);var X=[{path:"/",name:"gameBoard",component:$},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Y=new W["a"]({routes:X}),Z=Y,ee=n("2f62"),te=n("0e44");o["a"].use(ee["a"]);var ne=new ee["a"].Store({plugins:[Object(te["a"])({key:"easy-incremental"})],state:{generators:[],total:"0"},mutations:{},actions:{},modules:{}}),oe=n("f309"),ae=n("8fa2");o["a"].use(oe["a"]);var re=new oe["a"]({preset:ae["preset"],rtl:!1,theme:{dark:!0}});o["a"].config.productionTip=!1,o["a"].filter("unitsToName",(function(e){return!e||0===e||"0"===e||Object.prototype.hasOwnProperty.call("equals",0)?"0":"".concat(e," ").concat(Object(a["b"])(e,a["a"]))})),new o["a"]({router:Z,store:ne,vuetify:re,render:function(e){return e(Q)}}).$mount("#app")},cac3:function(e,t,n){"use strict";var o=n("4e30"),a=n.n(o);a.a}});
//# sourceMappingURL=app.7c2ccdf9.js.map