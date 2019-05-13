<template>
<section class="panel features dark" id="features">
    <h1>街角的守望</h1>
    <p>{{tip}}</p>
    <template v-if="!loadOk">
    <p>
        <i :class="loadingClass"></i>
    </p>
    <p>
        {{status}}
    </p>
    </template>
    <div v-else class="blocks stacked">

        <div class="block odd" v-for="item in details" :key="item.number">
            <div class="text">
                <h2><router-link :to="'/detail/'+item.number">{{item.title}}</router-link>
                    </h2>
                <p v-html="item.rend.summary"></p>
            </div>
        </div>
        <div class="page_container">
            <span class="page" :class="current == i? 'active': ''" @click="toPage(i)" v-for="i in perPage">{{i}}</span>
        </div>

    </div>
</section>
</template>

<script>
import {
    github
} from '../helpers/github'
import
    * as iconfont
 from '../style/iconfont.css'
import {
    rend
} from '../helpers/render'
import {
    getTip
} from '../helpers/tip'
export default {
    name: 'List',
    data() {
        return {
            loadOk: false,
            items: [],
            total: 0, 
            size: 7,
            current: 1,
            articles: [],
            // perPage: [],
            status:'Loading...',
            loadingClass:'iconfont icon-loading if-spin if-3x if-main'
        }
    },
    mounted() {
        document.title = "麦晓杰的日志";
    },
    created() {
        github.getList().then(
            (res) => {
                this.articles = res;
                this.total = this.articles.length;
                this.items = this.articles.slice(0,this.size);
                this.loadOk = true;
            },
            (res) => {
                this.status=`Error:${res.statusText}`;
                this.loadingClass='iconfont icon-loading if-3x if-main';
            }
        )
    },
    computed: {
        details: function() {
            for (let item of this.items) {
                item.rend = rend(item.number,item.body);
            }
            return this.items
        },
        perPage: function() {
            var total = Math.ceil(this.total / this.size) ;
            var pages = [];
            for(let i = 0; i< total; i++){
                pages.push(i+1)
            }
            return pages;
        },
        tip:getTip
    },
    methods: {
        toPage(i) {
            window.scrollTo(0, 0);
            this.current = i;
            this.items = this.articles.slice(this.size*(i-1),this.size * i);
        }
    }
}
</script>
