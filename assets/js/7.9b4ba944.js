(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{94:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"通过-apt-get-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-apt-get-安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过 apt-get 安装")]),s("h4",{attrs:{id:"软件包签名验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件包签名验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 软件包签名验证")]),s("p",[t._v("Ubuntu 软件包管理工具（即 dpkg 和 apt）通过要求分销商使用 GPG 密钥对软件包进行签名来确保软件包的一致性和真实性。")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6\n")])]),s("p",[s("a",{attrs:{href:"https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/?_ga=2.148904432.795010929.1496648330-1138931183.1493269032",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档")])]),s("h4",{attrs:{id:"为-mongodb-创建一个列表文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为-mongodb-创建一个列表文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 为 MongoDB 创建一个列表文件")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse"')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/mongodb-org-3.4.list\n")])]),s("h4",{attrs:{id:"更新本地包数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新本地包数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 更新本地包数据")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])]),s("h4",{attrs:{id:"安装-mongodb-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-mongodb-包","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 MongoDB 包")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -y mongodb-org\n")])]),s("h4",{attrs:{id:"启动-暂停-重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-暂停-重启","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动|暂停|重启")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("service")]),t._v(" mongod start\n"),s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("service")]),t._v(" mongod stop\n"),s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("service")]),t._v(" mongod restart\n")])]),s("h3",{attrs:{id:"手动安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 手动安装")]),s("h4",{attrs:{id:"下载安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载安装包","aria-hidden":"true"}},[t._v("#")]),t._v(" 下载安装包")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://fastdl.mongodb.org/linux/mongodb-linux-arm64-ubuntu1604-3.4.4.tgz\n")])]),s("h4",{attrs:{id:"解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压","aria-hidden":"true"}},[t._v("#")]),t._v(" 解压")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf mongodb-linux-arm64-ubuntu1604-3.4.4.tgz\n")])]),s("h4",{attrs:{id:"编写-ubuntu-服务文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-ubuntu-服务文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写 Ubuntu 服务文件")]),s("p",[t._v("增加"),s("code",[t._v("/lib/systemd/system/mongod.service")]),t._v("文件")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nDescription"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("An object/document-oriented database\nDocumentation"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("man:mongod"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nUser"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("root\nExecStart"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/mongodb/bin/mongod --quiet --config /mongodb/mongodb.conf\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nWantedBy"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n")])]),s("h4",{attrs:{id:"重新加载-service-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重新加载-service-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 重新加载 service 文件")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("systemctl daemon-reload\n")])]),s("h4",{attrs:{id:"启动-暂停-重启-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-暂停-重启-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动|暂停|重启")]),s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("service")]),t._v(" mongod start\n"),s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("service")]),t._v(" mongod stop\n"),s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("service")]),t._v(" mongod restart\n")])])])}],!1,null,null,null);a.default=e.exports}}]);