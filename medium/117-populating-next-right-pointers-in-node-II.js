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


const connect = root => {
    if (!root) return null;

    const findNextNode = root => {
        if (!root.next) return null;
        if (root.next.left) return root.next.left;
        if (root.next.right) return root.next.right;
        return findNextNode(root.next);
    }

    const recurse = root => {
        if (!root.left && !root.right) return;

        // if root has both children, left subtrees next is right subtree
        if (root.left && root.right) root.left.next = root.right;

        // otherwise, find next node
        const nextNode = findNextNode(root);
        if (root.left && !root.left.next) root.left.next = nextNode;
        if (root.right) root.right.next = nextNode;

        if (root.right) recurse(root.right);
        if (root.left) recurse(root.left);
    }
    recurse(root);

    return root;
}

/*
    test cases
*/

// 1. complete binary tree
let root = new TreeNodeWithNext(3, 
    new TreeNodeWithNext(9), 
    new TreeNodeWithNext(20,
        new TreeNodeWithNext(15),
        new TreeNodeWithNext(7)
    )
);

root = new TreeNodeWithNext(1,
    new TreeNodeWithNext(2,
        new TreeNodeWithNext(4,
            new TreeNodeWithNext(7),
            null
        ),
        new TreeNodeWithNext(5),
    ),
    new TreeNodeWithNext(3,
        null,
        new TreeNodeWithNext(6,
            null,
            new TreeNodeWithNext(8),
        ),
    ),
);

connect(root);
console.log(JSON.stringify(root));