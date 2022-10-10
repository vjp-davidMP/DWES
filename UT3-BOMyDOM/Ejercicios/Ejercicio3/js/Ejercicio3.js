function cambiarATwitter(primero){
    primero.setAttribute("id","aTwitter");
    primero.setAttribute("href","https://www.twitter.com");
    primero.textContent="Twitter";
    if(primero.hasAttribute("title")) {
        primero.title="Ir a Twitter";
        console.log(primero.title);
    }else {
        document.write("No tiene atributo twitter")
    }
}
let primero=document.querySelector("a");

console.log(cambiarATwitter(primero));