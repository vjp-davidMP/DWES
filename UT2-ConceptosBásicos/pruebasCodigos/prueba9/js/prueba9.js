//Prueba de un if.

let precio=65;

if(precio<50){
    console.log("Esto es barato");
}else if (precio<100){
    console.log("Esto no es tan barato.");
}else{
    console.log("Esto es caro");
}

//Prueba de un switch.

let tipoDeUsuatio=1;

switch (tipoDeUsuatio){
    case 1:
    case 2:
        console.log("Puedes acceder.");
        break;
    case 3:
        console.log("No tienes permisos de acceso.");
        break;
    default:
        console.error("Tipo de usuario incorrecto.");

}