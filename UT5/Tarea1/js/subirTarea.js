let boton=document.querySelector("#boton");


boton.addEventListener("click",subirDatos);


function subirDatos() {
    event.preventDefault();
    console.log("hola");
    let titulo=document.querySelector("#titulo").value;
    console.log(titulo);
    let descripcion=document.querySelector("#descripcion").value;
    console.log(descripcion);
    let estado=document.querySelector("#estado").value;
    console.log(estado);



    fetch('http://localhost:3000/tasks', {
        method: "POST",
        body: JSON.stringify(),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}