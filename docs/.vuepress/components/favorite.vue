<template>
    <div class="page">
        <div class="favorite">
            <div v-for="(v, k) in dataMap" :key="k">
                <h3>{{k}}</h3>
                <div class="favorite-list">
                    <div class="item-card" v-for="p in v" >
                        <a target="_blank" :href="p.url">
                            <div class="item-body">
                                <div class="item-content">
                                    <h4>{{p.title}}</h4>
                                    <div style="height: 40px; overflow: hidden;">
                                        {{p.description}}
                                    </div>
                                    <div class="card-footer">
                                        <span class="tags" @click="changeTag(t)" :key="t" v-for="t in p.tags">{{t}}</span>
                                    </div>
                                </div>
                                <div class="item-img" :style="{backgroundImage:'url('+p.banner+')'}"> </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <back-top></back-top>
    </div>
</template>
<script>
import { dateFormat } from '../theme/util'
import BackTop from '../theme/BackTop.vue'
export default {
    props: {
        favoriteInput: String
    },
    components: {
        BackTop
    },
    data() {
        return {
            oDataMap: {}
        }
    },
    computed: {
        dataMap() {
            let map = {};
            if (!this.favoriteInput.length) {
                return this.oDataMap
            } else {
                for(let k in this.oDataMap) {
                    let list = this.oDataMap[k].filter(i => i.title.toLocaleUpperCase().includes(this.favoriteInput.toLocaleUpperCase()))
                    if (list.length) {
                        map[k] = list
                    }
                }
                return map
            }
        }
    },
    methods: {
        fetchData() {
            this.$http.get(this.$site.themeConfig.apiUrl+ '/favorite').then(({ data: { data } }) => {
                let list = data || []
                let dataMap = {}
                list.forEach(i => {
                    dataMap[i.category] = dataMap[i.category] || []
                    i.updated = dateFormat(i.updated)
                    dataMap[i.category].push(i)
                })
                this.oDataMap = dataMap
            })
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>
