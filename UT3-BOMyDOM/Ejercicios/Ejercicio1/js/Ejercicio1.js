let primerLi=document.getElementsByTagName("li");

let primero=primerLi[0];
while (primero!=null){
    console.log(primero.nodeName);
    console.log(primero.nodeType);
    console.log(primero.nodeValue);
    console.log(primero.textContent);
    primero=primero.nextElementSibling;
}