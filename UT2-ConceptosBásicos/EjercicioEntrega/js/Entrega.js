//Ejercicio1
console.log("Ejercicio1");

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


//Ejercicio2
console.log("Ejercicio2");

function comparar(cad1,cad2){
    if (typeof cad1===typeof cad2){
        console.log("La cadena1 y cadena2 son del mismo tipos ahora compararemos si tienen el mismo valor.");
        if (cad1===cad2){
            console.log("El valor de las dos cadenas es igual y su valor es: "+cad1);
        }else {
            console.log("El valor de las dos cadenas es distinto.");
        }
    }else {
        console.log("Las cadenas 1 y 2 no son del mismo tipo.");
    }
}

comparar("david","hola");

//Ehercicio3
console.log("Ehercicio3");

function comprobarArray(array1) {
    let i=0;
    let contNUM=0;
    let contString=0;
    let contOtro=0;
    let aux;
    for (i;i<array1.length;i++){

        if(typeof array1[i]==="number"){
            contNUM++;
            console.log("Los numeros son: "+array1[i]+" ");
        }else{
            if (typeof array1[i]==="string"){
                contString++;
                console.log("Los Strings o cadenas son: "+array1[i]+" ");
            }else {
                contOtro++;
                console.log("Estos son los datos del resto del array: "+array1[i]+" ")
            }
        }

    }
    console.log("En el array "+array1.length+" hay: "+contNUM+" posiciones de tipo numero, "+contString+" de tipo string, y "+contOtro+" de otros datos.")
}

let array1=[2,3,4,"David","Marina",null];
comprobarArray(array1);

//Ehercicio4
console.log("Ehercicio4");

function conversiones(nombre="Producto genérico", Precio=100, impuesto=21) {
    let nombre1;
    let Precio1;
    let impuesto1;
    let ofNombre = nombre;
    let ofPrecio = Precio;
    let ofImpuesto = impuesto;


    if (typeof String(ofNombre) == "string") {
        nombre1 = String(ofNombre);
    }

    if (typeof Number(ofPrecio) == "number") {
        Precio1 = Number(ofPrecio);
    }

    if (typeof Number(ofImpuesto) == "number") {
        impuesto1 = Number(ofImpuesto);
    }

    console.log("El producto es " + nombre1 + ", el Precio es " + Precio1 + " y su impuesto es " + impuesto1);
}
conversiones("asd", );
conversiones("asd", true);
conversiones("asd", true, false);
conversiones("asd", true, 23);
conversiones(null, true, 23);

//Ejercicio5
console.log("Ejercicio5");

function ordenarArrays(array2) {
    let num = 0;
    let sigNum;
    let aux;
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            let sigNum = array2[j + 1];
            num=array2[j];
            if (num<sigNum) {
                aux=array2[j];
                array2[j]=sigNum;
                array2[j+1]=aux;
            }
        }
    }
    console.log(array2);
}

let array2 = [1, 5, 3, 6, 4, 8, 0, 12];

ordenarArrays(array2);

//Ejercicio6
console.log("Ejercicio6");

function accionesArray(array3){
    array3.unshift("0","1");
    console.log(array3.join("#"));
    array3.push("6","7");
    console.log(array3.join("#"));
    array3.splice(3,3);
    console.log(array3.join("#"));
    let log=array3.length-1;
    array3.splice(4,0,"2","3");
    console.log(array3.join("#"));
}

let array3=[2,3,4,5];
console.log("Antes de los cambios.")
console.log(array3);

console.log("Después de todos los cambios requeridos en el ejercicio.")
accionesArray(array3);


//Ejercicio7
console.log("Ejercicio7");

function pares(array4){
    if(array4.every(num=>num%2==0)){

        console.log("Todos los elementos del array son pares. <br>");
        console.log(array4);
    }else{
        console.log("No todos los elementos del array4 son pares.<br>");
        console.log(array4);
    }
}
let array4=[1,4,6,8,10,12];
pares(array4);

//Ejercicio8
console.log("Ejercicio8");

function comprobarRequisitos(array5){
    for (let i =0;i<array5.length;i++){
        if (typeof array5[i]!="number"){
            alert("Error");
        }else{
            let rasultado=array5[i]*2;
            array5[i]=rasultado;
        }
    }
    if (array5.every(num=>num%2==0)){
        console.log("Todos los elementos del array son pares");
    }else{
        alert("Error");
    }
}

let array5=[5,1,2,6];
comprobarRequisitos(array5);

//Ejercicio9
console.log("Ejercicio9");

function platosMostrar(mapaPlatos){

    for(let[platos,array]of mapaPlatos){
        console.log(platos.toString());
        console.log("Ingredientes: ");
        for (let i=0;i<array.length;i++) {

            console.log("-" + array[i] );

        }
        console.log();
    }

}
class platos {

    constructor(nombre,duracion,dificultad) {
        this.nombre=nombre;
        this.duracion=duracion;
        this.dificultad=dificultad;
    }
    toString(){
        return "El plato "+this.nombre+" tiene una duracion de "+this.duracion+" minutos con dificultad: "+this.dificultad;
    }
}
var mapaPlatos=new Map();
let array=["Sal","Patatas","Chorizo","zanahoria"];
mapaPlatos.set(new platos("Cocido", 60, 6),array);
let arrayA=["Sal","Patatas","Aceite","Cebollas"];
mapaPlatos.set(new platos("Tortilla Española", 45, 7),arrayA);
let arrayB=["Carne","Aceite","Sal","Queso","Pimientos","Tomates","Bechamel"];
mapaPlatos.set(new platos("Berenjenas Rellenas", 158, 7),arrayB);

platosMostrar(mapaPlatos);

//Ejercicio10
console.log("Ejercicio10");

function comprobar(...arg){
    let resultado=0;
    for (let i=0;i<arg.length;i++) {
        if (typeof arg[i] != "string") {
            alert("Error");
        } else {
            let long = arg[i].length;
            resultado=resultado+long;
            console.log("La longitud total del parámetro"+i+" es: "+long);

        }

    }
    console.log(arg.reduce((resultado,long) => resultado + long,""));
    console.log("El resultado total de la suma de las longitudes es: "+resultado);
}
let arg=["david","marina","2","truesdfadfa"];
comprobar(...arg);



//Ejercicio11
console.log("Ejercicio11");

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

