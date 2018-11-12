## [인프런강의-Vuejs](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/)

### 디렉티브
#### [v-model](https://kr.vuejs.org/v2/guide/forms.html)
- 양방향 데이터 바인딩 지원
- 예) `v-model:value="query"`

#### [v-bind](https://kr.vuejs.org/v2/guide/class-and-style.html)
- html attribute의 값을 바인딩
- 예) `v-bind:src="item.image"`

#### [v-show](https://kr.vuejs.org/v2/guide/forms.html)
- true면 엘리먼트 표시
- 자주 바꾸기를 원한다면 v-show를, 런타임 시 조건이 바뀌지 않으면 v-if를 권장합니다.

#### [v-if](https://kr.vuejs.org/v2/guide/conditional.html#v-if)
- true면 엘리먼트 표시

#### [v-on](https://kr.vuejs.org/v2/guide/events.html)
- 이벤트 핸들링 (DOM에서 일어나는 이벤트를 리슨)
- `v-on:submit.prevent="onSubmit"` : `event.preventDefault()` 역할
