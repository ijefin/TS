class ContaFisica extends Conta {
  identidade: number;
  constructor(
    identidade: number,
    usuario: string,
    numero: number,
    saldo: number
  ) {
    super(usuario, numero, saldo);
    this.identidade = identidade;
  }
}
