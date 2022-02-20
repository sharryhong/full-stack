드림코딩 강의 : https://academy.dream-coding.com/courses/take/react-basic

### Card Maker 다시 스스로 만들기 & 리팩토링

1. 템플릿 복사
   cp -R react-template-base react-card-maker-re

2. firebase install <br/>
   styles/colors.css, size.css : 공통 postCSS @value <br/>
   각 css : em, rem 단위 사용으로 반응형과 접근성에 좋게 해보기

3. .env, service/firebase.js, service/auth_service.js : auth 설정, 관련 서비스

   - index.js authService 의존성 주입(dependency injection)

4. pages/login/Login.jsx, login.module.css : 로그인 기능, UI, style

   - google, github login

5. App.jsx, Header.jsx : router 설정 및 로그인, 로그아웃시 페이지 이동

   - react-router-dom
   - /, /login, /maker

6. 전체 페이지 구조, UI, style

7. state 관리 : useContext, useReducer

   - store/maker_store.js, maker_reducer.js 분리하여 관리
   - maker_reducer.js : 이전 state와 action을 받아 새 state를 return

8. firebase realtime database

9. cloudinary 이미지 업로드, 로딩 스피너

10. 성능개선

11. 쌤 코드와 비교

### 강의와 차이점

- header에 로그인, 로그아웃 위치
- login 경로 기존 '/' -> '/login'로 변경
- home 에서 로그인 하지 않고 서비스 사용해 볼 수 있는 기능 추가
- 최종 이미지 저장 기능 추가
- firebase, react-router-dom 최신버전
