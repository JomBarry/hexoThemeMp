---
title: Hexo设置自定义域
date: 2018-09-23 12:56:28
tags: Hexo
categories: Hexo
img: "https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Hexo.png"
---

> # 平台Github、Gitee、Coding




> ### 第一步、找到 Github、Gitee或Coding 项目的 Pages服务 




> ### 第二部、配置自定义域名



---

> Github

- 在Hexo文件中 source 文件夹下新建 CNDME（无后缀）里面输入在平台上购买的域名 xxxxx.com（要想实现 www.xxxx.com 形式直接在文件中输入 www.xxxx.com）

  cmd 进入初始化 Hexo 文件夹依次输入 `hexo clean` `hexo g` `hexo d`上传静态文件

- Github 提供了两个IP地址 `192.30.252.153`和`192.30.252.154`

- 在 *解析域名* 的地方点击进入 点击 *添加记录* 设置记录类型为 *A* *记录值* 为上边的两个IP地址

- 添加 *添加记录* 类型 *CNDAM* 设置 *记录值* 为 `xxxx.github.io`

  ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D/%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90.png)

​	![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D/Github/%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90.png)

- 进入 Github 项目的 Pages 找到 Custm domain 在输入框中输入自定义域名，点击 Save 保存


![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D/Github/Github%20pages1.png)

---



> Gitee（码云）

- 进入 Gitee Pages 服务点击右侧 尝试Gitee Pages Pro免费试用一个月 则可以设置开启自定义域名


![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D/Gitee/%E4%BD%93%E9%AA%8C%E4%B8%80%E4%B8%AA%E6%9C%88pro.png)

---



> Coding

- 进入 *Coding 项目* 的 *Pages 服务* 找到 *设置* 点击进入


- 找到 绑定新域名 输入绑定的域名点击绑定，并按照提示在 DNS 中设置（与 1.Github b 设置 `xxxx.github.io` 一样）	


![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%BA%8C%E7%AF%87%20%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D/Coding/%E7%BB%91%E5%AE%9A%E5%9F%9F%E5%90%8D.png)