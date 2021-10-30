function binToDec(n){
    return parseInt(n,2)
}

function decToBin(n){
    return n.toString(2);
}

function decToOct(n){
    return n.toString(8);
}

function decToHex(n){
    return n.toString(16);
}

let num = 15;
let bin = 1111

console.log(`Binary to decimal of ${bin} is `, binToDec(bin) )
console.log(`Decimal to binary of ${num} is `, decToBin(num) )
console.log(`Decimal to octal of ${num} is `, decToOct(num) )
console.log(`Decimal to hexa of ${num} is `, decToHex(num) )
