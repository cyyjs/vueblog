(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{83:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("p",[r("img",{attrs:{src:"http://ow5l7f56h.bkt.clouddn.com/b877c1b0-2da5-11e8-908e-8d20789a9043",alt:"图片"}})]),r("h3",{attrs:{id:"镜像常用操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像常用操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 镜像常用操作")]),r("h4",{attrs:{id:"_1、列出镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、列出镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 1、列出镜像")]),r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[a._v("docker images\n")])]),r("h4",{attrs:{id:"_2、拉取镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、拉取镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 2、拉取镜像")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker pull node:8.10.0\n")])]),r("h4",{attrs:{id:"_3、搜索镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、搜索镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 3、搜索镜像")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker search node\n")])]),r("h4",{attrs:{id:"_4、导出导入镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、导出导入镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 4、导出导入镜像")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker save node "),r("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" node.tar\ndocker load "),r("span",{attrs:{class:"token operator"}},[a._v("<")]),a._v(" node.tar\n")])]),r("h3",{attrs:{id:"docker-容器常用操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器常用操作","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker 容器常用操作")]),r("h4",{attrs:{id:"_1、创建并启动容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建并启动容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 1、创建并启动容器")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker run -i -t node /bin/bash\n")])]),r("p",[r("code",[a._v("-i")]),a._v("启动容器后打开标准输入\n"),r("code",[a._v("-t")]),a._v("分配一个终端，与服务器建立一个会话")]),r("h4",{attrs:{id:"_2、列出容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、列出容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 2、列出容器")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker "),r("span",{attrs:{class:"token function"}},[a._v("ps")]),a._v("\n")])]),r("h4",{attrs:{id:"_3、进入运行中的容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、进入运行中的容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 3、进入运行中的容器")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker attach 容器ID\n")])]),r("h4",{attrs:{id:"_4、执行命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、执行命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 4、执行命令")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker "),r("span",{attrs:{class:"token function"}},[a._v("exec")]),a._v(" -i -t 容器ID "),r("span",{attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l\n")])]),r("h4",{attrs:{id:"_5、停止容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、停止容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 5、停止容器")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker stop 容器ID\n")])]),r("h4",{attrs:{id:"_6、终止容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、终止容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 6、终止容器")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker "),r("span",{attrs:{class:"token function"}},[a._v("kill")]),a._v(" 容器ID\n")])]),r("h4",{attrs:{id:"_7、启动容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7、启动容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 7、启动容器")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker start 容器ID\n")])]),r("h4",{attrs:{id:"_8、重启容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8、重启容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 8、重启容器")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker restart 容器ID\n")])]),r("h4",{attrs:{id:"_9、删除容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9、删除容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 9、删除容器")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker "),r("span",{attrs:{class:"token function"}},[a._v("rm")]),a._v(" 容器ID\n")])]),r("h4",{attrs:{id:"_10、导入导出容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10、导入导出容器","aria-hidden":"true"}},[a._v("#")]),a._v(" 10、导入导出容器")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("docker "),r("span",{attrs:{class:"token function"}},[a._v("export")]),a._v(" 容器ID "),r("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" node.tar\ndocker "),r("span",{attrs:{class:"token function"}},[a._v("import")]),a._v(" node.tar cyy/node:latest\n")])])])}],!1,null,null,null);t.default=s.exports}}]);