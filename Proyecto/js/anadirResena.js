let botonResena = document.querySelector("#anadir");
let cajaNombre = document.querySelector("#nombre");
let cajaMarca = document.querySelector("#marca");
let visita = document.querySelector("#visita");
let cajaDuracion = document.querySelector("#duracion");
let cajaRecomendacion = document.querySelector("#recomendacion");
let cajaMecanico = document.querySelector("#mecanico");
let cajaDescripcion = document.querySelector("#descripcion");
let cajaFecha=document.querySelector("#fecha");


botonResena.addEventListener("click", () => {
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

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(resena)
    };
    fetch('http://localhost:3000/opiniones', options)
        .then(data => {
            return data.json();
        }).then(resena => {
        console.log(resena);
            window.location.href="index.html";
    });
});

