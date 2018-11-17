<template>
    <div>
        <ul v-if="data" class="list">
            <li v-for="(item, index) in data" v-on:click="onClickList(item.keyword)">
                <span v-if="keywordType" class="number">{{index + 1}}</span>
                {{item.keyword}}
                <span v-if="historyType" class="date">{{item.date}}</span>
                <button type="button" v-if="historyType" v-on:click.stop="onRemoveList(item.keyword)" class="btn-remove"></button>
            </li>
        </ul>
        <div v-else>
            해당 검색어가 없습니다.
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'type'],
    computed: {
        keywordType() {
            return this.type === 'keywords'
        },
        historyType() {
            return this.type === 'history'
        }
    },
    data() {
        return {
        }
    },
    methods: {
        // 검색어 클릭시
        onClickList(keyword) {
            this.$emit('@click', keyword)
        },
        // 최근 검색에서 삭제
        onRemoveList(keyword) {
            this.$emit('@remove', keyword)
        }
    }
}
</script>
