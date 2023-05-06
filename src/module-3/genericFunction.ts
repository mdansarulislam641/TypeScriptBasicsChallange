// generic function create 


const arrayFunc = <T>(param : T) : T[]=>{
    return [param]
};

const result11 = arrayFunc(4)
const result12 = arrayFunc("name")

const arrayFunc2 = <X, Y>(val1 :X , val2 :Y) : [X ,Y] =>{
    return [val1 , val2]
}
interface  IUser{name : string , age :number}
const result13 = arrayFunc2<number , IUser>(33 ,{ name: 'ans', age : 22})


const newArray = (num1:number , num2:string) : [number , string] =>{
    return [num1 , num2]
}

const newFunc = <T extends {name : string , age : number , salary : number}>(num1:T) =>{
    const man = "kata kati";
    const newObj = {man , ...num1}
    return newObj
}

interface IInfo {
    name : string ,
    age : number ,
    salary : number
}
const myInfo  = {
    name: "Md Ansarul Islam",
    age: 22,
    salary: 20000,
    other : "tumi ami",
    other1:null
}
const resu = newFunc(myInfo)
