function accionesArray(array){
    array.unshift("0","1");
    console.log(array.join("#"));
    array.push("6","7");
    console.log(array.join("#"));
    array.splice(3,3);
    console.log(array.join("#"));
    let log=array.length-1;
    array.splice(4,0,"2","3");
    console.log(array.join("#"));
}

let array=[2,3,4,5];
console.log("Antes de los cambios.")
console.log(array);

console.log("Después de todos los cambios requeridos en el ejercicio.")
accionesArray(array);
