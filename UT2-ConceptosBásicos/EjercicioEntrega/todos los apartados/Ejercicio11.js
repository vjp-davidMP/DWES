function agruparNumerosPares(...datos){
    let arrayNum= new Array();
    for (let i = 0; i < datos.length; i ++){
        if (typeof datos[i]=="number"){
            arrayNum.push(datos[i]);
            console.log("El numero "+datos[i]+" ha sido almacenado en la posicion "+i+"del array nuevo.");
            if(arrayNum.every(num => num % 2 ==0)){
                console.log("Es par "+arrayNum);
            }else{
                console.log("No es par")
            }
        }else{
            console.log("El argumento "+datos[i]+" no es un numero.");
        }
    }
}

let datos=[2,2,4,5,6,67,3];
agruparNumerosPares(...datos);