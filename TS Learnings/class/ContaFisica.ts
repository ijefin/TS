import { Conta } from "./Conta";

export class ContaFisica extends Conta {
  identidade: number;
  constructor(identidade: number, usuario: string, numero: number) {
    super(usuario, numero);
    this.identidade = identidade;
  }


}
