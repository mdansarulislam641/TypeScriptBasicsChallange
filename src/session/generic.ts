/* 
                            ----:Generic Type :---
Generic muloto kuno variable ba function ar jonno jokhon kuno type ar dorkar hoi onekgula tokhon ekoi jinis onekbar lekhar proyojon hoi ,, ar ekoi jinis bar bar na likhe akti type ar maddhome dynamic vabe type bole deoyakei Generic type bola hoye thake .
*/

// normal type define of array
// const numberGen :number[] = [1,2,3,4,5];
// const stringGen : string[] = ['a','b', 'c'];
// const booleanGen:boolean[] = [true , false , false];

// ai uporer array gulake amra aivabeo likhte pari 
// const numberGen : Array<number> = [1,2,3,4,5];
// const stringGen : Array<string> = ['a','b', 'c'];
// const booleanGen:Array<boolean> = [true , false , false];


/* 
ai jins take amra Generic korte pari type Define ar maddhome
*/
type MyArray<T> = Array<T>
const numberGen : MyArray<number> = [1,2,3,4,5];
const stringGen : MyArray<string> = ['a','b', 'c'];
const booleanGen: MyArray<boolean> = [true , false , false];

// chaile array of object of lekha jai that's means sob lekha jai 
type myObjNew = {
    name : string ;
    age : number
    
}
const friends: MyArray<myObjNew> = [
    {name : 'ansarul', age : 22},
    {name : 'masud', age : 21},
    {name : 'suhel', age : 22}
];

// tuple in Generic type 
// tuple muloto use kora hoi specific vabe jodi kuno premitive data type define kora hoi 
type  newNumArray<X, Y> = [X ,Y] ;
const A : newNumArray<number , string> = [22 , 'th'] ;
const B : newNumArray<string ,boolean> = ['sjf', true]