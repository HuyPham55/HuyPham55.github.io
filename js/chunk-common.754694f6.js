(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("img",{staticClass:"object-cover absolute w-full h-full",attrs:{src:"/images/background.jpg",id:"image--background",alt:""}}),n("simplebar",{staticClass:"flex flex-col h-full w-full",attrs:{"data-simplebar-auto-hide":"true"},on:{scroll:function(e){return t.scrollHandler()}}},[n("nav",{ref:"nav",class:["navbar",t.isSticky?"sticky":"relative"],attrs:{role:"navigation"}},[n("ul",{staticClass:"flex justify-around md:justify-evenly nav"},t._l(t.$router.options.routes.filter((function(t){return t.name})),(function(e){return n("li",{key:e.name,staticClass:"p-8 transition"},[n("router-link",{staticClass:"nav-link",attrs:{to:e.path}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view",{key:t.$route.path})],1)],1)],1)],1)},i=[],r=n("8d3b"),s=(n("f138"),{name:"App",components:{simplebar:r["a"]},data:function(){return{isSticky:!1}},methods:{scrollHandler:function(){this.isSticky=document.getElementsByClassName("simplebar-content-wrapper")[0].scrollTop},easterEgg:function(){console.log("%cHey hello there! :)","color:red; font-size: 30px;"),console.log("You have found an Easter Egg. Well done!")},runningTitle:function(){var t="Pham Duc Huy - Portfolio - ";t&&setInterval((function(){var e=t.indexOf(" ")+1;t=t.substr(e)+t.substr(0,e),window.document.title=t}),1e3)}},mounted:function(){this.easterEgg(),this.runningTitle()},updated:function(){}}),u=s,c=(n("034f"),n("2877")),l=Object(c["a"])(u,o,i,!1,null,null,null),f=l.exports,m=n("8c4f"),d=(n("a766"),n("d3b7"),n("3ca3"),n("ddb0"),[{path:"/",redirect:{path:"/home"}},{path:"/home",name:"Home",meta:{title:"Pham Duc Huy - Home Page - "},component:function(){return n.e("Home").then(n.bind(null,"57da"))}},{path:"/about",name:"About",meta:{title:"Pham Duc Huy - About - "},component:function(){return n.e("About").then(n.bind(null,"936d"))}}]),p=d;a["a"].use(m["a"]),a["a"].config.productionTip=!1;var h=new m["a"]({routes:p,linkExactActiveClass:"active",linkActiveClass:"",mode:"history"});h.beforeEach((function(t,e,n){n()})),new a["a"]({component:{},router:h,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,n){},a766:function(t,e,n){}}]);
//# sourceMappingURL=chunk-common.754694f6.js.map