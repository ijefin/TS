import { soma } from "./Soma";

describe("soma", () => {
  it("deve adicionar 1 ao valor dado", () => {
    const value = soma(5);
    expect(value).toBe(6);
  });
});
