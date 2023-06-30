export class contabilidade{

    _salario
    constructor(salario, meta, trabalho){ 
        this.salario = salario;
        this.meta = meta;
        this.trabalho = trabalho;
    
    }
    
    get exibirResultado(){
        return this._resultado;
    }
    
    
    exibirSalario(){
        return this.salario;
    }
    
    exibirMeta(){
        return this.meta;
    }
    
    exibirTrabalho(){
        return this.trabalho;
    }
    
    calcularResultado(){
        if (this.trabalho >= this.meta )
        return this.salario * 1.1;
        else {
            return "Vc não atingiu a sua meta.";
        }
    }
    
    }
    