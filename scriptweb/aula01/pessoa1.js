
class Pessoa{
    //Atributos
    nome;
    idade;

    //metodos - realizar uma acao

    falaNome(){
        // usando metodo return
        return this.nome;
    }

    falaIdade(){
        return this.idade;
    }
}

//instanciar classe

const aluno = new Pessoa();
aluno.nome = "Fellipe";
aluno.idade = "21";

aluno.falaNome();
aluno.falaIdade();

console.log("nome: " + aluno.falaNome());
console.log("idade: " + aluno.falaIdade());


