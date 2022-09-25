// Prueba de un buche while.

console.log("\nPostIncremento");
let i=1;
while (i<5){
    console.log(i++);//postIncremento.
}

console.log("\nPreIncremento");
let j=1;
while (j<5){
    console.log(++j);//preincremento
}
// Prueba de un bucle do...while.
console.log("\nCon do...while");
let value=1;
do{
    console.log(value++);
}while (value<=5);


// Prueba de un bucle for.
console.log("\nCon un bucle for.");
for(let indice=0;indice<5;indice++){
    console.log(indice);
}

// Prueba inicializando varios for.

console.log("\nCon varios for inicializados");

for (let ind1=5,ind2=0;ind1>5 && ind2<5;ind1--,ind2++){
console.log(ind1+" --- "+ind2);
}