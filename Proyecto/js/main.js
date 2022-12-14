let boton = document.querySelector("#botonRese");
let contenedor = document.querySelector("#cajaDatos");





class Resena {
    constructor(reseina) {
        this.id = reseina.id;
        this.modeloCoche = reseina.modeloCoche;
        this.motivoVisita = reseina.motivoVisita;
        this.duracionReparacion = reseina.duracionReparacion;
        this.descripcionOpi = reseina.descripcionOpi;
        this.recomendariaServicios = reseina.recomendariaServicios;
        this.mecanicoAtendido = reseina.mecanicoAtendido;
        this.fechaOpinion=reseina.fechaOpinion;

    }

    toDivVacio(){
        let div = document.createElement("div");
        div.setAttribute("class", "cajaPrincipal");
        contenedor.appendChild(div);

        div.innerHTML +="";
    }

    toDiv() {
        let div = document.createElement("div");
        div.setAttribute("class", "cajaPrincipal");
        contenedor.appendChild(div);

        div.innerHTML += `<div id="todo">
                <p>Fecha de la Reseña: ${this.fechaOpinion}</p>
        <div id="logoTaller">
            <i class="fa-solid fa-car"><br>Talleres Jofel</i>
        </div>
        <div id="texto">
            <p>Id: ${this.id}</p>
            <p>Modelo de Vehiculo: ${this.modeloCoche}</p>
            <p>Motivo de visita: ${this.motivoVisita}</p>
            <p>Duración Reparación: ${this.duracionReparacion}</p>
            <p>Valoracion: ${this.descripcionOpi}</p>
            <p>Recomendarias Servicios: ${this.recomendariaServicios}</p>
            <p>Mecanico: ${this.mecanicoAtendido}</p>
        </div>
        <button class="borrar">Borrar</button>
        <button class="editar">Editar</button>
        </div>`

        let botonBorrar = div.querySelector(".borrar");

        botonBorrar.addEventListener("click",()=>{
            console.log(this.id);
            if (confirm("¿Quiere borrar esta reseña?")===true){
                fetch("http://localhost:3000/opiniones/"+this.id, {
                    method: 'DELETE',
                }).catch(erro=>console.log(erro.message));
                div.remove();
            }
        });

        let botonEditar=div.querySelector(".editar");
        botonEditar.addEventListener("click",()=>{
     window.location.href="editar.html?id="+this.id;
        });
    }
}

let botonFiltrar=document.querySelector("#botonFiltrar");
let botonTodas=document.querySelector("#todas");

botonTodas.addEventListener("click",()=>{

    let div = document.createElement("div");
    div.setAttribute("class", "cajaPrincipal");
    contenedor.innerHTML ="";
    contenedor.appendChild(div);
    fetch("http://localhost:3000/opiniones").then(response => response.json()).then(opinionesJSON => {
        console.log(opinionesJSON);
        let arrayResena=[];
        for (let opinionesJSONElement of opinionesJSON) {
            arrayResena.push(new Resena(opinionesJSONElement));
        }
        return arrayResena;

    }).then(arrayResena=>{
        console.log(div);
        div.innerHTML="";
        for (let arrayResenaElement of arrayResena) {
            arrayResenaElement.toDiv();
        }
    })
        .catch(error => console.log(error.message));
});


function filtrar() {

    contenedor.innerHTML ="";
    let cajaFecha=document.querySelector("#cajaFiltro");
    let valor=Date.parse(cajaFecha.value);
    console.log(valor);
    fetch("http://localhost:3000/opiniones").then(response => response.json()).then(opinionesJSON => {
        console.log(opinionesJSON);
        let arrayResena=[];
        for (let opinionesJSONElement of opinionesJSON) {
            arrayResena.push(new Resena(opinionesJSONElement));
        }
        return arrayResena;

    }).then(arrayResena=>{
    let fechaResena="";
    let cont=0;
        let caja=contenedor.querySelector("#cajaDatos");
        for (let arrayResenaElement of arrayResena) {
            fechaResena=Date.parse(arrayResenaElement.fechaOpinion);
            console.log((valor-fechaResena)+"  "+cont);
            if (valor>fechaResena){
                console.log("es mayor");
                arrayResenaElement.toDiv();
                cont++;
            }
            else {
               if(cont>0){
                   caja.innerHTML="";
                   alert("No hay ninguna reseña con una fecha menor a la introducida.")

               }
                }
        }
    })
        .catch(error => console.log(error.message));


}
botonFiltrar.addEventListener("click",filtrar);