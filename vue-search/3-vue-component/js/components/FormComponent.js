export default {
    template: '#search-form',
    props: ['value'],
    data() {
        return {
            inputValue: this.value
        }
    },
    watch: { // view model을 감시하다가 값이 변경되면 행동하는 함수
        value(newVal, oldVal) {   // value 값 감시. 값이 변경되면 이 함수 실행. 파라미터로 new, old value
            this.inputValue = newVal
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
