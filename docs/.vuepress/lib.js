import { dateFormat, formatContent } from './theme/util'
export function formatSiteData(siteData) {
    siteData.pages
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
    return siteData
}

export function generateRss(siteData) {}
