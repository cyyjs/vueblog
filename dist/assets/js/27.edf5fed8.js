(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{65:function(t,s,a){"use strict";a.r(s);var r=a(0),e=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[a("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79gy1fni9qq209rj30cs07o0u1.jpg",alt:""}})]),a("p",[t._v("如何使用免费资源实现科学上网？首先要有一台可以访问墙外资源的服务器，然后在服务器上搭建"),a("code",[t._v("shadowsocks")]),t._v("即可。")]),a("p",[t._v("本教程开始前，请确保您的电脑可以访问 google 网站。（WTF！！）")]),a("h3",{attrs:{id:"领取免费资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#领取免费资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 领取免费资源")]),a("p",[a("a",{attrs:{href:"https://cloud.google.com/free/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Cloud Platform 免费方案")]),t._v(" goole 提供 12 个月及$300 美金的赠金，登录即可领取。")]),a("h3",{attrs:{id:"搭建服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建服务器")]),a("p",[t._v("登录"),a("a",{attrs:{href:"https://console.cloud.google.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Cloud Platform")]),t._v("创建项目，然后打开左侧菜单，选择"),a("code",[t._v("Compute Engine")]),t._v("，创建一个"),a("code",[t._v("VM")]),t._v("实例,根据提示完成创建。\n"),a("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tNc79ly1fnia3p98k6j30a70on3zt.jpg",alt:""}})]),a("p",[t._v("创建完成后，点击链接"),a("code",[t._v("SSH")]),t._v("登录远程服务器。\n"),a("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79ly1fnia7lhbazj30h606iaac.jpg",alt:""}})]),a("h3",{attrs:{id:"安装-shadowsocks-服务程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-shadowsocks-服务程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 shadowsocks 服务程序")]),a("p",[t._v("打开"),a("a",{attrs:{href:"https://shadowsocks.org/en/download/servers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shadowsocks servers")]),t._v(",根据提示安装。")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" python-pip\npip "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" shadowsocks\n")])]),a("h3",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置文件")]),a("p",[t._v("创建一个配置文件"),a("code",[t._v("conf.json")])]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"server"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"内网ip"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"server_port"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8388")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"local_address"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"local_port"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1080")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"password"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"password"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"timeout"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("300")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"method"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"aes-256-cfb"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[a("strong",[t._v("注意")]),t._v("："),a("code",[t._v("server")]),t._v("一定要是服务器的内网"),a("code",[t._v("ip")]),t._v("，使用外网"),a("code",[t._v("ip")]),t._v("可以请求不通。")]),a("h3",{attrs:{id:"启动及停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动及停止","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动及停止")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ssserver -c ./conf.json -d start\n")])]),a("p",[t._v("停止将"),a("code",[t._v("start")]),t._v("改成"),a("code",[t._v("stop")]),t._v("即可。")]),a("h3",{attrs:{id:"查看日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看日志","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看日志")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("less")]),t._v(" /var/log/shadowsocks.log\n")])]),a("h3",{attrs:{id:"常见错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见错误")]),a("p",[a("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks/issues/693",target:"_blank",rel:"noopener noreferrer"}},[t._v("启动错误")])]),a("h3",{attrs:{id:"客户端连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端连接")]),a("p",[a("a",{attrs:{href:"https://shadowsocks.org/en/download/clients.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("客户端下载")]),a("a",{attrs:{href:"https://github.com/shadowsocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 上下载")])]),a("p",[a("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79gy1fnieuit91bj30ws0t8q51.jpg",alt:""}}),t._v("\n填写外网地址，选择加密方式，输入密码，确定后链接即可。")])])}],!1,null,null,null);s.default=e.exports}}]);