(function(){
  "use strict";
  
  function saveFile(url, data) {
    // $.ajax({ method: 'POST', url: url, data: data }); // ES5
    $.ajax({
      url,
      data,
      method: 'POST',  }); // ES6
  }

  const url = 'http://fileupload.com';
  const data = { color: 'red' };

  saveFile(url, data);

})();
