function cambiarCOntenido(a,b,c){
    a=a*10;
    b.item("cambiar");
    c= {item: "cambiar"};
}

var num=10;
var obj1={item: "inicial"};
var obj2={item: "inicial"};

cambiarCOntenido(num, obj1, obj2);

console.log(num+"<br>");
console.log(obj1.item+"<br>");
console.log(obj2.item+"<br>");