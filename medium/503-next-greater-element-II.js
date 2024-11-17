const nextGreaterElements = nums => {
    const newNums = nums.concat(nums);
    const result = Array.from({ length: nums.length }, x => x = -1);
    const stack = [];
    for (let i = 0; i < newNums.length; i++) {
        while (stack.length && newNums[stack[stack.length-1]] < newNums[i]) {
            let curr = stack.pop() % nums.length;
            result[curr] = newNums[i];
        }
        stack.push(i);
    }
    return result;
}   

nextGreaterElements([1,2,1]) // [2,-1,2]
nextGreaterElements([1,2,3,4,3]) // [2,3,4,-1,4]