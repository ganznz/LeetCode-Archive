const arrayPartition = arr => {
    arr.sort((a, b) => a-b);
    const numOfPairs = arr.length / 2;
    let maxSum = 0;
    for (let i = 0; i < numOfPairs; i++) {
        // i*2 is the index increment per iteration
        maxSum += Math.min(arr[arr.length-1-(i*2)], arr[arr.length-1-(i*2+1)]);
    }
    return maxSum;
}

arrayPartition([1,4,3,2]);
arrayPartition([6,2,6,5,1,2]);