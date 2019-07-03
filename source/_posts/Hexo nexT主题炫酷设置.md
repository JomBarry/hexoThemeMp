---
title: Hexo nexT主题炫酷设置 持续更新中...
date: 2018-09-23 22:21:46
tags: Hexo
categories: Hexo
thumbnail: 
---

> 说明：
> 根据nexT主题进行主题细节优化基本实现自定义（第三方插件的使用）
> 从个人博客的头部向下一次讲解可以使用的插件（有比较好的插件的可以联系小博主进行添加）

# 一、头部



## （1）在右上角或者左上角实现fork me on github


1. 效果图：

  ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%89%E7%AF%87%20nexT%E4%B8%BB%E9%A2%98%E7%82%AB%E9%85%B7%E8%AE%BE%E7%BD%AE/%E4%B8%8A%E9%83%A8/peizhifork-me-on-github.png)

2. 点击[进入](https://blog.github.com/2008-12-19-github-ribbons/)选择复制

  ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%89%E7%AF%87%20nexT%E4%B8%BB%E9%A2%98%E7%82%AB%E9%85%B7%E8%AE%BE%E7%BD%AE/%E4%B8%8A%E9%83%A8/fork-me--on-github%E4%BB%A3%E7%A0%81%E5%A4%8D%E5%88%B6.png)

3. 粘贴下面代码到 `themes/next/layout/_layout.swig` 文件中

   ```bash
   $ <div class="headband"></div>
   ```

4. 粘贴刚才复制的代码也到 `themes/next/layout/_layout.swig` 文件中
5. 最后别忘了把 `href` 改为你的 `github` 地址！！！

****





# 二、中部



## （1）添加顶部加载条



1. 打开 `/themes/next/layout/_partials/head.swig` 文件，
   添加一下代码

   ```bash
   <script src="//cdn.bootcss.com/pace/1.0.2/pace.min.js"></script>
   <link href="//cdn.bootcss.com/pace/1.0.2/themes/pink/pace-theme-flash.css" rel="stylesheet">
   ```

2. 但是，默认的是 "粉色" 的，要改变颜色可以在 `/themes/next/layout/_partials/head.swig` 文件中添加如下代码(接在刚才 `link` 的后面)

   ```bash
   <style>
       .pace .pace-progress {
       	/*进度条颜色*/
           background: #ff009e; 
           height: 3px;
       }
       .pace .pace-progress-inner {
       	/*阴影颜色*/
            box-shadow: 0 0 10px #ff009e, 0 0 5px #ff009e; 
       }
       .pace .pace-activity {
           border-top-color: #ff009e;    /*上边框颜色*/
           border-left-color: #ff009e;    /*左边框颜色*/
       }
   </style>
   ```

****



## （2）RSS [点击了解RSS](https://www.aarryblog.top/2018/09/25/RSS/)



1. 附上效果图

![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%89%E7%AF%87%20nexT%E4%B8%BB%E9%A2%98%E7%82%AB%E9%85%B7%E8%AE%BE%E7%BD%AE/%E4%B8%AD%E9%83%A8/RSS%E6%A0%B7%E5%BC%8F.png)

2. 安装 `hexo-generator-feed` 在命令行中输入

   ```bash
   $ npm install hexo-generator-feed --save
   ```

3. 在目录 `/theme/next/_config.yml` 文件中添加相应配置：

   ```bash
   feed:
       type: rss2
       path: rss2.xml
       limit: 5
       hub:
       content: 'true'
   ```

****



## （3）标签

### 




# 三、下部



> 参考：
> [http://theme-next.iissnan.com/](http://theme-next.iissnan.com/ "nexT文档")
> [http://yangbingdong.com/2017/build-blog-hexo-advanced/](http://yangbingdong.com/2017/build-blog-hexo-advanced/ "ookamiAntD")