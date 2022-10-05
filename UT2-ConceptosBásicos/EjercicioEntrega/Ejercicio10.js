function comprobar(...arg){
    let resultado=0;
    for (let i=0;i<arg.length;i++) {
        if (typeof arg[i] != "string") {
            alert("Error");
        } else {
            let long = arg[i].length;
            resultado=resultado+long;
            console.log("La longitud total del parámetro"+i+" es: "+long);

        }

        //console.log(arg.reduce((resultado,long) => +resultado + +long,0));

    }
    console.log("El resultado total de la suma de las longitudes es: "+resultado);
}
let arg=["david","marina","2","truesdfadfa"];
comprobar(...arg);

