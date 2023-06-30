
export class Aluno{
    //Atributo Privado
    //Quando tem o atributo _ é um Atributo Privado
    //Para inserir ou consultar um atributo privado é necessario encapsular
    _cpf
    constructor(n1, n2){
        this.nome = n1;
        this.sobreNome = n2;
    }

    //para encapsular usa basicamente o set e get
    //Para atribuir um valor a um atributo privado ultilizamos o metodo set
    set inseriCpf(cpf){
        this._cpf = cpf;
    }
    //Para visualizar um artibuto privado utilizo o get
    get inseriCpf(){
        return this._cpf;
    }

        //Nossos metodos (Comuns)
        falarNome(){
            return this.nome;

        }
}