import { contabilidade } from "./empresa.js";

 const funcionario = new contabilidade( 1750, 10, 20)

 
 console.log("O salário do funcionário é: " + "R$:" + funcionario.exibirSalario());
 console.log("A meta do funcionário é: " + funcionario.exibirMeta());
 console.log("A quantidade de trabalhos que o funcionário fez foi: " + funcionario.exibirTrabalho());
 console.log("Salário do Funcionário depois do aumento é: " + funcionario.calcularResultado());
 
