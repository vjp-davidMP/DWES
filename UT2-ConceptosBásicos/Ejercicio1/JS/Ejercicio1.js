alert("Bienvenido, ¿Quiere identificarse?");
var nombre=prompt("Introduce tu nombre: ");
console.log("Ha entrado en el sistema "+nombre);
document.getElementById('output').innerHTML =
   " Bienvenido, "+ nombre;