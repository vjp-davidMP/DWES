let traerRestaurantes=new Promise(function (resolve, reject){
    let peticion=new XMLHttpRequest();
    peticion.addEventListener("readystatechange", function (evt) {
        if (this.readyState === 4){
            if (this.status === 200){
                let objeto=JSON.parse(this.responseText);
                resolve(objeto);
            }else {
                reject(this.status);
            }
        }
    })
    peticion.open("get","https://raw.githubusercontent.com/fredericsangar/backupOpendataCCJSON/master/restaurantes.json");
    peticion.send();
});


function cuandoFunciona(valorDesdeResolve) {
    console.log(valorDesdeResolve);
}
function cuandoNoSeCumple(valorDesdeReject) {
    console.log(valorDesdeReject);
}

traerRestaurantes.then(cuandoFunciona).catch(cuandoNoSeCumple);