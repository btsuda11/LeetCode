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


// some sort of recursion 
// if curr pointer has a child, recursively flatten curr.child
// if curr pointer does not have a child, curr = curr.next
// loop thru while curr !== null

// recursive function
// rest = curr.next
// curr.next = curr.child
// within the child list, 
//     last element of child's next pointer to rest node
//     rest.prev = last element of the child
// curr.child = null