import { createLinkedList } from "../dsa-implementations/data-structures/linked-list/linked-list.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const swapPairs = head => {
    if (!head) return null;
    if (!head.next) return head;
    
    const recurse = head => {
        const nodeToAttachTo = (head.next && head.next.next) ? recurse(head.next.next) : null;
        
        // swap 'head' and 'node after head' around
        const newHead = head.next;
        head.next = nodeToAttachTo;
        if (newHead) newHead.next = head;

        return newHead || head;

    }
    return recurse(head);
};

console.log(swapPairs(createLinkedList([1,2,3])));
console.log(swapPairs(createLinkedList([1, 2, 3, 4, 5])));
console.log(swapPairs(createLinkedList([1])));