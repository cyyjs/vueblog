import { dateFormat, formatContent } from './theme/util'
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    // ...做一些其他的应用级别的优化
    // console.log(siteData)
    let pages = siteData.pages
        .sort((a, b) => {
            let at =
                (a.frontmatter &&
                    a.frontmatter.date &&
                    new Date(a.frontmatter.date)) ||
                0
            let bt =
                (b.frontmatter &&
                    b.frontmatter.date &&
                    new Date(b.frontmatter.date)) ||
                0
            return at > bt ? -1 : 1
        })
        .map(p => {
            if (p.frontmatter.tags) {
                p.frontmatter.tags = Array.isArray(p.frontmatter.tags)
                    ? p.frontmatter.tags
                    : [p.frontmatter.tags]
            }
            p.frontmatter.meta = p.frontmatter.meta || [
                {
                    name: 'description',
                    content: formatContent(
                        p.frontmatter.description || p.excerpt || ''
                    )
                },
                {
                    name: 'keywords',
                    content: p.frontmatter.tags && p.frontmatter.tags.join(',')
                }
            ]
            if (p.frontmatter.date) {
                p.frontmatter.date = dateFormat(p.frontmatter.date)
            }
            return p
        })
    Object.assign({}, siteData, { siteData })
    // console.log(siteData)
}
