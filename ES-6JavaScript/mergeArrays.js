let array1 = [1, 2, 3, 30, 43, -1, 54];
let array2 = [2, 30, 1, 34, -1, 33];

let c = array1.concat(array2.filter((item) => array1.indexOf(item) < 0))

console.log(c)