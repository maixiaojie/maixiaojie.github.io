# blog lite 1.0


## 项目简介

这是一个基于[github api](https://api.github.com)与[vue](https://vue.org)的一个简单的博客，
是一个SPA应用，利用`ajax`技术从`github`抓取到前台并实时呈现。  使用了[gitalk](https://github.com/gitalk/gitalk)来做文章评论功能，所有的文章数据和评论数据都保存在github上。如果喜欢的话就给个star吧~

预览地址 [maixiaojie.github.io](https://maixiaojie.github.io)

## 使用说明
- 安装nodejs&&npm
- 克隆本项目到你的本地

- 进入博客目录安装依赖
```shell
cd maixiaojie.github.io
npm install
```
- 修改源码中issue地址为你自己的
- 打包js并上传index.html和static目录
```shell
npm run build
```

## 更新日志
**20180207**(v1.0.1)
- 添加评论功能，使用github帐号登录

**20180130**(v1.0.0)
- 第一个版本



## 鸣谢列表

* [github](https://github.com)提供数据存储，网页访问等开放服务！
* [Vue](https://vue.org)提供数据驱动的前端web组件框架。
* [webpack](http://webpack.github.io/)提供模块打包技术
* [npm](https://www.npmjs.com/) 提供包管理服务
* [marked](https://github.com/chjj/marked) 提供markdown渲染支持
* [prismjs](https://prismjs.com)提供代码高亮支持
* [gitalk](https://github.com/gitalk/gitalk)提供github评论系统



