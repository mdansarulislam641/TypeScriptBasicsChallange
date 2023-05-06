// generic interface 

interface UCrushInterface<T,U> {
    name : T,
    age : U
}

const crush1 : UCrushInterface<string, number> = {
    name : "Md Ansarul Islam",
    age:20
}


interface ICrush2Interface<T, U= undefined> {
    name : string ,
    husband: T ,
    wife?: U
}
const crush2 : ICrush2Interface<object > = {
    name : 'Ansarul Islam',
    husband : {
        name : 'jaman',
        age : 20,
        salary : 1000
    },

}

