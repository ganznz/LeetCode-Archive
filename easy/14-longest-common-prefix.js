const longestCommonPrefix = arr => {
    let currPrefix = arr[0];
    for (const val of arr) {
        if (currPrefix == "") break;
        while (currPrefix !== "" && val.slice(0, currPrefix.length) !== currPrefix) {
            currPrefix = currPrefix.slice(0, currPrefix.length - 1);
        }
    }
    return currPrefix;
}

longestCommonPrefix(["flower","flow","flight"]);
longestCommonPrefix(["dog","racecar","car"]);