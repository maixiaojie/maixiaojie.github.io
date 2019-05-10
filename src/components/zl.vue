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
                        <router-link :to="{name: 'al', params: {id: item.id}}" class="btn">开始学习<i class="ml5 fa fa-arrow-right"></i></router-link>                    
                    </div>
                </li>
            </ul>
        </div>
        
         <div id="gitalk-container" class="commet"></div>  
    </section>
</template>
<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import {api} from '../helpers/api'
export default {
    name: 'Detail',
    data() {
        return {
            list: [],
            flag: 4,
            loadOk: false,
            status:'Loading...',
            loadingClass:'iconfont icon-loading if-spin if-3x if-main'
        }
    },
    mounted() {
        this.getData()
        this.initCommet()
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
        },
        initCommet() {
            var that = this
            const gitalk = new Gitalk({
              clientID: '373d76e7ffd12855104c',
              clientSecret: '530dacb6f001170daaa3ab28270e4f02be7e365d',
              repo: 'blogCommet',
              owner: 'maixiaojie',
              admin: ['maixiaojie'],
              id: this.flag,
              distractionFreeMode: false
            })
            gitalk.render('gitalk-container')

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
.goods-list {
    padding: 0 18px;
    list-style: none;
}
.goods-list li {
    display:flex;
    align-items: center;
    padding: 23px 0;
    border-bottom: 1px solid #e8e8e8;
}
.goods-list li .goods-img {
    flex: 78px 0 0;
}
.goods-list li .goods-img img{
    display: block;
    width: 120px;
    height: 80px;
    background: #eee;
    border-radius: 4px;
    max-width: 100%;
}
.goods-list li .goods-info {
    width: 280px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 20px;
}
.goods-list li .goods-info h6 {
    overflow: hidden;
    margin: 0;
    width: 100%;
    line-height: 22px;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 400;
    color: #000;
}
.goods-list li .goods-info p {
    line-height: 26px;
    font-size: 14px;
    color: #888;
}
.goods-list li .other-info {
    flex: 1;
}
.goods-list li .btn-warpper {
    flex: 150px 0 0;
}
.goods-list li .btn-warpper a.btn {
    display: block;
    padding: 4px 14px;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #fc5a22;
    color: #fc5a22;
    user-select: none;
    -webkit-appearance: none;
    cursor: pointer;
    text-align: center;
}
</style>
