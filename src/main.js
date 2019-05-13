import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import AnchorScroll from './directives/anchor-scroll'

import App from './components/App.vue'
import Detail from './components/Detail.vue'
import List from './components/List.vue'
import Error from './components/Error.vue'
import LeaveWord from './components/leaveword.vue'
import Loveword from './components/lovewords.vue'
import ZL from './components/zl.vue'
import AL from './components/al.vue'
import ZlDetail from './components/zlDetail.vue'
// install router
Vue.use(Router);
    //ajax
Vue.use(Resource);
Vue.use(AnchorScroll);

const routes = [
    {
        path: '/list',
        redirect: '/'
    },
    {
        path: '/',
        component: List,
        children: [{
            path: '/',
            component: List
        }]
    },{
            path: '/detail/:id',
            component: Detail
        },{
            path: '/leaveword',
            component: LeaveWord
        },{
            path: '/loveword',
            component: Loveword
        }, {
            path: '/zl',
            component: ZL
        },{
            path: '/al/:id',
            name: 'al',
            component: AL
        }, {
            path: '/zldetail/:id',
            name: 'zldetail',
            component: ZlDetail
        }
    
]



var router = new Router({
    // base: __dirname,
    routes: routes,
    mode: 'hash'
})


// router.beforeEach(function () {
//     window.scrollTo(0, 0);
// })

// router.redirect({
//     '*': '/list'
// })

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
