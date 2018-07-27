// Generics Simples
function eco(dados: any) {
    return dados;
}

console.log(eco("Max"));
console.log(eco(27));
console.log(eco({nome: "Max", idade: 27}));

// Reescrevendo em uma melhor forma Generica
function melhorEco<T>(dados: T) {
    return dados;
}
console.log(melhorEco("Max").length);
console.log(melhorEco<number>(27));

// Genericos embutidos - Array
const resultadosTeste: Array<number> = [1.94, 2.33];
resultadosTeste.push(-2.99); // OK
// resultadosTeste.push("27");   // não ok
console.log(resultadosTeste);

function imprimeTudo<T>(args: T[]) {
    args.forEach((elemento) => console.log(elemento));
}
imprimeTudo<string>(["Maça", "Banana"]);

// Tipos Genéricos
// tudo que está entre : e == é um tipo
// o tipo é uma função com dados do tipo T que retorna algo do tipo T
const eco2: <T>(dados: T) => T = melhorEco;
console.log(eco2<string>("Algo"));

// Classes Genéricas
class MatematicaSimples<T extends number | string> {
    valorBase: T;
    valorMultiplicacao: T;
    calcular() : number {
        // + cast para number
        return +this.valorBase * +this.valorMultiplicacao;
    }
}

const matSimples = new MatematicaSimples<number>();
matSimples.valorBase = 10;
matSimples.valorMultiplicacao = 20;
console.log(matSimples.calcular());

// Usando dois tipos
class MatematicaSimples2<T extends number | string, U extends number | string> {
    valorBase: T;
    valorMultiplicacao: U;
    calcular() : number {
        // + cast para number
        return +this.valorBase * +this.valorMultiplicacao;
    }
}

const matSimples2 = new MatematicaSimples2<string, number>();
matSimples2.valorBase = "10";
matSimples2.valorMultiplicacao = 20;
console.log(matSimples2.calcular());
