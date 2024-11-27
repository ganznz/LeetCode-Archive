/**
 * @param {number} n
 * @return {number}
 */

/* recursive solution without memoization */
const fib = n => {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n-1) + fib(n-2);
}

/* recursive solution with memoization */
const fibMemo = n => {
    const cache = new Map();
    const recurse = n => {
        if (cache.has(n)) return cache.get(n);

        if (n < 2) {
            cache.set(n, n);
            return n;
        }

        const result = recurse(n-1) + recurse(n-2);
        cache.set(n, result);
        return result;
    }
    return recurse(n);
}

console.log(fib(0));
console.log(fibMemo(0));
console.log(fib(1));
console.log(fibMemo(1));
console.log(fib(2));
console.log(fibMemo(2));
console.log(fib(4));
console.log(fibMemo(4));
console.log(fib(6));
console.log(fibMemo(6));
console.log(fib(8));
console.log(fibMemo(8));
console.log(fib(10));
console.log(fibMemo(10));
console.log(fib(20));
console.log(fibMemo(20));