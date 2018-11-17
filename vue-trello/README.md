## [인프런강의-Vuejs](https://www.inflearn.com/course/vuejs/)

- [Vue CLI를 통한 코드 스케폴딩 만들기](https://cli.vuejs.org/)
- Vue CLI : 웹팩을 이용해서 개발환경을 만들어주는 도구

### Backend API 통신
#### [curl명령어 포스팅](https://www.lesstif.com/pages/viewpage.action?pageId=14745703)
- curl url -v // 자세한 응답 옵션 출력
- axios같은 서드파티 라이브러리를 사용할때, 라이브러리를 래핑해서 사용하자. api요청이 필요할때마다 직접 라이브러리를 호출하면 라이브러리에 강하게 의존하는 상황이 생긴다. 유지보수시 어려워질 수 있으므로, 호출하는 모듈을 따로 만들어서 사용하자.

### 네이게이션 가드
- 뷰 라우터의 기능
- beforeEnter함수 : 라우터 직전에 기능을 추가할 수 있다.
- 예) router/index.js
```
const requireAuth = (to, from, next) => {
    const isAuth = localStorae.getItem('token')
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
    isAuth ? next() : next(loginPath) // 토큰이 있다면 라우터 계속 진행, 없다면 이전페이지로 가기
}
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home, beforeEnter: requireAuth },
  ]
})
```
