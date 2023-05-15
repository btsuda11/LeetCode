/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = (head, k) => {
    let start = head, end = head, dummy = head;
    let i = k, j = 0;
    let length = 0;
    while (dummy !== null) {
        dummy = dummy.next;
        length += 1;
    }
    while (i > 1) {
        start = start.next;
        i -= 1;
    }
    while (length - j > k) {
        end = end.next;
        j += 1
    }
    let temp = start.val
    let endVal = end.val;
    start.val = endVal;
    end.val = temp;
    return head;
};
