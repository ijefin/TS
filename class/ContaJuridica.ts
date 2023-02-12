import { Conta } from "./Conta";

export class ContaJuridica extends Conta {
  constructor(usuario: string, numero: number) {
    super(usuario, numero);
  }

  getLoan = (): void => {
    console.log("Emprestimo realizado com sucesso!");
  };

  depositar = (): void => {
    console.log("A empresa depositou!");
  };
}
