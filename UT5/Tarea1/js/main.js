let documento=document.querySelector("#placesContainer");



fetch("http://localhost:3000/tasks").
then(response=>response.json()).
then(datosJSON=>{

    for (let datosJSONElement of datosJSON) {
        console.log(datosJSONElement);
        documento.innerHTML+=`<div class="card">
            <div class="card-body">
                <h5 class="card-title">${datosJSONElement.titulo}</h5>
                <p class="card-text">${datosJSONElement.descripcion}</p>
            </div>
            <div class="card-footer">
                    <div class="card-text">
                        <p>
                           ${f(datosJSONElement.estado)} ${datosJSONElement.fecha_creacion}
                        </p>
                    </div>
            </div>
        </div>`
    }
}).catch(error=>console.log(error.message));


function f(text) {
    if (text==="pendiente"){
        return "<span class='badge badge-danger'>Pendiente</span>";
    }
    if (text==="haciendo"){
        return "<span class='badge badge-warning'>Haciendo</span>";
    }
    if (text==="completada"){
        return "<span class='badge badge-success'>Completada</span>";
    }
}




/*
*/