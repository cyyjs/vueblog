<template>
  <div class="page-head">
    <h1 >{{$page.frontmatter.title}}</h1>
    <span class="tag" v-for="tag in tags">{{tag}}</span>
    <span v-if="time" class="time">{{time}}</span> 
  </div>
</template>
<script>
import { dateFormat } from './util'
export default {
    computed: {
        time() {
            return (
                (this.$page.frontmatter.date &&
                    dateFormat(this.$page.frontmatter.date)) ||
                ''
            )
        },
        tags() {
            let tags = this.$page.frontmatter.tags || []
            return (Array.isArray(tags) && tags) || [tags]
        }
    }
}
</script>


