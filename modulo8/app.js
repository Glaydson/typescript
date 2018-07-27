// Generics Simples
function eco(dados) {
    return dados;
}
console.log(eco("Max"));
console.log(eco(27));
console.log(eco({ nome: "Max", idade: 27 }));
// Reescrevendo em uma melhor forma Generica
function melhorEco(dados) {
    return dados;
}
console.log(melhorEco("Max").length);
console.log(melhorEco(27));
// Genericos embutidos - Array
var resultadosTeste = [1.94, 2.33];
resultadosTeste.push(-2.99); // OK
// resultadosTeste.push("27");   // não ok
console.log(resultadosTeste);
function imprimeTudo(args) {
    args.forEach(function (elemento) { return console.log(elemento); });
}
imprimeTudo(["Maça", "Banana"]);
// Tipos Genéricos
// tudo que está entre : e == é um tipo
// o tipo é uma função com dados do tipo T que retorna algo do tipo T
var eco2 = melhorEco;
console.log(eco2("Algo"));
// Classes Genéricas
var MatematicaSimples = /** @class */ (function () {
    function MatematicaSimples() {
    }
    MatematicaSimples.prototype.calcular = function () {
        // + cast para number
        return +this.valorBase * +this.valorMultiplicacao;
    };
    return MatematicaSimples;
}());
var matSimples = new MatematicaSimples();
matSimples.valorBase = 10;
matSimples.valorMultiplicacao = 20;
console.log(matSimples.calcular());
// Usando dois tipos
var MatematicaSimples2 = /** @class */ (function () {
    function MatematicaSimples2() {
    }
    MatematicaSimples2.prototype.calcular = function () {
        // + cast para number
        return +this.valorBase * +this.valorMultiplicacao;
    };
    return MatematicaSimples2;
}());
var matSimples2 = new MatematicaSimples2();
matSimples2.valorBase = "10";
matSimples2.valorMultiplicacao = 20;
console.log(matSimples2.calcular());
