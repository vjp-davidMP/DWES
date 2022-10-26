class CicloMotor {
    constructor(marca, aceleracion, desaceleracion) {
        this.numRuedas = 2;
        this.velocidadMaxima = 120;
        this.velocidadActual = 0;
        this.marca = marca;
        this.aceleracion = aceleracion;
        this.desaceleracion = desaceleracion;
        this.encendida = false;
    }

    arrancar() {
        if (this.encendida === false) {
            this.encendida = true;
            console.log("Se mete y gira la llave, la moto arranca.");
        } else {
            this.encendida = false;
        }
    }

    acelerar() {

        if (this.encendida === true && this.velocidadActual + this.aceleracion <= this.velocidadMaxima) {
            this.velocidadActual += this.aceleracion;
        }
    }

    frenar() {
        if(this.encendida===true && this.velocidadActual-this.desaceleracion>=0){
            this.velocidadActual-=this.desaceleracion;
        }
    }

    mostrarInfo(){
        console.log(" ----- "+this.marca+" ----- ");
        console.log(" Número de ruedas: "+this.numRuedas);
        console.log(" Velocidad Máxima: "+this.velocidadMaxima);
        console.log(" Velocidad Actual: "+this.velocidadActual);
        console.log(" Aceleración: "+this.aceleracion);
        console.log(" Desaceleracion: "+this.desaceleracion);
        console.log(" Encendida: "+this.encendida);
    }


}

let ciclomotor=new CicloMotor("Yamaha",50,15);
console.log("LA MOTO INICIALMENTE:");
ciclomotor.mostrarInfo();
console.log("LA MOTO TRAS ACELERAR:");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();