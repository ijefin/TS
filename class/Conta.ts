abstract class Conta {
  usuario: string;
  numero: number;
  saldo: number = 0;

  constructor(usuario: string, numero: number) {
    (this.usuario = usuario), (this.numero = numero);
  }

  depositar = (valor: number) => {
    console.log(`Você depositou ${valor}`);
  };

  transferir = (valor: number, conta: number) => {
    valor;
    console.log(`Você transferiu ${valor} para ${conta}`);
  };

  sacar = (valor: number) => {
    console.log(`Você sacou ${valor}`);
  };
}
