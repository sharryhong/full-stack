## [인프런강의-Vuejs](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/)

### 디렉티브
#### [v-model](https://kr.vuejs.org/v2/guide/forms.html)
- 양방향 데이터 바인딩 지원
- 예) `v-model:value="query"`, `v-bind:class="{active: tab === selectedTab}"``

#### [v-bind](https://kr.vuejs.org/v2/guide/class-and-style.html)
- html attribute의 값을 바인딩
- 예) `v-bind:src="item.image"`

#### [v-show](https://kr.vuejs.org/v2/guide/forms.html)
- true면 엘리먼트 표시
- 자주 바꾸기를 원한다면 v-show를, 런타임 시 조건이 바뀌지 않으면 v-if를 권장합니다.

#### [v-if](https://kr.vuejs.org/v2/guide/conditional.html#v-if)
- true면 엘리먼트 표시
- 예) `v-if="selectedTab === tabs[0]"`

#### [v-on](https://kr.vuejs.org/v2/guide/events.html)
- 이벤트 핸들링 (DOM에서 일어나는 이벤트를 리슨)
- `v-on:submit.prevent="onSubmit"` : `event.preventDefault()` 역할
- `v-on:click.stop="onRemoveHistory(item)"` : `event.stopPropagation()` 역할 (이벤트 전파 방지)

#### [v-for](https://kr.vuejs.org/v2/guide/list.html)
- 예) `v-for="(item, index) in keywords"`

### Vue instance 인자들
- `el` : vue 인스턴스가 html의 어느부분에 마운트될 것 인지 설정
- `data`
- `created` : vue 인스턴스가 생성될 때 실행 ([인스턴스 라이프사이클참고](https://kr.vuejs.org/v2/guide/instance.html#%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8))
- `methods` : 메서드들

```
// vue instance
new Vue({       // 인자들 el, data
    el: '#app', // vue 인스턴스가 html의 어느부분에 마운트될 것 인지 설정
    data: {
        msg: 'Hello World',  // msg변수 선언
        submitted: false,    // submit했는지
        searchResult: [],    // 검색결과
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: ''
    },
    created() { // vue 인스턴스가 생성될 때 실행
        this.selectedTab = this.tabs[0]
    },
    methods: {
        onSubmit() {
            console.log('onSubmit()');
        }
    }
})
```
