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
