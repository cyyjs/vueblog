---
title: pm2怎么指定master
category: 技术
date: 2017-08-08 14:59:46
tags: [nodejs, pm2]
---

node 集群启动模式通常会这样写

```js
var cluster = require('cluster')
var http = require('http')
var os = require('os')
var numCPUs = os.cpus().length

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; ++i) {
        cluster.fork()
    }
} else {
    http
        .createServer(function(req, res) {
            res.writeHead(200)
            res.end('hello world')
        })
        .listen(8080)
}
```

<!-- more -->

我们可以通过`cluster.isMaster`来执行一些任务;
[pm2](http://pm2.keymetrics.io/)是一个很好的`nodejs` 管理工具，我们可以通过配置来启动我们的`nodejs`服务，他的代码和我们平常写的一样。

例如：

```js
var http = require('http')

http
    .createServer(function(req, res) {
        res.writeHead(200)
        res.end('hello world')
    })
    .listen(8080)
```

但是我们想只在`master`上做一些任务，改怎么做呢？下面跟出一中方法：我们可以通过两个配置，分别指定不同的命令行参数来区别：

```json
{
    "apps": [
        {
            "name": "Master",
            "script": "app.js",
            "args": ["master"],
            "instances": "1"
        },
        {
            "name": "Slave",
            "script": "app.js",
            "args": ["slave"],
            "instances": "-1"
        }
    ]
}
```

然后在`app.js`中这样写：

```js
if (process.argv[2] === 'master') {
    // ...
} else {
    // ...
}
```

也可以通过其他环境变量参数来区分那个是`master`。
