abstract class Conta {
  usuario: string;
  numero: number;
  saldo: number;

  constructor(usuario: string, numero: number, saldo: number) {
    (this.usuario = usuario), (this.numero = numero), (this.saldo = saldo);
  }

  depositar = (valor: number) => {
    console.log(`Você depositou ${valor}`);
  };

  transferir = (valor: number, conta: number) => {
    valor;
    console.log(`Você transferiu ${valor}`);
  };

  sacar = (valor: number) => {
    console.log(`Você sacou ${valor}`);
  };
}

class contaFisica extends Conta {
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

const contaFisica1: contaFisica = new contaFisica(1, "Jeff", 2032, 2000);
console.log(contaFisica1);
