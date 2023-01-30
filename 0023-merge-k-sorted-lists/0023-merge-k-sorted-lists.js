/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeList = (a, b) => {
    let dummy = new ListNode(0);
    let curr = dummy;
    while (a && b) {
        if (a.val < b.val) {
            curr.next = a;
            a = a.next;
        } else {
            curr.next = b;
            b = b.next;
        }
        curr = curr.next;
    }
    a ? curr.next = a : curr.next = b;
    return dummy.next;
}

const mergeKLists = lists => {
    if (lists.length === 0) return null;
    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        lists.push(mergeList(a, b));
    }
    return lists[0];
};