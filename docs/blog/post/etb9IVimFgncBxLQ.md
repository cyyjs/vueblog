---
category: 默认分类
title: 前端mac系统重装之后
date: 2017-10-17 18:20:50
tags: [" 工具"]
discription: 最近刚更新了 macOS High Sierra，更新过程非常坎坷，最后终于安装成功了，但是曾经装的软件什么的都没有了，需要重新安装，这里列出我所安装的软件列表
banner: https://ws1.sinaimg.cn/large/006tNc79ly1fke3s9cr5qj30c00aa755.jpg
---

![](https://ws1.sinaimg.cn/large/006tNc79ly1fke3s9cr5qj30c00aa755.jpg)

最近刚更新了 macOS High Sierra，更新过程非常坎坷，最后终于安装成功了，但是曾经装的软件什么的都没有了，需要重新安装，这里列出我所安装的软件列表：

### 系统常用

*   chrome 浏览器
*   [百度输入法](https://srf.baidu.com/input/mac.html)
*   Magnet 分屏软件
*   iPic 图片上传神器
*   全能解压
*   Alfred
*   [Sip 拾色工具](http://sipapp.io/)
*   1Password

### 社交

*   [微信](http://weixin.qq.com/)
*   [qq](http://im.qq.com/macqq/)
*   [钉钉](https://im.dingtalk.com/)

### 写作笔记

*   [有道云笔记](http://note.youdao.com/)
*   [印象笔记](https://www.yinxiang.com/)

### 编辑器

*   [Sublime Text 3](http://www.sublimetext.com/) ([package control](https://packagecontrol.io/installation))
*   [VScode](https://code.visualstudio.com/)

### Shell 增强

*   [oh my zsh](http://ohmyz.sh/)
*   [Homebrew](https://brew.sh/)
*   wget (brew install wget)
*   autojump (brew install autojump)
    如果 link 失败可执行

```shell
sudo chown -R $(whoami) /usr/local/share/
```

### 代码管理

*   [Git](https://git-scm.com/)
    生成 KEY：

```shell
git config --global user.name “xx”
git config --global user.email “x@gmail.com"
ssh-keygen -t rsa -C “xx@gmail.com”
```

### 开发相关

*   [Nodejs](https://nodejs.org/en/download/)
*   nodemon (npm install -g nodemon) node 更改自动重启
*   [yarn](https://yarnpkg.com/zh-Hans/) （node 包管理）
*   [cnpm](https://npm.taobao.org/) 淘宝 NPM 镜像

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

*   [Mongodb](https://www.mongodb.com/)
*   [MySQL](https://www.mysql.com/)
*   [Robo 3T](https://robomongo.org/) mongo 客户端
*   [Navicat for mysql](http://www.navicat.com.cn) MySQL 客户端
*   [Redis](http://www.redis.cn/)
*   [RedisDesktopManager](https://github.com/uglide/RedisDesktopManager/releases) Redis 客户端
*   [Memcached](http://memcached.org/) 缓存管理

### 其他

*   [Scss](https://www.sass.hk/) 前端 CSS 扩展语言
*   vim 设置

```shell
vim ~/.zshrc
syntax on
set nu # 显示行号
```

---
