'use strict';


class Post {


    constructor(objPost) {
        this.title = objPost.title;
        this.body = objPost.body;
        this.name = objPost.name;
        this.userId = objPost.userId;
    }




    toDiv(objPost) {

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
        </div>
        
   `;
        contenedor.appendChild(div);


        div.querySelector(".mostrarUsuario").addEventListener("click", function () {
            let cajaUsuario = div.querySelector(".usuario ");
            let usuario = div.querySelector(".usuario");
            if (usuario.className.includes("d-none")) {
                cargarUsuario(objPost,div);
                cajaUsuario.className = "usuario    ";
            } else {
                usuario.classList.toggle("d-none");
            }
        });

        function cargarUsuario(objPost,div) {
            let peticionAjax = new XMLHttpRequest();
            peticionAjax.addEventListener("readystatechange", procesarDatos);
            let cuarpo = "https://jsonplaceholder.typicode.com/users/";
            let id = objPost.userId;
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

            function procesarResultado(objPost, div) {

                let caja = div.querySelector(".nomUser");
                console.log(caja);
                caja.textContent = objPost.name;
            }
        }


        div.querySelector(".mostrarComentarios").addEventListener("click", function () {

                let cajaComentario = div.querySelector(".comentarios");
                console.log(cajaComentario);
                if (cajaComentario.className.includes("d-none")) {
                    cargarComentarios(objPost,div);
                    cajaComentario.className = "comentarios ";
                } else {
                    cajaComentario.classList.toggle("d-none");
                }

                function cargarComentarios(objPost, div) {
                    console.log(objPost);
                    let link = "https://jsonplaceholder.typicode.com/comments?postId=";
                    let idRecibida =objPost.userId;
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
                    let comen = div.querySelector(".comentarios");
                    comen.innerHTML = "<p><strong>Comentarios: </strong></p>";
                    for (let objetoElement of objeto) {
                        comen.innerHTML += "<p>- " + objetoElement.name + " </p>";
                    }
                }


            }
        );
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
            post.toDiv(post);

        }
    })
    .catch(error => console.log(error.message));


