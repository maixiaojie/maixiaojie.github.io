<template>
<div id="app" class="docs scotchified">
    <nav class="main">
        <div class="container">

            <router-link :to="'/list'" class="brand">
                永无止境<span>菜鸟季程序猿进化论</span></router-link>
            <router-link :to="'/leaveword'" :class="curPath == '/leaveword' ? 'active' : ''" class="menu">留言板</router-link>
            <router-link :to="'/loveword'"  :class="curPath == '/loveword' ? 'active' : ''" class="menu">小情话</router-link>
            <router-link :to="'/zl'"  :class="curPath == '/zl' || curPathName == 'al' || curPathName == 'zldetail' ? 'active' : ''" class="menu">专栏</router-link>
            
        </div>
    </nav>
    <section class="section" id="top" style="margin-top: 110px;">
        <router-view>
        </router-view>
    </section>
    <footer class="main">
        <p>京ICP备17016953号</p>
        <p>since 2018.01  by 麦晓杰</p>   
        <p class="less-significant">
            <a target="__blank" href="https://github.com/maixiaojie/maixiaojie.github.io">源码地址</a>
            <a target="__blank" href="http://zz.mcust.cn/">悠客</a>
            我在<a target="__blank" href="https://juejin.im/user/57c683e75bbb500063543b45">掘金</a>、<a target="__blank" href="https://segmentfault.com/u/lavna">segmentfault</a>
        </p>
    </footer>
</div>
</template>
<script>
import * as css from '../style/main.css'
export default {
    name: 'app',
    data: function() {
        return {
            subtitle: '麦晓杰 Lite',
            curPath: '',
            curPathName: ''
        }
    },
    watch: {
        '$route'(newV) {
            this.curPath = newV.path;
            this.curPathName = newV.name;
        }
    },
    mounted() {
        this.curPath = this.$route.path;
        this.curPathName = this.$route.name;
    }
}
</script>
<style scope>
.menu {
    /* border-bottom: 1px solid #fff; */
    padding: 10px 15px;
    text-align: center;
    color: #fff;
    transition: all 0.5s;
}
.menu:hover {
    color: hsla(0,0%,100%,.7);
    border-bottom: 1px solid hsla(0,0%,100%,.7);
}
.menu.active {
    color: hsla(0,0%,100%,.7);
    border-bottom: 1px solid hsla(0,0%,100%,.7);
}
</style>
