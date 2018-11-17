<template>
    <div v-if="loading">
        Loading
    </div>
    <div v-else>
        <div v-for="board in boards" :key="board.id">
            {{ board }}
        </div>
        <ul>
            <li>
                <router-link to="/b/1">Board1</router-link>
            </li>
            <li>
                <router-link to="/b/2">Board2</router-link>
            </li>
        </ul>
    </div>

</template>

<script>
import {board} from '../api'

export default {
    data() {
        return {
            loading: false,
            boards: ''
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            board.fetch()
              .then(data => {
                this.boards = data
              })
              .finally(() => {
                  this.loading = false
              })
        }
    }
}
</script>

<style>
</style>
