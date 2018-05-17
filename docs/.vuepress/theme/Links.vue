<template>
  <div class="page">
      <div class="page-content">
        <div class="page-right">
            <div class="tags-list">
                <div class="title">标签列表</div>
                <ul>
                    <li :class="['tags', tag == '' ? 'active' : '']" @click="changeTag('')">全部</li>
                    <li :class="['tags', tag == t ? 'active' : '']" @click="changeTag(t)" v-for="t in tags" :key="t">{{t}}</li>
                </ul>
            </div>
        </div>
        <div class="list-content">
            <div class="item-card" v-for="p in page" @click="$router.push(p.path)">
                <h2>{{ p.title }}</h2>
                <div class="item-body">
                    <div class="item-content">{{formatContent(p.frontmatter.description || p.excerpt)}}</div>
                    <div class="item-img" v-if="p.frontmatter.banner" :style="{backgroundImage:'url('+p.frontmatter.banner+')'}"> </div>
                </div>
                <div class="card-footer">
                    <span class="tags" @click="changeTag(t)" :key="t" v-for="t in p.frontmatter.tags">{{t}}</span>
                    <span class="time">{{p.frontmatter.date}}</span>
                </div>
            </div>
            <pagination :pageNo="pageNo" :total="filterPageList.length" @change="changePage"></pagination>
        </div>
      </div>
      <back-top></back-top>
  </div>
</template>
<script>
const isPost = /^\/\w+\/post\//
import { dateFormat, formatContent } from './util'
import Pagination from './pagination'
import BackTop from './BackTop.vue'
import mixin from './lib/mixin'
export default {
    mixins: [mixin],
    data() {
        return {
            tag: '',
            pageNo: 1
        }
    },
    components: {
        Pagination,
        BackTop
    },
    computed: {
        pageSize() {
            return this.$site.themeConfig.pageSize || 10
        },
        pageList() {
            return this.$site.pages.filter(i => isPost.test(i.path))
        },
        tags() {
            let list = []
            this.pageList.forEach(p => {
                if (p.frontmatter.tags) {
                    p.frontmatter.tags.forEach(t => {
                        if (!list.includes(t)) {
                            list.push(t)
                        }
                    })
                }
            })
            return list
        },
        filterPageList() {
            return this.pageList.filter(p => {
                if (!this.tag) {
                    return true
                }
                return (
                    (p.frontmatter.tags &&
                        p.frontmatter.tags.includes(this.tag)) ||
                    false
                )
            })
        },
        page() {
            return this.filterPageList.slice(
                (this.pageNo - 1) * this.pageSize,
                this.pageSize * this.pageNo
            )
        }
    },
    methods: {
        formatContent,
        changePage(n) {
            this.toTop()
            this.pageNo = n
        },
        changeTag(t) {
            this.tag = t
            this.pageNo = 1
            this.toTop()
        }
    }
}
</script>

