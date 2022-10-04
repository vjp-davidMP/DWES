function conversiones(nombre="Producto genérico", Precio=100, impuesto=21) {
    let nombre1;
    let Precio1;
    let impuesto1;
    let ofNombre = nombre;
    let ofPrecio = Precio;
    let ofImpuesto = impuesto;


    if (typeof String(ofNombre) == "string") {
        nombre1 = String(ofNombre);
    }

    if (typeof Number(ofPrecio) == "number") {
        Precio1 = Number(ofPrecio);
    }

    if (typeof Number(ofImpuesto) == "number") {
        impuesto1 = Number(ofImpuesto);
    }

    console.log("El producto es " + nombre1 + ", el Precio es " + Precio1 + " y su impuesto es " + impuesto1);
}
conversiones("asd", );
conversiones("asd", true);
conversiones("asd", true, false);
conversiones("asd", true, 23);
conversiones(null, true, 23);