// monotonic decreasing stack approach
const findBuildings = heights => {
    const stack = [];
    
    for (let i=0; i<heights.length; i++) {
        /*
        whenever we come across a building that is taller than whatever is at the top of the stack (and therefore, taller than every other building in the stack
        we pop all the smaller buildings from the stack, as this taller building [i] is taller than all previous buildings
        */
        while (stack.length && heights[stack[stack.length-1]] <= heights[i]) {
            stack.pop();
        }
        stack.push(i);
    }
    return stack;
}

console.log(findBuildings([4,2,3,1])); // output: [0,2,3]
console.log(findBuildings([4,3,2,1])); // output: [0,1,2,3]
console.log(findBuildings([1,3,2,4])); // output: [3]