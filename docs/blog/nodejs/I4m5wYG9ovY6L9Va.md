---
category: 技术
title: PM2+Log4js log写入失败问题
date: 2017-11-15 11:02:53
tags:
    - log4js
    - pm2
---

![](https://ws1.sinaimg.cn/large/006tNc79gy1flgieyz2y1j313s0aedgr.jpg)
问题：项目中用`log4js`可以正常写入日志到文件中，后来使用`pm2`启动后，发现文件不能写入到文件了。网上查了很久，并没有找到原因，所以就想到了查看源码的方法，来查找到底是哪里出了问题。

### 先看相关的配置

`log4js`配置：

```json
{
    "type": "dateFile",
    "filename": "logfile/",
    "pattern": "flow-yyyy-MM-dd-hh.log",
    "alwaysIncludePattern": true,
    "layout": { "type": "messagePassThrough" }
}
```

`pm2`配置：

```json
{
    "apps": [
        {
            "name": "project_name",
            "script": "index.js",
            "exec_mode": "cluster",
            "instances": 4,
            "instance_var": "INSTANCE_ID",
            "max_memory_restart": "1G",
            "autorestart": true,
            "node_args": [],
            "watch": ["config", "data", "lib","public", "index.js"],
            "watch_options": {
                "usePolling": true
            },
            "args": [],
            "env": {},
            "env_dev": {
                ...
            },
            "env_production": {
                ...
            }
        }
    ]
}
```

### `log4js`无法自动生成对应时间格式的文件

正常直接启动会在配置 log 目录下生成一个`flow-yyyy-MM-dd-hh.log`格式的文件，但是用`pm2`启动的时候并没有生成。

log4js 的调用方法为`require('log4js').getLogger()`,所以就直接在源码中找`getLogger`：
1、通过`package.json`中的`main`我们确定它的主入口文件为`./lib/log4js`；
2、找到`getLogger`方法

```js
/**
 * Get a logger instance.
 * @static
 * @param loggerCategoryName
 * @return {Logger} instance of logger for the category
 */
function getLogger(category) {
    const cat = category || 'default'
    debug(`creating logger as ${isMaster() ? 'master' : 'worker'}`)
    return new Logger(isMaster() ? sendLogEventToAppender : workerDispatch, cat)
}
```

其中有个`isMaster()`方法,判断是否为主进程

```js
function isPM2Master() {
    return config.pm2 && process.env[config.pm2InstanceVar] === '0'
}

function isMaster() {
    return config.disableClustering || cluster.isMaster || isPM2Master()
}
```

可以看到`isPM2Master`是通过 config 中的`pm2`参数和`pm2InstanceVar`来确定的。所以我们需要在`log4js`的配置中增加这两个配置。

```json
{
    pm2: true,
    pm2InstanceVar: "INSTANCE_ID" // 与pm2的配置对应
}
```

[pm2 中 NODE_APP_INSTANCE 特定的环境变量](http://pm2.keymetrics.io/docs/usage/environment/#node_app_instance-pm2-25-minimum)可以用来判断主从进程

此时重启`pm2`后(需要`pm2 delete`不然 pm2 配置文件不生效)，已经可以看到生成的文件了，但是日志还是不能写入。接着看源码：

### `workerDispatch`方法

```js
function workerDispatch(logEvent) {
    debug(`sending message to master from worker ${process.pid}`)
    process.send({ topic: 'log4js:message', data: serialise(logEvent) })
}
```

此方法为工作进程接收到 log 事件，并发出消息，必定有接收的地方，通过查找代码发现此方法:

```js
function configure(configurationFileOrObject) {
  // ...
  if (config.disableClustering) {
    debug('Not listening for cluster messages, because clustering disabled.');
  } else {
    // PM2 cluster support
    // PM2 runs everything as workers - install pm2-intercom for this to work.
    // we only want one of the app instances to write logs
    if (isPM2Master()) {
      debug('listening for PM2 broadcast messages');
      process.removeListener('message', receiver);
      process.on('message', receiver);
    } else if (cluster.isMaster) {
      debug('listening for cluster messages');
      cluster.removeListener('message', receiver);
      cluster.on('message', receiver);
    } else {
      debug('not listening for messages, because we are not a master process');
    }
  }
```

我们可以看到在`if`条件中有监听的操作，但是，后面的监听函数没有执行，后来才注意到里面的三行注释，需要安装[`pm2-intercom`](https://www.npmjs.com/package/pm2-intercom);在执行了`pm2 install pm2-intercom`后，果然可以了，日志成功写入到了文件中。
