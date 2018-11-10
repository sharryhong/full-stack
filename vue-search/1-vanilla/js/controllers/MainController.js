import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
    init() {
        FormView.setup(document.querySelector('.box_form'))
            .on('@submit', e => this.onSubmit(e.detail.input)) // enter치면
            .on('@reset', e => this.onResetForm())

        ResultView.setup(document.querySelector('#search-result'))

        this.selectedTab = '추천 검색어'
        TabView.setup(document.querySelector('#tabs'))
            .on('@change', e => this.onChangeTab(e.detail.tabName))

        this.renderView()
    },

    renderView() {
        TabView.setActiveTab(this.selectedTab)
        // ResultView.hide()
    },

    onChangeTab(tabName) {
        this.selectedTab = tabName
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input);
        // 입력 데이터를 받아서 검색 요청
        this.search(input)
    },

    search(query) {
        console.log(tag, 'search()', query);
        // search api를 통해 데이터를 받아와서 아래 함수 실행
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
    },

    onSearchResult(data) {
        ResultView.render(data)
    },

    onResetForm() {
        console.log(tag, 'onResetForm()');
        this.onSearchResult([])
        ResultView.hide()
    }
}
