//GUARDANDO LA FUNCION EN UNA VARIABLE
let hola = function pintarHola() {
    console.log("Hola");

}
setTimeout(hola, 300)


//GUARDANDO LA FUNCION EN UNA VARIABLE, LAMBDA


let hola1=() =>{console.log("hola")};

setTimeout(hola1, 400);


//SIN GUARDAR LA FUNCION, ESCRIBIENDOLA DIRECTAMENTE DONDE LA NECESITES CON LA FUNCION

function escHola() {
    console.log("holita");
}

setTimeout(escHola, 500);

//SIN GUARDAR LA FUNCION, ESCRIBIENDOLA DIRECTAMENTE DONDE LA NECESITES CON LA FUNCION CON LAMDA/

function escHolat() {
    console.log("holitperro");
}

setTimeout(()=>{escHolat()},600);