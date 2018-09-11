// 셀렉트박스의 코어는? 전체 값을 가지고 있고, 값을 선택한다.
(function(UI){
    'use strict';

    UI.core = UI.core || {};

    // 데이터만 생각한다.
    function SelectBox(defaultValue) {  // 상태들
        this.defaultSelectValue = defaultValue || ''; // gender, name등 defaultValue가 있을땐 defaultValue, 없을 땐 ''
        this.selectedValue = this.defaultSelectValue; // 처음에 아무것도 선택안했을때

        this.callBackFn = function(){} // 값이 치환된 뒤 후속조치
    }

    SelectBox.prototype = {  // 기능, 행위
        setSelectValue: function(value) { // 자기가 자기 값을 바꿈
            this.selectedValue = value;
            this.callBackFn(this.selectedValue);  // 값이 치환된 뒤 후속조치
        },
        setDefaultValue: function() {
            this.selectedValue = this.defaultSelectValue;
            this.callBackFn(this.selectedValue);
        },
        getSelectedValue: function() {
            return this.selectedValue;
        },
        onCallback: function(fn) {
            // 함수인지 확인
            if(typeof fn === 'function') {
                this.callBackFn = fn;
            }
        }
    }

    UI.core.SelectBox = SelectBox;  // 전역에서 UI.core.SelectBox로 접근가능

})(window.UI = window.UI || {});

// 최상위객체 window에 UI라는 네임스페이스
// 전역으로 쓰기위함
