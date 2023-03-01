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



// 1. reverse the linked list
// 2. store the reversed version
// 3. iterate through the reversed and original version
// 4. compare each value at each node and if all are the same, return true
// 5. return false otherwise