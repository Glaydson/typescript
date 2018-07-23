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





