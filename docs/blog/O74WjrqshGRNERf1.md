---
category: 技术
title: MongoDB开启权限验证的方法
date: 2017-10-13 11:40:10
tags: ["mongodb"]
---

![](https://ws2.sinaimg.cn/large/006tKfTcly1fkggtqchopj30e80e8t8z.jpg)
## 基本角色
- `root`  这是超级管理员
- `userAdminAnyDatabase` 这个角色拥有分配角色和用户的权限，但没有查写的权限
- `readWrite`  有读写权限
- `read`    有读权限

## 创建一个超级用户

```js
use admin
db.createUser({
    user: "root",
    pwd: "cyy_mongo",
    roles: [{
      "role" : "root",
      "db" : "admin" 
    }]
})

```
db是指定数据库的名字，admin是管理数据库。

## 开启认证
进入`mongod.conf`配置文件，将`auth` 改为`true`；
重启`mongo`服务；

## 权限登录

```
mongo --host xxx -u adminUserName -p userPassword --authenticationDatabase admin
```
## 其他
### 查看当前用户的权限

```js
db.runCommand({
    usersInfo:"userName",
    showPrivileges:true
})
```
### 创建一般用户，也是用createUser
```js
db.createUser({
    user:"user1",
    pwd:"12345",
    roles:[
      {role:"read",db:"db1"},
      {role:"read",db:"db2"},
      {role:"read",db:"db3"}
    ]
})
```
### 修改密码
```js
use admin
db.changeUserPassword("username", "xxx")
```

### 查看用户信息
```js
db.runCommand({usersInfo:"userName"})
```
### 修改密码和用户信息
```js
db.runCommand({
    updateUser:"username",
    pwd:"xxx",
    customData:{title:"xxx"}
})
```
<div style="text-align:right;font-size:12px;color:#666;">----publish by <a href="http://ceditor.alibt.top" target="_blank">CEditor</a></div>