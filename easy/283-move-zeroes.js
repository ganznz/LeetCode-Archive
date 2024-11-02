// move in-place

const moveZeroes = arr => {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[k];
            arr[k] = arr[i];
            arr[i] = temp;
            k++;
        }
    }
    return arr;
}

moveZeroes([0,1,0,3,12])
moveZeroes([0])