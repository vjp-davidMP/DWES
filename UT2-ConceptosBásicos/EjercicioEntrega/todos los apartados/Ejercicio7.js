function pares(array){
    if(array.every(num=>num%2==0)){

        console.log("Todos los elementos del array son pares. <br>");
        console.log(array);
    }else{
        console.log("No todos los elementos del array son pares.<br>");
        console.log(array);
    }
}
let array=[1,4,6,8,10,12];
pares(array);