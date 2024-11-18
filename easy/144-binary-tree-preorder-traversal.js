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

const preorderTraversal = root => {
    if (!root) return [];

    const result = []
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right) { stack.push(node.right) }
        if (node.left) { stack.push(node.left) }
    }

    return result;
};

/* recursive implementation */
const preorderTraversalRecursive = (root, result = []) => {
    if (!root) return;

    result.push(root.val);
    if (root.left) preorderTraversalRecursive(root.left, result);
    if (root.right) preorderTraversalRecursive(root.right, result);
    
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
// output: [1, 2, 4, 5, 3]
console.log(preorderTraversal(root));
console.log(preorderTraversalRecursive(root));

// 2. skewed left-heavy binary tree
root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(3, 
            new TreeNode(4)
        )
    )
);
// output: [1, 2, 3, 4]
console.log(preorderTraversal(root));
console.log(preorderTraversalRecursive(root));

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
// output: [1, 2, 3, 4]
console.log(preorderTraversal(root));
console.log(preorderTraversalRecursive(root));

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
// output: [1, 2, 4, 3, 5]
console.log(preorderTraversal(root));
console.log(preorderTraversalRecursive(root));