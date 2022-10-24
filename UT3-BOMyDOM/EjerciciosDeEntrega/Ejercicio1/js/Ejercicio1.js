function validarFecha(){
   let boton= document.querySelector("#texto").value;
   console.log(boton);
   let regFecha=/^\d{2}[\/]\d{2}[\/]\d{4}|\d{2}$/;
   console.log(regFecha.test(boton));
   if(regFecha.test(boton)===false){
      alert("El formato de la fecha no es valido.");
   }else {
      alert("El formato de la fecha es valido.");
   }
}

function validarDni() {
   let boton= document.querySelector("#texto").value;
   let regDni=new RegExp("[0-9]{7,8}[A-Z]{1}$");
   console.log(regDni.test(boton.value));
   if(regDni.test(boton)===false){
      alert("El formato del DNI no es valido.");
   }else {
      alert("El formato del DNI es valido.");
   }
}

function validarIdentificador() {
   let boton= document.querySelector("#texto").value;
   let regIden=new RegExp("^[a-z]|[_]{1}");
   console.log(regIden.test(boton));
   if(regIden.test(boton)===false){
      alert("El formato del iden no es valido.");
   }else {
      alert("El formato del iden es valido.");
   }
}


let dni=document.querySelector("#dni");
dni.addEventListener("click", validarDni);

let fecha=document.querySelector("#fecha");
fecha.addEventListener("click", validarFecha);

let iden=document.querySelector("#iden");
iden.addEventListener("click", validarIdentificador);