"use strict";
const a = 'address';
const b = 'age';
// function property <X , Y extends keyof X>(obj :X , key : Y){
//     obj[key]
// };
const property = (obj, key) => {
    obj[key];
};
property({ name: 'ansarul' }, "name");
