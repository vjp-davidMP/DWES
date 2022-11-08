'use strict'


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cargarRestaurantes").addEventListener("click", cargarRestaurante);
});


function cargarRestaurante() {
    let peticionAjax = new XMLHttpRequest();
    peticionAjax.addEventListener("readystatechange", procesarPeticion);
    let urlPeticion = "https://raw.githubusercontent.com/fredericsangar/backupOpendataCCJSON/master/restaurantes.json";
    peticionAjax.open("GET", urlPeticion);
    peticionAjax.send();

}


function procesarPeticion(event) {
    if (this.readyState == 4 && this.status == 200) {
        let objeto = JSON.parse(this.responseText);
        procesarResultado(objeto);
    }
}



function vacio(restaurante) {
    if (restaurante == undefined) {
        return "---";
    }else{
        return restaurante.value;
    }

}

function procesarResultado(sitio) {
    let cont = 1;
    let tabla = document.getElementById("tabla");
    console.log(sitio.results.bindings);

    for (let restaurante of sitio.results.bindings) {
        console.log(restaurante);
        tabla.innerHTML += "<tr><td>" + cont + "</td><td>" + vacio(restaurante.rdfs_label) + "</td><td>" + vacio(restaurante.schema_url) + "</td><td>" + vacio(restaurante.schema_address_streetAddress) + "</td><td>" + vacio(restaurante.om_capacidadPersonas) + "</td></tr>"
        cont++;
    }

}