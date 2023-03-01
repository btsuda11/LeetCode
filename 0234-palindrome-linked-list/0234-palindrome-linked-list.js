/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {                     
    let curr = head;
    const arr = [];
    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }
    let i = 0, j = arr.length - 1;
    while (i < j) {
        if (arr[i] !== arr[j]) return false;
        i += 1;
        j -= 1;
    }
    return true;
};