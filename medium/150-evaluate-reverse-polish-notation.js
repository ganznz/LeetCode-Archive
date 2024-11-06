import Stack from "../ds-implementations/stack/stack.js";

const evaluateReversePolishNotation = arr => {
    const stack = new Stack();
    let operand1 = null;
    let operand2 = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/") {
            operand2 = parseInt(stack.pop());
            operand1 = parseInt(stack.pop());
            switch (arr[i]) {
                case "+":
                    stack.push(operand1 + operand2);
                    break;
                case "-":
                    stack.push(operand1 - operand2);
                    break;
                case "*":
                    stack.push(operand1 * operand2);
                    break;
                case "/":
                    operand1 / operand2 > 0
                        ? stack.push(Math.floor(operand1 / operand2))
                        : stack.push(Math.ceil(operand1 / operand2));
                    break;
            }
        } else {
            stack.push(arr[i]);
        }
    }

    return parseInt(stack.pop());
}

evaluateReversePolishNotation(["2","1","+","3","*"]); // 9
evaluateReversePolishNotation(["4","13","5","/","+"]); // 6
evaluateReversePolishNotation(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]); // 22
