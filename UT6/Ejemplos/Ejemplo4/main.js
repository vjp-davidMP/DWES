localStorage.setItem("David","Marina");

for (let i = 0; i < localStorage.length; i++) {
    let key=localStorage.key(i);
    let value=localStorage.getItem(key);
    console.log(key+ " ---> "+value);
}