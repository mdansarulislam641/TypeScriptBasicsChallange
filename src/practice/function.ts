const compareArray = (array1 : number[] , array2 : number[]) : number[] =>{
    return array1.filter(value => array2.includes(value));
}
const resultArray = compareArray([1,2,3,4] , [1,3,5])
// console.log(resultArray)

// find the even number in array 
const findEvenInArray : number[] =[1,2,3,4,5,6,7,8];

const findEven = (array: number[]) : number[] =>{
    const evenArr : number[] = []
    // array.map(number => {
    //     if(number % 2 == 0){
    //         evenArr.push(number)
    //     }
    // })
    for(let i= 0 ; array.length > i ; i++){
        // console.log(array[i])
        if(array[i] % 2 === 0){
           evenArr.push(array[i])
        }
    }
    // console.log(one)
    return evenArr
};

const testEven = findEven([1,2,3,4,5,6])
console.log(testEven)