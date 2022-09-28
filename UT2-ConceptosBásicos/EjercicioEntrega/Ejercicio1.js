let funcion=function (arg1,arg2){
    if(typeof arg1==="string"&& typeof arg2==="string"){
        let n1=arg1.length;
        console.log("La primera cadena "+arg1+" tiene una longitud de: "+n1+" letras. <br>");
        let n2=arg2.length;
        console.log("La primera cadena "+arg2+" tiene una longitud de: "+n2+" letras. <br>");
        if(n1>n2){
            let diferencia=n1-n2;
            console.log("La cadena 1: "+arg1+" es mas larga que la cadena 2: "+arg2+" por "+diferencia+" letras.")
        }else {
            if (n2>n1){
                let diferencia=n2-n1;
                console.log("La cadena 1: "+arg1+", es mas corta que la cadena 2: "+arg2+" por "+diferencia+" letras.")
            }
        }
        console.log("Las cadenas: "+arg1+" y "+arg2+" tienen la misma longitud.")
    }
}


 funcion("perito","mando");