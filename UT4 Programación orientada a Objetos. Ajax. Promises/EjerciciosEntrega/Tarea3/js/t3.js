'use strict';
let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
let direccion = "https://jsonplaceholder.typicode.com/posts";
peticionAjax.open("GET", direccion);
peticionAjax.send();

function procesarPeticion() {
    if (this.readyState == 4 && this.status == 200) {
        let objetoCaja = JSON.parse(this.responseText);
        console.log(objetoCaja);
        for (let objetoCajaElement of objetoCaja) {

            pintarPost(objetoCajaElement);
        }

    }
}

function pintarPost(objetoCaja) {
    console.log(objetoCaja);
    let contenedor = document.querySelector("#contenedorEntradas");

    let div = document.createElement("div");
    div.classList.add("entrada");
    div.innerHTML += `<p><strong>TITULO</strong>: ${objetoCaja.title}</p>
    <div>
        <p><strong>Contenido</strong>: ${objetoCaja.body}</p>
        <button class="mostrarUsuario">Usuario del Post</button>
        <button class="mostrarComentarios">Mostrar comentarios</button>
        <div class="usuario d-none">
            <p><strong>NOMBRE USUARIO: </strong><span class="nomUser"> Nombre</span></p>
        </div>
        <div class="comentarios d-none">
            <p><strong>Comentarios: </strong></p>
        </div>
   `;
    contenedor.appendChild(div);

    div.querySelector(".mostrarUsuario").addEventListener("click", function () {

            let cajaUsuario = div.querySelector(".usuario ");
            console.log(cajaUsuario);
            let usuario = div.querySelector(".usuario");
            console.log(usuario);
            if (usuario.className.includes("d-none")) {
                cargarUsuario(objetoCaja.userId, div);
                cajaUsuario.className = "usuario    ";
            } else {
                usuario.classList.toggle("d-none");
            }
        }
    );

    function cargarUsuario(userId, div) {

        let peticionAjax = new XMLHttpRequest();
        peticionAjax.addEventListener("readystatechange", procesarDatos);
        let cuarpo = "https://jsonplaceholder.typicode.com/users/";
        let id = userId;
        let url = cuarpo + id;
        peticionAjax.open("GET", url);
        peticionAjax.send();

        function procesarDatos(event) {

            if (this.readyState == 4 && this.status == 200) {
                let objeto = JSON.parse(this.responseText);
                console.log(objeto);
                procesarResultado(objeto, div);
            }
        }

        function procesarResultado(objeto, div) {

            let caja = div.querySelector(".nomUser");
            console.log(caja);
            caja.textContent = objeto.name;
        }
    }


    div.querySelector(".mostrarComentarios").addEventListener("click", function () {

            let cajaComentario = div.querySelector(".comentarios");
            console.log(cajaComentario);
            if (cajaComentario.className.includes("d-none")) {
                cargarComentarios(objetoCaja.id, div);
                cajaComentario.className = "comentarios ";
            } else {
                cajaComentario.classList.toggle("d-none");
            }

            function cargarComentarios(id, div) {
                let link = "https://jsonplaceholder.typicode.com/comments?postId=";
                let idRecibida = id;
                let urlCom = link + idRecibida;
                let peticionAjax = new XMLHttpRequest();
                peticionAjax.addEventListener("readystatechange", procesarDatosComentario);
                peticionAjax.open("GET", urlCom);
                peticionAjax.send();

            }

            function procesarDatosComentario(event) {


                if (this.readyState == 4 && this.status == 200) {
                    let objeto = JSON.parse(this.responseText);
                    console.log(objeto);
                    procesarResultadoComentario(objeto, div);
                }
            }

            function procesarResultadoComentario(objeto, div) {
                let comen=div.querySelector(".comentarios");
                comen.innerHTML="<p><strong>Comentarios: </strong></p>";
                for (let objetoElement of objeto) {
                    comen.innerHTML +="<p>- "+objetoElement.name+" </p>";
                }
            }


        }
    );
}
