'use strict';

let contIzquierda = document.getElementById("contenedorIzquierda");
let contDerecha = document.getElementById("contenedorDerecha");

let botonIzq = document.getElementById("moverIzquierda");
let botonDer = document.getElementById("moverDerecha");
let botonLimpiar = document.getElementById("limpiar");


let inputTexto = document.getElementById("nuevaEntrada");
let botonCrear = document.getElementById("creaEntrada");

function añadirPalabra() {
    botonCrear.addEventListener("click", function () {
        console.log(inputTexto.value);
        if (inputTexto.value == "") {
            alert("Tienes que introducir texto en el cuadro.")
        } else {
            contIzquierda.innerHTML += "<li>" + inputTexto.value + "</li>"
            inputTexto.value = "";
        }
    });
}
function ponerClase(ev){
    console.log(ev.target.nodeName);
    if (ev.target.nodeName=="LI"){
        if (ev.target.className==""){
            console.log(ev.target);
            ev.target.classList.toggle("seleccionado");

        }else{
            ev.target.className="";
            console.log(ev.target);
        }
    }
}

function borrar(ev) {
    ev.target.addEventListener("dblclick",function () {
        ev.target.remove();
    })
}

function deseleccionar(ev) {

    botonLimpiar.addEventListener("click",function () {
        if (ev.target.className=="seleccionado"){
            ev.target.className="";
        }
    });
}
function pasarIzq(ev) {
    botonIzq.addEventListener("click", function () {

        if (ev.target.className == "seleccionado") {
            contIzquierda.appendChild(ev.target);
        }

    })
}

function pasarDrch(ev) {
    botonDer.addEventListener("click", function () {

        if (ev.target.className == "seleccionado") {
            contDerecha.appendChild(ev.target);
        }

    })
}


añadirPalabra();
contIzquierda.addEventListener("click",function (ev) {

    ponerClase(ev);
    deseleccionar(ev);
    pasarDrch(ev);
    pasarIzq(ev);
    borrar(ev);
});

contDerecha.addEventListener("click",function (ev) {
    ponerClase(ev);
    deseleccionar(ev);
    pasarIzq(ev);
    pasarDrch(ev);
    borrar(ev);
});