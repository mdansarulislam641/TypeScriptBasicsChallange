const newText = "tumi true text";
const newText1 = "tumi false text";
const checkTernary = false ;
if(checkTernary){
    //  console.log(newText) ;
}
else{
    // console.log(newText1) ;
}
//  use ternary operator 
const checkTernaryUse = checkTernary ? newText : newText1 ;
// console.log(checkTernaryUse);

// using nulish operator 
const checkNulishOperator = undefined ;
const checkNulish = checkNulishOperator ?? 'tumi amr nulish'
console.log(checkNulish)
