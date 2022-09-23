function calcularPrecioConImpuesto(valor, impuesto=valor/10) {//el valor por defecto del impuesto es 10
    return valor+impuesto;

}

console.log("Porudcto de 100€, sin entrada de impuestos: "+calcularPrecioConImpuesto(100));
console.log("Producto de 100€, con 30€ de impuestos: "+calcularPrecioConImpuesto(100,30));