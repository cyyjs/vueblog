---
title: nodejs http.request 设置超时
category: 技术
date: 2017-06-23 21:19:11
tags: [nodejs, http]
---
使用`nodejs`在请求第三方接口的时候，经常会用到`http.request()`方法；为了防止请求等待时间过长，我们可以为其设置超时时间。
<!-- more -->
在请求参数中添加`timeout`参数
例如：

```js
var http = require('http');
var options = { 
    hostname: '127.0.0', 
    port: 8080, 
    path: '/x', 
    method: 'GET',
    timeout: 500
}
var req = http.request(options, function (res) {
    res.on('data', function (chunk) { 
        console.log('BODY: ' + chunk); 
    });
    res.on('end', function (error) {
        console.log('请求完成');
    });
    res.on('timeout', function() {
        console.log('请求超时');
    });
});
req.on('error', function(e) { 
    console.log('请求失败: ' + e.message); 
});
req.end();
```

请求超过500毫秒后，会终止请求，同时触发`timeout`事件，我们可以监听此事件，在请求超时后做一些处理。
