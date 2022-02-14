class UserClient {
  login(id, password) {
    return fetch("http://ex.com/login/id+pw").then((response) =>
      response.json()
    );
  }
}

module.exports = UserClient;
