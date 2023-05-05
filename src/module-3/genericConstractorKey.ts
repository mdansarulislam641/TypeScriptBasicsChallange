type newObj = {name : string , age : number, address: string}

type newType = 'name' | 'age' | 'address' ;
const a : newType = 'address';

type newOne =  keyof newObj ;
const b : newOne = 'age'

// function property <X , Y extends keyof X>(obj :X , key : Y){
//     obj[key]
// };
const property = <X , Y extends keyof X>(obj :X , key : Y  ) =>{
    obj[key]
}

property({name : 'ansarul'}, "name")