let one :any ;
one = 'this is the'
one = 34 ;
(one as string).length 

// type assertion of raw typescript 
function kiloToGram (param : string | number ) : string | number {
    if(typeof param === 'string'){
        console.log(param, 'this is param')
        
        const value = parseFloat(param) * 1000 ;
        return `the converted value is ${value} gram`;
    }
    if(typeof param === 'number'){
        console.log(param, 'this is param number')
        return ` ${param * 1000} gram`
    }
    return "no value given"
}

//here is use type assertion
const result = kiloToGram("20") as string ;
const result1 = kiloToGram(20) as number ;
// different ways to use type assertion 
const result2 = <number>kiloToGram(20)
const result3 = <number>kiloToGram('20')
console.log(result3)
