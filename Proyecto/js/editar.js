let boton=document.querySelector("#editar");
let url = window.location.search
console.log(url);
let cajaNombre = document.querySelector("#nombre");
let cajaMarca = document.querySelector("#marca");
let visita = document.querySelector("#visita");
let cajaDuracion = document.querySelector("#duracion");
let cajaRecomendacion = document.querySelector("#recomendacion");
let cajaMecanico = document.querySelector("#mecanico");
let cajaDescripcion = document.querySelector("#descripcion");
let cajaFecha=document.querySelector("#fecha");

let params = new URLSearchParams(url);
let uri=params.get("id");
fetch("http://localhost:3000/opiniones/"+uri)
    .then(response=>response.json())
    .then(objJSON=>{
        console.log(objJSON);
    cajaNombre.value=objJSON.id;
    cajaMarca.value=objJSON.modeloCoche;
    visita.value=objJSON.motivoVisita;
    cajaDuracion.value=objJSON.duracionReparacion;
    cajaDescripcion.value=objJSON.descripcionOpi;
    cajaRecomendacion.value=objJSON.recomendariaServicios;
    cajaMecanico.value=objJSON.mecanicoAtendido;
    cajaFecha.value=objJSON.fechaOpinion;
}).catch(error=>console.log(error.message));
boton.addEventListener("click",()=>{
    let resena = {
        'id': cajaNombre.value,
        'modeloCoche': cajaMarca.value,
        'motivoVisita': visita.value,
        'duracionReparacion': cajaDuracion.value,
        'descripcionOpi': cajaDescripcion.value,
        'recomendariaServicios': cajaRecomendacion.value,
        'mecanicoAtendido': cajaMecanico.value,
        'fechaOpinion': cajaFecha.value
    };
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(resena)
    };
    fetch('http://localhost:3000/opiniones/'+cajaNombre.value, options)
        .then(data => {
            return data.json();
        }).then(resena => {
        console.log(resena)
        window.location.href="index.html";
    });
})