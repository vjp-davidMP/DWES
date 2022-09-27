s1="esto es una cadena";

console.log(s1.length);// nos dice numero de caracteres que tiene la cadena
console.log(s1.charAt(0));// nos dice el caracter de la posicion que le pasemos.
console.log(s1.indexOf("es"));// busca la posicion del texto que le pases por parametros.
console.log(s1.lastIndexOf("es"));
console.log(s1.match(/.n/g));//buscamos las palabras que tengan una letra cualquiera seguida de una n.
console.log(s1.search(/[aeiou]/));//
console.log(s1.replace((/e/g, "i")));//cambia las e por las i
console.log(s1.slice(5,7));// corta la cadena desde la posicion 5 a la 7.
console.log(s1.substring(5,7));
console.log(s1.substr(5,7));
console.log(s1.toLocaleLowerCase());
console.log("Cadena     con   \t\t  espacios".trim());
console.log(s1.startsWith("esto"));
console.log(s1.includes("una"));
console.log("la".repeat(6));
console.log("\u{1f3c4}");