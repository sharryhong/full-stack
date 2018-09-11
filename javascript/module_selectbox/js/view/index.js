// 셀렉트박스의 view? 데이터를 제외한 뷰단만 생각해보자.
// 데이터(core) | 뷰(view)를 나눠 생각해보자. => 이렇게 나누면 이점? 다른 곳에서 사용하기 좋다. 유지보수시 좋다.
// 뷰: 이벤트, show, hide

(function(UI){
    'use strict';

    UI.view = UI.view || {};

    function SelectBox(context) {   // context: element

    }

    SelectBox.prototype = {  // 행위
        showLayer: function() { // 로직은 여기에.. 나중에 사용시 var view1 = new SelectBox(tadId); view1.showLayer();

        },
        hideLayer: function() {

        },
        toggleLayer: function() {

        },
        setDisable: function() {

        },
        setEnable: function() {

        },
        setSelectedText: function() {
            
        }
    }

    UI.view.SelectBox = SelectBox;

})(window.UI = window.UI || {});
