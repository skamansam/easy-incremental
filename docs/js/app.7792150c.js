(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"33a91f3a"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"115d":function(t,e,n){"use strict";var o=n("4bc7"),a=n.n(o);a.a},"30e4":function(t,e,n){},"4a4d":function(t,e,n){"use strict";var o=n("30e4"),a=n.n(o);a.a},"4bc7":function(t,e,n){},"4e30":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("99af"),n("4de4"),n("d3b7"),n("25f0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("863b"),r=n("4128"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("app-top-bar",{attrs:{total:t.total}}),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("game-board",{on:{totalUpdated:function(e){t.total=e}}})],1)],1),n("v-footer",{attrs:{app:""}},[t._v(" Copyleft 2000 Skaman Sam Tyler ")])],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{dense:""}},[n("h2",[t._v("$"+t._s(t._f("withUnits")(t.total)))]),n("v-col",{attrs:{cols:"12"}},t._l(t.generators,(function(e,o){return n("generator",{key:o,attrs:{name:e.name,color:e.color,value:e.value,cost:e.cost,autoCost:e.autoCost,increment:e.increment,initialCount:e.initialCount,speed:e.speed,icon:e.icon,gameTotal:t.total},on:{valueChanged:t.updateTotal}})})),1)],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:t.color,dark:"",elevation:"5"},on:{click:t.startGenerator}},[n("v-list-item",[n("v-list-item-avatar",{attrs:{color:"grey"}},[n("v-icon",{attrs:{dark:"",color:t.color}},[t._v(t._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[t._v(t._s(t.name))]),n("v-list-item-subtitle",{staticClass:"d-flex justify-space-around mb-6"},[n("div",{attrs:{outline:""}},[t._v("Value: $"+t._s(t.value.times(t.count)))]),n("div",{attrs:{outline:""}},[t._v("Owned: "+t._s(t.count))]),n("div",{attrs:{outline:""}},[t._v("Completion: "+t._s(t.speed)+"s")]),n("div",{attrs:{outline:""}},[t._v("Output/s: $"+t._s(t.value.times(t.count)/t.speed))]),n("div",{attrs:{outline:""}},[t._v("Update: "+t._s(t.updatespeed)+"ms")])]),n("v-row",{attrs:{justify:"space-between"}},[n("v-btn",{attrs:{elevation:"5",text:"",disabled:t.gameTotal.lessThan(t.cost)},on:{click:function(e){e.stopPropagation(),t.buyGenerator(t.gameTotal.dividedBy(t.cost).floor())}}},[t._v(" Buy Max ("+t._s(t._f("withUnits")(t.gameTotal.dividedBy(t.cost).floor()||1))+"): $"+t._s(Math.floor(t.gameTotal.dividedBy(t.cost)))+" ")]),n("v-btn",{attrs:{elevation:"5",disabled:t.gameTotal.lessThan(t.cost),text:""},on:{click:function(e){return e.stopPropagation(),t.buyGenerator(1)}}},[t._v(" Buy 1: $"+t._s(t._f("withUnits")(t.cost)))]),n("v-btn",{attrs:{elevation:"5",disabled:t.gameTotal.lessThan(t.cost.times(10)),text:""},on:{click:function(e){return e.stopPropagation(),t.buyGenerator(10)}}},[t._v(" Buy 10: $ "+t._s(t._f("withUnits")(10*t.cost)))]),n("v-btn",{attrs:{elevation:"5",disabled:t.gameTotal.lessThan(t.cost.times(100)),text:""},on:{click:function(e){return e.stopPropagation(),t.buyGenerator(100)}}},[t._v(" Buy 100: $"+t._s(t._f("withUnits")(100*t.cost)))]),n("v-btn",{attrs:{elevation:"5",disabled:t.gameTotal.lessThan(t.autoCost),text:""},on:{click:function(e){return e.stopPropagation(),t.startAuto(e)}}},[t._v(" Buy Auto: $"+t._s(t._f("withUnits")(t.autoCost)))])],1)],1)],1),n("v-progress-linear",{attrs:{bottom:!0,height:30,rounded:!0,striped:t.alwaysOn,value:t.completion,color:"light-blue"}},[t._v(t._s(t.completion)+"%")])],1)},d=[],p=(n("a9e3"),{name:"generator",data:function(){return{alwaysOn:!1,completion:0,count:1,generating:!1,timer:null,auto:!1}},props:{name:{type:String,default:"Defalut Name",description:"The the name of the generator."},gameTotal:{type:r["Decimal"],default:new r["Decimal"]("0"),description:"The accumulated total of this board."},color:{type:String,default:"cccccc",description:"The color of the card."},icon:{type:String,default:"mdi-account-circle",description:"The mdi icon of the generator"},value:{type:r["Decimal"],default:new r["Decimal"]("0"),description:"The output value of each generator. Must be a Decimal object, or respond to `add`."},cost:{type:r["Decimal"],default:new r["Decimal"]("5.00"),description:"The cost of the next generator."},autoCost:{type:r["Decimal"],default:new r["Decimal"]("50.00"),description:"The cost of automating the generator."},increment:{type:r["Decimal"],default:new r["Decimal"]("1.00"),description:"The yield of each generator we own."},initialCount:{type:r["Decimal"],default:new r["Decimal"]("0"),description:"How many generators we start with."},speed:{type:Number,default:0,description:"How many seconds it takes this generator to complete."},updatespeed:{type:Number,default:250,description:"How many milliseconds before updating the timer."},initialAuto:{type:Boolean,default:!1,description:"Whether to start automatically collecting output."}},mounted:function(){this.count=this.initialCount,this.auto=this.initialAuto,this.auto&&this.startAuto()},methods:{startGenerator:function(){var t=this;return!this.generating&&(this.generating=!0,this.timer=setInterval((function(){t.completion=t.completion+100/(1e3*t.speed/t.updatespeed),t.completion>=100&&t.$nextTick((function(){t.generating=!1,t.completion=0,t.$emit("valueChanged",t.value.times(t.count)),clearInterval(t.timer),t.auto&&t.startAuto()}))}),this.updatespeed),!0)},startTimer:function(){},buyGenerator:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.count=this.count.add(t),this.$emit("valueChanged",this.cost.times(t).negated())},startAuto:function(){var t=this;return this.generating=!0,this.$emit("valueChanged",this.auto.negated()),this.timer=setInterval((function(){t.completion=t.completion+1/(10*t.speed/t.updatespeed),t.completion>=100&&t.$nextTick((function(){t.generating=!1,t.completion=0,t.$emit("valueChanged",t.value.times(t.count))}))}),this.updatespeed),!0}}}),m=p,f=(n("115d"),n("2877")),v=n("6544"),h=n.n(v),g=n("8336"),b=n("b0af"),y=n("132d"),w=n("da13"),_=n("8270"),T=n("5d23"),C=n("8e36"),k=n("0fd9"),V=Object(f["a"])(m,u,d,!1,null,null,null),j=V.exports;h()(V,{VBtn:g["a"],VCard:b["a"],VIcon:y["a"],VListItem:w["a"],VListItemAvatar:_["a"],VListItemContent:T["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VProgressLinear:C["a"],VRow:k["a"]});var x={name:"game-board",components:{Generator:j},data:function(){return{total:new r["Decimal"](0),generators:[{value:new r["Decimal"](.5),cost:new r["Decimal"](5),autoCost:new r["Decimal"](50),increment:new r["Decimal"](1),initialCount:new r["Decimal"](1),speed:5,name:"Generator 0",color:"#111",icon:"mdi-home"}]}},methods:{addGenerator:function(t){var e=this.generators[this.generators.length-1];this.generators.push({value:e.value.times(t),cost:e.cost.times(t),autoCost:e.auto.times(t),increment:e.increment.times(t),initialCount:1,speed:e.speed.times(2),name:"Generator ".concat(this.generators.length),color:"#111",icon:"mdi-home"})},updateTotal:function(t){this.total=this.total.add(t),this.$emit("totalUpdated",this.total)}}},D=x,O=(n("cac3"),n("62ad")),$=n("a523"),A=Object(f["a"])(D,c,l,!1,null,null,null),B=A.exports;h()(A,{VCol:O["a"],VContainer:$["a"],VRow:k["a"]});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("h2",[t._v("Easy Incremental: $"+t._s(t._f("withUnits")(t.total)))])],1),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){e.preventDefault(),t.showAbout=!t.showAbout}}},[n("span",{staticClass:"mr-2"},[t._v("About")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1)},P=[],G={name:"app-top-bar",props:["total"],data:function(){return{showAbout:!1}}},I=G,U=(n("4a4d"),n("40dc")),E=n("adda"),L=n("2fa4"),M=Object(f["a"])(I,S,P,!1,null,null,null),N=M.exports;h()(M,{VAppBar:U["a"],VBtn:g["a"],VIcon:y["a"],VImg:E["a"],VSpacer:L["a"]});var F={name:"App",components:{GameBoard:B,AppTopBar:N},data:function(){return{total:0}}},H=F,q=n("7496"),J=n("a75b"),R=n("553a"),W=Object(f["a"])(H,i,s,!1,null,null,null),z=W.exports;h()(W,{VApp:q["a"],VContainer:$["a"],VContent:J["a"],VFooter:R["a"]});var K=n("9483");Object(K["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Q=n("8c4f");o["a"].use(Q["a"]);var X=[{path:"/",name:"gameBoard",component:B},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Y=new Q["a"]({routes:X}),Z=Y,tt=n("2f62"),et=n("0e44");o["a"].use(tt["a"]);var nt=new tt["a"].Store({plugins:[Object(et["a"])({key:"easy-incremental"})],state:{generators:[],total:"0"},mutations:{},actions:{},modules:{}}),ot=n("f309"),at=n("8fa2");o["a"].use(ot["a"]);var rt=new ot["a"]({preset:at["preset"],rtl:!1,theme:{dark:!0}});o["a"].config.productionTip=!1,o["a"].filter("withUnits",(function(t){var e=new r["Decimal"](t);return"0"===e.toString?"0":"".concat(t.toString()," ").concat(Object(a["b"])(t,a["a"]))})),new o["a"]({router:Z,store:nt,vuetify:rt,render:function(t){return t(z)}}).$mount("#app")},cac3:function(t,e,n){"use strict";var o=n("4e30"),a=n.n(o);a.a}});
//# sourceMappingURL=app.7792150c.js.map