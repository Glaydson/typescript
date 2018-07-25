
type ContaBancaria = {money: number, deposit: (val: number) => void};
let contaBancaria: ContaBancaria = {
    money: 2000,
    deposit(value: number) : void {
        this.money += value;
    }
};
 
let euMesmo: {name: string, contaBancaria: ContaBancaria, hobbies: string[] } = {
    name: "Max",
    contaBancaria: contaBancaria,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself);
 