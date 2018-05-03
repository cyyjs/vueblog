---
title: Ubuntu 16 安装mongodb
date: 2017-05-02 10:58:36
category: 技术
tags: [Ubuntu16,mongodb]
---

### 通过apt-get安装

#### 软件包签名验证
Ubuntu软件包管理工具（即dpkg和apt）通过要求分销商使用GPG密钥对软件包进行签名来确保软件包的一致性和真实性。
<!--more-->
```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```

[官方文档](https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/?_ga=2.148904432.795010929.1496648330-1138931183.1493269032)


#### 为MongoDB创建一个列表文件

```bash
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```

#### 更新本地包数据

```bash
sudo apt-get update
```

#### 安装MongoDB包

```bash
sudo apt-get install -y mongodb-org
```

#### 启动|暂停|重启

```bash
sudo service mongod start
sudo service mongod stop
sudo service mongod restart
```

### 手动安装
#### 下载安装包

```bash
wget https://fastdl.mongodb.org/linux/mongodb-linux-arm64-ubuntu1604-3.4.4.tgz
```

#### 解压
```bash
tar -xzvf mongodb-linux-arm64-ubuntu1604-3.4.4.tgz
```

#### 编写Ubuntu服务文件
增加`/lib/systemd/system/mongod.service`文件

```bash
[Unit]
Description=An object/document-oriented database
Documentation=man:mongod(1)

[Service]
User=root
ExecStart=/mongodb/bin/mongod --quiet --config /mongodb/mongodb.conf

[Install]
WantedBy=multi-user.target
```

#### 重新加载service文件

```bash
systemctl daemon-reload
```

#### 启动|暂停|重启

```bash
sudo service mongod start
sudo service mongod stop
sudo service mongod restart
```

