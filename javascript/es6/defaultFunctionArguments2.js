(function(){
  "use strict";

  function User(id) {
    this.id = id;
  }

  function generateId() {
    return Math.random() * 9999999;
  }

  // 기존
  // function createAdminUser(user) {
  //   user.admin = true;
  //
  //   return user;
  // }
  //
  // createAdminUser(new User(generateId()));

  // ES6: Default Function Arguments
  function createAdminUser(user = new User(generateId())) {
    user.admin = true;

    return user;
  }

  createAdminUser();


})();
