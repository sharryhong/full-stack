## Nuxt.js 장점

1. Nuxt는 Vuex, Vue Router 및 Vue-Meta 등이 기본으로 프로젝트가 설정되어 있다.
2. Vue는 표준 폴더 구조가 없다. 
3. Vue는 라우팅 구성이 길어질 수 있다. 
- nuxt 에서는 pages폴더 구조에 따라 자동적으로 라우터 구성을 만들어준다.
4. Vue는 표준 구성 방법이 없다. 
- nuxt에서는 nuxt.config.js 에 모든 옵션을 적을 수 있다. 
5. Vue는 SEO 친화적이지 않다. 
- Nuxt는 SEO 관련 태그를 쉽게 추가 할 수 있도록 경로를 강화하는 것과 함께 서버에서 애플리케이션을 생성하도록 사전 구성되어 있다.
6. Vue는 초기로드시 Vue 애플리케이션이 느려질 수 있다. 
7. Vue 앱을 사용하면 프레임 워크의 동작을 변경하는 것이 어려울 수 있다.

## Nuxt.js 구성 요소 폴더 구조

- layouts
- pages
- components
- store : Vuex Store 파일을 포함하는 폴더 
- static : 정적 자산. robots.txt, 파비콘
- assets : 컴파일되지 않은 자산. stylus, sass, 이미지, 글꼴 등. webpack의 영향을 받지 않으려면 static에 저장
- plugins : 앱을 인스턴스화 하기 전에 실행할 js플러그인들. 자체 라이브러리, vue 플러그인 사용할 때 유용 
- middleware : 미들웨어를 사용하면 페이지 또는 페이지 그룹 (레이아웃)을 렌더링하기 전에 실행할 수있는 사용자 정의 기능을 정의 할 수 있다.

