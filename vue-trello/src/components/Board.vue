<template>
    <div>
        board~!!!
        <div v-if="loading">
            Loading Board...
        </div>
        <div v-else>
            <div class="">
                bid: {{ bid }}
            </div>
            <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
            <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
        </div>

        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0,
            loading: false
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.bid = this.$route.params.bid // this.$route 객체로 라우팅 정보받기
                this.loading = false
            }, 500)
        }
    }
}
</script>

<style>
</style>
