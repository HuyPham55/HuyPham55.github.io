(function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],s=0,p=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={about:0,home:0,index:0},a=[];function i(e){return u.p+"js/"+({About:"About",Home:"Home"}[e]||e)+"."+{About:"c8910f7f",Home:"b395a4c9"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var c=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-black h-screen w-full main-container font-sans overflow-hidden relative"},[n("img",{staticClass:"object-cover absolute w-full h-full",attrs:{src:"/images/background.jpg",id:"image--background",alt:""}}),n("simplebar",{staticClass:"flex flex-col h-full w-full",attrs:{"data-simplebar-auto-hide":"true"},on:{scroll:function(t){return e.scrollHandler()}}},[n("nav",{ref:"nav",class:["bg-black bg-opacity-75 inset-x-0 top-0 backdrop-blur z-50 shadow-md",e.isSticky?"sticky":"relative"],attrs:{role:"navigation"}},[n("ul",{staticClass:"flex justify-around md:justify-evenly nav"},e._l(e.$router.options.routes.filter((function(e){return e.name})),(function(t){return n("li",{key:t.name,staticClass:"p-8 transition"},[n("router-link",{staticClass:"relative transition-transform text-gray-400 hover:text-gray-200 hover:underline select-none text-lg font-bold uppercase md:text-xl p-8",attrs:{to:t.path}},[e._v(" "+e._s(t.name)+" ")])],1)})),0)]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view",{key:e.$route.path})],1)],1)],1)],1)},a=[],i=n("8d3b"),u=(n("f138"),{name:"App",components:{simplebar:i["a"]},data:function(){return{isSticky:!1}},methods:{scrollHandler:function(){document.getElementsByClassName("simplebar-content-wrapper")[0].scrollTop?this.isSticky=!0:this.isSticky=!1},easterEgg:function(){console.log("%cHey hello there! :)","color:red; font-size: 30px;"),console.log("You have found an Easter Egg. Well done!")},runningTitle:function(){var e="Pham Duc Huy - Portfolio - ";e&&setInterval((function(){var t=e.indexOf(" ")+1;e=e.substr(t)+e.substr(0,t),window.document.title=e}),1e3)}},mounted:function(){this.easterEgg(),this.runningTitle()},updated:function(){}}),l=u,c=(n("034f"),n("2877")),s=Object(c["a"])(l,o,a,!1,null,null,null),f=s.exports,p=n("8c4f"),d=(n("a766"),n("d3b7"),n("3ca3"),n("ddb0"),[{path:"/",redirect:{path:"/home"}},{path:"/home",name:"Home",meta:{title:"Pham Duc Huy - Home Page - "},component:function(){return n.e("Home").then(n.bind(null,"57da"))}},{path:"/about",name:"About",meta:{title:"Pham Duc Huy - About - "},component:function(){return n.e("About").then(n.bind(null,"936d"))}}]),m=d;r["a"].use(p["a"]),r["a"].config.productionTip=!1;var h=new p["a"]({routes:m,linkExactActiveClass:"active",linkActiveClass:"",mode:"history"});h.beforeEach((function(e,t,n){n()})),new r["a"]({component:{},router:h,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,n){},a766:function(e,t,n){}});
//# sourceMappingURL=about.eef12e2c.js.map