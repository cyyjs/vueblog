---
category: 技术
title: XMLHttpRequest请求进度显示
date: 2018-06-06 09:47:53
tags: Javascript
banner: http://ow5l7f56h.bkt.clouddn.com/76303e60-6930-11e8-9873-211ffe76e27d
description: 原生Ajax请求以及数据返回进度条显示
---

进度条

<div style="border:1px solid #ccc;height:20px;width:300px;padding: 2px;"><div id="progress" style="background:#3eaf7c;height:20px;width:0"></div></div>

<script>
    export default {
        mounted() {
            window.onload = function() {
                var progressDiv = document.getElementById('progress')
                var http = new XMLHttpRequest();
                http.onprogress = function (event) {
                    if (event.lengthComputable) {
                        let progress = event.loaded / event.total * 300
                        progressDiv.style.width = progress + 'px';
                    }
                }
                http.onload = function (event) {
                    console.log(http.status);
                    // console.log(http.responseText);
                }
                http.open('get', '/img/a.jpeg?a='+Math.random(), true);
                http.send()
            }
        }
    }
</script>

### progress 事件

该事件会在浏览器接收新数据期间周期性的触发。它接收一个`event`对象，还包含三个额外的属性：

*   `lengthComputable`：表示进度信息是否可用
*   `loaded`： 表示已经接收的字节数
*   `total`: 表示根据`Content-Length`确定的总字节数

### HTML 代码

```html
<div style="border:1px solid #ccc;height:20px;width:300px;padding: 2px;">
    <div id="progress" style="background:#3eaf7c;height:20px;width:0"></div>
</div>
```

### js 代码

```js
window.onload = function() {
    var progressDiv = document.getElementById('progress')
    var http = new XMLHttpRequest()
    http.onprogress = function(event) {
        if (event.lengthComputable) {
            let progress = event.loaded / event.total * 300
            progressDiv.style.width = progress + 'px'
        }
    }
    http.onload = function(event) {
        console.log(http.status) // 200
        // console.log(http.responseText);
    }
    http.open('get', '/img/a.jpeg', true)
    http.send()
}
```
