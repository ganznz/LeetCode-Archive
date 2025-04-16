// monotonic decreasing stack approach

const dailyTemperatures = temps => {
    const result = Array.from(temps, x => 0);
    const stack = [];

    for (let i=0; i < temps.length; i++) {
        while (stack.length && temps[stack[stack.length-1]] < temps[i]) {
            const curr = stack.pop();
            result[curr] = i-curr;
        }
        stack.push(i);
    }
    return result;
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])) // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])) // [1,1,1,0]
console.log(dailyTemperatures([30,60,90])) // [1,1,0]