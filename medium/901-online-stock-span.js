class StockSpanner {
    constructor() {
        this.stack = [];
    }

    next = num => {
        const stack = Array.from(this.stack);
        let span = 1;

        for (let i = stack.length-1; i >= 0; i--) {
            while (stack.length && stack[stack.length-1] <= num) {
                stack.pop();
                span++;
            }
        }
        this.stack.push(num);
        return span;
    }
}


const stockSpanner = new StockSpanner();
stockSpanner.next(100);
stockSpanner.next(80);
stockSpanner.next(60);
stockSpanner.next(70);
stockSpanner.next(60);
stockSpanner.next(75);
stockSpanner.next(85);

// Input
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]
