## [인프런강의-Vuejs](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/)

#### 개발환경
- nodejs
- lite-server
- git

- [ES6 문법정리 바로가기](https://jsdev.kr/t/es6/2944)

<br/><br/>

>  models/HistoryModel.js

##### [Promise.resolve](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

```
list() {
  return Promise.resolve(this.data)  
}
```
- `return this`대신 프라미스 패턴 사용. 서버에서 비동기로 가져오거나 쿠키로 데이터를 얻을 수 있기 때문에 **비동기**로 구현
- `.then()`으로 이어서 사용

##### [Array.prototype.some()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some) : callback이 어떤 배열 요소에 대해 참인(truthy) 값을 반환하는 경우 true, 그 외엔 false.

```
add(keyword = '') { // 추가될 검색어 받기
  keyword = keyword.trim()
  if (!keyword) return
  if (this.data.some(item => item.keyword === keyword)) { // 실제 데이터에 있는지 검색
    this.remove(keyword) // keyword데이터 있으면 삭제하고
  }

  const date = '12.31'  // 새로운 날짜로 데이터 넣기
  this.data = [{keyword, date}, ...this.data]
}
```

<br/><br/>

>  models/KeywordModel.js

##### [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
```
list() {
  return new Promise(res => {
    setTimeout(() => {
      res(this.data)
    }, 200)
  })
}
```

##### 여기서 궁금! `Promise.resolve()` 와 `new Promise()` 사용시 차이점은?
