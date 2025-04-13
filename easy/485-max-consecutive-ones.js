// must use two ptr approach
const findMaxConsecutiveOnes = nums => {
    let k = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            k=i+1;
        }
        max = Math.max(max, i-k+1);
    }
    return max;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // output: 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // output: 2

// recursive implementation
const findMaxConsecutiveOnesRecursive = (nums, i=0, k=0, max=0) => {
    if (i < nums.length) {
        if (nums[i] == 0) {
            k=i+1;
        }
        return findMaxConsecutiveOnesRecursive(nums, i+1, k, Math.max(max, i-k+1));
    }
    return max;

}

console.log(findMaxConsecutiveOnesRecursive([1,1,0,1,1,1])); // output: 3
console.log(findMaxConsecutiveOnesRecursive([1,0,1,1,0,1])); // output: 2