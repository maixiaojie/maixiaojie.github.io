<template>
<div id="app" class="docs scotchified">
    <nav class="main">
        <div class="container">

            <router-link :to="'/list'" class="brand">
                麦晓杰 Lite</router-link>
                <span>一个菜鸟前端的日常</span>
        </div>
    </nav>
    <section class="section" id="top">
        <router-view>
        </router-view>
    </section>
    <footer class="main">
        <p>京ICP备17016953号</p>
        <p>from 2018.01  by <a href="http://mcust.cn/mc/">麦晓杰</a></p>   
        <p class="less-significant">
            <a href="https://github.com/maixiaojie/maixiaojie.github.io">源码地址</a>
            <a href="http://mcust.cn/public/">全栈俱乐部</a>
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
        }
    }
}
</script>
