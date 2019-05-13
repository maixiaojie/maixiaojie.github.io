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
            <ul class="article-list">
                <p class="order" :nextOrder="nextOrder" :order="order">
                    <router-link  :to="{name: 'al', params: {id: id}, query: { order: nextOrder}}"><span>{{orderFont}}</span>{{orderInfo}}</router-link>                    
                    <span class="info">已经更新{{list.length}}篇</span></p>
                <li class="article" v-for="item in list" :key="item.id">
                    <router-link :to="{name: 'zldetail', params: {id: item.id}, query: {order: order}}">
                        <h2 class="article-item-title">{{item.article_title}}</h2>
                        <div class="article-item-more">
                            <span class="article-item-more-text">阅读全文</span> <i class="fa fa-angle-right"></i>
                        </div>
                    </router-link>                        
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
            order: 0,
            zl_info: {},
            list: [],
            flag: 4,
            loadOk: false,
            status:'Loading...',
            loadingClass:'iconfont icon-loading if-spin if-3x if-main'
        }
    },
    computed: {
        nextOrder() {
            return this.order == 1 ? 0 : 1;
        },
        orderInfo() {
            return this.order == 1 ? '正序' : '倒序'
        },
        orderFont() {
            return this.order == 1 ? '↓': '↑'
        }
    },
    watch: {
        '$route'(newV) {
            this.order = newV.query.order;
            this.getData();
        }
    },
    mounted() {
        this.id=this.$route.params.id
        this.order = this.$route.query.order == undefined ? 0 : this.$route.query.order
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
            api.AlList(this.id, this.order).then(
                (res) => {
                    console.log(res)
                    this.list = res.articles;
                    this.zl_info = res.zl_info;
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
.order {
    padding-left: 12px;
    margin: 12px 0;
}
.order span.info {
  color: #888;
  font-size: 14px;
  margin-left: 8px;
  padding-left: 8px;
  border-left-width: 1px;
  border-left-color: #d9d9d9;
  border-left-style: solid;
}
.order a {
    color: #888;
}
.order a span {
    vertical-align: bottom;
    font-size: 19px;
    margin-right: 2px;
}
.tac {
    text-align: center;
}
.article-list {
    list-style: none;
    padding: 0;
}
.article-list img {
    max-width: 100%;
}
.article-list .article {
    cursor: pointer;
    padding-top: 5px;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 9px;
    background-color: #fff;
    position: relative;
}
.article-list .article .article-item-title {
    font-size: 17px;
    color: #353535;
    font-weight: 400;
    line-height: 1.35;
    margin: 6px 0;
}
.article-list .article .article-item-more {
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom-color: #e8e8e8;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.article-list .article .article-item-more .article-item-more-text {
    color: #353535;
    font-size: 12.5px;
}
</style>
