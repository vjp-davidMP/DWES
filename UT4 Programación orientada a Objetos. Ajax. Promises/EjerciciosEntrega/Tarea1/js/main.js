var discoMusica={
    titulo:"Thriller",
    autor:"Michael Jackson",
    anio_publicado:1982,
    num_Ventas:66000000,
    getInfo(){
        return "Título del disco: "+this.titulo+"\nAutor del disco: "+this.autor+"\nAño de salida del disco: "+this.anio_publicado+"\nNúmero de Ventas del disco: "+this.num_Ventas+" de ventas, siendo el album con mas ventas de la historia.";
    }
}
console.log(discoMusica);
console.log(discoMusica.getInfo());

var calleCiudad={
    nombre:"El egido",
    geo_long:-6.0499200,
    establecimientos:[
       {
            nombre:"Peluqueria Rizos"
        },
        {
            nombre:"Talleres Jofel"
        },
        {
            nombre:"Indhala"
        }
    ],
    getInfo() {

        return "Nombre de la calle: "+this.nombre+"\nLongitud de la calle en coordenadas: "+this.geo_long+"\nEstablecimientos de la calle: \n-"+this.establecimientos[0].nombre+"\n-"+this.establecimientos[1].nombre+"\n-"+this.establecimientos[2].nombre;
    }
}

console.log(calleCiudad);
console.log(calleCiudad.getInfo());

var dueño={
    nombre:"David Moreno Pajares",
    edad:19,
    getInfo(){
        return "El dueño del coche se llama: "+this.nombre+"\n Y tiene "+this.edad+" años."
    }
}

var marca={
    nombre:"Volkswagen",
    anio_creacion:1937,
    getInfo(){
        return "Nombre de la marca del coche: "+this.nombre+"\nY fue creada en el año: "+this.anio_creacion;
    }
}

var coche={
    modelo:"Golf MKIII",
    getInfo(){
        return  "El modelo del coche es un:"+this.modelo+"\n"+dueño.getInfo()+marca.getInfo();
    }

}


console.log(dueño.getInfo());
console.log(marca.getInfo());
console.log(coche.getInfo());