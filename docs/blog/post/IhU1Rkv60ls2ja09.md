---
category: 技术
title: Pow 快速创建静态网页服务器
date: 2017-10-20 15:36:23
tags: ["工具"]
banner: https://ws4.sinaimg.cn/large/006tNc79ly1fkoqm5g827j30be08cmy6.jpg
description: Pow 需要 Mac OS X 10.9 或更高版本。要安装或升级 Pow，只需打开终端并运行以下命令
---

![](https://ws4.sinaimg.cn/large/006tNc79ly1fkoqm5g827j30be08cmy6.jpg)

[Pow](http://pow.cx/)是 Mac OS X 的零配置机架式服务器。

## 安装

Pow 需要 Mac OS X 10.9 或更高版本。要安装或升级 Pow，只需打开终端并运行以下命令

```bash
curl get.pow.cx | sh
```

## 使用

只需将静态文件目录链接到您的`~/.pow` 目录中即可。假设你有个应用程序放在 `~/Projects/myapp`中，并且包含了`public`目录，你想要这样访问它 `http://myapp.dev/`；可以这样设置：

```sh
cd ~/.pow
ln -s ~/Projects/myapp
```

如果您有一个静态站点，并希望将文件保留在项目的根目录中（即不在 public 目录中），则可以执行以下操作：

```sh
cd ~/.pow
mkdir your-app-domain
cd !$
ln -s ~/Projects/your-app public
```
