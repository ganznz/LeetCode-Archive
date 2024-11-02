const reverseWordsInString = str => {
    const strArr = str.split(" ").filter(word => word !== '');
    let ptr1 = 0;
    let ptr2 = strArr.length-1;
    while (ptr1 < ptr2) {
        let temp = strArr[ptr1];
        strArr[ptr1++] = strArr[ptr2];
        strArr[ptr2--] = temp;
    }
    return strArr.join(" ");
}

/*
  without custom implementation:
  
  const reverseWordsInString = str => {
    const strArr = str.split(" ").filter(word => word !== '');
    let ptr1 = 0;
    let ptr2 = strArr.length-1;
    strArr.reverse().join(" ");
}
*/

reverseWordsInString("the sky is blue");
reverseWordsInString("  hello world  ");
reverseWordsInString("a good   example");