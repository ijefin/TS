class Conta {
  usuario: string;
  numero: number;

  constructor(usuario: string, numero: number) {
    (this.usuario = usuario), (this.numero = numero);
  }

  depositar = (valor: number) => {
    console.log(`Você depositou ${valor}`);
  };
}

class AdminUser extends Conta {
  saldo: number;

  constructor(usuario: string, numero: number) {
    super(usuario, numero);
    this.saldo = 20;
  }

  transferir = (valor: number) => {
    console.log(`Você transferiu ${valor}`);
  };

  sacar = (valor: number) => {
    console.log(`Você sacou ${valor}`);
  };
}

const usuario1: Conta = new Conta("Jefferson Gomes", 50812);
console.log(usuario1);

const newAdmin: AdminUser = new AdminUser("Jefferson Lucas Gomes", 50813);
console.log(newAdmin);
