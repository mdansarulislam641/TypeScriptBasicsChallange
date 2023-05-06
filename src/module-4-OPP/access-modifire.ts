class BankAccount{
    readonly id : number ;
    name : string ;
    private balance : number ;
    constructor(id : number , name : string , balance : number){
        this.id = id ;
        this.name = name ;
        this.balance = balance ;
    }
    addDeposit(money : number){
        this.balance = this.balance + money ;
    }

};

const balance = new BankAccount(1 , 'Md Ansarul Islam', 200)
class StudentBank extends BankAccount{

}
const ss = new StudentBank(2, 'shakib', 300);
ss.addDeposit(300)
console.log(balance, ss);