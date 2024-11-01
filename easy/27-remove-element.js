// remove in-place

const removeElement = (arr, val) => {
    let k = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[k] = arr[i];
            k++;
        }
    }
    return k;
}

removeElement([3,2,2,3], 3);
removeElement([0,1,2,2,3,0,4,2], 2);