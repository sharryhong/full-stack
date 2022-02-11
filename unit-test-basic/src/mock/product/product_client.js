class ProductClient {
  fetchItems() {
    return fetch("http://ex.com/login/id+pw").then((response) =>
      response.json()
    );
  }
}

module.exports = ProductClient;
