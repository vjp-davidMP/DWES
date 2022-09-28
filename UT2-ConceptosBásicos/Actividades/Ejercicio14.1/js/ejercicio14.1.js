let a=["Item1", "Item2", "Item3", "Item3"];
for (let index in a){
    console.log(a[index]);
}


let str="ab1c3de4fg";
for (let item of str){

if(item.match(/[aeiou]/)) {
    console.log(item);
}else{
    if(item.match(/[A-Z,a-z]/)){
        console.log(item);
    }
}
}