// let e const
console.log("LET & CONST");
let variavel = "Test";
variavel = "Outra variável";
console.log(variavel);

// Escopo de bloco
function reset() {
    // console.log(variavel);   // variável não definida
    let variavel = null;
    console.log(variavel);   // null
}
reset();
console.log(variavel);   // outra variável


// Arrow Functions

console.log("ARROW FUNCTIONS");
// Função tradicional
const adicionaNumeros = function (numero1: number, numero2: number): number {
    return numero1 + numero2;
};
console.log(adicionaNumeros(10,3));

const multiplicaNumeros = (numero1: number, numero2: number) => numero1 * numero2;
console.log(multiplicaNumeros(10,3));

const saudacao = () => console.log("Hello");
saudacao();

const saudacaoAmigo = amigo => console.log(amigo);
saudacaoAmigo("Manuela");

// Parâmetros default
console.log("PARÂMETROS DEFAULT");
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
}
countdown(20);
countdown();

// Operadores Rest & Spread
console.log("REST e SPREAD");
const numeros = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numeros));

function makeArray(arg1: number, arg2: number) {
    return [arg1, arg2];
}
console.log(makeArray(1,2));

function makeArrayRest(...args: number[]) {
    return args;
}
console.log(makeArrayRest(1,2,6,8));

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cozinhar", "Esportes"];
const [hobby1, hobby2]  = myHobbies;
console.log(hobby1, hobby2);

const usuario = {nome: "Max", idad: 27};
const {nome, idad} = usuario;
console.log(nome, idad);

// usando alias
const {nome: meuNome, idad: minhaIdad} = usuario;
console.log(meuNome, minhaIdad);

//Template literals
const userName = "Max";
const greeting = `Isto é um cabeçalho!
Eu sou ${userName},
This is cool!`;
console.log(greeting);


