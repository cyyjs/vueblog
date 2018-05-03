---
category: 技术
title: Docker常用命令
date: 2018-03-22 15:51:56
tags: ["Docker"]
---

![图片](http://ow5l7f56h.bkt.clouddn.com/b877c1b0-2da5-11e8-908e-8d20789a9043)

### 镜像常用操作

#### 1、列出镜像

```shell
docker images
```

#### 2、拉取镜像

```shell
docker pull node:8.10.0
```

#### 3、搜索镜像

```shell
docker search node
```

#### 4、导出导入镜像

```shell
docker save node > node.tar
docker load < node.tar
```

### Docker 容器常用操作

#### 1、创建并启动容器

```shell
docker run -i -t node /bin/bash
```

`-i`启动容器后打开标准输入
`-t`分配一个终端，与服务器建立一个会话

#### 2、列出容器

```shell
docker ps
```

#### 3、进入运行中的容器

```shell
docker attach 容器ID
```

#### 4、执行命令

```shell
docker exec -i -t 容器ID ls -l
```

#### 5、停止容器

```shell
docker stop 容器ID
```

#### 6、终止容器

```shell
docker kill 容器ID
```

#### 7、启动容器

```shell
docker start 容器ID
```

#### 8、重启容器

```shell
docker restart 容器ID
```

#### 9、删除容器

```shell
docker rm 容器ID
```

#### 10、导入导出容器

```shell
docker export 容器ID > node.tar
docker import node.tar cyy/node:latest
```
