class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty = () => {
        return this.stack.length == 0;
    }

    top = () => {
        return this.stack[this.stack.length-1];
    }

    push = val => {
        this.stack.push(val);
    }

    pop = () => {
        return this.stack.pop();
    }
}

export default Stack;