class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogin = false;
  }

  login(id, password) {
    if (!this.isLogin) {
      return this.userClient
        .login(id, password)
        .then((data) => (this.isLogin = true));
    }
  }
}

module.exports = UserService;
