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
const reverseList = head => {
    const stack = [];
    while (head !== null) {
        stack.push(head.val);
        head = head.next;
    }
    const reversed = new ListNode(0);
    let list = reversed;
    while (stack.length !== 0) {
        list.next = new ListNode(stack.pop());
        list = list.next;
    }
    return reversed.next;
};