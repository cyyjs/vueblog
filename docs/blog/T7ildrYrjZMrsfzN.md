---
category: BUG
title: TypeError The header content contains invalid characters
date: 2017-11-04 15:56:42
tags: ["nodejs"," http"]
---

nodejs运行过程中出现此错误

```
TypeError: The header content contains invalid characters
```

出现此原因发现是在执行`ctx.redirect` 的时候出现的，
经检查发现为`redirect`的`url`中包含了中文，修改为`redirect(encodeURI(url))`即可。
<div style="text-align:right;font-size:12px;color:#666;">----publish by <a href="http://ceditor.alibt.top" target="_blank">CEditor</a></div>