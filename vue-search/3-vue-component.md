## [인프런강의-Vuejs](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/)


### [Component(컴포넌트)](https://kr.vuejs.org/v2/guide/components.html)
- 화면의 구조를 모듈별로 쪼개 관리할 수 있다.
- Component.vue 구조 : html(Template) 화면에 출력되는 부분, js 컴포넌트 로직, css 스타일


```
// 컴포넌트 사용
<search-form v-bind:value="query"></search-form>

// 템플릿
<template id="search-form">
    <form v-on:submit.prevent="onSubmit" class="box_form">
      <input type="text" v-model:value="inputValue" v-on:keyup="onKeyup" class="tf-search" placeholder="검색어를 입력하세요" autofocus>
      <button type="reset" v-show="inputValue" v-on:click="onReset" class="btn-reset"></button>
    </form>
</template>

// FormComponent.js
export default {
    template: '#search-form',
    props: ['value'],
    data() {
        return {
            inputValue: this.value
        }
    },
    methods: {

    }
}
```

- query(검색어)의 경우 app.js의 뷰인스턴스에서 관리하고, props로 하위 컴포넌트인 FormComponent에서 사용한다.
- `v-bind:value="query"` props name을 value로
- `props: ['value']`, `inputValue: this.value` 로 사용한다.

#### [props](https://kr.vuejs.org/v2/guide/components.html#Props%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0)
- parent -> child

#### [$emit()](https://kr.vuejs.org/v2/guide/components.html#v-on%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A7%80%EC%A0%95-%EC%9D%B4%EB%B2%A4%ED%8A%B8)
- 이벤트를 트리거시킴
- child -> parent

```
// 컴포넌트 사용시
<search-form v-bind:value="query"
    v-on:@submit="onSubmit"  // @submit 이벤트 발생시 부모컴포넌트의 onSubmit메서드 실행 
    v-on:@reset="onReset"></search-form>

// child component
onSubmit() {
    this.$emit('@submit', this.inputValue.trim()) // 데이터를 trim처리해서 보냄
},
onReset() {
    this.inputValue = ''
    this.$emit('@reset')
},
```
