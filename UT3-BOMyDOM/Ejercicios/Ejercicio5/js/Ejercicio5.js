let elemento=document.querySelector("#contenedorGeneral");

elemento.style.width="200px";
elemento.style.height="200px";
elemento.style.backgroundColor="#9e9e9e";
elemento.style.color="blue";
elemento.style.border="1px solid red";

document.addEventListener("resize",function (){
   elemento.textContent=window.innerWidth+" x "+window.innerHeight;
});

document.addEventListener("DOMContentLoaded",function (){

});