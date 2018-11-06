export default {
  data: [   // 검색 히스토리 데이터
    { keyword: '검색기록2', date: '12.03' },
    { keyword: '검색기록1', date: '12.02'},
    { keyword: '검색기록0', date: '12.01' },
  ],

  list() {
    return Promise.resolve(this.data)  // 프라미스 패턴 이용. 서버에서 비동기로 가져오거나 쿠키로 데이터를 얻을 수 있기 때문에 비동기로 구현
  },

  add(keyword = '') { // 추가될 검색어 받기
    keyword = keyword.trim()
    if (!keyword) return
    if (this.data.some(item => item.keyword === keyword)) { // 실제 데이터에 있는지 검색
      this.remove(keyword) // keyword데이터 있으면 삭제하고
    }

    const date = '12.31'  // 새로운 날짜로 데이터 넣기
    this.data = [{keyword, date}, ...this.data]
  },

  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}
