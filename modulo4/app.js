// let e const
console.log("LET & CONST");
var variavel = "Test";
variavel = "Outra variável";
console.log(variavel);
// Escopo de bloco
function reset() {
    // console.log(variavel);   // variável não definida
    var variavel = null;
    console.log(variavel); // null
}
reset();
console.log(variavel); // outra variável
// Arrow Functions
console.log("ARROW FUNCTIONS");
// Função tradicional
var adicionaNumeros = function (numero1, numero2) {
    return numero1 + numero2;
};
console.log(adicionaNumeros(10, 3));
var multiplicaNumeros = function (numero1, numero2) { return numero1 * numero2; };
console.log(multiplicaNumeros(10, 3));
var saudacao = function () { return console.log("Hello"); };
saudacao();
var saudacaoAmigo = function (amigo) { return console.log(amigo); };
saudacaoAmigo("Manuela");
// Parâmetros default
console.log("PARÂMETROS DEFAULT");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countdown(20);
countdown();
// Operadores Rest & Spread
console.log("REST e SPREAD");
var numeros = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max.apply(Math, numeros));
function makeArray(arg1, arg2) {
    return [arg1, arg2];
}
console.log(makeArray(1, 2));
function makeArrayRest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArrayRest(1, 2, 6, 8));
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["Cozinhar", "Esportes"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var usuario = { nome: "Max", idad: 27 };
var nome = usuario.nome, idad = usuario.idad;
console.log(nome, idad);
// usando alias
var meuNome = usuario.nome, minhaIdad = usuario.idad;
console.log(meuNome, minhaIdad);
//Template literals
var userName = "Max";
var greeting = "Isto \u00E9 um cabe\u00E7alho!\nEu sou " + userName + ",\nThis is cool!";
console.log(greeting);
