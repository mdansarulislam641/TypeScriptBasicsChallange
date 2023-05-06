"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep() {
        console.log(`${this.name} sleep in the time and age ${this.age} `);
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
    makeSleep() {
        console.log(`${this.name} sleep in the time and age ${this.age} `);
    }
}
class Teacher extends Parent {
    constructor(name, age, address, classNum) {
        super(name, age, address);
        this.classNum = classNum;
    }
    classNumbers() {
        console.log(`he total class teach ${this.classNum}`);
    }
}
const student = new Student('ansarul', 20, 'thangagonj');
const teacher = new Teacher('masud', 22, 'ponchogor', 33);
student.makeSleep();
teacher.classNumbers();
teacher.classNumbers();
