class Jugador {
    constructor(objJugador) {
        this.id = objJugador.id;
        this.name=objJugador.first_name;
        this.apellido=objJugador.last_name;
        this.equipo=objJugador.team.full_name;
        this.peso=objJugador.weight_pounds;
        this.conferencia=objJugador.team.conference;
    }

    toDiv() {
        let contenedor = document.querySelector("#contenedorDatos");
        let div = document.createElement("div");
        div.classList.add("jugador");
        div.innerHTML = `
<div id="jugador">
        <h1>${this.name} ${this.apellido}</h1>
        <h3>${this.equipo}</h3>

        <div id="especificaciones">
            <ul>
                <li>Peso : ${peso(this.peso)} Ibs</li>
                <li>Conferencia: ${this.conferencia}</li>
            </ul>
        </div>
    </div>`;

        contenedor.appendChild(div);
        function peso(peso) {
            if(peso===null){
                peso=0;
                return peso;
            }else {
                return peso;
            }
        }
    }


}

fetch("https://www.balldontlie.io/api/v1/players/").
then(response => response.json()).
then(objJugador=>{
    let jugadores=[];
    console.log(objJugador.data);
    for (let jugador of objJugador.data) {
        console.log(jugador);
        jugadores.push(new Jugador(jugador));
    }
    return jugadores;
}).
then(jugadores=>{
    let cont=document.querySelector("#contenedorDatos");
    console.log(cont);
    for (let jugador of jugadores) {
        console.log(jugador);
        jugador.toDiv();
    }
}).catch(error=>console.log(error.message));

