const check = require("../check.js");

describe("check", () => {
  let onSuccess;
  let onFail;

  // beforeEach 사용해서 각 함수 초기화
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("shold call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // onSuccess mock 함수가 1번 호출된다.
    expect(onSuccess.mock.calls.length).toBe(1);
    // 첫번째 호출함수에 첫번째 인자는 yes이다.
    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    // onFail은 호출되면 안된다.
    expect(onFail.mock.calls.length).toBe(0);
    // => 이것들 직관적이지 않다.

    // 직관적 : onSuccess mock 함수가 1번 호출된다.
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // 직관적 : yes로 호출되어야 한다.
    expect(onSuccess).toHaveBeenCalledWith("yes");
    // 직관적 : onFail은 호출되면 안된다.
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("shold call onFail when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
  });
});
