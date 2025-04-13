import { CircularQueue } from "../dsa-implementations/data-structures/queue/circular-queue.js";

class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }

    next(val) {
        this.queue.push(val);
        this.sum += this.queue[this.queue.length-1];

        if (this.queue.length <= this.size) return this.sum / this.queue.length;

        this.sum -= this.queue.shift();
        return this.sum / this.size;
    }
}

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // return 1.0 = 1 / 1
console.log(movingAverage.next(10)); // return 5.5 = (1 + 10) / 2
console.log(movingAverage.next(3)); // return 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverage.next(5)); // return 6.0 = (10 + 3 + 5) / 3

// circular queue implementation

class MovingAverageCircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new CircularQueue(size + 1);
        this.sum = 0;
    }

    next(val) {
        this.queue.enQueue(val)
        this.sum += this.queue.Rear();

        if (!this.queue.isFull()) return this.sum / this.queue.size();

        this.sum -= this.queue.deQueue();
        return this.sum / this.size;
    }
}

const movingAverageCircularQueue = new MovingAverageCircularQueue(3);
console.log(movingAverageCircularQueue.next(1)); // return 1.0 = 1 / 1
console.log(movingAverageCircularQueue.next(10)); // return 5.5 = (1 + 10) / 2
console.log(movingAverageCircularQueue.next(3)); // return 4.66667 = (1 + 10 + 3) / 3
console.log(movingAverageCircularQueue.next(5)); // return 6.0 = (10 + 3 + 5) / 3