---
category: 技术
title: Dockerfile格式
date: 2018-03-22 15:51:42
tags: ["Docker"]
---

![图片](http://ow5l7f56h.bkt.clouddn.com/d71fa830-2da5-11e8-908e-8d20789a9043)
Dockerfile 是用于构建 Docker 镜像的脚本文件。

```docker
# 基础镜像
FROM node:8.9.4
# 维护者信息，旧版本写法不一样
LABEL maintainer="cyy"
# 工作目录
WORKDIR /api
# 复制本地文件到容器中
COPY ./package.json /hk-ad-api/
# 在终端执行命令
RUN npm install --production --registry=https://registry.npm.taobao.org
RUN \
    rm /etc/localtime && \
    ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# 容器暴露端口号
EXPOSE 6080
# 环境变量
ENV NODE_ENV="production" \
    MONGO_HOST= \
    MONGO_OPTION= \
    MONGO_PORT= \
    MONGO_USER=\
    MONGO_PASSWD=\
    REDIS_HOST= \
    REDIS_PASSWD=\
    REDIS_PORT=\
    MEMCACHE_HOST=\
    MEMCACHE_USERNAME=\
    MEMCACHE_PASSWORD=\
    MEMCACHE_PORT=\
    MYSQL_HOST='' \
    MYSQL_PORT=\
    MYSQL_USER=\
    MYSQL_PASSWD=\
    PORT=6080
# 类似COPY
ADD . /api
# 容器执行的命令，每个容器只能执行一条CMD命令
CMD ["node", "www/production.js"]
```
