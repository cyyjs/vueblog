(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{52:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"搭建-ftp-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建-ftp-服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建 FTP 服务器")]),a("h2",{attrs:{id:"安装并启动-ftp-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装并启动-ftp-服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装并启动 FTP 服务")]),a("h3",{attrs:{id:"安装-vsftpd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-vsftpd","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 VSFTPD")]),a("p",[t._v("使用 "),a("code",[t._v("apt-get")]),t._v(" 安装 "),a("code",[t._v("vsftpd")])]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" vsftpd -y\n")])]),a("h3",{attrs:{id:"启动-vsftpd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-vsftpd","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动 VSFTPD")]),a("p",[t._v("安装完成后 VSFTPD 会自动启动，通过 "),a("code",[t._v("netstat")]),t._v(" 命令可以看到系统已经监听了 21 端口")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -nltp "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("grep")]),t._v(" 21\n")])]),a("p",[t._v("如果没有启动，可以手动开启 "),a("code",[t._v("VSFTPD")]),t._v(" 服务：")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start vsftpd.service\n")])]),a("h2",{attrs:{id:"配置用户访问目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置用户访问目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置用户访问目录")]),a("h3",{attrs:{id:"新建用户主目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建用户主目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 新建用户主目录")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /home/uftp\n")])]),a("p",[t._v("执行完后，在这里 "),a("code",[t._v("/home/uftp")])]),a("p",[t._v("就能看到新建的文件夹 "),a("code",[t._v("uftp")]),t._v(" 了。")]),a("h3",{attrs:{id:"创建登录欢迎文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建登录欢迎文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建登录欢迎文件")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("touch")]),t._v(" /home/uftp/welcome.txt\n")])]),a("p",[t._v("###新建用户 "),a("code",[t._v("uftp")]),t._v(" 并设置密码创建一个用户 "),a("code",[t._v("uftp")])]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("useradd")]),t._v(" -d /home/uftp -s /bin/bash uftp\n")])]),a("p",[t._v("为用户 "),a("code",[t._v("uftp")]),t._v(" 设置密码")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("passwd")]),t._v(" uftp\n")])]),a("p",[t._v("删除掉 "),a("code",[t._v("pam.d")]),t._v(" 中 "),a("code",[t._v("vsftpd")]),t._v("，因为该配置文件会导致使用用户名登录 "),a("code",[t._v("ftp")]),t._v(" 失败：")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" /etc/pam.d/vsftpd\n")])]),a("h2",{attrs:{id:"限制该用户仅能通过-ftp-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制该用户仅能通过-ftp-访问","aria-hidden":"true"}},[t._v("#")]),t._v(" 限制该用户仅能通过 FTP 访问")]),a("p",[t._v("限制用户 uftp 只能通过 FTP 访问服务器，而不能直接登录服务器：")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -s /sbin/nologin uftp\n")])]),a("p",[t._v("修改 "),a("code",[t._v("vsftpd")]),t._v(" 配置")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+w /etc/vsftpd.conf\n")])]),a("p",[t._v("修改 "),a("code",[t._v("/etc/vsftpd.conf")]),t._v(" 文件中的配置（直接将如下配置添加到配置文件最下方）：")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 限制用户对主目录以外目录访问\nchroot_local_user=YES\n\n# 指定一个 userlist 存放允许访问 ftp 的用户列表\nuserlist_deny=NO\nuserlist_enable=YES\n\n# 记录允许访问 ftp 用户列表\nuserlist_file=/etc/vsftpd.user_list\n\n# 不配置可能导致莫名的530问题\nseccomp_sandbox=NO\n\n# 允许文件上传\nwrite_enable=YES\n\n# 使用utf8编码\nutf8_filesystem=YES\n")])]),a("h3",{attrs:{id:"新建文件-etc-vsftpd-user-list，用于存放允许访问-ftp-的用户："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建文件-etc-vsftpd-user-list，用于存放允许访问-ftp-的用户：","aria-hidden":"true"}},[t._v("#")]),t._v(" 新建文件 "),a("code",[t._v("/etc/vsftpd.user_list")]),t._v("，用于存放允许访问 ftp 的用户：")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("touch")]),t._v(" /etc/vsftpd.user_list\n"),a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+w /etc/vsftpd.user_list\n")])]),a("p",[t._v("修改 "),a("code",[t._v("/etc/vsftpd.user_list")]),t._v(" ，加入刚刚创建的用户：")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("vsftpd.user_list\nuftp\n")])]),a("h2",{attrs:{id:"设置访问权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置访问权限","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置访问权限")]),a("h3",{attrs:{id:"设置主目录访问权限（只读）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置主目录访问权限（只读）","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置主目录访问权限（只读）")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a-w /home/uftp\n")])]),a("h3",{attrs:{id:"新建公共目录，并设置权限（读写）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建公共目录，并设置权限（读写）","aria-hidden":"true"}},[t._v("#")]),t._v(" 新建公共目录，并设置权限（读写）")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /home/uftp/public "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 777 -R /home/uftp/public\n")])]),a("h3",{attrs:{id:"重启-vsftpd-服务："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启-vsftpd-服务：","aria-hidden":"true"}},[t._v("#")]),t._v(" 重启 vsftpd 服务：")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart vsftpd.service\n")])]),a("h2",{attrs:{id:"访问-ftp-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问-ftp-服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 访问 FTP 服务")]),a("p",[t._v("FTP 服务已安装并配置完成，下面我们来使用该 FTP 服务访问 FTP 服务根据您个人的工作环境，选择一种方式来访问已经搭建的 FTP 服务 ###通过 FTP 客户端工具访问\nFTP 客户端工具众多，下面推荐两个常用的：\nFileZilla - 跨平台的 FTP 客户端，支持 Windows 和 Mac\nWinSCP - Windows 下的 FTP 和 SFTP 连接客户端下载和安装 FTP 客户端后，使用下面的凭据进行连接即可：主机 111.111.111.11\n用户：uftp")]),a("p",[t._v("输入密码后，如果能够正常连接，那么大功告成，您可以开始使用属于您自己的 FTP 服务器了！接下来，请上传任意一张图片到您的 FTP 服务器上的 "),a("code",[t._v("uftp")]),t._v(" 的 "),a("code",[t._v("public")]),t._v(" 目录下，然后，就可以在 "),a("code",[t._v("/home/uftp/public")]),t._v(" 中看到了。")]),a("p",[t._v("###通过 Windows 资源管理器访问\nWindows 用户可以复制下面的链接到资源管理器的地址栏访问：")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("ftp://uftp:你的密码@111.111.111.11\n")])])])}],!1,null,null,null);s.default=n.exports}}]);