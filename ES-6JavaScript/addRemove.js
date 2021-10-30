let arr = [1,2,3,4]

function add(arr, el){
    arr[arr.length] = el;
    return arr;
}

function remove(arr){
    arr.splice(-1)
    return arr
}

// arr = add(arr, 9)

arr = remove(arr)

console.log(arr)
