const usuarioUrl="https://jsonplaceholder.typicode.com/users/";
const postsUrl="https://jsonplaceholder.typicode.com/posts/"
document.addEventListener("DOMContentLoaded", ()=>{

     devolverPost(1,2,3,4,5,6);

});

async function devolverPost(...arg) {
    let arrayId=[];
    for (let argElement of arg) {
        let usuario= await devolverPostUni(argElement);
        console.log(usuario);
        arrayId.push(usuario);
    }
    console.log(arrayId);

    return arrayId;

}

function recogerTitulod() {

}
  function devolverPostUni(id) {

        let usuario = fetch(postsUrl+id).then(res=>res.json());
     console.log(usuario);
        return usuario;

}



