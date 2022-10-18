function f() {
    let linea = document.querySelector("#contenedorGeneral");
    for (let i = 0; i < 10; i++) {
        let p = document.createElement("p");
        linea.appendChild(p);
        for (let j = 0; j < 10; j++) {
            let boton = document.createElement("button");
            boton.style.height = '25px';
            boton.style.margin = '5px';
            boton.style.width = '25px';
            boton.style.border = '1px solid black';
            boton.style.backgroundColor="lightgray";
            boton.style.backgroundColor = 'light  gray';
            boton.addEventListener("mousedown", cambiarColor);
            linea.appendChild(boton);


        }
    }
}

function cambiarColor() {
    let arrayColor = ["red", "blue", "green", "yellow"];
    console.log(event.button);
    console.log(arrayColor.length);
    if (event.button == 0) {
        let color = this.style.backgroundColor;
        console.log(color);
        let pos = arrayColor.indexOf(color);
        console.log(arrayColor[pos]);

        pos++;
        if (pos == arrayColor.length) {
            pos = 0;
        }

        let sigColor = arrayColor[pos];
        console.log(sigColor);

        this.style.backgroundColor = sigColor;

    }else{
        if(event.button==1){
            this.style.backgroundColor="lightgray";
        }else{
            let color2 = this.style.backgroundColor;
            console.log(color2);
            let pos = arrayColor.indexOf(color2);
            console.log(arrayColor[pos]);

            pos--;

            if (pos < 0) {
                pos = arrayColor.length-1;
            }
            let sigColor = arrayColor[pos];

            console.log(sigColor);

            this.style.backgroundColor = sigColor;
        }
    }


}

f();






