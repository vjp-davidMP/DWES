let persona={
    nombre: "Jesus",
    edad: 45,
    tlf: "61215458"
};

for (let campo in persona){
    console.log(campo+": "+persona[campo]);
}