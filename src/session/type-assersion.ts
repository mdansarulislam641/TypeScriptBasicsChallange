// type assertion 
// jodi situation emon hoi j ami developer type jani but typescript jane na j ki type data patano hobe tahole developer hoye jokhon ami nijei type set kore deno tokhon sei obostha k type assertion bola hoi .

// type assertion example 
/* 
NB : 2 vabe type assertion lekha jai 
1. as diye 
2. <> bracket diye
*/
const assertionExample : unknown = 2000 ;
const assertion = (assertionExample as number)

const assertion1 = <number>assertionExample
assertion1.toFixed(2)
