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

const searchBST = (root, val) => {
    if (!root) return null;
    if (root.val === val) return root;

    // dfs search
    let result = searchBST(root.left, val);
    if (!result) result = searchBST(root.right, val);

    return result;
}

/*
    test cases
*/

let root = new TreeNode(1, 
    new TreeNode(2, 
        new TreeNode(4), 
        new TreeNode(5)
    ), 
    new TreeNode(3)
);
console.log(searchBST(2));

root = new TreeNode(4, 
    new TreeNode(2, 
        new TreeNode(1), 
        new TreeNode(3)
    ), 
    new TreeNode(7)
);
console.log(searchBST(1));