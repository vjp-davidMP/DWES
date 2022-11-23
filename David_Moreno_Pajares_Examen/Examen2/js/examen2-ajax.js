'use strict';


let bNombre = document.getElementById("botonNombre");
let cNombre = document.getElementById("contenedorNombres");


let bFotos = document.getElementById("botonFotos");
let cFotos = document.getElementById("contenedorFotos");


let tNombreFiltrado = document.getElementById("filtrarNombre");
let bNombreFiltrado = document.getElementById("botonFiltrarNombre");
let cNombreFiltrado = document.getElementById("contenedorNombresFiltrados");

let urlPeticion = "https://raw.githubusercontent.com/jesusredondo/PracticaBuscaminas-BASE18-19/master/json/PasoProcesional.json";

document.addEventListener("DOMContentLoaded", function () {
    mostrarNombres();
    mostrarFotos();
    buscar();
});

function mostrarNombres() {
    fetch(urlPeticion).then(response => response.json()).then(pasosJSON => {

        bNombre.addEventListener("click", function () {
            cNombre.innerHTML = "";
            for (let pasos of pasosJSON.results.bindings) {
                cNombre.innerHTML += `<li>${pasos.rdfs_label.value}</li>`;
            }
        });
    }).catch(error => console.log(error.message));
}

function mostrarFotos() {
    fetch(urlPeticion).then(response => response.json()).then(imagenesJSON => {
        bFotos.addEventListener("click", function () {
            cFotos.innerHTML = "";
            for (let binding of imagenesJSON.results.bindings) {
                cFotos.innerHTML += `<br><p>${binding.rdfs_label.value}</p>
                                    <p><img src="${binding.schema_image.value}"/></p>`;
            }
        });
    }).catch(error => console.log(error.message));
}

function buscar() {
    fetch(urlPeticion).then(response => response.json()).then(pasosJSON => {

        bNombreFiltrado.addEventListener("click", function () {
            cNombreFiltrado.innerHTML = "";
            let array = [];
            for (let pasos of pasosJSON.results.bindings) {
                let reg="gi"; //Esta es la expresion regular aunque no la utilice.
                if (pasos.rdfs_label.value.search(tNombreFiltrado.value) > 0) {
                    array.push(pasos.rdfs_label.value);

                }


            }
            array.sort();
            for (let arrayElement of array) {
                cNombreFiltrado.innerHTML += `<li>${arrayElement}</li>`;
            }
        });

    }).catch(error => console.log(error.message));
}