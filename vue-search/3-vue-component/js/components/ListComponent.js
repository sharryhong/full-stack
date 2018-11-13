export default {
    template: '#list',
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
