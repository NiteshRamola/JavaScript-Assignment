const rmVowel = (s) => {
    return s.replace(/[aeiou]/gi,'');
}

console.log(rmVowel('Hello'))