const fetchProduct = require("../async.js");

describe("Async", () => {
  // 방법 1. done을 받아서 호출하는 방법 (그닥 좋지않아보임)
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 1000 });
      done();
    });
  });

  // 방법 2. done을 호출하지 않고, 프로미스 자체를 리턴하는 방법. 수행이 더 빠름
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 1000 });
    });
  });

  // 방법 3. async await
  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 1000 });
  });

  // 방법 4. resolves, reject api 사용
  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 1000,
    });
  });

  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
