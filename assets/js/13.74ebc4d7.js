(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{67:function(t,e,r){"use strict";r.r(e);var a=r(0),_=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("blockquote",[r("p",[t._v("本文转载自："),r("a",{attrs:{href:"http://www.zcfy.cc",target:"_blank",rel:"noopener noreferrer"}},[t._v("众成翻译")]),t._v("\n译者："),r("a",{attrs:{href:"http://www.zcfy.cc/@liuhui_is_me",target:"_blank",rel:"noopener noreferrer"}},[t._v("liuhui_is_me")]),t._v("\n链接："),r("a",{attrs:{href:"http://www.zcfy.cc/article/3362",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.zcfy.cc/article/3362")]),t._v("\n原文："),r("a",{attrs:{href:"https://medium.freecodecamp.com/8-npm-tricks-you-can-use-to-impress-your-colleagues-dbdae1ef5f9e",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://medium.freecodecamp.com/8-npm-tricks-you-can-use-to-impress-your-colleagues-dbdae1ef5f9e")])])]),r("p",[t._v("你观看一个同事编码时候，你会看到一些速记和技巧被应用，有些方式你并不熟悉，那你就被鄙视了，这种事情在我们每一个一生都会发生的。")]),r("p",[t._v("在这篇文章中，我将介绍一些很有用的npm技巧，还有很多这里并不能全收录，我们只关注那些相关的并且有益于我们每天的工作和开发的技巧。\n")]),r("h3",{attrs:{id:"基本的速记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本的速记","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本的速记")]),r("p",[t._v("为了让大家的对npm有一个一致的理解，尤其是我们的新人，让我们快速了解基本的速记和确保没有错过任何细节。")]),r("h4",{attrs:{id:"安装安装包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装安装包","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装安装包")]),r("p",[t._v("常规: "),r("code",[t._v("npm install pkg")]),t._v(", 速记: "),r("code",[t._v("npm i pkg")]),t._v(".")]),r("h4",{attrs:{id:"全局安装包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全局安装包","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局安装包:")]),r("p",[t._v("常规: "),r("code",[t._v("npm i --global pkg")]),t._v(", 速记: "),r("code",[t._v("npm i -g pkg")]),t._v(".")]),r("h4",{attrs:{id:"安装包并包含在依赖中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装包并包含在依赖中","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装包并包含在依赖中:")]),r("p",[t._v("常规: "),r("code",[t._v("npm i --save pkg")]),t._v(", 速记: "),r("code",[t._v("npm i -S pkg")]),t._v(".")]),r("h4",{attrs:{id:"安装包并包含在开发依赖中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装包并包含在开发依赖中","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装包并包含在开发依赖中:")]),r("p",[t._v("常规: "),r("code",[t._v("npm i --save-dev pkg")]),t._v(", 速记: "),r("code",[t._v("npm i -D pkg")]),t._v(".")]),r("p",[t._v("其他的npm速记阅读npm博客 "),r("a",{attrs:{href:"https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties",target:"_blank",rel:"noopener noreferrer"}},[t._v("速记表")]),t._v(".")]),r("p",[t._v("下面开始有趣的内容。")]),r("h4",{attrs:{id:"_1-初始化一个新包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化一个新包","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 初始化一个新包")]),r("p",[t._v("我们都知道"),r("code",[t._v("npm init")]),t._v("，用来创建一个新的包。")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t01d9e905292304482f.gif",alt:""}})]),r("p",[t._v("但是，所有的问题都是匿名的，我们无论如何都会修改它的，那么怎么避免发生呢？")]),r("p",[t._v("使用"),r("code",[t._v("npm init -y")]),t._v(" 和 "),r("code",[t._v("npm init -f")]),t._v("回到初始化！")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t018b19458ea1e4f29c.gif",alt:""}})]),r("h4",{attrs:{id:"_2-运行测试命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行测试命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 运行测试命令")]),r("p",[t._v("另一个命令就是"),r("code",[t._v("npm test")]),t._v(",我们可能每天使用依次或者一天使用好几次。")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t013675388a929b715a.gif",alt:""}})]),r("p",[t._v("如果我告诉你可以使用少于40%的字符去完成这个功能？我们经常使用，应该这样。")]),r("p",[t._v("幸运的是，我们可以使用"),r("code",[t._v("npm t")]),t._v("，它就可以胜任")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t0119b0f93fdbce3c52.gif",alt:""}})]),r("h4",{attrs:{id:"_3-枚举可用的脚本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-枚举可用的脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 枚举可用的脚本")]),r("p",[t._v("我们开始一个新项目，我们想知道如何开始。我们通常会问自己这样的问题：我们如何运行它？哪些脚本可用？")]),r("p",[t._v("一个方法是打开package.json文件并检查"),r("code",[t._v("scripts")]),t._v("部分。")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t01e0d5d6b57de82093.gif",alt:""}})]),r("p",[t._v("我们可以做的更好，当然，我们只是运行"),r("code",[t._v("npm run")]),t._v("得到一个的所有可用的脚本的列表。")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t0185df886f66ed19f9.gif",alt:""}})]),r("p",[t._v("另外的可以选择是安装"),r("code",[t._v("ntl")]),t._v(" ("),r("code",[t._v("npm i -g ntl")]),t._v(")，然后运行"),r("code",[t._v("ntl")]),t._v("在项目文件夹中。它也可以运行脚本，也很方面。")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t01c60c779d0d614408.gif",alt:""}})]),r("h4",{attrs:{id:"_4-枚举已经安装的包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-枚举已经安装的包","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 枚举已经安装的包")]),r("p",[t._v("类似于可用的脚本，有时我们会问自己我们的项目中有哪些依赖项。")]),r("p",[t._v("我们可以再次打开package.json文件和检查，但是我们已经做的更好了。")]),r("p",[t._v("使用 "),r("code",[t._v("npm ls --depth 0")]),t._v(".")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t014ad711b281c288ae.gif",alt:""}})]),r("p",[t._v("枚举全局安装包，使用"),r("code",[t._v("npm ls -g --depth 0")])]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t01ab4908f2e4500392.gif",alt:""}})]),r("h4",{attrs:{id:"_5-运行本地安装的可执行文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-运行本地安装的可执行文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. 运行本地安装的可执行文件")]),r("p",[t._v("我们安装了一个包在我们的项目中，它是一个可执行的，但我们只能运行它通过一个新的脚本。你想知道为什么，或者如何克服它？")]),r("p",[t._v("首先，让我们了解为什么——当我们在终端中执行命令时，实际发生的是它在PATH环境变量中列出的所有路径中查找一个具有相同名称的可执行文件。这就是他们如何神奇地从任何地方都可以执行。本地安装的软件包登记他们的可执行文件在本地，所以他们不在我们的"),r("code",[t._v("PATH")]),t._v("路径中将不会被发现。")]),r("p",[t._v("当我们运行这些可执行文件通过一个新脚本，它是如何工作的呢？你可能会问？很好的问题！这是因为这种方式运行时，NPM做了一点技巧和增加了一个额外的文件夹到"),r("code",[t._v("PATH")]),t._v("，"),r("code",[t._v("/node_modules/.bin")]),t._v("中。\n你可以看到它的运行"),r("code",[t._v('npm run env | grep "$PATH"')]),t._v("。你也可以运行只是"),r("code",[t._v("npm run env")]),t._v(" 查看所有可用的环境变量，npm增加了一些更有趣的东西。\n"),r("code",[t._v("/node_modules/.bin")]),t._v("，如果你不知道，正是在本地安装的软件包放置可执行文件的地方。")]),r("p",[t._v("我们可以运行 "),r("code",[t._v("./node_modules/.bin/mocha")]),t._v(" 在我们的项目中，看看将会发生什么.")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t011a44c15fdb274912.gif",alt:""}})]),r("p",[t._v("很简单, 对吧? 仅仅运行 "),r("code",[t._v("./node_modules/.bin/")]),t._v(" ，无论什么时候你想要运行本地已安装的可执行文件。")]),r("h4",{attrs:{id:"_6-在网上查找你想要的包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-在网上查找你想要的包","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 在网上查找你想要的包")]),r("p",[t._v("你可能看到了"),r("code",[t._v("repository")]),t._v("这个入口在package.json文件中，疑问“这有什么好处？”")]),r("p",[t._v("为了问答这个问题，仅仅运行"),r("code",[t._v("npm repo")]),t._v("然后在你的浏览器中查看。")]),r("p",[t._v("与之类似,"),r("code",[t._v("npm home")]),t._v("命令进入主页。")]),r("p",[t._v("如果你想打开你的包的主页"),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npmjs.com")]),t._v("，那是一个不错的速记，"),r("code",[t._v("npm docs")]),t._v("。")]),r("h4",{attrs:{id:"_7-在其他脚本前后运行脚本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-在其他脚本前后运行脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. 在其他脚本前后运行脚本")]),r("p",[t._v("您可能熟悉诸如"),r("code",[t._v("pretest")]),t._v("之类的脚本，它允许您定义在"),r("code",[t._v("test")]),t._v("脚本之前运行的代码。")]),r("p",[t._v("您可能会惊讶地发现，您可以为每个脚本配置或有或后的脚本，包括您自己的自定义脚本！")]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t010206810a272d84df.gif",alt:""}})]),r("p",[t._v("对于项目中，你使用NPM作为您的构建工具，有很多脚本，你需要自己总结使用。")]),r("h4",{attrs:{id:"_8-修改包的版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-修改包的版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 8. 修改包的版本")]),r("p",[t._v("你开发一个安装包，你使用"),r("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("semver")]),t._v("作为版本管理工具，修改一个新版本。")]),r("p",[t._v("通过这种方式，你需要手动的修改package.json文件，我们不推荐这样做。")]),r("p",[t._v("更容易的方式是运行"),r("code",[t._v("npm version")]),t._v(" 通过 "),r("code",[t._v("major")]),t._v(", "),r("code",[t._v("minor")]),t._v(" 或者 "),r("code",[t._v("patch")])]),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t01794393233d68fbaf.gif",alt:""}})])])}],!1,null,null,null);e.default=_.exports}}]);