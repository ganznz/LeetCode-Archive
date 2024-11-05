import Stack from "../ds-implementations/stack/stack.js";

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = new Stack();
    }

    push = val => {
        this.stack.push(val);
        if (this.minStack.isEmpty() || this.minStack.top() >= val) {
            this.minStack.push(val);
        }
    }

    pop = () => {
        if (this.minStack.top() == this.stack[this.stack.length - 1]) {
            this.minStack.pop()
        }
        this.stack.pop();
    }

    top = () => {
        return this.stack[this.stack.length - 1];
    }

    getMin = () => {
        return this.minStack.top();
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();
// Output
// [null,null,null,null,-3,null,0,-2]