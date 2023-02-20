class ContaJuridica extends Conta {
  constructor(usuario: string, numero: number) {
    super(usuario, numero);
  }

  getLoan = () => {
    console.log("Emprestimo realizado com sucesso!");
  };
}
