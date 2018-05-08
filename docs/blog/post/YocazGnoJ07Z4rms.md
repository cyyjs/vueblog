---
title: 搭建网盘服务器
category: 技术
date: 2017-07-18 10:00:11
tags: 网盘
---

## 安装 Seafile 服务器

### 安装依赖环境

在 Debian/Ubuntu 系统下，可以使用以下命令安装 MySQL：

```shell
sudo apt-get update
sudo apt-get install mysql-server
```

<!-- more -->

使用以下命令安装 Python 相关依赖：

```shell
sudo apt-get install python2.7 python-setuptools python-imaging python-ldap python-mysqldb python-memcache python-urllib3
```

安装 MySQL 过程需要为 MySQL 的 root 用户设置新密码，请记住该[密码]以供后面步骤使用。

## 为 Seafile 创建一个用户

创建 Seafile 用户，使用它运行 Seafile 服务：

```shell
sudo useradd -m -s /bin/bash seafile
```

### 为该用户设置密码：

```shell
sudo passwd seafile
```

## 下载 Seafile

### 切换到新用户，需要输入你刚才为 seafile 用户设置的密码：

```shell
su - seafile
```

### 切换目录：

```shell
cd ~
```

这里可以查看获取最新 Seafile 下载链接，参考以下命令进行下载。

```shell
wget http://seafile-downloads.oss-cn-shanghai.aliyuncs.com/seafile-server_6.1.1_i386.tar.gz

# 64位：
# https://download.seadrive.org/seafile-server_6.1.1_x86-64.tar.gz
```

### 解压:

```shell
tar -xzf seafile-server_*
mv seafile-server-*/ seafile-server/
```

## 配置 Seafile

运行 Seafile 设置脚本，并回答预设问题：

```shell
cd seafile-server*
./setup-seafile-mysql.sh
```

执行过程输入参数如下图：其中：
[ This server's ip or domain ] 字段输入服务器 IP 地址（111.111.111.111）。
mysql 的 [ root password ] 字段输入数据库密码。其他字段一路回车使用默认值。
![](https://ws3.sinaimg.cn/large/006tNc79ly1fhp0relpz6j30f90nxgp9.jpg)

## 启动 Seafile

```shell
./seafile.sh start
./seahub.sh start
```

执行过程输入参数如截图所示，其中 [ admin email ] 设置为您登录网盘的帐号，如 `xxx@xxx.com`
[ admin password ] 和 [ admin password again ] 设置为登录网盘的密码，如 `xxxxxxx`
![](https://ws3.sinaimg.cn/large/006tNc79ly1fhp0thvmy1j30gw06ywf8.jpg)

## 大功告成！

恭喜，您的 Seafile 已经部署完成，您现在拥有专属的网盘了，登录的帐号密码为您启动 Seafile 步骤中设置的邮箱和密码。可以通过 IP 访问网盘：http://111.111.111.111:8000

_注意_
安装过程中会出现类似错误
`error while loading shared libraries: libselinux.so.1: cannot open shared object file: No such file or directory`

这是由于安装包与系统位不同导致的，64 位系统要下载对应的 64 位的安装包
