function f() {
    let elemento = document.querySelector("#contenedorGeneral");


    elemento.style.width = "200px";
    elemento.style.height = "200px";
    elemento.style.backgroundColor = "#9e9e9e";
    elemento.style.color = "blue";
    elemento.style.border = "1px solid red";

    window.addEventListener("resize", function () {
        elemento.innerText = window.innerWidth + " - " + window.innerHeight;
    });

}


document.addEventListener("DOMContentLoaded", f);

window.onbeforeunload = function () {
    return "Se cierra con un mensaje";
};