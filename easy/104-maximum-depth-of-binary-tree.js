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

// top-down approach
const maxDepthTopDown = root => {
    if (!root) return 0;
    
    let ans = 1;
    const recurse = (root, depth) => {
        if (!root.left && !root.right) ans = Math.max(ans, depth);
        if (root.left) recurse(root.left, depth+1);
        if (root.right) recurse(root.right, depth+1);
    }
    recurse(root, ans);
    return ans;
}

// bottom-up approach
const maxDepthBottomUp = root => {
    if (!root) return 0;

    const leftDepth = maxDepthBottomUp(root.left);
    const rightDepth = maxDepthBottomUp(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
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
// output: 3
console.log(maxDepthTopDown(root));
console.log(maxDepthBottomUp(root));

// 2. skewed left-heavy binary tree
root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(3, 
            new TreeNode(4)
        )
    )
);
// output: 4
console.log(maxDepthTopDown(root));
console.log(maxDepthBottomUp(root));

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
// output: 4
console.log(maxDepthTopDown(root));
console.log(maxDepthBottomUp(root));

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
// output: 3
console.log(maxDepthTopDown(root));
console.log(maxDepthBottomUp(root));