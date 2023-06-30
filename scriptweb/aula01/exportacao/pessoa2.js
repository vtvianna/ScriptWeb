export class PessoaDois {

    //Metodo construtor METODO PADRAO DE TODA CLASSE
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }
    //metodos - realizar uma acao

    falaNome() {
        // usando metodo return
        return this.nome;
    }

    falaIdade() {
        return this.idade;
    }
}


