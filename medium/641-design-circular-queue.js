class MyCircularQueue {
    constructor(k) {
        this.queue = [];
        this.length = k;
        this.headI = -1; 
        this.tailI = -1;
    }

    isFull = () => {
        if (this.headI == -1 && this.tailI == -1 && this.length > 0) return false;
        return ((this.tailI + 1) % this.length) == this.headI % this.length;
    }
    
    isEmpty = () => {
        return this.headI == -1 && this.tailI == -1;
    }

    Front = () => {
        return this.isEmpty() ? -1 : this.queue[this.headI];
    }

    Rear = () => {
        return this.isEmpty() ? -1 : this.queue[this.tailI];
    }

    enQueue = val => {
        if (this.isFull()) return false;
        this.headI = this.headI == -1 ? 0 : this.headI;
        this.tailI = this.tailI == -1 ? 0 : (this.tailI + 1) % this.length;
        this.queue[this.tailI] = val;
        return true;
    }

    deQueue = () => {
        if (this.isEmpty()) return false;
        if (this.headI == this.tailI) {
             this.headI = -1;
             this.tailI = -1;
        } else {
            this.headI = (this.headI + 1) % this.length;
        }
    
        return true;
    }
}

const myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1));
console.log(myCircularQueue.enQueue(2));
console.log(myCircularQueue.enQueue(3));
console.log(myCircularQueue.enQueue(4));
console.log(myCircularQueue.Rear());
console.log(myCircularQueue.isFull());
console.log(myCircularQueue.deQueue()); 
console.log(myCircularQueue.enQueue(4));
console.log(myCircularQueue.Rear());
// [true, true, true, false, 3, true, true, true, 4]

const myCircularQueue2 = new MyCircularQueue(3);
console.log(myCircularQueue2.enQueue(6));
console.log(myCircularQueue2.Rear());
console.log(myCircularQueue2.Rear());
console.log(myCircularQueue2.deQueue());
console.log(myCircularQueue2.enQueue(5));
console.log(myCircularQueue2.Rear());
console.log(myCircularQueue2.deQueue());
console.log(myCircularQueue2.Front());
console.log(myCircularQueue2.deQueue());
console.log(myCircularQueue2.deQueue());
console.log(myCircularQueue2.deQueue());
// [true,6,6,true,true,5,true,-1,false,false,false]

const myCircularQueue3 = new MyCircularQueue(7);
console.log(myCircularQueue3.enQueue(0));
console.log(myCircularQueue3.Front());
console.log(myCircularQueue3.enQueue(4));
console.log(myCircularQueue3.Rear());
console.log(myCircularQueue3.enQueue(6));
console.log(myCircularQueue3.enQueue(3));
console.log(myCircularQueue3.Rear());
console.log(myCircularQueue3.deQueue());
console.log(myCircularQueue3.Front());
console.log(myCircularQueue3.deQueue());
console.log(myCircularQueue3.Front());
[true,0,true,4,true,true,3,true,4,true,6]

const myCircularQueue4 = new MyCircularQueue(1);
console.log(myCircularQueue4.enQueue(1));
console.log(myCircularQueue4.enQueue(2));
// [true,false]