# React! 웹서비스 만들기 우선 기초~!

### 필요 Tool
**Webpack**
- Module bundler, 트랜스포머, 트랜스파일러
- 브라우저가 이해할 수 있는 코드로 변경해준다.
- 리엑트 코드 -> 자바스크립트 코드로 변경해준다.
- 또한 ES6로 된 코드를 모든 브라우저에서 실행되도록 변경
- 기타 등등

**create-react-app** 설치
- 기초로 습득하기 위해 우선 [여기](https://github.com/facebookincubator/create-react-app)에서 설치하자.
- 웹팩 등의 툴이 포함되어있어 쉽게 리액트 앱을 만들어 준다.
- yarn설치가 안되어 있다면 설치하도록 한다.

```
$npm install -g create-react-app // 전역에 설치
$create-react-app my-app         // 리엑트 앱 만들기
```

- 설치 후 4개의 script : start, build, test, eject

#### 실행
```
$yarn start
```
- react-scripts를 실행시킨다.
- http://localhost:3000 확인!

#### React, ReactDOM, reactNative
- 리엑트는 UI라이브러리
- 리엑트돔은 리엑트를 웹사이트에 출력(render)하는걸 도와주는 모델
 - 리엑트돔은 한개의 컴포넌트를 reander
 `ReactDOM.render(<App />, document.getElementById('root'));`
  : App컴포넌트를 html의 id가 root인 엘리먼트에 출력한다.
- 리엑트네이티브는 리엑트를 모바일 앱에 render해줌
