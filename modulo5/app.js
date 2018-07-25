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
