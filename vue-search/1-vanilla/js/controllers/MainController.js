import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'
import HistoryView from '../views/HistoryView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'

const tag = '[MainController]'

export default {
    init() {
        FormView.setup(document.querySelector('.box_form'))
            .on('@submit', e => this.onSubmit(e.detail.input)) // enter치면
            .on('@reset', e => this.onResetForm())

        ResultView.setup(document.querySelector('#search-result'))
        KeywordView.setup(document.querySelector('#search-keyword'))
            .on('@click', e => this.onClickKeyword(e.detail.keyword))

        HistoryView.setup(document.querySelector('#search-history'))
            .on('@click', e => this.onClickHistory(e.detail.keyword))
            .on('@remove', e => this.onRemoveHistory(e.detail.keyword))

        this.selectedTab = '추천 검색어'
        TabView.setup(document.querySelector('#tabs'))
            .on('@change', e => this.onChangeTab(e.detail.tabName))

        this.renderView()
    },

    renderView() {
        // TabView.show()
        TabView.setActiveTab(this.selectedTab)

        if(this.selectedTab === '추천 검색어') {
            this.fetchSearchKeyword()
            HistoryView.hide()
        } else {
            this.fetchSearchHistory()
            KeywordView.hide()
        }

        // ResultView.show()
    },

    fetchSearchKeyword() {
        KeywordModel.list().then(data => {
            KeywordView.render(data)
        })
    },

    fetchSearchHistory() {
        HistoryModel.list().then(data => {
            HistoryView.render(data).bindRemoveBtn()
        })
    },

    onChangeTab(tabName) {
        console.log(tabName);
        this.selectedTab = tabName
        this.renderView()
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input);
        // 입력 데이터를 받아서 검색 요청
        this.search(input)
    },

    search(query) {
        console.log(tag, 'search()', query);
        FormView.setValue(query)
        HistoryModel.add(query)
        // search api를 통해 데이터를 받아와서 아래 함수 실행
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
            ResultView.show()
        })
    },

    onSearchResult(data) {
        TabView.hide()
        KeywordView.hide()
        HistoryView.hide()
        ResultView.render(data)
    },

    onResetForm() {
        console.log(tag, 'onResetForm()');
        // this.onSearchResult([])
        this.renderView()
        ResultView.hide()
    },

    onClickKeyword(keyword) {
        this.search(keyword)
    },

    onClickHistory(keyword) {
        this.search(keyword)
    },

    onRemoveHistory(keyword) {
        HistoryModel.remove(keyword)
        this.renderView()
    }
}
