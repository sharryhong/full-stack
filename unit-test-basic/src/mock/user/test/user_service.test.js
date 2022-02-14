const UserService = require("../user_service.js");
const UserClient = require("../user_client.js");

jest.mock("../user_client.js");

describe("UserService", () => {
  const login = jest.fn(async () => {
    "success";
  });

  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it("login", async () => {
    await userService.login("hong", "pw");
    expect(login.mock.calls.length).toBe(1);
  });

  it("if already loggin in, should not call login", async () => {
    await userService.login("hong", "pw");
    await userService.login("hong", "pw");
    expect(login.mock.calls.length).toBe(1);
  });
});
