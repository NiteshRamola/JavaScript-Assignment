const checkStringsAnagram = (a, b) => {
    if(a.length !== b.length){
       console.log("False");
       return
    }
    let str1 = a.toLowerCase().split('').sort().join('');
    let str2 = b.toLowerCase().split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }

 checkStringsAnagram('Nitesh', 'einsHt')