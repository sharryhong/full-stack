(function () {
  'use strict';

  // util함수 공간

  function addClass(elem, className) {
    var classes = elem.className.split(' ');
    var index = classes.indexOf(className);
    if (index < 0) {
      classes.push(className);
    }
    elem.className = classes.join(' ');
  }

  function removeClass(elem, className) {
    var classes = elem.className.split(' ');
    var index = classes.indexOf(className);
    if (index >= 0) {
      classes.splice(index, 1)
    }
    elem.className = classes.join(' ');
  }

  function addEventListenerLists(elems, type, fn) {
    for (var i = 0, len = elems.length; i < len; i++) {
      elems[i].addEventListener(type, fn, false);
    }
  }

  function ajax(method, url, data, cb) {
      var sendData = data || null;
      var req = new XMLHttpRequest();
      req.open(method, url, true); // true: 비동기
      req.onreadystatechange = function() {
          if(req.readyState === 4) { // 상태코드. 준비됨
              if(req.status === 200) { // 응답. 성공적으로 데이터를 가져왔음
                  var responseData = JSON.parse(this.responseText);
                  cb(responseData) // 콜백함수 호출. 받은 데이터 건네주기
              } else {
                  console.log('error!! ajax');
              }
          }
      }
      req.send(sendData)
  }

  ////// multi selectBox위한 함수
  function selectBox(context) {

      var elemBtnSelect = context.querySelector('.btn_select');
      var elemLayerSelect = context.querySelector('.layer_select');
      var elemItems = elemLayerSelect.querySelectorAll('li');
      var elemText = elemBtnSelect.querySelector('.txt_select');

      var isOpen = false;

      function openLayer() {
          removeClass(elemLayerSelect, 'hide');
          addClass(elemBtnSelect, 'open_select');
          isOpen = true;
      }

      function closeLayer() {
          addClass(elemLayerSelect, 'hide');
          removeClass(elemBtnSelect, 'open_select');
          isOpen = false;
      }

      function btnClickDone(e) {
          if (isOpen) { // 열렸으면
              closeLayer();
          } else {
              openLayer();
          }
      }

      elemBtnSelect.addEventListener('click', btnClickDone, false)

      addEventListenerLists(elemItems, 'click', function (e) {
          e.preventDefault();
          elemText.innerText = this.innerText;
          closeLayer();
      })

      // 다른쪽 클릭시 닫힘.
      document.addEventListener('click', function (e) {
          e.preventDefault();
          if (context.contains(e.target)) {
              return;
          }
          closeLayer();
      }, false)

      // 이벤트 해지와 setting된 value값을 찾기 위해
      return{

      }
  }

  // 기준 id값 context필요
  var elemGenderSelect = document.getElementById('genderSelect')
  var elemNameSelect = document.getElementById('nameSelect')

  // selectBox(elemGenderSelect)
  // selectBox(elemNameSelect)

  // ajax함수를 만들자.
  var URL = 'https://randomuser.me/api/?results=10'; // 랜덤하게 유저 10개 가져오는 주소
  ajax('GET', URL, null, ajaxDone) // ajaxDone 을 익명함수로 바로 써도 되지만 좀 더 디버깅 쉽게
  // 데이터를 가공하자. ajax로 가져온 데이터를 쓰기좋게 가공
  var resultData = {
      male: {
          // '이름' : '이미지url',  // 이런식으로 데이터를 구성할 예정
      },
      female: {}
  }

  function ajaxDone(responseData) {
      if(responseData && responseData.results) { // &&를 쓰는 이유: falsy 한 값을 찾기위함
          console.log(responseData);
          var userData = responseData.results;
          var userLength = userData.length;

          for(var i = 0; i < userLength; i++) {
              var gender = userData[i].gender || 'female'; // gender가 없을 시 default로 female
              var name = userData[i].name.first || 'sharry';
              var picture = userData[i].picture.large || '';

              resultData[gender][name] = picture;
          }
          console.log(resultData);
          removeClass(elemGenderSelect, 'disable')
          selectBox(elemGenderSelect)
      } else {
          throw new Error('error! responseData is noe exist.');
      }
  }


})()
