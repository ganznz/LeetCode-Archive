/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     *this.left = (left===undefined ? null : left)
 *     *this.right = (right===undefined ? null : right)
 *     *this.next = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

class TreeNodeWithNext {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = null;
    }
}


// level-order traversal approach
const connect = root => {
    if (!root) return null;

    const recurse = (root) => {
        if (!root.left || !root.right) return;

        // connect nodes that are children of same parent
        root.left.next = root.right;    

        // connect the right node of left child to left node of right child
        if (root.next) root.right.next = root.next.left;

        recurse(root.left);
        recurse(root.right);
    }
    recurse(root);

    return root;
}

/*
    test cases
*/

// 1. complete binary tree
let root = new TreeNodeWithNext(1, 
    new TreeNodeWithNext(2, 
        new TreeNodeWithNext(4), 
        new TreeNodeWithNext(5)
    ), 
    new TreeNodeWithNext(3,
        new TreeNodeWithNext(6),
        new TreeNodeWithNext(7)
    )
);
connect(root);
console.log(root);