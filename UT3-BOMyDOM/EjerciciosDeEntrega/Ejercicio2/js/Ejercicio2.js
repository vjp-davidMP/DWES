function pasarNota() {
    let nota = document.querySelector("#nota");
    let espacio = document.querySelector("#notaIntroducida");
    let parrafo = document.createElement("p")
    console.log(nota.value);
    espacio.appendChild(parrafo);
    parrafo.innerText = nota.value;


    parrafo.addEventListener("click", eliminarNota);
    nota.focus();
    if (nota.value == "") {
        alert("No has introducido ninguna nota.")
    }

}

function eliminarNota() {
    let parrafo = document.querySelector("p");
    let pulsado = event.altKey;
    console.log(pulsado);
    if (pulsado == true) {

        if (this.style.backgroundColor == "") {
            this.style.backgroundColor = "red";
        } else {
            if (this.style.backgroundColor == "red") {
                this.style.backgroundColor = "";
            }
        }
    } else {

        this.remove();

    }

}


let boton = document.querySelector("#guardarNota");
boton.addEventListener("click", pasarNota);


