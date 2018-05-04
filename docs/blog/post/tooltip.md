---
category: 技术
title: css 编写提示框
date: 2018-05-03 14:47:01
tags: ["CSS"]
description: css文字提示样式
---

## 提示框

> 示例

<a class="tooltip" data-title="提示文字">移到这里</a>

### 文字链接

```html
<a class="tooltip" data-title="提示文字">提示</a>
```

<!-- more -->

### 样式

```stylus
.tooltip:hover {
    position: relative;
    /*提示内容*/
    &:before {
        content: attr(data-title);
        position: absolute;
        background: #444;
        white-space: nowrap;
        right: 70px;
        color: #fff;
        font-size: 0.8rem;
        padding: 0 5px;
        border-radius: 5px;
        top: 1px;
    }
    /*箭头*/
    &:after {
        content: ' ';
        position: absolute;
        right: 63px;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 8px solid #444;
        top: 30%;
    }
}
```

<style lang="stylus" scoped>
.tooltip:hover {
    position: relative;

    &:before {
        content: attr(data-title);
        position: absolute;
        background: #444;
        white-space: nowrap;
        right: 70px;
        color: #fff;
        font-size: 0.8rem;
        padding: 0 5px;
        border-radius: 5px;
        top: 1px;
    }

    &:after {
        content: ' ';
        position: absolute;
        right: 63px;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 8px solid #444;
        top: 30%;
    }
}
</style>
