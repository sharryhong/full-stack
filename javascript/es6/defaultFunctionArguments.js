(function(){
  "use strict";

  // 기존
  // function makeAjaxRequest(url, method) {
  //   if (!method) {
  //     method = 'GET';
  //   }
  // }

  // ES6: Default Function Arguments
  function makeAjaxRequest(url, method = 'GET') {
    return method;
  }

  makeAjaxRequest('google.com');  // default method = 'GET'
  makeAjaxRequest('google.com', 'POST');

})();
