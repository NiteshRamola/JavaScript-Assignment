function combination(s) {
    let allCombination = [];
    for(i=0; i<s.length; i++) {
        for(j=i+1; j<=s.length; j++) {
            allCombination.push(s.slice(i, j)); 
        }
    }
    return allCombination;
 }
 
console.log(combination('dog'))