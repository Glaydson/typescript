let myName = `Glaydson`;
// myName = 28;

let numero = 40;
//numero = "Mel";

let temHobbies = true;

let minhaIdade: number;
minhaIdade = 50;
// minhaIdade = 'Edson';

let hobbies: any[] = ['Futebol', 'Voleibol'];
hobbies = [100];
//hobbies = 100;

// tuplas
let endereco: [string, number] = ["Rua Alemanha", 767];

enum Cor {
    Vermelho,  // 0
    Amarelo,  // 1
    Azul = 101,   //101
    Verde   // 102 
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", valor: 1000};
console.log(carro);

// functions and types
function retornaMeuNome() : string {
    return myName;
}
console.log(retornaMeuNome());

function digaAlo() : void {
    console.log("Hello");
}
console.log(digaAlo());

function multiplica(valor1: number, valor2: number) : number {
    return valor1 * valor2;
}
console.log(multiplica(10, 20));

// funções como tipos
let minhaMultiplicacao: (valor1: number, valor2: number) => number;
//minhaMultiplicacao = digaAlo;
//minhaMultiplicacao();
minhaMultiplicacao = multiplica;
console.log(minhaMultiplicacao(5,2));

// objetos
let dadosUsuario: {nome: string, idade: number } = {
    nome: "Max",
    idade: 27
};
// dadosUsuario = {}  
/* dadosUsuario = {
    a: "Hello",
    b: 22
}; */

// objeto complexo
let complexo: { dados: number[], saida: (all: boolean) => number[] } = {
    dados: [100, 3.99, 10],
    saida: function(all: boolean): number[] {
        return this.dados;
    }
};
//complexo = {};

// type alias
type Complexo=  { dados: number[], saida: (all: boolean) => number[] };
let complexo2 : Complexo = {
    dados: [100, 3.99, 10],
    saida: function(all: boolean): number[] {
        return this.dados;
    }
}

// tipos union
let minhaIdadeReal: number | string = 27;
minhaIdadeReal = "27";
//minhaIdadeReal = true;

// checando tipos
let valorFinal = "Uma string";
if (typeof valorFinal == "number") {
    console.log("O tipo é numérico");
}

// tipo never
function neverReturns(): never {
    throw new Error("An error");
}

// tipos nullable
let podeSerNulo: number | null = 12;
podeSerNulo = null;
let podeTambemSerNulo;   // Inicialmente any
podeTambemSerNulo = null;
let podeSerAny: number | null = null;
podeSerAny = 12;

// app final









