(function(){
  "use strict";

  // 기존. Array type
  // function addNumbers(numbers) {
  //   return numbers.reduce((sum, number) => {
  //     return sum + number;
  //   }, 0);
  // }

  // addNumbers([1,2,3,4,5]); // 15

  // 기존.
  function addNumbers(a, b, c, d, e) {
    const numbers = [a, b, c, d, e];
    return numbers.reduce((sum, number) => {
      return sum + number;
    }, 0);
  }

  addNumbers(1,2,3,4,5); // 늘어날때는?

  // ES6. Rest Operator 리펙토링
  function addNumbers(...numbers) { // Rest Operator
    return numbers.reduce((sum, number) => {
      return sum + number;
    }, 0);
  }

  addNumbers(1,2,3,4,5,6,7,8,9,10);

})();
