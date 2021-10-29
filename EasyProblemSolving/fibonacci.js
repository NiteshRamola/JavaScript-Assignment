let first = 0, second = 1;

console.log(first);
console.log(second);

for(i = 2; i<=15; i++){
    let sum = first + second;
    first = second;
    second = sum;
    console.log(sum)
}