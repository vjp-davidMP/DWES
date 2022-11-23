'use strict';


//Selectores:
let selectBarra = document.getElementById("selectorBarra");
let selectColor = document.getElementById("selectorColor");
let selectPorcentaje = document.getElementById("selectorPorcentaje");

//Botones:
let bCambiar = document.getElementById("cambiarAjustes");
let bResetear = document.getElementById("resetear");


//Barras: Sobre estos elementos hay que cambiar el estilo.
//Os recuerdo que los estilos están dentro de la propiedad "style" y se utilizan
//las mismas propiedades css pero sin "-" y siempre en minúsculasMayúsculas (camelCase).
//Por ejemplo, para cambiar el color de fondo de la barra1:
// barra1.style.backgroundColor="red";
let barra1 = document.getElementById("barra1");
let barra2 = document.getElementById("barra2");
let barra3 = document.getElementById("barra3");
let barra4 = document.getElementById("barra4");


//EVENTO PARA CAMBIAR ESTILOS BARRAS
bCambiar.addEventListener("click", function () {
    if (selectPorcentaje.value == "") {
        alert("Introduce un porcentaje para la barra entre 0% y 100%");
        console.log(selectPorcentaje.value);
    } else {
        if (selectBarra.value == 1) {
            //Para selecciona color
            if (selectColor.value === "red") {
                barra1.style.backgroundColor = selectColor.value;
            } else {
                if (selectColor.value === "green") {
                    barra1.style.backgroundColor = selectColor.value;
                } else {
                    if (selectColor.value === "blue") {
                        barra1.style.backgroundColor = selectColor.value;
                    } else {
                        if (selectColor.value === "yellow") {
                            barra1.style.backgroundColor = selectColor.value;
                        }
                    }
                }
            }
            if (selectPorcentaje.value > 100 || selectPorcentaje.value < 0) {
                alert("EL ANCHO DE LA BARRA TIENE QUE SER EN EL 0% Y 100%")
            } else {
                console.log(selectPorcentaje.value + "%");
                barra1.style.width = selectPorcentaje.value + "%";
            }
        }
        if (selectBarra.value == 2) {
            //Para selecciona color
            if (selectColor.value === "red") {
                barra2.style.backgroundColor = selectColor.value;
            } else {
                if (selectColor.value === "green") {
                    barra2.style.backgroundColor = selectColor.value;
                } else {
                    if (selectColor.value === "blue") {
                        barra2.style.backgroundColor = selectColor.value;
                    } else {
                        if (selectColor.value === "yellow") {
                            barra2.style.backgroundColor = selectColor.value;
                        }
                    }
                }
            }
            if (selectPorcentaje.value > 100 || selectPorcentaje.value < 0) {
                alert("EL ANCHO DE LA BARRA TIENE QUE SER EN EL 0% Y 100%")
            } else {
                console.log(selectPorcentaje.value + "%");
                barra2.style.width = selectPorcentaje.value + "%";
            }
        }
        if (selectBarra.value == 3) {
            //Para selecciona color
            if (selectColor.value === "red") {
                barra3.style.backgroundColor = selectColor.value;
            } else {
                if (selectColor.value === "green") {
                    barra3.style.backgroundColor = selectColor.value;
                } else {
                    if (selectColor.value === "blue") {
                        barra3.style.backgroundColor = selectColor.value;
                    } else {
                        if (selectColor.value === "yellow") {
                            barra3.style.backgroundColor = selectColor.value;
                        }
                    }
                }
            }
            if (selectPorcentaje.value > 100 || selectPorcentaje.value < 0) {
                alert("EL ANCHO DE LA BARRA TIENE QUE SER EN EL 0% Y 100%")
            } else {
                console.log(selectPorcentaje.value + "%");
                barra3.style.width = selectPorcentaje.value + "%";
            }
        }
        if (selectBarra.value == 4) {
            //Para selecciona color
            if (selectColor.value === "red") {
                barra4.style.backgroundColor = selectColor.value;
            } else {
                if (selectColor.value === "green") {
                    barra4.style.backgroundColor = selectColor.value;
                } else {
                    if (selectColor.value === "blue") {
                        barra4.style.backgroundColor = selectColor.value;
                    } else {
                        if (selectColor.value === "yellow") {
                            barra4.style.backgroundColor = selectColor.value;
                        }
                    }
                }
            }
            if (selectPorcentaje.value > 100 || selectPorcentaje.value < 0) {
                alert("EL ANCHO DE LA BARRA TIENE QUE SER EN EL 0% Y 100%")
            } else {
                console.log(selectPorcentaje.value + "%");
                barra4.style.width = selectPorcentaje.value + "%";
            }
        }
    }

});
//EVENTO PARA RESETEAR ESTILOS BARRAS
bResetear.addEventListener("click",function () {
    barra1.style.backgroundColor="grey";
    barra1.style.width="50%";
    barra2.style.backgroundColor="grey";
    barra2.style.width="50%";
    barra3.style.backgroundColor="grey";
    barra3.style.width="50%";
    barra4.style.backgroundColor="grey";
    barra4.style.width="50%";
});
//EVENTO PARA BORRAR ESTILOS MEDIANTE DOBLECLICK SOBRE LA BARRA

barra1.addEventListener("dblclick",function () {
    barra1.style.backgroundColor="grey";
    barra1.style.width="50%";
});
barra2.addEventListener("dblclick",function () {
    barra2.style.backgroundColor="grey";
    barra2.style.width="50%";
});
barra3.addEventListener("dblclick",function () {
    barra3.style.backgroundColor="grey";
    barra3.style.width="50%";
});
barra4.addEventListener("dblclick",function () {
    barra4.style.backgroundColor="grey";
    barra4.style.width="50%";
});
