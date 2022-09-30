function ordenaEnteros(entero1, entero2){
    if(entero1>entero2){
        return 1;
    }else{
        if (entero1==entero2){
            return 0;
        }
    }
    return -1;
}

let array=[20,6,100,51,28,9];
array.sort(ordenaEnteros);
console.log(array);
