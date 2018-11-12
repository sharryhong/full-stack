import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

// vue instance
new Vue({       // 인자들 el, data
    el: '#app', // vue 인스턴스가 html의 어느부분에 마운트될 것 인지 설정
    data: {
        msg: 'Hello World',  // msg변수 선언
        submitted: false,    // submit했는지
        query: '',           // 검색어
        searchResult: [],    // 검색결과
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',     // 선택한 탭
        keywords: [],        // 추천 검색어
        historyKeywords: []  // 최근 검색
    },
    created() { // vue 인스턴스가 생성될 때 실행
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
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
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        // 탭
        onClickTab(tab) {
            this.selectedTab = tab
        },
        // 추천검색결과
        fetchKeyword() {
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        // 추천 검색어 클릭시
        onClickKeyword(keyword) {
            this.query = keyword
            this.search()
        },
        // 최근검색결과
        fetchHistory() {
            HistoryModel.list().then(data => {
                this.historyKeywords = data
            })
        },
        // 최근 검색에서 삭제
        onRemoveHistory(keyword) {
            // this.historyKeywords = HistoryModel.remove(keyword)
            HistoryModel.remove(keyword)
            this.fetchHistory()
        }
    }
})
