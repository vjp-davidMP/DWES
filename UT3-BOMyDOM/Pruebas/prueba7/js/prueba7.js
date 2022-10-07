let elementosP=document.getElementsByTagName("p");
let clave;
let cont=0;
for (clave of elementosP) {
    console.log(clave);
    cont++;
}
let elementos=document.getElementsByClassName("parrafos");
while (elementos!= null && elementos.length>0){
    elementos[0].remove();
    elementos=document.getElementsByClassName("parrafod")
}