arr = [1,2,3,4]

function multiplyBy(arr, mul){
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        arr2.push(arr[i]*mul);
    }
    console.log(arr2);
}

multiplyBy(arr,4)