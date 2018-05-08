export default {
    methods: {
        toTop() {
            let scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop
            let step = scrollTop / 20
            const timer = setInterval(() => {
                if (scrollTop > step) {
                    scrollTop -= step
                    document.documentElement.scrollTop = scrollTop
                    document.body.scrollTop = scrollTop
                } else {
                    document.documentElement.scrollTop = 0
                    document.body.scrollTop = 0
                    clearInterval(timer)
                }
            }, 10)
        }
    }
}
