import { dateFormat, formatContent } from './theme/util'
import { formatSiteData } from './lib'
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    Vue.prototype.$http = {
        get(url, params = {}) {
            return new Promise((res, rej) => {
                fetch(url, params)
                    .then(res => {
                        return res.json()
                    })
                    .then(d => res(d))
                    .catch(e => rej(e))
            })
        }
    }
    // const Feed = require('feed')
    // ...做一些其他的应用级别的优化
    // 格式化page frontmatter
    formatSiteData(siteData)
}
