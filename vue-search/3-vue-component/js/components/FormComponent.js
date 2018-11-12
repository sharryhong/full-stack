export default {
    template: '#search-form',
    props: ['value'],
    data() {
        return {
            inputValue: this.value
        }
    },
    methods: {
        // 검색어 입력후 submit
        onSubmit() {
            this.$emit('@submit', this.inputValue.trim()) // 데이터를 trim처리해서 보냄
        },
        // 검색어 입력 x버튼 클릭시
        onReset() {
            this.inputValue = ''
            this.$emit('@reset')
        },
        // 검색어 입력시
        onKeyup() {
            if(!this.inputValue.length) this.onReset()
        }
    }
}
