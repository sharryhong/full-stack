# 순수 JavaScript UI개발 실습

## 개발환경 구성
- Lite Server(개발서버) https://github.com/johnpapa/lite-server
`sudo npm install -g lite-server`
- Chrome 최신버전 : 모듈시스템 지원 (v61이상)

## MVC패턴으로 구현하기
Model - database에서 데이터를 가져와서 다른 객체에 전달, 외부객체로부터 입력데이터를 받아서 디비에 저장. api로 접근하여 전달한다.
View - 모델의 데이터를 화면에 그린다. 보통 html, css, javascript. 사용자가 입력한 데이터 처리.
Controller - 모델로 부터 데이터를 가져오고, 뷰에게 전달한다. 뷰로부터 사용자 입력을 받아 모델에 전달. 모델과 뷰는 직접 연결되진 않고 컨트롤러를 통해 한다. 
