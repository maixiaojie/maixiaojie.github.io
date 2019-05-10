<template>
    <section class="zl-container">
        <template v-if="!loadOk">
            <p class="tac">
                <i :class="loadingClass"></i>
            </p>
            <p class="tac">
                {{status}}
            </p>
        </template>
        <div v-else>
            <ul class="goods-list">
                <li class="goods" v-for="item in list" :key="item.id">
                    <div class="goods-img">
                        <img :src="item.cover">
                    </div>
                    <div class="goods-info">
                        <h6>{{item.title}}</h6>
                        <p>状态：<span> {{item.status == '1' ? '完结' : '更新中'}}  </span></p>
                    </div>
                    <div class="other-info">
                        <p>作者：{{item.author}}</p>
                        <p>{{item.intro}}</p>
                    </div>
                    <div class="btn-warpper">
                        <a class="btn" href="/al/48/0">开始学习<i class="ml5 fa fa-arrow-right"></i></a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import {api} from '../helpers/api'
export default {
    name: 'Detail',
    data() {
        return {
            id: 0,
            list: [],
            flag: 4,
            loadOk: false,
            status:'Loading...',
            loadingClass:'iconfont icon-loading if-spin if-3x if-main'
        }
    },
    mounted() {
        this.id=this.$route.params.id
        console.log(this.id)
        this.getData()
    },
    created() {
    },
    updated() {
    },
    components: {
    },
    methods: {
        getData() {
            api.ZlList().then(
                (res) => {
                    console.log(res)
                    this.list = res.data;
                    this.loadOk = true;
                },
                (res) => {
                    this.status=`Error:${res.statusText}`;
                    this.loadingClass='iconfont icon-loading if-3x if-main';
                }
            )
        }
    }
}

</script>

<style>
.zl-container {
    padding: 0 20px;
}
@media(min-width: 1000px) {
    .zl-container {
        width: 1000px;
        min-height: 500px;
        margin: auto;
    }
}
@media(max-width: 1000px) {
    .zl-container {
        width: 100%;
        min-height: 500px;
    }
}
.tac {
    text-align: center;
}

</style>
