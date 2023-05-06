"use strict";
// Type guard explain 
function add(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
;
function getUser(user) {
    if ('role' in user) {
        return `this is ${user.role} User.`;
    }
    else {
        return `this is Normal User Only .`;
    }
}
const normalUser1 = { name: "Ansarul Islam" };
const adminUser1 = { name: 'ANSARUL', role: 'admin' };
// console.log(getUser(normalUser1))
// console.log(getUser(adminUser1));
// instanceof of guard in type Guard 
class AnimalNew {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log('the sound is sound');
    }
}
;
class Dog extends AnimalNew {
    constructor(name, species) {
        super(name, species);
    }
    ;
    makeBraking() {
        console.log('the dog Braking');
    }
}
;
function getDog(animal) {
    return animal instanceof Dog;
}
function getCat(animal) {
    return animal instanceof Cat;
}
class Cat extends AnimalNew {
    constructor(name, species) {
        super(name, species);
    }
    ;
    makeMeaw() {
        console.log("the Cat Make Meo Meo");
    }
}
;
function getAnimal(animal) {
    if (getDog(animal)) {
        animal.makeBraking();
    }
    else if (getCat(animal)) {
        animal.makeMeaw();
    }
    else {
        animal.makeSound();
    }
}
;
const dogInstance = new Dog('kukur', 'kutta');
const catInstance = new Cat('bilai', 'biral');
const test = getAnimal(dogInstance);
console.log(test);
