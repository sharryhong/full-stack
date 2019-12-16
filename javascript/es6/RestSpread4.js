(function(){
  "use strict";

  // 라이브러리 내에 있는 메소드 이름을 바꾸고 싶다. calculateProduct -> multiply
  const MathLibrary = {
    calculateProduct(a, b) {
      return a * b;
    },
    multiply(a, b) {
      return a * b;
    }
  }

})();
