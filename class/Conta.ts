export abstract class Conta {
  private usuario: string;
  numero: number;
  saldo: number = 0;
  status: boolean = true;

  constructor(usuario: string, numero: number) {
    (this.usuario = usuario), (this.numero = numero);
  }

  depositar = (valor: number): void => {
    if (this.validateStatus()) {
      console.log(`Você depositou ${valor}`);
    }
  };

  transferir = (valor: number, conta: number): void => {
    valor;
    console.log(`Você transferiu ${valor} para ${conta}`);
  };

  sacar = (valor: number): void => {
    console.log(`Você sacou ${valor}`);
  };

  getUsuario = (): string => {
    return this.usuario;
  };

  setUsuario = (novoNome: string): string => {
    this.usuario = novoNome;
    return novoNome;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("A conta está inativa!");
  };
}
