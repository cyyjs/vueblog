---
category: 技术
title: Vuex 引入多个模块简写方法
date: 2018-01-23 14:19:01
tags: ["Vue.js","webpack"]
description: 随着项目变得越来越大，我们导入的文件就会越来越多，而且有时候在`modules`文件夹下添加了文件后，会忘了在主文件中添加进去；有没有自动导入的方法呢？
---

在使用`Vuex`对`vue`项目进行状态管理时，我们的`Vuex`主文件通常是这个样子的：

```js
import Vue from 'vue'
import Vuex from 'vuex'
import A from './modules/a'
import B from './modules/b'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        A,
        B
    },
    strict: true
})
```

随着项目变得越来越大，我们导入的文件就会越来越多，而且有时候在`modules`文件夹下添加了文件后，会忘了在主文件中添加进去；有没有自动导入的方法呢？

在`webpack`中，有提到一个方法[require.context](https://doc.webpack-china.org/guides/dependency-management/#require-context)；可以使用此方法来创建自己的（模块）上下文，它接收三个参数：

*   要搜索的文件夹目录
*   是否还应该搜索它的子目录
*   以及一个匹配文件的正则表达式

例如：

```js
require.context('./test', false, /\.test\.js$/)
// （创建了）一个包含了 test 文件夹（不包含子目录）
// 下面的、所有文件名以 `.test.js` 结尾的、
// 能被 require 请求到的文件的上下文。
```

详细请查看[require.context](https://doc.webpack-china.org/guides/dependency-management/#require-context)的文档。

我们可以使用此方法来修改我们的代码；修改后如下：

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let ms = require.context('./modules', false, /\.js$/)
let modules = {}
ms.keys().forEach(k => {
    let n = k.substring(2, k.length - 3)
    modules[n] = ms(k).default
})
export default new Vuex.Store({
    modules,
    strict: true
})
```

此时，在`modules`中添加的所有以`.js`后缀结尾的文件都会被自动导入进来了。
