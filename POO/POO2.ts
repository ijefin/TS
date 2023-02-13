import { ContaFisica } from "../class/ContaFisica";
import { ContaJuridica } from "../class/ContaJuridica";

const pessoa1: ContaFisica = new ContaFisica(1, "Jefferson L Gomes", 2032);
pessoa1.depositar(2000);
console.log(pessoa1);
pessoa1.setUsuario("Carlos");
console.log(pessoa1.validateStatus());
