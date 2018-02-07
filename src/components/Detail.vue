<template>
    <section>
        
        <div v-if="loading" class="docs-wrapper container">

            <v-affix offset="0">
            <section class="sidebar">

                    <transition-group appear name="list" tag="ul">
                    <li v-for="(toc, index) in detail.rend.toc" v-bind:key="index">
                        <a v-smooth-scroll :href="'#'+toc.title" v-html="toc.title"></a>
                        <ul v-if="toc.sub.length>0">
                            <li v-for="sub in toc.sub">
                                <a v-smooth-scroll :href="'#'+sub.title" v-html="sub.title"></a>
                            </li>
                        </ul>
                    </li>
                    </transition-group>
                <ul>
                    <li>
                        <a v-smooth-scroll href="#top">返回顶部</a>
                    </li>
                </ul>

            </section>
            </v-affix>
            <article>
             <h1 style="font-size: 2rem;">{{detail.title}}</h1>
                <div v-html="detail.rend.html">
                </div>               
                <div id="gitalk-container" class="commet"></div>                
            </article>
            
             
        </div>
        <div v-else class="panel features">
            <p>
                <i class="iconfont icon-loading if-spin if-3x if-main"></i></p>
            <p>{{status}}
            </p>
        </div>

    </section>
</template>
<script>
import { github } from '../helpers/github'
//import tocHelper from '../helpers/toc'
import { rend } from '../helpers/render'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

import vAffix from './Affix.vue'
export default {
    name: 'Detail',
    data() {
        return {
            loading: false,
            detail: {},
            flag: 0,
            status:'正在加载...',
        }
    },
    mounted() {
        if (this.loading)
            document.title = "loading ---- 麦晓杰 Lite"
    },
    destroyed() {
        this.loading = false
    },
    created() {
        this.flag=this.$route.params.id
        let flag = this.flag
        github.getDetail(flag).then(
            (res) => {
                this.status='正在解析...'
                this.loading = true
                this.detail = res
                this.detail.rend = rend(flag,this.detail.body)
                document.title = res.title
            },
            (res) => {
                this.status='从服务端数据失败...'
            }
        );
    },
    updated() {
        this.$nextTick(function(){
            this.initCommet()
        });
    },
    components: {
        vAffix
    },
    methods: {
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

