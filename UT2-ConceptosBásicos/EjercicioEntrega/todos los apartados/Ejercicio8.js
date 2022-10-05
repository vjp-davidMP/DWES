function comprobarRequisitos(array){
    for (let i =0;i<array.length;i++){
        if (typeof array[i]!="number"){
            alert("Error");
        }else{
            let rasultado=array[i]*2;
            array[i]=rasultado;
        }
    }
    if (array.every(num=>num%2==0)){
        console.log("Todos los elementos del array son pares");
    }else{
        alert("Error");
    }
}

let array=[5,1,2,6];
comprobarRequisitos(array);