---
category: 技术
title: 常用代码片段
date: 2018-05-24 09:51:22
tags: Javascript
description: js中常用的代码片段。
banner: https://ws3.sinaimg.cn/large/006tNc79ly1frm73o1z8yj30e80e874q.jpg
---

## 驼峰命名互转

##### 中划线转驼峰

```js
let name = 'get-blog-list'
name.replace(/-[a-z]/g, i => i.slice(1).toUpperCase())
// getBlogList
```

#### 驼峰转中划线

```js
let name = 'getBlogList'
name.replace(/[A-Z]/g, i => '-' + i.toLocaleLowerCase())
// get-blog-list
```
