export class ListNode {
    constructor(val, next) {
        this.val = val || undefined;
        this.next = next || null;
    }
}

/*
    helper func to create linked list from array
*/
export const createLinkedList = arr => {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0])
    let curr = head; // initialize with head

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}