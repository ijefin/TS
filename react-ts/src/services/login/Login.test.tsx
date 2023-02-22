import { Login } from "./Login";

describe("Login", () => {
  const mockAlert = jest.fn();
  globalThis.alert = mockAlert;
  const email = "Jefferson Gomes!";
  it("Should find an alert pop up that shows 'Bem vindo' with email", () => {
    Login(email);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${email}!`);
  });

  it("Should not show an alert pop up without email", () => {
    Login(email);
    expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo!");
  });
});
