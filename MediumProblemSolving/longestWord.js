const getLongestWord = (str) => {
    let longest = str.split(' ').sort((a, b) => b.length - a.length);
    return longest[0];
}

console.log(getLongestWord('This is aaaaaa AAAAAA'))