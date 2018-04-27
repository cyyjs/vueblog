(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{64:function(s,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[t("blockquote",[t("p",[s._v("开发过程中，经常需要使用ssh登录远程主机，每次都要输入密码，影响效率，这里讲解一下，怎么使用ssh无密码登录。")])]),t("h3",{attrs:{id:"本机生成ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本机生成ssh-key","aria-hidden":"true"}},[s._v("#")]),s._v(" 本机生成ssh key")]),t("p",[s._v("ssh 无密码登录要使用公钥与私钥。linux下可以用用"),t("code",[s._v("ssh-keygen")]),s._v("生成公钥/私钥对。")]),t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("ssh-keygen -t rsa -C "),t("span",{attrs:{class:"token string"}},[s._v('"xxx@email.com"')]),s._v("\n")])]),t("p",[s._v("然后一路回车即可。")]),t("p",[s._v("然后可以通过以下命令查看到生成的公钥：")]),t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub\n")])]),t("h3",{attrs:{id:"远程主机生成ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程主机生成ssh-key","aria-hidden":"true"}},[s._v("#")]),s._v(" 远程主机生成ssh key")]),t("p",[s._v("先通过"),t("code",[s._v("ssh")]),s._v("登录到远程主机， 并以同样的方式生成"),t("code",[s._v("ssh key")])]),t("h3",{attrs:{id:"复制本机公钥到远程文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制本机公钥到远程文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 复制本机公钥到远程文件")]),t("p",[s._v("把本地的"),t("code",[s._v("id_rsa.pub")]),s._v("文件中的内容复制到远程主机的"),t("code",[s._v(".ssh/authorized_keys")]),s._v("文件里.")]),t("p",[t("code",[s._v("authorized_keys")]),s._v("文件如果没有，可以自己手动创建。")]),t("p",[s._v("添加完成后，退出重新使用"),t("code",[s._v("ssh")]),s._v(" 登录时，就不需要输入密码了。")])])}],!1,null,null,null);e.default=r.exports}}]);