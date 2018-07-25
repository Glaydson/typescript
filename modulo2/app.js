var myName = "Glaydson";
// myName = 28;
var numero = 40;
//numero = "Mel";
var temHobbies = true;
var minhaIdade;
minhaIdade = 50;
// minhaIdade = 'Edson';
var hobbies = ['Futebol', 'Voleibol'];
hobbies = [100];
//hobbies = 100;
// tuplas
var endereco = ["Rua Alemanha", 767];
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Verde"] = 102] = "Verde"; // 102 
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
var carro = "BMW";
console.log(carro);
carro = { marca: "BMW", valor: 1000 };
console.log(carro);
// functions and types
function retornaMeuNome() {
    return myName;
}
console.log(retornaMeuNome());
function digaAlo() {
    console.log("Hello");
}
console.log(digaAlo());
function multiplica(valor1, valor2) {
    return valor1 * valor2;
}
console.log(multiplica(10, 20));
// funções como tipos
var minhaMultiplicacao;
//minhaMultiplicacao = digaAlo;
//minhaMultiplicacao();
minhaMultiplicacao = multiplica;
console.log(minhaMultiplicacao(5, 2));
// objetos
var dadosUsuario = {
    nome: "Max",
    idade: 27
};
// dadosUsuario = {}  
/* dadosUsuario = {
    a: "Hello",
    b: 22
}; */
// objeto complexo
var complexo = {
    dados: [100, 3.99, 10],
    saida: function (all) {
        return this.dados;
    }
};
var complexo2 = {
    dados: [100, 3.99, 10],
    saida: function (all) {
        return this.dados;
    }
};
// tipos union
var minhaIdadeReal = 27;
minhaIdadeReal = "27";
//minhaIdadeReal = true;
// checando tipos
var valorFinal = "Uma string";
if (typeof valorFinal == "number") {
    console.log("O tipo é numérico");
}
// tipo never
function neverReturns() {
    throw new Error("An error");
}
// tipos nullable
var podeSerNulo = 12;
podeSerNulo = null;
var podeTambemSerNulo; // Inicialmente any
podeTambemSerNulo = null;
var podeSerAny = null;
podeSerAny = 12;
// app final
