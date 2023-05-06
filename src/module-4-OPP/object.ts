class Animal {
    constructor (public name : string ,public spaces : string ,public sound : string){
    }
    makeSound(){
        console.log(`The ${this.name} say's ${this.sound}`);
    }
};
const dog = new Animal('kukur', "kutta" , 'ghew ghew');
const cat = new Animal ('bilai', 'cat', "meo meo");
cat.makeSound()
dog.makeSound()
