let monumento = {
    "uri": {
        "type": "uri",
        "value": "http://opendata.caceres.es/recurso/turismo/monumentos/Monumento/23-concatedral-de-santa-maria"
    },
    "geo_long": {
        "datatype": "http://www.w3.org/2001/XMLSchema#decimal",
        "type": "typed-literal",
        "value": "-6.37004029561"
    },
    "geo_lat": {
        "datatype": "http://www.w3.org/2001/XMLSchema#decimal",
        "type": "typed-literal",
        "value": "39.4745659792"
    },
    "owl_sameAs": {
        "type": "uri",
        "value": "http://opendata.caceres.es/recurso/cultura-ocio/religion/CentroReligioso/26-concatedral-de-santa-maria"
    },
    "om_tipoMonumento": {
        "type": "literal",
        "value": "Concatedral"
    },
    "rdfs_label": {
        "type": "literal",
        "value": "Concatedral de Santa Maria"
    },
    "om_tieneEnlaceSIG": {
        "type": "uri",
        "value": "http://sig.caceres.es/serweb/fichasig/fichatoponimia.php?mslink=1163"
    },
    "schema_address_addressLocality": {
        "type": "literal",
        "value": "Cáceres"
    },
    "schema_address_addressCountry": {
        "type": "literal",
        "value": "ES"
    },
    pintarInfo() {
        console.log("El nombre del monumento es " + this.rdfs_label.value);
        console.log("El tipo de monumento es: " + this.om_tipoMonumento.value);
        console.log("La latitud del monumento es: " + this.geo_lat.value);
        console.log("La longitud del monumento es: " + this.geo_long.value);
        console.log("La url de dentro del URi: "+this.uri.value);
    }
}

monumento.pintarInfo();