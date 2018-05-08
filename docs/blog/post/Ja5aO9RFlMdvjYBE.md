---
category: 技术
title: ssh 免密码登录
date: 2017-10-10 13:00:31
tags: ssh
---

> 开发过程中，经常需要使用 ssh 登录远程主机，每次都要输入密码，影响效率，这里讲解一下，怎么使用 ssh 无密码登录。

<!-- more -->

### 本机生成 ssh key

ssh 无密码登录要使用公钥与私钥。linux 下可以用用`ssh-keygen`生成公钥/私钥对。

```bash
ssh-keygen -t rsa -C "xxx@email.com"
```

然后一路回车即可。

然后可以通过以下命令查看到生成的公钥：

```bash
cat ~/.ssh/id_rsa.pub
```

### 远程主机生成 ssh key

先通过`ssh`登录到远程主机， 并以同样的方式生成`ssh key`

### 复制本机公钥到远程文件

把本地的`id_rsa.pub`文件中的内容复制到远程主机的`.ssh/authorized_keys`文件里.

`authorized_keys`文件如果没有，可以自己手动创建。

添加完成后，退出重新使用`ssh` 登录时，就不需要输入密码了。
