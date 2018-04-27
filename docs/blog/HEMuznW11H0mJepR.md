---
category: 技术
title: (一)ReactNative环境搭建及项目创建
date: 2017-12-18 10:08:11
tags: ["React Native"]
---

# 安装
## 安装所需
Xcode、Java、Android SDK、Android Studio、Nodejs、watchman
安装Android 模拟器

## 安装React Native CLI

```shell
npm install -g react-native-cli
```
## 代码环境
Visual Studio Code
浏览器插件： ReactDev Tools

# 创建项目
## 初始化项目
```shell
react-native init app
cd app
npm install
```

##运行项目
将手机用数据线链接或打开手机模拟器
安卓手机输入`adb devices`，会列出设备
在项目目录下输入
```shell
npm run android
```
等待完成后会在手机上打开app实例
# 启动调试工具
如果是真机，可以摇晃手机，打开菜单，选择`Debug JS Remotely`;
会在浏览器中打开`http://localhost:19001/debugger-ui/`页面。
如果是模拟器启动，可以输入以下命令触发：

```shell
adb shell input keyevent 82
```
![](https://ws3.sinaimg.cn/large/006tNc79gy1fmha2ik3x7j30ad0j4jtq.jpg)
<div style="text-align:right;font-size:12px;color:#666;">----publish by <a href="http://ceditor.alibt.top" target="_blank">CEditor</a></div>