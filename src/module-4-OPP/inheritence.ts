class Parent {
    constructor(public name : string ,public age : number ,public address : string){
    }
    makeSleep(){
        console.log(`${this.name} sleep in the time and age ${this.age} `)
    }
}


class Student extends Parent {
    constructor(name : string , age : number , address : string){
      super(name , age , address)
    }
    makeSleep(){
        console.log(`${this.name} sleep in the time and age ${this.age} `)
    }
}

class Teacher extends Parent{
    classNum : number ;

    constructor (name : string , age : number , address : string, classNum : number){
       super(name , age , address)
        this.classNum = classNum ;
    }
    classNumbers(){
        console.log(`he total class teach ${this.classNum}`)
    }
}

const student = new Student('ansarul', 20 , 'thangagonj');
const teacher = new Teacher('masud', 22 , 'ponchogor', 33)
student.makeSleep()
teacher.classNumbers()
teacher.classNumbers()