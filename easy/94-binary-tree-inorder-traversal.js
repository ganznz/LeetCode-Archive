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

/* recursive implementation */
const inOrderRecursive = (root, result = []) => {
    if (!root) return [];

    if (root.left) inOrderRecursive(root.left, result);
    result.push(root.val);
    if (root.right) inOrderRecursive(root.right, result);
    
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
// output: [4, 2, 5, 1, 3]
console.log(inorderTraversal(root));
console.log(inOrderRecursive(root));

// 2. skewed left-heavy binary tree
root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(3, 
            new TreeNode(4)
        )
    )
);
// output: [4, 3, 2, 1]
console.log(inorderTraversal(root));
console.log(inOrderRecursive(root));

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
console.log(inorderTraversal(root));
console.log(inOrderRecursive(root));

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
// output: [2, 4, 1, 5, 3]
console.log(inorderTraversal(root));
console.log(inOrderRecursive(root));