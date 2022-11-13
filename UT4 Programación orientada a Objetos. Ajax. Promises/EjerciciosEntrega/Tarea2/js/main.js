class Trabajador {
    /**
     * Constructor de la clase trabajador
     * @param nombre
     * @param numHorasSemanales
     * @param salarioPorHoras
     */
    constructor(nombre, numHorasSemanales, salarioPorHoras) {
        this.nombre = nombre;
        this.numHorasSemanales = numHorasSemanales;
        this.salarioPorHoras = salarioPorHoras;
    }

    /**
     * Con este metodo lo que hacemos es mostrar toda la informacion del trabajador que nos pide el ejercicio.
     * @returns {string}
     */
    pintarInfo() {
        return "El nombre del trabajador es:" + this.nombre + "\nEl numero de horas semanales es: " + this.numHorasSemanales + "\nEl precio hora :" + this.salarioPorHoras + " euros la hora."
    }

    /**
     * Y en este metodo lo que realizamos es el calculo para ver cual seria el salario semanal de cada empleado.
     * @returns {number}
     */
    getSaldoSemanal() {
        let resultado = this.numHorasSemanales * this.salarioPorHoras;
        return resultado;
    }
}

class Restaurante {

    /**
     * El constructor de la clase restaurante y solo le pasamos el nombre por parametro, porque el array de trabajadores lo iremos rellenando a
     * lo largo del ejercicio cuando este nos lo pida..
     * @param nombre
     */
    constructor(nombre) {
        this.nombre = nombre;
        this.trabajadores = [];
    }

    /**
     * Este es el metodo que utilizamos para rellenar el array de trabajadores.
     * @param trabajador
     */
    anadirTrabajador(trabajador) {
        this.trabajadores.push(trabajador);
    }

    /**
     * Este es el metodo pintarInfor() que utilizamos para mostrar lo primero el nombre del restaurante
     * y posteriormente recorreremos el array de trabajadores he iremos mostrando sus datos llamando al metodo
     * pintarInfo del trabajador
     */
    pintarInfo() {
        let cadena ="INFORMACION DEL RESTAURANTE "+this.nombre;
        let cont = 0;
        console.log(cadena);
        if (this.trabajadores.length!==0) {
            for (let tra of this.trabajadores) {
                console.log("Trabajador: "+cont);
                console.log(tra.pintarInfo());
                cont++;
            }

        }


    }

    /**
     * Mediante este metodo calculamos el gasto en salarios que tiene el restaurante a los largo de la semana mediante un bucle recorremos el array de
     *
     * @returns {number}
     */
    getPagosTotales() {
        let resultado = 0;
        for (let trabajadorElement of this.trabajadores) {
            resultado += trabajadorElement.getSaldoSemanal();
        }
        return resultado;
    }
}


/**
 * Creamos el nombre del restaurante1 mediante el constructor.
 * @type {Restaurante}
 */
let restaurante1=new Restaurante("La Taperia");

/**
 * Aqui como anteriormente hicimos con el restaurante aqui lo haremos con los trabajadores y sus constructores
 * @type {Trabajador}
 */
let camarero1= new Trabajador("Pepe",40,10);
let camarero2= new Trabajador("Laura",35,15);
let camarero3= new Trabajador("Marcos",20,10);

/**
 * Y aqui seguimos el ejercicio para que quede igual la imagen
 */
restaurante1.pintarInfo();
restaurante1.anadirTrabajador(camarero1);
restaurante1.anadirTrabajador(camarero2);
restaurante1.anadirTrabajador(camarero3);
restaurante1.pintarInfo();

console.log("Mantener a los trabajadores del restaurante cuesta: "+restaurante1.getPagosTotales());