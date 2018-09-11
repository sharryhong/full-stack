(function(){
    'use strict';

    var selectAge = document.getElementById('selectAge')
    var selectFood = document.getElementById('selectFood')

    function addClass(elem, className){
        var classes = elem.className.split(' ');
        var index = classes.indexOf(className);
        if(index < 0){
            classes.push(className);
        }
        elem.className = classes.join(' ')
    }

    function removeClass(elem, className){
        var classes = elem.className.split(' ');
        var index = classes.indexOf(className);
        if(index >= 0){
            classes.splice(index, 1);
        }
        elem.className = classes.join(' ')
    }

    function addEventListenerLists(elems, type, fn){
        for(var i = 0, len = elems.length; i < len; i++){
            elems[i].addEventListener(type, fn, false)
        }
    }

    function selectBox(el) {
        var elemBtnSelect = el.querySelector('.btn_select')
        var elemLayerSelect = el.querySelector('.layer_select')
        var elemItems = elemLayerSelect.querySelectorAll('li')
        var elemText = elemBtnSelect.querySelector('.txt_select')
        var isOpen = false;

        function closeLayer(){
            addClass(elemLayerSelect, 'hide');
            removeClass(elemBtnSelect, 'open_select')
            isOpen = false
        }

        function btnClickDone(e) {
            if(isOpen) {
                closeLayer()
            } else {
                openLayer()
            }
        }

        function openLayer(){
            removeClass(elemLayerSelect, 'hide');
            addClass(elemBtnSelect, 'open_select')
            isOpen = true
        }

        elemBtnSelect.addEventListener('click', btnClickDone, false)

        addEventListenerLists(elemItems, 'click', function(){
            elemText.innerText = this.innerText
            closeLayer()
        })

        document.addEventListener('click', function(e){
            e.preventDefault();
            if(el.contains(e.target)) return;
            closeLayer()
        }, false)
    }

    selectBox(selectAge)
    selectBox(selectFood)


})()
