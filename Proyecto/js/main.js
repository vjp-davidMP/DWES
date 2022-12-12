let boton = document.querySelector("#botonRese");

function funcionAnadir() {
    let contenedor = document.querySelector("#cajaDatos");
    contenedor.innerHTML="";
    fetch("http://localhost:3000/opiniones").then(response => response.json()).then(opinionesJSON => {
        console.log(opinionesJSON);
        for (let opinionesJSONElement of opinionesJSON) {
            console.log(opinionesJSONElement);
            contenedor.innerHTML += `<div id="todo"><p>Fecha de la Reseña: ${opinionesJSONElement.fechaOpinion}</p>
        <div id="logoTaller">
            <i class="fa-solid fa-car"><br>Talleres Jofel</i>
        </div>
        <div id="texto">
            <p>Id: ${opinionesJSONElement.id}</p>
            <p>Modelo de Vehiculo: ${opinionesJSONElement.modeloCoche}</p>
            <p>Motivo de visita: ${opinionesJSONElement.motivoVisita}</p>
            <p>Duración Reparación: ${opinionesJSONElement.duracionReparacion}</p>
            <p>Valoracion: ${opinionesJSONElement.descripcionOpi}</p>
            <p>Recomendarias Servicios: ${opinionesJSONElement.recomendariaServicios}</p>
            <p>Mecanico: ${opinionesJSONElement.mecanicoAtendido}</p>
        </div>
        <button class="boton" id="borrar">Borrar</button>
        <button class="boton">Editar</button></div>`;
0
            let bBorrar=contenedor.querySelector("#borrar");
            let cuadro=contenedor.querySelector("#todo");
            bBorrar.addEventListener("click",()=>{
                let url="http://localhost:3000" +
                    "/opiniones"+opinionesJSONElement.id
                fetch(url, { method: 'DELETE' })
                    .then(() => cuadro.innerHTML = '');
            });
        }
    }).catch(error=>console.log(error.message));
}
boton.addEventListener("click",funcionAnadir);
console.log("hola");
