// two ptr approach
const twoSum = (numbers, target) => {
    let i = 0;
    let j = numbers.length-1;
    while (i < j && numbers[i] + numbers[j] !== target) {
        numbers[i] + numbers[j] < target ? i++ : j--;
    }
    return [i+1, j+1];
}

console.log(twoSum([2,3,4], 6)) // output: [ 1, 3 ]
console.log(twoSum([-1,0], -1)) // output: [ 1, 2 ]

// recursive implementation
const twoSumRecursive = (numbers, target, i=0, j=numbers.length-1) => {
    while (i < j && numbers[i] + numbers[j] !== target) {
        return numbers[i] + numbers[j] < target
            ? twoSumRecursive(numbers, target, i+1, j)
            : twoSumRecursive(numbers, target, i, j-1)
    }
    return [i+1, j+1];
}

console.log(twoSumRecursive([2,3,4], 6)) // output: [ 1, 3 ]
console.log(twoSumRecursive([-1,0], -1)) // output: [ 1, 2 ]