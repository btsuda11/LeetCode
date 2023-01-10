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
const deleteDuplicates = head => {
    if (!head) return head;
    let slow = head, fast = head, copy = slow;
    while (fast) {
        if (slow.val !== fast.val) {
            slow = slow.next;
            slow.val = fast.val;
        }
        fast = fast.next;
    }
    slow.next = null;
    return copy;
};