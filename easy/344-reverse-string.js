const reverseString = strArr => {
    for (let i = 0; i < Math.floor(strArr.length / 2); i++) {
        const temp = strArr[strArr.length-1-i];
        strArr[strArr.length-1-i] = strArr[i];
        strArr[i] = temp;
    }
    return strArr;
}

reverseString(["h","e","l","l","o"]);
reverseString(["H","a","n","n","a","h"]);