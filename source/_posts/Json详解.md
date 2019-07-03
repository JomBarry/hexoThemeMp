---
title: Json详解
date: 2018-09-29 16:20:07
tags: 其他
categories: 其他
img: "https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%BD%91%E7%AB%99%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Json/Json%E9%A6%96%E9%A1%B5.jpg"
---



> 中文名：JavaScript 对象简谱			缩写：JSON
>
> 外文名：JavaScript Object Notation	学科：信息技术



# 简介

1. Json 是一种轻量级的数据交换格式。
2. 完全独立于编程语言的文本格式储存和表示数据
3. 简介和清晰的层次结构使得 JSON 成为理想的数据交换语言
4. 易于人读写和编写，同时也易于机器解析和生成，并有效的提升网路传输效率



# 简要历史

2001年 开始推广使用的数据格式

2005-2006年 正式成为主流的数据格式（ 雅虎 和 谷歌 就是在那时候开始广泛的使用 JSON 格式）



# JSON 语法



> JSON语法规则

​	在 JS 语言中，**一切都为对象**。So 任何支持的类型都可以通过 JSON 来表示（例如：字符串、数字、对象、数组等）

- **“名称/值”对的集合（A collection of name/value pairs）**

  不同的语言中，它被理解为*对象（object）*，纪录（record），结构（struct），字典（dictionary），哈希表（hash table），有键列表（keyed list），或者关联数组 （associative array）。

- **值的有序列表（An ordered list of values）**

  在大部分语言中，它被理解为数组（array）。



> Json 表示形式

- **对象**：无序的 **“ ‘名称 / 值’ ,  ...”** 集合。

  一个对象以  **“{”** （左括号）开始， **“}”** （右括号）结束。

  每个 **“名称”** 后跟一个 **“:”** （冒号）；**“ ‘名称/值’  , ...”** 之间使用 **“,”** （逗号）分隔。



![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%BD%91%E7%AB%99%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Json/%E5%BD%A2%E5%BC%8F1.gif)



- **数组**：值（value）的有序集合。

  一个数组以 **“[”**（左中括号）开始，**“]”**（右中括号）结束。

  值之间使用 **“,”**（逗号）分隔。



![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%BD%91%E7%AB%99%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Json/%E5%BD%A2%E5%BC%8F2.gif)



- **值（*value*）**：双引号括起来的 

  **字符串（*string*）**、**数值(number)**、**布尔值（`true`、`false`、 `null`）**、**对象（object）**或者 **数组（array）**。



![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%BD%91%E7%AB%99%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Json/%E5%BD%A2%E5%BC%8F3.gif)



- **字符串（*string*）**：由 **双引号** 包围的任意数量 **Unicode字符的集合** ，使用 **反斜线** 转义。

  **一个字符（character）**：一个单独的字符串（character string）。

  字符串（*string*）与C或者Java的字符串非常相似。



![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%BD%91%E7%AB%99%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Json/%E5%BD%A2%E5%BC%8F4.gif)



- **数值（*number*）**

  与C或者Java的数值非常相似。

  除去未曾使用的 **八进制与十六进制格式**。

  除去一些 **编码细节**。



![](https://blog-image-1257648903.cos.ap-shanghai.myqcloud.com/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/%E7%BD%91%E7%AB%99%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/Json/%E5%BD%A2%E5%BC%8F5.gif)

# 常用类型



- **对象**：对象在 JS 中是使用花括号包裹  **{ }**  起来的内容，数据结构为  **{key1：value1, key2：value2, ...}**  的键值对结构。在面向对象的语言中，key 为对象的属性，value 为对应的值。

  键名：使用整数和字符串来表示。

  值：类型可以是任意类型。

- **数组**：数组在 JS 中是方括号  **[ ]**  包裹起来的内容，数据结构为 ["java", "javascript", "vb", ...] 的索引结构。在 JS 中，数组是一种比较特殊的数据类型，它也可以像对象那样使用键值对，但还是索引使用得多。同样，值的类型可以是任意类型。

# 基础示例



- **对象**：

  JSON最常用的格式是对象的 键值对。例如下面这样：

  ```bash
  {"firstName": "Brett", "lastName": "McLaughlin"}
  ```

- **数组**：

  和普通的 JS 数组一样，JSON 表示数组的方式也是使用方括号  **[]**

  > 有一个名为 **people** 的变量：
  >
  > - 值是包含两个条目的数组.
  >
  > - 每个条目是一个人的记录，其中包含名和姓。
  >
  > 下面的示例演示如何用括号将记录组合成一个值。当然，可以使用相同的语法表示更过多的值（每个值包含多个记录）。

  ```bash
  {
  	"people":[
  		{
  			"firstName": "Brett",
  			"lastName":"McLaughlin"	
  		},
  		{   
  			"firstName":"Jason",
  			"lastName":"Hunter"
  		}
   	]
  }
  ```

---

> 参考文档：
>
> [百度百科](https://baike.baidu.com/item/JSON/2462549?fr=aladdin)
>
> [Json 中文网](http://www.json.org.cn/)