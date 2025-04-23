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

const hasPathSum = (root, targetSum) => {
    if (!root) return false;

    const recurse = (root, currSum=0) => {
        if (!root) return;

        const newVal = currSum + root.val;
        if (!root.left && !root.right && newVal == targetSum) return true;

        if(recurse(root.left, newVal)) return true;
        if(recurse(root.right, newVal)) return true;
        
        return false;
    }
    return recurse(root);
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
// output: true
console.log(hasPathSum(root, 8));

// 2. skewed left-heavy binary tree
root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(3, 
            new TreeNode(4)
        )
    )
);
// output: false
console.log(hasPathSum(root, 7));

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
// output: false
console.log(hasPathSum(root, 0));

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
// output: true
console.log(hasPathSum(root, 9));