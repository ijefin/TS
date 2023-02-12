export abstract class Conta {
  usuario: string;
  numero: number;
  saldo: number = 0;

  constructor(usuario: string, numero: number) {
    (this.usuario = usuario), (this.numero = numero);
  }

  depositar = (valor: number): void => {
    console.log(`Você depositou ${valor}`);
  };

  transferir = (valor: number, conta: number): void => {
    valor;
    console.log(`Você transferiu ${valor} para ${conta}`);
  };

  sacar = (valor: number): void => {
    console.log(`Você sacou ${valor}`);
  };
}
