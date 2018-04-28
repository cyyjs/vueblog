(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{71:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("blockquote",[a("p",[t._v("使用第三方 Git 仓库，实现代码的自动部署\nGitHub 提供了 Webhooks 的功能，我们通过相应的配置就可以实现在代码提交到 GitHub 后自动部署我们的项目")])]),a("h3",{attrs:{id:"在-github-添加部署服务器的-ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-github-添加部署服务器的-ssh-key","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 GitHub 添加部署服务器的 ssh key")]),a("p",[t._v("1、首先在服务器生成"),a("a",{attrs:{href:"./Ja5aO9RFlMdvjYBE"}},[t._v("ssh key")]),t._v("\n2、添加"),a("code",[t._v("ssh key")]),t._v("到 GitHub 账户中")]),a("p",[t._v("选择"),a("code",[t._v("setting")]),t._v(" -> "),a("code",[t._v("SSH and GPG keys")]),t._v(" -> "),a("code",[t._v("New SSH Key")]),t._v(" 添加")]),a("h3",{attrs:{id:"配置-webhooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-webhooks","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 Webhooks")]),a("p",[t._v("打开需要配置"),a("code",[t._v("Webhooks")]),t._v("的项目，点击"),a("code",[t._v("Settings")]),t._v("，选择"),a("code",[t._v("Webhooks")]),a("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNbRwgy1fgagteiy5ej31ji120dmi.jpg",alt:"Webhooks 设置"}})]),a("p",[t._v("设置触发事件后请求的地址及方法，并选择触发事件的类型，此处选择为"),a("code",[t._v("push")]),t._v(",当我们提交代码的时候触发；设置完成后，点击添加即可。")]),a("h3",{attrs:{id:"服务器编辑接受处理代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器编辑接受处理代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器编辑接受处理代码")]),a("p",[t._v("以"),a("code",[t._v("nodejs")]),t._v(" 的 "),a("code",[t._v("express")]),t._v("为例：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" shell "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'shelljs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// shell npm 包工具")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" setting "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'../setting'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blogPath "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" setting"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blog"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" body "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// git 推送的数据")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("shell"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("which")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'git'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 判断是否存在git命令")]),t._v("\n        shell"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("echo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Sorry, this script requires git'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        shell"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("exit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cd "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" shell"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("cd")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blogPath"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("cd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 执行git代码拉取操作")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shell"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("exec")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'git pull origin master'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            shell"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("echo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Error: Git pull error!'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            shell"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("exit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("end")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);