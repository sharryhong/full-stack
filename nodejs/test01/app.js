var express = require('express')
var app = express() // 반환값이 함수이기 때문이다.
var bodyParser = require('body-parser')

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

// express 서버에 bodyParser쓴다고 알려주기
app.use(bodyParser.json()) // 클라이언트에서 오는 응답이 json형태일 때
app.use(bodyParser.urlencoded({extended:true})) // json아닌 post방식일 때
// encoded된 url .. 아스키 형태 데이터만 주고 받을 수 있다. 한글 등은 인코딩하여 보내진다.

// 뷰 엔진을 ejs로 쓴다.
// views폴더 생성
app.set('view engine', 'ejs')

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

// form.html 에서 /email_post에 대한 라우팅 처리
app.post('/email_post', function(req, res) {
  // get요청일 때 데이터 받는 방법 : req.param('email')
  // post요청일 때는 body parser라는 별도의 모듈이 필요하다.
  // $npm install body-parser --save
  console.log(req.body.email)
  // res.send('post response')
  // res.send('<h1>Welcome! ' + req.body.email + '</h1>')
  res.render('email.ejs', {'email' : req.body.email}) // ejs template
})
// req.body : cmd에 { email: '입력값'}
// req.body.email : 입력값  (입력한 이메일 정보가 나오게 된다.)
// 클라이언트에서 전송된 폼이 서버로 오게 되는 것이다.
// 이 값으로 디비 조회 등 조작들을 할 수 있다.

// 서버에서 Ajax처리
// url을 라우팅. express가 모니터링 하고 있다가
app.post('/ajax_send_email', function(req, res) {
  // console.log(req.body.email)
  // 응답
  var responseData = {'result': 'ok', 'email': req.body.email}
  // 서버에서는 res.json()으로 바로 보내준다.
  res.json(responseData)
})
