import Stack from "../ds-implementations/stack/stack.js"

const validParentheses = s => {
    const stack = new Stack()
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
        } else {
            if ((s[i] == ")" && stack.pop() == "(") || (s[i] == "}" && stack.pop() == "{") || (s[i] == "]" && stack.pop() == "[")) {
                continue;
            } else {
                return false;
            }
        }
    }
    return stack.isEmpty() ? true : false;
}

validParentheses("()"); // true
validParentheses("()[]{}"); // true
validParentheses("(]"); // false
validParentheses("([])"); // true
validParentheses("["); // false
validParentheses(")"); // false