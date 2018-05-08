---
category: 技术
title: 如何免费科学上网
date: 2018-01-16 14:03:15
tags: ["工具"]
banner: https://ws4.sinaimg.cn/large/006tNc79gy1fni9qq209rj30cs07o0u1.jpg
description: 如何使用免费资源实现科学上网？首先要有一台可以访问墙外资源的服务器，然后在服务器上搭建`shadowsocks`即可。
---

![](https://ws4.sinaimg.cn/large/006tNc79gy1fni9qq209rj30cs07o0u1.jpg)

如何使用免费资源实现科学上网？首先要有一台可以访问墙外资源的服务器，然后在服务器上搭建`shadowsocks`即可。

本教程开始前，请确保您的电脑可以访问 google 网站。（WTF！！）

### 领取免费资源

[Google Cloud Platform 免费方案](https://cloud.google.com/free/) goole 提供 12 个月及$300 美金的赠金，登录即可领取。

### 搭建服务器

登录[Google Cloud Platform](https://console.cloud.google.com)创建项目，然后打开左侧菜单，选择`Compute Engine`，创建一个`VM`实例,根据提示完成创建。
![](https://ws3.sinaimg.cn/large/006tNc79ly1fnia3p98k6j30a70on3zt.jpg)

创建完成后，点击链接`SSH`登录远程服务器。
![](https://ws4.sinaimg.cn/large/006tNc79ly1fnia7lhbazj30h606iaac.jpg)

### 安装 shadowsocks 服务程序

打开[Shadowsocks servers](https://shadowsocks.org/en/download/servers.html),根据提示安装。

```bash
apt-get install python-pip
pip install shadowsocks
```

### 配置文件

创建一个配置文件`conf.json`

```json
{
    "server": "内网ip",
    "server_port": 8388,
    "local_address": "127.0.0.1",
    "local_port": 1080,
    "password": "password",
    "timeout": 300,
    "method": "aes-256-cfb"
}
```

**注意**：`server`一定要是服务器的内网`ip`，使用外网`ip`可以请求不通。

### 启动及停止

```bash
sudo ssserver -c ./conf.json -d start
```

停止将`start`改成`stop`即可。

### 查看日志

```bash
sudo less /var/log/shadowsocks.log
```

### 常见错误

[启动错误](https://github.com/shadowsocks/shadowsocks/issues/693)

### 客户端连接

[客户端下载](https://shadowsocks.org/en/download/clients.html)
[GitHub 上下载](https://github.com/shadowsocks)

![](https://ws4.sinaimg.cn/large/006tNc79gy1fnieuit91bj30ws0t8q51.jpg)
填写外网地址，选择加密方式，输入密码，确定后链接即可。
