---
category: 技术
title: GitHub webhooks实现自动部署
date: 2017-09-27 11:33:39
tags: [Git,webhooks]
banner: https://ws2.sinaimg.cn/large/006tNbRwgy1fgagteiy5ej31ji120dmi.jpg
---

> 使用第三方 Git 仓库，实现代码的自动部署
> GitHub 提供了 Webhooks 的功能，我们通过相应的配置就可以实现在代码提交到 GitHub 后自动部署我们的项目

<!--more-->

### 在 GitHub 添加部署服务器的 ssh key

1、首先在服务器生成[ssh key](../other/Ja5aO9RFlMdvjYBE.md)
2、添加`ssh key`到 GitHub 账户中

选择`setting` -> `SSH and GPG keys` -> `New SSH Key` 添加

### 配置 Webhooks

打开需要配置`Webhooks`的项目，点击`Settings`，选择`Webhooks`
![Webhooks 设置](https://ws2.sinaimg.cn/large/006tNbRwgy1fgagteiy5ej31ji120dmi.jpg)

设置触发事件后请求的地址及方法，并选择触发事件的类型，此处选择为`push`,当我们提交代码的时候触发；设置完成后，点击添加即可。

### 服务器编辑接受处理代码

以`nodejs` 的 `express`为例：

```js
var shell = require('shelljs') // shell npm 包工具
var setting = require('../setting')
var blogPath = setting.blog.path
module.exports = function(req, res) {
    var body = req.body
    console.log(body) // git 推送的数据
    if (!shell.which('git')) {
        // 判断是否存在git命令
        shell.echo('Sorry, this script requires git')
        shell.exit(1)
    }
    var cd = shell.cd(blogPath)
    if (!cd.code) {
        // 执行git代码拉取操作
        if (shell.exec('git pull origin master').code !== 0) {
            shell.echo('Error: Git pull error!')
            shell.exit(1)
        }
    }
    res.end()
}
```
