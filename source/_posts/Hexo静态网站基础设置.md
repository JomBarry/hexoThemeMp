---
title: Hexo静态网站基础设置
date: 2018-09-21 00:31:17
tags: Hexo
categories: Hexo
img: "https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Hexo.png"
---

>  运行平台：GitHub、Gitee、Coding



## 第一步、安装[node](https://nodejs.org/zh-cn/)

1. 原因：Hexo是基于node.js环境的静态博客，最有用的就是nmp工具
2. 安装：无脑安装狂点击 `next`
3. 检测：点击快捷键 `win+r` 调出运行工具，输入 `cmd` 确定打开窗口输入 `node -v` 出现：

    ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/node%E7%89%88%E6%9C%AC.png)

---



## 第二步、安装[Git](https://git-scm.com/downloads)

1. 原因：Git是一个免费的开源 分布式版本控制系统，旨在快速，高效地处理从小型到大型项目的所有事务。
2. 安装：无脑安装狂点击 `next`
3. 检测：点击快捷键 `win+r` 调出运行工具，输入 `cmd` 确定打开窗口输入 `node -v` 出现：

	![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Git%E7%89%88%E6%9C%AC.png)

---



## 第三步、安装 Hexo

1. PS：这一次与上边的不同，需要在 `cmd` 中输入命令行 `nmp install -g hexo-cli` 自动安装
2. 检测：点击快捷键 `win+r` 调出运行工具，输入 `cmd` 确定打开窗口输入 `hexo -v` 出现：

	![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/hexo%E7%89%88%E6%9C%AC.png)

---



## 第四部、新建Hexo

1. 在cmd中输入命令行 `hexo init name` （ name为创建文件的文件名，内部包含创建的hexo文件 ）
2. cmd中输入 `ls` 查看创建的文件夹（会看到一个名为 name 的文件夹）输入命令 `cd ./name` 进入 name 文件夹
3. 输入命令行 `hexo g` 生成静态文件（public）
4. 输入命令行 `hexo s` 启动服务器，默认情况下，访问网址为： http://localhost:4000/（浏览器中输入网址可以看到生成的静态网页了）
5. 输入命令行 `hexo d` 上传静态文件到 Git（暂时先提前说明一下以后配置完Git用到）
6. 输入命令行 `hexo clean` 清楚已有的静态文件

---



## 第五部、配置[GitHub](https://github.com/login)、[Gitee](https://gitee.com/login)、[Coding](https://coding.net/)

1. 注册 [GitHub](https://github.com/join?source=login)、[Gitee](https://gitee.com/signup) 、[Coding](https://coding.net/register) 账号

2. 创建一个新的库存：

   ---

   ​	**GitHub**：

   ​	点击加号出现菜单选择第一个点击

   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Github/GitHub%E6%96%B0%E5%BB%BA1.png)

   ​	依次输入储仓库名称（Repository name）和描述（Description）<可选择填写>

   ​	点击创建按钮（Createrepository）

   ## ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Github/GitHub%E6%96%B0%E5%BB%BA2.png)

   ---

   ​	**Gitee（码云）**：

   ​	点击加号出现菜单点击新建项目

   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Gitee/Gitee%E6%96%B0%E5%BB%BA1.png)

   ​	依次输入项目名称等点击最下方的创建

   ​	![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Gitee/Gitee%E6%96%B0%E5%BB%BA2.png)

   ---

   ​	**Coding**：

   ​	点击加号出现菜单再点击 项目 新建项目（填写项目名称、项目描述）

   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Coding/Coding%20%E6%96%B0%E5%BB%BA1.png)

   ---

   ​	

---

3. 如果资金充足可以到 [阿里云](https://www.aliyun.com/)、[腾讯云](https://cloud.tencent.com/) 上去购买自己喜欢的域名<价格自己对比着来>

4. 对于现在来说Github、Gitee（码云）都支持自定义域名功能，但是 Gitee 可以免费使用一个月以后需要付费，然而 Github 免费

   ---

   **Github**：

   Settings 按钮进入设置界面

   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Github/Github%E8%AE%BE%E7%BD%AE%E9%80%89%E6%8B%A9.png)

   ​	找到 Github Pages 点击下方的 Choose a theme 按钮进入选择一个主题
   ​	
   ​	![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Github/Github%20pages1.png)

   ​	再查看 Source 是否为 master branch 如果不是则选择并点击 Save 按钮，这时我们可以看到 Github 给我们的域名（点击可以进入）

   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Github/Github%20pages2.png)

   ---

   ​	**Gitee（码云）**：

   ​	点击服务按钮出现菜单选项选择 Gitee Pages 选项

   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Gitee/Gitee%20pages1.png)

   ​	点击启动按钮会出现下面的截图，我们可以看到 Gitee Pages 给我们的域名（点击也可以进入）

   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Gitee/Giteepages2.png)

   ---

   ​	**Coding**：

   ​	点击新创建的项目再左侧出现的菜单中一次找到 代码、Pages服务 点击进入并开启服务

   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Coding/Coding%20pages%E6%9C%8D%E5%8A%A1.png)

   ---


5. 如果想用自己的域名[点击这里](https://www.aarryblog.top/2018/09/23/HexoCustomDomain/)

---



## 第六步、上传静态网页文件（Public）



1. 复制 Github或Gitee或Coding 下载链接

   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Hexo/Github%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80.png)
   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Hexo/Gitee%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80.png)
   ![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Coding/Coding%20%E4%B8%8A%E4%BC%A0%E9%93%BE%E6%8E%A5.png)

---

2. 找到 _config.yml 文件，粘贴地址到 deploy 下面的 repo 并设置 type 为 git

![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Hexo/config%E6%96%87%E4%BB%B61.png)

![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Hexo/config%E6%96%87%E4%BB%B62.png)

---

3. 设置URL（不设置点击显示404）url 设置为Github或Gitee给我们的域名 root 设置为域名后面的内容

![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/Hexo/%E7%AC%AC%E4%B8%80%E7%AF%87%20%E5%9F%BA%E7%A1%80%E8%AE%BE%E7%BD%AE/Hexo/config%E6%96%87%E4%BB%B63.png)

---

4. 输入命令行 `hexo d` 上传代码

---

5. 点击所给的域名将会访问到Hexo为我们默认设置的博客了！ 

----

