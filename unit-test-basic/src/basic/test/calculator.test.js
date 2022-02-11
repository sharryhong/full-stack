const { before } = require("lodash");
const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("set", () => {
    cal.set(5);
    expect(cal.value).toBe(5);
  });

  it("clear", () => {
    cal.set(5);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(7);
    cal.add(8);
    expect(cal.value).toBe(15);
  });

  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("subtract", () => {
    cal.set(5);
    cal.subtract(3);
    expect(cal.value).toBe(2);
  });

  it("multiply", () => {
    cal.set(2);
    cal.multiply(11);
    expect(cal.value).toBe(22);
  });

  // divide는 조금 까다로워서 describe 그룹으로 묶어서 여러 테스트를 한다.
  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("3 / 3 === 3", () => {
      cal.set(3);
      cal.divide(3);
      expect(cal.value).toBe(1);
    });
  });
});
