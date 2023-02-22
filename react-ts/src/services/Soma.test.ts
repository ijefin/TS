import { soma } from "./Soma";
describe("soma", () => {
  it("Should add 1 to given number", () => {
    const value = soma(5);
    expect(value).toBe(6);
  });
});
