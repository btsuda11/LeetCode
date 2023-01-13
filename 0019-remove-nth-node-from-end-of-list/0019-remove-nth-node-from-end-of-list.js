/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    let dummy = new ListNode(-1, head);
    let slow = dummy, fast = dummy;
    while (fast.next !== null) {
        if (n <= 0) slow = slow.next;
        fast = fast.next;
        n--;
    }
    slow.next = slow.next.next;
    return dummy.next;
};