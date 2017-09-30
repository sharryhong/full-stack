var express = require('express')
var app = express() // 반환값이 함수이기 때문이다.
app.listen(3000, function() { // default가 3000 port
  console.log('start!  express server on port 3000')
})

// 실행 : $node app.js
// app.js가 대기상태
// listen함수 실행 : 3000포트 기반으로 이 함수를 실행한다.
// 응답을 받기 위한 대기상태
// http://localhost:3000/ 로 정상적으로 서버에 접속
// 위 콜백함수는 비동기로 동작하기 때문에 스택에 쌓였다가 서버에 접속하면 실행된다.

// nodemon 모듈 : 서버 자동으로 파일의 변화를 감지하여 노드 서버 종료, 시작하게 해줌
// global에 설치해준다. $npm install nodemon -g
// 이제 노드몬으로 실행해준다. $nodemon app.js
// app.js를 수정하면 자동으로 서버를 재실행시켜준다.

// express에 static폴더 지정하기
app.use(express.static('public'))
// 이제 public폴더 아래의 파일들은 static파일로 자동으로 인식해준다.
// static파일 : 변경이 되지 않는 정적파일. JavaScript, CSS, Image등

// url routing처리
// get요청
app.get('/', function(req, res) { // url path, 콜백함수
  res.sendFile(__dirname + "/public/main.html")
  // 절대경로를 적어줘야한다. node에서 제공해주는 __dirname : 현재까지의 경로
  // http://localhost:3000 => 바로 /public/main.html에 접속
})

app.get('/main', function(req, res) {
  res.sendFile(__dirname + "/public/main.html")
})
// http://localhost:3000/main 
