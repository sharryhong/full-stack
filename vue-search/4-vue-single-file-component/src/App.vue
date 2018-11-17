<template>
    <div>
        <header>
          <h2 class="container">검색</h2>
        </header>
        <div class="container">
            <search-form v-bind:value="query"
                v-on:@submit="onSubmit"
                v-on:@reset="onReset">
            </search-form>
            <div v-if="submitted">
                <search-result v-bind:data="searchResult" v-bind:query="query"></search-result>
            </div>
            <div v-else>
                <tabs v-bind:tabs="tabs" v-bind:selected-tab="selectedTab" v-on:@change="onClickTab"></tabs>

                <div v-if="selectedTab === tabs[0]">
                    <list v-bind:data="keywords" type="keywords" v-on:@click="onClickList"></list>
                </div>
                <div v-else>
                    <list v-bind:data="historyKeywords" type="history" v-on:@click="onClickList" v-on:@remove="onRemoveList"></list>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './Components/FormComponent.vue'
import ResultComponent from './Components/ResultComponent.vue'
import TabComponent from './Components/TabComponent.vue'
import ListComponent from './Components/ListComponent.vue'

export default {
  name: 'App',
  data() {
      return {
          msg: 'Hello World',  // msg변수 선언
          submitted: false,    // submit했는지
          query: '',           // 검색어
          searchResult: [],    // 검색결과
          tabs: ['추천 검색어', '최근 검색어'],
          selectedTab: '',     // 선택한 탭
          keywords: [],        // 추천 검색어
          historyKeywords: []  // 최근 검색
      }
  },
  components: {
      'search-form': FormComponent,
      'search-result': ResultComponent,
      'tabs': TabComponent,
      'list': ListComponent
  },
  created() { // vue 인스턴스가 생성될 때 실행
      this.selectedTab = this.tabs[0]
      this.fetchKeyword()
      this.fetchHistory()
  },
  methods: {
      // 검색어 입력후 submit
      onSubmit(query) {
          console.log('onSubmit()');
          this.query = query
          this.search()
      },
      // 검색어 입력 x버튼 클릭시
      onReset() {
          console.log('onReset()');
          this.query = '' // 뷰 인스턴스(this)의 데이터(query) 값 초기화
          this.searchResult = []
          this.submitted = false
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
      // 검색어 클릭시
      onClickList(keyword) {
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
      onRemoveList(keyword) {
          // this.historyKeywords = HistoryModel.remove(keyword)
          HistoryModel.remove(keyword)
          this.fetchHistory()
      }
  }
}
</script>

<style>
@import './style.css';
</style>
