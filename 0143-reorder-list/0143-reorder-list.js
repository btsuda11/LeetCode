/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = head => {
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null, curr = slow, temp;
    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    let first = head, second = prev, tmp;
    while (second.next) {
        tmp = first.next;
        first.next = second;
        first = tmp;
        
        tmp = second.next;
        second.next = first;
        second = tmp;
    }
    return head;
};