// two ptr approach
const reverseString = strArr => {
    let i = 0;
    let j = strArr.length-1
    while (i < j) {
        [strArr[i], strArr[j]] = [strArr[j], strArr[i]]
        i++, j--
    }
    return strArr;
}

console.log(reverseString(["h", "e", "l", "l", "o"])) // output: [ 'o', 'l', 'l', 'e', 'h' ]

// recursive implementation
const reverseStringRecursive = (strArr, i = 0) => {
    if (i < Math.floor(strArr.length / 2)) {
        [strArr[i], strArr[strArr.length-i-1]] = [strArr[strArr.length-i-1], strArr[i]] ;
        reverseStringRecursive(strArr, i+1);
    }
    return strArr;
}

console.log(reverseStringRecursive(["h", "e", "l", "l", "o"]))  // output: [ 'o', 'l', 'l', 'e', 'h' ]