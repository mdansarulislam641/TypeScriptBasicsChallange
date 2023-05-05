"use strict";
// generic function create 
const arrayFunc = (param) => {
    return [param];
};
const result11 = arrayFunc(4);
const result12 = arrayFunc("name");
const arrayFunc2 = (val1, val2) => {
    return [val1, val2];
};
const result13 = arrayFunc2(33, { name: 'ans', age: 22 });
const newArray = (num1, num2) => {
    return [num1, num2];
};
const newFunc = (num1) => {
    const man = "kata kati";
    const newObj = Object.assign({ man }, num1);
    return newObj;
};
const myInfo = {
    name: "Md Ansarul Islam",
    age: 22,
    salary: 20000,
    other: "tumi ami",
    other1: null
};
const resu = newFunc(myInfo);
