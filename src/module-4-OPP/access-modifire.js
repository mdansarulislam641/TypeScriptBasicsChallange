"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    addDeposit(money) {
        this.balance = this.balance + money;
    }
}
;
const balance = new BankAccount(1, 'Md Ansarul Islam', 200);
class StudentBank extends BankAccount {
}
const ss = new StudentBank(2, 'shakib', 300);
ss.addDeposit(300);
console.log(balance, ss);
