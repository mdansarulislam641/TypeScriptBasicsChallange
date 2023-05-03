// interface in typescript 
type User = {
    name : string ,
    age : number 
} ;

interface IUser {
    name : string ,
    age : number
};

// interface benefits interface help to using extends
interface IExtendsUser extends IUser {
    role : string
};

// type with extends in type alias 
type UserExtendWithType  = User &  {
    role : string
}

const userWithExtendTypeAlias : UserExtendWithType = {
    name : "Ansarul Islam",
    age: 20,
    role: "Admin"
}

// interface using only object type datas not use for premetive type datas 
type NumberType = number



// with extends interface object 
const extendsWithInterfaceUser : IExtendsUser = {
    name: "ansarul",
    age: 12,
    role:"admin"
}


// user object with type 
const userWithType : User ={
    name : "Md Ansarul islam",
    age : 20
};

// user with interface 
const userWithInterface : IUser = {
    name : "Md Ansarul Islam",
    age : 21
};


// function signature with type and interface 

// function with type 
type addNumberType = (num1 : number , num2 : number) => number
const addNumbers : addNumberType = (num1 , num2) => num1 + num2

// function with interface 
interface IAddNumbers {
    (num1: number , num2 : number) : number
};

const addNumberWithInterface : IAddNumbers = (num1 , num2 ) => num1 + num2
