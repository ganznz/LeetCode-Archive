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


/* top-down implementation */
const maxDepthTopDown = root => {
    let answer = 0;
    if (!root) return answer; // if empty tree, return depth of 0

    const recurse = (root, currDepth) => {
        if (!root.left && !root.right) answer = Math.max(answer, currDepth);
        if (root.left) recurse(root.left, currDepth+1);
        if (root.right) recurse(root.right, currDepth+1);
    }
    recurse(root, answer);
    
    return answer + 1;
}

/* bottom-up implementation */
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