interface Pessoa {
  nome: string;
  idade: number;
  cpf?: string;
  profissao?: string;
}

const pessoa: Pessoa = {
  nome: "Jefferson",
  idade: 23,
  cpf: "179.437.907-07",
  profissao: "Developer",
};

const outraPessoa: Pessoa = {
  nome: "Casale",
  idade: 15,
};

const arrayDePessoas: Array<Pessoa> = [pessoa, outraPessoa];

const nome = arrayDePessoas.map((item) => console.log(item.nome));

const arrayNum: Array<number> = [1, 2, 3, 4, 5];

const arrayDeString: string[] = ["Jefferson", "Carlos", "Pedro"];
