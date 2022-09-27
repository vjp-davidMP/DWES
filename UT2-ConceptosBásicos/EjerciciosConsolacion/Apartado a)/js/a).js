
let resultado=0;
for(let i=1;i<4;i++){

    let num=prompt("Introduce el "+i+"º. numero.")
    console.log(typeof num);
    document.write("<p>EL "+i+"ª. numero es: "+num+"</p><br>");
    resultado=+resultado+ +num;
}
document.write("<br> La suma de los tres numeros introducidos es: "+resultado);
if(resultado==100){
    alert("Enhorabuena la suma de los tres numeros es igual a 100")
}else {
    document.write("<p>Oooh vayaa, la suma de los tres numeros introducidos no han sumado 100. :(<p>")
}