// Type guard explain 

// key of guard of type Guard

type KeyGuard = number | string ;
function add (param1 : KeyGuard, param2 : KeyGuard): KeyGuard {
    if(typeof param1 === 'number' && typeof param2 === 'number'){
       return param1 + param2
    }
    else{
        return param1.toString() + param2.toString()
    }
};
// console.log(add('1', 2))
// console.log(add(1,4))

// in Guard of type guard 
type NormalUser = {
    name : string
};

type AdminUser = {
    name : string ;
    role : 'admin'
};

function getUser (user : NormalUser | AdminUser): string{
    if('role' in user){
        return `this is ${user.role} User.`;
    }
    else{
        return `this is Normal User Only .`;
    }
}
const normalUser1 : NormalUser = {name : "Ansarul Islam"};
const adminUser1 : AdminUser = {name : 'ANSARUL' , role: 'admin'}
// console.log(getUser(normalUser1))
// console.log(getUser(adminUser1));

// instanceof of guard in type Guard 
class AnimalNew{
    name : string ;
    species : string;
    constructor(name : string , species : string ){
        this.name = name ;
        this.species = species ;
    }
    makeSound(){
        console.log('the sound is sound')
    }
};

class Dog extends AnimalNew {
    constructor(name: string , species: string){
        super(name , species);
    };
    makeBraking(){
        console.log('the dog Braking');
    }
};

function getDog(animal : AnimalNew) : animal is Dog{
    return animal instanceof Dog
}
function getCat(animal : AnimalNew): animal is Cat{
    return animal instanceof Cat ;
}
class Cat extends AnimalNew{
    constructor(name : string , species : string){
        super(name , species)
    };
    makeMeaw(){
        console.log("the Cat Make Meo Meo");
    }
};

function getAnimal(animal: AnimalNew){
    if(getDog(animal)){
        animal.makeBraking();
    }
    else if(getCat(animal)){
       animal.makeMeaw();
    }
    else{
        animal.makeSound()
    }
};

const dogInstance = new Dog('kukur', 'kutta');
const catInstance = new Cat('bilai', 'biral');
const test = getAnimal(dogInstance)
console.log(test)
