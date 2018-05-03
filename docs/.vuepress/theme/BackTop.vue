<template>
  <div class="back-top">
      <ul>
          <li class="tooltip" data-title="返回顶部" v-show="scrollTop > 300" @click="toTop"><img src="./img/back-top.svg" alt=""></li>
          <li data-title="关注公众号" @click.stop="showCode = !showCode"  class="tooltip wxcode-btn" v-if="$site.themeConfig.wxImg"><img src="./img/head.svg" alt=""> </li>
      </ul>
      <div :class="['wxcode', showCode ? 'wxcode-show': ''] " v-if="$site.themeConfig.wxImg">
          <img id="wxcode" :src="$withBase($site.themeConfig.wxImg)" alt="">
      </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            scrollTop: 0,
            showCode: false
        }
    },
    methods: {
        toTop() {
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        },
        onScroll() {
            this.scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
        },
        clickBody(e) {
            if (e.target.id == 'wxcode') {
                return false
            }
            if (this.showCode) {
                this.showCode = false
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('scroll', this.onScroll)
            window.addEventListener('click', this.clickBody)
        })
    }
}
</script>
