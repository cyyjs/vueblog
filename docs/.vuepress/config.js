const fs = require('fs')
const path = require('path')
const blogs = getFileList('blog/post', true)
function getFileList(name, isMd) {
    let folders = fs.readdirSync(path.join(__dirname, '../' + name))
    if (isMd) {
        folders = folders
            .filter(f => f.endsWith('.md'))
            .map(f => f.substring(0, f.indexOf('.')))
    } else {
        folders = folders.filter(f => !f.includes('.'))
    }
    return folders
}

module.exports = {
    port: 8004,
    title: 'Cyy', // 设置网站标题
    description: '哟，你的bug里有段代码~',
    dest: './dist', // 设置输出目录
    base: '/vueblog/', // 设置站点根路径
    repo: 'https://github.com/cyyjs/vueblog', // 添加 github 链接
    head: [['link', { rel: 'icon', href: `/img/favicon.ico` }]],
    // serviceWorker: true,
    themeConfig: {
        logo: '/img/logo.png',
        notFindImg: '/img/404.svg',
        wxImg: '/img/qrcode.jpg',
        // 添加导航栏
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Blog',
                link: '/blog/',
                items: [
                    {
                        text: '列表',
                        link: '/blog/links'
                    },
                    {
                        text: '标签',
                        link: '/blog/tags'
                    },
                    {
                        text: '归档',
                        link: '/blog/archives'
                    }
                ]
                // blogs.map(b => {
                //     return {
                //         text: b,
                //         link: `/blog/${b}/${getFileList(`blog/${b}`, 1)[0]}`
                //     }
                // })
            },
            {
                text: 'Live',
                link: `/live/${getFileList(`live`, 1)[0]}`
            },
            {
                text: 'Project',
                // 这里是下拉列表展现形式。
                items: [
                    {
                        text: 'ceditor',
                        link: 'https://github.com/cyyjs/ceditor'
                    },
                    {
                        text: 'vueblog',
                        link: 'https://github.com/cyyjs/vueblog'
                    }
                ]
            },
            {
                text: 'Github',
                link: 'https://github.com/cyyjs'
            }
        ],
        sidebar: blogs.map(b => {
            return `blog/post/${b}`
        })
    }
}
