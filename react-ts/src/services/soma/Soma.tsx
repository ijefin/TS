export const soma = (a: number) => {
  return a + 1;
};

export const multiplica = (valor: number, mult: number): number | string => {
  if (mult === 2 || mult === 3) {
    return valor * mult;
  }

  return `Multiplicador não aceito!`;
};
