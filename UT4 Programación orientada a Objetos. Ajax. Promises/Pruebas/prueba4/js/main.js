let peticionAjax= new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET", "http://google.es");
peticionAjax.send();

function procesarPeticion() {
    if (this.readyState==4 && this.status == 200){
        console.log(this.responseText);
    }
}