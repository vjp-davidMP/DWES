//Devuelve la suma de tres números.
let funcionLambda=(arg1, arg2, arg3)=>{return arg1+arg2+arg3};
console.log("Esta es la suma de los tres números: " +funcionLambda(2,5,4));

//Devuelve el numero mayor

let funcionMayorQue=(n1,n2,n3)=>{return n1>n2 && n1>n3 ? n1: n2>n3?n2:n3};
console.log("El numero mayor es: "+funcionMayorQue(2,5,4));