import { Login } from "./Login";

describe("Login", () => {
  const mockAlert = jest.fn();
  globalThis.alert = mockAlert;
  it("Should find an alert pop up that shows 'Bem vindo'", () => {
    Login();
    expect(mockAlert).toHaveBeenCalledWith("Bem vindo!");
  });
});
