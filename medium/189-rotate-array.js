// solve with O(1) space complexity
const rotate = (nums, k) => {
    nums.reverse();
    k = k % nums.length;
    let i = 0;
    let j = k-1;
    
    // reverse left of k
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }

    i=k
    j=nums.length-1;
    // reverse right of k
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    
    return nums;
}

console.log(rotate([1,2,3,4,5,6,7], 3)) // output: [7,6,5,4,3,2,1] --> [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)) // output: [3,99,-1,-100]
console.log(rotate([1,3,5], 5)) // output: [3,5,1]
console.log(rotate([1,2], 3)) // output: [2,1]
console.log(rotate([1,2,7,3,4,2], 8)) // output: [4,2,1,2,7,3]

