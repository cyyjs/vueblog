---
category: 技术
title: Docker常用命令
date: 2018-03-22 15:51:56
tags: ["Docker"]
description: Docker常用命令介绍
banner: http://ow5l7f56h.bkt.clouddn.com/b877c1b0-2da5-11e8-908e-8d20789a9043
---

![图片](http://ow5l7f56h.bkt.clouddn.com/b877c1b0-2da5-11e8-908e-8d20789a9043)

### 镜像常用操作

#### 1、列出镜像

```shell
docker images
```

#### 2、拉取镜像

```bash
docker pull node:8.10.0
```

<!-- more -->

#### 3、搜索镜像

```bash
docker search node
```

#### 4、导出导入镜像

```bash
docker save node > node.tar
docker load < node.tar
```

### Docker 容器常用操作

#### 1、创建并启动容器

```bash
docker run -i -t node /bin/bash
```

`-i`启动容器后打开标准输入
`-t`分配一个终端，与服务器建立一个会话

#### 2、列出容器

```bash
docker ps
```

#### 3、进入运行中的容器

```bash
docker attach 容器ID
```

#### 4、执行命令

```bash
docker exec -i -t 容器ID ls -l
```

#### 5、停止容器

```bash
docker stop 容器ID
```

#### 6、终止容器

```bash
docker kill 容器ID
```

#### 7、启动容器

```bash
docker start 容器ID
```

#### 8、重启容器

```bash
docker restart 容器ID
```

#### 9、删除容器

```bash
docker rm 容器ID
```

#### 10、导入导出容器

```bash
docker export 容器ID > node.tar
docker import node.tar cyy/node:latest
```
