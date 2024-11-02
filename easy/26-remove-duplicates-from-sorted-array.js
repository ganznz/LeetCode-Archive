// remove dupes in-place

const removeDupesFromSortedArr = arr => {
    let seen = new Map();
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            seen.set(arr[i], true);
            arr[k] = arr[i];
            k++;
        }
    }
    return k;
}

removeDupesFromSortedArr([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])