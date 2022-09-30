

function ordenarPersonas(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return 1;
    }else{
        if (persona1.edad==persona2.edad){
            return 0;
        }
    }
    return -1;
}
class Persona {

    constructor(nombre, edad) {
        this.nombre=nombre;
        this.edad=edad;
    }
    toString(){
        return this.nombre+" ("+this.edad+") ";
    }

}
let arrayPersona=[new Persona("María",19),
    new Persona("Santiago",28),
    new Persona("Marcos",33),
    new Persona("Crsitina",40),];
arrayPersona.sort(ordenarPersonas);
console.log(arrayPersona.toString());
