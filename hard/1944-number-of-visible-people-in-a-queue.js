// monotonic decreasing stack approach
const canSeePersonsCount = heights => {
    const result = Array.from(heights, x => x=0);
    const stack = [];

    for (let i=0; i<heights.length; i++) {
        while (stack.length && heights[stack[stack.length-1]] < heights[i]) {
            const curr = stack.pop();
            result[curr]+=1;
        }
        if (stack.length) {
            result[stack[stack.length-1]]+=1;
        }
        
        stack.push(i);
    }
    return result;
}

console.log(canSeePersonsCount([10,6,8,5,11,9])); // output: [3,1,2,1,1,0]
console.log(canSeePersonsCount([5,1,2,3,10])); // output: [4,1,1,1,0]