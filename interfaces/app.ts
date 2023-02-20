interface Pessoa {
    nome: string,
    idade: number,
    cpf?: string,
    profissao?: string
}


const pessoa: Pessoa = {
    nome: "Jefferson",
    idade: 23,
    cpf: "179.437.907-07",
    profissao: "Developer"
}
