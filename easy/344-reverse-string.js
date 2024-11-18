const reverseString = strArr => {
    for (let i = 0; i < Math.floor(strArr.length / 2); i++) {
        const temp = strArr[strArr.length-1-i];
        strArr[strArr.length-1-i] = strArr[i];
        strArr[i] = temp;
    }
    console.log(strArr);
}

/* recursive implementation */
const reverseStringRecursive = (strArr, currI = 0) => {
    if (currI >= strArr.length-(1+currI)) {
        return strArr;
    }
    const temp = strArr[strArr.length-(1+currI)];
    strArr[strArr.length-(1+currI)] = strArr[currI];
    strArr[currI] = temp;
    
    return reverseStringRecursive(strArr, currI+1);
}


reverseString(["h","e","l","l","o"]);
reverseString(["H","a","n","n","a","h"]);
console.log(reverseStringRecursive(["h","e","l","l","o"]));
console.log(reverseStringRecursive(["H","a","n","n","a","h"]));