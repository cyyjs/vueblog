<template>
  <div class="page-head">
    <h1 >{{$page.frontmatter.title}}</h1>
    <div class="page-head-footer">
        <span class="tags" v-for="tag in tags">{{tag}}</span>
        <span v-if="$page.frontmatter.date" class="time">{{$page.frontmatter.date}}</span> 
    </div>
  </div>
</template>
<script>
import { dateFormat } from './util'
export default {
    computed: {
        tags() {
            let tags = this.$page.frontmatter.tags || []
            return (Array.isArray(tags) && tags) || [tags]
        }
    }
}
</script>


