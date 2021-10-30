let arr = [NaN, 0, 15, false, -22,'',undefined, 47, null]

function truthyFalsy(arr){
    let truthy = [], falsy= [];
    for (let value of arr){
        if(value){
            truthy.push(value)
        } else {
            falsy.push(value)
        }
    }
    return [truthy,falsy]
}

let values = truthyFalsy(arr)
let truthy = values[0]
let falsy = values[1];

console.log(truthy, falsy)
