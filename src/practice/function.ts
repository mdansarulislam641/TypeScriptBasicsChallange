const compareArray = (array1 : number[] , array2 : number[]) : number[] =>{
    return array1.filter(value => array2.includes(value));
}
const resultArray = compareArray([1,2,3,4] , [1,3,5])
console.log(resultArray)