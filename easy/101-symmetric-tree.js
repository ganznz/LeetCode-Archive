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

const isSymmetric = root => {
    if (!root) return true;

    const recurse = (rootLeft, rootRight) => {
        if (!rootLeft && !rootRight) return true; // if neither node exists, still symmetrical
        if (!rootLeft || !rootRight) return false; // if only 1 node exists, not symmetrical
        return rootLeft.val == rootRight.val && recurse(rootLeft.left, rootRight.right) && recurse(rootLeft.right, rootRight.left);
    }
    return recurse(root.left, root.right);
}

/*
    test cases
*/
let root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(2), 
        null
    ), 
    new TreeNode(2, 
        new TreeNode(2)
    )
);
// output: true
console.log(isSymmetric(root));

// 1. symmetric tree
root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(3), 
        new TreeNode(4)
    ), 
    new TreeNode(2, 
        new TreeNode(4), 
        new TreeNode(3)
    )
);
// output: true
console.log(isSymmetric(root));

// 2. symmetric tree with one node
root = new TreeNode(1);
// output: true
console.log(isSymmetric(root));

// 3. symmetric tree with null children
root = new TreeNode(1, 
    new TreeNode(2, null, null), 
    new TreeNode(2, null, null)
);
// output: true
console.log(isSymmetric(root));

// 4. non-symmetric tree
root = new TreeNode(1, 
    new TreeNode(2, 
        null, 
        new TreeNode(3)
    ), 
    new TreeNode(2, 
        null, 
        new TreeNode(4)
    )
);
// output: false (tree is not symmetric)
console.log(isSymmetric(root));

// 5. empty tree
root = null;
// output: true (an empty tree is symmetric)
console.log(isSymmetric(root));
