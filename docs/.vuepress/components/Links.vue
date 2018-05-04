<template>
  <div class="page">
      <div class="list-content">
          <div class="item-card" v-for="p in page">
            <h2><router-link :to="p.path" >{{ p.title }}</router-link></h2>
            <div class="item-body">
                <div class="item-content">{{formatContent(p.frontmatter.description || p.excerpt)}}</div>
                <div class="item-img" v-if="p.frontmatter.banner" :style="{backgroundImage:'url('+p.frontmatter.banner+')'}"> </div>
            </div>
            <div class="card-footer">
                <span class="tags" :key="t" v-for="t in p.frontmatter.tags">{{t}}</span>
                <span class="time">{{p.frontmatter.date}}</span>
            </div>
          </div>
          <pagination :pageNo="pageNo" :total="pageList.length" @change="changePage"></pagination>
      </div>
  </div>
</template>
<script>
const isPost = new RegExp(/^\/\w+\/post\//, 'g')
import { dateFormat } from '../theme/util'
import Pagination from '../theme/pagination'
export default {
    data() {
        return {
            pageNo: 1
        }
    },
    components: {
        Pagination
    },
    computed: {
        pageSize() {
            return this.$site.themeConfig.pageSize || 10
        },
        pageList() {
            return this.$site.pages.filter(i => isPost.test(i.path))
        },
        page() {
            return this.pageList.slice(
                (this.pageNo - 1) * this.pageSize,
                this.pageSize * this.pageNo
            )
        }
    },
    methods: {
        changePage(n) {
            this.pageNo = n
        },
        formatContent(data = '') {
            return data.replace(/(\[\w+\]\([^\)]+\))|(!\[\]\([^\(]+)/g, '')
        }
    }
}
</script>

