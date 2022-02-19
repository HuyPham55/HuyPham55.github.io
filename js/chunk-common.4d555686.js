(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"3cf3":function(t,e,n){"use strict";var i={languages:[{key:"en",title:"English"},{key:"vi",title:"Vietnamese"}],labels:{home:{en:"Home",vi:"Trang chủ"},about:{en:"About",vi:"Giới thiệu"},details:{en:"Details",vi:"Thông tin"},save_a_copy:{en:"Save a copy",vi:"Tải về"},titles:{education:{en:"Education",vi:"Trình độ giáo dục"},abilities:{en:"Abilities",vi:"Khẳ năng"},work_experience:{en:"Work Experience",vi:"Kinh nghiệm làm việc"},technical_skill:{en:"Techinical Skills",vi:"Kĩ năng kĩ thuật"},media_skill:{en:"Media Skills",vi:"Kĩ năng media"},communication:{en:"Communication",vi:"Ngôn ngữ giao tiếp"},interested_technologies:{en:"Interested Technologies",vi:"Công nghệ quan tâm"}}},details:{name:{en:"Pham Duc Huy",vi:"Phạm Đức Huy"},address:{en:"Hanoi, Vietnam",vi:"Hà Nội, Việt Nam"}},timeline:[{title:"2015 - 2018",content:{en:"Ngoc Hoi High School",vi:"Trường THPT Ngọc Hồi"},hover:!1},{title:"2018 - 2022",content:{en:"National Economic University - Information Technology",vi:"Trường Đại học Kinh tế Quốc dân - Khoa Công nghệ thông tin"},hover:!1}],theme_mode:{night_mode:{en:"Night mode",vi:"Tối"},light_mode:{en:"Light mode",vi:"Sáng"}},experiences:[{number:12,suffix:"+",title:{en:"Months Laravel",vi:"Tháng Laravel"}},{number:6,suffix:"+",title:{en:"Months VueJS",vi:"Tháng VueJS"}},{number:10,suffix:"+",title:{en:"Projects done",vi:"Projects đã hoàn thiện"}},{number:500,suffix:"+",title:{en:"Stackoverflow reputation",vi:"Stackoverflow reputation"}}],technologies:[{title:{en:"Frontend",vi:"Frontend"},altTitle:"What I used to develop UI",items:[{title:"VueJS",icon:"VueIcon",url:"https://vuejs.org/",content:"",colorClass:"#4fc08d",emphasize:1},{title:"Tailwind",icon:"Tailwind",url:"https://tailwindcss.com/",content:"",colorClass:""},{title:"Bootstrap",icon:"BootstrapIcon",url:"https://getbootstrap.com/",content:"",colorClass:"#7952b3"},{title:"Webpack",icon:"WebpackIcon",url:"https://webpack.js.org/",content:"",colorClass:""},{title:"PostCSS",icon:"PostCSSIcon",url:"https://postcss.org/",content:"",colorClass:"#dd3a0a"},{title:"jQuery",icon:"jQueryIcon",url:"https://jquery.com/",content:"",colorClass:""}]},{title:{en:"Backend",vi:"Backend"},altTitle:"",items:[{title:"Laravel",icon:"Laravel",url:"https://laravel.com/",content:"",colorClass:"#ff2d20",emphasize:1},{title:"MySQL",icon:"MySQLIcon",url:"https://www.mysql.com/",content:"",colorClass:""},{title:"Redis",icon:"RedisIcon",url:"https://redis.io/",content:"",colorClass:""}]},{title:{en:"Foundation",vi:"Foundation"},altTitle:"",items:[{title:"HTML",icon:"HTMLIcon",url:"",content:"",colorClass:"#e44d26"},{title:"CSS",icon:"CSSIcon",url:"",content:"",colorClass:"#264de4"},{title:"JavaScript",icon:"JavaScriptIcon",url:"",content:"",colorClass:"#f7e018"},{title:"PHP",icon:"PHPIcon",url:"https://www.php.net/",content:"",colorClass:"#484c89"}]},{title:{en:"Others",vi:"Khác"},altTitle:"",items:[{title:"GraphQL",icon:"GraphQLIcon",url:"https://graphql.org/",content:"",colorClass:""},{title:"Axios",icon:"AxiosLogo",url:"https://axios-http.com/",content:"",colorClass:""}]}],media_skills:{description:{en:"Ability to use following tools at basic needs.",vi:"Khả năng sử dụng các công cụ sau ở mức độ cơ bản."}}};e["a"]=i},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container"},[n("img",{staticClass:"object-cover absolute w-full h-full",attrs:{src:"/images/background.jpg",id:"image--background",alt:""}}),n("simplebar",{staticClass:"flex flex-col h-full w-full",attrs:{"data-simplebar-auto-hide":"true",id:"simplebarScroller"},on:{scroll:t.scrollHandler}},[n("nav",{ref:"nav",class:["navbar",t.isSticky?"sticky":"relative"],attrs:{role:"navigation"}},[n("ul",{staticClass:"flex justify-around md:justify-evenly nav"},t._l(t.$router.options.routes.filter((function(t){return t.name})),(function(e){return n("li",{key:e.name,staticClass:"py-8 transition"},[n("router-link",{staticClass:"nav-link",attrs:{to:e.path}},[t._v(" "+t._s(t.labels[e.name][t.lang])+" ")])],1)})),0)]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view",{key:t.$route.path,attrs:{lang:t.lang},on:{changeLanguage:t.changeLanguage}})],1)],1)],1)],1)},a=[],l=n("5530"),c=(n("7db0"),n("d3b7"),n("8d3b")),s=(n("f138"),n("3cf3"));document.onkeydown=function(t){if(t.ctrlKey&&t.shiftKey&&[67,73,74,85].find((function(e){return e==t.keyCode}))||123==t.keyCode)return!1};var r={name:"App",components:{simplebar:c["a"]},data:function(){return Object(l["a"])(Object(l["a"])({isSticky:!1},s["a"]),{},{lang:null})},methods:{scrollHandler:function(){this.isSticky=document.querySelector(".simplebar-content-wrapper").scrollTop},easterEgg:function(){console.log("%cHey hello there! :)","color:red; font-size: 30px;"),console.log("You have found an Easter Egg. Well done!")},runningTitle:function(){var t="Pham Duc Huy - Portfolio - ";t&&setInterval((function(){var e=t.indexOf(" ")+1;t=t.substr(e)+t.substr(0,e),window.document.title=t}),1e3)},setLanguage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.lang=t.length?t:this.languages[0]["key"]},changeLanguage:function(){var t=this;this.setLanguage(this.languages.find((function(e){return e["key"]!=t.lang}))["key"])}},mounted:function(){this.easterEgg(),this.runningTitle(),this.setLanguage(this.languages[0]["key"])},updated:function(){}},u=r,h=(n("034f"),n("2877")),d=Object(h["a"])(u,o,a,!1,null,null,null),g=d.exports,m=n("8c4f"),p=(n("a766"),n("3ca3"),n("ddb0"),[{path:"/",redirect:{path:"/home"}},{path:"/home",name:"home",meta:{title:"Pham Duc Huy - Home Page - "},component:function(){return n.e("Home").then(n.bind(null,"57da"))}},{path:"/about",name:"about",meta:{title:"Pham Duc Huy - About - "},component:function(){return n.e("About").then(n.bind(null,"936d"))}}]),v=p;i["a"].use(m["a"]),i["a"].config.productionTip=!1;var f=new m["a"]({routes:v,linkExactActiveClass:"active",linkActiveClass:"",mode:"history"});f.beforeEach((function(t,e,n){n()})),new i["a"]({component:{},router:f,render:function(t){return t(g)}}).$mount("#app")},"85ec":function(t,e,n){},a766:function(t,e,n){}}]);
//# sourceMappingURL=chunk-common.4d555686.js.map