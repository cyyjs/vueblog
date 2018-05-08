---
category: 技术
title: Weex 项目 Android部署
date: 2017-10-16 17:52:41
tags: ["weex"]
banner: https://ws3.sinaimg.cn/large/006tNc79ly1fkk7wozlbqj31jq11aalh.jpg
---

## 环境要求

1、安装 [Android Studio](https://developer.android.com/studio/install.html)或者 [Android SDK](https://developer.android.com/studio/releases/sdk-tools.html)

2、 安装 `Android SDK Build-Tools 23.0.2`版本

![](https://ws4.sinaimg.cn/large/006tNc79ly1fkk7rwkl1vj30wu0owgpy.jpg)
打开`Android Studio`>`Tools`>`Android`>`SDK Manager`，选择`SDK Tools`选项， 选择`Show Package Details`; 找到 `23.0.2`勾选并安装。

<!-- more -->

![](https://ws3.sinaimg.cn/large/006tNc79ly1fkk7wozlbqj31jq11aalh.jpg)

3、配置环境变量,
执行`vim ~/.bash_profile` 增加如下代码：

```bash
export ANDROID_HOME=/Users/you/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

保存后执行`resource ~/.bash_profile`,使修改生效；如果你用了其他终端，如『zsh』，可将 `. ~/.bash_profile`命令添加到`~/.zshrc`中；

## jdk 安装

下载安装[jdk 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)，如果安装了 9 版本会在运行时，出现编译失败问题，如下图：
![](https://ws1.sinaimg.cn/large/006tNc79ly1fkk6ux0sfbj30hj08c75h.jpg)

如果需要多个 jdk 版本可添加别名，实现快速切换使用；可在`.bash_profile`中增加如下代码

```bash
 export JAVA_8_HOME=`/usr/libexec/java_home -v 1.8`
 export JAVA_9_HOME=`/usr/libexec/java_home -v 9`
 alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
 alias jdk9="export JAVA_HOME=$JAVA_9_HOME"
```

此时可通过`jdk8`、`jdk9`随意切换版本。

## 运行

一切准备就绪后在终端运行以下命令，增加安卓端支持：

```bash
weex platform add android
weex run android
```

运行过程中会下载一堆的 jar 包；并会出现以下错误：
![](https://ws3.sinaimg.cn/large/006tNc79ly1fkk6ulgqvhj30h6048gm9.jpg)
提示缺少安卓设备，我们可以在`Android Studio`中设置虚拟机，也可以用 USB 连接安卓手机，并打开调试模式，然后重新执行`weex run android`;
![](https://ws3.sinaimg.cn/large/006tNc79ly1fkk8f8c5f7j309b03njrn.jpg)
如果运行成功，可在手机上看到生成的程序，并自动打开。

注：有些手机可能会有一些权限问题导致不能自动安装成功，需要响应的设置才行。
