## SPA 모드 애플리케이션 문제점

JavaScript가 다운로드되고 실행되고 Vue Router가 생성 페이지를로드 할 때까지 페이지의 콘텐츠가 로드되지 않는다. 
페이지는 렌더링 할 JavaScript를 로드하는 데 의존한다. 
여기에는 몇 가지 문제가 있다.

- 검색 크롤러는 최신 JavaScript 기능을 지원하지 않을 수 있다.
- Google은 JavaScript를 렌더링하는 유일한 엔진이다.
- 하나의 자바 스크립트 오류로 인해 전체 사이트의 색인이 생성되지 않을 수 있다.
- 페이지가 너무 느리면 색인이 전혀 생성되지 않을 수 있다.

이 때문에 SEO를 수행하는 더 나은 방법이 필요하다.

## vue-meta 
https://github.com/nuxt/vue-meta

Nuxt.js에는 vue-meta 라는 페이지 메타 정보를 관리하는 데 도움이되는 라이브러리가 내장되어 있다. 

Universal mode는 초기에 적절한 SEO 태그가 사용되도록 한다. 

head() {
    return {
      titleTemplate: '%s - Nuxt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'nuxt',
        }
      ]
