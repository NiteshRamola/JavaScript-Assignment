const arr = [2,4,6,8,2];

const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

console.log(findDuplicates(arr));