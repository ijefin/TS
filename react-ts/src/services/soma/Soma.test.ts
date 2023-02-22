import { multiplica, soma } from "./Soma";
describe("soma", () => {
  it("Should add 1 to given number", () => {
    const value = soma(5);
    expect(value).toBe(6);
  });
});

describe("multiplica", () => {
  it("Should multiply a given number for 2", () => {
    const value = multiplica(5, 2);
    expect(value).toBe(10);
  });
});

describe("multiplica", () => {
  it("Should multiply a given number for 3", () => {
    const value = multiplica(5, 3);
    expect(value).toBe(15);
  });
});

describe("multiplica", () => {
  it("should show an error that says the multiplier is invalid", () => {
    const value = multiplica(5, 5);
    expect(value).toBe("Multiplicador não aceito!");
  });
});
