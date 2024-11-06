/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


// non-recursive implementation
const inorderTraversal = root => {
    if (!root) return [];
    
    const visited = new Map();
    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const root = stack[stack.length-1];
        if (root.left && !visited.has(root.left)) {
            stack.push(root.left);
            visited.set(root.left, true)
        } else {
            const popped = stack.pop();
            result.push(popped.val);
            if (root.right) { stack.push(root.right); }
        }
    }

    return result;
};