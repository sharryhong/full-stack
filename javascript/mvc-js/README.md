# JS-MVC 공부

- 개발용서버설치 : lite-server (https://github.com/johnpapa/lite-server)
```
$ npm install lite-server --save-dev
$ yarn add lite-server --dev # or yarn
```

### MVC패턴
- Model : data관리. 데이터베이스에 직접 접근하지 않고 api형태로 접근.
- View : model의 data를 화면에 구현. 사용자가 입력한 데이터 처리.
- Controller : model과 view연결. model로 부터 데이터를 가져와서 view에 전달, view로부터 입력데이터를 얻어 model에 전달.
