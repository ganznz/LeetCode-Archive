// monotonic decreasing stack approach #1
const nextGreaterElements = nums => {
    const extendedNums = nums.concat(nums);
    const result = Array.from(nums, x => -1);
    const stack = [];

    for (let i = 0; i < extendedNums.length; i++) {
        while (stack.length && extendedNums[stack[stack.length-1]] < extendedNums[i]) {
            const curr = stack.pop();
            result[curr % nums.length] = extendedNums[i];
        }
        stack.push(i);
    }

    return result;
}

console.log(nextGreaterElements([1,2,1])) // output: [2,-1,2]
console.log(nextGreaterElements([1,2,3,4,3])) // output: [2,3,4,-1,4]

// monotonic decreasing stack approach #2
const nextGreaterElements2 = nums => {
    const result = Array.from(nums, x => -1);
    const stack = [];

    for (let i = 0; i<nums.length*2; i++) {
        while (stack.length && nums[stack[stack.length-1]] < nums[i % nums.length]) {
            const curr = stack.pop();
            result[curr] = nums[i % nums.length];
        }
        stack.push(i % nums.length);
    }
    return result;
}

console.log(nextGreaterElements2([1,2,1])) // output: [2,-1,2]
console.log(nextGreaterElements2([1,2,3,4,3])) // output: [2,3,4,-1,4]

/*

both approaches have a time complexity of O(n) and space complexity of O(n).
for approach #1, extendedNums = O(2n). despite still being O(n) when disregarding constant factors, this approach still uses 2x more space than approach #2.

*/