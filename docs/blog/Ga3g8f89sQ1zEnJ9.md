---
title: nodemon
category: 技术
date: 2017-06-20 16:40:13
tags: [nodejs, 自动化]
---
[nodemon](https://www.npmjs.com/package/nodemon)将监视启动nodemon的目录中的文件，如果任何文件更改，nodemon将自动重新启动node应用程序。
![](https://ws4.sinaimg.cn/large/006tKfTcly1fgrtvlh5b7j307g08iglq.jpg)
<!-- more -->
### 安装
```shell
npm install -g nodemon
```

### 用法

```shell
nodemon [your node app]
```

使用nodemon很简单，如果我的应用程序接受主机和端口作为参数，可以这样使用:

```shell
nodemon ./server.js localhost 8080
```

nodemon还支持运行和监视coffee脚本应用程序：

```shell
nodemon server.coffee
```

启用调试

```
nodemon --debug ./server.js 80
```
