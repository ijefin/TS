import { ContaFisica } from "../class/ContaFisica";
import { ContaJuridica } from "../class/ContaJuridica";

const pessoa1: ContaFisica = new ContaFisica(1, "Jefferson L Gomes", 2032);
pessoa1.depositar(2000);

const empresa1: ContaJuridica = new ContaJuridica("DIO", 2210);
empresa1.depositar()
console.log(empresa1)
