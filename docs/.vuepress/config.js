module.exports = {
    port: 8004,
    title: 'cyy-blog', // 设置网站标题
    description: '个人网站',
    dest: './dist', // 设置输出目录
    base: '/vueblog/', // 设置站点根路径
    repo: 'https://github.com/cyyjs/vueblog', // 添加 github 链接
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: 'home', link: '/' },
            { text: 'blog', link: '/blog/' },
            {
                text: 'github',
                // 这里是下拉列表展现形式。
                items: [
                    {
                        text: 'vueblog',
                        link: 'https://github.com/cyyjs/vueblog'
                    }
                ]
            }
        ],
        sidebar: {
            '/blog/': [
                {
                    title: '列表',
                    collapsable: false,
                    children: ['', '0ySGeMATlDSbikLM', '5ykC26xyTqYUFCqG']
                }
            ]
        }
    }
}
