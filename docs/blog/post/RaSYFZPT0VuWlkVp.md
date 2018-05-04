---
category: 技术
title: 广告竞价中常用的价格解密算法
date: 2018-01-10 14:41:15
tags: ["nodejs"]
---

> [Real-Time Bidding Protocol Decrypt Price Confirmations 谷歌实时竞价文档](https://developers.google.com/ad-exchange/rtb/response-guide/decrypt-price)

### 加密结果格式

```
{初始化向量 (16 bytes)}{加密的价格(8 bytes)}{完整性签名(4 bytes)}
```

加密价格的长度固定为 28 个字节，其中包含 16 个字节的初始化矢量、8 个字节的密 文以及 4 个字节的完整性签名。

### 加密方式

使用基于 SHA-1 HMAC 算法的加密解密示例如下:
加密阶段伪代码:

```
pad = hmac(e_key, iv) // 取前 8 个字节
enc_price = pad <xor> price
signature = hmac(i_key, price || iv) // 取前 4 个字节
final_message = WebSafeBase64Encode( iv || enc_price || signature )
```

### 解密阶段伪代码

```
(iv || enc_price || signature) = WebSafeBase64Decode(final_message)
pad = hmac(e_key, iv)
price = enc_price <xor> pad
conf_sig = hmac(i_key, price || iv)
success = (conf_sig == signature)
```

### 字符与表达式解释

iv: 初始化矢量(16 个字节)
e_key: 加密密钥(32 个字节)
i_key: 完整性密钥(32 个字节)
price: 价格 (8 个字节)
hmac(k, d): 数据 d 的 SHA-1 HMAC，使用密钥 k
a || b: 字符串 a 和字符串 b 并列

### 解密算法 nodejs 版示例

```js
const crypto = require('crypto')
const e_key = ''
const i_key = ''

function WebSafeBase64Decode(base) {
    var s = base.replace(/\-/g, '+').replace(/\_/g, '/')
    if (s.length % 4 == 2) {
        s += '=='
    } else if (s.length % 4 == 3) {
        s += '='
    }
    return s
}

function decodePrice(e_enc) {
    let buffer = new Buffer(WebSafeBase64Decode(e_enc), 'base64') // base64解码

    let iv = buffer.slice(0, 16) // 初始化矢量数组
    let en_price = buffer.slice(16, 24) // 加密的价格数组
    let integrity = buffer.slice(24, 28).toString('hex') // 完整性签名的前4位, 转换成16进制字符串
    let de_byte = crypto
        .createHmac('sha1', e_key)
        .update(iv)
        .digest()
        .slice(0, 8) // HmacSHA1 加密得到加密数组, 取前8个字节

    let dec_price = new Buffer.allocUnsafe(8) // 创建一个长度为8的buffer
    for (let i = 0; i < 8; i++) {
        dec_price[i] = en_price[i] ^ de_byte[i] // 将异或运算后的新值存入dec_price
    }
    let price = parseInt(dec_price.toString('hex'), 16) / 1000000 // 转换成价格
    // 加密签名验证
    let o_ikey = crypto
        .createHmac('sha1', i_key)
        .update(Buffer.concat([dec_price, iv]))
        .digest()
        .slice(0, 4)
        .toString('hex')
    if (integrity == o_ikey) {
        // 比较两个签名数组是否相同
        return price
    } else {
        return -1
    }
}

decodePrice('加密价格字符串')
```
