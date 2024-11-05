export class MyCircularQueue {
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