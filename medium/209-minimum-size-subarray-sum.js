// must use two ptr / sliding window approach
const minSubArrayLen = (target, nums) => {
    let i = 0;
    let k = 0;
    let currSubArrSum = nums[i];
    let minSubArrLen = Infinity;

    while (i < nums.length) {
        if (currSubArrSum >= target) {
            minSubArrLen = Math.min(minSubArrLen, i-k+1);
            currSubArrSum -= nums[k];
            k+=1;

        } else {
            currSubArrSum += nums[i+=1];
        }
    }

    return minSubArrLen === Infinity ? 0 : minSubArrLen;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3])) // output: 2
console.log(minSubArrayLen(4, [1,4,4])) // output: 1
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])) // output: 0
console.log(minSubArrayLen(11, [1,2,3,4,5])) // output: 3

// recursive implementation
const minSubArrayLenRecursive = (target, nums, i = 0, k = 0, currSubArrSum = nums[i], minSubArrLen = Infinity) => {
    if (i < nums.length) {
        if (currSubArrSum >= target) {
            minSubArrLen = Math.min(minSubArrLen, i-k+1);
            currSubArrSum -= nums[k];
            return minSubArrayLenRecursive(target, nums, i, k+1, currSubArrSum, minSubArrLen);

        } else {
            currSubArrSum += nums[i+=1];
            return minSubArrayLenRecursive(target, nums, i, k, currSubArrSum, minSubArrLen);
        }
    }

    return minSubArrLen === Infinity ? 0 : minSubArrLen;
}

console.log(minSubArrayLenRecursive(7, [2,3,1,2,4,3])) // output: 2
console.log(minSubArrayLenRecursive(4, [1,4,4])) // output: 1
console.log(minSubArrayLenRecursive(11, [1,1,1,1,1,1,1,1])) // output: 0
console.log(minSubArrayLenRecursive(11, [1,2,3,4,5])) // output: 3