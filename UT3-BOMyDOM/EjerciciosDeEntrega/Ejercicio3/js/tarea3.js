"use strict";
let diasSeleccionados = [];
let correspondenciasDias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

function funcionNombre() {

    let nombre = document.querySelector("#nombre");
    console.log(nombre.value);
    let regNombre = new RegExp("^[a-z A-Z]{1,}");
    let validacionNombre = regNombre.test(nombre.value);
    console.log(validacionNombre);
    if (nombre.value != "" && validacionNombre == true) {
        return true;
    } else {
        return false;
    }
}

function funcionDescripcion() {
    let descripcion = document.querySelector("#descripcion");
    console.log(descripcion.value);
    let regDescripcion = new RegExp("^([a-zA-Z])(\\w+ )([a-zA-Z ])+");
    let validacionDescripcion = regDescripcion.test(descripcion.value);
    console.log(validacionDescripcion);
    if (descripcion.value != "" && validacionDescripcion == true) {
        return true;
    } else {
        return false;
    }
}

function funcionCocina() {
    let cocina = document.querySelector("#cocina");
    let regCocina = new RegExp("^([a-zA-Z])(\\w+ )([a-zA-Z ])+");
    let validacionCocina = regCocina.test(cocina.value);
    if (cocina.value != null && validacionCocina == true) {
        return true;
    } else {
        return false;
    }
}

function funcionArray() {

    let diasCollection = document.querySelectorAll("[id^=check]");
    for (let checkDia of diasCollection) {
        if (checkDia.checked) {
            diasSeleccionados.push(checkDia.value);
        }
    }
    if (diasSeleccionados.empty) {
        return false;
    }else {
        return true;
    }

}

function pintarDiasSemana() {
    let nombreSemana="";
    console.log(diasSeleccionados.join(","));
    for (let i=0; i<diasSeleccionados.length;i++){
        let numeroDia=diasSeleccionados[i];
        //console.log(numeroDia.join());
        for (let j=0;j<correspondenciasDias.length;j++){
            if(numeroDia==j){
                nombreSemana +=correspondenciasDias[j]+",";

            }
        }

    }
    console.log(nombreSemana);
    return nombreSemana;
}

function fecha() {
    let fechaActual=new Date().getDay();
    let aberto=false;
    for (let i=0; i<diasSeleccionados.length;i++){
        if(fechaActual==diasSeleccionados[i]){
            aberto=true;
        }
    }
    if(aberto){
        return "<span class='badge badge-success'>Abierto</span>";
    }else{
        return "<span class='badge badge-danger'>Cerrado</span>";
    }
}

function funcionTelefono() {
    let tlfn = document.querySelector("#telefono");
    let regTlfn = new RegExp("\\d{8,9}");
    let validacionTlfn = regTlfn.test(tlfn.value);
    if (tlfn.value != null && validacionTlfn == true) {
        return true;
    } else {
        return false;
    }

}

function funcionFoto() {
    let imagen = document.querySelector("#foto");
    let regFoto = new RegExp("([.png]|[.PNG]|[.jpg]|[.JPG]|[.nef]|[.NEF])+")
    let validacionFoto = regFoto.test(imagen.value);
    if (imagen.value != null && validacionFoto == true) {
        return true;
    } else {
        return false;
    }
}

function ejecutar() {
    event.preventDefault();
    diasSeleccionados=[];
    let pintarNombre = false;
    let pintarDescripcion = false;
    let pintarCocina = false;
    let pintarArray = false;
    let pintarTelefono = false;
    let pintarFoto = false;
    if (funcionNombre() == true) {
        pintarNombre = true;
        document.querySelector("#nombre").className = "form-control is-valid";
    } else {
        pintarNombre = false;
        document.querySelector("#nombre").className = "form-control is-invalid";
    }
    if (funcionDescripcion() == true) {
        pintarDescripcion = true;
        document.querySelector("#descripcion").className = "form-control is-valid";
    } else {
        pintarDescripcion = false;
        document.querySelector("#descripcion").className = "form-control is-invalid";
    }
    if (funcionCocina() == true) {
        pintarCocina = true;
        document.querySelector("#cocina").className = "form-control is-valid";
    } else {
        pintarCocina = false;
        document.querySelector("#cocina").className = "form-control is-invalid";
    }
    if (funcionArray() != true) {
        pintarArray = false;
        document.querySelector("#diasError").className = " text-danger";
    } else {

        document.querySelector("#diasError").className = " text-danger d-none";
        pintarArray = true;
    }
    if (funcionTelefono() == true) {
        pintarTelefono = true;
        document.querySelector("#telefono").className = "form-control is-valid";
    } else {
        pintarTelefono = false;
        document.querySelector("#telefono").className = "form-control is-invalid";
    }
    if (funcionFoto() == true) {
        pintarFoto = true;
        document.querySelector("#foto").className = "form-control is-valid";
    } else {
        pintarFoto = false;
        document.querySelector("#foto").className = "form-control is-invalid";
    }

    if (pintarFoto && pintarCocina && pintarNombre && pintarArray && pintarDescripcion && pintarTelefono) {
        console.log("hola");
        pintarRestaurante();
    }
}

document.getElementById("foto").addEventListener('change', event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    if (file) {
        reader.readAsDataURL(file);
    }

    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result;
    })
});

let boton = document.querySelector("button");
boton.addEventListener("click", ejecutar);


function pintarRestaurante() {
    let entrada = document.getElementById("placesContainer");
    entrada.innerHTML +=
        " <div class=\"card\">\n" +
        "        <img class=\"card-img-top\" src=\"" + document.getElementById("imgPreview").src + "\">\n" +
        "        <div class=\"card-body\">\n" +
        "          <h5 class=\"card-title\">" + document.querySelector("#nombre").value + "</h5>\n" +
        "          <p class=\"card-text\">" + document.querySelector("#descripcion").value + "</p>\n" +
        "          <div class=\"card-text\">\n" +
        "            <small class=\"text-muted\">\n" +
        "              <strong>Abre: </strong>" + pintarDiasSemana() + " \n" +
        "            </small>\n" + fecha()+
        "            \n" +

        "          </div>\n" +
        "          <div class=\"card-text\">\n" +
        "            <small class=\"text-muted\">\n" +
        "              <strong>Teléfono: </strong>" + document.querySelector("#telefono").value + "\n" +
        "            </small>\n" +
        "          </div>\n" +
        "        </div>\n" +
        "        <div class=\"card-footer\">\n" +
        "          <small class=\"text-muted\">\n" +
        "            " + document.querySelector("#cocina").value + "\n" +
        "          </small>\n" +
        "        </div>\n" +
        "      </div> ";

}


