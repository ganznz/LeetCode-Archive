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

    const recurse = root => {
        // if root has both children
        if (root.left && root.right) root.left.next = root.right;

        const findNextNode = node => {
            const nextNode = node.next;
            if (!nextNode) return undefined;
            if (nextNode.left) return nextNode.left;
            if (nextNode.right) return nextNode.right;
            return findNextNode(nextNode);
        }

        // if root has a sibling
        if (root.next) {
            const nextRoot = findNextNode(root);
            if (nextRoot && root.left && !root.left.next) root.left.next = nextRoot;
            if (nextRoot && root.right && !root.right.next) root.right.next = nextRoot;
        }
        
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

// root = new TreeNodeWithNext(1, 
//     new TreeNodeWithNext(2, 
//         new TreeNodeWithNext(4,
//             new TreeNodeWithNext(7),
//             null
//         ), 
//         new TreeNodeWithNext(5,
//             null,
//             null
//         )
//     ), 
//     new TreeNodeWithNext(3,
//         null,
//         new TreeNodeWithNext(6,
//             null,
//             new TreeNodeWithNext(8)
//         )
//     )
// );

root = new TreeNodeWithNext(2, 
    new TreeNodeWithNext(1,
        new TreeNodeWithNext(0,
            new TreeNodeWithNext(2)
        ),
        new TreeNodeWithNext(7,
            new TreeNodeWithNext(1),
            new TreeNodeWithNext(0,
                new TreeNodeWithNext(7)
            )
        )
    ), 
    new TreeNodeWithNext(3,
        new TreeNodeWithNext(9),
        new TreeNodeWithNext(1,
            new TreeNodeWithNext(8),
            new TreeNodeWithNext(8)
        )
    )
);

// root = new TreeNodeWithNext(1, 
//     new TreeNodeWithNext(2, 
//         new TreeNodeWithNext(4), 
//         null
//     ), 
//     new TreeNodeWithNext(3,
//         null,
//         new TreeNodeWithNext(5)
//     )
// );

connect(root);
console.log(root);