let prometoLimpiar = new Promise(function (resolve,reject) {
    //Se limpia la hab sería algo asincrono.

   let limpia = false;

    setTimeout(()=>{
        let limpiaFloat=Math.random();
        console.log(limpiaFloat);

        if (limpiaFloat>0.5){
            limpia=true;
            resolve("Está limpia");
        }else{
            reject("Sigue Sucia");
        }
    },1000);


});


function cuandoFunciona(valorDesdeResolve) {
    console.log(valorDesdeResolve);
}
function cuandoNoSeCumple(valorDesdeReject) {
    console.log(valorDesdeReject);
}

prometoLimpiar.then(cuandoFunciona).catch(cuandoNoSeCumple);