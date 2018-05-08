---
category: 技术
title: nodejs逐行读取文件并转换输出
date: 2018-03-28 17:30:19
tags: ["nodejs"]
---

文件数据过滤，并将过滤后的数据存入新的文件。

<!-- more -->

```js
const fs = require('fs')
const readline = require('readline')
const path1 = __dirname + '/aid_imei_mac.log'
const path2 = __dirname + '/aid_imei_mac1.log'
let wf = fs.createWriteStream(path2) // 创建一个写入流
const strem = process.stderr // 终端输出

const rl = readline.createInterface({
    input: fs.createReadStream(path1)
    // output: process.stdout
})
let i = 0
rl.on('line', line => {
    if (line.split(',').filter(i => !!i).length == 3) {
        wf.write(line + '\n')
        i++
        // 控制台输入写入进度
        strem.cursorTo(0)
        strem.write(
            `写入${i}行${(wf.bytesWritten / 1024 / 1024).toFixed(2)}M 数据`
        )
    }
})
rl.on('close', function() {
    //将操作系统缓存区中的数据全部写入文件
    wf.end(function() {
        console.log('\n文件全部写入完毕')
        console.log(`共写入${(wf.bytesWritten / 1024 / 1024).toFixed(2)}M 数据`)
    })
})
```
