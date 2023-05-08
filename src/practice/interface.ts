interface IPerson {
    name : string ;
    age : number ;
    email : string
};

const findUser = (userArray:object[] , email : string): object =>{
    userArray.map(user => console.log());
    const user = {};
    
    return user ;
}
const userArray : IPerson[] = [{name:"ansarul", age: 20 , email : 'mdansarulislam'}, {name : "suhel", age : 12 , email : 'suhelrana'}]
const userResult = findUser(userArray, 'suhelrana');
console.log(userResult, 'this')