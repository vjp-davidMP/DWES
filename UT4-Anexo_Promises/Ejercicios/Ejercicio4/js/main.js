class Museo{

    constructor(objetoPost) {
        this.nombre=objetoPost.rdfs_label;
        this.latitud=objetoPost.geo_lat;
        this.longitud=objetoPost.geo_long;
        this.url=objetoPost.schema_url;

    }
    //Que pintará por pantalla  del museo.
    getInfo(){
        return document.querySelector("#contenedorTabla").appendChild(this.getDivInfo());
    }
        //Que devolverá un div con la información del museo.
    getDivInfo(){
        return "<div class='museo'>" +
            "<table>" +
            "<thead>" +
            "<tr>" +this.nombre+ "</tr>" +
            "<tr>" +
            "<td>" + this.latitud+"</td>" +
            "<td>" + this.longitud+"</td>" +
            "<td>" +this.url +"</td>" +
            "</tr>" +
            "</thead>" +
            "</table>" +
            "</div>";
    }

}

let caja=document.getElementById("contenedorTabla");
let boton=document.getElementById("boton");

fetch("https://raw.githubusercontent.com/fsangar/backupOpendataCCJSON/master/museos.json").
then(response=>response.json())
.then(objJson=>{
    let museos=[];
    for (let museoObj of objJson.results.bindings) {
        museos.push(new Museo(museoObj))
    }
    return museos;
})
    .then(museos=>{
        for (let museo of museos) {
            caja.innerHTML+=(museo.getInfo())
        }
    }).catch(error=>console.log(error.message))

