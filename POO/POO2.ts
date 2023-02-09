class Conta {
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

const usuario1: Conta = new Conta("Jefferson Gomes", 50812, 500);
console.log(usuario1);

const usuario2: Conta = new Conta("Anna Luiza Gomes", 50813, 200);
console.log(usuario2);
