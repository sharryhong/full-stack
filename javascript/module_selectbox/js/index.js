(function (UI) {
  var _ = UI.utils;
  var elmNameSelect = document.getElementById('nameSelect');
  var elmGenderSelect = document.getElementById('genderSelect');
  var elmResultImg = document.getElementById('resultImg');
  var resultData = {
    male: {},
    female: {}
  };
  var REQUEST_URL = 'https://randomuser.me/api/?results=10';

  var nameSelectBox = new UI.SelectBox({
    context: elmNameSelect,
    default: 'Name',
    isDisalbe: true
  })

  var genderSelectBox = new UI.SelectBox({
    context: elmGenderSelect,
    default: 'Gender',
    isDisalbe: true
    // 여기에 callback함수를 넣으면 테스트가 어렵다. 
  })

  var app = (function app(genderSelector, nameSelector) {
    return { // 싱글톤객체로 리턴
      ajaxDone: function (responseData) {
        if (responseData && responseData.results) {
          var userData = responseData.results;
          var userLength = userData.length;

          for (var i = 0; i < userLength; i++) {
            var data = userData[i]; // 캐싱처리 => 시간단축.
            var gender = data.gender || 'male';
            var name = data.name.first || 'merlin';
            var picture = data.picture.large || '';


            resultData[gender][name] = picture
          }
          console.log(resultData)
          genderSelector.active();

        } else {
          throw new Error("no response user Data")
        }
      },
      genderSelectDone: function (value) {
        nameSelector.inActive();
        elmResultImg.innerHTML = '';
        if (resultData[value]) {
          var nameLists = [];
          for (var name in resultData[value]) {
            nameLists.push(name)
          }
          nameSelector.renderItemLists(nameLists)
          nameSelector.active();
        }
      },
      nameSelectDone: function (value) {
        var genderValue = genderSelector.getSelectedItem();
        if (resultData[genderValue]) {
          // alt 값을 모르고 생략
          var imageTag = '<img src="' + resultData[genderValue][value] + '" alt="">';

          elmResultImg.innerHTML = imageTag
        }
      }
    }
  })(genderSelectBox, nameSelectBox);

  genderSelectBox.registerItemClickCallback(app.genderSelectDone);
  nameSelectBox.registerItemClickCallback(app.nameSelectDone);
  // ajax로 데이터 받아오기.
  _.ajax('GET', REQUEST_URL, null, app.ajaxDone);

})(window.UI = window.UI || {})
