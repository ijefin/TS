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

const teste: Array<Pessoa> = [pessoa, outraPessoa];

const nome = teste.map((item) => console.log(item.nome));
