'use strict';


class Post {


    constructor(objPost) {
        this.id = objPost.id;
        this.userId = objPost.userId;
        this.title = objPost.title;
        this.body = objPost.body;
    }


    toDiv() {

        let contenedor = document.querySelector("#contenedorEntradas");

        let div = document.createElement("div");
        div.classList.add("entrada");
        div.innerHTML += `<p><strong>TITULO</strong>: ${this.title}</p>
    <div>
        <p><strong>Contenido</strong>: ${this.body}</p>
        <button class="mostrarUsuario">Usuario del Post</button>
        <button class="mostrarComentarios">Mostrar comentarios</button>
        <div class="usuario d-none">
            <p><strong>NOMBRE USUARIO: </strong><span class="nomUser"> Nombre</span></p>
        </div>
        <div class="comentarios d-none">
            <p><strong>Comentarios: </strong></p>
        </div>`;

        let userId = this.userId;
        let id = this.id;
        console.log(id);
        div.querySelector(".mostrarUsuario").addEventListener("click", function () {

            let cajaUsuario = div.querySelector(".usuario ");
            let usuario = div.querySelector(".usuario");
            if (usuario.className.includes("d-none")) {
                cargarUsuario(userId, div);
                cajaUsuario.className = "usuario";
            } else {
                usuario.classList.toggle("d-none");
            }
        });
        div.querySelector(".mostrarComentarios").addEventListener("click", function () {

            let cajaComentario = div.querySelector(".comentarios");
            console.log(cajaComentario);
            if (cajaComentario.className.includes("d-none")) {
                console.log(id);
                console.log(div);
                cargarComentarios(id, div);
                cajaComentario.className = "comentarios ";
            } else {
                cajaComentario.classList.toggle("d-none");
            }
        });
        contenedor.appendChild(div);
    }
}

fetch("https://jsonplaceholder.typicode.com/posts")//Esta es la direccion de donde sacamos la informacion que necitamos para crear los objetos.
    .then(response => response.json())//Aqui creamos una variable llamada response
    // y la igualamos a si misma pero pasar objetos y no promesas
    .then(objJSON => {// Ahora le pasamos un objeto json para ver todos los obj que tienen en su interior
        let posts = [];             //Creamos un array donde almacenaremos todos los datos de los objetos que obtenidos del json
        for (let objElement of objJSON) {
            console.log(objElement);
            posts.push(new Post(objElement));//Los objetos que hemos obtenido del json los subimos al array que hemos creaado mediante un push
        }
        return posts;//retornamos el array
    })
    .then(posts => {
        let contenedor = document.querySelector("#contenedorEntradas");
        console.log(contenedor);
        for (let post of posts) {
            console.log(post);
            post.toDiv();
        }
    })
    .catch(error => console.log(error.message));


function cargarUsuario(id, div) {
    console.log(div);
    let cuarpo = "https://jsonplaceholder.typicode.com/users/";
    let url = cuarpo + id;
    fetch(url).then(response => response.json()).then(objJSON => {
        console.log(div);
        let caja = div.querySelector(".nomUser");
        caja.textContent = objJSON.name;
    });
}


function cargarComentarios(id, div) {
    let link = "https://jsonplaceholder.typicode.com/comments?postId=";
    let idRecibida = id;
    let urlCom = link + idRecibida;
    console.log(idRecibida);
    console.log(urlCom);
    fetch(urlCom).then(response => response.json()).then(objJSON => {
        let comen = div.querySelector(".comentarios");
        comen.innerHTML = "<p><strong>Comentarios: </strong></p>";
        for (let objetoElement of objJSON) {
            comen.innerHTML += "<p>- " + objetoElement.name + " </p>";
        }
    });

}



