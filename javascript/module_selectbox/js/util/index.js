(function (UI) {
  'use strict';
  UI.utils = UI.utils || {};

  function addClass(elem, className) {
    var classes = elem.className.split(' ');
    if (classes.indexOf(className) < 0) {
      classes.push(className);
      elem.className = classes.join(" ");
    }
  }

  function removeClass(elem, className) {
    var classes = elem.className.split(' ')
    if (classes.indexOf(className) > 0) {
      classes.splice(classes.indexOf(className), 1);
    }
    elem.className = classes.join(' ');
  }


  function ajax(method, url, data, cb) {
    var sendData = data || null
    var req = new XMLHttpRequest()
    req.open(method, url, true);
    req.onreadystatechange = function (aEvt) {
      if (req.readyState === 4) {
        if (req.status === 200) {
          var responseData = JSON.parse(this.responseText);

          cb(responseData)
        } else {

          console.log("Error loading page\n");
        }
      }
    };
    req.send(sendData);
  }

  UI.utils.addClass = addClass;
  UI.utils.removeClass = removeClass;
  UI.utils.ajax = ajax;

})(window.UI = window.UI || {})
