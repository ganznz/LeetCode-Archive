import { CircularQueue } from "../ds-implementations/queue/circular-queue.js";

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
 * @return {number[][]}
 */

const levelOrder = root => {
    const visited = new Map(); // not necessary for level-order traversal, but its here for best practice
    const queue = new CircularQueue(2000) // CONSTRAINT: The number of nodes in the tree is in the range [0, 2000]
    const result = []
    
    if (!root) return result;

    queue.enQueue(root);
    while (!queue.isEmpty()) {
        const currLevel = []
        const queueSize = queue.size();

        for (let i = 0; i < queueSize; i++) {
            const root = queue.Front();
            currLevel.push(root.val);
            queue.deQueue();
            if (root.left && !visited.has(root.left)){
                queue.enQueue(root.left);
                visited.set(root.left, true);
            }
            if (root.right && !visited.has(root.right)){
                queue.enQueue(root.right);
                visited.set(root.right, true);
            }
        }

        result.push(currLevel);
    }

    return result;
};

console.log(levelOrder([3,9,20,null,null,15,7])); // [[3],[9,20],[15,7]]
console.log(levelOrder([])); // []