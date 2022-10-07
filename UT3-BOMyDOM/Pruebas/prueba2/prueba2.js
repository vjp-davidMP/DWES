console.log("1. "+new Date().toString());
setTimeout(()=> console.log("2. "+new Date().toString()),5000);
console.log("3. "+new Date().toString());
let resp=prompt("¿Quieres para la funcion?")
function f(resp) {
    if (resp === "yes"){
        clearTimeout(2);
    }
}