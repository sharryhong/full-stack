import SearchModel from './models/SearchModel.js'

// vue instance
new Vue({       // 인자들 el, data
    el: '#app', // vue 인스턴스가 html의 어느부분에 마운트될 것 인지 설정
    data: {
        msg: 'Hello World',  // msg변수 선언
        submitted: false,    // submit했는지
        query: '',           // 검색어
        searchResult: [],    // 검색결과
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: ''
    },
    created() { // vue 인스턴스가 생성될 때 실행
        this.selectedTab = this.tabs[0]
    },
    methods: {
        // 검색어 입력후 submit
        onSubmit() {
            console.log('onSubmit()');
            this.search()
        },
        // 검색어 입력 x버튼 클릭시
        onReset() {
            console.log('onReset()');
            this.query = '' // 뷰 인스턴스(this)의 데이터(query) 값 초기화
            this.searchResult = []
            this.submitted = false
        },
        // 검색어 입력시
        onKeyup() {
            if(!this.query.length) this.onReset()
        },
        // 검색결과
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
        // 탭
        onClickTab(tab) {
            this.selectedTab = tab
        }
    }
})
