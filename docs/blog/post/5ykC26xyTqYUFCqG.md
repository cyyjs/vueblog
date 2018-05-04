---
category: 技术
title: 搭建 FTP 服务器
date: 2017-12-18 10:39:35
tags: ["FTP"]
---

## 安装并启动 FTP 服务

### 安装 VSFTPD

使用 `apt-get` 安装 `vsftpd`

```shell
sudo apt-get install vsftpd -y
```

### 启动 VSFTPD

安装完成后 VSFTPD 会自动启动，通过 `netstat` 命令可以看到系统已经监听了 21 端口

```shell
sudo netstat -nltp | grep 21
```

如果没有启动，可以手动开启 `VSFTPD` 服务：

```shell
sudo systemctl start vsftpd.service
```

<!-- more -->

## 配置用户访问目录

### 新建用户主目录

```shell
sudo mkdir /home/uftp
```

执行完后，在这里 `/home/uftp`

就能看到新建的文件夹 `uftp` 了。

### 创建登录欢迎文件

```shell
sudo touch /home/uftp/welcome.txt
```

###新建用户 `uftp` 并设置密码创建一个用户 `uftp`

```shell
sudo useradd -d /home/uftp -s /bin/bash uftp
```

为用户 `uftp` 设置密码

```shell
sudo passwd uftp
```

删除掉 `pam.d` 中 `vsftpd`，因为该配置文件会导致使用用户名登录 `ftp` 失败：

```shell
sudo rm /etc/pam.d/vsftpd
```

## 限制该用户仅能通过 FTP 访问

限制用户 uftp 只能通过 FTP 访问服务器，而不能直接登录服务器：

```shell
sudo usermod -s /sbin/nologin uftp
```

修改 `vsftpd` 配置

```shell
sudo chmod a+w /etc/vsftpd.conf
```

修改 `/etc/vsftpd.conf` 文件中的配置（直接将如下配置添加到配置文件最下方）：

```
# 限制用户对主目录以外目录访问
chroot_local_user=YES

# 指定一个 userlist 存放允许访问 ftp 的用户列表
userlist_deny=NO
userlist_enable=YES

# 记录允许访问 ftp 用户列表
userlist_file=/etc/vsftpd.user_list

# 不配置可能导致莫名的530问题
seccomp_sandbox=NO

# 允许文件上传
write_enable=YES

# 使用utf8编码
utf8_filesystem=YES
```

### 新建文件 `/etc/vsftpd.user_list`，用于存放允许访问 ftp 的用户：

```shell
sudo touch /etc/vsftpd.user_list
sudo chmod a+w /etc/vsftpd.user_list
```

修改 `/etc/vsftpd.user_list` ，加入刚刚创建的用户：

```shell
vsftpd.user_list
uftp
```

## 设置访问权限

### 设置主目录访问权限（只读）

```shell
sudo chmod a-w /home/uftp
```

### 新建公共目录，并设置权限（读写）

```shell
sudo mkdir /home/uftp/public && sudo chmod 777 -R /home/uftp/public
```

### 重启 vsftpd 服务：

```shell
sudo systemctl restart vsftpd.service
```

## 访问 FTP 服务

FTP 服务已安装并配置完成，下面我们来使用该 FTP 服务访问 FTP 服务根据您个人的工作环境，选择一种方式来访问已经搭建的 FTP 服务 ###通过 FTP 客户端工具访问
FTP 客户端工具众多，下面推荐两个常用的：
FileZilla - 跨平台的 FTP 客户端，支持 Windows 和 Mac
WinSCP - Windows 下的 FTP 和 SFTP 连接客户端下载和安装 FTP 客户端后，使用下面的凭据进行连接即可：主机 111.111.111.11
用户：uftp

输入密码后，如果能够正常连接，那么大功告成，您可以开始使用属于您自己的 FTP 服务器了！接下来，请上传任意一张图片到您的 FTP 服务器上的 `uftp` 的 `public` 目录下，然后，就可以在 `/home/uftp/public` 中看到了。

###通过 Windows 资源管理器访问
Windows 用户可以复制下面的链接到资源管理器的地址栏访问：

```shell
ftp://uftp:你的密码@111.111.111.11
```
