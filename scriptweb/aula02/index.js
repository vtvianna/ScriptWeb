import { Aluno } from "./aluno.js";

const aluno1 = new Aluno("Victor", "Vianna");

/* Podemos acessar atributo comuns de forma direta
aluno1.nome= "Spider";
aluno1.sobreNome= "Man";
*/

/* Forma errada de acessar o atributo privado
aluno1._cpf = 2121121212;*/

//Forma correta de acessar o atributo privado com set
aluno1.inseriCpf = 12354444;


console.log(aluno1.inseriCpf());