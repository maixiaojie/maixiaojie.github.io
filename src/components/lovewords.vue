<template>
    <section  class="leave-container">
            <div id="gitalk-container" class="commet"></div>  
    </section>
</template>
<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
export default {
    name: 'Detail',
    data() {
        return {
            flag: 3,
        }
    },
    mounted() {
        this.initCommet()
    },
    created() {
    },
    updated() {
    },
    components: {
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

<style>
.leave-container {
    padding: 0 20px;
}
@media(min-width: 1000px) {
    .leave-container {
        width: 1000px;
        min-height: 500px;
        margin: auto;
    }
}
@media(max-width: 1000px) {
    .leave-container {
        width: 100%;
        min-height: 500px;
    }
}
</style>
