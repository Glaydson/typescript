var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var contaBancaria = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var euMesmo = {
    name: "Max",
    contaBancaria: contaBancaria,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var idade = 35;
// idade = "35";
function meControle(isTrue, algoMais) {
    var resultado;
    if (isTrue) {
        resultado = 12;
    }
    resultado = 33;
    return resultado;
}
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
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) {
    return value * 2;
};
var dobro = function (valor) { return valor * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    return console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, usuario) {
        this.usuario = usuario;
        this.idade = 27;
        this.nome = nome;
    }
    Pessoa.prototype.imprimeIdade = function () {
        console.log(this.idade);
    };
    Pessoa.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
        console.log(this.tipo);
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Max", "max");
console.log(pessoa);
pessoa.imprimeIdade();
pessoa.setTipo("Legal");
// Herança
var Glaydson = /** @class */ (function (_super) {
    __extends(Glaydson, _super);
    //nome = "Glaydson";
    function Glaydson(usuario) {
        var _this = _super.call(this, "Glaydson", usuario) || this;
        _this.idade = 31;
        return _this;
        // this.tipo = "Cool";
    }
    return Glaydson;
}(Pessoa));
var glaydson = new Glaydson("glaydson");
console.log(glaydson);
// Getters and Setters
var Planta = /** @class */ (function () {
    function Planta() {
        this._especies = "Padrão";
    }
    Object.defineProperty(Planta.prototype, "especies", {
        get: function () {
            return this._especies;
        },
        set: function (valor) {
            if (valor.length > 3) {
                this._especies = valor;
            }
            else {
                this._especies = "Padrão";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Planta;
}());
var planta = new Planta();
console.log(planta.especies);
planta.especies = "ABCD";
console.log(planta.especies);
// Propriedades e Métodos estáticos
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircunferencia = function (diametro) {
        return this.PI * diametro;
    };
    Helpers.PI = 3.141592;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircunferencia(8));
// Classes Abstratas
var Projeto = /** @class */ (function () {
    function Projeto() {
        this.nome = "Padrão";
        this.orcamento = 1000;
    }
    Projeto.prototype.calculaOrcamento = function () {
        return this.orcamento * 2;
    };
    return Projeto;
}());
var ProjetoIT = /** @class */ (function (_super) {
    __extends(ProjetoIT, _super);
    function ProjetoIT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjetoIT.prototype.mudaNome = function (nome) {
        this.nome = nome;
    };
    return ProjetoIT;
}(Projeto));
var novoProjeto = new ProjetoIT();
console.log(novoProjeto);
novoProjeto.mudaNome("Projeto IT");
console.log(novoProjeto);
// Construtores privados
var SomenteUma = /** @class */ (function () {
    function SomenteUma(nome) {
        this.nome = nome;
    }
    SomenteUma.getInstancia = function () {
        if (!SomenteUma.instancia) {
            SomenteUma.instancia = new SomenteUma("A Única");
        }
        return SomenteUma.instancia;
    };
    return SomenteUma;
}());
//let errado = new SomenteUma("A Única");
var certo = SomenteUma.getInstancia();
console.log(certo.nome);
// certo.nome = "Outro nome";
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Tooooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstName = "Ma";
console.log(person);
person.firstName = "Maximilian";
console.log(person);
var MinhaMatematica;
(function (MinhaMatematica) {
    var PI = 3.1415;
    function calculaCircunferencia(diametro) {
        return diametro * PI;
    }
    MinhaMatematica.calculaCircunferencia = calculaCircunferencia;
})(MinhaMatematica || (MinhaMatematica = {}));
var MinhaMatematica;
(function (MinhaMatematica) {
    function calculaRetangulo(width, length) {
        return width * length;
    }
    MinhaMatematica.calculaRetangulo = calculaRetangulo;
})(MinhaMatematica || (MinhaMatematica = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var PI = 2.99;
console.log(MinhaMatematica.calculaRetangulo(10, 20));
console.log(MinhaMatematica.calculaCircunferencia(3));
console.log(PI);
