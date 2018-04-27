---
category: 技术
title: 让你备受刮目相看的8个npm技巧
date: 2017-09-27 10:26:54
tags: npm
---

> 本文转载自：[众成翻译](http://www.zcfy.cc)
> 译者：[liuhui_is_me](http://www.zcfy.cc/@liuhui_is_me)
> 链接：[http://www.zcfy.cc/article/3362](http://www.zcfy.cc/article/3362)
> 原文：[https://medium.freecodecamp.com/8-npm-tricks-you-can-use-to-impress-your-colleagues-dbdae1ef5f9e](https://medium.freecodecamp.com/8-npm-tricks-you-can-use-to-impress-your-colleagues-dbdae1ef5f9e)

你观看一个同事编码时候，你会看到一些速记和技巧被应用，有些方式你并不熟悉，那你就被鄙视了，这种事情在我们每一个一生都会发生的。

在这篇文章中，我将介绍一些很有用的npm技巧，还有很多这里并不能全收录，我们只关注那些相关的并且有益于我们每天的工作和开发的技巧。
<!-- more -->
### 基本的速记

为了让大家的对npm有一个一致的理解，尤其是我们的新人，让我们快速了解基本的速记和确保没有错过任何细节。

#### 安装安装包

常规: `npm install pkg`, 速记: `npm i pkg`.

#### 全局安装包:

常规: `npm i --global pkg`, 速记: `npm i -g pkg`.

#### 安装包并包含在依赖中:

常规: `npm i --save pkg`, 速记: `npm i -S pkg`.

#### 安装包并包含在开发依赖中:

常规: `npm i --save-dev pkg`, 速记: `npm i -D pkg`.

其他的npm速记阅读npm博客 [速记表](https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties).

下面开始有趣的内容。

#### 1\. 初始化一个新包

我们都知道`npm init`，用来创建一个新的包。

![](http://p0.qhimg.com/t01d9e905292304482f.gif)

但是，所有的问题都是匿名的，我们无论如何都会修改它的，那么怎么避免发生呢？

使用`npm init -y` 和 `npm init -f`回到初始化！

![](http://p0.qhimg.com/t018b19458ea1e4f29c.gif)

#### 2\. 运行测试命令

另一个命令就是`npm test`,我们可能每天使用依次或者一天使用好几次。

![](http://p0.qhimg.com/t013675388a929b715a.gif)

如果我告诉你可以使用少于40%的字符去完成这个功能？我们经常使用，应该这样。

幸运的是，我们可以使用`npm t`，它就可以胜任

![](http://p0.qhimg.com/t0119b0f93fdbce3c52.gif)

#### 3\. 枚举可用的脚本

我们开始一个新项目，我们想知道如何开始。我们通常会问自己这样的问题：我们如何运行它？哪些脚本可用？

一个方法是打开package.json文件并检查`scripts`部分。

![](http://p0.qhimg.com/t01e0d5d6b57de82093.gif)

我们可以做的更好，当然，我们只是运行`npm run`得到一个的所有可用的脚本的列表。

![](http://p0.qhimg.com/t0185df886f66ed19f9.gif)

另外的可以选择是安装`ntl` (`npm i -g ntl`)，然后运行` ntl `在项目文件夹中。它也可以运行脚本，也很方面。

![](http://p0.qhimg.com/t01c60c779d0d614408.gif)

#### 4\. 枚举已经安装的包

类似于可用的脚本，有时我们会问自己我们的项目中有哪些依赖项。

我们可以再次打开package.json文件和检查，但是我们已经做的更好了。

使用 `npm ls --depth 0`.

![](http://p0.qhimg.com/t014ad711b281c288ae.gif)

枚举全局安装包，使用`npm ls -g --depth 0`

![](http://p0.qhimg.com/t01ab4908f2e4500392.gif)

#### 5\. 运行本地安装的可执行文件

我们安装了一个包在我们的项目中，它是一个可执行的，但我们只能运行它通过一个新的脚本。你想知道为什么，或者如何克服它？

首先，让我们了解为什么——当我们在终端中执行命令时，实际发生的是它在PATH环境变量中列出的所有路径中查找一个具有相同名称的可执行文件。这就是他们如何神奇地从任何地方都可以执行。本地安装的软件包登记他们的可执行文件在本地，所以他们不在我们的`PATH`路径中将不会被发现。

当我们运行这些可执行文件通过一个新脚本，它是如何工作的呢？你可能会问？很好的问题！这是因为这种方式运行时，NPM做了一点技巧和增加了一个额外的文件夹到`PATH`，`/node_modules/.bin`中。
你可以看到它的运行`npm run env | grep "$PATH"`。你也可以运行只是`npm run env` 查看所有可用的环境变量，npm增加了一些更有趣的东西。
`/node_modules/.bin`，如果你不知道，正是在本地安装的软件包放置可执行文件的地方。

我们可以运行 `./node_modules/.bin/mocha` 在我们的项目中，看看将会发生什么.

![](http://p0.qhimg.com/t011a44c15fdb274912.gif)

很简单, 对吧? 仅仅运行 `./node_modules/.bin/` ，无论什么时候你想要运行本地已安装的可执行文件。

#### 6\. 在网上查找你想要的包

你可能看到了`repository`这个入口在package.json文件中，疑问“这有什么好处？”

为了问答这个问题，仅仅运行`npm repo`然后在你的浏览器中查看。

与之类似,`npm home`命令进入主页。

如果你想打开你的包的主页[npmjs.com](https://www.npmjs.com/)，那是一个不错的速记，`npm docs`。

#### 7\. 在其他脚本前后运行脚本

您可能熟悉诸如`pretest`之类的脚本，它允许您定义在`test`脚本之前运行的代码。

您可能会惊讶地发现，您可以为每个脚本配置或有或后的脚本，包括您自己的自定义脚本！

![](http://p0.qhimg.com/t010206810a272d84df.gif)

对于项目中，你使用NPM作为您的构建工具，有很多脚本，你需要自己总结使用。

#### 8\. 修改包的版本

你开发一个安装包，你使用[semver](http://semver.org/)作为版本管理工具，修改一个新版本。

通过这种方式，你需要手动的修改package.json文件，我们不推荐这样做。

更容易的方式是运行`npm version` 通过 `major`, `minor` 或者 `patch`

![](http://p0.qhimg.com/t01794393233d68fbaf.gif)
