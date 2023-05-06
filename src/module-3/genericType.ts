
// make generic array 
type GenericArray<T> = Array<T>
type NameAndRoll = {
    name : string , 
    roll : number
}

const rollOne :GenericArray<number> = [3 , 4, 3, 5]
const rollTwo : GenericArray<string> = ['2' , '4', '5'];
const userRollNumber : GenericArray<NameAndRoll> = [
    {name : "Ansarul" , roll : 20} ]

// many type of argument pass in generic type 
type GenericTuple <X ,Y, Z> = [X , Y , Z];
const relation : GenericTuple<string , number, string> = ['ansarul ', 2, "tumi"]


type GenericManyType<X , Y> = [X , Y]
// type Obj = {
//     name : string ,
//     salary : number
// };

interface Obj {
    name : string ,
    salary : number
};

const salaryRelation : GenericManyType<Obj , string> = [
    {
        name : 'ansarul',
        salary : 2000
    },
    'nau nau',
  
]