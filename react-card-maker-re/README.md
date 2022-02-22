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

8. cloudinary 이미지 업로드, 로딩 스피너

   - service/image_uploader.js : cloudinary image upload rest api

9. login check 추가

   - session_check.js : login 하지 않고 /maker path 접근시 login 페이지 이동 등

10. Validation 추가

11. 성능개선 : memo, useCallback, useContext rerender 이슈해결

- 블로그 정리 : https://sharryhong.gitbook.io/front-end/front-end-dev/react/usecontext-rerender-issue

12. firebase realtime database

13. 쌤 코드와 비교

### 강의와 차이점

- [v] firebase, react-router-dom 최신버전
- [v] Base Components 관리 예: Button.jsx
- [v] header에 로그인, 로그아웃 위치
- [v] login 경로 기존 '/' -> '/login'로 변경
- [v] state 관리 : useContext, useReducer
- [v] login check 추가
- [v] Validation 추가
- home 에서 로그인 하지 않고 서비스 사용해 볼 수 있는 기능 추가
- 최종 이미지 저장 기능 추가
