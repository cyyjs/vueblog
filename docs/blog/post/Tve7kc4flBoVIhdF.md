---
title: browsersync 省时的浏览器同步测试工具
category: 技术
date: 2017-06-23 09:58:32
tags: [nodejs, 自动化]
banner: http://www.browsersync.cn/img/sync-demo.gif
description: Browsersync 能让浏览器实时、快速响应您的文件更改（html、js、css、sass、less 等）并自动刷新页面
---

> Browsersync 能让浏览器实时、快速响应您的文件更改（html、js、css、sass、less 等）并自动刷新页面。更重要的是 Browsersync 可以同时在 PC、平板、手机等设备下进项调试。您可以想象一下：“假设您的桌子上有 pc、ipad、iphone、android 等设备，同时打开了您需要调试的页面，当您使用 browsersync 后，您的任何一次代码保存，以上的设备都会同时显示您的改动”。无论您是前端还是后端工程师，使用它将提高您 30%的工作效率。

<!-- more -->

![](http://www.browsersync.cn/img/sync-demo.gif)

### 安装

#### 安装 nodejs

#### 安装 browsersync

```bash
npm install -g browser-sync
```

### 启动 BrowserSync

#### 静态网站

如果您想要监听.css 文件, 您需要使用服务器模式。 BrowserSync 将启动一个小型服务器，并提供一个 URL 来查看您的网站。

```bash
browser-sync start --server --files "css/*.css"
```

`--files` 路径是相对于运行该命令的项目（目录）

如果您需要监听多个类型的文件，您只需要用逗号隔开。例如我们再加入一个.html 文件

```bash
# --files 路径是相对于运行该命令的项目（目录）
browser-sync start --server --files "css/*.css, *.html"
# 如果你的文件层级比较深，您可以考虑使用 **（表示任意目录）匹配，任意目录下任意.css 或 .html文件。
browser-sync start --server --files "**/*.css, **/*.html"
```

#### 动态网站

如果您已经有其他本地服务器环境 PHP 或类似的，您需要使用代理模式。 BrowserSync 将通过代理 URL(localhost:3000)来查看您的网站。

```bash
# 主机名可以是ip或域名
# --port 指定代理端口
browser-sync start --proxy "127.0.0.1:8080" --port 3001 --files "css/*.css"
```
