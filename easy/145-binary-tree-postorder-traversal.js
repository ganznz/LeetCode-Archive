import { TreeNode } from "../dsa-implementations/data-structures/tree/treeNode.js";

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
const postorderTraversal = root => {
    if (!root) return [];

    const result = []
    const stack = [root];
    const visited = new Map();

    while (stack.length > 0) {
        const root = stack[stack.length-1];
        if ((root.left && !visited.has(root.left)) || (root.right && !visited.has(root.right))) {
            if (root.right && !visited.has(root.right)) {
                stack.push(root.right);
                visited.set(root.right, true);
            }
            if (root.left && !visited.has(root.left)) {
                stack.push(root.left);
                visited.set(root.left, true);
            }
        } else {
            const popped = stack.pop();
            result.push(popped.val);
        }
    }

    return result;
};

/* recursive implementation */
const postorderTraversalRecursive = (root, result = []) => {
    if (!root) return result;

    if (root.left) postorderTraversalRecursive(root.left, result);
    if (root.right) postorderTraversalRecursive(root.right, result);
    result.push(root.val);

    return result;
}

/*
    test cases
*/

// 1. complete binary tree
let root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(4), 
        new TreeNode(5)
    ), 
    new TreeNode(3)
);
// output: [4, 5, 2, 3, 1]
console.log(postorderTraversal(root));
console.log(postorderTraversalRecursive(root));

// 2. skewed left-heavy binary tree
root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(3, 
            new TreeNode(4)
        )
    )
);
// output: [4, 3, 2, 1]
console.log(postorderTraversal(root));
console.log(postorderTraversalRecursive(root));

// 3. skewed right-heavy binary tree
root = new TreeNode(1, 
    null, 
    new TreeNode(2, 
        null, 
        new TreeNode(3, 
            null, 
            new TreeNode(4)
        )
    )
);
// output: [4, 3, 2, 1]
console.log(postorderTraversal(root));
console.log(postorderTraversalRecursive(root));

// 4. random binary tree structure
root = new TreeNode(1, 
    new TreeNode(2, 
        null, 
        new TreeNode(4)
    ), 
    new TreeNode(3, 
        new TreeNode(5)
    )
);
// output: [4, 2, 5, 3, 1]
console.log(postorderTraversal(root));
console.log(postorderTraversalRecursive(root));