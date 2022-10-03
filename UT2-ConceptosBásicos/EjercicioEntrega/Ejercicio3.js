function comprobarArray(array) {
    let i=0;
    let contNUM=0;
    let contString=0;
    let contOtro=0;
    let aux;
    for (i;i<array.length;i++){

        if(typeof array[i]==="number"){
            contNUM++;
            console.log("Los numeros son: "+array[i]+" ");
        }else{
            if (typeof array[i]==="string"){
                contString++;
                console.log("Los Strings o cadenas son: "+array[i]+" ");
            }else {
                contOtro++;
                console.log("Estos son los datos del resto del array: "+array[i]+" ")
            }
        }

    }
    console.log("En el array "+array.length+" hay: "+contNUM+" posiciones de tipo numero, "+contString+" de tipo string, y "+contOtro+" de otros datos.")
}

let array=[2,3,4,"David","Marina",null];
comprobarArray(array);