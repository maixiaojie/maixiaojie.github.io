<template>
    <section class="about-detail">
        <p class="intro_title">About Us：</p>
        <p>YOKE工作室，也叫做悠客工作室,自发组织的交友和 code 小团队, 来自于长春理工大学，We are all CUSTer !!</p>
        <p class="line"></p>
        <p class="intro_title">团队成员：</p>
        <p>
            <a href="javascript:;" class="person_container">
                <img src="https://avatars2.githubusercontent.com/u/11681287?s=460&v=4" alt="" />
                <p>simless, 前端工程师</p>
            </a>
            <a href="javascript:;" class="person_container">
                <img src="https://avatars0.githubusercontent.com/u/20966346?s=460&v=4" alt="" />
                <p>Dennis, 中间件工程师</p>
            </a>
            <a href="javascript:;" class="person_container">
                <img src="https://avatars0.githubusercontent.com/u/21030035?s=460&v=4" alt="" />
                <p>zlxblack, 前端工程师</p>
            </a>
            <a href="javascript:;" class="person_container">
                <img src="https://avatars3.githubusercontent.com/u/30166664?s=460&v=4" alt="" />
                <p>kurryzhang, 产品经理</p>
            </a>
            <a href="javascript:;" class="person_container">
                <img src="https://avatars1.githubusercontent.com/u/35832921?s=460&v=4" alt="" />
                <p>Ord1nAryJ, JAVA工程师</p>
            </a>
        </p>
        <p class="line"></p>
        <p class="intro_title">作品：</p>
        <p>1. “悠客专栏”，整理互联网各领域大佬精品专栏课程。内容前沿，涉及领域广，程序猿必读。</p>
        <p class="tac"><a href="https://zz.mcust.cn/zl" target="__blank"><img src="https://zz.mcust.cn/public/banner/banner01.png" alt=""></a></p>
        <p>2. “悠客社区”小程序，非营利性资源共享交流平台，利用优质的学习资源帮助开发者和在校大学生，现有优质视频8000+个，优质文章10000+篇。</p>
        <p class="tac"><img style="width: 300px;" src="https://cdn.nlark.com/yuque/0/2019/jpeg/238895/1557738487961-f65be9ef-fe4b-4144-9bb2-3d5b4c094692.jpeg" alt=""></p>
        <p class="line"></p>
        <p class="intro_title">加入我们：</p>
        <p>给我们留言即可，看到消息后，我们会第一时间联系您。</p>
        <p class="line"></p>
        <p class="intro_title">其他：</p>
        <p>
            每天进步一点点，人生将迈进一大步！ <br />
            如果该网站对您有用的话，请收藏到书签哦！<br />            
            有任何的意见建议，可以留言给我们哟！ <br />
            部分内容转载自互联网，如有侵权问题，请留言给我们进行删除处理哈！<br />
            当然，也要关注我们的微信小程序<b>“悠客社区”</b>,更多精彩内容等着您，扫描上图中的二维码即可到达！<br />        
        </p>
        <p class="line"></p>
        <p><font color=#FC0107>┈</font><font color=#F9020E>┾</font><font color=#F60315> </font><font color=#F3041C> </font><font color=#F00523>乄</font><font color=#ED062A> </font><font color=#EA0731>再</font><font color=#E70838>次</font><font color=#E4093F>感</font><font color=#E10A46>谢</font><font color=#DE0B4D>您</font><font color=#DB0C54>访</font><font color=#D80D5B>问</font><font color=#D50E62>我</font><font color=#D20F69>们</font><font color=#CF1070>的</font><font color=#CC1177>网</font><font color=#C9127E>站</font><font color=#C61385>！</font><font color=#C3148C>！</font><font color=#C01593>乀</font><font color=#BD169A> </font><font color=#BA17A1>︶</font><font color=#B718A8>ㄣ</font><font color=#B419AF> </font><font color=#B11AB6>┈</font><font color=#AE1BBD>┾</font><font color=#AB1CC4> </font><br></p>
    </section>
</template>
<script>
export default {
    name: 'about',
    computed:{
    },
    mounted() {
        window.scrollTo(0, 0);
        document.title = "关于 - YOKE工作室";
    }
}
</script>
<style scoped>
@media (min-width: 1000px) {
    .about-detail {
    width: 1000px;
    min-height: 400px;
    margin: auto;
    }
}
@media (max-width: 1000px) {
    .about-detail {
    width: 100%;
    min-height: 400px;
    }
}
.about-detail{
    padding: 0 20px;
}
.about-detail p img {
    max-width: 100%;
}
p.line {
    border-bottom: 1px solid #eec;
    margin: 0;
}
.person_container {
    display: inline-block;
    margin: 5px 8px;
}
.person_container img {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 35px;
    width: 35px;
    height: 35px;
    max-width: 35px;
}
.person_container p {
    display: inline-block;
    vertical-align: top;
    color: #586069;
    line-height: 2;
    margin: 0 0 0 10px;
}
.intro_title {
    font-weight: bold;
}
.tac {
    text-align: center;
}
</style>
