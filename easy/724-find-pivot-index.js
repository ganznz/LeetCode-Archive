const findPivotIndex = arr => {
    // O(n)
    let leftSum = 0;
    let rightSum = arr.reduce((acc, curr) => acc + curr);

    // O(n)
    for (let i = 0; i < arr.length; i++) {
        rightSum -= arr[i];
        if (i > 0) { leftSum += arr[i - 1] }
        if (leftSum == rightSum) { return i };
    }

    return -1;
}

console.log(findPivotIndex([1,7,3,6,5,6]))
console.log(findPivotIndex([1,2,3]))
console.log(findPivotIndex([2,1,-1]))
console.log(findPivotIndex([-1,-1,-1,-1,-1,0]))