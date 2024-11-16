/*
    this algorithm uses a decreasing monotic stack which keeps track of the indices of elements
    that are smaller than the element that is currently being iterated over.

    this allows us to find when the next largest element occurs for every element on the stack by continually
    popping off indexes on the stack during the current iteration and applying the current index (first appearing larger element) to each
    of those popped off indexes.

    it is a 'decreasing' monotic stack because as we continue iterating, any smaller element remains in the stack.
*/
const nextGreater = arr => {
    const stack = []
    const result = Array.from(arr, x => x = -1);
    for (let i = 0; i < arr.length; i++) {
        // while element at top of stack is strictly smaller than current element
        while (stack.length !== 0 && arr[stack[stack.length-1]] < arr[i]) {
            const currIndex = stack.pop();
            result[currIndex] = i;
        }
        stack.push(i);
    }
    return result;
}

console.log(nextGreater([0,1,2,3,4,5])) // [1,2,3,4,5,-1]
console.log(nextGreater([0,4,2,1,7,4,10])) // [1,4,4,4,6,6,-1]
console.log(nextGreater([5,4,3,2,1,0])) // [-1,-1,-1,-1,-1,-1]


/*
    this algorithm uses an increasing monotic stack which keeps track of the indices of elements
    that are larger than the element that is currently being iterated over.

    this allows us to find when the next smallest element occurs for every element on the stack by continually
    popping off indexes on the stack during the current iteration and applying the current index (first appearing smaller element) to each
    of those popped off indexes.
*/
const nextSmaller = arr => {
    const stack = []
    const result = Array.from(arr, x => x = -1);
    for (let i = 0; i < arr.length; i++) {
        // while element at top of stack is strictly larger than current element
        while (stack.length !== 0 && arr[stack[stack.length-1]] > arr[i]) {
            const currIndex = stack.pop();
            result[currIndex] = i;
        }
        stack.push(i);
    }
    return result;
}

console.log(nextSmaller([0,1,2,3,4,5])) // [-1,-1,-1,-1,-1,-1]
console.log(nextSmaller([0,4,2,1,7,4,10])) // [-1,2,3,-1,5,-1,-1]
console.log(nextSmaller([5,4,3,2,1,0])) // [1,2,3,4,5,-1]