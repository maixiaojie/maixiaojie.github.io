<template>
    <section class="zl-detail">
        <template v-if="!loadOk">
            <p class="tac">
                <i :class="loadingClass"></i>
            </p>
            <p class="tac">
                {{status}}
            </p>
        </template>
        <div v-else>
            <div class="detail shadow">
                <div class="form-group">
                    <router-link :to="'/zl'" >专栏</router-link> &gt;
                    <router-link :to="{name: 'al', params: {id: zl_info.id}, query: {order: order}}">{{zl_info.title}}</router-link> &gt;
                    文章详情
                </div>
                <div class="form-group">
                    <h1 class="article-title">{{article.article_title}}</h1>
                </div>
                <div class="form-group">
                    <span>阅读 {{article.view_number}}</span>
                </div>
                <div class="form-group">
                    <a href="https://zz.mcust.cn/zl" style="position: relative;width: 100%;float: left;">
                        <img src="https://zz.mcust.cn/public/banner/banner01.png" class="article-img">
                        <span class="img-tagitem" style="display: block;">广告</span>
                    </a>
                    
                </div>
                <div class="form-group">
                    <img :src="article.article_cover" class="article-img">
                </div>
                <!-- <div class="form-group">
                    <div class="mini-player">
                        <a href="javascript:;" id="audioControl" class="btn-play"></a>
                        <div class="audio-info">
                            <h3>开篇词  |  洞悉技术的本质，享受科技的乐趣</h3>
                            <p><span>朗读人：XXX &nbsp;&nbsp;&nbsp;</span> <span>00:08:31 | 4096350b</span></p>
                        </div>
                        <audio title="" id="audio" preload="" src=""></audio>
                    </div>
                </div> -->
                <div class="form-group markdown-body" v-html="article.mdhtml"></div>
                <div class="form-group" style="text-align:center;">
                    <img src="//zz.mcust.cn/public/img/ds.png" class="article-img">
                </div>
            </div>
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
            article: {},
            lastArticle: {},
            nextArticle: {},
            flag: 4,
            loadOk: false,
            status:'Loading...',
            loadingClass:'iconfont icon-loading if-spin if-3x if-main'
        }
    },
    mounted() {
        this.id=this.$route.params.id
        this.order = this.$route.query.order == undefined ? 0 : this.$route.query.order
        window.scrollTo(0, 0);
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
            api.articleDetail(this.id, this.order).then(
                (res) => {
                    console.log(res)
                    this.article = res.data.article;
                    document.title = this.article.article_title;
                    console.log(this.article)
                    this.zl_info = res.zhuanlan;
                    this.lastArticle = res.data.lastArticle[0];
                    this.nextArticle = res.data.nextArticle[0];
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
.detail {
    padding: 0px 20px;
}
@media(min-width: 1000px) {
    .zl-detail {
        width: 1000px;
        min-height: 500px;
        margin: auto;
    }
}
@media(max-width: 1000px) {
    .zl-detail {
        width: 100%;
        min-height: 500px;
    }
}
.tac {
    text-align: center;
}
.shadow {
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
.form-group {
  /* float: left; */
  width: 100%;
  margin: 10px 0;
}
.article-title {
    margin: 0.47em 0;
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 1.5;
    font-family: -apple-system,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Arial,sans-serif;
    word-break: break-word;
    text-rendering: optimizeLegibility;
    color: #333;
}
.article-img, video {
    max-width: 100%;
    min-width: 100%;
}
.img-tagitem {
  position: absolute;
  padding: 0 8px;
  right: 8px;
  top: 8px;
  border: 1px solid #999;
  border-radius: 2px;
  line-height: 25px;
  font-size: 14px;
  color: #fff;
  background: rgba(0,0,0,.5);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000, endColorstr=#7F000000);
}
</style>
