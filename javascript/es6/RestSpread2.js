(function(){
  "use strict";

  const defaultColors = ['red', 'green'];
  const userFavoriteColors = ['orange', 'yellow'];

  // defaultColors.concat(userFavoriteColors); // ["red", "green", "orange", "yellow"]

  // ES6. Spread Operator
  [ 'blue', ...defaultColors, ...userFavoriteColors ]; // ["blue", "red", "green", "orange", "yellow"]

})();
