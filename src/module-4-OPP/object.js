"use strict";
class Animal {
    constructor(name, spaces, sound) {
        this.name = name;
        this.spaces = spaces;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} say's ${this.sound}`);
    }
}
;
const dog = new Animal('kukur', "kutta", 'ghew ghew');
const cat = new Animal('bilai', 'cat', "meo meo");
cat.makeSound();
dog.makeSound();
