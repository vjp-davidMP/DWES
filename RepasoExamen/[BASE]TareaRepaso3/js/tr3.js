'use strict';

let bNombres = document.getElementById("botonNombre");
let cNombres = document.getElementById("contenedorNombres");


let tPrecio = document.getElementById("precioMaximo");
let bPrecio = document.getElementById("botonPrecio");
let cPrecio = document.getElementById("contenedorPrecios");


let tServicios = document.getElementById("servicios");
let bServicios = document.getElementById("botonServicios");
let cServicios = document.getElementById("contenedorServicios");

document.addEventListener("DOMContentLoaded",funcionPrincipal);



function funcionPrincipal(){
    bNombres.addEventListener("click",primerBoton);
    bPrecio.addEventListener("click",precioBoton);
}

function precioBoton() {
    cPrecio.innerHTML="";
    fetch("http://opendata.caceres.es/GetData/GetData?dataset=om:PiscinaMunicipal&format=json").
    then(response=>response.json()).then(response=>{
        let precios=tPrecio.value;
        for (let objJSONElement of response.results.bindings) {
            console.log(precios);
            if((Number(precios))>=(Number(objJSONElement.om_precioAdultoDiario.value))){

                .innerHTML+= `<li>${objJSONElement.om_precioAdultoDiario.value}</li>`
            }
        }

    }).catch(error=>console.log(error));
}

function primerBoton() {
    fetch("http://opendata.caceres.es/GetData/GetData?dataset=om:PiscinaMunicipal&format=json").
    then(response=>response.json()).then(objJSON=>{
        console.log(objJSON.results.bindings);
        cNombres.innerHTML="";
        for (const objJSONElement of objJSON.results.bindings) {
            console.log(objJSONElement.rdfs_label);

            cNombres.innerHTML+=`<li>${objJSONElement.rdfs_label.value}</li>`;
        }

    }).catch(error=>console.log(error));
}

