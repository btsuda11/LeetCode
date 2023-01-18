/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

const flattenDFS = (prev, curr) => {
    if (!curr) return prev;
    curr.prev = prev;
    prev.next = curr;
    let tempNext = curr.next;
    let tail = flattenDFS(curr, curr.child);
    curr.child = null;
    return flattenDFS(tail, tempNext)
}

const flatten = head => {
    if (!head) return null;
    let pseudoHead = new Node(0, null, head, null);
    flattenDFS(pseudoHead, head);
    pseudoHead.next.prev = null
    return pseudoHead.next;
};