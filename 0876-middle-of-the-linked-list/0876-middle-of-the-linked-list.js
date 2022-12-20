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
const middleNode = head => {
    const arr = [];
    let copy = head;
    while(copy !== null) {
        arr.push(copy.val);
        copy = copy.next;
    }
    const mid = Math.floor(arr.length / 2);
    let i = 0;
    while(i !== mid) {
        i++;
        head = head.next;
    }
    return head;
};