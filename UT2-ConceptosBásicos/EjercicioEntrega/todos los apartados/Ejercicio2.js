function comprobar(cad1,cad2){
    if (typeof cad1===typeof cad2){
        console.log("La cadena1 y cadena2 son del mismo tipos ahora comprobaremos si tienen el mismo valor.");
        if (cad1===cad2){
            console.log("El valor de las dos cadenas es igual y su valor es: "+cad1);
        }else {
        console.log("El valor de las dos cadenas es distinto.");
        }
    }else {
        console.log("Las cadenas 1 y 2 no son del mismo tipo.");
    }
}

comprobar("david","hola");