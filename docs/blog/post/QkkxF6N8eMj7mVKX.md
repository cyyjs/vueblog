---
category: 技术
title: nodejs使用socket.io实现分布式一对一发送消息
date: 2017-09-27 17:13:53
tags: [nodejs, socket.io]
---

最近在用 nodejs 实现一个消息通知的功能，其中用到了 socket.io；由于初次使用 socket.io，在网上查找资料大都是聊天室广播的教程，没有找到一对一发送消息的具体实现方法，这里分享一下自己学习使用过程中踩到某些坑和最终实现方法。

<!-- more -->

> 要实现的功能:
> server 端数据更新后，发送通知到对应客户端的用户；server 是用 nodejs 写的，并使用了分布式，同时开启了多个实例。

### 一、安装依赖包

```bash
npm install socket.io
```

### 二、socket.io 的使用

1、index.js 文件内容

```js
//index.js
var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server, {
    path: '/notice' //修改客户端请求的路径，默认为/socket.io
})
new (require('./notice')).init(io) //传入io
```

2、notice.js 文件内容

```js
var Notice = null
var socketMap = {} //用户对应socket.id

//初始化socket连接
exports.init = function(io) {
    //连接验证
    io.use(function(socket, next) {
        //console.log(socket.request.headers.cookie);
        var token = socket.request._query.token || ''
        if (validate(token)) {
            socket.request.headers.user = { userId: userId }
            return next()
        } else {
            return next(new Error('Authentication error'))
        }
    })
    Notice = io.of('/notice').on('connection', function(socket) {
        var user = socket.handshake.headers.user
        var user_id = user && user.userId
        if (user_id) {
            socketMap[user_id] = socket.id
        }

        socket.on('disconnect', function() {
            delete socketMap[user_id]
        })
    })
}
//其他模块调用，发送消息
exports.send = function(data) {
    var user_id = data.accountID
    var socket_id = socketMap[user_id]
    Notice.to(socket_id).emit('notice', data)
}
```

3、客户端文件

```js
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io('http://localhost?token=token');
  socket.on('notice', function (data) {
    console.log(data);
  });
</script>
```

在跨域请求的情况下`socket.request.headers.cookie`是无法获取到有效的 cookie 的，所以这里直接从客户端传 token 过来进行验证。验证通过后，将用户信息存到 headers 中，客户端连接成功后，取出用户信息，并将用户 id 与此 socket 连接对应 id 存储到全局`socketMap`变量中，然后外部模块通过调用 send 方法来发送消息。

这种情况在单实例情况下是没有问题的，但是如果 server 开启了多个实例就出问题了。

### 三、使用 nginx 实现分布式部署

首先需要安装[nginx](http://nginx.org/)；安装完成后编写配置文件；

```nginx
upstream socket_test {
        ip_hash;
        server 127.0.0.1:8013;
        server 127.0.0.1:8014;
}
server {
    listen 80;
    server_name socket.test.com;
    location / {
        proxy_pass              http://socket_test/;
        proxy_set_header        Upgrade $http_upgrade;
        proxy_set_header        Connection "upgrade";
        proxy_http_version      1.1;
        proxy_set_header        Host $host;
        proxy_set_header        X-Real-IP $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

启动两个项目实例，分别监听 8013 和 8014 端口；然后启动 nginx

```bash
sudo nginx
```

通过测试会发现，消息有时候能收到，有时候收不到。原因是因为客户端请求的时候，会不定的请求服务端两个实例中的一个，如果连接的时候是请求的 8013 端口的实例，二发送消息是 8014 端口的实例 ，就会在 8014 的实例中找不到建立连接的 socket。

### 四、分布式解决方法

socket.io 官网中提供了使用[socket.io-redis](https://github.com/socketio/socket.io-redis)
来解决此方法；socket.io-redis 中使用了 redis 的消息订阅与发布的功能，当有通知发送的时候，会触发 onmessage 事件，然后会调用 broadcast 广播。

接下来将 socket.io-redis 添加到 index.js 文件中

```js
//index.js
var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server, {
    path: '/notice' //修改客户端请求的路径，默认为/socket.io
})
new (require('./notice')).init(io) //传入io
var redis = require('socket.io-redis')
io.adapter(redis({ host: settings.REDIS_HOST, port: settings.REDIS_PORT }))
```

然后重启后会发现还是不行，原因是因为在 socketMap 变量中有时候就找不到对应的 user_id;因为是分布式的，所有 socketMap 变量在两台实例中并不是共享的，所以这里使用 redis，在 socket 建立的时候将 user_id 对应的 socket_id 存储到 redis 中，发送消息的时候从 redis 中读取 socket_id 这样就可以了。

有时候一个用户可能会同时有多个 socket 连接，所以 user_id 对应的 socket_id 就可以是一个数组，发送消息的时候要循环发送，连接断开的时候要只删除对应的 socket_id,保留其他建立的连接。

另外服务器重启时 socket 会重新建立连接，所以在初始化的的时候要清空 redis 中所有存储的数据。
