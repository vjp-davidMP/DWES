let botonResena = document.querySelector("#anadir");
let cajaNombre = document.querySelector("#nombre");
let cajaMarca = document.querySelector("#marca");
let modeloCoche = document.querySelector("#visita");
let cajaDuracion = document.querySelector("#duracion");
let cajaRecomendacion = document.querySelector("#recomendacion");
let cajaMecanico = document.querySelector("#mecanico");
let cajaDescripcion = document.querySelector("#descripcion");


botonResena.addEventListener("click", () => {
    console.log(cajaMecanico.value);
    let fecha = Date.now();
    let resena = {
        'id': cajaNombre.value,
        'modeloCoche': cajaMarca.value,
        'motivoVisita': modeloCoche.value,
        'duracionReparacion': cajaDuracion.value,
        'descripcionOpi': cajaDescripcion.value,
        'recomendariaServicios': cajaRecomendacion.value,
        'mecanicoAtendido': cajaMecanico.value,
        'fechaActual': fecha

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
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        }).then(resena => {
        console.log(resena);

    });
});

