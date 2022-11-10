let boton = document.getElementById("boton");

let url = "https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/museos.json";
document.addEventListener("DOMContentLoaded", function () {
    boton.addEventListener("click", function () {
            fetch(url).then(procesarRespuesta).then(crearTabla);
        }
    );


});

function cambiarColor() {
    boton.style.backgroundColor = "red";
}

function procesarRespuesta(respuesta) {
    if (respuesta.ok) {
        let jsonDevuelto = respuesta.json();
        console.log(jsonDevuelto);
        return jsonDevuelto;
    }
}
function vacio(tableElement) {
    if (tableElement == undefined) {
        return "---";
    }else{
        return tableElement.value;
    }

}

function crearTabla(resultado) {
    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML="<table></table>";
    let table=document.querySelector("table");
    table.innerHTML ="<tr><th>Nombre</th><th>Latitud</th><th>Longitud</th><th>URL Web</th></tr>";

    for (let tableElement of resultado.results.bindings) {
        table.innerHTML+="<tr><td>" + vacio(tableElement.rdfs_label) + "</td><td>" + vacio(tableElement.geo_lat) + "</td><td>" + vacio(tableElement.geo_long) + "</td><td>" + vacio(tableElement.schema_url) + "</td></tr>"
    }

   document.querySelectorAll("th").forEach((th)=>{
       th.style.border="1px solid black";
   })

    table.style.border="1px solid black";

    document.querySelectorAll("td").forEach((porro)=>{
        porro.style.border="1px solid black";
    });
}





