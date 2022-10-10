let primero=document.querySelector("#div1 a:nth-of-type(1)");
console.log(primero.title);

let segundo=document.querySelector("div>a");
console.log(segundo);

let tercero=document.querySelector("#div1>p>a");
console.log(tercero);

let cuarto=document.querySelector(".linkNormal:nth-of-type(2)");
console.log(cuarto.href);

let quinto=document.querySelector(".linkNormal[title^=spider]");
console.log(quinto.nodeType+""+quinto.innerHTML);

let sexto=document.querySelector(".linkNormal a[title^=spider]");
console.log(sexto);

let septimo=document.querySelectorAll(".linkNormal");
for (let i = 0; i < septimo.length; i++) {
    console.log(septimo[i].title);
}


let octavo=document.querySelectorAll("#div1 a:nth-of-type(2+n), a[title=spiderman]~ a");
for (let octavoElement of octavo) {
    console.log(octavoElement.title);
}
