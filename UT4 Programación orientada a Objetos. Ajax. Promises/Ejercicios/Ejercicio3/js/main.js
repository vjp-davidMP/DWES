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

        if (this.encendida===true){
            this.velocidadActual+=this.aceleracion;
            if (this.velocidadActual>this.velocidadMaxima){
                this.velocidadActual=this.velocidadMaxima;
            }
        }
    }


    frenar() {
        if(this.encendida===true && this.velocidadActual-this.desaceleracion>=0){
            this.velocidadActual-=this.desaceleracion;
        }
    }

    conversionEncendido(){
        if (this.encendida===false){
            return "No";
        }else{
            return "Sí";
        }
    }

    mostrarInfo(){
        console.log(" ----- "+this.marca+" ----- ");
        console.log(" Número de ruedas: "+this.numRuedas);
        console.log(" Velocidad Máxima: "+this.velocidadMaxima);
        console.log(" Velocidad Actual: "+this.velocidadActual);
        console.log(" Aceleración: "+this.aceleracion);
        console.log(" Desaceleracion: "+this.desaceleracion);
        console.log(" Encendida: "+this.conversionEncendido());
    }


}

let ciclomotor=new CicloMotor("Yamaha",50,15);
console.log("LA MOTO INICIALMENTE:");
ciclomotor.mostrarInfo();
console.log("LA MOTO TRAS ACELERAR:");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR");
ciclomotor.arrancar();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("VOLVEMOS A ACELERAR:");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();

console.log("FRENAMOS LA MOTO:");
ciclomotor.frenar();
ciclomotor.mostrarInfo();

class motoCross extends CicloMotor{
    constructor(marca,aceleracion, desceleracion) {
        super(marca, aceleracion, desceleracion);
        this.velocidadMaxima=90;
        this.marchaActual=0;
    }

    arrancar() {
        super.arrancar();
        console.log("Se levanta la pata de cabra.")
    }

    acelerar() {
        super.acelerar();
        if(this.velocidadActual===0){
            this.marchaActual=0;
        }else {
            if(this.velocidadActual>0 && this.velocidadActual<=10){
                this.marchaActual=1;
            }else{
                if(this.velocidadActual>=10 && this.velocidadActual<30){
                    this.marchaActual=2;
                }else{
                    this.marchaActual=3;
                }
            }
        }
        return this.marchaActual;
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(" Marcha: "+this.marchaActual);
    }


}

console.log("\n\nPruebas de la moto de motoCross\n\n");

let motocross=new motoCross("Honda",10,5);
console.log("LA MOTO DE MOTOCROSS INICIALMENTE: ");
motocross.mostrarInfo();
console.log("LA MOTO TRAS ACELERAR: ");
motocross.acelerar();
motocross.mostrarInfo();
console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR: ");
motocross.arrancar();
motocross.acelerar();
motocross.mostrarInfo();

console.log("VOLVEMOS A ACELERAR: ");
motocross.acelerar();
motocross.mostrarInfo();

console.log("FRENAMOS LA MOTO: ");
motocross.frenar();
motocross.mostrarInfo();


class Scooter extends CicloMotor{
    constructor(marca) {
        super(marca);
        this.aceleracion=25;
        this.desaceleracion=15;
    }

    arrancar() {
        this.encendida=true;
        console.log("Se acerca la llave y se pulsa el boton, la moto arranca.");
    }


}

console.log("\n\nPruebas de la Scooter\n\n");
let scooter=new Scooter("Kymco");
console.log("LA MOTO SCOOTER INICIALMENTE: ");
scooter.mostrarInfo();

console.log("LA MOTO TRAS ACELERAR: ");
scooter.acelerar();
scooter.mostrarInfo();

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR: ");
scooter.arrancar();
scooter.acelerar();
scooter.mostrarInfo();

console.log("VOLVEMOS A ACELERAR: ");
scooter.acelerar();
scooter.mostrarInfo();

console.log("FRENAMOS LA MOTO: ");
scooter.frenar();
scooter.mostrarInfo();