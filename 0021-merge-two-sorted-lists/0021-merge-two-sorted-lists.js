/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    let merged = new ListNode(0);
    let copy = merged;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            copy.next = list1;
            list1 = list1.next;
        } else {
            copy.next = list2;
            list2 = list2.next;
        }
        copy = copy.next;
    }
    if (list1 === null) copy.next = list2;
    else if (list2 === null) copy.next = list1;
    return merged.next
};