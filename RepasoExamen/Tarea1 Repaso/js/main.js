var ordenador = {
    marca: "Gigabyte",
    placaBase: {
        codigo: "B234",
        socket: "socket",
        frecuencias: [
            "2200",
            "2600",
            "2800",
            "3300"
        ]
    },
    procesador: {
        socket: "socket_type",
        frecuencia: 2800
    },
    dispositivos: [
        {
            nombre: "Raton",
            precio: 29.99,
            conector: "USB"
        },
        {
            nombre: "Auriculares",
            precio: 100,
            conector: "Bluetooth"
        },
        {
            nombre:"Pantalla",
            precio:250,
            conector:"HDMI"
        }
    ],
    getInfo(){
        let cadena= "La marca del ordenador es: "+this.marca+"\n" +
            "tiene una placa base con codigo: "+this.placaBase.codigo+" \n" +
            "Socket: "+this.placaBase.socket+"\n"+
            "Frecuencia: "+this.placaBase.frecuencias+"\n" +
            "Y su procesador tiene un socket tipo: "+this.procesador.socket+"\n " +
            "Con frecuencia: "+this.procesador.frecuencia+"\n" +
            "Y tiene distintos dispositivos: \n";
       for (const dispositivo of this.dispositivos) {
            cadena+="Nombre: "+dispositivo.nombre+"\n" +
                "Precio: "+dispositivo.precio+"\n" +
                "Conector: "+dispositivo.conector+"\n";
        }
        return cadena;
    }
}

console.log(ordenador.getInfo());