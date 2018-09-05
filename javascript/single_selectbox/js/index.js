(function(){
    'use strict';

    // dom을 먼저 잡아주자
    var elemBtnSelect = document.querySelector('.btn_select') // querySelector: ie8지원
    var elemLayerSelect = document.querySelector('.layer_select')
    var elemItem = elemLayerSelect.querySelectorAll('li')
    var elemText = elemBtnSelect.querySelector('.txt_select')
        // querySelectorAll: return NodeList. non-live객체
        // nodelist중 live객체 : childNodes
    var isOpen = false; // 트리거 변수

    function addClass(elem, className){ // 인자로 엘리먼트, 클래스명 받음
        var classes = elem.className.split(' ');
        var index = classes.indexOf(className);
        if(index < 0){ // 원하는 클래스명이 없으면
            classes.push(className);
        }
        elem.className = classes.join(' ')
    }

    function removeClass(elem, className){
        // console.log(elem.className); // 엘리먼트.className: 클래스를 문자열로 받아온다.
        var classes = elem.className.split(' '); // 클래스명을 빈문자열기준으로 나눠 배열로 리턴
        var index = classes.indexOf(className);
        if(index >= 0){ // 원하는 클래스명이 있으면
            classes.splice(index, 1); // 어떤걸 지우는가 리턴함
        }
        elem.className = classes.join(' ') // 배열을 문자열로 바꾸자. split이랑 반대개념
    }

    elemBtnSelect.addEventListener('click', function(e){
        // classList가 좋으나 ie10부터 된다.
        // 따라서 addClass, removeClass 기능가진 함수를 만들자.
        if(!isOpen) { // 열리게 
            removeClass(elemLayerSelect, 'hide');
            isOpen = true
        } else { // 닫히게
            addClass(elemLayerSelect, 'hide');
            isOpen = false
        }
    }, false) // false: 이벤트캡쳐링 안한다.

    // elemItem 유사배열
    for(var i = 0, len = elemItem.length; i < len; i++){
        elemItem[i].addEventListener('click', function(){
            // elemItem[i]는 마지막것만 접근된다. this로 접근해야한다.
            elemText.innerText = this.innerText
            addClass(elemLayerSelect, 'hide');
            isOpen = false
        }, false)
    }
})()
