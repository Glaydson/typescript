class Pessoa {
    nome: string;
    private tipo: string;
    protected idade: number = 27;

    constructor(nome: string, public usuario: string) {
        this.nome = nome;
    }

    imprimeIdade() {
        console.log(this.idade);
    }

    setTipo(tipo: string) {
        this.tipo = tipo;
        console.log(this.tipo);
    }
}

const pessoa = new Pessoa("Max", "max");
console.log(pessoa);

pessoa.imprimeIdade();
pessoa.setTipo("Legal");

// Herança
class Glaydson extends Pessoa {
    //nome = "Glaydson";

    constructor(usuario: string) {
        super("Glaydson", usuario);
        this.idade = 31;
        // this.tipo = "Cool";
    }
}
const glaydson = new Glaydson("glaydson");
console.log(glaydson);

// Getters and Setters
class Planta {
    private _especies: string = "Padrão";

    get especies(): string {
        return this._especies;
    }

    set especies(valor: string) {
        if (valor.length > 3) {
            this._especies = valor;
        } else {
            this._especies = "Padrão";
        }
    }
}

let planta = new Planta();
console.log(planta.especies);
planta.especies = "ABCD";
console.log(planta.especies);

// Propriedades e Métodos estáticos
class Helpers {
    static PI: number = 3.141592;

    static calcCircunferencia(diametro: number): number {
        return this.PI * diametro;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircunferencia(8));

// Classes Abstratas
abstract class Projeto {
    nome: string = "Padrão";
    orcamento: number = 1000;

    abstract mudaNome(nome: string) : void;

    calculaOrcamento() {
        return this.orcamento * 2;
    }
}

class ProjetoIT extends Projeto {
    mudaNome(nome: string): void {
        this.nome = nome;
    }
}

let novoProjeto = new ProjetoIT();
console.log(novoProjeto);
novoProjeto.mudaNome("Projeto IT");
console.log(novoProjeto);

// Construtores privados
class SomenteUma {
    private static instancia: SomenteUma;
    public readonly nome: string;

    private constructor(nome: string) {
        this.nome = nome;
    }

    static getInstancia() {
        if (!SomenteUma.instancia) {
            SomenteUma.instancia = new SomenteUma("A Única");
        }
        return SomenteUma.instancia;
    }
}
//let errado = new SomenteUma("A Única");
let certo = SomenteUma.getInstancia();
console.log(certo.nome);
// certo.nome = "Outro nome";
