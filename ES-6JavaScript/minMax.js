let arr = [1,2,3,4,5,-9]

min = Math.min(...arr)
max = Math.max(...arr)

console.log(min,max)


// function minMax(arr){
//     let max = arr[0], min = arr[0];
//     for(let element of arr){
//         if(element > max){
//             max = element;
//         }
//         if(element < min){
//             min = element
//         }
//     }
//     console.log(min, max)
// }

// minMax([8, -1, 5, 11, 4])