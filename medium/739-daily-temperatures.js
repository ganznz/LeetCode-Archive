// solved using a decreasing monotonic stack
const dailyTemperatures = temperatures => {
    const result = Array.from(temperatures, x => x = 0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length-1]] < temperatures[i]) {
            const currIndex = stack.pop();
            result[currIndex] = i-currIndex;
        }
        stack.push(i);
    }
    return result;
}

dailyTemperatures([73,74,75,71,69,72,76,73]) // [1,1,4,2,1,1,0,0]
dailyTemperatures([30,40,50,60]) // [1,1,1,0]
dailyTemperatures([30,60,90]) // [1,1,0]