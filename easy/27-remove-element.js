// change in-place using two ptr approach
const removeElement = (nums, val) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k+=1;
        }
    }
    return k;
}

console.log(removeElement([3,2,2,3], 3)); // output: 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // output: 5

// recursive implementation
const removeElementRecursive = (nums, val, i=0, k=0) => {
    if (i < nums.length) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k+=1;
        }
        return removeElementRecursive(nums, val, i+1, k);
    }
    return k;
}

console.log(removeElementRecursive([3,2,2,3], 3)); // output: 2
console.log(removeElementRecursive([0,1,2,2,3,0,4,2], 2)); // output: 5
