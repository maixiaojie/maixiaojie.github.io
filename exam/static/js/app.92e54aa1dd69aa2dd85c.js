webpackJsonp([0],{"/KXL":function(t,e){},"5CWk":function(t,e){},"GM/o":function(t,e){},H752:function(t,e){var s={install:function(t,e){var s={defaultType:"bottom",duration:"1500"};for(var i in e)s[i]=e[i];t.prototype.$toast=function(e,i){if(i&&(s.defaultType=i),!document.getElementsByClassName("vue-toast").length){var n=(new(t.extend({template:'<div class="vue-toast toast-'+s.defaultType+'">'+e+"</div>"}))).$mount().$el;document.body.appendChild(n),setTimeout(function(){document.body.removeChild(n)},s.duration)}},["bottom","center","top"].forEach(function(e){t.prototype.$toast[e]=function(s){return t.prototype.$toast(s,e)}})}};t.exports=s},LYvh:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("4bK6"),n=s.n(i),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{staticClass:"main"})],1)},staticRenderFns:[]};var l=s("VU/8")({name:"App",data:function(){return{}},components:{}},a,!1,function(t){s("GM/o")},null,null).exports,o=s("/ocq"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"button",class:[this.type],on:{click:this.click}},[this._v(this._s(this.title))])},staticRenderFns:[]};var u=s("VU/8")({name:"Button",props:["title","type"],data:function(){return{}},methods:{click:function(){this.$emit("click")}}},r,!1,function(t){s("/KXL")},null,null).exports,c={name:"List",data:function(){return{lists:[],title:"发布"}},components:{Button:u},mounted:function(){this.lists=this.loadData()},methods:{edit:function(){this.$router.push("/n")},deletes:function(t){this.lists.splice(t,1)},detail:function(){this.$router.push("/n")},push:function(){alert("发布成功")},loadData:function(){return[{title:"第一章  力",status:"已发布"},{title:"第二章  直线运动",status:"已发布"},{title:"第三章  牛顿运动定律",status:"已发布"},{title:"第四章  物体的平衡",status:"已发布"},{title:"第五章  曲线运动",status:"已发布"},{title:"第六章  万有引力定律",status:"已发布"},{title:"第七章  机械能",status:"已发布"},{title:"第八章  动量",status:"已发布"},{title:"第九章  机械运动",status:"已发布"},{title:"第十章  机械波",status:"已发布"},{title:"第十一章  分子热运动 能量守恒",status:"已发布"},{title:"第十二章  固体、液体和气体",status:"已发布"},{title:"第十三章  电场",status:"已发布"}]}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("div",{staticClass:"list-container"},[s("table",{staticClass:"table"},[s("tr",[t._m(0),t._v(" "),s("td",{attrs:{width:""}},[t._v("章节")]),t._v(" "),s("td",{attrs:{width:"10%"}},[t._v("状态")]),t._v(" "),s("td",{attrs:{width:"20%"}},[t._v("操作")]),t._v(" "),s("td",{attrs:{width:"10%"}},[s("router-link",{staticClass:"newBank",attrs:{to:"/n"}},[t._v("新建题库")])],1)]),t._v(" "),t._l(t.lists,function(e,i){return s("tr",[t._m(1,!0),t._v(" "),s("td",[t._v(t._s(e.title))]),t._v(" "),s("td",[t._v(t._s(e.status))]),t._v(" "),s("td",{attrs:{colspan:"2"}},[s("Button",{attrs:{type:"warning",title:"编辑"},on:{click:t.edit}}),t._v(" "),s("Button",{attrs:{type:"error",title:"删除"},on:{click:function(e){t.deletes(i)}}}),t._v(" "),s("Button",{attrs:{type:"success",title:"查看"},on:{click:t.detail}}),t._v(" "),s("Button",{attrs:{type:"warning",title:t.title},on:{click:t.push}})],1)])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{width:"5%"}},[e("input",{attrs:{type:"checkbox",name:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("input",{attrs:{type:"checkbox",name:""}})])}]};var d=s("VU/8")(c,h,!1,function(t){s("LYvh")},null,null).exports,v={name:"SList",data:function(){return{lists:[]}},components:{Button:u},mounted:function(){this.lists=this.loadData()},methods:{reply:function(){this.$router.push("/r")},loadData:function(){return[{title:"第一章  力",status:"已发布"},{title:"第二章  直线运动",status:"已发布"},{title:"第三章  牛顿运动定律",status:"已发布"},{title:"第四章  物体的平衡",status:"已发布"},{title:"第五章  曲线运动",status:"已发布"},{title:"第六章  万有引力定律",status:"已发布"},{title:"第七章  机械能",status:"已发布"},{title:"第八章  动量",status:"已发布"},{title:"第九章  机械运动",status:"已发布"},{title:"第十章  机械波",status:"已发布"},{title:"第十一章  分子热运动 能量守恒",status:"已发布"},{title:"第十二章  固体、液体和气体",status:"已发布"},{title:"第十三章  电场",status:"已发布"}]}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("div",{staticClass:"list-container"},[s("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.lists,function(e){return s("tr",[t._m(1,!0),t._v(" "),s("td",[t._v(t._s(e.title))]),t._v(" "),s("td",[t._v(t._s(e.status))]),t._v(" "),s("td",[s("Button",{attrs:{type:"warning",title:"答题"},on:{click:t.reply}})],1)])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{attrs:{width:"5%"}},[e("input",{attrs:{type:"checkbox",name:""}})]),this._v(" "),e("td",{attrs:{width:""}},[this._v("章节")]),this._v(" "),e("td",{attrs:{width:"10%"}},[this._v("状态")]),this._v(" "),e("td",{attrs:{width:"10%"}},[this._v("操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("input",{attrs:{type:"checkbox",name:""}})])}]};var f=s("VU/8")(v,p,!1,function(t){s("5CWk")},null,null).exports,m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit",on:{click:t.edit}},[s("div",{class:t.titleClass},[t._v(t._s(t.title))]),t._v(" "),s("div",{class:t.inputClass},[s("input",{directives:[{name:"focus",rawName:"v-focus",value:t.focusState,expression:"focusState"},{name:"model",rawName:"v-model",value:t.newValue,expression:"newValue"}],staticClass:"input",attrs:{type:"input",name:"title"},domProps:{value:t.newValue},on:{blur:t.HandleInput,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.HandleInput(e)},input:function(e){e.target.composing||(t.newValue=e.target.value)}}})])])},staticRenderFns:[]};var _=s("VU/8")({name:"EditInput",props:["title"],data:function(){return{defaultValue:"请输入标题",newValue:"",titleClass:"show",inputClass:"hide",focusState:!0}},created:function(){},methods:{edit:function(){this.titleClass="hide",this.inputClass="show"},HandleInput:function(){this.titleClass="show",this.inputClass="hide",""===this.newValue?this.$emit("changeTitle",this.defaultValue):this.$emit("changeTitle",this.newValue)}}},m,!1,function(t){s("ht2A")},null,null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"line",class:this.lineClass})},staticRenderFns:[]};var R=s("VU/8")({name:"ELine",props:["size","type","status"],data:function(){return{lineClass:["defaultLine"]}},created:function(){switch(this.size){case"default":this.lineClass.push("defaultSize");break;case"middle":this.lineClass.push("middleSize");break;case"big":this.lineClass.push("bigSize")}switch(this.type){case"dashed":this.lineClass.push("linedashed");break;case"solid":this.lineClass.push("linesolid")}switch(this.status){case"success":this.lineClass.push("linesuccess");break;case"default":this.lineClass.push("linedefault");break;case"warning":this.lineClass.push("linewarning");break;case"error":this.lineClass.push("lineerror")}}},g,!1,function(t){s("mTnq")},null,null).exports,C=s("mvHQ"),y=s.n(C),w={name:"newBankModal",props:["title"],data:function(){return{setRight:"设为正确答案",cancelRight:"设为错误答案",answer:[],question:{issue:"",selector:[{val:"",isRight:0},{val:"",isRight:0},{val:"",isRight:0}]}}},watch:{"question.selector":{handler:function(t,e){var s=[];t.forEach(function(t,e){1===t.isRight&&s.push(e)}),this.answer=s},deep:!0}},beforeDestroy:function(){this.question={issue:"",selector:[{val:"",isRight:0},{val:"",isRight:0},{val:"",isRight:0}]}},methods:{beforeOpen:function(t){},close:function(){this.$modal.hide("newBankModal")},save:function(){this.api.addQuestion(y()(this.question)),this.close(),this.$emit("getData",this.question),this.question={issue:"",selector:[{val:"",isRight:0},{val:"",isRight:0},{val:"",isRight:0}]}},toogleAnswer:function(t){var e=this.question.selector[t].isRight;this.question.selector[t].isRight=0===e?1:0},addSelector:function(){this.question.selector.push({val:"",isRight:0})},delSelector:function(t){this.question.selector.splice(t,1)},delAllSelector:function(){this.question.selector=[]},isInArray:function(t,e){if(0===e.length)return!1;for(var s=0;s<e.length;s++)if(t===e[s])return!0;return!1},removeByVal:function(t,e){for(var s=0;s<e.length;s++)if(e[s]==t){e.splice(s,1);break}}},components:{Button:u}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{name:"newBankModal",height:"auto",scrollable:!0},on:{"before-open":t.beforeOpen}},[s("div",{staticClass:"modalHeader"},[s("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),s("span",{staticClass:"close",on:{click:t.close}},[t._v("X")])]),t._v(" "),s("div",{staticClass:"modalBody"},[s("div",{staticClass:"tips fonttip"},[t._v("分别在下面的输入框中输入问题的名称以及选项，并且设置正确的选择。")]),t._v(" "),s("div",{staticClass:"item"},[s("label",[t._v("题目:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.question.issue,expression:"question.issue"}],staticClass:"questionInput",attrs:{type:"input",name:"issue"},domProps:{value:t.question.issue},on:{input:function(e){e.target.composing||t.$set(t.question,"issue",e.target.value)}}})]),t._v(" "),t._l(t.question.selector,function(e,i){return s("div",{staticClass:"item"},[s("label",[t._v("选项"+t._s(i+1)+":")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"item.val"}],class:1===e.isRight?"right":"",attrs:{type:"input",name:"selector"},domProps:{value:e.val},on:{input:function(s){s.target.composing||t.$set(e,"val",s.target.value)}}}),t._v(" "),s("span",{staticClass:"setting",on:{click:function(e){t.toogleAnswer(i)}}},[t._v("\n\t\t\t\t"+t._s(0===e.isRight?t.setRight:t.cancelRight))]),t._v(" "),s("span",{staticClass:"delFlag",attrs:{title:"删除该选项"},on:{click:function(e){t.delSelector(i)}}},[t._v("−")])])}),t._v(" "),s("div",{staticClass:"item fonttip"},[s("Button",{attrs:{type:"success",title:"+添加选项"},on:{click:t.addSelector}}),t._v(" "),s("Button",{attrs:{type:"error",title:"-删除所有选项"},on:{click:t.delAllSelector}}),t._v("\n\t\t\t\t你设置的正确答案选项为："+t._s(t.answer)+"\n\t\t\t")],1),t._v(" "),s("div",{staticClass:"item-no-label"},[s("Button",{attrs:{type:"success",title:"保存"},on:{click:t.save}}),t._v(" "),s("Button",{attrs:{type:"warning",title:"取消"},on:{click:t.close}})],1)],2)])},staticRenderFns:[]};var B={name:"newBank",data:function(){return{title:"请输入标题",isDXModalShow:!1,questionTypeHeight:0,questionList:[{issue:"下列关于静电场的说法中正确的是（）",selector:[{isRight:0,val:"在点电荷形成的电场中没有场强相等的两点，但有电势相等的两点"},{isRight:0,val:"正电荷只在电场力作用下，一定从高电势向低电势运动"},{isRight:0,val:"场强为零处，电势不一定为零；电势为零处，场强不一定为零"},{isRight:0,val:"初速为零的正电荷在电场力作用下不一定沿电场线运动"}]},{issue:"在总电压不变的条件下，黄昏时电灯比深夜暗，是因为黄昏时()",selector:[{isRight:0,val:"线路中总电阻变大，电流变小"},{isRight:0,val:"总电流一定，支路增多分去了电流"},{isRight:0,val:"干线电流过大，线路损失电压增大"},{isRight:0,val:"总电阻变小，每支路电流增大"}]},{issue:"灯泡中灯丝断了，将灯丝搭接起来再用，则以下判断正确的是()",selector:[{isRight:0,val:"比原来更亮"},{isRight:0,val:"比原来更暗 "},{isRight:0,val:"搭接起来的地方容易烧断，其他地方不易断"},{isRight:0,val:"搭接起来的地方不容易断，其他地方容易烧断 "}]},{issue:"要减小发射电磁波的周期，下列哪些办法是正确的()",selector:[{isRight:0,val:"减小线圈的匝数"},{isRight:0,val:"抽去线圈中的磁芯"},{isRight:0,val:"降低电容器的充电电压"},{isRight:0,val:"减小电容器的电容 "}]},{issue:"在赤道附近有一竖直向下的匀强电场，在此区域内有一根沿东西方向放置的直导体棒，由水平位置自静止落下，不计空气阻力，则导体棒两端落地的先后关系是()",selector:[{isRight:0,val:"东端先落地"},{isRight:0,val:"西端先落地"},{isRight:0,val:"两端同时落地"},{isRight:0,val:"无法确定"}]},{issue:"静电场中有Ｍ、Ｎ两点，已知Ｍ点的电势高于Ｎ点的电势，则下面的说法正确的是()",selector:[{isRight:0,val:"Ｍ点到Ｎ点连线的方向就是电场线的方向"},{isRight:0,val:"一个点电荷到Ｍ点受的电场力总要大于在Ｎ点受的电场力"},{isRight:0,val:"一个点电荷从Ｎ点移到Ｍ点，它的电势能一定增加"},{isRight:0,val:"一个点电荷从Ｍ点移到Ｎ点，它的电势能可能增加"}]}]}},components:{EditInput:_,ELine:R,Button:u,newBankModal:s("VU/8")(w,k,!1,function(t){s("m3/1")},null,null).exports},methods:{showTitle:function(t){this.title=t},openDXmodal:function(){this.$modal.show("newBankModal",{title:""})},toggleSelectType:function(){this.questionTypeHeight=50===this.questionTypeHeight?0:50},getdata:function(t){console.log(t),this.$modal.hide("newBankModal"),this.questionList.push(t)}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("newBankModal",{attrs:{title:"添加题目"},on:{getData:t.getdata}}),t._v(" "),s("div",{staticClass:"newBankContainer"},[s("EditInput",{attrs:{title:t.title},on:{changeTitle:t.showTitle}}),t._v(" "),s("ELine",{attrs:{size:"middle",type:"solid",status:"default"}}),t._v(" "),s("div",{staticClass:"questions"},[s("div",{staticClass:"questionType",style:{height:t.questionTypeHeight+"px"}},[s("Button",{staticClass:"mt",attrs:{type:"default",title:"单选试题"},on:{click:t.openDXmodal}}),t._v(" "),s("Button",{staticClass:"mt",attrs:{type:"default",title:"多选试题"}})],1),t._v(" "),s("div",{staticClass:"addBank",on:{click:t.toggleSelectType}},[t._v("+添加问题")])]),t._v(" "),t._l(t.questionList,function(e,i){return s("div",{staticClass:"questionList"},[s("div",{staticClass:"issue"},[t._v(t._s(i+1)+". "+t._s(e.issue))]),t._v(" "),s("div",{staticClass:"selector"},[s("ul",t._l(e.selector,function(e,i){return s("li",[s("span",[t._v(t._s(e.val))])])}))])])}),t._v(" "),s("div",{staticClass:"operation"},[s("Button",{attrs:{type:"success",title:"保存问卷"}}),t._v(" "),s("Button",{attrs:{type:"warning",title:"发布问卷"}})],1)],2)],1)},staticRenderFns:[]};var S=s("VU/8")(B,b,!1,function(t){s("XUPc")},null,null).exports,q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("router-link",{staticClass:"title",attrs:{to:t.router}},[t._v("高中物理在线测评系统("+t._s(t.title)+"端)")]),t._v(" "),s("router-link",{staticStyle:{float:"right","padding-right":"2rem","text-decoration":"underline"},attrs:{to:t.returnRouter}},[t._v(t._s(t.returnTitle))])],1)},staticRenderFns:[]};var $=s("VU/8")({name:"Header",props:["title","router","returnRouter","returnTitle"],data:function(){return{}}},q,!1,function(t){s("NrRc")},null,null).exports,x={name:"pageTeacher",data:function(){return{}},components:{Header:$}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{attrs:{router:"/t",title:"教师",returnRouter:"/",returnTitle:"进入学生端"}}),this._v(" "),e("router-view",{staticStyle:{"margin-top":"50px","margin-bottom":"50px"}})],1)},staticRenderFns:[]},T=s("VU/8")(x,E,!1,null,null,null).exports,L={name:"pageStudent",data:function(){return{}},components:{Header:$}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{attrs:{router:"/",title:"学生",returnRouter:"/t",returnTitle:"进入教师端"}}),this._v(" "),e("router-view",{staticStyle:{"margin-top":"50px","margin-bottom":"50px"}})],1)},staticRenderFns:[]},H=s("VU/8")(L,V,!1,null,null,null).exports,U={name:"Reply",data:function(){return{questionList:[{issue:"下列关于静电场的说法中正确的是（）",selector:[{isRight:0,val:"在点电荷形成的电场中没有场强相等的两点，但有电势相等的两点"},{isRight:0,val:"正电荷只在电场力作用下，一定从高电势向低电势运动"},{isRight:0,val:"场强为零处，电势不一定为零；电势为零处，场强不一定为零"},{isRight:0,val:"初速为零的正电荷在电场力作用下不一定沿电场线运动"}]},{issue:"在总电压不变的条件下，黄昏时电灯比深夜暗，是因为黄昏时()",selector:[{isRight:0,val:"线路中总电阻变大，电流变小"},{isRight:0,val:"总电流一定，支路增多分去了电流"},{isRight:0,val:"干线电流过大，线路损失电压增大"},{isRight:0,val:"总电阻变小，每支路电流增大"}]},{issue:"灯泡中灯丝断了，将灯丝搭接起来再用，则以下判断正确的是()",selector:[{isRight:0,val:"比原来更亮"},{isRight:0,val:"比原来更暗 "},{isRight:0,val:"搭接起来的地方容易烧断，其他地方不易断"},{isRight:0,val:"搭接起来的地方不容易断，其他地方容易烧断 "}]},{issue:"要减小发射电磁波的周期，下列哪些办法是正确的()",selector:[{isRight:0,val:"减小线圈的匝数"},{isRight:0,val:"抽去线圈中的磁芯"},{isRight:0,val:"降低电容器的充电电压"},{isRight:0,val:"减小电容器的电容 "}]},{issue:"在赤道附近有一竖直向下的匀强电场，在此区域内有一根沿东西方向放置的直导体棒，由水平位置自静止落下，不计空气阻力，则导体棒两端落地的先后关系是()",selector:[{isRight:0,val:"东端先落地"},{isRight:0,val:"西端先落地"},{isRight:0,val:"两端同时落地"},{isRight:0,val:"无法确定"}]},{issue:"静电场中有Ｍ、Ｎ两点，已知Ｍ点的电势高于Ｎ点的电势，则下面的说法正确的是()",selector:[{isRight:0,val:"Ｍ点到Ｎ点连线的方向就是电场线的方向"},{isRight:0,val:"一个点电荷到Ｍ点受的电场力总要大于在Ｎ点受的电场力"},{isRight:0,val:"一个点电荷从Ｎ点移到Ｍ点，它的电势能一定增加"},{isRight:0,val:"一个点电荷从Ｍ点移到Ｎ点，它的电势能可能增加"}]}]}},components:{Button:u},methods:{}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"newBankContainer"},[t._l(t.questionList,function(e,i){return s("div",{staticClass:"questionList"},[s("div",{staticClass:"issue"},[t._v(t._s(i+1)+". "+t._s(e.issue))]),t._v(" "),s("div",{staticClass:"selector"},[s("ul",t._l(e.selector,function(e,n){return s("li",[s("input",{attrs:{type:"radio",name:i}}),s("span",[t._v(t._s(e.val))])])}))])])}),t._v(" "),s("div",{staticClass:"operation"},[s("Button",{attrs:{type:"success",title:"保存答案"}}),t._v(" "),s("Button",{attrs:{type:"warning",title:"提交答案"}})],1)],2)])},staticRenderFns:[]};var I=s("VU/8")(U,F,!1,function(t){s("uroH")},null,null).exports;n.a.use(o.a);var M=new o.a({mode:"history",base:"/exam/",routes:[{path:"/t",name:"pageTeacher",component:T,children:[{path:"/",name:"List",component:d},{path:"/n",name:"newBank",component:S}]},{path:"/",name:"PageStudent",component:H,children:[{path:"/",name:"SList",component:f},{path:"/r",name:"reply",component:I}]}]}),D={install:function(t,e){t.prototype.LS={isSupport:function(){return!!localStorage},set:function(t,e){this.isSupport()&&(e=e||[],localStorage.setItem(t,y()(e)))},get:function(t){if(this.isSupport())return localStorage.getItem(t)},remove:function(t){this.isSupport()&&localStorage.removeItem(t)}},t.prototype.api={LS:t.prototype.LS,addQuestion:function(t){var e=JSON.parse(this.LS.get("question"))||[];e.push(t),this.LS.set("question",e)},addExam:function(t){},getQuestionById:function(t){},getAllExam:function(){},getExamById:function(t){}}}},N=s("rifk"),A=s.n(N),X=s("H752"),P=s.n(X);n.a.use(D),n.a.use(A.a),n.a.config.productionTip=!1,n.a.use(P.a),n.a.directive("focus",{update:function(t,e){e.value&&t.focus()}}),new n.a({el:"#app",router:M,render:function(t){return t(l)}})},NrRc:function(t,e){},XUPc:function(t,e){},ht2A:function(t,e){},"m3/1":function(t,e){},mTnq:function(t,e){},uroH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.92e54aa1dd69aa2dd85c.js.map