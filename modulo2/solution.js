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
