let peticionAjax= new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange",procesarPeticion);
peticionAjax.open("GET","http://opendata.caceres.es/GetData/GetData?dataset=om:Monumento&format=json");
peticionAjax.send();

function procesarPeticion(event){
    if (this.readyState == 4 && this.status == 200){
        let objeto=JSON.parse(this.responseText);
        procesarResultado(objeto);
    }
}

function pintarInfoMonumento(objetoMonumento) {
    let cadena="";
    cadena+="Nombre "+objetoMonumento.rdfs_label.value+"\n";
    cadena+=" Tipo Monumento "+objetoMonumento.om_tipoMonumento.value+"\n";
    cadena+=" Latitud "+objetoMonumento.geo_lat.value+"\n";
    cadena+=" Longitud "+objetoMonumento.geo_long.value+"\n";
    cadena+=" Uri "+objetoMonumento.uri.value+"\n";

    return cadena;
}

function procesarResultado(objetoResultado) {
    for (let monumento of objetoResultado.results.bindings){
        console.log(pintarInfoMonumento(monumento));
    }
}