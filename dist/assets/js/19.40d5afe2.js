(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{67:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[a("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tKfTcly1fkggtqchopj30e80e8t8z.jpg",alt:""}})]),a("h2",{attrs:{id:"基本角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本角色","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本角色")]),a("ul",[a("li",[a("code",[t._v("root")]),t._v(" 这是超级管理员")]),a("li",[a("code",[t._v("userAdminAnyDatabase")]),t._v(" 这个角色拥有分配角色和用户的权限，但没有查写的权限")]),a("li",[a("code",[t._v("readWrite")]),t._v(" 有读写权限")]),a("li",[a("code",[t._v("read")]),t._v(" 有读权限")])]),a("h2",{attrs:{id:"创建一个超级用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个超级用户","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个超级用户")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("use admin\ndb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createUser")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    user"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"root"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pwd"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"pwd"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    roles"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"role"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"root"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"db"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"admin"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("db 是指定数据库的名字，admin 是管理数据库。")]),a("h2",{attrs:{id:"开启认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启认证","aria-hidden":"true"}},[t._v("#")]),t._v(" 开启认证")]),a("p",[t._v("进入"),a("code",[t._v("mongod.conf")]),t._v("配置文件，将"),a("code",[t._v("auth")]),t._v(" 改为"),a("code",[t._v("true")]),t._v("；重启"),a("code",[t._v("mongo")]),t._v("服务；")]),a("h2",{attrs:{id:"权限登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限登录","aria-hidden":"true"}},[t._v("#")]),t._v(" 权限登录")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mongo --host xxx -u adminUserName -p userPassword --authenticationDatabase admin\n")])]),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),a("h3",{attrs:{id:"查看当前用户的权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前用户的权限","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看当前用户的权限")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("db"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("runCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    usersInfo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'userName'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    showPrivileges"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("h3",{attrs:{id:"创建一般用户，也是用-createuser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一般用户，也是用-createuser","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一般用户，也是用 createUser")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("db"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createUser")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    user"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'user1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pwd"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'12345'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    roles"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" role"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'read'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'db1'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" role"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'read'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'db2'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" role"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'read'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'db3'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("h3",{attrs:{id:"修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改密码","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改密码")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("use admin\ndb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("changeUserPassword")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"username"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"xxx"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("h3",{attrs:{id:"查看用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看用户信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看用户信息")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("db"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("runCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" usersInfo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'userName'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("h3",{attrs:{id:"修改密码和用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改密码和用户信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改密码和用户信息")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("db"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("runCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    updateUser"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'username'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pwd"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'xxx'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customData"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'xxx'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=r.exports}}]);