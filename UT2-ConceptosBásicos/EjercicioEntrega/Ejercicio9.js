function platosMostrar(mapaPlatos){

    for(let[platos,array]of mapaPlatos){
        console.log("El plato "+platos.nombre+" tiene una duracion de "+platos.duracion+" minutos con dificultad: "+platos.dificultad)
        console.log("Ingredientes: ");
        for (let i=0;i<array.length;i++) {

            console.log("-" + array[i] );

        }
        console.log();
    }

}
class platos {

    constructor(nombre,duracion,dificultad) {
        this.nombre=nombre;
        this.duracion=duracion;
        this.dificultad=dificultad;
    }
}
var mapaPlatos=new Map();
let array=["Sal","Patatas","Chorizo","zanahoria"];
mapaPlatos.set(new platos("Cocido", 60, 6),array);
let array1=["Sal","Patatas","Aceite","Cebollas"];
mapaPlatos.set(new platos("Tortilla Española", 45, 7),array1);
let array2=["Carne","Aceite","Sal","Queso","Pimientos","Tomates","Bechamel"];
mapaPlatos.set(new platos("Berenjenas Rellenas", 158, 7),array2);

platosMostrar(mapaPlatos);