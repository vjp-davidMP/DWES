let array=[4,21,33,12,9,54];

console.log(array.reduce((min, num)=>num<min? num:min,array[0]));