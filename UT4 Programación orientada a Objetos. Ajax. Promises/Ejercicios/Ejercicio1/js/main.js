var persona = {
    nombre: "Marta",
    "edad": 23,
    trabajos: [
        {
            descripcion: "Payaso del circo",
            duracion: "2003-2005"
        }
        ,
        {
            descripcion: "Sexador de pollos",
            duracion: "2005-2019"
        }
    ],
    getInfo() {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad;
    }
};
console.log(persona.getInfo());
console.log(persona.trabajos[1].descripcion);

persona.getInfo = function () {
    let cadenaDevuelta = "Mi nombre es " + this.nombre + " y tengo " + this.edad + "\n";
    for (let trabajo of persona.trabajos) {
        cadenaDevuelta += "-" + trabajo.descripcion + " --> " + trabajo.duracion + "\n";
    }
    return cadenaDevuelta;
}
console.log(persona.getInfo());
