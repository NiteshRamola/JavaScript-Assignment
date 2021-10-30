function palindrome(str){
    if(str.toLowerCase() === str.toLowerCase().split('').reverse().join('')){
        return true;
    }
    return false;
}

console.log(palindrome('nitin'))