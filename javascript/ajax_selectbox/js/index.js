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

  function removeEventListenerLists(elems, type, fn) {
    for (var i = 0, len = elems.length; i < len; i++) {
      elems[i].removeEventListener(type, fn, false);
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
  function selectBox(context, callback) {

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

      function btnClickHandler(e) {
          if (isOpen) { // 열렸으면
              closeLayer();
          } else {
              openLayer();
          }
      }

      function elemItemsClickHandler(e) {
          e.preventDefault();
          elemText.innerText = this.innerText;

          // 클릭 후 후속 행동
          callback(this.innerText);

          closeLayer();
      }

      function docClickHandler(e) {
          e.preventDefault();
          if (context.contains(e.target)) {
              return;
          }
          closeLayer();
      }

      elemBtnSelect.addEventListener('click', btnClickHandler, false)
      // removeEventListener를 해줘야 하는데, btnClickHandler를 넘겨줘야한다. 얼케해야하나?

      // layer items클릭시
      addEventListenerLists(elemItems, 'click', elemItemsClickHandler)

      // 다른쪽 클릭시 닫힘.
      document.addEventListener('click', docClickHandler, false)

      // 이벤트 해지와 setting된 value값을 찾기 위해
      return{
          // 1. 이벤트 해지
          unbind: function() {
              elemBtnSelect.removeEventListener('click', btnClickHandler, false)
              removeEventListenerLists(elemItems, 'click', elemItemsClickHandler)
              document.removeEventListener('click', docClickHandler, false)
          },
          // 2. change된 value를 get. 실제 dom에 들어간 값
          getChangeValue: function() {
              return elemText.innerText;
          }
      }
  }

  // 기준 id값 context필요
  var elemGenderSelect = document.getElementById('genderSelect')
  var elemNameSelect = document.getElementById('nameSelect')

  var elemNameSelectUl = elemNameSelect.querySelector('ul')
  var elemResultImg = document.getElementById('resultImg')

  // selectBox(elemGenderSelect)
  // selectBox(elemNameSelect)

  var nameSelect;
  var genderSelect;

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
          genderSelect = selectBox(elemGenderSelect, genderSelectDone)
      } else {
          throw new Error('error! responseData is noe exist.');
      }
  }


  function genderSelectDone(value) {
      // nameSelect에 대해 init시켜줘야한다.
      addClass(elemNameSelect, 'disable')
      nameSelectInit();

      if(resultData[value]) { // resultData애 쿨락한 값이 있으면.. 즉 male, female일때만
          // dom은 리페인트 등 하면 성능에 안좋다. li를 한번에 만들어서 넘기는게 가장 좋다.
          // 배열을 만들어 li를 모두 push한다.
          var nameListItem = [];
          for(name in resultData[value]) { // for in문. 앞의 변수에 key값이 담긴다.
              var itemTag = '<li>' + name + '</li>';
              nameListItem.push(itemTag);
          }
          elemNameSelectUl.innerHTML = nameListItem.join('');
          removeClass(elemNameSelect, 'disable')
          nameSelect = selectBox(elemNameSelect, nameSelectDone)
      }
  }

  function nameSelectDone() {
      // 이미지를 가져오자
      if(genderSelect && nameSelect) {
          var genderValue = genderSelect.getChangeValue();
          var nameValue = nameSelect.getChangeValue();

          var url = resultData[genderValue][nameValue];
          console.log(url);

          elemResultImg.innerHTML = '<img src="' + url + '"/>'
      }
  }

  function nameSelectInit() {
      if(nameSelect) {
          elemNameSelect.querySelector('.txt_select').innerText = 'Name'
          nameSelect.unbind(); // 이벤트 해지
      }
  }

})()
