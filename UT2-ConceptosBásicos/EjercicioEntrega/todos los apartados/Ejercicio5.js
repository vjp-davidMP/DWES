function ordenarArrays(array) {
    let num = 0;
    let sigNum;
    let aux;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let sigNum = array[j + 1];
            num=array[j];
            if (num<sigNum) {
                  aux=array[j];
                  array[j]=sigNum;
                  array[j+1]=aux;
            }
        }
    }
    console.log(array);
}

let array = [1, 5, 3, 6, 4, 8, 0, 12];

ordenarArrays(array);