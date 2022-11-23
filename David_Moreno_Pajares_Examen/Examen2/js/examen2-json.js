'use strict';

//Crea el siguiente objeto usando JSON:

/*
Un plato que tiene un nombre (cadena), una duración (número),
una dificultad (cadena) y una serie de ingredientes (array de objetos).

Cada ingrediente tiene un nombre de ingrediente (cadena), una unidad de medida(cadena) y una cantidad (número).
Debe haber al menos 3 ingredientes en el plato.

Un ejemplo de ingrediente puede ser: Aceite (nombre) 1 (cantidad) cucharada (unidad de medida).

 */


let plato = {
    nombre:"Paella",
    duration:60,
    dificultad:"Media-Alta",
    ingredientes:[
        {
            nombreIngrediente:"Arroz",
            unidadMedida:"Tazas",
            cantidad:2
        },{
            nombreIngrediente:"Calamares",
            unidadMedida:"Gramos",
            cantidad:200
        },{
            nombreIngrediente:"Preparado de paella",
            unidadMedida:"mililitros",
            cantidad:500
        }
    ],
    getInfo(){
        let cadena="Nombre del Plato: "+this.nombre+".\n" +
            "  -Duracion: "+this.duration+" min.\n" +
            "  -Dificultad: "+this.dificultad+".\n" +
            "  -Ingredientes: \n";
        for (let ingredientes of this.ingredientes) {
            cadena+=ingredientes.nombreIngrediente+" "+ingredientes.cantidad+" "+ingredientes.unidadMedida+"\n";
        }
        return cadena;
    }
};

console.log(plato.getInfo());