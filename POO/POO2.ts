class Conta {
  nome: string;
  numero: number;

  constructor(nome: string, numero: number) {
    this.nome = nome;
    this.numero = numero;
  }

  depositar = (valor: number) => {
    console.log(`Você depositou: ${valor}`);
  };
}

const newAccount: Conta = new Conta("Jefferson Lucas Gomes", 50812);

console.log(newAccount.nome, newAccount.numero);
